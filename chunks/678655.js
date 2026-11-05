n.d(t, { A: () => eh });
var l = n(477900),
    i = n(582128),
    s = n(284009),
    a = n.n(s),
    r = n(855986),
    o = n(139033),
    c = n(314116),
    d = n(477155),
    u = n(192308),
    h = n(725570),
    m = n(265872),
    g = n(939249),
    p = n(830215),
    A = n(857182),
    f = n(778858),
    C = n(775602),
    E = n(315982),
    x = n(480900),
    I = n(311043),
    S = n(60465),
    y = n(409626),
    b = n(422069),
    _ = n(652215),
    j = n(624458),
    v = n(821124),
    T = n(202384),
    N = n(513461),
    M = n(709977),
    R = n(212455),
    D = n(772707),
    k = n(116833),
    L = n(792996);
let P = function (e) {
    let { guild: t, onAccept: n, onClose: i, ...s } = e;
    return (0, l.jsx)(D.k, {
        ...s,
        onClose: function () {
            return (n(), i());
        },
        graphic: {
            type: "dynamic",
            component: k.DynamicGraphicComponent.MEMBER_VERIFICATION_SUCCESS,
            props: { guild: t },
        },
        title: L.intl.formatToPlainString(L.t.TMNpew, { guildName: t.name }),
        subtitle: L.intl.string(L.t.cLuoAc),
    });
};
var O = n(73153),
    G = n(857071);
let U = null,
    w = null;
function F() {
    let e = G.A.mostRecentLurkedGuildId();
    null != e ? ((U = e), (w = null)) : ((w = null != U ? U : null), (U = null));
}
class H extends r.Ay.Store {
    static displayName = "LurkerModePopoutStore";
    initialize() {
        this.syncWith([G.A], F);
    }
    shouldShowPopout(e) {
        return w === e;
    }
}
let B = new H(O.h);
var K = n(534514),
    V = n(834730),
    z = n(821609),
    W = n(521790);
let $ = function (e) {
    let { guild: t, onClose: i } = e;
    return (0, l.jsxs)("div", {
        className: W.kL,
        children: [
            (0, l.jsx)("img", { alt: "", className: W.Sl, src: n(960416) }),
            (0, l.jsxs)("div", {
                className: W.Qs,
                children: [
                    (0, l.jsx)(K.D, {
                        variant: "heading-sm/semibold",
                        children: L.intl.format(L.t.THgVCC, { guild: t.name }),
                    }),
                    (0, l.jsx)(V.E, {
                        color: "text-default",
                        variant: "body-sm/normal",
                        children: L.intl.string(L.t["1yq3nO"]),
                    }),
                    (0, l.jsx)("div", {
                        className: W.UD,
                        children: (0, l.jsx)(z.$, { variant: "primary", text: L.intl.string(L.t.hLw0wc), onClick: i }),
                    }),
                ],
            }),
        ],
    });
};
var q = n(698405),
    Z = n(557722),
    J = n(976860),
    X = n(413599),
    Y = n(560010),
    Q = n(696451),
    ee = n(71393),
    et = n(834942),
    en = n(576705),
    el = n(287809),
    ei = n(488926),
    es = n(137577),
    ea = n(786051),
    er = n(487887),
    eo = n(53516),
    ec = n(514559);
function ed(e, t) {
    (null != t.gameIconUrl && (e.imageSrc = t.gameIconUrl),
        (e.message = L.intl.format(L.t["qxH/YE"], { gameName: t.gameName })),
        (e.buttonText = L.intl.string(L.t.DjifDP)),
        (e.buttonIcon = d.ArrowSmallLeftIcon),
        (e.buttonVariant = "primary"),
        (e.onButtonClick = t.onReturnToGameProfile));
}
class eu extends i.PureComponent {
    state = { submitting: !1, shouldShowLurkerModeUpsellPopout: !1, shouldShowLurkerModeSuccessPopout: !1 };
    textAreaContainerRef = i.createRef();
    upsellTargetRef = i.createRef();
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && A.A.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: l } = this.props;
        l ||
            e.shouldShowLurkerModeSuccessPopout ||
            !t ||
            null == n ||
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
    }
    renderSuccessPopout = (e) => {
        let { closePopout: t } = e,
            { guild: n } = this.props;
        return (a()(null != n, "This guildID cannot be null"), (0, l.jsx)($, { onClose: t, guild: n }));
    };
    handleCancelApplication = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, c.A)({
                title: L.intl.string(L.t.aIz1oV),
                subtitle: L.intl.string(L.t["13tjTU"]),
                variant: "primary",
                confirmText: L.intl.string(L.t["cY+Oob"]),
                onConfirm: () => j.A.removeGuildJoinRequest(e.id),
            });
    };
    handleViewApplicationRejection = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, u.mM)(async () => {
                let { default: t } = await Promise.all([n.e(298903), n.e(94360)]).then(n.bind(n, 267));
                return (n) => (0, l.jsx)(t, { guildId: e.id, ...n });
            });
    };
    handleShowMemberVerification = () => {
        let { guild: e } = this.props;
        null != e && (0, T.Ze)(e.id);
    };
    handleClaimAccount = () => {
        E.R();
    };
    handleVerifyPhone = () => {
        (0, u.mM)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e(590275),
                    n.e(766806),
                    n.e(14775),
                    n.e(989545),
                    n.e(991531),
                    n.e(757786),
                    n.e(84704),
                    n.e(286197),
                ]).then(n.bind(n, 615715));
                return (t) => (0, l.jsx)(e, { reason: Z.d.GUILD_PHONE_REQUIRED, ...t });
            },
            { modalKey: eo.V },
        );
    };
    handleResendVerification = () => {
        p.A.verifyResend();
        let e = el.default.getCurrentUser()?.email;
        null != e && (0, o.A)({ title: L.intl.string(L.t.LykQYk), subtitle: L.intl.format(L.t.azKEPy, { email: e }) });
    };
    handleTextAreaClick = () => {
        let { showLurkerModeUpsellPopout: e } = this.props;
        this.setState({ shouldShowLurkerModeUpsellPopout: e });
    };
    handleJoinServer = async () => {
        this.setState({ submitting: !0 });
        let e = this.props.channel.getGuildId();
        try {
            await f.A.joinGuild(e, { source: _.Q4z.CHAT_INPUT_BLOCKER });
        } catch {
            this.setState({ submitting: !1 });
        }
    };
    handleGoBack = () => {
        (this.setState({ submitting: !0 }), (0, J.JK)().goBack());
    };
    handleFollowAnnouncement = () => {
        let { channel: e } = this.props;
        (0, u.mM)(async () => {
            let { default: t } = await Promise.all([n.e(836178), n.e(670774)]).then(n.bind(n, 464035));
            return (n) => (0, l.jsx)(t, { channel: e, ...n });
        });
    };
    closeLurkerModeUpsellPopout = () => {
        this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
    };
    renderLurkerModeUpsellPopout = () => {
        let { guild: e } = this.props;
        return (
            a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
            (0, l.jsx)(q.A, { type: q.w.CHAT, guild: e, closePopout: this.closeLurkerModeUpsellPopout })
        );
    };
    renderMemberVerificationSuccessModal = () => {
        let { guild: e, guildJoinRequest: t } = this.props,
            n = t?.applicationStatus === N.B5.APPROVED;
        if (null == e || null == t || !n || (0, v.NK)(t)) return null;
        function i() {
            null != e && null != t && j.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
        }
        return (0, l.jsx)(h.aF, {
            renderModal: (t) => (0, l.jsx)(P, { ...t, onAccept: i, guild: e }),
            onCloseRequest: i,
        });
    };
    render() {
        let {
                isFollowable: e,
                isLurking: t,
                notClaimed: n,
                notPhoneVerified: i,
                notEmailVerified: s,
                newMember: a,
                memberDeadline: r,
                newAccount: o,
                accountDeadline: c,
                theme: d,
                children: u,
                canSendMessages: h,
                channelFollowingUsersSeen: p,
                showLurkerModeUpsellPopout: A,
                showMemberVerificationModal: f,
                missingVerificationRole: C,
                verificationRole: E,
                useReducedMotion: I,
                isStaff: S,
                guildJoinRequest: y,
                showLinkedLobbyApplicationLoadingIndicator: b,
                requiredLinkedLobbyApplication: j,
                shouldRelaunchLinkedLobbyApplication: v,
                pendingGameProfileReturn: T,
                guild: M,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: R, shouldShowLurkerModeSuccessPopout: D } = this.state,
            k = { theme: d, useReducedMotion: I };
        if (null != T && ((e && !h) || t)) ed(k, T);
        else if (e && !h) {
            if (((k.message = L.intl.string(L.t.Hl0Mqh)), null != p && p >= 1e3)) {
                let e = 1e3 * Math.floor(p / 1e3);
                k.subtitle = L.intl.formatToPlainString(L.t.C5bgrC, { count: e.toLocaleString() });
            }
            ((k.buttonText = L.intl.string(L.t["3aOv+h"])),
                (k.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((k.onSecondaryButtonClick = this.handleJoinServer),
                    (k.secondaryButtonText = L.intl.string(L.t.RLch70))));
        } else if (n)
            ((k.message = L.intl.string(L.t["Eg3/c9"])),
                (k.buttonText = L.intl.string(L.t.fiNVin)),
                (k.onButtonClick = f ? this.handleShowMemberVerification : this.handleClaimAccount));
        else if (f)
            switch (y?.applicationStatus) {
                case N.B5.SUBMITTED:
                    ((k.message = L.intl.string(L.t["5iLvSx"])),
                        (k.subtitle = L.intl.string(L.t.FdsK4h)),
                        (k.buttonText = L.intl.string(L.t.mqtdmQ)),
                        (k.onButtonClick = this.handleCancelApplication));
                    break;
                case N.B5.REJECTED:
                    ((k.message = L.intl.string(L.t.lk30cY)),
                        (k.buttonText = L.intl.string(L.t["8RrsHr"])),
                        (k.onButtonClick = this.handleViewApplicationRejection));
                    break;
                default:
                    ((k.message = L.intl.string(L.t.rEBKvg)),
                        (k.buttonText = L.intl.string(L.t["r8/DT+"])),
                        (k.buttonVariant = "primary"),
                        (k.onButtonClick = this.handleShowMemberVerification));
            }
        else
            null != M && null != E && C
                ? ((k.message = L.intl.format(L.t.HbivnU, { roleName: `@${E.name}` })),
                  null === E.tags.guild_connections &&
                      ((k.buttonText = L.intl.string(L.t["6Ge2LG"])), (k.onButtonClick = () => (0, x.b)(E, M.id))))
                : b || null == j
                  ? i && !S
                      ? ((k.message = L.intl.string(L.t["2dThMM"])),
                        (k.buttonText = L.intl.string(L.t["50gfOv"])),
                        (k.onButtonClick = this.handleVerifyPhone))
                      : s
                        ? ((k.message = L.intl.string(L.t.FkGPS5)),
                          (k.buttonText = L.intl.string(L.t.lm1UKt)),
                          (k.onButtonClick = this.handleResendVerification))
                        : a
                          ? ((k.message = L.intl.formatToPlainString(L.t.IH7RMF, { min: _.$8o.MEMBER_AGE })),
                            (k.countdown = r))
                          : o
                            ? ((k.message = L.intl.formatToPlainString(L.t["2JA2GH"], { min: _.$8o.ACCOUNT_AGE })),
                              (k.countdown = c))
                            : null != T && ed(k, T)
                  : ((k.imageSrc = j.getIconURL(er.iu.SMALL) ?? void 0),
                    v
                        ? (k.message = L.intl.format(L.t["SU2mY/"], { name: j.name }))
                        : ((k.message = L.intl.format(L.t.EvDn1D, { name: j.name })),
                          null != j.connectionEntrypointUrl &&
                              ((k.buttonText = L.intl.string(L.t.S0W8Z5)),
                              (k.onButtonClick = () => {
                                  window.open(j.connectionEntrypointUrl, "_blank");
                              }))));
        return (0, l.jsx)(m.Y, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: D,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, l.jsx)(ea.A, {
                    ...k,
                    children: (0, l.jsxs)("div", {
                        ref: this.textAreaContainerRef,
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            A
                                ? (0, l.jsx)(m.Y, {
                                      targetElementRef: this.upsellTargetRef,
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: R,
                                      position: "top",
                                      children: (e) =>
                                          (0, l.jsx)(g.D, {
                                              innerRef: this.upsellTargetRef,
                                              ...e,
                                              className: ec._,
                                              onClick: this.handleTextAreaClick,
                                              children: u,
                                          }),
                                  })
                                : u,
                        ],
                    }),
                }),
        });
    }
}
function eh(e) {
    let { channel: t, children: n } = e,
        s = t.getGuildId(),
        a = (0, r.bG)([ee.A], () => ee.A.getGuild(s)),
        o = (0, r.bG)([et.A], () => et.A.getCheck(s)),
        c = t.type === _.rbe.GUILD_ANNOUNCEMENT && null != a && a.features.has(_.GuildFeatures.NEWS),
        d = (0, r.bG)([Y.A], () => (c ? Y.A.getFollowerStatsForChannel(t.id) : null)),
        u = (0, r.bG)([G.A], () => G.A.isLurking(s)),
        h = (0, r.bG)([el.default], () => el.default.getCurrentUser()),
        m = h?.isStaff() ?? !1,
        g = (0, r.bG)([Q.Ay], () => null != h && (Q.Ay.getMember(s, h.id)?.isPending ?? !1)),
        p = !!(0, M.Qd)(a),
        A = (0, r.bG)([B], () => B.shouldShowPopout(s)),
        f = (0, r.bG)([en.A], () => en.A.can(_.xBc.SEND_MESSAGES, t)),
        E = (0, r.bG)([R.A], () => R.A.getRequest(s)),
        {
            showLinkedLobbyApplicationLoadingIndicator: x,
            requiredLinkedLobbyApplication: j,
            shouldRelaunchLinkedLobbyApplication: v,
        } = (0, es.A)(t.linkedLobby),
        T = (function (e) {
            let { channelId: t } = e,
                n = (0, r.bG)([b.A], () => {
                    let e = b.A.getPendingReturn();
                    return null == e || e.channelId !== t ? null : e;
                }),
                [l, s] = i.useState(null),
                a = null != n && l === n,
                o = i.useCallback(() => {
                    null == n ||
                        a ||
                        (s(n),
                        S.default.returnToGameProfile({
                            gameId: n.gameId,
                            source: n.source ?? y.GameProfileSources.AnnouncementChannelReturn,
                            initialScrollOffset: n.initialScrollOffset,
                            initialTab: n.tab,
                        }));
                }, [n, a]),
                c = (0, r.bG)([I.A], () => (n?.gameId != null ? I.A.getGame(n.gameId) : null));
            i.useEffect(() => {
                if (c?.id != null) return () => S.default.clearGameProfilePendingReturn(c.id);
            }, [c?.id]);
            let d = c?.name;
            if (null == c || null == d) return null;
            let u = c?.getIconURL(128) ?? void 0;
            return { gameId: c.id, gameName: d, gameIconUrl: u, isReturning: a, onReturnToGameProfile: o };
        })({ channelId: t.id }),
        D = {
            ...o,
            guild: a,
            isLurking: u,
            isFollowable: c,
            shouldShowLurkerModeSuccessPopout: A,
            showLurkerModeUpsellPopout: u && null != a && ei.MJ(_.xBc.SEND_MESSAGES, t),
            theme: X.A.theme,
            canSendMessages: f,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: p,
            showMemberVerificationModal: g && p,
            guildJoinRequestStatus: E?.applicationStatus ?? N.B5.STARTED,
            guildJoinRequest: E,
            showLinkedLobbyApplicationLoadingIndicator: x,
            requiredLinkedLobbyApplication: j,
            shouldRelaunchLinkedLobbyApplication: v,
            useReducedMotion: C.Ay.useReducedMotion,
            isStaff: m,
            pendingGameProfileReturn: T,
        };
    return (0, l.jsx)(eu, { ...D, channel: t, children: n });
}
