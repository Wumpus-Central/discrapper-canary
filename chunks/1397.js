n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
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
    C = n(693546),
    x = n(881952),
    v = n(305325),
    _ = n(246364),
    I = n(983736),
    E = n(937111),
    b = n(270801),
    Z = n(652730),
    N = n(41776),
    S = n(657352),
    T = n(33154),
    j = n(144114),
    A = n(703656),
    y = n(210887),
    P = n(237904),
    M = n(271383),
    R = n(430824),
    L = n(607744),
    k = n(496675),
    O = n(594174),
    D = n(700785),
    w = n(862679),
    B = n(981631),
    U = n(815660),
    H = n(388032),
    G = n(145532);
function F(e, t, n) {
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
        let { isFollowable: e, isLurking: t, notClaimed: r, notPhoneVerified: a, notEmailVerified: s, newMember: c, memberDeadline: d, newAccount: u, accountDeadline: h, theme: p, children: m, canSendMessages: f, channelFollowingUsersSeen: g, showLurkerModeUpsellPopout: C, showMemberVerificationModal: x, useReducedMotion: v, isStaff: I, guildJoinRequest: E } = this.props,
            { shouldShowLurkerModeUpsellPopout: b, shouldShowLurkerModeSuccessPopout: Z } = this.state,
            N = {
                theme: p,
                useReducedMotion: v
            };
        if (e && !f) {
            if (((N.message = H.intl.string(H.t.Hl0Mqq)), null != g && g >= 1000)) {
                let e = 1000 * Math.floor(g / 1000);
                N.subtitle = H.intl.formatToPlainString(H.t.C5bgrK, { count: e.toLocaleString() });
            }
            (N.buttonText = H.intl.string(H.t['3aOv+v'])), (N.onButtonClick = this.handleFollowAnnouncement), (N.imageSrc = n(485195)), t && ((N.onSecondaryButtonClick = this.handleJoinServer), (N.secondaryButtonText = H.intl.string(H.t['RLch7+'])));
        } else if (r) (N.message = H.intl.string(H.t['Eg3/c3'])), (N.buttonText = H.intl.string(H.t.fiNVio)), (N.onButtonClick = x ? this.handleShowMemberVerification : this.handleClaimAccount), (N.imageSrc = n(102811));
        else if (x)
            switch (null == E ? void 0 : E.applicationStatus) {
                case _.wB.SUBMITTED:
                    (N.message = H.intl.string(H.t['5iLvS0'])), (N.subtitle = H.intl.string(H.t.FdsK4u)), (N.buttonText = H.intl.string(H.t.mqtdmZ)), (N.onButtonClick = this.handleCancelApplication), (N.imageSrc = n(281958));
                    break;
                case _.wB.REJECTED:
                    (N.message = H.intl.string(H.t.lk30cX)), (N.buttonText = H.intl.string(H.t['8RrsHh'])), (N.onButtonClick = this.handleViewApplicationRejection), (N.imageSrc = n(809844));
                    break;
                default:
                    (N.message = H.intl.string(H.t.rEBKvr)), (N.buttonText = H.intl.string(H.t['r8/DT0'])), (N.buttonColor = o.ButtonColors.BRAND), (N.onButtonClick = this.handleShowMemberVerification);
                    N.animationSrc = () =>
                        n
                            .e('26176')
                            .then(n.t.bind(n, 737848, 19))
                            .then((e) => {
                                let { default: t } = e;
                                return t;
                            });
            }
        else a && !I ? ((N.message = H.intl.string(H.t['2dThMD'])), (N.buttonText = H.intl.string(H.t['50gfOj'])), (N.onButtonClick = this.handleVerifyPhone), (N.imageSrc = n(98063))) : s ? ((N.message = H.intl.string(H.t.FkGPS0)), (N.buttonText = H.intl.string(H.t.lm1UKi)), (N.onButtonClick = this.handleResendVerification), (N.imageSrc = n(102811))) : c ? ((N.message = H.intl.formatToPlainString(H.t.IH7RMD, { min: B.YeM.MEMBER_AGE })), (N.countdown = d)) : u && ((N.message = H.intl.formatToPlainString(H.t['2JA2GB'], { min: B.YeM.ACCOUNT_AGE })), (N.countdown = h));
        return (0, i.jsx)(o.Popout, {
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
                            C
                                ? (0, i.jsx)(o.Popout, {
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: b,
                                      position: 'top',
                                      children: (e) =>
                                          (0, i.jsx)(o.Clickable, {
                                              ...e,
                                              className: G.clickableChannelTextArea,
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
            F(this, 'state', {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1
            }),
            F(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    a()(null != n, 'This guildID cannot be null'),
                    (0, i.jsx)(S.Z, {
                        onClose: t,
                        guild: n
                    })
                );
            }),
            F(this, 'handleCancelApplication', () => {
                let { guild: e } = this.props;
                if (null != e)
                    (0, o.openModal)((t) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: H.intl.string(H.t.aIz1oa),
                            confirmText: H.intl.string(H.t['cY+Ooa']),
                            cancelText: H.intl.string(H.t['ETE/oK']),
                            onConfirm: () => C.Z.removeGuildJoinRequest(e.id),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            ...t,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: H.intl.string(H.t['13tjTU'])
                            })
                        })
                    );
            }),
            F(this, 'handleViewApplicationRejection', () => {
                let { guild: e } = this.props;
                if (null != e)
                    (0, o.openModalLazy)(async () => {
                        let { default: t } = await n.e('3378').then(n.bind(n, 76075));
                        return (n) =>
                            (0, i.jsx)(t, {
                                guildId: e.id,
                                ...n
                            });
                    });
            }),
            F(this, 'handleShowMemberVerification', () => {
                let { guild: e } = this.props;
                null != e && (0, v.hk)(e.id);
            }),
            F(this, 'handleClaimAccount', () => {
                p.j();
            }),
            F(this, 'handleVerifyPhone', () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('51501')]).then(n.bind(n, 607018));
                        return (t) =>
                            (0, i.jsx)(e, {
                                reason: j.L.GUILD_PHONE_REQUIRED,
                                ...t
                            });
                    },
                    { modalKey: U.M }
                );
            }),
            F(this, 'handleResendVerification', () => {
                var e;
                c.Z.verifyResend();
                let t = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
                null != t &&
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            ...e,
                            header: H.intl.string(H.t.LykQYm),
                            confirmText: H.intl.string(H.t.BddRzc),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: H.intl.format(H.t.azKEPz, { email: t })
                            })
                        })
                    );
            }),
            F(this, 'handleTextAreaClick', () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            F(this, 'handleJoinServer', async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await u.Z.joinGuild(e, { source: B.vtS.CHAT_INPUT_BLOCKER });
                } catch {
                    this.setState({ submitting: !1 });
                }
            }),
            F(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, A.s1)().goBack();
            }),
            F(this, 'handleFollowAnnouncement', () => {
                let { channel: e } = this.props;
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await n.e('54642').then(n.bind(n, 720589));
                    return (n) =>
                        (0, i.jsx)(t, {
                            channel: e,
                            ...n
                        });
                });
            }),
            F(this, 'closeLurkerModeUpsellPopout', () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            F(this, 'renderLurkerModeUpsellPopout', () => {
                let { guild: e } = this.props;
                return (
                    a()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, i.jsx)(T.Z, {
                        type: T.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            F(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === _.wB.APPROVED;
                if (null == e || null == t || !n || (0, x.d3)(t)) return null;
                let l = () => {
                    C.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, f.EJ)(e)
                    ? (0, i.jsx)(o.Modal, {
                          renderModal: (t) =>
                              (0, i.jsx)(g.default, {
                                  ...t,
                                  onAccept: l,
                                  guildId: e.id
                              }),
                          onCloseRequest: l
                      })
                    : (0, i.jsx)(o.Modal, {
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
    let { channel: r, children: a } = e,
        o = r.getGuildId(),
        c = (0, s.e7)([R.Z], () => R.Z.getGuild(o)),
        d = (0, s.e7)([L.Z], () => L.Z.getCheck(o)),
        u = r.type === B.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(B.oNc.NEWS),
        p = (0, s.e7)([P.Z], () => (u ? P.Z.getFollowerStatsForChannel(r.id) : null)),
        g = (0, s.e7)([N.Z], () => N.Z.isLurking(o)),
        C = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        v = null !== (t = null == C ? void 0 : C.isStaff()) && void 0 !== t && t,
        b = (0, s.e7)([M.ZP], () => {
            var e, t;
            return null != C && null !== (t = null === (e = M.ZP.getMember(o, C.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
        }),
        S = !!(0, I.Dc)(c),
        T = (b || d.notClaimed) && S,
        j = (0, s.e7)([Z.Z], () => Z.Z.shouldShowPopout(o)),
        A = (0, s.e7)([k.Z], () => k.Z.can(B.Plq.SEND_MESSAGES, r)),
        w = (0, s.e7)([E.Z], () => E.Z.getRequest(o)),
        [U, H] = (0, m.L_)(o),
        G = (0, m.Cc)(o),
        F = (null == w ? void 0 : w.applicationStatus) === _.wB.APPROVED,
        z = l.useRef(H);
    l.useEffect(() => {
        z.current = H;
    }),
        l.useEffect(() => {
            if (!(!(0, f.EJ)(c) || !F || (0, x.d3)(w)) && null == G) z.current();
        }, [c, F, w, G]);
    let W = {
        ...d,
        guild: c,
        isLurking: g,
        isFollowable: u,
        shouldShowLurkerModeSuccessPopout: j,
        showLurkerModeUpsellPopout: g && null != c && D.Uu(B.Plq.SEND_MESSAGES, r),
        theme: y.Z.theme,
        canSendMessages: A,
        channelFollowingUsersSeen: null != p ? p.usersSeenEver : null,
        hasVerificationGate: S,
        showMemberVerificationModal: T,
        guildJoinRequestStatus: null !== (n = null == w ? void 0 : w.applicationStatus) && void 0 !== n ? n : _.wB.STARTED,
        guildJoinRequest: w,
        useReducedMotion: h.Z.useReducedMotion,
        isStaff: v,
        isLoading: U,
        clanInfo: G
    };
    return (0, i.jsx)(V, {
        ...W,
        channel: r,
        children: a
    });
}
