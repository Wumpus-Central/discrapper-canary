n.r(t), n.d(t, { default: () => ls });
var s,
    l,
    i,
    a,
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
    C = n(475073),
    j = n(611924),
    b = n(744082),
    S = n(561794),
    _ = n(287809),
    A = n(440938),
    N = n(590180),
    I = n(161918),
    L = n(71604),
    O = n(790297),
    T = n(841702),
    R = n(983545),
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
    Y = n(123917),
    W = n(428262),
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
    ei = n(375708),
    ea = n(923137);
function er() {
    let e = c.useCallback(() => {
        (0, et.A)({ subscriptionTier: en.pe.TIER_2, analyticsLocations: [ee.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, o.jsx)(Z.N, {
        theme: es.NJ.DARKER,
        children: (t) =>
            (0, o.jsxs)("div", {
                className: u()(ea.vK, t),
                children: [
                    (0, o.jsxs)("div", {
                        className: ea.Pf,
                        children: [
                            (0, o.jsx)(X.t, {
                                className: ea.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, o.jsx)(Q.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: ei.intl.string(el.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, o.jsx)(J.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: X.t,
                        text: ei.intl.string(ei.t.pj0XBN),
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
            (0, o.jsx)(ec.D, { variant: "heading-xl/semibold", children: ei.intl.string(ei.t.i5SQ74) }),
            (0, o.jsx)(Q.E, {
                className: eu.h_,
                variant: "text-md/normal",
                color: "text-muted",
                children: ei.intl.string(ei.t.F8FvUy),
            }),
            l &&
                null != n &&
                (0, o.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: "staff-only debug: " + n }),
            (0, o.jsx)(J.$, { variant: "primary", text: ei.intl.string(ei.t["+hivLW"]), onClick: t }),
        ],
    });
}
var eg = n(349085),
    eh = n(890856),
    ex = n(331322),
    ef = n(713517),
    eE = n(177914);
function ep(e) {
    let { name: t, coverUrl: n, fromPriceLabel: s, nitroFromPriceLabel: l, onClickCard: i, onClickViewPlans: a } = e,
        r = c.useRef(null),
        { isHoveringOrFocusing: d } = (0, ef.A)(r),
        m = (0, P.bG)([_.default], () => W.Ay.canUseShopDiscounts(_.default.getCurrentUser())) && null != l,
        g = m ? l : s,
        h = c.useCallback(
            (e) => {
                e.stopPropagation(), a?.();
            },
            [a],
        );
    return (0, o.jsxs)(eh.s, {
        ref: r,
        onClick: i,
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
                                                children: ei.intl.string(el.default.SFUhDi),
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
                            text: ei.intl.string(el.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ev = n(452389);
function eC() {
    return (0, o.jsx)("div", {
        className: u()(eE.Nr, ev.s7, ev.U6),
        "aria-hidden": !0,
        children: (0, o.jsxs)("div", {
            className: ev.qr,
            children: [(0, o.jsx)("div", { className: ev.w9 }), (0, o.jsx)("div", { className: ev.n2 })],
        }),
    });
}
var ej = n(191932);
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
        className: ej.u,
        children: [
            null != n && (0, o.jsx)(ec.D, { variant: "heading-lg/semibold", children: n }),
            (0, o.jsx)("div", {
                className: ej.V,
                children: l
                    ? Array.from({ length: 10 }, (e, t) => (0, o.jsx)(eC, {}, t))
                    : t.map((e) => (0, o.jsx)(eb, { game: e, onSelect: s }, e.id)),
            }),
        ],
    });
}
var e_ = n(32880),
    eA = n(410232),
    eN = n(231483),
    eI = n(339350),
    eL = n(349288),
    eO = n(504660);
function eT() {
    let e = c.useMemo(
        () => [
            { Icon: e_.s, label: ei.intl.string(el.default.GJNQYz) },
            { Icon: eA.k, label: ei.intl.string(el.default.pTinR2) },
            { Icon: eN.l, label: ei.intl.string(el.default.s0N1nM) },
            { Icon: eI.Q, label: ei.intl.string(el.default.NzrGEi) },
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
                        children: ei.intl.string(el.default.F5W36W),
                    }),
                    (0, o.jsxs)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            ei.intl.string(el.default.xMpGuO),
                            " ",
                            (0, o.jsx)(eL.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: ei.intl.string(el.default.AnZeUS),
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
var eR = n(499279);
function ek() {
    return (0, o.jsxs)("div", {
        className: eR.vK,
        children: [
            (0, o.jsx)("div", {
                className: eR.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, o.jsx)("div", { className: eR.Ge, "aria-hidden": !0 }),
            (0, o.jsx)("div", { className: eR.f5, "aria-hidden": !0 }),
        ],
    });
}
var ey = n(408278),
    eM = n(548411),
    eP = n(554830),
    eD = n(281445),
    eB = n(390544),
    eH = n(554146),
    ew = n(866665),
    eF = n(939249),
    eG = n(880892);
let eU = { TERTIARY: eG.Xe, SECONDARY: eG.Rm, PRIMARY: eG.zB },
    ez = { SIZE_24: eG.q1, SIZE_32: eG.Hb, SIZE_36: eG.VM },
    eV = c.forwardRef(function (e, t) {
        let {
            className: n,
            tooltip: s,
            color: l,
            size: i = ez.SIZE_32,
            icon: a,
            onMouseDown: r,
            onClick: c,
            disabled: d,
            focusProps: m,
        } = e;
        return (0, o.jsx)(ew.m, {
            asContainer: !0,
            text: s,
            shouldShow: !d,
            children: (0, o.jsx)(eF.D, {
                innerRef: t,
                "aria-label": s,
                "aria-disabled": d,
                className: u()(n, eG.x6, l, i, { [eG.r9]: d }),
                onMouseDown: r,
                onClick: (e) => {
                    c(e);
                },
                focusProps: m,
                children: a,
            }),
        });
    });
var eK = n(933832),
    eY = n(624479),
    eW = n(509434),
    e$ = n(131607),
    eq = n(427209),
    eZ = n(95035),
    eX = n(685743),
    eQ = n(342942),
    eJ = n(294454),
    e0 = n(625903),
    e1 = n(445927);
function e2(e) {
    let { server: t, onOpenSettings: n } = e,
        s = (0, e1.A)(t.instance),
        l = c.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, o.jsx)(eV, {
        color: eU.SECONDARY,
        size: ez.SIZE_24,
        icon: (0, o.jsx)(e0.Z, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: l,
        disabled: !s,
        tooltip: ei.intl.string(el.default["feUiM/"]),
    });
}
var e4 = n(652215),
    e5 = n(49999),
    e3 = n(20661);
function e9(e) {
    return `game-server-owned-card-${e}`;
}
let e8 = c.memo(function (e) {
    let { server: t, onJoin: s, onViewPanel: l, onOpenSettings: i, isHighlighted: a = !1 } = e,
        r = (0, eg.A)(t.gameId, "cover") ?? t.coverUrl,
        d = (function (e) {
            let t = (0, P.bG)([K.A], () => (null != e ? K.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === e4.Dmq.CANCELED
                ? { text: ei.intl.formatToPlainString(el.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: ei.intl.formatToPlainString(el.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [m, g] = (0, e$.kn)([eH.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        x = m !== eH.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        f = eD.X.SHOCKBYTE,
        E = V.default.getId() ?? "0",
        { handleCopyServerIp: p, animateCopyIcon: v } = (0, eX.A)(E, t.id, ee.A.GAME_SERVER_PAGE, t.serverIp),
        C = c.useCallback(() => {
            (0, eQ.A)({
                provider: f,
                onAccept: () => {
                    g(e5.i.TAKE_ACTION), p();
                },
            });
        }, [f, g, p]),
        j = c.useCallback(() => {
            x
                ? s(t)
                : (0, eQ.A)({
                      provider: f,
                      onAccept: () => {
                          g(e5.i.TAKE_ACTION), s(t);
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
                            n.e("69977"),
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
                    { stackingBehavior: "stack", modalKey: eJ.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        _ =
            t.instance.status === eB.M.ONLINE
                ? ei.intl.string(el.default["60kAzo"])
                : t.instance.status === eB.M.OFFLINE
                  ? ei.intl.string(el.default["Ys/RrB"])
                  : ei.intl.string(el.default.SgjaXI);
    return (0, o.jsxs)("div", {
        id: e9(t.id),
        className: u()(e3.Nr, { [e3.mr]: a }),
        children: [
            a && (0, o.jsx)("div", { className: e3._8, "aria-hidden": !0 }),
            (0, o.jsxs)("div", {
                className: e3.Nk,
                "aria-hidden": !0,
                children: [
                    null != r && (0, o.jsx)("img", { className: e3.QC, src: r, alt: "" }),
                    (0, o.jsx)("div", { className: e3.jc }),
                ],
            }),
            (0, o.jsxs)("div", {
                className: e3.AQ,
                children: [
                    (0, o.jsx)(eV, {
                        color: eU.SECONDARY,
                        size: ez.SIZE_24,
                        icon: (0, o.jsx)(eq.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: S,
                        tooltip: ei.intl.string(ei.t.RDE0Sc),
                    }),
                    (0, o.jsx)(e2, { server: t, onOpenSettings: i }),
                ],
            }),
            (0, o.jsxs)("div", {
                className: e3.rf,
                children: [
                    (0, o.jsxs)("div", {
                        className: e3.U1,
                        children: [
                            (0, o.jsxs)("div", {
                                className: e3.oL,
                                children: [
                                    null != r
                                        ? (0, o.jsx)("img", { className: e3.vT, src: r, alt: "" })
                                        : (0, o.jsx)("div", {
                                              className: e3.iv,
                                              children: (0, o.jsx)(Q.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, o.jsx)("div", { className: e3.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, o.jsxs)("div", {
                                className: e3.VQ,
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
                        className: e3.M1,
                        children: [
                            (0, o.jsxs)("div", {
                                className: e3.N8,
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: e3.bi,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: ei.intl.string(el.default.bDdi7n),
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
                                        className: e3.gv,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: ei.intl.string(el.default["7phwMG"]),
                                            }),
                                            x
                                                ? (0, o.jsxs)("div", {
                                                      className: e3.Yb,
                                                      children: [
                                                          (0, o.jsx)(Q.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, o.jsx)(eF.D, {
                                                                  className: e3.cL,
                                                                  onClick: p,
                                                                  "aria-label": ei.intl.string(ei.t.OpuAlK),
                                                                  children: v
                                                                      ? (0, o.jsx)(eK.A, {
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
                                                      onClick: C,
                                                      children: ei.intl.string(el.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, o.jsxs)("div", {
                                className: e3.N8,
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: e3.bi,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: ei.intl.string(el.default["n+ZX7y"]),
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: e3.Yb,
                                                children: [
                                                    t.isOnline &&
                                                        (0, o.jsx)("span", { className: e3.kg, "aria-hidden": !0 }),
                                                    (0, o.jsx)(Q.E, {
                                                        variant: "text-sm/medium",
                                                        color: t.isOnline ? "text-feedback-positive" : "text-muted",
                                                        tag: "span",
                                                        children: _,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)("div", {
                                        className: e3.gv,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: ei.intl.string(el.default.mJlz3T),
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
            (0, o.jsxs)("div", {
                className: e3.qr,
                children: [
                    (0, o.jsx)(eF.D, {
                        className: u()(e3.wC, e3.QV),
                        onClick: j,
                        "aria-label": ei.intl.string(el.default["fQCcM/"]),
                        children: (0, o.jsx)(Q.E, {
                            variant: "text-sm/semibold",
                            color: "none",
                            children: ei.intl.string(el.default["fQCcM/"]),
                        }),
                    }),
                    (0, o.jsxs)(eF.D, {
                        className: u()(e3.wC, e3.y2),
                        onClick: b,
                        "aria-label": ei.intl.string(el.default.tkbVdf),
                        children: [
                            (0, o.jsx)(Q.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                children: ei.intl.string(el.default.tkbVdf),
                            }),
                            (0, o.jsx)(eW.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                        ],
                    }),
                ],
            }),
        ],
    });
});
var e6 = n(349123);
function e7(e) {
    let {
            servers: t,
            onViewAll: n,
            onJoin: s,
            onViewPanel: l,
            onOpenSettings: i,
            highlightServerId: a = null,
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
    let C = c.useCallback(() => {
            d.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        j = c.useCallback(() => {
            d.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        c.useEffect(() => {
            if (r <= 0) return;
            let e = null != a ? document.getElementById(e9(a)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    p(null), (t = requestAnimationFrame(() => p(a)));
                });
            return () => {
                cancelAnimationFrame(n), cancelAnimationFrame(t);
            };
        }, [r, a]),
        c.useEffect(() => {
            if (null == E) return;
            let e = setTimeout(() => p(null), 4e3);
            return () => clearTimeout(e);
        }, [E]),
        (0, o.jsxs)("section", {
            className: e6.uW,
            ref: m,
            children: [
                (0, o.jsxs)("div", {
                    className: e6.wx,
                    children: [
                        (0, o.jsx)(ec.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: ei.intl.string(el.default.BOWmmT),
                        }),
                        (0, o.jsx)(Z.N, {
                            theme: es.NJ.DARKER,
                            children: (e) =>
                                (0, o.jsxs)("div", {
                                    className: u()(e6.$s, e),
                                    children: [
                                        (0, o.jsx)(J.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: ei.intl.string(ei.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: e6.d$,
                                            children: [
                                                (0, o.jsx)(ey.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eM.Z,
                                                    disabled: !g,
                                                    onClick: C,
                                                    "aria-label": ei.intl.string(ei.t["13/7kX"]),
                                                }),
                                                (0, o.jsx)(ey.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eP.K,
                                                    disabled: !x,
                                                    onClick: j,
                                                    "aria-label": ei.intl.string(ei.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: u()(e6.XG, { [e6.OW]: g && x, [e6.vL]: g && !x, [e6.y0]: x && !g }),
                    ref: d,
                    onScroll: v,
                    children: t.map((e) =>
                        (0, o.jsx)(
                            "div",
                            {
                                className: e6.AV,
                                children: (0, o.jsx)(e8, {
                                    server: e,
                                    onJoin: s,
                                    onViewPanel: l,
                                    onOpenSettings: i,
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
var te = n(705285),
    tt = n(199781),
    tn = n(923477),
    ts = n(252589),
    tl = n(55766),
    ti = n(524843);
function ta() {
    return (0, o.jsx)(F.A, { children: (0, o.jsx)(tr, {}) });
}
function tr() {
    let { servers: e, refetch: t } = (0, tl.f)(),
        n = e.length > 0,
        s = (0, P.bG)([_.default], () => W.Ay.canUseShopDiscounts(_.default.getCurrentUser())),
        { games: l, hasError: i, isEmpty: a, isLoading: r, refetch: d } = (0, ts.Y)();
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
        g = (0, te.VJ)(),
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
        p = (0, tn.O)((e) => e.highlightFirstCardNonce),
        v = c.useRef(p);
    c.useEffect(() => {
        if (p === v.current) return;
        v.current = p;
        let e = requestAnimationFrame(() => E());
        return () => cancelAnimationFrame(e);
    }, [p, E]);
    let C = c.useCallback(
            (e) => {
                g(te.L5.OPEN_PLAN_MODAL, te.cl.SHOP_CARD),
                    (0, tt.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => f({ gameId: e.gameId }),
                    });
            },
            [g, f],
        ),
        j = c.useCallback(() => {
            G.A.setState({ scrollToGameServers: !0 }), (0, z.openUserSettings)(U.X.SUBSCRIPTIONS_PANEL);
        }, []),
        b = c.useCallback((e) => {
            let t = V.default.getId() ?? "0";
            (0, q.A)(t, e.instance);
        }, []),
        S = c.useCallback((e) => {
            (0, Y.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        A = c.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = u.current.find((t) => t.gameId === e.gameId);
                function s(t) {
                    (0, tt.S)({
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
        N = n ? ei.intl.string(el.default["+aRmAc"]) : void 0;
    return (0, o.jsx)(H.Ch, {
        className: ti.XG,
        children: (0, o.jsxs)("div", {
            className: ti.kL,
            children: [
                !s && (0, o.jsx)(er, {}),
                (0, o.jsx)(ek, {}),
                (0, o.jsxs)("div", {
                    className: ti.Qs,
                    children: [
                        (0, o.jsx)(eT, {}),
                        n &&
                            (0, o.jsx)(e7, {
                                servers: e,
                                onViewAll: j,
                                onJoin: b,
                                onViewPanel: S,
                                onOpenSettings: A,
                                highlightServerId: h.serverId,
                                highlightNonce: h.nonce,
                            }),
                        i || a
                            ? (0, o.jsx)(em, { onRetry: m })
                            : (0, o.jsx)(eS, { games: l, title: N, onSelectGame: C, loading: r }),
                    ],
                }),
            ],
        }),
    });
}
var to = n(578797),
    tc = n(38405),
    td = n(4227),
    tu = n(50920),
    tm = n(856686),
    tg = n(364522),
    th = n(783977),
    tx = n(59520),
    tf = n(174459);
function tE(e, t, n, s) {
    let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = s;
    if (a > 0) {
        let s = (l + i) / a;
        s > 0 &&
            tf.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(a),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function tp(e, t) {
    let { analyticsSource: n } = (0, O.lC)(t),
        s = (0, tx.I)(tE, 5e3, [], { trailing: !0 }),
        l = (0, A.uM)(),
        i = l?.sessionId;
    return {
        handleScroll: c.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    s(e4.HAw.COLLECTIBLES_SHOP_SCROLLED, null != i ? i : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [s, n, i, e]),
    };
}
var tv = n(354328),
    tC = n(356118),
    tj = n(619835),
    tb = n(918467),
    tS = n(80151),
    t_ = n(641150);
function tA() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: s } = (0, k.v)((e) => e),
        { totalCount: l, isFetchingResults: i } = (0, tm.S)(),
        a = (0, k.v)((e) => e.hasFilters()),
        r = c.useCallback(() => {
            if (!a) return "";
            if (i) return ei.intl.string(ei.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return ei.intl.format(ei.t.KJMJOz, { count: l, search: e });
            }
            if (!n && !s && 1 === e.size) {
                if (e.has(t_.q.AVATAR_DECORATION)) return ei.intl.format(ei.t.s1UzGQ, { count: l });
                if (e.has(t_.q.NAMEPLATE)) return ei.intl.format(ei.t.ZWGN9T, { count: l });
                if (e.has(t_.q.PROFILE_EFFECT)) return ei.intl.format(ei.t["v/7apu"], { count: l });
                if (e.has(t_.q.PROFILE_FRAME)) return ei.intl.format(ei.t.eu4eRy, { count: l });
                if (e.has(t_.q.BUNDLE)) return ei.intl.format(ei.t.fZ1rdk, { count: l });
            }
            return 0 === e.size && n && !s
                ? ei.intl.format(ei.t.TxoTTj, { count: l })
                : 0 === e.size && s && !n
                  ? ei.intl.format(ei.t.TLso50, { count: l })
                  : ei.intl.format(ei.t["/rPvmQ"], { count: l });
        }, [e, l, a, t, i, n, s]);
    return (0, o.jsx)(ec.D, { variant: "heading-lg/semibold", children: r() });
}
var tN = n(172218),
    tI = n(932793),
    tL = n(511265),
    tO = n(206077),
    tT = n(100057),
    tR = n(828515),
    tk = n(484469),
    ty = n(346448),
    tM = n(195261),
    tP = n(132866);
let tD = function () {
    return (0, o.jsx)("div", {
        className: tP.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: tM.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(ty.sW, tP.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, o.jsx)(tk.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tB = n(258245),
    tH = n(159439),
    tw = n(998694);
let tF = null;
var tG = n(758836);
function tU(e) {
    let { category: t } = e,
        n = (0, g.bG)([_.default], () => _.default.getCurrentUser()),
        s = (0, tO.X)(t.products),
        l = (0, tL.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, o.jsx)("div", {
              className: tM.vY,
              children: l.map((e, t) =>
                  (0, o.jsx)(
                      A.R9,
                      { newValue: { tilePosition: t }, children: (0, o.jsx)(tB.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tz(e) {
    let { category: t } = e,
        [n, s] = c.useState(!1),
        l = (0, tN.K)(function (e) {
            s(e);
        }, 0.15),
        i = (0, y.W6)(),
        a = (0, tu.a)("CollectiblesCatalogContent"),
        r = (0, A.uM)(),
        d = c.useCallback(() => {
            tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: tG.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (tF = t.skuId),
                i.push(e4.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, i]);
    return (0, o.jsxs)("div", {
        className: tM.EF,
        ref: l,
        children: [(0, o.jsx)(tR.A, { category: t, onSelect: a ? d : void 0 }), (0, o.jsx)(tU, { category: t })],
    });
}
function tV(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: i } = e,
        a = (0, A.uM)(),
        r = (0, tH.U)(),
        d = a?.sessionId ?? "",
        { noCache: u, includeUnpublished: m } = (0, tw.A)(),
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
        if (null == i || 0 === g.length) {
            h.current = void 0;
            return;
        }
        if (i === h.current) return;
        let e = g.findIndex((e) => e.skuId === i);
        if (-1 === e) return;
        let t = Math.floor(e / tG.l5) + 1;
        t !== s && l(t), (h.current = i);
    }, [i, g, l, s]);
    let x = c.useMemo(() => {
        let e = (s - 1) * tG.l5;
        return g.slice(e, e + tG.l5);
    }, [g, s]);
    return (c.useEffect(() => {
        (0, tT.z)({
            sessionId: d,
            checkpoint: tT.t.SHOP_MOUNTED,
            tab: tG.G2.CATALOG,
            unpublishedCategoriesShown: m,
            cacheDisabled: u,
        });
    }, []),
    c.useEffect(() => {
        r ||
            0 === x.length ||
            (0, tT.z)({
                sessionId: d,
                checkpoint: tT.t.SHOP_RENDERED,
                tab: tG.G2.CATALOG,
                unpublishedCategoriesShown: m,
                cacheDisabled: u,
            });
    }, [d, m, u, r, x.length]),
    r)
        ? (0, o.jsx)(tD, {})
        : (0, o.jsxs)("div", {
              className: tM.LZ,
              children: [
                  x.map((e, t) =>
                      (0, o.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": ei.intl.formatToPlainString(ei.t.FNtLb3, { category: e.name }),
                              children: (0, o.jsx)(A.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, o.jsx)(tz, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: tM.Ej,
                      children: (0, o.jsx)(tI.m, {
                          currentPage: s,
                          totalCount: g.length,
                          pageSize: tG.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var tK = n(177366),
    tY = n(401864),
    tW = n(124987),
    t$ = n(691885),
    tq = n(146919),
    tZ = n(858733);
let tX = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, k.v)(),
        s = (0, A.uM)(),
        l = (0, tq.yB)("CollectiblesSortSelect"),
        i = n(),
        a = c.useMemo(() => tG.QB.filter((e) => e.sortType !== tW.$.RELEVANCE || i), [i]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tW.$.RECENCY
                ? { label: ei.intl.string(ei.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tW.$.PRICE
                  ? n === tY.A.ASC
                      ? { label: ei.intl.string(ei.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: ei.intl.string(ei.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tW.$.RELEVANCE
                    ? { label: ei.intl.string(ei.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: ei.intl.string(ei.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
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
        m = c.useCallback(
            (e) => {
                let n = r(d(e));
                tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: u()(tZ.k, { [tq.jP]: l }),
        children: (0, o.jsx)(t$.l, {
            label: ei.intl.string(ei.t.uaX705),
            hideLabel: !0,
            options: a.map(r),
            onSelectionChange: m,
            value: g.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var tQ =
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
    tJ =
        (((i = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (i.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (i.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (i.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (i.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (i.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (i.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (i.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (i.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (i.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        i),
    t0 = n(150934),
    t1 = n(508770),
    t2 = n(278416),
    t4 = n(602853),
    t5 = n(661531),
    t3 = n(947641),
    t9 = n(604338),
    t8 = n(785866),
    t6 = n(373846),
    t7 = n(308323),
    ne = n(608599),
    nt = n(685761),
    nn = n(157225),
    ns = n(413249),
    nl = n(510241),
    ni = n(601198),
    na = n(7250),
    nr = n(623655),
    no = n(13875),
    nc = n(967339);
function nd() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            onToggleOfferEligible: l,
            offerEligible: i,
            reset: a,
            hasFilters: r,
        } = (0, k.v)(),
        d = (0, nr.z)("FilterBar"),
        m = r(),
        g = (0, no.sk)("FilterBar"),
        h = (0, A.uM)(),
        x = c.useRef(null),
        f = (0, tS.A)(),
        E = c.useMemo(() => tG._6.filter((e) => g || e !== t_.q.PROFILE_FRAME), [g]),
        p = c.useCallback(
            (e) => {
                tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: nc.kT,
        children: [
            (0, o.jsxs)("div", {
                className: u()(nc.KZ, nc.YG),
                children: [
                    (0, o.jsx)("div", {
                        ref: x,
                        tabIndex: -1,
                        children: (0, o.jsx)(Q.E, {
                            variant: "text-md/semibold",
                            className: nc.hr,
                            children: ei.intl.string(ei.t.Qk6r1a),
                        }),
                    }),
                    null != f &&
                        (0, o.jsxs)("div", {
                            className: nc.Ym,
                            children: [
                                (0, o.jsx)(t0.S, {
                                    checked: i,
                                    onChange: () => {
                                        p(`filter offer eligible ${!1 === i ? "on" : "off"}`), l();
                                    },
                                    label: ei.intl.string(ei.t.hY8Ft1),
                                }),
                                (0, o.jsx)(t1.E, { type: { text: ei.intl.string(ei.t["nb5PC/"]) }, icon: t2.g }),
                            ],
                        }),
                    E.map((e) => (0, o.jsx)(nu, { filter: e, trackFilterAction: p }, e)),
                    (0, o.jsx)(t0.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: ei.intl.string(ei.t.AHHHgG),
                    }),
                    d && (0, o.jsx)(t0.S, { checked: s, onChange: v, label: ei.intl.string(ei.t["+W8gb+"]) }),
                ],
            }),
            (0, o.jsx)(nm, { trackFilterAction: p }),
            (0, o.jsx)(nx, { trackFilterAction: p }),
            m &&
                (0, o.jsx)(J.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), a(), requestAnimationFrame(() => x.current?.focus());
                    },
                    text: ei.intl.string(ei.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function nu(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [t_.q.AVATAR_DECORATION]: ei.intl.string(ei.t.dRZYNE),
            [t_.q.PROFILE_EFFECT]: ei.intl.string(ei.t["1cNjtx"]),
            [t_.q.NAMEPLATE]: ei.intl.string(ei.t.V68Fqz),
            [t_.q.PROFILE_FRAME]: ei.intl.string(ei.t.ecTJkR),
            [t_.q.BUNDLE]: ei.intl.string(ei.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: i } = (0, k.v)(),
        a = (0, o.jsx)(t0.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), i(t);
            },
            label: s[t] ?? "",
        });
    return t === t_.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: nc.Ym, children: [a, (0, o.jsx)(t1.E, { type: "new" })] })
        : a;
}
function nm(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: ei.intl.string(ei.t.kqUD4P), enum: tQ.PURPLE },
                { color: "#3498DB", label: ei.intl.string(ei.t.qQTRae), enum: tQ.BLUE },
                { color: "#2ECC71", label: ei.intl.string(ei.t["f/Ylk6"]), enum: tQ.GREEN },
                { color: "#A0522D", label: ei.intl.string(ei.t["Sd/BMa"]), enum: tQ.BROWN },
                { color: "#F1C40F", label: ei.intl.string(ei.t["0fevYz"]), enum: tQ.YELLOW },
            ],
            [],
        ),
        s = c.useMemo(
            () => [
                { color: "#E67E22", label: ei.intl.string(ei.t.ZE7weD), enum: tQ.ORANGE },
                { color: "#E74C3C", label: ei.intl.string(ei.t.hKJGOM), enum: tQ.RED },
                { color: "#EC407A", label: ei.intl.string(ei.t.HvLEGM), enum: tQ.PINK },
                { color: "#FFFFFF", label: ei.intl.string(ei.t["CB+lNO"]), enum: tQ.WHITE },
                { color: "#262626", label: ei.intl.string(ei.t["dMey+v"]), enum: tQ.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: nc.KZ,
        children: [
            (0, o.jsx)(Q.E, { variant: "text-md/semibold", className: nc.hr, children: ei.intl.string(ei.t.K1xGoG) }),
            (0, o.jsx)(ng, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(ng, { colors: s, trackFilterAction: t }),
        ],
    });
}
function ng(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, k.v)();
    return (0, o.jsx)("div", {
        className: nc.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: a } = e;
            return (0, o.jsx)(
                nh,
                { color: t, label: i, enum: a, isToggled: s.has(a), onToggleColor: l, trackFilterAction: n },
                a,
            );
        }),
    });
}
function nh(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: i, trackFilterAction: a } = e,
        r = (0, t4.r)(t5.A.unsafe_rawColors.WHITE).hex(),
        c = (0, t4.r)(t5.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, o.jsx)(
        ew.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, o.jsx)(
                eF.D,
                {
                    className: u()(nc.n1, { [nc.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        a(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), i(s);
                    },
                    children:
                        l &&
                        (0, o.jsx)("div", {
                            className: nc.oE,
                            children: (0, o.jsx)(t3.r, {
                                size: "xs",
                                color: (0, na.j)({ backgroundColor: t, colors: [r, c] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function nx(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, k.v)(),
        l = (0, ed.Ay)() === es.NJ.DARK,
        i = c.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        a = c.useCallback((e) => (n.has(e) || l ? t5.A.colors.WHITE : t5.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        r = c.useMemo(
            () => [
                {
                    name: ei.intl.string(ei.t.aVBOKh),
                    icon: (0, o.jsx)(t9.E, { size: "xs", color: a(tJ.ANIME) }),
                    enum: tJ.ANIME,
                },
                {
                    name: ei.intl.string(ei.t["3WoZBc"]),
                    icon: (0, o.jsx)(t8._, { size: "xs", color: a(tJ.GAMING) }),
                    enum: tJ.GAMING,
                },
                {
                    name: ei.intl.string(ei.t.yuEmLj),
                    icon: (0, o.jsx)(t6.C, { size: "xs", color: a(tJ.CUTE_COZY) }),
                    enum: tJ.CUTE_COZY,
                },
                {
                    name: ei.intl.string(ei.t.mMvCHo),
                    icon: (0, o.jsx)(t7.L, { size: "xs", color: a(tJ.SCI_FI) }),
                    enum: tJ.SCI_FI,
                },
                {
                    name: ei.intl.string(ei.t.TlhOQC),
                    icon: (0, o.jsx)(ne.L, { size: "xs", color: a(tJ.FOOD_DRINKS) }),
                    enum: tJ.FOOD_DRINKS,
                },
                {
                    name: ei.intl.string(ei.t["4IaUIM"]),
                    icon: (0, o.jsx)(nt.f, { size: "xs", color: a(tJ.FANTASY) }),
                    enum: tJ.FANTASY,
                },
                {
                    name: ei.intl.string(ei.t["w0nSG/"]),
                    icon: (0, o.jsx)(nn.N, { size: "xs", color: a(tJ.ANIMALS_PETS) }),
                    enum: tJ.ANIMALS_PETS,
                },
                {
                    name: ei.intl.string(ei.t.cJng7v),
                    icon: (0, o.jsx)(ns.p, { size: "xs", color: a(tJ.NATURE) }),
                    enum: tJ.NATURE,
                },
                {
                    name: ei.intl.string(ei.t["5mUvyM"]),
                    icon: (0, o.jsx)(nl.T, { size: "xs", color: a(tJ.MOVIES_TV_SHOWS) }),
                    enum: tJ.MOVIES_TV_SHOWS,
                },
                {
                    name: ei.intl.string(ei.t.MB9H5Z),
                    icon: (0, o.jsx)(ni.e, { size: "xs", color: a(tJ.DARK_MOODY) }),
                    enum: tJ.DARK_MOODY,
                },
            ],
            [a],
        );
    return (0, o.jsxs)("div", {
        className: nc.KZ,
        children: [
            (0, o.jsx)(Q.E, { variant: "text-md/semibold", className: nc.hr, children: ei.intl.string(ei.t.t1Ztrp) }),
            (0, o.jsx)("div", {
                className: nc.Ot,
                children: r.map((e) => {
                    let { name: l, icon: a, enum: r } = e;
                    return (0, o.jsxs)(
                        eF.D,
                        {
                            className: u()(nc.w4, { [nc.C7]: n.has(r) }),
                            "aria-label": l,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(r);
                            },
                            children: [a, (0, o.jsx)(Q.E, { color: i(r), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var nf = n(561769),
    nE = n(882443);
function np() {
    return (0, o.jsxs)("div", {
        className: nE.k,
        children: [
            (0, o.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: ei.intl.string(ei.t.oezC3x),
                className: nE._,
            }),
            (0, o.jsx)(ec.D, { variant: "heading-xl/semibold", children: ei.intl.string(ei.t.oezC3x) }),
            (0, o.jsx)(Q.E, { variant: "text-md/medium", children: ei.intl.string(ei.t["Tc/Ndl"]) }),
        ],
    });
}
var nv = n(996824);
let nC = { flattenProductVariants: !0 };
function nj(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, A.uM)(),
        i = l?.sessionId ?? "",
        { noCache: a, includeUnpublished: r } = (0, tw.A)(),
        d = (0, g.bG)([_.default], () => _.default.getCurrentUser()),
        { skus: m, currentPage: h, totalCount: x, isFetchingResults: f } = (0, tm.S)(),
        E = (0, g.yK)([N.A], () => N.A.getProductsBySkus(m)),
        p = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        v = m?.join("");
    c.useEffect(() => {
        p();
    }, [v, p]);
    let C = (0, tL.p)(),
        j = c.useMemo(() => C(E), [C, E]);
    c.useEffect(() => {
        t ||
            (0, tT.z)({
                sessionId: i,
                checkpoint: tT.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
    }, [i, r, a, t, s]);
    let b = c.useRef(null),
        { setQueryPageSize: S, setQueryPageOffset: I, queryPageSize: L } = (0, k.v)(),
        [O, T] = c.useState(!1),
        R = t || f || null == d;
    c.useEffect(() => {
        R ? T(!1) : j.length > 0 && T(!0);
    }, [R, j.length]);
    let y = L > 0 && !R && 0 === j.length;
    c.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == b.current || S(Math.floor(5 * getComputedStyle(b.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != b.current) return e.observe(b.current), () => e.disconnect();
    }, [S]);
    let M = c.useCallback(
        (e) => {
            tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, o.jsxs)(nf.v3.Provider, {
        value: nC,
        children: [
            (0, o.jsxs)("div", {
                className: u()({ [nv.oE]: y }),
                children: [
                    y && (0, o.jsx)(np, {}),
                    (0, o.jsxs)("div", {
                        className: u()(nv.ZE, { [nv.Kp]: O }),
                        ref: b,
                        children: [
                            R && [...Array(L)].map((e, t) => (0, o.jsx)(tk.A, {}, t)),
                            !R &&
                                j.map((e, t) =>
                                    null == N.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, o.jsx)(
                                              A.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, o.jsx)(
                                                      tB.A,
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
                    className: nv.Ej,
                    children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(tI.m, {
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
var nb = n(328539);
function nS(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: i } = e,
        a = (0, tv.A)("shop_include_unpublished");
    !(function () {
        let e = (0, P.bG)([tb.A], () => "success" === tb.A.getFetchState(e4.FYj)),
            t = null != (0, tS.A)(),
            { offerEligible: n, clearFilters: s } = (0, k.v)();
        c.useEffect(() => {
            n && e && !t && s();
        }, [n, e, t, s]);
    })(),
        (0, k.S)(a);
    let r = c.useRef(null),
        { handleScroll: d } = tp(r, t),
        u = (0, to.U)("Shop Browse"),
        { setCategoryRef: m, handleScrollToCategory: g } = (0, tK.k0)(r.current),
        [h, x] = c.useState(l),
        [f, E] = c.useState(!1);
    return (
        c.useEffect(() => {
            null != s && g(s);
        }, [s, g]),
        c.useEffect(
            () => () => {
                null != i && i();
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
            className: nb.VM,
            children: (0, o.jsxs)("main", {
                className: nb.MY,
                children: [
                    (0, o.jsx)(H.Gt, {
                        className: nb.OW,
                        ref: r,
                        onScroll: d,
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: nb.en,
                                  children: (0, o.jsx)("div", {
                                      className: nb.pf,
                                      children: (0, o.jsx)(tC.Z_, { tenantId: e4.FYj, templateId: tj.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, o.jsx)(n_, {
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
                    h && !f && (0, o.jsx)("div", { className: nb.yF }),
                    h && !f && (0, o.jsx)(tg.Ip, { className: nb.kT, children: (0, o.jsx)(nd, {}) }),
                ],
            }),
        })
    );
}
function n_(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: s,
            tab: l,
            scrollerRef: i,
            categories: a,
            setCategoryRef: r,
            initialCategoryId: d,
        } = e,
        m = c.useRef(null),
        g = (0, k.v)((e) => e.hasDefaultFilters()),
        h = (0, A.uM)(),
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
        })(i),
        E = c.useCallback(
            (e) => {
                tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            className: nb.en,
            children: (0, o.jsxs)("div", {
                className: nb.pf,
                children: [
                    (0, o.jsxs)("div", {
                        className: nb.ne,
                        children: [
                            (0, o.jsx)("div", { className: nb.lQ, children: (0, o.jsx)(tA, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(nb.wR, { [nb.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: nb.Ul,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-md/semibold",
                                                children: ei.intl.string(ei.t.uaX705),
                                            }),
                                            (0, o.jsx)(tX, {}),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        ref: p,
                                        children: (0, o.jsx)(J.$, {
                                            onClick: function () {
                                                let e = !n;
                                                tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: ei.intl.string(n ? ei.t.fYtm6f : ei.t["TeTYE+"]),
                                            icon: th.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, o.jsx)("div", {
                                    className: nb.Dh,
                                    ref: m,
                                    children: (0, o.jsx)(H.Ch, { className: nb.Qo, children: (0, o.jsx)(nd, {}) }),
                                }),
                        ],
                    }),
                    g
                        ? (0, o.jsx)(A.R9, {
                              newValue: { pageIndex: f },
                              children: (0, o.jsx)(tV, {
                                  categories: a,
                                  setCategoryRef: r,
                                  currentPage: f,
                                  handlePageChange: E,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, o.jsx)(nj, { scrollerRef: i, tab: l }, l),
                ],
            }),
        })
    );
}
var nA = n(599062),
    nN = n(651162),
    nI = n(367727);
let nL = c.createContext(null);
function nO(e) {
    let { blockType: t, children: n } = e,
        s = c.useMemo(() => ({ blockType: t }), [t]);
    return (0, o.jsx)(nL.Provider, { value: s, children: n });
}
var nT = n(755172),
    nR = n(534740),
    nk = n(607399),
    ny = n(946015),
    nM = n(717421),
    nP = n(140735),
    nD = n(496431),
    nB = n(324145);
function nH(e) {
    let { endDate: t, size: n = "md", className: s, showSeconds: l = !1 } = e,
        { days: i, hours: a, minutes: r, seconds: c } = (0, nD.A)(t),
        d = (function (e, t, n, s, l) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let a = [i(e), i(t), i(n)];
            return l && a.push(i(s)), a.join(":");
        })(i, a, r, c, l);
    return (0, o.jsxs)("div", {
        className: u()(nB.kL, s),
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
                                  className: nB.eC,
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
                                  className: nB.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, o.jsx)(nP.A, { children: ei.intl.format(ei.t.j6IyVe, { days: i, hours: a, minutes: r }) }),
        ],
    });
}
var nw = n(63776);
let nF = c.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, nM.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsxs)(nR.animated.div, {
        className: u()([nw.lP, nk.Fr && nw.yJ]),
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
            (0, o.jsxs)(ny.s, {
                direction: ny.s.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(Q.E, {
                        variant: "text-md/medium",
                        className: nw.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(Q.E, {
                            variant: "text-sm/medium",
                            className: nw.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, o.jsx)(nH, { endDate: t.endTime }),
        ],
    });
});
var nG = n(424918),
    nU = n(993408),
    nz = n(196231),
    nV = n(459550);
function nK(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, o.jsx)("div", {
        className: u()(nV.n9, nV.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === nG.u.CATEGORY
                ? (0, o.jsx)(
                      A.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, o.jsx)(
                              nz.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, nU.HF)(e.unpublishedAt) ? ei.intl.string(ei.t["h/uBCR"]) : void 0,
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
function nY(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [s, l] = n;
    return (0, o.jsx)("div", {
        className: u()(nV.n9, nV.YB),
        children: (0, o.jsxs)(A.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != s ? s.name : l?.name,
                pageSection: "featured_block",
                tilePosition: +(null == s),
            },
            children: [
                null != s &&
                    (0, o.jsx)(nz.S, {
                        category: s,
                        enablePreview: !0,
                        badgeText: (0, nU.HF)(s.unpublishedAt) ? ei.intl.string(ei.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, o.jsx)(nz.S, {
                        category: l,
                        badgeText: (0, nU.HF)(l.unpublishedAt) ? ei.intl.string(ei.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let nW = function (e) {
    let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
        { analyticsLocations: i } = (0, p.Ay)(ee.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, o.jsxs)("div", {
              className: u()(nV.n9, nV.YB),
              children: [
                  (0, o.jsx)("div", {
                      className: u()(nV.Jn, nV.oT),
                      children: (0, o.jsx)("div", { className: nV.uy }),
                  }),
                  (0, o.jsx)("div", {
                      className: u()(nV.Jn, nV.oT),
                      children: (0, o.jsx)("div", { className: nV.uy }),
                  }),
              ],
          })
        : null != l
          ? (0, o.jsx)(p.f5, {
                value: i,
                children: (0, o.jsx)(nK, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
            })
          : (0, o.jsx)(p.f5, {
                value: i,
                children: (0, o.jsx)(nY, { categories: s, handleTransition: n, isLoading: !1 }),
            });
};
var n$ = n(531685),
    nq = n(621466),
    nZ =
        (((a = {}).MOUNTED = "mounted"),
        (a.SORT_OUT = "sort-out"),
        (a.SORT_IN = "sort-in"),
        (a.SHUFFLE_OUT = "shuffle-out"),
        (a.SHUFFLE_IN = "shuffle-in"),
        (a.FINISHED = "finished"),
        a);
n(667532);
var nX = n(435558),
    nQ = n.n(nX),
    nJ =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    n0 = n(153488),
    n1 = n(313276),
    n2 = n(623373),
    n4 = n(885574),
    n5 = n(975807),
    n3 = n(975571),
    n9 = n(938682);
let n8 = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? ei.intl.string(ei.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: n9.L,
            children: [
                (0, o.jsx)(ec.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, o.jsx)(ew.m, {
                        text: ei.intl.string(ei.t["3taPdj"]),
                        position: "top",
                        "aria-label": ei.intl.string(ei.t["3taPdj"]),
                        children: (0, o.jsx)(eF.D, {
                            onClick: () => (0, n5.A)(n3.A.getArticleURL(e4.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: n9.s,
                            children: (0, o.jsx)(n4.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    n6 = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: s,
                numVisibleItems: l,
                tab: i,
                buttonContainerClassName: a,
                orbsSupportedOnly: r,
            } = e,
            d = (0, P.bG)([_.default], () => _.default.getCurrentUser()),
            m = W.Ay.canUseShopDiscounts(d),
            g = (0, nf.Mk)(i),
            h = (0, tq.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: f,
                sortedItems: E,
                sortOptions: v,
                shuffleProducts: C,
                showRecommendationOption: j,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: s } = e,
                    l = (0, P.bG)([n0.A], () => n0.A.hasConsented(e4.YAq.PERSONALIZATION)),
                    i = c.useMemo(() => t?.[nJ.RECOMMENDED] ?? [], [t]),
                    a = c.useMemo(() => t?.[nJ.POPULAR] ?? [], [t]),
                    r = i.length > 0 && l,
                    [o, d] = c.useState(r ? nJ.RECOMMENDED : nJ.POPULAR),
                    u = (0, P.bG)([N.A], () => N.A.productsWithVariantsAsGroup),
                    m = c.useMemo(() => (0, nU.CE)(u), [u]),
                    g = (0, n1.A)(),
                    h = (0, tL.p)(),
                    [x, f] = c.useState([]),
                    E = c.useCallback(() => {
                        d(nJ.RANDOM), f(nQ().shuffle(m));
                    }, [m]);
                c.useEffect(() => {
                    f(nQ().shuffle(m));
                }, [m]);
                let p = c.useMemo(() => {
                    let e = [];
                    switch (o) {
                        case nJ.RECENT:
                            e = m;
                            break;
                        case nJ.PRICE_LOW_TO_HIGH:
                            e = (0, nU.bf)([...m], n, s);
                            break;
                        case nJ.RECOMMENDED:
                            e = g(i);
                            break;
                        case nJ.POPULAR:
                            e = g(a);
                            break;
                        case nJ.RANDOM:
                            e = x;
                    }
                    return s ? (0, n2.ex)(h(e)) : h(e);
                }, [o, s, h, n, m, g, i, a, x]);
                return {
                    sortType: o,
                    setSortType: d,
                    sortedItems: (0, tO.X)(p),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: nJ.POPULAR, label: ei.intl.string(ei.t.Y68e5p) },
                            { value: nJ.RECENT, label: ei.intl.string(ei.t["51Bhiz"]) },
                            { value: nJ.PRICE_LOW_TO_HIGH, label: ei.intl.string(ei.t.m8RVU2) },
                        ];
                        return r && e.unshift({ value: nJ.RECOMMENDED, label: ei.intl.string(ei.t.zPWgFG) }), e;
                    }, [r]),
                    showRecommendationOption: r,
                    shuffleProducts: E,
                };
            })({ sortedSkuIds: s, hasShopDiscount: m, orbsSupportedOnly: r }),
            b = (0, P.bG)([D.Ay], () => D.Ay.useReducedMotion),
            S = (0, P.bG)([n$.A], () => n$.A.isFocused()),
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
                                    (0, nq.vq)(e, HTMLButtonElement) ||
                                    (0, nq.vq)(e, HTMLAnchorElement) ||
                                    (0, nq.vq)(e, HTMLInputElement) ||
                                    (0, nq.vq)(e, HTMLSelectElement) ||
                                    (0, nq.vq)(e, HTMLTextAreaElement)
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
                            let { isShuffling: n, onOutroComplete: i, returnRef: a } = e;
                            a?.current != null && ((l.current = a.current), s(!0)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        i(),
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
            T = (0, A.uM)(),
            R = T?.sessionId ?? "",
            { analyticsLocations: k } = (0, p.Ay)(ee.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            y = c.useRef(null),
            M = c.useRef(null),
            [B, H] = c.useState(!1),
            w = c.useCallback(
                (e) => {
                    H(!1),
                        O({ isShuffling: !1, onOutroComplete: () => f(e), returnRef: M }),
                        tf.default.track(e4.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: R,
                            sort_type: e,
                        });
                },
                [O, f, R],
            );
        return null == d
            ? null
            : (0, o.jsx)(p.f5, {
                  value: k,
                  children: (0, o.jsxs)("div", {
                      className: u()(nV.lD, nV.YB),
                      children: [
                          (0, o.jsxs)("div", {
                              className: nV.$6,
                              children: [
                                  (0, o.jsx)(n8, { label: n, personalizedResults: j }),
                                  (0, o.jsxs)("div", {
                                      className: u()(nV.IE, { [tq.jP]: h }),
                                      children: [
                                          (0, o.jsxs)("div", {
                                              className: nV.gd,
                                              children: [
                                                  (0, o.jsx)(Q.E, {
                                                      variant: "text-md/medium",
                                                      children: ei.intl.string(ei.t.uaX705),
                                                  }),
                                                  (0, o.jsx)("div", {
                                                      className: u()(a, nV.pI),
                                                      ref: M,
                                                      children: (0, o.jsx)(t$.l, {
                                                          label: ei.intl.string(ei.t.uaX705),
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
                                              className: a,
                                              children: (0, o.jsx)(J.$, {
                                                  variant: "secondary",
                                                  text: ei.intl.string(ei.t.X3tnc4),
                                                  buttonRef: y,
                                                  onClick: function () {
                                                      H(!0),
                                                          O({ isShuffling: !0, onOutroComplete: C, returnRef: y }),
                                                          tf.default.track(
                                                              e4.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: R },
                                                          );
                                                  },
                                                  disabled: L !== nZ.MOUNTED && L !== nZ.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(nP.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: B && L === nZ.FINISHED ? ei.intl.string(ei.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: nV.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(tk.A, {}, t + 1)),
                                    })
                                  : E.slice(0, l).map((e, t) => {
                                        let n,
                                            s = N.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (I)
                                            if (L === nZ.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: nV.Z2,
                                                        children: (0, o.jsx)(tk.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                L === nZ.SORT_OUT
                                                    ? (n = nV.MW)
                                                    : L === nZ.SHUFFLE_IN
                                                      ? (n = nV.aS)
                                                      : L === nZ.SORT_IN && (n = nV.F7);
                                        return (0, o.jsx)(
                                            A.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, o.jsx)("div", {
                                                    className: n,
                                                    children: (0, o.jsx)(tB.A, {
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
var n7 = n(269115),
    se = n(789645),
    st = n(976860),
    sn = n(48093);
let ss = "GAME_SERVER_HOSTING_BANNER";
function sl(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        s = (0, A.uM)(),
        l = c.useRef(null),
        i = c.useRef(!1),
        a = c.useRef(null),
        [r, d] = c.useState(!1),
        m = c.useCallback(
            (e) => {
                tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_type: n,
                    page_category: s?.pageCategory,
                    page_section: s?.pageSection,
                    tile_type: ss,
                    cta_name: e,
                });
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        ),
        g = c.useCallback(
            (e) => {
                e?.stopPropagation(),
                    m("go_to_game_server_hosting"),
                    (0, st.pX)(e4.BVt.COLLECTIBLES_SHOP_WITH_TAB(tG.G2.GAME_SERVERS));
            },
            [m],
        ),
        h = c.useCallback(
            (e) => {
                e?.stopPropagation(),
                    m("dismiss"),
                    d(!0),
                    !0 === t.isDismissible &&
                        (0, nI.d6)(eH.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: e5.i.USER_DISMISS,
                        });
            },
            [m, t.isDismissible],
        ),
        x = c.useCallback(
            (e) => {
                !i.current &&
                    (e && null === a.current
                        ? (a.current = setTimeout(() => {
                              (i.current = !0),
                                  (a.current = null),
                                  tf.default.track(e4.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: s?.sessionId,
                                      page_type: n,
                                      page_category: s?.pageCategory,
                                      page_section: s?.pageSection,
                                      type: ss,
                                  });
                          }, 1e3))
                        : e || null === a.current || (clearTimeout(a.current), (a.current = null)));
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        );
    return (c.useEffect(
        () => () => {
            null !== a.current && (clearTimeout(a.current), (a.current = null));
        },
        [],
    ),
    r)
        ? null
        : (0, o.jsx)(Z.N, {
              theme: es.NJ.DARKER,
              children: (e) =>
                  (0, o.jsx)(n7.L, {
                      innerRef: l,
                      onChange: x,
                      threshold: 0,
                      children: (0, o.jsx)("div", {
                          ref: l,
                          className: u()(sn.YB, e),
                          children: (0, o.jsxs)(eh.s, {
                              className: sn.kL,
                              onClick: g,
                              "aria-label": ei.intl.string(el.default["34GMP9"]),
                              children: [
                                  (0, o.jsx)("img", {
                                      className: sn.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, o.jsx)("div", { className: sn.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, o.jsx)("div", {
                                          className: sn.b,
                                          children: (0, o.jsx)(ey.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: se.P,
                                              onClick: h,
                                              "aria-label": ei.intl.string(ei.t.WAI6xu),
                                          }),
                                      }),
                                  (0, o.jsx)("div", {
                                      className: sn.jE,
                                      children: (0, o.jsxs)("div", {
                                          className: sn.rF,
                                          children: [
                                              (0, o.jsxs)("div", {
                                                  className: sn.Z,
                                                  children: [
                                                      (0, o.jsx)(ec.D, {
                                                          className: sn.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: ei.intl.string(el.default["34GMP9"]),
                                                      }),
                                                      (0, o.jsx)(Q.E, {
                                                          className: sn.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: ei.intl.string(el.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, o.jsx)(J.$, {
                                                  variant: "overlay-primary",
                                                  text: ei.intl.string(ei.t.jVcuVY),
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
var si = n(337183),
    sa = n(212407),
    sr = n(815280),
    so = n(10675);
let sc = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, tN.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: i } = (0, sa.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: s,
        className: so.BX,
        children: [
            (0, o.jsx)("div", {
                className: so.vK,
                children: null != l && (0, o.jsx)(sr.A, { bannerStatic: l, bannerAnimated: i }),
            }),
            (0, o.jsx)("div", {
                className: so.HQ,
                children: (0, o.jsxs)("div", {
                    className: so.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(nH, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(ec.D, {
                            variant: "heading-xxl/bold",
                            className: so.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        r || c
                            ? (0, o.jsxs)(Q.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      r && t.body,
                                      r && c && " ",
                                      c &&
                                          (0, o.jsx)(eL.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: so.CU,
                                              style: { ...a },
                                              children: ei.intl.string(ei.t.O7ADgv),
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
var sd = n(449543),
    su = n(189213),
    sm = n(290136),
    sg = n(478016),
    sh = n(825484),
    sx = n(812993),
    sf = n(914410),
    sE = n(839534),
    sp = n(597783),
    sv = n(61750);
function sC(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, P.bG)([td.A], () => td.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var sj = n(162945),
    sb = n(858708);
let sS = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, sp.Z)(n),
            l = c.useRef(null),
            { isHoveringOrFocusing: i } = (0, ef.A)(l),
            { readyToClaim: a, collectibleProductSkuIds: r, collectedSkuIds: d } = sC(t, n),
            m = (0, P.bG)([td.A], () => td.A.isClaiming === n);
        return (0, o.jsx)(n7.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, o.jsx)("div", {
                ref: l,
                className: u()(sj.ty, sb.Q3, { [sj.yo]: i }),
                "aria-label": ei.intl.formatToPlainString(ei.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: sj.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: sb.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: sj.N1,
                            children: (0, o.jsx)(sx.Lp, {
                                text: ei.intl.string(ei.t.rykAJ9),
                                disableColor: !0,
                                className: sb.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: sj.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: sb.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: sb.cs,
                                            children: [
                                                (0, o.jsx)(ec.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: sj.tZ,
                                                    children: ei.intl.string(ei.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(ew.m, {
                                                    text: a
                                                        ? ei.intl.string(ei.t.cKH3tk)
                                                        : ei.intl.formatToPlainString(ei.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: sb.ZB,
                                                        children: (0, o.jsx)(sm.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: sj.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: sb.L$,
                                                children: [
                                                    (0, o.jsx)(sf.Ay, {
                                                        variant: sf.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(sb.__, { [sb.gF]: a }),
                                                        children: [
                                                            a
                                                                ? (0, o.jsx)(sg.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, o.jsx)(Q.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: ei.intl.formatToPlainString(ei.t["5TwASM"], {
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
                                    className: sj.Vs,
                                    children: (0, o.jsx)(sh.e, {
                                        wrap: !1,
                                        className: sj.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)(J.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    a &&
                                                        (0, sE.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = N.A.getProduct(n);
                                                                null != e &&
                                                                    (0, sv.A)({
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
                                                                        (0, o.jsx)(su.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: ei.intl.string(ei.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: ei.intl.string(ei.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, o.jsx)("div", {
                                                                                children: ei.intl.string(
                                                                                    ei.t["0YpIF/"],
                                                                                ),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: ei.intl.string(ei.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !a,
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
    s_ = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: i, tab: a } = e,
            r = (0, nf.Mk)(a),
            d = c.useMemo(() => N.A.getCategoryForProduct(i.rewardSkuId), [i.rewardSkuId]),
            u = (0, P.bG)([td.A], () => td.A.getPurchase(i.rewardSkuId)),
            { products: m } =
                ((t = (0, n1.A)()),
                (n = c.useMemo(
                    () => (l ? [] : t(i.rankedSkuIds).filter((e) => e.skuId !== i.rewardSkuId || null != u)),
                    [l, t, i.rankedSkuIds, u, i.rewardSkuId],
                )),
                (s = (0, tL.p)()(n)),
                { products: (0, tO.X)(s) }),
            g = c.useMemo(
                () =>
                    !l &&
                    0 !== i.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    i.rankedSkuIds.every((e) => N.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, i.rankedSkuIds, m.length],
            ),
            h = l || g,
            { readyToClaim: x } = sC(d, i.rewardSkuId),
            f = null == u && null != i.rewardSkuId && null != d;
        return (0, o.jsx)(sd.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(tk.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          f &&
                              x &&
                              (0, o.jsx)(
                                  A.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(sS, { category: d, rewardSkuId: i.rewardSkuId }),
                                  },
                                  i.rewardSkuId,
                              ),
                          m.map((e, t) => {
                              let n = N.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, o.jsx)(
                                        A.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, o.jsx)(tB.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, nU.$b)(90);
let sA = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: nN.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    sN = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            i = (0, tN.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            a = (0, P.bG)([_.default], () => _.default.getCurrentUser()),
            { analyticsLocations: r } = (0, p.Ay)(ee.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: m,
                heroBannerStatic: g,
                heroBannerAnimated: h,
            } = (0, sa.Kk)(n),
            x = c?.responsive ?? !1,
            f = c?.backgroundStyle;
        return null != a && (t || n !== sA)
            ? (0, o.jsx)(p.f5, {
                  value: r,
                  children: (0, o.jsxs)("div", {
                      ref: i,
                      className: nV.os,
                      children: [
                          (0, o.jsx)("div", {
                              className: u()(nV.vK, { [nV.no]: x }),
                              style: null != f ? { background: f } : void 0,
                              children:
                                  null != g &&
                                  (0, o.jsx)(sr.A, { bannerStatic: g, bannerAnimated: h, isResponsive: x }),
                          }),
                          (0, o.jsxs)("div", {
                              className: nV.xX,
                              children: [
                                  (0, o.jsx)("div", {
                                      className: u()(nV.bC, { [nV.no]: x }),
                                      children: t
                                          ? (0, o.jsx)("div", { className: nV.Hw })
                                          : (0, o.jsx)("div", {
                                                className: nV.Hw,
                                                children: (0, o.jsxs)("div", {
                                                    className: nV.Wq,
                                                    children: [
                                                        null != m &&
                                                            (0, o.jsx)("img", {
                                                                className: nV.rm,
                                                                src: m,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, o.jsx)(ec.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: nV.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, o.jsx)(Q.E, {
                                                                variant: "text-md/normal",
                                                                className: nV.Tm,
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
                                  (0, o.jsx)(s_, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var sI = n(222884);
let sL = function (e) {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, P.bG)([_.default], () => _.default.getCurrentUser()),
        i = (0, nf.Mk)(s),
        a = (0, P.bG)([N.A], () => (null != t.categorySkuId ? N.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, n1.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        m = (0, tO.X)(d),
        { analyticsLocations: g } = (0, p.Ay)(ee.A.COLLECTIBLES_SHOP_SHELF),
        h = c.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: a?.isOrbsExclusive === !0 && s !== tG.G2.ORBS,
            });
        }, [t.categorySkuId, a, n, s]);
    if (null == l || 0 === m.length) return null;
    let x = t.buttonText ?? ei.intl.formatToPlainString(ei.t.bc9RBE, { category_name: t.name }),
        f = t.showButton,
        E = t.desktopBackgroundImage,
        v = null != E;
    return (0, o.jsx)(p.f5, {
        value: g,
        children: (0, o.jsxs)("div", {
            className: u()(sI.mu, nV.YB, v ? sI.VA : sI.Ti),
            children: [
                v && (0, o.jsx)("img", { className: sI.iL, src: E, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: sI.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: sI.wx,
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
                        (0, o.jsx)(sd.A, {
                            gap: "xl",
                            edgeFade: v ? "sm" : void 0,
                            children: m.map((e, n) =>
                                null == N.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, o.jsx)(
                                          A.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, o.jsx)(tB.A, { skuId: e.skuId, prioritizedCurrency: i }),
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
var sO = n(465794),
    sT = n(69236),
    sR = n(44724),
    sk = n(421108),
    sy = n(873297);
let sM = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: s,
            gradientAngle: l,
            skuIds: i,
            tab: a,
            endTime: r,
            ctaType: d = "storefront",
            logoUrl: u,
        } = e,
        m = (0, sk.u)(r) ?? void 0,
        g = (0, sT.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || g
                    ? {
                          kind: "button",
                          text: ei.intl.string(ei.t.apFNLU),
                          onClick: () => (0, sR.default)({ applicationId: t }),
                          onMouseDown: () => (0, sR.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(sO.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: en.pe.TIER_2,
                              buttonTextOverride: ei.intl.string(ei.t.pj0XBN),
                          }),
                      },
            [d, t, g],
        );
    return (0, o.jsx)(sy.A, {
        skuIds: i,
        tab: a,
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
var sP = n(575593),
    sD = n(770178),
    sB = n(929283),
    sH = n(273411);
let sw = [
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
function sF(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        i = N.A.getProduct(t.skuId),
        a = i?.items[0],
        r = i?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: sH.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != a && r === sP.R.AVATAR_DECORATION && (0, o.jsx)(sB.i, { item: a }),
    });
}
let sG = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, i] = c.useState(!1),
            [a, r] = c.useState([]),
            [d] = c.useState(() =>
                [...sw]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${tG.H1 - 200 * Math.random()}ms`,
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
                n && setTimeout(() => i(!0), tG.H1);
            }, [n]),
            (0, o.jsx)("div", {
                className: u()(sH.rA, { [sH.Kb]: t, [sH.pp]: l }),
                children: a.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, o.jsx)(sF, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    sU = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = c.useRef(null),
            [l, i] = c.useState(0),
            a = c.useCallback(() => {
                null != s.current && i(s.current.offsetWidth);
            }, []);
        return (
            (0, sD.g)(s, a),
            (0, o.jsx)("div", {
                ref: s,
                className: sH.eL,
                children: (0, o.jsx)(sG, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var sz = n(815021);
let sV = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            s = N.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            l = c.useRef(null),
            i = c.useRef(null),
            [a, r] = c.useState(),
            [d, m] = c.useState(!1);
        c.useEffect(() => {
            let e = i.current;
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
            { handleCardVisibilityChange: h } = (0, sp.Z)(g, "home", "marketing wide banner"),
            x = (0, A.uM)(),
            { bannerURL: f } = (0, sa.w$)(t),
            E = n === tG.G2.ORBS,
            p = null != t.ctaRoute && "" !== t.ctaRoute,
            v = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
            C = null != t.logoURL && "" !== t.logoURL,
            j = c.useCallback(() => {
                if ((m(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, nI.$l)(eH.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: e5.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            b = c.useCallback(
                (e) => {
                    tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                (0, sR.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, st.pX)(e);
                    }
                },
                [t.ctaRoute, b],
            );
        if (null == f || d) return null;
        let _ = u()(nV.nM, nV.Tq, nV.TS, nV.YB, { [nV._1]: E, [nV.vb]: p }),
            I = (0, o.jsxs)(o.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, o.jsx)("div", {
                            className: nV.Mh,
                            children: (0, o.jsx)(sz.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), j();
                                },
                                "aria-label": ei.intl.string(ei.t.WAI6xu),
                            }),
                        }),
                    (0, o.jsx)("div", {
                        className: u()(nV.zK, { [nV._1]: E }),
                        style: null != a ? { height: `${a}px` } : void 0,
                        children: (0, o.jsx)("img", {
                            ref: i,
                            src: f,
                            alt: t.title,
                            className: u()(nV.LN, { [nV.d5]: E }),
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: u()(nV.Ep, { [nV.Qq]: v }),
                        style: { maxHeight: null != a ? `${a}px` : "auto" },
                        children: (0, o.jsxs)("div", {
                            className: nV.E8,
                            children: [
                                (0, o.jsx)(ec.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: E ? nV.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, o.jsx)(Q.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: E ? "text-md/medium" : "text-sm/medium",
                                    children: E
                                        ? ei.intl.format(ei.t.SFFP7K, {
                                              helpdeskArticle: n3.A.getArticleURL(e4.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                v &&
                                    (0, o.jsxs)("div", {
                                        className: nV.nP,
                                        children: [
                                            (0, o.jsx)(J.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), S(t.ctaText ?? ei.intl.string(ei.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? ei.intl.string(ei.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? ei.intl.formatToPlainString(ei.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            C && (0, o.jsx)("img", { src: t.logoURL, alt: "", className: nV.bU }),
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
                (0, o.jsx)(n7.L, {
                    innerRef: l,
                    onChange: h,
                    threshold: 0,
                    children: p
                        ? (0, o.jsx)(eF.D, { innerRef: l, onClick: () => S(null), className: u()(e, _), children: I })
                        : (0, o.jsx)("div", { ref: l, className: u()(e, _), children: I }),
                }),
        });
    },
    sK = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: i, includeUnpublished: a } = (0, tw.A)(),
            [r, d] = c.useState(!1),
            m = (0, A.uM)(),
            g = m?.sessionId ?? "",
            h = (0, B.H)({ location: "collectibles_shop_feed" });
        c.useEffect(() => {
            (0, tT.z)({
                sessionId: g,
                checkpoint: tT.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: a,
                cacheDisabled: i,
            });
        }, [l]);
        let {
                isFetchingShopHome: x,
                fetchShopHomeError: f,
                shopBlocks: E,
                refreshShopHome: p,
            } = (0, nT.y)(l, { noCache: i, includeUnpublished: a, logPerf: !0 }, { sessionId: g, tab: l }),
            v = c.useCallback(() => {
                p();
            }, [p]);
        return (c.useEffect(() => {
            null != f ||
                x ||
                0 === E.length ||
                (0, tT.z)({
                    sessionId: g,
                    checkpoint: tT.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: a,
                    cacheDisabled: i,
                });
        }, [f, x, E.length, a, i, g, l]),
        null != f)
            ? (0, o.jsx)(nA.h, { onRetry: v, errorOrigin: nA.A.SHOP_PAGE, errorMessage: f.message })
            : x || 0 === E.length
              ? (0, o.jsxs)("div", {
                    className: u()(nV.g4, nV.Of),
                    children: [
                        (0, o.jsx)(si.A, { isLoading: x, handleTransition: t, tab: l }),
                        (0, o.jsx)(nW, { isLoading: x, handleTransition: t, categories: [] }),
                        (0, o.jsx)(n6, {
                            isLoading: x,
                            title: l === tG.G2.ORBS ? ei.intl.string(ei.t.dFgeuZ) : ei.intl.string(ei.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, o.jsx)(o.Fragment, {
                    children: E.map((e, i) =>
                        (function (e, i, a) {
                            if (null == e) return null;
                            let c = null,
                                m = !1;
                            switch (e.type) {
                                case nN.g.HERO:
                                    c = (0, o.jsx)(
                                        si.A,
                                        { isLoading: x, handleTransition: t, heroBlock: e, tab: l },
                                        a,
                                    );
                                    break;
                                case nN.g.FEATURED:
                                    c = (0, o.jsx)(
                                        nW,
                                        { isLoading: x, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case nN.g.FEED:
                                    let g = e.sortedSkuIds;
                                    c = (0, o.jsx)(
                                        n6,
                                        {
                                            title:
                                                l === tG.G2.ORBS
                                                    ? ei.intl.string(ei.t.dFgeuZ)
                                                    : ei.intl.string(ei.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: g,
                                            buttonContainerClassName: i?.type === nN.g.IMMERSIVE_BANNER ? nV.w : void 0,
                                            tab: l,
                                            orbsSupportedOnly: l === tG.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case nN.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, nI.En)(eH.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, o.jsx)(sV, { wideBannerBlock: e, tab: l }, a);
                                    break;
                                case nN.g.SHELF:
                                    c = (0, o.jsx)(sL, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case nN.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(nF, { countdownTimerBlock: e, isVisible: r }, a)), (m = !0);
                                    break;
                                case nN.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        sc,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        a,
                                    );
                                    break;
                                case nN.g.REWARD_HERO:
                                    c = (0, o.jsx)(sN, { isLoading: x, handleTransition: t, heroBlock: e, tab: l }, a);
                                    break;
                                case nN.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, nI.En)(eH.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, o.jsx)(
                                        nO,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(sl, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case nN.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        nO,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(sM, {
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
                                        a,
                                    );
                                default:
                                    return null;
                            }
                            return (0, o.jsx)(
                                nO,
                                {
                                    blockType: e.type,
                                    children: (0, o.jsx)("div", {
                                        className: u()(nV.v1, nV.Of, { [nV.J1]: 0 === a || m }),
                                        children: c,
                                    }),
                                },
                                a,
                            );
                        })(e, i > 0 ? E[i - 1] : null, i),
                    ),
                });
    },
    sY = function (e) {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = c.useRef(null),
            { handleScroll: i } = tp(l, n),
            a = (0, tH.U)(),
            r = (0, A.uM)(),
            [d, u] = c.useState(tG.md),
            [m, g] = c.useState(!1);
        return (
            c.useEffect(() => {
                if (null != l.current) {
                    function e() {
                        if (null == l.current) return;
                        let e = l.current.getDistanceFromBottom();
                        d >= 36 ? g(e < 20) : e <= 200 && u((e) => e + tG.md);
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
                className: nV.OW,
                ref: l,
                onScroll: i,
                children: (0, o.jsxs)("div", {
                    className: nV.bx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nV.rb,
                            children: [
                                (0, o.jsx)(sK, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: a,
                                    tab: n,
                                }),
                                n !== tG.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, o.jsxs)("div", {
                                        className: nV.R$,
                                        children: [
                                            (0, o.jsx)(ec.D, {
                                                variant: "heading-md/semibold",
                                                children: ei.intl.string(ei.t.Yr70c4),
                                            }),
                                            (0, o.jsx)(J.$, {
                                                variant: "primary",
                                                text: ei.intl.string(ei.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === tG.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, o.jsx)(sU, { peaking: m, transitioning: s === tG.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var sW = n(154323),
    s$ = n(295811),
    sq = n(870216);
let sZ = { "Any:personalization-header": n8 },
    sX = { [tj.b.SHOP_HOME]: sZ },
    sQ = { "1465939725649973269": sZ, "1478495181551440044": sZ },
    sJ = function () {
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
    s0 = { prioritizedCurrency: nf.Hi.ORBS };
function s1(e) {
    let { tab: t } = e,
        [n, s, l] = (0, P.yK)([sq.A], () => [sq.A.getLayout(t), sq.A.isFetchingLayout(t), sq.A.getLayoutFetchError(t)]),
        i = (0, P.bG)([sW.A], () => sW.A.get("shop_include_unpublished")),
        a = (0, P.bG)([N.A], () => N.A.skipNumCategories),
        r = c.useMemo(() => {
            let e = {};
            return !0 === i && (e.include_unpublished = !0), null != a && a > 0 && (e.skip_num_categories = a), e;
        }, [i, a]),
        d = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (c.useEffect(() => {
            d && (0, sE.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== M.HOME || d || s
            ? null
            : (0, o.jsx)(tC.Z_, {
                  tenantId: e4.FYj,
                  templateId: tj.b.SHOP_HOME,
                  requestParams: r,
                  overrides: sX[tj.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(tC.Qs, { tenantId: e4.FYj, layoutId: n, overrides: sQ[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === M.ORBS && (0, o.jsx)(sJ, {}),
            t === M.ORBS ? (0, o.jsx)(nf.v3.Provider, { value: s0, children: u }) : u,
        ],
    });
}
function s2(e) {
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
        : (0, o.jsx)(tC.Ay, { layout: n });
}
let s4 = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, A.uM)(),
        i = (0, P.bG)([s$.A], () => s$.A.getShopLayoutUrlOverride()),
        a = c.useRef(null),
        { handleScroll: r } = tp(a, n),
        [d, m] = c.useState(tG.md),
        [g, h] = c.useState(!1);
    return (
        c.useEffect(() => {
            if (null != a.current) {
                function e() {
                    if (null == a.current) return;
                    let e = a.current.getDistanceFromBottom();
                    d >= 36 ? h(e < 20) : e <= 200 && m((e) => e + tG.md);
                }
                let t = a.current.getScrollerNode();
                return (
                    t?.addEventListener("scroll", e),
                    () => {
                        t?.removeEventListener("scroll", e);
                    }
                );
            }
        }, [a, d, m, h]),
        (0, o.jsx)(H.Ch, {
            className: nV.OW,
            ref: a,
            onScroll: r,
            children: (0, o.jsxs)("div", {
                className: nV.bx,
                children: [
                    (0, o.jsxs)("div", {
                        className: u()(nV.rb, nV.GS),
                        children: [
                            null != i && "" !== i ? (0, o.jsx)(s2, { url: i }) : (0, o.jsx)(s1, { tab: n }),
                            n !== M.CATALOG &&
                                d >= 36 &&
                                (0, o.jsxs)("div", {
                                    className: nV.R$,
                                    children: [
                                        (0, o.jsx)(ec.D, {
                                            variant: "heading-md/semibold",
                                            children: ei.intl.string(ei.t.Yr70c4),
                                        }),
                                        (0, o.jsx)(J.$, {
                                            variant: "primary",
                                            text: ei.intl.string(ei.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    tf.default.track(e4.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (0, o.jsx)(sU, { peaking: g, transitioning: s === tG.Pf.OUT }),
                ],
            }),
        })
    );
};
var s5 = n(564027);
let s3 = function () {
        return (0, o.jsxs)("div", {
            className: s5.z,
            children: [
                (0, o.jsx)("img", {
                    className: s5.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: ei.intl.string(ei.t["p8+qtU"]),
                }),
                (0, o.jsx)(ec.D, { variant: "heading-xl/semibold", children: ei.intl.string(ei.t["p8+qtU"]) }),
                (0, o.jsx)(Q.E, { variant: "text-md/medium", children: ei.intl.string(ei.t.UEiyvs) }),
            ],
        });
    },
    s9 = [tG.G2.HOME, tG.G2.ORBS];
function s8(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: i,
            refreshCategories: a,
        } = e,
        r = (0, P.bG)([N.A, td.A], () =>
            null != N.A.error
                ? `shop load fetch categories error: ${N.A.error.message}`
                : null != td.A.claimError
                  ? `shop load claim error: ${td.A.claimError.message}`
                  : null != td.A.fetchError
                    ? `shop load fetch purchase error: ${td.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, P.bG)([_.default], () => _.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, tw.A)();
        c.useEffect(() => {
            null != e &&
                tc.A.captureMessage(e, {
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
                return (e = tF), (tF = null), e ?? void 0;
            }
        }),
        [x, f] = c.useState(h),
        [E, p] = c.useState(null == h),
        v = c.useMemo(() => {
            let e = new URLSearchParams(g.search).get(tG.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        C = c.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !tG.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        j = (0, to.U)("CollectiblesContent"),
        b = (0, tu.a)("CollectiblesContent"),
        S = c.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: a,
                    isOrbsExclusive: r,
                } = e;
                if ((i(t, n), b && null != n && a && !r))
                    return void m.push(e4.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = l && !u,
                    c = r ? tG.G2.ORBS : tG.G2.CATALOG;
                f(n), p(!a), s(c, o);
            },
            [u, s, i, b, m],
        ),
        { searchError: A } = (0, tm.S)();
    return null != A
        ? (0, o.jsx)(s3, {})
        : null != r
          ? (0, o.jsx)(nA.h, { onRetry: a, errorMessage: r, errorOrigin: nA.A.SHOP_PAGE })
          : t === tG.G2.HOME && j
            ? (0, o.jsx)(s4, { tab: M.HOME, transitionState: l, handleTransition: S })
            : t === tG.G2.ORBS && j
              ? (0, o.jsx)(s4, { tab: M.ORBS, transitionState: l, handleTransition: S })
              : s9.includes(t)
                ? (0, o.jsx)(sY, { handleTransition: S, tab: t, transitionState: l })
                : t === tG.G2.GAME_SERVERS
                  ? d
                      ? (0, o.jsx)(ta, {})
                      : (0, o.jsx)(y.rd, { to: e4.BVt.COLLECTIBLES_SHOP_WITH_TAB(tG.G2.HOME) })
                  : (0, o.jsx)(nS, {
                        tab: t,
                        categories: C,
                        initialCategoryId: x ?? v,
                        showFilterInitially: E && null == v,
                        onUnmount: () => {
                            f(void 0), p(!0);
                        },
                    });
}
var s6 = n(956123),
    s7 = n(235939),
    le = n(870308),
    lt = n(650583);
function ln(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === lt.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let ls = function (e) {
    let { tab: t = tG.G2.HOME } = e;
    (0, j.P)(C.a);
    let n = (0, E.A)((0, m.A)()),
        s = (0, g.bG)([_.default], () => _.default.getCurrentUser());
    (0, S.pE)();
    let l = (0, tq.yB)("CollectiblesShop"),
        { onClose: i } = (function () {
            let { search: e } = (0, y.zy)(),
                t = (0, y.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === s) {
                        (0, st.aX)(), (0, z.openUserSettings)();
                        return;
                    }
                    (0, st.EL)() ? (0, st.aX)() : (0, st.pX)(e4.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: a, hasFilters: r } = (0, k.v)(),
        d = c.useMemo(() => (t === tG.G2.HOME && null != a && r() ? a : t), [t, a, r]),
        M = (0, L.M)("CollectiblesShop");
    (0, b.A)(M ? e4.FYj : void 0);
    let { categories: P, refreshCategories: D } = (0, T.Ay)({ logPerf: !0 }, { sessionId: n, tab: d }),
        B = c.useMemo(() => [...P.values()], [P]),
        [H, w] = c.useState(),
        F = (0, g.bG)([N.A], () => N.A.getCategory(H)?.name),
        [G, U] = c.useState();
    (0, tK.XU)(n);
    let V = c.useCallback((e, t) => {
            U(e), w(t);
        }, []),
        { selectedTab: K, transitionState: Y, transitionToTab: W } = (0, R.o)(d);
    (0, v.HU)({ location: ei.intl.string(ei.t.pWG4ze) }), (0, O.uS)(n, K, F, Y, G), (0, O.N0)(K, s);
    let { dismissShopButtonDC: $ } = (0, le.A)();
    c.useEffect(() => {
        $();
    }, [$]),
        c.useEffect(() => {
            (0, f.I)(e4.BVt.COLLECTIBLES_SHOP);
        }, []);
    let q = c.useRef(null),
        Z = c.useRef(null);
    (0, x.tj)(q);
    let X = (0, h.useHasAnyModalOpen)();
    c.useEffect(() => {
        Z.current?.focus();
    }, []),
        (0, tq.gB)();
    let { analyticsLocations: Q } = (0, O.lC)(K);
    return (0, o.jsx)(p.f5, {
        value: Q,
        children: (0, o.jsx)(A.R9, {
            newValue: { sessionId: n, pageCategory: F, pageSize: tG.l5 },
            children: (0, o.jsx)(I.iM, {
                tab: K,
                children: (0, o.jsx)(ln, {
                    onClose: i,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(tM.bx, { [tq.jP]: l }),
                        ref: Z,
                        inert: X,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(s6.G, { handleTransition: W, selectedTab: K }),
                            (0, o.jsx)(s7.A, { tab: K, handleTransition: W }),
                            (0, o.jsx)("div", {
                                className: u()(tM.td, {
                                    [tM.RK]: Y === tG.Pf.VISIBLE,
                                    [tM.in]: Y === tG.Pf.IN,
                                    [tM.FD]: Y === tG.Pf.OUT,
                                }),
                                children: (0, o.jsx)(s8, {
                                    tab: K,
                                    refreshCategories: D,
                                    transitionToTab: W,
                                    transitionState: Y,
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
