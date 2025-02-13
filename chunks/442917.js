n.d(t, { Z: () => es }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(846027),
    f = n(475179),
    _ = n(925549),
    p = n(37234),
    h = n(519938),
    m = n(367907),
    g = n(358221),
    E = n(414910),
    v = n(221888),
    y = n(933557),
    I = n(569545),
    T = n(74299),
    b = n(863908),
    S = n(803647),
    A = n(266910),
    N = n(788983),
    C = n(703656),
    R = n(937995),
    O = n(618158),
    D = n(922745),
    L = n(197016),
    x = n(800965),
    P = n(445062),
    w = n(7188),
    M = n(199902),
    k = n(314897),
    U = n(131951),
    G = n(699516),
    B = n(594174),
    Z = n(248402),
    F = n(33039),
    V = n(451478),
    j = n(626135),
    H = n(5192),
    Y = n(51144),
    W = n(484286),
    K = n(822296),
    z = n(916771),
    q = n(792517),
    Q = n(351483),
    X = n(560688),
    J = n(127608),
    $ = n(76021),
    ee = n(981631),
    et = n(354459),
    en = n(597393),
    ei = n(801919);
function er(e, t, n) {
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
class ea extends r.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            i = (0, et._5)(e),
            r = null != e && e.type !== et.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: i && !r,
            canSettings: i && r,
            canStopStream: i,
            canSeeViewers: i,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === et.fO.STREAM || (null == e ? void 0 : e.type) === et.fO.USER) && n.type !== ee.d4z.DM,
            canDisconnect: !i,
            isSelf: r
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, I.V9)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, et._5)(e) ? t.find((t) => (0, I.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, et._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, b.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        j.default.track(ee.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: 'pip',
            ...(0, m.AB)(e.id)
        });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        j.default.track(ee.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: g.Z.getLayout(e.id),
            ...(0, m.AB)(e.id)
        });
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: t, width: n, isOverlayRenderingVideo: r } = this.props;
        switch (!0) {
            case (null == e ? void 0 : e.state) === ee.jm8.ENDED:
                return (0, i.jsx)(K.Z, {
                    stream: e,
                    width: n
                });
            case (null == e ? void 0 : e.state) === ee.jm8.FAILED:
                return (0, i.jsx)(z.Z, {
                    stream: e,
                    width: n
                });
            case (null == t ? void 0 : t.type) === et.fO.HIDDEN_STREAM:
                return (0, i.jsx)(q.Z, {
                    participant: t,
                    width: n
                });
            case r:
                return (0, i.jsx)(Q.Z, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === et.fO.STREAM || (null == t ? void 0 : t.type) === et.fO.USER) {
            var n;
            let r = null !== (n = H.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : Y.ZP.getName(t.user);
            return (0, i.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: en.participantName,
                lineClamp: 1,
                children: r
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: r, width: a } = this.props,
            s = (0, y.F6)(e, B.default, G.Z),
            o = (null == n ? void 0 : n.id) === k.default.getId() && r,
            l = this.renderStreamState(),
            u = null;
        return (
            (null == n ? void 0 : n.type) !== et.fO.ACTIVITY &&
                (null != l
                    ? (u = l)
                    : ((null == n ? void 0 : n.type) === et.fO.USER || (null == n ? void 0 : n.type) === et.fO.STREAM) &&
                      (u = (0, i.jsx)(W.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: U.Z.getVideoComponent(),
                          mirror: o,
                          children: (0, i.jsx)(A.Z, {
                              size: c.EFr.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == n ? void 0 : n.user.username
                          })
                      }))),
            (0, i.jsx)(R.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, i.jsx)(D.Z, {
                        title: s,
                        backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        onHide: this.handleHidePIP,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: O.Z,
                        width: a,
                        className: ei.elevationHigh,
                        ...e,
                        children: u
                    });
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            er(this, 'state', { screensharePopoutOpen: !1 }),
            er(this, '_ref', r.createRef()),
            er(this, 'handleVideo', (e) => {
                d.Z.setVideoEnabled(e);
            }),
            er(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, X.Z)();
            }),
            er(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: t } = this.props;
                (0, p.Ou)();
                let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : ee.ME;
                (0, C.XU)(n, t.id), _.Z.channelListScrollTo(n, t.id);
                let i = this.activeStreamForSelectedParticipant;
                null != i && f.Z.selectParticipant(i.channelId, (0, I.V9)(i));
            }),
            er(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: t } = this.props,
                    n = t.getGuildId();
                if ((s()(null != n, 'Cannot go live in non guild channel'), !e)) return (0, J.Z)();
                (0, $.Z)(n, t.id, ee.ZY5.GUILD_CHANNEL);
            }),
            er(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                s()((0, et._5)(e), 'cannot stop stream for non streamer'), (0, S.Z)(e.stream);
            }),
            er(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                h.Cp(e.id);
            }),
            er(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                N.hP(e);
            }),
            er(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return (0, i.jsx)(i.Fragment, { children: e ? this.renderParticipantName() : null });
            }),
            er(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: t, canDisconnect: n, canStopStream: r, canSeeViewers: a } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [a ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, r ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                });
            }),
            er(this, 'renderDisconnectButton', () => (0, i.jsx)(L.Z, { className: en.rightTrayIcon })),
            er(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, i.jsx)(P.Z, {
                    isSelfStream: e,
                    className: en.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            er(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    s()((0, et._5)(e) || (null == e ? void 0 : e.type) === et.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, i.jsx)(O.Z, {
                        children: (0, i.jsx)(v.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: en.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            er(this, 'renderPopoutIcon', () =>
                (0, i.jsx)(x.Z, {
                    className: en.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: ee.VqG
                })
            ),
            er(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                s()((0, et._5)(e), 'Cannot render settings for non stream participant');
                let n = t.find((t) => (0, I.V9)(t) === e.id);
                return null == n || n.state === ee.jm8.ENDED
                    ? null
                    : (0, i.jsx)(w.Z, {
                          stream: n,
                          className: en.rightTrayIcon,
                          appContext: ee.IlC.APP
                      });
            });
    }
}
let es = u.ZP.connectStores([U.Z, Z.Z, g.Z, k.default, M.Z, F.Z, V.Z], (e) => {
    let { channel: t } = e,
        n = Z.Z.getSpeaker(t.id),
        i = g.Z.getParticipant(t.id, n),
        r = l()(U.Z.getVideoDevices()).values().first(),
        a = null == r || r.disabled,
        s = null != i && i.type !== et.fO.ACTIVITY && i.type !== et.fO.HIDDEN_STREAM ? F.Z.getStreamId(i.user.id, t.getGuildId(), (0, E.Z)(i.type)) : null,
        o = !1 === a,
        u = !a && U.Z.isVideoEnabled(),
        c = (0, T.Z)(U.Z),
        d = k.default.getId(),
        f = M.Z.getCurrentUserActiveStream(),
        _ = !1;
    return {
        channel: t,
        streamId: s,
        participantOnScreen: i,
        isVideoAvailable: o,
        isVideoEnabled: u,
        canGoLive: c,
        currentUserId: d,
        activeStreams: M.Z.getAllActiveStreams(),
        activeSelfStream: f,
        isMainWindowFocused: V.Z.isFocused(),
        isOverlayRenderingVideo: _
    };
})(ea);
