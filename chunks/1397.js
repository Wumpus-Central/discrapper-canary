n.d(t, { Z: () => Y }), n(47120);
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
    f = n(645896),
    m = n(353093),
    g = n(717057),
    b = n(693546),
    _ = n(881952),
    C = n(305325),
    y = n(246364),
    x = n(983736),
    v = n(937111),
    j = n(270801),
    O = n(652730),
    E = n(41776),
    N = n(657352),
    I = n(33154),
    P = n(144114),
    S = n(703656),
    Z = n(210887),
    T = n(237904),
    A = n(271383),
    w = n(430824),
    R = n(607744),
    M = n(496675),
    k = n(594174),
    L = n(700785),
    D = n(862679),
    W = n(981631),
    U = n(815660),
    B = n(388032),
    H = n(628829);
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
function V(e, t) {
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
class z extends i.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && u.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: r, clanInfo: i } = this.props;
        if (!r && !e.shouldShowLurkerModeSuccessPopout && t && null != n) {
            if ((0, m.EJ)(n) && null == i) return;
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
        }
    }
    render() {
        let { isFollowable: e, isLurking: t, notClaimed: l, notPhoneVerified: o, notEmailVerified: a, newMember: c, memberDeadline: u, newAccount: d, accountDeadline: p, theme: h, children: f, canSendMessages: m, channelFollowingUsersSeen: g, showLurkerModeUpsellPopout: b, showMemberVerificationModal: _, useReducedMotion: C, isStaff: x, guildJoinRequest: v } = this.props,
            { shouldShowLurkerModeUpsellPopout: j, shouldShowLurkerModeSuccessPopout: O } = this.state,
            E = {
                theme: h,
                useReducedMotion: C
            };
        if (e && !m) {
            if (((E.message = B.NW.string(B.t.Hl0Mqq)), null != g && g >= 1000)) {
                let e = 1000 * Math.floor(g / 1000);
                E.subtitle = B.NW.formatToPlainString(B.t.C5bgrK, { count: e.toLocaleString() });
            }
            (E.buttonText = B.NW.string(B.t['3aOv+v'])), (E.onButtonClick = this.handleFollowAnnouncement), (E.imageSrc = n(485195)), t && ((E.onSecondaryButtonClick = this.handleJoinServer), (E.secondaryButtonText = B.NW.string(B.t['RLch7+'])));
        } else if (l) (E.message = B.NW.string(B.t['Eg3/c3'])), (E.buttonText = B.NW.string(B.t.fiNVio)), (E.onButtonClick = _ ? this.handleShowMemberVerification : this.handleClaimAccount), (E.imageSrc = n(102811));
        else if (_)
            switch (null == v ? void 0 : v.applicationStatus) {
                case y.wB.SUBMITTED:
                    (E.message = B.NW.string(B.t['5iLvS0'])), (E.subtitle = B.NW.string(B.t.FdsK4u)), (E.buttonText = B.NW.string(B.t.mqtdmZ)), (E.onButtonClick = this.handleCancelApplication), (E.imageSrc = n(281958));
                    break;
                case y.wB.REJECTED:
                    (E.message = B.NW.string(B.t.lk30cX)), (E.buttonText = B.NW.string(B.t['8RrsHh'])), (E.onButtonClick = this.handleViewApplicationRejection), (E.imageSrc = n(809844));
                    break;
                default:
                    (E.message = B.NW.string(B.t.rEBKvr)),
                        (E.buttonText = B.NW.string(B.t['r8/DT0'])),
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
        else o && !x ? ((E.message = B.NW.string(B.t['2dThMD'])), (E.buttonText = B.NW.string(B.t['50gfOj'])), (E.onButtonClick = this.handleVerifyPhone), (E.imageSrc = n(98063))) : a ? ((E.message = B.NW.string(B.t.FkGPS0)), (E.buttonText = B.NW.string(B.t.lm1UKi)), (E.onButtonClick = this.handleResendVerification), (E.imageSrc = n(102811))) : c ? ((E.message = B.NW.formatToPlainString(B.t.IH7RMD, { min: W.YeM.MEMBER_AGE })), (E.countdown = u)) : d && ((E.message = B.NW.formatToPlainString(B.t['2JA2GB'], { min: W.YeM.ACCOUNT_AGE })), (E.countdown = p));
        return (0, r.jsx)(s.yRy, {
            position: 'top',
            align: 'left',
            shouldShow: O,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, r.jsx)(
                    D.Z,
                    V(G({}, E), {
                        children: (0, r.jsxs)(i.Fragment, {
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                b
                                    ? (0, r.jsx)(s.yRy, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: j,
                                          position: 'top',
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  s.P3F,
                                                  V(G({ innerRef: this.upsellTargetRef }, e), {
                                                      className: H.clickableChannelTextArea,
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
            F(this, 'upsellTargetRef', i.createRef()),
            F(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    o()(null != n, 'This guildID cannot be null'),
                    (0, r.jsx)(N.Z, {
                        onClose: t,
                        guild: n
                    })
                );
            }),
            F(this, 'handleCancelApplication', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, s.h7j)((t) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            V(
                                G(
                                    {
                                        header: B.NW.string(B.t.aIz1oa),
                                        confirmText: B.NW.string(B.t['cY+Ooa']),
                                        cancelText: B.NW.string(B.t['ETE/oK']),
                                        onConfirm: () => b.Z.removeGuildJoinRequest(e.id),
                                        confirmButtonColor: s.zxk.Colors.BRAND
                                    },
                                    t
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        children: B.NW.string(B.t['13tjTU'])
                                    })
                                }
                            )
                        )
                    );
            }),
            F(this, 'handleViewApplicationRejection', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, s.ZDy)(async () => {
                        let { default: t } = await n.e('3378').then(n.bind(n, 76075));
                        return (n) => (0, r.jsx)(t, G({ guildId: e.id }, n));
                    });
            }),
            F(this, 'handleShowMemberVerification', () => {
                let { guild: e } = this.props;
                null != e && (0, C.hk)(e.id);
            }),
            F(this, 'handleClaimAccount', () => {
                h.j();
            }),
            F(this, 'handleVerifyPhone', () => {
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('84575')]).then(n.bind(n, 607018));
                        return (t) => (0, r.jsx)(e, G({ reason: P.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: U.M }
                );
            }),
            F(this, 'handleResendVerification', () => {
                var e;
                c.Z.verifyResend();
                let t = null == (e = k.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            V(G({}, e), {
                                header: B.NW.string(B.t.LykQYm),
                                confirmText: B.NW.string(B.t.BddRzc),
                                confirmButtonColor: s.zxk.Colors.BRAND,
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    children: B.NW.format(B.t.azKEPz, { email: t })
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
                    await d.Z.joinGuild(e, { source: W.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            F(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, S.s1)().goBack();
            }),
            F(this, 'handleFollowAnnouncement', () => {
                let { channel: e } = this.props;
                (0, s.ZDy)(async () => {
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
                    o()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, r.jsx)(I.Z, {
                        type: I.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            F(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === y.wB.APPROVED;
                if (null == e || null == t || !n || (0, _.d3)(t)) return null;
                let i = () => {
                    b.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, m.EJ)(e)
                    ? (0, r.jsx)(s.u_l, {
                          renderModal: (t) =>
                              (0, r.jsx)(
                                  g.default,
                                  V(G({}, t), {
                                      onAccept: i,
                                      guildId: e.id
                                  })
                              ),
                          onCloseRequest: i
                      })
                    : (0, r.jsx)(s.u_l, {
                          renderModal: (t) =>
                              (0, r.jsx)(
                                  j.Z,
                                  V(G({}, t), {
                                      onAccept: i,
                                      guildName: e.name
                                  })
                              ),
                          onCloseRequest: i
                      });
            });
    }
}
function Y(e) {
    var t, n;
    let { channel: l, children: o } = e,
        s = l.getGuildId(),
        c = (0, a.e7)([w.Z], () => w.Z.getGuild(s)),
        u = (0, a.e7)([R.Z], () => R.Z.getCheck(s)),
        d = l.type === W.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(W.oNc.NEWS),
        h = (0, a.e7)([T.Z], () => (d ? T.Z.getFollowerStatsForChannel(l.id) : null)),
        g = (0, a.e7)([E.Z], () => E.Z.isLurking(s)),
        b = (0, a.e7)([k.default], () => k.default.getCurrentUser()),
        C = null != (t = null == b ? void 0 : b.isStaff()) && t,
        j = (0, a.e7)([A.ZP], () => {
            var e, t;
            return null != b && null != (t = null == (e = A.ZP.getMember(s, b.id)) ? void 0 : e.isPending) && t;
        }),
        N = !!(0, x.Dc)(c),
        I = (j || u.notClaimed) && N,
        P = (0, a.e7)([O.Z], () => O.Z.shouldShowPopout(s)),
        S = (0, a.e7)([M.Z], () => M.Z.can(W.Plq.SEND_MESSAGES, l)),
        D = (0, a.e7)([v.Z], () => v.Z.getRequest(s)),
        [U, B] = (0, f.L_)(s),
        H = (0, f.Cc)(s),
        F = (null == D ? void 0 : D.applicationStatus) === y.wB.APPROVED,
        Y = i.useRef(B);
    i.useEffect(() => {
        Y.current = B;
    }),
        i.useEffect(() => {
            !(0, m.EJ)(c) || !F || (0, _.d3)(D) || (null == H && Y.current());
        }, [c, F, D, H]);
    let q = V(G({}, u), {
        guild: c,
        isLurking: g,
        isFollowable: d,
        shouldShowLurkerModeSuccessPopout: P,
        showLurkerModeUpsellPopout: g && null != c && L.Uu(W.Plq.SEND_MESSAGES, l),
        theme: Z.Z.theme,
        canSendMessages: S,
        channelFollowingUsersSeen: null != h ? h.usersSeenEver : null,
        hasVerificationGate: N,
        showMemberVerificationModal: I,
        guildJoinRequestStatus: null != (n = null == D ? void 0 : D.applicationStatus) ? n : y.wB.STARTED,
        guildJoinRequest: D,
        useReducedMotion: p.Z.useReducedMotion,
        isStaff: C,
        isLoading: U,
        clanInfo: H
    });
    return (0, r.jsx)(
        z,
        V(G({}, q), {
            channel: l,
            children: o
        })
    );
}
