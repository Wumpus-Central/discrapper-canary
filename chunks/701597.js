n.d(t, {
    DM: () => s,
    SF: () => l,
    iY: () => u
}),
    n(411104);
var i = n(966146),
    r = n(65154);
function a(e, t, n) {
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
let s = Object.freeze({
    [r.Uc.AUTO]: {},
    [r.Uc.FULL]: {
        encode: {
            width: 1280,
            height: 720
        }
    }
});
class o {
    constructor(e) {
        if ((a(this, 'capture', void 0), a(this, 'encode', void 0), a(this, 'bitrateMin', void 0), a(this, 'bitrateMax', void 0), a(this, 'bitrateTarget', void 0), a(this, 'localWant', void 0), null == e.capture && null == e.encode)) throw Error('Invalid arguments.');
        (this.capture = null == e.capture ? void 0 : new l(e.capture)), (this.encode = null == e.encode ? void 0 : new l(e.encode)), (this.bitrateMin = e.bitrateMin), (this.bitrateMax = e.bitrateMax), (this.bitrateTarget = e.bitrateTarget), (this.localWant = e.localWant);
    }
}
class l {
    static equals(e, t) {
        return (null == e && null == t) || (null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate);
    }
    static extend(e, t) {
        var n, i, r, a, s;
        if (null == e) return t;
        if (null == t) return e;
        let o = null !== (i = null !== (n = null == t ? void 0 : t.width) && void 0 !== n ? n : null == e ? void 0 : e.width) && void 0 !== i ? i : 0,
            l = null !== (a = null !== (r = null == t ? void 0 : t.height) && void 0 !== r ? r : null == e ? void 0 : e.height) && void 0 !== a ? a : 0;
        return {
            width: o,
            height: l,
            framerate: null !== (s = null == t ? void 0 : t.framerate) && void 0 !== s ? s : null == e ? void 0 : e.framerate,
            pixelCount: o * l
        };
    }
    constructor(e) {
        a(this, 'width', void 0), a(this, 'height', void 0), a(this, 'framerate', void 0), a(this, 'pixelCount', void 0), (this.width = e.width), (this.height = e.height), (this.framerate = e.framerate), (this.pixelCount = e.width * e.height);
    }
}
class u {
    getQuality(e) {
        let t = this.connection.getLocalWant(e),
            n = this.isStreamContext ? this.getGoliveQuality(t) : this.getVideoQuality(t);
        if (null != this.qualityOverwrite) {
            var i, r, a;
            return new o({
                encode: l.extend(n.encode, this.qualityOverwrite.encode),
                capture: l.extend(n.capture, this.qualityOverwrite.capture),
                bitrateMin: null !== (i = this.qualityOverwrite.bitrateMin) && void 0 !== i ? i : n.bitrateMin,
                bitrateMax: null !== (r = this.qualityOverwrite.bitrateMax) && void 0 !== r ? r : n.bitrateMax,
                bitrateTarget: null !== (a = this.qualityOverwrite.bitrateTarget) && void 0 !== a ? a : n.bitrateTarget,
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
        var t, n, i;
        this.goliveMaxQuality = new o({
            capture: l.extend(this.goliveMaxQuality.capture, e.capture),
            encode: l.extend(this.goliveMaxQuality.encode, e.encode),
            bitrateMin: null !== (t = e.bitrateMin) && void 0 !== t ? t : this.goliveMaxQuality.bitrateMin,
            bitrateMax: null !== (n = e.bitrateMax) && void 0 !== n ? n : this.goliveMaxQuality.bitrateMax,
            bitrateTarget: null !== (i = e.bitrateTarget) && void 0 !== i ? i : this.goliveMaxQuality.bitrateTarget,
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
        return !!this.goliveSimulcastEnabled && ((0 === e.width && 0 === e.height) || e.width * e.height > r.ef * r.ru);
    }
    getVideoQuality(e) {
        let t = this.ladder.getResolution(e),
            n = this.options.videoBitrate.min * t.budgetPortion,
            i = this.options.videoBitrate.max * t.budgetPortion,
            r = this.isMuted ? t.mutedFramerate : t.framerate;
        return new o({
            encode: {
                ...t,
                framerate: r
            },
            capture: {
                width: this.options.videoCapture.width,
                height: this.options.videoCapture.height,
                framerate: this.options.videoCapture.framerate
            },
            bitrateMin: Math.max(n, this.options.videoBitrateFloor),
            bitrateMax: Math.max(i, this.options.videoBitrateFloor),
            localWant: e
        });
    }
    getGoliveQuality(e) {
        return this.goliveSimulcastEnabled && e < 100 ? this.getGoliveLQQuality() : this.goliveMaxQuality;
    }
    getDefaultGoliveQuality() {
        return new o({
            capture: {
                width: 1280,
                height: 720,
                framerate: r.Gs
            },
            encode: {
                width: 1280,
                height: 720,
                framerate: r.Gs,
                pixelCount: 921600
            },
            bitrateMin: this.options.desktopBitrate.min,
            bitrateMax: this.options.desktopBitrate.max,
            bitrateTarget: this.options.desktopBitrate.target
        });
    }
    getGoliveLQQuality() {
        var e, t, n, i, a, s, l, u, c, d, f, _;
        let p = Math.min(r.ef, null !== (l = null === (e = this.goliveMaxQuality.encode) || void 0 === e ? void 0 : e.width) && void 0 !== l ? l : r.ef),
            h = Math.min(r.ru, null !== (u = null === (t = this.goliveMaxQuality.encode) || void 0 === t ? void 0 : t.height) && void 0 !== u ? u : r.ru),
            m = Math.min(r.R$, null !== (c = null === (n = this.goliveMaxQuality.encode) || void 0 === n ? void 0 : n.framerate) && void 0 !== c ? c : r.R$),
            g = Math.min(r.ef, null !== (d = null === (i = this.goliveMaxQuality.capture) || void 0 === i ? void 0 : i.width) && void 0 !== d ? d : r.ef);
        return new o({
            capture: {
                width: g,
                height: Math.min(r.ru, null !== (f = null === (a = this.goliveMaxQuality.capture) || void 0 === a ? void 0 : a.height) && void 0 !== f ? f : r.ru),
                framerate: Math.min(r.R$, null !== (_ = null === (s = this.goliveMaxQuality.capture) || void 0 === s ? void 0 : s.framerate) && void 0 !== _ ? _ : r.R$)
            },
            encode: {
                width: p,
                height: h,
                framerate: m,
                pixelCount: p * h
            },
            bitrateMin: r.UC,
            bitrateMax: this.goliveSimulcastLQBitrateMax,
            bitrateTarget: this.goliveSimulcastLQBitrateTarget
        });
    }
    constructor(e, t, n = r.kS) {
        a(this, 'contextType', void 0), a(this, 'connection', void 0), a(this, 'options', void 0), a(this, 'isMuted', void 0), a(this, 'qualityOverwrite', void 0), a(this, 'goliveMaxQuality', void 0), a(this, 'goliveSimulcastEnabled', void 0), a(this, 'goliveSimulcastLQBitrateMax', void 0), a(this, 'goliveSimulcastLQBitrateTarget', void 0), a(this, 'isStreamContext', void 0), a(this, 'ladder', void 0), (this.contextType = e), (this.connection = t), (this.options = n), (this.isMuted = !1), (this.isStreamContext = this.contextType === r.Yn.STREAM), (this.ladder = new i.x(n)), (this.goliveMaxQuality = this.getDefaultGoliveQuality()), (this.goliveSimulcastEnabled = !1), (this.goliveSimulcastLQBitrateMax = r.pk), (this.goliveSimulcastLQBitrateTarget = r.pk);
    }
}
