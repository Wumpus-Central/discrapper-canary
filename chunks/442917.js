n.d(t, { Z: () => e_ }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(846027),
    f = n(475179),
    _ = n(925549),
    p = n(37234),
    h = n(519938),
    m = n(100527),
    g = n(367907),
    E = n(358221),
    b = n(414910),
    v = n(221888),
    y = n(522651),
    O = n(933557),
    I = n(501640),
    S = n(569545),
    T = n(74299),
    A = n(863908),
    N = n(803647),
    C = n(266910),
    R = n(788983),
    P = n(703656),
    w = n(937995),
    D = n(618158),
    L = n(922745),
    x = n(197016),
    M = n(800965),
    k = n(445062),
    j = n(7188),
    U = n(199902),
    G = n(314897),
    B = n(131951),
    F = n(699516),
    V = n(594174),
    Z = n(248402),
    H = n(33039),
    W = n(451478),
    Y = n(626135),
    K = n(5192),
    z = n(51144),
    q = n(484286),
    Q = n(822296),
    X = n(916771),
    J = n(792517),
    $ = n(351483),
    ee = n(249212),
    et = n(560688),
    en = n(127608),
    er = n(76021),
    ei = n(981631),
    eo = n(354459),
    ea = n(584402),
    es = n(423308);
function el(e, t, n) {
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
function ec(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
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
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eu(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class ef extends i.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, eo._5)(e),
            i = null != e && e.type !== eo.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === eo.fO.STREAM || (null == e ? void 0 : e.type) === eo.fO.USER) && n.type !== ei.d4z.DM,
            canDisconnect: !r,
            isSelf: i
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, S.V9)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, eo._5)(e) ? t.find((t) => (0, S.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, eo._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, A.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        Y.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, ec({ video_layout: 'pip' }, (0, g.AB)(e.id)));
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        Y.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, ec({ video_layout: E.Z.getLayout(e.id) }, (0, g.AB)(e.id)));
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: t, width: n, isOverlayRenderingVideo: i, videoStreamError: o } = this.props;
        if (null != o) {
            if ((null == t ? void 0 : t.type) === eo.fO.STREAM)
                return (0, r.jsx)(X.Z, {
                    stream: t.stream,
                    width: n,
                    avError: o
                });
            if ((null == t ? void 0 : t.type) === eo.fO.USER)
                return (0, r.jsx)(ee.Z, {
                    userId: t.user.id,
                    width: n,
                    avError: o
                });
        }
        switch (!0) {
            case (null == e ? void 0 : e.state) === ei.jm8.ENDED:
                return (0, r.jsx)(Q.Z, {
                    stream: e,
                    width: n
                });
            case (null == e ? void 0 : e.state) === ei.jm8.FAILED:
                return (0, r.jsx)(X.Z, {
                    stream: e,
                    width: n
                });
            case (null == t ? void 0 : t.type) === eo.fO.HIDDEN_STREAM:
                return (0, r.jsx)(J.Z, {
                    participant: t,
                    width: n
                });
            case i:
                return (0, r.jsx)($.Z, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === eo.fO.STREAM || (null == t ? void 0 : t.type) === eo.fO.USER) {
            var n;
            let i = null !== (n = K.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : z.ZP.getName(t.user);
            return (0, r.jsx)(u.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: ea.participantName,
                lineClamp: 1,
                children: i
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: o } = this.props,
            a = (0, O.F6)(e, V.default, F.Z),
            s = (null == n ? void 0 : n.id) === G.default.getId() && i,
            l = this.renderStreamState(),
            c = null;
        return (
            (null == n ? void 0 : n.type) !== eo.fO.ACTIVITY &&
                (null != l
                    ? (c = l)
                    : ((null == n ? void 0 : n.type) === eo.fO.USER || (null == n ? void 0 : n.type) === eo.fO.STREAM) &&
                      (c = (0, r.jsx)(q.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: B.Z.getVideoComponent(),
                          mirror: s,
                          children: (0, r.jsx)(C.Z, {
                              size: u.EFr.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == n ? void 0 : n.user.username
                          })
                      }))),
            (0, r.jsx)(w.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, r.jsx)(
                        L.Z,
                        ed(
                            ec(
                                {
                                    title: a,
                                    backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
                                    screenMessage: null == l ? this.getScreenMessage() : null,
                                    onJumpToChannel: this.handleJumpToChannel,
                                    onHide: this.handleHidePIP,
                                    renderBottomLeftControls: this.renderBottomLeftControls,
                                    renderBottomRightControls: this.renderBottomRightControls,
                                    preventIdleComponent: D.Z,
                                    width: o,
                                    className: es.elevationHigh
                                },
                                e
                            ),
                            { children: c }
                        )
                    );
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            el(this, 'state', { screensharePopoutOpen: !1 }),
            el(this, '_ref', i.createRef()),
            el(this, 'handleVideo', (e) => {
                d.Z.setVideoEnabled(e);
            }),
            el(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, et.Z)();
            }),
            el(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: t } = this.props;
                (0, p.Ou)();
                let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : ei.ME;
                (0, P.XU)(n, t.id), _.Z.channelListScrollTo(n, t.id);
                let r = this.activeStreamForSelectedParticipant;
                null != r && f.Z.selectParticipant(r.channelId, (0, S.V9)(r));
            }),
            el(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: t } = this.props,
                    n = t.getGuildId();
                if ((a()(null != n, 'Cannot go live in non guild channel'), (0, y.v)(m.Z.VIDEO_PIP, y.d.STREAM, !0), !e)) return (0, en.Z)();
                (0, er.Z)(n, t.id, ei.ZY5.GUILD_CHANNEL);
            }),
            el(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                a()((0, eo._5)(e), 'cannot stop stream for non streamer'), (0, y.v)(m.Z.VIDEO_PIP, y.d.STREAM, !1), (0, N.Z)(e.stream);
            }),
            el(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                h.Cp(e.id);
            }),
            el(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                (0, y.v)(m.Z.VIDEO_PIP, y.d.POPOUT, !0), R.hP(e);
            }),
            el(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return e ? this.renderParticipantName() : null;
            }),
            el(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: t, canDisconnect: n, canStopStream: i, canSeeViewers: o } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [o ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                });
            }),
            el(this, 'renderDisconnectButton', () =>
                (0, r.jsx)(x.Z, {
                    className: ea.rightTrayIcon,
                    onClick: () => (0, y.v)(m.Z.VIDEO_PIP, y.d.DISCONNECT)
                })
            ),
            el(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, r.jsx)(k.Z, {
                    isSelfStream: e,
                    className: ea.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            el(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    a()((0, eo._5)(e) || (null == e ? void 0 : e.type) === eo.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, r.jsx)(D.Z, {
                        children: (0, r.jsx)(v.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: ea.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            el(this, 'renderPopoutIcon', () =>
                (0, r.jsx)(M.Z, {
                    className: ea.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: ei.VqG
                })
            ),
            el(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                a()((0, eo._5)(e), 'Cannot render settings for non stream participant');
                let n = t.find((t) => (0, S.V9)(t) === e.id);
                return null == n || n.state === ei.jm8.ENDED
                    ? null
                    : (0, r.jsx)(j.Z, {
                          stream: n,
                          className: ea.rightTrayIcon,
                          appContext: ei.IlC.APP,
                          location: m.Z.VIDEO_PIP
                      });
            });
    }
}
function e_(e) {
    let { channel: t, width: n } = e,
        i = (0, c.e7)([Z.Z], () => Z.Z.getSpeaker(t.id)),
        o = (0, c.e7)([E.Z], () => E.Z.getParticipant(t.id, i), [t.id, i]),
        a = (0, c.e7)([B.Z], () => l()(B.Z.getVideoDevices()).values().first()),
        s = (0, c.e7)([H.Z], () => (null != o && o.type !== eo.fO.ACTIVITY && o.type !== eo.fO.HIDDEN_STREAM ? H.Z.getStreamId(o.user.id, t.getGuildId(), (0, b.Z)(o.type)) : null), [o, t]),
        u = null == a || a.disabled,
        d = !u,
        f = (0, c.e7)([B.Z], () => !u && B.Z.isVideoEnabled(), [u]),
        _ = (0, c.e7)([B.Z], () => (0, T.Z)(B.Z)),
        p = (0, c.e7)([G.default], () => G.default.getId()),
        h = (0, c.e7)([U.Z], () => U.Z.getCurrentUserActiveStream()),
        m = (0, I.Z)(null != o ? o : void 0),
        g = (0, c.Wu)([U.Z], () => U.Z.getAllActiveStreams());
    return (0, r.jsx)(ef, {
        channel: t,
        streamId: s,
        participantOnScreen: o,
        isVideoAvailable: d,
        isVideoEnabled: f,
        canGoLive: _,
        currentUserId: p,
        activeStreams: g,
        activeSelfStream: h,
        isMainWindowFocused: W.Z.isFocused(),
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: m
    });
}
