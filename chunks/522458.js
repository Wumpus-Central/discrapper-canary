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
    f = n(475073),
    C = n(611924),
    p = n(744082),
    v = n(594832),
    S = n(287809),
    j = n(371794),
    _ = n(440938),
    A = n(590180),
    I = n(161918),
    N = n(395856),
    L = n(790297),
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
    U = n(158045),
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
    ee = n(344045),
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
function ep(e) {
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
var ev = n(32880),
    eS = n(410232),
    ej = n(231483),
    e_ = n(339350),
    eA = n(28863),
    eI = n(442935);
function eN() {
    let e = i.useMemo(
        () => [
            { Icon: ev.DownloadIcon, label: et.intl.string(ee.default.GJNQYz) },
            { Icon: eS.k, label: et.intl.string(ee.default.pTinR2) },
            { Icon: ej.ShieldIcon, label: et.intl.string(ee.default.s0N1nM) },
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
                            (0, a.jsx)(eA.Anchor, {
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
var e4 = n(652215),
    e8 = n(628049),
    e5 = n(49999),
    e6 = n(684644);
let e2 = [ek.M.STARTUP_FAILED, ek.M.MISSING_STOCK, ek.M.PROVIDER_ERRORED, ek.M.DELETED];
function e7(e) {
    return `game-server-owned-card-${e}`;
}
function e9(e) {
    let { gameServerId: t } = e,
        n = i.useCallback(() => {
            (0, eW.Kz)(t).catch(() => {});
        }, [t]);
    return (0, a.jsx)("div", {
        className: e6.y7,
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
        className: e6.y7,
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
            return t.status === e4.Dmq.CANCELED
                ? { text: et.intl.formatToPlainString(ee.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: et.intl.formatToPlainString(ee.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [g, h] = (0, eK.kn)([ey.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        E = g !== ey.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        x = eM.X.SHOCKBYTE,
        f = F.default.getId() ?? "0",
        { handleCopyServerIp: C, animateCopyIcon: p } = (0, e$.A)(f, t.id, q.A.GAME_SERVER_PAGE, t.serverIp),
        v = i.useCallback(() => {
            (0, eq.A)({
                provider: x,
                onAccept: () => {
                    (h(e5.i.TAKE_ACTION), C());
                },
            });
        }, [x, h, C]),
        S = i.useCallback(() => {
            E
                ? s(t)
                : (0, eq.A)({
                      provider: x,
                      onAccept: () => {
                          (h(e5.i.TAKE_ACTION), s(t));
                      },
                  });
        }, [E, x, h, s, t]),
        j = i.useCallback(() => l(t), [l, t]),
        _ = i.useCallback(() => {
            ((e) => {
                let { server: t, source: s } = e;
                (0, u.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("267732"),
                            n.e("649500"),
                            n.e("683426"),
                            n.e("524434"),
                            n.e("933947"),
                            n.e("866475"),
                            n.e("279926"),
                            n.e("481647"),
                            n.e("776602"),
                            n.e("140402"),
                            n.e("770291"),
                            n.e("854461"),
                            n.e("844780"),
                            n.e("368062"),
                            n.e("713567"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("304329"),
                            n.e("84755"),
                            n.e("835868"),
                        ]).then(n.bind(n, 729751));
                        return (n) => (0, a.jsx)(e, { ...n, server: t, source: s });
                    },
                    { stackingBehavior: "stack", modalKey: eQ.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        A = (0, eZ.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e8.qb[x],
        I = null != t.instance.gameServerPanelUrl,
        N = null != t.instance.status && e2.includes(t.instance.status),
        L = i.useCallback(() => {
            (0, H.h)({ href: A });
        }, [A]),
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
        O = t.isOnline ? "text-feedback-positive" : N ? "text-feedback-critical" : "text-muted",
        T = i.useMemo(
            () =>
                (0, a.jsx)(eP.D, {
                    className: c()(e6.wC, e6.QV),
                    onClick: S,
                    "aria-label": et.intl.string(ee.default["fQCcM/"]),
                    children: (0, a.jsx)($.E, {
                        variant: "text-sm/semibold",
                        color: "none",
                        children: et.intl.string(ee.default["fQCcM/"]),
                    }),
                }),
            [S],
        ),
        R = i.useMemo(
            () =>
                (0, a.jsxs)(eP.D, {
                    className: c()(e6.wC, e6.y2, { [e6.Gz]: !I }),
                    onClick: I ? j : void 0,
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
            [j, I],
        ),
        k = i.useMemo(() => {
            switch (t.instance.status) {
                case ek.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(e9, { gameServerId: t.id }), R] });
                case ek.M.STARTUP_FAILED:
                case ek.M.MISSING_STOCK:
                    return (0, a.jsx)("div", {
                        className: e6.y7,
                        children: (0, a.jsx)(Z.$, {
                            fullWidth: !0,
                            text: et.intl.string(ee.default.gWMqnI),
                            variant: "primary",
                            icon: eD.I,
                            iconPosition: "end",
                            disabled: !I,
                            onClick: j,
                        }),
                    });
                case ek.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", {
                                className: e6.y7,
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
        }, [t.instance.status, t.id, I, T, R, j, L]);
    return (0, a.jsxs)("div", {
        id: e7(t.id),
        className: c()(e6.Nr, { [e6.mr]: o }),
        children: [
            o && (0, a.jsx)("div", { className: e6._8, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: e6.Nk,
                "aria-hidden": !0,
                children: [
                    null != d && (0, a.jsx)("img", { className: e6.QC, src: d, alt: "" }),
                    (0, a.jsx)("div", { className: e6.jc }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: e6.AQ,
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
                className: e6.rf,
                children: [
                    (0, a.jsxs)("div", {
                        className: e6.U1,
                        children: [
                            (0, a.jsxs)("div", {
                                className: e6.oL,
                                children: [
                                    null != d
                                        ? (0, a.jsx)("img", { className: e6.vT, src: d, alt: "" })
                                        : (0, a.jsx)("div", {
                                              className: e6.iv,
                                              children: (0, a.jsx)($.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, a.jsx)("div", { className: e6.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: e6.VQ,
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
                        className: e6.M1,
                        children: [
                            (0, a.jsxs)("div", {
                                className: e6.N8,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: e6.bi,
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
                                        className: e6.gv,
                                        children: [
                                            (0, a.jsx)($.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: et.intl.string(ee.default["7phwMG"]),
                                            }),
                                            E
                                                ? (0, a.jsxs)("div", {
                                                      className: e6.Yb,
                                                      children: [
                                                          (0, a.jsx)($.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, a.jsx)(eP.D, {
                                                                  className: e6.cL,
                                                                  onClick: C,
                                                                  "aria-label": et.intl.string(et.t.OpuAlK),
                                                                  children: p
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
                                                      onClick: v,
                                                      children: et.intl.string(ee.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: e6.N8,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: e6.bi,
                                        children: [
                                            (0, a.jsx)($.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: et.intl.string(ee.default["n+ZX7y"]),
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: e6.Yb,
                                                children: [
                                                    (t.isOnline || N) &&
                                                        (0, a.jsx)("span", {
                                                            className: c()(e6.kg, { [e6.rU]: N }),
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
                                        className: e6.gv,
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
            (0, a.jsx)("div", { className: e6.qr, children: k }),
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
        p = i.useCallback(() => {
            let e = u.current;
            null != e && (h(e.scrollLeft > 1), x(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
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
    let v = i.useCallback(() => {
            u.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        S = i.useCallback(() => {
            u.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        i.useEffect(() => {
            if (d <= 0) return;
            let e = null != o ? document.getElementById(e7(o)) : m.current;
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
                                                    onClick: v,
                                                    "aria-label": et.intl.string(et.t["13/7kX"]),
                                                }),
                                                (0, a.jsx)(eO.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eR.K,
                                                    disabled: !E,
                                                    onClick: S,
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
                    onScroll: p,
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
        [C, p] = i.useState({ serverId: null, nonce: 0 }),
        v = i.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = K.A.getGameServers();
                for (let s = n.length - 1; s >= 0; s--)
                    if (n[s].game_id === e.gameId) {
                        t = n[s].id;
                        break;
                    }
            }
            p((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        j = i.useCallback(() => {
            let e = l[0];
            null != e && v({ serverId: e.id });
        }, [l, v]),
        _ = (0, ta.O)((e) => e.highlightFirstCardNonce),
        A = i.useRef(_);
    i.useEffect(() => {
        if (_ === A.current) return;
        A.current = _;
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
                        onViewServer: () => v({ gameId: e.gameId }),
                    }));
            },
            [f, v],
        ),
        N = i.useMemo(() => {
            let e = new URLSearchParams(n.search).get(tc.tD);
            return null != e && "" !== e ? e : void 0;
        }, [n.search]);
    i.useEffect(() => {
        if (!t || null == N || g || 0 === d.length) return;
        let e = d.find((e) => e.gameId === N);
        if (null == e) return;
        I(e, ts.cl.ACTIVITY_PANEL_DEEP_LINK);
        let l = new URLSearchParams(n.search);
        (l.delete(tc.tD), s.replace(`${n.pathname}?${l.toString()}`));
    }, [t, N, d, g, I, s, n.pathname, n.search]);
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
                        onViewServer: () => v({ serverId: e.id }),
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
            [v],
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
                        (0, a.jsx)(eN, {}),
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
                            : (0, a.jsx)(ep, { games: d, title: k, onSelectGame: I, loading: g }),
                    ],
                }),
            ],
        }),
    });
}
var tm = n(38405),
    tg = n(4227),
    th = n(856686),
    tE = n(364522),
    tx = n(783977),
    tf = n(354328),
    tC = n(174459),
    tp = n(918467),
    tv = n(758461),
    tS = n(641150);
function tj() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: s } = (0, T.v)((e) => e),
        { totalCount: l, isFetchingResults: r } = (0, th.S)(),
        c = (0, T.v)((e) => e.hasFilters()),
        o = i.useCallback(() => {
            if (!c) return "";
            if (r) return et.intl.string(et.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return et.intl.format(et.t.KJMJOz, { count: l, search: e });
            }
            if (!n && !s && 1 === e.size) {
                if (e.has(tS.q.AVATAR_DECORATION)) return et.intl.format(et.t.s1UzGQ, { count: l });
                if (e.has(tS.q.NAMEPLATE)) return et.intl.format(et.t.ZWGN9T, { count: l });
                if (e.has(tS.q.PROFILE_EFFECT)) return et.intl.format(et.t["v/7apu"], { count: l });
                if (e.has(tS.q.PROFILE_FRAME)) return et.intl.format(et.t.eu4eRy, { count: l });
                if (e.has(tS.q.BUNDLE)) return et.intl.format(et.t.fZ1rdk, { count: l });
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
    tA = n(932793),
    tI = n(511265),
    tN = n(206077),
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
var ty = n(258245),
    tP = n(350172),
    tD = n(730202),
    tB = n(510801),
    tG = n(159439),
    tw = n(998694);
let tF = null,
    tz = new Map();
function tH(e) {
    let { category: t } = e,
        n = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
        s = (0, tN.X)(t.products),
        l = (0, tI.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: tR.vY,
              children: l.map((e, t) =>
                  (0, a.jsx)(
                      _.R9,
                      { newValue: { tilePosition: t }, children: (0, a.jsx)(ty.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tU(e) {
    let { category: t, currentPage: n } = e,
        [s, l] = i.useState(!1),
        r = (0, t_.K)(function (e) {
            l(e);
        }, 0.15),
        c = (0, R.W6)(),
        o = (0, _.uM)(),
        d = i.useCallback(() => {
            var e;
            (tC.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                (tF = e),
                null != e && null != n && tz.set(e, n),
                c.push(e4.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId)));
        }, [o?.pageIndex, o?.pageSection, o?.pageSize, o?.sessionId, t.name, t.skuId, n, c]);
    return (0, a.jsxs)("div", {
        className: tR.EF,
        ref: r,
        children: [(0, a.jsx)(tb.A, { category: t, onSelect: d }), (0, a.jsx)(tH, { category: t })],
    });
}
function tK(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: r } = e,
        c = (0, _.uM)(),
        o = (0, tG.U)(),
        d = c?.sessionId ?? "",
        { noCache: u, includeUnpublished: m } = (0, tw.A)(),
        g = (0, N.$)("collectibles_catalog"),
        {
            categories: h,
            total: E,
            isLoading: x,
        } = (function (e) {
            let { page: t, pageSize: n, includeUnpublished: s, noCache: l, enabled: a = !0 } = e,
                r = i.useMemo(
                    () => ({
                        applicationId: e4.FYj,
                        offset: (t - 1) * n,
                        limit: n,
                        useShopOrdering: !0,
                        includeUnpublishedProducts: s,
                        includeUnpublishedCollections: s,
                        ignoreCache: l,
                    }),
                    [t, n, s, l],
                ),
                c = (0, tP.H)(r),
                o = (0, tP.q7)(r);
            i.useEffect(() => {
                a && (0, tP.cS)(r);
            }, [a, r]);
            let {
                    collectionIds: d,
                    fetchState: u,
                    total: m,
                } = (0, M.cf)(
                    [tD.A],
                    () => ({
                        collectionIds: tD.A.getCollectionPageIds(c),
                        fetchState: tD.A.getCollectionPageFetchState(c),
                        total: tD.A.getCollectionListTotal(o),
                    }),
                    [c, o],
                ),
                g = d ?? [],
                h = g.join(","),
                E = (0, M.cf)(
                    [tD.A],
                    () => {
                        let e = {};
                        for (let t of g) e[t] = tD.A.getCollection(t);
                        return e;
                    },
                    [g],
                );
            return {
                categories: i.useMemo(
                    () =>
                        g
                            .map((e) => E[e])
                            .filter((e) => null != e)
                            .map((e) => tB.A.fromStorefrontCollectionRecord(e)),
                    [h, E],
                ),
                total: m ?? 0,
                isLoading: null == d && "error" !== u,
            };
        })({ page: s, pageSize: tc.l5, includeUnpublished: m, noCache: u, enabled: g }),
        f = i.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        C = i.useMemo(() => f.map((e) => e.skuId), [f]),
        p = i.useRef(void 0);
    i.useEffect(() => {
        let e;
        if (null == r) {
            p.current = void 0;
            return;
        }
        if (r !== p.current) {
            if (g) e = tz.get(r);
            else {
                let t = C.indexOf(r);
                e = -1 === t ? void 0 : Math.floor(t / tc.l5) + 1;
            }
            null != e && (e !== s && l(e), (p.current = r));
        }
    }, [r, g, C, l, s]);
    let v = i.useMemo(() => {
            if (g) return h.filter((e) => e.products.length > 0);
            let e = (s - 1) * tc.l5;
            return f.slice(e, e + tc.l5);
        }, [g, h, f, s]),
        S = g ? E : C.length,
        j = g ? x : o;
    return (i.useEffect(() => {
        (0, tL.z)({
            sessionId: d,
            checkpoint: tL.t.SHOP_MOUNTED,
            tab: tc.G2.CATALOG,
            unpublishedCategoriesShown: m,
            cacheDisabled: u,
        });
    }, []),
    i.useEffect(() => {
        j ||
            0 === v.length ||
            (0, tL.z)({
                sessionId: d,
                checkpoint: tL.t.SHOP_RENDERED,
                tab: tc.G2.CATALOG,
                unpublishedCategoriesShown: m,
                cacheDisabled: u,
            });
    }, [d, m, u, j, v.length]),
    j)
        ? (0, a.jsx)(tk, {})
        : (0, a.jsxs)("div", {
              className: tR.LZ,
              children: [
                  v.map((e, t) =>
                      (0, a.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": et.intl.formatToPlainString(et.t.FNtLb3, { category: e.name }),
                              children: (0, a.jsx)(_.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, a.jsx)(tU, { category: e, currentPage: s }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, a.jsx)("div", {
                      className: tR.Ej,
                      children: (0, a.jsx)(tA.m, {
                          currentPage: s,
                          totalCount: S,
                          pageSize: tc.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var tV = n(177366),
    tY = n(401864),
    tW = n(124987),
    t$ = n(691885),
    tZ = n(783857),
    tq = n(878278);
let tQ = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, T.v)(),
        s = (0, _.uM)(),
        l = (0, tZ.yB)("CollectiblesSortSelect"),
        r = n(),
        o = i.useMemo(() => tc.QB.filter((e) => e.sortType !== tW.$.RELEVANCE || r), [r]),
        d = i.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tW.$.RECENCY
                ? { label: et.intl.string(et.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tW.$.PRICE
                  ? n === tY.A.ASC
                      ? { label: et.intl.string(et.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: et.intl.string(et.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tW.$.RELEVANCE
                    ? { label: et.intl.string(et.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: et.intl.string(et.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        u = i.useCallback(
            (e) =>
                ({
                    recent: { sortType: tW.$.RECENCY, sortDirection: tY.A.DESC },
                    "price-asc": { sortType: tW.$.PRICE, sortDirection: tY.A.ASC },
                    "price-desc": { sortType: tW.$.PRICE, sortDirection: tY.A.DESC },
                    popularity: { sortType: tW.$.POPULARITY, sortDirection: tY.A.DESC },
                    relevance: { sortType: tW.$.RELEVANCE, sortDirection: tY.A.DESC },
                })[e],
            [],
        ),
        m = i.useCallback(
            (e) => {
                let n = d(u(e));
                (tC.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: c()(tq.k, { [tZ.jP]: l }),
        children: (0, a.jsx)(t$.l, {
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
var tX =
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
    tJ =
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
    t0 = n(150934),
    t1 = n(62010),
    t4 = n(278416),
    t8 = n(602853),
    t5 = n(661531),
    t6 = n(947641),
    t2 = n(604338),
    t7 = n(785866),
    t9 = n(373846),
    t3 = n(308323),
    ne = n(608599),
    nt = n(685761),
    nn = n(157225),
    ns = n(413249),
    nl = n(510241),
    na = n(601198),
    ni = n(872162),
    nr = n(890283),
    nc = n(7250),
    no = n(582666);
function nd() {
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
        m = (0, _.uM)(),
        g = i.useRef(null),
        h = (0, tv.HH)(),
        E = i.useCallback(
            (e) => {
                tC.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: no.kT,
        children: [
            (0, a.jsxs)("div", {
                className: c()(no.KZ, no.YG),
                children: [
                    (0, a.jsx)("div", {
                        ref: g,
                        tabIndex: -1,
                        children: (0, a.jsx)($.E, {
                            variant: "text-md/semibold",
                            className: no.hr,
                            children: et.intl.string(et.t.Qk6r1a),
                        }),
                    }),
                    null != h &&
                        (0, a.jsxs)("div", {
                            className: no.Ym,
                            children: [
                                (0, a.jsx)(t0.S, {
                                    checked: r,
                                    onChange: () => {
                                        (E(`filter offer eligible ${!1 === r ? "on" : "off"}`), l());
                                    },
                                    label: et.intl.string(et.t.hY8Ft1),
                                }),
                                (0, a.jsx)(t1.E, { type: { text: et.intl.string(et.t["nb5PC/"]) }, icon: t4.TagIcon }),
                            ],
                        }),
                    tc._6.map((e) => (0, a.jsx)(nu, { filter: e, trackFilterAction: E }, e)),
                    (0, a.jsx)(t0.S, {
                        checked: t,
                        onChange: () => {
                            (E(`filter orb eligible ${!1 === t ? "on" : "off"}`), e());
                        },
                        label: et.intl.string(et.t.AHHHgG),
                    }),
                    (0, a.jsx)(t0.S, { checked: s, onChange: x, label: et.intl.string(et.t["+W8gb+"]) }),
                ],
            }),
            (0, a.jsx)(nm, { trackFilterAction: E }),
            (0, a.jsx)(nE, { trackFilterAction: E }),
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
function nu(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [tS.q.AVATAR_DECORATION]: et.intl.string(et.t.dRZYNE),
            [tS.q.PROFILE_EFFECT]: et.intl.string(et.t["1cNjtx"]),
            [tS.q.NAMEPLATE]: et.intl.string(et.t.V68Fqz),
            [tS.q.PROFILE_FRAME]: et.intl.string(et.t.ecTJkR),
            [tS.q.BUNDLE]: et.intl.string(et.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: i } = (0, T.v)();
    return (0, a.jsx)(t0.S, {
        checked: l.has(t),
        onChange: () => {
            let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
            (n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), i(t));
        },
        label: s[t] ?? "",
    });
}
function nm(e) {
    let { trackFilterAction: t } = e,
        n = i.useMemo(
            () => [
                { color: "#9B59B6", label: et.intl.string(et.t.kqUD4P), enum: tX.PURPLE },
                { color: "#3498DB", label: et.intl.string(et.t.qQTRae), enum: tX.BLUE },
                { color: "#2ECC71", label: et.intl.string(et.t["f/Ylk6"]), enum: tX.GREEN },
                { color: "#A0522D", label: et.intl.string(et.t["Sd/BMa"]), enum: tX.BROWN },
                { color: "#F1C40F", label: et.intl.string(et.t["0fevYz"]), enum: tX.YELLOW },
            ],
            [],
        ),
        s = i.useMemo(
            () => [
                { color: "#E67E22", label: et.intl.string(et.t.ZE7weD), enum: tX.ORANGE },
                { color: "#E74C3C", label: et.intl.string(et.t.hKJGOM), enum: tX.RED },
                { color: "#EC407A", label: et.intl.string(et.t.HvLEGM), enum: tX.PINK },
                { color: "#FFFFFF", label: et.intl.string(et.t["CB+lNO"]), enum: tX.WHITE },
                { color: "#262626", label: et.intl.string(et.t["dMey+v"]), enum: tX.BLACK },
            ],
            [],
        );
    return (0, a.jsxs)("div", {
        className: no.KZ,
        children: [
            (0, a.jsx)($.E, { variant: "text-md/semibold", className: no.hr, children: et.intl.string(et.t.K1xGoG) }),
            (0, a.jsx)(ng, { colors: n, trackFilterAction: t }),
            (0, a.jsx)(ng, { colors: s, trackFilterAction: t }),
        ],
    });
}
function ng(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, T.v)();
    return (0, a.jsx)("div", {
        className: no.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: r } = e;
            return (0, a.jsx)(
                nh,
                { color: t, label: i, enum: r, isToggled: s.has(r), onToggleColor: l, trackFilterAction: n },
                r,
            );
        }),
    });
}
function nh(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: i, trackFilterAction: r } = e,
        o = (0, t8.r)(t5.A.unsafe_rawColors.WHITE).hex(),
        d = (0, t8.r)(t5.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, a.jsx)(
        eB.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, a.jsx)(
                eP.D,
                {
                    className: c()(no.n1, { [no.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        (r(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), i(s));
                    },
                    children:
                        l &&
                        (0, a.jsx)("div", {
                            className: no.oE,
                            children: (0, a.jsx)(t6.r, {
                                size: "xs",
                                color: (0, nc.j)({ backgroundColor: t, colors: [o, d] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function nE(e) {
    let { trackFilterAction: t } = e,
        { enabled: n } = nr.A.useConfig({ location: "collectibles-shop-theme-filters" });
    return n ? (0, a.jsx)(nf, { trackFilterAction: t }) : (0, a.jsx)(nx, { trackFilterAction: t });
}
function nx(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, T.v)(),
        l = (0, ei.Ay)() === J.NJ.DARK,
        r = i.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        o = i.useCallback((e) => (n.has(e) || l ? t5.A.colors.WHITE : t5.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        d = i.useMemo(
            () => [
                {
                    name: et.intl.string(et.t.aVBOKh),
                    icon: (0, a.jsx)(t2.E, { size: "xs", color: o(tJ.ANIME) }),
                    enum: tJ.ANIME,
                },
                {
                    name: et.intl.string(et.t["3WoZBc"]),
                    icon: (0, a.jsx)(t7._, { size: "xs", color: o(tJ.GAMING) }),
                    enum: tJ.GAMING,
                },
                {
                    name: et.intl.string(et.t.yuEmLj),
                    icon: (0, a.jsx)(t9.C, { size: "xs", color: o(tJ.CUTE_COZY) }),
                    enum: tJ.CUTE_COZY,
                },
                {
                    name: et.intl.string(et.t.mMvCHo),
                    icon: (0, a.jsx)(t3.L, { size: "xs", color: o(tJ.SCI_FI) }),
                    enum: tJ.SCI_FI,
                },
                {
                    name: et.intl.string(et.t.TlhOQC),
                    icon: (0, a.jsx)(ne.L, { size: "xs", color: o(tJ.FOOD_DRINKS) }),
                    enum: tJ.FOOD_DRINKS,
                },
                {
                    name: et.intl.string(et.t["4IaUIM"]),
                    icon: (0, a.jsx)(nt.f, { size: "xs", color: o(tJ.FANTASY) }),
                    enum: tJ.FANTASY,
                },
                {
                    name: et.intl.string(et.t["w0nSG/"]),
                    icon: (0, a.jsx)(nn.N, { size: "xs", color: o(tJ.ANIMALS_PETS) }),
                    enum: tJ.ANIMALS_PETS,
                },
                {
                    name: et.intl.string(et.t.cJng7v),
                    icon: (0, a.jsx)(ns.p, { size: "xs", color: o(tJ.NATURE) }),
                    enum: tJ.NATURE,
                },
                {
                    name: et.intl.string(et.t["5mUvyM"]),
                    icon: (0, a.jsx)(nl.T, { size: "xs", color: o(tJ.MOVIES_TV_SHOWS) }),
                    enum: tJ.MOVIES_TV_SHOWS,
                },
                {
                    name: et.intl.string(et.t.MB9H5Z),
                    icon: (0, a.jsx)(na.e, { size: "xs", color: o(tJ.DARK_MOODY) }),
                    enum: tJ.DARK_MOODY,
                },
            ],
            [o],
        );
    return (0, a.jsxs)("div", {
        className: no.KZ,
        children: [
            (0, a.jsx)($.E, { variant: "text-md/semibold", className: no.hr, children: et.intl.string(et.t.t1Ztrp) }),
            (0, a.jsx)("div", {
                className: no.Ot,
                children: d.map((e) => {
                    let { name: l, icon: i, enum: o } = e;
                    return (0, a.jsxs)(
                        eP.D,
                        {
                            className: c()(no.w4, { [no.C7]: n.has(o) }),
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
function nf(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, T.v)(),
        l = i.useMemo(
            () => [
                { name: et.intl.string(et.t.aVBOKh), icon: t2.E, enum: tJ.ANIME },
                { name: et.intl.string(et.t["3WoZBc"]), icon: t7._, enum: tJ.GAMING },
                { name: et.intl.string(et.t.yuEmLj), icon: t9.C, enum: tJ.CUTE_COZY },
                { name: et.intl.string(et.t.mMvCHo), icon: t3.L, enum: tJ.SCI_FI },
                { name: et.intl.string(et.t.TlhOQC), icon: ne.L, enum: tJ.FOOD_DRINKS },
                { name: et.intl.string(et.t["4IaUIM"]), icon: nt.f, enum: tJ.FANTASY },
                { name: et.intl.string(et.t["w0nSG/"]), icon: nn.N, enum: tJ.ANIMALS_PETS },
                { name: et.intl.string(et.t.cJng7v), icon: ns.p, enum: tJ.NATURE },
                { name: et.intl.string(et.t["5mUvyM"]), icon: nl.T, enum: tJ.MOVIES_TV_SHOWS },
                { name: et.intl.string(et.t.MB9H5Z), icon: na.e, enum: tJ.DARK_MOODY },
            ],
            [],
        ),
        r = i.useMemo(() => new Set(Array.from(n, (e) => String(e))), [n]);
    return (0, a.jsxs)("div", {
        className: no.KZ,
        children: [
            (0, a.jsx)($.E, { variant: "text-md/semibold", className: no.hr, children: et.intl.string(et.t.t1Ztrp) }),
            (0, a.jsx)(ni.C, {
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
var nC = n(415926),
    np = n(561769),
    nv = n(66506);
function nS() {
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
let n_ = { flattenProductVariants: !0 };
function nA(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, _.uM)(),
        r = l?.sessionId ?? "",
        { noCache: o, includeUnpublished: u } = (0, tw.A)(),
        m = (0, N.$)("collectibles_filter_results"),
        g = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
        { skus: h, currentPage: E, totalCount: x, isFetchingResults: f } = (0, th.S)(),
        C = (0, d.yK)([A.A], () => (m ? [] : A.A.getProductsBySkus(h))),
        p = i.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        v = h?.join("");
    i.useEffect(() => {
        p();
    }, [v, p]);
    let j = (0, tI.p)(),
        I = i.useMemo(() => j(C), [j, C]),
        L = m ? h.length : I.length;
    i.useEffect(() => {
        t ||
            (0, tL.z)({
                sessionId: r,
                checkpoint: tL.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: u,
                cacheDisabled: o,
            });
    }, [r, u, o, t, s]);
    let b = i.useRef(null),
        { setQueryPageSize: O, setQueryPageOffset: R, queryPageSize: M } = (0, T.v)(),
        [k, y] = i.useState(!1),
        P = t || f || null == g;
    i.useEffect(() => {
        P ? y(!1) : L > 0 && y(!0);
    }, [P, L]);
    let D = M > 0 && !P && 0 === L;
    i.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == b.current || O(Math.floor(5 * getComputedStyle(b.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != b.current) return (e.observe(b.current), () => e.disconnect());
    }, [O]);
    let B = i.useCallback(
        (e) => {
            (tC.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: M,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                R((e - 1) * M));
        },
        [l, M, R],
    );
    return (0, a.jsxs)(np.v3.Provider, {
        value: n_,
        children: [
            (0, a.jsxs)("div", {
                className: c()({ [nj.oE]: D }),
                children: [
                    D && (0, a.jsx)(nS, {}),
                    (0, a.jsxs)("div", {
                        className: c()(nj.ZE, { [nj.Kp]: k }),
                        ref: b,
                        children: [
                            P && [...Array(M)].map((e, t) => (0, a.jsx)(tO.A, {}, t)),
                            !P &&
                                m &&
                                h.map((e, t) =>
                                    (0, a.jsx)(
                                        _.R9,
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
                            !P &&
                                !m &&
                                I.map((e, t) =>
                                    null == A.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, a.jsx)(
                                              _.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, a.jsx)(
                                                      ty.A,
                                                      { skuId: e.skuId, hideStaticBundleBackgroundAsset: !0 },
                                                      e.skuId,
                                                  ),
                                              },
                                              e.skuId,
                                          ),
                                ),
                        ],
                    }),
                ],
            }),
            x > M &&
                (0, a.jsx)("div", {
                    className: nj.Ej,
                    children: (0, a.jsx)("div", {
                        children: (0, a.jsx)(tA.m, {
                            currentPage: E,
                            totalCount: x,
                            pageSize: M,
                            onPageChange: B,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nI = n(578364);
function nN(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: r } = e,
        c = (0, tf.A)("shop_include_unpublished");
    (!(function () {
        let e = (0, M.bG)([tp.A], () => "success" === tp.A.getFetchState(e4.FYj)),
            t = null != (0, tv.HH)(),
            { offerEligible: n, clearFilters: s } = (0, T.v)();
        i.useEffect(() => {
            n && e && !t && s();
        }, [n, e, t, s]);
    })(),
        (0, T.S)(c));
    let o = i.useRef(null),
        { handleScroll: d } = (0, nC.r)(o, t),
        { setCategoryRef: u, handleScrollToCategory: m } = (0, tV.k0)(o.current),
        [g, h] = i.useState(l),
        [E, x] = i.useState(!1);
    return (
        i.useEffect(() => {
            null != s && m(s);
        }, [s, m]),
        i.useEffect(
            () => () => {
                null != r && r();
            },
            [],
        ),
        i.useEffect(() => {
            function e() {
                x(window.innerWidth < 1400);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        (0, a.jsx)("div", {
            className: nI.VM,
            children: (0, a.jsxs)("main", {
                className: nI.MY,
                children: [
                    (0, a.jsx)(y.Gt, {
                        className: nI.OW,
                        ref: o,
                        onScroll: d,
                        scrollbarGutter: "both-edges",
                        children: (0, a.jsx)(nL, {
                            isSmallScreen: E,
                            filterBarOpen: g,
                            setFilterBarOpen: h,
                            tab: t,
                            scrollerRef: o,
                            categories: n,
                            setCategoryRef: u,
                            initialCategoryId: s,
                        }),
                    }),
                    g && !E && (0, a.jsx)("div", { className: nI.yF }),
                    g && !E && (0, a.jsx)(tE.Ip, { className: nI.kT, children: (0, a.jsx)(nd, {}) }),
                ],
            }),
        })
    );
}
function nL(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: s,
            tab: l,
            scrollerRef: r,
            categories: o,
            setCategoryRef: d,
            initialCategoryId: u,
        } = e,
        m = i.useRef(null),
        g = (0, T.v)((e) => e.hasDefaultFilters()),
        h = (0, _.uM)(),
        { handlePageChange: E, currentPage: x } = (function (e) {
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
        f = i.useCallback(
            (e) => {
                (tC.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: e,
                    page_size: h?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    E(e));
            },
            [h, E],
        ),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            if (t && n)
                return (document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e));
            function e(e) {
                let t = e.target;
                null === m.current ||
                    null === C.current ||
                    m.current.contains(t) ||
                    C.current.contains(t) ||
                    (tC.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    s(!1));
            }
        }, [t, n, s, h]),
        (0, a.jsx)("div", {
            className: nI.en,
            children: (0, a.jsxs)("div", {
                className: nI.pf,
                children: [
                    (0, a.jsxs)("div", {
                        className: nI.ne,
                        children: [
                            (0, a.jsx)("div", { className: nI.lQ, children: (0, a.jsx)(tj, {}) }),
                            (0, a.jsxs)("div", {
                                className: c()(nI.wR, { [nI.Im]: t }),
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nI.Ul,
                                        children: [
                                            (0, a.jsx)($.E, {
                                                variant: "text-md/semibold",
                                                children: et.intl.string(et.t.uaX705),
                                            }),
                                            (0, a.jsx)(tQ, {}),
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        ref: C,
                                        children: (0, a.jsx)(Z.$, {
                                            onClick: function () {
                                                let e = !n;
                                                (tC.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    s(e));
                                            },
                                            variant: "secondary",
                                            text: et.intl.string(n ? et.t.fYtm6f : et.t["TeTYE+"]),
                                            icon: tx.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, a.jsx)("div", {
                                    className: nI.Dh,
                                    ref: m,
                                    children: (0, a.jsx)(y.Ch, { className: nI.Qo, children: (0, a.jsx)(nd, {}) }),
                                }),
                        ],
                    }),
                    g
                        ? (0, a.jsx)(_.R9, {
                              newValue: { pageIndex: x },
                              children: (0, a.jsx)(tK, {
                                  categories: o,
                                  setCategoryRef: d,
                                  currentPage: x,
                                  handlePageChange: f,
                                  initialCategoryId: u,
                              }),
                          })
                        : (0, a.jsx)(nA, { scrollerRef: r, tab: l }, l),
                ],
            }),
        })
    );
}
var nb = n(599062),
    nO = n(721720),
    nT = n(417388);
let nR = function () {
        return (0, a.jsxs)("div", {
            className: nT.z,
            children: [
                (0, a.jsx)("img", {
                    className: nT.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: et.intl.string(et.t["p8+qtU"]),
                }),
                (0, a.jsx)(ea.D, { variant: "heading-xl/semibold", children: et.intl.string(et.t["p8+qtU"]) }),
                (0, a.jsx)($.E, { variant: "text-md/medium", children: et.intl.string(et.t.UEiyvs) }),
            ],
        });
    },
    nM = [tc.G2.HOME, tc.G2.ORBS];
function nk(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: r,
            refreshCategories: c,
        } = e,
        o = (0, M.bG)([A.A, tg.A], () =>
            null != A.A.error
                ? `shop load fetch categories error: ${A.A.error.message}`
                : null != tg.A.claimError
                  ? `shop load claim error: ${tg.A.claimError.message}`
                  : null != tg.A.fetchError
                    ? `shop load fetch purchase error: ${tg.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, M.bG)([S.default], () => S.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, tw.A)();
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
    })(o);
    let d = (0, k.H)({ location: "collectibles_content" }),
        u = (0, R.W6)(),
        m = (0, R.zy)(),
        [g] = i.useState(() => {
            if ("POP" === u.action) {
                let e;
                return ((e = tF), (tF = null), e ?? void 0);
            }
        }),
        [h, E] = i.useState(g),
        [x, f] = i.useState(null == g),
        C = i.useMemo(() => {
            let e = new URLSearchParams(m.search).get(tc.P1);
            return null != e && "" !== e ? e : void 0;
        }, [m.search]),
        p = i.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !tc.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        v = i.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: a,
                    isOrbsExclusive: i,
                } = e;
                if ((r(t, n), null != n && a && !i)) return void u.push(e4.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let c = i ? tc.G2.ORBS : tc.G2.CATALOG;
                (E(n), f(!a), s(c, l));
            },
            [s, r, u],
        ),
        { searchError: j } = (0, th.S)();
    return null != j
        ? (0, a.jsx)(nR, {})
        : null != o
          ? (0, a.jsx)(nb.h, { onRetry: c, errorMessage: o, errorOrigin: nb.A.SHOP_PAGE })
          : nM.includes(t)
            ? (0, a.jsx)(nO.A, { handleTransition: v, tab: t, transitionState: l })
            : t === tc.G2.GAME_SERVERS
              ? d
                  ? (0, a.jsx)(td, { isGameServerHostingInShopEnabled: d })
                  : (0, a.jsx)(R.rd, { to: e4.BVt.COLLECTIBLES_SHOP_WITH_TAB(tc.G2.HOME) })
              : (0, a.jsx)(nN, {
                    tab: t,
                    categories: p,
                    initialCategoryId: h ?? C,
                    showFilterInitially: x && null == C,
                    onUnmount: () => {
                        (E(void 0), f(!0));
                    },
                });
}
var ny = n(691062),
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
    (0, C.P)(f.a);
    let n = (0, h.A)((0, o.A)()),
        s = (0, d.bG)([S.default], () => S.default.getCurrentUser());
    (0, v.pE)();
    let l = (0, tZ.yB)("CollectiblesShop"),
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
                    (0, nD.EL)() ? (0, nD.aX)() : (0, nD.pX)(e4.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: M, hasFilters: k } = (0, T.v)(),
        y = i.useMemo(() => (t === tc.G2.HOME && null != M && k() ? M : t), [t, M, k]);
    (0, p.A)(e4.FYj);
    let P = (0, N.$)("collectibles_shop"),
        { categories: D, refreshCategories: B } = (0, b.Ay)({ logPerf: !0, skipFetch: P }, { sessionId: n, tab: y });
    i.useEffect(() => {
        P && (0, j.rW)();
    }, [P]);
    let G = i.useMemo(() => [...D.values()], [D]),
        [F, z] = i.useState(),
        H = (0, d.bG)([A.A], () => A.A.getCategory(F)?.name),
        [U, K] = i.useState();
    (0, tV.XU)(n);
    let V = i.useCallback((e, t) => {
            (K(e), z(t));
        }, []),
        { selectedTab: Y, transitionState: W, transitionToTab: $ } = (0, O.o)(y);
    ((0, x.HU)({ location: et.intl.string(et.t.pWG4ze) }), (0, L.uS)(n, Y, H, W, { sourceButton: U }), (0, L.N0)(Y, s));
    let { dismissShopButtonDC: Z } = (0, nB.A)();
    (i.useEffect(() => {
        Z(e5.i.AUTO_DISMISS);
    }, [Z]),
        i.useEffect(() => {
            (0, g.I)(e4.BVt.COLLECTIBLES_SHOP);
        }, []));
    let q = i.useRef(null),
        Q = i.useRef(null);
    (0, m.tj)(q);
    let X = (0, u.useHasAnyModalOpen)();
    (i.useEffect(() => {
        Q.current?.focus();
    }, []),
        (0, tZ.gB)());
    let { analyticsLocations: J } = (0, L.lC)(Y);
    return (0, a.jsx)(E.f5, {
        value: J,
        children: (0, a.jsx)(_.R9, {
            newValue: { sessionId: n, pageCategory: H, pageSize: tc.l5 },
            children: (0, a.jsx)(I.iM, {
                tab: Y,
                children: (0, a.jsx)(nw, {
                    onClose: r,
                    shouldAddEventListener: !1,
                    children: (0, a.jsxs)("div", {
                        className: c()(tR.bx, { [tZ.jP]: l }),
                        ref: Q,
                        inert: X,
                        tabIndex: -1,
                        children: [
                            (0, a.jsx)(ny.G, { handleTransition: $, selectedTab: Y }),
                            (0, a.jsx)(nP.A, { tab: Y, handleTransition: $ }),
                            (0, a.jsx)("div", {
                                className: c()(tR.td, {
                                    [tR.RK]: W === tc.Pf.VISIBLE,
                                    [tR.in]: W === tc.Pf.IN,
                                    [tR.FD]: W === tc.Pf.OUT,
                                }),
                                children: (0, a.jsx)(nk, {
                                    tab: Y,
                                    refreshCategories: B,
                                    transitionToTab: $,
                                    transitionState: W,
                                    categories: G,
                                    updateAnalyticsState: V,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
