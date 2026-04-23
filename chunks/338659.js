"use strict";
n.d(t, { s: () => i }), n(321073);
var r = n(43105);
class i {
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
        (this.videoElement = e), (this.fileSizeBytes = t ?? null), this.fetchCodecInfo();
    }
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
            (this.fileSizeBytes = e ?? null),
            (this.recentFrameRates = []),
            (this.lastCurrentTime = 0),
            (this.baselineFrames = 0),
            (this.baselineTime = 0),
            (this.lockedFrameRate = null),
            (this.lastKnownFrameRate = null),
            this.fetchCodecInfo();
    }
    getStats() {
        let e,
            t,
            n,
            r = this.videoElement;
        this.cachedCodecInfo?.videoWidth != null && this.cachedCodecInfo?.videoHeight != null
            ? ((e = this.cachedCodecInfo.videoWidth), (t = this.cachedCodecInfo.videoHeight), (n = `${e}x${t}`))
            : ((e = 0 !== r.videoWidth ? r.videoWidth : 0),
              (t = 0 !== r.videoHeight ? r.videoHeight : 0),
              (n = e > 0 && t > 0 ? `${e}x${t}` : "Unknown"));
        let i = Math.round(r.clientWidth),
            s = Math.round(r.clientHeight),
            a = [],
            o = 0,
            l = r.currentTime;
        for (let e = 0; e < r.buffered.length; e++) {
            let t = r.buffered.start(e),
                n = r.buffered.end(e);
            a.push({ start: t, end: n }), n > l && (t <= l ? (o += n - l) : (o += n - t));
        }
        let u = 0,
            c = 0,
            d = 0,
            _ = null;
        if ("function" == typeof r.getVideoPlaybackQuality) {
            let e = r.getVideoPlaybackQuality();
            (u = e.droppedVideoFrames), (d = (c = e.totalVideoFrames) > 0 ? (u / c) * 100 : 0);
        }
        if (this.cachedCodecInfo?.frameRate != null) _ = this.cachedCodecInfo.frameRate;
        else if ("function" == typeof r.getVideoPlaybackQuality) {
            if (null !== this.lockedFrameRate) _ = this.lockedFrameRate;
            else if (Math.abs(r.currentTime - this.lastCurrentTime) > 1.5 && this.lastCurrentTime > 0)
                if (this.recentFrameRates.length >= 3) {
                    let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
                    (this.lockedFrameRate = Math.round(e)),
                        (_ = this.lockedFrameRate),
                        (this.lastKnownFrameRate = this.lockedFrameRate);
                } else
                    (this.baselineFrames = c),
                        (this.baselineTime = r.currentTime),
                        (this.recentFrameRates = []),
                        (_ = this.lastKnownFrameRate);
            else {
                let e = c - this.baselineFrames,
                    t = r.currentTime - this.baselineTime;
                t >= 1 && e > 0
                    ? (this.recentFrameRates.push(e / t),
                      this.recentFrameRates.length > 5 && this.recentFrameRates.shift(),
                      (_ = Math.round(this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length)),
                      (this.lastKnownFrameRate = _))
                    : null !== this.lastKnownFrameRate && (_ = this.lastKnownFrameRate);
            }
            this.lastCurrentTime = r.currentTime;
        }
        let f = r.error?.code ?? null,
            p = r.error?.message ?? null;
        return (
            null == this.codecInfoPromise && this.fetchCodecInfo(),
            {
                resolution: n,
                videoWidth: e,
                videoHeight: t,
                viewportWidth: i,
                viewportHeight: s,
                currentTime: r.currentTime,
                duration: r.duration,
                bufferedRanges: a,
                bufferedSeconds: o,
                droppedFrames: u,
                totalFrames: c,
                droppedFramesPercent: d,
                frameRate: _,
                src: r.src,
                fileSizeBytes: this.fileSizeBytes,
                codecInfo: this.cachedCodecInfo,
                errorCode: f,
                errorMessage: p,
            }
        );
    }
    startTracking(e) {
        this.stopTracking(),
            (this.updateCallback = e),
            (this.updateInterval = window.setInterval(() => {
                null != this.updateCallback && this.updateCallback(this.getStats());
            }, 1e3));
    }
    stopTracking() {
        null !== this.updateInterval && (window.clearInterval(this.updateInterval), (this.updateInterval = null)),
            (this.updateCallback = null);
    }
    destroy() {
        this.stopTracking();
    }
}
