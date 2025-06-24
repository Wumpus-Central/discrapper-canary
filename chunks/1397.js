n.d(t, { Z: () => V }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(893776),
    u = n(528963),
    d = n(749210),
    p = n(607070),
    h = n(391650),
    f = n(693546),
    m = n(881952),
    g = n(305325),
    b = n(246364),
    _ = n(983736),
    y = n(937111),
    x = n(270801),
    C = n(652730),
    v = n(41776),
    j = n(657352),
    O = n(33154),
    E = n(144114),
    I = n(703656),
    S = n(210887),
    P = n(606956),
    Z = n(271383),
    N = n(430824),
    T = n(607744),
    A = n(496675),
    w = n(594174),
    R = n(700785),
    M = n(862679),
    k = n(981631),
    D = n(815660),
    L = n(388032),
    U = n(628829);
function B(e, t, n) {
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
function F(e) {
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
                B(e, t, n[t]);
            });
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
class H extends i.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && u.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: r } = this.props;
        r || e.shouldShowLurkerModeSuccessPopout || !t || null == n || this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
    }
    render() {
        let { isFollowable: e, isLurking: t, notClaimed: n, notPhoneVerified: i, notEmailVerified: l, newMember: a, memberDeadline: o, newAccount: c, accountDeadline: u, theme: d, children: p, canSendMessages: h, channelFollowingUsersSeen: f, showLurkerModeUpsellPopout: m, showMemberVerificationModal: g, useReducedMotion: _, isStaff: y, guildJoinRequest: x } = this.props,
            { shouldShowLurkerModeUpsellPopout: C, shouldShowLurkerModeSuccessPopout: v } = this.state,
            j = {
                theme: d,
                useReducedMotion: _
            };
        if (e && !h) {
            if (((j.message = L.intl.string(L.t.Hl0Mqq)), null != f && f >= 1000)) {
                let e = 1000 * Math.floor(f / 1000);
                j.subtitle = L.intl.formatToPlainString(L.t.C5bgrK, { count: e.toLocaleString() });
            }
            (j.buttonText = L.intl.string(L.t['3aOv+v'])), (j.onButtonClick = this.handleFollowAnnouncement), t && ((j.onSecondaryButtonClick = this.handleJoinServer), (j.secondaryButtonText = L.intl.string(L.t['RLch7+'])));
        } else if (n) (j.message = L.intl.string(L.t['Eg3/c3'])), (j.buttonText = L.intl.string(L.t.fiNVio)), (j.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (g)
            switch (null == x ? void 0 : x.applicationStatus) {
                case b.wB.SUBMITTED:
                    (j.message = L.intl.string(L.t['5iLvS0'])), (j.subtitle = L.intl.string(L.t.FdsK4u)), (j.buttonText = L.intl.string(L.t.mqtdmZ)), (j.onButtonClick = this.handleCancelApplication);
                    break;
                case b.wB.REJECTED:
                    (j.message = L.intl.string(L.t.lk30cX)), (j.buttonText = L.intl.string(L.t['8RrsHh'])), (j.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (j.message = L.intl.string(L.t.rEBKvr)), (j.buttonText = L.intl.string(L.t['r8/DT0'])), (j.buttonColor = s.Ttl.BRAND), (j.onButtonClick = this.handleShowMemberVerification);
            }
        else i && !y ? ((j.message = L.intl.string(L.t['2dThMD'])), (j.buttonText = L.intl.string(L.t['50gfOj'])), (j.onButtonClick = this.handleVerifyPhone)) : l ? ((j.message = L.intl.string(L.t.FkGPS0)), (j.buttonText = L.intl.string(L.t.lm1UKi)), (j.onButtonClick = this.handleResendVerification)) : a ? ((j.message = L.intl.formatToPlainString(L.t.IH7RMD, { min: k.YeM.MEMBER_AGE })), (j.countdown = o)) : c && ((j.message = L.intl.formatToPlainString(L.t['2JA2GB'], { min: k.YeM.ACCOUNT_AGE })), (j.countdown = u));
        return (0, r.jsx)(s.yRy, {
            targetElementRef: this.textAreaContainerRef,
            position: 'top',
            align: 'left',
            shouldShow: v,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, r.jsx)(
                    M.Z,
                    G(F({}, j), {
                        children: (0, r.jsxs)('div', {
                            ref: this.textAreaContainerRef,
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                m
                                    ? (0, r.jsx)(s.yRy, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: C,
                                          position: 'top',
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  s.P3F,
                                                  G(F({ innerRef: this.upsellTargetRef }, e), {
                                                      className: U.clickableChannelTextArea,
                                                      onClick: this.handleTextAreaClick,
                                                      children: p
                                                  })
                                              )
                                      })
                                    : p
                            ]
                        })
                    })
                )
        });
    }
    constructor(...e) {
        super(...e),
            B(this, 'state', {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1
            }),
            B(this, 'textAreaContainerRef', i.createRef()),
            B(this, 'upsellTargetRef', i.createRef()),
            B(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    a()(null != n, 'This guildID cannot be null'),
                    (0, r.jsx)(j.Z, {
                        onClose: t,
                        guild: n
                    })
                );
            }),
            B(this, 'handleCancelApplication', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, s.h7j)((t) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            G(
                                F(
                                    {
                                        header: L.intl.string(L.t.aIz1oa),
                                        confirmText: L.intl.string(L.t['cY+Ooa']),
                                        cancelText: L.intl.string(L.t['ETE/oK']),
                                        onConfirm: () => f.Z.removeGuildJoinRequest(e.id),
                                        confirmButtonColor: s.zxk.Colors.BRAND
                                    },
                                    t
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        children: L.intl.string(L.t['13tjTU'])
                                    })
                                }
                            )
                        )
                    );
            }),
            B(this, 'handleViewApplicationRejection', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, s.ZDy)(async () => {
                        let { default: t } = await n.e('3378').then(n.bind(n, 76075));
                        return (n) => (0, r.jsx)(t, F({ guildId: e.id }, n));
                    });
            }),
            B(this, 'handleShowMemberVerification', () => {
                let { guild: e } = this.props;
                null != e && (0, g.hk)(e.id);
            }),
            B(this, 'handleClaimAccount', () => {
                h.j();
            }),
            B(this, 'handleVerifyPhone', () => {
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('84575')]).then(n.bind(n, 607018));
                        return (t) => (0, r.jsx)(e, F({ reason: E.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: D.M }
                );
            }),
            B(this, 'handleResendVerification', () => {
                var e;
                c.Z.verifyResend();
                let t = null == (e = w.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            G(F({}, e), {
                                header: L.intl.string(L.t.LykQYm),
                                confirmText: L.intl.string(L.t.BddRzc),
                                confirmButtonColor: s.zxk.Colors.BRAND,
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    children: L.intl.format(L.t.azKEPz, { email: t })
                                })
                            })
                        )
                    );
            }),
            B(this, 'handleTextAreaClick', () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            B(this, 'handleJoinServer', async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await d.Z.joinGuild(e, { source: k.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            B(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, I.s1)().goBack();
            }),
            B(this, 'handleFollowAnnouncement', () => {
                let { channel: e } = this.props;
                (0, s.ZDy)(async () => {
                    let { default: t } = await n.e('54642').then(n.bind(n, 720589));
                    return (n) => (0, r.jsx)(t, F({ channel: e }, n));
                });
            }),
            B(this, 'closeLurkerModeUpsellPopout', () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            B(this, 'renderLurkerModeUpsellPopout', () => {
                let { guild: e } = this.props;
                return (
                    a()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, r.jsx)(O.Z, {
                        type: O.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            B(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === b.wB.APPROVED;
                if (null == e || null == t || !n || (0, m.d3)(t)) return null;
                let i = () => {
                    f.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, r.jsx)(s.u_l, {
                    renderModal: (t) =>
                        (0, r.jsx)(
                            x.Z,
                            G(F({}, t), {
                                onAccept: i,
                                guildName: e.name
                            })
                        ),
                    onCloseRequest: i
                });
            });
    }
}
function V(e) {
    var t, n;
    let { channel: i, children: l } = e,
        a = i.getGuildId(),
        s = (0, o.e7)([N.Z], () => N.Z.getGuild(a)),
        c = (0, o.e7)([T.Z], () => T.Z.getCheck(a)),
        u = i.type === k.d4z.GUILD_ANNOUNCEMENT && null != s && s.hasFeature(k.oNc.NEWS),
        d = (0, o.e7)([P.Z], () => (u ? P.Z.getFollowerStatsForChannel(i.id) : null)),
        h = (0, o.e7)([v.Z], () => v.Z.isLurking(a)),
        f = (0, o.e7)([w.default], () => w.default.getCurrentUser()),
        m = null != (t = null == f ? void 0 : f.isStaff()) && t,
        g = (0, o.e7)([Z.ZP], () => {
            var e, t;
            return null != f && null != (t = null == (e = Z.ZP.getMember(a, f.id)) ? void 0 : e.isPending) && t;
        }),
        x = !!(0, _.Dc)(s),
        j = (0, o.e7)([C.Z], () => C.Z.shouldShowPopout(a)),
        O = (0, o.e7)([A.Z], () => A.Z.can(k.Plq.SEND_MESSAGES, i)),
        E = (0, o.e7)([y.Z], () => y.Z.getRequest(a)),
        I = G(F({}, c), {
            guild: s,
            isLurking: h,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: j,
            showLurkerModeUpsellPopout: h && null != s && R.Uu(k.Plq.SEND_MESSAGES, i),
            theme: S.Z.theme,
            canSendMessages: O,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: x,
            showMemberVerificationModal: g && x,
            guildJoinRequestStatus: null != (n = null == E ? void 0 : E.applicationStatus) ? n : b.wB.STARTED,
            guildJoinRequest: E,
            useReducedMotion: p.Z.useReducedMotion,
            isStaff: m
        });
    return (0, r.jsx)(
        H,
        G(F({}, I), {
            channel: i,
            children: l
        })
    );
}
