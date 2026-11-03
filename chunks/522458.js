(n.r(t), n.d(t, { default: () => nR }));
var l,
    a,
    s = n(477900),
    i = n(582128),
    r = n(503698),
    o = n.n(r),
    c = n(702841),
    d = n(192308),
    u = n(688810),
    m = n(726249),
    g = n(354328),
    E = n(287809),
    h = n(440938),
    f = n(161918),
    x = n(12678),
    C = n(706113),
    p = n(841702),
    S = n(983545),
    A = n(365491);
(n(323874), n(14289), n(35956), n(321073));
var _ = n(806163),
    v = n(17928),
    b = n(196736),
    I = n(689175),
    L = n(277984),
    j = n(670735),
    N = n(790284),
    O = n(780964),
    T = n(766075),
    R = n(280450),
    y = n(166403),
    M = n(123917),
    k = n(24482),
    G = n(814201),
    P = n(581453),
    D = n(43990),
    B = n(403581),
    F = n(834730),
    H = n(821609),
    w = n(793574),
    U = n(75678),
    z = n(202541),
    K = n(818348),
    V = n(135570),
    Y = n(105292),
    W = n(876564);
function $() {
    let e = i.useCallback(() => {
        (0, U.A)({ subscriptionTier: z.pe.TIER_2, analyticsLocations: [w.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, s.jsx)(D.N, {
        theme: K.NJ.DARK,
        children: (t) =>
            (0, s.jsxs)("div", {
                className: o()(W.vK, t),
                children: [
                    (0, s.jsxs)("div", {
                        className: W.Pf,
                        children: [
                            (0, s.jsx)(B.t, {
                                className: W.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, s.jsx)(F.E, {
                                variant: "body-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: Y.intl.string(V.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)(H.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: B.t,
                        text: Y.intl.string(Y.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var Z = n(462887),
    q = n(534514),
    X = n(736653),
    J = n(457865);
function Q(e) {
    let { onRetry: t, errorMessage: n } = e,
        l = (0, X.Ay)(),
        a = (0, v.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, s.jsxs)("div", {
        className: J.kL,
        children: [
            (0, s.jsx)("img", {
                className: J.Sl,
                src: (0, Z.M)(l) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, s.jsx)(q.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t.i5SQ74) }),
            (0, s.jsx)(F.E, {
                className: J.h_,
                variant: "body-md/normal",
                color: "text-muted",
                children: Y.intl.string(Y.t.F8FvUy),
            }),
            a &&
                null != n &&
                (0, s.jsx)(F.E, { variant: "body-sm/normal", color: "text-muted", children: "staff-only debug: " + n }),
            (0, s.jsx)(H.$, { variant: "primary", text: Y.intl.string(Y.t["+hivLW"]), onClick: t }),
        ],
    });
}
var ee = n(349085),
    et = n(890856),
    en = n(331322),
    el = n(713517),
    ea = n(660669);
function es(e) {
    let { name: t, coverUrl: n, fromPriceLabel: l, nitroFromPriceLabel: a, onClickCard: r, onClickViewPlans: c } = e,
        d = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, el.A)(d),
        m = (0, v.bG)([E.default], () => k.Ay.canUseShopDiscounts(E.default.getCurrentUser())) && null != a,
        g = m ? a : l,
        h = i.useCallback(
            (e) => {
                (e.stopPropagation(), c?.());
            },
            [c],
        );
    return (0, s.jsxs)(et.s, {
        ref: d,
        onClick: r,
        "aria-label": t,
        className: o()(ea.Nr, { [ea.yo]: u }),
        children: [
            (0, s.jsx)("div", {
                className: ea.q4,
                "aria-hidden": !0,
                children: null != n && (0, s.jsx)("img", { className: ea.xy, src: n, alt: "" }),
            }),
            (0, s.jsxs)("div", {
                className: ea.Iv,
                children: [
                    null != n
                        ? (0, s.jsx)("img", { className: ea.N4, src: n, alt: "" })
                        : (0, s.jsx)("div", {
                              className: ea.WB,
                              children: (0, s.jsx)(F.E, {
                                  variant: "body-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, s.jsx)("div", { className: ea.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: ea.qr,
                children: [
                    (0, s.jsxs)("div", {
                        className: ea.cs,
                        children: [
                            (0, s.jsx)(F.E, { variant: "body-md/medium", color: "text-strong", tag: "p", children: t }),
                            null != g &&
                                (0, s.jsx)("div", {
                                    className: ea.F1,
                                    children: (0, s.jsxs)(en.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, s.jsxs)(en.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    m &&
                                                        (0, s.jsx)(B.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, s.jsx)(F.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: g,
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: ea.E1,
                        children: (0, s.jsx)(H.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: Y.intl.string(V.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ei = n(469058);
function er() {
    return (0, s.jsx)("div", {
        className: o()(ea.Nr, ei.s7, ei.U6),
        "aria-hidden": !0,
        children: (0, s.jsxs)("div", {
            className: ei.qr,
            children: [(0, s.jsx)("div", { className: ei.w9 }), (0, s.jsx)("div", { className: ei.n2 })],
        }),
    });
}
var eo = n(901215);
let ec = i.memo(function (e) {
    let { game: t, onSelect: n } = e,
        l = i.useCallback(() => n(t), [t, n]),
        a = (0, ee.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, s.jsx)(es, {
        name: t.name,
        coverUrl: a,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: l,
        onClickViewPlans: l,
    });
});
function ed(e) {
    let { games: t, title: n, onSelectGame: l, loading: a = !1 } = e;
    return (0, s.jsxs)("section", {
        className: eo.u,
        children: [
            null != n && (0, s.jsx)(q.D, { variant: "heading-lg/semibold", children: n }),
            (0, s.jsx)("div", {
                className: eo.V,
                children: a
                    ? Array.from({ length: 10 }, (e, t) => (0, s.jsx)(er, {}, t))
                    : t.map((e) => (0, s.jsx)(ec, { game: e, onSelect: l }, e.id)),
            }),
        ],
    });
}
var eu = n(32880),
    em = n(410232),
    eg = n(231483),
    eE = n(339350),
    eh = n(28863),
    ef = n(442935);
function ex() {
    let e = i.useMemo(
        () => [
            { Icon: eu.DownloadIcon, label: Y.intl.string(V.default.GJNQYz) },
            { Icon: em.k, label: Y.intl.string(V.default.pTinR2) },
            { Icon: eg.ShieldIcon, label: Y.intl.string(V.default.s0N1nM) },
            { Icon: eE.Q, label: Y.intl.string(V.default.NzrGEi) },
        ],
        [],
    );
    return (0, s.jsxs)("section", {
        className: ef.ZK,
        children: [
            (0, s.jsxs)("div", {
                className: ef.jE,
                children: [
                    (0, s.jsx)(q.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: Y.intl.string(V.default.F5W36W),
                    }),
                    (0, s.jsxs)(F.E, {
                        variant: "body-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            Y.intl.string(V.default.xMpGuO),
                            " ",
                            (0, s.jsx)(eh.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: Y.intl.string(V.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: ef._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, s.jsxs)(
                        "div",
                        {
                            className: ef.Tc,
                            children: [
                                (0, s.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, s.jsx)(F.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-subtle",
                                    tag: "span",
                                    children: n,
                                }),
                            ],
                        },
                        n,
                    );
                }),
            }),
        ],
    });
}
var eC = n(305090);
function ep() {
    return (0, s.jsxs)("div", {
        className: eC.vK,
        children: [
            (0, s.jsx)("div", {
                className: eC.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, s.jsx)("div", { className: eC.Ge, "aria-hidden": !0 }),
            (0, s.jsx)("div", { className: eC.f5, "aria-hidden": !0 }),
        ],
    });
}
var eS = n(408278),
    eA = n(548411),
    e_ = n(554830),
    ev = n(281445),
    eb = n(390544),
    eI = n(554146),
    eL = n(939249),
    ej = n(509434),
    eN = n(866665),
    eO = n(103271);
let eT = { TERTIARY: eO.Xe, SECONDARY: eO.Rm, PRIMARY: eO.zB },
    eR = { SIZE_24: eO.q1, SIZE_32: eO.Hb, SIZE_36: eO.VM };
function ey(e) {
    let {
        className: t,
        tooltip: n,
        color: l,
        size: a = eR.SIZE_32,
        icon: i,
        onMouseDown: r,
        onClick: c,
        disabled: d,
        focusProps: u,
        ref: m,
    } = e;
    return (0, s.jsx)(eN.m, {
        asContainer: !0,
        text: n,
        shouldShow: !d,
        children: (0, s.jsx)(eL.D, {
            innerRef: m,
            "aria-label": n,
            "aria-disabled": d,
            className: o()(t, eO.x6, l, a, { [eO.r9]: d }),
            onMouseDown: r,
            onClick: (e) => {
                c(e);
            },
            focusProps: u,
            children: i,
        }),
    });
}
var eM = n(933832),
    ek = n(624479),
    eG = n(131607),
    eP = n(427209),
    eD = n(95035),
    eB = n(498480),
    eF = n(685743),
    eH = n(981381),
    ew = n(342942),
    eU = n(294454),
    ez = n(625903),
    eK = n(445927),
    eV = n(376205);
function eY(e) {
    let { server: t, onOpenSettings: n } = e,
        l = t.instance.subscriptionId,
        a = (0, v.bG)(
            [y.A],
            () =>
                (0, eV.Yg)({
                    subscriptionId: l,
                    hasFetchedSubscriptions: y.A.hasFetchedSubscriptions(),
                    getSubscriptionById: (e) => y.A.getSubscriptionById(e),
                }),
            [l],
        ),
        r = (0, eK.A)(t.instance) && a,
        o = i.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, s.jsx)(ey, {
        color: eT.SECONDARY,
        size: eR.SIZE_24,
        icon: (0, s.jsx)(ez.SettingsIcon, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: o,
        disabled: !r,
        tooltip: Y.intl.string(V.default["feUiM/"]),
    });
}
var eW = n(652215),
    e$ = n(628049),
    eZ = n(49999),
    eq = n(684644);
let eX = [eb.M.STARTUP_FAILED, eb.M.MISSING_STOCK, eb.M.PROVIDER_ERRORED, eb.M.DELETED];
function eJ(e) {
    return `game-server-owned-card-${e}`;
}
function eQ(e) {
    let { gameServerId: t } = e,
        n = i.useCallback(() => {
            (0, eB.Kz)(t).catch(() => {});
        }, [t]);
    return (0, s.jsx)("div", {
        className: eq.y7,
        children: (0, s.jsx)(H.$, {
            fullWidth: !0,
            text: Y.intl.string(V.default.TMzy7d),
            variant: "secondary",
            onClick: n,
        }),
    });
}
function e0() {
    let [e, t] = i.useState(!1),
        n = i.useCallback(() => {
            (t(!0),
                (0, eB.hU)()
                    .catch(() => {})
                    .finally(() => t(!1)));
        }, []);
    return (0, s.jsx)("div", {
        className: eq.y7,
        children: (0, s.jsx)(H.$, {
            fullWidth: !0,
            text: Y.intl.string(V.default.BLEx3k),
            variant: "secondary",
            loading: e,
            onClick: n,
        }),
    });
}
let e1 = i.memo(function (e) {
    let { server: t, onJoin: l, onViewPanel: a, onOpenSettings: r, isHighlighted: c = !1 } = e,
        u = (0, ee.A)(t.gameId, "cover") ?? t.coverUrl,
        m = (function (e) {
            let t = (0, v.bG)([y.A], () => (null != e ? y.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === eW.Dmq.CANCELED
                ? { text: Y.intl.formatToPlainString(V.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: Y.intl.formatToPlainString(V.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [g, E] = (0, eG.kn)([eI.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        h = g !== eI.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        f = ev.X.SHOCKBYTE,
        x = R.default.getId() ?? "0",
        { handleCopyServerIp: C, animateCopyIcon: p } = (0, eF.A)(x, t.id, w.A.GAME_SERVER_PAGE, t.serverIp),
        S = i.useCallback(() => {
            (0, ew.A)({
                provider: f,
                onAccept: () => {
                    (E(eZ.i.TAKE_ACTION), C());
                },
            });
        }, [f, E, C]),
        A = i.useCallback(() => {
            h
                ? l(t)
                : (0, ew.A)({
                      provider: f,
                      onAccept: () => {
                          (E(eZ.i.TAKE_ACTION), l(t));
                      },
                  });
        }, [h, f, E, l, t]),
        _ = i.useCallback(() => a(t), [a, t]),
        b = i.useCallback(() => {
            ((e) => {
                let { server: t, source: l } = e;
                (0, d.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("937139"),
                            n.e("921611"),
                            n.e("592000"),
                            n.e("524434"),
                            n.e("933947"),
                            n.e("866475"),
                            n.e("279926"),
                            n.e("481647"),
                            n.e("776602"),
                            n.e("140402"),
                            n.e("844780"),
                            n.e("770291"),
                            n.e("854461"),
                            n.e("368062"),
                            n.e("713567"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("304329"),
                            n.e("207960"),
                            n.e("835868"),
                        ]).then(n.bind(n, 729751));
                        return (n) => (0, s.jsx)(e, { ...n, server: t, source: l });
                    },
                    { stackingBehavior: "stack", modalKey: eU.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        I = (0, eH.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e$.qb[f],
        L = null != t.instance.gameServerPanelUrl,
        j = null != t.instance.status && eX.includes(t.instance.status),
        N = i.useCallback(() => {
            (0, M.h)({ href: I });
        }, [I]),
        O = i.useMemo(() => {
            switch (t.instance.status) {
                case eb.M.ONLINE:
                    return Y.intl.string(V.default["60kAzo"]);
                case eb.M.OFFLINE:
                    return Y.intl.string(V.default["Ys/RrB"]);
                case eb.M.SLEEPING:
                    return Y.intl.string(V.default.y0z8ZO);
                case eb.M.STARTUP_FAILED:
                    return Y.intl.string(V.default["7C9Z3s"]);
                case eb.M.MISSING_STOCK:
                    return Y.intl.string(V.default["+a5G2l"]);
                case eb.M.PROVIDER_ERRORED:
                    return Y.intl.string(V.default["6g/oji"]);
                case eb.M.DELETED:
                    return Y.intl.string(V.default.Z1NZwX);
                case eb.M.STARTING:
                    return Y.intl.string(V.default.SgjaXI);
                default:
                    return "\u2014";
            }
        }, [t.instance.status]),
        T = t.isOnline ? "text-feedback-positive" : j ? "text-feedback-critical" : "text-muted",
        k = i.useMemo(
            () =>
                (0, s.jsx)(eL.D, {
                    className: o()(eq.wC, eq.QV),
                    onClick: A,
                    "aria-label": Y.intl.string(V.default["fQCcM/"]),
                    children: (0, s.jsx)(F.E, {
                        variant: "body-sm/semibold",
                        color: "none",
                        children: Y.intl.string(V.default["fQCcM/"]),
                    }),
                }),
            [A],
        ),
        G = i.useMemo(
            () =>
                (0, s.jsxs)(eL.D, {
                    className: o()(eq.wC, eq.y2, { [eq.Gz]: !L }),
                    onClick: L ? _ : void 0,
                    "aria-disabled": !L,
                    "aria-label": Y.intl.string(V.default.tkbVdf),
                    children: [
                        (0, s.jsx)(F.E, {
                            variant: "body-sm/semibold",
                            color: "none",
                            children: Y.intl.string(V.default.tkbVdf),
                        }),
                        (0, s.jsx)(ej.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                    ],
                }),
            [_, L],
        ),
        P = i.useMemo(() => {
            switch (t.instance.status) {
                case eb.M.SLEEPING:
                    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(eQ, { gameServerId: t.id }), G] });
                case eb.M.STARTUP_FAILED:
                case eb.M.MISSING_STOCK:
                    return (0, s.jsx)("div", {
                        className: eq.y7,
                        children: (0, s.jsx)(H.$, {
                            fullWidth: !0,
                            text: Y.intl.string(V.default.gWMqnI),
                            variant: "primary",
                            icon: ej.I,
                            iconPosition: "end",
                            disabled: !L,
                            onClick: _,
                        }),
                    });
                case eb.M.PROVIDER_ERRORED:
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", {
                                className: eq.y7,
                                children: (0, s.jsx)(H.$, {
                                    fullWidth: !0,
                                    text: Y.intl.string(V.default.bBkeMs),
                                    variant: "secondary",
                                    onClick: N,
                                }),
                            }),
                            (0, s.jsx)(e0, {}),
                        ],
                    });
                case eb.M.DELETED:
                    return G;
                default:
                    return (0, s.jsxs)(s.Fragment, { children: [k, G] });
            }
        }, [t.instance.status, t.id, L, k, G, _, N]);
    return (0, s.jsxs)("div", {
        id: eJ(t.id),
        className: o()(eq.Nr, { [eq.mr]: c }),
        children: [
            c && (0, s.jsx)("div", { className: eq._8, "aria-hidden": !0 }),
            (0, s.jsxs)("div", {
                className: eq.Nk,
                "aria-hidden": !0,
                children: [
                    null != u && (0, s.jsx)("img", { className: eq.QC, src: u, alt: "" }),
                    (0, s.jsx)("div", { className: eq.jc }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eq.AQ,
                children: [
                    (0, s.jsx)(ey, {
                        color: eT.SECONDARY,
                        size: eR.SIZE_24,
                        icon: (0, s.jsx)(eP.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: b,
                        tooltip: Y.intl.string(Y.t.RDE0Sc),
                    }),
                    (0, s.jsx)(eY, { server: t, onOpenSettings: r }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eq.rf,
                children: [
                    (0, s.jsxs)("div", {
                        className: eq.U1,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eq.oL,
                                children: [
                                    null != u
                                        ? (0, s.jsx)("img", { className: eq.vT, src: u, alt: "" })
                                        : (0, s.jsx)("div", {
                                              className: eq.iv,
                                              children: (0, s.jsx)(F.E, {
                                                  variant: "body-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, s.jsx)("div", { className: eq.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: eq.VQ,
                                children: [
                                    (0, s.jsx)(F.E, {
                                        variant: "body-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, s.jsx)(F.E, {
                                        variant: "body-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != m &&
                                        (0, s.jsx)(F.E, {
                                            variant: "body-sm/medium",
                                            color: "text-feedback-critical",
                                            tag: "div",
                                            children: m.text,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eq.M1,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eq.N8,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: eq.bi,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default.bDdi7n),
                                            }),
                                            (0, s.jsx)(F.E, {
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eq.gv,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default["7phwMG"]),
                                            }),
                                            h
                                                ? (0, s.jsxs)("div", {
                                                      className: eq.Yb,
                                                      children: [
                                                          (0, s.jsx)(F.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, s.jsx)(eL.D, {
                                                                  className: eq.cL,
                                                                  onClick: C,
                                                                  "aria-label": Y.intl.string(Y.t.OpuAlK),
                                                                  children: p
                                                                      ? (0, s.jsx)(eM.CheckmarkLargeIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, s.jsx)(ek.CopyIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, s.jsx)(eD.A, {
                                                      onClick: S,
                                                      children: Y.intl.string(V.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: eq.N8,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: eq.bi,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default["n+ZX7y"]),
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: eq.Yb,
                                                children: [
                                                    (t.isOnline || j) &&
                                                        (0, s.jsx)("span", {
                                                            className: o()(eq.kg, { [eq.rU]: j }),
                                                            "aria-hidden": !0,
                                                        }),
                                                    (0, s.jsx)(F.E, {
                                                        variant: "body-sm/medium",
                                                        color: T,
                                                        tag: "span",
                                                        children: O,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eq.gv,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default.mJlz3T),
                                            }),
                                            (0, s.jsx)(F.E, {
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.location,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: eq.qr, children: P }),
        ],
    });
});
var e2 = n(367016);
function e6(e) {
    let {
            servers: t,
            onViewAll: n,
            onJoin: l,
            onViewPanel: a,
            onOpenSettings: r,
            highlightServerId: c = null,
            highlightNonce: d = 0,
        } = e,
        u = i.useRef(null),
        m = i.useRef(null),
        [g, E] = i.useState(!1),
        [h, f] = i.useState(!1),
        [x, C] = i.useState(null),
        p = i.useCallback(() => {
            let e = u.current;
            null != e && (E(e.scrollLeft > 1), f(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    (i.useLayoutEffect(() => {
        p();
    }, [p, t]),
        i.useEffect(() => {
            let e = u.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                p();
            });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }, [p]));
    let S = i.useCallback(() => {
            u.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        A = i.useCallback(() => {
            u.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        i.useEffect(() => {
            if (d <= 0) return;
            let e = null != c ? document.getElementById(eJ(c)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    (C(null), (t = requestAnimationFrame(() => C(c))));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(t));
            };
        }, [d, c]),
        i.useEffect(() => {
            if (null == x) return;
            let e = setTimeout(() => C(null), 4e3);
            return () => clearTimeout(e);
        }, [x]),
        (0, s.jsxs)("section", {
            className: e2.uW,
            ref: m,
            children: [
                (0, s.jsxs)("div", {
                    className: e2.wx,
                    children: [
                        (0, s.jsx)(q.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: Y.intl.string(V.default.BOWmmT),
                        }),
                        (0, s.jsx)(D.N, {
                            theme: K.NJ.DARK,
                            children: (e) =>
                                (0, s.jsxs)("div", {
                                    className: o()(e2.$s, e),
                                    children: [
                                        (0, s.jsx)(H.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: Y.intl.string(Y.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: e2.d$,
                                            children: [
                                                (0, s.jsx)(eS.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eA.Z,
                                                    disabled: !g,
                                                    onClick: S,
                                                    "aria-label": Y.intl.string(Y.t["13/7kX"]),
                                                }),
                                                (0, s.jsx)(eS.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: e_.K,
                                                    disabled: !h,
                                                    onClick: A,
                                                    "aria-label": Y.intl.string(Y.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: o()(e2.XG, { [e2.OW]: g && h, [e2.vL]: g && !h, [e2.y0]: h && !g }),
                    ref: u,
                    onScroll: p,
                    children: t.map((e) =>
                        (0, s.jsx)(
                            "div",
                            {
                                className: e2.AV,
                                children: (0, s.jsx)(e1, {
                                    server: e,
                                    onJoin: l,
                                    onViewPanel: a,
                                    onOpenSettings: r,
                                    isHighlighted: x === e.id,
                                }),
                            },
                            e.id,
                        ),
                    ),
                }),
            ],
        })
    );
}
var e8 = n(705285),
    e5 = n(199781),
    e7 = n(923477),
    e4 = n(252589),
    e3 = n(55766),
    e9 = n(758836),
    te = n(111108);
function tt(e) {
    let { isGameServerHostingInShopEnabled: t } = e;
    return (0, s.jsx)(j.A, { children: (0, s.jsx)(tn, { isGameServerHostingInShopEnabled: t }) });
}
function tn(e) {
    let { isGameServerHostingInShopEnabled: t } = e,
        n = (0, _.zy)(),
        l = (0, _.W6)(),
        { servers: a, refetch: r } = (0, e3.f)(),
        o = a.length > 0,
        c = (0, v.bG)([E.default], () => k.Ay.canUseShopDiscounts(E.default.getCurrentUser())),
        { games: d, hasError: u, isEmpty: m, isLoading: g, refetch: h } = (0, e4.Y)();
    i.useEffect(() => {
        o && (0, L.hP)().catch(() => {});
    }, [o]);
    let f = i.useRef(d);
    i.useEffect(() => {
        d.length > 0 && (f.current = d);
    }, [d]);
    let x = i.useCallback(() => {
            (h(), r());
        }, [h, r]),
        C = (0, e8.VJ)(),
        [p, S] = i.useState({ serverId: null, nonce: 0 }),
        A = i.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = G.A.getGameServers();
                for (let l = n.length - 1; l >= 0; l--)
                    if (n[l].game_id === e.gameId) {
                        t = n[l].id;
                        break;
                    }
            }
            S((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        b = i.useCallback(() => {
            let e = a[0];
            null != e && A({ serverId: e.id });
        }, [a, A]),
        j = (0, e7.O)((e) => e.highlightFirstCardNonce),
        D = i.useRef(j);
    i.useEffect(() => {
        if (j === D.current) return;
        D.current = j;
        let e = requestAnimationFrame(() => b());
        return () => cancelAnimationFrame(e);
    }, [j, b]);
    let B = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e8.cl.SHOP_CARD;
                (C(e8.L5.OPEN_PLAN_MODAL, t),
                    (0, e5.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => A({ gameId: e.gameId }),
                    }));
            },
            [C, A],
        ),
        F = i.useMemo(() => {
            let e = new URLSearchParams(n.search).get(e9.tD);
            return null != e && "" !== e ? e : void 0;
        }, [n.search]);
    i.useEffect(() => {
        if (!t || null == F || g || 0 === d.length) return;
        let e = d.find((e) => e.gameId === F);
        if (null == e) return;
        B(e, e8.cl.ACTIVITY_PANEL_DEEP_LINK);
        let a = new URLSearchParams(n.search);
        (a.delete(e9.tD), l.replace(`${n.pathname}?${a.toString()}`));
    }, [t, F, d, g, B, l, n.pathname, n.search]);
    let H = i.useCallback(() => {
            (N.A.setState({ scrollToGameServers: !0 }), (0, T.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL));
        }, []),
        w = i.useCallback((e) => {
            let t = R.default.getId() ?? "0";
            (0, P.A)(t, e.instance);
        }, []),
        U = i.useCallback((e) => {
            (0, M.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        z = i.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = f.current.find((t) => t.gameId === e.gameId);
                function l(t) {
                    (0, e5.S)({
                        gameName: e.gameName,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: n?.plans,
                        initialPlanId: e.instance.planId,
                        initialRegionId: e.instance.regionId,
                        initialRegionName: e.location,
                        initialServerName: e.serverName,
                        activeSubscription: t,
                        onViewServer: () => A({ serverId: e.id }),
                    });
                }
                let a = y.A.getSubscriptionById(t);
                null != a
                    ? l(a)
                    : (0, L.hP)()
                          .then(() => {
                              let e = y.A.getSubscriptionById(t);
                              null != e && l(e);
                          })
                          .catch(() => {});
            },
            [A],
        ),
        K = o ? Y.intl.string(V.default["+aRmAc"]) : void 0;
    return (0, s.jsx)(I.Ch, {
        className: te.XG,
        children: (0, s.jsxs)("div", {
            className: te.kL,
            children: [
                !c && (0, s.jsx)($, {}),
                (0, s.jsx)(ep, {}),
                (0, s.jsxs)("div", {
                    className: te.Qs,
                    children: [
                        (0, s.jsx)(ex, {}),
                        o &&
                            (0, s.jsx)(e6, {
                                servers: a,
                                onViewAll: H,
                                onJoin: w,
                                onViewPanel: U,
                                onOpenSettings: z,
                                highlightServerId: p.serverId,
                                highlightNonce: p.nonce,
                            }),
                        u || m
                            ? (0, s.jsx)(Q, { onRetry: x })
                            : (0, s.jsx)(ed, { games: d, title: K, onSelectGame: B, loading: g }),
                    ],
                }),
            ],
        }),
    });
}
var tl = n(38405),
    ta = n(815996),
    ts = n(4227),
    ti = n(856686),
    tr = n(364522),
    to = n(783977),
    tc = n(174459),
    td = n(918467),
    tu = n(758461),
    tm = n(641150);
function tg() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: l } = (0, A.v)((e) => e),
        { totalCount: a, isFetchingResults: r } = (0, ti.S)(),
        o = (0, A.v)((e) => e.hasFilters()),
        c = i.useCallback(() => {
            if (!o) return "";
            if (r) return Y.intl.string(Y.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return Y.intl.format(Y.t.KJMJOz, { count: a, search: e });
            }
            if (!n && !l && 1 === e.size) {
                if (e.has(tm.q.AVATAR_DECORATION)) return Y.intl.format(Y.t.s1UzGQ, { count: a });
                if (e.has(tm.q.NAMEPLATE)) return Y.intl.format(Y.t.ZWGN9T, { count: a });
                if (e.has(tm.q.PROFILE_EFFECT)) return Y.intl.format(Y.t["v/7apu"], { count: a });
                if (e.has(tm.q.PROFILE_FRAME)) return Y.intl.format(Y.t.eu4eRy, { count: a });
                if (e.has(tm.q.BUNDLE)) return Y.intl.format(Y.t.fZ1rdk, { count: a });
            }
            return 0 === e.size && n && !l
                ? Y.intl.format(Y.t.TxoTTj, { count: a })
                : 0 === e.size && l && !n
                  ? Y.intl.format(Y.t.TLso50, { count: a })
                  : Y.intl.format(Y.t["/rPvmQ"], { count: a });
        }, [e, a, o, t, r, n, l]);
    return (0, s.jsx)(q.D, { variant: "heading-lg/semibold", children: c() });
}
var tE = n(172218),
    th = n(932793),
    tf = n(511265),
    tx = n(206077),
    tC = n(100057),
    tp = n(828515),
    tS = n(484469),
    tA = n(761977),
    t_ = n(170522),
    tv = n(295621);
let tb = function () {
    return (0, s.jsx)("div", {
        className: tv.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, s.jsxs)(
                "div",
                {
                    className: t_.vY,
                    children: [
                        (0, s.jsx)("div", { className: o()(tA.sW, tv.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, s.jsx)(tS.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tI = n(905276),
    tL = n(350172),
    tj = n(730202),
    tN = n(510801),
    tO = n(998694);
let tT = null,
    tR = new Map();
function ty(e) {
    let { category: t } = e,
        n = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        l = (0, tx.X)(t.products),
        a = (0, tf.p)()(l);
    return null == n || 0 === a.length
        ? null
        : (0, s.jsx)("div", {
              className: t_.vY,
              children: a.map((e, t) =>
                  (0, s.jsx)(
                      h.R9,
                      { newValue: { tilePosition: t }, children: (0, s.jsx)(tI.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tM(e) {
    let { category: t, currentPage: n } = e,
        [l, a] = i.useState(!1),
        r = (0, tE.K)(function (e) {
            a(e);
        }, 0.15),
        o = (0, _.W6)(),
        c = (0, h.uM)(),
        d = i.useCallback(() => {
            var e;
            (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: c?.sessionId,
                sku_id: t.skuId,
                page_type: e9.G2.CATALOG,
                page_section: c?.pageSection,
                page_category: t.name,
                page_index: c?.pageIndex,
                page_size: c?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (e = t.skuId),
                (tT = e),
                null != e && null != n && tR.set(e, n),
                o.push(eW.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId)));
        }, [c?.pageIndex, c?.pageSection, c?.pageSize, c?.sessionId, t.name, t.skuId, n, o]);
    return (0, s.jsxs)("div", {
        className: t_.EF,
        ref: r,
        children: [(0, s.jsx)(tp.A, { category: t, onSelect: d }), (0, s.jsx)(ty, { category: t })],
    });
}
function tk(e) {
    let { setCategoryRef: t, currentPage: n, handlePageChange: l, initialCategoryId: a } = e,
        r = (0, h.uM)(),
        o = r?.sessionId ?? "",
        { noCache: c, includeUnpublished: d } = (0, tO.A)(),
        {
            categories: u,
            total: m,
            isLoading: g,
        } = (function (e) {
            let { page: t, pageSize: n, includeUnpublished: l, noCache: a } = e,
                s = i.useMemo(
                    () => ({
                        applicationId: eW.FYj,
                        offset: (t - 1) * n,
                        limit: n,
                        useShopOrdering: !0,
                        includeUnpublishedProducts: l,
                        includeUnpublishedCollections: l,
                        ignoreCache: a,
                    }),
                    [t, n, l, a],
                ),
                r = (0, tL.H)(s),
                o = (0, tL.q7)(s);
            i.useEffect(() => {
                (0, tL.cS)(s);
            }, [s]);
            let {
                    collectionIds: c,
                    fetchState: d,
                    total: u,
                } = (0, v.cf)(
                    [tj.A],
                    () => ({
                        collectionIds: tj.A.getCollectionPageIds(r),
                        fetchState: tj.A.getCollectionPageFetchState(r),
                        total: tj.A.getCollectionListTotal(o),
                    }),
                    [r, o],
                ),
                m = c ?? [],
                g = m.join(","),
                E = (0, v.cf)(
                    [tj.A],
                    () => {
                        let e = {};
                        for (let t of m) e[t] = tj.A.getCollection(t);
                        return e;
                    },
                    [m],
                );
            return {
                categories: i.useMemo(
                    () =>
                        m
                            .map((e) => E[e])
                            .filter((e) => null != e)
                            .map((e) => tN.A.fromStorefrontCollectionRecord(e)),
                    [g, E],
                ),
                total: u ?? 0,
                isLoading: null == c && "error" !== d,
            };
        })({ page: n, pageSize: e9.l5, includeUnpublished: d, noCache: c }),
        E = i.useRef(void 0);
    i.useEffect(() => {
        if (null == a) {
            E.current = void 0;
            return;
        }
        if (a === E.current) return;
        let e = tR.get(a);
        null != e && (e !== n && l(e), (E.current = a));
    }, [a, l, n]);
    let f = i.useMemo(() => u.filter((e) => e.products.length > 0), [u]);
    return (i.useEffect(() => {
        (0, tC.z)({
            sessionId: o,
            checkpoint: tC.t.SHOP_MOUNTED,
            tab: e9.G2.CATALOG,
            unpublishedCategoriesShown: d,
            cacheDisabled: c,
        });
    }, []),
    i.useEffect(() => {
        g ||
            0 === f.length ||
            (0, tC.z)({
                sessionId: o,
                checkpoint: tC.t.SHOP_RENDERED,
                tab: e9.G2.CATALOG,
                unpublishedCategoriesShown: d,
                cacheDisabled: c,
            });
    }, [o, d, c, g, f.length]),
    g)
        ? (0, s.jsx)(tb, {})
        : (0, s.jsxs)("div", {
              className: t_.LZ,
              children: [
                  f.map((e, l) =>
                      (0, s.jsx)(
                          "div",
                          {
                              ref: (n) => t(e.skuId, n),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": Y.intl.formatToPlainString(Y.t.FNtLb3, { category: e.name }),
                              children: (0, s.jsx)(h.R9, {
                                  newValue: { categoryPosition: l },
                                  children: (0, s.jsx)(tM, { category: e, currentPage: n }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, s.jsx)("div", {
                      className: t_.Ej,
                      children: (0, s.jsx)(th.m, {
                          currentPage: n,
                          totalCount: m,
                          pageSize: e9.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var tG = n(177366),
    tP = n(401864),
    tD = n(124987),
    tB = n(691885),
    tF = n(783857),
    tH = n(878278);
let tw = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, A.v)(),
        l = (0, h.uM)(),
        a = (0, tF.yB)("CollectiblesSortSelect"),
        r = n(),
        c = i.useMemo(() => e9.QB.filter((e) => e.sortType !== tD.$.RELEVANCE || r), [r]),
        d = i.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tD.$.RECENCY
                ? { label: Y.intl.string(Y.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tD.$.PRICE
                  ? n === tP.A.ASC
                      ? { label: Y.intl.string(Y.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: Y.intl.string(Y.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tD.$.RELEVANCE
                    ? { label: Y.intl.string(Y.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: Y.intl.string(Y.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        u = i.useCallback(
            (e) =>
                ({
                    recent: { sortType: tD.$.RECENCY, sortDirection: tP.A.DESC },
                    "price-asc": { sortType: tD.$.PRICE, sortDirection: tP.A.ASC },
                    "price-desc": { sortType: tD.$.PRICE, sortDirection: tP.A.DESC },
                    popularity: { sortType: tD.$.POPULARITY, sortDirection: tP.A.DESC },
                    relevance: { sortType: tD.$.RELEVANCE, sortDirection: tP.A.DESC },
                })[e],
            [],
        ),
        m = i.useCallback(
            (e) => {
                let n = d(u(e));
                (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_section: l?.pageSection,
                    page_category: l?.pageCategory,
                    page_index: l?.pageIndex,
                    page_size: l?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(u(e)));
            },
            [l, d, u, t],
        ),
        g = d(e);
    return (0, s.jsx)("div", {
        className: o()(tH.k, { [tF.jP]: a }),
        children: (0, s.jsx)(tB.l, {
            label: Y.intl.string(Y.t.uaX705),
            hideLabel: !0,
            options: c.map(d),
            onSelectionChange: m,
            value: g.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var tU =
        (((l = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (l.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (l.PINK = "COLLECTIBLES_COLOR_PINK"),
        (l.RED = "COLLECTIBLES_COLOR_RED"),
        (l.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (l.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (l.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (l.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (l.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (l.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        l),
    tz =
        (((a = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (a.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (a.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (a.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (a.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (a.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (a.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (a.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (a.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (a.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        a),
    tK = n(150934),
    tV = n(62010),
    tY = n(278416),
    tW = n(602853),
    t$ = n(661531),
    tZ = n(947641),
    tq = n(604338),
    tX = n(785866),
    tJ = n(373846),
    tQ = n(308323),
    t0 = n(608599),
    t1 = n(685761),
    t2 = n(157225),
    t6 = n(413249),
    t8 = n(510241),
    t5 = n(601198),
    t7 = n(872162),
    t4 = n(890283),
    t3 = n(7250),
    t9 = n(582666);
function ne() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: l,
            onToggleOfferEligible: a,
            offerEligible: r,
            reset: o,
            hasFilters: c,
        } = (0, A.v)(),
        d = c(),
        u = (0, h.uM)(),
        m = i.useRef(null),
        g = i.useId(),
        E = i.useId(),
        f = (0, tu.HH)(),
        x = i.useCallback(
            (e) => {
                tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: u?.sessionId,
                    page_section: u?.pageSection,
                    page_category: u?.pageCategory,
                    page_index: u?.pageIndex,
                    page_size: u?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [u],
        ),
        C = i.useCallback(() => {
            (x(`filter 3p only ${!1 === l ? "on" : "off"}`), n());
        }, [n, l, x]);
    return (0, s.jsxs)("div", {
        className: t9.kT,
        children: [
            (0, s.jsxs)("div", {
                className: t9.KZ,
                children: [
                    (0, s.jsx)("div", {
                        ref: m,
                        tabIndex: -1,
                        children: (0, s.jsx)(q.D, {
                            variant: "heading-sm/semibold",
                            className: t9.hr,
                            id: g,
                            children: Y.intl.string(Y.t.aDZysP),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        role: "group",
                        "aria-labelledby": g,
                        className: t9.mM,
                        children: e9._6.map((e) => (0, s.jsx)(nt, { filter: e, trackFilterAction: x }, e)),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: t9.KZ,
                children: [
                    (0, s.jsx)(q.D, {
                        variant: "heading-sm/semibold",
                        className: t9.hr,
                        id: E,
                        children: Y.intl.string(Y.t.Vfebhe),
                    }),
                    (0, s.jsxs)("div", {
                        role: "group",
                        "aria-labelledby": E,
                        className: t9.mM,
                        children: [
                            (0, s.jsx)(tK.S, {
                                checked: t,
                                onChange: () => {
                                    (x(`filter orb eligible ${!1 === t ? "on" : "off"}`), e());
                                },
                                label: Y.intl.string(Y.t.AHHHgG),
                            }),
                            (0, s.jsx)(tK.S, { checked: l, onChange: C, label: Y.intl.string(Y.t["+W8gb+"]) }),
                            null != f &&
                                (0, s.jsxs)("div", {
                                    className: t9.Ym,
                                    children: [
                                        (0, s.jsx)(tK.S, {
                                            checked: r,
                                            onChange: () => {
                                                (x(`filter offer eligible ${!1 === r ? "on" : "off"}`), a());
                                            },
                                            label: Y.intl.string(Y.t.hY8Ft1),
                                        }),
                                        (0, s.jsx)(tV.E, {
                                            type: { text: Y.intl.string(Y.t["nb5PC/"]) },
                                            icon: tY.TagIcon,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(nn, { trackFilterAction: x }),
            (0, s.jsx)(ns, { trackFilterAction: x }),
            d &&
                (0, s.jsx)(H.$, {
                    variant: "secondary",
                    onClick: () => {
                        (x("filter reset"), o(), requestAnimationFrame(() => m.current?.focus()));
                    },
                    text: Y.intl.string(Y.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function nt(e) {
    let { filter: t, trackFilterAction: n } = e,
        l = {
            [tm.q.AVATAR_DECORATION]: Y.intl.string(Y.t.dRZYNE),
            [tm.q.PROFILE_EFFECT]: Y.intl.string(Y.t["1cNjtx"]),
            [tm.q.NAMEPLATE]: Y.intl.string(Y.t.V68Fqz),
            [tm.q.PROFILE_FRAME]: Y.intl.string(Y.t.ecTJkR),
            [tm.q.BUNDLE]: Y.intl.string(Y.t.FYFpps),
        },
        { itemTypeFilters: a, onToggleItemType: i } = (0, A.v)();
    return (0, s.jsx)(tK.S, {
        checked: a.has(t),
        onChange: () => {
            let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
            (n(`filter item type ${e} ${!1 === a.has(t) ? "on" : "off"}`), i(t));
        },
        label: l[t] ?? "",
    });
}
function nn(e) {
    let { trackFilterAction: t } = e,
        n = i.useMemo(
            () => [
                { color: "#9B59B6", label: Y.intl.string(Y.t.kqUD4P), enum: tU.PURPLE },
                { color: "#3498DB", label: Y.intl.string(Y.t.qQTRae), enum: tU.BLUE },
                { color: "#2ECC71", label: Y.intl.string(Y.t["f/Ylk6"]), enum: tU.GREEN },
                { color: "#A0522D", label: Y.intl.string(Y.t["Sd/BMa"]), enum: tU.BROWN },
                { color: "#F1C40F", label: Y.intl.string(Y.t["0fevYz"]), enum: tU.YELLOW },
            ],
            [],
        ),
        l = i.useMemo(
            () => [
                { color: "#E67E22", label: Y.intl.string(Y.t.ZE7weD), enum: tU.ORANGE },
                { color: "#E74C3C", label: Y.intl.string(Y.t.hKJGOM), enum: tU.RED },
                { color: "#EC407A", label: Y.intl.string(Y.t.HvLEGM), enum: tU.PINK },
                { color: "#FFFFFF", label: Y.intl.string(Y.t["CB+lNO"]), enum: tU.WHITE },
                { color: "#262626", label: Y.intl.string(Y.t["dMey+v"]), enum: tU.BLACK },
            ],
            [],
        );
    return (0, s.jsxs)("div", {
        className: t9.KZ,
        children: [
            (0, s.jsx)(q.D, { variant: "heading-sm/semibold", className: t9.hr, children: Y.intl.string(Y.t.K1xGoG) }),
            (0, s.jsx)(nl, { colors: n, trackFilterAction: t }),
            (0, s.jsx)(nl, { colors: l, trackFilterAction: t }),
        ],
    });
}
function nl(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: l, onToggleColor: a } = (0, A.v)();
    return (0, s.jsx)("div", {
        className: t9.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: r } = e;
            return (0, s.jsx)(
                na,
                { color: t, label: i, enum: r, isToggled: l.has(r), onToggleColor: a, trackFilterAction: n },
                r,
            );
        }),
    });
}
function na(e) {
    let { color: t, label: n, enum: l, isToggled: a, onToggleColor: i, trackFilterAction: r } = e,
        c = (0, tW.r)(t$.A.unsafe_rawColors.WHITE).hex(),
        d = (0, tW.r)(t$.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, s.jsx)(
        eN.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, s.jsx)(
                eL.D,
                {
                    className: o()(t9.n1, { [t9.lx]: a }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": a,
                    onClick: () => {
                        (r(`filter color ${n.toLowerCase()} ${!a ? "on" : "off"}`), i(l));
                    },
                    children:
                        a &&
                        (0, s.jsx)("div", {
                            className: t9.oE,
                            children: (0, s.jsx)(tZ.r, {
                                size: "xs",
                                color: (0, t3.j)({ backgroundColor: t, colors: [c, d] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function ns(e) {
    let { trackFilterAction: t } = e,
        { enabled: n } = t4.A.useConfig({ location: "collectibles-shop-theme-filters" });
    return n ? (0, s.jsx)(nr, { trackFilterAction: t }) : (0, s.jsx)(ni, { trackFilterAction: t });
}
function ni(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, A.v)(),
        a = (0, X.Ay)() === K.NJ.DARK,
        r = i.useCallback(
            (e) => {
                if (n.has(e) || a) return "control-primary-text-default";
            },
            [n, a],
        ),
        c = i.useCallback((e) => (n.has(e) || a ? t$.A.colors.WHITE : t$.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, a]),
        d = i.useMemo(
            () => [
                {
                    name: Y.intl.string(Y.t.aVBOKh),
                    icon: (0, s.jsx)(tq.E, { size: "xs", color: c(tz.ANIME) }),
                    enum: tz.ANIME,
                },
                {
                    name: Y.intl.string(Y.t["3WoZBc"]),
                    icon: (0, s.jsx)(tX._, { size: "xs", color: c(tz.GAMING) }),
                    enum: tz.GAMING,
                },
                {
                    name: Y.intl.string(Y.t.yuEmLj),
                    icon: (0, s.jsx)(tJ.C, { size: "xs", color: c(tz.CUTE_COZY) }),
                    enum: tz.CUTE_COZY,
                },
                {
                    name: Y.intl.string(Y.t.mMvCHo),
                    icon: (0, s.jsx)(tQ.L, { size: "xs", color: c(tz.SCI_FI) }),
                    enum: tz.SCI_FI,
                },
                {
                    name: Y.intl.string(Y.t.TlhOQC),
                    icon: (0, s.jsx)(t0.L, { size: "xs", color: c(tz.FOOD_DRINKS) }),
                    enum: tz.FOOD_DRINKS,
                },
                {
                    name: Y.intl.string(Y.t["4IaUIM"]),
                    icon: (0, s.jsx)(t1.f, { size: "xs", color: c(tz.FANTASY) }),
                    enum: tz.FANTASY,
                },
                {
                    name: Y.intl.string(Y.t["w0nSG/"]),
                    icon: (0, s.jsx)(t2.N, { size: "xs", color: c(tz.ANIMALS_PETS) }),
                    enum: tz.ANIMALS_PETS,
                },
                {
                    name: Y.intl.string(Y.t.cJng7v),
                    icon: (0, s.jsx)(t6.p, { size: "xs", color: c(tz.NATURE) }),
                    enum: tz.NATURE,
                },
                {
                    name: Y.intl.string(Y.t["5mUvyM"]),
                    icon: (0, s.jsx)(t8.T, { size: "xs", color: c(tz.MOVIES_TV_SHOWS) }),
                    enum: tz.MOVIES_TV_SHOWS,
                },
                {
                    name: Y.intl.string(Y.t.MB9H5Z),
                    icon: (0, s.jsx)(t5.e, { size: "xs", color: c(tz.DARK_MOODY) }),
                    enum: tz.DARK_MOODY,
                },
            ],
            [c],
        );
    return (0, s.jsxs)("div", {
        className: t9.KZ,
        children: [
            (0, s.jsx)(q.D, { variant: "heading-sm/semibold", className: t9.hr, children: Y.intl.string(Y.t.YieJl5) }),
            (0, s.jsx)("div", {
                className: t9.Ot,
                children: d.map((e) => {
                    let { name: a, icon: i, enum: c } = e;
                    return (0, s.jsxs)(
                        eL.D,
                        {
                            className: o()(t9.w4, { [t9.C7]: n.has(c) }),
                            "aria-label": a,
                            "aria-pressed": n.has(c),
                            onClick: () => {
                                let e = n.has(c);
                                (t(`filter theme ${a.toLowerCase()} ${!e ? "on" : "off"}`), l(c));
                            },
                            children: [i, (0, s.jsx)(F.E, { color: r(c), variant: "body-md/medium", children: a })],
                        },
                        a,
                    );
                }),
            }),
        ],
    });
}
function nr(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, A.v)(),
        a = i.useMemo(
            () => [
                { name: Y.intl.string(Y.t.aVBOKh), icon: tq.E, enum: tz.ANIME },
                { name: Y.intl.string(Y.t["3WoZBc"]), icon: tX._, enum: tz.GAMING },
                { name: Y.intl.string(Y.t.yuEmLj), icon: tJ.C, enum: tz.CUTE_COZY },
                { name: Y.intl.string(Y.t.mMvCHo), icon: tQ.L, enum: tz.SCI_FI },
                { name: Y.intl.string(Y.t.TlhOQC), icon: t0.L, enum: tz.FOOD_DRINKS },
                { name: Y.intl.string(Y.t["4IaUIM"]), icon: t1.f, enum: tz.FANTASY },
                { name: Y.intl.string(Y.t["w0nSG/"]), icon: t2.N, enum: tz.ANIMALS_PETS },
                { name: Y.intl.string(Y.t.cJng7v), icon: t6.p, enum: tz.NATURE },
                { name: Y.intl.string(Y.t["5mUvyM"]), icon: t8.T, enum: tz.MOVIES_TV_SHOWS },
                { name: Y.intl.string(Y.t.MB9H5Z), icon: t5.e, enum: tz.DARK_MOODY },
            ],
            [],
        ),
        r = i.useMemo(() => new Set(Array.from(n, (e) => String(e))), [n]);
    return (0, s.jsxs)("div", {
        className: t9.KZ,
        children: [
            (0, s.jsx)(q.D, { variant: "heading-sm/semibold", className: t9.hr, children: Y.intl.string(Y.t.YieJl5) }),
            (0, s.jsx)(t7.C, {
                variant: "filter",
                selectionMode: "multiple",
                label: Y.intl.string(Y.t.YieJl5),
                items: a.map((e) => {
                    let { name: t, icon: n, enum: l } = e;
                    return { id: String(l), label: t, icon: n };
                }),
                selectedKeys: r,
                onSelectionChange: (e) => {
                    if ("all" === e) return;
                    let s = a.find((t) => {
                        let { enum: l } = t;
                        return e.has(String(l)) !== n.has(l);
                    });
                    if (null == s) return;
                    let i = n.has(s.enum);
                    (t(`filter theme ${s.name.toLowerCase()} ${!i ? "on" : "off"}`), l(s.enum));
                },
            }),
        ],
    });
}
var no = n(415926),
    nc = n(561769),
    nd = n(66506);
function nu() {
    return (0, s.jsxs)("div", {
        className: nd.k,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: Y.intl.string(Y.t.oezC3x),
                className: nd._,
            }),
            (0, s.jsx)(q.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t.oezC3x) }),
            (0, s.jsx)(F.E, { variant: "body-md/medium", children: Y.intl.string(Y.t["Tc/Ndl"]) }),
        ],
    });
}
var nm = n(919303);
let ng = { flattenProductVariants: !0 };
function nE(e) {
    let { scrollerRef: t, tab: n } = e,
        l = (0, h.uM)(),
        a = l?.sessionId ?? "",
        { noCache: r, includeUnpublished: d } = (0, tO.A)(),
        u = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        { skus: m, currentPage: g, totalCount: f, isFetchingResults: x } = (0, ti.S)(),
        C = i.useCallback(() => {
            t?.current?.scrollToTop({ animate: !0 });
        }, [t]),
        p = m?.join("");
    i.useEffect(() => {
        C();
    }, [p, C]);
    let S = m.length;
    i.useEffect(() => {
        (0, tC.z)({
            sessionId: a,
            checkpoint: tC.t.SHOP_RENDERED,
            tab: n,
            unpublishedCategoriesShown: d,
            cacheDisabled: r,
        });
    }, [a, d, r, n]);
    let _ = i.useRef(null),
        { setQueryPageSize: v, setQueryPageOffset: b, queryPageSize: I } = (0, A.v)(),
        [L, j] = i.useState(!1),
        N = x || null == u;
    i.useEffect(() => {
        N ? j(!1) : S > 0 && j(!0);
    }, [N, S]);
    let O = I > 0 && !N && 0 === S;
    i.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == _.current || v(Math.floor(5 * getComputedStyle(_.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != _.current) return (e.observe(_.current), () => e.disconnect());
    }, [v]);
    let T = i.useCallback(
        (e) => {
            (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: I,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                b((e - 1) * I));
        },
        [l, I, b],
    );
    return (0, s.jsxs)(nc.v3.Provider, {
        value: ng,
        children: [
            (0, s.jsxs)("div", {
                className: o()({ [nm.oE]: O }),
                children: [
                    O && (0, s.jsx)(nu, {}),
                    (0, s.jsxs)("div", {
                        className: o()(nm.ZE, { [nm.Kp]: L }),
                        ref: _,
                        children: [
                            N && [...Array(I)].map((e, t) => (0, s.jsx)(tS.A, {}, t)),
                            !N &&
                                m.map((e, t) =>
                                    (0, s.jsx)(
                                        h.R9,
                                        {
                                            newValue: { tilePosition: t },
                                            children: (0, s.jsx)(tI.A, {
                                                skuId: e,
                                                hideStaticBundleBackgroundAsset: !0,
                                            }),
                                        },
                                        e,
                                    ),
                                ),
                        ],
                    }),
                ],
            }),
            f > I &&
                (0, s.jsx)("div", {
                    className: nm.Ej,
                    children: (0, s.jsx)("div", {
                        children: (0, s.jsx)(th.m, {
                            currentPage: g,
                            totalCount: f,
                            pageSize: I,
                            onPageChange: T,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nh = n(578364);
function nf(e) {
    let { tab: t, initialCategoryId: n, showFilterInitially: l = !0, onUnmount: a } = e,
        r = (0, g.A)("shop_include_unpublished");
    (!(function () {
        let e = (0, v.bG)([td.A], () => "success" === td.A.getFetchState(eW.FYj)),
            t = null != (0, tu.HH)(),
            { offerEligible: n, clearFilters: l } = (0, A.v)();
        i.useEffect(() => {
            n && e && !t && l();
        }, [n, e, t, l]);
    })(),
        (0, A.S)(r));
    let o = i.useRef(null),
        { handleScroll: c } = (0, no.r)(o, t),
        { setCategoryRef: d, handleScrollToCategory: u } = (0, tG.k0)(o),
        [m, E] = i.useState(l),
        [h, f] = i.useState(!1);
    return (
        i.useEffect(() => {
            null != n && u(n);
        }, [n, u]),
        i.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        i.useEffect(() => {
            function e() {
                f(window.innerWidth < 1400);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        (0, s.jsx)("div", {
            className: nh.VM,
            children: (0, s.jsxs)("main", {
                className: nh.MY,
                children: [
                    (0, s.jsx)(I.Gt, {
                        className: nh.OW,
                        ref: o,
                        onScroll: c,
                        scrollbarGutter: "both-edges",
                        children: (0, s.jsx)(nx, {
                            isSmallScreen: h,
                            filterBarOpen: m,
                            setFilterBarOpen: E,
                            tab: t,
                            scrollerRef: o,
                            setCategoryRef: d,
                            initialCategoryId: n,
                        }),
                    }),
                    m && !h && (0, s.jsx)("div", { className: nh.yF }),
                    m && !h && (0, s.jsx)(tr.Ip, { className: nh.kT, children: (0, s.jsx)(ne, {}) }),
                ],
            }),
        })
    );
}
function nx(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: l,
            tab: a,
            scrollerRef: r,
            setCategoryRef: c,
            initialCategoryId: d,
        } = e,
        u = i.useRef(null),
        m = (0, A.v)((e) => e.hasDefaultFilters()),
        g = (0, h.uM)(),
        { handlePageChange: E, currentPage: f } = (function (e) {
            let [t, n] = i.useState(1);
            return {
                currentPage: t,
                handlePageChange: i.useCallback(
                    (t) => {
                        (n(t), e.current?.scrollTo({ to: 0 }));
                    },
                    [e, n],
                ),
            };
        })(r),
        x = i.useCallback(
            (e) => {
                (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: g?.sessionId,
                    page_section: g?.pageSection,
                    page_category: g?.pageCategory,
                    page_index: e,
                    page_size: g?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    E(e));
            },
            [g, E],
        ),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            if (t && n)
                return (document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e));
            function e(e) {
                let t = e.target;
                null === u.current ||
                    null === C.current ||
                    u.current.contains(t) ||
                    C.current.contains(t) ||
                    (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: g?.sessionId,
                        page_section: g?.pageSection,
                        page_category: g?.pageCategory,
                        page_index: g?.pageIndex,
                        page_size: g?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    l(!1));
            }
        }, [t, n, l, g]),
        (0, s.jsx)("div", {
            className: nh.en,
            children: (0, s.jsxs)("div", {
                className: nh.pf,
                children: [
                    (0, s.jsxs)("div", {
                        className: nh.ne,
                        children: [
                            (0, s.jsx)("div", { className: nh.lQ, children: (0, s.jsx)(tg, {}) }),
                            (0, s.jsxs)("div", {
                                className: o()(nh.wR, { [nh.Im]: t }),
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: nh.Ul,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-md/semibold",
                                                children: Y.intl.string(Y.t.uaX705),
                                            }),
                                            (0, s.jsx)(tw, {}),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        ref: C,
                                        children: (0, s.jsx)(H.$, {
                                            onClick: function () {
                                                let e = !n;
                                                (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: g?.sessionId,
                                                    page_section: g?.pageSection,
                                                    page_category: g?.pageCategory,
                                                    page_index: g?.pageIndex,
                                                    page_size: g?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    l(e));
                                            },
                                            variant: "secondary",
                                            text: Y.intl.string(n ? Y.t.fYtm6f : Y.t["TeTYE+"]),
                                            icon: to.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, s.jsx)("div", {
                                    className: nh.Dh,
                                    ref: u,
                                    children: (0, s.jsx)(I.Ch, { className: nh.Qo, children: (0, s.jsx)(ne, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, s.jsx)(h.R9, {
                              newValue: { pageIndex: f },
                              children: (0, s.jsx)(tk, {
                                  setCategoryRef: c,
                                  currentPage: f,
                                  handlePageChange: x,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, s.jsx)(nE, { scrollerRef: r, tab: a }, a),
                ],
            }),
        })
    );
}
var nC = n(599062),
    np = n(272242),
    nS = n(417388);
let nA = function () {
        return (0, s.jsxs)("div", {
            className: nS.z,
            children: [
                (0, s.jsx)("img", {
                    className: nS.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: Y.intl.string(Y.t["p8+qtU"]),
                }),
                (0, s.jsx)(q.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["p8+qtU"]) }),
                (0, s.jsx)(F.E, { variant: "body-md/medium", children: Y.intl.string(Y.t.UEiyvs) }),
            ],
        });
    },
    n_ = [e9.G2.HOME, e9.G2.ORBS];
async function nv() {
    try {
        await (0, ta.gB)();
    } catch {}
}
function nb(e) {
    let { tab: t, transitionToTab: n, transitionState: l, updateAnalyticsState: a } = e,
        r = (0, v.bG)([ts.A], () =>
            null != ts.A.claimError
                ? `shop load claim error: ${ts.A.claimError.message}`
                : null != ts.A.fetchError
                  ? `shop load fetch purchase error: ${ts.A.fetchError.message}`
                  : void 0,
        );
    !(function (e) {
        let t = (0, v.bG)([E.default], () => E.default.getCurrentUser()),
            { noCache: n, includeUnpublished: l } = (0, tO.A)();
        i.useEffect(() => {
            null != e &&
                tl.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: l.toString(),
                    },
                });
        }, [e, t, n, l]);
    })(r);
    let o = (0, b.H)({ location: "collectibles_content" }),
        c = (0, _.W6)(),
        d = (0, _.zy)(),
        [u] = i.useState(() => {
            if ("POP" === c.action) {
                let e;
                return ((e = tT), (tT = null), e ?? void 0);
            }
        }),
        [m, g] = i.useState(u),
        [h, f] = i.useState(null == u),
        x = i.useMemo(() => {
            let e = new URLSearchParams(d.search).get(e9.P1);
            return null != e && "" !== e ? e : void 0;
        }, [d.search]),
        C = i.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: l,
                    shouldAnimate: s,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, l), null != l && i && !r)) return void c.push(eW.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
                let o = r ? e9.G2.ORBS : e9.G2.CATALOG;
                (g(l), f(!i), n(o, s));
            },
            [n, a, c],
        ),
        { searchError: p } = (0, ti.S)();
    return null != p
        ? (0, s.jsx)(nA, {})
        : null != r
          ? (0, s.jsx)(nC.h, { onRetry: nv, errorMessage: r, errorOrigin: nC.A.SHOP_PAGE })
          : n_.includes(t)
            ? (0, s.jsx)(np.A, { handleTransition: C, tab: t, transitionState: l })
            : t === e9.G2.GAME_SERVERS
              ? o
                  ? (0, s.jsx)(tt, { isGameServerHostingInShopEnabled: o })
                  : (0, s.jsx)(_.rd, { to: eW.BVt.COLLECTIBLES_SHOP_WITH_TAB(e9.G2.HOME) })
              : (0, s.jsx)(nf, {
                    tab: t,
                    initialCategoryId: m ?? x,
                    showFilterInitially: h && null == x,
                    onUnmount: () => {
                        (g(void 0), f(!0));
                    },
                });
}
var nI = n(464066),
    nL = n(235939),
    nj = n(976860),
    nN = n(339821),
    nO = n(650583);
function nT(e) {
    let { children: t, shouldAddEventListener: n, onClose: l } = e,
        a = (0, d.useHasAnyModalOpen)();
    return (
        i.useEffect(() => {
            if (n && !a) return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
            function e(e) {
                e.key === nO.N$.Escape && l();
            }
        }, [n, a, l]),
        t
    );
}
let nR = function (e) {
    let { tab: t = e9.G2.HOME, sessionId: n, containerRef: l } = e,
        a = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        { onClose: r } = (function () {
            let { search: e } = (0, _.zy)(),
                t = (0, _.g)(),
                n = i.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                l = null != n ? parseInt(n, 10) : null;
            return {
                onClose: i.useCallback(() => {
                    if (0 === l) {
                        ((0, nj.aX)(), (0, T.openUserSettings)());
                        return;
                    }
                    (0, nj.EL)() ? (0, nj.aX)() : (0, nj.pX)(eW.BVt.APP);
                }, [l]),
                source: l,
                ...t,
            };
        })(),
        { currentTab: d, hasFilters: v } = (0, A.v)(),
        b = i.useMemo(() => (t === e9.G2.HOME && null != d && v() ? d : t), [t, d, v]);
    (0, p.Wg)();
    let [I, L] = i.useState(),
        j = (0, g.A)("shop_include_unpublished"),
        { category: N, state: O } = (0, C.A)(I, { includeUnpublished: j }),
        R = N?.name,
        [y, M] = i.useState();
    (0, tG.XU)(n);
    let k = i.useCallback((e, t) => {
            (M(e), L(t));
        }, []),
        { selectedTab: G, transitionState: P, transitionToTab: D } = (0, S.o)(b);
    ((0, m.HU)({ location: Y.intl.string(Y.t.pWG4ze) }),
        (0, x.uS)(n, G, R, P, { sourceButton: y, enabled: null == I || "loading" !== O }),
        (0, x.N0)(G, a));
    let { dismissShopButtonDC: B } = (0, nN.A)();
    (i.useEffect(() => {
        B(eZ.i.AUTO_DISMISS);
    }, [B]),
        i.useEffect(() => {
            l.current?.focus();
        }, [l]));
    let { analyticsLocations: F } = (0, x.lC)(G);
    return (0, s.jsx)(u.f5, {
        value: F,
        children: (0, s.jsx)(h.R9, {
            newValue: { pageCategory: R, pageSize: e9.l5 },
            children: (0, s.jsx)(f.iM, {
                tab: G,
                children: (0, s.jsxs)(nT, {
                    onClose: r,
                    shouldAddEventListener: !1,
                    children: [
                        (0, s.jsx)(nI.G, { handleTransition: D, selectedTab: G }),
                        (0, s.jsx)(nL.A, { tab: G, handleTransition: D }),
                        (0, s.jsx)("div", {
                            className: o()(t_.td, {
                                [t_.RK]: P === e9.Pf.VISIBLE,
                                [t_.in]: P === e9.Pf.IN,
                                [t_.FD]: P === e9.Pf.OUT,
                            }),
                            children: (0, s.jsx)(nb, {
                                tab: G,
                                transitionToTab: D,
                                transitionState: P,
                                updateAnalyticsState: k,
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
};
