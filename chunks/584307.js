s.d(t, { A: () => h });
var a = s(621466),
    i = s(933681),
    n = s(945810),
    l = s(544180),
    r = s(174459),
    o = s(652215);
let u = (0, n.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class h {
    metadata;
    playTimeSec = 0;
    playWallTimeMs = 0;
    firstPlayWaitingMs = 0;
    stallCount = 0;
    stallMs = 0;
    seekCount = 0;
    seekWaitingMs = 0;
    errorMessage = null;
    errorCode = null;
    stateTime = performance.now();
    currentState = "not_started";
    playbackStartTime;
    lastPlayingTime;
    analyticsEnabled;
    constructor(e) {
        ((this.metadata = e), (this.analyticsEnabled = u.getConfig({ location: "media_player" }).enabled));
    }
    moveToState(e) {
        ((this.stateTime = performance.now()), (this.currentState = e));
    }
    timeInState() {
        return performance.now() - this.stateTime;
    }
    sendEvent() {
        (this.analyticsEnabled &&
            (null == this.errorCode &&
                null == this.errorMessage &&
                !1 === this.metadata.hasValidFrame &&
                ((this.errorCode = 4),
                (this.errorMessage = "No valid video frames detected - codec may be unsupported")),
            r.default.track(o.HAw.MEDIA_PLAY_FINISHED, {
                play_time_sec: this.playTimeSec,
                play_wall_time_ms: this.playWallTimeMs,
                first_play_waiting_ms: this.firstPlayWaitingMs,
                stall_count: this.stallCount,
                stall_ms: this.stallMs,
                seek_count: this.seekCount,
                seek_waiting_ms: this.seekWaitingMs,
                media_source: this.metadata.src,
                mime_type: this.metadata.mimeType,
                file_size: this.metadata.fileSize,
                file_duration_sec: this.metadata.fileDurationSec,
                connection_type: l.A.getType(),
                effective_connection_speed: l.A.getEffectiveConnectionSpeed(),
                service_provider: l.A.getServiceProvider(),
                error_message: this.errorMessage,
                error_code: this.errorCode,
            })),
            (this.playTimeSec = 0),
            (this.playWallTimeMs = 0),
            (this.firstPlayWaitingMs = 0),
            (this.stallCount = 0),
            (this.stallMs = 0),
            (this.seekCount = 0),
            (this.seekWaitingMs = 0),
            (this.playbackStartTime = void 0),
            (this.lastPlayingTime = void 0),
            this.moveToState("not_started"));
    }
    updatePlayTime(e) {
        ((this.playTimeSec += Math.max((this.lastPlayingTime ?? e) - (this.playbackStartTime ?? 0), 0)),
            (this.playWallTimeMs += this.timeInState()));
    }
    onWaiting = (e) => {
        switch (this.currentState) {
            case "not_started":
                this.moveToState("not_started_waiting");
                break;
            case "playing":
                (this.updatePlayTime(e.currentTarget.currentTime), (this.stallCount += 1), this.moveToState("stalled"));
                break;
            case "seeking":
            case "not_started_waiting":
            case "stalled":
                break;
            case "paused":
            case "seeked":
                this.moveToState("stalled");
                break;
            default:
                (0, i.dr)(this.currentState);
        }
    };
    onSeeking = (e) => {
        switch (this.currentState) {
            case "seeking":
            case "seeked":
                this.moveToState("seeking");
                return;
            case "stalled":
                this.stallMs += this.timeInState();
                break;
            case "playing":
                this.updatePlayTime(e.currentTarget.currentTime);
                break;
            case "not_started":
            case "not_started_waiting":
            case "paused":
                break;
            default:
                (0, i.dr)(this.currentState);
        }
        ((this.seekCount += 1), this.moveToState("seeking"));
    };
    onSeeked = (e) => {
        switch (this.currentState) {
            case "seeking":
            case "seeked":
                let t = this.stateTime;
                (this.moveToState("seeked"), (this.stateTime = t));
                break;
            case "not_started":
            case "not_started_waiting":
            case "stalled":
            case "playing":
            case "paused":
                break;
            default:
                (0, i.dr)(this.currentState);
        }
    };
    onPause = (e) => {
        switch (this.currentState) {
            case "playing":
                (this.updatePlayTime(e.currentTarget.currentTime), this.moveToState("paused"), this.sendEvent());
                break;
            case "stalled":
                ((this.stallMs += this.timeInState()), this.moveToState("paused"), this.sendEvent());
                break;
            case "not_started":
            case "not_started_waiting":
            case "paused":
            case "seeking":
                break;
            case "seeked":
                ((this.seekWaitingMs += this.timeInState()), (this.seekCount += 1));
                break;
            default:
                (0, i.dr)(this.currentState);
        }
    };
    onError = (e) => {
        (this.moveToState("paused"), this.sendEvent());
    };
    onPlaying = (e) => {
        switch (this.currentState) {
            case "playing":
                return;
            case "not_started":
                this.firstPlayWaitingMs = 0;
                break;
            case "not_started_waiting":
                this.firstPlayWaitingMs = this.timeInState();
                break;
            case "stalled":
                this.stallMs += this.timeInState();
                break;
            case "seeked":
                this.seekWaitingMs += this.timeInState();
                break;
            case "paused":
            case "seeking":
                break;
            default:
                (0, i.dr)(this.currentState);
        }
        ((this.playbackStartTime = e.currentTarget.currentTime), this.moveToState("playing"));
    };
    onTimeUpdate = (e) => {
        switch (this.currentState) {
            case "playing":
                this.lastPlayingTime = e.currentTarget.currentTime;
                return;
            case "not_started":
            case "not_started_waiting":
            case "stalled":
            case "seeked":
            case "paused":
            case "seeking":
                break;
            default:
                (0, i.dr)(this.currentState);
        }
    };
    onDragStart = (e) => {
        null != e && (this.lastPlayingTime = e);
    };
    onDragEnd = () => {
        "seeked" === this.currentState && (this.stateTime = performance.now());
    };
    onLoadedMetadata = (e) => {
        this.metadata.fileDurationSec = e.currentTarget.duration;
    };
    checkVideoDecodability(e, t) {
        if (null == e || !(0, a.vq)(e, HTMLVideoElement)) return;
        if (!t) {
            this.metadata.hasValidFrame = !0;
            return;
        }
        if (null != this.metadata.hasValidFrame) return;
        let s = e.videoHeight,
            i = e.currentTime,
            n = e.readyState;
        if (0 === s && n >= 2)
            return void setTimeout(() => {
                if (null == e) return;
                let t = e.videoHeight,
                    s = e.currentTime;
                if (0 === t && s > i + 0.5) {
                    this.metadata.hasValidFrame = !1;
                    return;
                }
                if (t > 0) {
                    this.metadata.hasValidFrame = !0;
                    return;
                }
            }, 1500);
        if (s > 0) {
            this.metadata.hasValidFrame = !0;
            return;
        }
    }
}
