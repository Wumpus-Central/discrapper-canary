r.d(n, {
    DM: function () {
        return l;
    },
    SF: function () {
        return c;
    },
    iY: function () {
        return d;
    }
});
var i = r(411104);
var a = r(966146),
    o = r(65154);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = Object.freeze({
    [o.Uc.AUTO]: {},
    [o.Uc.FULL]: {
        encode: {
            width: 1280,
            height: 720
        }
    }
});
class u {
    constructor(e) {
        if ((s(this, 'capture', void 0), s(this, 'encode', void 0), s(this, 'bitrateMin', void 0), s(this, 'bitrateMax', void 0), s(this, 'bitrateTarget', void 0), s(this, 'localWant', void 0), null == e.capture && null == e.encode)) throw Error('Invalid arguments.');
        (this.capture = null == e.capture ? void 0 : new c(e.capture)), (this.encode = null == e.encode ? void 0 : new c(e.encode)), (this.bitrateMin = e.bitrateMin), (this.bitrateMax = e.bitrateMax), (this.bitrateTarget = e.bitrateTarget), (this.localWant = e.localWant);
    }
}
class c {
    static equals(e, n) {
        return (null == e && null == n) || (null != e && null != n && e.width === n.width && e.height === n.height && e.framerate === n.framerate);
    }
    static extend(e, n) {
        var r, i, a, o, s;
        if (null == e) return n;
        if (null == n) return e;
        let l = null !== (i = null !== (r = null == n ? void 0 : n.width) && void 0 !== r ? r : null == e ? void 0 : e.width) && void 0 !== i ? i : 0,
            u = null !== (o = null !== (a = null == n ? void 0 : n.height) && void 0 !== a ? a : null == e ? void 0 : e.height) && void 0 !== o ? o : 0;
        return {
            width: l,
            height: u,
            framerate: null !== (s = null == n ? void 0 : n.framerate) && void 0 !== s ? s : null == e ? void 0 : e.framerate,
            pixelCount: l * u
        };
    }
    constructor(e) {
        s(this, 'width', void 0), s(this, 'height', void 0), s(this, 'framerate', void 0), s(this, 'pixelCount', void 0), (this.width = e.width), (this.height = e.height), (this.framerate = e.framerate), (this.pixelCount = e.width * e.height);
    }
}
class d {
    getQuality(e) {
        let n = this.connection.getLocalWant(e),
            r = this.isStreamContext ? this.getGoliveQuality(n) : this.getVideoQuality(n);
        if (null != this.qualityOverwrite) {
            var i, a, o;
            return new u({
                encode: c.extend(r.encode, this.qualityOverwrite.encode),
                capture: c.extend(r.capture, this.qualityOverwrite.capture),
                bitrateMin: null !== (i = this.qualityOverwrite.bitrateMin) && void 0 !== i ? i : r.bitrateMin,
                bitrateMax: null !== (a = this.qualityOverwrite.bitrateMax) && void 0 !== a ? a : r.bitrateMax,
                bitrateTarget: null !== (o = this.qualityOverwrite.bitrateTarget) && void 0 !== o ? o : r.bitrateTarget,
                localWant: r.localWant
            });
        }
        return r;
    }
    applyQualityConstraints(e, n) {
        let r = this.getQuality(n);
        return (
            null != r.capture && ((e.encodingVideoWidth = r.capture.width), (e.encodingVideoHeight = r.capture.height), (e.encodingVideoFrameRate = r.capture.framerate), (e.captureVideoFrameRate = r.capture.framerate)),
            null != r.encode && ((e.remoteSinkWantsMaxFramerate = r.encode.framerate), (e.remoteSinkWantsPixelCount = r.encode.pixelCount)),
            null != r.bitrateTarget ? (e.encodingVideoBitRate = r.bitrateTarget) : (e.encodingVideoBitRate = r.bitrateMax),
            (e.encodingVideoMinBitRate = r.bitrateMin),
            (e.encodingVideoMaxBitRate = r.bitrateMax),
            null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)),
            {
                quality: r,
                constraints: e
            }
        );
    }
    setQualityOverwrite(e) {
        this.qualityOverwrite = e;
    }
    setGoliveQuality(e) {
        var n, r, i;
        this.goliveMaxQuality = new u({
            capture: c.extend(this.goliveMaxQuality.capture, e.capture),
            encode: c.extend(this.goliveMaxQuality.encode, e.encode),
            bitrateMin: null !== (n = e.bitrateMin) && void 0 !== n ? n : this.goliveMaxQuality.bitrateMin,
            bitrateMax: null !== (r = e.bitrateMax) && void 0 !== r ? r : this.goliveMaxQuality.bitrateMax,
            bitrateTarget: null !== (i = e.bitrateTarget) && void 0 !== i ? i : this.goliveMaxQuality.bitrateTarget,
            localWant: this.goliveMaxQuality.localWant
        });
    }
    configGoLiveSimulcast(e, n) {
        (this.goliveSimulcastEnabled = e), (this.goliveSimulcastLQBitrateMax = n), (this.goliveSimulcastLQBitrateTarget = n);
    }
    setGoLiveSimulcastLQTargetBitrate(e) {
        this.goliveSimulcastLQBitrateTarget = e;
    }
    shouldEnableGoliveSimulcastForHqQuality(e) {
        return !!this.goliveSimulcastEnabled && ((0 === e.width && 0 === e.height) || e.width * e.height > o.ef * o.ru);
    }
    getVideoQuality(e) {
        let n = this.ladder.getResolution(e),
            r = this.options.videoBitrate.min * n.budgetPortion,
            i = this.options.videoBitrate.max * n.budgetPortion,
            a = this.isMuted ? n.mutedFramerate : n.framerate;
        return new u({
            encode: {
                ...n,
                framerate: a
            },
            capture: {
                width: this.options.videoCapture.width,
                height: this.options.videoCapture.height,
                framerate: this.options.videoCapture.framerate
            },
            bitrateMin: Math.max(r, this.options.videoBitrateFloor),
            bitrateMax: Math.max(i, this.options.videoBitrateFloor),
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
                framerate: o.Gs
            },
            encode: {
                width: 1280,
                height: 720,
                framerate: o.Gs,
                pixelCount: 921600
            },
            bitrateMin: this.options.desktopBitrate.min,
            bitrateMax: this.options.desktopBitrate.max,
            bitrateTarget: this.options.desktopBitrate.target
        });
    }
    getGoliveLQQuality() {
        var e, n, r, i, a, s, l, c, d, f, p, h;
        let _ = Math.min(o.ef, null !== (l = null === (e = this.goliveMaxQuality.encode) || void 0 === e ? void 0 : e.width) && void 0 !== l ? l : o.ef),
            m = Math.min(o.ru, null !== (c = null === (n = this.goliveMaxQuality.encode) || void 0 === n ? void 0 : n.height) && void 0 !== c ? c : o.ru),
            g = Math.min(o.R$, null !== (d = null === (r = this.goliveMaxQuality.encode) || void 0 === r ? void 0 : r.framerate) && void 0 !== d ? d : o.R$),
            E = Math.min(o.ef, null !== (f = null === (i = this.goliveMaxQuality.capture) || void 0 === i ? void 0 : i.width) && void 0 !== f ? f : o.ef),
            v = Math.min(o.ru, null !== (p = null === (a = this.goliveMaxQuality.capture) || void 0 === a ? void 0 : a.height) && void 0 !== p ? p : o.ru);
        return new u({
            capture: {
                width: E,
                height: v,
                framerate: Math.min(o.R$, null !== (h = null === (s = this.goliveMaxQuality.capture) || void 0 === s ? void 0 : s.framerate) && void 0 !== h ? h : o.R$)
            },
            encode: {
                width: _,
                height: m,
                framerate: g,
                pixelCount: _ * m
            },
            bitrateMin: o.UC,
            bitrateMax: this.goliveSimulcastLQBitrateMax,
            bitrateTarget: this.goliveSimulcastLQBitrateTarget
        });
    }
    constructor(e, n, r = o.kS) {
        s(this, 'contextType', void 0), s(this, 'connection', void 0), s(this, 'options', void 0), s(this, 'isMuted', void 0), s(this, 'qualityOverwrite', void 0), s(this, 'goliveMaxQuality', void 0), s(this, 'goliveSimulcastEnabled', void 0), s(this, 'goliveSimulcastLQBitrateMax', void 0), s(this, 'goliveSimulcastLQBitrateTarget', void 0), s(this, 'isStreamContext', void 0), s(this, 'ladder', void 0), (this.contextType = e), (this.connection = n), (this.options = r), (this.isMuted = !1), (this.isStreamContext = this.contextType === o.Yn.STREAM), (this.ladder = new a.x(r)), (this.goliveMaxQuality = this.getDefaultGoliveQuality()), (this.goliveSimulcastEnabled = !1), (this.goliveSimulcastLQBitrateMax = o.pk), (this.goliveSimulcastLQBitrateTarget = o.pk);
    }
}
