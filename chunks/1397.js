(n.d(t, { Z: () => z }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(893776),
    d = n(528963),
    p = n(749210),
    h = n(607070),
    f = n(391650),
    m = n(693546),
    g = n(881952),
    b = n(305325),
    _ = n(246364),
    y = n(983736),
    C = n(937111),
    x = n(270801),
    v = n(652730),
    j = n(41776),
    O = n(657352),
    E = n(33154),
    S = n(144114),
    P = n(703656),
    I = n(210887),
    Z = n(606956),
    T = n(271383),
    N = n(430824),
    A = n(607744),
    w = n(496675),
    R = n(594174),
    M = n(700785),
    D = n(862679),
    L = n(981631),
    k = n(815660),
    U = n(388032),
    B = n(628829);
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
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            }));
    }
    return e;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class V extends i.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && d.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: r } = this.props;
        r || e.shouldShowLurkerModeSuccessPopout || !t || null == n || this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
    }
    render() {
        let { isFollowable: e, isLurking: t, notClaimed: n, notPhoneVerified: i, notEmailVerified: l, newMember: a, memberDeadline: o, newAccount: u, accountDeadline: d, theme: p, children: h, canSendMessages: f, channelFollowingUsersSeen: m, showLurkerModeUpsellPopout: g, showMemberVerificationModal: b, useReducedMotion: y, isStaff: C, guildJoinRequest: x } = this.props,
            { shouldShowLurkerModeUpsellPopout: v, shouldShowLurkerModeSuccessPopout: j } = this.state,
            O = {
                theme: p,
                useReducedMotion: y
            };
        if (e && !f) {
            if (((O.message = U.intl.string(U.t.Hl0Mqq)), null != m && m >= 1000)) {
                let e = 1000 * Math.floor(m / 1000);
                O.subtitle = U.intl.formatToPlainString(U.t.C5bgrK, { count: e.toLocaleString() });
            }
            ((O.buttonText = U.intl.string(U.t['3aOv+v'])), (O.onButtonClick = this.handleFollowAnnouncement), t && ((O.onSecondaryButtonClick = this.handleJoinServer), (O.secondaryButtonText = U.intl.string(U.t['RLch7+']))));
        } else if (n) ((O.message = U.intl.string(U.t['Eg3/c3'])), (O.buttonText = U.intl.string(U.t.fiNVio)), (O.onButtonClick = b ? this.handleShowMemberVerification : this.handleClaimAccount));
        else if (b)
            switch (null == x ? void 0 : x.applicationStatus) {
                case _.wB.SUBMITTED:
                    ((O.message = U.intl.string(U.t['5iLvS0'])), (O.subtitle = U.intl.string(U.t.FdsK4u)), (O.buttonText = U.intl.string(U.t.mqtdmZ)), (O.onButtonClick = this.handleCancelApplication));
                    break;
                case _.wB.REJECTED:
                    ((O.message = U.intl.string(U.t.lk30cX)), (O.buttonText = U.intl.string(U.t['8RrsHh'])), (O.onButtonClick = this.handleViewApplicationRejection));
                    break;
                default:
                    ((O.message = U.intl.string(U.t.rEBKvr)), (O.buttonText = U.intl.string(U.t['r8/DT0'])), (O.buttonColor = s.Tt.BRAND), (O.onButtonClick = this.handleShowMemberVerification));
            }
        else i && !C ? ((O.message = U.intl.string(U.t['2dThMD'])), (O.buttonText = U.intl.string(U.t['50gfOj'])), (O.onButtonClick = this.handleVerifyPhone)) : l ? ((O.message = U.intl.string(U.t.FkGPS0)), (O.buttonText = U.intl.string(U.t.lm1UKi)), (O.onButtonClick = this.handleResendVerification)) : a ? ((O.message = U.intl.formatToPlainString(U.t.IH7RMD, { min: L.YeM.MEMBER_AGE })), (O.countdown = o)) : u && ((O.message = U.intl.formatToPlainString(U.t['2JA2GB'], { min: L.YeM.ACCOUNT_AGE })), (O.countdown = d));
        return (0, r.jsx)(c.yRy, {
            targetElementRef: this.textAreaContainerRef,
            position: 'top',
            align: 'left',
            shouldShow: j,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, r.jsx)(
                    D.Z,
                    G(H({}, O), {
                        children: (0, r.jsxs)('div', {
                            ref: this.textAreaContainerRef,
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                g
                                    ? (0, r.jsx)(c.yRy, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: v,
                                          position: 'top',
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.P3F,
                                                  G(H({ innerRef: this.upsellTargetRef }, e), {
                                                      className: B.clickableChannelTextArea,
                                                      onClick: this.handleTextAreaClick,
                                                      children: h
                                                  })
                                              )
                                      })
                                    : h
                            ]
                        })
                    })
                )
        });
    }
    constructor(...e) {
        (super(...e),
            F(this, 'state', {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1
            }),
            F(this, 'textAreaContainerRef', i.createRef()),
            F(this, 'upsellTargetRef', i.createRef()),
            F(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    a()(null != n, 'This guildID cannot be null'),
                    (0, r.jsx)(O.Z, {
                        onClose: t,
                        guild: n
                    })
                );
            }),
            F(this, 'handleCancelApplication', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.h7j)((t) =>
                        (0, r.jsx)(
                            c.ConfirmModal,
                            G(
                                H(
                                    {
                                        header: U.intl.string(U.t.aIz1oa),
                                        confirmText: U.intl.string(U.t['cY+Ooa']),
                                        cancelText: U.intl.string(U.t['ETE/oK']),
                                        onConfirm: () => m.Z.removeGuildJoinRequest(e.id),
                                        confirmButtonColor: s.zx.Colors.BRAND
                                    },
                                    t
                                ),
                                {
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        children: U.intl.string(U.t['13tjTU'])
                                    })
                                }
                            )
                        )
                    );
            }),
            F(this, 'handleViewApplicationRejection', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.ZDy)(async () => {
                        let { default: t } = await n.e('3378').then(n.bind(n, 76075));
                        return (n) => (0, r.jsx)(t, H({ guildId: e.id }, n));
                    });
            }),
            F(this, 'handleShowMemberVerification', () => {
                let { guild: e } = this.props;
                null != e && (0, b.hk)(e.id);
            }),
            F(this, 'handleClaimAccount', () => {
                f.j();
            }),
            F(this, 'handleVerifyPhone', () => {
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('84575')]).then(n.bind(n, 607018));
                        return (t) => (0, r.jsx)(e, H({ reason: S.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: k.M }
                );
            }),
            F(this, 'handleResendVerification', () => {
                var e;
                u.Z.verifyResend();
                let t = null == (e = R.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, c.h7j)((e) =>
                        (0, r.jsx)(
                            c.ConfirmModal,
                            G(H({}, e), {
                                header: U.intl.string(U.t.LykQYm),
                                confirmText: U.intl.string(U.t.BddRzc),
                                confirmButtonColor: s.zx.Colors.BRAND,
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    children: U.intl.format(U.t.azKEPz, { email: t })
                                })
                            })
                        )
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
                    await p.Z.joinGuild(e, { source: L.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            F(this, 'handleGoBack', () => {
                (this.setState({ submitting: !0 }), (0, P.s1)().goBack());
            }),
            F(this, 'handleFollowAnnouncement', () => {
                let { channel: e } = this.props;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e('54642').then(n.bind(n, 720589));
                    return (n) => (0, r.jsx)(t, H({ channel: e }, n));
                });
            }),
            F(this, 'closeLurkerModeUpsellPopout', () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            F(this, 'renderLurkerModeUpsellPopout', () => {
                let { guild: e } = this.props;
                return (
                    a()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, r.jsx)(E.Z, {
                        type: E.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            F(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === _.wB.APPROVED;
                if (null == e || null == t || !n || (0, g.d3)(t)) return null;
                let i = () => {
                    m.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, r.jsx)(c.u_l, {
                    renderModal: (t) =>
                        (0, r.jsx)(
                            x.Z,
                            G(H({}, t), {
                                onAccept: i,
                                guildName: e.name
                            })
                        ),
                    onCloseRequest: i
                });
            }));
    }
}
function z(e) {
    var t, n;
    let { channel: i, children: l } = e,
        a = i.getGuildId(),
        s = (0, o.e7)([N.Z], () => N.Z.getGuild(a)),
        c = (0, o.e7)([A.Z], () => A.Z.getCheck(a)),
        u = i.type === L.d4z.GUILD_ANNOUNCEMENT && null != s && s.features.has(L.oNc.NEWS),
        d = (0, o.e7)([Z.Z], () => (u ? Z.Z.getFollowerStatsForChannel(i.id) : null)),
        p = (0, o.e7)([j.Z], () => j.Z.isLurking(a)),
        f = (0, o.e7)([R.default], () => R.default.getCurrentUser()),
        m = null != (t = null == f ? void 0 : f.isStaff()) && t,
        g = (0, o.e7)([T.ZP], () => {
            var e, t;
            return null != f && null != (t = null == (e = T.ZP.getMember(a, f.id)) ? void 0 : e.isPending) && t;
        }),
        b = !!(0, y.Dc)(s),
        x = (0, o.e7)([v.Z], () => v.Z.shouldShowPopout(a)),
        O = (0, o.e7)([w.Z], () => w.Z.can(L.Plq.SEND_MESSAGES, i)),
        E = (0, o.e7)([C.Z], () => C.Z.getRequest(a)),
        S = G(H({}, c), {
            guild: s,
            isLurking: p,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: x,
            showLurkerModeUpsellPopout: p && null != s && M.Uu(L.Plq.SEND_MESSAGES, i),
            theme: I.Z.theme,
            canSendMessages: O,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: b,
            showMemberVerificationModal: g && b,
            guildJoinRequestStatus: null != (n = null == E ? void 0 : E.applicationStatus) ? n : _.wB.STARTED,
            guildJoinRequest: E,
            useReducedMotion: h.Z.useReducedMotion,
            isStaff: m
        });
    return (0, r.jsx)(
        V,
        G(H({}, S), {
            channel: i,
            children: l
        })
    );
}
