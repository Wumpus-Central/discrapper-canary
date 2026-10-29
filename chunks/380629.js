(s.d(t, { rB: () => ei, Ay: () => eh }), s(321073));
var a = s(477900),
    i = s(582128),
    n = s(503698),
    l = s.n(n),
    r = s(435558),
    o = s.n(r),
    u = s(615300),
    h = s(621466),
    d = s(939249),
    c = s(113494),
    p = s(782134),
    m = s(559106),
    g = s(43990),
    f = s(607470),
    v = s(384015),
    y = s(953051),
    S = s(423562),
    C = s(953727);
function T(e) {
    let { width: t = 16, height: s = 16, color: i = "currentColor", foreground: n, ...l } = e;
    return (0, a.jsx)("svg", {
        ...(0, C.A)(l),
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
var b = s(927813),
    x = s(824744),
    M = s(475815),
    w = s(953584),
    A = s(122641),
    _ = s(584307);
let { LayerContainer: D, LayerProvider: k, layerContext: R } = (0, s(365912).Ay)("MediaPlayer");
var E = s(453903),
    P = s(44808),
    V = s(980707),
    N = s(477782),
    I = s(834730);
let j = (0, s(945810).mj)({
        name: "2026-10-video-player-playback-speed",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    L = [0.5, 0.75, 1, 1.2, 1.5, 2, 3];
var U = s(650583),
    O = s(105292),
    W = s(769821),
    B = s(311225);
let F = new Set([U.dh.SPACE, U.dh.ARROW_LEFT, U.dh.ARROW_RIGHT]);
function H(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: s,
            onMenuOpenChange: n,
            layerContext: r,
            className: o,
            disabled: u = !1,
        } = e,
        h = j.useConfig({ location: "MessageMediaPlayer" }).enabled,
        c = i.useRef(null),
        p = O.intl.string(W.default.ZwPhbB),
        m = 1 !== t,
        g = i.useCallback((e) => {
            (F.has(e.key) || /^\d$/.test(e.key)) && e.stopPropagation();
        }, []);
    return h
        ? (0, a.jsx)(E.$n, {
              targetElementRef: c,
              layerContext: r,
              position: "top",
              align: "right",
              offset: 4,
              spacing: 8,
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              onRequestOpen: () => n?.(!0),
              onRequestClose: () => {
                  (n?.(!1), c.current?.focus());
              },
              renderPopout: (e) => {
                  let { closePopout: i, position: n } = e;
                  return (0, a.jsx)(P.m, {
                      position: n,
                      type: P.m.Types.TRANSLATE,
                      children: (0, a.jsx)("div", {
                          className: B.qp,
                          onKeyDown: g,
                          children: (0, a.jsx)(V.W, {
                              navId: "media-player-playback-speed",
                              className: B.y,
                              "aria-label": p,
                              onClose: i,
                              onSelect: i,
                              children: (0, a.jsx)(N.rX, {
                                  children: L.map((e) =>
                                      (0, a.jsx)(
                                          N.iD,
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
                  (0, a.jsx)(d.D, {
                      ...e,
                      onKeyDown: (t) => {
                          (e.onKeyDown(t), t.key === U.dh.SPACE && t.stopPropagation());
                      },
                      innerRef: c,
                      className: l()(B.Nn, o),
                      tabIndex: u ? -1 : 0,
                      "aria-label": p,
                      "aria-haspopup": "menu",
                      children: (0, a.jsx)(I.E, {
                          "aria-hidden": !0,
                          variant: "text-sm/semibold",
                          color: "none",
                          className: l()(B.Lu, { [B.EX]: m }),
                          tabularNumbers: !0,
                          children: `${t}x`,
                      }),
                  }),
          })
        : null;
}
var z = s(692051),
    K = s(317714);
function q(e) {
    let { onPlay: t, className: s, inactive: n } = e,
        r = i.useRef(null),
        o = (0, a.jsx)("div", {
            className: K.P0,
            ref: r,
            children: (0, a.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: K.Kk }),
        });
    return (0, a.jsx)(z.Y.Consumer, {
        children: (e) =>
            n || null == t
                ? (0, a.jsx)("div", { className: K.Iv, children: o })
                : (0, a.jsx)(d.D, {
                      className: l()(s, K.Iv, { [K.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": O.intl.string(O.t.RscU7I),
                      focusProps: { ringTarget: r },
                      children: o,
                  }),
    });
}
var G = s(821209),
    Y = s(338659),
    $ = s(410694),
    X = s(20504),
    Z = s(652215),
    J = s(838541),
    Q = s(938442);
let ee = "-:--",
    et = { friction: 14, tension: 200 },
    es = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    ea = { width: "100%", height: "100%", backgroundColor: "black" };
function ei(e) {
    let t = 0 | e,
        s = t % 60;
    return `${(t - s) / 60}:${String(s).padStart(2, "0")}`;
}
function en(e) {
    let { current: t, duration: s } = e,
        i = null != t ? ei(t) : ee,
        n = null != s ? ei(s) : ee;
    return (
        (i = i.padStart(n.length, "0")),
        (0, a.jsxs)("div", {
            className: B.d$,
            children: [
                (0, a.jsx)("span", { className: B.Ue, children: i }),
                (0, a.jsx)("span", { className: B.zO, children: "/" }),
                (0, a.jsx)("span", { className: B.Ue, children: n }),
            ],
        })
    );
}
class el extends i.Component {
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
        t ? u.A.spring(s, { toValue: e, ...et }).start() : s.setValue(e);
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
            ? (0, a.jsx)(d.D, {
                  className: B.CY,
                  onClick: i,
                  tabIndex: l ? -1 : 0,
                  "aria-label": O.intl.string(O.t.ZcgDJX),
                  children: (0, a.jsx)(c.PauseIcon, { size: "xs", color: "currentColor", className: B.pd }, "pause"),
              })
            : null != t && t === s
              ? (0, a.jsx)(d.D, {
                    className: B.CY,
                    onClick: n,
                    tabIndex: l ? -1 : 0,
                    "aria-label": O.intl.string(O.t.hsvh0i),
                    children: (0, a.jsx)(T, { className: B.pd }, "replay"),
                })
              : (0, a.jsx)(d.D, {
                    className: B.CY,
                    onClick: n,
                    tabIndex: l ? -1 : 0,
                    "aria-label": O.intl.string(O.t.RscU7I),
                    children: (0, a.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: B.pd }, "play"),
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
            className: g === es.VIDEO ? B._v : B.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof p || p > 250 ? (0, a.jsx)(en, { current: s, duration: i }) : null,
                (0, a.jsx)(A.A, {
                    buffers: e,
                    value: i ?? 0,
                    onDrag: l,
                    onDragEnd: r,
                    onDragStart: o,
                    type: A.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, a.jsx)("div", {
                    className: Q.Uu,
                    children: (0, a.jsx)(X.A, {
                        ref: this.setVolumeButtonRef,
                        muted: n,
                        value: m,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => l(e, A.A.Types.VOLUME),
                        onToggleMute: h,
                        onVolumeShow: d,
                        onVolumeHide: c,
                        iconClassName: B.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: B.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function er(e) {
    let { fileName: t, fileSize: s, src: i, disabled: n, mimeType: l, hideDownloadButton: r } = e;
    return (0, a.jsxs)("div", {
        className: B.WU,
        children: [
            (0, a.jsxs)("div", {
                className: B.xe,
                children: [
                    n
                        ? t
                        : (0, a.jsx)(v.A, { href: i, className: B.kH, iconClassName: B.XR, mimeType: l, fileName: t }),
                    (0, a.jsx)("div", { className: B.fL, children: s }),
                ],
            }),
            !r && (0, a.jsx)(v.A, { href: i, className: B.kH, iconClassName: B.XR, mimeType: l }),
        ],
    });
}
class eo extends i.Component {
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
                u.A.spring(t, { toValue: 1.5, ...et, friction: 80 }),
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
            t = e ? p.PlayIcon : c.PauseIcon;
        return (0, a.jsx)(u.A.div, {
            className: B.kO,
            style: this.getAnimatedStyle(),
            children: (0, a.jsx)(t, { className: B.PK }),
        });
    }
}
class eu extends i.PureComponent {
    static Types = es;
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
            (this._analytics = new _.A({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes })));
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
            width: eu.minWidth,
            height: eu.minHeight,
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
            a === es.VIDEO &&
            (w.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            w.Ay.isVideoStatsEnabled(i) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                w.Ay.setVideoStats(i, !1);
            }
        let { current: n } = this.mediaRef;
        null != n && (t && (n.muted = t), e && (this.play(!0), this.handleUIUpdate()), (n.volume = s));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: s, onVolumeChange: a, onMute: i, src: n, type: l },
            state: { playing: r, fullscreen: o, muted: u, dragging: h, volume: d, showStats: c, playbackRate: p },
        } = this;
        if (n !== e.src && l === es.VIDEO) {
            (null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                w.Ay.clearVideoStats(e.src));
            let t = w.Ay.isVideoStatsEnabled(n);
            c !== t && (t ? this.toggleStats() : c && this.toggleStats());
        }
        n !== e.src && 1 !== p && this.setState({ playbackRate: 1 });
        let { current: m } = this.mediaRef,
            { current: g } = this.playPausePopRef;
        if (null == m) return;
        (r && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && g?.pop(r))
            : !r && t.playing && (m.pause(), g?.pop(r), s?.()),
            r &&
                null == this._analytics.metadata.hasValidFrame &&
                this._analytics.checkVideoDecodability(this.mediaRef.current, this.props.type === es.VIDEO));
        let f = (0, M.qf)(m.parentNode, m);
        (o && !t.fullscreen && null != f
            ? ((0, M.tl)(f), f.addEventListener(M.Wb, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != f &&
              (f.removeEventListener(M.Wb, this.handleFullScreenExit), (0, M.sP)(f, f.ownerDocument)),
            h === A.A.Types.DURATION && t.dragging !== A.A.Types.DURATION && r
                ? m.pause()
                : h !== A.A.Types.DURATION && t.dragging === A.A.Types.DURATION && r && m.play(),
            u !== t.muted && ((m.muted = u), i?.(u)),
            d !== t.volume && ((m.volume = d), a?.(d)),
            p !== t.playbackRate && (m.playbackRate = p));
    }
    componentWillUnmount() {
        ((this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (w.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === es.VIDEO && w.Ay.clearVideoStats(this.props.src)));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, M.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(M.Wb, this.handleFullScreenExit), (0, M.sP)(t));
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
                t?.(e, i.currentTime * b.A.Millis.SECOND, i.duration * b.A.Millis.SECOND));
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, eu.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, eu.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, M.qf)(e.parentNode, e);
        (null != t && (0, M._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
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
        if (t === A.A.Types.DURATION) null != s && isFinite(s.duration) && this.setTime(s.duration * e, !1);
        else if (t === A.A.Types.VOLUME) {
            let t = (0, x.w)(e, 1);
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
        if (e.key === U.dh.SPACE) (e.preventDefault(), this.setPlay(!this.state.playing));
        else if (e.key !== U.dh.ARROW_LEFT || null == t || s)
            if (e.key !== U.dh.ARROW_RIGHT || null == t || s) {
                if ((0, y.A)(e.key) && null != t) {
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
                    ((this._isUpdatingStats = !1), this._unmounted || w.Ay.setVideoStats(this.props.src, !1));
                }));
        else if (null != t && (0, h.vq)(t, HTMLVideoElement))
            try {
                (null == this._statsCollector && (this._statsCollector = new Y.s(t, this.props.fileSizeBytes)),
                    this._statsCollector.startTracking(this.handleStatsUpdate),
                    (this._isUpdatingStats = !0),
                    this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
                        ((this._isUpdatingStats = !1), this._unmounted || w.Ay.setVideoStats(this.props.src, !0));
                    }));
            } catch (e) {
                (null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                    (this._isUpdatingStats = !1),
                    this._unmounted || w.Ay.setVideoStats(this.props.src, !1));
            }
        else w.Ay.setVideoStats(s, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== es.VIDEO ||
            this._isUpdatingStats ||
            (w.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: s, forceExternal: i, responsive: n, mediaLayoutType: l } = this.props,
            { playing: r, fullscreen: o } = this.state,
            u = this.getWidth(),
            h = this.getHeight();
        return i
            ? (0, a.jsx)(f.A, {
                  alt: e,
                  className: B.Ki,
                  controls: !1,
                  height: h,
                  poster: s,
                  width: u,
                  responsive: n && !o,
                  mediaLayoutType: l,
                  playsInline: !0,
                  autoPlay: r,
              })
            : (0, a.jsx)(f.A, {
                  alt: e,
                  className: B.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: r,
                  height: h,
                  responsive: n && !o,
                  mediaLayoutType: o ? J.dG.STATIC : l,
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
            className: B.z7,
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
                    playbackRate: C,
                },
            } = this,
            T = this.getWidth(),
            b = f ? window.screen.width : T,
            w = !0 === this.props.showPlaybackSpeedControl && t === es.VIDEO && ("string" == typeof b || b > 200);
        return c || s || t === es.AUDIO
            ? (0, a.jsxs)(el, {
                  buffers: u,
                  currentTime: h,
                  duration: d,
                  volume: (0, x.M)(v, 1),
                  hide: t === es.VIDEO && p,
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
                      w
                          ? (0, a.jsx)(H, {
                                playbackRate: C,
                                onPlaybackRateChange: this.handlePlaybackRateChange,
                                onMenuOpenChange: this.handlePlaybackSpeedMenuOpenChange,
                                layerContext: f ? R : void 0,
                                className: B.CY,
                                disabled: !i,
                            })
                          : null,
                      t === es.VIDEO && !1 !== this.props.allowFullScreen
                          ? (0, a.jsx)(S.A, {
                                "aria-label": O.intl.string(O.t["2nM3Pk"]),
                                className: B.CY,
                                iconClassName: B.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, M.qf)(e?.parentNode, e),
                            })
                          : null,
                  ],
              })
            : (0, a.jsx)(q, { onPlay: this.handleVideoClick, inactive: !i });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: s, type: i, playable: n, mimeType: l } = this.props;
        return null == e || null == t
            ? null
            : i === es.AUDIO
              ? (0, a.jsx)(er, { fileName: e, fileSize: t, src: s, disabled: !n, mimeType: l, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, a.jsx)(eo, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: s } = this.props,
            { fullscreen: a } = this.state,
            i = this.getWidth();
        return a ? ea : t === es.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: i, height: s };
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
            f = B.bQ;
        if ((t === es.AUDIO ? (f = B._X) : c ? (f = B.CX) : p && (f = B.sw), i && t === es.VIDEO)) {
            let t = this.getWidth();
            return (0, a.jsxs)("div", {
                className: l()(f, { [B.mE]: u === J.dG.MOSAIC }),
                style: o ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, a.jsx)("div", {
                        className: B.s4,
                        children: (0, a.jsx)(G.A, {
                            className: B.__invalid_playButton,
                            externalURL: s,
                            renderLinkComponent: r,
                        }),
                    }),
                ],
            });
        }
        return (0, a.jsx)("div", {
            ref: this.containerRef,
            className: l()(f, B.mr, n, { [B.mE]: u === J.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: p ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: (0, a.jsxs)(m.xp, {
                containerRef: this.containerRef,
                children: [
                    this.renderMetadata(),
                    t === es.AUDIO ? this.renderAudio() : this.renderVideo(),
                    (0, a.jsx)(g.N, {
                        theme: Z.NJ8.ONYX,
                        children: (e) =>
                            (0, a.jsx)("div", {
                                className: e,
                                children: (0, a.jsxs)(k, { children: [this.renderControls(), (0, a.jsx)(D, {})] }),
                            }),
                    }),
                    t === es.VIDEO ? this.renderPlayPausePop() : null,
                    null != h ? (0, a.jsx)("div", { className: l()({ [B.eM]: p || d }), children: h() }) : null,
                    t === es.VIDEO && this.state.showStats && null != this.state.videoStats
                        ? (0, a.jsx)($.VideoStatsOverlay, { stats: this.state.videoStats, onClose: this.toggleStats })
                        : null,
                ],
            }),
        });
    }
}
let eh = eu;
