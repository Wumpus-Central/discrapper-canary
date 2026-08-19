n.r(t), n.d(t, { default: () => lo });
var s,
    l,
    a,
    i,
    r,
    o = n(477900),
    c = n(582128),
    d = n(503698),
    u = n.n(d),
    m = n(132500),
    g = n(702841),
    h = n(192308),
    x = n(315710),
    E = n(944791),
    f = n(444927),
    p = n(688810),
    v = n(726249),
    C = n(475073),
    j = n(611924),
    S = n(744082),
    b = n(561794),
    _ = n(287809),
    N = n(440938),
    A = n(590180),
    I = n(161918),
    L = n(790297),
    O = n(841702),
    T = n(983545),
    R = n(23161);
n(323874), n(14289), n(35956), n(321073);
var k = n(806163),
    y = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    M = n(17928),
    P = n(775602),
    D = n(196736),
    B = n(689175),
    H = n(277984),
    w = n(670735),
    G = n(790284),
    F = n(780964),
    U = n(766075),
    z = n(280450),
    V = n(166403),
    K = n(123917),
    Y = n(158045),
    W = n(814201),
    $ = n(581453),
    q = n(43990),
    Z = n(403581),
    X = n(834730),
    Q = n(821609),
    J = n(793574),
    ee = n(532794),
    et = n(202541),
    en = n(818348),
    es = n(632847),
    el = n(375708),
    ea = n(876564);
function ei() {
    let e = c.useCallback(() => {
        (0, ee.A)({ subscriptionTier: et.pe.TIER_2, analyticsLocations: [J.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, o.jsx)(q.N, {
        theme: en.NJ.DARKER,
        children: (t) =>
            (0, o.jsxs)("div", {
                className: u()(ea.vK, t),
                children: [
                    (0, o.jsxs)("div", {
                        className: ea.Pf,
                        children: [
                            (0, o.jsx)(Z.t, {
                                className: ea.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, o.jsx)(X.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: el.intl.string(es.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, o.jsx)(Q.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: Z.t,
                        text: el.intl.string(el.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var er = n(462887),
    eo = n(297264),
    ec = n(736653),
    ed = n(457865);
function eu(e) {
    let { onRetry: t, errorMessage: n } = e,
        s = (0, ec.Ay)(),
        l = (0, M.bG)([_.default], () => {
            let e = _.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, o.jsxs)("div", {
        className: ed.kL,
        children: [
            (0, o.jsx)("img", {
                className: ed.Sl,
                src: (0, er.M)(s) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, o.jsx)(eo.D, { variant: "heading-xl/semibold", children: el.intl.string(el.t.i5SQ74) }),
            (0, o.jsx)(X.E, {
                className: ed.h_,
                variant: "text-md/normal",
                color: "text-muted",
                children: el.intl.string(el.t.F8FvUy),
            }),
            l &&
                null != n &&
                (0, o.jsx)(X.E, { variant: "text-sm/normal", color: "text-muted", children: "staff-only debug: " + n }),
            (0, o.jsx)(Q.$, { variant: "primary", text: el.intl.string(el.t["+hivLW"]), onClick: t }),
        ],
    });
}
var em = n(349085),
    eg = n(890856),
    eh = n(331322),
    ex = n(713517),
    eE = n(660669);
function ef(e) {
    let { name: t, coverUrl: n, fromPriceLabel: s, nitroFromPriceLabel: l, onClickCard: a, onClickViewPlans: i } = e,
        r = c.useRef(null),
        { isHoveringOrFocusing: d } = (0, ex.A)(r),
        m = (0, M.bG)([_.default], () => Y.Ay.canUseShopDiscounts(_.default.getCurrentUser())) && null != l,
        g = m ? l : s,
        h = c.useCallback(
            (e) => {
                e.stopPropagation(), i?.();
            },
            [i],
        );
    return (0, o.jsxs)(eg.s, {
        ref: r,
        onClick: a,
        "aria-label": t,
        className: u()(eE.Nr, { [eE.yo]: d }),
        children: [
            (0, o.jsx)("div", {
                className: eE.q4,
                "aria-hidden": !0,
                children: null != n && (0, o.jsx)("img", { className: eE.xy, src: n, alt: "" }),
            }),
            (0, o.jsxs)("div", {
                className: eE.Iv,
                children: [
                    null != n
                        ? (0, o.jsx)("img", { className: eE.N4, src: n, alt: "" })
                        : (0, o.jsx)("div", {
                              className: eE.WB,
                              children: (0, o.jsx)(X.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, o.jsx)("div", { className: eE.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, o.jsxs)("div", {
                className: eE.qr,
                children: [
                    (0, o.jsxs)("div", {
                        className: eE.cs,
                        children: [
                            (0, o.jsx)(X.E, { variant: "text-md/medium", color: "text-strong", tag: "p", children: t }),
                            null != g &&
                                (0, o.jsx)("div", {
                                    className: eE.F1,
                                    children: (0, o.jsxs)(eh.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, o.jsxs)(eh.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    m &&
                                                        (0, o.jsx)(Z.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, o.jsx)(X.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: g,
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsx)(X.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, o.jsx)("div", {
                        className: eE.E1,
                        children: (0, o.jsx)(Q.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: el.intl.string(es.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ep = n(469058);
function ev() {
    return (0, o.jsx)("div", {
        className: u()(eE.Nr, ep.s7, ep.U6),
        "aria-hidden": !0,
        children: (0, o.jsxs)("div", {
            className: ep.qr,
            children: [(0, o.jsx)("div", { className: ep.w9 }), (0, o.jsx)("div", { className: ep.n2 })],
        }),
    });
}
var eC = n(901215);
let ej = c.memo(function (e) {
    let { game: t, onSelect: n } = e,
        s = c.useCallback(() => n(t), [t, n]),
        l = (0, em.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, o.jsx)(ef, {
        name: t.name,
        coverUrl: l,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: s,
        onClickViewPlans: s,
    });
});
function eS(e) {
    let { games: t, title: n, onSelectGame: s, loading: l = !1 } = e;
    return (0, o.jsxs)("section", {
        className: eC.u,
        children: [
            null != n && (0, o.jsx)(eo.D, { variant: "heading-lg/semibold", children: n }),
            (0, o.jsx)("div", {
                className: eC.V,
                children: l
                    ? Array.from({ length: 10 }, (e, t) => (0, o.jsx)(ev, {}, t))
                    : t.map((e) => (0, o.jsx)(ej, { game: e, onSelect: s }, e.id)),
            }),
        ],
    });
}
var eb = n(32880),
    e_ = n(410232),
    eN = n(231483),
    eA = n(339350),
    eI = n(349288),
    eL = n(442935);
function eO() {
    let e = c.useMemo(
        () => [
            { Icon: eb.DownloadIcon, label: el.intl.string(es.default.GJNQYz) },
            { Icon: e_.k, label: el.intl.string(es.default.pTinR2) },
            { Icon: eN.ShieldIcon, label: el.intl.string(es.default.s0N1nM) },
            { Icon: eA.Q, label: el.intl.string(es.default.NzrGEi) },
        ],
        [],
    );
    return (0, o.jsxs)("section", {
        className: eL.ZK,
        children: [
            (0, o.jsxs)("div", {
                className: eL.jE,
                children: [
                    (0, o.jsx)(eo.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: el.intl.string(es.default.F5W36W),
                    }),
                    (0, o.jsxs)(X.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            el.intl.string(es.default.xMpGuO),
                            " ",
                            (0, o.jsx)(eI.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: el.intl.string(es.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, o.jsx)("div", {
                className: eL._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, o.jsxs)(
                        "div",
                        {
                            className: eL.Tc,
                            children: [
                                (0, o.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, o.jsx)(X.E, {
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
var eT = n(305090);
function eR() {
    return (0, o.jsxs)("div", {
        className: eT.vK,
        children: [
            (0, o.jsx)("div", {
                className: eT.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, o.jsx)("div", { className: eT.Ge, "aria-hidden": !0 }),
            (0, o.jsx)("div", { className: eT.f5, "aria-hidden": !0 }),
        ],
    });
}
var ek = n(408278),
    ey = n(548411),
    eM = n(554830),
    eP = n(281445),
    eD = n(390544),
    eB = n(554146),
    eH = n(939249),
    ew = n(509434),
    eG = n(866665),
    eF = n(103271);
let eU = { TERTIARY: eF.Xe, SECONDARY: eF.Rm, PRIMARY: eF.zB },
    ez = { SIZE_24: eF.q1, SIZE_32: eF.Hb, SIZE_36: eF.VM },
    eV = c.forwardRef(function (e, t) {
        let {
            className: n,
            tooltip: s,
            color: l,
            size: a = ez.SIZE_32,
            icon: i,
            onMouseDown: r,
            onClick: c,
            disabled: d,
            focusProps: m,
        } = e;
        return (0, o.jsx)(eG.m, {
            asContainer: !0,
            text: s,
            shouldShow: !d,
            children: (0, o.jsx)(eH.D, {
                innerRef: t,
                "aria-label": s,
                "aria-disabled": d,
                className: u()(n, eF.x6, l, a, { [eF.r9]: d }),
                onMouseDown: r,
                onClick: (e) => {
                    c(e);
                },
                focusProps: m,
                children: i,
            }),
        });
    });
var eK = n(933832),
    eY = n(624479),
    eW = n(131607),
    e$ = n(427209),
    eq = n(95035),
    eZ = n(498480),
    eX = n(685743),
    eQ = n(981381),
    eJ = n(342942),
    e0 = n(294454),
    e1 = n(625903),
    e4 = n(445927);
function e5(e) {
    let { server: t, onOpenSettings: n } = e,
        s = (0, e4.A)(t.instance),
        l = c.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, o.jsx)(eV, {
        color: eU.SECONDARY,
        size: ez.SIZE_24,
        icon: (0, o.jsx)(e1.SettingsIcon, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: l,
        disabled: !s,
        tooltip: el.intl.string(es.default["feUiM/"]),
    });
}
var e2 = n(652215),
    e3 = n(628049),
    e6 = n(49999),
    e9 = n(684644);
let e8 = [eD.M.STARTUP_FAILED, eD.M.MISSING_STOCK, eD.M.PROVIDER_ERRORED, eD.M.DELETED];
function e7(e) {
    return `game-server-owned-card-${e}`;
}
function te(e) {
    let { gameServerId: t } = e,
        n = c.useCallback(() => {
            (0, eZ.Kz)(t).catch(() => {});
        }, [t]);
    return (0, o.jsx)("div", {
        className: e9.y7,
        children: (0, o.jsx)(Q.$, {
            fullWidth: !0,
            text: el.intl.string(es.default.TMzy7d),
            variant: "secondary",
            onClick: n,
        }),
    });
}
function tt() {
    let [e, t] = c.useState(!1),
        n = c.useCallback(() => {
            t(!0),
                (0, eZ.hU)()
                    .catch(() => {})
                    .finally(() => t(!1));
        }, []);
    return (0, o.jsx)("div", {
        className: e9.y7,
        children: (0, o.jsx)(Q.$, {
            fullWidth: !0,
            text: el.intl.string(es.default.BLEx3k),
            variant: "secondary",
            loading: e,
            onClick: n,
        }),
    });
}
let tn = c.memo(function (e) {
    let { server: t, onJoin: s, onViewPanel: l, onOpenSettings: a, isHighlighted: i = !1 } = e,
        r = (0, em.A)(t.gameId, "cover") ?? t.coverUrl,
        d = (function (e) {
            let t = (0, M.bG)([V.A], () => (null != e ? V.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === e2.Dmq.CANCELED
                ? { text: el.intl.formatToPlainString(es.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: el.intl.formatToPlainString(es.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [m, g] = (0, eW.kn)([eB.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        x = m !== eB.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        E = eP.X.SHOCKBYTE,
        f = z.default.getId() ?? "0",
        { handleCopyServerIp: p, animateCopyIcon: v } = (0, eX.A)(f, t.id, J.A.GAME_SERVER_PAGE, t.serverIp),
        C = c.useCallback(() => {
            (0, eJ.A)({
                provider: E,
                onAccept: () => {
                    g(e6.i.TAKE_ACTION), p();
                },
            });
        }, [E, g, p]),
        j = c.useCallback(() => {
            x
                ? s(t)
                : (0, eJ.A)({
                      provider: E,
                      onAccept: () => {
                          g(e6.i.TAKE_ACTION), s(t);
                      },
                  });
        }, [x, E, g, s, t]),
        S = c.useCallback(() => l(t), [l, t]),
        b = c.useCallback(() => {
            ((e) => {
                let { server: t, source: s } = e;
                (0, h.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("267732"),
                            n.e("461815"),
                            n.e("618416"),
                            n.e("524434"),
                            n.e("533158"),
                            n.e("721642"),
                            n.e("130891"),
                            n.e("279926"),
                            n.e("481647"),
                            n.e("776602"),
                            n.e("140402"),
                            n.e("385653"),
                            n.e("401518"),
                            n.e("323354"),
                            n.e("368062"),
                            n.e("844780"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("523601"),
                            n.e("835868"),
                        ]).then(n.bind(n, 729751));
                        return (n) => (0, o.jsx)(e, { ...n, server: t, source: s });
                    },
                    { stackingBehavior: "stack", modalKey: e0.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        _ = (0, eQ.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e3.qb[E],
        N = null != t.instance.gameServerPanelUrl,
        A = null != t.instance.status && e8.includes(t.instance.status),
        I = c.useCallback(() => {
            (0, K.h)({ href: _ });
        }, [_]),
        L = c.useMemo(() => {
            switch (t.instance.status) {
                case eD.M.ONLINE:
                    return el.intl.string(es.default["60kAzo"]);
                case eD.M.OFFLINE:
                    return el.intl.string(es.default["Ys/RrB"]);
                case eD.M.SLEEPING:
                    return el.intl.string(es.default.y0z8ZO);
                case eD.M.STARTUP_FAILED:
                    return el.intl.string(es.default["7C9Z3s"]);
                case eD.M.MISSING_STOCK:
                    return el.intl.string(es.default["+a5G2l"]);
                case eD.M.PROVIDER_ERRORED:
                    return el.intl.string(es.default["6g/oji"]);
                case eD.M.DELETED:
                    return el.intl.string(es.default.Z1NZwX);
                case eD.M.STARTING:
                    return el.intl.string(es.default.SgjaXI);
                default:
                    return "\u2014";
            }
        }, [t.instance.status]),
        O = t.isOnline ? "text-feedback-positive" : A ? "text-feedback-critical" : "text-muted",
        T = c.useMemo(
            () =>
                (0, o.jsx)(eH.D, {
                    className: u()(e9.wC, e9.QV),
                    onClick: j,
                    "aria-label": el.intl.string(es.default["fQCcM/"]),
                    children: (0, o.jsx)(X.E, {
                        variant: "text-sm/semibold",
                        color: "none",
                        children: el.intl.string(es.default["fQCcM/"]),
                    }),
                }),
            [j],
        ),
        R = c.useMemo(
            () =>
                (0, o.jsxs)(eH.D, {
                    className: u()(e9.wC, e9.y2, { [e9.Gz]: !N }),
                    onClick: N ? S : void 0,
                    "aria-disabled": !N,
                    "aria-label": el.intl.string(es.default.tkbVdf),
                    children: [
                        (0, o.jsx)(X.E, {
                            variant: "text-sm/semibold",
                            color: "none",
                            children: el.intl.string(es.default.tkbVdf),
                        }),
                        (0, o.jsx)(ew.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                    ],
                }),
            [S, N],
        ),
        k = c.useMemo(() => {
            switch (t.instance.status) {
                case eD.M.SLEEPING:
                    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(te, { gameServerId: t.id }), R] });
                case eD.M.STARTUP_FAILED:
                case eD.M.MISSING_STOCK:
                    return (0, o.jsx)("div", {
                        className: e9.y7,
                        children: (0, o.jsx)(Q.$, {
                            fullWidth: !0,
                            text: el.intl.string(es.default.gWMqnI),
                            variant: "primary",
                            icon: ew.I,
                            iconPosition: "end",
                            disabled: !N,
                            onClick: S,
                        }),
                    });
                case eD.M.PROVIDER_ERRORED:
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)("div", {
                                className: e9.y7,
                                children: (0, o.jsx)(Q.$, {
                                    fullWidth: !0,
                                    text: el.intl.string(es.default.bBkeMs),
                                    variant: "secondary",
                                    onClick: I,
                                }),
                            }),
                            (0, o.jsx)(tt, {}),
                        ],
                    });
                case eD.M.DELETED:
                    return R;
                default:
                    return (0, o.jsxs)(o.Fragment, { children: [T, R] });
            }
        }, [t.instance.status, t.id, N, T, R, S, I]);
    return (0, o.jsxs)("div", {
        id: e7(t.id),
        className: u()(e9.Nr, { [e9.mr]: i }),
        children: [
            i && (0, o.jsx)("div", { className: e9._8, "aria-hidden": !0 }),
            (0, o.jsxs)("div", {
                className: e9.Nk,
                "aria-hidden": !0,
                children: [
                    null != r && (0, o.jsx)("img", { className: e9.QC, src: r, alt: "" }),
                    (0, o.jsx)("div", { className: e9.jc }),
                ],
            }),
            (0, o.jsxs)("div", {
                className: e9.AQ,
                children: [
                    (0, o.jsx)(eV, {
                        color: eU.SECONDARY,
                        size: ez.SIZE_24,
                        icon: (0, o.jsx)(e$.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: b,
                        tooltip: el.intl.string(el.t.RDE0Sc),
                    }),
                    (0, o.jsx)(e5, { server: t, onOpenSettings: a }),
                ],
            }),
            (0, o.jsxs)("div", {
                className: e9.rf,
                children: [
                    (0, o.jsxs)("div", {
                        className: e9.U1,
                        children: [
                            (0, o.jsxs)("div", {
                                className: e9.oL,
                                children: [
                                    null != r
                                        ? (0, o.jsx)("img", { className: e9.vT, src: r, alt: "" })
                                        : (0, o.jsx)("div", {
                                              className: e9.iv,
                                              children: (0, o.jsx)(X.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, o.jsx)("div", { className: e9.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, o.jsxs)("div", {
                                className: e9.VQ,
                                children: [
                                    (0, o.jsx)(X.E, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, o.jsx)(X.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != d &&
                                        (0, o.jsx)(X.E, {
                                            variant: "text-sm/medium",
                                            color: "text-feedback-critical",
                                            tag: "div",
                                            children: d.text,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: e9.M1,
                        children: [
                            (0, o.jsxs)("div", {
                                className: e9.N8,
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: e9.bi,
                                        children: [
                                            (0, o.jsx)(X.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default.bDdi7n),
                                            }),
                                            (0, o.jsx)(X.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)("div", {
                                        className: e9.gv,
                                        children: [
                                            (0, o.jsx)(X.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default["7phwMG"]),
                                            }),
                                            x
                                                ? (0, o.jsxs)("div", {
                                                      className: e9.Yb,
                                                      children: [
                                                          (0, o.jsx)(X.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, o.jsx)(eH.D, {
                                                                  className: e9.cL,
                                                                  onClick: p,
                                                                  "aria-label": el.intl.string(el.t.OpuAlK),
                                                                  children: v
                                                                      ? (0, o.jsx)(eK.CheckmarkLargeIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, o.jsx)(eY.CopyIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, o.jsx)(eq.A, {
                                                      onClick: C,
                                                      children: el.intl.string(es.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, o.jsxs)("div", {
                                className: e9.N8,
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: e9.bi,
                                        children: [
                                            (0, o.jsx)(X.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default["n+ZX7y"]),
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: e9.Yb,
                                                children: [
                                                    (t.isOnline || A) &&
                                                        (0, o.jsx)("span", {
                                                            className: u()(e9.kg, { [e9.rU]: A }),
                                                            "aria-hidden": !0,
                                                        }),
                                                    (0, o.jsx)(X.E, {
                                                        variant: "text-sm/medium",
                                                        color: O,
                                                        tag: "span",
                                                        children: L,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)("div", {
                                        className: e9.gv,
                                        children: [
                                            (0, o.jsx)(X.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default.mJlz3T),
                                            }),
                                            (0, o.jsx)(X.E, {
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
            (0, o.jsx)("div", { className: e9.qr, children: k }),
        ],
    });
});
var ts = n(367016);
function tl(e) {
    let {
            servers: t,
            onViewAll: n,
            onJoin: s,
            onViewPanel: l,
            onOpenSettings: a,
            highlightServerId: i = null,
            highlightNonce: r = 0,
        } = e,
        d = c.useRef(null),
        m = c.useRef(null),
        [g, h] = c.useState(!1),
        [x, E] = c.useState(!1),
        [f, p] = c.useState(null),
        v = c.useCallback(() => {
            let e = d.current;
            null != e && (h(e.scrollLeft > 1), E(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    c.useLayoutEffect(() => {
        v();
    }, [v, t]),
        c.useEffect(() => {
            let e = d.current;
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
        }, [v]);
    let C = c.useCallback(() => {
            d.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        j = c.useCallback(() => {
            d.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        c.useEffect(() => {
            if (r <= 0) return;
            let e = null != i ? document.getElementById(e7(i)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    p(null), (t = requestAnimationFrame(() => p(i)));
                });
            return () => {
                cancelAnimationFrame(n), cancelAnimationFrame(t);
            };
        }, [r, i]),
        c.useEffect(() => {
            if (null == f) return;
            let e = setTimeout(() => p(null), 4e3);
            return () => clearTimeout(e);
        }, [f]),
        (0, o.jsxs)("section", {
            className: ts.uW,
            ref: m,
            children: [
                (0, o.jsxs)("div", {
                    className: ts.wx,
                    children: [
                        (0, o.jsx)(eo.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: el.intl.string(es.default.BOWmmT),
                        }),
                        (0, o.jsx)(q.N, {
                            theme: en.NJ.DARKER,
                            children: (e) =>
                                (0, o.jsxs)("div", {
                                    className: u()(ts.$s, e),
                                    children: [
                                        (0, o.jsx)(Q.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: el.intl.string(el.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: ts.d$,
                                            children: [
                                                (0, o.jsx)(ek.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: ey.Z,
                                                    disabled: !g,
                                                    onClick: C,
                                                    "aria-label": el.intl.string(el.t["13/7kX"]),
                                                }),
                                                (0, o.jsx)(ek.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eM.K,
                                                    disabled: !x,
                                                    onClick: j,
                                                    "aria-label": el.intl.string(el.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: u()(ts.XG, { [ts.OW]: g && x, [ts.vL]: g && !x, [ts.y0]: x && !g }),
                    ref: d,
                    onScroll: v,
                    children: t.map((e) =>
                        (0, o.jsx)(
                            "div",
                            {
                                className: ts.AV,
                                children: (0, o.jsx)(tn, {
                                    server: e,
                                    onJoin: s,
                                    onViewPanel: l,
                                    onOpenSettings: a,
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
var ta = n(705285),
    ti = n(199781),
    tr = n(923477),
    to = n(252589),
    tc = n(55766),
    td = n(758836),
    tu = n(111108);
function tm(e) {
    let { isGameServerHostingInShopEnabled: t } = e;
    return (0, o.jsx)(w.A, { children: (0, o.jsx)(tg, { isGameServerHostingInShopEnabled: t }) });
}
function tg(e) {
    let { isGameServerHostingInShopEnabled: t } = e,
        n = (0, k.zy)(),
        s = (0, k.W6)(),
        { servers: l, refetch: a } = (0, tc.f)(),
        i = l.length > 0,
        r = (0, M.bG)([_.default], () => Y.Ay.canUseShopDiscounts(_.default.getCurrentUser())),
        { games: d, hasError: u, isEmpty: m, isLoading: g, refetch: h } = (0, to.Y)();
    c.useEffect(() => {
        i && (0, H.hP)().catch(() => {});
    }, [i]);
    let x = c.useRef(d);
    c.useEffect(() => {
        d.length > 0 && (x.current = d);
    }, [d]);
    let E = c.useCallback(() => {
            h(), a();
        }, [h, a]),
        f = (0, ta.VJ)(),
        [p, v] = c.useState({ serverId: null, nonce: 0 }),
        C = c.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = W.A.getGameServers();
                for (let s = n.length - 1; s >= 0; s--)
                    if (n[s].game_id === e.gameId) {
                        t = n[s].id;
                        break;
                    }
            }
            v((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        j = c.useCallback(() => {
            let e = l[0];
            null != e && C({ serverId: e.id });
        }, [l, C]),
        S = (0, tr.O)((e) => e.highlightFirstCardNonce),
        b = c.useRef(S);
    c.useEffect(() => {
        if (S === b.current) return;
        b.current = S;
        let e = requestAnimationFrame(() => j());
        return () => cancelAnimationFrame(e);
    }, [S, j]);
    let N = c.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ta.cl.SHOP_CARD;
                f(ta.L5.OPEN_PLAN_MODAL, t),
                    (0, ti.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => C({ gameId: e.gameId }),
                    });
            },
            [f, C],
        ),
        A = c.useMemo(() => {
            let e = new URLSearchParams(n.search).get(td.tD);
            return null != e && "" !== e ? e : void 0;
        }, [n.search]);
    c.useEffect(() => {
        if (!t || null == A || g || 0 === d.length) return;
        let e = d.find((e) => e.gameId === A);
        if (null == e) return;
        N(e, ta.cl.ACTIVITY_PANEL_DEEP_LINK);
        let l = new URLSearchParams(n.search);
        l.delete(td.tD), s.replace(`${n.pathname}?${l.toString()}`);
    }, [t, A, d, g, N, s, n.pathname, n.search]);
    let I = c.useCallback(() => {
            G.A.setState({ scrollToGameServers: !0 }), (0, U.openUserSettings)(F.X.SUBSCRIPTIONS_PANEL);
        }, []),
        L = c.useCallback((e) => {
            let t = z.default.getId() ?? "0";
            (0, $.A)(t, e.instance);
        }, []),
        O = c.useCallback((e) => {
            (0, K.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        T = c.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = x.current.find((t) => t.gameId === e.gameId);
                function s(t) {
                    (0, ti.S)({
                        gameName: e.gameName,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: n?.plans,
                        initialPlanId: e.instance.planId,
                        initialRegionId: e.instance.regionId,
                        initialRegionName: e.location,
                        initialServerName: e.serverName,
                        activeSubscription: t,
                        onViewServer: () => C({ serverId: e.id }),
                    });
                }
                let l = V.A.getSubscriptionById(t);
                null != l
                    ? s(l)
                    : (0, H.hP)()
                          .then(() => {
                              let e = V.A.getSubscriptionById(t);
                              null != e && s(e);
                          })
                          .catch(() => {});
            },
            [C],
        ),
        R = i ? el.intl.string(es.default["+aRmAc"]) : void 0;
    return (0, o.jsx)(B.Ch, {
        className: tu.XG,
        children: (0, o.jsxs)("div", {
            className: tu.kL,
            children: [
                !r && (0, o.jsx)(ei, {}),
                (0, o.jsx)(eR, {}),
                (0, o.jsxs)("div", {
                    className: tu.Qs,
                    children: [
                        (0, o.jsx)(eO, {}),
                        i &&
                            (0, o.jsx)(tl, {
                                servers: l,
                                onViewAll: I,
                                onJoin: L,
                                onViewPanel: O,
                                onOpenSettings: T,
                                highlightServerId: p.serverId,
                                highlightNonce: p.nonce,
                            }),
                        u || m
                            ? (0, o.jsx)(eu, { onRetry: E })
                            : (0, o.jsx)(eS, { games: d, title: R, onSelectGame: N, loading: g }),
                    ],
                }),
            ],
        }),
    });
}
var th = n(578797),
    tx = n(38405),
    tE = n(4227),
    tf = n(50920),
    tp = n(856686),
    tv = n(364522),
    tC = n(783977),
    tj = n(59520),
    tS = n(174459);
function tb(e, t, n, s) {
    let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (l + a) / i;
        s > 0 &&
            tS.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function t_(e, t) {
    let { analyticsSource: n } = (0, L.lC)(t),
        s = (0, tj.I)(tb, 5e3, [], { trailing: !0 }),
        l = (0, N.uM)(),
        a = l?.sessionId;
    return {
        handleScroll: c.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    s(e2.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [s, n, a, e]),
    };
}
var tN = n(354328),
    tA = n(356118),
    tI = n(619835),
    tL = n(918467),
    tO = n(80151),
    tT = n(641150);
function tR() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: s } = (0, R.v)((e) => e),
        { totalCount: l, isFetchingResults: a } = (0, tp.S)(),
        i = (0, R.v)((e) => e.hasFilters()),
        r = c.useCallback(() => {
            if (!i) return "";
            if (a) return el.intl.string(el.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return el.intl.format(el.t.KJMJOz, { count: l, search: e });
            }
            if (!n && !s && 1 === e.size) {
                if (e.has(tT.q.AVATAR_DECORATION)) return el.intl.format(el.t.s1UzGQ, { count: l });
                if (e.has(tT.q.NAMEPLATE)) return el.intl.format(el.t.ZWGN9T, { count: l });
                if (e.has(tT.q.PROFILE_EFFECT)) return el.intl.format(el.t["v/7apu"], { count: l });
                if (e.has(tT.q.PROFILE_FRAME)) return el.intl.format(el.t.eu4eRy, { count: l });
                if (e.has(tT.q.BUNDLE)) return el.intl.format(el.t.fZ1rdk, { count: l });
            }
            return 0 === e.size && n && !s
                ? el.intl.format(el.t.TxoTTj, { count: l })
                : 0 === e.size && s && !n
                  ? el.intl.format(el.t.TLso50, { count: l })
                  : el.intl.format(el.t["/rPvmQ"], { count: l });
        }, [e, l, i, t, a, n, s]);
    return (0, o.jsx)(eo.D, { variant: "heading-lg/semibold", children: r() });
}
var tk = n(172218),
    ty = n(932793),
    tM = n(511265),
    tP = n(206077),
    tD = n(100057),
    tB = n(828515),
    tH = n(484469),
    tw = n(761977),
    tG = n(170522),
    tF = n(295621);
let tU = function () {
    return (0, o.jsx)("div", {
        className: tF.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: tG.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(tw.sW, tF.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, o.jsx)(tH.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tz = n(258245),
    tV = n(159439),
    tK = n(998694);
let tY = null;
function tW(e) {
    let { category: t } = e,
        n = (0, g.bG)([_.default], () => _.default.getCurrentUser()),
        s = (0, tP.X)(t.products),
        l = (0, tM.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, o.jsx)("div", {
              className: tG.vY,
              children: l.map((e, t) =>
                  (0, o.jsx)(
                      N.R9,
                      { newValue: { tilePosition: t }, children: (0, o.jsx)(tz.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function t$(e) {
    let { category: t } = e,
        [n, s] = c.useState(!1),
        l = (0, tk.K)(function (e) {
            s(e);
        }, 0.15),
        a = (0, k.W6)(),
        i = (0, tf.a)("CollectiblesCatalogContent"),
        r = (0, N.uM)(),
        d = c.useCallback(() => {
            tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: td.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (tY = t.skuId),
                a.push(e2.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, a]);
    return (0, o.jsxs)("div", {
        className: tG.EF,
        ref: l,
        children: [(0, o.jsx)(tB.A, { category: t, onSelect: i ? d : void 0 }), (0, o.jsx)(tW, { category: t })],
    });
}
function tq(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: a } = e,
        i = (0, N.uM)(),
        r = (0, tV.U)(),
        d = i?.sessionId ?? "",
        { noCache: u, includeUnpublished: m } = (0, tK.A)(),
        g = c.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        h = c.useRef(void 0);
    c.useEffect(() => {
        if (null == a || 0 === g.length) {
            h.current = void 0;
            return;
        }
        if (a === h.current) return;
        let e = g.findIndex((e) => e.skuId === a);
        if (-1 === e) return;
        let t = Math.floor(e / td.l5) + 1;
        t !== s && l(t), (h.current = a);
    }, [a, g, l, s]);
    let x = c.useMemo(() => {
        let e = (s - 1) * td.l5;
        return g.slice(e, e + td.l5);
    }, [g, s]);
    return (c.useEffect(() => {
        (0, tD.z)({
            sessionId: d,
            checkpoint: tD.t.SHOP_MOUNTED,
            tab: td.G2.CATALOG,
            unpublishedCategoriesShown: m,
            cacheDisabled: u,
        });
    }, []),
    c.useEffect(() => {
        r ||
            0 === x.length ||
            (0, tD.z)({
                sessionId: d,
                checkpoint: tD.t.SHOP_RENDERED,
                tab: td.G2.CATALOG,
                unpublishedCategoriesShown: m,
                cacheDisabled: u,
            });
    }, [d, m, u, r, x.length]),
    r)
        ? (0, o.jsx)(tU, {})
        : (0, o.jsxs)("div", {
              className: tG.LZ,
              children: [
                  x.map((e, t) =>
                      (0, o.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": el.intl.formatToPlainString(el.t.FNtLb3, { category: e.name }),
                              children: (0, o.jsx)(N.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, o.jsx)(t$, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: tG.Ej,
                      children: (0, o.jsx)(ty.m, {
                          currentPage: s,
                          totalCount: g.length,
                          pageSize: td.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var tZ = n(177366),
    tX = n(401864),
    tQ = n(124987),
    tJ = n(691885),
    t0 = n(146919),
    t1 = n(878278);
let t4 = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, R.v)(),
        s = (0, N.uM)(),
        l = (0, t0.yB)("CollectiblesSortSelect"),
        a = n(),
        i = c.useMemo(() => td.QB.filter((e) => e.sortType !== tQ.$.RELEVANCE || a), [a]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tQ.$.RECENCY
                ? { label: el.intl.string(el.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tQ.$.PRICE
                  ? n === tX.A.ASC
                      ? { label: el.intl.string(el.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: el.intl.string(el.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tQ.$.RELEVANCE
                    ? { label: el.intl.string(el.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: el.intl.string(el.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
            (e) =>
                ({
                    recent: { sortType: tQ.$.RECENCY, sortDirection: tX.A.DESC },
                    "price-asc": { sortType: tQ.$.PRICE, sortDirection: tX.A.ASC },
                    "price-desc": { sortType: tQ.$.PRICE, sortDirection: tX.A.DESC },
                    popularity: { sortType: tQ.$.POPULARITY, sortDirection: tX.A.DESC },
                    relevance: { sortType: tQ.$.RELEVANCE, sortDirection: tX.A.DESC },
                })[e],
            [],
        ),
        m = c.useCallback(
            (e) => {
                let n = r(d(e));
                tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    page_index: s?.pageIndex,
                    page_size: s?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(d(e));
            },
            [s, r, d, t],
        ),
        g = r(e);
    return (0, o.jsx)("div", {
        className: u()(t1.k, { [t0.jP]: l }),
        children: (0, o.jsx)(tJ.l, {
            label: el.intl.string(el.t.uaX705),
            hideLabel: !0,
            options: i.map(r),
            onSelectionChange: m,
            value: g.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var t5 =
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
    t2 =
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
    t3 = n(150934),
    t6 = n(508770),
    t9 = n(278416),
    t8 = n(602853),
    t7 = n(661531),
    ne = n(947641),
    nt = n(604338),
    nn = n(785866),
    ns = n(373846),
    nl = n(308323),
    na = n(608599),
    ni = n(685761),
    nr = n(157225),
    no = n(413249),
    nc = n(510241),
    nd = n(601198),
    nu = n(7250),
    nm = n(623655),
    ng = n(13875),
    nh = n(582666);
function nx() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            onToggleOfferEligible: l,
            offerEligible: a,
            reset: i,
            hasFilters: r,
        } = (0, R.v)(),
        d = (0, nm.z)("FilterBar"),
        m = r(),
        g = (0, ng.sk)("FilterBar"),
        h = (0, N.uM)(),
        x = c.useRef(null),
        E = (0, tO.A)(),
        f = c.useMemo(() => td._6.filter((e) => g || e !== tT.q.PROFILE_FRAME), [g]),
        p = c.useCallback(
            (e) => {
                tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: h?.pageIndex,
                    page_size: h?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [h],
        ),
        v = c.useCallback(() => {
            p(`filter 3p only ${!1 === s ? "on" : "off"}`), n();
        }, [n, s, p]);
    return (0, o.jsxs)("div", {
        className: nh.kT,
        children: [
            (0, o.jsxs)("div", {
                className: u()(nh.KZ, nh.YG),
                children: [
                    (0, o.jsx)("div", {
                        ref: x,
                        tabIndex: -1,
                        children: (0, o.jsx)(X.E, {
                            variant: "text-md/semibold",
                            className: nh.hr,
                            children: el.intl.string(el.t.Qk6r1a),
                        }),
                    }),
                    null != E &&
                        (0, o.jsxs)("div", {
                            className: nh.Ym,
                            children: [
                                (0, o.jsx)(t3.S, {
                                    checked: a,
                                    onChange: () => {
                                        p(`filter offer eligible ${!1 === a ? "on" : "off"}`), l();
                                    },
                                    label: el.intl.string(el.t.hY8Ft1),
                                }),
                                (0, o.jsx)(t6.E, { type: { text: el.intl.string(el.t["nb5PC/"]) }, icon: t9.TagIcon }),
                            ],
                        }),
                    f.map((e) => (0, o.jsx)(nE, { filter: e, trackFilterAction: p }, e)),
                    (0, o.jsx)(t3.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: el.intl.string(el.t.AHHHgG),
                    }),
                    d && (0, o.jsx)(t3.S, { checked: s, onChange: v, label: el.intl.string(el.t["+W8gb+"]) }),
                ],
            }),
            (0, o.jsx)(nf, { trackFilterAction: p }),
            (0, o.jsx)(nC, { trackFilterAction: p }),
            m &&
                (0, o.jsx)(Q.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), i(), requestAnimationFrame(() => x.current?.focus());
                    },
                    text: el.intl.string(el.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function nE(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [tT.q.AVATAR_DECORATION]: el.intl.string(el.t.dRZYNE),
            [tT.q.PROFILE_EFFECT]: el.intl.string(el.t["1cNjtx"]),
            [tT.q.NAMEPLATE]: el.intl.string(el.t.V68Fqz),
            [tT.q.PROFILE_FRAME]: el.intl.string(el.t.ecTJkR),
            [tT.q.BUNDLE]: el.intl.string(el.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: a } = (0, R.v)(),
        i = (0, o.jsx)(t3.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), a(t);
            },
            label: s[t] ?? "",
        });
    return t === tT.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: nh.Ym, children: [i, (0, o.jsx)(t6.E, { type: "new" })] })
        : i;
}
function nf(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: el.intl.string(el.t.kqUD4P), enum: t5.PURPLE },
                { color: "#3498DB", label: el.intl.string(el.t.qQTRae), enum: t5.BLUE },
                { color: "#2ECC71", label: el.intl.string(el.t["f/Ylk6"]), enum: t5.GREEN },
                { color: "#A0522D", label: el.intl.string(el.t["Sd/BMa"]), enum: t5.BROWN },
                { color: "#F1C40F", label: el.intl.string(el.t["0fevYz"]), enum: t5.YELLOW },
            ],
            [],
        ),
        s = c.useMemo(
            () => [
                { color: "#E67E22", label: el.intl.string(el.t.ZE7weD), enum: t5.ORANGE },
                { color: "#E74C3C", label: el.intl.string(el.t.hKJGOM), enum: t5.RED },
                { color: "#EC407A", label: el.intl.string(el.t.HvLEGM), enum: t5.PINK },
                { color: "#FFFFFF", label: el.intl.string(el.t["CB+lNO"]), enum: t5.WHITE },
                { color: "#262626", label: el.intl.string(el.t["dMey+v"]), enum: t5.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: nh.KZ,
        children: [
            (0, o.jsx)(X.E, { variant: "text-md/semibold", className: nh.hr, children: el.intl.string(el.t.K1xGoG) }),
            (0, o.jsx)(np, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(np, { colors: s, trackFilterAction: t }),
        ],
    });
}
function np(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, R.v)();
    return (0, o.jsx)("div", {
        className: nh.OW,
        children: t.map((e) => {
            let { color: t, label: a, enum: i } = e;
            return (0, o.jsx)(
                nv,
                { color: t, label: a, enum: i, isToggled: s.has(i), onToggleColor: l, trackFilterAction: n },
                i,
            );
        }),
    });
}
function nv(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: a, trackFilterAction: i } = e,
        r = (0, t8.r)(t7.A.unsafe_rawColors.WHITE).hex(),
        c = (0, t8.r)(t7.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, o.jsx)(
        eG.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, o.jsx)(
                eH.D,
                {
                    className: u()(nh.n1, { [nh.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        i(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), a(s);
                    },
                    children:
                        l &&
                        (0, o.jsx)("div", {
                            className: nh.oE,
                            children: (0, o.jsx)(ne.r, {
                                size: "xs",
                                color: (0, nu.j)({ backgroundColor: t, colors: [r, c] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function nC(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, R.v)(),
        l = (0, ec.Ay)() === en.NJ.DARK,
        a = c.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        i = c.useCallback((e) => (n.has(e) || l ? t7.A.colors.WHITE : t7.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        r = c.useMemo(
            () => [
                {
                    name: el.intl.string(el.t.aVBOKh),
                    icon: (0, o.jsx)(nt.E, { size: "xs", color: i(t2.ANIME) }),
                    enum: t2.ANIME,
                },
                {
                    name: el.intl.string(el.t["3WoZBc"]),
                    icon: (0, o.jsx)(nn._, { size: "xs", color: i(t2.GAMING) }),
                    enum: t2.GAMING,
                },
                {
                    name: el.intl.string(el.t.yuEmLj),
                    icon: (0, o.jsx)(ns.C, { size: "xs", color: i(t2.CUTE_COZY) }),
                    enum: t2.CUTE_COZY,
                },
                {
                    name: el.intl.string(el.t.mMvCHo),
                    icon: (0, o.jsx)(nl.L, { size: "xs", color: i(t2.SCI_FI) }),
                    enum: t2.SCI_FI,
                },
                {
                    name: el.intl.string(el.t.TlhOQC),
                    icon: (0, o.jsx)(na.L, { size: "xs", color: i(t2.FOOD_DRINKS) }),
                    enum: t2.FOOD_DRINKS,
                },
                {
                    name: el.intl.string(el.t["4IaUIM"]),
                    icon: (0, o.jsx)(ni.f, { size: "xs", color: i(t2.FANTASY) }),
                    enum: t2.FANTASY,
                },
                {
                    name: el.intl.string(el.t["w0nSG/"]),
                    icon: (0, o.jsx)(nr.N, { size: "xs", color: i(t2.ANIMALS_PETS) }),
                    enum: t2.ANIMALS_PETS,
                },
                {
                    name: el.intl.string(el.t.cJng7v),
                    icon: (0, o.jsx)(no.p, { size: "xs", color: i(t2.NATURE) }),
                    enum: t2.NATURE,
                },
                {
                    name: el.intl.string(el.t["5mUvyM"]),
                    icon: (0, o.jsx)(nc.T, { size: "xs", color: i(t2.MOVIES_TV_SHOWS) }),
                    enum: t2.MOVIES_TV_SHOWS,
                },
                {
                    name: el.intl.string(el.t.MB9H5Z),
                    icon: (0, o.jsx)(nd.e, { size: "xs", color: i(t2.DARK_MOODY) }),
                    enum: t2.DARK_MOODY,
                },
            ],
            [i],
        );
    return (0, o.jsxs)("div", {
        className: nh.KZ,
        children: [
            (0, o.jsx)(X.E, { variant: "text-md/semibold", className: nh.hr, children: el.intl.string(el.t.t1Ztrp) }),
            (0, o.jsx)("div", {
                className: nh.Ot,
                children: r.map((e) => {
                    let { name: l, icon: i, enum: r } = e;
                    return (0, o.jsxs)(
                        eH.D,
                        {
                            className: u()(nh.w4, { [nh.C7]: n.has(r) }),
                            "aria-label": l,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(r);
                            },
                            children: [i, (0, o.jsx)(X.E, { color: a(r), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var nj = n(561769),
    nS = n(66506);
function nb() {
    return (0, o.jsxs)("div", {
        className: nS.k,
        children: [
            (0, o.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: el.intl.string(el.t.oezC3x),
                className: nS._,
            }),
            (0, o.jsx)(eo.D, { variant: "heading-xl/semibold", children: el.intl.string(el.t.oezC3x) }),
            (0, o.jsx)(X.E, { variant: "text-md/medium", children: el.intl.string(el.t["Tc/Ndl"]) }),
        ],
    });
}
var n_ = n(919303);
let nN = { flattenProductVariants: !0 };
function nA(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, N.uM)(),
        a = l?.sessionId ?? "",
        { noCache: i, includeUnpublished: r } = (0, tK.A)(),
        d = (0, g.bG)([_.default], () => _.default.getCurrentUser()),
        { skus: m, currentPage: h, totalCount: x, isFetchingResults: E } = (0, tp.S)(),
        f = (0, g.yK)([A.A], () => A.A.getProductsBySkus(m)),
        p = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        v = m?.join("");
    c.useEffect(() => {
        p();
    }, [v, p]);
    let C = (0, tM.p)(),
        j = c.useMemo(() => C(f), [C, f]);
    c.useEffect(() => {
        t ||
            (0, tD.z)({
                sessionId: a,
                checkpoint: tD.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: r,
                cacheDisabled: i,
            });
    }, [a, r, i, t, s]);
    let S = c.useRef(null),
        { setQueryPageSize: b, setQueryPageOffset: I, queryPageSize: L } = (0, R.v)(),
        [O, T] = c.useState(!1),
        k = t || E || null == d;
    c.useEffect(() => {
        k ? T(!1) : j.length > 0 && T(!0);
    }, [k, j.length]);
    let y = L > 0 && !k && 0 === j.length;
    c.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == S.current || b(Math.floor(5 * getComputedStyle(S.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != S.current) return e.observe(S.current), () => e.disconnect();
    }, [b]);
    let M = c.useCallback(
        (e) => {
            tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: L,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                I((e - 1) * L);
        },
        [l, L, I],
    );
    return (0, o.jsxs)(nj.v3.Provider, {
        value: nN,
        children: [
            (0, o.jsxs)("div", {
                className: u()({ [n_.oE]: y }),
                children: [
                    y && (0, o.jsx)(nb, {}),
                    (0, o.jsxs)("div", {
                        className: u()(n_.ZE, { [n_.Kp]: O }),
                        ref: S,
                        children: [
                            k && [...Array(L)].map((e, t) => (0, o.jsx)(tH.A, {}, t)),
                            !k &&
                                j.map((e, t) =>
                                    null == A.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, o.jsx)(
                                              N.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, o.jsx)(
                                                      tz.A,
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
            x > L &&
                (0, o.jsx)("div", {
                    className: n_.Ej,
                    children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(ty.m, {
                            currentPage: h,
                            totalCount: x,
                            pageSize: L,
                            onPageChange: M,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nI = n(578364);
function nL(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: a } = e,
        i = (0, tN.A)("shop_include_unpublished");
    !(function () {
        let e = (0, M.bG)([tL.A], () => "success" === tL.A.getFetchState(e2.FYj)),
            t = null != (0, tO.A)(),
            { offerEligible: n, clearFilters: s } = (0, R.v)();
        c.useEffect(() => {
            n && e && !t && s();
        }, [n, e, t, s]);
    })(),
        (0, R.S)(i);
    let r = c.useRef(null),
        { handleScroll: d } = t_(r, t),
        u = (0, th.U)("Shop Browse"),
        { setCategoryRef: m, handleScrollToCategory: g } = (0, tZ.k0)(r.current),
        [h, x] = c.useState(l),
        [E, f] = c.useState(!1);
    return (
        c.useEffect(() => {
            null != s && g(s);
        }, [s, g]),
        c.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        c.useEffect(() => {
            function e() {
                f(window.innerWidth < 1400);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, o.jsx)("div", {
            className: nI.VM,
            children: (0, o.jsxs)("main", {
                className: nI.MY,
                children: [
                    (0, o.jsx)(B.Gt, {
                        className: nI.OW,
                        ref: r,
                        onScroll: d,
                        scrollbarGutter: "both-edges",
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: nI.en,
                                  children: (0, o.jsx)("div", {
                                      className: nI.pf,
                                      children: (0, o.jsx)(tA.Z_, { tenantId: e2.FYj, templateId: tI.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, o.jsx)(nO, {
                                  isSmallScreen: E,
                                  filterBarOpen: h,
                                  setFilterBarOpen: x,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: m,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !E && (0, o.jsx)("div", { className: nI.yF }),
                    h && !E && (0, o.jsx)(tv.Ip, { className: nI.kT, children: (0, o.jsx)(nx, {}) }),
                ],
            }),
        })
    );
}
function nO(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: s,
            tab: l,
            scrollerRef: a,
            categories: i,
            setCategoryRef: r,
            initialCategoryId: d,
        } = e,
        m = c.useRef(null),
        g = (0, R.v)((e) => e.hasDefaultFilters()),
        h = (0, N.uM)(),
        { handlePageChange: x, currentPage: E } = (function (e) {
            let [t, n] = c.useState(1);
            return {
                currentPage: t,
                handlePageChange: c.useCallback(
                    (t) => {
                        n(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, n],
                ),
            };
        })(a),
        f = c.useCallback(
            (e) => {
                tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: e,
                    page_size: h?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    x(e);
            },
            [h, x],
        ),
        p = c.useRef(null);
    return (
        c.useEffect(() => {
            if (t && n)
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
            function e(e) {
                let t = e.target;
                null === m.current ||
                    null === p.current ||
                    m.current.contains(t) ||
                    p.current.contains(t) ||
                    (tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        (0, o.jsx)("div", {
            className: nI.en,
            children: (0, o.jsxs)("div", {
                className: nI.pf,
                children: [
                    (0, o.jsxs)("div", {
                        className: nI.ne,
                        children: [
                            (0, o.jsx)("div", { className: nI.lQ, children: (0, o.jsx)(tR, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(nI.wR, { [nI.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: nI.Ul,
                                        children: [
                                            (0, o.jsx)(X.E, {
                                                variant: "text-md/semibold",
                                                children: el.intl.string(el.t.uaX705),
                                            }),
                                            (0, o.jsx)(t4, {}),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        ref: p,
                                        children: (0, o.jsx)(Q.$, {
                                            onClick: function () {
                                                let e = !n;
                                                tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    s(e);
                                            },
                                            variant: "secondary",
                                            text: el.intl.string(n ? el.t.fYtm6f : el.t["TeTYE+"]),
                                            icon: tC.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, o.jsx)("div", {
                                    className: nI.Dh,
                                    ref: m,
                                    children: (0, o.jsx)(B.Ch, { className: nI.Qo, children: (0, o.jsx)(nx, {}) }),
                                }),
                        ],
                    }),
                    g
                        ? (0, o.jsx)(N.R9, {
                              newValue: { pageIndex: E },
                              children: (0, o.jsx)(tq, {
                                  categories: i,
                                  setCategoryRef: r,
                                  currentPage: E,
                                  handlePageChange: f,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, o.jsx)(nA, { scrollerRef: a, tab: l }, l),
                ],
            }),
        })
    );
}
var nT = n(599062),
    nR = n(651162),
    nk = n(367727);
let ny = c.createContext(null);
function nM(e) {
    let { blockType: t, children: n } = e,
        s = c.useMemo(() => ({ blockType: t }), [t]);
    return (0, o.jsx)(ny.Provider, { value: s, children: n });
}
var nP = n(755172),
    nD = n(53466),
    nB = n(607399),
    nH = n(946015),
    nw = n(717421),
    nG = n(140735),
    nF = n(496431),
    nU = n(302326);
function nz(e) {
    let { endDate: t, size: n = "md", className: s, showSeconds: l = !1 } = e,
        { days: a, hours: i, minutes: r, seconds: c } = (0, nF.A)(t),
        d = (function (e, t, n, s, l) {
            function a(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let i = [a(e), a(t), a(n)];
            return l && i.push(a(s)), i.join(":");
        })(a, i, r, c, l);
    return (0, o.jsxs)("div", {
        className: u()(nU.kL, s),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, o.jsx)(
                              X.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: nU.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, o.jsx)(
                              X.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: nU.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, o.jsx)(nG.A, { children: el.intl.format(el.t.j6IyVe, { days: a, hours: i, minutes: r }) }),
        ],
    });
}
var nV = n(685879);
let nK = c.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, nw.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsxs)(nD.animated.div, {
        className: u()([nV.lP, nB.Fr && nV.yJ]),
        role: "status",
        style: {
            ...s,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, o.jsxs)(nH.s, {
                direction: nH.s.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(X.E, {
                        variant: "text-md/medium",
                        className: nV.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(X.E, {
                            variant: "text-sm/medium",
                            className: nV.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, o.jsx)(nz, { endDate: t.endTime }),
        ],
    });
});
var nY = n(424918),
    nW = n(993408),
    n$ = n(196231),
    nq = n(105499);
function nZ(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, o.jsx)("div", {
        className: u()(nq.n9, nq.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === nY.u.CATEGORY
                ? (0, o.jsx)(
                      N.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, o.jsx)(
                              n$.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, nW.HF)(e.unpublishedAt) ? el.intl.string(el.t["h/uBCR"]) : void 0,
                                  handleTransition: t,
                              },
                              e.categoryStoreListingId,
                          ),
                      },
                      e.categoryStoreListingId,
                  )
                : (e.type, null),
        ),
    });
}
function nX(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [s, l] = n;
    return (0, o.jsx)("div", {
        className: u()(nq.n9, nq.YB),
        children: (0, o.jsxs)(N.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != s ? s.name : l?.name,
                pageSection: "featured_block",
                tilePosition: +(null == s),
            },
            children: [
                null != s &&
                    (0, o.jsx)(n$.S, {
                        category: s,
                        enablePreview: !0,
                        badgeText: (0, nW.HF)(s.unpublishedAt) ? el.intl.string(el.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, o.jsx)(n$.S, {
                        category: l,
                        badgeText: (0, nW.HF)(l.unpublishedAt) ? el.intl.string(el.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let nQ = function (e) {
    let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
        { analyticsLocations: a } = (0, p.Ay)(J.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, o.jsxs)("div", {
              className: u()(nq.n9, nq.YB),
              children: [
                  (0, o.jsx)("div", {
                      className: u()(nq.Jn, nq.oT),
                      children: (0, o.jsx)("div", { className: nq.uy }),
                  }),
                  (0, o.jsx)("div", {
                      className: u()(nq.Jn, nq.oT),
                      children: (0, o.jsx)("div", { className: nq.uy }),
                  }),
              ],
          })
        : null != l
          ? (0, o.jsx)(p.f5, {
                value: a,
                children: (0, o.jsx)(nZ, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
            })
          : (0, o.jsx)(p.f5, {
                value: a,
                children: (0, o.jsx)(nX, { categories: s, handleTransition: n, isLoading: !1 }),
            });
};
var nJ = n(531685),
    n0 = n(621466),
    n1 =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
n(667532);
var n4 = n(435558),
    n5 = n.n(n4),
    n2 =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    n3 = n(153488),
    n6 = n(313276),
    n9 = n(623373),
    n8 = n(885574),
    n7 = n(975807),
    se = n(975571),
    st = n(373599);
let sn = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? el.intl.string(el.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: st.L,
            children: [
                (0, o.jsx)(eo.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, o.jsx)(eG.m, {
                        text: el.intl.string(el.t["3taPdj"]),
                        position: "top",
                        "aria-label": el.intl.string(el.t["3taPdj"]),
                        children: (0, o.jsx)(eH.D, {
                            onClick: () => (0, n7.A)(se.A.getArticleURL(e2.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: st.s,
                            children: (0, o.jsx)(n8.CircleInformationIcon, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    ss = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: s,
                numVisibleItems: l,
                tab: a,
                buttonContainerClassName: i,
                orbsSupportedOnly: r,
            } = e,
            d = (0, M.bG)([_.default], () => _.default.getCurrentUser()),
            m = Y.Ay.canUseShopDiscounts(d),
            g = (0, nj.Mk)(a),
            h = (0, t0.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: E,
                sortedItems: f,
                sortOptions: v,
                shuffleProducts: C,
                showRecommendationOption: j,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: s } = e,
                    l = (0, M.bG)([n3.A], () => n3.A.hasConsented(e2.YAq.PERSONALIZATION)),
                    a = c.useMemo(() => t?.[n2.RECOMMENDED] ?? [], [t]),
                    i = c.useMemo(() => t?.[n2.POPULAR] ?? [], [t]),
                    r = a.length > 0 && l,
                    [o, d] = c.useState(r ? n2.RECOMMENDED : n2.POPULAR),
                    u = (0, M.bG)([A.A], () => A.A.productsWithVariantsAsGroup),
                    m = c.useMemo(() => (0, nW.CE)(u), [u]),
                    g = (0, n6.A)(),
                    h = (0, tM.p)(),
                    [x, E] = c.useState([]),
                    f = c.useCallback(() => {
                        d(n2.RANDOM), E(n5().shuffle(m));
                    }, [m]);
                c.useEffect(() => {
                    E(n5().shuffle(m));
                }, [m]);
                let p = c.useMemo(() => {
                    let e = [];
                    switch (o) {
                        case n2.RECENT:
                            e = m;
                            break;
                        case n2.PRICE_LOW_TO_HIGH:
                            e = (0, nW.bf)([...m], n, s);
                            break;
                        case n2.RECOMMENDED:
                            e = g(a);
                            break;
                        case n2.POPULAR:
                            e = g(i);
                            break;
                        case n2.RANDOM:
                            e = x;
                    }
                    return s ? (0, n9.ex)(h(e)) : h(e);
                }, [o, s, h, n, m, g, a, i, x]);
                return {
                    sortType: o,
                    setSortType: d,
                    sortedItems: (0, tP.X)(p),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: n2.POPULAR, label: el.intl.string(el.t.Y68e5p) },
                            { value: n2.RECENT, label: el.intl.string(el.t["51Bhiz"]) },
                            { value: n2.PRICE_LOW_TO_HIGH, label: el.intl.string(el.t.m8RVU2) },
                        ];
                        return r && e.unshift({ value: n2.RECOMMENDED, label: el.intl.string(el.t.zPWgFG) }), e;
                    }, [r]),
                    showRecommendationOption: r,
                    shuffleProducts: f,
                };
            })({ sortedSkuIds: s, hasShopDiscount: m, orbsSupportedOnly: r }),
            S = (0, M.bG)([P.Ay], () => P.Ay.useReducedMotion),
            b = (0, M.bG)([nJ.A], () => nJ.A.isFocused()),
            I = !S && b,
            { animationPhase: L, startAnimation: O } = (() => {
                let [e, t] = c.useState("mounted"),
                    [n, s] = c.useState(!1),
                    l = c.useRef(null);
                return (
                    c.useEffect(() => {
                        if (n && "finished" === e) {
                            if (null !== l.current) {
                                let e = l.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, n0.vq)(e, HTMLButtonElement) ||
                                    (0, n0.vq)(e, HTMLAnchorElement) ||
                                    (0, n0.vq)(e, HTMLInputElement) ||
                                    (0, n0.vq)(e, HTMLSelectElement) ||
                                    (0, n0.vq)(e, HTMLTextAreaElement)
                                )
                                    e.focus();
                                else {
                                    let t = e.querySelector(
                                        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="combobox"], [role="button"]',
                                    );
                                    t?.focus();
                                }
                            }
                            s(!1);
                        }
                    }, [e, n]),
                    {
                        animationPhase: e,
                        startAnimation: c.useCallback((e) => {
                            let { isShuffling: n, onOutroComplete: a, returnRef: i } = e;
                            i?.current != null && ((l.current = i.current), s(!0)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        a(),
                                            t(n ? "shuffle-in" : "sort-in"),
                                            setTimeout(
                                                () => {
                                                    t("finished");
                                                },
                                                n ? 200 : 300,
                                            );
                                    },
                                    n ? 250 : 300,
                                );
                        }, []),
                    }
                );
            })(),
            T = (0, N.uM)(),
            R = T?.sessionId ?? "",
            { analyticsLocations: k } = (0, p.Ay)(J.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            y = c.useRef(null),
            D = c.useRef(null),
            [B, H] = c.useState(!1),
            w = c.useCallback(
                (e) => {
                    H(!1),
                        O({ isShuffling: !1, onOutroComplete: () => E(e), returnRef: D }),
                        tS.default.track(e2.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: R,
                            sort_type: e,
                        });
                },
                [O, E, R],
            );
        return null == d
            ? null
            : (0, o.jsx)(p.f5, {
                  value: k,
                  children: (0, o.jsxs)("div", {
                      className: u()(nq.lD, nq.YB),
                      children: [
                          (0, o.jsxs)("div", {
                              className: nq.$6,
                              children: [
                                  (0, o.jsx)(sn, { label: n, personalizedResults: j }),
                                  (0, o.jsxs)("div", {
                                      className: u()(nq.IE, { [t0.jP]: h }),
                                      children: [
                                          (0, o.jsxs)("div", {
                                              className: nq.gd,
                                              children: [
                                                  (0, o.jsx)(X.E, {
                                                      variant: "text-md/medium",
                                                      children: el.intl.string(el.t.uaX705),
                                                  }),
                                                  (0, o.jsx)("div", {
                                                      className: u()(i, nq.pI),
                                                      ref: D,
                                                      children: (0, o.jsx)(tJ.l, {
                                                          label: el.intl.string(el.t.uaX705),
                                                          hideLabel: !0,
                                                          options: v,
                                                          onSelectionChange: w,
                                                          formatOption: (e) => {
                                                              let { label: t, value: n } = e;
                                                              return { id: n, label: t, value: n };
                                                          },
                                                          value: x,
                                                          selectionMode: "single",
                                                          fullWidth: !0,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, o.jsx)("div", {
                                              className: i,
                                              children: (0, o.jsx)(Q.$, {
                                                  variant: "secondary",
                                                  text: el.intl.string(el.t.X3tnc4),
                                                  buttonRef: y,
                                                  onClick: function () {
                                                      H(!0),
                                                          O({ isShuffling: !0, onOutroComplete: C, returnRef: y }),
                                                          tS.default.track(
                                                              e2.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: R },
                                                          );
                                                  },
                                                  disabled: L !== n1.MOUNTED && L !== n1.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(nG.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: B && L === n1.FINISHED ? el.intl.string(el.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: nq.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(tH.A, {}, t + 1)),
                                    })
                                  : f.slice(0, l).map((e, t) => {
                                        let n,
                                            s = A.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (I)
                                            if (L === n1.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: nq.Z2,
                                                        children: (0, o.jsx)(tH.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                L === n1.SORT_OUT
                                                    ? (n = nq.MW)
                                                    : L === n1.SHUFFLE_IN
                                                      ? (n = nq.aS)
                                                      : L === n1.SORT_IN && (n = nq.F7);
                                        return (0, o.jsx)(
                                            N.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, o.jsx)("div", {
                                                    className: n,
                                                    children: (0, o.jsx)(tz.A, {
                                                        skuId: e.skuId,
                                                        hideStaticBundleBackgroundAsset: !0,
                                                        prioritizedCurrency: g,
                                                    }),
                                                }),
                                            },
                                            e.skuId,
                                        );
                                    }),
                          }),
                      ],
                  }),
              });
    };
var sl = n(269115),
    sa = n(789645),
    si = n(976860),
    sr = n(196064);
let so = "GAME_SERVER_HOSTING_BANNER";
function sc(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        s = (0, N.uM)(),
        l = c.useRef(null),
        a = c.useRef(!1),
        i = c.useRef(null),
        [r, d] = c.useState(!1),
        m = c.useCallback(
            (e) => {
                tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_type: n,
                    page_category: s?.pageCategory,
                    page_section: s?.pageSection,
                    tile_type: so,
                    cta_name: e,
                });
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        ),
        g = c.useCallback(
            (e) => {
                e?.stopPropagation(),
                    m("go_to_game_server_hosting"),
                    (0, si.pX)(e2.BVt.COLLECTIBLES_SHOP_WITH_TAB(td.G2.GAME_SERVERS));
            },
            [m],
        ),
        h = c.useCallback(
            (e) => {
                e?.stopPropagation(),
                    m("dismiss"),
                    d(!0),
                    !0 === t.isDismissible &&
                        (0, nk.d6)(eB.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: e6.i.USER_DISMISS,
                        });
            },
            [m, t.isDismissible],
        ),
        x = c.useCallback(
            (e) => {
                !a.current &&
                    (e && null === i.current
                        ? (i.current = setTimeout(() => {
                              (a.current = !0),
                                  (i.current = null),
                                  tS.default.track(e2.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: s?.sessionId,
                                      page_type: n,
                                      page_category: s?.pageCategory,
                                      page_section: s?.pageSection,
                                      type: so,
                                  });
                          }, 1e3))
                        : e || null === i.current || (clearTimeout(i.current), (i.current = null)));
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        );
    return (c.useEffect(
        () => () => {
            null !== i.current && (clearTimeout(i.current), (i.current = null));
        },
        [],
    ),
    r)
        ? null
        : (0, o.jsx)(q.N, {
              theme: en.NJ.DARKER,
              children: (e) =>
                  (0, o.jsx)(sl.L, {
                      innerRef: l,
                      onChange: x,
                      threshold: 0,
                      children: (0, o.jsx)("div", {
                          ref: l,
                          className: u()(sr.YB, e),
                          children: (0, o.jsxs)(eg.s, {
                              className: sr.kL,
                              onClick: g,
                              "aria-label": el.intl.string(es.default["34GMP9"]),
                              children: [
                                  (0, o.jsx)("img", {
                                      className: sr.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, o.jsx)("div", { className: sr.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, o.jsx)("div", {
                                          className: sr.b,
                                          children: (0, o.jsx)(ek.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: sa.P,
                                              onClick: h,
                                              "aria-label": el.intl.string(el.t.WAI6xu),
                                          }),
                                      }),
                                  (0, o.jsx)("div", {
                                      className: sr.jE,
                                      children: (0, o.jsxs)("div", {
                                          className: sr.rF,
                                          children: [
                                              (0, o.jsxs)("div", {
                                                  className: sr.Z,
                                                  children: [
                                                      (0, o.jsx)(eo.D, {
                                                          className: sr.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: el.intl.string(es.default["34GMP9"]),
                                                      }),
                                                      (0, o.jsx)(X.E, {
                                                          className: sr.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: el.intl.string(es.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, o.jsx)(Q.$, {
                                                  variant: "overlay-primary",
                                                  text: el.intl.string(el.t.jVcuVY),
                                                  onClick: g,
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
          });
}
var sd = n(337183),
    su = n(212407),
    sm = n(815280),
    sg = n(9530);
let sh = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, tk.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: a } = (0, su.qY)(t),
        i = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: s,
        className: sg.BX,
        children: [
            (0, o.jsx)("div", {
                className: sg.vK,
                children: null != l && (0, o.jsx)(sm.A, { bannerStatic: l, bannerAnimated: a }),
            }),
            (0, o.jsx)("div", {
                className: sg.HQ,
                children: (0, o.jsxs)("div", {
                    className: sg.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(nz, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(eo.D, {
                            variant: "heading-xxl/bold",
                            className: sg.DD,
                            color: "text-strong",
                            style: { ...i },
                            children: t.title,
                        }),
                        r || c
                            ? (0, o.jsxs)(X.E, {
                                  variant: "text-md/medium",
                                  style: { ...i },
                                  children: [
                                      r && t.body,
                                      r && c && " ",
                                      c &&
                                          (0, o.jsx)(eI.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: sg.CU,
                                              style: { ...i },
                                              children: el.intl.string(el.t.O7ADgv),
                                          }),
                                  ],
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
};
var sx = n(449543),
    sE = n(189213),
    sf = n(290136),
    sp = n(478016),
    sv = n(825484),
    sC = n(812993),
    sj = n(914410),
    sS = n(839534),
    sb = n(597783),
    s_ = n(61750);
function sN(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, M.bG)([tE.A], () => tE.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var sA = n(496552),
    sI = n(299533);
let sL = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, sb.Z)(n),
            l = c.useRef(null),
            { isHoveringOrFocusing: a } = (0, ex.A)(l),
            { readyToClaim: i, collectibleProductSkuIds: r, collectedSkuIds: d } = sN(t, n),
            m = (0, M.bG)([tE.A], () => tE.A.isClaiming === n);
        return (0, o.jsx)(sl.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, o.jsx)("div", {
                ref: l,
                className: u()(sA.ty, sI.Q3, { [sA.yo]: a }),
                "aria-label": el.intl.formatToPlainString(el.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: sA.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: sI.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: sA.N1,
                            children: (0, o.jsx)(sC.Lp, {
                                text: el.intl.string(el.t.rykAJ9),
                                disableColor: !0,
                                className: sI.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: sA.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: sI.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: sI.cs,
                                            children: [
                                                (0, o.jsx)(eo.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: sA.tZ,
                                                    children: el.intl.string(el.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(eG.m, {
                                                    text: i
                                                        ? el.intl.string(el.t.cKH3tk)
                                                        : el.intl.formatToPlainString(el.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: sI.ZB,
                                                        children: (0, o.jsx)(sf.CircleQuestionIcon, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: sA.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: sI.L$,
                                                children: [
                                                    (0, o.jsx)(sj.Ay, {
                                                        variant: sj.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(sI.__, { [sI.gF]: i }),
                                                        children: [
                                                            i
                                                                ? (0, o.jsx)(sp.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, o.jsx)(X.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: el.intl.formatToPlainString(el.t["5TwASM"], {
                                                                    collectedCount: d.length,
                                                                    totalCount: r.length,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, o.jsx)("div", {
                                    className: sA.Vs,
                                    children: (0, o.jsx)(sv.e, {
                                        wrap: !1,
                                        className: sA.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)(Q.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    i &&
                                                        (0, sS.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = A.A.getProduct(n);
                                                                null != e &&
                                                                    (0, s_.A)({
                                                                        product: e,
                                                                        analyticsLocations: [],
                                                                        overrideGraphic: {
                                                                            type: "video",
                                                                            src: "https://cdn.discordapp.com/assets/content/0b8a43491ba8f130b2d07df54fb2b7582d7eb21af11491a58db2d440bb1a2c87.webm",
                                                                            fallbackImageSrc:
                                                                                "https://cdn.discordapp.com/assets/content/b01f9c900f0fd1f3be0846b6f5fc4feac072c377d6ceaf1e4157bccf44d2b6bf.png",
                                                                            loop: !0,
                                                                            loopAt: 6,
                                                                            aspectRatio: "16/9",
                                                                        },
                                                                    });
                                                            })
                                                            .catch(() => {
                                                                (0, h.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, o.jsx)(sE.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: el.intl.string(el.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: el.intl.string(el.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, o.jsx)("div", {
                                                                                children: el.intl.string(
                                                                                    el.t["0YpIF/"],
                                                                                ),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: el.intl.string(el.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !i,
                                            loading: m,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    }),
    sO = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: a, tab: i } = e,
            r = (0, nj.Mk)(i),
            d = c.useMemo(() => A.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            u = (0, M.bG)([tE.A], () => tE.A.getPurchase(a.rewardSkuId)),
            { products: m } =
                ((t = (0, n6.A)()),
                (n = c.useMemo(
                    () => (l ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != u)),
                    [l, t, a.rankedSkuIds, u, a.rewardSkuId],
                )),
                (s = (0, tM.p)()(n)),
                { products: (0, tP.X)(s) }),
            g = c.useMemo(
                () =>
                    !l &&
                    0 !== a.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    a.rankedSkuIds.every((e) => A.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, a.rankedSkuIds, m.length],
            ),
            h = l || g,
            { readyToClaim: x } = sN(d, a.rewardSkuId),
            E = null == u && null != a.rewardSkuId && null != d;
        return (0, o.jsx)(sx.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(tH.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          E &&
                              x &&
                              (0, o.jsx)(
                                  N.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(sL, { category: d, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
                              ),
                          m.map((e, t) => {
                              let n = A.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, o.jsx)(
                                        N.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, o.jsx)(tz.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, nW.$b)(90);
let sT = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: nR.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    sR = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            a = (0, tk.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            i = (0, M.bG)([_.default], () => _.default.getCurrentUser()),
            { analyticsLocations: r } = (0, p.Ay)(J.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: m,
                heroBannerStatic: g,
                heroBannerAnimated: h,
            } = (0, su.Kk)(n),
            x = c?.responsive ?? !1,
            E = c?.backgroundStyle;
        return null != i && (t || n !== sT)
            ? (0, o.jsx)(p.f5, {
                  value: r,
                  children: (0, o.jsxs)("div", {
                      ref: a,
                      className: nq.os,
                      children: [
                          (0, o.jsx)("div", {
                              className: u()(nq.vK, { [nq.no]: x }),
                              style: null != E ? { background: E } : void 0,
                              children:
                                  null != g &&
                                  (0, o.jsx)(sm.A, { bannerStatic: g, bannerAnimated: h, isResponsive: x }),
                          }),
                          (0, o.jsxs)("div", {
                              className: nq.xX,
                              children: [
                                  (0, o.jsx)("div", {
                                      className: u()(nq.bC, { [nq.no]: x }),
                                      children: t
                                          ? (0, o.jsx)("div", { className: nq.Hw })
                                          : (0, o.jsx)("div", {
                                                className: nq.Hw,
                                                children: (0, o.jsxs)("div", {
                                                    className: nq.Wq,
                                                    children: [
                                                        null != m &&
                                                            (0, o.jsx)("img", {
                                                                className: nq.rm,
                                                                src: m,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, o.jsx)(eo.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: nq.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, o.jsx)(X.E, {
                                                                variant: "text-md/normal",
                                                                className: nq.Tm,
                                                                style:
                                                                    null != n.bannerTextColor
                                                                        ? { color: n.bannerTextColor }
                                                                        : void 0,
                                                                children: n.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, o.jsx)(sO, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var sk = n(554661);
let sy = function (e) {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, M.bG)([_.default], () => _.default.getCurrentUser()),
        a = (0, nj.Mk)(s),
        i = (0, M.bG)([A.A], () => (null != t.categorySkuId ? A.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, n6.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        m = (0, tP.X)(d),
        { analyticsLocations: g } = (0, p.Ay)(J.A.COLLECTIBLES_SHOP_SHELF),
        h = c.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: i?.isOrbsExclusive === !0 && s !== td.G2.ORBS,
            });
        }, [t.categorySkuId, i, n, s]);
    if (null == l || 0 === m.length) return null;
    let x = t.buttonText ?? el.intl.formatToPlainString(el.t.bc9RBE, { category_name: t.name }),
        E = t.showButton,
        f = t.desktopBackgroundImage,
        v = null != f;
    return (0, o.jsx)(p.f5, {
        value: g,
        children: (0, o.jsxs)("div", {
            className: u()(sk.mu, nq.YB, v ? sk.VA : sk.Ti),
            children: [
                v && (0, o.jsx)("img", { className: sk.iL, src: f, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: sk.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: sk.wx,
                            children: [
                                (0, o.jsx)(eo.D, {
                                    variant: "heading-lg/semibold",
                                    style: v ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                E &&
                                    (0, o.jsx)(Q.$, {
                                        variant: v ? "overlay-primary" : "secondary",
                                        text: x,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, o.jsx)(sx.A, {
                            gap: "xl",
                            edgeFade: v ? "sm" : void 0,
                            children: m.map((e, n) =>
                                null == A.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, o.jsx)(
                                          N.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, o.jsx)(tz.A, { skuId: e.skuId, prioritizedCurrency: a }),
                                          },
                                          e.skuId,
                                      ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
var sM = n(465794),
    sP = n(69236),
    sD = n(44724),
    sB = n(421108),
    sH = n(873297);
let sw = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: s,
            gradientAngle: l,
            skuIds: a,
            tab: i,
            endTime: r,
            ctaType: d = "storefront",
            logoUrl: u,
        } = e,
        m = (0, sB.ur)(r) ?? void 0,
        g = (0, sP.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || g
                    ? {
                          kind: "button",
                          text: el.intl.string(el.t.apFNLU),
                          onClick: () => (0, sD.default)({ applicationId: t }),
                          onMouseDown: () => (0, sD.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(sM.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: et.pe.TIER_2,
                              buttonTextOverride: el.intl.string(el.t.pj0XBN),
                          }),
                      },
            [d, t, g],
        );
    return (0, o.jsx)(sH.A, {
        skuIds: a,
        tab: i,
        applicationId: t,
        headerText: n,
        logoUrl: u,
        cta: h,
        timeLeftText: m,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${l}deg, ${s.join(", ")})`,
    });
};
var sG = n(575593),
    sF = n(770178),
    sU = n(929283),
    sz = n(171934);
let sV = [
    "1212569433839636530",
    "1144308439720394944",
    "1228251144065777765",
    "1343751620965564426",
    "1157407831348228141",
    "1197344326133502032",
    "1232071712695386162",
    "1144046002110738634",
    "1271174324375519273",
    "1237653964582031400",
    "1217625794382401577",
    "1462116613871636542",
    "1458472704469499965",
    "1447654091072344195",
    "1432550258839392376",
    "1409898407849365565",
    "1404558257065824347",
];
function sK(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        a = A.A.getProduct(t.skuId),
        i = a?.items[0],
        r = a?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: sz.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != i && r === sG.R.AVATAR_DECORATION && (0, o.jsx)(sU.i, { item: i }),
    });
}
let sY = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, a] = c.useState(!1),
            [i, r] = c.useState([]),
            [d] = c.useState(() =>
                [...sV]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${td.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            c.useEffect(() => {
                if (null != s && s > 0) {
                    let e = Math.max(1, Math.floor(s / 130)),
                        t = s / e;
                    r(Array.from({ length: e }, (e, n) => ({ config: d[n % d.length], baseLeft: n * t })));
                }
            }, [s, d]),
            c.useEffect(() => {
                n && setTimeout(() => a(!0), td.H1);
            }, [n]),
            (0, o.jsx)("div", {
                className: u()(sz.rA, { [sz.Kb]: t, [sz.pp]: l }),
                children: i.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, o.jsx)(sK, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    sW = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = c.useRef(null),
            [l, a] = c.useState(0),
            i = c.useCallback(() => {
                null != s.current && a(s.current.offsetWidth);
            }, []);
        return (
            (0, sF.g)(s, i),
            (0, o.jsx)("div", {
                ref: s,
                className: sz.eL,
                children: (0, o.jsx)(sY, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var s$ = n(815021);
let sq = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            s = A.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            l = c.useRef(null),
            a = c.useRef(null),
            [i, r] = c.useState(),
            [d, m] = c.useState(!1);
        c.useEffect(() => {
            let e = a.current;
            if (null != e)
                return (
                    e.complete ? t() : (e.onload = t),
                    () => {
                        e.onload = null;
                    }
                );
            function t() {
                null != e && e.naturalWidth > 0 && e.naturalHeight > 0 && r(1080 * (e.naturalHeight / e.naturalWidth));
            }
        }, []);
        let g = s?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, sb.Z)(g, "home", "marketing wide banner"),
            x = (0, N.uM)(),
            { bannerURL: E } = (0, su.w$)(t),
            f = n === td.G2.ORBS,
            p = null != t.ctaRoute && "" !== t.ctaRoute,
            v = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
            C = null != t.logoURL && "" !== t.logoURL,
            j = c.useCallback(() => {
                if ((m(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, nk.$l)(eB.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: e6.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            S = c.useCallback(
                (e) => {
                    tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: x?.sessionId,
                        sku_id: g,
                        page_type: n,
                        page_section: x?.pageSection,
                        page_category: x?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(x?.tilePosition),
                        cta_name: e,
                    });
                },
                [x, g, n],
            ),
            b = c.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((S(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, sD.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, si.pX)(e);
                    }
                },
                [t.ctaRoute, S],
            );
        if (null == E || d) return null;
        let _ = u()(nq.nM, nq.Tq, nq.TS, nq.YB, { [nq._1]: f, [nq.vb]: p }),
            I = (0, o.jsxs)(o.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, o.jsx)("div", {
                            className: nq.Mh,
                            children: (0, o.jsx)(s$.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), j();
                                },
                                "aria-label": el.intl.string(el.t.WAI6xu),
                            }),
                        }),
                    (0, o.jsx)("div", {
                        className: u()(nq.zK, { [nq._1]: f }),
                        style: null != i ? { height: `${i}px` } : void 0,
                        children: (0, o.jsx)("img", {
                            ref: a,
                            src: E,
                            alt: t.title,
                            className: u()(nq.LN, { [nq.d5]: f }),
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: u()(nq.Ep, { [nq.Qq]: v }),
                        style: { maxHeight: null != i ? `${i}px` : "auto" },
                        children: (0, o.jsxs)("div", {
                            className: nq.E8,
                            children: [
                                (0, o.jsx)(eo.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: f ? nq.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, o.jsx)(X.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: f ? "text-md/medium" : "text-sm/medium",
                                    children: f
                                        ? el.intl.format(el.t.SFFP7K, {
                                              helpdeskArticle: se.A.getArticleURL(e2.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                v &&
                                    (0, o.jsxs)("div", {
                                        className: nq.nP,
                                        children: [
                                            (0, o.jsx)(Q.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), b(t.ctaText ?? el.intl.string(el.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? el.intl.string(el.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? el.intl.formatToPlainString(el.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            C && (0, o.jsx)("img", { src: t.logoURL, alt: "", className: nq.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, o.jsx)(q.N, {
            theme: f ? void 0 : en.NJ.DARK,
            children: (e) =>
                (0, o.jsx)(sl.L, {
                    innerRef: l,
                    onChange: h,
                    threshold: 0,
                    children: p
                        ? (0, o.jsx)(eH.D, { innerRef: l, onClick: () => b(null), className: u()(e, _), children: I })
                        : (0, o.jsx)("div", { ref: l, className: u()(e, _), children: I }),
                }),
        });
    },
    sZ = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: a, includeUnpublished: i } = (0, tK.A)(),
            [r, d] = c.useState(!1),
            m = (0, N.uM)(),
            g = m?.sessionId ?? "",
            h = (0, D.H)({ location: "collectibles_shop_feed" });
        c.useEffect(() => {
            (0, tD.z)({
                sessionId: g,
                checkpoint: tD.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: i,
                cacheDisabled: a,
            });
        }, [l]);
        let {
                isFetchingShopHome: x,
                fetchShopHomeError: E,
                shopBlocks: f,
                refreshShopHome: p,
            } = (0, nP.y)(l, { noCache: a, includeUnpublished: i, logPerf: !0 }, { sessionId: g, tab: l }),
            v = c.useCallback(() => {
                p();
            }, [p]);
        return (c.useEffect(() => {
            null != E ||
                x ||
                0 === f.length ||
                (0, tD.z)({
                    sessionId: g,
                    checkpoint: tD.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: a,
                });
        }, [E, x, f.length, i, a, g, l]),
        null != E)
            ? (0, o.jsx)(nT.h, { onRetry: v, errorOrigin: nT.A.SHOP_PAGE, errorMessage: E.message })
            : x || 0 === f.length
              ? (0, o.jsxs)("div", {
                    className: u()(nq.g4, nq.Of),
                    children: [
                        (0, o.jsx)(sd.A, { isLoading: x, handleTransition: t, tab: l }),
                        (0, o.jsx)(nQ, { isLoading: x, handleTransition: t, categories: [] }),
                        (0, o.jsx)(ss, {
                            isLoading: x,
                            title: l === td.G2.ORBS ? el.intl.string(el.t.dFgeuZ) : el.intl.string(el.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, o.jsx)(o.Fragment, {
                    children: f.map((e, a) =>
                        (function (e, a, i) {
                            if (null == e) return null;
                            let c = null,
                                m = !1;
                            switch (e.type) {
                                case nR.g.HERO:
                                    c = (0, o.jsx)(
                                        sd.A,
                                        { isLoading: x, handleTransition: t, heroBlock: e, tab: l },
                                        i,
                                    );
                                    break;
                                case nR.g.FEATURED:
                                    c = (0, o.jsx)(
                                        nQ,
                                        { isLoading: x, handleTransition: t, featuredBlockRecord: e },
                                        i,
                                    );
                                    break;
                                case nR.g.FEED:
                                    let g = e.sortedSkuIds;
                                    c = (0, o.jsx)(
                                        ss,
                                        {
                                            title:
                                                l === td.G2.ORBS
                                                    ? el.intl.string(el.t.dFgeuZ)
                                                    : el.intl.string(el.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: g,
                                            buttonContainerClassName: a?.type === nR.g.IMMERSIVE_BANNER ? nq.w : void 0,
                                            tab: l,
                                            orbsSupportedOnly: l === td.G2.ORBS,
                                        },
                                        i,
                                    );
                                    break;
                                case nR.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, nk.En)(eB.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, o.jsx)(sq, { wideBannerBlock: e, tab: l }, i);
                                    break;
                                case nR.g.SHELF:
                                    c = (0, o.jsx)(sy, { handleTransition: t, shelf: e, tab: l }, i);
                                    break;
                                case nR.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(nK, { countdownTimerBlock: e, isVisible: r }, i)), (m = !0);
                                    break;
                                case nR.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        sh,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        i,
                                    );
                                    break;
                                case nR.g.REWARD_HERO:
                                    c = (0, o.jsx)(sR, { isLoading: x, handleTransition: t, heroBlock: e, tab: l }, i);
                                    break;
                                case nR.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, nk.En)(eB.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, o.jsx)(
                                        nM,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(sc, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        i,
                                    );
                                case nR.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        nM,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(sw, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: l,
                                                endTime: e.endTime,
                                                ctaType: e.ctaType,
                                                logoUrl: e.logoUrl,
                                            }),
                                        },
                                        i,
                                    );
                                default:
                                    return null;
                            }
                            return (0, o.jsx)(
                                nM,
                                {
                                    blockType: e.type,
                                    children: (0, o.jsx)("div", {
                                        className: u()(nq.v1, nq.Of, { [nq.J1]: 0 === i || m }),
                                        children: c,
                                    }),
                                },
                                i,
                            );
                        })(e, a > 0 ? f[a - 1] : null, a),
                    ),
                });
    },
    sX = function (e) {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = c.useRef(null),
            { handleScroll: a } = t_(l, n),
            i = (0, tV.U)(),
            r = (0, N.uM)(),
            [d, u] = c.useState(td.md),
            [m, g] = c.useState(!1);
        return (
            c.useEffect(() => {
                if (null != l.current) {
                    function e() {
                        if (null == l.current) return;
                        let e = l.current.getDistanceFromBottom();
                        d >= 36 ? g(e < 20) : e <= 200 && u((e) => e + td.md);
                    }
                    let t = l.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [l, d, u, g]),
            (0, o.jsx)(B.Ch, {
                className: nq.OW,
                ref: l,
                onScroll: a,
                children: (0, o.jsxs)("div", {
                    className: nq.bx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nq.rb,
                            children: [
                                (0, o.jsx)(sZ, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: i,
                                    tab: n,
                                }),
                                n !== td.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, o.jsxs)("div", {
                                        className: nq.R$,
                                        children: [
                                            (0, o.jsx)(eo.D, {
                                                variant: "heading-md/semibold",
                                                children: el.intl.string(el.t.Yr70c4),
                                            }),
                                            (0, o.jsx)(Q.$, {
                                                variant: "primary",
                                                text: el.intl.string(el.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === td.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, o.jsx)(sW, { peaking: m, transitioning: s === td.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var sQ = n(154323),
    sJ = n(295811),
    s0 = n(870216);
let s1 = { "Any:personalization-header": sn },
    s4 = { [tI.b.SHOP_HOME]: s1 },
    s5 = { "1465939725649973269": s1, "1478495181551440044": s1 },
    s2 = function () {
        return (0, o.jsx)("div", {
            style: {
                background: "linear-gradient(rgba(39, 30, 173, 0.3), transparent)",
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
            },
            children: (0, o.jsx)("div", {
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d")',
                    backgroundPosition: "center top",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.4,
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                },
            }),
        });
    },
    s3 = { prioritizedCurrency: nj.Hi.ORBS };
function s6(e) {
    let { tab: t } = e,
        [n, s, l] = (0, M.yK)([s0.A], () => [s0.A.getLayout(t), s0.A.isFetchingLayout(t), s0.A.getLayoutFetchError(t)]),
        a = (0, M.bG)([sQ.A], () => sQ.A.get("shop_include_unpublished")),
        i = (0, M.bG)([A.A], () => A.A.skipNumCategories),
        r = c.useMemo(() => {
            let e = {};
            return !0 === a && (e.include_unpublished = !0), null != i && i > 0 && (e.skip_num_categories = i), e;
        }, [a, i]),
        d = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (c.useEffect(() => {
            d && (0, sS.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== y.HOME || d || s
            ? null
            : (0, o.jsx)(tA.Z_, {
                  tenantId: e2.FYj,
                  templateId: tI.b.SHOP_HOME,
                  requestParams: r,
                  overrides: s4[tI.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(tA.Qs, { tenantId: e2.FYj, layoutId: n, overrides: s5[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === y.ORBS && (0, o.jsx)(s2, {}),
            t === y.ORBS ? (0, o.jsx)(nj.v3.Provider, { value: s3, children: u }) : u,
        ],
    });
}
function s9(e) {
    let { url: t } = e,
        [n, s] = c.useState(null);
    return (c.useEffect(() => {
        !(async function () {
            try {
                let e = await fetch(t),
                    n = await e.json();
                s(n);
            } catch (e) {
                s(null);
            }
        })();
    }, [t]),
    null == n)
        ? null
        : (0, o.jsx)(tA.Ay, { layout: n });
}
let s8 = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, N.uM)(),
        a = (0, M.bG)([sJ.A], () => sJ.A.getShopLayoutUrlOverride()),
        i = c.useRef(null),
        { handleScroll: r } = t_(i, n),
        [d, m] = c.useState(td.md),
        [g, h] = c.useState(!1);
    return (
        c.useEffect(() => {
            if (null != i.current) {
                function e() {
                    if (null == i.current) return;
                    let e = i.current.getDistanceFromBottom();
                    d >= 36 ? h(e < 20) : e <= 200 && m((e) => e + td.md);
                }
                let t = i.current.getScrollerNode();
                return (
                    t?.addEventListener("scroll", e),
                    () => {
                        t?.removeEventListener("scroll", e);
                    }
                );
            }
        }, [i, d, m, h]),
        (0, o.jsx)(B.Ch, {
            className: nq.OW,
            ref: i,
            onScroll: r,
            children: (0, o.jsxs)("div", {
                className: nq.bx,
                children: [
                    (0, o.jsxs)("div", {
                        className: u()(nq.rb, nq.GS),
                        children: [
                            null != a && "" !== a ? (0, o.jsx)(s9, { url: a }) : (0, o.jsx)(s6, { tab: n }),
                            n !== y.CATALOG &&
                                d >= 36 &&
                                (0, o.jsxs)("div", {
                                    className: nq.R$,
                                    children: [
                                        (0, o.jsx)(eo.D, {
                                            variant: "heading-md/semibold",
                                            children: el.intl.string(el.t.Yr70c4),
                                        }),
                                        (0, o.jsx)(Q.$, {
                                            variant: "primary",
                                            text: el.intl.string(el.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    tS.default.track(e2.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === y.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, o.jsx)(sW, { peaking: g, transitioning: s === td.Pf.OUT }),
                ],
            }),
        })
    );
};
var s7 = n(417388);
let le = function () {
        return (0, o.jsxs)("div", {
            className: s7.z,
            children: [
                (0, o.jsx)("img", {
                    className: s7.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: el.intl.string(el.t["p8+qtU"]),
                }),
                (0, o.jsx)(eo.D, { variant: "heading-xl/semibold", children: el.intl.string(el.t["p8+qtU"]) }),
                (0, o.jsx)(X.E, { variant: "text-md/medium", children: el.intl.string(el.t.UEiyvs) }),
            ],
        });
    },
    lt = [td.G2.HOME, td.G2.ORBS];
function ln(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: a,
            refreshCategories: i,
        } = e,
        r = (0, M.bG)([A.A, tE.A], () =>
            null != A.A.error
                ? `shop load fetch categories error: ${A.A.error.message}`
                : null != tE.A.claimError
                  ? `shop load claim error: ${tE.A.claimError.message}`
                  : null != tE.A.fetchError
                    ? `shop load fetch purchase error: ${tE.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, M.bG)([_.default], () => _.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, tK.A)();
        c.useEffect(() => {
            null != e &&
                tx.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(r);
    let d = (0, D.H)({ location: "collectibles_content" }),
        u = (0, M.bG)([P.Ay], () => P.Ay.useReducedMotion),
        m = (0, k.W6)(),
        g = (0, k.zy)(),
        [h] = c.useState(() => {
            if ("POP" === m.action) {
                let e;
                return (e = tY), (tY = null), e ?? void 0;
            }
        }),
        [x, E] = c.useState(h),
        [f, p] = c.useState(null == h),
        v = c.useMemo(() => {
            let e = new URLSearchParams(g.search).get(td.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        C = c.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !td.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        j = (0, th.U)("CollectiblesContent"),
        S = (0, tf.a)("CollectiblesContent"),
        b = c.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, n), S && null != n && i && !r))
                    return void m.push(e2.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = l && !u,
                    c = r ? td.G2.ORBS : td.G2.CATALOG;
                E(n), p(!i), s(c, o);
            },
            [u, s, a, S, m],
        ),
        { searchError: N } = (0, tp.S)();
    return null != N
        ? (0, o.jsx)(le, {})
        : null != r
          ? (0, o.jsx)(nT.h, { onRetry: i, errorMessage: r, errorOrigin: nT.A.SHOP_PAGE })
          : t === td.G2.HOME && j
            ? (0, o.jsx)(s8, { tab: y.HOME, transitionState: l, handleTransition: b })
            : t === td.G2.ORBS && j
              ? (0, o.jsx)(s8, { tab: y.ORBS, transitionState: l, handleTransition: b })
              : lt.includes(t)
                ? (0, o.jsx)(sX, { handleTransition: b, tab: t, transitionState: l })
                : t === td.G2.GAME_SERVERS
                  ? d
                      ? (0, o.jsx)(tm, { isGameServerHostingInShopEnabled: d })
                      : (0, o.jsx)(k.rd, { to: e2.BVt.COLLECTIBLES_SHOP_WITH_TAB(td.G2.HOME) })
                  : (0, o.jsx)(nL, {
                        tab: t,
                        categories: C,
                        initialCategoryId: x ?? v,
                        showFilterInitially: f && null == v,
                        onUnmount: () => {
                            E(void 0), p(!0);
                        },
                    });
}
var ls = n(178504),
    ll = n(235939),
    la = n(870308),
    li = n(650583);
function lr(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === li.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let lo = function (e) {
    let { tab: t = td.G2.HOME } = e;
    (0, j.P)(C.a);
    let n = (0, f.A)((0, m.A)()),
        s = (0, g.bG)([_.default], () => _.default.getCurrentUser());
    (0, b.pE)();
    let l = (0, t0.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, k.zy)(),
                t = (0, k.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === s) {
                        (0, si.aX)(), (0, U.openUserSettings)();
                        return;
                    }
                    (0, si.EL)() ? (0, si.aX)() : (0, si.pX)(e2.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: i, hasFilters: r } = (0, R.v)(),
        d = c.useMemo(() => (t === td.G2.HOME && null != i && r() ? i : t), [t, i, r]);
    (0, S.A)(e2.FYj);
    let { categories: y, refreshCategories: M } = (0, O.Ay)({ logPerf: !0 }, { sessionId: n, tab: d }),
        P = c.useMemo(() => [...y.values()], [y]),
        [D, B] = c.useState(),
        H = (0, g.bG)([A.A], () => A.A.getCategory(D)?.name),
        [w, G] = c.useState();
    (0, tZ.XU)(n);
    let F = c.useCallback((e, t) => {
            G(e), B(t);
        }, []),
        { selectedTab: z, transitionState: V, transitionToTab: K } = (0, T.o)(d);
    (0, v.HU)({ location: el.intl.string(el.t.pWG4ze) }), (0, L.uS)(n, z, H, V, w), (0, L.N0)(z, s);
    let { dismissShopButtonDC: Y } = (0, la.A)();
    c.useEffect(() => {
        Y();
    }, [Y]),
        c.useEffect(() => {
            (0, E.I)(e2.BVt.COLLECTIBLES_SHOP);
        }, []);
    let W = c.useRef(null),
        $ = c.useRef(null);
    (0, x.tj)(W);
    let q = (0, h.useHasAnyModalOpen)();
    c.useEffect(() => {
        $.current?.focus();
    }, []),
        (0, t0.gB)();
    let { analyticsLocations: Z } = (0, L.lC)(z);
    return (0, o.jsx)(p.f5, {
        value: Z,
        children: (0, o.jsx)(N.R9, {
            newValue: { sessionId: n, pageCategory: H, pageSize: td.l5 },
            children: (0, o.jsx)(I.iM, {
                tab: z,
                children: (0, o.jsx)(lr, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(tG.bx, { [t0.jP]: l }),
                        ref: $,
                        inert: q,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(ls.G, { handleTransition: K, selectedTab: z }),
                            (0, o.jsx)(ll.A, { tab: z, handleTransition: K }),
                            (0, o.jsx)("div", {
                                className: u()(tG.td, {
                                    [tG.RK]: V === td.Pf.VISIBLE,
                                    [tG.in]: V === td.Pf.IN,
                                    [tG.FD]: V === td.Pf.OUT,
                                }),
                                children: (0, o.jsx)(ln, {
                                    tab: z,
                                    refreshCategories: M,
                                    transitionToTab: K,
                                    transitionState: V,
                                    categories: P,
                                    updateAnalyticsState: F,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
