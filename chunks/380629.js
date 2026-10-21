(s.d(t, { rB: () => er, Ay: () => eg }), s(321073));
var a = s(477900),
    i = s(582128),
    n = s(503698),
    l = s.n(n),
    r = s(435558),
    o = s.n(r),
    u = s(615300),
    h = s(621466),
    d = s(933681),
    c = s(939249),
    p = s(113494),
    m = s(782134),
    g = s(559106),
    f = s(43990),
    v = s(607470),
    y = s(384015),
    S = s(945810),
    C = s(953051),
    T = s(423562),
    b = s(544180),
    x = s(953727);
function M(e) {
    let { width: t = 16, height: s = 16, color: i = "currentColor", foreground: n, ...l } = e;
    return (0, a.jsx)("svg", {
        ...(0, x.A)(l),
        width: t,
        height: s,
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            className: n,
            fill: i,
            d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z",
        }),
    });
}
var _ = s(174459),
    w = s(927813),
    A = s(824744),
    D = s(475815),
    k = s(953584),
    R = s(122641);
let { LayerContainer: E, LayerProvider: P, layerContext: V } = (0, s(365912).Ay)("MediaPlayer");
var N = s(453903),
    I = s(44808),
    j = s(980707),
    L = s(477782),
    U = s(834730);
let O = (0, S.mj)({
        name: "2026-10-video-player-playback-speed",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    W = [0.5, 0.75, 1, 1.2, 1.5, 2, 3];
var B = s(650583),
    F = s(105292),
    H = s(711127),
    z = s(311225);
let K = new Set([B.dh.SPACE, B.dh.ARROW_LEFT, B.dh.ARROW_RIGHT]);
function q(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: s,
            onMenuOpenChange: n,
            layerContext: r,
            className: o,
            disabled: u = !1,
        } = e,
        h = O.useConfig({ location: "MessageMediaPlayer" }).enabled,
        d = i.useRef(null),
        p = F.intl.string(H.default.ZwPhbB),
        m = 1 !== t,
        g = i.useCallback((e) => {
            (K.has(e.key) || /^\d$/.test(e.key)) && e.stopPropagation();
        }, []);
    return h
        ? (0, a.jsx)(N.$n, {
              targetElementRef: d,
              layerContext: r,
              position: "top",
              align: "right",
              offset: 4,
              spacing: 8,
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              onRequestOpen: () => n?.(!0),
              onRequestClose: () => {
                  (n?.(!1), d.current?.focus());
              },
              renderPopout: (e) => {
                  let { closePopout: i, position: n } = e;
                  return (0, a.jsx)(I.m, {
                      position: n,
                      type: I.m.Types.TRANSLATE,
                      children: (0, a.jsx)("div", {
                          className: z.qp,
                          onKeyDown: g,
                          children: (0, a.jsx)(j.W, {
                              navId: "media-player-playback-speed",
                              className: z.y,
                              "aria-label": p,
                              onClose: i,
                              onSelect: i,
                              children: (0, a.jsx)(L.rX, {
                                  children: W.map((e) =>
                                      (0, a.jsx)(
                                          L.iD,
                                          {
                                              id: `${e}`,
                                              group: "media-player-playback-speed",
                                              label: `${e}x`,
                                              checked: e === t,
                                              action: () => {
                                                  (s(e), i());
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
                  (0, a.jsx)(c.D, {
                      ...e,
                      onKeyDown: (t) => {
                          (e.onKeyDown(t), t.key === B.dh.SPACE && t.stopPropagation());
                      },
                      innerRef: d,
                      className: l()(z.Nn, o),
                      tabIndex: u ? -1 : 0,
                      "aria-label": p,
                      "aria-haspopup": "menu",
                      children: (0, a.jsx)(U.E, {
                          "aria-hidden": !0,
                          variant: "text-sm/semibold",
                          color: "none",
                          className: l()(z.Lu, { [z.EX]: m }),
                          tabularNumbers: !0,
                          children: `${t}x`,
                      }),
                  }),
          })
        : null;
}
var G = s(692051),
    Y = s(317714);
function $(e) {
    let { onPlay: t, className: s, inactive: n } = e,
        r = i.useRef(null),
        o = (0, a.jsx)("div", {
            className: Y.P0,
            ref: r,
            children: (0, a.jsx)(m.PlayIcon, { size: "xs", color: "currentColor", className: Y.Kk }),
        });
    return (0, a.jsx)(G.Y.Consumer, {
        children: (e) =>
            n || null == t
                ? (0, a.jsx)("div", { className: Y.Iv, children: o })
                : (0, a.jsx)(c.D, {
                      className: l()(s, Y.Iv, { [Y.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": F.intl.string(F.t.RscU7I),
                      focusProps: { ringTarget: r },
                      children: o,
                  }),
    });
}
var X = s(821209),
    Z = s(338659),
    J = s(410694),
    Q = s(20504),
    ee = s(652215),
    et = s(838541),
    es = s(938442);
let ea = "-:--",
    ei = { friction: 14, tension: 200 },
    en = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    el = { width: "100%", height: "100%", backgroundColor: "black" };
function er(e) {
    let t = 0 | e,
        s = t % 60;
    return `${(t - s) / 60}:${String(s).padStart(2, "0")}`;
}
function eo(e) {
    let { current: t, duration: s } = e,
        i = null != t ? er(t) : ea,
        n = null != s ? er(s) : ea;
    return (
        (i = i.padStart(n.length, "0")),
        (0, a.jsxs)("div", {
            className: z.d$,
            children: [
                (0, a.jsx)("span", { className: z.Ue, children: i }),
                (0, a.jsx)("span", { className: z.zO, children: "/" }),
                (0, a.jsx)("span", { className: z.Ue, children: n }),
            ],
        })
    );
}
class eu extends i.Component {
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
        t ? u.A.spring(s, { toValue: e, ...ei }).start() : s.setValue(e);
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
        let { playing: e, currentTime: t, duration: s, onPause: i, onPlay: n, disabled: l } = this.props;
        return e
            ? (0, a.jsx)(c.D, {
                  className: z.CY,
                  onClick: i,
                  tabIndex: l ? -1 : 0,
                  "aria-label": F.intl.string(F.t.ZcgDJX),
                  children: (0, a.jsx)(p.PauseIcon, { size: "xs", color: "currentColor", className: z.pd }, "pause"),
              })
            : null != t && t === s
              ? (0, a.jsx)(c.D, {
                    className: z.CY,
                    onClick: n,
                    tabIndex: l ? -1 : 0,
                    "aria-label": F.intl.string(F.t.hsvh0i),
                    children: (0, a.jsx)(M, { className: z.pd }, "replay"),
                })
              : (0, a.jsx)(c.D, {
                    className: z.CY,
                    onClick: n,
                    tabIndex: l ? -1 : 0,
                    "aria-label": F.intl.string(F.t.RscU7I),
                    children: (0, a.jsx)(m.PlayIcon, { size: "xs", color: "currentColor", className: z.pd }, "play"),
                });
    }
    render() {
        let {
            buffers: e,
            children: t,
            currentTime: s,
            duration: i,
            muted: n,
            onDrag: l,
            onDragEnd: r,
            onDragStart: o,
            onToggleMuted: h,
            onVolumeShow: d,
            onVolumeHide: c,
            width: p,
            volume: m,
            type: g,
        } = this.props;
        return (0, a.jsxs)(u.A.div, {
            className: g === en.VIDEO ? z._v : z.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof p || p > 250 ? (0, a.jsx)(eo, { current: s, duration: i }) : null,
                (0, a.jsx)(R.A, {
                    buffers: e,
                    value: i ?? 0,
                    onDrag: l,
                    onDragEnd: r,
                    onDragStart: o,
                    type: R.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, a.jsx)("div", {
                    className: es.Uu,
                    children: (0, a.jsx)(Q.A, {
                        ref: this.setVolumeButtonRef,
                        muted: n,
                        value: m,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => l(e, R.A.Types.VOLUME),
                        onToggleMute: h,
                        onVolumeShow: d,
                        onVolumeHide: c,
                        iconClassName: z.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: z.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function eh(e) {
    let { fileName: t, fileSize: s, src: i, disabled: n, mimeType: l, hideDownloadButton: r } = e;
    return (0, a.jsxs)("div", {
        className: z.WU,
        children: [
            (0, a.jsxs)("div", {
                className: z.xe,
                children: [
                    n
                        ? t
                        : (0, a.jsx)(y.A, { href: i, className: z.kH, iconClassName: z.XR, mimeType: l, fileName: t }),
                    (0, a.jsx)("div", { className: z.fL, children: s }),
                ],
            }),
            !r && (0, a.jsx)(y.A, { href: i, className: z.kH, iconClassName: z.XR, mimeType: l }),
        ],
    });
}
class ed extends i.Component {
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
                u.A.spring(t, { toValue: 1.5, ...ei, friction: 80 }),
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
            t = e ? m.PlayIcon : p.PauseIcon;
        return (0, a.jsx)(u.A.div, {
            className: z.kO,
            style: this.getAnimatedStyle(),
            children: (0, a.jsx)(t, { className: z.PK }),
        });
    }
}
let ec = (0, S.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class ep {
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
        ((this.metadata = e), (this.analyticsEnabled = ec.getConfig({ location: "media_player" }).enabled));
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
            _.default.track(ee.HAw.MEDIA_PLAY_FINISHED, {
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
                connection_type: b.A.getType(),
                effective_connection_speed: b.A.getEffectiveConnectionSpeed(),
                service_provider: b.A.getServiceProvider(),
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
class em extends i.PureComponent {
    static Types = en;
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
            (this._analytics = new ep({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes })));
        const { autoPlay: t, autoMute: s, volume: a, playable: i } = this.props,
            n = "function" == typeof a ? a() : a,
            l = "function" == typeof s ? s() : s;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !i,
            muted: l,
            volume: n,
            playing: t,
            preload: "none",
            width: em.minWidth,
            height: em.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
            playbackRate: 1,
            playbackSpeedMenuOpen: !1,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: s } = this.state,
            { type: a, src: i } = this.props;
        if (
            a === en.VIDEO &&
            (k.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            k.Ay.isVideoStatsEnabled(i) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                k.Ay.setVideoStats(i, !1);
            }
        let { current: n } = this.mediaRef;
        null != n && (t && (n.muted = t), e && (this.play(!0), this.handleUIUpdate()), (n.volume = s));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: s, onVolumeChange: a, onMute: i, src: n, type: l },
            state: { playing: r, fullscreen: o, muted: u, dragging: h, volume: d, showStats: c, playbackRate: p },
        } = this;
        if (n !== e.src && l === en.VIDEO) {
            (null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                k.Ay.clearVideoStats(e.src));
            let t = k.Ay.isVideoStatsEnabled(n);
            c !== t && (t ? this.toggleStats() : c && this.toggleStats());
        }
        n !== e.src && 1 !== p && this.setState({ playbackRate: 1 });
        let { current: m } = this.mediaRef,
            { current: g } = this.playPausePopRef;
        if (null == m) return;
        (r && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && g?.pop(r))
            : !r && t.playing && (m.pause(), g?.pop(r), s?.()),
            r && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability());
        let f = (0, D.qf)(m.parentNode, m);
        (o && !t.fullscreen && null != f
            ? ((0, D.tl)(f), f.addEventListener(D.Wb, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != f &&
              (f.removeEventListener(D.Wb, this.handleFullScreenExit), (0, D.sP)(f, f.ownerDocument)),
            h === R.A.Types.DURATION && t.dragging !== R.A.Types.DURATION && r
                ? m.pause()
                : h !== R.A.Types.DURATION && t.dragging === R.A.Types.DURATION && r && m.play(),
            u !== t.muted && ((m.muted = u), i?.(u)),
            d !== t.volume && ((m.volume = d), a?.(d)),
            p !== t.playbackRate && (m.playbackRate = p));
    }
    componentWillUnmount() {
        ((this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (k.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === en.VIDEO && k.Ay.clearVideoStats(this.props.src)));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, D.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(D.Wb, this.handleFullScreenExit), (0, D.sP)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: s, autoMute: a } = this.props,
            { current: i } = this.mediaRef;
        if (null != i) {
            let n = this.state.volume;
            if ("function" == typeof s) {
                let e = s();
                e !== this.state.volume && ((i.volume = e), (n = e));
            }
            let l = this.state.muted;
            if ("function" == typeof a) {
                let e = a();
                e !== this.state.muted && ((i.muted = e), (l = e));
            }
            (this.setState({ volume: n, muted: l }),
                i.play(),
                t?.(e, i.currentTime * w.A.Millis.SECOND, i.duration * w.A.Millis.SECOND));
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, em.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, em.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, D.qf)(e.parentNode, e);
        (null != t && (0, D._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
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
                { current: a } = e.mediaRef;
            null != a &&
                isFinite(a.duration) &&
                isFinite(a.currentTime) &&
                ((a.currentTime = t), e.updateValue(t / a.duration, s), e.updateTime(t, a.duration));
        };
    })();
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: s } = this.controlsRef;
        null != s && s.updateProgress(e, t);
    }
    updateTime(e, t) {
        let s = 0 | e,
            a = 0 | t;
        (this.state.currentTime !== s || this.state.duration !== a) && this.setState({ currentTime: s, duration: a });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: t, playbackSpeedMenuOpen: s } = this.state,
            a = !s && Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
        a !== this.state.hideControls && null == e && this.setState({ hideControls: a });
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
        if (t === R.A.Types.DURATION) null != s && isFinite(s.duration) && this.setTime(s.duration * e, !1);
        else if (t === R.A.Types.VOLUME) {
            let t = (0, A.w)(e, 1);
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
                      for (let a = 0; a < e.buffered.length; a++) {
                          let i = e.buffered.start(a),
                              n = e.buffered.end(a);
                          if (n - i < 1) continue;
                          let l = (n - i) / s,
                              r = i / s;
                          t.push([r, l]);
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
            state: { hasClickedPlay: s, muted: a },
        } = this;
        return !t && !s && e && a;
    }
    handleVideoClick = (e) => {
        let {
            state: { playing: t },
            props: { onClick: s, autoPlay: a },
        } = this;
        null != s
            ? s(e)
            : (e.stopPropagation(),
              a && t && this.shouldUnmuteOnFirstInteraction()
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
                if ((0, C.A)(e.key) && null != t) {
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
                    ((this._isUpdatingStats = !1), this._unmounted || k.Ay.setVideoStats(this.props.src, !1));
                }));
        else if (null != t && (0, h.vq)(t, HTMLVideoElement))
            try {
                (null == this._statsCollector && (this._statsCollector = new Z.s(t, this.props.fileSizeBytes)),
                    this._statsCollector.startTracking(this.handleStatsUpdate),
                    (this._isUpdatingStats = !0),
                    this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
                        ((this._isUpdatingStats = !1), this._unmounted || k.Ay.setVideoStats(this.props.src, !0));
                    }));
            } catch (e) {
                (null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                    (this._isUpdatingStats = !1),
                    this._unmounted || k.Ay.setVideoStats(this.props.src, !1));
            }
        else k.Ay.setVideoStats(s, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== en.VIDEO ||
            this._isUpdatingStats ||
            (k.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: s, forceExternal: i, responsive: n, mediaLayoutType: l } = this.props,
            { playing: r, fullscreen: o } = this.state,
            u = this.getWidth(),
            h = this.getHeight();
        return i
            ? (0, a.jsx)(v.A, {
                  alt: e,
                  className: z.Ki,
                  controls: !1,
                  height: h,
                  poster: s,
                  width: u,
                  responsive: n && !o,
                  mediaLayoutType: l,
                  playsInline: !0,
                  autoPlay: r,
              })
            : (0, a.jsx)(v.A, {
                  alt: e,
                  className: z.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: r,
                  height: h,
                  responsive: n && !o,
                  mediaLayoutType: o ? et.dG.STATIC : l,
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
        return (0, a.jsx)("audio", {
            className: z.z7,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, a.jsx)("source", { src: this.props.src }),
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: {
                    type: t,
                    autoPlay: s,
                    playable: i = !0,
                    onVolumeShow: n,
                    onVolumeHide: l,
                    onControlsHide: r,
                    onControlsShow: o,
                },
                state: {
                    buffers: u,
                    currentTime: h,
                    duration: d,
                    hasClickedPlay: c,
                    hideControls: p,
                    muted: m,
                    playing: g,
                    fullscreen: f,
                    volume: v,
                    dragging: y,
                    playbackRate: S,
                },
            } = this,
            C = this.getWidth(),
            b = f ? window.screen.width : C,
            x = !0 === this.props.showPlaybackSpeedControl && t === en.VIDEO && ("string" == typeof b || b > 200);
        return c || s || t === en.AUDIO
            ? (0, a.jsxs)(eu, {
                  buffers: u,
                  currentTime: h,
                  duration: d,
                  volume: (0, A.M)(v, 1),
                  hide: t === en.VIDEO && p,
                  muted: m,
                  autoPlay: s,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: n,
                  onVolumeHide: l,
                  onControlsShow: o,
                  onControlsHide: r,
                  playing: g,
                  dragging: y,
                  type: t,
                  ref: this.controlsRef,
                  width: b,
                  disabled: !i,
                  children: [
                      x
                          ? (0, a.jsx)(q, {
                                playbackRate: S,
                                onPlaybackRateChange: this.handlePlaybackRateChange,
                                onMenuOpenChange: this.handlePlaybackSpeedMenuOpenChange,
                                layerContext: f ? V : void 0,
                                className: z.CY,
                                disabled: !i,
                            })
                          : null,
                      t === en.VIDEO && !1 !== this.props.allowFullScreen
                          ? (0, a.jsx)(T.A, {
                                "aria-label": F.intl.string(F.t["2nM3Pk"]),
                                className: z.CY,
                                iconClassName: z.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, D.qf)(e?.parentNode, e),
                            })
                          : null,
                  ],
              })
            : (0, a.jsx)($, { onPlay: this.handleVideoClick, inactive: !i });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: s, type: i, playable: n, mimeType: l } = this.props;
        return null == e || null == t
            ? null
            : i === en.AUDIO
              ? (0, a.jsx)(eh, { fileName: e, fileSize: t, src: s, disabled: !n, mimeType: l, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, a.jsx)(ed, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: s } = this.props,
            { fullscreen: a } = this.state,
            i = this.getWidth();
        return a ? el : t === en.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: i, height: s };
    }
    render() {
        let {
                height: e,
                type: t,
                src: s,
                forceExternal: i,
                className: n,
                renderLinkComponent: r,
                responsive: o,
                mediaLayoutType: u,
                renderOverlayContent: h,
            } = this.props,
            { fullscreen: d, hideControls: c, playing: p } = this.state,
            m = z.bQ;
        if ((t === en.AUDIO ? (m = z._X) : c ? (m = z.CX) : p && (m = z.sw), i && t === en.VIDEO)) {
            let t = this.getWidth();
            return (0, a.jsxs)("div", {
                className: l()(m, { [z.mE]: u === et.dG.MOSAIC }),
                style: o ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, a.jsx)("div", {
                        className: z.s4,
                        children: (0, a.jsx)(X.A, {
                            className: z.__invalid_playButton,
                            externalURL: s,
                            renderLinkComponent: r,
                        }),
                    }),
                ],
            });
        }
        return (0, a.jsx)("div", {
            ref: this.containerRef,
            className: l()(m, z.mr, n, { [z.mE]: u === et.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: p ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: (0, a.jsxs)(g.xp, {
                containerRef: this.containerRef,
                children: [
                    this.renderMetadata(),
                    t === en.AUDIO ? this.renderAudio() : this.renderVideo(),
                    (0, a.jsx)(f.N, {
                        theme: ee.NJ8.ONYX,
                        children: (e) =>
                            (0, a.jsx)("div", {
                                className: e,
                                children: (0, a.jsxs)(P, { children: [this.renderControls(), (0, a.jsx)(E, {})] }),
                            }),
                    }),
                    t === en.VIDEO ? this.renderPlayPausePop() : null,
                    null != h ? (0, a.jsx)("div", { className: l()({ [z.eM]: p || d }), children: h() }) : null,
                    t === en.VIDEO && this.state.showStats && null != this.state.videoStats
                        ? (0, a.jsx)(J.VideoStatsOverlay, { stats: this.state.videoStats, onClose: this.toggleStats })
                        : null,
                ],
            }),
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, h.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== en.VIDEO) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
        if (null != this._analytics.metadata.hasValidFrame) return;
        let t = e.videoHeight,
            s = e.currentTime,
            a = e.readyState;
        if (0 === t && a >= 2)
            return void setTimeout(() => {
                if (null == e) return;
                let t = e.videoHeight,
                    a = e.currentTime;
                if (0 === t && a > s + 0.5) {
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
let eg = em;
