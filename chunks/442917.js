n.d(t, { Z: () => ed }), n(47120);
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
    g = n(100527),
    m = n(367907),
    E = n(358221),
    v = n(414910),
    b = n(221888),
    y = n(522651),
    O = n(933557),
    S = n(569545),
    I = n(74299),
    T = n(863908),
    N = n(803647),
    A = n(266910),
    C = n(788983),
    R = n(703656),
    P = n(937995),
    D = n(618158),
    w = n(922745),
    L = n(197016),
    x = n(800965),
    M = n(445062),
    k = n(7188),
    j = n(199902),
    U = n(314897),
    G = n(131951),
    B = n(699516),
    V = n(594174),
    F = n(248402),
    Z = n(33039),
    H = n(451478),
    W = n(626135),
    Y = n(5192),
    K = n(51144),
    z = n(484286),
    q = n(822296),
    Q = n(916771),
    X = n(792517),
    J = n(351483),
    $ = n(560688),
    ee = n(127608),
    et = n(76021),
    en = n(981631),
    er = n(354459),
    ei = n(584402),
    eo = n(423308);
function ea(e, t, n) {
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
function es(e) {
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
                ea(e, t, n[t]);
            });
    }
    return e;
}
function el(e, t) {
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
function ec(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : el(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class eu extends i.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, er._5)(e),
            i = null != e && e.type !== er.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === er.fO.STREAM || (null == e ? void 0 : e.type) === er.fO.USER) && n.type !== en.d4z.DM,
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
        return (0, er._5)(e) ? t.find((t) => (0, S.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, er._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, T.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        W.default.track(en.rMx.VIDEO_LAYOUT_TOGGLED, es({ video_layout: 'pip' }, (0, m.AB)(e.id)));
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        W.default.track(en.rMx.VIDEO_LAYOUT_TOGGLED, es({ video_layout: E.Z.getLayout(e.id) }, (0, m.AB)(e.id)));
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: t, width: n, isOverlayRenderingVideo: i } = this.props;
        switch (!0) {
            case (null == e ? void 0 : e.state) === en.jm8.ENDED:
                return (0, r.jsx)(q.Z, {
                    stream: e,
                    width: n
                });
            case (null == e ? void 0 : e.state) === en.jm8.FAILED:
                return (0, r.jsx)(Q.Z, {
                    stream: e,
                    width: n
                });
            case (null == t ? void 0 : t.type) === er.fO.HIDDEN_STREAM:
                return (0, r.jsx)(X.Z, {
                    participant: t,
                    width: n
                });
            case i:
                return (0, r.jsx)(J.Z, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === er.fO.STREAM || (null == t ? void 0 : t.type) === er.fO.USER) {
            var n;
            let i = null !== (n = Y.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : K.ZP.getName(t.user);
            return (0, r.jsx)(u.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: ei.participantName,
                lineClamp: 1,
                children: i
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: o } = this.props,
            a = (0, O.F6)(e, V.default, B.Z),
            s = (null == n ? void 0 : n.id) === U.default.getId() && i,
            l = this.renderStreamState(),
            c = null;
        return (
            (null == n ? void 0 : n.type) !== er.fO.ACTIVITY &&
                (null != l
                    ? (c = l)
                    : ((null == n ? void 0 : n.type) === er.fO.USER || (null == n ? void 0 : n.type) === er.fO.STREAM) &&
                      (c = (0, r.jsx)(z.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: G.Z.getVideoComponent(),
                          mirror: s,
                          children: (0, r.jsx)(A.Z, {
                              size: u.EFr.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == n ? void 0 : n.user.username
                          })
                      }))),
            (0, r.jsx)(P.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, r.jsx)(
                        w.Z,
                        ec(
                            es(
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
                                    className: eo.elevationHigh
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
            ea(this, 'state', { screensharePopoutOpen: !1 }),
            ea(this, '_ref', i.createRef()),
            ea(this, 'handleVideo', (e) => {
                d.Z.setVideoEnabled(e);
            }),
            ea(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, $.Z)();
            }),
            ea(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: t } = this.props;
                (0, p.Ou)();
                let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : en.ME;
                (0, R.XU)(n, t.id), _.Z.channelListScrollTo(n, t.id);
                let r = this.activeStreamForSelectedParticipant;
                null != r && f.Z.selectParticipant(r.channelId, (0, S.V9)(r));
            }),
            ea(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: t } = this.props,
                    n = t.getGuildId();
                if ((a()(null != n, 'Cannot go live in non guild channel'), (0, y.v)(g.Z.VIDEO_PIP, y.d.STREAM, !0), !e)) return (0, ee.Z)();
                (0, et.Z)(n, t.id, en.ZY5.GUILD_CHANNEL);
            }),
            ea(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                a()((0, er._5)(e), 'cannot stop stream for non streamer'), (0, y.v)(g.Z.VIDEO_PIP, y.d.STREAM, !1), (0, N.Z)(e.stream);
            }),
            ea(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                h.Cp(e.id);
            }),
            ea(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                (0, y.v)(g.Z.VIDEO_PIP, y.d.POPOUT, !0), C.hP(e);
            }),
            ea(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return e ? this.renderParticipantName() : null;
            }),
            ea(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: t, canDisconnect: n, canStopStream: i, canSeeViewers: o } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [o ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                });
            }),
            ea(this, 'renderDisconnectButton', () =>
                (0, r.jsx)(L.Z, {
                    className: ei.rightTrayIcon,
                    onClick: () => (0, y.v)(g.Z.VIDEO_PIP, y.d.DISCONNECT)
                })
            ),
            ea(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, r.jsx)(M.Z, {
                    isSelfStream: e,
                    className: ei.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            ea(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    a()((0, er._5)(e) || (null == e ? void 0 : e.type) === er.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, r.jsx)(D.Z, {
                        children: (0, r.jsx)(b.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: ei.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            ea(this, 'renderPopoutIcon', () =>
                (0, r.jsx)(x.Z, {
                    className: ei.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: en.VqG
                })
            ),
            ea(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                a()((0, er._5)(e), 'Cannot render settings for non stream participant');
                let n = t.find((t) => (0, S.V9)(t) === e.id);
                return null == n || n.state === en.jm8.ENDED
                    ? null
                    : (0, r.jsx)(k.Z, {
                          stream: n,
                          className: ei.rightTrayIcon,
                          appContext: en.IlC.APP,
                          location: g.Z.VIDEO_PIP
                      });
            });
    }
}
let ed = c.ZP.connectStores([G.Z, F.Z, E.Z, U.default, j.Z, Z.Z, H.Z], (e) => {
    let { channel: t } = e,
        n = F.Z.getSpeaker(t.id),
        r = E.Z.getParticipant(t.id, n),
        i = l()(G.Z.getVideoDevices()).values().first(),
        o = null == i || i.disabled,
        a = null != r && r.type !== er.fO.ACTIVITY && r.type !== er.fO.HIDDEN_STREAM ? Z.Z.getStreamId(r.user.id, t.getGuildId(), (0, v.Z)(r.type)) : null,
        s = !1 === o,
        c = !o && G.Z.isVideoEnabled(),
        u = (0, I.Z)(G.Z),
        d = U.default.getId(),
        f = j.Z.getCurrentUserActiveStream(),
        _ = !1;
    return {
        channel: t,
        streamId: a,
        participantOnScreen: r,
        isVideoAvailable: s,
        isVideoEnabled: c,
        canGoLive: u,
        currentUserId: d,
        activeStreams: j.Z.getAllActiveStreams(),
        activeSelfStream: f,
        isMainWindowFocused: H.Z.isFocused(),
        isOverlayRenderingVideo: _
    };
})(eu);
