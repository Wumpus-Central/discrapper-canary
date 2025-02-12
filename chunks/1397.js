n.d(t, { Z: () => z }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(893776),
    d = n(528963),
    u = n(749210),
    h = n(607070),
    p = n(391650),
    m = n(645896),
    f = n(353093),
    g = n(717057),
    _ = n(693546),
    C = n(881952),
    x = n(305325),
    v = n(246364),
    E = n(983736),
    I = n(937111),
    b = n(270801),
    Z = n(652730),
    N = n(41776),
    T = n(657352),
    S = n(33154),
    j = n(144114),
    y = n(703656),
    A = n(210887),
    P = n(237904),
    R = n(271383),
    M = n(430824),
    L = n(607744),
    k = n(496675),
    O = n(594174),
    D = n(700785),
    w = n(862679),
    U = n(981631),
    B = n(815660),
    F = n(388032),
    H = n(705221);
function G(e, t, n) {
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
class V extends l.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && d.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: i, clanInfo: l } = this.props;
        if (!i && !e.shouldShowLurkerModeSuccessPopout && t && null != n) {
            if ((0, f.EJ)(n) && null == l) return;
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
        }
    }
    render() {
        let { isFollowable: e, isLurking: t, notClaimed: a, notPhoneVerified: r, notEmailVerified: s, newMember: c, memberDeadline: d, newAccount: u, accountDeadline: h, theme: p, children: m, canSendMessages: f, channelFollowingUsersSeen: g, showLurkerModeUpsellPopout: _, showMemberVerificationModal: C, useReducedMotion: x, isStaff: E, guildJoinRequest: I } = this.props,
            { shouldShowLurkerModeUpsellPopout: b, shouldShowLurkerModeSuccessPopout: Z } = this.state,
            N = {
                theme: p,
                useReducedMotion: x
            };
        if (e && !f) {
            if (((N.message = F.intl.string(F.t.Hl0Mqq)), null != g && g >= 1000)) {
                let e = 1000 * Math.floor(g / 1000);
                N.subtitle = F.intl.formatToPlainString(F.t.C5bgrK, { count: e.toLocaleString() });
            }
            (N.buttonText = F.intl.string(F.t['3aOv+v'])), (N.onButtonClick = this.handleFollowAnnouncement), (N.imageSrc = n(485195)), t && ((N.onSecondaryButtonClick = this.handleJoinServer), (N.secondaryButtonText = F.intl.string(F.t['RLch7+'])));
        } else if (a) (N.message = F.intl.string(F.t['Eg3/c3'])), (N.buttonText = F.intl.string(F.t.fiNVio)), (N.onButtonClick = C ? this.handleShowMemberVerification : this.handleClaimAccount), (N.imageSrc = n(102811));
        else if (C)
            switch (null == I ? void 0 : I.applicationStatus) {
                case v.wB.SUBMITTED:
                    (N.message = F.intl.string(F.t['5iLvS0'])), (N.subtitle = F.intl.string(F.t.FdsK4u)), (N.buttonText = F.intl.string(F.t.mqtdmZ)), (N.onButtonClick = this.handleCancelApplication), (N.imageSrc = n(281958));
                    break;
                case v.wB.REJECTED:
                    (N.message = F.intl.string(F.t.lk30cX)), (N.buttonText = F.intl.string(F.t['8RrsHh'])), (N.onButtonClick = this.handleViewApplicationRejection), (N.imageSrc = n(809844));
                    break;
                default:
                    (N.message = F.intl.string(F.t.rEBKvr)),
                        (N.buttonText = F.intl.string(F.t['r8/DT0'])),
                        (N.buttonColor = o.Ttl.BRAND),
                        (N.onButtonClick = this.handleShowMemberVerification),
                        (N.animationSrc = () =>
                            n
                                .e('43841')
                                .then(n.t.bind(n, 737848, 19))
                                .then((e) => {
                                    let { default: t } = e;
                                    return t;
                                }));
            }
        else r && !E ? ((N.message = F.intl.string(F.t['2dThMD'])), (N.buttonText = F.intl.string(F.t['50gfOj'])), (N.onButtonClick = this.handleVerifyPhone), (N.imageSrc = n(98063))) : s ? ((N.message = F.intl.string(F.t.FkGPS0)), (N.buttonText = F.intl.string(F.t.lm1UKi)), (N.onButtonClick = this.handleResendVerification), (N.imageSrc = n(102811))) : c ? ((N.message = F.intl.formatToPlainString(F.t.IH7RMD, { min: U.YeM.MEMBER_AGE })), (N.countdown = d)) : u && ((N.message = F.intl.formatToPlainString(F.t['2JA2GB'], { min: U.YeM.ACCOUNT_AGE })), (N.countdown = h));
        return (0, i.jsx)(o.yRy, {
            position: 'top',
            align: 'left',
            shouldShow: Z,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(w.Z, {
                    ...N,
                    children: (0, i.jsxs)(l.Fragment, {
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            _
                                ? (0, i.jsx)(o.yRy, {
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: b,
                                      position: 'top',
                                      children: (e) =>
                                          (0, i.jsx)(o.P3F, {
                                              ...e,
                                              className: H.clickableChannelTextArea,
                                              onClick: this.handleTextAreaClick,
                                              children: m
                                          })
                                  })
                                : m
                        ]
                    })
                })
        });
    }
    constructor(...e) {
        super(...e),
            G(this, 'state', {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1
            }),
            G(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    r()(null != n, 'This guildID cannot be null'),
                    (0, i.jsx)(T.Z, {
                        onClose: t,
                        guild: n
                    })
                );
            }),
            G(this, 'handleCancelApplication', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, o.h7j)((t) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: F.intl.string(F.t.aIz1oa),
                            confirmText: F.intl.string(F.t['cY+Ooa']),
                            cancelText: F.intl.string(F.t['ETE/oK']),
                            onConfirm: () => _.Z.removeGuildJoinRequest(e.id),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            ...t,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: F.intl.string(F.t['13tjTU'])
                            })
                        })
                    );
            }),
            G(this, 'handleViewApplicationRejection', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, o.ZDy)(async () => {
                        let { default: t } = await n.e('3378').then(n.bind(n, 76075));
                        return (n) =>
                            (0, i.jsx)(t, {
                                guildId: e.id,
                                ...n
                            });
                    });
            }),
            G(this, 'handleShowMemberVerification', () => {
                let { guild: e } = this.props;
                null != e && (0, x.hk)(e.id);
            }),
            G(this, 'handleClaimAccount', () => {
                p.j();
            }),
            G(this, 'handleVerifyPhone', () => {
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('53734')]).then(n.bind(n, 607018));
                        return (t) =>
                            (0, i.jsx)(e, {
                                reason: j.L.GUILD_PHONE_REQUIRED,
                                ...t
                            });
                    },
                    { modalKey: B.M }
                );
            }),
            G(this, 'handleResendVerification', () => {
                var e;
                c.Z.verifyResend();
                let t = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
                null != t &&
                    (0, o.h7j)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            ...e,
                            header: F.intl.string(F.t.LykQYm),
                            confirmText: F.intl.string(F.t.BddRzc),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: F.intl.format(F.t.azKEPz, { email: t })
                            })
                        })
                    );
            }),
            G(this, 'handleTextAreaClick', () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            G(this, 'handleJoinServer', async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await u.Z.joinGuild(e, { source: U.vtS.CHAT_INPUT_BLOCKER });
                } catch {
                    this.setState({ submitting: !1 });
                }
            }),
            G(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, y.s1)().goBack();
            }),
            G(this, 'handleFollowAnnouncement', () => {
                let { channel: e } = this.props;
                (0, o.ZDy)(async () => {
                    let { default: t } = await n.e('54642').then(n.bind(n, 720589));
                    return (n) =>
                        (0, i.jsx)(t, {
                            channel: e,
                            ...n
                        });
                });
            }),
            G(this, 'closeLurkerModeUpsellPopout', () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            G(this, 'renderLurkerModeUpsellPopout', () => {
                let { guild: e } = this.props;
                return (
                    r()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, i.jsx)(S.Z, {
                        type: S.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            G(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === v.wB.APPROVED;
                if (null == e || null == t || !n || (0, C.d3)(t)) return null;
                let l = () => {
                    _.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, f.EJ)(e)
                    ? (0, i.jsx)(o.u_l, {
                          renderModal: (t) =>
                              (0, i.jsx)(g.default, {
                                  ...t,
                                  onAccept: l,
                                  guildId: e.id
                              }),
                          onCloseRequest: l
                      })
                    : (0, i.jsx)(o.u_l, {
                          renderModal: (t) =>
                              (0, i.jsx)(b.Z, {
                                  ...t,
                                  onAccept: l,
                                  guildName: e.name
                              }),
                          onCloseRequest: l
                      });
            });
    }
}
function z(e) {
    var t, n;
    let { channel: a, children: r } = e,
        o = a.getGuildId(),
        c = (0, s.e7)([M.Z], () => M.Z.getGuild(o)),
        d = (0, s.e7)([L.Z], () => L.Z.getCheck(o)),
        u = a.type === U.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(U.oNc.NEWS),
        p = (0, s.e7)([P.Z], () => (u ? P.Z.getFollowerStatsForChannel(a.id) : null)),
        g = (0, s.e7)([N.Z], () => N.Z.isLurking(o)),
        _ = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        x = null !== (t = null == _ ? void 0 : _.isStaff()) && void 0 !== t && t,
        b = (0, s.e7)([R.ZP], () => {
            var e, t;
            return null != _ && null !== (t = null === (e = R.ZP.getMember(o, _.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
        }),
        T = !!(0, E.Dc)(c),
        S = (b || d.notClaimed) && T,
        j = (0, s.e7)([Z.Z], () => Z.Z.shouldShowPopout(o)),
        y = (0, s.e7)([k.Z], () => k.Z.can(U.Plq.SEND_MESSAGES, a)),
        w = (0, s.e7)([I.Z], () => I.Z.getRequest(o)),
        [B, F] = (0, m.L_)(o),
        H = (0, m.Cc)(o),
        G = (null == w ? void 0 : w.applicationStatus) === v.wB.APPROVED,
        z = l.useRef(F);
    l.useEffect(() => {
        z.current = F;
    }),
        l.useEffect(() => {
            !(!(0, f.EJ)(c) || !G || (0, C.d3)(w)) && null == H && z.current();
        }, [c, G, w, H]);
    let W = {
        ...d,
        guild: c,
        isLurking: g,
        isFollowable: u,
        shouldShowLurkerModeSuccessPopout: j,
        showLurkerModeUpsellPopout: g && null != c && D.Uu(U.Plq.SEND_MESSAGES, a),
        theme: A.Z.theme,
        canSendMessages: y,
        channelFollowingUsersSeen: null != p ? p.usersSeenEver : null,
        hasVerificationGate: T,
        showMemberVerificationModal: S,
        guildJoinRequestStatus: null !== (n = null == w ? void 0 : w.applicationStatus) && void 0 !== n ? n : v.wB.STARTED,
        guildJoinRequest: w,
        useReducedMotion: h.Z.useReducedMotion,
        isStaff: x,
        isLoading: B,
        clanInfo: H
    };
    return (0, i.jsx)(V, {
        ...W,
        channel: a,
        children: r
    });
}
