(n.d(t, { rB: () => Y, Ay: () => en }), n(321073));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    o = n.n(a),
    u = n(615300),
    c = n(621466),
    d = n(933681),
    m = n(939249),
    h = n(113494),
    p = n(782134),
    f = n(559106),
    g = n(43990),
    x = n(607470),
    A = n(384015),
    C = n(945810),
    E = n(953051),
    I = n(423562),
    y = n(544180),
    S = n(953727);
function v(e) {
    let { width: t = 16, height: n = 16, color: i = "currentColor", foreground: s, ...r } = e;
    return (0, l.jsx)("svg", {
        ...(0, S.A)(r),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            className: s,
            fill: i,
            d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z",
        }),
    });
}
var N = n(174459),
    _ = n(927813),
    j = n(824744),
    b = n(475815),
    T = n(953584),
    R = n(122641),
    O = n(692051),
    L = n(375708),
    M = n(317714);
function k(e) {
    let { onPlay: t, className: n, inactive: s } = e,
        a = i.useRef(null),
        o = (0, l.jsx)("div", {
            className: M.P0,
            ref: a,
            children: (0, l.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: M.Kk }),
        });
    return (0, l.jsx)(O.Y.Consumer, {
        children: (e) =>
            s || null == t
                ? (0, l.jsx)("div", { className: M.Iv, children: o })
                : (0, l.jsx)(m.D, {
                      className: r()(n, M.Iv, { [M.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": L.intl.string(L.t.RscU7I),
                      focusProps: { ringTarget: a },
                      children: o,
                  }),
    });
}
var w = n(821209),
    P = n(338659),
    D = n(410694),
    U = n(20504),
    V = n(652215),
    G = n(838541),
    F = n(650583),
    H = n(311225),
    B = n(938442);
let W = "-:--",
    K = { friction: 14, tension: 200 },
    z = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    Z = { width: "100%", height: "100%", backgroundColor: "black" };
function Y(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
function q(e) {
    let { current: t, duration: n } = e,
        i = null != t ? Y(t) : W,
        s = null != n ? Y(n) : W;
    return (
        (i = i.padStart(s.length, "0")),
        (0, l.jsxs)("div", {
            className: H.d$,
            children: [
                (0, l.jsx)("span", { className: H.Ue, children: i }),
                (0, l.jsx)("span", { className: H.zO, children: "/" }),
                (0, l.jsx)("span", { className: H.Ue, children: s }),
            ],
        })
    );
}
class J extends i.Component {
    static defaultProps = { disabled: !1 };
    state = { translateY: new u.A.Value(0) };
    volumeButton;
    durationBar;
    componentDidMount() {
        this.state.translateY.setValue(+!!this.props.autoPlay);
    }
    componentDidUpdate(e) {
        let { hide: t, playing: n } = this.props;
        t && !e.hide
            ? (this.animateControls(1, n), this.volumeButton?.blur(), this.props.onControlsHide?.())
            : !t && e.hide && (this.animateControls(0, n), this.props.onControlsShow?.());
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: n } = this;
        null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
        let { translateY: n } = this.state;
        t ? u.A.spring(n, { toValue: e, ...K }).start() : n.setValue(e);
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
        let { playing: e, currentTime: t, duration: n, onPause: i, onPlay: s, disabled: r } = this.props;
        return e
            ? (0, l.jsx)(m.D, {
                  className: H.CY,
                  onClick: i,
                  tabIndex: r ? -1 : 0,
                  "aria-label": L.intl.string(L.t.ZcgDJX),
                  children: (0, l.jsx)(h.PauseIcon, { size: "xs", color: "currentColor", className: H.pd }, "pause"),
              })
            : null != t && t === n
              ? (0, l.jsx)(m.D, {
                    className: H.CY,
                    onClick: s,
                    tabIndex: r ? -1 : 0,
                    "aria-label": L.intl.string(L.t.hsvh0i),
                    children: (0, l.jsx)(v, { className: H.pd }, "replay"),
                })
              : (0, l.jsx)(m.D, {
                    className: H.CY,
                    onClick: s,
                    tabIndex: r ? -1 : 0,
                    "aria-label": L.intl.string(L.t.RscU7I),
                    children: (0, l.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: H.pd }, "play"),
                });
    }
    render() {
        let {
            buffers: e,
            children: t,
            currentTime: n,
            duration: i,
            muted: s,
            onDrag: r,
            onDragEnd: a,
            onDragStart: o,
            onToggleMuted: c,
            onVolumeShow: d,
            onVolumeHide: m,
            width: h,
            volume: p,
            type: f,
        } = this.props;
        return (0, l.jsxs)(u.A.div, {
            className: f === z.VIDEO ? H._v : H.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof h || h > 250 ? (0, l.jsx)(q, { current: n, duration: i }) : null,
                (0, l.jsx)(R.A, {
                    buffers: e,
                    value: i ?? 0,
                    onDrag: r,
                    onDragEnd: a,
                    onDragStart: o,
                    type: R.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, l.jsx)("div", {
                    className: B.Uu,
                    children: (0, l.jsx)(U.A, {
                        ref: this.setVolumeButtonRef,
                        muted: s,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => r(e, R.A.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: d,
                        onVolumeHide: m,
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
    let { fileName: t, fileSize: n, src: i, disabled: s, mimeType: r, hideDownloadButton: a } = e;
    return (0, l.jsxs)("div", {
        className: H.WU,
        children: [
            (0, l.jsxs)("div", {
                className: H.xe,
                children: [
                    s
                        ? t
                        : (0, l.jsx)(A.A, { href: i, className: H.kH, iconClassName: H.XR, mimeType: r, fileName: t }),
                    (0, l.jsx)("div", { className: H.fL, children: n }),
                ],
            }),
            !a && (0, l.jsx)(A.A, { href: i, className: H.kH, iconClassName: H.XR, mimeType: r }),
        ],
    });
}
class X extends i.Component {
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
                u.A.spring(t, { toValue: 1.5, ...K, friction: 80 }),
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
            t = e ? p.PlayIcon : h.PauseIcon;
        return (0, l.jsx)(u.A.div, {
            className: H.kO,
            style: this.getAnimatedStyle(),
            children: (0, l.jsx)(t, { className: H.PK }),
        });
    }
}
let Q = (0, C.mj)({
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
        ((this.metadata = e), (this.analyticsEnabled = Q.getConfig({ location: "media_player" }).enabled));
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
                connection_type: y.A.getType(),
                effective_connection_speed: y.A.getEffectiveConnectionSpeed(),
                service_provider: y.A.getServiceProvider(),
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
                (0, d.dr)(this.currentState);
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
                (0, d.dr)(this.currentState);
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
                (0, d.dr)(this.currentState);
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
                (0, d.dr)(this.currentState);
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
                (0, d.dr)(this.currentState);
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
                (0, d.dr)(this.currentState);
        }
    };
    onDragStart = (e) => {
        null != e && (this.lastPlayingTime = e);
    };
    onLoadedMetadata = (e) => {
        this.metadata.fileDurationSec = e.currentTarget.duration;
    };
}
class et extends i.PureComponent {
    static Types = z;
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
    mediaRef = i.createRef();
    controlsRef = i.createRef();
    handleVideoRef = (e) => {
        ((this.mediaRef.current = e), null != this.props.videoRef && (this.props.videoRef.current = e));
    };
    playPausePopRef = i.createRef();
    containerRef = i.createRef();
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing ? { playing: !1, hideControls: !1 } : null;
    }
    constructor(e) {
        (super(e),
            (this._analytics = new ee({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes })));
        const { autoPlay: t, autoMute: n, volume: l, playable: i } = this.props,
            s = "function" == typeof l ? l() : l,
            r = "function" == typeof n ? n() : n;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !i,
            muted: r,
            volume: s,
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
        let { playing: e, muted: t, volume: n } = this.state,
            { type: l, src: i } = this.props;
        if (
            l === z.VIDEO &&
            (T.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            T.Ay.isVideoStatsEnabled(i) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                T.Ay.setVideoStats(i, !1);
            }
        let { current: s } = this.mediaRef;
        null != s && (t && (s.muted = t), e && (this.play(!0), this.handleUIUpdate()), (s.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: l, onMute: i, src: s, type: r },
            state: { playing: a, fullscreen: o, muted: u, dragging: c, volume: d, showStats: m },
        } = this;
        if (s !== e.src && r === z.VIDEO) {
            (null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                T.Ay.clearVideoStats(e.src));
            let t = T.Ay.isVideoStatsEnabled(s);
            m !== t && (t ? this.toggleStats() : m && this.toggleStats());
        }
        let { current: h } = this.mediaRef,
            { current: p } = this.playPausePopRef;
        if (null == h) return;
        (a && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && p?.pop(a))
            : !a && t.playing && (h.pause(), p?.pop(a), n?.()),
            a && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability());
        let f = (0, b.qf)(h.parentNode, h);
        (o && !t.fullscreen && null != f
            ? ((0, b.tl)(f), f.addEventListener(b.Wb, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != f &&
              (f.removeEventListener(b.Wb, this.handleFullScreenExit), (0, b.sP)(f, f.ownerDocument)),
            c === R.A.Types.DURATION && t.dragging !== R.A.Types.DURATION && a
                ? h.pause()
                : c !== R.A.Types.DURATION && t.dragging === R.A.Types.DURATION && a && h.play(),
            u !== t.muted && ((h.muted = u), i?.(u)),
            d !== t.volume && ((h.volume = d), l?.(d)));
    }
    componentWillUnmount() {
        ((this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (T.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === z.VIDEO && T.Ay.clearVideoStats(this.props.src)));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, b.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(b.Wb, this.handleFullScreenExit), (0, b.sP)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: l } = this.props,
            { current: i } = this.mediaRef;
        if (null != i) {
            let s = {};
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.volume && ((i.volume = e), (s.volume = e));
            }
            if ("function" == typeof l) {
                let e = l();
                e !== this.state.muted && ((i.muted = e), (s.muted = e));
            }
            (this.setState(s), i.play(), t?.(e, i.currentTime * _.A.Millis.SECOND, i.duration * _.A.Millis.SECOND));
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
        let t = (0, b.qf)(e.parentNode, e);
        (null != t && (0, b._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
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
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { current: l } = e.mediaRef;
            null != l &&
                isFinite(l.duration) &&
                isFinite(l.currentTime) &&
                ((l.currentTime = t), e.updateValue(t / l.duration, n), e.updateTime(t, l.duration));
        };
    })();
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: n } = this.controlsRef;
        null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
        let n = 0 | e,
            l = 0 | t;
        (this.state.currentTime !== n || this.state.duration !== l) && this.setState({ currentTime: n, duration: l });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: t } = this.state,
            n = Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
        n !== this.state.hideControls && null == e && this.setState({ hideControls: n });
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
        let { current: n } = this.mediaRef;
        if (t === R.A.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
        else if (t === R.A.Types.VOLUME) {
            let t = (0, j.w)(e, 1);
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
                          { duration: n } = e;
                      for (let l = 0; l < e.buffered.length; l++) {
                          let i = e.buffered.start(l),
                              s = e.buffered.end(l);
                          if (s - i < 1) continue;
                          let r = (s - i) / n,
                              a = i / n;
                          t.push([a, r]);
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
            state: { hasClickedPlay: n, muted: l },
        } = this;
        return !t && !n && e && l;
    }
    handleVideoClick = (e) => {
        let {
            state: { playing: t },
            props: { onClick: n, autoPlay: l },
        } = this;
        null != n
            ? n(e)
            : (e.stopPropagation(),
              l && t && this.shouldUnmuteOnFirstInteraction()
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
            { disableArrowKeySeek: n } = this.props;
        if (e.key === F.dh.SPACE) (e.preventDefault(), this.setPlay(!this.state.playing));
        else if (e.key !== F.dh.ARROW_LEFT || null == t || n)
            if (e.key !== F.dh.ARROW_RIGHT || null == t || n) {
                if ((0, E.A)(e.key) && null != t) {
                    (e.preventDefault(), e.stopPropagation());
                    let n = Number(e.key) / 10;
                    ((t.currentTime = t.duration * n), this.setPlay(!0));
                }
            } else {
                (e.preventDefault(), e.stopPropagation());
                let n = Math.min(isFinite(t.duration) ? t.duration : 0, t.currentTime + 5);
                this.setTime(n);
            }
        else {
            (e.preventDefault(), e.stopPropagation());
            let n = Math.max(0, t.currentTime - 5);
            this.setTime(n);
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
            { src: n } = this.props;
        if (e)
            (null != this._statsCollector && this._statsCollector.stopTracking(),
                (this._isUpdatingStats = !0),
                this.setState({ showStats: !1 }, () => {
                    ((this._isUpdatingStats = !1), this._unmounted || T.Ay.setVideoStats(this.props.src, !1));
                }));
        else if (null != t && (0, c.vq)(t, HTMLVideoElement))
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
        else T.Ay.setVideoStats(n, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== z.VIDEO ||
            this._isUpdatingStats ||
            (T.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: i, responsive: s, mediaLayoutType: r } = this.props,
            { playing: a, fullscreen: o } = this.state,
            u = this.getWidth(),
            c = this.getHeight();
        return i
            ? (0, l.jsx)(x.A, {
                  alt: e,
                  className: H.Ki,
                  controls: !1,
                  height: c,
                  poster: n,
                  width: u,
                  responsive: s && !o,
                  mediaLayoutType: r,
                  playsInline: !0,
                  autoPlay: a,
              })
            : (0, l.jsx)(x.A, {
                  alt: e,
                  className: H.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: a,
                  height: c,
                  responsive: s && !o,
                  mediaLayoutType: o ? G.dG.STATIC : r,
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
                  poster: n,
                  preload: this.state.preload,
                  ref: this.handleVideoRef,
                  width: u,
                  src: t,
              });
    }
    renderAudio() {
        return (0, l.jsx)("audio", {
            className: H.z7,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, l.jsx)("source", { src: this.props.src }),
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: {
                    type: t,
                    autoPlay: n,
                    playable: i = !0,
                    onVolumeShow: s,
                    onVolumeHide: r,
                    onControlsHide: a,
                    onControlsShow: o,
                },
                state: {
                    buffers: u,
                    currentTime: c,
                    duration: d,
                    hasClickedPlay: m,
                    hideControls: h,
                    muted: p,
                    playing: f,
                    fullscreen: g,
                    volume: x,
                    dragging: A,
                },
            } = this,
            C = this.getWidth();
        return m || n || t === z.AUDIO
            ? (0, l.jsx)(J, {
                  buffers: u,
                  currentTime: c,
                  duration: d,
                  volume: (0, j.M)(x, 1),
                  hide: t === z.VIDEO && h,
                  muted: p,
                  autoPlay: n,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: s,
                  onVolumeHide: r,
                  onControlsShow: o,
                  onControlsHide: a,
                  playing: f,
                  dragging: A,
                  type: t,
                  ref: this.controlsRef,
                  width: g ? window.screen.width : C,
                  disabled: !i,
                  children:
                      t === z.VIDEO && !1 !== this.props.allowFullScreen
                          ? (0, l.jsx)(I.A, {
                                "aria-label": L.intl.string(L.t["2nM3Pk"]),
                                className: H.CY,
                                iconClassName: H.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, b.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, l.jsx)(k, { onPlay: this.handleVideoClick, inactive: !i });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: i, playable: s, mimeType: r } = this.props;
        return null == e || null == t
            ? null
            : i === z.AUDIO
              ? (0, l.jsx)($, { fileName: e, fileSize: t, src: n, disabled: !s, mimeType: r, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, l.jsx)(X, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: l } = this.state,
            i = this.getWidth();
        return l ? Z : t === z.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: i, height: n };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: i,
                className: s,
                renderLinkComponent: a,
                responsive: o,
                mediaLayoutType: u,
                renderOverlayContent: c,
            } = this.props,
            { fullscreen: d, hideControls: m, playing: h } = this.state,
            p = H.bQ;
        if ((t === z.AUDIO ? (p = H._X) : m ? (p = H.CX) : h && (p = H.sw), i && t === z.VIDEO)) {
            let t = this.getWidth();
            return (0, l.jsxs)("div", {
                className: r()(p, { [H.mE]: u === G.dG.MOSAIC }),
                style: o ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, l.jsx)("div", {
                        className: H.s4,
                        children: (0, l.jsx)(w.A, {
                            className: H.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: a,
                        }),
                    }),
                ],
            });
        }
        return (0, l.jsx)("div", {
            ref: this.containerRef,
            className: r()(p, H.mr, s, { [H.mE]: u === G.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: h ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: (0, l.jsxs)(f.xp, {
                containerRef: this.containerRef,
                children: [
                    this.renderMetadata(),
                    t === z.AUDIO ? this.renderAudio() : this.renderVideo(),
                    (0, l.jsx)(g.N, {
                        theme: V.NJ8.ONYX,
                        children: (e) => (0, l.jsx)("div", { className: e, children: this.renderControls() }),
                    }),
                    t === z.VIDEO ? this.renderPlayPausePop() : null,
                    null != c ? (0, l.jsx)("div", { className: r()({ [H.eM]: h || d }), children: c() }) : null,
                    t === z.VIDEO && this.state.showStats && null != this.state.videoStats
                        ? (0, l.jsx)(D.VideoStatsOverlay, { stats: this.state.videoStats, onClose: this.toggleStats })
                        : null,
                ],
            }),
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, c.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== z.VIDEO) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
        if (null != this._analytics.metadata.hasValidFrame) return;
        let t = e.videoHeight,
            n = e.currentTime,
            l = e.readyState;
        if (0 === t && l >= 2)
            return void setTimeout(() => {
                if (null == e) return;
                let t = e.videoHeight,
                    l = e.currentTime;
                if (0 === t && l > n + 0.5) {
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
let en = et;
