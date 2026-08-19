"use strict";
n.d(t, { Cx: () => a, Xb: () => l, k7: () => o });
var i = n(4511),
    r = n(731854);
let a = Object.freeze({ [r.K3.AUTO]: {}, [r.K3.FULL]: { encode: { width: 1280, height: 720 } } });
class s {
    capture;
    encode;
    bitrateMin;
    bitrateMax;
    bitrateTarget;
    localWant;
    constructor(e) {
        if (null == e.capture && null == e.encode) throw Error("Invalid arguments.");
        (this.capture = null == e.capture ? void 0 : new l(e.capture)),
            (this.encode = null == e.encode ? void 0 : new l(e.encode)),
            (this.bitrateMin = e.bitrateMin),
            (this.bitrateMax = e.bitrateMax),
            (this.bitrateTarget = e.bitrateTarget),
            (this.localWant = e.localWant);
    }
}
class l {
    width;
    height;
    framerate;
    pixelCount;
    constructor(e) {
        (this.width = e.width),
            (this.height = e.height),
            (this.framerate = e.framerate),
            (this.pixelCount = e.width * e.height);
    }
    static equals(e, t) {
        return (
            (null == e && null == t) ||
            (null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate)
        );
    }
    static extend(e, t) {
        if (null == e) return t;
        if (null == t) return e;
        let n = t?.width ?? e?.width ?? 0,
            i = t?.height ?? e?.height ?? 0;
        return { width: n, height: i, framerate: t?.framerate ?? e?.framerate, pixelCount: n * i };
    }
}
class o {
    contextType;
    connection;
    options;
    isMuted = !1;
    qualityOverwrite;
    goliveMaxQuality;
    isStreamContext;
    ladder;
    lastGoLivePixelCount;
    constructor(e, t, n = r.eQ) {
        (this.contextType = e),
            (this.connection = t),
            (this.options = n),
            (this.isStreamContext = this.contextType === r.x.STREAM),
            (this.ladder = new i.r(n)),
            (this.goliveMaxQuality = this.getDefaultGoliveQuality()),
            (this.lastGoLivePixelCount = {});
    }
    getQuality(e) {
        let t = this.connection.getLocalWant(e),
            n = 0;
        if (null != e) {
            let t = this.connection.getRemoteVideoSinkPixelCount(e);
            if (null != this.lastGoLivePixelCount[e] && this.lastGoLivePixelCount[e] > 0) {
                let i = t / this.lastGoLivePixelCount[e];
                n = i > 1.05 || i < 0.95 ? t : this.lastGoLivePixelCount[e];
            } else n = t;
            this.lastGoLivePixelCount[e] = n;
        }
        let i = this.isStreamContext ? this.getGoliveQuality(t, n) : this.getVideoQuality(t);
        return null != this.qualityOverwrite
            ? new s({
                  encode: l.extend(i.encode, this.qualityOverwrite.encode),
                  capture: l.extend(i.capture, this.qualityOverwrite.capture),
                  bitrateMin: this.qualityOverwrite.bitrateMin ?? i.bitrateMin,
                  bitrateMax: this.qualityOverwrite.bitrateMax ?? i.bitrateMax,
                  bitrateTarget: this.qualityOverwrite.bitrateTarget ?? i.bitrateTarget,
                  localWant: i.localWant,
              })
            : i;
    }
    applyQualityConstraints(e, t) {
        let n = this.getQuality(t);
        return (
            null != n.capture &&
                ((e.encodingVideoWidth = n.capture.width),
                (e.encodingVideoHeight = n.capture.height),
                (e.encodingVideoFrameRate = n.capture.framerate),
                (e.captureVideoFrameRate = n.capture.framerate)),
            null != n.encode &&
                ((e.remoteSinkWantsMaxFramerate = n.encode.framerate),
                (e.remoteSinkWantsPixelCount = n.encode.pixelCount)),
            null != n.bitrateTarget
                ? (e.encodingVideoBitRate = n.bitrateTarget)
                : (e.encodingVideoBitRate = n.bitrateMax),
            (e.encodingVideoMinBitRate = n.bitrateMin),
            (e.encodingVideoMaxBitRate = n.bitrateMax),
            null != e.encodingVideoBitRate &&
                null != e.encodingVideoMaxBitRate &&
                (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)),
            { quality: n, constraints: e }
        );
    }
    setQualityOverwrite(e) {
        this.qualityOverwrite = e;
    }
    setGoliveQuality(e) {
        this.goliveMaxQuality = new s({
            capture: l.extend(this.goliveMaxQuality.capture, e.capture),
            encode: l.extend(this.goliveMaxQuality.encode, e.encode),
            bitrateMin: e.bitrateMin ?? this.goliveMaxQuality.bitrateMin,
            bitrateMax: e.bitrateMax ?? this.goliveMaxQuality.bitrateMax,
            bitrateTarget: e.bitrateTarget ?? this.goliveMaxQuality.bitrateTarget,
            localWant: this.goliveMaxQuality.localWant,
        });
    }
    getVideoQuality(e) {
        let t = this.ladder.getResolution(e),
            n = this.options.videoBitrate.min * t.budgetPortion,
            i = this.options.videoBitrate.max * t.budgetPortion,
            r = this.isMuted ? t.mutedFramerate : t.framerate;
        return new s({
            encode: { ...t, framerate: r },
            capture: {
                width: this.options.videoCapture.width,
                height: this.options.videoCapture.height,
                framerate: this.options.videoCapture.framerate,
            },
            bitrateMin: Math.max(n, this.options.videoBitrateFloor),
            bitrateMax: Math.max(i, this.options.videoBitrateFloor),
            localWant: e,
        });
    }
    scaleLinearly(e, t, n) {
        return 0 === t ? 0 : (e * n) / t;
    }
    getGoliveQuality(e, t) {
        if (
            this.goliveMaxQuality.encode?.pixelCount === void 0 ||
            t >= this.goliveMaxQuality.encode.pixelCount ||
            t <= 0
        )
            return this.goliveMaxQuality;
        let n = Math.min(
                r.YU * this.goliveMaxQuality.encode.pixelCount * this.goliveMaxQuality.encode.framerate,
                this.goliveMaxQuality.bitrateMax,
            ),
            i = this.scaleLinearly(t, this.goliveMaxQuality.encode.pixelCount, this.goliveMaxQuality.bitrateMin),
            a = this.scaleLinearly(t, this.goliveMaxQuality.encode.pixelCount, this.goliveMaxQuality.bitrateMax),
            l =
                null != this.goliveMaxQuality.bitrateTarget
                    ? this.scaleLinearly(
                          t,
                          this.goliveMaxQuality.encode.pixelCount,
                          this.goliveMaxQuality.bitrateTarget,
                      )
                    : void 0;
        return new s({
            encode: this.goliveMaxQuality.encode,
            capture: this.goliveMaxQuality.capture,
            bitrateMin: Math.max(Math.ceil(i), this.options.videoBitrateFloor),
            bitrateMax: Math.max(Math.ceil(a), n),
            bitrateTarget: null != l ? Math.max(Math.ceil(l), this.options.videoBitrateFloor) : void 0,
            localWant: e,
        });
    }
    getDefaultGoliveQuality() {
        return new s({
            capture: { width: 1280, height: 720, framerate: r.sG },
            encode: { width: 1280, height: 720, framerate: r.sG, pixelCount: 921600 },
            bitrateMin: this.options.desktopBitrate.min,
            bitrateMax: this.options.desktopBitrate.max,
            bitrateTarget: this.options.desktopBitrate.target,
        });
    }
}
