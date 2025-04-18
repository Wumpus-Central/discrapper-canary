n.d(t, { Z: () => H }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
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
    C = n(270801),
    x = n(652730),
    v = n(41776),
    j = n(657352),
    O = n(33154),
    E = n(144114),
    N = n(703656),
    I = n(210887),
    P = n(606956),
    S = n(271383),
    Z = n(430824),
    T = n(607744),
    A = n(496675),
    w = n(594174),
    R = n(700785),
    k = n(862679),
    M = n(981631),
    L = n(815660),
    D = n(388032),
    W = n(545462);
function U(e, t, n) {
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
function B(e) {
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
                U(e, t, n[t]);
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
class F extends i.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && u.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: r } = this.props;
        r || e.shouldShowLurkerModeSuccessPopout || !t || null == n || this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
    }
    render() {
        let { isFollowable: e, isLurking: t, notClaimed: l, notPhoneVerified: o, notEmailVerified: a, newMember: c, memberDeadline: u, newAccount: d, accountDeadline: p, theme: h, children: f, canSendMessages: m, channelFollowingUsersSeen: g, showLurkerModeUpsellPopout: _, showMemberVerificationModal: y, useReducedMotion: C, isStaff: x, guildJoinRequest: v } = this.props,
            { shouldShowLurkerModeUpsellPopout: j, shouldShowLurkerModeSuccessPopout: O } = this.state,
            E = {
                theme: h,
                useReducedMotion: C
            };
        if (e && !m) {
            if (((E.message = D.NW.string(D.t.Hl0Mqq)), null != g && g >= 1000)) {
                let e = 1000 * Math.floor(g / 1000);
                E.subtitle = D.NW.formatToPlainString(D.t.C5bgrK, { count: e.toLocaleString() });
            }
            (E.buttonText = D.NW.string(D.t['3aOv+v'])), (E.onButtonClick = this.handleFollowAnnouncement), (E.imageSrc = n(485195)), t && ((E.onSecondaryButtonClick = this.handleJoinServer), (E.secondaryButtonText = D.NW.string(D.t['RLch7+'])));
        } else if (l) (E.message = D.NW.string(D.t['Eg3/c3'])), (E.buttonText = D.NW.string(D.t.fiNVio)), (E.onButtonClick = y ? this.handleShowMemberVerification : this.handleClaimAccount), (E.imageSrc = n(102811));
        else if (y)
            switch (null == v ? void 0 : v.applicationStatus) {
                case b.wB.SUBMITTED:
                    (E.message = D.NW.string(D.t['5iLvS0'])), (E.subtitle = D.NW.string(D.t.FdsK4u)), (E.buttonText = D.NW.string(D.t.mqtdmZ)), (E.onButtonClick = this.handleCancelApplication), (E.imageSrc = n(281958));
                    break;
                case b.wB.REJECTED:
                    (E.message = D.NW.string(D.t.lk30cX)), (E.buttonText = D.NW.string(D.t['8RrsHh'])), (E.onButtonClick = this.handleViewApplicationRejection), (E.imageSrc = n(809844));
                    break;
                default:
                    (E.message = D.NW.string(D.t.rEBKvr)),
                        (E.buttonText = D.NW.string(D.t['r8/DT0'])),
                        (E.buttonColor = s.Ttl.BRAND),
                        (E.onButtonClick = this.handleShowMemberVerification),
                        (E.animationSrc = () =>
                            n
                                .e('43841')
                                .then(n.t.bind(n, 737848, 19))
                                .then((e) => {
                                    let { default: t } = e;
                                    return t;
                                }));
            }
        else o && !x ? ((E.message = D.NW.string(D.t['2dThMD'])), (E.buttonText = D.NW.string(D.t['50gfOj'])), (E.onButtonClick = this.handleVerifyPhone), (E.imageSrc = n(98063))) : a ? ((E.message = D.NW.string(D.t.FkGPS0)), (E.buttonText = D.NW.string(D.t.lm1UKi)), (E.onButtonClick = this.handleResendVerification), (E.imageSrc = n(102811))) : c ? ((E.message = D.NW.formatToPlainString(D.t.IH7RMD, { min: M.YeM.MEMBER_AGE })), (E.countdown = u)) : d && ((E.message = D.NW.formatToPlainString(D.t['2JA2GB'], { min: M.YeM.ACCOUNT_AGE })), (E.countdown = p));
        return (0, r.jsx)(s.yRy, {
            position: 'top',
            align: 'left',
            shouldShow: O,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, r.jsx)(
                    k.Z,
                    G(B({}, E), {
                        children: (0, r.jsxs)(i.Fragment, {
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                _
                                    ? (0, r.jsx)(s.yRy, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: j,
                                          position: 'top',
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  s.P3F,
                                                  G(B({ innerRef: this.upsellTargetRef }, e), {
                                                      className: W.clickableChannelTextArea,
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
            U(this, 'state', {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1
            }),
            U(this, 'upsellTargetRef', i.createRef()),
            U(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    o()(null != n, 'This guildID cannot be null'),
                    (0, r.jsx)(j.Z, {
                        onClose: t,
                        guild: n
                    })
                );
            }),
            U(this, 'handleCancelApplication', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, s.h7j)((t) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            G(
                                B(
                                    {
                                        header: D.NW.string(D.t.aIz1oa),
                                        confirmText: D.NW.string(D.t['cY+Ooa']),
                                        cancelText: D.NW.string(D.t['ETE/oK']),
                                        onConfirm: () => f.Z.removeGuildJoinRequest(e.id),
                                        confirmButtonColor: s.zxk.Colors.BRAND
                                    },
                                    t
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        children: D.NW.string(D.t['13tjTU'])
                                    })
                                }
                            )
                        )
                    );
            }),
            U(this, 'handleViewApplicationRejection', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, s.ZDy)(async () => {
                        let { default: t } = await n.e('3378').then(n.bind(n, 76075));
                        return (n) => (0, r.jsx)(t, B({ guildId: e.id }, n));
                    });
            }),
            U(this, 'handleShowMemberVerification', () => {
                let { guild: e } = this.props;
                null != e && (0, g.hk)(e.id);
            }),
            U(this, 'handleClaimAccount', () => {
                h.j();
            }),
            U(this, 'handleVerifyPhone', () => {
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('17078')]).then(n.bind(n, 607018));
                        return (t) => (0, r.jsx)(e, B({ reason: E.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: L.M }
                );
            }),
            U(this, 'handleResendVerification', () => {
                var e;
                c.Z.verifyResend();
                let t = null == (e = w.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            G(B({}, e), {
                                header: D.NW.string(D.t.LykQYm),
                                confirmText: D.NW.string(D.t.BddRzc),
                                confirmButtonColor: s.zxk.Colors.BRAND,
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    children: D.NW.format(D.t.azKEPz, { email: t })
                                })
                            })
                        )
                    );
            }),
            U(this, 'handleTextAreaClick', () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            U(this, 'handleJoinServer', async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await d.Z.joinGuild(e, { source: M.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            U(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, N.s1)().goBack();
            }),
            U(this, 'handleFollowAnnouncement', () => {
                let { channel: e } = this.props;
                (0, s.ZDy)(async () => {
                    let { default: t } = await n.e('54642').then(n.bind(n, 720589));
                    return (n) => (0, r.jsx)(t, B({ channel: e }, n));
                });
            }),
            U(this, 'closeLurkerModeUpsellPopout', () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            U(this, 'renderLurkerModeUpsellPopout', () => {
                let { guild: e } = this.props;
                return (
                    o()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, r.jsx)(O.Z, {
                        type: O.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            U(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === b.wB.APPROVED;
                if (null == e || null == t || !n || (0, m.d3)(t)) return null;
                let i = () => {
                    f.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, r.jsx)(s.u_l, {
                    renderModal: (t) =>
                        (0, r.jsx)(
                            C.Z,
                            G(B({}, t), {
                                onAccept: i,
                                guildName: e.name
                            })
                        ),
                    onCloseRequest: i
                });
            });
    }
}
function H(e) {
    var t, n;
    let { channel: i, children: l } = e,
        o = i.getGuildId(),
        s = (0, a.e7)([Z.Z], () => Z.Z.getGuild(o)),
        c = (0, a.e7)([T.Z], () => T.Z.getCheck(o)),
        u = i.type === M.d4z.GUILD_ANNOUNCEMENT && null != s && s.hasFeature(M.oNc.NEWS),
        d = (0, a.e7)([P.Z], () => (u ? P.Z.getFollowerStatsForChannel(i.id) : null)),
        h = (0, a.e7)([v.Z], () => v.Z.isLurking(o)),
        f = (0, a.e7)([w.default], () => w.default.getCurrentUser()),
        m = null != (t = null == f ? void 0 : f.isStaff()) && t,
        g = (0, a.e7)([S.ZP], () => {
            var e, t;
            return null != f && null != (t = null == (e = S.ZP.getMember(o, f.id)) ? void 0 : e.isPending) && t;
        }),
        C = !!(0, _.Dc)(s),
        j = (g || c.notClaimed) && C,
        O = (0, a.e7)([x.Z], () => x.Z.shouldShowPopout(o)),
        E = (0, a.e7)([A.Z], () => A.Z.can(M.Plq.SEND_MESSAGES, i)),
        N = (0, a.e7)([y.Z], () => y.Z.getRequest(o)),
        k = G(B({}, c), {
            guild: s,
            isLurking: h,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: O,
            showLurkerModeUpsellPopout: h && null != s && R.Uu(M.Plq.SEND_MESSAGES, i),
            theme: I.Z.theme,
            canSendMessages: E,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: C,
            showMemberVerificationModal: j,
            guildJoinRequestStatus: null != (n = null == N ? void 0 : N.applicationStatus) ? n : b.wB.STARTED,
            guildJoinRequest: N,
            useReducedMotion: p.Z.useReducedMotion,
            isStaff: m
        });
    return (0, r.jsx)(
        F,
        G(B({}, k), {
            channel: i,
            children: l
        })
    );
}
