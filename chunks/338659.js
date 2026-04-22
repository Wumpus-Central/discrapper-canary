"use strict";
n.d(t, { s: () => l }), n(321073);
var i = n(43105);
class l {
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
        this.codecInfoPromise = (0, i.K)(e);
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
            i = this.videoElement;
        this.cachedCodecInfo?.videoWidth != null && this.cachedCodecInfo?.videoHeight != null
            ? ((e = this.cachedCodecInfo.videoWidth), (t = this.cachedCodecInfo.videoHeight), (n = `${e}x${t}`))
            : ((e = 0 !== i.videoWidth ? i.videoWidth : 0),
              (t = 0 !== i.videoHeight ? i.videoHeight : 0),
              (n = e > 0 && t > 0 ? `${e}x${t}` : "Unknown"));
        let l = Math.round(i.clientWidth),
            s = Math.round(i.clientHeight),
            r = [],
            a = 0,
            o = i.currentTime;
        for (let e = 0; e < i.buffered.length; e++) {
            let t = i.buffered.start(e),
                n = i.buffered.end(e);
            r.push({ start: t, end: n }), n > o && (t <= o ? (a += n - o) : (a += n - t));
        }
        let c = 0,
            u = 0,
            d = 0,
            h = null;
        if ("function" == typeof i.getVideoPlaybackQuality) {
            let e = i.getVideoPlaybackQuality();
            (c = e.droppedVideoFrames), (d = (u = e.totalVideoFrames) > 0 ? (c / u) * 100 : 0);
        }
        if (this.cachedCodecInfo?.frameRate != null) h = this.cachedCodecInfo.frameRate;
        else if ("function" == typeof i.getVideoPlaybackQuality) {
            if (null !== this.lockedFrameRate) h = this.lockedFrameRate;
            else if (Math.abs(i.currentTime - this.lastCurrentTime) > 1.5 && this.lastCurrentTime > 0)
                if (this.recentFrameRates.length >= 3) {
                    let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
                    (this.lockedFrameRate = Math.round(e)),
                        (h = this.lockedFrameRate),
                        (this.lastKnownFrameRate = this.lockedFrameRate);
                } else
                    (this.baselineFrames = u),
                        (this.baselineTime = i.currentTime),
                        (this.recentFrameRates = []),
                        (h = this.lastKnownFrameRate);
            else {
                let e = u - this.baselineFrames,
                    t = i.currentTime - this.baselineTime;
                t >= 1 && e > 0
                    ? (this.recentFrameRates.push(e / t),
                      this.recentFrameRates.length > 5 && this.recentFrameRates.shift(),
                      (h = Math.round(this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length)),
                      (this.lastKnownFrameRate = h))
                    : null !== this.lastKnownFrameRate && (h = this.lastKnownFrameRate);
            }
            this.lastCurrentTime = i.currentTime;
        }
        let m = i.error?.code ?? null,
            p = i.error?.message ?? null;
        return (
            null == this.codecInfoPromise && this.fetchCodecInfo(),
            {
                resolution: n,
                videoWidth: e,
                videoHeight: t,
                viewportWidth: l,
                viewportHeight: s,
                currentTime: i.currentTime,
                duration: i.duration,
                bufferedRanges: r,
                bufferedSeconds: a,
                droppedFrames: c,
                totalFrames: u,
                droppedFramesPercent: d,
                frameRate: h,
                src: i.src,
                fileSizeBytes: this.fileSizeBytes,
                codecInfo: this.cachedCodecInfo,
                errorCode: m,
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
