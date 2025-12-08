n.d(t, { Z: () => K }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(885387),
    c = n(248514),
    u = n(481060),
    d = n(893776),
    p = n(528963),
    h = n(749210),
    f = n(607070),
    m = n(391650),
    g = n(693546),
    b = n(881952),
    C = n(305325),
    y = n(246364),
    v = n(983736),
    _ = n(937111),
    O = n(270801),
    x = n(652730),
    E = n(41776),
    j = n(657352),
    S = n(33154),
    P = n(144114),
    I = n(703656),
    Z = n(210887),
    T = n(606956),
    N = n(271383),
    A = n(430824),
    w = n(607744),
    M = n(496675),
    R = n(594174),
    L = n(700785),
    D = n(413251),
    k = n(862679),
    U = n(981631),
    V = n(701488),
    H = n(815660),
    F = n(388032),
    B = n(97508);
function G(e, t, n) {
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
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class q extends r.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && p.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: i } = this.props;
        i ||
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
                notPhoneVerified: r,
                notEmailVerified: l,
                newMember: a,
                memberDeadline: o,
                newAccount: s,
                accountDeadline: c,
                theme: d,
                children: p,
                canSendMessages: h,
                channelFollowingUsersSeen: f,
                showLurkerModeUpsellPopout: m,
                showMemberVerificationModal: g,
                useReducedMotion: b,
                isStaff: C,
                guildJoinRequest: v,
                showLinkedLobbyApplicationLoadingIndicator: _,
                requiredLinkedLobbyApplication: O,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: x, shouldShowLurkerModeSuccessPopout: E } = this.state,
            j = {
                theme: d,
                useReducedMotion: b,
            };
        if (e && !h) {
            if (((j.message = F.intl.string(F.t.Hl0Mqh)), null != f && f >= 1000)) {
                let e = 1000 * Math.floor(f / 1000);
                j.subtitle = F.intl.formatToPlainString(F.t.C5bgrC, { count: e.toLocaleString() });
            }
            (j.buttonText = F.intl.string(F.t["3aOv+h"])),
                (j.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((j.onSecondaryButtonClick = this.handleJoinServer),
                    (j.secondaryButtonText = F.intl.string(F.t.RLch70)));
        } else if (n)
            (j.message = F.intl.string(F.t["Eg3/c9"])),
                (j.buttonText = F.intl.string(F.t.fiNVin)),
                (j.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (g)
            switch (null == v ? void 0 : v.applicationStatus) {
                case y.wB.SUBMITTED:
                    (j.message = F.intl.string(F.t["5iLvSx"])),
                        (j.subtitle = F.intl.string(F.t.FdsK4h)),
                        (j.buttonText = F.intl.string(F.t.mqtdmQ)),
                        (j.onButtonClick = this.handleCancelApplication);
                    break;
                case y.wB.REJECTED:
                    (j.message = F.intl.string(F.t.lk30cY)),
                        (j.buttonText = F.intl.string(F.t["8RrsHr"])),
                        (j.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (j.message = F.intl.string(F.t.rEBKvg)),
                        (j.buttonText = F.intl.string(F.t["r8/DT+"])),
                        (j.buttonVariant = "primary"),
                        (j.onButtonClick = this.handleShowMemberVerification);
            }
        else if (_ || null == O)
            r && !C
                ? ((j.message = F.intl.string(F.t["2dThMM"])),
                  (j.buttonText = F.intl.string(F.t["50gfOv"])),
                  (j.onButtonClick = this.handleVerifyPhone))
                : l
                  ? ((j.message = F.intl.string(F.t.FkGPS5)),
                    (j.buttonText = F.intl.string(F.t.lm1UKt)),
                    (j.onButtonClick = this.handleResendVerification))
                  : a
                    ? ((j.message = F.intl.formatToPlainString(F.t.IH7RMF, { min: U.YeM.MEMBER_AGE })),
                      (j.countdown = o))
                    : s &&
                      ((j.message = F.intl.formatToPlainString(F.t["2JA2GH"], { min: U.YeM.ACCOUNT_AGE })),
                      (j.countdown = c));
        else {
            var S;
            (j.imageSrc = null != (S = O.getIconURL(V.Si.SMALL)) ? S : void 0),
                (j.message = F.intl.format(F.t.EvDn1D, { name: O.name })),
                null != O.connectionEntrypointUrl &&
                    ((j.buttonText = F.intl.string(F.t.S0W8Z5)),
                    (j.onButtonClick = () => {
                        window.open(O.connectionEntrypointUrl, "_blank");
                    }));
        }
        return (0, i.jsx)(u.yRy, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: E,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(
                    k.Z,
                    W(z({}, j), {
                        children: (0, i.jsxs)("div", {
                            ref: this.textAreaContainerRef,
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                m
                                    ? (0, i.jsx)(u.yRy, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: x,
                                          position: "top",
                                          children: (e) =>
                                              (0, i.jsx)(
                                                  u.P3F,
                                                  W(z({ innerRef: this.upsellTargetRef }, e), {
                                                      className: B.clickableChannelTextArea,
                                                      onClick: this.handleTextAreaClick,
                                                      children: p,
                                                  }),
                                              ),
                                      })
                                    : p,
                            ],
                        }),
                    }),
                ),
        });
    }
    constructor(...e) {
        super(...e),
            G(this, "state", {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1,
            }),
            G(this, "textAreaContainerRef", r.createRef()),
            G(this, "upsellTargetRef", r.createRef()),
            G(this, "renderSuccessPopout", (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    a()(null != n, "This guildID cannot be null"),
                    (0, i.jsx)(j.Z, {
                        onClose: t,
                        guild: n,
                    })
                );
            }),
            G(this, "handleCancelApplication", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.Z)({
                        title: F.intl.string(F.t.aIz1oV),
                        subtitle: F.intl.string(F.t["13tjTU"]),
                        variant: "primary",
                        confirmText: F.intl.string(F.t["cY+Oob"]),
                        onConfirm: () => g.Z.removeGuildJoinRequest(e.id),
                    });
            }),
            G(this, "handleViewApplicationRejection", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, u.ZDy)(async () => {
                        let { default: t } = await n.e("3378").then(n.bind(n, 76075));
                        return (n) => (0, i.jsx)(t, z({ guildId: e.id }, n));
                    });
            }),
            G(this, "handleShowMemberVerification", () => {
                let { guild: e } = this.props;
                null != e && (0, C.hk)(e.id);
            }),
            G(this, "handleClaimAccount", () => {
                m.j();
            }),
            G(this, "handleVerifyPhone", () => {
                (0, u.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                        return (t) => (0, i.jsx)(e, z({ reason: P.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: H.M },
                );
            }),
            G(this, "handleResendVerification", () => {
                var e;
                d.Z.verifyResend();
                let t = null == (e = R.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, s.Z)({
                        title: F.intl.string(F.t.LykQYk),
                        subtitle: F.intl.format(F.t.azKEPy, { email: t }),
                    });
            }),
            G(this, "handleTextAreaClick", () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            G(this, "handleJoinServer", async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await h.Z.joinGuild(e, { source: U.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            G(this, "handleGoBack", () => {
                this.setState({ submitting: !0 }), (0, I.s1)().goBack();
            }),
            G(this, "handleFollowAnnouncement", () => {
                let { channel: e } = this.props;
                (0, u.ZDy)(async () => {
                    let { default: t } = await n.e("96964").then(n.bind(n, 807007));
                    return (n) => (0, i.jsx)(t, z({ channel: e }, n));
                });
            }),
            G(this, "closeLurkerModeUpsellPopout", () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            G(this, "renderLurkerModeUpsellPopout", () => {
                let { guild: e } = this.props;
                return (
                    a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
                    (0, i.jsx)(S.Z, {
                        type: S.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout,
                    })
                );
            }),
            G(this, "renderMemberVerificationSuccessModal", () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === y.wB.APPROVED;
                if (null == e || null == t || !n || (0, b.d3)(t)) return null;
                let r = () => {
                    g.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, i.jsx)(u.u_l, {
                    renderModal: (t) =>
                        (0, i.jsx)(
                            O.Z,
                            W(z({}, t), {
                                onAccept: r,
                                guildName: e.name,
                            }),
                        ),
                    onCloseRequest: r,
                });
            });
    }
}
function K(e) {
    var t, n;
    let { channel: r, children: l } = e,
        a = r.getGuildId(),
        s = (0, o.e7)([A.Z], () => A.Z.getGuild(a)),
        c = (0, o.e7)([w.Z], () => w.Z.getCheck(a)),
        u = r.type === U.d4z.GUILD_ANNOUNCEMENT && null != s && s.features.has(U.GuildFeatures.NEWS),
        d = (0, o.e7)([T.Z], () => (u ? T.Z.getFollowerStatsForChannel(r.id) : null)),
        p = (0, o.e7)([E.Z], () => E.Z.isLurking(a)),
        h = (0, o.e7)([R.default], () => R.default.getCurrentUser()),
        m = null != (t = null == h ? void 0 : h.isStaff()) && t,
        g = (0, o.e7)([N.ZP], () => {
            var e, t;
            return null != h && null != (t = null == (e = N.ZP.getMember(a, h.id)) ? void 0 : e.isPending) && t;
        }),
        b = !!(0, v.Dc)(s),
        C = (0, o.e7)([x.Z], () => x.Z.shouldShowPopout(a)),
        O = (0, o.e7)([M.Z], () => M.Z.can(U.Plq.SEND_MESSAGES, r)),
        j = (0, o.e7)([_.Z], () => _.Z.getRequest(a)),
        { showLinkedLobbyApplicationLoadingIndicator: S, requiredLinkedLobbyApplication: P } = (0, D.Z)(r.linkedLobby),
        I = W(z({}, c), {
            guild: s,
            isLurking: p,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: C,
            showLurkerModeUpsellPopout: p && null != s && L.Uu(U.Plq.SEND_MESSAGES, r),
            theme: Z.Z.theme,
            canSendMessages: O,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: b,
            showMemberVerificationModal: g && b,
            guildJoinRequestStatus: null != (n = null == j ? void 0 : j.applicationStatus) ? n : y.wB.STARTED,
            guildJoinRequest: j,
            showLinkedLobbyApplicationLoadingIndicator: S,
            requiredLinkedLobbyApplication: P,
            useReducedMotion: f.Z.useReducedMotion,
            isStaff: m,
        });
    return (0, i.jsx)(
        q,
        W(z({}, I), {
            channel: r,
            children: l,
        }),
    );
}
