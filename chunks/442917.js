n.d(t, { Z: () => eh }), n(388685);
var r = n(255367),
    i = n(73800),
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
    O = n(221888),
    v = n(522651),
    I = n(933557),
    S = n(502053),
    T = n(965048),
    A = n(569545),
    N = n(74299),
    C = n(863908),
    R = n(803647),
    P = n(266910),
    w = n(788983),
    D = n(703656),
    L = n(937995),
    x = n(618158),
    M = n(922745),
    k = n(197016),
    j = n(800965),
    U = n(445062),
    G = n(7188),
    B = n(199902),
    V = n(314897),
    F = n(131951),
    Z = n(699516),
    H = n(594174),
    Y = n(248402),
    W = n(33039),
    K = n(451478),
    z = n(626135),
    q = n(5192),
    Q = n(51144),
    X = n(484286),
    J = n(822296),
    $ = n(916771),
    ee = n(792517),
    et = n(351483),
    en = n(249212),
    er = n(560688),
    ei = n(127608),
    eo = n(76021),
    ea = n(981631),
    es = n(354459),
    el = n(420334),
    ec = n(20795);
function eu(e, t, n) {
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
function ed(e) {
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
                eu(e, t, n[t]);
            });
    }
    return e;
}
function ef(e, t) {
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
function e_(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ef(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class ep extends i.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, es._5)(e),
            i = null != e && e.type !== es.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === es.fO.STREAM || (null == e ? void 0 : e.type) === es.fO.USER) && n.type !== ea.d4z.DM,
            canDisconnect: !r,
            isSelf: i
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, A.V9)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, es._5)(e) ? t.find((t) => (0, A.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, es._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, C.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        z.default.track(ea.rMx.VIDEO_LAYOUT_TOGGLED, ed({ video_layout: 'pip' }, (0, E.AB)(e.id)));
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        z.default.track(ea.rMx.VIDEO_LAYOUT_TOGGLED, ed({ video_layout: b.Z.getLayout(e.id) }, (0, E.AB)(e.id)));
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: t, width: n, isOverlayRenderingVideo: i, videoStreamError: o, cameraEncodeError: a } = this.props;
        if (null != o && null == a) {
            if ((null == t ? void 0 : t.type) === es.fO.STREAM)
                return (0, r.jsx)($.Z, {
                    stream: t.stream,
                    width: n,
                    avError: o
                });
            else if ((null == t ? void 0 : t.type) === es.fO.USER)
                return (0, r.jsx)(en.Z, {
                    userId: t.user.id,
                    width: n,
                    avError: o
                });
        }
        switch (!0) {
            case (null == e ? void 0 : e.state) === ea.jm8.ENDED:
                return (0, r.jsx)(J.Z, {
                    stream: e,
                    width: n
                });
            case (null == e ? void 0 : e.state) === ea.jm8.FAILED:
                return (0, r.jsx)($.Z, {
                    stream: e,
                    width: n
                });
            case (null == t ? void 0 : t.type) === es.fO.HIDDEN_STREAM:
                return (0, r.jsx)(ee.Z, {
                    participant: t,
                    width: n
                });
            case i:
                return (0, r.jsx)(et.Z, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === es.fO.STREAM || (null == t ? void 0 : t.type) === es.fO.USER) {
            var n;
            let i = null != (n = q.ZP.getNickname(e.getGuildId(), e.id, t.user)) ? n : Q.ZP.getName(t.user);
            return (0, r.jsx)(d.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: el.participantName,
                lineClamp: 1,
                children: i
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: o } = this.props,
            a = (0, I.F6)(e, H.default, Z.Z),
            s = (null == n ? void 0 : n.id) === V.default.getId() && i,
            l = this.renderStreamState(),
            c = this.activeStreamForSelectedParticipant,
            u = null;
        return (
            (null == n ? void 0 : n.type) !== es.fO.ACTIVITY &&
                (null != l
                    ? (u = l)
                    : ((null == n ? void 0 : n.type) === es.fO.USER || (null == n ? void 0 : n.type) === es.fO.STREAM) &&
                      (u = (0, r.jsx)(X.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: F.Z.getVideoComponent(),
                          mirror: s,
                          children: (0, r.jsx)(P.Z, {
                              size: d.EFr.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == n ? void 0 : n.user.username
                          })
                      }))),
            (0, r.jsx)(L.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, r.jsx)(
                        M.Z,
                        e_(
                            ed(
                                {
                                    title: a,
                                    backgroundKey: null != (t = null == n ? void 0 : n.id) ? t : '',
                                    screenMessage: null == l ? this.getScreenMessage() : null,
                                    onJumpToChannel: this.handleJumpToChannel,
                                    onHide: this.handleHidePIP,
                                    renderBottomLeftControls: this.renderBottomLeftControls,
                                    renderBottomRightControls: this.renderBottomRightControls,
                                    preventIdleComponent: x.Z,
                                    width: o,
                                    className: ec.elevationHigh,
                                    videoControlsClassName: (null == c ? void 0 : c.state) === ea.jm8.ENDED ? el.videoControls : void 0
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
            eu(this, 'state', { screensharePopoutOpen: !1 }),
            eu(this, '_ref', i.createRef()),
            eu(this, 'handleVideo', (e) => {
                f.Z.setVideoEnabled(e);
            }),
            eu(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, er.Z)();
            }),
            eu(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: t } = this.props;
                (0, h.Ou)();
                let n = null != (e = t.getGuildId()) ? e : ea.ME;
                (0, D.XU)(n, t.id), p.Z.channelListScrollTo(n, t.id);
                let r = this.activeStreamForSelectedParticipant;
                null != r && _.Z.selectParticipant(r.channelId, (0, A.V9)(r));
            }),
            eu(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: t } = this.props,
                    n = t.getGuildId();
                if ((a()(null != n, 'Cannot go live in non guild channel'), (0, v.v)(g.Z.VIDEO_PIP, v.d.STREAM, !0), !e)) return (0, ei.Z)();
                (0, eo.Z)(n, t.id, ea.ZY5.GUILD_CHANNEL);
            }),
            eu(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                a()((0, es._5)(e), 'cannot stop stream for non streamer'), (0, v.v)(g.Z.VIDEO_PIP, v.d.STREAM, !1), (0, R.Z)(e.stream);
            }),
            eu(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                m.Cp(e.id);
            }),
            eu(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                (0, v.v)(g.Z.VIDEO_PIP, v.d.POPOUT, !0), w.hP(e);
            }),
            eu(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return e ? this.renderParticipantName() : null;
            }),
            eu(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: t, canDisconnect: n, canStopStream: i, canSeeViewers: o } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [o ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                });
            }),
            eu(this, 'renderDisconnectButton', () =>
                (0, r.jsx)(k.Z, {
                    className: el.rightTrayIcon,
                    onClick: () => (0, v.v)(g.Z.VIDEO_PIP, v.d.DISCONNECT)
                })
            ),
            eu(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, r.jsx)(U.Z, {
                    isSelfStream: e,
                    className: el.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            eu(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    a()((0, es._5)(e) || (null == e ? void 0 : e.type) === es.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, r.jsx)(x.Z, {
                        children: (0, r.jsx)(O.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: el.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            eu(this, 'renderPopoutIcon', () =>
                (0, r.jsx)(j.Z, {
                    className: el.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: ea.VqG
                })
            ),
            eu(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                a()((0, es._5)(e), 'Cannot render settings for non stream participant');
                let n = t.find((t) => (0, A.V9)(t) === e.id);
                return null == n || n.state === ea.jm8.ENDED
                    ? null
                    : (0, r.jsx)(G.Z, {
                          stream: n,
                          className: el.rightTrayIcon,
                          appContext: ea.IlC.APP,
                          location: g.Z.VIDEO_PIP
                      });
            });
    }
}
function eh(e) {
    let { channel: t, width: n } = e,
        i = (0, c.e7)([Y.Z], () => Y.Z.getSpeaker(t.id)),
        o = (0, c.e7)([b.Z], () => b.Z.getParticipant(t.id, i), [t.id, i]),
        a = (0, c.e7)([F.Z], () => l()(F.Z.getVideoDevices()).values().first()),
        s = (0, c.e7)([W.Z], () => (null != o && o.type !== es.fO.ACTIVITY && o.type !== es.fO.HIDDEN_STREAM ? W.Z.getStreamId(o.user.id, t.getGuildId(), (0, y.Z)(o.type)) : null), [o, t]),
        d = null == a || a.disabled,
        f = !d,
        _ = (0, c.e7)([F.Z], () => !d && F.Z.isVideoEnabled(), [d]),
        p = (0, c.e7)([F.Z], () => (0, N.Z)(F.Z)),
        h = (0, c.e7)([V.default], () => V.default.getId()),
        m = (0, c.e7)([B.Z], () => B.Z.getCurrentUserActiveStream()),
        g = null != o && 'user' in o ? o.user.id : '',
        E = (0, T.Z)((null == o ? void 0 : o.type) === es.fO.STREAM ? u.Yn.STREAM : u.Yn.DEFAULT, g),
        O = (0, S.Z)(g),
        v = (0, c.Wu)([B.Z], () => B.Z.getAllActiveStreams());
    return (0, r.jsx)(ep, {
        channel: t,
        streamId: s,
        participantOnScreen: o,
        isVideoAvailable: f,
        isVideoEnabled: _,
        canGoLive: p,
        currentUserId: h,
        activeStreams: v,
        activeSelfStream: m,
        isMainWindowFocused: K.Z.isFocused(),
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: E,
        cameraEncodeError: O
    });
}
