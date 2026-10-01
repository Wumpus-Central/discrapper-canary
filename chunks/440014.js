(s.d(t, { rB: () => q, Ay: () => es }), s(321073));
var n = s(477900),
    a = s(582128),
    l = s(503698),
    i = s.n(l),
    r = s(435558),
    o = s.n(r),
    u = s(615300),
    d = s(621466),
    c = s(933681),
    h = s(939249),
    m = s(113494),
    p = s(782134),
    f = s(559106),
    g = s(43990),
    v = s(607470),
    C = s(384015),
    A = s(945810),
    x = s(953051),
    y = s(423562),
    S = s(544180),
    _ = s(953727);
function E(e) {
    let { width: t = 16, height: s = 16, color: a = "currentColor", foreground: l, ...i } = e;
    return (0, n.jsx)("svg", {
        ...(0, _.A)(i),
        width: t,
        height: s,
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            className: l,
            fill: a,
            d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z",
        }),
    });
}
var N = s(174459),
    j = s(927813),
    M = s(824744),
    I = s(475815),
    T = s(953584),
    b = s(122641),
    w = s(692051),
    R = s(375708),
    D = s(317714);
function k(e) {
    let { onPlay: t, className: s, inactive: l } = e,
        r = a.useRef(null),
        o = (0, n.jsx)("div", {
            className: D.P0,
            ref: r,
            children: (0, n.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: D.Kk }),
        });
    return (0, n.jsx)(w.Y.Consumer, {
        children: (e) =>
            l || null == t
                ? (0, n.jsx)("div", { className: D.Iv, children: o })
                : (0, n.jsx)(h.D, {
                      className: i()(s, D.Iv, { [D.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": R.intl.string(R.t.RscU7I),
                      focusProps: { ringTarget: r },
                      children: o,
                  }),
    });
}
var L = s(821209),
    P = s(338659),
    O = s(410694),
    U = s(20504),
    V = s(652215),
    F = s(838541),
    B = s(650583),
    H = s(311225),
    W = s(938442);
let G = "-:--",
    z = { friction: 14, tension: 200 },
    K = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    Y = { width: "100%", height: "100%", backgroundColor: "black" };
function q(e) {
    let t = 0 | e,
        s = t % 60;
    return `${(t - s) / 60}:${String(s).padStart(2, "0")}`;
}
function Q(e) {
    let { current: t, duration: s } = e,
        a = null != t ? q(t) : G,
        l = null != s ? q(s) : G;
    return (
        (a = a.padStart(l.length, "0")),
        (0, n.jsxs)("div", {
            className: H.d$,
            children: [
                (0, n.jsx)("span", { className: H.Ue, children: a }),
                (0, n.jsx)("span", { className: H.zO, children: "/" }),
                (0, n.jsx)("span", { className: H.Ue, children: l }),
            ],
        })
    );
}
class Z extends a.Component {
    static defaultProps = { disabled: !1 };
    state = { translateY: new u.A.Value(0) };
    volumeButton;
    durationBar;
    componentDidMount() {
        this.state.translateY.setValue(+!!this.props.autoPlay);
    }
    componentDidUpdate(e) {
        let { hide: t, playing: s } = this.props;
        t && !e.hide
            ? (this.animateControls(1, s), this.volumeButton?.blur(), this.props.onControlsHide?.())
            : !t && e.hide && (this.animateControls(0, s), this.props.onControlsShow?.());
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: s } = this;
        null != s && s.setGrabber(e, t);
    }
    animateControls(e, t) {
        let { translateY: s } = this.state;
        t ? u.A.spring(s, { toValue: e, ...z }).start() : s.setValue(e);
    }
    setDurationRef = (e) => {
        this.durationBar = e;
    };
    setVolumeButtonRef = (e) => {
        this.volumeButton = e;
    };
    getAnimatedStyle() {
        let { translateY: e } = this.state;
        return { transform: [{ translateY: e.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) }] };
    }
    renderPlayIcon() {
        let { playing: e, currentTime: t, duration: s, onPause: a, onPlay: l, disabled: i } = this.props;
        return e
            ? (0, n.jsx)(h.D, {
                  className: H.CY,
                  onClick: a,
                  tabIndex: i ? -1 : 0,
                  "aria-label": R.intl.string(R.t.ZcgDJX),
                  children: (0, n.jsx)(m.PauseIcon, { size: "xs", color: "currentColor", className: H.pd }, "pause"),
              })
            : null != t && t === s
              ? (0, n.jsx)(h.D, {
                    className: H.CY,
                    onClick: l,
                    tabIndex: i ? -1 : 0,
                    "aria-label": R.intl.string(R.t.hsvh0i),
                    children: (0, n.jsx)(E, { className: H.pd }, "replay"),
                })
              : (0, n.jsx)(h.D, {
                    className: H.CY,
                    onClick: l,
                    tabIndex: i ? -1 : 0,
                    "aria-label": R.intl.string(R.t.RscU7I),
                    children: (0, n.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: H.pd }, "play"),
                });
    }
    render() {
        let {
            buffers: e,
            children: t,
            currentTime: s,
            duration: a,
            muted: l,
            onDrag: i,
            onDragEnd: r,
            onDragStart: o,
            onToggleMuted: d,
            onVolumeShow: c,
            onVolumeHide: h,
            width: m,
            volume: p,
            type: f,
        } = this.props;
        return (0, n.jsxs)(u.A.div, {
            className: f === K.VIDEO ? H._v : H.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof m || m > 250 ? (0, n.jsx)(Q, { current: s, duration: a }) : null,
                (0, n.jsx)(b.A, {
                    buffers: e,
                    value: a ?? 0,
                    onDrag: i,
                    onDragEnd: r,
                    onDragStart: o,
                    type: b.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, n.jsx)("div", {
                    className: W.Uu,
                    children: (0, n.jsx)(U.A, {
                        ref: this.setVolumeButtonRef,
                        muted: l,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => i(e, b.A.Types.VOLUME),
                        onToggleMute: d,
                        onVolumeShow: c,
                        onVolumeHide: h,
                        iconClassName: H.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: H.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function $(e) {
    let { fileName: t, fileSize: s, src: a, disabled: l, mimeType: i, hideDownloadButton: r } = e;
    return (0, n.jsxs)("div", {
        className: H.WU,
        children: [
            (0, n.jsxs)("div", {
                className: H.xe,
                children: [
                    l
                        ? t
                        : (0, n.jsx)(C.A, { href: a, className: H.kH, iconClassName: H.XR, mimeType: i, fileName: t }),
                    (0, n.jsx)("div", { className: H.fL, children: s }),
                ],
            }),
            !r && (0, n.jsx)(C.A, { href: a, className: H.kH, iconClassName: H.XR, mimeType: i }),
        ],
    });
}
class X extends a.Component {
    state = { play: !1, scale: new u.A.Value(0), opacity: new u.A.Value(0) };
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState({ play: e }, this.popAnimation);
    }
    popAnimation = () => {
        let { opacity: e, scale: t } = this.state;
        (t.setValue(0),
            e.setValue(0),
            u.A.parallel([
                u.A.sequence([
                    u.A.timing(e, { toValue: 1, duration: 200 }),
                    u.A.timing(e, { toValue: 0, duration: 200 }),
                ]),
                u.A.spring(t, { toValue: 1.5, ...z, friction: 80 }),
            ]).start());
    };
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state;
        return u.A.accelerate({
            opacity: e.interpolate({ inputRange: [0, 1], outputRange: [0, 0.8] }),
            transform: [{ scale: t.interpolate({ inputRange: [0, 1], outputRange: [1, 2] }) }],
        });
    }
    render() {
        let { play: e } = this.state,
            t = e ? p.PlayIcon : m.PauseIcon;
        return (0, n.jsx)(u.A.div, {
            className: H.kO,
            style: this.getAnimatedStyle(),
            children: (0, n.jsx)(t, { className: H.PK }),
        });
    }
}
let J = (0, A.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class ee {
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
        ((this.metadata = e), (this.analyticsEnabled = J.getConfig({ location: "media_player" }).enabled));
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
            N.default.track(V.HAw.MEDIA_PLAY_FINISHED, {
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
                connection_type: S.A.getType(),
                effective_connection_speed: S.A.getEffectiveConnectionSpeed(),
                service_provider: S.A.getServiceProvider(),
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
                (0, c.dr)(this.currentState);
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
                (0, c.dr)(this.currentState);
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
                (0, c.dr)(this.currentState);
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
                (0, c.dr)(this.currentState);
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
                (0, c.dr)(this.currentState);
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
                (0, c.dr)(this.currentState);
        }
    };
    onDragStart = (e) => {
        null != e && (this.lastPlayingTime = e);
    };
    onLoadedMetadata = (e) => {
        this.metadata.fileDurationSec = e.currentTarget.duration;
    };
}
class et extends a.PureComponent {
    static Types = K;
    static defaultProps = {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1,
    };
    static minWidth = 150;
    static minHeight = 110;
    _unmounted = !1;
    _lastMove = 0;
    _analytics;
    _statsCollector = null;
    _hasStatsListener = !1;
    mediaRef = a.createRef();
    controlsRef = a.createRef();
    handleVideoRef = (e) => {
        ((this.mediaRef.current = e), null != this.props.videoRef && (this.props.videoRef.current = e));
    };
    playPausePopRef = a.createRef();
    containerRef = a.createRef();
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing ? { playing: !1, hideControls: !1 } : null;
    }
    constructor(e) {
        (super(e),
            (this._analytics = new ee({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes })));
        const { autoPlay: t, autoMute: s, volume: n, playable: a } = this.props,
            l = "function" == typeof n ? n() : n,
            i = "function" == typeof s ? s() : s;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !a,
            muted: i,
            volume: l,
            playing: t,
            preload: "none",
            width: et.minWidth,
            height: et.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: s } = this.state,
            { type: n, src: a } = this.props;
        if (
            n === K.VIDEO &&
            (T.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            T.Ay.isVideoStatsEnabled(a) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                T.Ay.setVideoStats(a, !1);
            }
        let { current: l } = this.mediaRef;
        null != l && (t && (l.muted = t), e && (this.play(!0), this.handleUIUpdate()), (l.volume = s));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: s, onVolumeChange: n, onMute: a, src: l, type: i },
            state: { playing: r, fullscreen: o, muted: u, dragging: d, volume: c, showStats: h },
        } = this;
        if (l !== e.src && i === K.VIDEO) {
            (null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                T.Ay.clearVideoStats(e.src));
            let t = T.Ay.isVideoStatsEnabled(l);
            h !== t && (t ? this.toggleStats() : h && this.toggleStats());
        }
        let { current: m } = this.mediaRef,
            { current: p } = this.playPausePopRef;
        if (null == m) return;
        (r && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && p?.pop(r))
            : !r && t.playing && (m.pause(), p?.pop(r), s?.()),
            r && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability());
        let f = (0, I.qf)(m.parentNode, m);
        (o && !t.fullscreen && null != f
            ? ((0, I.tl)(f), f.addEventListener(I.Wb, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != f &&
              (f.removeEventListener(I.Wb, this.handleFullScreenExit), (0, I.sP)(f, f.ownerDocument)),
            d === b.A.Types.DURATION && t.dragging !== b.A.Types.DURATION && r
                ? m.pause()
                : d !== b.A.Types.DURATION && t.dragging === b.A.Types.DURATION && r && m.play(),
            u !== t.muted && ((m.muted = u), a?.(u)),
            c !== t.volume && ((m.volume = c), n?.(c)));
    }
    componentWillUnmount() {
        ((this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (T.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === K.VIDEO && T.Ay.clearVideoStats(this.props.src)));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, I.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(I.Wb, this.handleFullScreenExit), (0, I.sP)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: s, autoMute: n } = this.props,
            { current: a } = this.mediaRef;
        if (null != a) {
            let l = {};
            if ("function" == typeof s) {
                let e = s();
                e !== this.state.volume && ((a.volume = e), (l.volume = e));
            }
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.muted && ((a.muted = e), (l.muted = e));
            }
            (this.setState(l), a.play(), t?.(e, a.currentTime * j.A.Millis.SECOND, a.duration * j.A.Millis.SECOND));
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, et.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, et.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, I.qf)(e.parentNode, e);
        (null != t && (0, I._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
    };
    toggleFullscreen = () => {
        if (null != this.props.onFullscreenChange) return void this.props.onFullscreenChange(!this.state.fullscreen);
        let e = !this.state.fullscreen;
        this.setState({ fullscreen: e });
    };
    setMuted = (e) => {
        this.setState({ muted: e });
    };
    toggleMuted = () => {
        this.setMuted(!this.state.muted);
    };
    setTime = (() => {
        var e = this;
        return function (t) {
            let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { current: n } = e.mediaRef;
            null != n &&
                isFinite(n.duration) &&
                isFinite(n.currentTime) &&
                ((n.currentTime = t), e.updateValue(t / n.duration, s), e.updateTime(t, n.duration));
        };
    })();
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: s } = this.controlsRef;
        null != s && s.updateProgress(e, t);
    }
    updateTime(e, t) {
        let s = 0 | e,
            n = 0 | t;
        (this.state.currentTime !== s || this.state.duration !== n) && this.setState({ currentTime: s, duration: n });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: t } = this.state,
            s = Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
        s !== this.state.hideControls && null == e && this.setState({ hideControls: s });
    }
    handleUIUpdate = () => {
        if (!this.state.playing || this._unmounted) return;
        let { current: e } = this.mediaRef;
        null != e &&
            (e.duration > 0 && this.updateValue(e.currentTime / e.duration),
            this.updateTime(e.currentTime, e.duration),
            this.updateControlsVisibility(),
            requestAnimationFrame(this.handleUIUpdate));
    };
    handleDrag = (e, t) => {
        let { current: s } = this.mediaRef;
        if (t === b.A.Types.DURATION) null != s && isFinite(s.duration) && this.setTime(s.duration * e, !1);
        else if (t === b.A.Types.VOLUME) {
            let t = (0, M.w)(e, 1);
            0 === t
                ? this.setState({ muted: !0, volume: t })
                : this.state.muted && t > 0
                  ? this.setState({ muted: !1, volume: t })
                  : this.setState({ volume: t });
        }
    };
    handleLoaded = (e) => {
        this._analytics.onLoadedMetadata(e);
        let { current: t } = this.mediaRef;
        null != t &&
            (null != this.props.initialTimeSec &&
                this.props.initialTimeSec > 0 &&
                (t.currentTime = this.props.initialTimeSec),
            this.updateTime(t.currentTime, t.duration),
            this.setState({ hasLoadedMetadata: !0, currentTime: t.currentTime, duration: t.duration }));
    };
    handleDurationChange = () => {
        let { current: e } = this.mediaRef;
        null != e && (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
    };
    handleBuffer = o().debounce(() => {
        let { current: e } = this.mediaRef;
        null == e
            ? this.setState({ buffers: [] })
            : this.setState({
                  buffers: (function (e) {
                      let t = [],
                          { duration: s } = e;
                      for (let n = 0; n < e.buffered.length; n++) {
                          let a = e.buffered.start(n),
                              l = e.buffered.end(n);
                          if (l - a < 1) continue;
                          let i = (l - a) / s,
                              r = a / s;
                          t.push([r, i]);
                      }
                      return t;
                  })(e),
              });
    }, 400);
    handleEnded = (e) => {
        let { onEnded: t } = this.props;
        (null != t && t(e), this.setState({ playing: !1, hideControls: !1 }));
    };
    handleMouseMove = () => {
        this._lastMove = Date.now();
    };
    handleMouseLeave = () => {
        (this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 }));
    };
    handleMouseEnter = () => {
        ("none" === this.state.preload && this.setState({ preload: "metadata" }), this.setState({ hovering: !0 }));
    };
    shouldUnmuteOnFirstInteraction() {
        let {
            props: { autoMute: e, disableClickToUnmute: t },
            state: { hasClickedPlay: s, muted: n },
        } = this;
        return !t && !s && e && n;
    }
    handleVideoClick = (e) => {
        let {
            state: { playing: t },
            props: { onClick: s, autoPlay: n },
        } = this;
        null != s
            ? s(e)
            : (e.stopPropagation(),
              n && t && this.shouldUnmuteOnFirstInteraction()
                  ? this.setState({ muted: !1, hasClickedPlay: !0 })
                  : this.setPlay(!this.state.playing));
    };
    setPlay = (e) => {
        let {
            state: { muted: t },
        } = this;
        e !== this.state.playing &&
            (e
                ? this.setState({ playing: e, hasClickedPlay: !0, muted: !this.shouldUnmuteOnFirstInteraction() && t })
                : this.setState({ playing: !1, hideControls: !1 }));
    };
    handleDragStart = (e) => {
        (this.setState({ dragging: e }), this._analytics.onDragStart(this.mediaRef.current?.currentTime ?? null));
    };
    handleDragEnd = () => {
        (this.setState({ dragging: null }), (this._lastMove = Date.now()));
    };
    handleKeyDown = (e) => {
        let { current: t } = this.mediaRef,
            { disableArrowKeySeek: s } = this.props;
        if (e.key === B.dh.SPACE) (e.preventDefault(), this.setPlay(!this.state.playing));
        else if (e.key !== B.dh.ARROW_LEFT || null == t || s)
            if (e.key !== B.dh.ARROW_RIGHT || null == t || s) {
                if ((0, x.A)(e.key) && null != t) {
                    (e.preventDefault(), e.stopPropagation());
                    let s = Number(e.key) / 10;
                    ((t.currentTime = t.duration * s), this.setPlay(!0));
                }
            } else {
                (e.preventDefault(), e.stopPropagation());
                let s = Math.min(isFinite(t.duration) ? t.duration : 0, t.currentTime + 5);
                this.setTime(s);
            }
        else {
            (e.preventDefault(), e.stopPropagation());
            let s = Math.max(0, t.currentTime - 5);
            this.setTime(s);
        }
    };
    handleError = (e) => {
        let t = e.currentTarget;
        ((this._analytics.errorCode = t.error?.code ?? null),
            (this._analytics.errorMessage = t.error?.message ?? null),
            this._analytics.onError(e));
    };
    _isUpdatingStats = !1;
    toggleStats = () => {
        let { showStats: e } = this.state,
            { current: t } = this.mediaRef,
            { src: s } = this.props;
        if (e)
            (null != this._statsCollector && this._statsCollector.stopTracking(),
                (this._isUpdatingStats = !0),
                this.setState({ showStats: !1 }, () => {
                    ((this._isUpdatingStats = !1), this._unmounted || T.Ay.setVideoStats(this.props.src, !1));
                }));
        else if (null != t && (0, d.vq)(t, HTMLVideoElement))
            try {
                (null == this._statsCollector && (this._statsCollector = new P.s(t, this.props.fileSizeBytes)),
                    this._statsCollector.startTracking(this.handleStatsUpdate),
                    (this._isUpdatingStats = !0),
                    this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
                        ((this._isUpdatingStats = !1), this._unmounted || T.Ay.setVideoStats(this.props.src, !0));
                    }));
            } catch (e) {
                (null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                    (this._isUpdatingStats = !1),
                    this._unmounted || T.Ay.setVideoStats(this.props.src, !1));
            }
        else T.Ay.setVideoStats(s, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== K.VIDEO ||
            this._isUpdatingStats ||
            (T.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: s, forceExternal: a, responsive: l, mediaLayoutType: i } = this.props,
            { playing: r, fullscreen: o } = this.state,
            u = this.getWidth(),
            d = this.getHeight();
        return a
            ? (0, n.jsx)(v.A, {
                  alt: e,
                  className: H.Ki,
                  controls: !1,
                  height: d,
                  poster: s,
                  width: u,
                  responsive: l && !o,
                  mediaLayoutType: i,
                  playsInline: !0,
                  autoPlay: r,
              })
            : (0, n.jsx)(v.A, {
                  alt: e,
                  className: H.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: r,
                  height: d,
                  responsive: l && !o,
                  mediaLayoutType: o ? F.dG.STATIC : i,
                  onClick: this.handleVideoClick,
                  onEnded: this.handleEnded,
                  onError: this.handleError,
                  onWaiting: this._analytics.onWaiting,
                  onSeeking: this._analytics.onSeeking,
                  onSeeked: this._analytics.onSeeked,
                  onPause: this._analytics.onPause,
                  onPlaying: this._analytics.onPlaying,
                  onTimeUpdate: this._analytics.onTimeUpdate,
                  onLoadedMetadata: this.handleLoaded,
                  onProgress: this.handleBuffer,
                  poster: s,
                  preload: this.state.preload,
                  ref: this.handleVideoRef,
                  width: u,
                  src: t,
              });
    }
    renderAudio() {
        return (0, n.jsx)("audio", {
            className: H.z7,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, n.jsx)("source", { src: this.props.src }),
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: {
                    type: t,
                    autoPlay: s,
                    playable: a = !0,
                    onVolumeShow: l,
                    onVolumeHide: i,
                    onControlsHide: r,
                    onControlsShow: o,
                },
                state: {
                    buffers: u,
                    currentTime: d,
                    duration: c,
                    hasClickedPlay: h,
                    hideControls: m,
                    muted: p,
                    playing: f,
                    fullscreen: g,
                    volume: v,
                    dragging: C,
                },
            } = this,
            A = this.getWidth();
        return h || s || t === K.AUDIO
            ? (0, n.jsx)(Z, {
                  buffers: u,
                  currentTime: d,
                  duration: c,
                  volume: (0, M.M)(v, 1),
                  hide: t === K.VIDEO && m,
                  muted: p,
                  autoPlay: s,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: l,
                  onVolumeHide: i,
                  onControlsShow: o,
                  onControlsHide: r,
                  playing: f,
                  dragging: C,
                  type: t,
                  ref: this.controlsRef,
                  width: g ? window.screen.width : A,
                  disabled: !a,
                  children:
                      t === K.VIDEO && !1 !== this.props.allowFullScreen
                          ? (0, n.jsx)(y.A, {
                                "aria-label": R.intl.string(R.t["2nM3Pk"]),
                                className: H.CY,
                                iconClassName: H.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, I.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, n.jsx)(k, { onPlay: this.handleVideoClick, inactive: !a });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: s, type: a, playable: l, mimeType: i } = this.props;
        return null == e || null == t
            ? null
            : a === K.AUDIO
              ? (0, n.jsx)($, { fileName: e, fileSize: t, src: s, disabled: !l, mimeType: i, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, n.jsx)(X, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: s } = this.props,
            { fullscreen: n } = this.state,
            a = this.getWidth();
        return n ? Y : t === K.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: a, height: s };
    }
    render() {
        let {
                height: e,
                type: t,
                src: s,
                forceExternal: a,
                className: l,
                renderLinkComponent: r,
                responsive: o,
                mediaLayoutType: u,
                renderOverlayContent: d,
            } = this.props,
            { fullscreen: c, hideControls: h, playing: m } = this.state,
            p = H.bQ;
        if ((t === K.AUDIO ? (p = H._X) : h ? (p = H.CX) : m && (p = H.sw), a && t === K.VIDEO)) {
            let t = this.getWidth();
            return (0, n.jsxs)("div", {
                className: i()(p, { [H.mE]: u === F.dG.MOSAIC }),
                style: o ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, n.jsx)("div", {
                        className: H.s4,
                        children: (0, n.jsx)(L.A, {
                            className: H.__invalid_playButton,
                            externalURL: s,
                            renderLinkComponent: r,
                        }),
                    }),
                ],
            });
        }
        return (0, n.jsx)("div", {
            ref: this.containerRef,
            className: i()(p, H.mr, l, { [H.mE]: u === F.dG.MOSAIC }),
            "data-fullscreen": c,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: m ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: (0, n.jsxs)(f.xp, {
                containerRef: this.containerRef,
                children: [
                    this.renderMetadata(),
                    t === K.AUDIO ? this.renderAudio() : this.renderVideo(),
                    (0, n.jsx)(g.N, {
                        theme: V.NJ8.ONYX,
                        children: (e) => (0, n.jsx)("div", { className: e, children: this.renderControls() }),
                    }),
                    t === K.VIDEO ? this.renderPlayPausePop() : null,
                    null != d ? (0, n.jsx)("div", { className: i()({ [H.eM]: m || c }), children: d() }) : null,
                    t === K.VIDEO && this.state.showStats && null != this.state.videoStats
                        ? (0, n.jsx)(O.VideoStatsOverlay, { stats: this.state.videoStats, onClose: this.toggleStats })
                        : null,
                ],
            }),
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, d.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== K.VIDEO) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
        if (null != this._analytics.metadata.hasValidFrame) return;
        let t = e.videoHeight,
            s = e.currentTime,
            n = e.readyState;
        if (0 === t && n >= 2)
            return void setTimeout(() => {
                if (null == e) return;
                let t = e.videoHeight,
                    n = e.currentTime;
                if (0 === t && n > s + 0.5) {
                    this._analytics.metadata.hasValidFrame = !1;
                    return;
                }
                if (t > 0) {
                    this._analytics.metadata.hasValidFrame = !0;
                    return;
                }
            }, 1500);
        if (t > 0) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
    }
}
let es = et;
