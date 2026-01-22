n.d(t, {
    Cx: () => c,
    Xb: () => d,
    k7: () => f,
}),
    n(65821);
var r = n(4511),
    i = n(731854);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = Object.freeze({
    [i.K3.AUTO]: {},
    [i.K3.FULL]: {
        encode: {
            width: 1280,
            height: 720,
        },
    },
});
class u {
    constructor(e) {
        if (
            (a(this, "capture", void 0),
            a(this, "encode", void 0),
            a(this, "bitrateMin", void 0),
            a(this, "bitrateMax", void 0),
            a(this, "bitrateTarget", void 0),
            a(this, "localWant", void 0),
            null == e.capture && null == e.encode)
        )
            throw Error("Invalid arguments.");
        (this.capture = null == e.capture ? void 0 : new d(e.capture)),
            (this.encode = null == e.encode ? void 0 : new d(e.encode)),
            (this.bitrateMin = e.bitrateMin),
            (this.bitrateMax = e.bitrateMax),
            (this.bitrateTarget = e.bitrateTarget),
            (this.localWant = e.localWant);
    }
}
class d {
    static equals(e, t) {
        return (
            (null == e && null == t) ||
            (null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate)
        );
    }
    static extend(e, t) {
        var n, r, i, a, s;
        if (null == e) return t;
        if (null == t) return e;
        let o = null != (n = null != (r = null == t ? void 0 : t.width) ? r : null == e ? void 0 : e.width) ? n : 0,
            l = null != (i = null != (a = null == t ? void 0 : t.height) ? a : null == e ? void 0 : e.height) ? i : 0;
        return {
            width: o,
            height: l,
            framerate: null != (s = null == t ? void 0 : t.framerate) ? s : null == e ? void 0 : e.framerate,
            pixelCount: o * l,
        };
    }
    constructor(e) {
        a(this, "width", void 0),
            a(this, "height", void 0),
            a(this, "framerate", void 0),
            a(this, "pixelCount", void 0),
            (this.width = e.width),
            (this.height = e.height),
            (this.framerate = e.framerate),
            (this.pixelCount = e.width * e.height);
    }
}
class f {
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
        if (null != this.qualityOverwrite) {
            var i, a, s;
            return new u({
                encode: d.extend(r.encode, this.qualityOverwrite.encode),
                capture: d.extend(r.capture, this.qualityOverwrite.capture),
                bitrateMin: null != (i = this.qualityOverwrite.bitrateMin) ? i : r.bitrateMin,
                bitrateMax: null != (a = this.qualityOverwrite.bitrateMax) ? a : r.bitrateMax,
                bitrateTarget: null != (s = this.qualityOverwrite.bitrateTarget) ? s : r.bitrateTarget,
                localWant: r.localWant,
            });
        }
        return r;
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
            {
                quality: n,
                constraints: e,
            }
        );
    }
    setQualityOverwrite(e) {
        this.qualityOverwrite = e;
    }
    setGoliveQuality(e) {
        var t, n, r;
        this.goliveMaxQuality = new u({
            capture: d.extend(this.goliveMaxQuality.capture, e.capture),
            encode: d.extend(this.goliveMaxQuality.encode, e.encode),
            bitrateMin: null != (t = e.bitrateMin) ? t : this.goliveMaxQuality.bitrateMin,
            bitrateMax: null != (n = e.bitrateMax) ? n : this.goliveMaxQuality.bitrateMax,
            bitrateTarget: null != (r = e.bitrateTarget) ? r : this.goliveMaxQuality.bitrateTarget,
            localWant: this.goliveMaxQuality.localWant,
        });
    }
    configGoLiveSimulcast(e, t) {
        (this.goliveSimulcastEnabled = e),
            (this.goliveSimulcastLQBitrateMax = t),
            (this.goliveSimulcastLQBitrateTarget = t);
    }
    setGoLiveSimulcastLQTargetBitrate(e) {
        this.goliveSimulcastLQBitrateTarget = e;
    }
    shouldEnableGoliveSimulcastForHqQuality(e) {
        return !!this.goliveSimulcastEnabled && ((0 === e.width && 0 === e.height) || e.width * e.height > i.aE * i.Bb);
    }
    getVideoQuality(e) {
        let t = this.ladder.getResolution(e),
            n = this.options.videoBitrate.min * t.budgetPortion,
            r = this.options.videoBitrate.max * t.budgetPortion,
            i = this.isMuted ? t.mutedFramerate : t.framerate;
        return new u({
            encode: l(s({}, t), { framerate: i }),
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
        var n;
        if (this.goliveSimulcastEnabled && e < 100) return this.getGoliveLQQuality();
        if (
            (null == (n = this.goliveMaxQuality.encode) ? void 0 : n.pixelCount) === void 0 ||
            t >= this.goliveMaxQuality.encode.pixelCount ||
            t <= 0
        )
            return this.goliveMaxQuality;
        let r = Math.min(
                i.YU * this.goliveMaxQuality.encode.pixelCount * this.goliveMaxQuality.encode.framerate,
                this.goliveMaxQuality.bitrateMax,
            ),
            a = this.scaleLinearly(t, this.goliveMaxQuality.encode.pixelCount, this.goliveMaxQuality.bitrateMin),
            s = this.scaleLinearly(t, this.goliveMaxQuality.encode.pixelCount, this.goliveMaxQuality.bitrateMax),
            o =
                null != this.goliveMaxQuality.bitrateTarget
                    ? this.scaleLinearly(
                          t,
                          this.goliveMaxQuality.encode.pixelCount,
                          this.goliveMaxQuality.bitrateTarget,
                      )
                    : void 0;
        return new u({
            encode: this.goliveMaxQuality.encode,
            capture: this.goliveMaxQuality.capture,
            bitrateMin: Math.max(Math.ceil(a), this.options.videoBitrateFloor),
            bitrateMax: Math.max(Math.ceil(s), r),
            bitrateTarget: null != o ? Math.max(Math.ceil(o), this.options.videoBitrateFloor) : void 0,
            localWant: e,
        });
    }
    getDefaultGoliveQuality() {
        return new u({
            capture: {
                width: 1280,
                height: 720,
                framerate: i.sG,
            },
            encode: {
                width: 1280,
                height: 720,
                framerate: i.sG,
                pixelCount: 921600,
            },
            bitrateMin: this.options.desktopBitrate.min,
            bitrateMax: this.options.desktopBitrate.max,
            bitrateTarget: this.options.desktopBitrate.target,
        });
    }
    getGoliveLQQuality() {
        var e, t, n, r, a, s, o, l, c, d, f, p;
        let _ = Math.min(i.aE, null != (e = null == (o = this.goliveMaxQuality.encode) ? void 0 : o.width) ? e : i.aE),
            h = Math.min(i.Bb, null != (t = null == (l = this.goliveMaxQuality.encode) ? void 0 : l.height) ? t : i.Bb),
            m = Math.min(
                i.Xk,
                null != (n = null == (c = this.goliveMaxQuality.encode) ? void 0 : c.framerate) ? n : i.Xk,
            );
        return new u({
            capture: {
                width: Math.min(
                    i.aE,
                    null != (r = null == (d = this.goliveMaxQuality.capture) ? void 0 : d.width) ? r : i.aE,
                ),
                height: Math.min(
                    i.Bb,
                    null != (a = null == (f = this.goliveMaxQuality.capture) ? void 0 : f.height) ? a : i.Bb,
                ),
                framerate: Math.min(
                    i.Xk,
                    null != (s = null == (p = this.goliveMaxQuality.capture) ? void 0 : p.framerate) ? s : i.Xk,
                ),
            },
            encode: {
                width: _,
                height: h,
                framerate: m,
                pixelCount: _ * h,
            },
            bitrateMin: i.yS,
            bitrateMax: this.goliveSimulcastLQBitrateMax,
            bitrateTarget: this.goliveSimulcastLQBitrateTarget,
        });
    }
    constructor(e, t, n = i.eQ) {
        a(this, "contextType", void 0),
            a(this, "connection", void 0),
            a(this, "options", void 0),
            a(this, "isMuted", void 0),
            a(this, "qualityOverwrite", void 0),
            a(this, "goliveMaxQuality", void 0),
            a(this, "goliveSimulcastEnabled", void 0),
            a(this, "goliveSimulcastLQBitrateMax", void 0),
            a(this, "goliveSimulcastLQBitrateTarget", void 0),
            a(this, "isStreamContext", void 0),
            a(this, "ladder", void 0),
            a(this, "lastGoLivePixelCount", void 0),
            (this.contextType = e),
            (this.connection = t),
            (this.options = n),
            (this.isMuted = !1),
            (this.isStreamContext = this.contextType === i.x.STREAM),
            (this.ladder = new r.r(n)),
            (this.goliveMaxQuality = this.getDefaultGoliveQuality()),
            (this.goliveSimulcastEnabled = !1),
            (this.goliveSimulcastLQBitrateMax = i.q5),
            (this.goliveSimulcastLQBitrateTarget = i.q5),
            (this.lastGoLivePixelCount = {});
    }
}
