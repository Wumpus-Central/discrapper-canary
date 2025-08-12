n.d(t, { Z: () => z }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(893776),
    d = n(528963),
    f = n(749210),
    _ = n(607070),
    p = n(391650),
    h = n(693546),
    m = n(881952),
    g = n(305325),
    E = n(246364),
    b = n(983736),
    y = n(937111),
    O = n(270801),
    v = n(652730),
    I = n(41776),
    T = n(657352),
    S = n(33154),
    A = n(144114),
    N = n(703656),
    C = n(210887),
    R = n(606956),
    P = n(271383),
    w = n(430824),
    D = n(607744),
    L = n(496675),
    x = n(594174),
    M = n(700785),
    k = n(413251),
    j = n(862679),
    U = n(981631),
    G = n(701488),
    B = n(815660),
    Z = n(388032),
    F = n(421865);
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class K extends i.PureComponent {
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
                notEmailVerified: o,
                newMember: a,
                memberDeadline: s,
                newAccount: u,
                accountDeadline: d,
                theme: f,
                children: _,
                canSendMessages: p,
                channelFollowingUsersSeen: h,
                showLurkerModeUpsellPopout: m,
                showMemberVerificationModal: g,
                useReducedMotion: b,
                isStaff: y,
                guildJoinRequest: O,
                showLinkedLobbyApplicationLoadingIndicator: v,
                requiredLinkedLobbyApplication: I,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: T, shouldShowLurkerModeSuccessPopout: S } = this.state,
            A = {
                theme: f,
                useReducedMotion: b,
            };
        if (e && !p) {
            if (((A.message = Z.intl.string(Z.t.Hl0Mqq)), null != h && h >= 1000)) {
                let e = 1000 * Math.floor(h / 1000);
                A.subtitle = Z.intl.formatToPlainString(Z.t.C5bgrK, { count: e.toLocaleString() });
            }
            (A.buttonText = Z.intl.string(Z.t["3aOv+v"])),
                (A.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((A.onSecondaryButtonClick = this.handleJoinServer),
                    (A.secondaryButtonText = Z.intl.string(Z.t["RLch7+"])));
        } else if (n)
            (A.message = Z.intl.string(Z.t["Eg3/c3"])),
                (A.buttonText = Z.intl.string(Z.t.fiNVio)),
                (A.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (g)
            switch (null == O ? void 0 : O.applicationStatus) {
                case E.wB.SUBMITTED:
                    (A.message = Z.intl.string(Z.t["5iLvS0"])),
                        (A.subtitle = Z.intl.string(Z.t.FdsK4u)),
                        (A.buttonText = Z.intl.string(Z.t.mqtdmZ)),
                        (A.onButtonClick = this.handleCancelApplication);
                    break;
                case E.wB.REJECTED:
                    (A.message = Z.intl.string(Z.t.lk30cX)),
                        (A.buttonText = Z.intl.string(Z.t["8RrsHh"])),
                        (A.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (A.message = Z.intl.string(Z.t.rEBKvr)),
                        (A.buttonText = Z.intl.string(Z.t["r8/DT0"])),
                        (A.buttonColor = l.Tt.BRAND),
                        (A.onButtonClick = this.handleShowMemberVerification);
            }
        else if (v || null == I)
            i && !y
                ? ((A.message = Z.intl.string(Z.t["2dThMD"])),
                  (A.buttonText = Z.intl.string(Z.t["50gfOj"])),
                  (A.onButtonClick = this.handleVerifyPhone))
                : o
                  ? ((A.message = Z.intl.string(Z.t.FkGPS0)),
                    (A.buttonText = Z.intl.string(Z.t.lm1UKi)),
                    (A.onButtonClick = this.handleResendVerification))
                  : a
                    ? ((A.message = Z.intl.formatToPlainString(Z.t.IH7RMD, { min: U.YeM.MEMBER_AGE })),
                      (A.countdown = s))
                    : u &&
                      ((A.message = Z.intl.formatToPlainString(Z.t["2JA2GB"], { min: U.YeM.ACCOUNT_AGE })),
                      (A.countdown = d));
        else {
            var N;
            (A.imageSrc = null != (N = I.getIconURL(G.Si.SMALL)) ? N : void 0),
                (A.message = Z.intl.format(Z.t.EvDn1N, { name: I.name })),
                null != I.connectionEntrypointUrl &&
                    ((A.buttonText = Z.intl.string(Z.t.S0W8Z2)),
                    (A.onButtonClick = () => {
                        window.open(I.connectionEntrypointUrl, "_blank");
                    }));
        }
        return (0, r.jsx)(c.yRy, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: S,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, r.jsx)(
                    j.Z,
                    W(H({}, A), {
                        children: (0, r.jsxs)("div", {
                            ref: this.textAreaContainerRef,
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                m
                                    ? (0, r.jsx)(c.yRy, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: T,
                                          position: "top",
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.P3F,
                                                  W(H({ innerRef: this.upsellTargetRef }, e), {
                                                      className: F.clickableChannelTextArea,
                                                      onClick: this.handleTextAreaClick,
                                                      children: _,
                                                  }),
                                              ),
                                      })
                                    : _,
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
            V(this, "textAreaContainerRef", i.createRef()),
            V(this, "upsellTargetRef", i.createRef()),
            V(this, "renderSuccessPopout", (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    a()(null != n, "This guildID cannot be null"),
                    (0, r.jsx)(T.Z, {
                        onClose: t,
                        guild: n,
                    })
                );
            }),
            V(this, "handleCancelApplication", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.h7j)((t) =>
                        (0, r.jsx)(
                            c.ConfirmModal,
                            W(
                                H(
                                    {
                                        header: Z.intl.string(Z.t.aIz1oa),
                                        confirmText: Z.intl.string(Z.t["cY+Ooa"]),
                                        cancelText: Z.intl.string(Z.t["ETE/oK"]),
                                        onConfirm: () => h.Z.removeGuildJoinRequest(e.id),
                                        confirmButtonColor: l.zx.Colors.BRAND,
                                    },
                                    t,
                                ),
                                {
                                    children: (0, r.jsx)(c.Text, {
                                        variant: "text-md/normal",
                                        children: Z.intl.string(Z.t["13tjTU"]),
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
                        return (n) => (0, r.jsx)(t, H({ guildId: e.id }, n));
                    });
            }),
            V(this, "handleShowMemberVerification", () => {
                let { guild: e } = this.props;
                null != e && (0, g.hk)(e.id);
            }),
            V(this, "handleClaimAccount", () => {
                p.j();
            }),
            V(this, "handleVerifyPhone", () => {
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("76540"), n.e("79861")]).then(n.bind(n, 607018));
                        return (t) => (0, r.jsx)(e, H({ reason: A.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: B.M },
                );
            }),
            V(this, "handleResendVerification", () => {
                var e;
                u.Z.verifyResend();
                let t = null == (e = x.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, c.h7j)((e) =>
                        (0, r.jsx)(
                            c.ConfirmModal,
                            W(H({}, e), {
                                header: Z.intl.string(Z.t.LykQYm),
                                confirmText: Z.intl.string(Z.t.BddRzc),
                                confirmButtonColor: l.zx.Colors.BRAND,
                                children: (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: Z.intl.format(Z.t.azKEPz, { email: t }),
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
                    await f.Z.joinGuild(e, { source: U.vtS.CHAT_INPUT_BLOCKER });
                } catch (e) {
                    this.setState({ submitting: !1 });
                }
            }),
            V(this, "handleGoBack", () => {
                this.setState({ submitting: !0 }), (0, N.s1)().goBack();
            }),
            V(this, "handleFollowAnnouncement", () => {
                let { channel: e } = this.props;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e("54642").then(n.bind(n, 720589));
                    return (n) => (0, r.jsx)(t, H({ channel: e }, n));
                });
            }),
            V(this, "closeLurkerModeUpsellPopout", () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            V(this, "renderLurkerModeUpsellPopout", () => {
                let { guild: e } = this.props;
                return (
                    a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
                    (0, r.jsx)(S.Z, {
                        type: S.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout,
                    })
                );
            }),
            V(this, "renderMemberVerificationSuccessModal", () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === E.wB.APPROVED;
                if (null == e || null == t || !n || (0, m.d3)(t)) return null;
                let i = () => {
                    h.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, r.jsx)(c.u_l, {
                    renderModal: (t) =>
                        (0, r.jsx)(
                            O.Z,
                            W(H({}, t), {
                                onAccept: i,
                                guildName: e.name,
                            }),
                        ),
                    onCloseRequest: i,
                });
            });
    }
}
function z(e) {
    var t, n;
    let { channel: i, children: o } = e,
        a = i.getGuildId(),
        l = (0, s.e7)([w.Z], () => w.Z.getGuild(a)),
        c = (0, s.e7)([D.Z], () => D.Z.getCheck(a)),
        u = i.type === U.d4z.GUILD_ANNOUNCEMENT && null != l && l.features.has(U.oNc.NEWS),
        d = (0, s.e7)([R.Z], () => (u ? R.Z.getFollowerStatsForChannel(i.id) : null)),
        f = (0, s.e7)([I.Z], () => I.Z.isLurking(a)),
        p = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
        h = null != (t = null == p ? void 0 : p.isStaff()) && t,
        m = (0, s.e7)([P.ZP], () => {
            var e, t;
            return null != p && null != (t = null == (e = P.ZP.getMember(a, p.id)) ? void 0 : e.isPending) && t;
        }),
        g = !!(0, b.Dc)(l),
        O = m && g,
        T = (0, s.e7)([v.Z], () => v.Z.shouldShowPopout(a)),
        S = (0, s.e7)([L.Z], () => L.Z.can(U.Plq.SEND_MESSAGES, i)),
        A = (0, s.e7)([y.Z], () => y.Z.getRequest(a)),
        { showLinkedLobbyApplicationLoadingIndicator: N, requiredLinkedLobbyApplication: j } = (0, k.Z)(i.linkedLobby),
        G = W(H({}, c), {
            guild: l,
            isLurking: f,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: T,
            showLurkerModeUpsellPopout: f && null != l && M.Uu(U.Plq.SEND_MESSAGES, i),
            theme: C.Z.theme,
            canSendMessages: S,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: g,
            showMemberVerificationModal: O,
            guildJoinRequestStatus: null != (n = null == A ? void 0 : A.applicationStatus) ? n : E.wB.STARTED,
            guildJoinRequest: A,
            showLinkedLobbyApplicationLoadingIndicator: N,
            requiredLinkedLobbyApplication: j,
            useReducedMotion: _.Z.useReducedMotion,
            isStaff: h,
        });
    return (0, r.jsx)(
        K,
        W(H({}, G), {
            channel: i,
            children: o,
        }),
    );
}
