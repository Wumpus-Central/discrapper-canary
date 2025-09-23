n.d(t, { Z: () => q }), n(388685);
var r = n(951288),
    i = n(647438),
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
    y = n(246364),
    C = n(983736),
    _ = n(937111),
    v = n(270801),
    x = n(652730),
    O = n(41776),
    j = n(657352),
    E = n(33154),
    S = n(144114),
    P = n(703656),
    I = n(210887),
    Z = n(606956),
    T = n(271383),
    N = n(430824),
    A = n(607744),
    w = n(496675),
    M = n(594174),
    R = n(700785),
    k = n(413251),
    L = n(862679),
    D = n(981631),
    U = n(701488),
    B = n(815660),
    F = n(388032),
    V = n(989028);
function H(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                H(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
class W extends i.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && d.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: r } = this.props;
        r ||
            e.shouldShowLurkerModeSuccessPopout ||
            !t ||
            null == n ||
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
    }
    render() {
        let {
                isFollowable: e,
                isLurking: t,
                notClaimed: n,
                notPhoneVerified: i,
                notEmailVerified: l,
                newMember: a,
                memberDeadline: o,
                newAccount: u,
                accountDeadline: d,
                theme: p,
                children: h,
                canSendMessages: f,
                channelFollowingUsersSeen: m,
                showLurkerModeUpsellPopout: g,
                showMemberVerificationModal: b,
                useReducedMotion: C,
                isStaff: _,
                guildJoinRequest: v,
                showLinkedLobbyApplicationLoadingIndicator: x,
                requiredLinkedLobbyApplication: O,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: j, shouldShowLurkerModeSuccessPopout: E } = this.state,
            S = {
                theme: p,
                useReducedMotion: C,
            };
        if (e && !f) {
            if (((S.message = F.intl.string(F.t.Hl0Mqq)), null != m && m >= 1000)) {
                let e = 1000 * Math.floor(m / 1000);
                S.subtitle = F.intl.formatToPlainString(F.t.C5bgrK, { count: e.toLocaleString() });
            }
            (S.buttonText = F.intl.string(F.t["3aOv+v"])),
                (S.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((S.onSecondaryButtonClick = this.handleJoinServer),
                    (S.secondaryButtonText = F.intl.string(F.t["RLch7+"])));
        } else if (n)
            (S.message = F.intl.string(F.t["Eg3/c3"])),
                (S.buttonText = F.intl.string(F.t.fiNVio)),
                (S.onButtonClick = b ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (b)
            switch (null == v ? void 0 : v.applicationStatus) {
                case y.wB.SUBMITTED:
                    (S.message = F.intl.string(F.t["5iLvS0"])),
                        (S.subtitle = F.intl.string(F.t.FdsK4u)),
                        (S.buttonText = F.intl.string(F.t.mqtdmZ)),
                        (S.onButtonClick = this.handleCancelApplication);
                    break;
                case y.wB.REJECTED:
                    (S.message = F.intl.string(F.t.lk30cX)),
                        (S.buttonText = F.intl.string(F.t["8RrsHh"])),
                        (S.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (S.message = F.intl.string(F.t.rEBKvr)),
                        (S.buttonText = F.intl.string(F.t["r8/DT0"])),
                        (S.buttonColor = s.Tt.BRAND),
                        (S.onButtonClick = this.handleShowMemberVerification);
            }
        else if (x || null == O)
            i && !_
                ? ((S.message = F.intl.string(F.t["2dThMD"])),
                  (S.buttonText = F.intl.string(F.t["50gfOj"])),
                  (S.onButtonClick = this.handleVerifyPhone))
                : l
                  ? ((S.message = F.intl.string(F.t.FkGPS0)),
                    (S.buttonText = F.intl.string(F.t.lm1UKi)),
                    (S.onButtonClick = this.handleResendVerification))
                  : a
                    ? ((S.message = F.intl.formatToPlainString(F.t.IH7RMD, { min: D.YeM.MEMBER_AGE })),
                      (S.countdown = o))
                    : u &&
                      ((S.message = F.intl.formatToPlainString(F.t["2JA2GB"], { min: D.YeM.ACCOUNT_AGE })),
                      (S.countdown = d));
        else {
            var P;
            (S.imageSrc = null != (P = O.getIconURL(U.Si.SMALL)) ? P : void 0),
                (S.message = F.intl.format(F.t.EvDn1N, { name: O.name })),
                null != O.connectionEntrypointUrl &&
                    ((S.buttonText = F.intl.string(F.t.S0W8Z2)),
                    (S.onButtonClick = () => {
                        window.open(O.connectionEntrypointUrl, "_blank");
                    }));
        }
        return (0, r.jsx)(c.yRy, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: E,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, r.jsx)(
                    L.Z,
                    z(G({}, S), {
                        children: (0, r.jsxs)("div", {
                            ref: this.textAreaContainerRef,
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                g
                                    ? (0, r.jsx)(c.yRy, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: j,
                                          position: "top",
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.P3F,
                                                  z(G({ innerRef: this.upsellTargetRef }, e), {
                                                      className: V.clickableChannelTextArea,
                                                      onClick: this.handleTextAreaClick,
                                                      children: h,
                                                  }),
                                              ),
                                      })
                                    : h,
                            ],
                        }),
                    }),
                ),
        });
    }
    constructor(...e) {
        super(...e),
            H(this, "state", {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1,
            }),
            H(this, "textAreaContainerRef", i.createRef()),
            H(this, "upsellTargetRef", i.createRef()),
            H(this, "renderSuccessPopout", (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    a()(null != n, "This guildID cannot be null"),
                    (0, r.jsx)(j.Z, {
                        onClose: t,
                        guild: n,
                    })
                );
            }),
            H(this, "handleCancelApplication", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.h7j)((t) =>
                        (0, r.jsx)(
                            c.ConfirmModal,
                            z(
                                G(
                                    {
                                        header: F.intl.string(F.t.aIz1oa),
                                        confirmText: F.intl.string(F.t["cY+Ooa"]),
                                        cancelText: F.intl.string(F.t["ETE/oK"]),
                                        onConfirm: () => m.Z.removeGuildJoinRequest(e.id),
                                        confirmButtonColor: s.zx.Colors.BRAND,
                                    },
                                    t,
                                ),
                                {
                                    children: (0, r.jsx)(c.Text, {
                                        variant: "text-md/normal",
                                        children: F.intl.string(F.t["13tjTU"]),
                                    }),
                                },
                            ),
                        ),
                    );
            }),
            H(this, "handleViewApplicationRejection", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.ZDy)(async () => {
                        let { default: t } = await n.e("3378").then(n.bind(n, 76075));
                        return (n) => (0, r.jsx)(t, G({ guildId: e.id }, n));
                    });
            }),
            H(this, "handleShowMemberVerification", () => {
                let { guild: e } = this.props;
                null != e && (0, b.hk)(e.id);
            }),
            H(this, "handleClaimAccount", () => {
                f.j();
            }),
            H(this, "handleVerifyPhone", () => {
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                        return (t) => (0, r.jsx)(e, G({ reason: S.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: B.M },
                );
            }),
            H(this, "handleResendVerification", () => {
                var e;
                u.Z.verifyResend();
                let t = null == (e = M.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, c.h7j)((e) =>
                        (0, r.jsx)(
                            c.ConfirmModal,
                            z(G({}, e), {
                                header: F.intl.string(F.t.LykQYm),
                                confirmText: F.intl.string(F.t.BddRzc),
                                confirmButtonColor: s.zx.Colors.BRAND,
                                children: (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: F.intl.format(F.t.azKEPz, { email: t }),
                                }),
                            }),
                        ),
                    );
            }),
            H(this, "handleTextAreaClick", () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            H(this, "handleJoinServer", async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await p.Z.joinGuild(e, { source: D.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            H(this, "handleGoBack", () => {
                this.setState({ submitting: !0 }), (0, P.s1)().goBack();
            }),
            H(this, "handleFollowAnnouncement", () => {
                let { channel: e } = this.props;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e("54642").then(n.bind(n, 720589));
                    return (n) => (0, r.jsx)(t, G({ channel: e }, n));
                });
            }),
            H(this, "closeLurkerModeUpsellPopout", () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            H(this, "renderLurkerModeUpsellPopout", () => {
                let { guild: e } = this.props;
                return (
                    a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
                    (0, r.jsx)(E.Z, {
                        type: E.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout,
                    })
                );
            }),
            H(this, "renderMemberVerificationSuccessModal", () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === y.wB.APPROVED;
                if (null == e || null == t || !n || (0, g.d3)(t)) return null;
                let i = () => {
                    m.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, r.jsx)(c.u_l, {
                    renderModal: (t) =>
                        (0, r.jsx)(
                            v.Z,
                            z(G({}, t), {
                                onAccept: i,
                                guildName: e.name,
                            }),
                        ),
                    onCloseRequest: i,
                });
            });
    }
}
function q(e) {
    var t, n;
    let { channel: i, children: l } = e,
        a = i.getGuildId(),
        s = (0, o.e7)([N.Z], () => N.Z.getGuild(a)),
        c = (0, o.e7)([A.Z], () => A.Z.getCheck(a)),
        u = i.type === D.d4z.GUILD_ANNOUNCEMENT && null != s && s.features.has(D.oNc.NEWS),
        d = (0, o.e7)([Z.Z], () => (u ? Z.Z.getFollowerStatsForChannel(i.id) : null)),
        p = (0, o.e7)([O.Z], () => O.Z.isLurking(a)),
        f = (0, o.e7)([M.default], () => M.default.getCurrentUser()),
        m = null != (t = null == f ? void 0 : f.isStaff()) && t,
        g = (0, o.e7)([T.ZP], () => {
            var e, t;
            return null != f && null != (t = null == (e = T.ZP.getMember(a, f.id)) ? void 0 : e.isPending) && t;
        }),
        b = !!(0, C.Dc)(s),
        v = (0, o.e7)([x.Z], () => x.Z.shouldShowPopout(a)),
        j = (0, o.e7)([w.Z], () => w.Z.can(D.Plq.SEND_MESSAGES, i)),
        E = (0, o.e7)([_.Z], () => _.Z.getRequest(a)),
        { showLinkedLobbyApplicationLoadingIndicator: S, requiredLinkedLobbyApplication: P } = (0, k.Z)(i.linkedLobby),
        L = z(G({}, c), {
            guild: s,
            isLurking: p,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: v,
            showLurkerModeUpsellPopout: p && null != s && R.Uu(D.Plq.SEND_MESSAGES, i),
            theme: I.Z.theme,
            canSendMessages: j,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: b,
            showMemberVerificationModal: g && b,
            guildJoinRequestStatus: null != (n = null == E ? void 0 : E.applicationStatus) ? n : y.wB.STARTED,
            guildJoinRequest: E,
            showLinkedLobbyApplicationLoadingIndicator: S,
            requiredLinkedLobbyApplication: P,
            useReducedMotion: h.Z.useReducedMotion,
            isStaff: m,
        });
    return (0, r.jsx)(
        W,
        z(G({}, L), {
            channel: i,
            children: l,
        }),
    );
}
