"use strict";
n.d(t, { s: () => l }), n(321073);
var r = n(265486);
let i = 1.5,
    s = 5,
    a = 1,
    o = 1e3;
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
        let o = Math.round(r.clientWidth),
            l = Math.round(r.clientHeight),
            u = [],
            c = 0,
            d = r.currentTime;
        for (let e = 0; e < r.buffered.length; e++) {
            let t = r.buffered.start(e),
                n = r.buffered.end(e);
            u.push({ start: t, end: n }), n > d && (t <= d ? (c += n - d) : (c += n - t));
        }
        let _ = 0,
            f = 0,
            p = 0,
            h = null;
        if ("function" == typeof r.getVideoPlaybackQuality) {
            let e = r.getVideoPlaybackQuality();
            (_ = e.droppedVideoFrames), (p = (f = e.totalVideoFrames) > 0 ? (_ / f) * 100 : 0);
        }
        if (this.cachedCodecInfo?.frameRate != null) h = this.cachedCodecInfo.frameRate;
        else if ("function" == typeof r.getVideoPlaybackQuality) {
            if (null !== this.lockedFrameRate) h = this.lockedFrameRate;
            else if (Math.abs(r.currentTime - this.lastCurrentTime) > i && this.lastCurrentTime > 0)
                if (this.recentFrameRates.length >= 3) {
                    let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
                    (this.lockedFrameRate = Math.round(e)),
                        (h = this.lockedFrameRate),
                        (this.lastKnownFrameRate = this.lockedFrameRate);
                } else
                    (this.baselineFrames = f),
                        (this.baselineTime = r.currentTime),
                        (this.recentFrameRates = []),
                        (h = this.lastKnownFrameRate);
            else {
                let e = f - this.baselineFrames,
                    t = r.currentTime - this.baselineTime;
                if (t >= a && e > 0) {
                    let n = e / t;
                    this.recentFrameRates.push(n),
                        this.recentFrameRates.length > s && this.recentFrameRates.shift(),
                        (h = Math.round(
                            this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length,
                        )),
                        (this.lastKnownFrameRate = h);
                } else null !== this.lastKnownFrameRate && (h = this.lastKnownFrameRate);
            }
            this.lastCurrentTime = r.currentTime;
        }
        let m = r.error?.code ?? null,
            E = r.error?.message ?? null;
        return (
            null == this.codecInfoPromise && this.fetchCodecInfo(),
            {
                resolution: n,
                videoWidth: e,
                videoHeight: t,
                viewportWidth: o,
                viewportHeight: l,
                currentTime: r.currentTime,
                duration: r.duration,
                bufferedRanges: u,
                bufferedSeconds: c,
                droppedFrames: _,
                totalFrames: f,
                droppedFramesPercent: p,
                frameRate: h,
                src: r.src,
                fileSizeBytes: this.fileSizeBytes,
                codecInfo: this.cachedCodecInfo,
                errorCode: m,
                errorMessage: E,
            }
        );
    }
    startTracking(e) {
        this.stopTracking(),
            (this.updateCallback = e),
            (this.updateInterval = window.setInterval(() => {
                null != this.updateCallback && this.updateCallback(this.getStats());
            }, o));
    }
    stopTracking() {
        null !== this.updateInterval && (window.clearInterval(this.updateInterval), (this.updateInterval = null)),
            (this.updateCallback = null);
    }
    destroy() {
        this.stopTracking();
    }
}
