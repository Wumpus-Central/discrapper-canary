n.r(t), n.d(t, { default: () => lc });
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
    f = n(944791),
    E = n(444927),
    p = n(688810),
    v = n(726249),
    j = n(475073),
    C = n(611924),
    b = n(744082),
    S = n(561794),
    _ = n(287809),
    N = n(440938),
    A = n(590180),
    I = n(161918),
    L = n(71604),
    O = n(790297),
    R = n(841702),
    T = n(983545),
    k = n(23161);
n(323874), n(14289), n(35956), n(321073);
var y = n(806163),
    M = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    P = n(17928),
    D = n(775602),
    B = n(196736),
    H = n(689175),
    w = n(277984),
    F = n(670735),
    G = n(790284),
    U = n(780964),
    z = n(766075),
    V = n(280450),
    K = n(166403),
    W = n(123917),
    Y = n(158045),
    $ = n(814201),
    q = n(581453),
    Z = n(43990),
    X = n(403581),
    Q = n(834730),
    J = n(821609),
    ee = n(793574),
    et = n(532794),
    en = n(202541),
    es = n(818348),
    el = n(275695),
    ea = n(375708),
    ei = n(923137);
function er() {
    let e = c.useCallback(() => {
        (0, et.A)({ subscriptionTier: en.pe.TIER_2, analyticsLocations: [ee.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, o.jsx)(Z.N, {
        theme: es.NJ.DARKER,
        children: (t) =>
            (0, o.jsxs)("div", {
                className: u()(ei.vK, t),
                children: [
                    (0, o.jsxs)("div", {
                        className: ei.Pf,
                        children: [
                            (0, o.jsx)(X.t, {
                                className: ei.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, o.jsx)(Q.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: ea.intl.string(el.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, o.jsx)(J.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: X.t,
                        text: ea.intl.string(ea.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var eo = n(462887),
    ec = n(297264),
    ed = n(736653),
    eu = n(385948);
function em(e) {
    let { onRetry: t, errorMessage: n } = e,
        s = (0, ed.Ay)(),
        l = (0, P.bG)([_.default], () => {
            let e = _.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, o.jsxs)("div", {
        className: eu.kL,
        children: [
            (0, o.jsx)("img", {
                className: eu.Sl,
                src: (0, eo.M)(s) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, o.jsx)(ec.D, { variant: "heading-xl/semibold", children: ea.intl.string(ea.t.i5SQ74) }),
            (0, o.jsx)(Q.E, {
                className: eu.h_,
                variant: "text-md/normal",
                color: "text-muted",
                children: ea.intl.string(ea.t.F8FvUy),
            }),
            l &&
                null != n &&
                (0, o.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: "staff-only debug: " + n }),
            (0, o.jsx)(J.$, { variant: "primary", text: ea.intl.string(ea.t["+hivLW"]), onClick: t }),
        ],
    });
}
var eg = n(349085),
    eh = n(890856),
    ex = n(331322),
    ef = n(713517),
    eE = n(177914);
function ep(e) {
    let { name: t, coverUrl: n, fromPriceLabel: s, nitroFromPriceLabel: l, onClickCard: a, onClickViewPlans: i } = e,
        r = c.useRef(null),
        { isHoveringOrFocusing: d } = (0, ef.A)(r),
        m = (0, P.bG)([_.default], () => Y.Ay.canUseShopDiscounts(_.default.getCurrentUser())) && null != l,
        g = m ? l : s,
        h = c.useCallback(
            (e) => {
                e.stopPropagation(), i?.();
            },
            [i],
        );
    return (0, o.jsxs)(eh.s, {
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
                              children: (0, o.jsx)(Q.E, {
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
                            (0, o.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", tag: "p", children: t }),
                            null != g &&
                                (0, o.jsx)("div", {
                                    className: eE.F1,
                                    children: (0, o.jsxs)(ex.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, o.jsxs)(ex.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    m &&
                                                        (0, o.jsx)(X.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, o.jsx)(Q.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: g,
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: ea.intl.string(el.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, o.jsx)("div", {
                        className: eE.E1,
                        children: (0, o.jsx)(J.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: ea.intl.string(el.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ev = n(452389);
function ej() {
    return (0, o.jsx)("div", {
        className: u()(eE.Nr, ev.s7, ev.U6),
        "aria-hidden": !0,
        children: (0, o.jsxs)("div", {
            className: ev.qr,
            children: [(0, o.jsx)("div", { className: ev.w9 }), (0, o.jsx)("div", { className: ev.n2 })],
        }),
    });
}
var eC = n(191932);
let eb = c.memo(function (e) {
    let { game: t, onSelect: n } = e,
        s = c.useCallback(() => n(t), [t, n]),
        l = (0, eg.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, o.jsx)(ep, {
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
            null != n && (0, o.jsx)(ec.D, { variant: "heading-lg/semibold", children: n }),
            (0, o.jsx)("div", {
                className: eC.V,
                children: l
                    ? Array.from({ length: 10 }, (e, t) => (0, o.jsx)(ej, {}, t))
                    : t.map((e) => (0, o.jsx)(eb, { game: e, onSelect: s }, e.id)),
            }),
        ],
    });
}
var e_ = n(32880),
    eN = n(410232),
    eA = n(231483),
    eI = n(339350),
    eL = n(349288),
    eO = n(504660);
function eR() {
    let e = c.useMemo(
        () => [
            { Icon: e_.s, label: ea.intl.string(el.default.GJNQYz) },
            { Icon: eN.k, label: ea.intl.string(el.default.pTinR2) },
            { Icon: eA.l, label: ea.intl.string(el.default.s0N1nM) },
            { Icon: eI.Q, label: ea.intl.string(el.default.NzrGEi) },
        ],
        [],
    );
    return (0, o.jsxs)("section", {
        className: eO.ZK,
        children: [
            (0, o.jsxs)("div", {
                className: eO.jE,
                children: [
                    (0, o.jsx)(ec.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: ea.intl.string(el.default.F5W36W),
                    }),
                    (0, o.jsxs)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            ea.intl.string(el.default.xMpGuO),
                            " ",
                            (0, o.jsx)(eL.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: ea.intl.string(el.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, o.jsx)("div", {
                className: eO._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, o.jsxs)(
                        "div",
                        {
                            className: eO.Tc,
                            children: [
                                (0, o.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, o.jsx)(Q.E, {
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
var eT = n(499279);
function ek() {
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
var ey = n(408278),
    eM = n(548411),
    eP = n(554830),
    eD = n(281445),
    eB = n(390544),
    eH = n(554146),
    ew = n(939249),
    eF = n(509434),
    eG = n(866665),
    eU = n(880892);
let ez = { TERTIARY: eU.Xe, SECONDARY: eU.Rm, PRIMARY: eU.zB },
    eV = { SIZE_24: eU.q1, SIZE_32: eU.Hb, SIZE_36: eU.VM },
    eK = c.forwardRef(function (e, t) {
        let {
            className: n,
            tooltip: s,
            color: l,
            size: a = eV.SIZE_32,
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
            children: (0, o.jsx)(ew.D, {
                innerRef: t,
                "aria-label": s,
                "aria-disabled": d,
                className: u()(n, eU.x6, l, a, { [eU.r9]: d }),
                onMouseDown: r,
                onClick: (e) => {
                    c(e);
                },
                focusProps: m,
                children: i,
            }),
        });
    });
var eW = n(933832),
    eY = n(624479),
    e$ = n(131607),
    eq = n(427209),
    eZ = n(95035),
    eX = n(498480),
    eQ = n(685743),
    eJ = n(981381),
    e0 = n(342942),
    e1 = n(294454),
    e4 = n(625903),
    e2 = n(445927);
function e5(e) {
    let { server: t, onOpenSettings: n } = e,
        s = (0, e2.A)(t.instance),
        l = c.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, o.jsx)(eK, {
        color: ez.SECONDARY,
        size: eV.SIZE_24,
        icon: (0, o.jsx)(e4.Z, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: l,
        disabled: !s,
        tooltip: ea.intl.string(el.default["feUiM/"]),
    });
}
var e3 = n(652215),
    e8 = n(628049),
    e9 = n(49999),
    e6 = n(20661);
let e7 = [eB.M.STARTUP_FAILED, eB.M.MISSING_STOCK, eB.M.PROVIDER_ERRORED, eB.M.DELETED];
function te(e) {
    return `game-server-owned-card-${e}`;
}
function tt(e) {
    let { gameServerId: t } = e,
        n = c.useCallback(() => {
            (0, eX.Kz)(t).catch(() => {});
        }, [t]);
    return (0, o.jsx)("div", {
        className: e6.y7,
        children: (0, o.jsx)(J.$, {
            fullWidth: !0,
            text: ea.intl.string(el.default.TMzy7d),
            variant: "secondary",
            onClick: n,
        }),
    });
}
function tn() {
    let [e, t] = c.useState(!1),
        n = c.useCallback(() => {
            t(!0),
                (0, eX.hU)()
                    .catch(() => {})
                    .finally(() => t(!1));
        }, []);
    return (0, o.jsx)("div", {
        className: e6.y7,
        children: (0, o.jsx)(J.$, {
            fullWidth: !0,
            text: ea.intl.string(el.default.BLEx3k),
            variant: "secondary",
            loading: e,
            onClick: n,
        }),
    });
}
let ts = c.memo(function (e) {
    let { server: t, onJoin: s, onViewPanel: l, onOpenSettings: a, isHighlighted: i = !1 } = e,
        r = (0, eg.A)(t.gameId, "cover") ?? t.coverUrl,
        d = (function (e) {
            let t = (0, P.bG)([K.A], () => (null != e ? K.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === e3.Dmq.CANCELED
                ? { text: ea.intl.formatToPlainString(el.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: ea.intl.formatToPlainString(el.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [m, g] = (0, e$.kn)([eH.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        x = m !== eH.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        f = eD.X.SHOCKBYTE,
        E = V.default.getId() ?? "0",
        { handleCopyServerIp: p, animateCopyIcon: v } = (0, eQ.A)(E, t.id, ee.A.GAME_SERVER_PAGE, t.serverIp),
        j = c.useCallback(() => {
            (0, e0.A)({
                provider: f,
                onAccept: () => {
                    g(e9.i.TAKE_ACTION), p();
                },
            });
        }, [f, g, p]),
        C = c.useCallback(() => {
            x
                ? s(t)
                : (0, e0.A)({
                      provider: f,
                      onAccept: () => {
                          g(e9.i.TAKE_ACTION), s(t);
                      },
                  });
        }, [x, f, g, s, t]),
        b = c.useCallback(() => l(t), [l, t]),
        S = c.useCallback(() => {
            ((e) => {
                let { server: t, source: s } = e;
                (0, h.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("71053"),
                            n.e("65584"),
                            n.e("1248"),
                            n.e("94149"),
                            n.e("14131"),
                            n.e("73883"),
                            n.e("73216"),
                            n.e("20023"),
                            n.e("81647"),
                            n.e("76602"),
                            n.e("40402"),
                            n.e("67861"),
                            n.e("1518"),
                            n.e("23354"),
                            n.e("68062"),
                            n.e("44780"),
                            n.e("36946"),
                            n.e("92639"),
                            n.e("90480"),
                            n.e("40963"),
                            n.e("66031"),
                            n.e("94317"),
                            n.e("23601"),
                            n.e("35868"),
                        ]).then(n.bind(n, 729751));
                        return (n) => (0, o.jsx)(e, { ...n, server: t, source: s });
                    },
                    { stackingBehavior: "stack", modalKey: e1.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        _ = (0, eJ.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e8.qb[f],
        N = null != t.instance.gameServerPanelUrl,
        A = null != t.instance.status && e7.includes(t.instance.status),
        I = c.useCallback(() => {
            (0, W.h)({ href: _ });
        }, [_]),
        L = c.useMemo(() => {
            switch (t.instance.status) {
                case eB.M.ONLINE:
                    return ea.intl.string(el.default["60kAzo"]);
                case eB.M.OFFLINE:
                    return ea.intl.string(el.default["Ys/RrB"]);
                case eB.M.SLEEPING:
                    return ea.intl.string(el.default.y0z8ZO);
                case eB.M.STARTUP_FAILED:
                    return ea.intl.string(el.default["7C9Z3s"]);
                case eB.M.MISSING_STOCK:
                    return ea.intl.string(el.default["+a5G2l"]);
                case eB.M.PROVIDER_ERRORED:
                    return ea.intl.string(el.default["6g/oji"]);
                case eB.M.DELETED:
                    return ea.intl.string(el.default.Z1NZwX);
                case eB.M.STARTING:
                    return ea.intl.string(el.default.SgjaXI);
                default:
                    return "\u2014";
            }
        }, [t.instance.status]),
        O = t.isOnline ? "text-feedback-positive" : A ? "text-feedback-critical" : "text-muted",
        R = c.useMemo(
            () =>
                (0, o.jsx)(ew.D, {
                    className: u()(e6.wC, e6.QV),
                    onClick: C,
                    "aria-label": ea.intl.string(el.default["fQCcM/"]),
                    children: (0, o.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "none",
                        children: ea.intl.string(el.default["fQCcM/"]),
                    }),
                }),
            [C],
        ),
        T = c.useMemo(
            () =>
                (0, o.jsxs)(ew.D, {
                    className: u()(e6.wC, e6.y2, { [e6.Gz]: !N }),
                    onClick: N ? b : void 0,
                    "aria-disabled": !N,
                    "aria-label": ea.intl.string(el.default.tkbVdf),
                    children: [
                        (0, o.jsx)(Q.E, {
                            variant: "text-sm/semibold",
                            color: "none",
                            children: ea.intl.string(el.default.tkbVdf),
                        }),
                        (0, o.jsx)(eF.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                    ],
                }),
            [b, N],
        ),
        k = c.useMemo(() => {
            switch (t.instance.status) {
                case eB.M.SLEEPING:
                    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(tt, { gameServerId: t.id }), T] });
                case eB.M.STARTUP_FAILED:
                case eB.M.MISSING_STOCK:
                    return (0, o.jsx)("div", {
                        className: e6.y7,
                        children: (0, o.jsx)(J.$, {
                            fullWidth: !0,
                            text: ea.intl.string(el.default.gWMqnI),
                            variant: "primary",
                            icon: eF.I,
                            iconPosition: "end",
                            disabled: !N,
                            onClick: b,
                        }),
                    });
                case eB.M.PROVIDER_ERRORED:
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)("div", {
                                className: e6.y7,
                                children: (0, o.jsx)(J.$, {
                                    fullWidth: !0,
                                    text: ea.intl.string(el.default.bBkeMs),
                                    variant: "secondary",
                                    onClick: I,
                                }),
                            }),
                            (0, o.jsx)(tn, {}),
                        ],
                    });
                case eB.M.DELETED:
                    return T;
                default:
                    return (0, o.jsxs)(o.Fragment, { children: [R, T] });
            }
        }, [t.instance.status, t.id, N, R, T, b, I]);
    return (0, o.jsxs)("div", {
        id: te(t.id),
        className: u()(e6.Nr, { [e6.mr]: i }),
        children: [
            i && (0, o.jsx)("div", { className: e6._8, "aria-hidden": !0 }),
            (0, o.jsxs)("div", {
                className: e6.Nk,
                "aria-hidden": !0,
                children: [
                    null != r && (0, o.jsx)("img", { className: e6.QC, src: r, alt: "" }),
                    (0, o.jsx)("div", { className: e6.jc }),
                ],
            }),
            (0, o.jsxs)("div", {
                className: e6.AQ,
                children: [
                    (0, o.jsx)(eK, {
                        color: ez.SECONDARY,
                        size: eV.SIZE_24,
                        icon: (0, o.jsx)(eq.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: S,
                        tooltip: ea.intl.string(ea.t.RDE0Sc),
                    }),
                    (0, o.jsx)(e5, { server: t, onOpenSettings: a }),
                ],
            }),
            (0, o.jsxs)("div", {
                className: e6.rf,
                children: [
                    (0, o.jsxs)("div", {
                        className: e6.U1,
                        children: [
                            (0, o.jsxs)("div", {
                                className: e6.oL,
                                children: [
                                    null != r
                                        ? (0, o.jsx)("img", { className: e6.vT, src: r, alt: "" })
                                        : (0, o.jsx)("div", {
                                              className: e6.iv,
                                              children: (0, o.jsx)(Q.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, o.jsx)("div", { className: e6.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, o.jsxs)("div", {
                                className: e6.VQ,
                                children: [
                                    (0, o.jsx)(Q.E, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, o.jsx)(Q.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != d &&
                                        (0, o.jsx)(Q.E, {
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
                        className: e6.M1,
                        children: [
                            (0, o.jsxs)("div", {
                                className: e6.N8,
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: e6.bi,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: ea.intl.string(el.default.bDdi7n),
                                            }),
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)("div", {
                                        className: e6.gv,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: ea.intl.string(el.default["7phwMG"]),
                                            }),
                                            x
                                                ? (0, o.jsxs)("div", {
                                                      className: e6.Yb,
                                                      children: [
                                                          (0, o.jsx)(Q.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, o.jsx)(ew.D, {
                                                                  className: e6.cL,
                                                                  onClick: p,
                                                                  "aria-label": ea.intl.string(ea.t.OpuAlK),
                                                                  children: v
                                                                      ? (0, o.jsx)(eW.A, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, o.jsx)(eY.T, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, o.jsx)(eZ.A, {
                                                      onClick: j,
                                                      children: ea.intl.string(el.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, o.jsxs)("div", {
                                className: e6.N8,
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: e6.bi,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: ea.intl.string(el.default["n+ZX7y"]),
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: e6.Yb,
                                                children: [
                                                    (t.isOnline || A) &&
                                                        (0, o.jsx)("span", {
                                                            className: u()(e6.kg, { [e6.rU]: A }),
                                                            "aria-hidden": !0,
                                                        }),
                                                    (0, o.jsx)(Q.E, {
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
                                        className: e6.gv,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: ea.intl.string(el.default.mJlz3T),
                                            }),
                                            (0, o.jsx)(Q.E, {
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
            (0, o.jsx)("div", { className: e6.qr, children: k }),
        ],
    });
});
var tl = n(349123);
function ta(e) {
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
        [x, f] = c.useState(!1),
        [E, p] = c.useState(null),
        v = c.useCallback(() => {
            let e = d.current;
            null != e && (h(e.scrollLeft > 1), f(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
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
    let j = c.useCallback(() => {
            d.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        C = c.useCallback(() => {
            d.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        c.useEffect(() => {
            if (r <= 0) return;
            let e = null != i ? document.getElementById(te(i)) : m.current;
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
            if (null == E) return;
            let e = setTimeout(() => p(null), 4e3);
            return () => clearTimeout(e);
        }, [E]),
        (0, o.jsxs)("section", {
            className: tl.uW,
            ref: m,
            children: [
                (0, o.jsxs)("div", {
                    className: tl.wx,
                    children: [
                        (0, o.jsx)(ec.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: ea.intl.string(el.default.BOWmmT),
                        }),
                        (0, o.jsx)(Z.N, {
                            theme: es.NJ.DARKER,
                            children: (e) =>
                                (0, o.jsxs)("div", {
                                    className: u()(tl.$s, e),
                                    children: [
                                        (0, o.jsx)(J.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: ea.intl.string(ea.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: tl.d$,
                                            children: [
                                                (0, o.jsx)(ey.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eM.Z,
                                                    disabled: !g,
                                                    onClick: j,
                                                    "aria-label": ea.intl.string(ea.t["13/7kX"]),
                                                }),
                                                (0, o.jsx)(ey.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eP.K,
                                                    disabled: !x,
                                                    onClick: C,
                                                    "aria-label": ea.intl.string(ea.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: u()(tl.XG, { [tl.OW]: g && x, [tl.vL]: g && !x, [tl.y0]: x && !g }),
                    ref: d,
                    onScroll: v,
                    children: t.map((e) =>
                        (0, o.jsx)(
                            "div",
                            {
                                className: tl.AV,
                                children: (0, o.jsx)(ts, {
                                    server: e,
                                    onJoin: s,
                                    onViewPanel: l,
                                    onOpenSettings: a,
                                    isHighlighted: E === e.id,
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
var ti = n(705285),
    tr = n(199781),
    to = n(923477),
    tc = n(252589),
    td = n(55766),
    tu = n(524843);
function tm() {
    return (0, o.jsx)(F.A, { children: (0, o.jsx)(tg, {}) });
}
function tg() {
    let { servers: e, refetch: t } = (0, td.f)(),
        n = e.length > 0,
        s = (0, P.bG)([_.default], () => Y.Ay.canUseShopDiscounts(_.default.getCurrentUser())),
        { games: l, hasError: a, isEmpty: i, isLoading: r, refetch: d } = (0, tc.Y)();
    c.useEffect(() => {
        n && (0, w.hP)().catch(() => {});
    }, [n]);
    let u = c.useRef(l);
    c.useEffect(() => {
        l.length > 0 && (u.current = l);
    }, [l]);
    let m = c.useCallback(() => {
            d(), t();
        }, [d, t]),
        g = (0, ti.VJ)(),
        [h, x] = c.useState({ serverId: null, nonce: 0 }),
        f = c.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = $.A.getGameServers();
                for (let s = n.length - 1; s >= 0; s--)
                    if (n[s].game_id === e.gameId) {
                        t = n[s].id;
                        break;
                    }
            }
            x((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        E = c.useCallback(() => {
            let t = e[0];
            null != t && f({ serverId: t.id });
        }, [e, f]),
        p = (0, to.O)((e) => e.highlightFirstCardNonce),
        v = c.useRef(p);
    c.useEffect(() => {
        if (p === v.current) return;
        v.current = p;
        let e = requestAnimationFrame(() => E());
        return () => cancelAnimationFrame(e);
    }, [p, E]);
    let j = c.useCallback(
            (e) => {
                g(ti.L5.OPEN_PLAN_MODAL, ti.cl.SHOP_CARD),
                    (0, tr.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => f({ gameId: e.gameId }),
                    });
            },
            [g, f],
        ),
        C = c.useCallback(() => {
            G.A.setState({ scrollToGameServers: !0 }), (0, z.openUserSettings)(U.X.SUBSCRIPTIONS_PANEL);
        }, []),
        b = c.useCallback((e) => {
            let t = V.default.getId() ?? "0";
            (0, q.A)(t, e.instance);
        }, []),
        S = c.useCallback((e) => {
            (0, W.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        N = c.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = u.current.find((t) => t.gameId === e.gameId);
                function s(t) {
                    (0, tr.S)({
                        gameName: e.gameName,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: n?.plans,
                        initialPlanId: e.instance.planId,
                        initialRegionId: e.instance.regionId,
                        initialRegionName: e.location,
                        initialServerName: e.serverName,
                        activeSubscription: t,
                        onViewServer: () => f({ serverId: e.id }),
                    });
                }
                let l = K.A.getSubscriptionById(t);
                null != l
                    ? s(l)
                    : (0, w.hP)()
                          .then(() => {
                              let e = K.A.getSubscriptionById(t);
                              null != e && s(e);
                          })
                          .catch(() => {});
            },
            [f],
        ),
        A = n ? ea.intl.string(el.default["+aRmAc"]) : void 0;
    return (0, o.jsx)(H.Ch, {
        className: tu.XG,
        children: (0, o.jsxs)("div", {
            className: tu.kL,
            children: [
                !s && (0, o.jsx)(er, {}),
                (0, o.jsx)(ek, {}),
                (0, o.jsxs)("div", {
                    className: tu.Qs,
                    children: [
                        (0, o.jsx)(eR, {}),
                        n &&
                            (0, o.jsx)(ta, {
                                servers: e,
                                onViewAll: C,
                                onJoin: b,
                                onViewPanel: S,
                                onOpenSettings: N,
                                highlightServerId: h.serverId,
                                highlightNonce: h.nonce,
                            }),
                        a || i
                            ? (0, o.jsx)(em, { onRetry: m })
                            : (0, o.jsx)(eS, { games: l, title: A, onSelectGame: j, loading: r }),
                    ],
                }),
            ],
        }),
    });
}
var th = n(578797),
    tx = n(38405),
    tf = n(4227),
    tE = n(50920),
    tp = n(856686),
    tv = n(364522),
    tj = n(783977),
    tC = n(59520),
    tb = n(174459);
function tS(e, t, n, s) {
    let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (l + a) / i;
        s > 0 &&
            tb.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function t_(e, t) {
    let { analyticsSource: n } = (0, O.lC)(t),
        s = (0, tC.I)(tS, 5e3, [], { trailing: !0 }),
        l = (0, N.uM)(),
        a = l?.sessionId;
    return {
        handleScroll: c.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    s(e3.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", n, {
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
    tR = n(641150);
function tT() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: s } = (0, k.v)((e) => e),
        { totalCount: l, isFetchingResults: a } = (0, tp.S)(),
        i = (0, k.v)((e) => e.hasFilters()),
        r = c.useCallback(() => {
            if (!i) return "";
            if (a) return ea.intl.string(ea.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return ea.intl.format(ea.t.KJMJOz, { count: l, search: e });
            }
            if (!n && !s && 1 === e.size) {
                if (e.has(tR.q.AVATAR_DECORATION)) return ea.intl.format(ea.t.s1UzGQ, { count: l });
                if (e.has(tR.q.NAMEPLATE)) return ea.intl.format(ea.t.ZWGN9T, { count: l });
                if (e.has(tR.q.PROFILE_EFFECT)) return ea.intl.format(ea.t["v/7apu"], { count: l });
                if (e.has(tR.q.PROFILE_FRAME)) return ea.intl.format(ea.t.eu4eRy, { count: l });
                if (e.has(tR.q.BUNDLE)) return ea.intl.format(ea.t.fZ1rdk, { count: l });
            }
            return 0 === e.size && n && !s
                ? ea.intl.format(ea.t.TxoTTj, { count: l })
                : 0 === e.size && s && !n
                  ? ea.intl.format(ea.t.TLso50, { count: l })
                  : ea.intl.format(ea.t["/rPvmQ"], { count: l });
        }, [e, l, i, t, a, n, s]);
    return (0, o.jsx)(ec.D, { variant: "heading-lg/semibold", children: r() });
}
var tk = n(172218),
    ty = n(932793),
    tM = n(511265),
    tP = n(206077),
    tD = n(100057),
    tB = n(828515),
    tH = n(484469),
    tw = n(346448),
    tF = n(195261),
    tG = n(132866);
let tU = function () {
    return (0, o.jsx)("div", {
        className: tG.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: tF.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(tw.sW, tG.s) }),
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
let tW = null;
var tY = n(758836);
function t$(e) {
    let { category: t } = e,
        n = (0, g.bG)([_.default], () => _.default.getCurrentUser()),
        s = (0, tP.X)(t.products),
        l = (0, tM.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, o.jsx)("div", {
              className: tF.vY,
              children: l.map((e, t) =>
                  (0, o.jsx)(
                      N.R9,
                      { newValue: { tilePosition: t }, children: (0, o.jsx)(tz.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tq(e) {
    let { category: t } = e,
        [n, s] = c.useState(!1),
        l = (0, tk.K)(function (e) {
            s(e);
        }, 0.15),
        a = (0, y.W6)(),
        i = (0, tE.a)("CollectiblesCatalogContent"),
        r = (0, N.uM)(),
        d = c.useCallback(() => {
            tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: tY.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (tW = t.skuId),
                a.push(e3.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, a]);
    return (0, o.jsxs)("div", {
        className: tF.EF,
        ref: l,
        children: [(0, o.jsx)(tB.A, { category: t, onSelect: i ? d : void 0 }), (0, o.jsx)(t$, { category: t })],
    });
}
function tZ(e) {
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
        let t = Math.floor(e / tY.l5) + 1;
        t !== s && l(t), (h.current = a);
    }, [a, g, l, s]);
    let x = c.useMemo(() => {
        let e = (s - 1) * tY.l5;
        return g.slice(e, e + tY.l5);
    }, [g, s]);
    return (c.useEffect(() => {
        (0, tD.z)({
            sessionId: d,
            checkpoint: tD.t.SHOP_MOUNTED,
            tab: tY.G2.CATALOG,
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
                tab: tY.G2.CATALOG,
                unpublishedCategoriesShown: m,
                cacheDisabled: u,
            });
    }, [d, m, u, r, x.length]),
    r)
        ? (0, o.jsx)(tU, {})
        : (0, o.jsxs)("div", {
              className: tF.LZ,
              children: [
                  x.map((e, t) =>
                      (0, o.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": ea.intl.formatToPlainString(ea.t.FNtLb3, { category: e.name }),
                              children: (0, o.jsx)(N.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, o.jsx)(tq, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: tF.Ej,
                      children: (0, o.jsx)(ty.m, {
                          currentPage: s,
                          totalCount: g.length,
                          pageSize: tY.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var tX = n(177366),
    tQ = n(401864),
    tJ = n(124987),
    t0 = n(691885),
    t1 = n(146919),
    t4 = n(858733);
let t2 = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, k.v)(),
        s = (0, N.uM)(),
        l = (0, t1.yB)("CollectiblesSortSelect"),
        a = n(),
        i = c.useMemo(() => tY.QB.filter((e) => e.sortType !== tJ.$.RELEVANCE || a), [a]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tJ.$.RECENCY
                ? { label: ea.intl.string(ea.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tJ.$.PRICE
                  ? n === tQ.A.ASC
                      ? { label: ea.intl.string(ea.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: ea.intl.string(ea.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tJ.$.RELEVANCE
                    ? { label: ea.intl.string(ea.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: ea.intl.string(ea.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
            (e) =>
                ({
                    recent: { sortType: tJ.$.RECENCY, sortDirection: tQ.A.DESC },
                    "price-asc": { sortType: tJ.$.PRICE, sortDirection: tQ.A.ASC },
                    "price-desc": { sortType: tJ.$.PRICE, sortDirection: tQ.A.DESC },
                    popularity: { sortType: tJ.$.POPULARITY, sortDirection: tQ.A.DESC },
                    relevance: { sortType: tJ.$.RELEVANCE, sortDirection: tQ.A.DESC },
                })[e],
            [],
        ),
        m = c.useCallback(
            (e) => {
                let n = r(d(e));
                tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: u()(t4.k, { [t1.jP]: l }),
        children: (0, o.jsx)(t0.l, {
            label: ea.intl.string(ea.t.uaX705),
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
    t3 =
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
    t8 = n(150934),
    t9 = n(508770),
    t6 = n(278416),
    t7 = n(602853),
    ne = n(661531),
    nt = n(947641),
    nn = n(604338),
    ns = n(785866),
    nl = n(373846),
    na = n(308323),
    ni = n(608599),
    nr = n(685761),
    no = n(157225),
    nc = n(413249),
    nd = n(510241),
    nu = n(601198),
    nm = n(7250),
    ng = n(623655),
    nh = n(13875),
    nx = n(967339);
function nf() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            onToggleOfferEligible: l,
            offerEligible: a,
            reset: i,
            hasFilters: r,
        } = (0, k.v)(),
        d = (0, ng.z)("FilterBar"),
        m = r(),
        g = (0, nh.sk)("FilterBar"),
        h = (0, N.uM)(),
        x = c.useRef(null),
        f = (0, tO.A)(),
        E = c.useMemo(() => tY._6.filter((e) => g || e !== tR.q.PROFILE_FRAME), [g]),
        p = c.useCallback(
            (e) => {
                tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: nx.kT,
        children: [
            (0, o.jsxs)("div", {
                className: u()(nx.KZ, nx.YG),
                children: [
                    (0, o.jsx)("div", {
                        ref: x,
                        tabIndex: -1,
                        children: (0, o.jsx)(Q.E, {
                            variant: "text-md/semibold",
                            className: nx.hr,
                            children: ea.intl.string(ea.t.Qk6r1a),
                        }),
                    }),
                    null != f &&
                        (0, o.jsxs)("div", {
                            className: nx.Ym,
                            children: [
                                (0, o.jsx)(t8.S, {
                                    checked: a,
                                    onChange: () => {
                                        p(`filter offer eligible ${!1 === a ? "on" : "off"}`), l();
                                    },
                                    label: ea.intl.string(ea.t.hY8Ft1),
                                }),
                                (0, o.jsx)(t9.E, { type: { text: ea.intl.string(ea.t["nb5PC/"]) }, icon: t6.g }),
                            ],
                        }),
                    E.map((e) => (0, o.jsx)(nE, { filter: e, trackFilterAction: p }, e)),
                    (0, o.jsx)(t8.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: ea.intl.string(ea.t.AHHHgG),
                    }),
                    d && (0, o.jsx)(t8.S, { checked: s, onChange: v, label: ea.intl.string(ea.t["+W8gb+"]) }),
                ],
            }),
            (0, o.jsx)(np, { trackFilterAction: p }),
            (0, o.jsx)(nC, { trackFilterAction: p }),
            m &&
                (0, o.jsx)(J.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), i(), requestAnimationFrame(() => x.current?.focus());
                    },
                    text: ea.intl.string(ea.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function nE(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [tR.q.AVATAR_DECORATION]: ea.intl.string(ea.t.dRZYNE),
            [tR.q.PROFILE_EFFECT]: ea.intl.string(ea.t["1cNjtx"]),
            [tR.q.NAMEPLATE]: ea.intl.string(ea.t.V68Fqz),
            [tR.q.PROFILE_FRAME]: ea.intl.string(ea.t.ecTJkR),
            [tR.q.BUNDLE]: ea.intl.string(ea.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: a } = (0, k.v)(),
        i = (0, o.jsx)(t8.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), a(t);
            },
            label: s[t] ?? "",
        });
    return t === tR.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: nx.Ym, children: [i, (0, o.jsx)(t9.E, { type: "new" })] })
        : i;
}
function np(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: ea.intl.string(ea.t.kqUD4P), enum: t5.PURPLE },
                { color: "#3498DB", label: ea.intl.string(ea.t.qQTRae), enum: t5.BLUE },
                { color: "#2ECC71", label: ea.intl.string(ea.t["f/Ylk6"]), enum: t5.GREEN },
                { color: "#A0522D", label: ea.intl.string(ea.t["Sd/BMa"]), enum: t5.BROWN },
                { color: "#F1C40F", label: ea.intl.string(ea.t["0fevYz"]), enum: t5.YELLOW },
            ],
            [],
        ),
        s = c.useMemo(
            () => [
                { color: "#E67E22", label: ea.intl.string(ea.t.ZE7weD), enum: t5.ORANGE },
                { color: "#E74C3C", label: ea.intl.string(ea.t.hKJGOM), enum: t5.RED },
                { color: "#EC407A", label: ea.intl.string(ea.t.HvLEGM), enum: t5.PINK },
                { color: "#FFFFFF", label: ea.intl.string(ea.t["CB+lNO"]), enum: t5.WHITE },
                { color: "#262626", label: ea.intl.string(ea.t["dMey+v"]), enum: t5.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: nx.KZ,
        children: [
            (0, o.jsx)(Q.E, { variant: "text-md/semibold", className: nx.hr, children: ea.intl.string(ea.t.K1xGoG) }),
            (0, o.jsx)(nv, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(nv, { colors: s, trackFilterAction: t }),
        ],
    });
}
function nv(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, k.v)();
    return (0, o.jsx)("div", {
        className: nx.OW,
        children: t.map((e) => {
            let { color: t, label: a, enum: i } = e;
            return (0, o.jsx)(
                nj,
                { color: t, label: a, enum: i, isToggled: s.has(i), onToggleColor: l, trackFilterAction: n },
                i,
            );
        }),
    });
}
function nj(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: a, trackFilterAction: i } = e,
        r = (0, t7.r)(ne.A.unsafe_rawColors.WHITE).hex(),
        c = (0, t7.r)(ne.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, o.jsx)(
        eG.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, o.jsx)(
                ew.D,
                {
                    className: u()(nx.n1, { [nx.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        i(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), a(s);
                    },
                    children:
                        l &&
                        (0, o.jsx)("div", {
                            className: nx.oE,
                            children: (0, o.jsx)(nt.r, {
                                size: "xs",
                                color: (0, nm.j)({ backgroundColor: t, colors: [r, c] }),
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
        { themeFilters: n, onToggleTheme: s } = (0, k.v)(),
        l = (0, ed.Ay)() === es.NJ.DARK,
        a = c.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        i = c.useCallback((e) => (n.has(e) || l ? ne.A.colors.WHITE : ne.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        r = c.useMemo(
            () => [
                {
                    name: ea.intl.string(ea.t.aVBOKh),
                    icon: (0, o.jsx)(nn.E, { size: "xs", color: i(t3.ANIME) }),
                    enum: t3.ANIME,
                },
                {
                    name: ea.intl.string(ea.t["3WoZBc"]),
                    icon: (0, o.jsx)(ns._, { size: "xs", color: i(t3.GAMING) }),
                    enum: t3.GAMING,
                },
                {
                    name: ea.intl.string(ea.t.yuEmLj),
                    icon: (0, o.jsx)(nl.C, { size: "xs", color: i(t3.CUTE_COZY) }),
                    enum: t3.CUTE_COZY,
                },
                {
                    name: ea.intl.string(ea.t.mMvCHo),
                    icon: (0, o.jsx)(na.L, { size: "xs", color: i(t3.SCI_FI) }),
                    enum: t3.SCI_FI,
                },
                {
                    name: ea.intl.string(ea.t.TlhOQC),
                    icon: (0, o.jsx)(ni.L, { size: "xs", color: i(t3.FOOD_DRINKS) }),
                    enum: t3.FOOD_DRINKS,
                },
                {
                    name: ea.intl.string(ea.t["4IaUIM"]),
                    icon: (0, o.jsx)(nr.f, { size: "xs", color: i(t3.FANTASY) }),
                    enum: t3.FANTASY,
                },
                {
                    name: ea.intl.string(ea.t["w0nSG/"]),
                    icon: (0, o.jsx)(no.N, { size: "xs", color: i(t3.ANIMALS_PETS) }),
                    enum: t3.ANIMALS_PETS,
                },
                {
                    name: ea.intl.string(ea.t.cJng7v),
                    icon: (0, o.jsx)(nc.p, { size: "xs", color: i(t3.NATURE) }),
                    enum: t3.NATURE,
                },
                {
                    name: ea.intl.string(ea.t["5mUvyM"]),
                    icon: (0, o.jsx)(nd.T, { size: "xs", color: i(t3.MOVIES_TV_SHOWS) }),
                    enum: t3.MOVIES_TV_SHOWS,
                },
                {
                    name: ea.intl.string(ea.t.MB9H5Z),
                    icon: (0, o.jsx)(nu.e, { size: "xs", color: i(t3.DARK_MOODY) }),
                    enum: t3.DARK_MOODY,
                },
            ],
            [i],
        );
    return (0, o.jsxs)("div", {
        className: nx.KZ,
        children: [
            (0, o.jsx)(Q.E, { variant: "text-md/semibold", className: nx.hr, children: ea.intl.string(ea.t.t1Ztrp) }),
            (0, o.jsx)("div", {
                className: nx.Ot,
                children: r.map((e) => {
                    let { name: l, icon: i, enum: r } = e;
                    return (0, o.jsxs)(
                        ew.D,
                        {
                            className: u()(nx.w4, { [nx.C7]: n.has(r) }),
                            "aria-label": l,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(r);
                            },
                            children: [i, (0, o.jsx)(Q.E, { color: a(r), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var nb = n(561769),
    nS = n(882443);
function n_() {
    return (0, o.jsxs)("div", {
        className: nS.k,
        children: [
            (0, o.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: ea.intl.string(ea.t.oezC3x),
                className: nS._,
            }),
            (0, o.jsx)(ec.D, { variant: "heading-xl/semibold", children: ea.intl.string(ea.t.oezC3x) }),
            (0, o.jsx)(Q.E, { variant: "text-md/medium", children: ea.intl.string(ea.t["Tc/Ndl"]) }),
        ],
    });
}
var nN = n(996824);
let nA = { flattenProductVariants: !0 };
function nI(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, N.uM)(),
        a = l?.sessionId ?? "",
        { noCache: i, includeUnpublished: r } = (0, tK.A)(),
        d = (0, g.bG)([_.default], () => _.default.getCurrentUser()),
        { skus: m, currentPage: h, totalCount: x, isFetchingResults: f } = (0, tp.S)(),
        E = (0, g.yK)([A.A], () => A.A.getProductsBySkus(m)),
        p = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        v = m?.join("");
    c.useEffect(() => {
        p();
    }, [v, p]);
    let j = (0, tM.p)(),
        C = c.useMemo(() => j(E), [j, E]);
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
    let b = c.useRef(null),
        { setQueryPageSize: S, setQueryPageOffset: I, queryPageSize: L } = (0, k.v)(),
        [O, R] = c.useState(!1),
        T = t || f || null == d;
    c.useEffect(() => {
        T ? R(!1) : C.length > 0 && R(!0);
    }, [T, C.length]);
    let y = L > 0 && !T && 0 === C.length;
    c.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == b.current || S(Math.floor(5 * getComputedStyle(b.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != b.current) return e.observe(b.current), () => e.disconnect();
    }, [S]);
    let M = c.useCallback(
        (e) => {
            tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, o.jsxs)(nb.v3.Provider, {
        value: nA,
        children: [
            (0, o.jsxs)("div", {
                className: u()({ [nN.oE]: y }),
                children: [
                    y && (0, o.jsx)(n_, {}),
                    (0, o.jsxs)("div", {
                        className: u()(nN.ZE, { [nN.Kp]: O }),
                        ref: b,
                        children: [
                            T && [...Array(L)].map((e, t) => (0, o.jsx)(tH.A, {}, t)),
                            !T &&
                                C.map((e, t) =>
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
                    className: nN.Ej,
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
var nL = n(328539);
function nO(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: a } = e,
        i = (0, tN.A)("shop_include_unpublished");
    !(function () {
        let e = (0, P.bG)([tL.A], () => "success" === tL.A.getFetchState(e3.FYj)),
            t = null != (0, tO.A)(),
            { offerEligible: n, clearFilters: s } = (0, k.v)();
        c.useEffect(() => {
            n && e && !t && s();
        }, [n, e, t, s]);
    })(),
        (0, k.S)(i);
    let r = c.useRef(null),
        { handleScroll: d } = t_(r, t),
        u = (0, th.U)("Shop Browse"),
        { setCategoryRef: m, handleScrollToCategory: g } = (0, tX.k0)(r.current),
        [h, x] = c.useState(l),
        [f, E] = c.useState(!1);
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
                E(window.innerWidth < 1400);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, o.jsx)("div", {
            className: nL.VM,
            children: (0, o.jsxs)("main", {
                className: nL.MY,
                children: [
                    (0, o.jsx)(H.Gt, {
                        className: nL.OW,
                        ref: r,
                        onScroll: d,
                        scrollbarGutter: "both-edges",
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: nL.en,
                                  children: (0, o.jsx)("div", {
                                      className: nL.pf,
                                      children: (0, o.jsx)(tA.Z_, { tenantId: e3.FYj, templateId: tI.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, o.jsx)(nR, {
                                  isSmallScreen: f,
                                  filterBarOpen: h,
                                  setFilterBarOpen: x,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: m,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !f && (0, o.jsx)("div", { className: nL.yF }),
                    h && !f && (0, o.jsx)(tv.Ip, { className: nL.kT, children: (0, o.jsx)(nf, {}) }),
                ],
            }),
        })
    );
}
function nR(e) {
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
        g = (0, k.v)((e) => e.hasDefaultFilters()),
        h = (0, N.uM)(),
        { handlePageChange: x, currentPage: f } = (function (e) {
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
        E = c.useCallback(
            (e) => {
                tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            className: nL.en,
            children: (0, o.jsxs)("div", {
                className: nL.pf,
                children: [
                    (0, o.jsxs)("div", {
                        className: nL.ne,
                        children: [
                            (0, o.jsx)("div", { className: nL.lQ, children: (0, o.jsx)(tT, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(nL.wR, { [nL.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: nL.Ul,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-md/semibold",
                                                children: ea.intl.string(ea.t.uaX705),
                                            }),
                                            (0, o.jsx)(t2, {}),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        ref: p,
                                        children: (0, o.jsx)(J.$, {
                                            onClick: function () {
                                                let e = !n;
                                                tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: ea.intl.string(n ? ea.t.fYtm6f : ea.t["TeTYE+"]),
                                            icon: tj.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, o.jsx)("div", {
                                    className: nL.Dh,
                                    ref: m,
                                    children: (0, o.jsx)(H.Ch, { className: nL.Qo, children: (0, o.jsx)(nf, {}) }),
                                }),
                        ],
                    }),
                    g
                        ? (0, o.jsx)(N.R9, {
                              newValue: { pageIndex: f },
                              children: (0, o.jsx)(tZ, {
                                  categories: i,
                                  setCategoryRef: r,
                                  currentPage: f,
                                  handlePageChange: E,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, o.jsx)(nI, { scrollerRef: a, tab: l }, l),
                ],
            }),
        })
    );
}
var nT = n(599062),
    nk = n(651162),
    ny = n(367727);
let nM = c.createContext(null);
function nP(e) {
    let { blockType: t, children: n } = e,
        s = c.useMemo(() => ({ blockType: t }), [t]);
    return (0, o.jsx)(nM.Provider, { value: s, children: n });
}
var nD = n(755172),
    nB = n(682577),
    nH = n(607399),
    nw = n(946015),
    nF = n(717421),
    nG = n(140735),
    nU = n(496431),
    nz = n(324145);
function nV(e) {
    let { endDate: t, size: n = "md", className: s, showSeconds: l = !1 } = e,
        { days: a, hours: i, minutes: r, seconds: c } = (0, nU.A)(t),
        d = (function (e, t, n, s, l) {
            function a(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let i = [a(e), a(t), a(n)];
            return l && i.push(a(s)), i.join(":");
        })(a, i, r, c, l);
    return (0, o.jsxs)("div", {
        className: u()(nz.kL, s),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, o.jsx)(
                              Q.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: nz.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, o.jsx)(
                              Q.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: nz.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, o.jsx)(nG.A, { children: ea.intl.format(ea.t.j6IyVe, { days: a, hours: i, minutes: r }) }),
        ],
    });
}
var nK = n(63776);
let nW = c.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, nF.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsxs)(nB.animated.div, {
        className: u()([nK.lP, nH.Fr && nK.yJ]),
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
            (0, o.jsxs)(nw.s, {
                direction: nw.s.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(Q.E, {
                        variant: "text-md/medium",
                        className: nK.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(Q.E, {
                            variant: "text-sm/medium",
                            className: nK.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, o.jsx)(nV, { endDate: t.endTime }),
        ],
    });
});
var nY = n(424918),
    n$ = n(993408),
    nq = n(196231),
    nZ = n(459550);
function nX(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, o.jsx)("div", {
        className: u()(nZ.n9, nZ.YB),
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
                              nq.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, n$.HF)(e.unpublishedAt) ? ea.intl.string(ea.t["h/uBCR"]) : void 0,
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
function nQ(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [s, l] = n;
    return (0, o.jsx)("div", {
        className: u()(nZ.n9, nZ.YB),
        children: (0, o.jsxs)(N.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != s ? s.name : l?.name,
                pageSection: "featured_block",
                tilePosition: +(null == s),
            },
            children: [
                null != s &&
                    (0, o.jsx)(nq.S, {
                        category: s,
                        enablePreview: !0,
                        badgeText: (0, n$.HF)(s.unpublishedAt) ? ea.intl.string(ea.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, o.jsx)(nq.S, {
                        category: l,
                        badgeText: (0, n$.HF)(l.unpublishedAt) ? ea.intl.string(ea.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let nJ = function (e) {
    let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
        { analyticsLocations: a } = (0, p.Ay)(ee.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, o.jsxs)("div", {
              className: u()(nZ.n9, nZ.YB),
              children: [
                  (0, o.jsx)("div", {
                      className: u()(nZ.Jn, nZ.oT),
                      children: (0, o.jsx)("div", { className: nZ.uy }),
                  }),
                  (0, o.jsx)("div", {
                      className: u()(nZ.Jn, nZ.oT),
                      children: (0, o.jsx)("div", { className: nZ.uy }),
                  }),
              ],
          })
        : null != l
          ? (0, o.jsx)(p.f5, {
                value: a,
                children: (0, o.jsx)(nX, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
            })
          : (0, o.jsx)(p.f5, {
                value: a,
                children: (0, o.jsx)(nQ, { categories: s, handleTransition: n, isLoading: !1 }),
            });
};
var n0 = n(531685),
    n1 = n(621466),
    n4 =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
n(667532);
var n2 = n(435558),
    n5 = n.n(n2),
    n3 =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    n8 = n(153488),
    n9 = n(313276),
    n6 = n(623373),
    n7 = n(885574),
    se = n(975807),
    st = n(975571),
    sn = n(938682);
let ss = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? ea.intl.string(ea.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: sn.L,
            children: [
                (0, o.jsx)(ec.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, o.jsx)(eG.m, {
                        text: ea.intl.string(ea.t["3taPdj"]),
                        position: "top",
                        "aria-label": ea.intl.string(ea.t["3taPdj"]),
                        children: (0, o.jsx)(ew.D, {
                            onClick: () => (0, se.A)(st.A.getArticleURL(e3.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: sn.s,
                            children: (0, o.jsx)(n7.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    sl = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: s,
                numVisibleItems: l,
                tab: a,
                buttonContainerClassName: i,
                orbsSupportedOnly: r,
            } = e,
            d = (0, P.bG)([_.default], () => _.default.getCurrentUser()),
            m = Y.Ay.canUseShopDiscounts(d),
            g = (0, nb.Mk)(a),
            h = (0, t1.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: f,
                sortedItems: E,
                sortOptions: v,
                shuffleProducts: j,
                showRecommendationOption: C,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: s } = e,
                    l = (0, P.bG)([n8.A], () => n8.A.hasConsented(e3.YAq.PERSONALIZATION)),
                    a = c.useMemo(() => t?.[n3.RECOMMENDED] ?? [], [t]),
                    i = c.useMemo(() => t?.[n3.POPULAR] ?? [], [t]),
                    r = a.length > 0 && l,
                    [o, d] = c.useState(r ? n3.RECOMMENDED : n3.POPULAR),
                    u = (0, P.bG)([A.A], () => A.A.productsWithVariantsAsGroup),
                    m = c.useMemo(() => (0, n$.CE)(u), [u]),
                    g = (0, n9.A)(),
                    h = (0, tM.p)(),
                    [x, f] = c.useState([]),
                    E = c.useCallback(() => {
                        d(n3.RANDOM), f(n5().shuffle(m));
                    }, [m]);
                c.useEffect(() => {
                    f(n5().shuffle(m));
                }, [m]);
                let p = c.useMemo(() => {
                    let e = [];
                    switch (o) {
                        case n3.RECENT:
                            e = m;
                            break;
                        case n3.PRICE_LOW_TO_HIGH:
                            e = (0, n$.bf)([...m], n, s);
                            break;
                        case n3.RECOMMENDED:
                            e = g(a);
                            break;
                        case n3.POPULAR:
                            e = g(i);
                            break;
                        case n3.RANDOM:
                            e = x;
                    }
                    return s ? (0, n6.ex)(h(e)) : h(e);
                }, [o, s, h, n, m, g, a, i, x]);
                return {
                    sortType: o,
                    setSortType: d,
                    sortedItems: (0, tP.X)(p),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: n3.POPULAR, label: ea.intl.string(ea.t.Y68e5p) },
                            { value: n3.RECENT, label: ea.intl.string(ea.t["51Bhiz"]) },
                            { value: n3.PRICE_LOW_TO_HIGH, label: ea.intl.string(ea.t.m8RVU2) },
                        ];
                        return r && e.unshift({ value: n3.RECOMMENDED, label: ea.intl.string(ea.t.zPWgFG) }), e;
                    }, [r]),
                    showRecommendationOption: r,
                    shuffleProducts: E,
                };
            })({ sortedSkuIds: s, hasShopDiscount: m, orbsSupportedOnly: r }),
            b = (0, P.bG)([D.Ay], () => D.Ay.useReducedMotion),
            S = (0, P.bG)([n0.A], () => n0.A.isFocused()),
            I = !b && S,
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
                                    (0, n1.vq)(e, HTMLButtonElement) ||
                                    (0, n1.vq)(e, HTMLAnchorElement) ||
                                    (0, n1.vq)(e, HTMLInputElement) ||
                                    (0, n1.vq)(e, HTMLSelectElement) ||
                                    (0, n1.vq)(e, HTMLTextAreaElement)
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
            R = (0, N.uM)(),
            T = R?.sessionId ?? "",
            { analyticsLocations: k } = (0, p.Ay)(ee.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            y = c.useRef(null),
            M = c.useRef(null),
            [B, H] = c.useState(!1),
            w = c.useCallback(
                (e) => {
                    H(!1),
                        O({ isShuffling: !1, onOutroComplete: () => f(e), returnRef: M }),
                        tb.default.track(e3.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: T,
                            sort_type: e,
                        });
                },
                [O, f, T],
            );
        return null == d
            ? null
            : (0, o.jsx)(p.f5, {
                  value: k,
                  children: (0, o.jsxs)("div", {
                      className: u()(nZ.lD, nZ.YB),
                      children: [
                          (0, o.jsxs)("div", {
                              className: nZ.$6,
                              children: [
                                  (0, o.jsx)(ss, { label: n, personalizedResults: C }),
                                  (0, o.jsxs)("div", {
                                      className: u()(nZ.IE, { [t1.jP]: h }),
                                      children: [
                                          (0, o.jsxs)("div", {
                                              className: nZ.gd,
                                              children: [
                                                  (0, o.jsx)(Q.E, {
                                                      variant: "text-md/medium",
                                                      children: ea.intl.string(ea.t.uaX705),
                                                  }),
                                                  (0, o.jsx)("div", {
                                                      className: u()(i, nZ.pI),
                                                      ref: M,
                                                      children: (0, o.jsx)(t0.l, {
                                                          label: ea.intl.string(ea.t.uaX705),
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
                                              children: (0, o.jsx)(J.$, {
                                                  variant: "secondary",
                                                  text: ea.intl.string(ea.t.X3tnc4),
                                                  buttonRef: y,
                                                  onClick: function () {
                                                      H(!0),
                                                          O({ isShuffling: !0, onOutroComplete: j, returnRef: y }),
                                                          tb.default.track(
                                                              e3.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: T },
                                                          );
                                                  },
                                                  disabled: L !== n4.MOUNTED && L !== n4.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(nG.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: B && L === n4.FINISHED ? ea.intl.string(ea.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: nZ.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(tH.A, {}, t + 1)),
                                    })
                                  : E.slice(0, l).map((e, t) => {
                                        let n,
                                            s = A.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (I)
                                            if (L === n4.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: nZ.Z2,
                                                        children: (0, o.jsx)(tH.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                L === n4.SORT_OUT
                                                    ? (n = nZ.MW)
                                                    : L === n4.SHUFFLE_IN
                                                      ? (n = nZ.aS)
                                                      : L === n4.SORT_IN && (n = nZ.F7);
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
var sa = n(269115),
    si = n(789645),
    sr = n(976860),
    so = n(48093);
let sc = "GAME_SERVER_HOSTING_BANNER";
function sd(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        s = (0, N.uM)(),
        l = c.useRef(null),
        a = c.useRef(!1),
        i = c.useRef(null),
        [r, d] = c.useState(!1),
        m = c.useCallback(
            (e) => {
                tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_type: n,
                    page_category: s?.pageCategory,
                    page_section: s?.pageSection,
                    tile_type: sc,
                    cta_name: e,
                });
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        ),
        g = c.useCallback(
            (e) => {
                e?.stopPropagation(),
                    m("go_to_game_server_hosting"),
                    (0, sr.pX)(e3.BVt.COLLECTIBLES_SHOP_WITH_TAB(tY.G2.GAME_SERVERS));
            },
            [m],
        ),
        h = c.useCallback(
            (e) => {
                e?.stopPropagation(),
                    m("dismiss"),
                    d(!0),
                    !0 === t.isDismissible &&
                        (0, ny.d6)(eH.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: e9.i.USER_DISMISS,
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
                                  tb.default.track(e3.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: s?.sessionId,
                                      page_type: n,
                                      page_category: s?.pageCategory,
                                      page_section: s?.pageSection,
                                      type: sc,
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
        : (0, o.jsx)(Z.N, {
              theme: es.NJ.DARKER,
              children: (e) =>
                  (0, o.jsx)(sa.L, {
                      innerRef: l,
                      onChange: x,
                      threshold: 0,
                      children: (0, o.jsx)("div", {
                          ref: l,
                          className: u()(so.YB, e),
                          children: (0, o.jsxs)(eh.s, {
                              className: so.kL,
                              onClick: g,
                              "aria-label": ea.intl.string(el.default["34GMP9"]),
                              children: [
                                  (0, o.jsx)("img", {
                                      className: so.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, o.jsx)("div", { className: so.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, o.jsx)("div", {
                                          className: so.b,
                                          children: (0, o.jsx)(ey.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: si.P,
                                              onClick: h,
                                              "aria-label": ea.intl.string(ea.t.WAI6xu),
                                          }),
                                      }),
                                  (0, o.jsx)("div", {
                                      className: so.jE,
                                      children: (0, o.jsxs)("div", {
                                          className: so.rF,
                                          children: [
                                              (0, o.jsxs)("div", {
                                                  className: so.Z,
                                                  children: [
                                                      (0, o.jsx)(ec.D, {
                                                          className: so.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: ea.intl.string(el.default["34GMP9"]),
                                                      }),
                                                      (0, o.jsx)(Q.E, {
                                                          className: so.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: ea.intl.string(el.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, o.jsx)(J.$, {
                                                  variant: "overlay-primary",
                                                  text: ea.intl.string(ea.t.jVcuVY),
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
var su = n(337183),
    sm = n(212407),
    sg = n(815280),
    sh = n(10675);
let sx = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, tk.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: a } = (0, sm.qY)(t),
        i = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: s,
        className: sh.BX,
        children: [
            (0, o.jsx)("div", {
                className: sh.vK,
                children: null != l && (0, o.jsx)(sg.A, { bannerStatic: l, bannerAnimated: a }),
            }),
            (0, o.jsx)("div", {
                className: sh.HQ,
                children: (0, o.jsxs)("div", {
                    className: sh.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(nV, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(ec.D, {
                            variant: "heading-xxl/bold",
                            className: sh.DD,
                            color: "text-strong",
                            style: { ...i },
                            children: t.title,
                        }),
                        r || c
                            ? (0, o.jsxs)(Q.E, {
                                  variant: "text-md/medium",
                                  style: { ...i },
                                  children: [
                                      r && t.body,
                                      r && c && " ",
                                      c &&
                                          (0, o.jsx)(eL.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: sh.CU,
                                              style: { ...i },
                                              children: ea.intl.string(ea.t.O7ADgv),
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
var sf = n(449543),
    sE = n(189213),
    sp = n(290136),
    sv = n(478016),
    sj = n(825484),
    sC = n(812993),
    sb = n(914410),
    sS = n(839534),
    s_ = n(597783),
    sN = n(61750);
function sA(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, P.bG)([tf.A], () => tf.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var sI = n(162945),
    sL = n(858708);
let sO = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, s_.Z)(n),
            l = c.useRef(null),
            { isHoveringOrFocusing: a } = (0, ef.A)(l),
            { readyToClaim: i, collectibleProductSkuIds: r, collectedSkuIds: d } = sA(t, n),
            m = (0, P.bG)([tf.A], () => tf.A.isClaiming === n);
        return (0, o.jsx)(sa.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, o.jsx)("div", {
                ref: l,
                className: u()(sI.ty, sL.Q3, { [sI.yo]: a }),
                "aria-label": ea.intl.formatToPlainString(ea.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: sI.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: sL.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: sI.N1,
                            children: (0, o.jsx)(sC.Lp, {
                                text: ea.intl.string(ea.t.rykAJ9),
                                disableColor: !0,
                                className: sL.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: sI.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: sL.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: sL.cs,
                                            children: [
                                                (0, o.jsx)(ec.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: sI.tZ,
                                                    children: ea.intl.string(ea.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(eG.m, {
                                                    text: i
                                                        ? ea.intl.string(ea.t.cKH3tk)
                                                        : ea.intl.formatToPlainString(ea.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: sL.ZB,
                                                        children: (0, o.jsx)(sp.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: sI.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: sL.L$,
                                                children: [
                                                    (0, o.jsx)(sb.Ay, {
                                                        variant: sb.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(sL.__, { [sL.gF]: i }),
                                                        children: [
                                                            i
                                                                ? (0, o.jsx)(sv.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, o.jsx)(Q.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: ea.intl.formatToPlainString(ea.t["5TwASM"], {
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
                                    className: sI.Vs,
                                    children: (0, o.jsx)(sj.e, {
                                        wrap: !1,
                                        className: sI.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)(J.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    i &&
                                                        (0, sS.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = A.A.getProduct(n);
                                                                null != e &&
                                                                    (0, sN.A)({
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
                                                                            title: ea.intl.string(ea.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: ea.intl.string(ea.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, o.jsx)("div", {
                                                                                children: ea.intl.string(
                                                                                    ea.t["0YpIF/"],
                                                                                ),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: ea.intl.string(ea.t.VnVTNc),
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
    sR = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: a, tab: i } = e,
            r = (0, nb.Mk)(i),
            d = c.useMemo(() => A.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            u = (0, P.bG)([tf.A], () => tf.A.getPurchase(a.rewardSkuId)),
            { products: m } =
                ((t = (0, n9.A)()),
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
            { readyToClaim: x } = sA(d, a.rewardSkuId),
            f = null == u && null != a.rewardSkuId && null != d;
        return (0, o.jsx)(sf.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(tH.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          f &&
                              x &&
                              (0, o.jsx)(
                                  N.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(sO, { category: d, rewardSkuId: a.rewardSkuId }),
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
(0, n$.$b)(90);
let sT = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: nk.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    sk = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            a = (0, tk.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            i = (0, P.bG)([_.default], () => _.default.getCurrentUser()),
            { analyticsLocations: r } = (0, p.Ay)(ee.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: m,
                heroBannerStatic: g,
                heroBannerAnimated: h,
            } = (0, sm.Kk)(n),
            x = c?.responsive ?? !1,
            f = c?.backgroundStyle;
        return null != i && (t || n !== sT)
            ? (0, o.jsx)(p.f5, {
                  value: r,
                  children: (0, o.jsxs)("div", {
                      ref: a,
                      className: nZ.os,
                      children: [
                          (0, o.jsx)("div", {
                              className: u()(nZ.vK, { [nZ.no]: x }),
                              style: null != f ? { background: f } : void 0,
                              children:
                                  null != g &&
                                  (0, o.jsx)(sg.A, { bannerStatic: g, bannerAnimated: h, isResponsive: x }),
                          }),
                          (0, o.jsxs)("div", {
                              className: nZ.xX,
                              children: [
                                  (0, o.jsx)("div", {
                                      className: u()(nZ.bC, { [nZ.no]: x }),
                                      children: t
                                          ? (0, o.jsx)("div", { className: nZ.Hw })
                                          : (0, o.jsx)("div", {
                                                className: nZ.Hw,
                                                children: (0, o.jsxs)("div", {
                                                    className: nZ.Wq,
                                                    children: [
                                                        null != m &&
                                                            (0, o.jsx)("img", {
                                                                className: nZ.rm,
                                                                src: m,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, o.jsx)(ec.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: nZ.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, o.jsx)(Q.E, {
                                                                variant: "text-md/normal",
                                                                className: nZ.Tm,
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
                                  (0, o.jsx)(sR, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var sy = n(222884);
let sM = function (e) {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, P.bG)([_.default], () => _.default.getCurrentUser()),
        a = (0, nb.Mk)(s),
        i = (0, P.bG)([A.A], () => (null != t.categorySkuId ? A.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, n9.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        m = (0, tP.X)(d),
        { analyticsLocations: g } = (0, p.Ay)(ee.A.COLLECTIBLES_SHOP_SHELF),
        h = c.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: i?.isOrbsExclusive === !0 && s !== tY.G2.ORBS,
            });
        }, [t.categorySkuId, i, n, s]);
    if (null == l || 0 === m.length) return null;
    let x = t.buttonText ?? ea.intl.formatToPlainString(ea.t.bc9RBE, { category_name: t.name }),
        f = t.showButton,
        E = t.desktopBackgroundImage,
        v = null != E;
    return (0, o.jsx)(p.f5, {
        value: g,
        children: (0, o.jsxs)("div", {
            className: u()(sy.mu, nZ.YB, v ? sy.VA : sy.Ti),
            children: [
                v && (0, o.jsx)("img", { className: sy.iL, src: E, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: sy.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: sy.wx,
                            children: [
                                (0, o.jsx)(ec.D, {
                                    variant: "heading-lg/semibold",
                                    style: v ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                f &&
                                    (0, o.jsx)(J.$, {
                                        variant: v ? "overlay-primary" : "secondary",
                                        text: x,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, o.jsx)(sf.A, {
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
var sP = n(465794),
    sD = n(69236),
    sB = n(44724),
    sH = n(421108),
    sw = n(873297);
let sF = function (e) {
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
        m = (0, sH.ur)(r) ?? void 0,
        g = (0, sD.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || g
                    ? {
                          kind: "button",
                          text: ea.intl.string(ea.t.apFNLU),
                          onClick: () => (0, sB.default)({ applicationId: t }),
                          onMouseDown: () => (0, sB.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(sP.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: en.pe.TIER_2,
                              buttonTextOverride: ea.intl.string(ea.t.pj0XBN),
                          }),
                      },
            [d, t, g],
        );
    return (0, o.jsx)(sw.A, {
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
    sU = n(770178),
    sz = n(929283),
    sV = n(273411);
let sK = [
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
function sW(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        a = A.A.getProduct(t.skuId),
        i = a?.items[0],
        r = a?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: sV.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != i && r === sG.R.AVATAR_DECORATION && (0, o.jsx)(sz.i, { item: i }),
    });
}
let sY = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, a] = c.useState(!1),
            [i, r] = c.useState([]),
            [d] = c.useState(() =>
                [...sK]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${tY.H1 - 200 * Math.random()}ms`,
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
                n && setTimeout(() => a(!0), tY.H1);
            }, [n]),
            (0, o.jsx)("div", {
                className: u()(sV.rA, { [sV.Kb]: t, [sV.pp]: l }),
                children: i.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, o.jsx)(sW, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    s$ = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = c.useRef(null),
            [l, a] = c.useState(0),
            i = c.useCallback(() => {
                null != s.current && a(s.current.offsetWidth);
            }, []);
        return (
            (0, sU.g)(s, i),
            (0, o.jsx)("div", {
                ref: s,
                className: sV.eL,
                children: (0, o.jsx)(sY, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var sq = n(815021);
let sZ = function (e) {
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
            { handleCardVisibilityChange: h } = (0, s_.Z)(g, "home", "marketing wide banner"),
            x = (0, N.uM)(),
            { bannerURL: f } = (0, sm.w$)(t),
            E = n === tY.G2.ORBS,
            p = null != t.ctaRoute && "" !== t.ctaRoute,
            v = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
            j = null != t.logoURL && "" !== t.logoURL,
            C = c.useCallback(() => {
                if ((m(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, ny.$l)(eH.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: e9.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            b = c.useCallback(
                (e) => {
                    tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            S = c.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((b(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, sB.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, sr.pX)(e);
                    }
                },
                [t.ctaRoute, b],
            );
        if (null == f || d) return null;
        let _ = u()(nZ.nM, nZ.Tq, nZ.TS, nZ.YB, { [nZ._1]: E, [nZ.vb]: p }),
            I = (0, o.jsxs)(o.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, o.jsx)("div", {
                            className: nZ.Mh,
                            children: (0, o.jsx)(sq.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), C();
                                },
                                "aria-label": ea.intl.string(ea.t.WAI6xu),
                            }),
                        }),
                    (0, o.jsx)("div", {
                        className: u()(nZ.zK, { [nZ._1]: E }),
                        style: null != i ? { height: `${i}px` } : void 0,
                        children: (0, o.jsx)("img", {
                            ref: a,
                            src: f,
                            alt: t.title,
                            className: u()(nZ.LN, { [nZ.d5]: E }),
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: u()(nZ.Ep, { [nZ.Qq]: v }),
                        style: { maxHeight: null != i ? `${i}px` : "auto" },
                        children: (0, o.jsxs)("div", {
                            className: nZ.E8,
                            children: [
                                (0, o.jsx)(ec.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: E ? nZ.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, o.jsx)(Q.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: E ? "text-md/medium" : "text-sm/medium",
                                    children: E
                                        ? ea.intl.format(ea.t.SFFP7K, {
                                              helpdeskArticle: st.A.getArticleURL(e3.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                v &&
                                    (0, o.jsxs)("div", {
                                        className: nZ.nP,
                                        children: [
                                            (0, o.jsx)(J.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), S(t.ctaText ?? ea.intl.string(ea.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? ea.intl.string(ea.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? ea.intl.formatToPlainString(ea.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            j && (0, o.jsx)("img", { src: t.logoURL, alt: "", className: nZ.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, o.jsx)(Z.N, {
            theme: E ? void 0 : es.NJ.DARK,
            children: (e) =>
                (0, o.jsx)(sa.L, {
                    innerRef: l,
                    onChange: h,
                    threshold: 0,
                    children: p
                        ? (0, o.jsx)(ew.D, { innerRef: l, onClick: () => S(null), className: u()(e, _), children: I })
                        : (0, o.jsx)("div", { ref: l, className: u()(e, _), children: I }),
                }),
        });
    },
    sX = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: a, includeUnpublished: i } = (0, tK.A)(),
            [r, d] = c.useState(!1),
            m = (0, N.uM)(),
            g = m?.sessionId ?? "",
            h = (0, B.H)({ location: "collectibles_shop_feed" });
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
                fetchShopHomeError: f,
                shopBlocks: E,
                refreshShopHome: p,
            } = (0, nD.y)(l, { noCache: a, includeUnpublished: i, logPerf: !0 }, { sessionId: g, tab: l }),
            v = c.useCallback(() => {
                p();
            }, [p]);
        return (c.useEffect(() => {
            null != f ||
                x ||
                0 === E.length ||
                (0, tD.z)({
                    sessionId: g,
                    checkpoint: tD.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: a,
                });
        }, [f, x, E.length, i, a, g, l]),
        null != f)
            ? (0, o.jsx)(nT.h, { onRetry: v, errorOrigin: nT.A.SHOP_PAGE, errorMessage: f.message })
            : x || 0 === E.length
              ? (0, o.jsxs)("div", {
                    className: u()(nZ.g4, nZ.Of),
                    children: [
                        (0, o.jsx)(su.A, { isLoading: x, handleTransition: t, tab: l }),
                        (0, o.jsx)(nJ, { isLoading: x, handleTransition: t, categories: [] }),
                        (0, o.jsx)(sl, {
                            isLoading: x,
                            title: l === tY.G2.ORBS ? ea.intl.string(ea.t.dFgeuZ) : ea.intl.string(ea.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, o.jsx)(o.Fragment, {
                    children: E.map((e, a) =>
                        (function (e, a, i) {
                            if (null == e) return null;
                            let c = null,
                                m = !1;
                            switch (e.type) {
                                case nk.g.HERO:
                                    c = (0, o.jsx)(
                                        su.A,
                                        { isLoading: x, handleTransition: t, heroBlock: e, tab: l },
                                        i,
                                    );
                                    break;
                                case nk.g.FEATURED:
                                    c = (0, o.jsx)(
                                        nJ,
                                        { isLoading: x, handleTransition: t, featuredBlockRecord: e },
                                        i,
                                    );
                                    break;
                                case nk.g.FEED:
                                    let g = e.sortedSkuIds;
                                    c = (0, o.jsx)(
                                        sl,
                                        {
                                            title:
                                                l === tY.G2.ORBS
                                                    ? ea.intl.string(ea.t.dFgeuZ)
                                                    : ea.intl.string(ea.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: g,
                                            buttonContainerClassName: a?.type === nk.g.IMMERSIVE_BANNER ? nZ.w : void 0,
                                            tab: l,
                                            orbsSupportedOnly: l === tY.G2.ORBS,
                                        },
                                        i,
                                    );
                                    break;
                                case nk.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, ny.En)(eH.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, o.jsx)(sZ, { wideBannerBlock: e, tab: l }, i);
                                    break;
                                case nk.g.SHELF:
                                    c = (0, o.jsx)(sM, { handleTransition: t, shelf: e, tab: l }, i);
                                    break;
                                case nk.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(nW, { countdownTimerBlock: e, isVisible: r }, i)), (m = !0);
                                    break;
                                case nk.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        sx,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        i,
                                    );
                                    break;
                                case nk.g.REWARD_HERO:
                                    c = (0, o.jsx)(sk, { isLoading: x, handleTransition: t, heroBlock: e, tab: l }, i);
                                    break;
                                case nk.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, ny.En)(eH.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, o.jsx)(
                                        nP,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(sd, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        i,
                                    );
                                case nk.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        nP,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(sF, {
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
                                nP,
                                {
                                    blockType: e.type,
                                    children: (0, o.jsx)("div", {
                                        className: u()(nZ.v1, nZ.Of, { [nZ.J1]: 0 === i || m }),
                                        children: c,
                                    }),
                                },
                                i,
                            );
                        })(e, a > 0 ? E[a - 1] : null, a),
                    ),
                });
    },
    sQ = function (e) {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = c.useRef(null),
            { handleScroll: a } = t_(l, n),
            i = (0, tV.U)(),
            r = (0, N.uM)(),
            [d, u] = c.useState(tY.md),
            [m, g] = c.useState(!1);
        return (
            c.useEffect(() => {
                if (null != l.current) {
                    function e() {
                        if (null == l.current) return;
                        let e = l.current.getDistanceFromBottom();
                        d >= 36 ? g(e < 20) : e <= 200 && u((e) => e + tY.md);
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
            (0, o.jsx)(H.Ch, {
                className: nZ.OW,
                ref: l,
                onScroll: a,
                children: (0, o.jsxs)("div", {
                    className: nZ.bx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nZ.rb,
                            children: [
                                (0, o.jsx)(sX, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: i,
                                    tab: n,
                                }),
                                n !== tY.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, o.jsxs)("div", {
                                        className: nZ.R$,
                                        children: [
                                            (0, o.jsx)(ec.D, {
                                                variant: "heading-md/semibold",
                                                children: ea.intl.string(ea.t.Yr70c4),
                                            }),
                                            (0, o.jsx)(J.$, {
                                                variant: "primary",
                                                text: ea.intl.string(ea.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === tY.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, o.jsx)(s$, { peaking: m, transitioning: s === tY.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var sJ = n(154323),
    s0 = n(295811),
    s1 = n(870216);
let s4 = { "Any:personalization-header": ss },
    s2 = { [tI.b.SHOP_HOME]: s4 },
    s5 = { "1465939725649973269": s4, "1478495181551440044": s4 },
    s3 = function () {
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
    s8 = { prioritizedCurrency: nb.Hi.ORBS };
function s9(e) {
    let { tab: t } = e,
        [n, s, l] = (0, P.yK)([s1.A], () => [s1.A.getLayout(t), s1.A.isFetchingLayout(t), s1.A.getLayoutFetchError(t)]),
        a = (0, P.bG)([sJ.A], () => sJ.A.get("shop_include_unpublished")),
        i = (0, P.bG)([A.A], () => A.A.skipNumCategories),
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
        return t !== M.HOME || d || s
            ? null
            : (0, o.jsx)(tA.Z_, {
                  tenantId: e3.FYj,
                  templateId: tI.b.SHOP_HOME,
                  requestParams: r,
                  overrides: s2[tI.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(tA.Qs, { tenantId: e3.FYj, layoutId: n, overrides: s5[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === M.ORBS && (0, o.jsx)(s3, {}),
            t === M.ORBS ? (0, o.jsx)(nb.v3.Provider, { value: s8, children: u }) : u,
        ],
    });
}
function s6(e) {
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
let s7 = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, N.uM)(),
        a = (0, P.bG)([s0.A], () => s0.A.getShopLayoutUrlOverride()),
        i = c.useRef(null),
        { handleScroll: r } = t_(i, n),
        [d, m] = c.useState(tY.md),
        [g, h] = c.useState(!1);
    return (
        c.useEffect(() => {
            if (null != i.current) {
                function e() {
                    if (null == i.current) return;
                    let e = i.current.getDistanceFromBottom();
                    d >= 36 ? h(e < 20) : e <= 200 && m((e) => e + tY.md);
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
        (0, o.jsx)(H.Ch, {
            className: nZ.OW,
            ref: i,
            onScroll: r,
            children: (0, o.jsxs)("div", {
                className: nZ.bx,
                children: [
                    (0, o.jsxs)("div", {
                        className: u()(nZ.rb, nZ.GS),
                        children: [
                            null != a && "" !== a ? (0, o.jsx)(s6, { url: a }) : (0, o.jsx)(s9, { tab: n }),
                            n !== M.CATALOG &&
                                d >= 36 &&
                                (0, o.jsxs)("div", {
                                    className: nZ.R$,
                                    children: [
                                        (0, o.jsx)(ec.D, {
                                            variant: "heading-md/semibold",
                                            children: ea.intl.string(ea.t.Yr70c4),
                                        }),
                                        (0, o.jsx)(J.$, {
                                            variant: "primary",
                                            text: ea.intl.string(ea.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    tb.default.track(e3.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === M.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, o.jsx)(s$, { peaking: g, transitioning: s === tY.Pf.OUT }),
                ],
            }),
        })
    );
};
var le = n(564027);
let lt = function () {
        return (0, o.jsxs)("div", {
            className: le.z,
            children: [
                (0, o.jsx)("img", {
                    className: le.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: ea.intl.string(ea.t["p8+qtU"]),
                }),
                (0, o.jsx)(ec.D, { variant: "heading-xl/semibold", children: ea.intl.string(ea.t["p8+qtU"]) }),
                (0, o.jsx)(Q.E, { variant: "text-md/medium", children: ea.intl.string(ea.t.UEiyvs) }),
            ],
        });
    },
    ln = [tY.G2.HOME, tY.G2.ORBS];
function ls(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: a,
            refreshCategories: i,
        } = e,
        r = (0, P.bG)([A.A, tf.A], () =>
            null != A.A.error
                ? `shop load fetch categories error: ${A.A.error.message}`
                : null != tf.A.claimError
                  ? `shop load claim error: ${tf.A.claimError.message}`
                  : null != tf.A.fetchError
                    ? `shop load fetch purchase error: ${tf.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, P.bG)([_.default], () => _.default.getCurrentUser()),
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
    let d = (0, B.H)({ location: "collectibles_content" }),
        u = (0, P.bG)([D.Ay], () => D.Ay.useReducedMotion),
        m = (0, y.W6)(),
        g = (0, y.zy)(),
        [h] = c.useState(() => {
            if ("POP" === m.action) {
                let e;
                return (e = tW), (tW = null), e ?? void 0;
            }
        }),
        [x, f] = c.useState(h),
        [E, p] = c.useState(null == h),
        v = c.useMemo(() => {
            let e = new URLSearchParams(g.search).get(tY.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        j = c.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !tY.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        C = (0, th.U)("CollectiblesContent"),
        b = (0, tE.a)("CollectiblesContent"),
        S = c.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, n), b && null != n && i && !r))
                    return void m.push(e3.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = l && !u,
                    c = r ? tY.G2.ORBS : tY.G2.CATALOG;
                f(n), p(!i), s(c, o);
            },
            [u, s, a, b, m],
        ),
        { searchError: N } = (0, tp.S)();
    return null != N
        ? (0, o.jsx)(lt, {})
        : null != r
          ? (0, o.jsx)(nT.h, { onRetry: i, errorMessage: r, errorOrigin: nT.A.SHOP_PAGE })
          : t === tY.G2.HOME && C
            ? (0, o.jsx)(s7, { tab: M.HOME, transitionState: l, handleTransition: S })
            : t === tY.G2.ORBS && C
              ? (0, o.jsx)(s7, { tab: M.ORBS, transitionState: l, handleTransition: S })
              : ln.includes(t)
                ? (0, o.jsx)(sQ, { handleTransition: S, tab: t, transitionState: l })
                : t === tY.G2.GAME_SERVERS
                  ? d
                      ? (0, o.jsx)(tm, {})
                      : (0, o.jsx)(y.rd, { to: e3.BVt.COLLECTIBLES_SHOP_WITH_TAB(tY.G2.HOME) })
                  : (0, o.jsx)(nO, {
                        tab: t,
                        categories: j,
                        initialCategoryId: x ?? v,
                        showFilterInitially: E && null == v,
                        onUnmount: () => {
                            f(void 0), p(!0);
                        },
                    });
}
var ll = n(956123),
    la = n(235939),
    li = n(870308),
    lr = n(650583);
function lo(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === lr.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let lc = function (e) {
    let { tab: t = tY.G2.HOME } = e;
    (0, C.P)(j.a);
    let n = (0, E.A)((0, m.A)()),
        s = (0, g.bG)([_.default], () => _.default.getCurrentUser());
    (0, S.pE)();
    let l = (0, t1.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, y.zy)(),
                t = (0, y.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === s) {
                        (0, sr.aX)(), (0, z.openUserSettings)();
                        return;
                    }
                    (0, sr.EL)() ? (0, sr.aX)() : (0, sr.pX)(e3.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: i, hasFilters: r } = (0, k.v)(),
        d = c.useMemo(() => (t === tY.G2.HOME && null != i && r() ? i : t), [t, i, r]),
        M = (0, L.M)("CollectiblesShop");
    (0, b.A)(M ? e3.FYj : void 0);
    let { categories: P, refreshCategories: D } = (0, R.Ay)({ logPerf: !0 }, { sessionId: n, tab: d }),
        B = c.useMemo(() => [...P.values()], [P]),
        [H, w] = c.useState(),
        F = (0, g.bG)([A.A], () => A.A.getCategory(H)?.name),
        [G, U] = c.useState();
    (0, tX.XU)(n);
    let V = c.useCallback((e, t) => {
            U(e), w(t);
        }, []),
        { selectedTab: K, transitionState: W, transitionToTab: Y } = (0, T.o)(d);
    (0, v.HU)({ location: ea.intl.string(ea.t.pWG4ze) }), (0, O.uS)(n, K, F, W, G), (0, O.N0)(K, s);
    let { dismissShopButtonDC: $ } = (0, li.A)();
    c.useEffect(() => {
        $();
    }, [$]),
        c.useEffect(() => {
            (0, f.I)(e3.BVt.COLLECTIBLES_SHOP);
        }, []);
    let q = c.useRef(null),
        Z = c.useRef(null);
    (0, x.tj)(q);
    let X = (0, h.useHasAnyModalOpen)();
    c.useEffect(() => {
        Z.current?.focus();
    }, []),
        (0, t1.gB)();
    let { analyticsLocations: Q } = (0, O.lC)(K);
    return (0, o.jsx)(p.f5, {
        value: Q,
        children: (0, o.jsx)(N.R9, {
            newValue: { sessionId: n, pageCategory: F, pageSize: tY.l5 },
            children: (0, o.jsx)(I.iM, {
                tab: K,
                children: (0, o.jsx)(lo, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(tF.bx, { [t1.jP]: l }),
                        ref: Z,
                        inert: X,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(ll.G, { handleTransition: Y, selectedTab: K }),
                            (0, o.jsx)(la.A, { tab: K, handleTransition: Y }),
                            (0, o.jsx)("div", {
                                className: u()(tF.td, {
                                    [tF.RK]: W === tY.Pf.VISIBLE,
                                    [tF.in]: W === tY.Pf.IN,
                                    [tF.FD]: W === tY.Pf.OUT,
                                }),
                                children: (0, o.jsx)(ls, {
                                    tab: K,
                                    refreshCategories: D,
                                    transitionToTab: Y,
                                    transitionState: W,
                                    categories: B,
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
