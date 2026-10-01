(i.d(t, { s: () => n }), i(321073));
var a = i(265486);
class n {
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
        this.codecInfoPromise = (0, a.K)(e);
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
            a = this.videoElement;
        this.cachedCodecInfo?.videoWidth != null && this.cachedCodecInfo?.videoHeight != null
            ? ((e = this.cachedCodecInfo.videoWidth), (t = this.cachedCodecInfo.videoHeight), (i = `${e}x${t}`))
            : ((e = 0 !== a.videoWidth ? a.videoWidth : 0),
              (t = 0 !== a.videoHeight ? a.videoHeight : 0),
              (i = e > 0 && t > 0 ? `${e}x${t}` : "Unknown"));
        let n = Math.round(a.clientWidth),
            r = Math.round(a.clientHeight),
            s = [],
            l = 0,
            o = a.currentTime;
        for (let e = 0; e < a.buffered.length; e++) {
            let t = a.buffered.start(e),
                i = a.buffered.end(e);
            (s.push({ start: t, end: i }), i > o && (t <= o ? (l += i - o) : (l += i - t)));
        }
        let u = 0,
            d = 0,
            h = 0,
            c = null;
        if ("function" == typeof a.getVideoPlaybackQuality) {
            let e = a.getVideoPlaybackQuality();
            ((u = e.droppedVideoFrames), (h = (d = e.totalVideoFrames) > 0 ? (u / d) * 100 : 0));
        }
        if (this.cachedCodecInfo?.frameRate != null) c = this.cachedCodecInfo.frameRate;
        else if ("function" == typeof a.getVideoPlaybackQuality) {
            if (null !== this.lockedFrameRate) c = this.lockedFrameRate;
            else if (Math.abs(a.currentTime - this.lastCurrentTime) > 1.5 && this.lastCurrentTime > 0)
                if (this.recentFrameRates.length >= 3) {
                    let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
                    ((this.lockedFrameRate = Math.round(e)),
                        (c = this.lockedFrameRate),
                        (this.lastKnownFrameRate = this.lockedFrameRate));
                } else
                    ((this.baselineFrames = d),
                        (this.baselineTime = a.currentTime),
                        (this.recentFrameRates = []),
                        (c = this.lastKnownFrameRate));
            else {
                let e = d - this.baselineFrames,
                    t = a.currentTime - this.baselineTime;
                t >= 1 && e > 0
                    ? (this.recentFrameRates.push(e / t),
                      this.recentFrameRates.length > 5 && this.recentFrameRates.shift(),
                      (c = Math.round(this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length)),
                      (this.lastKnownFrameRate = c))
                    : null !== this.lastKnownFrameRate && (c = this.lastKnownFrameRate);
            }
            this.lastCurrentTime = a.currentTime;
        }
        let f = a.error?.code ?? null,
            m = a.error?.message ?? null;
        return (
            null == this.codecInfoPromise && this.fetchCodecInfo(),
            {
                resolution: i,
                videoWidth: e,
                videoHeight: t,
                viewportWidth: n,
                viewportHeight: r,
                currentTime: a.currentTime,
                duration: a.duration,
                bufferedRanges: s,
                bufferedSeconds: l,
                droppedFrames: u,
                totalFrames: d,
                droppedFramesPercent: h,
                frameRate: c,
                src: a.src,
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
