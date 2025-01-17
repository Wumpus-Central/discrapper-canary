r.d(n, {
    yv: function () {
        return j;
    }
});
var i,
    a,
    s = r(653041);
var o = r(47120);
var l = r(411104);
var u = r(200651),
    c = r(192379),
    d = r(120356),
    f = r.n(d),
    _ = r(392711),
    h = r.n(_),
    p = r(748780),
    m = r(481060),
    g = r(70097),
    E = r(167080),
    v = r(818083),
    I = r(268353),
    T = r(866960),
    b = r(181058),
    y = r(626135),
    S = r(70956),
    A = r(36703),
    N = r(228488),
    C = r(540026),
    R = r(455813),
    O = r(283756),
    D = r(793148),
    L = r(981631),
    x = r(217702),
    w = r(388032),
    P = r(745124),
    M = r(652849);
function k(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let U = 3000,
    B = 1000,
    G = '-:--',
    Z = {
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
function j(e) {
    let n = 0 | e,
        r = n % 60;
    return ''.concat((n - r) / 60, ':').concat(String(r).padStart(2, '0'));
}
function H(e) {
    let n = [],
        { duration: r } = e;
    for (let i = 0; i < e.buffered.length; i++) {
        let a = e.buffered.start(i),
            s = e.buffered.end(i);
        if (s - a < 1) continue;
        let o = (s - a) / r,
            l = a / r;
        n.push([l, o]);
    }
    return n;
}
let Y = (e) => {
    let { current: n, duration: r } = e,
        i = null != n ? j(n) : G,
        a = null != r ? j(r) : G;
    return (
        (i = i.padStart(a.length, '0')),
        (0, u.jsxs)('div', {
            className: P.durationTimeWrapper,
            children: [
                (0, u.jsx)('span', {
                    className: P.durationTimeDisplay,
                    children: i
                }),
                (0, u.jsx)('span', {
                    className: P.durationTimeSeparator,
                    children: '/'
                }),
                (0, u.jsx)('span', {
                    className: P.durationTimeDisplay,
                    children: a
                })
            ]
        })
    );
};
class W extends (i = c.Component) {
    componentDidMount() {
        this.state.translateY.setValue(this.props.autoPlay ? 1 : 0);
    }
    componentDidUpdate(e) {
        var n, r, i, a, s;
        let { hide: o, playing: l } = this.props;
        o && !e.hide ? (this.animateControls(1, l), null === (n = this.volumeButton) || void 0 === n || n.blur(), null === (r = (i = this.props).onControlsHide) || void 0 === r || r.call(i)) : !o && e.hide && (this.animateControls(0, l), null === (a = (s = this.props).onControlsShow) || void 0 === a || a.call(s));
    }
    updateProgress(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: r } = this;
        null != r && r.setGrabber(e, n);
    }
    animateControls(e, n) {
        let { translateY: r } = this.state;
        n
            ? p.Z.spring(r, {
                  toValue: e,
                  ...Z
              }).start()
            : r.setValue(e);
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
        let { playing: e, currentTime: n, duration: r, onPause: i, onPlay: a, disabled: s } = this.props;
        return e
            ? (0, u.jsx)(m.Clickable, {
                  className: P.videoButton,
                  onClick: i,
                  tabIndex: s ? -1 : 0,
                  'aria-label': w.intl.string(w.t.ZcgDJS),
                  children: (0, u.jsx)(
                      m.PauseIcon,
                      {
                          size: 'xs',
                          color: 'currentColor',
                          className: P.controlIcon
                      },
                      'pause'
                  )
              })
            : null != n && n === r
              ? (0, u.jsx)(m.Clickable, {
                    className: P.videoButton,
                    onClick: a,
                    tabIndex: s ? -1 : 0,
                    'aria-label': w.intl.string(w.t.hsvh0t),
                    children: (0, u.jsx)(b.Z, { className: P.controlIcon }, 'replay')
                })
              : (0, u.jsx)(m.Clickable, {
                    className: P.videoButton,
                    onClick: a,
                    tabIndex: s ? -1 : 0,
                    'aria-label': w.intl.string(w.t.RscU7O),
                    children: (0, u.jsx)(
                        m.PlayIcon,
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
        let { buffers: e, children: n, currentTime: r, duration: i, muted: a, onDrag: s, onDragEnd: o, onDragStart: l, onToggleMuted: c, onVolumeShow: d, onVolumeHide: f, width: _, volume: h, type: m } = this.props,
            g = 'string' == typeof _ || _ > 250;
        return (0, u.jsxs)(p.Z.div, {
            className: m === F.VIDEO ? P.videoControls : P.audioControls,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                g
                    ? (0, u.jsx)(Y, {
                          current: r,
                          duration: i
                      })
                    : null,
                (0, u.jsx)(C.Z, {
                    buffers: e,
                    value: null != i ? i : 0,
                    onDrag: s,
                    onDragEnd: o,
                    onDragStart: l,
                    type: C.Z.Types.DURATION,
                    ref: this.setDurationRef
                }),
                (0, u.jsx)('div', {
                    className: M.flex,
                    children: (0, u.jsx)(D.Z, {
                        ref: this.setVolumeButtonRef,
                        muted: a,
                        value: h,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => s(e, C.Z.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: d,
                        onVolumeHide: f,
                        iconClassName: P.controlIcon,
                        iconColor: 'currentColor',
                        sliderWrapperClassName: P.volumeSliderWrapper
                    })
                }),
                n
            ]
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'state', { translateY: new p.Z.Value(0) }),
            k(this, 'volumeButton', void 0),
            k(this, 'durationBar', void 0),
            k(this, 'setDurationRef', (e) => {
                this.durationBar = e;
            }),
            k(this, 'setVolumeButtonRef', (e) => {
                this.volumeButton = e;
            });
    }
}
function K(e) {
    let { fileName: n, fileSize: r, src: i, disabled: a, mimeType: s, hideDownloadButton: o } = e;
    return (0, u.jsxs)('div', {
        className: P.audioMetadata,
        children: [
            (0, u.jsxs)('div', {
                className: P.metadataContent,
                children: [
                    a
                        ? n
                        : (0, u.jsx)(E.Z, {
                              href: i,
                              className: P.metadataDownload,
                              iconClassName: P.metadataIcon,
                              mimeType: s,
                              fileName: n
                          }),
                    (0, u.jsx)('div', {
                        className: P.metadataSize,
                        children: r
                    })
                ]
            }),
            !o &&
                (0, u.jsx)(E.Z, {
                    href: i,
                    className: P.metadataDownload,
                    iconClassName: P.metadataIcon,
                    mimeType: s
                })
        ]
    });
}
k(W, 'defaultProps', { disabled: !1 });
class z extends c.Component {
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState({ play: e }, this.popAnimation);
    }
    getAnimatedStyle() {
        let { opacity: e, scale: n } = this.state;
        return p.Z.accelerate({
            opacity: e.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.8]
            }),
            transform: [
                {
                    scale: n.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 2]
                    })
                }
            ]
        });
    }
    render() {
        let { play: e } = this.state,
            n = e ? m.PlayIcon : m.PauseIcon;
        return (0, u.jsx)(p.Z.div, {
            className: P.playPausePop,
            style: this.getAnimatedStyle(),
            children: (0, u.jsx)(n, { className: P.playPausePopIcon })
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'state', {
                play: !1,
                scale: new p.Z.Value(0),
                opacity: new p.Z.Value(0)
            }),
            k(this, 'popAnimation', () => {
                let { opacity: e, scale: n } = this.state;
                n.setValue(0),
                    e.setValue(0),
                    p.Z.parallel([
                        p.Z.sequence([
                            p.Z.timing(e, {
                                toValue: 1,
                                duration: 200
                            }),
                            p.Z.timing(e, {
                                toValue: 0,
                                duration: 200
                            })
                        ]),
                        p.Z.spring(n, {
                            toValue: 1.5,
                            ...Z,
                            friction: 80
                        })
                    ]).start();
            });
    }
}
let q = (0, v.B)({
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
            y.default.track(L.rMx.MEDIA_PLAY_FINISHED, {
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
                connection_type: T.Z.getType(),
                effective_connection_speed: T.Z.getEffectiveConnectionSpeed(),
                service_provider: T.Z.getServiceProvider()
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
        var n, r;
        (this.playTimeSec += Math.max((null !== (n = this.lastPlayingTime) && void 0 !== n ? n : e) - (null !== (r = this.playbackStartTime) && void 0 !== r ? r : 0), 0)), (this.playWallTimeMs += this.timeInState());
    }
    constructor(e) {
        k(this, 'metadata', void 0),
            k(this, 'playTimeSec', 0),
            k(this, 'playWallTimeMs', 0),
            k(this, 'firstPlayWaitingMs', 0),
            k(this, 'stallCount', 0),
            k(this, 'stallMs', 0),
            k(this, 'seekCount', 0),
            k(this, 'seekWaitingMs', 0),
            k(this, 'stateTime', performance.now()),
            k(this, 'currentState', 'not_started'),
            k(this, 'playbackStartTime', void 0),
            k(this, 'lastPlayingTime', void 0),
            k(this, 'analyticsEnabled', void 0),
            k(this, 'onWaiting', (e) => {
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
            k(this, 'onSeeking', (e) => {
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
            k(this, 'onSeeked', (e) => {
                switch (this.currentState) {
                    case 'seeking':
                    case 'seeked':
                        let n = this.stateTime;
                        this.moveToState('seeked'), (this.stateTime = n);
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
            k(this, 'onPause', (e) => {
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
            k(this, 'onPlaying', (e) => {
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
            k(this, 'onTimeUpdate', (e) => {
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
            k(this, 'onDragStart', (e) => {
                null != e && (this.lastPlayingTime = e);
            }),
            k(this, 'onLoadedMetadata', (e) => {
                this.metadata.fileDurationSec = e.currentTarget.duration;
            }),
            (this.metadata = e),
            (this.analyticsEnabled = q.getCurrentConfig({ location: 'media_player' }).enabled);
    }
}
class X extends (a = c.PureComponent) {
    static getDerivedStateFromProps(e, n) {
        return !e.playable && n.playing
            ? {
                  playing: !1,
                  hideControls: !1
              }
            : null;
    }
    componentDidMount() {
        let { playing: e, muted: n, volume: r } = this.state,
            { current: i } = this.mediaRef;
        if (null != i) n && (i.muted = n), e && (this.play(!0), this.handleUIUpdate()), (i.volume = r);
    }
    componentDidUpdate(e, n) {
        let {
                props: { onPause: r, onVolumeChange: i, onMute: a },
                state: { playing: s, fullscreen: o, muted: l, dragging: u, volume: c }
            } = this,
            { current: d } = this.mediaRef,
            { current: f } = this.playPausePopRef;
        if (null == d) return;
        s && !n.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), n.hasClickedPlay && (null == f || f.pop(s))) : !s && n.playing && (d.pause(), null == f || f.pop(s), null == r || r());
        let _ = (0, N.fn)(d.parentNode, d);
        o && !n.fullscreen && null != _ ? ((0, N.Dj)(_), _.addEventListener(N.NO, this.handleFullScreenExit)) : !o && n.fullscreen && null != _ && (_.removeEventListener(N.NO, this.handleFullScreenExit), (0, N.Pr)(_)), u === C.Z.Types.DURATION && n.dragging !== C.Z.Types.DURATION && s ? d.pause() : u !== C.Z.Types.DURATION && n.dragging === C.Z.Types.DURATION && s && d.play(), l !== n.muted && ((d.muted = l), null == a || a(l)), c !== n.volume && ((d.volume = c), null == i || i(c));
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let n = (0, N.fn)(e.parentNode, e);
        null != n && (n.removeEventListener(N.NO, this.handleFullScreenExit), (0, N.Pr)(n));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: n, volume: r, autoMute: i } = this.props,
            { current: a } = this.mediaRef;
        if (null != a) {
            let s = {};
            if ('function' == typeof r) {
                let e = r();
                e !== this.state.volume && ((a.volume = e), (s.volume = e));
            }
            if ('function' == typeof i) {
                let e = i();
                e !== this.state.muted && ((a.muted = e), (s.muted = e));
            }
            this.setState(s), a.play(), null == n || n(e, a.currentTime * S.Z.Millis.SECOND, a.duration * S.Z.Millis.SECOND);
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
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: r } = this.controlsRef;
        null != r && r.updateProgress(e, n);
    }
    updateTime(e, n) {
        let r = 0 | e,
            i = 0 | n;
        (this.state.currentTime !== r || this.state.duration !== i) &&
            this.setState({
                currentTime: r,
                duration: i
            });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: n } = this.state,
            r = n ? B : U,
            i = Math.max(0, Date.now() - this._lastMove) > r;
        i !== this.state.hideControls && null == e && this.setState({ hideControls: i });
    }
    renderVideo() {
        let { src: e, poster: n, forceExternal: r, onError: i, responsive: a, mediaLayoutType: s } = this.props,
            { playing: o, fullscreen: l } = this.state,
            c = this.getWidth(),
            d = this.getHeight();
        return r
            ? (0, u.jsx)(g.Z, {
                  className: P.video,
                  controls: !1,
                  height: d,
                  poster: n,
                  width: c,
                  responsive: a && !l,
                  mediaLayoutType: s,
                  playsInline: !0,
                  autoPlay: o
              })
            : (0, u.jsx)(g.Z, {
                  className: P.video,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: o,
                  height: d,
                  responsive: a && !l,
                  mediaLayoutType: l ? x.hV.STATIC : s,
                  onClick: this.handleVideoClick,
                  onEnded: this.handleEnded,
                  onError: i,
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
                  src: e
              });
    }
    renderAudio() {
        return (0, u.jsx)('audio', {
            className: P.audio,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, u.jsx)('source', { src: this.props.src })
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: { type: n, autoPlay: r, playable: i = !0, onVolumeShow: a, onVolumeHide: s, onControlsHide: o, onControlsShow: l },
                state: { buffers: c, currentTime: d, duration: f, hasClickedPlay: _, hideControls: h, muted: p, playing: m, fullscreen: g, volume: E, dragging: v }
            } = this,
            T = this.getWidth();
        return _ || r || n === F.AUDIO
            ? (0, u.jsx)(W, {
                  buffers: c,
                  currentTime: d,
                  duration: f,
                  volume: (0, A.P)(E, 1),
                  hide: n === F.VIDEO && h,
                  muted: p,
                  autoPlay: r,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: a,
                  onVolumeHide: s,
                  onControlsShow: l,
                  onControlsHide: o,
                  playing: m,
                  dragging: v,
                  type: n,
                  ref: this.controlsRef,
                  width: g ? window.screen.width : T,
                  disabled: !i,
                  children:
                      n === F.VIDEO
                          ? (0, u.jsx)(I.Z, {
                                'aria-label': w.intl.string(w.t['2nM3Pj']),
                                className: P.videoButton,
                                iconClassName: P.controlIcon,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, N.fn)(null == e ? void 0 : e.parentNode, e)
                            })
                          : null
              })
            : (0, u.jsx)(R.Z, {
                  onPlay: this.handleVideoClick,
                  inactive: !i
              });
    }
    renderMetadata() {
        let { fileName: e, fileSize: n, src: r, type: i, playable: a, mimeType: s } = this.props;
        return null == e || null == n
            ? null
            : i === F.AUDIO
              ? (0, u.jsx)(K, {
                    fileName: e,
                    fileSize: n,
                    src: r,
                    disabled: !a,
                    mimeType: s,
                    hideDownloadButton: !0
                })
              : null;
    }
    renderPlayPausePop() {
        return (0, u.jsx)(z, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: n, height: r } = this.props,
            { fullscreen: i } = this.state,
            a = this.getWidth();
        return i
            ? V
            : n === F.AUDIO
              ? {
                    width: void 0,
                    height: 'auto'
                }
              : e
                ? void 0
                : {
                      width: a,
                      height: r
                  };
    }
    render() {
        let { height: e, type: n, src: r, forceExternal: i, className: a, renderLinkComponent: s, responsive: o, mediaLayoutType: l, renderOverlayContent: c } = this.props,
            { fullscreen: d, hideControls: _, playing: h } = this.state,
            p = P.wrapperPaused;
        if ((n === F.AUDIO ? (p = P.wrapperAudio) : _ ? (p = P.wrapperControlsHidden) : h && (p = P.wrapperPlaying), i && n === F.VIDEO)) {
            let n = this.getWidth();
            return (0, u.jsxs)('div', {
                className: f()(p, { [P.wrapperMediaMosaic]: l === x.hV.MOSAIC }),
                style: o
                    ? void 0
                    : {
                          width: n,
                          height: e
                      },
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, u.jsx)('div', {
                        className: P.playCenter,
                        children: (0, u.jsx)(O.Z, {
                            className: P.__invalid_playButton,
                            externalURL: r,
                            renderLinkComponent: s
                        })
                    })
                ]
            });
        }
        return (0, u.jsxs)('div', {
            className: f()(p, P.newMosaicStyle, a, { [P.wrapperMediaMosaic]: l === x.hV.MOSAIC }),
            'data-fullscreen': d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: h ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                n === F.AUDIO ? this.renderAudio() : this.renderVideo(),
                this.renderControls(),
                n === F.VIDEO ? this.renderPlayPausePop() : null,
                null != c
                    ? (0, u.jsx)('div', {
                          className: f()({ [P.overlayContentHidden]: h || d }),
                          children: c()
                      })
                    : null
            ]
        });
    }
    constructor(e) {
        var n, r;
        super(e),
            (n = this),
            k(this, '_unmounted', !1),
            k(this, '_lastMove', 0),
            k(this, '_analytics', void 0),
            k(this, 'mediaRef', c.createRef()),
            k(this, 'controlsRef', c.createRef()),
            k(this, 'playPausePopRef', c.createRef()),
            k(this, 'handleFullScreenExit', () => {
                let { current: e } = this.mediaRef;
                if (null == e) return;
                let n = (0, N.fn)(e.parentNode, e);
                (null == n || !(0, N.rB)(n)) && this.setState({ fullscreen: !1 });
            }),
            k(this, 'toggleFullscreen', () => {
                let e = !this.state.fullscreen;
                this.setState({ fullscreen: e });
            }),
            k(this, 'setMuted', (e) => {
                this.setState({ muted: e });
            }),
            k(this, 'toggleMuted', () => {
                this.setMuted(!this.state.muted);
            }),
            k(this, 'setTime', function (e) {
                let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { current: i } = n.mediaRef;
                null != i && isFinite(i.duration) && isFinite(i.currentTime) && ((i.currentTime = e), n.updateValue(e / i.duration, r), n.updateTime(e, i.duration));
            }),
            k(this, 'handleUIUpdate', () => {
                if (!this.state.playing || this._unmounted) return;
                let { current: e } = this.mediaRef;
                if (null != e) e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate);
            }),
            k(this, 'handleDrag', (e, n) => {
                let { current: r } = this.mediaRef;
                if (n === C.Z.Types.DURATION) null != r && isFinite(r.duration) && this.setTime(r.duration * e, !1);
                else if (n === C.Z.Types.VOLUME) {
                    let n = (0, A.A)(e, 1);
                    0 === n
                        ? this.setState({
                              muted: !0,
                              volume: n
                          })
                        : this.state.muted && n > 0
                          ? this.setState({
                                muted: !1,
                                volume: n
                            })
                          : this.setState({ volume: n });
                }
            }),
            k(this, 'handleLoaded', (e) => {
                this._analytics.onLoadedMetadata(e);
                let { current: n } = this.mediaRef;
                null != n &&
                    (this.updateTime(n.currentTime, n.duration),
                    this.setState({
                        hasLoadedMetadata: !0,
                        currentTime: n.currentTime,
                        duration: n.duration
                    }));
            }),
            k(this, 'handleDurationChange', () => {
                let { current: e } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
            }),
            k(
                this,
                'handleBuffer',
                h().debounce(() => {
                    let { current: e } = this.mediaRef;
                    if (null == e) {
                        this.setState({ buffers: [] });
                        return;
                    }
                    this.setState({ buffers: H(e) });
                }, 400)
            ),
            k(this, 'handleEnded', (e) => {
                let { onEnded: n } = this.props;
                this.setState({
                    playing: !1,
                    hideControls: !1
                }),
                    null != n && n(e);
            }),
            k(this, 'handleMouseMove', () => {
                this._lastMove = Date.now();
            }),
            k(this, 'handleMouseLeave', () => {
                this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 });
            }),
            k(this, 'handleMouseEnter', () => {
                'none' === this.state.preload && this.setState({ preload: 'metadata' }), this.setState({ hovering: !0 });
            }),
            k(this, 'handleVideoClick', (e) => {
                let {
                    state: { hasClickedPlay: n, playing: r },
                    props: { onClick: i, autoPlay: a, autoMute: s }
                } = this;
                if (null != i) {
                    i(e);
                    return;
                }
                e.stopPropagation(),
                    a && !n && r && s
                        ? this.setState({
                              muted: !1,
                              hasClickedPlay: !0
                          })
                        : this.setPlay(!this.state.playing);
            }),
            k(this, 'setPlay', (e) => {
                let {
                    props: { autoMute: n },
                    state: { hasClickedPlay: r, muted: i }
                } = this;
                if (e !== this.state.playing)
                    e
                        ? this.setState({
                              playing: e,
                              hasClickedPlay: !0,
                              muted: (!!r || !n) && i
                          })
                        : this.setState({
                              playing: !1,
                              hideControls: !1
                          });
            }),
            k(this, 'handleDragStart', (e) => {
                var n, r;
                this.setState({ dragging: e }), this._analytics.onDragStart(null !== (r = null === (n = this.mediaRef.current) || void 0 === n ? void 0 : n.currentTime) && void 0 !== r ? r : null);
            }),
            k(this, 'handleDragEnd', () => {
                this.setState({ dragging: null }), (this._lastMove = Date.now());
            }),
            k(this, 'handleKeyDown', (e) => {
                let { current: n } = this.mediaRef;
                if (e.which === L.yXg.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                else if (e.which >= L.yXg.DIGIT_0 && e.which <= L.yXg.DIGIT_9 && null != n) {
                    e.preventDefault();
                    let r = (e.which - L.yXg.DIGIT_0) / 10;
                    (n.currentTime = n.duration * r), this.setPlay(!0);
                }
            }),
            (this._analytics = new Q({
                src: e.src,
                mimeType: null === (r = e.mimeType) || void 0 === r ? void 0 : r.join('/'),
                fileSize: e.fileSizeBytes
            }));
        let { autoPlay: i, autoMute: a, volume: s, playable: o } = this.props,
            l = 'function' == typeof s ? s() : s,
            u = 'function' == typeof a ? a() : a;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !o,
            muted: u,
            volume: l,
            playing: i,
            preload: 'none',
            width: X.minWidth,
            height: X.minHeight,
            hovering: !1
        };
    }
}
k(X, 'Types', F),
    k(X, 'defaultProps', {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }),
    k(X, 'minWidth', 150),
    k(X, 'minHeight', 110),
    (n.ZP = X);
