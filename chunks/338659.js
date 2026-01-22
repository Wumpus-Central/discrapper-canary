n.d(t, { s: () => c }), n(321073);
var r = n(265486);
function i(e, t, n) {
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
let a = 1.5,
    s = 5,
    o = 1,
    l = 1000;
class c {
    async fetchCodecInfo() {
        let e = "" !== this.videoElement.src ? this.videoElement.src : this.videoElement.currentSrc;
        if (null == e || "" === e || null != this.codecInfoPromise) return;
        let t = this.codecInfoFetchId;
        this.codecInfoPromise = (0, r.K)(e);
        let n = await this.codecInfoPromise;
        this.codecInfoFetchId === t && (this.cachedCodecInfo = n);
    }
    resetCodecInfo(e) {
        this.codecInfoFetchId++,
            (this.cachedCodecInfo = null),
            (this.codecInfoPromise = null),
            (this.fileSizeBytes = null != e ? e : null),
            (this.recentFrameRates = []),
            (this.lastCurrentTime = 0),
            (this.baselineFrames = 0),
            (this.baselineTime = 0),
            (this.lockedFrameRate = null),
            (this.lastKnownFrameRate = null),
            this.fetchCodecInfo();
    }
    getStats() {
        var e, t, n, r, i, l, c;
        let u,
            d,
            f,
            p = this.videoElement;
        (null == (n = this.cachedCodecInfo) ? void 0 : n.videoWidth) != null &&
        (null == (r = this.cachedCodecInfo) ? void 0 : r.videoHeight) != null
            ? ((u = this.cachedCodecInfo.videoWidth),
              (d = this.cachedCodecInfo.videoHeight),
              (f = "".concat(u, "x").concat(d)))
            : ((u = 0 !== p.videoWidth ? p.videoWidth : 0),
              (d = 0 !== p.videoHeight ? p.videoHeight : 0),
              (f = u > 0 && d > 0 ? "".concat(u, "x").concat(d) : "Unknown"));
        let _ = Math.round(p.clientWidth),
            h = Math.round(p.clientHeight),
            m = [],
            g = 0,
            E = p.currentTime;
        for (let e = 0; e < p.buffered.length; e++) {
            let t = p.buffered.start(e),
                n = p.buffered.end(e);
            m.push({
                start: t,
                end: n,
            }),
                n > E && (t <= E ? (g += n - E) : (g += n - t));
        }
        let b = 0,
            y = 0,
            O = 0,
            A = null;
        if ("function" == typeof p.getVideoPlaybackQuality) {
            let e = p.getVideoPlaybackQuality();
            (b = e.droppedVideoFrames), (O = (y = e.totalVideoFrames) > 0 ? (b / y) * 100 : 0);
        }
        if ((null == (i = this.cachedCodecInfo) ? void 0 : i.frameRate) != null) A = this.cachedCodecInfo.frameRate;
        else if ("function" == typeof p.getVideoPlaybackQuality) {
            if (null !== this.lockedFrameRate) A = this.lockedFrameRate;
            else if (Math.abs(p.currentTime - this.lastCurrentTime) > a && this.lastCurrentTime > 0)
                if (this.recentFrameRates.length >= 3) {
                    let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
                    (this.lockedFrameRate = Math.round(e)),
                        (A = this.lockedFrameRate),
                        (this.lastKnownFrameRate = this.lockedFrameRate);
                } else
                    (this.baselineFrames = y),
                        (this.baselineTime = p.currentTime),
                        (this.recentFrameRates = []),
                        (A = this.lastKnownFrameRate);
            else {
                let e = y - this.baselineFrames,
                    t = p.currentTime - this.baselineTime;
                if (t >= o && e > 0) {
                    let n = e / t;
                    this.recentFrameRates.push(n),
                        this.recentFrameRates.length > s && this.recentFrameRates.shift(),
                        (A = Math.round(
                            this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length,
                        )),
                        (this.lastKnownFrameRate = A);
                } else null !== this.lastKnownFrameRate && (A = this.lastKnownFrameRate);
            }
            this.lastCurrentTime = p.currentTime;
        }
        let v = null != (e = null == (l = p.error) ? void 0 : l.code) ? e : null,
            S = null != (t = null == (c = p.error) ? void 0 : c.message) ? t : null;
        return (
            null == this.codecInfoPromise && this.fetchCodecInfo(),
            {
                resolution: f,
                videoWidth: u,
                videoHeight: d,
                viewportWidth: _,
                viewportHeight: h,
                currentTime: p.currentTime,
                duration: p.duration,
                bufferedRanges: m,
                bufferedSeconds: g,
                droppedFrames: b,
                totalFrames: y,
                droppedFramesPercent: O,
                frameRate: A,
                src: p.src,
                fileSizeBytes: this.fileSizeBytes,
                codecInfo: this.cachedCodecInfo,
                errorCode: v,
                errorMessage: S,
            }
        );
    }
    startTracking(e) {
        this.stopTracking(),
            (this.updateCallback = e),
            (this.updateInterval = window.setInterval(() => {
                null != this.updateCallback && this.updateCallback(this.getStats());
            }, l));
    }
    stopTracking() {
        null !== this.updateInterval && (window.clearInterval(this.updateInterval), (this.updateInterval = null)),
            (this.updateCallback = null);
    }
    destroy() {
        this.stopTracking();
    }
    constructor(e, t) {
        i(this, "videoElement", void 0),
            i(this, "updateInterval", null),
            i(this, "updateCallback", null),
            i(this, "recentFrameRates", []),
            i(this, "lastCurrentTime", 0),
            i(this, "baselineFrames", 0),
            i(this, "baselineTime", 0),
            i(this, "lockedFrameRate", null),
            i(this, "lastKnownFrameRate", null),
            i(this, "cachedCodecInfo", null),
            i(this, "codecInfoPromise", null),
            i(this, "codecInfoFetchId", 0),
            i(this, "fileSizeBytes", null),
            (this.videoElement = e),
            (this.fileSizeBytes = null != t ? t : null),
            this.fetchCodecInfo();
    }
}
