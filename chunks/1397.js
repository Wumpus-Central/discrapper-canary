n.d(t, { Z: () => q }), n(47120);
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
    v = n(246364),
    y = n(983736),
    x = n(937111),
    j = n(270801),
    O = n(652730),
    N = n(41776),
    E = n(657352),
    P = n(33154),
    I = n(144114),
    S = n(703656),
    Z = n(210887),
    T = n(237904),
    A = n(271383),
    w = n(430824),
    R = n(607744),
    k = n(496675),
    M = n(594174),
    L = n(700785),
    D = n(862679),
    W = n(981631),
    U = n(815660),
    B = n(388032),
    F = n(652958);
function H(e, t, n) {
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
                H(e, t, n[t]);
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
        let { isFollowable: e, isLurking: t, notClaimed: l, notPhoneVerified: o, notEmailVerified: a, newMember: c, memberDeadline: u, newAccount: d, accountDeadline: p, theme: h, children: f, canSendMessages: m, channelFollowingUsersSeen: g, showLurkerModeUpsellPopout: b, showMemberVerificationModal: _, useReducedMotion: C, isStaff: y, guildJoinRequest: x } = this.props,
            { shouldShowLurkerModeUpsellPopout: j, shouldShowLurkerModeSuccessPopout: O } = this.state,
            N = {
                theme: h,
                useReducedMotion: C
            };
        if (e && !m) {
            if (((N.message = B.NW.string(B.t.Hl0Mqq)), null != g && g >= 1000)) {
                let e = 1000 * Math.floor(g / 1000);
                N.subtitle = B.NW.formatToPlainString(B.t.C5bgrK, { count: e.toLocaleString() });
            }
            (N.buttonText = B.NW.string(B.t['3aOv+v'])), (N.onButtonClick = this.handleFollowAnnouncement), (N.imageSrc = n(485195)), t && ((N.onSecondaryButtonClick = this.handleJoinServer), (N.secondaryButtonText = B.NW.string(B.t['RLch7+'])));
        } else if (l) (N.message = B.NW.string(B.t['Eg3/c3'])), (N.buttonText = B.NW.string(B.t.fiNVio)), (N.onButtonClick = _ ? this.handleShowMemberVerification : this.handleClaimAccount), (N.imageSrc = n(102811));
        else if (_)
            switch (null == x ? void 0 : x.applicationStatus) {
                case v.wB.SUBMITTED:
                    (N.message = B.NW.string(B.t['5iLvS0'])), (N.subtitle = B.NW.string(B.t.FdsK4u)), (N.buttonText = B.NW.string(B.t.mqtdmZ)), (N.onButtonClick = this.handleCancelApplication), (N.imageSrc = n(281958));
                    break;
                case v.wB.REJECTED:
                    (N.message = B.NW.string(B.t.lk30cX)), (N.buttonText = B.NW.string(B.t['8RrsHh'])), (N.onButtonClick = this.handleViewApplicationRejection), (N.imageSrc = n(809844));
                    break;
                default:
                    (N.message = B.NW.string(B.t.rEBKvr)),
                        (N.buttonText = B.NW.string(B.t['r8/DT0'])),
                        (N.buttonColor = s.Ttl.BRAND),
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
        else o && !y ? ((N.message = B.NW.string(B.t['2dThMD'])), (N.buttonText = B.NW.string(B.t['50gfOj'])), (N.onButtonClick = this.handleVerifyPhone), (N.imageSrc = n(98063))) : a ? ((N.message = B.NW.string(B.t.FkGPS0)), (N.buttonText = B.NW.string(B.t.lm1UKi)), (N.onButtonClick = this.handleResendVerification), (N.imageSrc = n(102811))) : c ? ((N.message = B.NW.formatToPlainString(B.t.IH7RMD, { min: W.YeM.MEMBER_AGE })), (N.countdown = u)) : d && ((N.message = B.NW.formatToPlainString(B.t['2JA2GB'], { min: W.YeM.ACCOUNT_AGE })), (N.countdown = p));
        return (0, r.jsx)(s.yRy, {
            position: 'top',
            align: 'left',
            shouldShow: O,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, r.jsx)(
                    D.Z,
                    V(G({}, N), {
                        children: (0, r.jsxs)(i.Fragment, {
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                b
                                    ? (0, r.jsx)(s.yRy, {
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: j,
                                          position: 'top',
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  s.P3F,
                                                  V(G({}, e), {
                                                      className: F.clickableChannelTextArea,
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
            H(this, 'state', {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1
            }),
            H(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    o()(null != n, 'This guildID cannot be null'),
                    (0, r.jsx)(E.Z, {
                        onClose: t,
                        guild: n
                    })
                );
            }),
            H(this, 'handleCancelApplication', () => {
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
            H(this, 'handleViewApplicationRejection', () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, s.ZDy)(async () => {
                        let { default: t } = await n.e('3378').then(n.bind(n, 76075));
                        return (n) => (0, r.jsx)(t, G({ guildId: e.id }, n));
                    });
            }),
            H(this, 'handleShowMemberVerification', () => {
                let { guild: e } = this.props;
                null != e && (0, C.hk)(e.id);
            }),
            H(this, 'handleClaimAccount', () => {
                h.j();
            }),
            H(this, 'handleVerifyPhone', () => {
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('42936')]).then(n.bind(n, 607018));
                        return (t) => (0, r.jsx)(e, G({ reason: I.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: U.M }
                );
            }),
            H(this, 'handleResendVerification', () => {
                var e;
                c.Z.verifyResend();
                let t = null === (e = M.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
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
            H(this, 'handleTextAreaClick', () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            H(this, 'handleJoinServer', async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await d.Z.joinGuild(e, { source: W.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            H(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, S.s1)().goBack();
            }),
            H(this, 'handleFollowAnnouncement', () => {
                let { channel: e } = this.props;
                (0, s.ZDy)(async () => {
                    let { default: t } = await n.e('54642').then(n.bind(n, 720589));
                    return (n) => (0, r.jsx)(t, G({ channel: e }, n));
                });
            }),
            H(this, 'closeLurkerModeUpsellPopout', () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            H(this, 'renderLurkerModeUpsellPopout', () => {
                let { guild: e } = this.props;
                return (
                    o()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, r.jsx)(P.Z, {
                        type: P.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            H(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === v.wB.APPROVED;
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
function q(e) {
    var t, n;
    let { channel: l, children: o } = e,
        s = l.getGuildId(),
        c = (0, a.e7)([w.Z], () => w.Z.getGuild(s)),
        u = (0, a.e7)([R.Z], () => R.Z.getCheck(s)),
        d = l.type === W.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(W.oNc.NEWS),
        h = (0, a.e7)([T.Z], () => (d ? T.Z.getFollowerStatsForChannel(l.id) : null)),
        g = (0, a.e7)([N.Z], () => N.Z.isLurking(s)),
        b = (0, a.e7)([M.default], () => M.default.getCurrentUser()),
        C = null !== (t = null == b ? void 0 : b.isStaff()) && void 0 !== t && t,
        j = (0, a.e7)([A.ZP], () => {
            var e, t;
            return null != b && null !== (t = null === (e = A.ZP.getMember(s, b.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
        }),
        E = !!(0, y.Dc)(c),
        P = (j || u.notClaimed) && E,
        I = (0, a.e7)([O.Z], () => O.Z.shouldShowPopout(s)),
        S = (0, a.e7)([k.Z], () => k.Z.can(W.Plq.SEND_MESSAGES, l)),
        D = (0, a.e7)([x.Z], () => x.Z.getRequest(s)),
        [U, B] = (0, f.L_)(s),
        F = (0, f.Cc)(s),
        H = (null == D ? void 0 : D.applicationStatus) === v.wB.APPROVED,
        q = i.useRef(B);
    i.useEffect(() => {
        q.current = B;
    }),
        i.useEffect(() => {
            !(!(0, m.EJ)(c) || !H || (0, _.d3)(D)) && null == F && q.current();
        }, [c, H, D, F]);
    let Y = V(G({}, u), {
        guild: c,
        isLurking: g,
        isFollowable: d,
        shouldShowLurkerModeSuccessPopout: I,
        showLurkerModeUpsellPopout: g && null != c && L.Uu(W.Plq.SEND_MESSAGES, l),
        theme: Z.Z.theme,
        canSendMessages: S,
        channelFollowingUsersSeen: null != h ? h.usersSeenEver : null,
        hasVerificationGate: E,
        showMemberVerificationModal: P,
        guildJoinRequestStatus: null !== (n = null == D ? void 0 : D.applicationStatus) && void 0 !== n ? n : v.wB.STARTED,
        guildJoinRequest: D,
        useReducedMotion: p.Z.useReducedMotion,
        isStaff: C,
        isLoading: U,
        clanInfo: F
    });
    return (0, r.jsx)(
        z,
        V(G({}, Y), {
            channel: l,
            children: o
        })
    );
}
