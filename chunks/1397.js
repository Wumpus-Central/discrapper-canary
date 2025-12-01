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
    L = n(413251),
    D = n(862679),
    k = n(981631),
    U = n(701488),
    F = n(815660),
    B = n(388032),
    H = n(97508);
function V(e, t, n) {
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
                V(e, t, n[t]);
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
            { shouldShowLurkerModeUpsellPopout: x, shouldShowLurkerModeSuccessPopout: j } = this.state,
            E = {
                theme: d,
                useReducedMotion: b,
            };
        if (e && !h) {
            if (((E.message = B.intl.string(B.t.Hl0Mqh)), null != f && f >= 1000)) {
                let e = 1000 * Math.floor(f / 1000);
                E.subtitle = B.intl.formatToPlainString(B.t.C5bgrC, { count: e.toLocaleString() });
            }
            (E.buttonText = B.intl.string(B.t["3aOv+h"])),
                (E.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((E.onSecondaryButtonClick = this.handleJoinServer),
                    (E.secondaryButtonText = B.intl.string(B.t.RLch70)));
        } else if (n)
            (E.message = B.intl.string(B.t["Eg3/c9"])),
                (E.buttonText = B.intl.string(B.t.fiNVin)),
                (E.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (g)
            switch (null == v ? void 0 : v.applicationStatus) {
                case y.wB.SUBMITTED:
                    (E.message = B.intl.string(B.t["5iLvSx"])),
                        (E.subtitle = B.intl.string(B.t.FdsK4h)),
                        (E.buttonText = B.intl.string(B.t.mqtdmQ)),
                        (E.onButtonClick = this.handleCancelApplication);
                    break;
                case y.wB.REJECTED:
                    (E.message = B.intl.string(B.t.lk30cY)),
                        (E.buttonText = B.intl.string(B.t["8RrsHr"])),
                        (E.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (E.message = B.intl.string(B.t.rEBKvg)),
                        (E.buttonText = B.intl.string(B.t["r8/DT+"])),
                        (E.buttonVariant = "primary"),
                        (E.onButtonClick = this.handleShowMemberVerification);
            }
        else if (_ || null == O)
            r && !C
                ? ((E.message = B.intl.string(B.t["2dThMM"])),
                  (E.buttonText = B.intl.string(B.t["50gfOv"])),
                  (E.onButtonClick = this.handleVerifyPhone))
                : l
                  ? ((E.message = B.intl.string(B.t.FkGPS5)),
                    (E.buttonText = B.intl.string(B.t.lm1UKt)),
                    (E.onButtonClick = this.handleResendVerification))
                  : a
                    ? ((E.message = B.intl.formatToPlainString(B.t.IH7RMF, { min: k.YeM.MEMBER_AGE })),
                      (E.countdown = o))
                    : s &&
                      ((E.message = B.intl.formatToPlainString(B.t["2JA2GH"], { min: k.YeM.ACCOUNT_AGE })),
                      (E.countdown = u));
        else {
            var S;
            (E.imageSrc = null != (S = O.getIconURL(U.Si.SMALL)) ? S : void 0),
                (E.message = B.intl.format(B.t.EvDn1D, { name: O.name })),
                null != O.connectionEntrypointUrl &&
                    ((E.buttonText = B.intl.string(B.t.S0W8Z5)),
                    (E.onButtonClick = () => {
                        window.open(O.connectionEntrypointUrl, "_blank");
                    }));
        }
        return (0, i.jsx)(c.yRy, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: j,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(
                    D.Z,
                    z(G({}, E), {
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
                                                      className: H.clickableChannelTextArea,
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
            V(this, "state", {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1,
            }),
            V(this, "textAreaContainerRef", r.createRef()),
            V(this, "upsellTargetRef", r.createRef()),
            V(this, "renderSuccessPopout", (e) => {
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
            V(this, "handleCancelApplication", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.h7j)((t) =>
                        (0, i.jsx)(
                            c.ConfirmModal,
                            z(
                                G(
                                    {
                                        header: B.intl.string(B.t.aIz1oV),
                                        confirmText: B.intl.string(B.t["cY+Oob"]),
                                        cancelText: B.intl.string(B.t["ETE/oC"]),
                                        onConfirm: () => m.Z.removeGuildJoinRequest(e.id),
                                        confirmButtonColor: s.Tt.BRAND,
                                    },
                                    t,
                                ),
                                {
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-md/normal",
                                        children: B.intl.string(B.t["13tjTU"]),
                                    }),
                                },
                            ),
                        ),
                    );
            }),
            V(this, "handleViewApplicationRejection", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.ZDy)(async () => {
                        let { default: t } = await n.e("3378").then(n.bind(n, 76075));
                        return (n) => (0, i.jsx)(t, G({ guildId: e.id }, n));
                    });
            }),
            V(this, "handleShowMemberVerification", () => {
                let { guild: e } = this.props;
                null != e && (0, b.hk)(e.id);
            }),
            V(this, "handleClaimAccount", () => {
                f.j();
            }),
            V(this, "handleVerifyPhone", () => {
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                        return (t) => (0, i.jsx)(e, G({ reason: S.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: F.M },
                );
            }),
            V(this, "handleResendVerification", () => {
                var e;
                u.Z.verifyResend();
                let t = null == (e = M.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, c.h7j)((e) =>
                        (0, i.jsx)(
                            c.ConfirmModal,
                            z(G({}, e), {
                                header: B.intl.string(B.t.LykQYk),
                                confirmText: B.intl.string(B.t.BddRzS),
                                confirmButtonColor: s.Tt.BRAND,
                                children: (0, i.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: B.intl.format(B.t.azKEPy, { email: t }),
                                }),
                            }),
                        ),
                    );
            }),
            V(this, "handleTextAreaClick", () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            V(this, "handleJoinServer", async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await p.Z.joinGuild(e, { source: k.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            V(this, "handleGoBack", () => {
                this.setState({ submitting: !0 }), (0, P.s1)().goBack();
            }),
            V(this, "handleFollowAnnouncement", () => {
                let { channel: e } = this.props;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e("96964").then(n.bind(n, 807007));
                    return (n) => (0, i.jsx)(t, G({ channel: e }, n));
                });
            }),
            V(this, "closeLurkerModeUpsellPopout", () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            V(this, "renderLurkerModeUpsellPopout", () => {
                let { guild: e } = this.props;
                return (
                    a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
                    (0, i.jsx)(E.Z, {
                        type: E.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout,
                    })
                );
            }),
            V(this, "renderMemberVerificationSuccessModal", () => {
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
        j = (0, o.e7)([w.Z], () => w.Z.can(k.Plq.SEND_MESSAGES, r)),
        E = (0, o.e7)([v.Z], () => v.Z.getRequest(a)),
        { showLinkedLobbyApplicationLoadingIndicator: S, requiredLinkedLobbyApplication: P } = (0, L.Z)(r.linkedLobby),
        D = z(G({}, c), {
            guild: s,
            isLurking: p,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: _,
            showLurkerModeUpsellPopout: p && null != s && R.Uu(k.Plq.SEND_MESSAGES, r),
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
    return (0, i.jsx)(
        W,
        z(G({}, D), {
            channel: r,
            children: l,
        }),
    );
}
