(n.r(t), n.d(t, { default: () => nF }));
var s,
    l,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    c = n.n(r),
    o = n(132500),
    d = n(702841),
    u = n(192308),
    m = n(315710),
    g = n(944791),
    h = n(444927),
    E = n(688810),
    x = n(726249),
    f = n(354328),
    C = n(475073),
    v = n(611924),
    p = n(744082),
    j = n(561794),
    S = n(287809),
    _ = n(371794),
    N = n(440938),
    I = n(161918),
    A = n(12678),
    L = n(706113),
    b = n(841702),
    O = n(983545),
    T = n(365491);
(n(323874), n(14289), n(35956), n(321073));
var R = n(806163),
    M = n(17928),
    k = n(196736),
    y = n(689175),
    P = n(277984),
    D = n(670735),
    B = n(790284),
    G = n(780964),
    w = n(766075),
    F = n(280450),
    z = n(166403),
    H = n(123917),
    U = n(24482),
    K = n(814201),
    V = n(581453),
    Y = n(43990),
    W = n(403581),
    $ = n(834730),
    Z = n(821609),
    q = n(793574),
    Q = n(75678),
    X = n(202541),
    J = n(818348),
    ee = n(351585),
    et = n(105292),
    en = n(876564);
function es() {
    let e = i.useCallback(() => {
        (0, Q.A)({ subscriptionTier: X.pe.TIER_2, analyticsLocations: [q.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, a.jsx)(Y.N, {
        theme: J.NJ.DARK,
        children: (t) =>
            (0, a.jsxs)("div", {
                className: c()(en.vK, t),
                children: [
                    (0, a.jsxs)("div", {
                        className: en.Pf,
                        children: [
                            (0, a.jsx)(W.t, {
                                className: en.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, a.jsx)($.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: et.intl.string(ee.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Z.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: W.t,
                        text: et.intl.string(et.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var el = n(462887),
    ea = n(297264),
    ei = n(736653),
    er = n(457865);
function ec(e) {
    let { onRetry: t, errorMessage: n } = e,
        s = (0, ei.Ay)(),
        l = (0, M.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, a.jsxs)("div", {
        className: er.kL,
        children: [
            (0, a.jsx)("img", {
                className: er.Sl,
                src: (0, el.M)(s) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, a.jsx)(ea.D, { variant: "heading-xl/semibold", children: et.intl.string(et.t.i5SQ74) }),
            (0, a.jsx)($.E, {
                className: er.h_,
                variant: "text-md/normal",
                color: "text-muted",
                children: et.intl.string(et.t.F8FvUy),
            }),
            l &&
                null != n &&
                (0, a.jsx)($.E, { variant: "text-sm/normal", color: "text-muted", children: "staff-only debug: " + n }),
            (0, a.jsx)(Z.$, { variant: "primary", text: et.intl.string(et.t["+hivLW"]), onClick: t }),
        ],
    });
}
var eo = n(349085),
    ed = n(890856),
    eu = n(331322),
    em = n(713517),
    eg = n(660669);
function eh(e) {
    let { name: t, coverUrl: n, fromPriceLabel: s, nitroFromPriceLabel: l, onClickCard: r, onClickViewPlans: o } = e,
        d = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, em.A)(d),
        m = (0, M.bG)([S.default], () => U.Ay.canUseShopDiscounts(S.default.getCurrentUser())) && null != l,
        g = m ? l : s,
        h = i.useCallback(
            (e) => {
                (e.stopPropagation(), o?.());
            },
            [o],
        );
    return (0, a.jsxs)(ed.s, {
        ref: d,
        onClick: r,
        "aria-label": t,
        className: c()(eg.Nr, { [eg.yo]: u }),
        children: [
            (0, a.jsx)("div", {
                className: eg.q4,
                "aria-hidden": !0,
                children: null != n && (0, a.jsx)("img", { className: eg.xy, src: n, alt: "" }),
            }),
            (0, a.jsxs)("div", {
                className: eg.Iv,
                children: [
                    null != n
                        ? (0, a.jsx)("img", { className: eg.N4, src: n, alt: "" })
                        : (0, a.jsx)("div", {
                              className: eg.WB,
                              children: (0, a.jsx)($.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, a.jsx)("div", { className: eg.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eg.qr,
                children: [
                    (0, a.jsxs)("div", {
                        className: eg.cs,
                        children: [
                            (0, a.jsx)($.E, { variant: "text-md/medium", color: "text-strong", tag: "p", children: t }),
                            null != g &&
                                (0, a.jsx)("div", {
                                    className: eg.F1,
                                    children: (0, a.jsxs)(eu.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, a.jsxs)(eu.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    m &&
                                                        (0, a.jsx)(W.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, a.jsx)($.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: g,
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)($.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: et.intl.string(ee.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: eg.E1,
                        children: (0, a.jsx)(Z.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: et.intl.string(ee.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var eE = n(469058);
function ex() {
    return (0, a.jsx)("div", {
        className: c()(eg.Nr, eE.s7, eE.U6),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: eE.qr,
            children: [(0, a.jsx)("div", { className: eE.w9 }), (0, a.jsx)("div", { className: eE.n2 })],
        }),
    });
}
var ef = n(901215);
let eC = i.memo(function (e) {
    let { game: t, onSelect: n } = e,
        s = i.useCallback(() => n(t), [t, n]),
        l = (0, eo.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, a.jsx)(eh, {
        name: t.name,
        coverUrl: l,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: s,
        onClickViewPlans: s,
    });
});
function ev(e) {
    let { games: t, title: n, onSelectGame: s, loading: l = !1 } = e;
    return (0, a.jsxs)("section", {
        className: ef.u,
        children: [
            null != n && (0, a.jsx)(ea.D, { variant: "heading-lg/semibold", children: n }),
            (0, a.jsx)("div", {
                className: ef.V,
                children: l
                    ? Array.from({ length: 10 }, (e, t) => (0, a.jsx)(ex, {}, t))
                    : t.map((e) => (0, a.jsx)(eC, { game: e, onSelect: s }, e.id)),
            }),
        ],
    });
}
var ep = n(32880),
    ej = n(410232),
    eS = n(231483),
    e_ = n(339350),
    eN = n(28863),
    eI = n(442935);
function eA() {
    let e = i.useMemo(
        () => [
            { Icon: ep.DownloadIcon, label: et.intl.string(ee.default.GJNQYz) },
            { Icon: ej.k, label: et.intl.string(ee.default.pTinR2) },
            { Icon: eS.ShieldIcon, label: et.intl.string(ee.default.s0N1nM) },
            { Icon: e_.Q, label: et.intl.string(ee.default.NzrGEi) },
        ],
        [],
    );
    return (0, a.jsxs)("section", {
        className: eI.ZK,
        children: [
            (0, a.jsxs)("div", {
                className: eI.jE,
                children: [
                    (0, a.jsx)(ea.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: et.intl.string(ee.default.F5W36W),
                    }),
                    (0, a.jsxs)($.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            et.intl.string(ee.default.xMpGuO),
                            " ",
                            (0, a.jsx)(eN.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: et.intl.string(ee.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: eI._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, a.jsxs)(
                        "div",
                        {
                            className: eI.Tc,
                            children: [
                                (0, a.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, a.jsx)($.E, {
                                    variant: "text-xs/semibold",
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
var eL = n(305090);
function eb() {
    return (0, a.jsxs)("div", {
        className: eL.vK,
        children: [
            (0, a.jsx)("div", {
                className: eL.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, a.jsx)("div", { className: eL.Ge, "aria-hidden": !0 }),
            (0, a.jsx)("div", { className: eL.f5, "aria-hidden": !0 }),
        ],
    });
}
var eO = n(408278),
    eT = n(548411),
    eR = n(554830),
    eM = n(281445),
    ek = n(390544),
    ey = n(554146),
    eP = n(939249),
    eD = n(509434),
    eB = n(866665),
    eG = n(103271);
let ew = { TERTIARY: eG.Xe, SECONDARY: eG.Rm, PRIMARY: eG.zB },
    eF = { SIZE_24: eG.q1, SIZE_32: eG.Hb, SIZE_36: eG.VM };
function ez(e) {
    let {
        className: t,
        tooltip: n,
        color: s,
        size: l = eF.SIZE_32,
        icon: i,
        onMouseDown: r,
        onClick: o,
        disabled: d,
        focusProps: u,
        ref: m,
    } = e;
    return (0, a.jsx)(eB.m, {
        asContainer: !0,
        text: n,
        shouldShow: !d,
        children: (0, a.jsx)(eP.D, {
            innerRef: m,
            "aria-label": n,
            "aria-disabled": d,
            className: c()(t, eG.x6, s, l, { [eG.r9]: d }),
            onMouseDown: r,
            onClick: (e) => {
                o(e);
            },
            focusProps: u,
            children: i,
        }),
    });
}
var eH = n(933832),
    eU = n(624479),
    eK = n(131607),
    eV = n(427209),
    eY = n(95035),
    eW = n(498480),
    e$ = n(685743),
    eZ = n(981381),
    eq = n(342942),
    eQ = n(294454),
    eX = n(625903),
    eJ = n(445927),
    e0 = n(376205);
function e1(e) {
    let { server: t, onOpenSettings: n } = e,
        s = t.instance.subscriptionId,
        l = (0, M.bG)(
            [z.A],
            () =>
                (0, e0.Yg)({
                    subscriptionId: s,
                    hasFetchedSubscriptions: z.A.hasFetchedSubscriptions(),
                    getSubscriptionById: (e) => z.A.getSubscriptionById(e),
                }),
            [s],
        ),
        r = (0, eJ.A)(t.instance) && l,
        c = i.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, a.jsx)(ez, {
        color: ew.SECONDARY,
        size: eF.SIZE_24,
        icon: (0, a.jsx)(eX.SettingsIcon, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: c,
        disabled: !r,
        tooltip: et.intl.string(ee.default["feUiM/"]),
    });
}
var e6 = n(652215),
    e4 = n(628049),
    e2 = n(49999),
    e8 = n(684644);
let e7 = [ek.M.STARTUP_FAILED, ek.M.MISSING_STOCK, ek.M.PROVIDER_ERRORED, ek.M.DELETED];
function e5(e) {
    return `game-server-owned-card-${e}`;
}
function e9(e) {
    let { gameServerId: t } = e,
        n = i.useCallback(() => {
            (0, eW.Kz)(t).catch(() => {});
        }, [t]);
    return (0, a.jsx)("div", {
        className: e8.y7,
        children: (0, a.jsx)(Z.$, {
            fullWidth: !0,
            text: et.intl.string(ee.default.TMzy7d),
            variant: "secondary",
            onClick: n,
        }),
    });
}
function e3() {
    let [e, t] = i.useState(!1),
        n = i.useCallback(() => {
            (t(!0),
                (0, eW.hU)()
                    .catch(() => {})
                    .finally(() => t(!1)));
        }, []);
    return (0, a.jsx)("div", {
        className: e8.y7,
        children: (0, a.jsx)(Z.$, {
            fullWidth: !0,
            text: et.intl.string(ee.default.BLEx3k),
            variant: "secondary",
            loading: e,
            onClick: n,
        }),
    });
}
let te = i.memo(function (e) {
    let { server: t, onJoin: s, onViewPanel: l, onOpenSettings: r, isHighlighted: o = !1 } = e,
        d = (0, eo.A)(t.gameId, "cover") ?? t.coverUrl,
        m = (function (e) {
            let t = (0, M.bG)([z.A], () => (null != e ? z.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === e6.Dmq.CANCELED
                ? { text: et.intl.formatToPlainString(ee.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: et.intl.formatToPlainString(ee.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [g, h] = (0, eK.kn)([ey.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        E = g !== ey.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        x = eM.X.SHOCKBYTE,
        f = F.default.getId() ?? "0",
        { handleCopyServerIp: C, animateCopyIcon: v } = (0, e$.A)(f, t.id, q.A.GAME_SERVER_PAGE, t.serverIp),
        p = i.useCallback(() => {
            (0, eq.A)({
                provider: x,
                onAccept: () => {
                    (h(e2.i.TAKE_ACTION), C());
                },
            });
        }, [x, h, C]),
        j = i.useCallback(() => {
            E
                ? s(t)
                : (0, eq.A)({
                      provider: x,
                      onAccept: () => {
                          (h(e2.i.TAKE_ACTION), s(t));
                      },
                  });
        }, [E, x, h, s, t]),
        S = i.useCallback(() => l(t), [l, t]),
        _ = i.useCallback(() => {
            ((e) => {
                let { server: t, source: s } = e;
                (0, u.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("257472"),
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
                            n.e("668099"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("304329"),
                            n.e("207960"),
                            n.e("835868"),
                        ]).then(n.bind(n, 729751));
                        return (n) => (0, a.jsx)(e, { ...n, server: t, source: s });
                    },
                    { stackingBehavior: "stack", modalKey: eQ.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        N = (0, eZ.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e4.qb[x],
        I = null != t.instance.gameServerPanelUrl,
        A = null != t.instance.status && e7.includes(t.instance.status),
        L = i.useCallback(() => {
            (0, H.h)({ href: N });
        }, [N]),
        b = i.useMemo(() => {
            switch (t.instance.status) {
                case ek.M.ONLINE:
                    return et.intl.string(ee.default["60kAzo"]);
                case ek.M.OFFLINE:
                    return et.intl.string(ee.default["Ys/RrB"]);
                case ek.M.SLEEPING:
                    return et.intl.string(ee.default.y0z8ZO);
                case ek.M.STARTUP_FAILED:
                    return et.intl.string(ee.default["7C9Z3s"]);
                case ek.M.MISSING_STOCK:
                    return et.intl.string(ee.default["+a5G2l"]);
                case ek.M.PROVIDER_ERRORED:
                    return et.intl.string(ee.default["6g/oji"]);
                case ek.M.DELETED:
                    return et.intl.string(ee.default.Z1NZwX);
                case ek.M.STARTING:
                    return et.intl.string(ee.default.SgjaXI);
                default:
                    return "\u2014";
            }
        }, [t.instance.status]),
        O = t.isOnline ? "text-feedback-positive" : A ? "text-feedback-critical" : "text-muted",
        T = i.useMemo(
            () =>
                (0, a.jsx)(eP.D, {
                    className: c()(e8.wC, e8.QV),
                    onClick: j,
                    "aria-label": et.intl.string(ee.default["fQCcM/"]),
                    children: (0, a.jsx)($.E, {
                        variant: "text-sm/semibold",
                        color: "none",
                        children: et.intl.string(ee.default["fQCcM/"]),
                    }),
                }),
            [j],
        ),
        R = i.useMemo(
            () =>
                (0, a.jsxs)(eP.D, {
                    className: c()(e8.wC, e8.y2, { [e8.Gz]: !I }),
                    onClick: I ? S : void 0,
                    "aria-disabled": !I,
                    "aria-label": et.intl.string(ee.default.tkbVdf),
                    children: [
                        (0, a.jsx)($.E, {
                            variant: "text-sm/semibold",
                            color: "none",
                            children: et.intl.string(ee.default.tkbVdf),
                        }),
                        (0, a.jsx)(eD.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                    ],
                }),
            [S, I],
        ),
        k = i.useMemo(() => {
            switch (t.instance.status) {
                case ek.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(e9, { gameServerId: t.id }), R] });
                case ek.M.STARTUP_FAILED:
                case ek.M.MISSING_STOCK:
                    return (0, a.jsx)("div", {
                        className: e8.y7,
                        children: (0, a.jsx)(Z.$, {
                            fullWidth: !0,
                            text: et.intl.string(ee.default.gWMqnI),
                            variant: "primary",
                            icon: eD.I,
                            iconPosition: "end",
                            disabled: !I,
                            onClick: S,
                        }),
                    });
                case ek.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", {
                                className: e8.y7,
                                children: (0, a.jsx)(Z.$, {
                                    fullWidth: !0,
                                    text: et.intl.string(ee.default.bBkeMs),
                                    variant: "secondary",
                                    onClick: L,
                                }),
                            }),
                            (0, a.jsx)(e3, {}),
                        ],
                    });
                case ek.M.DELETED:
                    return R;
                default:
                    return (0, a.jsxs)(a.Fragment, { children: [T, R] });
            }
        }, [t.instance.status, t.id, I, T, R, S, L]);
    return (0, a.jsxs)("div", {
        id: e5(t.id),
        className: c()(e8.Nr, { [e8.mr]: o }),
        children: [
            o && (0, a.jsx)("div", { className: e8._8, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: e8.Nk,
                "aria-hidden": !0,
                children: [
                    null != d && (0, a.jsx)("img", { className: e8.QC, src: d, alt: "" }),
                    (0, a.jsx)("div", { className: e8.jc }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: e8.AQ,
                children: [
                    (0, a.jsx)(ez, {
                        color: ew.SECONDARY,
                        size: eF.SIZE_24,
                        icon: (0, a.jsx)(eV.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: _,
                        tooltip: et.intl.string(et.t.RDE0Sc),
                    }),
                    (0, a.jsx)(e1, { server: t, onOpenSettings: r }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: e8.rf,
                children: [
                    (0, a.jsxs)("div", {
                        className: e8.U1,
                        children: [
                            (0, a.jsxs)("div", {
                                className: e8.oL,
                                children: [
                                    null != d
                                        ? (0, a.jsx)("img", { className: e8.vT, src: d, alt: "" })
                                        : (0, a.jsx)("div", {
                                              className: e8.iv,
                                              children: (0, a.jsx)($.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, a.jsx)("div", { className: e8.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: e8.VQ,
                                children: [
                                    (0, a.jsx)($.E, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, a.jsx)($.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != m &&
                                        (0, a.jsx)($.E, {
                                            variant: "text-sm/medium",
                                            color: "text-feedback-critical",
                                            tag: "div",
                                            children: m.text,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: e8.M1,
                        children: [
                            (0, a.jsxs)("div", {
                                className: e8.N8,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: e8.bi,
                                        children: [
                                            (0, a.jsx)($.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: et.intl.string(ee.default.bDdi7n),
                                            }),
                                            (0, a.jsx)($.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: e8.gv,
                                        children: [
                                            (0, a.jsx)($.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: et.intl.string(ee.default["7phwMG"]),
                                            }),
                                            E
                                                ? (0, a.jsxs)("div", {
                                                      className: e8.Yb,
                                                      children: [
                                                          (0, a.jsx)($.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, a.jsx)(eP.D, {
                                                                  className: e8.cL,
                                                                  onClick: C,
                                                                  "aria-label": et.intl.string(et.t.OpuAlK),
                                                                  children: v
                                                                      ? (0, a.jsx)(eH.CheckmarkLargeIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, a.jsx)(eU.CopyIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, a.jsx)(eY.A, {
                                                      onClick: p,
                                                      children: et.intl.string(ee.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: e8.N8,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: e8.bi,
                                        children: [
                                            (0, a.jsx)($.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: et.intl.string(ee.default["n+ZX7y"]),
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: e8.Yb,
                                                children: [
                                                    (t.isOnline || A) &&
                                                        (0, a.jsx)("span", {
                                                            className: c()(e8.kg, { [e8.rU]: A }),
                                                            "aria-hidden": !0,
                                                        }),
                                                    (0, a.jsx)($.E, {
                                                        variant: "text-sm/medium",
                                                        color: O,
                                                        tag: "span",
                                                        children: b,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: e8.gv,
                                        children: [
                                            (0, a.jsx)($.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: et.intl.string(ee.default.mJlz3T),
                                            }),
                                            (0, a.jsx)($.E, {
                                                variant: "text-sm/medium",
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
            (0, a.jsx)("div", { className: e8.qr, children: k }),
        ],
    });
});
var tt = n(367016);
function tn(e) {
    let {
            servers: t,
            onViewAll: n,
            onJoin: s,
            onViewPanel: l,
            onOpenSettings: r,
            highlightServerId: o = null,
            highlightNonce: d = 0,
        } = e,
        u = i.useRef(null),
        m = i.useRef(null),
        [g, h] = i.useState(!1),
        [E, x] = i.useState(!1),
        [f, C] = i.useState(null),
        v = i.useCallback(() => {
            let e = u.current;
            null != e && (h(e.scrollLeft > 1), x(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    (i.useLayoutEffect(() => {
        v();
    }, [v, t]),
        i.useEffect(() => {
            let e = u.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                v();
            });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }, [v]));
    let p = i.useCallback(() => {
            u.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        j = i.useCallback(() => {
            u.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        i.useEffect(() => {
            if (d <= 0) return;
            let e = null != o ? document.getElementById(e5(o)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    (C(null), (t = requestAnimationFrame(() => C(o))));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(t));
            };
        }, [d, o]),
        i.useEffect(() => {
            if (null == f) return;
            let e = setTimeout(() => C(null), 4e3);
            return () => clearTimeout(e);
        }, [f]),
        (0, a.jsxs)("section", {
            className: tt.uW,
            ref: m,
            children: [
                (0, a.jsxs)("div", {
                    className: tt.wx,
                    children: [
                        (0, a.jsx)(ea.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: et.intl.string(ee.default.BOWmmT),
                        }),
                        (0, a.jsx)(Y.N, {
                            theme: J.NJ.DARK,
                            children: (e) =>
                                (0, a.jsxs)("div", {
                                    className: c()(tt.$s, e),
                                    children: [
                                        (0, a.jsx)(Z.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: et.intl.string(et.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: tt.d$,
                                            children: [
                                                (0, a.jsx)(eO.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eT.Z,
                                                    disabled: !g,
                                                    onClick: p,
                                                    "aria-label": et.intl.string(et.t["13/7kX"]),
                                                }),
                                                (0, a.jsx)(eO.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eR.K,
                                                    disabled: !E,
                                                    onClick: j,
                                                    "aria-label": et.intl.string(et.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: c()(tt.XG, { [tt.OW]: g && E, [tt.vL]: g && !E, [tt.y0]: E && !g }),
                    ref: u,
                    onScroll: v,
                    children: t.map((e) =>
                        (0, a.jsx)(
                            "div",
                            {
                                className: tt.AV,
                                children: (0, a.jsx)(te, {
                                    server: e,
                                    onJoin: s,
                                    onViewPanel: l,
                                    onOpenSettings: r,
                                    isHighlighted: f === e.id,
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
var ts = n(705285),
    tl = n(199781),
    ta = n(923477),
    ti = n(252589),
    tr = n(55766),
    tc = n(758836),
    to = n(111108);
function td(e) {
    let { isGameServerHostingInShopEnabled: t } = e;
    return (0, a.jsx)(D.A, { children: (0, a.jsx)(tu, { isGameServerHostingInShopEnabled: t }) });
}
function tu(e) {
    let { isGameServerHostingInShopEnabled: t } = e,
        n = (0, R.zy)(),
        s = (0, R.W6)(),
        { servers: l, refetch: r } = (0, tr.f)(),
        c = l.length > 0,
        o = (0, M.bG)([S.default], () => U.Ay.canUseShopDiscounts(S.default.getCurrentUser())),
        { games: d, hasError: u, isEmpty: m, isLoading: g, refetch: h } = (0, ti.Y)();
    i.useEffect(() => {
        c && (0, P.hP)().catch(() => {});
    }, [c]);
    let E = i.useRef(d);
    i.useEffect(() => {
        d.length > 0 && (E.current = d);
    }, [d]);
    let x = i.useCallback(() => {
            (h(), r());
        }, [h, r]),
        f = (0, ts.VJ)(),
        [C, v] = i.useState({ serverId: null, nonce: 0 }),
        p = i.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = K.A.getGameServers();
                for (let s = n.length - 1; s >= 0; s--)
                    if (n[s].game_id === e.gameId) {
                        t = n[s].id;
                        break;
                    }
            }
            v((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        j = i.useCallback(() => {
            let e = l[0];
            null != e && p({ serverId: e.id });
        }, [l, p]),
        _ = (0, ta.O)((e) => e.highlightFirstCardNonce),
        N = i.useRef(_);
    i.useEffect(() => {
        if (_ === N.current) return;
        N.current = _;
        let e = requestAnimationFrame(() => j());
        return () => cancelAnimationFrame(e);
    }, [_, j]);
    let I = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ts.cl.SHOP_CARD;
                (f(ts.L5.OPEN_PLAN_MODAL, t),
                    (0, tl.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => p({ gameId: e.gameId }),
                    }));
            },
            [f, p],
        ),
        A = i.useMemo(() => {
            let e = new URLSearchParams(n.search).get(tc.tD);
            return null != e && "" !== e ? e : void 0;
        }, [n.search]);
    i.useEffect(() => {
        if (!t || null == A || g || 0 === d.length) return;
        let e = d.find((e) => e.gameId === A);
        if (null == e) return;
        I(e, ts.cl.ACTIVITY_PANEL_DEEP_LINK);
        let l = new URLSearchParams(n.search);
        (l.delete(tc.tD), s.replace(`${n.pathname}?${l.toString()}`));
    }, [t, A, d, g, I, s, n.pathname, n.search]);
    let L = i.useCallback(() => {
            (B.A.setState({ scrollToGameServers: !0 }), (0, w.openUserSettings)(G.X.SUBSCRIPTIONS_PANEL));
        }, []),
        b = i.useCallback((e) => {
            let t = F.default.getId() ?? "0";
            (0, V.A)(t, e.instance);
        }, []),
        O = i.useCallback((e) => {
            (0, H.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        T = i.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = E.current.find((t) => t.gameId === e.gameId);
                function s(t) {
                    (0, tl.S)({
                        gameName: e.gameName,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: n?.plans,
                        initialPlanId: e.instance.planId,
                        initialRegionId: e.instance.regionId,
                        initialRegionName: e.location,
                        initialServerName: e.serverName,
                        activeSubscription: t,
                        onViewServer: () => p({ serverId: e.id }),
                    });
                }
                let l = z.A.getSubscriptionById(t);
                null != l
                    ? s(l)
                    : (0, P.hP)()
                          .then(() => {
                              let e = z.A.getSubscriptionById(t);
                              null != e && s(e);
                          })
                          .catch(() => {});
            },
            [p],
        ),
        k = c ? et.intl.string(ee.default["+aRmAc"]) : void 0;
    return (0, a.jsx)(y.Ch, {
        className: to.XG,
        children: (0, a.jsxs)("div", {
            className: to.kL,
            children: [
                !o && (0, a.jsx)(es, {}),
                (0, a.jsx)(eb, {}),
                (0, a.jsxs)("div", {
                    className: to.Qs,
                    children: [
                        (0, a.jsx)(eA, {}),
                        c &&
                            (0, a.jsx)(tn, {
                                servers: l,
                                onViewAll: L,
                                onJoin: b,
                                onViewPanel: O,
                                onOpenSettings: T,
                                highlightServerId: C.serverId,
                                highlightNonce: C.nonce,
                            }),
                        u || m
                            ? (0, a.jsx)(ec, { onRetry: x })
                            : (0, a.jsx)(ev, { games: d, title: k, onSelectGame: I, loading: g }),
                    ],
                }),
            ],
        }),
    });
}
var tm = n(38405),
    tg = n(815996),
    th = n(4227),
    tE = n(856686),
    tx = n(364522),
    tf = n(783977),
    tC = n(174459),
    tv = n(918467),
    tp = n(758461),
    tj = n(641150);
function tS() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: s } = (0, T.v)((e) => e),
        { totalCount: l, isFetchingResults: r } = (0, tE.S)(),
        c = (0, T.v)((e) => e.hasFilters()),
        o = i.useCallback(() => {
            if (!c) return "";
            if (r) return et.intl.string(et.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return et.intl.format(et.t.KJMJOz, { count: l, search: e });
            }
            if (!n && !s && 1 === e.size) {
                if (e.has(tj.q.AVATAR_DECORATION)) return et.intl.format(et.t.s1UzGQ, { count: l });
                if (e.has(tj.q.NAMEPLATE)) return et.intl.format(et.t.ZWGN9T, { count: l });
                if (e.has(tj.q.PROFILE_EFFECT)) return et.intl.format(et.t["v/7apu"], { count: l });
                if (e.has(tj.q.PROFILE_FRAME)) return et.intl.format(et.t.eu4eRy, { count: l });
                if (e.has(tj.q.BUNDLE)) return et.intl.format(et.t.fZ1rdk, { count: l });
            }
            return 0 === e.size && n && !s
                ? et.intl.format(et.t.TxoTTj, { count: l })
                : 0 === e.size && s && !n
                  ? et.intl.format(et.t.TLso50, { count: l })
                  : et.intl.format(et.t["/rPvmQ"], { count: l });
        }, [e, l, c, t, r, n, s]);
    return (0, a.jsx)(ea.D, { variant: "heading-lg/semibold", children: o() });
}
var t_ = n(172218),
    tN = n(932793),
    tI = n(511265),
    tA = n(206077),
    tL = n(100057),
    tb = n(828515),
    tO = n(484469),
    tT = n(761977),
    tR = n(170522),
    tM = n(295621);
let tk = function () {
    return (0, a.jsx)("div", {
        className: tM.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: tR.vY,
                    children: [
                        (0, a.jsx)("div", { className: c()(tT.sW, tM.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, a.jsx)(tO.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var ty = n(905276),
    tP = n(350172),
    tD = n(730202),
    tB = n(510801),
    tG = n(998694);
let tw = null,
    tF = new Map();
function tz(e) {
    let { category: t } = e,
        n = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
        s = (0, tA.X)(t.products),
        l = (0, tI.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: tR.vY,
              children: l.map((e, t) =>
                  (0, a.jsx)(
                      N.R9,
                      { newValue: { tilePosition: t }, children: (0, a.jsx)(ty.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tH(e) {
    let { category: t, currentPage: n } = e,
        [s, l] = i.useState(!1),
        r = (0, t_.K)(function (e) {
            l(e);
        }, 0.15),
        c = (0, R.W6)(),
        o = (0, N.uM)(),
        d = i.useCallback(() => {
            var e;
            (tC.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: o?.sessionId,
                sku_id: t.skuId,
                page_type: tc.G2.CATALOG,
                page_section: o?.pageSection,
                page_category: t.name,
                page_index: o?.pageIndex,
                page_size: o?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (e = t.skuId),
                (tw = e),
                null != e && null != n && tF.set(e, n),
                c.push(e6.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId)));
        }, [o?.pageIndex, o?.pageSection, o?.pageSize, o?.sessionId, t.name, t.skuId, n, c]);
    return (0, a.jsxs)("div", {
        className: tR.EF,
        ref: r,
        children: [(0, a.jsx)(tb.A, { category: t, onSelect: d }), (0, a.jsx)(tz, { category: t })],
    });
}
function tU(e) {
    let { setCategoryRef: t, currentPage: n, handlePageChange: s, initialCategoryId: l } = e,
        r = (0, N.uM)(),
        c = r?.sessionId ?? "",
        { noCache: o, includeUnpublished: d } = (0, tG.A)(),
        {
            categories: u,
            total: m,
            isLoading: g,
        } = (function (e) {
            let { page: t, pageSize: n, includeUnpublished: s, noCache: l } = e,
                a = i.useMemo(
                    () => ({
                        applicationId: e6.FYj,
                        offset: (t - 1) * n,
                        limit: n,
                        useShopOrdering: !0,
                        includeUnpublishedProducts: s,
                        includeUnpublishedCollections: s,
                        ignoreCache: l,
                    }),
                    [t, n, s, l],
                ),
                r = (0, tP.H)(a),
                c = (0, tP.q7)(a);
            i.useEffect(() => {
                (0, tP.cS)(a);
            }, [a]);
            let {
                    collectionIds: o,
                    fetchState: d,
                    total: u,
                } = (0, M.cf)(
                    [tD.A],
                    () => ({
                        collectionIds: tD.A.getCollectionPageIds(r),
                        fetchState: tD.A.getCollectionPageFetchState(r),
                        total: tD.A.getCollectionListTotal(c),
                    }),
                    [r, c],
                ),
                m = o ?? [],
                g = m.join(","),
                h = (0, M.cf)(
                    [tD.A],
                    () => {
                        let e = {};
                        for (let t of m) e[t] = tD.A.getCollection(t);
                        return e;
                    },
                    [m],
                );
            return {
                categories: i.useMemo(
                    () =>
                        m
                            .map((e) => h[e])
                            .filter((e) => null != e)
                            .map((e) => tB.A.fromStorefrontCollectionRecord(e)),
                    [g, h],
                ),
                total: u ?? 0,
                isLoading: null == o && "error" !== d,
            };
        })({ page: n, pageSize: tc.l5, includeUnpublished: d, noCache: o }),
        h = i.useRef(void 0);
    i.useEffect(() => {
        if (null == l) {
            h.current = void 0;
            return;
        }
        if (l === h.current) return;
        let e = tF.get(l);
        null != e && (e !== n && s(e), (h.current = l));
    }, [l, s, n]);
    let E = i.useMemo(() => u.filter((e) => e.products.length > 0), [u]);
    return (i.useEffect(() => {
        (0, tL.z)({
            sessionId: c,
            checkpoint: tL.t.SHOP_MOUNTED,
            tab: tc.G2.CATALOG,
            unpublishedCategoriesShown: d,
            cacheDisabled: o,
        });
    }, []),
    i.useEffect(() => {
        g ||
            0 === E.length ||
            (0, tL.z)({
                sessionId: c,
                checkpoint: tL.t.SHOP_RENDERED,
                tab: tc.G2.CATALOG,
                unpublishedCategoriesShown: d,
                cacheDisabled: o,
            });
    }, [c, d, o, g, E.length]),
    g)
        ? (0, a.jsx)(tk, {})
        : (0, a.jsxs)("div", {
              className: tR.LZ,
              children: [
                  E.map((e, s) =>
                      (0, a.jsx)(
                          "div",
                          {
                              ref: (n) => t(e.skuId, n),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": et.intl.formatToPlainString(et.t.FNtLb3, { category: e.name }),
                              children: (0, a.jsx)(N.R9, {
                                  newValue: { categoryPosition: s },
                                  children: (0, a.jsx)(tH, { category: e, currentPage: n }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, a.jsx)("div", {
                      className: tR.Ej,
                      children: (0, a.jsx)(tN.m, {
                          currentPage: n,
                          totalCount: m,
                          pageSize: tc.l5,
                          onPageChange: s,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var tK = n(177366),
    tV = n(401864),
    tY = n(124987),
    tW = n(691885),
    t$ = n(783857),
    tZ = n(878278);
let tq = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, T.v)(),
        s = (0, N.uM)(),
        l = (0, t$.yB)("CollectiblesSortSelect"),
        r = n(),
        o = i.useMemo(() => tc.QB.filter((e) => e.sortType !== tY.$.RELEVANCE || r), [r]),
        d = i.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tY.$.RECENCY
                ? { label: et.intl.string(et.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tY.$.PRICE
                  ? n === tV.A.ASC
                      ? { label: et.intl.string(et.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: et.intl.string(et.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tY.$.RELEVANCE
                    ? { label: et.intl.string(et.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: et.intl.string(et.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        u = i.useCallback(
            (e) =>
                ({
                    recent: { sortType: tY.$.RECENCY, sortDirection: tV.A.DESC },
                    "price-asc": { sortType: tY.$.PRICE, sortDirection: tV.A.ASC },
                    "price-desc": { sortType: tY.$.PRICE, sortDirection: tV.A.DESC },
                    popularity: { sortType: tY.$.POPULARITY, sortDirection: tV.A.DESC },
                    relevance: { sortType: tY.$.RELEVANCE, sortDirection: tV.A.DESC },
                })[e],
            [],
        ),
        m = i.useCallback(
            (e) => {
                let n = d(u(e));
                (tC.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    page_index: s?.pageIndex,
                    page_size: s?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(u(e)));
            },
            [s, d, u, t],
        ),
        g = d(e);
    return (0, a.jsx)("div", {
        className: c()(tZ.k, { [t$.jP]: l }),
        children: (0, a.jsx)(tW.l, {
            label: et.intl.string(et.t.uaX705),
            hideLabel: !0,
            options: o.map(d),
            onSelectionChange: m,
            value: g.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var tQ =
        (((s = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (s.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (s.PINK = "COLLECTIBLES_COLOR_PINK"),
        (s.RED = "COLLECTIBLES_COLOR_RED"),
        (s.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (s.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (s.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (s.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (s.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (s.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        s),
    tX =
        (((l = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (l.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (l.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (l.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (l.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (l.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (l.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (l.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (l.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (l.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        l),
    tJ = n(150934),
    t0 = n(62010),
    t1 = n(278416),
    t6 = n(602853),
    t4 = n(661531),
    t2 = n(947641),
    t8 = n(604338),
    t7 = n(785866),
    t5 = n(373846),
    t9 = n(308323),
    t3 = n(608599),
    ne = n(685761),
    nt = n(157225),
    nn = n(413249),
    ns = n(510241),
    nl = n(601198),
    na = n(872162),
    ni = n(890283),
    nr = n(7250),
    nc = n(582666);
function no() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            onToggleOfferEligible: l,
            offerEligible: r,
            reset: o,
            hasFilters: d,
        } = (0, T.v)(),
        u = d(),
        m = (0, N.uM)(),
        g = i.useRef(null),
        h = (0, tp.HH)(),
        E = i.useCallback(
            (e) => {
                tC.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: m?.sessionId,
                    page_section: m?.pageSection,
                    page_category: m?.pageCategory,
                    page_index: m?.pageIndex,
                    page_size: m?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [m],
        ),
        x = i.useCallback(() => {
            (E(`filter 3p only ${!1 === s ? "on" : "off"}`), n());
        }, [n, s, E]);
    return (0, a.jsxs)("div", {
        className: nc.kT,
        children: [
            (0, a.jsxs)("div", {
                className: c()(nc.KZ, nc.YG),
                children: [
                    (0, a.jsx)("div", {
                        ref: g,
                        tabIndex: -1,
                        children: (0, a.jsx)($.E, {
                            variant: "text-md/semibold",
                            className: nc.hr,
                            children: et.intl.string(et.t.Qk6r1a),
                        }),
                    }),
                    null != h &&
                        (0, a.jsxs)("div", {
                            className: nc.Ym,
                            children: [
                                (0, a.jsx)(tJ.S, {
                                    checked: r,
                                    onChange: () => {
                                        (E(`filter offer eligible ${!1 === r ? "on" : "off"}`), l());
                                    },
                                    label: et.intl.string(et.t.hY8Ft1),
                                }),
                                (0, a.jsx)(t0.E, { type: { text: et.intl.string(et.t["nb5PC/"]) }, icon: t1.TagIcon }),
                            ],
                        }),
                    tc._6.map((e) => (0, a.jsx)(nd, { filter: e, trackFilterAction: E }, e)),
                    (0, a.jsx)(tJ.S, {
                        checked: t,
                        onChange: () => {
                            (E(`filter orb eligible ${!1 === t ? "on" : "off"}`), e());
                        },
                        label: et.intl.string(et.t.AHHHgG),
                    }),
                    (0, a.jsx)(tJ.S, { checked: s, onChange: x, label: et.intl.string(et.t["+W8gb+"]) }),
                ],
            }),
            (0, a.jsx)(nu, { trackFilterAction: E }),
            (0, a.jsx)(nh, { trackFilterAction: E }),
            u &&
                (0, a.jsx)(Z.$, {
                    variant: "secondary",
                    onClick: () => {
                        (E("filter reset"), o(), requestAnimationFrame(() => g.current?.focus()));
                    },
                    text: et.intl.string(et.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function nd(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [tj.q.AVATAR_DECORATION]: et.intl.string(et.t.dRZYNE),
            [tj.q.PROFILE_EFFECT]: et.intl.string(et.t["1cNjtx"]),
            [tj.q.NAMEPLATE]: et.intl.string(et.t.V68Fqz),
            [tj.q.PROFILE_FRAME]: et.intl.string(et.t.ecTJkR),
            [tj.q.BUNDLE]: et.intl.string(et.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: i } = (0, T.v)();
    return (0, a.jsx)(tJ.S, {
        checked: l.has(t),
        onChange: () => {
            let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
            (n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), i(t));
        },
        label: s[t] ?? "",
    });
}
function nu(e) {
    let { trackFilterAction: t } = e,
        n = i.useMemo(
            () => [
                { color: "#9B59B6", label: et.intl.string(et.t.kqUD4P), enum: tQ.PURPLE },
                { color: "#3498DB", label: et.intl.string(et.t.qQTRae), enum: tQ.BLUE },
                { color: "#2ECC71", label: et.intl.string(et.t["f/Ylk6"]), enum: tQ.GREEN },
                { color: "#A0522D", label: et.intl.string(et.t["Sd/BMa"]), enum: tQ.BROWN },
                { color: "#F1C40F", label: et.intl.string(et.t["0fevYz"]), enum: tQ.YELLOW },
            ],
            [],
        ),
        s = i.useMemo(
            () => [
                { color: "#E67E22", label: et.intl.string(et.t.ZE7weD), enum: tQ.ORANGE },
                { color: "#E74C3C", label: et.intl.string(et.t.hKJGOM), enum: tQ.RED },
                { color: "#EC407A", label: et.intl.string(et.t.HvLEGM), enum: tQ.PINK },
                { color: "#FFFFFF", label: et.intl.string(et.t["CB+lNO"]), enum: tQ.WHITE },
                { color: "#262626", label: et.intl.string(et.t["dMey+v"]), enum: tQ.BLACK },
            ],
            [],
        );
    return (0, a.jsxs)("div", {
        className: nc.KZ,
        children: [
            (0, a.jsx)($.E, { variant: "text-md/semibold", className: nc.hr, children: et.intl.string(et.t.K1xGoG) }),
            (0, a.jsx)(nm, { colors: n, trackFilterAction: t }),
            (0, a.jsx)(nm, { colors: s, trackFilterAction: t }),
        ],
    });
}
function nm(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, T.v)();
    return (0, a.jsx)("div", {
        className: nc.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: r } = e;
            return (0, a.jsx)(
                ng,
                { color: t, label: i, enum: r, isToggled: s.has(r), onToggleColor: l, trackFilterAction: n },
                r,
            );
        }),
    });
}
function ng(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: i, trackFilterAction: r } = e,
        o = (0, t6.r)(t4.A.unsafe_rawColors.WHITE).hex(),
        d = (0, t6.r)(t4.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, a.jsx)(
        eB.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, a.jsx)(
                eP.D,
                {
                    className: c()(nc.n1, { [nc.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        (r(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), i(s));
                    },
                    children:
                        l &&
                        (0, a.jsx)("div", {
                            className: nc.oE,
                            children: (0, a.jsx)(t2.r, {
                                size: "xs",
                                color: (0, nr.j)({ backgroundColor: t, colors: [o, d] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function nh(e) {
    let { trackFilterAction: t } = e,
        { enabled: n } = ni.A.useConfig({ location: "collectibles-shop-theme-filters" });
    return n ? (0, a.jsx)(nx, { trackFilterAction: t }) : (0, a.jsx)(nE, { trackFilterAction: t });
}
function nE(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, T.v)(),
        l = (0, ei.Ay)() === J.NJ.DARK,
        r = i.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        o = i.useCallback((e) => (n.has(e) || l ? t4.A.colors.WHITE : t4.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        d = i.useMemo(
            () => [
                {
                    name: et.intl.string(et.t.aVBOKh),
                    icon: (0, a.jsx)(t8.E, { size: "xs", color: o(tX.ANIME) }),
                    enum: tX.ANIME,
                },
                {
                    name: et.intl.string(et.t["3WoZBc"]),
                    icon: (0, a.jsx)(t7._, { size: "xs", color: o(tX.GAMING) }),
                    enum: tX.GAMING,
                },
                {
                    name: et.intl.string(et.t.yuEmLj),
                    icon: (0, a.jsx)(t5.C, { size: "xs", color: o(tX.CUTE_COZY) }),
                    enum: tX.CUTE_COZY,
                },
                {
                    name: et.intl.string(et.t.mMvCHo),
                    icon: (0, a.jsx)(t9.L, { size: "xs", color: o(tX.SCI_FI) }),
                    enum: tX.SCI_FI,
                },
                {
                    name: et.intl.string(et.t.TlhOQC),
                    icon: (0, a.jsx)(t3.L, { size: "xs", color: o(tX.FOOD_DRINKS) }),
                    enum: tX.FOOD_DRINKS,
                },
                {
                    name: et.intl.string(et.t["4IaUIM"]),
                    icon: (0, a.jsx)(ne.f, { size: "xs", color: o(tX.FANTASY) }),
                    enum: tX.FANTASY,
                },
                {
                    name: et.intl.string(et.t["w0nSG/"]),
                    icon: (0, a.jsx)(nt.N, { size: "xs", color: o(tX.ANIMALS_PETS) }),
                    enum: tX.ANIMALS_PETS,
                },
                {
                    name: et.intl.string(et.t.cJng7v),
                    icon: (0, a.jsx)(nn.p, { size: "xs", color: o(tX.NATURE) }),
                    enum: tX.NATURE,
                },
                {
                    name: et.intl.string(et.t["5mUvyM"]),
                    icon: (0, a.jsx)(ns.T, { size: "xs", color: o(tX.MOVIES_TV_SHOWS) }),
                    enum: tX.MOVIES_TV_SHOWS,
                },
                {
                    name: et.intl.string(et.t.MB9H5Z),
                    icon: (0, a.jsx)(nl.e, { size: "xs", color: o(tX.DARK_MOODY) }),
                    enum: tX.DARK_MOODY,
                },
            ],
            [o],
        );
    return (0, a.jsxs)("div", {
        className: nc.KZ,
        children: [
            (0, a.jsx)($.E, { variant: "text-md/semibold", className: nc.hr, children: et.intl.string(et.t.t1Ztrp) }),
            (0, a.jsx)("div", {
                className: nc.Ot,
                children: d.map((e) => {
                    let { name: l, icon: i, enum: o } = e;
                    return (0, a.jsxs)(
                        eP.D,
                        {
                            className: c()(nc.w4, { [nc.C7]: n.has(o) }),
                            "aria-label": l,
                            "aria-pressed": n.has(o),
                            onClick: () => {
                                let e = n.has(o);
                                (t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(o));
                            },
                            children: [i, (0, a.jsx)($.E, { color: r(o), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
function nx(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, T.v)(),
        l = i.useMemo(
            () => [
                { name: et.intl.string(et.t.aVBOKh), icon: t8.E, enum: tX.ANIME },
                { name: et.intl.string(et.t["3WoZBc"]), icon: t7._, enum: tX.GAMING },
                { name: et.intl.string(et.t.yuEmLj), icon: t5.C, enum: tX.CUTE_COZY },
                { name: et.intl.string(et.t.mMvCHo), icon: t9.L, enum: tX.SCI_FI },
                { name: et.intl.string(et.t.TlhOQC), icon: t3.L, enum: tX.FOOD_DRINKS },
                { name: et.intl.string(et.t["4IaUIM"]), icon: ne.f, enum: tX.FANTASY },
                { name: et.intl.string(et.t["w0nSG/"]), icon: nt.N, enum: tX.ANIMALS_PETS },
                { name: et.intl.string(et.t.cJng7v), icon: nn.p, enum: tX.NATURE },
                { name: et.intl.string(et.t["5mUvyM"]), icon: ns.T, enum: tX.MOVIES_TV_SHOWS },
                { name: et.intl.string(et.t.MB9H5Z), icon: nl.e, enum: tX.DARK_MOODY },
            ],
            [],
        ),
        r = i.useMemo(() => new Set(Array.from(n, (e) => String(e))), [n]);
    return (0, a.jsxs)("div", {
        className: nc.KZ,
        children: [
            (0, a.jsx)($.E, { variant: "text-md/semibold", className: nc.hr, children: et.intl.string(et.t.t1Ztrp) }),
            (0, a.jsx)(na.C, {
                variant: "filter",
                selectionMode: "multiple",
                label: et.intl.string(et.t.t1Ztrp),
                items: l.map((e) => {
                    let { name: t, icon: n, enum: s } = e;
                    return { id: String(s), label: t, icon: n };
                }),
                selectedKeys: r,
                onSelectionChange: (e) => {
                    if ("all" === e) return;
                    let a = l.find((t) => {
                        let { enum: s } = t;
                        return e.has(String(s)) !== n.has(s);
                    });
                    if (null == a) return;
                    let i = n.has(a.enum);
                    (t(`filter theme ${a.name.toLowerCase()} ${!i ? "on" : "off"}`), s(a.enum));
                },
            }),
        ],
    });
}
var nf = n(415926),
    nC = n(561769),
    nv = n(66506);
function np() {
    return (0, a.jsxs)("div", {
        className: nv.k,
        children: [
            (0, a.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: et.intl.string(et.t.oezC3x),
                className: nv._,
            }),
            (0, a.jsx)(ea.D, { variant: "heading-xl/semibold", children: et.intl.string(et.t.oezC3x) }),
            (0, a.jsx)($.E, { variant: "text-md/medium", children: et.intl.string(et.t["Tc/Ndl"]) }),
        ],
    });
}
var nj = n(919303);
let nS = { flattenProductVariants: !0 };
function n_(e) {
    let { scrollerRef: t, tab: n } = e,
        s = (0, N.uM)(),
        l = s?.sessionId ?? "",
        { noCache: r, includeUnpublished: o } = (0, tG.A)(),
        u = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
        { skus: m, currentPage: g, totalCount: h, isFetchingResults: E } = (0, tE.S)(),
        x = i.useCallback(() => {
            t?.current?.scrollToTop({ animate: !0 });
        }, [t]),
        f = m?.join("");
    i.useEffect(() => {
        x();
    }, [f, x]);
    let C = m.length;
    i.useEffect(() => {
        (0, tL.z)({
            sessionId: l,
            checkpoint: tL.t.SHOP_RENDERED,
            tab: n,
            unpublishedCategoriesShown: o,
            cacheDisabled: r,
        });
    }, [l, o, r, n]);
    let v = i.useRef(null),
        { setQueryPageSize: p, setQueryPageOffset: j, queryPageSize: _ } = (0, T.v)(),
        [I, A] = i.useState(!1),
        L = E || null == u;
    i.useEffect(() => {
        L ? A(!1) : C > 0 && A(!0);
    }, [L, C]);
    let b = _ > 0 && !L && 0 === C;
    i.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == v.current || p(Math.floor(5 * getComputedStyle(v.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != v.current) return (e.observe(v.current), () => e.disconnect());
    }, [p]);
    let O = i.useCallback(
        (e) => {
            (tC.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: s?.sessionId,
                page_section: s?.pageSection,
                page_category: s?.pageCategory,
                page_index: e,
                page_size: _,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                j((e - 1) * _));
        },
        [s, _, j],
    );
    return (0, a.jsxs)(nC.v3.Provider, {
        value: nS,
        children: [
            (0, a.jsxs)("div", {
                className: c()({ [nj.oE]: b }),
                children: [
                    b && (0, a.jsx)(np, {}),
                    (0, a.jsxs)("div", {
                        className: c()(nj.ZE, { [nj.Kp]: I }),
                        ref: v,
                        children: [
                            L && [...Array(_)].map((e, t) => (0, a.jsx)(tO.A, {}, t)),
                            !L &&
                                m.map((e, t) =>
                                    (0, a.jsx)(
                                        N.R9,
                                        {
                                            newValue: { tilePosition: t },
                                            children: (0, a.jsx)(ty.A, {
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
            h > _ &&
                (0, a.jsx)("div", {
                    className: nj.Ej,
                    children: (0, a.jsx)("div", {
                        children: (0, a.jsx)(tN.m, {
                            currentPage: g,
                            totalCount: h,
                            pageSize: _,
                            onPageChange: O,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nN = n(578364);
function nI(e) {
    let { tab: t, initialCategoryId: n, showFilterInitially: s = !0, onUnmount: l } = e,
        r = (0, f.A)("shop_include_unpublished");
    (!(function () {
        let e = (0, M.bG)([tv.A], () => "success" === tv.A.getFetchState(e6.FYj)),
            t = null != (0, tp.HH)(),
            { offerEligible: n, clearFilters: s } = (0, T.v)();
        i.useEffect(() => {
            n && e && !t && s();
        }, [n, e, t, s]);
    })(),
        (0, T.S)(r));
    let c = i.useRef(null),
        { handleScroll: o } = (0, nf.r)(c, t),
        { setCategoryRef: d, handleScrollToCategory: u } = (0, tK.k0)(c),
        [m, g] = i.useState(s),
        [h, E] = i.useState(!1);
    return (
        i.useEffect(() => {
            null != n && u(n);
        }, [n, u]),
        i.useEffect(
            () => () => {
                null != l && l();
            },
            [],
        ),
        i.useEffect(() => {
            function e() {
                E(window.innerWidth < 1400);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        (0, a.jsx)("div", {
            className: nN.VM,
            children: (0, a.jsxs)("main", {
                className: nN.MY,
                children: [
                    (0, a.jsx)(y.Gt, {
                        className: nN.OW,
                        ref: c,
                        onScroll: o,
                        scrollbarGutter: "both-edges",
                        children: (0, a.jsx)(nA, {
                            isSmallScreen: h,
                            filterBarOpen: m,
                            setFilterBarOpen: g,
                            tab: t,
                            scrollerRef: c,
                            setCategoryRef: d,
                            initialCategoryId: n,
                        }),
                    }),
                    m && !h && (0, a.jsx)("div", { className: nN.yF }),
                    m && !h && (0, a.jsx)(tx.Ip, { className: nN.kT, children: (0, a.jsx)(no, {}) }),
                ],
            }),
        })
    );
}
function nA(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: s,
            tab: l,
            scrollerRef: r,
            setCategoryRef: o,
            initialCategoryId: d,
        } = e,
        u = i.useRef(null),
        m = (0, T.v)((e) => e.hasDefaultFilters()),
        g = (0, N.uM)(),
        { handlePageChange: h, currentPage: E } = (function (e) {
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
                (tC.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: g?.sessionId,
                    page_section: g?.pageSection,
                    page_category: g?.pageCategory,
                    page_index: e,
                    page_size: g?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    h(e));
            },
            [g, h],
        ),
        f = i.useRef(null);
    return (
        i.useEffect(() => {
            if (t && n)
                return (document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e));
            function e(e) {
                let t = e.target;
                null === u.current ||
                    null === f.current ||
                    u.current.contains(t) ||
                    f.current.contains(t) ||
                    (tC.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: g?.sessionId,
                        page_section: g?.pageSection,
                        page_category: g?.pageCategory,
                        page_index: g?.pageIndex,
                        page_size: g?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    s(!1));
            }
        }, [t, n, s, g]),
        (0, a.jsx)("div", {
            className: nN.en,
            children: (0, a.jsxs)("div", {
                className: nN.pf,
                children: [
                    (0, a.jsxs)("div", {
                        className: nN.ne,
                        children: [
                            (0, a.jsx)("div", { className: nN.lQ, children: (0, a.jsx)(tS, {}) }),
                            (0, a.jsxs)("div", {
                                className: c()(nN.wR, { [nN.Im]: t }),
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nN.Ul,
                                        children: [
                                            (0, a.jsx)($.E, {
                                                variant: "text-md/semibold",
                                                children: et.intl.string(et.t.uaX705),
                                            }),
                                            (0, a.jsx)(tq, {}),
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        ref: f,
                                        children: (0, a.jsx)(Z.$, {
                                            onClick: function () {
                                                let e = !n;
                                                (tC.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: g?.sessionId,
                                                    page_section: g?.pageSection,
                                                    page_category: g?.pageCategory,
                                                    page_index: g?.pageIndex,
                                                    page_size: g?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    s(e));
                                            },
                                            variant: "secondary",
                                            text: et.intl.string(n ? et.t.fYtm6f : et.t["TeTYE+"]),
                                            icon: tf.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, a.jsx)("div", {
                                    className: nN.Dh,
                                    ref: u,
                                    children: (0, a.jsx)(y.Ch, { className: nN.Qo, children: (0, a.jsx)(no, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, a.jsx)(N.R9, {
                              newValue: { pageIndex: E },
                              children: (0, a.jsx)(tU, {
                                  setCategoryRef: o,
                                  currentPage: E,
                                  handlePageChange: x,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, a.jsx)(n_, { scrollerRef: r, tab: l }, l),
                ],
            }),
        })
    );
}
var nL = n(599062),
    nb = n(721720),
    nO = n(417388);
let nT = function () {
        return (0, a.jsxs)("div", {
            className: nO.z,
            children: [
                (0, a.jsx)("img", {
                    className: nO.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: et.intl.string(et.t["p8+qtU"]),
                }),
                (0, a.jsx)(ea.D, { variant: "heading-xl/semibold", children: et.intl.string(et.t["p8+qtU"]) }),
                (0, a.jsx)($.E, { variant: "text-md/medium", children: et.intl.string(et.t.UEiyvs) }),
            ],
        });
    },
    nR = [tc.G2.HOME, tc.G2.ORBS];
async function nM() {
    try {
        await (0, tg.gB)();
    } catch {}
}
function nk(e) {
    let { tab: t, transitionToTab: n, transitionState: s, updateAnalyticsState: l } = e,
        r = (0, M.bG)([th.A], () =>
            null != th.A.claimError
                ? `shop load claim error: ${th.A.claimError.message}`
                : null != th.A.fetchError
                  ? `shop load fetch purchase error: ${th.A.fetchError.message}`
                  : void 0,
        );
    !(function (e) {
        let t = (0, M.bG)([S.default], () => S.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, tG.A)();
        i.useEffect(() => {
            null != e &&
                tm.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(r);
    let c = (0, k.H)({ location: "collectibles_content" }),
        o = (0, R.W6)(),
        d = (0, R.zy)(),
        [u] = i.useState(() => {
            if ("POP" === o.action) {
                let e;
                return ((e = tw), (tw = null), e ?? void 0);
            }
        }),
        [m, g] = i.useState(u),
        [h, E] = i.useState(null == u),
        x = i.useMemo(() => {
            let e = new URLSearchParams(d.search).get(tc.P1);
            return null != e && "" !== e ? e : void 0;
        }, [d.search]),
        f = i.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: s,
                    shouldAnimate: a,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((l(t, s), null != s && i && !r)) return void o.push(e6.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(s));
                let c = r ? tc.G2.ORBS : tc.G2.CATALOG;
                (g(s), E(!i), n(c, a));
            },
            [n, l, o],
        ),
        { searchError: C } = (0, tE.S)();
    return null != C
        ? (0, a.jsx)(nT, {})
        : null != r
          ? (0, a.jsx)(nL.h, { onRetry: nM, errorMessage: r, errorOrigin: nL.A.SHOP_PAGE })
          : nR.includes(t)
            ? (0, a.jsx)(nb.A, { handleTransition: f, tab: t, transitionState: s })
            : t === tc.G2.GAME_SERVERS
              ? c
                  ? (0, a.jsx)(td, { isGameServerHostingInShopEnabled: c })
                  : (0, a.jsx)(R.rd, { to: e6.BVt.COLLECTIBLES_SHOP_WITH_TAB(tc.G2.HOME) })
              : (0, a.jsx)(nI, {
                    tab: t,
                    initialCategoryId: m ?? x,
                    showFilterInitially: h && null == x,
                    onUnmount: () => {
                        (g(void 0), E(!0));
                    },
                });
}
var ny = n(854104),
    nP = n(235939),
    nD = n(976860),
    nB = n(339821),
    nG = n(650583);
function nw(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, u.useHasAnyModalOpen)();
    return (
        i.useEffect(() => {
            if (n && !l) return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
            function e(e) {
                e.key === nG.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let nF = function (e) {
    let { tab: t = tc.G2.HOME } = e;
    (0, v.P)(C.a);
    let n = (0, h.A)((0, o.A)()),
        s = (0, d.bG)([S.default], () => S.default.getCurrentUser());
    (0, j.pE)();
    let l = (0, t$.yB)("CollectiblesShop"),
        { onClose: r } = (function () {
            let { search: e } = (0, R.zy)(),
                t = (0, R.g)(),
                n = i.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: i.useCallback(() => {
                    if (0 === s) {
                        ((0, nD.aX)(), (0, w.openUserSettings)());
                        return;
                    }
                    (0, nD.EL)() ? (0, nD.aX)() : (0, nD.pX)(e6.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: M, hasFilters: k } = (0, T.v)(),
        y = i.useMemo(() => (t === tc.G2.HOME && null != M && k() ? M : t), [t, M, k]);
    ((0, p.A)(e6.FYj),
        (0, b.Wg)(),
        i.useEffect(() => {
            (0, _.rW)();
        }, []));
    let [P, D] = i.useState(),
        B = (0, f.A)("shop_include_unpublished"),
        { category: G, state: F } = (0, L.A)(P, { includeUnpublished: B }),
        z = G?.name,
        [H, U] = i.useState();
    (0, tK.XU)(n);
    let K = i.useCallback((e, t) => {
            (U(e), D(t));
        }, []),
        { selectedTab: V, transitionState: Y, transitionToTab: W } = (0, O.o)(y);
    ((0, x.HU)({ location: et.intl.string(et.t.pWG4ze) }),
        (0, A.uS)(n, V, z, Y, { sourceButton: H, enabled: null == P || "loading" !== F }),
        (0, A.N0)(V, s));
    let { dismissShopButtonDC: $ } = (0, nB.A)();
    (i.useEffect(() => {
        $(e2.i.AUTO_DISMISS);
    }, [$]),
        i.useEffect(() => {
            (0, g.I)(e6.BVt.COLLECTIBLES_SHOP);
        }, []));
    let Z = i.useRef(null),
        q = i.useRef(null);
    (0, m.tj)(Z);
    let Q = (0, u.useHasAnyModalOpen)();
    (i.useEffect(() => {
        q.current?.focus();
    }, []),
        (0, t$.gB)());
    let { analyticsLocations: X } = (0, A.lC)(V);
    return (0, a.jsx)(E.f5, {
        value: X,
        children: (0, a.jsx)(N.R9, {
            newValue: { sessionId: n, pageCategory: z, pageSize: tc.l5 },
            children: (0, a.jsx)(I.iM, {
                tab: V,
                children: (0, a.jsx)(nw, {
                    onClose: r,
                    shouldAddEventListener: !1,
                    children: (0, a.jsxs)("div", {
                        className: c()(tR.bx, { [t$.jP]: l }),
                        ref: q,
                        inert: Q,
                        tabIndex: -1,
                        children: [
                            (0, a.jsx)(ny.G, { handleTransition: W, selectedTab: V }),
                            (0, a.jsx)(nP.A, { tab: V, handleTransition: W }),
                            (0, a.jsx)("div", {
                                className: c()(tR.td, {
                                    [tR.RK]: Y === tc.Pf.VISIBLE,
                                    [tR.in]: Y === tc.Pf.IN,
                                    [tR.FD]: Y === tc.Pf.OUT,
                                }),
                                children: (0, a.jsx)(nk, {
                                    tab: V,
                                    transitionToTab: W,
                                    transitionState: Y,
                                    updateAnalyticsState: K,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
