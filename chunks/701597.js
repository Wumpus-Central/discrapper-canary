n.d(t, {
    DM: () => c,
    SF: () => d,
    iY: () => f
}),
    n(411104);
var r = n(966146),
    i = n(65154);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = Object.freeze({
    [i.Uc.AUTO]: {},
    [i.Uc.FULL]: {
        encode: {
            width: 1280,
            height: 720
        }
    }
});
class u {
    constructor(e) {
        if ((o(this, 'capture', void 0), o(this, 'encode', void 0), o(this, 'bitrateMin', void 0), o(this, 'bitrateMax', void 0), o(this, 'bitrateTarget', void 0), o(this, 'localWant', void 0), null == e.capture && null == e.encode)) throw Error('Invalid arguments.');
        (this.capture = null == e.capture ? void 0 : new d(e.capture)), (this.encode = null == e.encode ? void 0 : new d(e.encode)), (this.bitrateMin = e.bitrateMin), (this.bitrateMax = e.bitrateMax), (this.bitrateTarget = e.bitrateTarget), (this.localWant = e.localWant);
    }
}
class d {
    static equals(e, t) {
        return (null == e && null == t) || (null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate);
    }
    static extend(e, t) {
        var n, r, i, o, a;
        if (null == e) return t;
        if (null == t) return e;
        let s = null != (r = null != (n = null == t ? void 0 : t.width) ? n : null == e ? void 0 : e.width) ? r : 0,
            l = null != (o = null != (i = null == t ? void 0 : t.height) ? i : null == e ? void 0 : e.height) ? o : 0;
        return {
            width: s,
            height: l,
            framerate: null != (a = null == t ? void 0 : t.framerate) ? a : null == e ? void 0 : e.framerate,
            pixelCount: s * l
        };
    }
    constructor(e) {
        o(this, 'width', void 0), o(this, 'height', void 0), o(this, 'framerate', void 0), o(this, 'pixelCount', void 0), (this.width = e.width), (this.height = e.height), (this.framerate = e.framerate), (this.pixelCount = e.width * e.height);
    }
}
class f {
    getQuality(e) {
        let t = this.connection.getLocalWant(e),
            n = this.isStreamContext ? this.getGoliveQuality(t) : this.getVideoQuality(t);
        if (null != this.qualityOverwrite) {
            var r, i, o;
            return new u({
                encode: d.extend(n.encode, this.qualityOverwrite.encode),
                capture: d.extend(n.capture, this.qualityOverwrite.capture),
                bitrateMin: null != (r = this.qualityOverwrite.bitrateMin) ? r : n.bitrateMin,
                bitrateMax: null != (i = this.qualityOverwrite.bitrateMax) ? i : n.bitrateMax,
                bitrateTarget: null != (o = this.qualityOverwrite.bitrateTarget) ? o : n.bitrateTarget,
                localWant: n.localWant
            });
        }
        return n;
    }
    applyQualityConstraints(e, t) {
        let n = this.getQuality(t);
        return (
            null != n.capture && ((e.encodingVideoWidth = n.capture.width), (e.encodingVideoHeight = n.capture.height), (e.encodingVideoFrameRate = n.capture.framerate), (e.captureVideoFrameRate = n.capture.framerate)),
            null != n.encode && ((e.remoteSinkWantsMaxFramerate = n.encode.framerate), (e.remoteSinkWantsPixelCount = n.encode.pixelCount)),
            null != n.bitrateTarget ? (e.encodingVideoBitRate = n.bitrateTarget) : (e.encodingVideoBitRate = n.bitrateMax),
            (e.encodingVideoMinBitRate = n.bitrateMin),
            (e.encodingVideoMaxBitRate = n.bitrateMax),
            null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)),
            {
                quality: n,
                constraints: e
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
            localWant: this.goliveMaxQuality.localWant
        });
    }
    configGoLiveSimulcast(e, t) {
        (this.goliveSimulcastEnabled = e), (this.goliveSimulcastLQBitrateMax = t), (this.goliveSimulcastLQBitrateTarget = t);
    }
    setGoLiveSimulcastLQTargetBitrate(e) {
        this.goliveSimulcastLQBitrateTarget = e;
    }
    shouldEnableGoliveSimulcastForHqQuality(e) {
        return !!this.goliveSimulcastEnabled && ((0 === e.width && 0 === e.height) || e.width * e.height > i.ef * i.ru);
    }
    getVideoQuality(e) {
        let t = this.ladder.getResolution(e),
            n = this.options.videoBitrate.min * t.budgetPortion,
            r = this.options.videoBitrate.max * t.budgetPortion,
            i = this.isMuted ? t.mutedFramerate : t.framerate;
        return new u({
            encode: l(a({}, t), { framerate: i }),
            capture: {
                width: this.options.videoCapture.width,
                height: this.options.videoCapture.height,
                framerate: this.options.videoCapture.framerate
            },
            bitrateMin: Math.max(n, this.options.videoBitrateFloor),
            bitrateMax: Math.max(r, this.options.videoBitrateFloor),
            localWant: e
        });
    }
    getGoliveQuality(e) {
        return this.goliveSimulcastEnabled && e < 100 ? this.getGoliveLQQuality() : this.goliveMaxQuality;
    }
    getDefaultGoliveQuality() {
        return new u({
            capture: {
                width: 1280,
                height: 720,
                framerate: i.Gs
            },
            encode: {
                width: 1280,
                height: 720,
                framerate: i.Gs,
                pixelCount: 921600
            },
            bitrateMin: this.options.desktopBitrate.min,
            bitrateMax: this.options.desktopBitrate.max,
            bitrateTarget: this.options.desktopBitrate.target
        });
    }
    getGoliveLQQuality() {
        var e, t, n, r, o, a, s, l, c, d, f, _;
        let p = Math.min(i.ef, null != (s = null == (e = this.goliveMaxQuality.encode) ? void 0 : e.width) ? s : i.ef),
            h = Math.min(i.ru, null != (l = null == (t = this.goliveMaxQuality.encode) ? void 0 : t.height) ? l : i.ru),
            m = Math.min(i.R$, null != (c = null == (n = this.goliveMaxQuality.encode) ? void 0 : n.framerate) ? c : i.R$),
            g = Math.min(i.ef, null != (d = null == (r = this.goliveMaxQuality.capture) ? void 0 : r.width) ? d : i.ef);
        return new u({
            capture: {
                width: g,
                height: Math.min(i.ru, null != (f = null == (o = this.goliveMaxQuality.capture) ? void 0 : o.height) ? f : i.ru),
                framerate: Math.min(i.R$, null != (_ = null == (a = this.goliveMaxQuality.capture) ? void 0 : a.framerate) ? _ : i.R$)
            },
            encode: {
                width: p,
                height: h,
                framerate: m,
                pixelCount: p * h
            },
            bitrateMin: i.UC,
            bitrateMax: this.goliveSimulcastLQBitrateMax,
            bitrateTarget: this.goliveSimulcastLQBitrateTarget
        });
    }
    constructor(e, t, n = i.kS) {
        o(this, 'contextType', void 0), o(this, 'connection', void 0), o(this, 'options', void 0), o(this, 'isMuted', void 0), o(this, 'qualityOverwrite', void 0), o(this, 'goliveMaxQuality', void 0), o(this, 'goliveSimulcastEnabled', void 0), o(this, 'goliveSimulcastLQBitrateMax', void 0), o(this, 'goliveSimulcastLQBitrateTarget', void 0), o(this, 'isStreamContext', void 0), o(this, 'ladder', void 0), (this.contextType = e), (this.connection = t), (this.options = n), (this.isMuted = !1), (this.isStreamContext = this.contextType === i.Yn.STREAM), (this.ladder = new r.x(n)), (this.goliveMaxQuality = this.getDefaultGoliveQuality()), (this.goliveSimulcastEnabled = !1), (this.goliveSimulcastLQBitrateMax = i.pk), (this.goliveSimulcastLQBitrateTarget = i.pk);
    }
}
