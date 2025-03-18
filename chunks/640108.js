n.d(t, {
    ZP: () => J,
    yv: () => Z
}),
    n(653041),
    n(47120),
    n(411104);
var r,
    i,
    o = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(748780),
    f = n(374470),
    _ = n(481060),
    p = n(70097),
    h = n(167080),
    m = n(818083),
    g = n(268353),
    E = n(866960),
    b = n(181058),
    v = n(626135),
    y = n(70956),
    O = n(36703),
    I = n(228488),
    S = n(540026),
    T = n(455813),
    N = n(283756),
    A = n(793148),
    C = n(981631),
    R = n(217702),
    P = n(388032),
    w = n(984323),
    D = n(612064);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = 3000,
    U = 1000,
    G = '-:--',
    B = {
        friction: 14,
        tension: 200
    },
    F = {
        VIDEO: 'VIDEO',
        AUDIO: 'AUDIO'
    },
    V = {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    };
function Z(e) {
    let t = 0 | e,
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function H(e) {
    let t = [],
        { duration: n } = e;
    for (let r = 0; r < e.buffered.length; r++) {
        let i = e.buffered.start(r),
            o = e.buffered.end(r);
        if (o - i < 1) continue;
        let a = (o - i) / n,
            s = i / n;
        t.push([s, a]);
    }
    return t;
}
let W = (e) => {
    let { current: t, duration: n } = e,
        r = null != t ? Z(t) : G,
        i = null != n ? Z(n) : G;
    return (
        (r = r.padStart(i.length, '0')),
        (0, o.jsxs)('div', {
            className: w.durationTimeWrapper,
            children: [
                (0, o.jsx)('span', {
                    className: w.durationTimeDisplay,
                    children: r
                }),
                (0, o.jsx)('span', {
                    className: w.durationTimeSeparator,
                    children: '/'
                }),
                (0, o.jsx)('span', {
                    className: w.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
};
class Y extends (r = a.Component) {
    componentDidMount() {
        this.state.translateY.setValue(+!!this.props.autoPlay);
    }
    componentDidUpdate(e) {
        var t, n, r, i, o;
        let { hide: a, playing: s } = this.props;
        a && !e.hide ? (this.animateControls(1, s), null === (t = this.volumeButton) || void 0 === t || t.blur(), null === (n = (r = this.props).onControlsHide) || void 0 === n || n.call(r)) : !a && e.hide && (this.animateControls(0, s), null === (i = (o = this.props).onControlsShow) || void 0 === i || i.call(o));
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: n } = this;
        null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
        let { translateY: n } = this.state;
        t ? d.Z.spring(n, x({ toValue: e }, B)).start() : n.setValue(e);
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
        let { playing: e, currentTime: t, duration: n, onPause: r, onPlay: i, disabled: a } = this.props;
        return e
            ? (0, o.jsx)(_.P3F, {
                  className: w.videoButton,
                  onClick: r,
                  tabIndex: a ? -1 : 0,
                  'aria-label': P.NW.string(P.t.ZcgDJS),
                  children: (0, o.jsx)(
                      _.fpf,
                      {
                          size: 'xs',
                          color: 'currentColor',
                          className: w.controlIcon
                      },
                      'pause'
                  )
              })
            : null != t && t === n
              ? (0, o.jsx)(_.P3F, {
                    className: w.videoButton,
                    onClick: i,
                    tabIndex: a ? -1 : 0,
                    'aria-label': P.NW.string(P.t.hsvh0t),
                    children: (0, o.jsx)(b.Z, { className: w.controlIcon }, 'replay')
                })
              : (0, o.jsx)(_.P3F, {
                    className: w.videoButton,
                    onClick: i,
                    tabIndex: a ? -1 : 0,
                    'aria-label': P.NW.string(P.t.RscU7O),
                    children: (0, o.jsx)(
                        _.o1U,
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: w.controlIcon
                        },
                        'play'
                    )
                });
    }
    render() {
        let { buffers: e, children: t, currentTime: n, duration: r, muted: i, onDrag: a, onDragEnd: s, onDragStart: l, onToggleMuted: c, onVolumeShow: u, onVolumeHide: f, width: _, volume: p, type: h } = this.props,
            m = 'string' == typeof _ || _ > 250;
        return (0, o.jsxs)(d.Z.div, {
            className: h === F.VIDEO ? w.videoControls : w.audioControls,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                m
                    ? (0, o.jsx)(W, {
                          current: n,
                          duration: r
                      })
                    : null,
                (0, o.jsx)(S.Z, {
                    buffers: e,
                    value: null != r ? r : 0,
                    onDrag: a,
                    onDragEnd: s,
                    onDragStart: l,
                    type: S.Z.Types.DURATION,
                    ref: this.setDurationRef
                }),
                (0, o.jsx)('div', {
                    className: D.flex,
                    children: (0, o.jsx)(A.Z, {
                        ref: this.setVolumeButtonRef,
                        muted: i,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => a(e, S.Z.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: u,
                        onVolumeHide: f,
                        iconClassName: w.controlIcon,
                        iconColor: 'currentColor',
                        sliderWrapperClassName: w.volumeSliderWrapper
                    })
                }),
                t
            ]
        });
    }
    constructor(...e) {
        super(...e),
            L(this, 'state', { translateY: new d.Z.Value(0) }),
            L(this, 'volumeButton', void 0),
            L(this, 'durationBar', void 0),
            L(this, 'setDurationRef', (e) => {
                this.durationBar = e;
            }),
            L(this, 'setVolumeButtonRef', (e) => {
                this.volumeButton = e;
            });
    }
}
function K(e) {
    let { fileName: t, fileSize: n, src: r, disabled: i, mimeType: a, hideDownloadButton: s } = e;
    return (0, o.jsxs)('div', {
        className: w.audioMetadata,
        children: [
            (0, o.jsxs)('div', {
                className: w.metadataContent,
                children: [
                    i
                        ? t
                        : (0, o.jsx)(h.Z, {
                              href: r,
                              className: w.metadataDownload,
                              iconClassName: w.metadataIcon,
                              mimeType: a,
                              fileName: t
                          }),
                    (0, o.jsx)('div', {
                        className: w.metadataSize,
                        children: n
                    })
                ]
            }),
            !s &&
                (0, o.jsx)(h.Z, {
                    href: r,
                    className: w.metadataDownload,
                    iconClassName: w.metadataIcon,
                    mimeType: a
                })
        ]
    });
}
L(Y, 'defaultProps', { disabled: !1 });
class z extends a.Component {
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
            t = e ? _.o1U : _.fpf;
        return (0, o.jsx)(d.Z.div, {
            className: w.playPausePop,
            style: this.getAnimatedStyle(),
            children: (0, o.jsx)(t, { className: w.playPausePopIcon })
        });
    }
    constructor(...e) {
        super(...e),
            L(this, 'state', {
                play: !1,
                scale: new d.Z.Value(0),
                opacity: new d.Z.Value(0)
            }),
            L(this, 'popAnimation', () => {
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
                        d.Z.spring(t, k(x({ toValue: 1.5 }, B), { friction: 80 }))
                    ]).start();
            });
    }
}
let q = (0, m.B)({
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
class Q {
    moveToState(e) {
        (this.stateTime = performance.now()), (this.currentState = e);
    }
    timeInState() {
        return performance.now() - this.stateTime;
    }
    assertUnreachable(e) {
        throw Error('uhoh');
    }
    sendEvent() {
        this.analyticsEnabled &&
            (null == this.errorCode && null == this.errorMessage && !1 === this.metadata.hasValidFrame && ((this.errorCode = 4), (this.errorMessage = 'No valid video frames detected - codec may be unsupported')),
            v.default.track(C.rMx.MEDIA_PLAY_FINISHED, {
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
                connection_type: E.Z.getType(),
                effective_connection_speed: E.Z.getEffectiveConnectionSpeed(),
                service_provider: E.Z.getServiceProvider(),
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
        (this.playTimeSec += Math.max((null !== (t = this.lastPlayingTime) && void 0 !== t ? t : e) - (null !== (n = this.playbackStartTime) && void 0 !== n ? n : 0), 0)), (this.playWallTimeMs += this.timeInState());
    }
    constructor(e) {
        L(this, 'metadata', void 0),
            L(this, 'playTimeSec', 0),
            L(this, 'playWallTimeMs', 0),
            L(this, 'firstPlayWaitingMs', 0),
            L(this, 'stallCount', 0),
            L(this, 'stallMs', 0),
            L(this, 'seekCount', 0),
            L(this, 'seekWaitingMs', 0),
            L(this, 'errorMessage', null),
            L(this, 'errorCode', null),
            L(this, 'stateTime', performance.now()),
            L(this, 'currentState', 'not_started'),
            L(this, 'playbackStartTime', void 0),
            L(this, 'lastPlayingTime', void 0),
            L(this, 'analyticsEnabled', void 0),
            L(this, 'onWaiting', (e) => {
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
                        this.assertUnreachable(this.currentState);
                }
            }),
            L(this, 'onSeeking', (e) => {
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
                        this.assertUnreachable(this.currentState);
                }
                (this.seekCount += 1), this.moveToState('seeking');
            }),
            L(this, 'onSeeked', (e) => {
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
                        this.assertUnreachable(this.currentState);
                }
            }),
            L(this, 'onPause', (e) => {
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
                        this.assertUnreachable(this.currentState);
                }
            }),
            L(this, 'onError', (e) => {
                this.moveToState('paused'), this.sendEvent();
            }),
            L(this, 'onPlaying', (e) => {
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
                        this.assertUnreachable(this.currentState);
                }
                (this.playbackStartTime = e.currentTarget.currentTime), this.moveToState('playing');
            }),
            L(this, 'onTimeUpdate', (e) => {
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
                        this.assertUnreachable(this.currentState);
                }
            }),
            L(this, 'onDragStart', (e) => {
                null != e && (this.lastPlayingTime = e);
            }),
            L(this, 'onLoadedMetadata', (e) => {
                this.metadata.fileDurationSec = e.currentTarget.duration;
            }),
            (this.metadata = e),
            (this.analyticsEnabled = q.getCurrentConfig({ location: 'media_player' }).enabled);
    }
}
class X extends (i = a.PureComponent) {
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
                state: { playing: o, fullscreen: a, muted: s, dragging: l, volume: c }
            } = this,
            { current: u } = this.mediaRef,
            { current: d } = this.playPausePopRef;
        if (null == u) return;
        o && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), this.checkVideoDecodability(), t.hasClickedPlay && (null == d || d.pop(o))) : !o && t.playing && (u.pause(), null == d || d.pop(o), null == n || n());
        let f = (0, I.fn)(u.parentNode, u);
        a && !t.fullscreen && null != f ? ((0, I.Dj)(f), f.addEventListener(I.NO, this.handleFullScreenExit)) : !a && t.fullscreen && null != f && (f.removeEventListener(I.NO, this.handleFullScreenExit), (0, I.Pr)(f)), l === S.Z.Types.DURATION && t.dragging !== S.Z.Types.DURATION && o ? u.pause() : l !== S.Z.Types.DURATION && t.dragging === S.Z.Types.DURATION && o && u.play(), s !== t.muted && ((u.muted = s), null == i || i(s)), c !== t.volume && ((u.volume = c), null == r || r(c));
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, I.fn)(e.parentNode, e);
        null != t && (t.removeEventListener(I.NO, this.handleFullScreenExit), (0, I.Pr)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: r } = this.props,
            { current: i } = this.mediaRef;
        if (null != i) {
            let o = {};
            if ('function' == typeof n) {
                let e = n();
                e !== this.state.volume && ((i.volume = e), (o.volume = e));
            }
            if ('function' == typeof r) {
                let e = r();
                e !== this.state.muted && ((i.muted = e), (o.muted = e));
            }
            this.setState(o), i.play(), null == t || t(e, i.currentTime * y.Z.Millis.SECOND, i.duration * y.Z.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return '100%' === e ? e : Math.max(e, X.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return '100%' === e ? e : Math.max(e, X.minHeight);
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
            n = t ? U : j,
            r = Math.max(0, Date.now() - this._lastMove) > n;
        r !== this.state.hideControls && null == e && this.setState({ hideControls: r });
    }
    renderVideo() {
        let { src: e, poster: t, forceExternal: n, responsive: r, mediaLayoutType: i } = this.props,
            { playing: a, fullscreen: s } = this.state,
            l = this.getWidth(),
            c = this.getHeight();
        return n
            ? (0, o.jsx)(p.Z, {
                  className: w.video,
                  controls: !1,
                  height: c,
                  poster: t,
                  width: l,
                  responsive: r && !s,
                  mediaLayoutType: i,
                  playsInline: !0,
                  autoPlay: a
              })
            : (0, o.jsx)(p.Z, {
                  className: w.video,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: a,
                  height: c,
                  responsive: r && !s,
                  mediaLayoutType: s ? R.hV.STATIC : i,
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
        return (0, o.jsx)('audio', {
            className: w.audio,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, o.jsx)('source', { src: this.props.src })
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: { type: t, autoPlay: n, playable: r = !0, onVolumeShow: i, onVolumeHide: a, onControlsHide: s, onControlsShow: l },
                state: { buffers: c, currentTime: u, duration: d, hasClickedPlay: f, hideControls: _, muted: p, playing: h, fullscreen: m, volume: E, dragging: b }
            } = this,
            v = this.getWidth();
        return f || n || t === F.AUDIO
            ? (0, o.jsx)(Y, {
                  buffers: c,
                  currentTime: u,
                  duration: d,
                  volume: (0, O.P)(E, 1),
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
                  onVolumeHide: a,
                  onControlsShow: l,
                  onControlsHide: s,
                  playing: h,
                  dragging: b,
                  type: t,
                  ref: this.controlsRef,
                  width: m ? window.screen.width : v,
                  disabled: !r,
                  children:
                      t === F.VIDEO
                          ? (0, o.jsx)(g.Z, {
                                'aria-label': P.NW.string(P.t['2nM3Pj']),
                                className: w.videoButton,
                                iconClassName: w.controlIcon,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, I.fn)(null == e ? void 0 : e.parentNode, e)
                            })
                          : null
              })
            : (0, o.jsx)(T.Z, {
                  onPlay: this.handleVideoClick,
                  inactive: !r
              });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: r, playable: i, mimeType: a } = this.props;
        return null == e || null == t
            ? null
            : r === F.AUDIO
              ? (0, o.jsx)(K, {
                    fileName: e,
                    fileSize: t,
                    src: n,
                    disabled: !i,
                    mimeType: a,
                    hideDownloadButton: !0
                })
              : null;
    }
    renderPlayPausePop() {
        return (0, o.jsx)(z, { ref: this.playPausePopRef });
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
        let { height: e, type: t, src: n, forceExternal: r, className: i, renderLinkComponent: a, responsive: s, mediaLayoutType: c, renderOverlayContent: u } = this.props,
            { fullscreen: d, hideControls: f, playing: _ } = this.state,
            p = w.wrapperPaused;
        if ((t === F.AUDIO ? (p = w.wrapperAudio) : f ? (p = w.wrapperControlsHidden) : _ && (p = w.wrapperPlaying), r && t === F.VIDEO)) {
            let t = this.getWidth();
            return (0, o.jsxs)('div', {
                className: l()(p, { [w.wrapperMediaMosaic]: c === R.hV.MOSAIC }),
                style: s
                    ? void 0
                    : {
                          width: t,
                          height: e
                      },
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, o.jsx)('div', {
                        className: w.playCenter,
                        children: (0, o.jsx)(N.Z, {
                            className: w.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: a
                        })
                    })
                ]
            });
        }
        return (0, o.jsxs)('div', {
            className: l()(p, w.newMosaicStyle, i, { [w.wrapperMediaMosaic]: c === R.hV.MOSAIC }),
            'data-fullscreen': d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: _ ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === F.AUDIO ? this.renderAudio() : this.renderVideo(),
                this.renderControls(),
                t === F.VIDEO ? this.renderPlayPausePop() : null,
                null != u
                    ? (0, o.jsx)('div', {
                          className: l()({ [w.overlayContentHidden]: _ || d }),
                          children: u()
                      })
                    : null
            ]
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, f.k)(e, HTMLVideoElement)) return;
        if (this.props.type !== F.VIDEO) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
        if (null != this._analytics.metadata.hasValidFrame) return;
        let t = e.videoHeight,
            n = e.currentTime,
            r = e.readyState;
        if (0 === t && r >= 2) {
            setTimeout(() => {
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
            return;
        }
        if (t > 0) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
    }
    constructor(e) {
        var t, n;
        super(e),
            (t = this),
            L(this, '_unmounted', !1),
            L(this, '_lastMove', 0),
            L(this, '_analytics', void 0),
            L(this, 'mediaRef', a.createRef()),
            L(this, 'controlsRef', a.createRef()),
            L(this, 'playPausePopRef', a.createRef()),
            L(this, 'handleFullScreenExit', () => {
                let { current: e } = this.mediaRef;
                if (null == e) return;
                let t = (0, I.fn)(e.parentNode, e);
                (null != t && (0, I.rB)(t)) || this.setState({ fullscreen: !1 });
            }),
            L(this, 'toggleFullscreen', () => {
                let e = !this.state.fullscreen;
                this.setState({ fullscreen: e });
            }),
            L(this, 'setMuted', (e) => {
                this.setState({ muted: e });
            }),
            L(this, 'toggleMuted', () => {
                this.setMuted(!this.state.muted);
            }),
            L(this, 'setTime', function (e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { current: r } = t.mediaRef;
                null != r && isFinite(r.duration) && isFinite(r.currentTime) && ((r.currentTime = e), t.updateValue(e / r.duration, n), t.updateTime(e, r.duration));
            }),
            L(this, 'handleUIUpdate', () => {
                if (!this.state.playing || this._unmounted) return;
                let { current: e } = this.mediaRef;
                null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate));
            }),
            L(this, 'handleDrag', (e, t) => {
                let { current: n } = this.mediaRef;
                if (t === S.Z.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === S.Z.Types.VOLUME) {
                    let t = (0, O.A)(e, 1);
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
            L(this, 'handleLoaded', (e) => {
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
            L(this, 'handleDurationChange', () => {
                let { current: e } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
            }),
            L(
                this,
                'handleBuffer',
                u().debounce(() => {
                    let { current: e } = this.mediaRef;
                    if (null == e) {
                        this.setState({ buffers: [] });
                        return;
                    }
                    this.setState({ buffers: H(e) });
                }, 400)
            ),
            L(this, 'handleEnded', (e) => {
                let { onEnded: t } = this.props;
                null != t && t(e);
            }),
            L(this, 'handleMouseMove', () => {
                this._lastMove = Date.now();
            }),
            L(this, 'handleMouseLeave', () => {
                this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 });
            }),
            L(this, 'handleMouseEnter', () => {
                'none' === this.state.preload && this.setState({ preload: 'metadata' }), this.setState({ hovering: !0 });
            }),
            L(this, 'handleVideoClick', (e) => {
                let {
                    state: { hasClickedPlay: t, playing: n },
                    props: { onClick: r, autoPlay: i, autoMute: o }
                } = this;
                if (null != r) {
                    r(e);
                    return;
                }
                e.stopPropagation(),
                    i && !t && n && o
                        ? this.setState({
                              muted: !1,
                              hasClickedPlay: !0
                          })
                        : this.setPlay(!this.state.playing);
            }),
            L(this, 'setPlay', (e) => {
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
            L(this, 'handleDragStart', (e) => {
                var t, n;
                this.setState({ dragging: e }), this._analytics.onDragStart(null !== (n = null === (t = this.mediaRef.current) || void 0 === t ? void 0 : t.currentTime) && void 0 !== n ? n : null);
            }),
            L(this, 'handleDragEnd', () => {
                this.setState({ dragging: null }), (this._lastMove = Date.now());
            }),
            L(this, 'handleKeyDown', (e) => {
                let { current: t } = this.mediaRef;
                if (e.which === C.yXg.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                else if (e.which >= C.yXg.DIGIT_0 && e.which <= C.yXg.DIGIT_9 && null != t) {
                    e.preventDefault();
                    let n = (e.which - C.yXg.DIGIT_0) / 10;
                    (t.currentTime = t.duration * n), this.setPlay(!0);
                }
            }),
            L(this, 'handleError', (e) => {
                var t, n, r, i;
                let o = e.currentTarget;
                (this._analytics.errorCode = null !== (r = null === (t = o.error) || void 0 === t ? void 0 : t.code) && void 0 !== r ? r : null), (this._analytics.errorMessage = null !== (i = null === (n = o.error) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : null), this._analytics.onError(e);
            }),
            (this._analytics = new Q({
                src: e.src,
                mimeType: null === (n = e.mimeType) || void 0 === n ? void 0 : n.join('/'),
                fileSize: e.fileSizeBytes
            }));
        let { autoPlay: r, autoMute: i, volume: o, playable: s } = this.props,
            l = 'function' == typeof o ? o() : o,
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
            width: X.minWidth,
            height: X.minHeight,
            hovering: !1
        };
    }
}
L(X, 'Types', F),
    L(X, 'defaultProps', {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }),
    L(X, 'minWidth', 150),
    L(X, 'minHeight', 110);
let J = X;
