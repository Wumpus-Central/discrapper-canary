n.d(t, { Z: () => ec }), n(47120);
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
    p = n(925549),
    _ = n(37234),
    h = n(519938),
    m = n(367907),
    g = n(358221),
    E = n(414910),
    v = n(221888),
    b = n(933557),
    y = n(569545),
    O = n(74299),
    S = n(863908),
    I = n(803647),
    T = n(266910),
    N = n(788983),
    A = n(703656),
    C = n(937995),
    R = n(618158),
    P = n(922745),
    w = n(197016),
    D = n(800965),
    x = n(445062),
    L = n(7188),
    M = n(199902),
    k = n(314897),
    j = n(131951),
    U = n(699516),
    G = n(594174),
    B = n(248402),
    Z = n(33039),
    F = n(451478),
    V = n(626135),
    H = n(5192),
    W = n(51144),
    Y = n(484286),
    K = n(822296),
    z = n(916771),
    q = n(792517),
    Q = n(351483),
    X = n(560688),
    J = n(127608),
    $ = n(76021),
    ee = n(981631),
    et = n(354459),
    en = n(603654),
    er = n(459918);
function ei(e, t, n) {
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
function eo(e) {
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
                ei(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class el extends i.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, et._5)(e),
            i = null != e && e.type !== et.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === et.fO.STREAM || (null == e ? void 0 : e.type) === et.fO.USER) && n.type !== ee.d4z.DM,
            canDisconnect: !r,
            isSelf: i
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, y.V9)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, et._5)(e) ? t.find((t) => (0, y.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, et._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, S.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        V.default.track(ee.rMx.VIDEO_LAYOUT_TOGGLED, eo({ video_layout: 'pip' }, (0, m.AB)(e.id)));
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        V.default.track(ee.rMx.VIDEO_LAYOUT_TOGGLED, eo({ video_layout: g.Z.getLayout(e.id) }, (0, m.AB)(e.id)));
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: t, width: n, isOverlayRenderingVideo: i } = this.props;
        switch (!0) {
            case (null == e ? void 0 : e.state) === ee.jm8.ENDED:
                return (0, r.jsx)(K.Z, {
                    stream: e,
                    width: n
                });
            case (null == e ? void 0 : e.state) === ee.jm8.FAILED:
                return (0, r.jsx)(z.Z, {
                    stream: e,
                    width: n
                });
            case (null == t ? void 0 : t.type) === et.fO.HIDDEN_STREAM:
                return (0, r.jsx)(q.Z, {
                    participant: t,
                    width: n
                });
            case i:
                return (0, r.jsx)(Q.Z, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === et.fO.STREAM || (null == t ? void 0 : t.type) === et.fO.USER) {
            var n;
            let i = null !== (n = H.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : W.ZP.getName(t.user);
            return (0, r.jsx)(u.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: en.participantName,
                lineClamp: 1,
                children: i
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: o } = this.props,
            a = (0, b.F6)(e, G.default, U.Z),
            s = (null == n ? void 0 : n.id) === k.default.getId() && i,
            l = this.renderStreamState(),
            c = null;
        return (
            (null == n ? void 0 : n.type) !== et.fO.ACTIVITY &&
                (null != l
                    ? (c = l)
                    : ((null == n ? void 0 : n.type) === et.fO.USER || (null == n ? void 0 : n.type) === et.fO.STREAM) &&
                      (c = (0, r.jsx)(Y.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: j.Z.getVideoComponent(),
                          mirror: s,
                          children: (0, r.jsx)(T.Z, {
                              size: u.EFr.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == n ? void 0 : n.user.username
                          })
                      }))),
            (0, r.jsx)(C.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, r.jsx)(
                        P.Z,
                        es(
                            eo(
                                {
                                    title: a,
                                    backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
                                    screenMessage: null == l ? this.getScreenMessage() : null,
                                    onJumpToChannel: this.handleJumpToChannel,
                                    onHide: this.handleHidePIP,
                                    renderBottomLeftControls: this.renderBottomLeftControls,
                                    renderBottomRightControls: this.renderBottomRightControls,
                                    preventIdleComponent: R.Z,
                                    width: o,
                                    className: er.elevationHigh
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
            ei(this, 'state', { screensharePopoutOpen: !1 }),
            ei(this, '_ref', i.createRef()),
            ei(this, 'handleVideo', (e) => {
                d.Z.setVideoEnabled(e);
            }),
            ei(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, X.Z)();
            }),
            ei(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: t } = this.props;
                (0, _.Ou)();
                let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : ee.ME;
                (0, A.XU)(n, t.id), p.Z.channelListScrollTo(n, t.id);
                let r = this.activeStreamForSelectedParticipant;
                null != r && f.Z.selectParticipant(r.channelId, (0, y.V9)(r));
            }),
            ei(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: t } = this.props,
                    n = t.getGuildId();
                if ((a()(null != n, 'Cannot go live in non guild channel'), !e)) return (0, J.Z)();
                (0, $.Z)(n, t.id, ee.ZY5.GUILD_CHANNEL);
            }),
            ei(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                a()((0, et._5)(e), 'cannot stop stream for non streamer'), (0, I.Z)(e.stream);
            }),
            ei(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                h.Cp(e.id);
            }),
            ei(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                N.hP(e);
            }),
            ei(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return (0, r.jsx)(r.Fragment, { children: e ? this.renderParticipantName() : null });
            }),
            ei(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: t, canDisconnect: n, canStopStream: i, canSeeViewers: o } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [o ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                });
            }),
            ei(this, 'renderDisconnectButton', () => (0, r.jsx)(w.Z, { className: en.rightTrayIcon })),
            ei(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, r.jsx)(x.Z, {
                    isSelfStream: e,
                    className: en.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            ei(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    a()((0, et._5)(e) || (null == e ? void 0 : e.type) === et.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, r.jsx)(R.Z, {
                        children: (0, r.jsx)(v.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: en.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            ei(this, 'renderPopoutIcon', () =>
                (0, r.jsx)(D.Z, {
                    className: en.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: ee.VqG
                })
            ),
            ei(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                a()((0, et._5)(e), 'Cannot render settings for non stream participant');
                let n = t.find((t) => (0, y.V9)(t) === e.id);
                return null == n || n.state === ee.jm8.ENDED
                    ? null
                    : (0, r.jsx)(L.Z, {
                          stream: n,
                          className: en.rightTrayIcon,
                          appContext: ee.IlC.APP
                      });
            });
    }
}
let ec = c.ZP.connectStores([j.Z, B.Z, g.Z, k.default, M.Z, Z.Z, F.Z], (e) => {
    let { channel: t } = e,
        n = B.Z.getSpeaker(t.id),
        r = g.Z.getParticipant(t.id, n),
        i = l()(j.Z.getVideoDevices()).values().first(),
        o = null == i || i.disabled,
        a = null != r && r.type !== et.fO.ACTIVITY && r.type !== et.fO.HIDDEN_STREAM ? Z.Z.getStreamId(r.user.id, t.getGuildId(), (0, E.Z)(r.type)) : null,
        s = !1 === o,
        c = !o && j.Z.isVideoEnabled(),
        u = (0, O.Z)(j.Z),
        d = k.default.getId(),
        f = M.Z.getCurrentUserActiveStream(),
        p = !1;
    return {
        channel: t,
        streamId: a,
        participantOnScreen: r,
        isVideoAvailable: s,
        isVideoEnabled: c,
        canGoLive: u,
        currentUserId: d,
        activeStreams: M.Z.getAllActiveStreams(),
        activeSelfStream: f,
        isMainWindowFocused: F.Z.isFocused(),
        isOverlayRenderingVideo: p
    };
})(el);
