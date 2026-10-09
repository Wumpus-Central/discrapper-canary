(i.d(t, { s: () => a }), i(321073));
var n = i(265486);
class a {
    videoElement;
    updateInterval = null;
    updateCallback = null;
    recentFrameRates = [];
    lastCurrentTime = 0;
    baselineFrames = 0;
    baselineTime = 0;
    lockedFrameRate = null;
    lastKnownFrameRate = null;
    cachedCodecInfo = null;
    codecInfoPromise = null;
    codecInfoFetchId = 0;
    fileSizeBytes = null;
    constructor(e, t) {
        ((this.videoElement = e), (this.fileSizeBytes = t ?? null), this.fetchCodecInfo());
    }
    async fetchCodecInfo() {
        let e = "" !== this.videoElement.src ? this.videoElement.src : this.videoElement.currentSrc;
        if (null == e || "" === e || null != this.codecInfoPromise) return;
        let t = this.codecInfoFetchId;
        this.codecInfoPromise = (0, n.K)(e);
        let i = await this.codecInfoPromise;
        this.codecInfoFetchId === t && (this.cachedCodecInfo = i);
    }
    resetCodecInfo(e) {
        (this.codecInfoFetchId++,
            (this.cachedCodecInfo = null),
            (this.codecInfoPromise = null),
            (this.fileSizeBytes = e ?? null),
            (this.recentFrameRates = []),
            (this.lastCurrentTime = 0),
            (this.baselineFrames = 0),
            (this.baselineTime = 0),
            (this.lockedFrameRate = null),
            (this.lastKnownFrameRate = null),
            this.fetchCodecInfo());
    }
    getStats() {
        let e,
            t,
            i,
            n = this.videoElement;
        this.cachedCodecInfo?.videoWidth != null && this.cachedCodecInfo?.videoHeight != null
            ? ((e = this.cachedCodecInfo.videoWidth), (t = this.cachedCodecInfo.videoHeight), (i = `${e}x${t}`))
            : ((e = 0 !== n.videoWidth ? n.videoWidth : 0),
              (t = 0 !== n.videoHeight ? n.videoHeight : 0),
              (i = e > 0 && t > 0 ? `${e}x${t}` : "Unknown"));
        let a = Math.round(n.clientWidth),
            r = Math.round(n.clientHeight),
            s = [],
            l = 0,
            o = n.currentTime;
        for (let e = 0; e < n.buffered.length; e++) {
            let t = n.buffered.start(e),
                i = n.buffered.end(e);
            (s.push({ start: t, end: i }), i > o && (t <= o ? (l += i - o) : (l += i - t)));
        }
        let u = 0,
            d = 0,
            c = 0,
            h = null;
        if ("function" == typeof n.getVideoPlaybackQuality) {
            let e = n.getVideoPlaybackQuality();
            ((u = e.droppedVideoFrames), (c = (d = e.totalVideoFrames) > 0 ? (u / d) * 100 : 0));
        }
        if (this.cachedCodecInfo?.frameRate != null) h = this.cachedCodecInfo.frameRate;
        else if ("function" == typeof n.getVideoPlaybackQuality) {
            if (null !== this.lockedFrameRate) h = this.lockedFrameRate;
            else if (Math.abs(n.currentTime - this.lastCurrentTime) > 1.5 && this.lastCurrentTime > 0)
                if (this.recentFrameRates.length >= 3) {
                    let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
                    ((this.lockedFrameRate = Math.round(e)),
                        (h = this.lockedFrameRate),
                        (this.lastKnownFrameRate = this.lockedFrameRate));
                } else
                    ((this.baselineFrames = d),
                        (this.baselineTime = n.currentTime),
                        (this.recentFrameRates = []),
                        (h = this.lastKnownFrameRate));
            else {
                let e = d - this.baselineFrames,
                    t = n.currentTime - this.baselineTime;
                t >= 1 && e > 0
                    ? (this.recentFrameRates.push(e / t),
                      this.recentFrameRates.length > 5 && this.recentFrameRates.shift(),
                      (h = Math.round(this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length)),
                      (this.lastKnownFrameRate = h))
                    : null !== this.lastKnownFrameRate && (h = this.lastKnownFrameRate);
            }
            this.lastCurrentTime = n.currentTime;
        }
        let f = n.error?.code ?? null,
            m = n.error?.message ?? null;
        return (
            null == this.codecInfoPromise && this.fetchCodecInfo(),
            {
                resolution: i,
                videoWidth: e,
                videoHeight: t,
                viewportWidth: a,
                viewportHeight: r,
                currentTime: n.currentTime,
                duration: n.duration,
                bufferedRanges: s,
                bufferedSeconds: l,
                droppedFrames: u,
                totalFrames: d,
                droppedFramesPercent: c,
                frameRate: h,
                src: n.src,
                fileSizeBytes: this.fileSizeBytes,
                codecInfo: this.cachedCodecInfo,
                errorCode: f,
                errorMessage: m,
            }
        );
    }
    startTracking(e, t) {
        (this.stopTracking(),
            (this.updateCallback = e),
            t?.emitInitial === !0 && e(this.getStats()),
            (this.updateInterval = window.setInterval(() => {
                null != this.updateCallback && this.updateCallback(this.getStats());
            }, 1e3)));
    }
    stopTracking() {
        (null !== this.updateInterval && (window.clearInterval(this.updateInterval), (this.updateInterval = null)),
            (this.updateCallback = null));
    }
    destroy() {
        this.stopTracking();
    }
}
