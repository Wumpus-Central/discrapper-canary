n.d(t, {
    ZP: () => z,
    yv: () => B
}),
    n(653041),
    n(47120),
    n(411104);
var i,
    r,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(748780),
    f = n(481060),
    _ = n(70097),
    p = n(167080),
    h = n(818083),
    m = n(268353),
    g = n(866960),
    E = n(181058),
    v = n(626135),
    y = n(70956),
    I = n(36703),
    b = n(228488),
    T = n(540026),
    S = n(455813),
    A = n(283756),
    N = n(793148),
    C = n(981631),
    R = n(217702),
    O = n(388032),
    D = n(745124),
    x = n(652849);
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
let P = 3000,
    w = 1000,
    M = '-:--',
    k = {
        friction: 14,
        tension: 200
    },
    U = {
        VIDEO: 'VIDEO',
        AUDIO: 'AUDIO'
    },
    G = {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    };
function B(e) {
    let t = 0 | e,
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function Z(e) {
    let t = [],
        { duration: n } = e;
    for (let i = 0; i < e.buffered.length; i++) {
        let r = e.buffered.start(i),
            a = e.buffered.end(i);
        if (a - r < 1) continue;
        let s = (a - r) / n,
            o = r / n;
        t.push([o, s]);
    }
    return t;
}
let F = (e) => {
    let { current: t, duration: n } = e,
        i = null != t ? B(t) : M,
        r = null != n ? B(n) : M;
    return (
        (i = i.padStart(r.length, '0')),
        (0, a.jsxs)('div', {
            className: D.durationTimeWrapper,
            children: [
                (0, a.jsx)('span', {
                    className: D.durationTimeDisplay,
                    children: i
                }),
                (0, a.jsx)('span', {
                    className: D.durationTimeSeparator,
                    children: '/'
                }),
                (0, a.jsx)('span', {
                    className: D.durationTimeDisplay,
                    children: r
                })
            ]
        })
    );
};
class V extends (i = s.Component) {
    componentDidMount() {
        this.state.translateY.setValue(this.props.autoPlay ? 1 : 0);
    }
    componentDidUpdate(e) {
        var t, n, i, r, a;
        let { hide: s, playing: o } = this.props;
        s && !e.hide ? (this.animateControls(1, o), null === (t = this.volumeButton) || void 0 === t || t.blur(), null === (n = (i = this.props).onControlsHide) || void 0 === n || n.call(i)) : !s && e.hide && (this.animateControls(0, o), null === (r = (a = this.props).onControlsShow) || void 0 === r || r.call(a));
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: n } = this;
        null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
        let { translateY: n } = this.state;
        t
            ? d.Z.spring(n, {
                  toValue: e,
                  ...k
              }).start()
            : n.setValue(e);
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
        let { playing: e, currentTime: t, duration: n, onPause: i, onPlay: r, disabled: s } = this.props;
        return e
            ? (0, a.jsx)(f.P3F, {
                  className: D.videoButton,
                  onClick: i,
                  tabIndex: s ? -1 : 0,
                  'aria-label': O.intl.string(O.t.ZcgDJS),
                  children: (0, a.jsx)(
                      f.fpf,
                      {
                          size: 'xs',
                          color: 'currentColor',
                          className: D.controlIcon
                      },
                      'pause'
                  )
              })
            : null != t && t === n
              ? (0, a.jsx)(f.P3F, {
                    className: D.videoButton,
                    onClick: r,
                    tabIndex: s ? -1 : 0,
                    'aria-label': O.intl.string(O.t.hsvh0t),
                    children: (0, a.jsx)(E.Z, { className: D.controlIcon }, 'replay')
                })
              : (0, a.jsx)(f.P3F, {
                    className: D.videoButton,
                    onClick: r,
                    tabIndex: s ? -1 : 0,
                    'aria-label': O.intl.string(O.t.RscU7O),
                    children: (0, a.jsx)(
                        f.o1U,
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: D.controlIcon
                        },
                        'play'
                    )
                });
    }
    render() {
        let { buffers: e, children: t, currentTime: n, duration: i, muted: r, onDrag: s, onDragEnd: o, onDragStart: l, onToggleMuted: u, onVolumeShow: c, onVolumeHide: f, width: _, volume: p, type: h } = this.props,
            m = 'string' == typeof _ || _ > 250;
        return (0, a.jsxs)(d.Z.div, {
            className: h === U.VIDEO ? D.videoControls : D.audioControls,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                m
                    ? (0, a.jsx)(F, {
                          current: n,
                          duration: i
                      })
                    : null,
                (0, a.jsx)(T.Z, {
                    buffers: e,
                    value: null != i ? i : 0,
                    onDrag: s,
                    onDragEnd: o,
                    onDragStart: l,
                    type: T.Z.Types.DURATION,
                    ref: this.setDurationRef
                }),
                (0, a.jsx)('div', {
                    className: x.flex,
                    children: (0, a.jsx)(N.Z, {
                        ref: this.setVolumeButtonRef,
                        muted: r,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => s(e, T.Z.Types.VOLUME),
                        onToggleMute: u,
                        onVolumeShow: c,
                        onVolumeHide: f,
                        iconClassName: D.controlIcon,
                        iconColor: 'currentColor',
                        sliderWrapperClassName: D.volumeSliderWrapper
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
function j(e) {
    let { fileName: t, fileSize: n, src: i, disabled: r, mimeType: s, hideDownloadButton: o } = e;
    return (0, a.jsxs)('div', {
        className: D.audioMetadata,
        children: [
            (0, a.jsxs)('div', {
                className: D.metadataContent,
                children: [
                    r
                        ? t
                        : (0, a.jsx)(p.Z, {
                              href: i,
                              className: D.metadataDownload,
                              iconClassName: D.metadataIcon,
                              mimeType: s,
                              fileName: t
                          }),
                    (0, a.jsx)('div', {
                        className: D.metadataSize,
                        children: n
                    })
                ]
            }),
            !o &&
                (0, a.jsx)(p.Z, {
                    href: i,
                    className: D.metadataDownload,
                    iconClassName: D.metadataIcon,
                    mimeType: s
                })
        ]
    });
}
L(V, 'defaultProps', { disabled: !1 });
class H extends s.Component {
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
        return (0, a.jsx)(d.Z.div, {
            className: D.playPausePop,
            style: this.getAnimatedStyle(),
            children: (0, a.jsx)(t, { className: D.playPausePopIcon })
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
                        d.Z.spring(t, {
                            toValue: 1.5,
                            ...k,
                            friction: 80
                        })
                    ]).start();
            });
    }
}
let Y = (0, h.B)({
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
class W {
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
                connection_type: g.Z.getType(),
                effective_connection_speed: g.Z.getEffectiveConnectionSpeed(),
                service_provider: g.Z.getServiceProvider()
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
        L(this, 'metadata', void 0),
            L(this, 'playTimeSec', 0),
            L(this, 'playWallTimeMs', 0),
            L(this, 'firstPlayWaitingMs', 0),
            L(this, 'stallCount', 0),
            L(this, 'stallMs', 0),
            L(this, 'seekCount', 0),
            L(this, 'seekWaitingMs', 0),
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
            (this.analyticsEnabled = Y.getCurrentConfig({ location: 'media_player' }).enabled);
    }
}
class K extends (r = s.PureComponent) {
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
            { current: i } = this.mediaRef;
        null != i && (t && (i.muted = t), e && (this.play(!0), this.handleUIUpdate()), (i.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
                props: { onPause: n, onVolumeChange: i, onMute: r },
                state: { playing: a, fullscreen: s, muted: o, dragging: l, volume: u }
            } = this,
            { current: c } = this.mediaRef,
            { current: d } = this.playPausePopRef;
        if (null == c) return;
        a && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == d || d.pop(a))) : !a && t.playing && (c.pause(), null == d || d.pop(a), null == n || n());
        let f = (0, b.fn)(c.parentNode, c);
        s && !t.fullscreen && null != f ? ((0, b.Dj)(f), f.addEventListener(b.NO, this.handleFullScreenExit)) : !s && t.fullscreen && null != f && (f.removeEventListener(b.NO, this.handleFullScreenExit), (0, b.Pr)(f)), l === T.Z.Types.DURATION && t.dragging !== T.Z.Types.DURATION && a ? c.pause() : l !== T.Z.Types.DURATION && t.dragging === T.Z.Types.DURATION && a && c.play(), o !== t.muted && ((c.muted = o), null == r || r(o)), u !== t.volume && ((c.volume = u), null == i || i(u));
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, b.fn)(e.parentNode, e);
        null != t && (t.removeEventListener(b.NO, this.handleFullScreenExit), (0, b.Pr)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: i } = this.props,
            { current: r } = this.mediaRef;
        if (null != r) {
            let a = {};
            if ('function' == typeof n) {
                let e = n();
                e !== this.state.volume && ((r.volume = e), (a.volume = e));
            }
            if ('function' == typeof i) {
                let e = i();
                e !== this.state.muted && ((r.muted = e), (a.muted = e));
            }
            this.setState(a), r.play(), null == t || t(e, r.currentTime * y.Z.Millis.SECOND, r.duration * y.Z.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return '100%' === e ? e : Math.max(e, K.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return '100%' === e ? e : Math.max(e, K.minHeight);
    }
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: n } = this.controlsRef;
        null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
        let n = 0 | e,
            i = 0 | t;
        (this.state.currentTime !== n || this.state.duration !== i) &&
            this.setState({
                currentTime: n,
                duration: i
            });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: t } = this.state,
            n = t ? w : P,
            i = Math.max(0, Date.now() - this._lastMove) > n;
        i !== this.state.hideControls && null == e && this.setState({ hideControls: i });
    }
    renderVideo() {
        let { src: e, poster: t, forceExternal: n, onError: i, responsive: r, mediaLayoutType: s } = this.props,
            { playing: o, fullscreen: l } = this.state,
            u = this.getWidth(),
            c = this.getHeight();
        return n
            ? (0, a.jsx)(_.Z, {
                  className: D.video,
                  controls: !1,
                  height: c,
                  poster: t,
                  width: u,
                  responsive: r && !l,
                  mediaLayoutType: s,
                  playsInline: !0,
                  autoPlay: o
              })
            : (0, a.jsx)(_.Z, {
                  className: D.video,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: o,
                  height: c,
                  responsive: r && !l,
                  mediaLayoutType: l ? R.hV.STATIC : s,
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
                  poster: t,
                  preload: this.state.preload,
                  ref: this.mediaRef,
                  width: u,
                  src: e
              });
    }
    renderAudio() {
        return (0, a.jsx)('audio', {
            className: D.audio,
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
                props: { type: t, autoPlay: n, playable: i = !0, onVolumeShow: r, onVolumeHide: s, onControlsHide: o, onControlsShow: l },
                state: { buffers: u, currentTime: c, duration: d, hasClickedPlay: f, hideControls: _, muted: p, playing: h, fullscreen: g, volume: E, dragging: v }
            } = this,
            y = this.getWidth();
        return f || n || t === U.AUDIO
            ? (0, a.jsx)(V, {
                  buffers: u,
                  currentTime: c,
                  duration: d,
                  volume: (0, I.P)(E, 1),
                  hide: t === U.VIDEO && _,
                  muted: p,
                  autoPlay: n,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: r,
                  onVolumeHide: s,
                  onControlsShow: l,
                  onControlsHide: o,
                  playing: h,
                  dragging: v,
                  type: t,
                  ref: this.controlsRef,
                  width: g ? window.screen.width : y,
                  disabled: !i,
                  children:
                      t === U.VIDEO
                          ? (0, a.jsx)(m.Z, {
                                'aria-label': O.intl.string(O.t['2nM3Pj']),
                                className: D.videoButton,
                                iconClassName: D.controlIcon,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, b.fn)(null == e ? void 0 : e.parentNode, e)
                            })
                          : null
              })
            : (0, a.jsx)(S.Z, {
                  onPlay: this.handleVideoClick,
                  inactive: !i
              });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: i, playable: r, mimeType: s } = this.props;
        return null == e || null == t
            ? null
            : i === U.AUDIO
              ? (0, a.jsx)(j, {
                    fileName: e,
                    fileSize: t,
                    src: n,
                    disabled: !r,
                    mimeType: s,
                    hideDownloadButton: !0
                })
              : null;
    }
    renderPlayPausePop() {
        return (0, a.jsx)(H, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: i } = this.state,
            r = this.getWidth();
        return i
            ? G
            : t === U.AUDIO
              ? {
                    width: void 0,
                    height: 'auto'
                }
              : e
                ? void 0
                : {
                      width: r,
                      height: n
                  };
    }
    render() {
        let { height: e, type: t, src: n, forceExternal: i, className: r, renderLinkComponent: s, responsive: o, mediaLayoutType: u, renderOverlayContent: c } = this.props,
            { fullscreen: d, hideControls: f, playing: _ } = this.state,
            p = D.wrapperPaused;
        if ((t === U.AUDIO ? (p = D.wrapperAudio) : f ? (p = D.wrapperControlsHidden) : _ && (p = D.wrapperPlaying), i && t === U.VIDEO)) {
            let t = this.getWidth();
            return (0, a.jsxs)('div', {
                className: l()(p, { [D.wrapperMediaMosaic]: u === R.hV.MOSAIC }),
                style: o
                    ? void 0
                    : {
                          width: t,
                          height: e
                      },
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, a.jsx)('div', {
                        className: D.playCenter,
                        children: (0, a.jsx)(A.Z, {
                            className: D.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: s
                        })
                    })
                ]
            });
        }
        return (0, a.jsxs)('div', {
            className: l()(p, D.newMosaicStyle, r, { [D.wrapperMediaMosaic]: u === R.hV.MOSAIC }),
            'data-fullscreen': d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: _ ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === U.AUDIO ? this.renderAudio() : this.renderVideo(),
                this.renderControls(),
                t === U.VIDEO ? this.renderPlayPausePop() : null,
                null != c
                    ? (0, a.jsx)('div', {
                          className: l()({ [D.overlayContentHidden]: _ || d }),
                          children: c()
                      })
                    : null
            ]
        });
    }
    constructor(e) {
        var t, n;
        super(e),
            (t = this),
            L(this, '_unmounted', !1),
            L(this, '_lastMove', 0),
            L(this, '_analytics', void 0),
            L(this, 'mediaRef', s.createRef()),
            L(this, 'controlsRef', s.createRef()),
            L(this, 'playPausePopRef', s.createRef()),
            L(this, 'handleFullScreenExit', () => {
                let { current: e } = this.mediaRef;
                if (null == e) return;
                let t = (0, b.fn)(e.parentNode, e);
                (null != t && (0, b.rB)(t)) || this.setState({ fullscreen: !1 });
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
                    { current: i } = t.mediaRef;
                null != i && isFinite(i.duration) && isFinite(i.currentTime) && ((i.currentTime = e), t.updateValue(e / i.duration, n), t.updateTime(e, i.duration));
            }),
            L(this, 'handleUIUpdate', () => {
                if (!this.state.playing || this._unmounted) return;
                let { current: e } = this.mediaRef;
                null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate));
            }),
            L(this, 'handleDrag', (e, t) => {
                let { current: n } = this.mediaRef;
                if (t === T.Z.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === T.Z.Types.VOLUME) {
                    let t = (0, I.A)(e, 1);
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
                c().debounce(() => {
                    let { current: e } = this.mediaRef;
                    if (null == e) {
                        this.setState({ buffers: [] });
                        return;
                    }
                    this.setState({ buffers: Z(e) });
                }, 400)
            ),
            L(this, 'handleEnded', (e) => {
                let { onEnded: t } = this.props;
                this.setState({
                    playing: !1,
                    hideControls: !1
                }),
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
                    props: { onClick: i, autoPlay: r, autoMute: a }
                } = this;
                if (null != i) {
                    i(e);
                    return;
                }
                e.stopPropagation(),
                    r && !t && n && a
                        ? this.setState({
                              muted: !1,
                              hasClickedPlay: !0
                          })
                        : this.setPlay(!this.state.playing);
            }),
            L(this, 'setPlay', (e) => {
                let {
                    props: { autoMute: t },
                    state: { hasClickedPlay: n, muted: i }
                } = this;
                e !== this.state.playing &&
                    (e
                        ? this.setState({
                              playing: e,
                              hasClickedPlay: !0,
                              muted: (!!n || !t) && i
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
            (this._analytics = new W({
                src: e.src,
                mimeType: null === (n = e.mimeType) || void 0 === n ? void 0 : n.join('/'),
                fileSize: e.fileSizeBytes
            }));
        let { autoPlay: i, autoMute: r, volume: a, playable: o } = this.props,
            l = 'function' == typeof a ? a() : a,
            u = 'function' == typeof r ? r() : r;
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
            width: K.minWidth,
            height: K.minHeight,
            hovering: !1
        };
    }
}
L(K, 'Types', U),
    L(K, 'defaultProps', {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }),
    L(K, 'minWidth', 150),
    L(K, 'minHeight', 110);
let z = K;
