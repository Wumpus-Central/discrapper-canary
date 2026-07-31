s.r(t), s.d(t, { default: () => la });
var n,
    l,
    i,
    a,
    r,
    o,
    c,
    d = s(477900),
    u = s(582128),
    m = s(503698),
    g = s.n(m),
    h = s(132500),
    x = s(702841),
    f = s(192308),
    E = s(315710),
    p = s(944791),
    v = s(444927),
    C = s(688810),
    j = s(726249),
    b = s(475073),
    S = s(611924),
    _ = s(744082),
    N = s(561794),
    A = s(287809),
    I = s(440938),
    L = s(590180),
    O = s(161918),
    T = s(71604),
    R = s(790297),
    k = s(841702),
    y = s(983545),
    M = s(23161);
s(323874), s(14289), s(35956), s(321073);
var P = s(806163),
    D = (((n = {}).HOME = "home"), (n.CATALOG = "catalog"), (n.ORBS = "orbs"), n),
    B = s(17928),
    H = s(775602),
    w = s(196736),
    F = s(689175),
    G = s(277984),
    U = s(670735),
    z = s(790284),
    V = s(780964),
    K = s(766075),
    Y = s(280450),
    W = s(166403),
    $ = s(123917),
    q = s(428262),
    Z = s(814201),
    X = s(581453),
    Q = s(43990),
    J = s(403581),
    ee = s(834730),
    et = s(821609),
    es = s(793574),
    en = s(532794),
    el = s(202541),
    ei = s(818348),
    ea = s(275695),
    er = s(375708),
    eo = s(923137);
function ec() {
    let e = u.useCallback(() => {
        (0, en.A)({ subscriptionTier: el.pe.TIER_2, analyticsLocations: [es.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, d.jsx)(Q.N, {
        theme: ei.NJ.DARKER,
        children: (t) =>
            (0, d.jsxs)("div", {
                className: g()(eo.vK, t),
                children: [
                    (0, d.jsxs)("div", {
                        className: eo.Pf,
                        children: [
                            (0, d.jsx)(J.t, {
                                className: eo.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, d.jsx)(ee.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: er.intl.string(ea.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, d.jsx)(et.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: J.t,
                        text: er.intl.string(er.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var ed = s(462887),
    eu = s(297264),
    em = s(736653),
    eg = s(385948);
function eh(e) {
    let { onRetry: t, errorMessage: s } = e,
        n = (0, em.Ay)(),
        l = (0, B.bG)([A.default], () => {
            let e = A.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, d.jsxs)("div", {
        className: eg.kL,
        children: [
            (0, d.jsx)("img", {
                className: eg.Sl,
                src: (0, ed.M)(n) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, d.jsx)(eu.D, { variant: "heading-xl/semibold", children: er.intl.string(er.t.i5SQ74) }),
            (0, d.jsx)(ee.E, {
                className: eg.h_,
                variant: "text-md/normal",
                color: "text-muted",
                children: er.intl.string(er.t.F8FvUy),
            }),
            l &&
                null != s &&
                (0, d.jsx)(ee.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: "staff-only debug: " + s,
                }),
            (0, d.jsx)(et.$, { variant: "primary", text: er.intl.string(er.t["+hivLW"]), onClick: t }),
        ],
    });
}
var ex = s(349085),
    ef = s(890856),
    eE = s(331322),
    ep = s(713517),
    ev = s(177914);
function eC(e) {
    let { name: t, coverUrl: s, fromPriceLabel: n, nitroFromPriceLabel: l, onClickCard: i, onClickViewPlans: a } = e,
        r = u.useRef(null),
        { isHoveringOrFocusing: o } = (0, ep.A)(r),
        c = (0, B.bG)([A.default], () => q.Ay.canUseShopDiscounts(A.default.getCurrentUser())) && null != l,
        m = c ? l : n,
        h = u.useCallback(
            (e) => {
                e.stopPropagation(), a?.();
            },
            [a],
        );
    return (0, d.jsxs)(ef.s, {
        ref: r,
        onClick: i,
        "aria-label": t,
        className: g()(ev.Nr, { [ev.yo]: o }),
        children: [
            (0, d.jsx)("div", {
                className: ev.q4,
                "aria-hidden": !0,
                children: null != s && (0, d.jsx)("img", { className: ev.xy, src: s, alt: "" }),
            }),
            (0, d.jsxs)("div", {
                className: ev.Iv,
                children: [
                    null != s
                        ? (0, d.jsx)("img", { className: ev.N4, src: s, alt: "" })
                        : (0, d.jsx)("div", {
                              className: ev.WB,
                              children: (0, d.jsx)(ee.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, d.jsx)("div", { className: ev.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, d.jsxs)("div", {
                className: ev.qr,
                children: [
                    (0, d.jsxs)("div", {
                        className: ev.cs,
                        children: [
                            (0, d.jsx)(ee.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                tag: "p",
                                children: t,
                            }),
                            null != m &&
                                (0, d.jsx)("div", {
                                    className: ev.F1,
                                    children: (0, d.jsxs)(eE.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, d.jsxs)(eE.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    c &&
                                                        (0, d.jsx)(J.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, d.jsx)(ee.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: m,
                                                    }),
                                                ],
                                            }),
                                            (0, d.jsx)(ee.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: er.intl.string(ea.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, d.jsx)("div", {
                        className: ev.E1,
                        children: (0, d.jsx)(et.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: er.intl.string(ea.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ej = s(452389);
function eb() {
    return (0, d.jsx)("div", {
        className: g()(ev.Nr, ej.s7, ej.U6),
        "aria-hidden": !0,
        children: (0, d.jsxs)("div", {
            className: ej.qr,
            children: [(0, d.jsx)("div", { className: ej.w9 }), (0, d.jsx)("div", { className: ej.n2 })],
        }),
    });
}
var eS = s(191932);
let e_ = u.memo(function (e) {
    let { game: t, onSelect: s } = e,
        n = u.useCallback(() => s(t), [t, s]),
        l = (0, ex.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, d.jsx)(eC, {
        name: t.name,
        coverUrl: l,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: n,
        onClickViewPlans: n,
    });
});
function eN(e) {
    let { games: t, title: s, onSelectGame: n, loading: l = !1 } = e;
    return (0, d.jsxs)("section", {
        className: eS.u,
        children: [
            null != s && (0, d.jsx)(eu.D, { variant: "heading-lg/semibold", children: s }),
            (0, d.jsx)("div", {
                className: eS.V,
                children: l
                    ? Array.from({ length: 10 }, (e, t) => (0, d.jsx)(eb, {}, t))
                    : t.map((e) => (0, d.jsx)(e_, { game: e, onSelect: n }, e.id)),
            }),
        ],
    });
}
var eA = s(32880),
    eI = s(410232),
    eL = s(231483),
    eO = s(339350),
    eT = s(349288),
    eR = s(504660);
function ek() {
    let e = u.useMemo(
        () => [
            { Icon: eA.s, label: er.intl.string(ea.default.GJNQYz) },
            { Icon: eI.k, label: er.intl.string(ea.default.pTinR2) },
            { Icon: eL.l, label: er.intl.string(ea.default.s0N1nM) },
            { Icon: eO.Q, label: er.intl.string(ea.default.NzrGEi) },
        ],
        [],
    );
    return (0, d.jsxs)("section", {
        className: eR.ZK,
        children: [
            (0, d.jsxs)("div", {
                className: eR.jE,
                children: [
                    (0, d.jsx)(eu.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: er.intl.string(ea.default.F5W36W),
                    }),
                    (0, d.jsxs)(ee.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            er.intl.string(ea.default.xMpGuO),
                            " ",
                            (0, d.jsx)(eT.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: er.intl.string(ea.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, d.jsx)("div", {
                className: eR._A,
                children: e.map((e) => {
                    let { Icon: t, label: s } = e;
                    return (0, d.jsxs)(
                        "div",
                        {
                            className: eR.Tc,
                            children: [
                                (0, d.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, d.jsx)(ee.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-subtle",
                                    tag: "span",
                                    children: s,
                                }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
var ey = s(499279);
function eM() {
    return (0, d.jsxs)("div", {
        className: ey.vK,
        children: [
            (0, d.jsx)("div", {
                className: ey.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, d.jsx)("div", { className: ey.Ge, "aria-hidden": !0 }),
            (0, d.jsx)("div", { className: ey.f5, "aria-hidden": !0 }),
        ],
    });
}
var eP = s(408278),
    eD = s(548411),
    eB = s(554830),
    eH = s(281445),
    ew = s(390544),
    eF = s(554146),
    eG = s(866665),
    eU = s(939249),
    ez = s(880892);
let eV = { TERTIARY: ez.Xe, SECONDARY: ez.Rm, PRIMARY: ez.zB },
    eK = { SIZE_24: ez.q1, SIZE_32: ez.Hb, SIZE_36: ez.VM },
    eY = u.forwardRef(function (e, t) {
        let {
            className: s,
            tooltip: n,
            color: l,
            size: i = eK.SIZE_32,
            icon: a,
            onMouseDown: r,
            onClick: o,
            disabled: c,
            focusProps: u,
        } = e;
        return (0, d.jsx)(eG.m, {
            asContainer: !0,
            text: n,
            shouldShow: !c,
            children: (0, d.jsx)(eU.D, {
                innerRef: t,
                "aria-label": n,
                "aria-disabled": c,
                className: g()(s, ez.x6, l, i, { [ez.r9]: c }),
                onMouseDown: r,
                onClick: (e) => {
                    o(e);
                },
                focusProps: u,
                children: a,
            }),
        });
    });
var eW = s(933832),
    e$ = s(624479),
    eq = s(509434),
    eZ = s(131607),
    eX = s(427209),
    eQ = s(95035),
    eJ = s(685743),
    e0 = s(342942),
    e1 = s(294454),
    e2 = s(625903),
    e4 = s(445927);
function e3(e) {
    let { server: t, onOpenSettings: s } = e,
        n = (0, e4.A)(t.instance),
        l = u.useCallback(() => {
            s(t);
        }, [s, t]);
    return (0, d.jsx)(eY, {
        color: eV.SECONDARY,
        size: eK.SIZE_24,
        icon: (0, d.jsx)(e2.Z, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: l,
        disabled: !n,
        tooltip: er.intl.string(ea.default["feUiM/"]),
    });
}
var e5 = s(652215),
    e9 = s(49999),
    e6 = s(20661);
function e8(e) {
    return `game-server-owned-card-${e}`;
}
let e7 = u.memo(function (e) {
    let { server: t, onJoin: n, onViewPanel: l, onOpenSettings: i, isHighlighted: a = !1 } = e,
        r = (0, ex.A)(t.gameId, "cover") ?? t.coverUrl,
        o = (function (e) {
            let t = (0, B.bG)([W.A], () => (null != e ? W.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let s = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === e5.Dmq.CANCELED
                ? { text: er.intl.formatToPlainString(ea.default["3aEgK6"], { date: s }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: er.intl.formatToPlainString(ea.default.KFSA3M, { date: s }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [c, m] = (0, eZ.kn)([eF.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        h = c !== eF.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        x = eH.X.SHOCKBYTE,
        E = Y.default.getId() ?? "0",
        { handleCopyServerIp: p, animateCopyIcon: v } = (0, eJ.A)(E, t.id, es.A.GAME_SERVER_PAGE, t.serverIp),
        C = u.useCallback(() => {
            (0, e0.A)({
                provider: x,
                onAccept: () => {
                    m(e9.i.TAKE_ACTION), p();
                },
            });
        }, [x, m, p]),
        j = u.useCallback(() => {
            h
                ? n(t)
                : (0, e0.A)({
                      provider: x,
                      onAccept: () => {
                          m(e9.i.TAKE_ACTION), n(t);
                      },
                  });
        }, [h, x, m, n, t]),
        b = u.useCallback(() => l(t), [l, t]),
        S = u.useCallback(() => {
            ((e) => {
                let { server: t, source: n } = e;
                (0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            s.e("69977"),
                            s.e("1248"),
                            s.e("94149"),
                            s.e("14131"),
                            s.e("73883"),
                            s.e("73216"),
                            s.e("20023"),
                            s.e("81647"),
                            s.e("76602"),
                            s.e("40402"),
                            s.e("67861"),
                            s.e("1518"),
                            s.e("23354"),
                            s.e("68062"),
                            s.e("44780"),
                            s.e("36946"),
                            s.e("92639"),
                            s.e("90480"),
                            s.e("40963"),
                            s.e("66031"),
                            s.e("94317"),
                            s.e("23601"),
                            s.e("35868"),
                        ]).then(s.bind(s, 729751));
                        return (s) => (0, d.jsx)(e, { ...s, server: t, source: n });
                    },
                    { stackingBehavior: "stack", modalKey: e1.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        _ =
            t.instance.status === ew.M.ONLINE
                ? er.intl.string(ea.default["60kAzo"])
                : t.instance.status === ew.M.OFFLINE
                  ? er.intl.string(ea.default["Ys/RrB"])
                  : er.intl.string(ea.default.SgjaXI);
    return (0, d.jsxs)("div", {
        id: e8(t.id),
        className: g()(e6.Nr, { [e6.mr]: a }),
        children: [
            a && (0, d.jsx)("div", { className: e6._8, "aria-hidden": !0 }),
            (0, d.jsxs)("div", {
                className: e6.Nk,
                "aria-hidden": !0,
                children: [
                    null != r && (0, d.jsx)("img", { className: e6.QC, src: r, alt: "" }),
                    (0, d.jsx)("div", { className: e6.jc }),
                ],
            }),
            (0, d.jsxs)("div", {
                className: e6.AQ,
                children: [
                    (0, d.jsx)(eY, {
                        color: eV.SECONDARY,
                        size: eK.SIZE_24,
                        icon: (0, d.jsx)(eX.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: S,
                        tooltip: er.intl.string(er.t.RDE0Sc),
                    }),
                    (0, d.jsx)(e3, { server: t, onOpenSettings: i }),
                ],
            }),
            (0, d.jsxs)("div", {
                className: e6.rf,
                children: [
                    (0, d.jsxs)("div", {
                        className: e6.U1,
                        children: [
                            (0, d.jsxs)("div", {
                                className: e6.oL,
                                children: [
                                    null != r
                                        ? (0, d.jsx)("img", { className: e6.vT, src: r, alt: "" })
                                        : (0, d.jsx)("div", {
                                              className: e6.iv,
                                              children: (0, d.jsx)(ee.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, d.jsx)("div", { className: e6.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, d.jsxs)("div", {
                                className: e6.VQ,
                                children: [
                                    (0, d.jsx)(ee.E, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, d.jsx)(ee.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != o &&
                                        (0, d.jsx)(ee.E, {
                                            variant: "text-sm/medium",
                                            color: "text-feedback-critical",
                                            tag: "div",
                                            children: o.text,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, d.jsxs)("div", {
                        className: e6.M1,
                        children: [
                            (0, d.jsxs)("div", {
                                className: e6.N8,
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: e6.bi,
                                        children: [
                                            (0, d.jsx)(ee.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: er.intl.string(ea.default.bDdi7n),
                                            }),
                                            (0, d.jsx)(ee.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, d.jsxs)("div", {
                                        className: e6.gv,
                                        children: [
                                            (0, d.jsx)(ee.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: er.intl.string(ea.default["7phwMG"]),
                                            }),
                                            h
                                                ? (0, d.jsxs)("div", {
                                                      className: e6.Yb,
                                                      children: [
                                                          (0, d.jsx)(ee.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, d.jsx)(eU.D, {
                                                                  className: e6.cL,
                                                                  onClick: p,
                                                                  "aria-label": er.intl.string(er.t.OpuAlK),
                                                                  children: v
                                                                      ? (0, d.jsx)(eW.A, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, d.jsx)(e$.T, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, d.jsx)(eQ.A, {
                                                      onClick: C,
                                                      children: er.intl.string(ea.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, d.jsxs)("div", {
                                className: e6.N8,
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: e6.bi,
                                        children: [
                                            (0, d.jsx)(ee.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: er.intl.string(ea.default["n+ZX7y"]),
                                            }),
                                            (0, d.jsxs)("div", {
                                                className: e6.Yb,
                                                children: [
                                                    t.isOnline &&
                                                        (0, d.jsx)("span", { className: e6.kg, "aria-hidden": !0 }),
                                                    (0, d.jsx)(ee.E, {
                                                        variant: "text-sm/medium",
                                                        color: t.isOnline ? "text-feedback-positive" : "text-muted",
                                                        tag: "span",
                                                        children: _,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, d.jsxs)("div", {
                                        className: e6.gv,
                                        children: [
                                            (0, d.jsx)(ee.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: er.intl.string(ea.default.mJlz3T),
                                            }),
                                            (0, d.jsx)(ee.E, {
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
            (0, d.jsxs)("div", {
                className: e6.qr,
                children: [
                    (0, d.jsx)(eU.D, {
                        className: g()(e6.wC, e6.QV),
                        onClick: j,
                        "aria-label": er.intl.string(ea.default["fQCcM/"]),
                        children: (0, d.jsx)(ee.E, {
                            variant: "text-sm/semibold",
                            color: "none",
                            children: er.intl.string(ea.default["fQCcM/"]),
                        }),
                    }),
                    (0, d.jsxs)(eU.D, {
                        className: g()(e6.wC, e6.y2),
                        onClick: b,
                        "aria-label": er.intl.string(ea.default.tkbVdf),
                        children: [
                            (0, d.jsx)(ee.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                children: er.intl.string(ea.default.tkbVdf),
                            }),
                            (0, d.jsx)(eq.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                        ],
                    }),
                ],
            }),
        ],
    });
});
var te = s(349123);
function tt(e) {
    let {
            servers: t,
            onViewAll: s,
            onJoin: n,
            onViewPanel: l,
            onOpenSettings: i,
            highlightServerId: a = null,
            highlightNonce: r = 0,
        } = e,
        o = u.useRef(null),
        c = u.useRef(null),
        [m, h] = u.useState(!1),
        [x, f] = u.useState(!1),
        [E, p] = u.useState(null),
        v = u.useCallback(() => {
            let e = o.current;
            null != e && (h(e.scrollLeft > 1), f(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    u.useLayoutEffect(() => {
        v();
    }, [v, t]),
        u.useEffect(() => {
            let e = o.current;
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
    let C = u.useCallback(() => {
            o.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        j = u.useCallback(() => {
            o.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        u.useEffect(() => {
            if (r <= 0) return;
            let e = null != a ? document.getElementById(e8(a)) : c.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                s = requestAnimationFrame(() => {
                    p(null), (t = requestAnimationFrame(() => p(a)));
                });
            return () => {
                cancelAnimationFrame(s), cancelAnimationFrame(t);
            };
        }, [r, a]),
        u.useEffect(() => {
            if (null == E) return;
            let e = setTimeout(() => p(null), 4e3);
            return () => clearTimeout(e);
        }, [E]),
        (0, d.jsxs)("section", {
            className: te.uW,
            ref: c,
            children: [
                (0, d.jsxs)("div", {
                    className: te.wx,
                    children: [
                        (0, d.jsx)(eu.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: er.intl.string(ea.default.BOWmmT),
                        }),
                        (0, d.jsx)(Q.N, {
                            theme: ei.NJ.DARKER,
                            children: (e) =>
                                (0, d.jsxs)("div", {
                                    className: g()(te.$s, e),
                                    children: [
                                        (0, d.jsx)(et.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: er.intl.string(er.t["z5YcJ+"]),
                                            onClick: s,
                                        }),
                                        (0, d.jsxs)("div", {
                                            className: te.d$,
                                            children: [
                                                (0, d.jsx)(eP.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eD.Z,
                                                    disabled: !m,
                                                    onClick: C,
                                                    "aria-label": er.intl.string(er.t["13/7kX"]),
                                                }),
                                                (0, d.jsx)(eP.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eB.K,
                                                    disabled: !x,
                                                    onClick: j,
                                                    "aria-label": er.intl.string(er.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, d.jsx)("div", {
                    className: g()(te.XG, { [te.OW]: m && x, [te.vL]: m && !x, [te.y0]: x && !m }),
                    ref: o,
                    onScroll: v,
                    children: t.map((e) =>
                        (0, d.jsx)(
                            "div",
                            {
                                className: te.AV,
                                children: (0, d.jsx)(e7, {
                                    server: e,
                                    onJoin: n,
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
var ts = s(174459),
    tn = s(758836),
    tl = (((l = {}).SHOP_CARD = "GAME_SERVER_SHOP_CARD"), l),
    ti = (((i = {}).OPEN_PLAN_MODAL = "open_game_server_plan_modal"), i),
    ta = s(199781),
    tr = s(923477),
    to = s(252589),
    tc = s(55766),
    td = s(524843);
function tu() {
    return (0, d.jsx)(U.A, { children: (0, d.jsx)(tm, {}) });
}
function tm() {
    let e,
        { servers: t, refetch: s } = (0, tc.f)(),
        n = t.length > 0,
        l = (0, B.bG)([A.default], () => q.Ay.canUseShopDiscounts(A.default.getCurrentUser())),
        { games: i, hasError: a, isEmpty: r, isLoading: o, refetch: c } = (0, to.Y)();
    u.useEffect(() => {
        n && (0, G.hP)().catch(() => {});
    }, [n]);
    let m = u.useRef(i);
    u.useEffect(() => {
        i.length > 0 && (m.current = i);
    }, [i]);
    let g = u.useCallback(() => {
            c(), s();
        }, [c, s]),
        h =
            ((e = (0, I.uM)()),
            u.useCallback(
                (t, s) => {
                    ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: e?.sessionId,
                        page_type: tn.G2.GAME_SERVERS,
                        page_category: e?.pageCategory,
                        page_section: e?.pageSection,
                        tile_type: s,
                        cta_name: t,
                    });
                },
                [e?.sessionId, e?.pageCategory, e?.pageSection],
            )),
        [x, f] = u.useState({ serverId: null, nonce: 0 }),
        E = u.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let s = Z.A.getGameServers();
                for (let n = s.length - 1; n >= 0; n--)
                    if (s[n].game_id === e.gameId) {
                        t = s[n].id;
                        break;
                    }
            }
            f((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        p = u.useCallback(() => {
            let e = t[0];
            null != e && E({ serverId: e.id });
        }, [t, E]),
        v = (0, tr.O)((e) => e.highlightFirstCardNonce),
        C = u.useRef(v);
    u.useEffect(() => {
        if (v === C.current) return;
        C.current = v;
        let e = requestAnimationFrame(() => p());
        return () => cancelAnimationFrame(e);
    }, [v, p]);
    let j = u.useCallback(
            (e) => {
                h(ti.OPEN_PLAN_MODAL, tl.SHOP_CARD),
                    (0, ta.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => E({ gameId: e.gameId }),
                    });
            },
            [h, E],
        ),
        b = u.useCallback(() => {
            z.A.setState({ scrollToGameServers: !0 }), (0, K.openUserSettings)(V.X.SUBSCRIPTIONS_PANEL);
        }, []),
        S = u.useCallback((e) => {
            let t = Y.default.getId() ?? "0";
            (0, X.A)(t, e.instance);
        }, []),
        _ = u.useCallback((e) => {
            (0, $.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        N = u.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let s = m.current.find((t) => t.gameId === e.gameId);
                function n(t) {
                    (0, ta.S)({
                        gameName: e.gameName,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: s?.plans,
                        initialPlanId: e.instance.planId,
                        initialRegionId: e.instance.regionId,
                        initialRegionName: e.location,
                        initialServerName: e.serverName,
                        activeSubscription: t,
                        onViewServer: () => E({ serverId: e.id }),
                    });
                }
                let l = W.A.getSubscriptionById(t);
                null != l
                    ? n(l)
                    : (0, G.hP)()
                          .then(() => {
                              let e = W.A.getSubscriptionById(t);
                              null != e && n(e);
                          })
                          .catch(() => {});
            },
            [E],
        ),
        L = n ? er.intl.string(ea.default["+aRmAc"]) : void 0;
    return (0, d.jsx)(F.Ch, {
        className: td.XG,
        children: (0, d.jsxs)("div", {
            className: td.kL,
            children: [
                !l && (0, d.jsx)(ec, {}),
                (0, d.jsx)(eM, {}),
                (0, d.jsxs)("div", {
                    className: td.Qs,
                    children: [
                        (0, d.jsx)(ek, {}),
                        n &&
                            (0, d.jsx)(tt, {
                                servers: t,
                                onViewAll: b,
                                onJoin: S,
                                onViewPanel: _,
                                onOpenSettings: N,
                                highlightServerId: x.serverId,
                                highlightNonce: x.nonce,
                            }),
                        a || r
                            ? (0, d.jsx)(eh, { onRetry: g })
                            : (0, d.jsx)(eN, { games: i, title: L, onSelectGame: j, loading: o }),
                    ],
                }),
            ],
        }),
    });
}
var tg = s(578797),
    th = s(38405),
    tx = s(4227),
    tf = s(50920),
    tE = s(856686),
    tp = s(364522),
    tv = s(783977),
    tC = s(59520);
function tj(e, t, s, n) {
    let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = n;
    if (a > 0) {
        let n = (l + i) / a;
        n > 0 &&
            ts.default.track(e, {
                scroll_visible_percent: n,
                source: s,
                page_height: Math.round(a),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function tb(e, t) {
    let { analyticsSource: s } = (0, R.lC)(t),
        n = (0, tC.I)(tj, 5e3, [], { trailing: !0 }),
        l = (0, I.uM)(),
        i = l?.sessionId;
    return {
        handleScroll: u.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    n(e5.HAw.COLLECTIBLES_SHOP_SCROLLED, null != i ? i : "", s, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [n, s, i, e]),
    };
}
var tS = s(354328),
    t_ = s(356118),
    tN = s(619835),
    tA = s(918467),
    tI = s(80151),
    tL = s(641150);
function tO() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: s, offerEligible: n } = (0, M.v)((e) => e),
        { totalCount: l, isFetchingResults: i } = (0, tE.S)(),
        a = (0, M.v)((e) => e.hasFilters()),
        r = u.useCallback(() => {
            if (!a) return "";
            if (i) return er.intl.string(er.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return er.intl.format(er.t.KJMJOz, { count: l, search: e });
            }
            if (!s && !n && 1 === e.size) {
                if (e.has(tL.q.AVATAR_DECORATION)) return er.intl.format(er.t.s1UzGQ, { count: l });
                if (e.has(tL.q.NAMEPLATE)) return er.intl.format(er.t.ZWGN9T, { count: l });
                if (e.has(tL.q.PROFILE_EFFECT)) return er.intl.format(er.t["v/7apu"], { count: l });
                if (e.has(tL.q.PROFILE_FRAME)) return er.intl.format(er.t.eu4eRy, { count: l });
                if (e.has(tL.q.BUNDLE)) return er.intl.format(er.t.fZ1rdk, { count: l });
            }
            return 0 === e.size && s && !n
                ? er.intl.format(er.t.TxoTTj, { count: l })
                : 0 === e.size && n && !s
                  ? er.intl.format(er.t.TLso50, { count: l })
                  : er.intl.format(er.t["/rPvmQ"], { count: l });
        }, [e, l, a, t, i, s, n]);
    return (0, d.jsx)(eu.D, { variant: "heading-lg/semibold", children: r() });
}
var tT = s(172218),
    tR = s(932793),
    tk = s(511265),
    ty = s(206077),
    tM = s(100057),
    tP = s(828515),
    tD = s(484469),
    tB = s(346448),
    tH = s(195261),
    tw = s(132866);
let tF = function () {
    return (0, d.jsx)("div", {
        className: tw.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, d.jsxs)(
                "div",
                {
                    className: tH.vY,
                    children: [
                        (0, d.jsx)("div", { className: g()(tB.sW, tw.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, d.jsx)(tD.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tG = s(258245),
    tU = s(159439),
    tz = s(998694);
let tV = null;
function tK(e) {
    let { category: t } = e,
        s = (0, x.bG)([A.default], () => A.default.getCurrentUser()),
        n = (0, ty.X)(t.products),
        l = (0, tk.p)()(n);
    return null == s || 0 === l.length
        ? null
        : (0, d.jsx)("div", {
              className: tH.vY,
              children: l.map((e, t) =>
                  (0, d.jsx)(
                      I.R9,
                      { newValue: { tilePosition: t }, children: (0, d.jsx)(tG.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tY(e) {
    let { category: t } = e,
        [s, n] = u.useState(!1),
        l = (0, tT.K)(function (e) {
            n(e);
        }, 0.15),
        i = (0, P.W6)(),
        a = (0, tf.a)("CollectiblesCatalogContent"),
        r = (0, I.uM)(),
        o = u.useCallback(() => {
            ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: tn.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (tV = t.skuId),
                i.push(e5.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, i]);
    return (0, d.jsxs)("div", {
        className: tH.EF,
        ref: l,
        children: [(0, d.jsx)(tP.A, { category: t, onSelect: a ? o : void 0 }), (0, d.jsx)(tK, { category: t })],
    });
}
function tW(e) {
    let { categories: t, setCategoryRef: s, currentPage: n, handlePageChange: l, initialCategoryId: i } = e,
        a = (0, I.uM)(),
        r = (0, tU.U)(),
        o = a?.sessionId ?? "",
        { noCache: c, includeUnpublished: m } = (0, tz.A)(),
        g = u.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        h = u.useRef(void 0);
    u.useEffect(() => {
        if (null == i || 0 === g.length) {
            h.current = void 0;
            return;
        }
        if (i === h.current) return;
        let e = g.findIndex((e) => e.skuId === i);
        if (-1 === e) return;
        let t = Math.floor(e / tn.l5) + 1;
        t !== n && l(t), (h.current = i);
    }, [i, g, l, n]);
    let x = u.useMemo(() => {
        let e = (n - 1) * tn.l5;
        return g.slice(e, e + tn.l5);
    }, [g, n]);
    return (u.useEffect(() => {
        (0, tM.z)({
            sessionId: o,
            checkpoint: tM.t.SHOP_MOUNTED,
            tab: tn.G2.CATALOG,
            unpublishedCategoriesShown: m,
            cacheDisabled: c,
        });
    }, []),
    u.useEffect(() => {
        r ||
            0 === x.length ||
            (0, tM.z)({
                sessionId: o,
                checkpoint: tM.t.SHOP_RENDERED,
                tab: tn.G2.CATALOG,
                unpublishedCategoriesShown: m,
                cacheDisabled: c,
            });
    }, [o, m, c, r, x.length]),
    r)
        ? (0, d.jsx)(tF, {})
        : (0, d.jsxs)("div", {
              className: tH.LZ,
              children: [
                  x.map((e, t) =>
                      (0, d.jsx)(
                          "div",
                          {
                              ref: (t) => s(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": er.intl.formatToPlainString(er.t.FNtLb3, { category: e.name }),
                              children: (0, d.jsx)(I.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, d.jsx)(tY, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, d.jsx)("div", {
                      className: tH.Ej,
                      children: (0, d.jsx)(tR.m, {
                          currentPage: n,
                          totalCount: g.length,
                          pageSize: tn.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var t$ = s(177366),
    tq = s(401864),
    tZ = s(124987),
    tX = s(691885),
    tQ = s(146919),
    tJ = s(858733);
let t0 = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: s } = (0, M.v)(),
        n = (0, I.uM)(),
        l = (0, tQ.yB)("CollectiblesSortSelect"),
        i = s(),
        a = u.useMemo(() => tn.QB.filter((e) => e.sortType !== tZ.$.RELEVANCE || i), [i]),
        r = u.useCallback((e) => {
            let { sortType: t, sortDirection: s } = e;
            return t === tZ.$.RECENCY
                ? { label: er.intl.string(er.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tZ.$.PRICE
                  ? s === tq.A.ASC
                      ? { label: er.intl.string(er.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: er.intl.string(er.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tZ.$.RELEVANCE
                    ? { label: er.intl.string(er.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: er.intl.string(er.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = u.useCallback(
            (e) =>
                ({
                    recent: { sortType: tZ.$.RECENCY, sortDirection: tq.A.DESC },
                    "price-asc": { sortType: tZ.$.PRICE, sortDirection: tq.A.ASC },
                    "price-desc": { sortType: tZ.$.PRICE, sortDirection: tq.A.DESC },
                    popularity: { sortType: tZ.$.POPULARITY, sortDirection: tq.A.DESC },
                    relevance: { sortType: tZ.$.RELEVANCE, sortDirection: tq.A.DESC },
                })[e],
            [],
        ),
        c = u.useCallback(
            (e) => {
                let s = r(o(e));
                ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    page_section: n?.pageSection,
                    page_category: n?.pageCategory,
                    page_index: n?.pageIndex,
                    page_size: n?.pageSize,
                    cta_name: `sort by ${s.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(o(e));
            },
            [n, r, o, t],
        ),
        m = r(e);
    return (0, d.jsx)("div", {
        className: g()(tJ.k, { [tQ.jP]: l }),
        children: (0, d.jsx)(tX.l, {
            label: er.intl.string(er.t.uaX705),
            hideLabel: !0,
            options: a.map(r),
            onSelectionChange: c,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var t1 =
        (((a = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (a.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (a.PINK = "COLLECTIBLES_COLOR_PINK"),
        (a.RED = "COLLECTIBLES_COLOR_RED"),
        (a.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (a.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (a.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (a.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (a.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (a.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        a),
    t2 =
        (((r = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (r.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (r.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (r.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (r.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (r.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (r.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (r.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (r.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (r.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        r),
    t4 = s(150934),
    t3 = s(508770),
    t5 = s(278416),
    t9 = s(602853),
    t6 = s(661531),
    t8 = s(947641),
    t7 = s(604338),
    se = s(785866),
    st = s(373846),
    ss = s(308323),
    sn = s(608599),
    sl = s(685761),
    si = s(157225),
    sa = s(413249),
    sr = s(510241),
    so = s(601198),
    sc = s(7250),
    sd = s(623655),
    su = s(13875),
    sm = s(967339);
function sg() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: s,
            thirdPartyOnly: n,
            onToggleOfferEligible: l,
            offerEligible: i,
            reset: a,
            hasFilters: r,
        } = (0, M.v)(),
        o = (0, sd.z)("FilterBar"),
        c = r(),
        m = (0, su.sk)("FilterBar"),
        h = (0, I.uM)(),
        x = u.useRef(null),
        f = (0, tI.A)(),
        E = u.useMemo(() => tn._6.filter((e) => m || e !== tL.q.PROFILE_FRAME), [m]),
        p = u.useCallback(
            (e) => {
                ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        v = u.useCallback(() => {
            p(`filter 3p only ${!1 === n ? "on" : "off"}`), s();
        }, [s, n, p]);
    return (0, d.jsxs)("div", {
        className: sm.kT,
        children: [
            (0, d.jsxs)("div", {
                className: g()(sm.KZ, sm.YG),
                children: [
                    (0, d.jsx)("div", {
                        ref: x,
                        tabIndex: -1,
                        children: (0, d.jsx)(ee.E, {
                            variant: "text-md/semibold",
                            className: sm.hr,
                            children: er.intl.string(er.t.Qk6r1a),
                        }),
                    }),
                    null != f &&
                        (0, d.jsxs)("div", {
                            className: sm.Ym,
                            children: [
                                (0, d.jsx)(t4.S, {
                                    checked: i,
                                    onChange: () => {
                                        p(`filter offer eligible ${!1 === i ? "on" : "off"}`), l();
                                    },
                                    label: er.intl.string(er.t.hY8Ft1),
                                }),
                                (0, d.jsx)(t3.E, { type: { text: er.intl.string(er.t["nb5PC/"]) }, icon: t5.g }),
                            ],
                        }),
                    E.map((e) => (0, d.jsx)(sh, { filter: e, trackFilterAction: p }, e)),
                    (0, d.jsx)(t4.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: er.intl.string(er.t.AHHHgG),
                    }),
                    o && (0, d.jsx)(t4.S, { checked: n, onChange: v, label: er.intl.string(er.t["+W8gb+"]) }),
                ],
            }),
            (0, d.jsx)(sx, { trackFilterAction: p }),
            (0, d.jsx)(sp, { trackFilterAction: p }),
            c &&
                (0, d.jsx)(et.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), a(), requestAnimationFrame(() => x.current?.focus());
                    },
                    text: er.intl.string(er.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function sh(e) {
    let { filter: t, trackFilterAction: s } = e,
        n = {
            [tL.q.AVATAR_DECORATION]: er.intl.string(er.t.dRZYNE),
            [tL.q.PROFILE_EFFECT]: er.intl.string(er.t["1cNjtx"]),
            [tL.q.NAMEPLATE]: er.intl.string(er.t.V68Fqz),
            [tL.q.PROFILE_FRAME]: er.intl.string(er.t.ecTJkR),
            [tL.q.BUNDLE]: er.intl.string(er.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: i } = (0, M.v)(),
        a = (0, d.jsx)(t4.S, {
            checked: l.has(t),
            onChange: () => {
                let e = n[t]?.toLowerCase() != null ? n[t].toLowerCase() : t;
                s(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), i(t);
            },
            label: n[t] ?? "",
        });
    return t === tL.q.PROFILE_FRAME
        ? (0, d.jsxs)("div", { className: sm.Ym, children: [a, (0, d.jsx)(t3.E, { type: "new" })] })
        : a;
}
function sx(e) {
    let { trackFilterAction: t } = e,
        s = u.useMemo(
            () => [
                { color: "#9B59B6", label: er.intl.string(er.t.kqUD4P), enum: t1.PURPLE },
                { color: "#3498DB", label: er.intl.string(er.t.qQTRae), enum: t1.BLUE },
                { color: "#2ECC71", label: er.intl.string(er.t["f/Ylk6"]), enum: t1.GREEN },
                { color: "#A0522D", label: er.intl.string(er.t["Sd/BMa"]), enum: t1.BROWN },
                { color: "#F1C40F", label: er.intl.string(er.t["0fevYz"]), enum: t1.YELLOW },
            ],
            [],
        ),
        n = u.useMemo(
            () => [
                { color: "#E67E22", label: er.intl.string(er.t.ZE7weD), enum: t1.ORANGE },
                { color: "#E74C3C", label: er.intl.string(er.t.hKJGOM), enum: t1.RED },
                { color: "#EC407A", label: er.intl.string(er.t.HvLEGM), enum: t1.PINK },
                { color: "#FFFFFF", label: er.intl.string(er.t["CB+lNO"]), enum: t1.WHITE },
                { color: "#262626", label: er.intl.string(er.t["dMey+v"]), enum: t1.BLACK },
            ],
            [],
        );
    return (0, d.jsxs)("div", {
        className: sm.KZ,
        children: [
            (0, d.jsx)(ee.E, { variant: "text-md/semibold", className: sm.hr, children: er.intl.string(er.t.K1xGoG) }),
            (0, d.jsx)(sf, { colors: s, trackFilterAction: t }),
            (0, d.jsx)(sf, { colors: n, trackFilterAction: t }),
        ],
    });
}
function sf(e) {
    let { colors: t, trackFilterAction: s } = e,
        { colorFilters: n, onToggleColor: l } = (0, M.v)();
    return (0, d.jsx)("div", {
        className: sm.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: a } = e;
            return (0, d.jsx)(
                sE,
                { color: t, label: i, enum: a, isToggled: n.has(a), onToggleColor: l, trackFilterAction: s },
                a,
            );
        }),
    });
}
function sE(e) {
    let { color: t, label: s, enum: n, isToggled: l, onToggleColor: i, trackFilterAction: a } = e,
        r = (0, t9.r)(t6.A.unsafe_rawColors.WHITE).hex(),
        o = (0, t9.r)(t6.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, d.jsx)(
        eG.m,
        {
            text: s,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, d.jsx)(
                eU.D,
                {
                    className: g()(sm.n1, { [sm.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": s,
                    "aria-pressed": l,
                    onClick: () => {
                        a(`filter color ${s.toLowerCase()} ${!l ? "on" : "off"}`), i(n);
                    },
                    children:
                        l &&
                        (0, d.jsx)("div", {
                            className: sm.oE,
                            children: (0, d.jsx)(t8.r, {
                                size: "xs",
                                color: (0, sc.j)({ backgroundColor: t, colors: [r, o] }),
                            }),
                        }),
                },
                t,
            ),
        },
        s,
    );
}
function sp(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: s, onToggleTheme: n } = (0, M.v)(),
        l = (0, em.Ay)() === ei.NJ.DARK,
        i = u.useCallback(
            (e) => {
                if (s.has(e) || l) return "control-primary-text-default";
            },
            [s, l],
        ),
        a = u.useCallback((e) => (s.has(e) || l ? t6.A.colors.WHITE : t6.A.colors.INTERACTIVE_TEXT_DEFAULT), [s, l]),
        r = u.useMemo(
            () => [
                {
                    name: er.intl.string(er.t.aVBOKh),
                    icon: (0, d.jsx)(t7.E, { size: "xs", color: a(t2.ANIME) }),
                    enum: t2.ANIME,
                },
                {
                    name: er.intl.string(er.t["3WoZBc"]),
                    icon: (0, d.jsx)(se._, { size: "xs", color: a(t2.GAMING) }),
                    enum: t2.GAMING,
                },
                {
                    name: er.intl.string(er.t.yuEmLj),
                    icon: (0, d.jsx)(st.C, { size: "xs", color: a(t2.CUTE_COZY) }),
                    enum: t2.CUTE_COZY,
                },
                {
                    name: er.intl.string(er.t.mMvCHo),
                    icon: (0, d.jsx)(ss.L, { size: "xs", color: a(t2.SCI_FI) }),
                    enum: t2.SCI_FI,
                },
                {
                    name: er.intl.string(er.t.TlhOQC),
                    icon: (0, d.jsx)(sn.L, { size: "xs", color: a(t2.FOOD_DRINKS) }),
                    enum: t2.FOOD_DRINKS,
                },
                {
                    name: er.intl.string(er.t["4IaUIM"]),
                    icon: (0, d.jsx)(sl.f, { size: "xs", color: a(t2.FANTASY) }),
                    enum: t2.FANTASY,
                },
                {
                    name: er.intl.string(er.t["w0nSG/"]),
                    icon: (0, d.jsx)(si.N, { size: "xs", color: a(t2.ANIMALS_PETS) }),
                    enum: t2.ANIMALS_PETS,
                },
                {
                    name: er.intl.string(er.t.cJng7v),
                    icon: (0, d.jsx)(sa.p, { size: "xs", color: a(t2.NATURE) }),
                    enum: t2.NATURE,
                },
                {
                    name: er.intl.string(er.t["5mUvyM"]),
                    icon: (0, d.jsx)(sr.T, { size: "xs", color: a(t2.MOVIES_TV_SHOWS) }),
                    enum: t2.MOVIES_TV_SHOWS,
                },
                {
                    name: er.intl.string(er.t.MB9H5Z),
                    icon: (0, d.jsx)(so.e, { size: "xs", color: a(t2.DARK_MOODY) }),
                    enum: t2.DARK_MOODY,
                },
            ],
            [a],
        );
    return (0, d.jsxs)("div", {
        className: sm.KZ,
        children: [
            (0, d.jsx)(ee.E, { variant: "text-md/semibold", className: sm.hr, children: er.intl.string(er.t.t1Ztrp) }),
            (0, d.jsx)("div", {
                className: sm.Ot,
                children: r.map((e) => {
                    let { name: l, icon: a, enum: r } = e;
                    return (0, d.jsxs)(
                        eU.D,
                        {
                            className: g()(sm.w4, { [sm.C7]: s.has(r) }),
                            "aria-label": l,
                            "aria-pressed": s.has(r),
                            onClick: () => {
                                let e = s.has(r);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), n(r);
                            },
                            children: [a, (0, d.jsx)(ee.E, { color: i(r), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var sv = s(561769),
    sC = s(882443);
function sj() {
    return (0, d.jsxs)("div", {
        className: sC.k,
        children: [
            (0, d.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: er.intl.string(er.t.oezC3x),
                className: sC._,
            }),
            (0, d.jsx)(eu.D, { variant: "heading-xl/semibold", children: er.intl.string(er.t.oezC3x) }),
            (0, d.jsx)(ee.E, { variant: "text-md/medium", children: er.intl.string(er.t["Tc/Ndl"]) }),
        ],
    });
}
var sb = s(996824);
let sS = { flattenProductVariants: !0 };
function s_(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: n } = e,
        l = (0, I.uM)(),
        i = l?.sessionId ?? "",
        { noCache: a, includeUnpublished: r } = (0, tz.A)(),
        o = (0, x.bG)([A.default], () => A.default.getCurrentUser()),
        { skus: c, currentPage: m, totalCount: h, isFetchingResults: f } = (0, tE.S)(),
        E = (0, x.yK)([L.A], () => L.A.getProductsBySkus(c)),
        p = u.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
        v = c?.join("");
    u.useEffect(() => {
        p();
    }, [v, p]);
    let C = (0, tk.p)(),
        j = u.useMemo(() => C(E), [C, E]);
    u.useEffect(() => {
        t ||
            (0, tM.z)({
                sessionId: i,
                checkpoint: tM.t.SHOP_RENDERED,
                tab: n,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
    }, [i, r, a, t, n]);
    let b = u.useRef(null),
        { setQueryPageSize: S, setQueryPageOffset: _, queryPageSize: N } = (0, M.v)(),
        [O, T] = u.useState(!1),
        R = t || f || null == o;
    u.useEffect(() => {
        R ? T(!1) : j.length > 0 && T(!0);
    }, [R, j.length]);
    let k = N > 0 && !R && 0 === j.length;
    u.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == b.current || S(Math.floor(5 * getComputedStyle(b.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != b.current) return e.observe(b.current), () => e.disconnect();
    }, [S]);
    let y = u.useCallback(
        (e) => {
            ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: N,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                _((e - 1) * N);
        },
        [l, N, _],
    );
    return (0, d.jsxs)(sv.v3.Provider, {
        value: sS,
        children: [
            (0, d.jsxs)("div", {
                className: g()({ [sb.oE]: k }),
                children: [
                    k && (0, d.jsx)(sj, {}),
                    (0, d.jsxs)("div", {
                        className: g()(sb.ZE, { [sb.Kp]: O }),
                        ref: b,
                        children: [
                            R && [...Array(N)].map((e, t) => (0, d.jsx)(tD.A, {}, t)),
                            !R &&
                                j.map((e, t) =>
                                    null == L.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, d.jsx)(
                                              I.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, d.jsx)(
                                                      tG.A,
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
            h > N &&
                (0, d.jsx)("div", {
                    className: sb.Ej,
                    children: (0, d.jsx)("div", {
                        children: (0, d.jsx)(tR.m, {
                            currentPage: m,
                            totalCount: h,
                            pageSize: N,
                            onPageChange: y,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var sN = s(328539);
function sA(e) {
    let { tab: t, categories: s, initialCategoryId: n, showFilterInitially: l = !0, onUnmount: i } = e,
        a = (0, tS.A)("shop_include_unpublished");
    !(function () {
        let e = (0, B.bG)([tA.A], () => "success" === tA.A.getFetchState(e5.FYj)),
            t = null != (0, tI.A)(),
            { offerEligible: s, clearFilters: n } = (0, M.v)();
        u.useEffect(() => {
            s && e && !t && n();
        }, [s, e, t, n]);
    })(),
        (0, M.S)(a);
    let r = u.useRef(null),
        { handleScroll: o } = tb(r, t),
        c = (0, tg.U)("Shop Browse"),
        { setCategoryRef: m, handleScrollToCategory: g } = (0, t$.k0)(r.current),
        [h, x] = u.useState(l),
        [f, E] = u.useState(!1);
    return (
        u.useEffect(() => {
            null != n && g(n);
        }, [n, g]),
        u.useEffect(
            () => () => {
                null != i && i();
            },
            [],
        ),
        u.useEffect(() => {
            function e() {
                E(window.innerWidth < 1400);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, d.jsx)("div", {
            className: sN.VM,
            children: (0, d.jsxs)("main", {
                className: sN.MY,
                children: [
                    (0, d.jsx)(F.Gt, {
                        className: sN.OW,
                        ref: r,
                        onScroll: o,
                        children: c
                            ? (0, d.jsx)("div", {
                                  className: sN.en,
                                  children: (0, d.jsx)("div", {
                                      className: sN.pf,
                                      children: (0, d.jsx)(t_.Z_, { tenantId: e5.FYj, templateId: tN.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, d.jsx)(sI, {
                                  isSmallScreen: f,
                                  filterBarOpen: h,
                                  setFilterBarOpen: x,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: s,
                                  setCategoryRef: m,
                                  initialCategoryId: n,
                              }),
                    }),
                    h && !f && (0, d.jsx)("div", { className: sN.yF }),
                    h && !f && (0, d.jsx)(tp.Ip, { className: sN.kT, children: (0, d.jsx)(sg, {}) }),
                ],
            }),
        })
    );
}
function sI(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: s,
            setFilterBarOpen: n,
            tab: l,
            scrollerRef: i,
            categories: a,
            setCategoryRef: r,
            initialCategoryId: o,
        } = e,
        c = u.useRef(null),
        m = (0, M.v)((e) => e.hasDefaultFilters()),
        h = (0, I.uM)(),
        { handlePageChange: x, currentPage: f } = (function (e) {
            let [t, s] = u.useState(1);
            return {
                currentPage: t,
                handlePageChange: u.useCallback(
                    (t) => {
                        s(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, s],
                ),
            };
        })(i),
        E = u.useCallback(
            (e) => {
                ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        p = u.useRef(null);
    return (
        u.useEffect(() => {
            if (t && s)
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
            function e(e) {
                let t = e.target;
                null === c.current ||
                    null === p.current ||
                    c.current.contains(t) ||
                    p.current.contains(t) ||
                    (ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    n(!1));
            }
        }, [t, s, n, h]),
        (0, d.jsx)("div", {
            className: sN.en,
            children: (0, d.jsxs)("div", {
                className: sN.pf,
                children: [
                    (0, d.jsxs)("div", {
                        className: sN.ne,
                        children: [
                            (0, d.jsx)("div", { className: sN.lQ, children: (0, d.jsx)(tO, {}) }),
                            (0, d.jsxs)("div", {
                                className: g()(sN.wR, { [sN.Im]: t }),
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: sN.Ul,
                                        children: [
                                            (0, d.jsx)(ee.E, {
                                                variant: "text-md/semibold",
                                                children: er.intl.string(er.t.uaX705),
                                            }),
                                            (0, d.jsx)(t0, {}),
                                        ],
                                    }),
                                    (0, d.jsx)("div", {
                                        ref: p,
                                        children: (0, d.jsx)(et.$, {
                                            onClick: function () {
                                                let e = !s;
                                                ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    n(e);
                                            },
                                            variant: "secondary",
                                            text: er.intl.string(s ? er.t.fYtm6f : er.t["TeTYE+"]),
                                            icon: tv.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            s &&
                                t &&
                                (0, d.jsx)("div", {
                                    className: sN.Dh,
                                    ref: c,
                                    children: (0, d.jsx)(F.Ch, { className: sN.Qo, children: (0, d.jsx)(sg, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, d.jsx)(I.R9, {
                              newValue: { pageIndex: f },
                              children: (0, d.jsx)(tW, {
                                  categories: a,
                                  setCategoryRef: r,
                                  currentPage: f,
                                  handlePageChange: E,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, d.jsx)(s_, { scrollerRef: i, tab: l }, l),
                ],
            }),
        })
    );
}
var sL = s(599062),
    sO = s(651162),
    sT = s(367727);
let sR = u.createContext(null);
function sk(e) {
    let { blockType: t, children: s } = e,
        n = u.useMemo(() => ({ blockType: t }), [t]);
    return (0, d.jsx)(sR.Provider, { value: n, children: s });
}
var sy = s(755172),
    sM = s(560952),
    sP = s(607399),
    sD = s(946015),
    sB = s(717421),
    sH = s(140735),
    sw = s(496431),
    sF = s(324145);
function sG(e) {
    let { endDate: t, size: s = "md", className: n, showSeconds: l = !1 } = e,
        { days: i, hours: a, minutes: r, seconds: o } = (0, sw.A)(t),
        c = (function (e, t, s, n, l) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let a = [i(e), i(t), i(s)];
            return l && a.push(i(n)), a.join(":");
        })(i, a, r, o, l);
    return (0, d.jsxs)("div", {
        className: g()(sF.kL, n),
        role: "timer",
        children: [
            c
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, d.jsx)(
                              ee.E,
                              {
                                  color: "none",
                                  variant: "md" === s ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: sF.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, d.jsx)(
                              ee.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === s ? "heading-md/bold" : "heading-xl/bold",
                                  className: sF.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, d.jsx)(sH.A, { children: er.intl.format(er.t.j6IyVe, { days: i, hours: a, minutes: r }) }),
        ],
    });
}
var sU = s(63776);
let sz = u.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: s } = e,
        n = (0, sB.z)({
            transform: `translateX(-50%) ${s ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        });
    return (0, d.jsxs)(sM.animated.div, {
        className: g()([sU.lP, sP.Fr && sU.yJ]),
        role: "status",
        style: {
            ...n,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, d.jsxs)(sD.s, {
                direction: sD.s.Direction.VERTICAL,
                children: [
                    (0, d.jsx)(ee.E, {
                        variant: "text-md/medium",
                        className: sU.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, d.jsx)(ee.E, {
                            variant: "text-sm/medium",
                            className: sU.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, d.jsx)(sG, { endDate: t.endTime }),
        ],
    });
});
var sV = s(424918),
    sK = s(993408),
    sY = s(196231),
    sW = s(459550);
function s$(e) {
    let { handleTransition: t, featuredBlockRecord: s } = e;
    return (0, d.jsx)("div", {
        className: g()(sW.n9, sW.YB),
        children: s?.subblocks.map((e, s) =>
            e.type === sV.u.CATEGORY
                ? (0, d.jsx)(
                      I.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: s,
                          },
                          children: (0, d.jsx)(
                              sY.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === s,
                                  badgeText: (0, sK.HF)(e.unpublishedAt) ? er.intl.string(er.t["h/uBCR"]) : void 0,
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
function sq(e) {
    let { handleTransition: t, categories: s } = e;
    if (null == s || s.length < 2) return null;
    let [n, l] = s;
    return (0, d.jsx)("div", {
        className: g()(sW.n9, sW.YB),
        children: (0, d.jsxs)(I.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != n ? n.name : l?.name,
                pageSection: "featured_block",
                tilePosition: +(null == n),
            },
            children: [
                null != n &&
                    (0, d.jsx)(sY.S, {
                        category: n,
                        enablePreview: !0,
                        badgeText: (0, sK.HF)(n.unpublishedAt) ? er.intl.string(er.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, d.jsx)(sY.S, {
                        category: l,
                        badgeText: (0, sK.HF)(l.unpublishedAt) ? er.intl.string(er.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let sZ = function (e) {
    let { isLoading: t, handleTransition: s, categories: n, featuredBlockRecord: l } = e,
        { analyticsLocations: i } = (0, C.Ay)(es.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, d.jsxs)("div", {
              className: g()(sW.n9, sW.YB),
              children: [
                  (0, d.jsx)("div", {
                      className: g()(sW.Jn, sW.oT),
                      children: (0, d.jsx)("div", { className: sW.uy }),
                  }),
                  (0, d.jsx)("div", {
                      className: g()(sW.Jn, sW.oT),
                      children: (0, d.jsx)("div", { className: sW.uy }),
                  }),
              ],
          })
        : null != l
          ? (0, d.jsx)(C.f5, {
                value: i,
                children: (0, d.jsx)(s$, { featuredBlockRecord: l, handleTransition: s, isLoading: !1 }),
            })
          : (0, d.jsx)(C.f5, {
                value: i,
                children: (0, d.jsx)(sq, { categories: n, handleTransition: s, isLoading: !1 }),
            });
};
var sX = s(531685),
    sQ = s(621466),
    sJ =
        (((o = {}).MOUNTED = "mounted"),
        (o.SORT_OUT = "sort-out"),
        (o.SORT_IN = "sort-in"),
        (o.SHUFFLE_OUT = "shuffle-out"),
        (o.SHUFFLE_IN = "shuffle-in"),
        (o.FINISHED = "finished"),
        o);
s(667532);
var s0 = s(435558),
    s1 = s.n(s0),
    s2 =
        (((c = {}).RECOMMENDED = "recommended"),
        (c.POPULAR = "popular"),
        (c.RECENT = "recent"),
        (c.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (c.RANDOM = "random"),
        c),
    s4 = s(153488),
    s3 = s(313276),
    s5 = s(623373),
    s9 = s(885574),
    s6 = s(975807),
    s8 = s(975571),
    s7 = s(938682);
let ne = function (e) {
        let { personalizedResults: t, label: s } = e,
            n = s ?? er.intl.string(er.t.NSv5KV);
        return (0, d.jsxs)("div", {
            className: s7.L,
            children: [
                (0, d.jsx)(eu.D, { variant: "heading-lg/semibold", children: n }),
                t &&
                    (0, d.jsx)(eG.m, {
                        text: er.intl.string(er.t["3taPdj"]),
                        position: "top",
                        "aria-label": er.intl.string(er.t["3taPdj"]),
                        children: (0, d.jsx)(eU.D, {
                            onClick: () => (0, s6.A)(s8.A.getArticleURL(e5.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: s7.s,
                            children: (0, d.jsx)(s9.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    nt = function (e) {
        let {
                isLoading: t,
                title: s,
                sortedSkuIds: n,
                numVisibleItems: l,
                tab: i,
                buttonContainerClassName: a,
                orbsSupportedOnly: r,
            } = e,
            o = (0, B.bG)([A.default], () => A.default.getCurrentUser()),
            c = q.Ay.canUseShopDiscounts(o),
            m = (0, sv.Mk)(i),
            h = (0, tQ.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: f,
                sortedItems: E,
                sortOptions: p,
                shuffleProducts: v,
                showRecommendationOption: j,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: s, orbsSupportedOnly: n } = e,
                    l = (0, B.bG)([s4.A], () => s4.A.hasConsented(e5.YAq.PERSONALIZATION)),
                    i = u.useMemo(() => t?.[s2.RECOMMENDED] ?? [], [t]),
                    a = u.useMemo(() => t?.[s2.POPULAR] ?? [], [t]),
                    r = i.length > 0 && l,
                    [o, c] = u.useState(r ? s2.RECOMMENDED : s2.POPULAR),
                    d = (0, B.bG)([L.A], () => L.A.productsWithVariantsAsGroup),
                    m = u.useMemo(() => (0, sK.CE)(d), [d]),
                    g = (0, s3.A)(),
                    h = (0, tk.p)(),
                    [x, f] = u.useState([]),
                    E = u.useCallback(() => {
                        c(s2.RANDOM), f(s1().shuffle(m));
                    }, [m]);
                u.useEffect(() => {
                    f(s1().shuffle(m));
                }, [m]);
                let p = u.useMemo(() => {
                    let e = [];
                    switch (o) {
                        case s2.RECENT:
                            e = m;
                            break;
                        case s2.PRICE_LOW_TO_HIGH:
                            e = (0, sK.bf)([...m], s, n);
                            break;
                        case s2.RECOMMENDED:
                            e = g(i);
                            break;
                        case s2.POPULAR:
                            e = g(a);
                            break;
                        case s2.RANDOM:
                            e = x;
                    }
                    return n ? (0, s5.ex)(h(e)) : h(e);
                }, [o, n, h, s, m, g, i, a, x]);
                return {
                    sortType: o,
                    setSortType: c,
                    sortedItems: (0, ty.X)(p),
                    sortOptions: u.useMemo(() => {
                        let e = [
                            { value: s2.POPULAR, label: er.intl.string(er.t.Y68e5p) },
                            { value: s2.RECENT, label: er.intl.string(er.t["51Bhiz"]) },
                            { value: s2.PRICE_LOW_TO_HIGH, label: er.intl.string(er.t.m8RVU2) },
                        ];
                        return r && e.unshift({ value: s2.RECOMMENDED, label: er.intl.string(er.t.zPWgFG) }), e;
                    }, [r]),
                    showRecommendationOption: r,
                    shuffleProducts: E,
                };
            })({ sortedSkuIds: n, hasShopDiscount: c, orbsSupportedOnly: r }),
            b = (0, B.bG)([H.Ay], () => H.Ay.useReducedMotion),
            S = (0, B.bG)([sX.A], () => sX.A.isFocused()),
            _ = !b && S,
            { animationPhase: N, startAnimation: O } = (() => {
                let [e, t] = u.useState("mounted"),
                    [s, n] = u.useState(!1),
                    l = u.useRef(null);
                return (
                    u.useEffect(() => {
                        if (s && "finished" === e) {
                            if (null !== l.current) {
                                let e = l.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, sQ.vq)(e, HTMLButtonElement) ||
                                    (0, sQ.vq)(e, HTMLAnchorElement) ||
                                    (0, sQ.vq)(e, HTMLInputElement) ||
                                    (0, sQ.vq)(e, HTMLSelectElement) ||
                                    (0, sQ.vq)(e, HTMLTextAreaElement)
                                )
                                    e.focus();
                                else {
                                    let t = e.querySelector(
                                        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="combobox"], [role="button"]',
                                    );
                                    t?.focus();
                                }
                            }
                            n(!1);
                        }
                    }, [e, s]),
                    {
                        animationPhase: e,
                        startAnimation: u.useCallback((e) => {
                            let { isShuffling: s, onOutroComplete: i, returnRef: a } = e;
                            a?.current != null && ((l.current = a.current), n(!0)),
                                t(s ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        i(),
                                            t(s ? "shuffle-in" : "sort-in"),
                                            setTimeout(
                                                () => {
                                                    t("finished");
                                                },
                                                s ? 200 : 300,
                                            );
                                    },
                                    s ? 250 : 300,
                                );
                        }, []),
                    }
                );
            })(),
            T = (0, I.uM)(),
            R = T?.sessionId ?? "",
            { analyticsLocations: k } = (0, C.Ay)(es.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            y = u.useRef(null),
            M = u.useRef(null),
            [P, D] = u.useState(!1),
            w = u.useCallback(
                (e) => {
                    D(!1),
                        O({ isShuffling: !1, onOutroComplete: () => f(e), returnRef: M }),
                        ts.default.track(e5.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: R,
                            sort_type: e,
                        });
                },
                [O, f, R],
            );
        return null == o
            ? null
            : (0, d.jsx)(C.f5, {
                  value: k,
                  children: (0, d.jsxs)("div", {
                      className: g()(sW.lD, sW.YB),
                      children: [
                          (0, d.jsxs)("div", {
                              className: sW.$6,
                              children: [
                                  (0, d.jsx)(ne, { label: s, personalizedResults: j }),
                                  (0, d.jsxs)("div", {
                                      className: g()(sW.IE, { [tQ.jP]: h }),
                                      children: [
                                          (0, d.jsxs)("div", {
                                              className: sW.gd,
                                              children: [
                                                  (0, d.jsx)(ee.E, {
                                                      variant: "text-md/medium",
                                                      children: er.intl.string(er.t.uaX705),
                                                  }),
                                                  (0, d.jsx)("div", {
                                                      className: g()(a, sW.pI),
                                                      ref: M,
                                                      children: (0, d.jsx)(tX.l, {
                                                          label: er.intl.string(er.t.uaX705),
                                                          hideLabel: !0,
                                                          options: p,
                                                          onSelectionChange: w,
                                                          formatOption: (e) => {
                                                              let { label: t, value: s } = e;
                                                              return { id: s, label: t, value: s };
                                                          },
                                                          value: x,
                                                          selectionMode: "single",
                                                          fullWidth: !0,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, d.jsx)("div", {
                                              className: a,
                                              children: (0, d.jsx)(et.$, {
                                                  variant: "secondary",
                                                  text: er.intl.string(er.t.X3tnc4),
                                                  buttonRef: y,
                                                  onClick: function () {
                                                      D(!0),
                                                          O({ isShuffling: !0, onOutroComplete: v, returnRef: y }),
                                                          ts.default.track(
                                                              e5.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: R },
                                                          );
                                                  },
                                                  disabled: N !== sJ.MOUNTED && N !== sJ.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, d.jsx)(sH.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: P && N === sJ.FINISHED ? er.intl.string(er.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, d.jsx)("div", {
                              className: sW.hm,
                              children: t
                                  ? (0, d.jsx)(d.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, d.jsx)(tD.A, {}, t + 1)),
                                    })
                                  : E.slice(0, l).map((e, t) => {
                                        let s,
                                            n = L.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == n) return null;
                                        if (_)
                                            if (N === sJ.SHUFFLE_OUT)
                                                return (0, d.jsx)(
                                                    "div",
                                                    {
                                                        className: sW.Z2,
                                                        children: (0, d.jsx)(tD.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                N === sJ.SORT_OUT
                                                    ? (s = sW.MW)
                                                    : N === sJ.SHUFFLE_IN
                                                      ? (s = sW.aS)
                                                      : N === sJ.SORT_IN && (s = sW.F7);
                                        return (0, d.jsx)(
                                            I.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, d.jsx)("div", {
                                                    className: s,
                                                    children: (0, d.jsx)(tG.A, {
                                                        skuId: e.skuId,
                                                        hideStaticBundleBackgroundAsset: !0,
                                                        prioritizedCurrency: m,
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
var ns = s(269115),
    nn = s(789645),
    nl = s(976860),
    ni = s(48093);
let na = "GAME_SERVER_HOSTING_BANNER";
function nr(e) {
    let { gameServerHostingBannerBlock: t, tab: s } = e,
        n = (0, I.uM)(),
        l = u.useRef(null),
        i = u.useRef(!1),
        a = u.useRef(null),
        [r, o] = u.useState(!1),
        c = u.useCallback(
            (e) => {
                ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    page_type: s,
                    page_category: n?.pageCategory,
                    page_section: n?.pageSection,
                    tile_type: na,
                    cta_name: e,
                });
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, s],
        ),
        m = u.useCallback(
            (e) => {
                e?.stopPropagation(),
                    c("go_to_game_server_hosting"),
                    (0, nl.pX)(e5.BVt.COLLECTIBLES_SHOP_WITH_TAB(tn.G2.GAME_SERVERS));
            },
            [c],
        ),
        h = u.useCallback(
            (e) => {
                e?.stopPropagation(),
                    c("dismiss"),
                    o(!0),
                    !0 === t.isDismissible &&
                        (0, sT.d6)(eF.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: e9.i.USER_DISMISS,
                        });
            },
            [c, t.isDismissible],
        ),
        x = u.useCallback(
            (e) => {
                !i.current &&
                    (e && null === a.current
                        ? (a.current = setTimeout(() => {
                              (i.current = !0),
                                  (a.current = null),
                                  ts.default.track(e5.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: n?.sessionId,
                                      page_type: s,
                                      page_category: n?.pageCategory,
                                      page_section: n?.pageSection,
                                      type: na,
                                  });
                          }, 1e3))
                        : e || null === a.current || (clearTimeout(a.current), (a.current = null)));
            },
            [n?.sessionId, n?.pageCategory, n?.pageSection, s],
        );
    return (u.useEffect(
        () => () => {
            null !== a.current && (clearTimeout(a.current), (a.current = null));
        },
        [],
    ),
    r)
        ? null
        : (0, d.jsx)(Q.N, {
              theme: ei.NJ.DARKER,
              children: (e) =>
                  (0, d.jsx)(ns.L, {
                      innerRef: l,
                      onChange: x,
                      threshold: 0,
                      children: (0, d.jsx)("div", {
                          ref: l,
                          className: g()(ni.YB, e),
                          children: (0, d.jsxs)(ef.s, {
                              className: ni.kL,
                              onClick: m,
                              "aria-label": er.intl.string(ea.default["34GMP9"]),
                              children: [
                                  (0, d.jsx)("img", {
                                      className: ni.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, d.jsx)("div", { className: ni.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, d.jsx)("div", {
                                          className: ni.b,
                                          children: (0, d.jsx)(eP.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: nn.P,
                                              onClick: h,
                                              "aria-label": er.intl.string(er.t.WAI6xu),
                                          }),
                                      }),
                                  (0, d.jsx)("div", {
                                      className: ni.jE,
                                      children: (0, d.jsxs)("div", {
                                          className: ni.rF,
                                          children: [
                                              (0, d.jsxs)("div", {
                                                  className: ni.Z,
                                                  children: [
                                                      (0, d.jsx)(eu.D, {
                                                          className: ni.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: er.intl.string(ea.default["34GMP9"]),
                                                      }),
                                                      (0, d.jsx)(ee.E, {
                                                          className: ni.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: er.intl.string(ea.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, d.jsx)(et.$, {
                                                  variant: "overlay-primary",
                                                  text: er.intl.string(er.t.jVcuVY),
                                                  onClick: m,
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
var no = s(337183),
    nc = s(212407),
    nd = s(815280),
    nu = s(10675);
let nm = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: s } = e,
        n = (0, tT.K)(
            (e) => {
                s?.(e);
            },
            0.33,
            null != s,
        ),
        { bannerUrl: l, bannerAnimatedUrl: i } = (0, nc.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, d.jsxs)("div", {
        ref: n,
        className: nu.BX,
        children: [
            (0, d.jsx)("div", {
                className: nu.vK,
                children: null != l && (0, d.jsx)(nd.A, { bannerStatic: l, bannerAnimated: i }),
            }),
            (0, d.jsx)("div", {
                className: nu.HQ,
                children: (0, d.jsxs)("div", {
                    className: nu.Yn,
                    children: [
                        null != t.endTime ? (0, d.jsx)(sG, { endDate: t.endTime, size: "lg" }) : null,
                        (0, d.jsx)(eu.D, {
                            variant: "heading-xxl/bold",
                            className: nu.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        r || o
                            ? (0, d.jsxs)(ee.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      r && t.body,
                                      r && o && " ",
                                      o &&
                                          (0, d.jsx)(eT.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: nu.CU,
                                              style: { ...a },
                                              children: er.intl.string(er.t.O7ADgv),
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
var ng = s(449543),
    nh = s(189213),
    nx = s(290136),
    nf = s(478016),
    nE = s(825484),
    np = s(812993),
    nv = s(914410),
    nC = s(839534),
    nj = s(597783),
    nb = s(61750);
function nS(e, t) {
    let s = u.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        n = (0, B.bG)([tx.A], () => tx.A.getPurchases(s));
    return {
        readyToClaim: u.useMemo(() => n.length === s.length, [n, s]),
        collectibleProductSkuIds: s,
        collectedSkuIds: n,
    };
}
var n_ = s(162945),
    nN = s(858708);
let nA = u.memo(function (e) {
        let { category: t, rewardSkuId: s } = e,
            { handleCardVisibilityChange: n } = (0, nj.Z)(s),
            l = u.useRef(null),
            { isHoveringOrFocusing: i } = (0, ep.A)(l),
            { readyToClaim: a, collectibleProductSkuIds: r, collectedSkuIds: o } = nS(t, s),
            c = (0, B.bG)([tx.A], () => tx.A.isClaiming === s);
        return (0, d.jsx)(ns.L, {
            onChange: n,
            threshold: 0,
            innerRef: l,
            children: (0, d.jsx)("div", {
                ref: l,
                className: g()(n_.ty, nN.Q3, { [n_.yo]: i }),
                "aria-label": er.intl.formatToPlainString(er.t.Ez6aHE, { category: t.name }),
                children: (0, d.jsxs)("div", {
                    className: n_.qt,
                    children: [
                        (0, d.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nN.L8,
                        }),
                        (0, d.jsx)("div", {
                            className: n_.N1,
                            children: (0, d.jsx)(np.Lp, {
                                text: er.intl.string(er.t.rykAJ9),
                                disableColor: !0,
                                className: nN.HZ,
                            }),
                        }),
                        (0, d.jsxs)("div", {
                            className: n_.xQ,
                            children: [
                                (0, d.jsxs)("div", {
                                    className: nN.xE,
                                    children: [
                                        (0, d.jsxs)("div", {
                                            className: nN.cs,
                                            children: [
                                                (0, d.jsx)(eu.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: n_.tZ,
                                                    children: er.intl.string(er.t["0mDmg/"]),
                                                }),
                                                (0, d.jsx)(eG.m, {
                                                    text: a
                                                        ? er.intl.string(er.t.cKH3tk)
                                                        : er.intl.formatToPlainString(er.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, d.jsx)("span", {
                                                        className: nN.ZB,
                                                        children: (0, d.jsx)(nx.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, d.jsx)("div", {
                                            className: n_.oh,
                                            "aria-hidden": !0,
                                            children: (0, d.jsxs)("div", {
                                                className: nN.L$,
                                                children: [
                                                    (0, d.jsx)(nv.Ay, {
                                                        variant: nv.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, d.jsxs)("div", {
                                                        className: g()(nN.__, { [nN.gF]: a }),
                                                        children: [
                                                            a
                                                                ? (0, d.jsx)(nf.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, d.jsx)(ee.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: er.intl.formatToPlainString(er.t["5TwASM"], {
                                                                    collectedCount: o.length,
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
                                (0, d.jsx)("div", {
                                    className: n_.Vs,
                                    children: (0, d.jsx)(nE.e, {
                                        wrap: !1,
                                        className: n_.Ld,
                                        fullWidth: !0,
                                        children: (0, d.jsx)(et.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    a &&
                                                        (0, nC.BX)(t.skuId, s)
                                                            .then(() => {
                                                                let e = L.A.getProduct(s);
                                                                null != e &&
                                                                    (0, nb.A)({
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
                                                                (0, f.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, d.jsx)(nh.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: er.intl.string(er.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: er.intl.string(er.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, d.jsx)("div", {
                                                                                children: er.intl.string(
                                                                                    er.t["0YpIF/"],
                                                                                ),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: er.intl.string(er.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !a,
                                            loading: c,
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
    nI = function (e) {
        let t,
            s,
            n,
            { isBlockLoading: l = !1, heroBlock: i, tab: a } = e,
            r = (0, sv.Mk)(a),
            o = u.useMemo(() => L.A.getCategoryForProduct(i.rewardSkuId), [i.rewardSkuId]),
            c = (0, B.bG)([tx.A], () => tx.A.getPurchase(i.rewardSkuId)),
            { products: m } =
                ((t = (0, s3.A)()),
                (s = u.useMemo(
                    () => (l ? [] : t(i.rankedSkuIds).filter((e) => e.skuId !== i.rewardSkuId || null != c)),
                    [l, t, i.rankedSkuIds, c, i.rewardSkuId],
                )),
                (n = (0, tk.p)()(s)),
                { products: (0, ty.X)(n) }),
            g = u.useMemo(
                () =>
                    !l &&
                    0 !== i.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    i.rankedSkuIds.every((e) => L.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, i.rankedSkuIds, m.length],
            ),
            h = l || g,
            { readyToClaim: x } = nS(o, i.rewardSkuId),
            f = null == c && null != i.rewardSkuId && null != o;
        return (0, d.jsx)(ng.A, {
            gap: "xl",
            children: h
                ? (0, d.jsx)(d.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, d.jsx)(tD.A, {}, t)),
                  })
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          f &&
                              x &&
                              (0, d.jsx)(
                                  I.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, d.jsx)(nA, { category: o, rewardSkuId: i.rewardSkuId }),
                                  },
                                  i.rewardSkuId,
                              ),
                          m.map((e, t) => {
                              let s = L.A.getCategoryForProduct(e.skuId);
                              return null == e || null == s
                                  ? null
                                  : (0, d.jsx)(
                                        I.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, d.jsx)(tG.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, sK.$b)(90);
let nL = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: sO.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nO = function (e) {
        let { isLoading: t = !1, heroBlock: s, tab: n, onVisibilityChange: l } = e,
            i = (0, tT.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            a = (0, B.bG)([A.default], () => A.default.getCurrentUser()),
            { analyticsLocations: r } = (0, C.Ay)(es.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: c,
                heroLogo: u,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, nc.Kk)(s),
            x = o?.responsive ?? !1,
            f = o?.backgroundStyle;
        return null != a && (t || s !== nL)
            ? (0, d.jsx)(C.f5, {
                  value: r,
                  children: (0, d.jsxs)("div", {
                      ref: i,
                      className: sW.os,
                      children: [
                          (0, d.jsx)("div", {
                              className: g()(sW.vK, { [sW.no]: x }),
                              style: null != f ? { background: f } : void 0,
                              children:
                                  null != m &&
                                  (0, d.jsx)(nd.A, { bannerStatic: m, bannerAnimated: h, isResponsive: x }),
                          }),
                          (0, d.jsxs)("div", {
                              className: sW.xX,
                              children: [
                                  (0, d.jsx)("div", {
                                      className: g()(sW.bC, { [sW.no]: x }),
                                      children: t
                                          ? (0, d.jsx)("div", { className: sW.Hw })
                                          : (0, d.jsx)("div", {
                                                className: sW.Hw,
                                                children: (0, d.jsxs)("div", {
                                                    className: sW.Wq,
                                                    children: [
                                                        null != u &&
                                                            (0, d.jsx)("img", {
                                                                className: sW.rm,
                                                                src: u,
                                                                alt: s.name,
                                                                style: c?.toDesktopStyles(),
                                                            }),
                                                        null != s.title &&
                                                            (0, d.jsx)(eu.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: sW.DD,
                                                                color: "text-strong",
                                                                children: s.title,
                                                            }),
                                                        "" !== s.summary &&
                                                            (0, d.jsx)(ee.E, {
                                                                variant: "text-md/normal",
                                                                className: sW.Tm,
                                                                style:
                                                                    null != s.bannerTextColor
                                                                        ? { color: s.bannerTextColor }
                                                                        : void 0,
                                                                children: s.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, d.jsx)(nI, { isBlockLoading: t, heroBlock: s, tab: n }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var nT = s(222884);
let nR = function (e) {
    let { shelf: t, handleTransition: s, tab: n } = e,
        l = (0, B.bG)([A.default], () => A.default.getCurrentUser()),
        i = (0, sv.Mk)(n),
        a = (0, B.bG)([L.A], () => (null != t.categorySkuId ? L.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, s3.A)(),
        o = u.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        c = (0, ty.X)(o),
        { analyticsLocations: m } = (0, C.Ay)(es.A.COLLECTIBLES_SHOP_SHELF),
        h = u.useCallback(() => {
            s({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: a?.isOrbsExclusive === !0 && n !== tn.G2.ORBS,
            });
        }, [t.categorySkuId, a, s, n]);
    if (null == l || 0 === c.length) return null;
    let x = t.buttonText ?? er.intl.formatToPlainString(er.t.bc9RBE, { category_name: t.name }),
        f = t.showButton,
        E = t.desktopBackgroundImage,
        p = null != E;
    return (0, d.jsx)(C.f5, {
        value: m,
        children: (0, d.jsxs)("div", {
            className: g()(nT.mu, sW.YB, p ? nT.VA : nT.Ti),
            children: [
                p && (0, d.jsx)("img", { className: nT.iL, src: E, alt: "", "aria-hidden": !0 }),
                (0, d.jsxs)("div", {
                    className: nT.Qs,
                    children: [
                        (0, d.jsxs)("div", {
                            className: nT.wx,
                            children: [
                                (0, d.jsx)(eu.D, {
                                    variant: "heading-lg/semibold",
                                    style: p ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                f &&
                                    (0, d.jsx)(et.$, {
                                        variant: p ? "overlay-primary" : "secondary",
                                        text: x,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, d.jsx)(ng.A, {
                            gap: "xl",
                            edgeFade: p ? "sm" : void 0,
                            children: c.map((e, s) =>
                                null == L.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, d.jsx)(
                                          I.R9,
                                          {
                                              newValue: { tilePosition: s, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, d.jsx)(tG.A, { skuId: e.skuId, prioritizedCurrency: i }),
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
var nk = s(465794),
    ny = s(69236),
    nM = s(44724),
    nP = s(421108),
    nD = s(873297);
let nB = function (e) {
    let {
            applicationId: t,
            headerText: s,
            gradientColors: n,
            gradientAngle: l,
            skuIds: i,
            tab: a,
            endTime: r,
            ctaType: o = "storefront",
            logoUrl: c,
        } = e,
        m = (0, nP.u)(r) ?? void 0,
        g = (0, ny.W8)(),
        h = u.useMemo(
            () =>
                "nitro" !== o || g
                    ? {
                          kind: "button",
                          text: er.intl.string(er.t.apFNLU),
                          onClick: () => (0, nM.default)({ applicationId: t }),
                          onMouseDown: () => (0, nM.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, d.jsx)(nk.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: el.pe.TIER_2,
                              buttonTextOverride: er.intl.string(er.t.pj0XBN),
                          }),
                      },
            [o, t, g],
        );
    return (0, d.jsx)(nD.A, {
        skuIds: i,
        tab: a,
        applicationId: t,
        headerText: s,
        logoUrl: c,
        cta: h,
        timeLeftText: m,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${l}deg, ${n.join(", ")})`,
    });
};
var nH = s(575593),
    nw = s(770178),
    nF = s(929283),
    nG = s(273411);
let nU = [
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
function nz(e) {
    let { config: t, baseLeft: s, transitioning: n } = e,
        l = window.innerHeight,
        i = L.A.getProduct(t.skuId),
        a = i?.items[0],
        r = i?.type,
        o = s + t.horizontalJitter;
    return (0, d.jsx)("div", {
        className: nG.LY,
        style: {
            top: n ? -l - 384 : t.top,
            left: n ? o + t.transitionOffsetLeft : o,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != a && r === nH.R.AVATAR_DECORATION && (0, d.jsx)(nF.i, { item: a }),
    });
}
let nV = (e) => {
        let { peaking: t, transitioning: s, parentWidth: n } = e,
            [l, i] = u.useState(!1),
            [a, r] = u.useState([]),
            [o] = u.useState(() =>
                [...nU]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${tn.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            u.useEffect(() => {
                if (null != n && n > 0) {
                    let e = Math.max(1, Math.floor(n / 130)),
                        t = n / e;
                    r(Array.from({ length: e }, (e, s) => ({ config: o[s % o.length], baseLeft: s * t })));
                }
            }, [n, o]),
            u.useEffect(() => {
                s && setTimeout(() => i(!0), tn.H1);
            }, [s]),
            (0, d.jsx)("div", {
                className: g()(nG.rA, { [nG.Kb]: t, [nG.pp]: l }),
                children: a.map((e, t) => {
                    let { config: n, baseLeft: l } = e;
                    return (0, d.jsx)(nz, { config: n, baseLeft: l, transitioning: s }, n.skuId + t);
                }),
            })
        );
    },
    nK = function (e) {
        let { peaking: t, transitioning: s } = e,
            n = u.useRef(null),
            [l, i] = u.useState(0),
            a = u.useCallback(() => {
                null != n.current && i(n.current.offsetWidth);
            }, []);
        return (
            (0, nw.g)(n, a),
            (0, d.jsx)("div", {
                ref: n,
                className: nG.eL,
                children: (0, d.jsx)(nV, { peaking: t, transitioning: s, parentWidth: l }),
            })
        );
    };
var nY = s(815021);
let nW = function (e) {
        let { wideBannerBlock: t, tab: s } = e,
            n = L.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            l = u.useRef(null),
            i = u.useRef(null),
            [a, r] = u.useState(),
            [o, c] = u.useState(!1);
        u.useEffect(() => {
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
        let m = n?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, nj.Z)(m, "home", "marketing wide banner"),
            x = (0, I.uM)(),
            { bannerURL: f } = (0, nc.w$)(t),
            E = s === tn.G2.ORBS,
            p = null != t.ctaRoute && "" !== t.ctaRoute,
            v = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
            C = null != t.logoURL && "" !== t.logoURL,
            j = u.useCallback(() => {
                if ((c(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, sT.$l)(eF.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: e9.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            b = u.useCallback(
                (e) => {
                    ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: x?.sessionId,
                        sku_id: m,
                        page_type: s,
                        page_section: x?.pageSection,
                        page_category: x?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(x?.tilePosition),
                        cta_name: e,
                    });
                },
                [x, m, s],
            ),
            S = u.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((b(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    s = parseInt(t[2], 10);
                                (0, nM.default)({ guildId: e, pageIndex: s });
                            }
                        } else (0, nl.pX)(e);
                    }
                },
                [t.ctaRoute, b],
            );
        if (null == f || o) return null;
        let _ = g()(sW.nM, sW.Tq, sW.TS, sW.YB, { [sW._1]: E, [sW.vb]: p }),
            N = (0, d.jsxs)(d.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, d.jsx)("div", {
                            className: sW.Mh,
                            children: (0, d.jsx)(nY.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), j();
                                },
                                "aria-label": er.intl.string(er.t.WAI6xu),
                            }),
                        }),
                    (0, d.jsx)("div", {
                        className: g()(sW.zK, { [sW._1]: E }),
                        style: null != a ? { height: `${a}px` } : void 0,
                        children: (0, d.jsx)("img", {
                            ref: i,
                            src: f,
                            alt: t.title,
                            className: g()(sW.LN, { [sW.d5]: E }),
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: g()(sW.Ep, { [sW.Qq]: v }),
                        style: { maxHeight: null != a ? `${a}px` : "auto" },
                        children: (0, d.jsxs)("div", {
                            className: sW.E8,
                            children: [
                                (0, d.jsx)(eu.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: E ? sW.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, d.jsx)(ee.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: E ? "text-md/medium" : "text-sm/medium",
                                    children: E
                                        ? er.intl.format(er.t.SFFP7K, {
                                              helpdeskArticle: s8.A.getArticleURL(e5.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                v &&
                                    (0, d.jsxs)("div", {
                                        className: sW.nP,
                                        children: [
                                            (0, d.jsx)(et.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), S(t.ctaText ?? er.intl.string(er.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? er.intl.string(er.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? er.intl.formatToPlainString(er.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            C && (0, d.jsx)("img", { src: t.logoURL, alt: "", className: sW.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, d.jsx)(Q.N, {
            theme: E ? void 0 : ei.NJ.DARK,
            children: (e) =>
                (0, d.jsx)(ns.L, {
                    innerRef: l,
                    onChange: h,
                    threshold: 0,
                    children: p
                        ? (0, d.jsx)(eU.D, { innerRef: l, onClick: () => S(null), className: g()(e, _), children: N })
                        : (0, d.jsx)("div", { ref: l, className: g()(e, _), children: N }),
                }),
        });
    },
    n$ = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: n, tab: l } = e,
            { noCache: i, includeUnpublished: a } = (0, tz.A)(),
            [r, o] = u.useState(!1),
            c = (0, I.uM)(),
            m = c?.sessionId ?? "",
            h = (0, w.H)({ location: "collectibles_shop_feed" });
        u.useEffect(() => {
            (0, tM.z)({
                sessionId: m,
                checkpoint: tM.t.SHOP_MOUNTED,
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
            } = (0, sy.y)(l, { noCache: i, includeUnpublished: a, logPerf: !0 }, { sessionId: m, tab: l }),
            v = u.useCallback(() => {
                p();
            }, [p]);
        return (u.useEffect(() => {
            null != f ||
                x ||
                0 === E.length ||
                (0, tM.z)({
                    sessionId: m,
                    checkpoint: tM.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: a,
                    cacheDisabled: i,
                });
        }, [f, x, E.length, a, i, m, l]),
        null != f)
            ? (0, d.jsx)(sL.h, { onRetry: v, errorOrigin: sL.A.SHOP_PAGE, errorMessage: f.message })
            : x || 0 === E.length
              ? (0, d.jsxs)("div", {
                    className: g()(sW.g4, sW.Of),
                    children: [
                        (0, d.jsx)(no.A, { isLoading: x, handleTransition: t, tab: l }),
                        (0, d.jsx)(sZ, { isLoading: x, handleTransition: t, categories: [] }),
                        (0, d.jsx)(nt, {
                            isLoading: x,
                            title: l === tn.G2.ORBS ? er.intl.string(er.t.dFgeuZ) : er.intl.string(er.t.NSv5KV),
                            numVisibleItems: s,
                            tab: l,
                        }),
                    ],
                })
              : (0, d.jsx)(d.Fragment, {
                    children: E.map((e, i) =>
                        (function (e, i, a) {
                            if (null == e) return null;
                            let c = null,
                                u = !1;
                            switch (e.type) {
                                case sO.g.HERO:
                                    c = (0, d.jsx)(
                                        no.A,
                                        { isLoading: x, handleTransition: t, heroBlock: e, tab: l },
                                        a,
                                    );
                                    break;
                                case sO.g.FEATURED:
                                    c = (0, d.jsx)(
                                        sZ,
                                        { isLoading: x, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case sO.g.FEED:
                                    let m = e.sortedSkuIds;
                                    c = (0, d.jsx)(
                                        nt,
                                        {
                                            title:
                                                l === tn.G2.ORBS
                                                    ? er.intl.string(er.t.dFgeuZ)
                                                    : er.intl.string(er.t.NSv5KV),
                                            isLoading: n,
                                            numVisibleItems: s,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: i?.type === sO.g.IMMERSIVE_BANNER ? sW.w : void 0,
                                            tab: l,
                                            orbsSupportedOnly: l === tn.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case sO.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, sT.En)(eF.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    c = (0, d.jsx)(nW, { wideBannerBlock: e, tab: l }, a);
                                    break;
                                case sO.g.SHELF:
                                    c = (0, d.jsx)(nR, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case sO.g.COUNTDOWN_TIMER:
                                    (c = (0, d.jsx)(sz, { countdownTimerBlock: e, isVisible: r }, a)), (u = !0);
                                    break;
                                case sO.g.IMMERSIVE_BANNER:
                                    c = (0, d.jsx)(
                                        nm,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        a,
                                    );
                                    break;
                                case sO.g.REWARD_HERO:
                                    c = (0, d.jsx)(nO, { isLoading: x, handleTransition: t, heroBlock: e, tab: l }, a);
                                    break;
                                case sO.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, sT.En)(eF.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, d.jsx)(
                                        sk,
                                        {
                                            blockType: e.type,
                                            children: (0, d.jsx)(nr, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case sO.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, d.jsx)(
                                        sk,
                                        {
                                            blockType: e.type,
                                            children: (0, d.jsx)(nB, {
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
                            return (0, d.jsx)(
                                sk,
                                {
                                    blockType: e.type,
                                    children: (0, d.jsx)("div", {
                                        className: g()(sW.v1, sW.Of, { [sW.J1]: 0 === a || u }),
                                        children: c,
                                    }),
                                },
                                a,
                            );
                        })(e, i > 0 ? E[i - 1] : null, i),
                    ),
                });
    },
    nq = function (e) {
        let { handleTransition: t, tab: s, transitionState: n } = e,
            l = u.useRef(null),
            { handleScroll: i } = tb(l, s),
            a = (0, tU.U)(),
            r = (0, I.uM)(),
            [o, c] = u.useState(tn.md),
            [m, g] = u.useState(!1);
        return (
            u.useEffect(() => {
                if (null != l.current) {
                    function e() {
                        if (null == l.current) return;
                        let e = l.current.getDistanceFromBottom();
                        o >= 36 ? g(e < 20) : e <= 200 && c((e) => e + tn.md);
                    }
                    let t = l.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [l, o, c, g]),
            (0, d.jsx)(F.Ch, {
                className: sW.OW,
                ref: l,
                onScroll: i,
                children: (0, d.jsxs)("div", {
                    className: sW.bx,
                    children: [
                        (0, d.jsxs)("div", {
                            className: sW.rb,
                            children: [
                                (0, d.jsx)(n$, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: a,
                                    tab: s,
                                }),
                                s !== tn.G2.CATALOG &&
                                    o >= 36 &&
                                    (0, d.jsxs)("div", {
                                        className: sW.R$,
                                        children: [
                                            (0, d.jsx)(eu.D, {
                                                variant: "heading-md/semibold",
                                                children: er.intl.string(er.t.Yr70c4),
                                            }),
                                            (0, d.jsx)(et.$, {
                                                variant: "primary",
                                                text: er.intl.string(er.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: s,
                                                            page_category: s === tn.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, d.jsx)(nK, { peaking: m, transitioning: n === tn.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var nZ = s(154323),
    nX = s(295811),
    nQ = s(870216);
let nJ = { "Any:personalization-header": ne },
    n0 = { [tN.b.SHOP_HOME]: nJ },
    n1 = { "1465939725649973269": nJ, "1478495181551440044": nJ },
    n2 = function () {
        return (0, d.jsx)("div", {
            style: {
                background: "linear-gradient(rgba(39, 30, 173, 0.3), transparent)",
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
            },
            children: (0, d.jsx)("div", {
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
    n4 = { prioritizedCurrency: sv.Hi.ORBS };
function n3(e) {
    let { tab: t } = e,
        [s, n, l] = (0, B.yK)([nQ.A], () => [nQ.A.getLayout(t), nQ.A.isFetchingLayout(t), nQ.A.getLayoutFetchError(t)]),
        i = (0, B.bG)([nZ.A], () => nZ.A.get("shop_include_unpublished")),
        a = (0, B.bG)([L.A], () => L.A.skipNumCategories),
        r = u.useMemo(() => {
            let e = {};
            return !0 === i && (e.include_unpublished = !0), null != a && a > 0 && (e.skip_num_categories = a), e;
        }, [i, a]),
        o = null == s && !n && l?.status !== 404 && l?.status !== 429;
    if (
        (u.useEffect(() => {
            o && (0, nC.T2)({ tab: t });
        }, [o, t]),
        null == s)
    )
        return t !== D.HOME || o || n
            ? null
            : (0, d.jsx)(t_.Z_, {
                  tenantId: e5.FYj,
                  templateId: tN.b.SHOP_HOME,
                  requestParams: r,
                  overrides: n0[tN.b.SHOP_HOME],
              });
    let c = (0, d.jsx)(t_.Qs, { tenantId: e5.FYj, layoutId: s, overrides: n1[s] });
    return (0, d.jsxs)(d.Fragment, {
        children: [
            t === D.ORBS && (0, d.jsx)(n2, {}),
            t === D.ORBS ? (0, d.jsx)(sv.v3.Provider, { value: n4, children: c }) : c,
        ],
    });
}
function n5(e) {
    let { url: t } = e,
        [s, n] = u.useState(null);
    return (u.useEffect(() => {
        !(async function () {
            try {
                let e = await fetch(t),
                    s = await e.json();
                n(s);
            } catch (e) {
                n(null);
            }
        })();
    }, [t]),
    null == s)
        ? null
        : (0, d.jsx)(t_.Ay, { layout: s });
}
let n9 = function (e) {
    let { handleTransition: t, tab: s, transitionState: n } = e,
        l = (0, I.uM)(),
        i = (0, B.bG)([nX.A], () => nX.A.getShopLayoutUrlOverride()),
        a = u.useRef(null),
        { handleScroll: r } = tb(a, s),
        [o, c] = u.useState(tn.md),
        [m, h] = u.useState(!1);
    return (
        u.useEffect(() => {
            if (null != a.current) {
                function e() {
                    if (null == a.current) return;
                    let e = a.current.getDistanceFromBottom();
                    o >= 36 ? h(e < 20) : e <= 200 && c((e) => e + tn.md);
                }
                let t = a.current.getScrollerNode();
                return (
                    t?.addEventListener("scroll", e),
                    () => {
                        t?.removeEventListener("scroll", e);
                    }
                );
            }
        }, [a, o, c, h]),
        (0, d.jsx)(F.Ch, {
            className: sW.OW,
            ref: a,
            onScroll: r,
            children: (0, d.jsxs)("div", {
                className: sW.bx,
                children: [
                    (0, d.jsxs)("div", {
                        className: g()(sW.rb, sW.GS),
                        children: [
                            null != i && "" !== i ? (0, d.jsx)(n5, { url: i }) : (0, d.jsx)(n3, { tab: s }),
                            s !== D.CATALOG &&
                                o >= 36 &&
                                (0, d.jsxs)("div", {
                                    className: sW.R$,
                                    children: [
                                        (0, d.jsx)(eu.D, {
                                            variant: "heading-md/semibold",
                                            children: er.intl.string(er.t.Yr70c4),
                                        }),
                                        (0, d.jsx)(et.$, {
                                            variant: "primary",
                                            text: er.intl.string(er.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    ts.default.track(e5.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: s,
                                                        page_category: s === D.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, d.jsx)(nK, { peaking: m, transitioning: n === tn.Pf.OUT }),
                ],
            }),
        })
    );
};
var n6 = s(564027);
let n8 = function () {
        return (0, d.jsxs)("div", {
            className: n6.z,
            children: [
                (0, d.jsx)("img", {
                    className: n6.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: er.intl.string(er.t["p8+qtU"]),
                }),
                (0, d.jsx)(eu.D, { variant: "heading-xl/semibold", children: er.intl.string(er.t["p8+qtU"]) }),
                (0, d.jsx)(ee.E, { variant: "text-md/medium", children: er.intl.string(er.t.UEiyvs) }),
            ],
        });
    },
    n7 = [tn.G2.HOME, tn.G2.ORBS];
function le(e) {
    let {
            tab: t,
            categories: s,
            transitionToTab: n,
            transitionState: l,
            updateAnalyticsState: i,
            refreshCategories: a,
        } = e,
        r = (0, B.bG)([L.A, tx.A], () =>
            null != L.A.error
                ? `shop load fetch categories error: ${L.A.error.message}`
                : null != tx.A.claimError
                  ? `shop load claim error: ${tx.A.claimError.message}`
                  : null != tx.A.fetchError
                    ? `shop load fetch purchase error: ${tx.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, B.bG)([A.default], () => A.default.getCurrentUser()),
            { noCache: s, includeUnpublished: n } = (0, tz.A)();
        u.useEffect(() => {
            null != e &&
                th.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: s.toString(),
                        includeUnpublished: n.toString(),
                    },
                });
        }, [e, t, s, n]);
    })(r);
    let o = (0, w.H)({ location: "collectibles_content" }),
        c = (0, B.bG)([H.Ay], () => H.Ay.useReducedMotion),
        m = (0, P.W6)(),
        g = (0, P.zy)(),
        [h] = u.useState(() => {
            if ("POP" === m.action) {
                let e;
                return (e = tV), (tV = null), e ?? void 0;
            }
        }),
        [x, f] = u.useState(h),
        [E, p] = u.useState(null == h),
        v = u.useMemo(() => {
            let e = new URLSearchParams(g.search).get(tn.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        C = u.useMemo(
            () =>
                s.filter(
                    (e) =>
                        !tn.MS.some((t) => {
                            let { categorySkuId: s } = t;
                            return s === e.skuId;
                        }),
                ),
            [s],
        ),
        j = (0, tg.U)("CollectiblesContent"),
        b = (0, tf.a)("CollectiblesContent"),
        S = u.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: s,
                    shouldAnimate: l,
                    isInternalShopDeeplink: a,
                    isOrbsExclusive: r,
                } = e;
                if ((i(t, s), b && null != s && a && !r))
                    return void m.push(e5.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(s));
                let o = l && !c,
                    d = r ? tn.G2.ORBS : tn.G2.CATALOG;
                f(s), p(!a), n(d, o);
            },
            [c, n, i, b, m],
        ),
        { searchError: _ } = (0, tE.S)();
    return null != _
        ? (0, d.jsx)(n8, {})
        : null != r
          ? (0, d.jsx)(sL.h, { onRetry: a, errorMessage: r, errorOrigin: sL.A.SHOP_PAGE })
          : t === tn.G2.HOME && j
            ? (0, d.jsx)(n9, { tab: D.HOME, transitionState: l, handleTransition: S })
            : t === tn.G2.ORBS && j
              ? (0, d.jsx)(n9, { tab: D.ORBS, transitionState: l, handleTransition: S })
              : n7.includes(t)
                ? (0, d.jsx)(nq, { handleTransition: S, tab: t, transitionState: l })
                : t === tn.G2.GAME_SERVERS
                  ? o
                      ? (0, d.jsx)(tu, {})
                      : (0, d.jsx)(P.rd, { to: e5.BVt.COLLECTIBLES_SHOP_WITH_TAB(tn.G2.HOME) })
                  : (0, d.jsx)(sA, {
                        tab: t,
                        categories: C,
                        initialCategoryId: x ?? v,
                        showFilterInitially: E && null == v,
                        onUnmount: () => {
                            f(void 0), p(!0);
                        },
                    });
}
var lt = s(956123),
    ls = s(235939),
    ln = s(870308),
    ll = s(650583);
function li(e) {
    let { children: t, shouldAddEventListener: s, onClose: n } = e,
        l = (0, f.useHasAnyModalOpen)();
    return (
        u.useEffect(() => {
            if (s && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === ll.N$.Escape && n();
            }
        }, [s, l, n]),
        t
    );
}
let la = function (e) {
    let { tab: t = tn.G2.HOME } = e;
    (0, S.P)(b.a);
    let s = (0, v.A)((0, h.A)()),
        n = (0, x.bG)([A.default], () => A.default.getCurrentUser());
    (0, N.pE)();
    let l = (0, tQ.yB)("CollectiblesShop"),
        { onClose: i } = (function () {
            let { search: e } = (0, P.zy)(),
                t = (0, P.g)(),
                s = u.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                n = null != s ? parseInt(s, 10) : null;
            return {
                onClose: u.useCallback(() => {
                    if (0 === n) {
                        (0, nl.aX)(), (0, K.openUserSettings)();
                        return;
                    }
                    (0, nl.EL)() ? (0, nl.aX)() : (0, nl.pX)(e5.BVt.APP);
                }, [n]),
                source: n,
                ...t,
            };
        })(),
        { currentTab: a, hasFilters: r } = (0, M.v)(),
        o = u.useMemo(() => (t === tn.G2.HOME && null != a && r() ? a : t), [t, a, r]),
        c = (0, T.M)("CollectiblesShop");
    (0, _.A)(c ? e5.FYj : void 0);
    let { categories: m, refreshCategories: D } = (0, k.Ay)({ logPerf: !0 }, { sessionId: s, tab: o }),
        B = u.useMemo(() => [...m.values()], [m]),
        [H, w] = u.useState(),
        F = (0, x.bG)([L.A], () => L.A.getCategory(H)?.name),
        [G, U] = u.useState();
    (0, t$.XU)(s);
    let z = u.useCallback((e, t) => {
            U(e), w(t);
        }, []),
        { selectedTab: V, transitionState: Y, transitionToTab: W } = (0, y.o)(o);
    (0, j.HU)({ location: er.intl.string(er.t.pWG4ze) }), (0, R.uS)(s, V, F, Y, G), (0, R.N0)(V, n);
    let { dismissShopButtonDC: $ } = (0, ln.A)();
    u.useEffect(() => {
        $();
    }, [$]),
        u.useEffect(() => {
            (0, p.I)(e5.BVt.COLLECTIBLES_SHOP);
        }, []);
    let q = u.useRef(null),
        Z = u.useRef(null);
    (0, E.tj)(q);
    let X = (0, f.useHasAnyModalOpen)();
    u.useEffect(() => {
        Z.current?.focus();
    }, []),
        (0, tQ.gB)();
    let { analyticsLocations: Q } = (0, R.lC)(V);
    return (0, d.jsx)(C.f5, {
        value: Q,
        children: (0, d.jsx)(I.R9, {
            newValue: { sessionId: s, pageCategory: F, pageSize: tn.l5 },
            children: (0, d.jsx)(O.iM, {
                tab: V,
                children: (0, d.jsx)(li, {
                    onClose: i,
                    shouldAddEventListener: !1,
                    children: (0, d.jsxs)("div", {
                        className: g()(tH.bx, { [tQ.jP]: l }),
                        ref: Z,
                        inert: X,
                        tabIndex: -1,
                        children: [
                            (0, d.jsx)(lt.G, { handleTransition: W, selectedTab: V }),
                            (0, d.jsx)(ls.A, { tab: V, handleTransition: W }),
                            (0, d.jsx)("div", {
                                className: g()(tH.td, {
                                    [tH.RK]: Y === tn.Pf.VISIBLE,
                                    [tH.in]: Y === tn.Pf.IN,
                                    [tH.FD]: Y === tn.Pf.OUT,
                                }),
                                children: (0, d.jsx)(le, {
                                    tab: V,
                                    refreshCategories: D,
                                    transitionToTab: W,
                                    transitionState: Y,
                                    categories: B,
                                    updateAnalyticsState: z,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
