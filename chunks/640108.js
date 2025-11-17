n.d(t, {
    ZP: () => $,
    yv: () => H,
}),
    n(539854),
    n(388685);
var r,
    i,
    a = n(54381),
    o = n(473749),
    s = n(120356),
    l = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(748780),
    f = n(374470),
    _ = n(283693),
    p = n(481060),
    h = n(70097),
    m = n(167080),
    g = n(818083),
    E = n(268353),
    b = n(866960),
    y = n(181058),
    O = n(626135),
    v = n(70956),
    I = n(36703),
    T = n(228488),
    S = n(540026),
    A = n(455813),
    C = n(283756),
    N = n(793148),
    R = n(981631),
    P = n(217702),
    D = n(388032),
    w = n(55343),
    x = n(149715);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = 3000,
    G = 1000,
    B = "-:--",
    Z = {
        friction: 14,
        tension: 200,
    },
    F = {
        VIDEO: "VIDEO",
        AUDIO: "AUDIO",
    },
    V = {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
    };
function H(e) {
    let t = 0 | e,
        n = t % 60;
    return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"));
}
function Y(e) {
    let t = [],
        { duration: n } = e;
    for (let r = 0; r < e.buffered.length; r++) {
        let i = e.buffered.start(r),
            a = e.buffered.end(r);
        if (a - i < 1) continue;
        let o = (a - i) / n,
            s = i / n;
        t.push([s, o]);
    }
    return t;
}
let W = (e) => {
    let { current: t, duration: n } = e,
        r = null != t ? H(t) : B,
        i = null != n ? H(n) : B;
    return (
        (r = r.padStart(i.length, "0")),
        (0, a.jsxs)("div", {
            className: w.durationTimeWrapper,
            children: [
                (0, a.jsx)("span", {
                    className: w.durationTimeDisplay,
                    children: r,
                }),
                (0, a.jsx)("span", {
                    className: w.durationTimeSeparator,
                    children: "/",
                }),
                (0, a.jsx)("span", {
                    className: w.durationTimeDisplay,
                    children: i,
                }),
            ],
        })
    );
};
class K extends (r = o.Component) {
    componentDidMount() {
        this.state.translateY.setValue(+!!this.props.autoPlay);
    }
    componentDidUpdate(e) {
        var t, n, r, i, a;
        let { hide: o, playing: s } = this.props;
        o && !e.hide
            ? (this.animateControls(1, s),
              null == (t = this.volumeButton) || t.blur(),
              null == (n = (r = this.props).onControlsHide) || n.call(r))
            : !o && e.hide && (this.animateControls(0, s), null == (i = (a = this.props).onControlsShow) || i.call(a));
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: n } = this;
        null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
        let { translateY: n } = this.state;
        t ? d.Z.spring(n, M({ toValue: e }, Z)).start() : n.setValue(e);
    }
    getAnimatedStyle() {
        let { translateY: e } = this.state;
        return {
            transform: [
                {
                    translateY: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "100%"],
                    }),
                },
            ],
        };
    }
    renderPlayIcon() {
        let { playing: e, currentTime: t, duration: n, onPause: r, onPlay: i, disabled: o } = this.props;
        return e
            ? (0, a.jsx)(p.P3F, {
                  className: w.videoButton,
                  onClick: r,
                  tabIndex: o ? -1 : 0,
                  "aria-label": D.intl.string(D.t.ZcgDJX),
                  children: (0, a.jsx)(
                      p.fpf,
                      {
                          size: "xs",
                          color: "currentColor",
                          className: w.controlIcon,
                      },
                      "pause",
                  ),
              })
            : null != t && t === n
              ? (0, a.jsx)(p.P3F, {
                    className: w.videoButton,
                    onClick: i,
                    tabIndex: o ? -1 : 0,
                    "aria-label": D.intl.string(D.t.hsvh0i),
                    children: (0, a.jsx)(y.Z, { className: w.controlIcon }, "replay"),
                })
              : (0, a.jsx)(p.P3F, {
                    className: w.videoButton,
                    onClick: i,
                    tabIndex: o ? -1 : 0,
                    "aria-label": D.intl.string(D.t.RscU7I),
                    children: (0, a.jsx)(
                        p.o1U,
                        {
                            size: "xs",
                            color: "currentColor",
                            className: w.controlIcon,
                        },
                        "play",
                    ),
                });
    }
    render() {
        let {
                buffers: e,
                children: t,
                currentTime: n,
                duration: r,
                muted: i,
                onDrag: o,
                onDragEnd: s,
                onDragStart: l,
                onToggleMuted: c,
                onVolumeShow: u,
                onVolumeHide: f,
                width: _,
                volume: p,
                type: h,
            } = this.props,
            m = "string" == typeof _ || _ > 250;
        return (0, a.jsxs)(d.Z.div, {
            className: h === F.VIDEO ? w.videoControls : w.audioControls,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                m
                    ? (0, a.jsx)(W, {
                          current: n,
                          duration: r,
                      })
                    : null,
                (0, a.jsx)(S.Z, {
                    buffers: e,
                    value: null != r ? r : 0,
                    onDrag: o,
                    onDragEnd: s,
                    onDragStart: l,
                    type: S.Z.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, a.jsx)("div", {
                    className: x.flex,
                    children: (0, a.jsx)(N.Z, {
                        ref: this.setVolumeButtonRef,
                        muted: i,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => o(e, S.Z.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: u,
                        onVolumeHide: f,
                        iconClassName: w.controlIcon,
                        iconColor: "currentColor",
                        sliderWrapperClassName: w.volumeSliderWrapper,
                    }),
                }),
                t,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            L(this, "state", { translateY: new d.Z.Value(0) }),
            L(this, "volumeButton", void 0),
            L(this, "durationBar", void 0),
            L(this, "setDurationRef", (e) => {
                this.durationBar = e;
            }),
            L(this, "setVolumeButtonRef", (e) => {
                this.volumeButton = e;
            });
    }
}
function z(e) {
    let { fileName: t, fileSize: n, src: r, disabled: i, mimeType: o, hideDownloadButton: s } = e;
    return (0, a.jsxs)("div", {
        className: w.audioMetadata,
        children: [
            (0, a.jsxs)("div", {
                className: w.metadataContent,
                children: [
                    i
                        ? t
                        : (0, a.jsx)(m.Z, {
                              href: r,
                              className: w.metadataDownload,
                              iconClassName: w.metadataIcon,
                              mimeType: o,
                              fileName: t,
                          }),
                    (0, a.jsx)("div", {
                        className: w.metadataSize,
                        children: n,
                    }),
                ],
            }),
            !s &&
                (0, a.jsx)(m.Z, {
                    href: r,
                    className: w.metadataDownload,
                    iconClassName: w.metadataIcon,
                    mimeType: o,
                }),
        ],
    });
}
L(K, "defaultProps", { disabled: !1 });
class q extends o.Component {
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState({ play: e }, this.popAnimation);
    }
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state;
        return d.Z.accelerate({
            opacity: e.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.8],
            }),
            transform: [
                {
                    scale: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 2],
                    }),
                },
            ],
        });
    }
    render() {
        let { play: e } = this.state,
            t = e ? p.o1U : p.fpf;
        return (0, a.jsx)(d.Z.div, {
            className: w.playPausePop,
            style: this.getAnimatedStyle(),
            children: (0, a.jsx)(t, { className: w.playPausePopIcon }),
        });
    }
    constructor(...e) {
        super(...e),
            L(this, "state", {
                play: !1,
                scale: new d.Z.Value(0),
                opacity: new d.Z.Value(0),
            }),
            L(this, "popAnimation", () => {
                let { opacity: e, scale: t } = this.state;
                t.setValue(0),
                    e.setValue(0),
                    d.Z.parallel([
                        d.Z.sequence([
                            d.Z.timing(e, {
                                toValue: 1,
                                duration: 200,
                            }),
                            d.Z.timing(e, {
                                toValue: 0,
                                duration: 200,
                            }),
                        ]),
                        d.Z.spring(t, j(M({ toValue: 1.5 }, Z), { friction: 80 })),
                    ]).start();
            });
    }
}
let X = (0, g.B)({
    kind: "user",
    id: "2024-03_media_play_metrics",
    label: "Media play metrics User Experiment",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Send metrics",
            config: { enabled: !0 },
        },
    ],
});
class Q {
    moveToState(e) {
        (this.stateTime = performance.now()), (this.currentState = e);
    }
    timeInState() {
        return performance.now() - this.stateTime;
    }
    sendEvent() {
        this.analyticsEnabled &&
            (null == this.errorCode &&
                null == this.errorMessage &&
                !1 === this.metadata.hasValidFrame &&
                ((this.errorCode = 4),
                (this.errorMessage = "No valid video frames detected - codec may be unsupported")),
            O.default.track(R.rMx.MEDIA_PLAY_FINISHED, {
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
                connection_type: b.Z.getType(),
                effective_connection_speed: b.Z.getEffectiveConnectionSpeed(),
                service_provider: b.Z.getServiceProvider(),
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
            this.moveToState("not_started");
    }
    updatePlayTime(e) {
        var t, n;
        (this.playTimeSec += Math.max(
            (null != (t = this.lastPlayingTime) ? t : e) - (null != (n = this.playbackStartTime) ? n : 0),
            0,
        )),
            (this.playWallTimeMs += this.timeInState());
    }
    constructor(e) {
        L(this, "metadata", void 0),
            L(this, "playTimeSec", 0),
            L(this, "playWallTimeMs", 0),
            L(this, "firstPlayWaitingMs", 0),
            L(this, "stallCount", 0),
            L(this, "stallMs", 0),
            L(this, "seekCount", 0),
            L(this, "seekWaitingMs", 0),
            L(this, "errorMessage", null),
            L(this, "errorCode", null),
            L(this, "stateTime", performance.now()),
            L(this, "currentState", "not_started"),
            L(this, "playbackStartTime", void 0),
            L(this, "lastPlayingTime", void 0),
            L(this, "analyticsEnabled", void 0),
            L(this, "onWaiting", (e) => {
                switch (this.currentState) {
                    case "not_started":
                        this.moveToState("not_started_waiting");
                        break;
                    case "playing":
                        this.updatePlayTime(e.currentTarget.currentTime),
                            (this.stallCount += 1),
                            this.moveToState("stalled");
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
                        (0, _.UT)(this.currentState);
                }
            }),
            L(this, "onSeeking", (e) => {
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
                        (0, _.UT)(this.currentState);
                }
                (this.seekCount += 1), this.moveToState("seeking");
            }),
            L(this, "onSeeked", (e) => {
                switch (this.currentState) {
                    case "seeking":
                    case "seeked":
                        let t = this.stateTime;
                        this.moveToState("seeked"), (this.stateTime = t);
                        break;
                    case "not_started":
                    case "not_started_waiting":
                    case "stalled":
                    case "playing":
                    case "paused":
                        break;
                    default:
                        (0, _.UT)(this.currentState);
                }
            }),
            L(this, "onPause", (e) => {
                switch (this.currentState) {
                    case "playing":
                        this.updatePlayTime(e.currentTarget.currentTime), this.moveToState("paused"), this.sendEvent();
                        break;
                    case "stalled":
                        (this.stallMs += this.timeInState()), this.moveToState("paused"), this.sendEvent();
                        break;
                    case "not_started":
                    case "not_started_waiting":
                    case "paused":
                    case "seeking":
                        break;
                    case "seeked":
                        (this.seekWaitingMs += this.timeInState()), (this.seekCount += 1);
                        break;
                    default:
                        (0, _.UT)(this.currentState);
                }
            }),
            L(this, "onError", (e) => {
                this.moveToState("paused"), this.sendEvent();
            }),
            L(this, "onPlaying", (e) => {
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
                        (0, _.UT)(this.currentState);
                }
                (this.playbackStartTime = e.currentTarget.currentTime), this.moveToState("playing");
            }),
            L(this, "onTimeUpdate", (e) => {
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
                        (0, _.UT)(this.currentState);
                }
            }),
            L(this, "onDragStart", (e) => {
                null != e && (this.lastPlayingTime = e);
            }),
            L(this, "onLoadedMetadata", (e) => {
                this.metadata.fileDurationSec = e.currentTarget.duration;
            }),
            (this.metadata = e),
            (this.analyticsEnabled = X.getCurrentConfig({ location: "media_player" }).enabled);
    }
}
class J extends (i = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing
            ? {
                  playing: !1,
                  hideControls: !1,
              }
            : null;
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { current: r } = this.mediaRef;
        null != r && (t && (r.muted = t), e && (this.play(!0), this.handleUIUpdate()), (r.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
                props: { onPause: n, onVolumeChange: r, onMute: i },
                state: { playing: a, fullscreen: o, muted: s, dragging: l, volume: c },
            } = this,
            { current: u } = this.mediaRef,
            { current: d } = this.playPausePopRef;
        if (null == u) return;
        a && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == d || d.pop(a)))
            : !a && t.playing && (u.pause(), null == d || d.pop(a), null == n || n()),
            a && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let f = (0, T.fn)(u.parentNode, u);
        o && !t.fullscreen && null != f
            ? ((0, T.Dj)(f), f.addEventListener(T.NO, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != f &&
              (f.removeEventListener(T.NO, this.handleFullScreenExit), (0, T.Pr)(f, f.ownerDocument)),
            l === S.Z.Types.DURATION && t.dragging !== S.Z.Types.DURATION && a
                ? u.pause()
                : l !== S.Z.Types.DURATION && t.dragging === S.Z.Types.DURATION && a && u.play(),
            s !== t.muted && ((u.muted = s), null == i || i(s)),
            c !== t.volume && ((u.volume = c), null == r || r(c));
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, T.fn)(e.parentNode, e);
        null != t && (t.removeEventListener(T.NO, this.handleFullScreenExit), (0, T.Pr)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: r } = this.props,
            { current: i } = this.mediaRef;
        if (null != i) {
            let a = {};
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.volume && ((i.volume = e), (a.volume = e));
            }
            if ("function" == typeof r) {
                let e = r();
                e !== this.state.muted && ((i.muted = e), (a.muted = e));
            }
            this.setState(a),
                i.play(),
                null == t || t(e, i.currentTime * v.Z.Millis.SECOND, i.duration * v.Z.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, J.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, J.minHeight);
    }
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: n } = this.controlsRef;
        null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
        let n = 0 | e,
            r = 0 | t;
        (this.state.currentTime !== n || this.state.duration !== r) &&
            this.setState({
                currentTime: n,
                duration: r,
            });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: t } = this.state,
            n = t ? G : U,
            r = Math.max(0, Date.now() - this._lastMove) > n;
        r !== this.state.hideControls && null == e && this.setState({ hideControls: r });
    }
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: r, responsive: i, mediaLayoutType: o } = this.props,
            { playing: s, fullscreen: l } = this.state,
            c = this.getWidth(),
            u = this.getHeight();
        return r
            ? (0, a.jsx)(h.Z, {
                  alt: e,
                  className: w.video,
                  controls: !1,
                  height: u,
                  poster: n,
                  width: c,
                  responsive: i && !l,
                  mediaLayoutType: o,
                  playsInline: !0,
                  autoPlay: s,
              })
            : (0, a.jsx)(h.Z, {
                  alt: e,
                  className: w.video,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: s,
                  height: u,
                  responsive: i && !l,
                  mediaLayoutType: l ? P.hV.STATIC : o,
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
                  ref: this.mediaRef,
                  width: c,
                  src: t,
              });
    }
    renderAudio() {
        return (0, a.jsx)("audio", {
            className: w.audio,
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
                    autoPlay: n,
                    playable: r = !0,
                    onVolumeShow: i,
                    onVolumeHide: o,
                    onControlsHide: s,
                    onControlsShow: l,
                },
                state: {
                    buffers: c,
                    currentTime: u,
                    duration: d,
                    hasClickedPlay: f,
                    hideControls: _,
                    muted: p,
                    playing: h,
                    fullscreen: m,
                    volume: g,
                    dragging: b,
                },
            } = this,
            y = this.getWidth();
        return f || n || t === F.AUDIO
            ? (0, a.jsx)(K, {
                  buffers: c,
                  currentTime: u,
                  duration: d,
                  volume: (0, I.P)(g, 1),
                  hide: t === F.VIDEO && _,
                  muted: p,
                  autoPlay: n,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: i,
                  onVolumeHide: o,
                  onControlsShow: l,
                  onControlsHide: s,
                  playing: h,
                  dragging: b,
                  type: t,
                  ref: this.controlsRef,
                  width: m ? window.screen.width : y,
                  disabled: !r,
                  children:
                      t === F.VIDEO
                          ? (0, a.jsx)(E.Z, {
                                "aria-label": D.intl.string(D.t["2nM3Pk"]),
                                className: w.videoButton,
                                iconClassName: w.controlIcon,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, T.fn)(null == e ? void 0 : e.parentNode, e),
                            })
                          : null,
              })
            : (0, a.jsx)(A.Z, {
                  onPlay: this.handleVideoClick,
                  inactive: !r,
              });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: r, playable: i, mimeType: o } = this.props;
        return null == e || null == t
            ? null
            : r === F.AUDIO
              ? (0, a.jsx)(z, {
                    fileName: e,
                    fileSize: t,
                    src: n,
                    disabled: !i,
                    mimeType: o,
                    hideDownloadButton: !0,
                })
              : null;
    }
    renderPlayPausePop() {
        return (0, a.jsx)(q, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: r } = this.state,
            i = this.getWidth();
        return r
            ? V
            : t === F.AUDIO
              ? {
                    width: void 0,
                    height: "auto",
                }
              : e
                ? void 0
                : {
                      width: i,
                      height: n,
                  };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: r,
                className: i,
                renderLinkComponent: o,
                responsive: s,
                mediaLayoutType: c,
                renderOverlayContent: u,
            } = this.props,
            { fullscreen: d, hideControls: f, playing: _ } = this.state,
            h = w.wrapperPaused;
        if (
            (t === F.AUDIO ? (h = w.wrapperAudio) : f ? (h = w.wrapperControlsHidden) : _ && (h = w.wrapperPlaying),
            r && t === F.VIDEO)
        ) {
            let t = this.getWidth();
            return (0, a.jsxs)("div", {
                className: l()(h, { [w.wrapperMediaMosaic]: c === P.hV.MOSAIC }),
                style: s
                    ? void 0
                    : {
                          width: t,
                          height: e,
                      },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, a.jsx)("div", {
                        className: w.playCenter,
                        children: (0, a.jsx)(C.Z, {
                            className: w.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: o,
                        }),
                    }),
                ],
            });
        }
        return (0, a.jsxs)("div", {
            className: l()(h, w.newMosaicStyle, i, { [w.wrapperMediaMosaic]: c === P.hV.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: _ ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === F.AUDIO ? this.renderAudio() : this.renderVideo(),
                (0, a.jsx)(p.f6W, {
                    theme: R.BRd.MIDNIGHT,
                    children: (e) =>
                        (0, a.jsx)("div", {
                            className: e,
                            children: this.renderControls(),
                        }),
                }),
                t === F.VIDEO ? this.renderPlayPausePop() : null,
                null != u
                    ? (0, a.jsx)("div", {
                          className: l()({ [w.overlayContentHidden]: _ || d }),
                          children: u(),
                      })
                    : null,
            ],
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, f.kK)(e, HTMLVideoElement)) return;
        if (this.props.type !== F.VIDEO) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
        if (null != this._analytics.metadata.hasValidFrame) return;
        let t = e.videoHeight,
            n = e.currentTime,
            r = e.readyState;
        if (0 === t && r >= 2)
            return void setTimeout(() => {
                if (null == e) return;
                let t = e.videoHeight,
                    r = e.currentTime;
                if (0 === t && r > n + 0.5) {
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
    constructor(e) {
        var t, n;
        super(e),
            (t = this),
            L(this, "_unmounted", !1),
            L(this, "_lastMove", 0),
            L(this, "_analytics", void 0),
            L(this, "mediaRef", o.createRef()),
            L(this, "controlsRef", o.createRef()),
            L(this, "playPausePopRef", o.createRef()),
            L(this, "handleFullScreenExit", () => {
                let { current: e } = this.mediaRef;
                if (null == e) return;
                let t = (0, T.fn)(e.parentNode, e);
                (null != t && (0, T.rB)(t, null == t ? void 0 : t.ownerDocument)) || this.setState({ fullscreen: !1 });
            }),
            L(this, "toggleFullscreen", () => {
                let e = !this.state.fullscreen;
                this.setState({ fullscreen: e });
            }),
            L(this, "setMuted", (e) => {
                this.setState({ muted: e });
            }),
            L(this, "toggleMuted", () => {
                this.setMuted(!this.state.muted);
            }),
            L(this, "setTime", function (e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { current: r } = t.mediaRef;
                null != r &&
                    isFinite(r.duration) &&
                    isFinite(r.currentTime) &&
                    ((r.currentTime = e), t.updateValue(e / r.duration, n), t.updateTime(e, r.duration));
            }),
            L(this, "handleUIUpdate", () => {
                if (!this.state.playing || this._unmounted) return;
                let { current: e } = this.mediaRef;
                null != e &&
                    (e.duration > 0 && this.updateValue(e.currentTime / e.duration),
                    this.updateTime(e.currentTime, e.duration),
                    this.updateControlsVisibility(),
                    requestAnimationFrame(this.handleUIUpdate));
            }),
            L(this, "handleDrag", (e, t) => {
                let { current: n } = this.mediaRef;
                if (t === S.Z.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === S.Z.Types.VOLUME) {
                    let t = (0, I.A)(e, 1);
                    0 === t
                        ? this.setState({
                              muted: !0,
                              volume: t,
                          })
                        : this.state.muted && t > 0
                          ? this.setState({
                                muted: !1,
                                volume: t,
                            })
                          : this.setState({ volume: t });
                }
            }),
            L(this, "handleLoaded", (e) => {
                this._analytics.onLoadedMetadata(e);
                let { current: t } = this.mediaRef;
                null != t &&
                    (this.updateTime(t.currentTime, t.duration),
                    this.setState({
                        hasLoadedMetadata: !0,
                        currentTime: t.currentTime,
                        duration: t.duration,
                    }));
            }),
            L(this, "handleDurationChange", () => {
                let { current: e } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
            }),
            L(
                this,
                "handleBuffer",
                u().debounce(() => {
                    let { current: e } = this.mediaRef;
                    if (null == e) return void this.setState({ buffers: [] });
                    this.setState({ buffers: Y(e) });
                }, 400),
            ),
            L(this, "handleEnded", (e) => {
                let { onEnded: t } = this.props;
                null != t && t(e),
                    this.setState({
                        playing: !1,
                        hideControls: !1,
                    });
            }),
            L(this, "handleMouseMove", () => {
                this._lastMove = Date.now();
            }),
            L(this, "handleMouseLeave", () => {
                this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 });
            }),
            L(this, "handleMouseEnter", () => {
                "none" === this.state.preload && this.setState({ preload: "metadata" }),
                    this.setState({ hovering: !0 });
            }),
            L(this, "handleVideoClick", (e) => {
                let {
                    state: { hasClickedPlay: t, playing: n },
                    props: { onClick: r, autoPlay: i, autoMute: a },
                } = this;
                if (null != r) return void r(e);
                e.stopPropagation(),
                    i && !t && n && a
                        ? this.setState({
                              muted: !1,
                              hasClickedPlay: !0,
                          })
                        : this.setPlay(!this.state.playing);
            }),
            L(this, "setPlay", (e) => {
                let {
                    props: { autoMute: t },
                    state: { hasClickedPlay: n, muted: r },
                } = this;
                e !== this.state.playing &&
                    (e
                        ? this.setState({
                              playing: e,
                              hasClickedPlay: !0,
                              muted: (!!n || !t) && r,
                          })
                        : this.setState({
                              playing: !1,
                              hideControls: !1,
                          }));
            }),
            L(this, "handleDragStart", (e) => {
                var t, n;
                this.setState({ dragging: e }),
                    this._analytics.onDragStart(
                        null != (n = null == (t = this.mediaRef.current) ? void 0 : t.currentTime) ? n : null,
                    );
            }),
            L(this, "handleDragEnd", () => {
                this.setState({ dragging: null }), (this._lastMove = Date.now());
            }),
            L(this, "handleKeyDown", (e) => {
                let { current: t } = this.mediaRef,
                    { disableArrowKeySeek: n } = this.props;
                if (e.which === R.yXg.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                else if (e.which !== R.yXg.ARROW_LEFT || null == t || n)
                    if (e.which !== R.yXg.ARROW_RIGHT || null == t || n) {
                        if (e.which >= R.yXg.DIGIT_0 && e.which <= R.yXg.DIGIT_9 && null != t) {
                            e.preventDefault(), e.stopPropagation();
                            let n = (e.which - R.yXg.DIGIT_0) / 10;
                            (t.currentTime = t.duration * n), this.setPlay(!0);
                        }
                    } else {
                        e.preventDefault(), e.stopPropagation();
                        let n = Math.min(isFinite(t.duration) ? t.duration : 0, t.currentTime + 5);
                        this.setTime(n);
                    }
                else {
                    e.preventDefault(), e.stopPropagation();
                    let n = Math.max(0, t.currentTime - 5);
                    this.setTime(n);
                }
            }),
            L(this, "handleError", (e) => {
                var t, n, r, i;
                let a = e.currentTarget;
                (this._analytics.errorCode = null != (r = null == (t = a.error) ? void 0 : t.code) ? r : null),
                    (this._analytics.errorMessage =
                        null != (i = null == (n = a.error) ? void 0 : n.message) ? i : null),
                    this._analytics.onError(e);
            }),
            (this._analytics = new Q({
                src: e.src,
                mimeType: null == (n = e.mimeType) ? void 0 : n.join("/"),
                fileSize: e.fileSizeBytes,
            }));
        let { autoPlay: r, autoMute: i, volume: a, playable: s } = this.props,
            l = "function" == typeof a ? a() : a,
            c = "function" == typeof i ? i() : i;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !s,
            muted: c,
            volume: l,
            playing: r,
            preload: "none",
            width: J.minWidth,
            height: J.minHeight,
            hovering: !1,
        };
    }
}
L(J, "Types", F),
    L(J, "defaultProps", {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1,
    }),
    L(J, "minWidth", 150),
    L(J, "minHeight", 110);
let $ = J;
