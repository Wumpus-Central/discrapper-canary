n.d(t, { Z: () => z }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(844168),
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
    I = n(144114),
    P = n(703656),
    S = n(210887),
    Z = n(606956),
    N = n(271383),
    T = n(430824),
    A = n(607744),
    w = n(496675),
    R = n(594174),
    M = n(700785),
    k = n(862679),
    D = n(981631),
    L = n(815660),
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
function G(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
        let { isFollowable: e, isLurking: t, notClaimed: i, notPhoneVerified: l, notEmailVerified: a, newMember: o, memberDeadline: u, newAccount: d, accountDeadline: p, theme: h, children: f, canSendMessages: m, channelFollowingUsersSeen: g, showLurkerModeUpsellPopout: b, showMemberVerificationModal: y, useReducedMotion: C, isStaff: x, guildJoinRequest: v } = this.props,
            { shouldShowLurkerModeUpsellPopout: j, shouldShowLurkerModeSuccessPopout: O } = this.state,
            E = {
                theme: h,
                useReducedMotion: C
            },
            I = s.O.getCurrentConfig({ location: 'guild-verification' }, { autoTrackExposure: !0 }).enabled;
        if (e && !m) {
            if (((E.message = U.intl.string(U.t.Hl0Mqq)), null != g && g >= 1000)) {
                let e = 1000 * Math.floor(g / 1000);
                E.subtitle = U.intl.formatToPlainString(U.t.C5bgrK, { count: e.toLocaleString() });
            }
            (E.buttonText = U.intl.string(U.t['3aOv+v'])), (E.onButtonClick = this.handleFollowAnnouncement), (E.imageSrc = I ? null : n(485195)), t && ((E.onSecondaryButtonClick = this.handleJoinServer), (E.secondaryButtonText = U.intl.string(U.t['RLch7+'])));
        } else if (i) (E.message = U.intl.string(U.t['Eg3/c3'])), (E.buttonText = U.intl.string(U.t.fiNVio)), (E.onButtonClick = y ? this.handleShowMemberVerification : this.handleClaimAccount), (E.imageSrc = I ? null : n(102811));
        else if (y)
            switch (null == v ? void 0 : v.applicationStatus) {
                case _.wB.SUBMITTED:
                    (E.message = U.intl.string(U.t['5iLvS0'])), (E.subtitle = U.intl.string(U.t.FdsK4u)), (E.buttonText = U.intl.string(U.t.mqtdmZ)), (E.onButtonClick = this.handleCancelApplication), (E.imageSrc = I ? null : n(281958));
                    break;
                case _.wB.REJECTED:
                    (E.message = U.intl.string(U.t.lk30cX)), (E.buttonText = U.intl.string(U.t['8RrsHh'])), (E.onButtonClick = this.handleViewApplicationRejection), (E.imageSrc = I ? null : n(809844));
                    break;
                default:
                    (E.message = U.intl.string(U.t.rEBKvr)),
                        (E.buttonText = U.intl.string(U.t['r8/DT0'])),
                        (E.buttonColor = c.Ttl.BRAND),
                        (E.onButtonClick = this.handleShowMemberVerification),
                        I ||
                            (E.animationSrc = () =>
                                n
                                    .e('43841')
                                    .then(n.t.bind(n, 737848, 19))
                                    .then((e) => {
                                        let { default: t } = e;
                                        return t;
                                    }));
            }
        else l && !x ? ((E.message = U.intl.string(U.t['2dThMD'])), (E.buttonText = U.intl.string(U.t['50gfOj'])), (E.onButtonClick = this.handleVerifyPhone), (E.imageSrc = I ? null : n(98063))) : a ? ((E.message = U.intl.string(U.t.FkGPS0)), (E.buttonText = U.intl.string(U.t.lm1UKi)), (E.onButtonClick = this.handleResendVerification), (E.imageSrc = I ? null : n(102811))) : o ? ((E.message = U.intl.formatToPlainString(U.t.IH7RMD, { min: D.YeM.MEMBER_AGE })), (E.countdown = u)) : d && ((E.message = U.intl.formatToPlainString(U.t['2JA2GB'], { min: D.YeM.ACCOUNT_AGE })), (E.countdown = p));
        return (0, r.jsx)(c.yRy, {
            targetElementRef: this.textAreaContainerRef,
            position: 'top',
            align: 'left',
            shouldShow: O,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, r.jsx)(
                    k.Z,
                    H(G({}, E), {
                        children: (0, r.jsxs)('div', {
                            ref: this.textAreaContainerRef,
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                b
                                    ? (0, r.jsx)(c.yRy, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: j,
                                          position: 'top',
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.P3F,
                                                  H(G({ innerRef: this.upsellTargetRef }, e), {
                                                      className: B.clickableChannelTextArea,
                                                      onClick: this.handleTextAreaClick,
                                                      children: f
                                                  })
                                              )
                                      })
                                    : f
                            ]
                        })
                    })
                )
        });
    }
    constructor(...e) {
        super(...e),
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
                            H(
                                G(
                                    {
                                        header: U.intl.string(U.t.aIz1oa),
                                        confirmText: U.intl.string(U.t['cY+Ooa']),
                                        cancelText: U.intl.string(U.t['ETE/oK']),
                                        onConfirm: () => m.Z.removeGuildJoinRequest(e.id),
                                        confirmButtonColor: c.zxk.Colors.BRAND
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
                        return (n) => (0, r.jsx)(t, G({ guildId: e.id }, n));
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
                        return (t) => (0, r.jsx)(e, G({ reason: I.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: L.M }
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
                            H(G({}, e), {
                                header: U.intl.string(U.t.LykQYm),
                                confirmText: U.intl.string(U.t.BddRzc),
                                confirmButtonColor: c.zxk.Colors.BRAND,
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
                    await p.Z.joinGuild(e, { source: D.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            F(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, P.s1)().goBack();
            }),
            F(this, 'handleFollowAnnouncement', () => {
                let { channel: e } = this.props;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e('54642').then(n.bind(n, 720589));
                    return (n) => (0, r.jsx)(t, G({ channel: e }, n));
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
                            H(G({}, t), {
                                onAccept: i,
                                guildName: e.name
                            })
                        ),
                    onCloseRequest: i
                });
            });
    }
}
function z(e) {
    var t, n;
    let { channel: i, children: l } = e,
        a = i.getGuildId(),
        s = (0, o.e7)([T.Z], () => T.Z.getGuild(a)),
        c = (0, o.e7)([A.Z], () => A.Z.getCheck(a)),
        u = i.type === D.d4z.GUILD_ANNOUNCEMENT && null != s && s.hasFeature(D.oNc.NEWS),
        d = (0, o.e7)([Z.Z], () => (u ? Z.Z.getFollowerStatsForChannel(i.id) : null)),
        p = (0, o.e7)([j.Z], () => j.Z.isLurking(a)),
        f = (0, o.e7)([R.default], () => R.default.getCurrentUser()),
        m = null != (t = null == f ? void 0 : f.isStaff()) && t,
        g = (0, o.e7)([N.ZP], () => {
            var e, t;
            return null != f && null != (t = null == (e = N.ZP.getMember(a, f.id)) ? void 0 : e.isPending) && t;
        }),
        b = !!(0, y.Dc)(s),
        x = (0, o.e7)([v.Z], () => v.Z.shouldShowPopout(a)),
        O = (0, o.e7)([w.Z], () => w.Z.can(D.Plq.SEND_MESSAGES, i)),
        E = (0, o.e7)([C.Z], () => C.Z.getRequest(a)),
        I = H(G({}, c), {
            guild: s,
            isLurking: p,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: x,
            showLurkerModeUpsellPopout: p && null != s && M.Uu(D.Plq.SEND_MESSAGES, i),
            theme: S.Z.theme,
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
        H(G({}, I), {
            channel: i,
            children: l
        })
    );
}
