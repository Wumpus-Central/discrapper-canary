n.d(t, { Z: () => q }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(693789),
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
    v = n(937111),
    _ = n(270801),
    O = n(652730),
    x = n(41776),
    E = n(657352),
    j = n(33154),
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
    L = n(413251),
    D = n(862679),
    k = n(981631),
    U = n(701488),
    V = n(815660),
    F = n(388032),
    B = n(97508);
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
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
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
class W extends r.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && d.Z.fetchChannelFollowerStats(n.id);
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
                accountDeadline: u,
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
                    ? ((j.message = F.intl.formatToPlainString(F.t.IH7RMF, { min: k.YeM.MEMBER_AGE })),
                      (j.countdown = o))
                    : s &&
                      ((j.message = F.intl.formatToPlainString(F.t["2JA2GH"], { min: k.YeM.ACCOUNT_AGE })),
                      (j.countdown = u));
        else {
            var S;
            (j.imageSrc = null != (S = O.getIconURL(U.Si.SMALL)) ? S : void 0),
                (j.message = F.intl.format(F.t.EvDn1D, { name: O.name })),
                null != O.connectionEntrypointUrl &&
                    ((j.buttonText = F.intl.string(F.t.S0W8Z5)),
                    (j.onButtonClick = () => {
                        window.open(O.connectionEntrypointUrl, "_blank");
                    }));
        }
        return (0, i.jsx)(c.yRy, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: E,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(
                    D.Z,
                    z(G({}, j), {
                        children: (0, i.jsxs)("div", {
                            ref: this.textAreaContainerRef,
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                m
                                    ? (0, i.jsx)(c.yRy, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: x,
                                          position: "top",
                                          children: (e) =>
                                              (0, i.jsx)(
                                                  c.P3F,
                                                  z(G({ innerRef: this.upsellTargetRef }, e), {
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
            H(this, "state", {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1,
            }),
            H(this, "textAreaContainerRef", r.createRef()),
            H(this, "upsellTargetRef", r.createRef()),
            H(this, "renderSuccessPopout", (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    a()(null != n, "This guildID cannot be null"),
                    (0, i.jsx)(E.Z, {
                        onClose: t,
                        guild: n,
                    })
                );
            }),
            H(this, "handleCancelApplication", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.h7j)((t) =>
                        (0, i.jsx)(
                            c.ConfirmModal,
                            z(
                                G(
                                    {
                                        header: F.intl.string(F.t.aIz1oV),
                                        confirmText: F.intl.string(F.t["cY+Oob"]),
                                        cancelText: F.intl.string(F.t["ETE/oC"]),
                                        onConfirm: () => m.Z.removeGuildJoinRequest(e.id),
                                        confirmButtonColor: s.Tt.BRAND,
                                    },
                                    t,
                                ),
                                {
                                    children: (0, i.jsx)(c.Text, {
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
                        return (n) => (0, i.jsx)(t, G({ guildId: e.id }, n));
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
                        return (t) => (0, i.jsx)(e, G({ reason: S.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: V.M },
                );
            }),
            H(this, "handleResendVerification", () => {
                var e;
                u.Z.verifyResend();
                let t = null == (e = M.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, c.h7j)((e) =>
                        (0, i.jsx)(
                            c.ConfirmModal,
                            z(G({}, e), {
                                header: F.intl.string(F.t.LykQYk),
                                confirmText: F.intl.string(F.t.BddRzS),
                                confirmButtonColor: s.Tt.BRAND,
                                children: (0, i.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: F.intl.format(F.t.azKEPy, { email: t }),
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
                    await p.Z.joinGuild(e, { source: k.vtS.CHAT_INPUT_BLOCKER });
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
                    let { default: t } = await n.e("96964").then(n.bind(n, 807007));
                    return (n) => (0, i.jsx)(t, G({ channel: e }, n));
                });
            }),
            H(this, "closeLurkerModeUpsellPopout", () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            H(this, "renderLurkerModeUpsellPopout", () => {
                let { guild: e } = this.props;
                return (
                    a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
                    (0, i.jsx)(j.Z, {
                        type: j.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout,
                    })
                );
            }),
            H(this, "renderMemberVerificationSuccessModal", () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === y.wB.APPROVED;
                if (null == e || null == t || !n || (0, g.d3)(t)) return null;
                let r = () => {
                    m.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, i.jsx)(c.u_l, {
                    renderModal: (t) =>
                        (0, i.jsx)(
                            _.Z,
                            z(G({}, t), {
                                onAccept: r,
                                guildName: e.name,
                            }),
                        ),
                    onCloseRequest: r,
                });
            });
    }
}
function q(e) {
    var t, n;
    let { channel: r, children: l } = e,
        a = r.getGuildId(),
        s = (0, o.e7)([N.Z], () => N.Z.getGuild(a)),
        c = (0, o.e7)([A.Z], () => A.Z.getCheck(a)),
        u = r.type === k.d4z.GUILD_ANNOUNCEMENT && null != s && s.features.has(k.GuildFeatures.NEWS),
        d = (0, o.e7)([Z.Z], () => (u ? Z.Z.getFollowerStatsForChannel(r.id) : null)),
        p = (0, o.e7)([x.Z], () => x.Z.isLurking(a)),
        f = (0, o.e7)([M.default], () => M.default.getCurrentUser()),
        m = null != (t = null == f ? void 0 : f.isStaff()) && t,
        g = (0, o.e7)([T.ZP], () => {
            var e, t;
            return null != f && null != (t = null == (e = T.ZP.getMember(a, f.id)) ? void 0 : e.isPending) && t;
        }),
        b = !!(0, C.Dc)(s),
        _ = (0, o.e7)([O.Z], () => O.Z.shouldShowPopout(a)),
        E = (0, o.e7)([w.Z], () => w.Z.can(k.Plq.SEND_MESSAGES, r)),
        j = (0, o.e7)([v.Z], () => v.Z.getRequest(a)),
        { showLinkedLobbyApplicationLoadingIndicator: S, requiredLinkedLobbyApplication: P } = (0, L.Z)(r.linkedLobby),
        D = z(G({}, c), {
            guild: s,
            isLurking: p,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: _,
            showLurkerModeUpsellPopout: p && null != s && R.Uu(k.Plq.SEND_MESSAGES, r),
            theme: I.Z.theme,
            canSendMessages: E,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: b,
            showMemberVerificationModal: g && b,
            guildJoinRequestStatus: null != (n = null == j ? void 0 : j.applicationStatus) ? n : y.wB.STARTED,
            guildJoinRequest: j,
            showLinkedLobbyApplicationLoadingIndicator: S,
            requiredLinkedLobbyApplication: P,
            useReducedMotion: h.Z.useReducedMotion,
            isStaff: m,
        });
    return (0, i.jsx)(
        W,
        z(G({}, D), {
            channel: r,
            children: l,
        }),
    );
}
