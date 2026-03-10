"use strict";
n.d(t, { Cx: () => s, Xb: () => o, k7: () => l });
var r = n(4511),
    i = n(731854);
let s = Object.freeze({ [i.K3.AUTO]: {}, [i.K3.FULL]: { encode: { width: 1280, height: 720 } } });
class a {
    capture;
    encode;
    bitrateMin;
    bitrateMax;
    bitrateTarget;
    localWant;
    constructor(e) {
        if (null == e.capture && null == e.encode) throw Error("Invalid arguments.");
        (this.capture = null == e.capture ? void 0 : new o(e.capture)),
            (this.encode = null == e.encode ? void 0 : new o(e.encode)),
            (this.bitrateMin = e.bitrateMin),
            (this.bitrateMax = e.bitrateMax),
            (this.bitrateTarget = e.bitrateTarget),
            (this.localWant = e.localWant);
    }
}
class o {
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
            r = t?.height ?? e?.height ?? 0;
        return { width: n, height: r, framerate: t?.framerate ?? e?.framerate, pixelCount: n * r };
    }
}
class l {
    contextType;
    connection;
    options;
    isMuted = !1;
    qualityOverwrite;
    goliveMaxQuality;
    isStreamContext;
    ladder;
    lastGoLivePixelCount;
    constructor(e, t, n = i.eQ) {
        (this.contextType = e),
            (this.connection = t),
            (this.options = n),
            (this.isStreamContext = this.contextType === i.x.STREAM),
            (this.ladder = new r.r(n)),
            (this.goliveMaxQuality = this.getDefaultGoliveQuality()),
            (this.lastGoLivePixelCount = {});
    }
    getQuality(e) {
        let t = this.connection.getLocalWant(e),
            n = 0;
        if (null != e) {
            let t = this.connection.getRemoteVideoSinkPixelCount(e);
            if (null != this.lastGoLivePixelCount[e] && this.lastGoLivePixelCount[e] > 0) {
                let r = t / this.lastGoLivePixelCount[e];
                n = r > 1.05 || r < 0.95 ? t : this.lastGoLivePixelCount[e];
            } else n = t;
            this.lastGoLivePixelCount[e] = n;
        }
        let r = this.isStreamContext ? this.getGoliveQuality(t, n) : this.getVideoQuality(t);
        return null != this.qualityOverwrite
            ? new a({
                  encode: o.extend(r.encode, this.qualityOverwrite.encode),
                  capture: o.extend(r.capture, this.qualityOverwrite.capture),
                  bitrateMin: this.qualityOverwrite.bitrateMin ?? r.bitrateMin,
                  bitrateMax: this.qualityOverwrite.bitrateMax ?? r.bitrateMax,
                  bitrateTarget: this.qualityOverwrite.bitrateTarget ?? r.bitrateTarget,
                  localWant: r.localWant,
              })
            : r;
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
        this.goliveMaxQuality = new a({
            capture: o.extend(this.goliveMaxQuality.capture, e.capture),
            encode: o.extend(this.goliveMaxQuality.encode, e.encode),
            bitrateMin: e.bitrateMin ?? this.goliveMaxQuality.bitrateMin,
            bitrateMax: e.bitrateMax ?? this.goliveMaxQuality.bitrateMax,
            bitrateTarget: e.bitrateTarget ?? this.goliveMaxQuality.bitrateTarget,
            localWant: this.goliveMaxQuality.localWant,
        });
    }
    getVideoQuality(e) {
        let t = this.ladder.getResolution(e),
            n = this.options.videoBitrate.min * t.budgetPortion,
            r = this.options.videoBitrate.max * t.budgetPortion,
            i = this.isMuted ? t.mutedFramerate : t.framerate;
        return new a({
            encode: { ...t, framerate: i },
            capture: {
                width: this.options.videoCapture.width,
                height: this.options.videoCapture.height,
                framerate: this.options.videoCapture.framerate,
            },
            bitrateMin: Math.max(n, this.options.videoBitrateFloor),
            bitrateMax: Math.max(r, this.options.videoBitrateFloor),
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
                i.YU * this.goliveMaxQuality.encode.pixelCount * this.goliveMaxQuality.encode.framerate,
                this.goliveMaxQuality.bitrateMax,
            ),
            r = this.scaleLinearly(t, this.goliveMaxQuality.encode.pixelCount, this.goliveMaxQuality.bitrateMin),
            s = this.scaleLinearly(t, this.goliveMaxQuality.encode.pixelCount, this.goliveMaxQuality.bitrateMax),
            o =
                null != this.goliveMaxQuality.bitrateTarget
                    ? this.scaleLinearly(
                          t,
                          this.goliveMaxQuality.encode.pixelCount,
                          this.goliveMaxQuality.bitrateTarget,
                      )
                    : void 0;
        return new a({
            encode: this.goliveMaxQuality.encode,
            capture: this.goliveMaxQuality.capture,
            bitrateMin: Math.max(Math.ceil(r), this.options.videoBitrateFloor),
            bitrateMax: Math.max(Math.ceil(s), n),
            bitrateTarget: null != o ? Math.max(Math.ceil(o), this.options.videoBitrateFloor) : void 0,
            localWant: e,
        });
    }
    getDefaultGoliveQuality() {
        return new a({
            capture: { width: 1280, height: 720, framerate: i.sG },
            encode: { width: 1280, height: 720, framerate: i.sG, pixelCount: 921600 },
            bitrateMin: this.options.desktopBitrate.min,
            bitrateMax: this.options.desktopBitrate.max,
            bitrateTarget: this.options.desktopBitrate.target,
        });
    }
}
