(s.d(t, { rB: () => er, Ay: () => eg }), s(321073));
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
    g = s(559106),
    f = s(43990),
    v = s(607470),
    C = s(384015),
    x = s(945810),
    A = s(953051),
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
    b = s(122641);
let { LayerContainer: w, LayerProvider: R, layerContext: k } = (0, s(365912).Ay)("MediaPlayer");
var D = s(453903),
    L = s(44808),
    P = s(980707),
    O = s(477782),
    U = s(834730);
let V = (0, x.mj)({
        name: "2026-10-video-player-playback-speed",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    F = [0.5, 0.75, 1, 1.2, 1.5, 2];
var B = s(650583),
    H = s(105292),
    W = s(711127),
    G = s(311225);
let z = new Set([B.dh.SPACE, B.dh.ARROW_LEFT, B.dh.ARROW_RIGHT]);
function K(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: s,
            onMenuOpenChange: l,
            layerContext: r,
            className: o,
            disabled: u = !1,
        } = e,
        d = V.useConfig({ location: "MessageMediaPlayer" }).enabled,
        c = a.useRef(null),
        m = H.intl.string(W.default.ZwPhbB),
        p = 1 !== t,
        g = a.useCallback((e) => {
            (z.has(e.key) || /^\d$/.test(e.key)) && e.stopPropagation();
        }, []);
    return d
        ? (0, n.jsx)(D.$n, {
              targetElementRef: c,
              layerContext: r,
              position: "top",
              align: "right",
              offset: 4,
              spacing: 8,
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              onRequestOpen: () => l?.(!0),
              onRequestClose: () => {
                  (l?.(!1), c.current?.focus());
              },
              renderPopout: (e) => {
                  let { closePopout: a, position: l } = e;
                  return (0, n.jsx)(L.m, {
                      position: l,
                      type: L.m.Types.TRANSLATE,
                      children: (0, n.jsx)("div", {
                          className: G.qp,
                          onKeyDown: g,
                          children: (0, n.jsx)(P.W, {
                              navId: "media-player-playback-speed",
                              className: G.y,
                              "aria-label": m,
                              onClose: a,
                              onSelect: a,
                              children: (0, n.jsx)(O.rX, {
                                  children: F.map((e) =>
                                      (0, n.jsx)(
                                          O.iD,
                                          {
                                              id: `${e}`,
                                              group: "media-player-playback-speed",
                                              label: `${e}x`,
                                              checked: e === t,
                                              action: () => {
                                                  (s(e), a());
                                              },
                                          },
                                          e,
                                      ),
                                  ),
                              }),
                          }),
                      }),
                  });
              },
              children: (e) =>
                  (0, n.jsx)(h.D, {
                      ...e,
                      onKeyDown: (t) => {
                          (e.onKeyDown(t), t.key === B.dh.SPACE && t.stopPropagation());
                      },
                      innerRef: c,
                      className: i()(G.Nn, o),
                      tabIndex: u ? -1 : 0,
                      "aria-label": m,
                      "aria-haspopup": "menu",
                      children: (0, n.jsx)(U.E, {
                          "aria-hidden": !0,
                          variant: "text-sm/semibold",
                          color: "none",
                          className: i()(G.Lu, { [G.EX]: p }),
                          tabularNumbers: !0,
                          children: `${t}x`,
                      }),
                  }),
          })
        : null;
}
var Y = s(692051),
    q = s(317714);
function $(e) {
    let { onPlay: t, className: s, inactive: l } = e,
        r = a.useRef(null),
        o = (0, n.jsx)("div", {
            className: q.P0,
            ref: r,
            children: (0, n.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: q.Kk }),
        });
    return (0, n.jsx)(Y.Y.Consumer, {
        children: (e) =>
            l || null == t
                ? (0, n.jsx)("div", { className: q.Iv, children: o })
                : (0, n.jsx)(h.D, {
                      className: i()(s, q.Iv, { [q.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": H.intl.string(H.t.RscU7I),
                      focusProps: { ringTarget: r },
                      children: o,
                  }),
    });
}
var Q = s(821209),
    Z = s(338659),
    X = s(410694),
    J = s(20504),
    ee = s(652215),
    et = s(838541),
    es = s(938442);
let en = "-:--",
    ea = { friction: 14, tension: 200 },
    el = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    ei = { width: "100%", height: "100%", backgroundColor: "black" };
function er(e) {
    let t = 0 | e,
        s = t % 60;
    return `${(t - s) / 60}:${String(s).padStart(2, "0")}`;
}
function eo(e) {
    let { current: t, duration: s } = e,
        a = null != t ? er(t) : en,
        l = null != s ? er(s) : en;
    return (
        (a = a.padStart(l.length, "0")),
        (0, n.jsxs)("div", {
            className: G.d$,
            children: [
                (0, n.jsx)("span", { className: G.Ue, children: a }),
                (0, n.jsx)("span", { className: G.zO, children: "/" }),
                (0, n.jsx)("span", { className: G.Ue, children: l }),
            ],
        })
    );
}
class eu extends a.Component {
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
        t ? u.A.spring(s, { toValue: e, ...ea }).start() : s.setValue(e);
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
                  className: G.CY,
                  onClick: a,
                  tabIndex: i ? -1 : 0,
                  "aria-label": H.intl.string(H.t.ZcgDJX),
                  children: (0, n.jsx)(m.PauseIcon, { size: "xs", color: "currentColor", className: G.pd }, "pause"),
              })
            : null != t && t === s
              ? (0, n.jsx)(h.D, {
                    className: G.CY,
                    onClick: l,
                    tabIndex: i ? -1 : 0,
                    "aria-label": H.intl.string(H.t.hsvh0i),
                    children: (0, n.jsx)(E, { className: G.pd }, "replay"),
                })
              : (0, n.jsx)(h.D, {
                    className: G.CY,
                    onClick: l,
                    tabIndex: i ? -1 : 0,
                    "aria-label": H.intl.string(H.t.RscU7I),
                    children: (0, n.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: G.pd }, "play"),
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
            type: g,
        } = this.props;
        return (0, n.jsxs)(u.A.div, {
            className: g === el.VIDEO ? G._v : G.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof m || m > 250 ? (0, n.jsx)(eo, { current: s, duration: a }) : null,
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
                    className: es.Uu,
                    children: (0, n.jsx)(J.A, {
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
                        iconClassName: G.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: G.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function ed(e) {
    let { fileName: t, fileSize: s, src: a, disabled: l, mimeType: i, hideDownloadButton: r } = e;
    return (0, n.jsxs)("div", {
        className: G.WU,
        children: [
            (0, n.jsxs)("div", {
                className: G.xe,
                children: [
                    l
                        ? t
                        : (0, n.jsx)(C.A, { href: a, className: G.kH, iconClassName: G.XR, mimeType: i, fileName: t }),
                    (0, n.jsx)("div", { className: G.fL, children: s }),
                ],
            }),
            !r && (0, n.jsx)(C.A, { href: a, className: G.kH, iconClassName: G.XR, mimeType: i }),
        ],
    });
}
class ec extends a.Component {
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
                u.A.spring(t, { toValue: 1.5, ...ea, friction: 80 }),
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
            className: G.kO,
            style: this.getAnimatedStyle(),
            children: (0, n.jsx)(t, { className: G.PK }),
        });
    }
}
let eh = (0, x.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class em {
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
        ((this.metadata = e), (this.analyticsEnabled = eh.getConfig({ location: "media_player" }).enabled));
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
            N.default.track(ee.HAw.MEDIA_PLAY_FINISHED, {
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
class ep extends a.PureComponent {
    static Types = el;
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
            (this._analytics = new em({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes })));
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
            width: ep.minWidth,
            height: ep.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
            playbackRate: 1,
            playbackSpeedMenuOpen: !1,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: s } = this.state,
            { type: n, src: a } = this.props;
        if (
            n === el.VIDEO &&
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
            state: { playing: r, fullscreen: o, muted: u, dragging: d, volume: c, showStats: h, playbackRate: m },
        } = this;
        if (l !== e.src && i === el.VIDEO) {
            (null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                T.Ay.clearVideoStats(e.src));
            let t = T.Ay.isVideoStatsEnabled(l);
            h !== t && (t ? this.toggleStats() : h && this.toggleStats());
        }
        l !== e.src && 1 !== m && this.setState({ playbackRate: 1 });
        let { current: p } = this.mediaRef,
            { current: g } = this.playPausePopRef;
        if (null == p) return;
        (r && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && g?.pop(r))
            : !r && t.playing && (p.pause(), g?.pop(r), s?.()),
            r && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability());
        let f = (0, I.qf)(p.parentNode, p);
        (o && !t.fullscreen && null != f
            ? ((0, I.tl)(f), f.addEventListener(I.Wb, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != f &&
              (f.removeEventListener(I.Wb, this.handleFullScreenExit), (0, I.sP)(f, f.ownerDocument)),
            d === b.A.Types.DURATION && t.dragging !== b.A.Types.DURATION && r
                ? p.pause()
                : d !== b.A.Types.DURATION && t.dragging === b.A.Types.DURATION && r && p.play(),
            u !== t.muted && ((p.muted = u), a?.(u)),
            c !== t.volume && ((p.volume = c), n?.(c)),
            m !== t.playbackRate && (p.playbackRate = m));
    }
    componentWillUnmount() {
        ((this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (T.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === el.VIDEO && T.Ay.clearVideoStats(this.props.src)));
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
            let l = this.state.volume;
            if ("function" == typeof s) {
                let e = s();
                e !== this.state.volume && ((a.volume = e), (l = e));
            }
            let i = this.state.muted;
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.muted && ((a.muted = e), (i = e));
            }
            (this.setState({ volume: l, muted: i }),
                a.play(),
                t?.(e, a.currentTime * j.A.Millis.SECOND, a.duration * j.A.Millis.SECOND));
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, ep.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, ep.minHeight);
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
        let { dragging: e, fullscreen: t, playbackSpeedMenuOpen: s } = this.state,
            n = !s && Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
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
    handlePlaybackRateChange = (e) => {
        this.setState({ playbackRate: e });
    };
    handlePlaybackSpeedMenuOpenChange = (e) => {
        ((this._lastMove = Date.now()), this.setState({ playbackSpeedMenuOpen: e }));
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
                if ((0, A.A)(e.key) && null != t) {
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
                (null == this._statsCollector && (this._statsCollector = new Z.s(t, this.props.fileSizeBytes)),
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
        t !== el.VIDEO ||
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
                  className: G.Ki,
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
                  className: G.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: r,
                  height: d,
                  responsive: l && !o,
                  mediaLayoutType: o ? et.dG.STATIC : i,
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
            className: G.z7,
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
                    playing: g,
                    fullscreen: f,
                    volume: v,
                    dragging: C,
                    playbackRate: x,
                },
            } = this,
            A = this.getWidth(),
            S = f ? window.screen.width : A,
            _ = !0 === this.props.showPlaybackSpeedControl && t === el.VIDEO && ("string" == typeof S || S > 200);
        return h || s || t === el.AUDIO
            ? (0, n.jsxs)(eu, {
                  buffers: u,
                  currentTime: d,
                  duration: c,
                  volume: (0, M.M)(v, 1),
                  hide: t === el.VIDEO && m,
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
                  playing: g,
                  dragging: C,
                  type: t,
                  ref: this.controlsRef,
                  width: S,
                  disabled: !a,
                  children: [
                      _
                          ? (0, n.jsx)(K, {
                                playbackRate: x,
                                onPlaybackRateChange: this.handlePlaybackRateChange,
                                onMenuOpenChange: this.handlePlaybackSpeedMenuOpenChange,
                                layerContext: f ? k : void 0,
                                className: G.CY,
                                disabled: !a,
                            })
                          : null,
                      t === el.VIDEO && !1 !== this.props.allowFullScreen
                          ? (0, n.jsx)(y.A, {
                                "aria-label": H.intl.string(H.t["2nM3Pk"]),
                                className: G.CY,
                                iconClassName: G.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, I.qf)(e?.parentNode, e),
                            })
                          : null,
                  ],
              })
            : (0, n.jsx)($, { onPlay: this.handleVideoClick, inactive: !a });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: s, type: a, playable: l, mimeType: i } = this.props;
        return null == e || null == t
            ? null
            : a === el.AUDIO
              ? (0, n.jsx)(ed, { fileName: e, fileSize: t, src: s, disabled: !l, mimeType: i, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, n.jsx)(ec, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: s } = this.props,
            { fullscreen: n } = this.state,
            a = this.getWidth();
        return n ? ei : t === el.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: a, height: s };
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
            p = G.bQ;
        if ((t === el.AUDIO ? (p = G._X) : h ? (p = G.CX) : m && (p = G.sw), a && t === el.VIDEO)) {
            let t = this.getWidth();
            return (0, n.jsxs)("div", {
                className: i()(p, { [G.mE]: u === et.dG.MOSAIC }),
                style: o ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, n.jsx)("div", {
                        className: G.s4,
                        children: (0, n.jsx)(Q.A, {
                            className: G.__invalid_playButton,
                            externalURL: s,
                            renderLinkComponent: r,
                        }),
                    }),
                ],
            });
        }
        return (0, n.jsx)("div", {
            ref: this.containerRef,
            className: i()(p, G.mr, l, { [G.mE]: u === et.dG.MOSAIC }),
            "data-fullscreen": c,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: m ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: (0, n.jsxs)(g.xp, {
                containerRef: this.containerRef,
                children: [
                    this.renderMetadata(),
                    t === el.AUDIO ? this.renderAudio() : this.renderVideo(),
                    (0, n.jsx)(f.N, {
                        theme: ee.NJ8.ONYX,
                        children: (e) =>
                            (0, n.jsx)("div", {
                                className: e,
                                children: (0, n.jsxs)(R, { children: [this.renderControls(), (0, n.jsx)(w, {})] }),
                            }),
                    }),
                    t === el.VIDEO ? this.renderPlayPausePop() : null,
                    null != d ? (0, n.jsx)("div", { className: i()({ [G.eM]: m || c }), children: d() }) : null,
                    t === el.VIDEO && this.state.showStats && null != this.state.videoStats
                        ? (0, n.jsx)(X.VideoStatsOverlay, { stats: this.state.videoStats, onClose: this.toggleStats })
                        : null,
                ],
            }),
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, d.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== el.VIDEO) {
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
let eg = ep;
