n.d(t, {
    ZP: () => X,
    yv: () => V
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
    f = n(481060),
    _ = n(70097),
    p = n(167080),
    h = n(818083),
    m = n(268353),
    g = n(866960),
    E = n(181058),
    b = n(626135),
    v = n(70956),
    y = n(36703),
    O = n(228488),
    I = n(540026),
    S = n(455813),
    T = n(283756),
    N = n(793148),
    A = n(981631),
    C = n(217702),
    R = n(388032),
    P = n(984323),
    w = n(612064);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = 3000,
    j = 1000,
    U = '-:--',
    G = {
        friction: 14,
        tension: 200
    },
    B = {
        VIDEO: 'VIDEO',
        AUDIO: 'AUDIO'
    },
    F = {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    };
function V(e) {
    let t = 0 | e,
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function Z(e) {
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
let H = (e) => {
    let { current: t, duration: n } = e,
        r = null != t ? V(t) : U,
        i = null != n ? V(n) : U;
    return (
        (r = r.padStart(i.length, '0')),
        (0, o.jsxs)('div', {
            className: P.durationTimeWrapper,
            children: [
                (0, o.jsx)('span', {
                    className: P.durationTimeDisplay,
                    children: r
                }),
                (0, o.jsx)('span', {
                    className: P.durationTimeSeparator,
                    children: '/'
                }),
                (0, o.jsx)('span', {
                    className: P.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
};
class W extends (r = a.Component) {
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
        t ? d.Z.spring(n, L({ toValue: e }, G)).start() : n.setValue(e);
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
            ? (0, o.jsx)(f.P3F, {
                  className: P.videoButton,
                  onClick: r,
                  tabIndex: a ? -1 : 0,
                  'aria-label': R.NW.string(R.t.ZcgDJS),
                  children: (0, o.jsx)(
                      f.fpf,
                      {
                          size: 'xs',
                          color: 'currentColor',
                          className: P.controlIcon
                      },
                      'pause'
                  )
              })
            : null != t && t === n
              ? (0, o.jsx)(f.P3F, {
                    className: P.videoButton,
                    onClick: i,
                    tabIndex: a ? -1 : 0,
                    'aria-label': R.NW.string(R.t.hsvh0t),
                    children: (0, o.jsx)(E.Z, { className: P.controlIcon }, 'replay')
                })
              : (0, o.jsx)(f.P3F, {
                    className: P.videoButton,
                    onClick: i,
                    tabIndex: a ? -1 : 0,
                    'aria-label': R.NW.string(R.t.RscU7O),
                    children: (0, o.jsx)(
                        f.o1U,
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: P.controlIcon
                        },
                        'play'
                    )
                });
    }
    render() {
        let { buffers: e, children: t, currentTime: n, duration: r, muted: i, onDrag: a, onDragEnd: s, onDragStart: l, onToggleMuted: c, onVolumeShow: u, onVolumeHide: f, width: _, volume: p, type: h } = this.props,
            m = 'string' == typeof _ || _ > 250;
        return (0, o.jsxs)(d.Z.div, {
            className: h === B.VIDEO ? P.videoControls : P.audioControls,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                m
                    ? (0, o.jsx)(H, {
                          current: n,
                          duration: r
                      })
                    : null,
                (0, o.jsx)(I.Z, {
                    buffers: e,
                    value: null != r ? r : 0,
                    onDrag: a,
                    onDragEnd: s,
                    onDragStart: l,
                    type: I.Z.Types.DURATION,
                    ref: this.setDurationRef
                }),
                (0, o.jsx)('div', {
                    className: w.flex,
                    children: (0, o.jsx)(N.Z, {
                        ref: this.setVolumeButtonRef,
                        muted: i,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => a(e, I.Z.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: u,
                        onVolumeHide: f,
                        iconClassName: P.controlIcon,
                        iconColor: 'currentColor',
                        sliderWrapperClassName: P.volumeSliderWrapper
                    })
                }),
                t
            ]
        });
    }
    constructor(...e) {
        super(...e),
            D(this, 'state', { translateY: new d.Z.Value(0) }),
            D(this, 'volumeButton', void 0),
            D(this, 'durationBar', void 0),
            D(this, 'setDurationRef', (e) => {
                this.durationBar = e;
            }),
            D(this, 'setVolumeButtonRef', (e) => {
                this.volumeButton = e;
            });
    }
}
function Y(e) {
    let { fileName: t, fileSize: n, src: r, disabled: i, mimeType: a, hideDownloadButton: s } = e;
    return (0, o.jsxs)('div', {
        className: P.audioMetadata,
        children: [
            (0, o.jsxs)('div', {
                className: P.metadataContent,
                children: [
                    i
                        ? t
                        : (0, o.jsx)(p.Z, {
                              href: r,
                              className: P.metadataDownload,
                              iconClassName: P.metadataIcon,
                              mimeType: a,
                              fileName: t
                          }),
                    (0, o.jsx)('div', {
                        className: P.metadataSize,
                        children: n
                    })
                ]
            }),
            !s &&
                (0, o.jsx)(p.Z, {
                    href: r,
                    className: P.metadataDownload,
                    iconClassName: P.metadataIcon,
                    mimeType: a
                })
        ]
    });
}
D(W, 'defaultProps', { disabled: !1 });
class K extends a.Component {
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
            t = e ? f.o1U : f.fpf;
        return (0, o.jsx)(d.Z.div, {
            className: P.playPausePop,
            style: this.getAnimatedStyle(),
            children: (0, o.jsx)(t, { className: P.playPausePopIcon })
        });
    }
    constructor(...e) {
        super(...e),
            D(this, 'state', {
                play: !1,
                scale: new d.Z.Value(0),
                opacity: new d.Z.Value(0)
            }),
            D(this, 'popAnimation', () => {
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
                        d.Z.spring(t, M(L({ toValue: 1.5 }, G), { friction: 80 }))
                    ]).start();
            });
    }
}
let z = (0, h.B)({
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
class q {
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
            b.default.track(A.rMx.MEDIA_PLAY_FINISHED, {
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
                connection_type: g.Z.getType(),
                effective_connection_speed: g.Z.getEffectiveConnectionSpeed(),
                service_provider: g.Z.getServiceProvider(),
                error_message: this.errorMessage,
                error_code: this.errorCode
            }),
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
        D(this, 'metadata', void 0),
            D(this, 'playTimeSec', 0),
            D(this, 'playWallTimeMs', 0),
            D(this, 'firstPlayWaitingMs', 0),
            D(this, 'stallCount', 0),
            D(this, 'stallMs', 0),
            D(this, 'seekCount', 0),
            D(this, 'seekWaitingMs', 0),
            D(this, 'errorMessage', null),
            D(this, 'errorCode', null),
            D(this, 'stateTime', performance.now()),
            D(this, 'currentState', 'not_started'),
            D(this, 'playbackStartTime', void 0),
            D(this, 'lastPlayingTime', void 0),
            D(this, 'analyticsEnabled', void 0),
            D(this, 'onWaiting', (e) => {
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
            D(this, 'onSeeking', (e) => {
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
            D(this, 'onSeeked', (e) => {
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
            D(this, 'onPause', (e) => {
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
            D(this, 'onError', (e) => {
                this.moveToState('paused'), this.sendEvent();
            }),
            D(this, 'onPlaying', (e) => {
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
            D(this, 'onTimeUpdate', (e) => {
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
            D(this, 'onDragStart', (e) => {
                null != e && (this.lastPlayingTime = e);
            }),
            D(this, 'onLoadedMetadata', (e) => {
                this.metadata.fileDurationSec = e.currentTarget.duration;
            }),
            (this.metadata = e),
            (this.analyticsEnabled = z.getCurrentConfig({ location: 'media_player' }).enabled);
    }
}
class Q extends (i = a.PureComponent) {
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
        o && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == d || d.pop(o))) : !o && t.playing && (u.pause(), null == d || d.pop(o), null == n || n());
        let f = (0, O.fn)(u.parentNode, u);
        a && !t.fullscreen && null != f ? ((0, O.Dj)(f), f.addEventListener(O.NO, this.handleFullScreenExit)) : !a && t.fullscreen && null != f && (f.removeEventListener(O.NO, this.handleFullScreenExit), (0, O.Pr)(f)), l === I.Z.Types.DURATION && t.dragging !== I.Z.Types.DURATION && o ? u.pause() : l !== I.Z.Types.DURATION && t.dragging === I.Z.Types.DURATION && o && u.play(), s !== t.muted && ((u.muted = s), null == i || i(s)), c !== t.volume && ((u.volume = c), null == r || r(c));
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, O.fn)(e.parentNode, e);
        null != t && (t.removeEventListener(O.NO, this.handleFullScreenExit), (0, O.Pr)(t));
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
            this.setState(o), i.play(), null == t || t(e, i.currentTime * v.Z.Millis.SECOND, i.duration * v.Z.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return '100%' === e ? e : Math.max(e, Q.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return '100%' === e ? e : Math.max(e, Q.minHeight);
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
            n = t ? j : k,
            r = Math.max(0, Date.now() - this._lastMove) > n;
        r !== this.state.hideControls && null == e && this.setState({ hideControls: r });
    }
    renderError() {
        let { error: e } = this.state;
        return null === e || '' === e
            ? null
            : (0, o.jsx)('div', {
                  className: P.errorOverlay,
                  children: (0, o.jsx)('div', {
                      className: P.errorMessage,
                      children: e
                  })
              });
    }
    renderVideo() {
        let { src: e, poster: t, forceExternal: n, responsive: r, mediaLayoutType: i } = this.props,
            { playing: a, fullscreen: s } = this.state,
            l = this.getWidth(),
            c = this.getHeight();
        return n
            ? (0, o.jsx)(_.Z, {
                  className: P.video,
                  controls: !1,
                  height: c,
                  poster: t,
                  width: l,
                  responsive: r && !s,
                  mediaLayoutType: i,
                  playsInline: !0,
                  autoPlay: a
              })
            : (0, o.jsx)(_.Z, {
                  className: P.video,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: a,
                  height: c,
                  responsive: r && !s,
                  mediaLayoutType: s ? C.hV.STATIC : i,
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
            className: P.audio,
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
                state: { buffers: c, currentTime: u, duration: d, hasClickedPlay: f, hideControls: _, muted: p, playing: h, fullscreen: g, volume: E, dragging: b }
            } = this,
            v = this.getWidth();
        return f || n || t === B.AUDIO
            ? (0, o.jsx)(W, {
                  buffers: c,
                  currentTime: u,
                  duration: d,
                  volume: (0, y.P)(E, 1),
                  hide: t === B.VIDEO && _,
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
                  width: g ? window.screen.width : v,
                  disabled: !r,
                  children:
                      t === B.VIDEO
                          ? (0, o.jsx)(m.Z, {
                                'aria-label': R.NW.string(R.t['2nM3Pj']),
                                className: P.videoButton,
                                iconClassName: P.controlIcon,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, O.fn)(null == e ? void 0 : e.parentNode, e)
                            })
                          : null
              })
            : (0, o.jsx)(S.Z, {
                  onPlay: this.handleVideoClick,
                  inactive: !r
              });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: r, playable: i, mimeType: a } = this.props;
        return null == e || null == t
            ? null
            : r === B.AUDIO
              ? (0, o.jsx)(Y, {
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
        return (0, o.jsx)(K, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: r } = this.state,
            i = this.getWidth();
        return r
            ? F
            : t === B.AUDIO
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
            p = P.wrapperPaused;
        if ((t === B.AUDIO ? (p = P.wrapperAudio) : f ? (p = P.wrapperControlsHidden) : _ && (p = P.wrapperPlaying), r && t === B.VIDEO)) {
            let t = this.getWidth();
            return (0, o.jsxs)('div', {
                className: l()(p, { [P.wrapperMediaMosaic]: c === C.hV.MOSAIC }),
                style: s
                    ? void 0
                    : {
                          width: t,
                          height: e
                      },
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    this.renderError(),
                    (0, o.jsx)('div', {
                        className: P.playCenter,
                        children: (0, o.jsx)(T.Z, {
                            className: P.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: a
                        })
                    })
                ]
            });
        }
        return (0, o.jsxs)('div', {
            className: l()(p, P.newMosaicStyle, i, { [P.wrapperMediaMosaic]: c === C.hV.MOSAIC }),
            'data-fullscreen': d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: _ ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === B.AUDIO ? this.renderAudio() : this.renderVideo(),
                this.renderError(),
                this.renderControls(),
                t === B.VIDEO ? this.renderPlayPausePop() : null,
                null != u
                    ? (0, o.jsx)('div', {
                          className: l()({ [P.overlayContentHidden]: _ || d }),
                          children: u()
                      })
                    : null
            ]
        });
    }
    constructor(e) {
        var t, n;
        super(e),
            (t = this),
            D(this, '_unmounted', !1),
            D(this, '_lastMove', 0),
            D(this, '_analytics', void 0),
            D(this, 'mediaRef', a.createRef()),
            D(this, 'controlsRef', a.createRef()),
            D(this, 'playPausePopRef', a.createRef()),
            D(this, 'handleFullScreenExit', () => {
                let { current: e } = this.mediaRef;
                if (null == e) return;
                let t = (0, O.fn)(e.parentNode, e);
                (null != t && (0, O.rB)(t)) || this.setState({ fullscreen: !1 });
            }),
            D(this, 'toggleFullscreen', () => {
                let e = !this.state.fullscreen;
                this.setState({ fullscreen: e });
            }),
            D(this, 'setMuted', (e) => {
                this.setState({ muted: e });
            }),
            D(this, 'toggleMuted', () => {
                this.setMuted(!this.state.muted);
            }),
            D(this, 'setTime', function (e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { current: r } = t.mediaRef;
                null != r && isFinite(r.duration) && isFinite(r.currentTime) && ((r.currentTime = e), t.updateValue(e / r.duration, n), t.updateTime(e, r.duration));
            }),
            D(this, 'handleUIUpdate', () => {
                if (!this.state.playing || this._unmounted) return;
                let { current: e } = this.mediaRef;
                null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate));
            }),
            D(this, 'handleDrag', (e, t) => {
                let { current: n } = this.mediaRef;
                if (t === I.Z.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === I.Z.Types.VOLUME) {
                    let t = (0, y.A)(e, 1);
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
            D(this, 'handleLoaded', (e) => {
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
            D(this, 'handleDurationChange', () => {
                let { current: e } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
            }),
            D(
                this,
                'handleBuffer',
                u().debounce(() => {
                    let { current: e } = this.mediaRef;
                    if (null == e) {
                        this.setState({ buffers: [] });
                        return;
                    }
                    this.setState({ buffers: Z(e) });
                }, 400)
            ),
            D(this, 'handleEnded', (e) => {
                let { onEnded: t } = this.props;
                this.setState({
                    playing: !1,
                    hideControls: !1
                }),
                    null != t && t(e);
            }),
            D(this, 'handleMouseMove', () => {
                this._lastMove = Date.now();
            }),
            D(this, 'handleMouseLeave', () => {
                this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 });
            }),
            D(this, 'handleMouseEnter', () => {
                'none' === this.state.preload && this.setState({ preload: 'metadata' }), this.setState({ hovering: !0 });
            }),
            D(this, 'handleVideoClick', (e) => {
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
            D(this, 'setPlay', (e) => {
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
            D(this, 'handleDragStart', (e) => {
                var t, n;
                this.setState({ dragging: e }), this._analytics.onDragStart(null !== (n = null === (t = this.mediaRef.current) || void 0 === t ? void 0 : t.currentTime) && void 0 !== n ? n : null);
            }),
            D(this, 'handleDragEnd', () => {
                this.setState({ dragging: null }), (this._lastMove = Date.now());
            }),
            D(this, 'handleKeyDown', (e) => {
                let { current: t } = this.mediaRef;
                if (e.which === A.yXg.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                else if (e.which >= A.yXg.DIGIT_0 && e.which <= A.yXg.DIGIT_9 && null != t) {
                    e.preventDefault();
                    let n = (e.which - A.yXg.DIGIT_0) / 10;
                    (t.currentTime = t.duration * n), this.setPlay(!0);
                }
            }),
            D(this, 'handleError', (e) => {
                var t, n, r, i, o;
                let a = e.currentTarget,
                    s = null;
                (this._analytics.errorCode = null !== (i = null === (t = a.error) || void 0 === t ? void 0 : t.code) && void 0 !== i ? i : null), (this._analytics.errorMessage = null !== (o = null === (n = a.error) || void 0 === n ? void 0 : n.message) && void 0 !== o ? o : null), (s = (null === (r = a.error) || void 0 === r ? void 0 : r.code) === 4 ? R.NW.string(R.t.l2TVDA) : R.NW.string(R.t.VO4o6O)), this.setState({ error: s }), this._analytics.onError(e);
            }),
            (this._analytics = new q({
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
            width: Q.minWidth,
            height: Q.minHeight,
            hovering: !1,
            error: null
        };
    }
}
D(Q, 'Types', B),
    D(Q, 'defaultProps', {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }),
    D(Q, 'minWidth', 150),
    D(Q, 'minHeight', 110);
let X = Q;
