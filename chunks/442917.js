n.d(t, { Z: () => ep }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(46973),
    d = n(481060),
    f = n(846027),
    _ = n(475179),
    p = n(925549),
    h = n(37234),
    m = n(519938),
    g = n(100527),
    E = n(367907),
    b = n(358221),
    y = n(414910),
    v = n(221888),
    O = n(522651),
    I = n(933557),
    S = n(965048),
    T = n(569545),
    N = n(74299),
    A = n(863908),
    C = n(803647),
    R = n(266910),
    P = n(788983),
    w = n(703656),
    D = n(937995),
    L = n(618158),
    x = n(922745),
    M = n(197016),
    k = n(800965),
    j = n(445062),
    U = n(7188),
    G = n(199902),
    B = n(314897),
    F = n(131951),
    V = n(699516),
    Z = n(594174),
    H = n(248402),
    W = n(33039),
    Y = n(451478),
    K = n(626135),
    z = n(5192),
    q = n(51144),
    Q = n(484286),
    X = n(822296),
    J = n(916771),
    $ = n(792517),
    ee = n(351483),
    et = n(249212),
    en = n(560688),
    er = n(127608),
    ei = n(76021),
    eo = n(981631),
    ea = n(354459),
    es = n(420334),
    el = n(20795);
function ec(e, t, n) {
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
function eu(e) {
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
                ec(e, t, n[t]);
            });
    }
    return e;
}
function ed(e, t) {
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
function ef(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ed(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class e_ extends i.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, ea._5)(e),
            i = null != e && e.type !== ea.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === ea.fO.STREAM || (null == e ? void 0 : e.type) === ea.fO.USER) && n.type !== eo.d4z.DM,
            canDisconnect: !r,
            isSelf: i
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, T.V9)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, ea._5)(e) ? t.find((t) => (0, T.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ea._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, A.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        K.default.track(eo.rMx.VIDEO_LAYOUT_TOGGLED, eu({ video_layout: 'pip' }, (0, E.AB)(e.id)));
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        K.default.track(eo.rMx.VIDEO_LAYOUT_TOGGLED, eu({ video_layout: b.Z.getLayout(e.id) }, (0, E.AB)(e.id)));
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: t, width: n, isOverlayRenderingVideo: i, videoStreamError: o } = this.props;
        if (null != o) {
            if ((null == t ? void 0 : t.type) === ea.fO.STREAM)
                return (0, r.jsx)(J.Z, {
                    stream: t.stream,
                    width: n,
                    avError: o
                });
            else if ((null == t ? void 0 : t.type) === ea.fO.USER)
                return (0, r.jsx)(et.Z, {
                    userId: t.user.id,
                    width: n,
                    avError: o
                });
        }
        switch (!0) {
            case (null == e ? void 0 : e.state) === eo.jm8.ENDED:
                return (0, r.jsx)(X.Z, {
                    stream: e,
                    width: n
                });
            case (null == e ? void 0 : e.state) === eo.jm8.FAILED:
                return (0, r.jsx)(J.Z, {
                    stream: e,
                    width: n
                });
            case (null == t ? void 0 : t.type) === ea.fO.HIDDEN_STREAM:
                return (0, r.jsx)($.Z, {
                    participant: t,
                    width: n
                });
            case i:
                return (0, r.jsx)(ee.Z, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === ea.fO.STREAM || (null == t ? void 0 : t.type) === ea.fO.USER) {
            var n;
            let i = null != (n = z.ZP.getNickname(e.getGuildId(), e.id, t.user)) ? n : q.ZP.getName(t.user);
            return (0, r.jsx)(d.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: es.participantName,
                lineClamp: 1,
                children: i
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: o } = this.props,
            a = (0, I.F6)(e, Z.default, V.Z),
            s = (null == n ? void 0 : n.id) === B.default.getId() && i,
            l = this.renderStreamState(),
            c = this.activeStreamForSelectedParticipant,
            u = null;
        return (
            (null == n ? void 0 : n.type) !== ea.fO.ACTIVITY &&
                (null != l
                    ? (u = l)
                    : ((null == n ? void 0 : n.type) === ea.fO.USER || (null == n ? void 0 : n.type) === ea.fO.STREAM) &&
                      (u = (0, r.jsx)(Q.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: F.Z.getVideoComponent(),
                          mirror: s,
                          children: (0, r.jsx)(R.Z, {
                              size: d.EFr.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == n ? void 0 : n.user.username
                          })
                      }))),
            (0, r.jsx)(D.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, r.jsx)(
                        x.Z,
                        ef(
                            eu(
                                {
                                    title: a,
                                    backgroundKey: null != (t = null == n ? void 0 : n.id) ? t : '',
                                    screenMessage: null == l ? this.getScreenMessage() : null,
                                    onJumpToChannel: this.handleJumpToChannel,
                                    onHide: this.handleHidePIP,
                                    renderBottomLeftControls: this.renderBottomLeftControls,
                                    renderBottomRightControls: this.renderBottomRightControls,
                                    preventIdleComponent: L.Z,
                                    width: o,
                                    className: el.elevationHigh,
                                    videoControlsClassName: (null == c ? void 0 : c.state) === eo.jm8.ENDED ? es.videoControls : void 0
                                },
                                e
                            ),
                            { children: u }
                        )
                    );
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            ec(this, 'state', { screensharePopoutOpen: !1 }),
            ec(this, '_ref', i.createRef()),
            ec(this, 'handleVideo', (e) => {
                f.Z.setVideoEnabled(e);
            }),
            ec(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, en.Z)();
            }),
            ec(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: t } = this.props;
                (0, h.Ou)();
                let n = null != (e = t.getGuildId()) ? e : eo.ME;
                (0, w.XU)(n, t.id), p.Z.channelListScrollTo(n, t.id);
                let r = this.activeStreamForSelectedParticipant;
                null != r && _.Z.selectParticipant(r.channelId, (0, T.V9)(r));
            }),
            ec(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: t } = this.props,
                    n = t.getGuildId();
                if ((a()(null != n, 'Cannot go live in non guild channel'), (0, O.v)(g.Z.VIDEO_PIP, O.d.STREAM, !0), !e)) return (0, er.Z)();
                (0, ei.Z)(n, t.id, eo.ZY5.GUILD_CHANNEL);
            }),
            ec(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                a()((0, ea._5)(e), 'cannot stop stream for non streamer'), (0, O.v)(g.Z.VIDEO_PIP, O.d.STREAM, !1), (0, C.Z)(e.stream);
            }),
            ec(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                m.Cp(e.id);
            }),
            ec(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                (0, O.v)(g.Z.VIDEO_PIP, O.d.POPOUT, !0), P.hP(e);
            }),
            ec(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return e ? this.renderParticipantName() : null;
            }),
            ec(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: t, canDisconnect: n, canStopStream: i, canSeeViewers: o } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [o ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                });
            }),
            ec(this, 'renderDisconnectButton', () =>
                (0, r.jsx)(M.Z, {
                    className: es.rightTrayIcon,
                    onClick: () => (0, O.v)(g.Z.VIDEO_PIP, O.d.DISCONNECT)
                })
            ),
            ec(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, r.jsx)(j.Z, {
                    isSelfStream: e,
                    className: es.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            ec(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    a()((0, ea._5)(e) || (null == e ? void 0 : e.type) === ea.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, r.jsx)(L.Z, {
                        children: (0, r.jsx)(v.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: es.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            ec(this, 'renderPopoutIcon', () =>
                (0, r.jsx)(k.Z, {
                    className: es.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: eo.VqG
                })
            ),
            ec(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                a()((0, ea._5)(e), 'Cannot render settings for non stream participant');
                let n = t.find((t) => (0, T.V9)(t) === e.id);
                return null == n || n.state === eo.jm8.ENDED
                    ? null
                    : (0, r.jsx)(U.Z, {
                          stream: n,
                          className: es.rightTrayIcon,
                          appContext: eo.IlC.APP,
                          location: g.Z.VIDEO_PIP
                      });
            });
    }
}
function ep(e) {
    let { channel: t, width: n } = e,
        i = (0, c.e7)([H.Z], () => H.Z.getSpeaker(t.id)),
        o = (0, c.e7)([b.Z], () => b.Z.getParticipant(t.id, i), [t.id, i]),
        a = (0, c.e7)([F.Z], () => l()(F.Z.getVideoDevices()).values().first()),
        s = (0, c.e7)([W.Z], () => (null != o && o.type !== ea.fO.ACTIVITY && o.type !== ea.fO.HIDDEN_STREAM ? W.Z.getStreamId(o.user.id, t.getGuildId(), (0, y.Z)(o.type)) : null), [o, t]),
        d = null == a || a.disabled,
        f = !d,
        _ = (0, c.e7)([F.Z], () => !d && F.Z.isVideoEnabled(), [d]),
        p = (0, c.e7)([F.Z], () => (0, N.Z)(F.Z)),
        h = (0, c.e7)([B.default], () => B.default.getId()),
        m = (0, c.e7)([G.Z], () => G.Z.getCurrentUserActiveStream()),
        g = (0, S.Z)((null == o ? void 0 : o.type) === ea.fO.STREAM ? u.Yn.STREAM : u.Yn.DEFAULT, null != o && 'user' in o ? o.user.id : ''),
        E = (0, c.Wu)([G.Z], () => G.Z.getAllActiveStreams());
    return (0, r.jsx)(e_, {
        channel: t,
        streamId: s,
        participantOnScreen: o,
        isVideoAvailable: f,
        isVideoEnabled: _,
        canGoLive: p,
        currentUserId: h,
        activeStreams: E,
        activeSelfStream: m,
        isMainWindowFocused: Y.Z.isFocused(),
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: g
    });
}
