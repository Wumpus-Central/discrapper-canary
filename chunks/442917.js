var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(512722),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(481060),
    _ = r(846027),
    h = r(475179),
    p = r(925549),
    m = r(37234),
    g = r(519938),
    E = r(367907),
    v = r(358221),
    I = r(414910),
    T = r(221888),
    b = r(933557),
    y = r(569545),
    S = r(74299),
    A = r(863908),
    N = r(803647),
    C = r(266910),
    R = r(788983),
    O = r(703656),
    D = r(937995),
    L = r(618158),
    x = r(922745),
    w = r(197016),
    P = r(800965),
    M = r(445062),
    k = r(7188),
    U = r(199902),
    B = r(314897),
    G = r(131951),
    F = r(699516),
    Z = r(594174),
    V = r(248402),
    j = r(33039),
    H = r(451478),
    Y = r(626135),
    W = r(5192),
    K = r(51144),
    z = r(484286),
    q = r(822296),
    Q = r(916771),
    X = r(792517),
    J = r(351483),
    $ = r(560688),
    ee = r(127608),
    et = r(76021),
    en = r(981631),
    er = r(354459),
    ei = r(165586),
    ea = r(616926);
function es(e, n, r) {
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
class eo extends s.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: n, channel: r } = this.props,
            i = (0, er._5)(e),
            a = null != e && e.type !== er.fO.ACTIVITY && e.user.id === n;
        return {
            canPopout: i && !a,
            canSettings: i && a,
            canStopStream: i,
            canSeeViewers: i,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === er.fO.STREAM || (null == e ? void 0 : e.type) === er.fO.USER) && r.type !== en.d4z.DM,
            canDisconnect: !i,
            isSelf: a
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: n, participantOnScreen: r } = this.props;
        return null != n && (null == r ? void 0 : r.id) === (0, y.V9)(n) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: n } = this.props;
        return (0, er._5)(e) ? n.find((n) => (0, y.V9)(n) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: n } = this.props;
        if (!(0, er._5)(e)) return null;
        let r = this.activeStreamForSelectedParticipant;
        return null == r ? null : (0, A.Z)(r, e.user, e.user.id === n, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        Y.default.track(en.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: 'pip',
            ...(0, E.AB)(e.id)
        });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        Y.default.track(en.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: v.Z.getLayout(e.id),
            ...(0, E.AB)(e.id)
        });
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: n, width: r, isOverlayRenderingVideo: i } = this.props;
        switch (!0) {
            case (null == e ? void 0 : e.state) === en.jm8.ENDED:
                return (0, a.jsx)(q.Z, {
                    stream: e,
                    width: r
                });
            case (null == e ? void 0 : e.state) === en.jm8.FAILED:
                return (0, a.jsx)(Q.Z, {
                    stream: e,
                    width: r
                });
            case (null == n ? void 0 : n.type) === er.fO.HIDDEN_STREAM:
                return (0, a.jsx)(X.Z, {
                    participant: n,
                    width: r
                });
            case i:
                return (0, a.jsx)(J.Z, { width: r });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: n } = this.props;
        if ((null == n ? void 0 : n.type) === er.fO.STREAM || (null == n ? void 0 : n.type) === er.fO.USER) {
            var r;
            let i = null !== (r = W.ZP.getNickname(e.getGuildId(), e.id, n.user)) && void 0 !== r ? r : K.ZP.getName(n.user);
            return (0, a.jsx)(f.Text, {
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
        let { channel: e, streamId: n, participantOnScreen: r, isVideoEnabled: i, width: s } = this.props,
            o = (0, b.F6)(e, Z.default, F.Z),
            l = (null == r ? void 0 : r.id) === B.default.getId() && i,
            u = this.renderStreamState(),
            c = null;
        return (
            (null == r ? void 0 : r.type) !== er.fO.ACTIVITY &&
                (null != u
                    ? (c = u)
                    : ((null == r ? void 0 : r.type) === er.fO.USER || (null == r ? void 0 : r.type) === er.fO.STREAM) &&
                      (c = (0, a.jsx)(z.Z, {
                          paused: this.streamerPaused,
                          streamId: n,
                          component: G.Z.getVideoComponent(),
                          mirror: l,
                          children: (0, a.jsx)(C.Z, {
                              size: f.AvatarSizes.SIZE_80,
                              src: null == r ? void 0 : r.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == r ? void 0 : r.user.username
                          })
                      }))),
            (0, a.jsx)(D.ZP, {
                timeout: 1800,
                children: (e) => {
                    var n;
                    return (0, a.jsx)(x.Z, {
                        title: o,
                        backgroundKey: null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : '',
                        screenMessage: null == u ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        onHide: this.handleHidePIP,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: L.Z,
                        width: s,
                        className: ea.elevationHigh,
                        ...e,
                        children: c
                    });
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            es(this, 'state', { screensharePopoutOpen: !1 }),
            es(this, '_ref', s.createRef()),
            es(this, 'handleVideo', (e) => {
                _.Z.setVideoEnabled(e);
            }),
            es(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, $.Z)();
            }),
            es(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: n } = this.props;
                (0, m.Ou)();
                let r = null !== (e = n.getGuildId()) && void 0 !== e ? e : en.ME;
                (0, O.XU)(r, n.id), p.Z.channelListScrollTo(r, n.id);
                let i = this.activeStreamForSelectedParticipant;
                null != i && h.Z.selectParticipant(i.channelId, (0, y.V9)(i));
            }),
            es(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: n } = this.props,
                    r = n.getGuildId();
                if ((l()(null != r, 'Cannot go live in non guild channel'), !e)) return (0, ee.Z)();
                (0, et.Z)(r, n.id, en.ZY5.GUILD_CHANNEL);
            }),
            es(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                l()((0, er._5)(e), 'cannot stop stream for non streamer'), (0, N.Z)(e.stream);
            }),
            es(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                g.Cp(e.id);
            }),
            es(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                R.hP(e);
            }),
            es(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return (0, a.jsx)(a.Fragment, { children: e ? this.renderParticipantName() : null });
            }),
            es(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: n, canDisconnect: r, canStopStream: i, canSeeViewers: s } = this.viewProperties;
                return (0, a.jsxs)(a.Fragment, {
                    children: [s ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, n ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, r ? this.renderDisconnectButton() : null]
                });
            }),
            es(this, 'renderDisconnectButton', () => (0, a.jsx)(w.Z, { className: ei.rightTrayIcon })),
            es(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, a.jsx)(M.Z, {
                    isSelfStream: e,
                    className: ei.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            es(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: n } = this.props;
                return (
                    l()((0, er._5)(e) || (null == e ? void 0 : e.type) === er.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, a.jsx)(L.Z, {
                        children: (0, a.jsx)(T.Z, {
                            channelId: n.id,
                            guildId: n.getGuildId(),
                            className: ei.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            es(this, 'renderPopoutIcon', () =>
                (0, a.jsx)(P.Z, {
                    className: ei.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: en.VqG
                })
            ),
            es(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: n } = this.props;
                l()((0, er._5)(e), 'Cannot render settings for non stream participant');
                let r = n.find((n) => (0, y.V9)(n) === e.id);
                return null == r || r.state === en.jm8.ENDED
                    ? null
                    : (0, a.jsx)(k.Z, {
                          stream: r,
                          className: ei.rightTrayIcon,
                          appContext: en.IlC.APP
                      });
            });
    }
}
n.Z = d.ZP.connectStores([G.Z, V.Z, v.Z, B.default, U.Z, j.Z, H.Z], (e) => {
    let { channel: n } = e,
        r = V.Z.getSpeaker(n.id),
        i = v.Z.getParticipant(n.id, r),
        a = c()(G.Z.getVideoDevices()).values().first(),
        s = null == a || a.disabled,
        o = null != i && i.type !== er.fO.ACTIVITY && i.type !== er.fO.HIDDEN_STREAM ? j.Z.getStreamId(i.user.id, n.getGuildId(), (0, I.Z)(i.type)) : null,
        l = !1 === s,
        u = !s && G.Z.isVideoEnabled(),
        d = (0, S.Z)(G.Z),
        f = B.default.getId(),
        _ = U.Z.getCurrentUserActiveStream(),
        h = !1;
    return {
        channel: n,
        streamId: o,
        participantOnScreen: i,
        isVideoAvailable: l,
        isVideoEnabled: u,
        canGoLive: d,
        currentUserId: f,
        activeStreams: U.Z.getAllActiveStreams(),
        activeSelfStream: _,
        isMainWindowFocused: H.Z.isFocused(),
        isOverlayRenderingVideo: h
    };
})(eo);
