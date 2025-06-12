n.d(t, {
    ZP: () => en,
    yv: () => K
}),
    n(539854),
    n(388685);
var r,
    i,
    a = n(255367),
    o = n(73800),
    s = n(120356),
    l = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(748780),
    _ = n(374470),
    f = n(283693),
    p = n(481060),
    h = n(70097),
    m = n(167080),
    g = n(818083),
    E = n(544406),
    b = n(268353),
    y = n(866960),
    O = n(181058),
    v = n(626135),
    I = n(70956),
    T = n(36703),
    S = n(228488),
    A = n(58737),
    N = n(540026),
    C = n(528472),
    R = n(455813),
    P = n(283756),
    w = n(793148),
    D = n(981631),
    L = n(217702),
    x = n(388032),
    M = n(480183),
    k = n(893354);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = 3000,
    F = 1000,
    Z = '-:--',
    H = {
        friction: 14,
        tension: 200
    },
    Y = {
        VIDEO: 'VIDEO',
        AUDIO: 'AUDIO'
    },
    W = {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    };
function K(e) {
    let t = 0 | e,
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function z(e) {
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
let q = (e) => {
    let { current: t, duration: n } = e,
        r = null != t ? K(t) : Z,
        i = null != n ? K(n) : Z;
    return (
        (r = r.padStart(i.length, '0')),
        (0, a.jsxs)('div', {
            className: M.durationTimeWrapper,
            children: [
                (0, a.jsx)('span', {
                    className: M.durationTimeDisplay,
                    children: r
                }),
                (0, a.jsx)('span', {
                    className: M.durationTimeSeparator,
                    children: '/'
                }),
                (0, a.jsx)('span', {
                    className: M.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
};
class X extends (r = o.Component) {
    componentDidMount() {
        this.state.translateY.setValue(+!!this.props.autoPlay);
    }
    componentDidUpdate(e) {
        var t, n, r, i, a;
        let { hide: o, playing: s } = this.props;
        o && !e.hide ? (this.animateControls(1, s), null == (t = this.volumeButton) || t.blur(), null == (n = (r = this.props).onControlsHide) || n.call(r)) : !o && e.hide && (this.animateControls(0, s), null == (i = (a = this.props).onControlsShow) || i.call(a));
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: n } = this;
        null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
        let { translateY: n } = this.state;
        t ? d.Z.spring(n, U({ toValue: e }, H)).start() : n.setValue(e);
    }
    getAnimatedStyle() {
        let { translateY: e } = this.state;
        return {
            transform: [
                {
                    translateY: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '100%']
                    })
                }
            ]
        };
    }
    renderPlayIcon() {
        let { playing: e, currentTime: t, duration: n, onPause: r, onPlay: i, disabled: o } = this.props;
        return e
            ? (0, a.jsx)(p.P3F, {
                  className: M.videoButton,
                  onClick: r,
                  tabIndex: o ? -1 : 0,
                  'aria-label': x.intl.string(x.t.ZcgDJS),
                  children: (0, a.jsx)(
                      p.fpf,
                      {
                          size: 'xs',
                          color: 'currentColor',
                          className: M.controlIcon
                      },
                      'pause'
                  )
              })
            : null != t && t === n
              ? (0, a.jsx)(p.P3F, {
                    className: M.videoButton,
                    onClick: i,
                    tabIndex: o ? -1 : 0,
                    'aria-label': x.intl.string(x.t.hsvh0t),
                    children: (0, a.jsx)(O.Z, { className: M.controlIcon }, 'replay')
                })
              : (0, a.jsx)(p.P3F, {
                    className: M.videoButton,
                    onClick: i,
                    tabIndex: o ? -1 : 0,
                    'aria-label': x.intl.string(x.t.RscU7O),
                    children: (0, a.jsx)(
                        p.o1U,
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: M.controlIcon
                        },
                        'play'
                    )
                });
    }
    render() {
        let { buffers: e, children: t, currentTime: n, duration: r, muted: i, onDrag: o, onDragEnd: s, onDragStart: l, onToggleMuted: c, onVolumeShow: u, onVolumeHide: _, width: f, volume: p, type: h } = this.props,
            m = 'string' == typeof f || f > 250;
        return (0, a.jsxs)(d.Z.div, {
            className: h === Y.VIDEO ? M.videoControls : M.audioControls,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                m
                    ? (0, a.jsx)(q, {
                          current: n,
                          duration: r
                      })
                    : null,
                (0, a.jsx)(N.Z, {
                    buffers: e,
                    value: null != r ? r : 0,
                    onDrag: o,
                    onDragEnd: s,
                    onDragStart: l,
                    type: N.Z.Types.DURATION,
                    ref: this.setDurationRef
                }),
                (0, a.jsx)('div', {
                    className: k.flex,
                    children: (0, a.jsx)(w.Z, {
                        ref: this.setVolumeButtonRef,
                        muted: i,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => o(e, N.Z.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: u,
                        onVolumeHide: _,
                        iconClassName: M.controlIcon,
                        iconColor: 'currentColor',
                        sliderWrapperClassName: M.volumeSliderWrapper
                    })
                }),
                t
            ]
        });
    }
    constructor(...e) {
        super(...e),
            j(this, 'state', { translateY: new d.Z.Value(0) }),
            j(this, 'volumeButton', void 0),
            j(this, 'durationBar', void 0),
            j(this, 'setDurationRef', (e) => {
                this.durationBar = e;
            }),
            j(this, 'setVolumeButtonRef', (e) => {
                this.volumeButton = e;
            });
    }
}
function Q(e) {
    let { fileName: t, fileSize: n, src: r, disabled: i, mimeType: o, hideDownloadButton: s } = e;
    return (0, a.jsxs)('div', {
        className: M.audioMetadata,
        children: [
            (0, a.jsxs)('div', {
                className: M.metadataContent,
                children: [
                    i
                        ? t
                        : (0, a.jsx)(m.Z, {
                              href: r,
                              className: M.metadataDownload,
                              iconClassName: M.metadataIcon,
                              mimeType: o,
                              fileName: t
                          }),
                    (0, a.jsx)('div', {
                        className: M.metadataSize,
                        children: n
                    })
                ]
            }),
            !s &&
                (0, a.jsx)(m.Z, {
                    href: r,
                    className: M.metadataDownload,
                    iconClassName: M.metadataIcon,
                    mimeType: o
                })
        ]
    });
}
j(X, 'defaultProps', { disabled: !1 });
class J extends o.Component {
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState({ play: e }, this.popAnimation);
    }
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state;
        return d.Z.accelerate({
            opacity: e.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.8]
            }),
            transform: [
                {
                    scale: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 2]
                    })
                }
            ]
        });
    }
    render() {
        let { play: e } = this.state,
            t = e ? p.o1U : p.fpf;
        return (0, a.jsx)(d.Z.div, {
            className: M.playPausePop,
            style: this.getAnimatedStyle(),
            children: (0, a.jsx)(t, { className: M.playPausePopIcon })
        });
    }
    constructor(...e) {
        super(...e),
            j(this, 'state', {
                play: !1,
                scale: new d.Z.Value(0),
                opacity: new d.Z.Value(0)
            }),
            j(this, 'popAnimation', () => {
                let { opacity: e, scale: t } = this.state;
                t.setValue(0),
                    e.setValue(0),
                    d.Z.parallel([
                        d.Z.sequence([
                            d.Z.timing(e, {
                                toValue: 1,
                                duration: 200
                            }),
                            d.Z.timing(e, {
                                toValue: 0,
                                duration: 200
                            })
                        ]),
                        d.Z.spring(t, B(U({ toValue: 1.5 }, H), { friction: 80 }))
                    ]).start();
            });
    }
}
let $ = (0, g.B)({
    kind: 'user',
    id: '2024-03_media_play_metrics',
    label: 'Media play metrics User Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Send metrics',
            config: { enabled: !0 }
        }
    ]
});
class ee {
    moveToState(e) {
        (this.stateTime = performance.now()), (this.currentState = e);
    }
    timeInState() {
        return performance.now() - this.stateTime;
    }
    sendEvent() {
        this.analyticsEnabled &&
            (null == this.errorCode && null == this.errorMessage && !1 === this.metadata.hasValidFrame && ((this.errorCode = 4), (this.errorMessage = 'No valid video frames detected - codec may be unsupported')),
            v.default.track(D.rMx.MEDIA_PLAY_FINISHED, {
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
                connection_type: y.Z.getType(),
                effective_connection_speed: y.Z.getEffectiveConnectionSpeed(),
                service_provider: y.Z.getServiceProvider(),
                error_message: this.errorMessage,
                error_code: this.errorCode
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
            this.moveToState('not_started');
    }
    updatePlayTime(e) {
        var t, n;
        (this.playTimeSec += Math.max((null != (t = this.lastPlayingTime) ? t : e) - (null != (n = this.playbackStartTime) ? n : 0), 0)), (this.playWallTimeMs += this.timeInState());
    }
    constructor(e) {
        j(this, 'metadata', void 0),
            j(this, 'playTimeSec', 0),
            j(this, 'playWallTimeMs', 0),
            j(this, 'firstPlayWaitingMs', 0),
            j(this, 'stallCount', 0),
            j(this, 'stallMs', 0),
            j(this, 'seekCount', 0),
            j(this, 'seekWaitingMs', 0),
            j(this, 'errorMessage', null),
            j(this, 'errorCode', null),
            j(this, 'stateTime', performance.now()),
            j(this, 'currentState', 'not_started'),
            j(this, 'playbackStartTime', void 0),
            j(this, 'lastPlayingTime', void 0),
            j(this, 'analyticsEnabled', void 0),
            j(this, 'onWaiting', (e) => {
                switch (this.currentState) {
                    case 'not_started':
                        this.moveToState('not_started_waiting');
                        break;
                    case 'playing':
                        this.updatePlayTime(e.currentTarget.currentTime), (this.stallCount += 1), this.moveToState('stalled');
                        break;
                    case 'seeking':
                    case 'not_started_waiting':
                    case 'stalled':
                        break;
                    case 'paused':
                    case 'seeked':
                        this.moveToState('stalled');
                        break;
                    default:
                        (0, f.UT)(this.currentState);
                }
            }),
            j(this, 'onSeeking', (e) => {
                switch (this.currentState) {
                    case 'seeking':
                    case 'seeked':
                        this.moveToState('seeking');
                        return;
                    case 'stalled':
                        this.stallMs += this.timeInState();
                        break;
                    case 'playing':
                        this.updatePlayTime(e.currentTarget.currentTime);
                        break;
                    case 'not_started':
                    case 'not_started_waiting':
                    case 'paused':
                        break;
                    default:
                        (0, f.UT)(this.currentState);
                }
                (this.seekCount += 1), this.moveToState('seeking');
            }),
            j(this, 'onSeeked', (e) => {
                switch (this.currentState) {
                    case 'seeking':
                    case 'seeked':
                        let t = this.stateTime;
                        this.moveToState('seeked'), (this.stateTime = t);
                        break;
                    case 'not_started':
                    case 'not_started_waiting':
                    case 'stalled':
                    case 'playing':
                    case 'paused':
                        break;
                    default:
                        (0, f.UT)(this.currentState);
                }
            }),
            j(this, 'onPause', (e) => {
                switch (this.currentState) {
                    case 'playing':
                        this.updatePlayTime(e.currentTarget.currentTime), this.moveToState('paused'), this.sendEvent();
                        break;
                    case 'stalled':
                        (this.stallMs += this.timeInState()), this.moveToState('paused'), this.sendEvent();
                        break;
                    case 'not_started':
                    case 'not_started_waiting':
                    case 'paused':
                    case 'seeking':
                        break;
                    case 'seeked':
                        (this.seekWaitingMs += this.timeInState()), (this.seekCount += 1);
                        break;
                    default:
                        (0, f.UT)(this.currentState);
                }
            }),
            j(this, 'onError', (e) => {
                this.moveToState('paused'), this.sendEvent();
            }),
            j(this, 'onPlaying', (e) => {
                switch (this.currentState) {
                    case 'playing':
                        return;
                    case 'not_started':
                        this.firstPlayWaitingMs = 0;
                        break;
                    case 'not_started_waiting':
                        this.firstPlayWaitingMs = this.timeInState();
                        break;
                    case 'stalled':
                        this.stallMs += this.timeInState();
                        break;
                    case 'seeked':
                        this.seekWaitingMs += this.timeInState();
                        break;
                    case 'paused':
                    case 'seeking':
                        break;
                    default:
                        (0, f.UT)(this.currentState);
                }
                (this.playbackStartTime = e.currentTarget.currentTime), this.moveToState('playing');
            }),
            j(this, 'onTimeUpdate', (e) => {
                switch (this.currentState) {
                    case 'playing':
                        this.lastPlayingTime = e.currentTarget.currentTime;
                        return;
                    case 'not_started':
                    case 'not_started_waiting':
                    case 'stalled':
                    case 'seeked':
                    case 'paused':
                    case 'seeking':
                        break;
                    default:
                        (0, f.UT)(this.currentState);
                }
            }),
            j(this, 'onDragStart', (e) => {
                null != e && (this.lastPlayingTime = e);
            }),
            j(this, 'onLoadedMetadata', (e) => {
                this.metadata.fileDurationSec = e.currentTarget.duration;
            }),
            (this.metadata = e),
            (this.analyticsEnabled = $.getCurrentConfig({ location: 'media_player' }).enabled),
            (0, E.x)({ location: 'media_player' }).enabled && C.Z.getInstance().getCapabilities();
    }
}
class et extends (i = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing
            ? {
                  playing: !1,
                  hideControls: !1
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
                state: { playing: a, fullscreen: o, muted: s, dragging: l, volume: c }
            } = this,
            { current: u } = this.mediaRef,
            { current: d } = this.playPausePopRef;
        if (null == u) return;
        a && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == d || d.pop(a))) : !a && t.playing && (u.pause(), null == d || d.pop(a), null == n || n()), a && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let _ = (0, S.fn)(u.parentNode, u);
        o && !t.fullscreen && null != _ ? ((0, S.Dj)(_), _.addEventListener(S.NO, this.handleFullScreenExit)) : !o && t.fullscreen && null != _ && (_.removeEventListener(S.NO, this.handleFullScreenExit), (0, S.Pr)(_, _.ownerDocument)), l === N.Z.Types.DURATION && t.dragging !== N.Z.Types.DURATION && a ? u.pause() : l !== N.Z.Types.DURATION && t.dragging === N.Z.Types.DURATION && a && u.play(), s !== t.muted && ((u.muted = s), null == i || i(s)), c !== t.volume && ((u.volume = c), null == r || r(c));
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, S.fn)(e.parentNode, e);
        null != t && (t.removeEventListener(S.NO, this.handleFullScreenExit), (0, S.Pr)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: r } = this.props,
            { current: i } = this.mediaRef;
        if (null != i) {
            let a = {};
            if ('function' == typeof n) {
                let e = n();
                e !== this.state.volume && ((i.volume = e), (a.volume = e));
            }
            if ('function' == typeof r) {
                let e = r();
                e !== this.state.muted && ((i.muted = e), (a.muted = e));
            }
            this.setState(a), i.play(), null == t || t(e, i.currentTime * I.Z.Millis.SECOND, i.duration * I.Z.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return '100%' === e ? e : Math.max(e, et.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return '100%' === e ? e : Math.max(e, et.minHeight);
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
                duration: r
            });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: t } = this.state,
            n = t ? F : V,
            r = Math.max(0, Date.now() - this._lastMove) > n;
        r !== this.state.hideControls && null == e && this.setState({ hideControls: r });
    }
    renderVideo() {
        let { src: e, poster: t, forceExternal: n, responsive: r, mediaLayoutType: i } = this.props,
            { playing: o, fullscreen: s } = this.state,
            l = this.getWidth(),
            c = this.getHeight();
        return n
            ? (0, a.jsx)(h.Z, {
                  className: M.video,
                  controls: !1,
                  height: c,
                  poster: t,
                  width: l,
                  responsive: r && !s,
                  mediaLayoutType: i,
                  playsInline: !0,
                  autoPlay: o
              })
            : (0, a.jsx)(h.Z, {
                  className: M.video,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: o,
                  height: c,
                  responsive: r && !s,
                  mediaLayoutType: s ? L.hV.STATIC : i,
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
                  poster: t,
                  preload: this.state.preload,
                  ref: this.mediaRef,
                  width: l,
                  src: e
              });
    }
    renderAudio() {
        return (0, a.jsx)('audio', {
            className: M.audio,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, a.jsx)('source', { src: this.props.src })
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: { type: t, autoPlay: n, playable: r = !0, onVolumeShow: i, onVolumeHide: o, onControlsHide: s, onControlsShow: l },
                state: { buffers: c, currentTime: u, duration: d, hasClickedPlay: _, hideControls: f, muted: p, playing: h, fullscreen: m, volume: g, dragging: E }
            } = this,
            y = this.getWidth();
        return _ || n || t === Y.AUDIO
            ? (0, a.jsx)(X, {
                  buffers: c,
                  currentTime: u,
                  duration: d,
                  volume: (0, T.P)(g, 1),
                  hide: t === Y.VIDEO && f,
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
                  dragging: E,
                  type: t,
                  ref: this.controlsRef,
                  width: m ? window.screen.width : y,
                  disabled: !r,
                  children:
                      t === Y.VIDEO
                          ? (0, a.jsx)(b.Z, {
                                'aria-label': x.intl.string(x.t['2nM3Pj']),
                                className: M.videoButton,
                                iconClassName: M.controlIcon,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, S.fn)(null == e ? void 0 : e.parentNode, e)
                            })
                          : null
              })
            : (0, a.jsx)(R.Z, {
                  onPlay: this.handleVideoClick,
                  inactive: !r
              });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: r, playable: i, mimeType: o } = this.props;
        return null == e || null == t
            ? null
            : r === Y.AUDIO
              ? (0, a.jsx)(Q, {
                    fileName: e,
                    fileSize: t,
                    src: n,
                    disabled: !i,
                    mimeType: o,
                    hideDownloadButton: !0
                })
              : null;
    }
    renderPlayPausePop() {
        return (0, a.jsx)(J, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: r } = this.state,
            i = this.getWidth();
        return r
            ? W
            : t === Y.AUDIO
              ? {
                    width: void 0,
                    height: 'auto'
                }
              : e
                ? void 0
                : {
                      width: i,
                      height: n
                  };
    }
    render() {
        let { height: e, type: t, src: n, forceExternal: r, className: i, renderLinkComponent: o, responsive: s, mediaLayoutType: c, renderOverlayContent: u } = this.props,
            { fullscreen: d, hideControls: _, playing: f } = this.state,
            p = M.wrapperPaused;
        if ((t === Y.AUDIO ? (p = M.wrapperAudio) : _ ? (p = M.wrapperControlsHidden) : f && (p = M.wrapperPlaying), r && t === Y.VIDEO)) {
            let t = this.getWidth();
            return (0, a.jsxs)('div', {
                className: l()(p, { [M.wrapperMediaMosaic]: c === L.hV.MOSAIC }),
                style: s
                    ? void 0
                    : {
                          width: t,
                          height: e
                      },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, a.jsx)('div', {
                        className: M.playCenter,
                        children: (0, a.jsx)(P.Z, {
                            className: M.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: o
                        })
                    })
                ]
            });
        }
        return (0, a.jsxs)('div', {
            className: l()(p, M.newMosaicStyle, i, { [M.wrapperMediaMosaic]: c === L.hV.MOSAIC }),
            'data-fullscreen': d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: f ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === Y.AUDIO ? this.renderAudio() : this.renderVideo(),
                this.renderControls(),
                t === Y.VIDEO ? this.renderPlayPausePop() : null,
                null != u
                    ? (0, a.jsx)('div', {
                          className: l()({ [M.overlayContentHidden]: f || d }),
                          children: u()
                      })
                    : null
            ]
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, _.k)(e, HTMLVideoElement)) return;
        if (this.props.type !== Y.VIDEO) {
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
            j(this, '_unmounted', !1),
            j(this, '_lastMove', 0),
            j(this, '_analytics', void 0),
            j(this, 'mediaRef', o.createRef()),
            j(this, 'controlsRef', o.createRef()),
            j(this, 'playPausePopRef', o.createRef()),
            j(this, 'handleFullScreenExit', () => {
                let { current: e } = this.mediaRef;
                if (null == e) return;
                let t = (0, S.fn)(e.parentNode, e);
                (null != t && (0, S.rB)(t, null == t ? void 0 : t.ownerDocument)) || this.setState({ fullscreen: !1 });
            }),
            j(this, 'toggleFullscreen', () => {
                let e = !this.state.fullscreen;
                this.setState({ fullscreen: e });
            }),
            j(this, 'setMuted', (e) => {
                this.setState({ muted: e });
            }),
            j(this, 'toggleMuted', () => {
                this.setMuted(!this.state.muted);
            }),
            j(this, 'setTime', function (e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { current: r } = t.mediaRef;
                null != r && isFinite(r.duration) && isFinite(r.currentTime) && ((r.currentTime = e), t.updateValue(e / r.duration, n), t.updateTime(e, r.duration));
            }),
            j(this, 'handleUIUpdate', () => {
                if (!this.state.playing || this._unmounted) return;
                let { current: e } = this.mediaRef;
                null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate));
            }),
            j(this, 'handleDrag', (e, t) => {
                let { current: n } = this.mediaRef;
                if (t === N.Z.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === N.Z.Types.VOLUME) {
                    let t = (0, T.A)(e, 1);
                    0 === t
                        ? this.setState({
                              muted: !0,
                              volume: t
                          })
                        : this.state.muted && t > 0
                          ? this.setState({
                                muted: !1,
                                volume: t
                            })
                          : this.setState({ volume: t });
                }
            }),
            j(this, 'handleLoaded', (e) => {
                this._analytics.onLoadedMetadata(e);
                let { current: t } = this.mediaRef;
                null != t &&
                    (this.updateTime(t.currentTime, t.duration),
                    this.setState({
                        hasLoadedMetadata: !0,
                        currentTime: t.currentTime,
                        duration: t.duration
                    }));
            }),
            j(this, 'handleDurationChange', () => {
                let { current: e } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
            }),
            j(
                this,
                'handleBuffer',
                u().debounce(() => {
                    let { current: e } = this.mediaRef;
                    if (null == e) return void this.setState({ buffers: [] });
                    this.setState({ buffers: z(e) });
                }, 400)
            ),
            j(this, 'handleEnded', (e) => {
                let { onEnded: t } = this.props;
                null != t && t(e),
                    this.setState({
                        playing: !1,
                        hideControls: !1
                    });
            }),
            j(this, 'handleMouseMove', () => {
                this._lastMove = Date.now();
            }),
            j(this, 'handleMouseLeave', () => {
                this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 });
            }),
            j(this, 'handleMouseEnter', () => {
                'none' === this.state.preload && this.setState({ preload: 'metadata' }), this.setState({ hovering: !0 });
            }),
            j(this, 'handleVideoClick', (e) => {
                let {
                    state: { hasClickedPlay: t, playing: n },
                    props: { onClick: r, autoPlay: i, autoMute: a }
                } = this;
                if (null != r) return void r(e);
                e.stopPropagation(),
                    i && !t && n && a
                        ? this.setState({
                              muted: !1,
                              hasClickedPlay: !0
                          })
                        : this.setPlay(!this.state.playing);
            }),
            j(this, 'setPlay', (e) => {
                let {
                    props: { autoMute: t },
                    state: { hasClickedPlay: n, muted: r }
                } = this;
                e !== this.state.playing &&
                    (e
                        ? this.setState({
                              playing: e,
                              hasClickedPlay: !0,
                              muted: (!!n || !t) && r
                          })
                        : this.setState({
                              playing: !1,
                              hideControls: !1
                          }));
            }),
            j(this, 'handleDragStart', (e) => {
                var t, n;
                this.setState({ dragging: e }), this._analytics.onDragStart(null != (n = null == (t = this.mediaRef.current) ? void 0 : t.currentTime) ? n : null);
            }),
            j(this, 'handleDragEnd', () => {
                this.setState({ dragging: null }), (this._lastMove = Date.now());
            }),
            j(this, 'handleKeyDown', (e) => {
                let { current: t } = this.mediaRef,
                    { disableArrowKeySeek: n } = this.props;
                if (e.which === D.yXg.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                else if (e.which !== D.yXg.ARROW_LEFT || null == t || n)
                    if (e.which !== D.yXg.ARROW_RIGHT || null == t || n) {
                        if (e.which >= D.yXg.DIGIT_0 && e.which <= D.yXg.DIGIT_9 && null != t) {
                            e.preventDefault(), e.stopPropagation();
                            let n = (e.which - D.yXg.DIGIT_0) / 10;
                            (t.currentTime = t.duration * n), this.setPlay(!0);
                        }
                    } else {
                        let { enabled: n } = (0, A.U)({ location: 'media_player' });
                        if (n) {
                            e.preventDefault(), e.stopPropagation();
                            let n = Math.min(isFinite(t.duration) ? t.duration : 0, t.currentTime + 5);
                            this.setTime(n);
                        }
                    }
                else {
                    let { enabled: n } = (0, A.U)({ location: 'media_player' });
                    if (n) {
                        e.preventDefault(), e.stopPropagation();
                        let n = Math.max(0, t.currentTime - 5);
                        this.setTime(n);
                    }
                }
            }),
            j(this, 'handleError', (e) => {
                var t, n, r, i;
                let a = e.currentTarget;
                (this._analytics.errorCode = null != (r = null == (t = a.error) ? void 0 : t.code) ? r : null), (this._analytics.errorMessage = null != (i = null == (n = a.error) ? void 0 : n.message) ? i : null), this._analytics.onError(e);
            }),
            (this._analytics = new ee({
                src: e.src,
                mimeType: null == (n = e.mimeType) ? void 0 : n.join('/'),
                fileSize: e.fileSizeBytes
            }));
        let { autoPlay: r, autoMute: i, volume: a, playable: s } = this.props,
            l = 'function' == typeof a ? a() : a,
            c = 'function' == typeof i ? i() : i;
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
            preload: 'none',
            width: et.minWidth,
            height: et.minHeight,
            hovering: !1
        };
    }
}
j(et, 'Types', Y),
    j(et, 'defaultProps', {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }),
    j(et, 'minWidth', 150),
    j(et, 'minHeight', 110);
let en = et;
