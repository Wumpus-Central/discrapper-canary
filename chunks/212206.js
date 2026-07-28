n.r(t), n.d(t, { default: () => sL });
var l,
    s,
    a,
    i,
    r,
    o,
    c,
    d = n(477900),
    u = n(582128),
    m = n(503698),
    g = n.n(m),
    h = n(132500),
    x = n(702841),
    f = n(192308),
    E = n(315710),
    p = n(944791),
    v = n(444927),
    j = n(688810),
    C = n(726249),
    b = n(475073),
    S = n(611924),
    _ = n(744082),
    A = n(561794),
    N = n(287809),
    I = n(440938),
    L = n(590180),
    O = n(161918),
    k = n(71604),
    T = n(790297),
    y = n(841702),
    R = n(983545),
    P = n(23161);
n(323874), n(14289), n(35956), n(321073);
var M = n(806163),
    B = (((l = {}).HOME = "home"), (l.CATALOG = "catalog"), (l.ORBS = "orbs"), l),
    D = n(17928),
    H = n(775602),
    F = n(578797),
    w = n(140218),
    G = n(689175),
    U = n(277984),
    z = n(670735),
    V = n(780964),
    K = n(766075),
    Y = n(280450),
    W = n(166403),
    $ = n(123917),
    q = n(428262),
    Z = n(790284),
    X = n(98091),
    Q = n(680127),
    J = n(43990),
    ee = n(403581),
    et = n(834730),
    en = n(821609),
    el = n(793574),
    es = n(532794),
    ea = n(202541),
    ei = n(818348),
    er = n(576709),
    eo = n(375708),
    ec = n(123743);
function ed() {
    let e = u.useCallback(() => {
        (0, es.A)({ subscriptionTier: ea.pe.TIER_2, analyticsLocations: [el.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, d.jsx)(J.N, {
        theme: ei.NJ.DARKER,
        children: (t) =>
            (0, d.jsxs)("div", {
                className: g()(ec.vK, t),
                children: [
                    (0, d.jsxs)("div", {
                        className: ec.Pf,
                        children: [
                            (0, d.jsx)(ee.t, {
                                className: ec.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, d.jsx)(et.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: eo.intl.string(er.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, d.jsx)(en.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: ee.t,
                        text: eo.intl.string(eo.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var eu = n(462887),
    em = n(297264),
    eg = n(736653),
    eh = n(77482);
function ex(e) {
    let { onRetry: t, errorMessage: n } = e,
        l = (0, eg.Ay)(),
        s = (0, D.bG)([N.default], () => {
            let e = N.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, d.jsxs)("div", {
        className: eh.kL,
        children: [
            (0, d.jsx)("img", {
                className: eh.Sl,
                src: (0, eu.M)(l) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, d.jsx)(em.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t.i5SQ74) }),
            (0, d.jsx)(et.E, {
                className: eh.h_,
                variant: "text-md/normal",
                color: "text-muted",
                children: eo.intl.string(eo.t.F8FvUy),
            }),
            s &&
                null != n &&
                (0, d.jsx)(et.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: "staff-only debug: " + n,
                }),
            (0, d.jsx)(en.$, { variant: "primary", text: eo.intl.string(eo.t["+hivLW"]), onClick: t }),
        ],
    });
}
var ef = n(2799),
    eE = n(890856),
    ep = n(331322),
    ev = n(713517),
    ej = n(430836);
function eC(e) {
    let { name: t, coverUrl: n, fromPriceLabel: l, nitroFromPriceLabel: s, onClickCard: a, onClickViewPlans: i } = e,
        r = u.useRef(null),
        { isHoveringOrFocusing: o } = (0, ev.A)(r),
        c = (0, D.bG)([N.default], () => q.Ay.canUseShopDiscounts(N.default.getCurrentUser())) && null != s,
        m = c ? s : l,
        h = u.useCallback(
            (e) => {
                e.stopPropagation(), i?.();
            },
            [i],
        );
    return (0, d.jsxs)(eE.s, {
        ref: r,
        onClick: a,
        "aria-label": t,
        className: g()(ej.Nr, { [ej.yo]: o }),
        children: [
            (0, d.jsx)("div", {
                className: ej.q4,
                "aria-hidden": !0,
                children: null != n && (0, d.jsx)("img", { className: ej.xy, src: n, alt: "" }),
            }),
            (0, d.jsxs)("div", {
                className: ej.Iv,
                children: [
                    null != n
                        ? (0, d.jsx)("img", { className: ej.N4, src: n, alt: "" })
                        : (0, d.jsx)("div", {
                              className: ej.WB,
                              children: (0, d.jsx)(et.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, d.jsx)("div", { className: ej.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, d.jsxs)("div", {
                className: ej.qr,
                children: [
                    (0, d.jsxs)("div", {
                        className: ej.cs,
                        children: [
                            (0, d.jsx)(et.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                tag: "p",
                                children: t,
                            }),
                            null != m &&
                                (0, d.jsx)("div", {
                                    className: ej.F1,
                                    children: (0, d.jsxs)(ep.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, d.jsxs)(ep.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    c &&
                                                        (0, d.jsx)(ee.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, d.jsx)(et.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: m,
                                                    }),
                                                ],
                                            }),
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, d.jsx)("div", {
                        className: ej.E1,
                        children: (0, d.jsx)(en.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: eo.intl.string(er.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var eb = n(903247);
function eS() {
    return (0, d.jsx)("div", {
        className: g()(ej.Nr, eb.s7, eb.U6),
        "aria-hidden": !0,
        children: (0, d.jsxs)("div", {
            className: eb.qr,
            children: [(0, d.jsx)("div", { className: eb.w9 }), (0, d.jsx)("div", { className: eb.n2 })],
        }),
    });
}
var e_ = n(552606);
let eA = u.memo(function (e) {
    let { game: t, onSelect: n } = e,
        l = u.useCallback(() => n(t), [t, n]),
        s = (0, ef.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, d.jsx)(eC, {
        name: t.name,
        coverUrl: s,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: l,
        onClickViewPlans: l,
    });
});
function eN(e) {
    let { games: t, title: n, onSelectGame: l, loading: s = !1 } = e;
    return (0, d.jsxs)("section", {
        className: e_.u,
        children: [
            null != n && (0, d.jsx)(em.D, { variant: "heading-lg/semibold", children: n }),
            (0, d.jsx)("div", {
                className: e_.V,
                children: s
                    ? Array.from({ length: 10 }, (e, t) => (0, d.jsx)(eS, {}, t))
                    : t.map((e) => (0, d.jsx)(eA, { game: e, onSelect: l }, e.id)),
            }),
        ],
    });
}
var eI = n(32880),
    eL = n(410232),
    eO = n(231483),
    ek = n(339350),
    eT = n(349288),
    ey = n(469318);
function eR() {
    let e = u.useMemo(
        () => [
            { Icon: eI.s, label: eo.intl.string(er.default.GJNQYz) },
            { Icon: eL.k, label: eo.intl.string(er.default.pTinR2) },
            { Icon: eO.l, label: eo.intl.string(er.default.s0N1nM) },
            { Icon: ek.Q, label: eo.intl.string(er.default.NzrGEi) },
        ],
        [],
    );
    return (0, d.jsxs)("section", {
        className: ey.ZK,
        children: [
            (0, d.jsxs)("div", {
                className: ey.jE,
                children: [
                    (0, d.jsx)(em.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: eo.intl.string(er.default.F5W36W),
                    }),
                    (0, d.jsxs)(et.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            eo.intl.string(er.default.xMpGuO),
                            " ",
                            (0, d.jsx)(eT.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: eo.intl.string(er.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, d.jsx)("div", {
                className: ey._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, d.jsxs)(
                        "div",
                        {
                            className: ey.Tc,
                            children: [
                                (0, d.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, d.jsx)(et.E, {
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
var eP = n(985209);
function eM() {
    return (0, d.jsxs)("div", {
        className: eP.vK,
        children: [
            (0, d.jsx)("div", {
                className: eP.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, d.jsx)("div", { className: eP.Ge, "aria-hidden": !0 }),
            (0, d.jsx)("div", { className: eP.f5, "aria-hidden": !0 }),
        ],
    });
}
var eB = n(408278),
    eD = n(548411),
    eH = n(554830),
    eF = n(281445),
    ew = n(390544),
    eG = n(554146),
    eU = n(866665),
    ez = n(939249),
    eV = n(880892);
let eK = { TERTIARY: eV.Xe, SECONDARY: eV.Rm, PRIMARY: eV.zB },
    eY = { SIZE_24: eV.q1, SIZE_32: eV.Hb, SIZE_36: eV.VM },
    eW = u.forwardRef(function (e, t) {
        let {
            className: n,
            tooltip: l,
            color: s,
            size: a = eY.SIZE_32,
            icon: i,
            onMouseDown: r,
            onClick: o,
            disabled: c,
            focusProps: u,
        } = e;
        return (0, d.jsx)(eU.m, {
            asContainer: !0,
            text: l,
            shouldShow: !c,
            children: (0, d.jsx)(ez.D, {
                innerRef: t,
                "aria-label": l,
                "aria-disabled": c,
                className: g()(n, eV.x6, s, a, { [eV.r9]: c }),
                onMouseDown: r,
                onClick: (e) => {
                    o(e);
                },
                focusProps: u,
                children: i,
            }),
        });
    });
var e$ = n(933832),
    eq = n(624479),
    eZ = n(509434),
    eX = n(131607),
    eQ = n(427209),
    eJ = n(95035),
    e0 = n(500897),
    e1 = n(858192),
    e2 = n(294454),
    e4 = n(922016),
    e3 = n(980707),
    e5 = n(477782),
    e9 = n(625903),
    e7 = n(365199),
    e8 = n(442433),
    e6 = n(928873);
function te(e) {
    let { server: t, onOpenSettings: n } = e,
        l = u.useRef(null),
        s = (0, e6.A)(t.instance),
        a = u.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, d.jsx)(e4.Y, {
        targetElementRef: l,
        align: "top",
        position: "left",
        animationPosition: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, d.jsx)(e3.W, {
                "data-menu-migrated": !0,
                navId: "game-server-owned-card-popout-context-menu",
                onClose: () => {
                    (0, e8.Z_)(), t();
                },
                "aria-label": eo.intl.string(er.default["yb+ork"]),
                onSelect: void 0,
                children: (0, d.jsx)(e5.rX, {
                    children: (0, d.jsx)(e5.Dr, {
                        id: "settings",
                        icon: e9.Z,
                        leadingAccessory: { type: "icon", icon: e9.Z },
                        label: eo.intl.string(er.default["feUiM/"]),
                        disabled: !s,
                        action: a,
                    }),
                }),
            });
        },
        children: (e) =>
            (0, d.jsx)(eW, {
                ref: l,
                color: eK.SECONDARY,
                size: eY.SIZE_24,
                icon: (0, d.jsx)(e7.j, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                onClick: (t) => e.onClick(t),
                tooltip: eo.intl.string(er.default["feUiM/"]),
            }),
    });
}
var tt = n(652215),
    tn = n(49999),
    tl = n(116735);
function ts(e) {
    return `game-server-owned-card-${e}`;
}
let ta = u.memo(function (e) {
    let { server: t, onJoin: l, onViewPanel: s, onOpenSettings: a, isHighlighted: i = !1, planNameByPlanId: r } = e,
        o = (0, ef.A)(t.gameId, "cover") ?? t.coverUrl,
        c = (function (e, t) {
            let n = (0, D.bG)([W.A], () => (null != e ? W.A.getSubscriptionById(e) : null));
            if (null == n) return null;
            if (n.status === tt.Dmq.CANCELED) {
                let e = n.currentPeriodEnd.toLocaleDateString(void 0, {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                });
                return { text: eo.intl.formatToPlainString(er.default["3aEgK6"], { date: e }), type: "cancellation" };
            }
            let { renewalMutations: l } = n;
            if (null != l) {
                let e = t.get(l.planId);
                if (null != e)
                    return {
                        text: eo.intl.formatToPlainString(er.default["6TgadG"], {
                            planName: e,
                            date: n.currentPeriodEnd,
                        }),
                        type: "downgrade",
                    };
            }
            return null;
        })(t.instance.subscriptionId, r),
        [m, h] = (0, eX.kn)([eG.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        x = m !== eG.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        E = eF.X.SHOCKBYTE,
        p = Y.default.getId() ?? "0",
        { handleCopyServerIp: v, animateCopyIcon: j } = (0, e0.A)(p, t.id, el.A.GAME_SERVER_PAGE, t.serverIp),
        C = u.useCallback(() => {
            (0, e1.A)({
                provider: E,
                onAccept: () => {
                    h(tn.i.TAKE_ACTION), v();
                },
            });
        }, [E, h, v]),
        b = u.useCallback(() => {
            x
                ? l(t)
                : (0, e1.A)({
                      provider: E,
                      onAccept: () => {
                          h(tn.i.TAKE_ACTION), l(t);
                      },
                  });
        }, [x, E, h, l, t]),
        S = u.useCallback(() => s(t), [s, t]),
        _ = u.useCallback(() => {
            ((e) => {
                let { server: t, source: l } = e;
                (0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("69977"),
                            n.e("1248"),
                            n.e("94149"),
                            n.e("14131"),
                            n.e("73883"),
                            n.e("73216"),
                            n.e("10605"),
                            n.e("81647"),
                            n.e("76602"),
                            n.e("40402"),
                            n.e("67861"),
                            n.e("1518"),
                            n.e("23354"),
                            n.e("67200"),
                            n.e("44780"),
                            n.e("36946"),
                            n.e("92639"),
                            n.e("90480"),
                            n.e("40963"),
                            n.e("56169"),
                            n.e("23601"),
                            n.e("92370"),
                        ]).then(n.bind(n, 223849));
                        return (n) => (0, d.jsx)(e, { ...n, server: t, source: l });
                    },
                    { stackingBehavior: "stack", modalKey: e2.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        A =
            t.instance.status === ew.M.ONLINE
                ? eo.intl.string(er.default["60kAzo"])
                : t.instance.status === ew.M.OFFLINE
                  ? eo.intl.string(er.default["Ys/RrB"])
                  : eo.intl.string(er.default.SgjaXI);
    return (0, d.jsxs)("div", {
        id: ts(t.id),
        className: g()(tl.Nr, { [tl.mr]: i }),
        children: [
            i && (0, d.jsx)("div", { className: tl._8, "aria-hidden": !0 }),
            (0, d.jsxs)("div", {
                className: tl.Nk,
                "aria-hidden": !0,
                children: [
                    null != o && (0, d.jsx)("img", { className: tl.QC, src: o, alt: "" }),
                    (0, d.jsx)("div", { className: tl.jc }),
                ],
            }),
            (0, d.jsxs)("div", {
                className: tl.AQ,
                children: [
                    (0, d.jsx)(eW, {
                        color: eK.SECONDARY,
                        size: eY.SIZE_24,
                        icon: (0, d.jsx)(eQ.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: _,
                        tooltip: eo.intl.string(eo.t.RDE0Sc),
                    }),
                    (0, d.jsx)(te, { server: t, onOpenSettings: a }),
                ],
            }),
            (0, d.jsxs)("div", {
                className: tl.rf,
                children: [
                    (0, d.jsxs)("div", {
                        className: tl.U1,
                        children: [
                            (0, d.jsxs)("div", {
                                className: tl.oL,
                                children: [
                                    null != o
                                        ? (0, d.jsx)("img", { className: tl.vT, src: o, alt: "" })
                                        : (0, d.jsx)("div", {
                                              className: tl.iv,
                                              children: (0, d.jsx)(et.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, d.jsx)("div", { className: tl.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, d.jsxs)("div", {
                                className: tl.VQ,
                                children: [
                                    (0, d.jsx)(et.E, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, d.jsx)(et.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != c &&
                                        (0, d.jsx)(et.E, {
                                            variant: "text-sm/medium",
                                            color: "cancellation" === c.type ? "text-feedback-critical" : "text-muted",
                                            tag: "div",
                                            children: c.text,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, d.jsxs)("div", {
                        className: tl.M1,
                        children: [
                            (0, d.jsxs)("div", {
                                className: tl.N8,
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: tl.bi,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default.bDdi7n),
                                            }),
                                            (0, d.jsx)(et.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, d.jsxs)("div", {
                                        className: tl.gv,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default["7phwMG"]),
                                            }),
                                            x
                                                ? (0, d.jsxs)("div", {
                                                      className: tl.Yb,
                                                      children: [
                                                          (0, d.jsx)(et.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, d.jsx)(ez.D, {
                                                                  className: tl.cL,
                                                                  onClick: v,
                                                                  "aria-label": eo.intl.string(eo.t.OpuAlK),
                                                                  children: j
                                                                      ? (0, d.jsx)(e$.A, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, d.jsx)(eq.T, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, d.jsx)(eJ.A, {
                                                      onClick: C,
                                                      children: eo.intl.string(er.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, d.jsxs)("div", {
                                className: tl.N8,
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: tl.bi,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default["n+ZX7y"]),
                                            }),
                                            (0, d.jsxs)("div", {
                                                className: tl.Yb,
                                                children: [
                                                    t.isOnline &&
                                                        (0, d.jsx)("span", { className: tl.kg, "aria-hidden": !0 }),
                                                    (0, d.jsx)(et.E, {
                                                        variant: "text-sm/medium",
                                                        color: t.isOnline ? "text-feedback-positive" : "text-muted",
                                                        tag: "span",
                                                        children: A,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, d.jsxs)("div", {
                                        className: tl.gv,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default.mJlz3T),
                                            }),
                                            (0, d.jsx)(et.E, {
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
                className: tl.qr,
                children: [
                    (0, d.jsx)(ez.D, {
                        className: g()(tl.wC, tl.QV),
                        onClick: b,
                        "aria-label": eo.intl.string(er.default["fQCcM/"]),
                        children: (0, d.jsx)(et.E, {
                            variant: "text-sm/semibold",
                            color: "none",
                            children: eo.intl.string(er.default["fQCcM/"]),
                        }),
                    }),
                    (0, d.jsxs)(ez.D, {
                        className: g()(tl.wC, tl.y2),
                        onClick: S,
                        "aria-label": eo.intl.string(er.default.tkbVdf),
                        children: [
                            (0, d.jsx)(et.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                children: eo.intl.string(er.default.tkbVdf),
                            }),
                            (0, d.jsx)(eZ.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                        ],
                    }),
                ],
            }),
        ],
    });
});
var ti = n(448577);
function tr(e) {
    let {
            servers: t,
            onViewAll: n,
            onJoin: l,
            onViewPanel: s,
            onOpenSettings: a,
            highlightServerId: i = null,
            highlightNonce: r = 0,
            planNameByPlanId: o,
        } = e,
        c = u.useRef(null),
        m = u.useRef(null),
        [h, x] = u.useState(!1),
        [f, E] = u.useState(!1),
        [p, v] = u.useState(null),
        j = u.useCallback(() => {
            let e = c.current;
            null != e && (x(e.scrollLeft > 1), E(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    u.useLayoutEffect(() => {
        j();
    }, [j, t]),
        u.useEffect(() => {
            let e = c.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                j();
            });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }, [j]);
    let C = u.useCallback(() => {
            c.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        b = u.useCallback(() => {
            c.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        u.useEffect(() => {
            if (r <= 0) return;
            let e = null != i ? document.getElementById(ts(i)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    v(null), (t = requestAnimationFrame(() => v(i)));
                });
            return () => {
                cancelAnimationFrame(n), cancelAnimationFrame(t);
            };
        }, [r, i]),
        u.useEffect(() => {
            if (null == p) return;
            let e = setTimeout(() => v(null), 4e3);
            return () => clearTimeout(e);
        }, [p]),
        (0, d.jsxs)("section", {
            className: ti.uW,
            ref: m,
            children: [
                (0, d.jsxs)("div", {
                    className: ti.wx,
                    children: [
                        (0, d.jsx)(em.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: eo.intl.string(er.default.BOWmmT),
                        }),
                        (0, d.jsx)(J.N, {
                            theme: ei.NJ.DARKER,
                            children: (e) =>
                                (0, d.jsxs)("div", {
                                    className: g()(ti.$s, e),
                                    children: [
                                        (0, d.jsx)(en.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: eo.intl.string(eo.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, d.jsxs)("div", {
                                            className: ti.d$,
                                            children: [
                                                (0, d.jsx)(eB.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eD.Z,
                                                    disabled: !h,
                                                    onClick: C,
                                                    "aria-label": eo.intl.string(eo.t["13/7kX"]),
                                                }),
                                                (0, d.jsx)(eB.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eH.K,
                                                    disabled: !f,
                                                    onClick: b,
                                                    "aria-label": eo.intl.string(eo.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, d.jsx)("div", {
                    className: g()(ti.XG, { [ti.OW]: h && f, [ti.vL]: h && !f, [ti.y0]: f && !h }),
                    ref: c,
                    onScroll: j,
                    children: t.map((e) =>
                        (0, d.jsx)(
                            "div",
                            {
                                className: ti.AV,
                                children: (0, d.jsx)(ta, {
                                    server: e,
                                    onJoin: l,
                                    onViewPanel: s,
                                    onOpenSettings: a,
                                    isHighlighted: p === e.id,
                                    planNameByPlanId: o,
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
var to = n(174459),
    tc = n(758836),
    td = (((s = {}).SHOP_CARD = "GAME_SERVER_SHOP_CARD"), s),
    tu = (((a = {}).OPEN_PLAN_MODAL = "open_game_server_plan_modal"), a),
    tm = n(135987),
    tg = n(802743),
    th = n(780907),
    tx = n(350172),
    tf = n(730202),
    tE = n(580630);
function tp(e, t) {
    let n = e.prices[t]?.countryPrices?.prices?.[0];
    return null != n ? { amount: n.amount, currency: n.currency } : void 0;
}
function tv(e) {
    return eo.intl.formatToPlainString(eo.t.AbOLNu, { price: (0, tE.$g)(e.amount, e.currency) });
}
function tj(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) n[l - 1] = arguments[l];
    let s = e.find((e) => n.some((t) => e.description.toLowerCase().includes(t)));
    return s?.title;
}
let tC = n(568065).Wb,
    tb = [tt.Puh.SUBSCRIPTION, tt.Puh.SUBSCRIPTION_GROUP];
var tS = n(464864),
    t_ = n(980709);
function tA() {
    return (0, d.jsx)(z.A, { children: (0, d.jsx)(tN, {}) });
}
function tN() {
    let e,
        { servers: t, refetch: n } = (0, tS.f)(),
        l = t.length > 0,
        s = (0, D.bG)([N.default], () => q.Ay.canUseShopDiscounts(N.default.getCurrentUser())),
        {
            games: a,
            hasError: i,
            isEmpty: r,
            isLoading: o,
            refetch: c,
        } = (function () {
            let [e, t] = u.useState(0);
            u.useEffect(() => {
                (0, tx.d)({ applicationId: tC, skuTypes: tb, includePricing: !0 }), th.Ay.getDetectableGames();
            }, [e]);
            let n = (0, D.bG)([tf.A], () => tf.A.getCollectionsForApplication(tC)),
                l = (0, D.bG)([tf.A], () => tf.A.getFetchStateForApplication(tC)),
                s = u.useMemo(
                    () =>
                        null != n
                            ? (function (e) {
                                  let t = [];
                                  for (let n of e)
                                      for (let e of n.products) {
                                          let { fromPriceLabel: n, nitroFromPriceLabel: l } = (function (e) {
                                              let t, n;
                                              for (let l of e.skus) {
                                                  if (l.type !== tt.Puh.SUBSCRIPTION) continue;
                                                  let e = tp(l, tt.lid.DEFAULT);
                                                  null != e &&
                                                      (null == t || e.amount < t.amount) &&
                                                      ((t = e), (n = tp(l, tt.lid.PREMIUM_TIER_2)));
                                              }
                                              return null == t
                                                  ? {}
                                                  : {
                                                        fromPriceLabel: `${(0, tE.$g)(t.amount, t.currency)}+`,
                                                        nitroFromPriceLabel:
                                                            null != n ? `${(0, tE.$g)(n.amount, n.currency)}+` : void 0,
                                                    };
                                          })(e);
                                          null != n &&
                                              t.push({
                                                  id: e.id,
                                                  name: e.name,
                                                  gameId: e.gameApplicationId,
                                                  fromPriceLabel: n,
                                                  nitroFromPriceLabel: l,
                                                  plans: (function (e) {
                                                      let t = [];
                                                      for (let n of e.skus) {
                                                          if (n.type !== tt.Puh.SUBSCRIPTION) continue;
                                                          let e = tp(n, tt.lid.DEFAULT);
                                                          if (null == e) continue;
                                                          let l = tp(n, tt.lid.PREMIUM_TIER_2),
                                                              s = n.tenantMetadata?.gameServerPlanFeatures ?? [],
                                                              a = (function (e) {
                                                                  if (null == e) return { value: "", unit: "" };
                                                                  let t = e.trim().match(/^([\d.]+)\s*(.*)$/);
                                                                  return null != t
                                                                      ? { value: t[1], unit: t[2] }
                                                                      : { value: e, unit: "" };
                                                              })(tj(s, "ram", "memory"));
                                                          t.push({
                                                              id: n.id,
                                                              name: n.name,
                                                              standardPriceLabel: tv(e),
                                                              nitroPriceLabel: null != l ? tv(l) : void 0,
                                                              standardPriceAmount: e.amount,
                                                              nitroPriceAmount: l?.amount,
                                                              priceCurrency: e.currency,
                                                              playersLabel: tj(s, "player") ?? "",
                                                              ramValueLabel: a.value,
                                                              ramUnitLabel: a.unit,
                                                              vcpusLabel: tj(s, "vcpu", "cpu") ?? "",
                                                          });
                                                      }
                                                      return t;
                                                  })(e),
                                              });
                                      }
                                  return t;
                              })(n)
                            : [],
                    [n],
                ),
                a = u.useCallback(() => t((e) => e + 1), []);
            return {
                games: s,
                isLoading: "loading" === l,
                hasError: "error" === l,
                isEmpty: "success" === l && 0 === s.length,
                refetch: a,
            };
        })();
    u.useEffect(() => {
        l && (0, U.hP)().catch(() => {});
    }, [l]);
    let m = u.useMemo(() => {
            let e = new Map();
            for (let t of a) for (let n of t.plans ?? []) e.set(n.id, n.name);
            return e;
        }, [a]),
        g = u.useRef(a);
    u.useEffect(() => {
        a.length > 0 && (g.current = a);
    }, [a]);
    let h = u.useCallback(() => {
            c(), n();
        }, [c, n]),
        x =
            ((e = (0, I.uM)()),
            u.useCallback(
                (t, n) => {
                    to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: e?.sessionId,
                        page_type: tc.G2.GAME_SERVERS,
                        page_category: e?.pageCategory,
                        page_section: e?.pageSection,
                        tile_type: n,
                        cta_name: t,
                    });
                },
                [e?.sessionId, e?.pageCategory, e?.pageSection],
            )),
        [f, E] = u.useState({ serverId: null, nonce: 0 }),
        p = u.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = X.A.getGameServers();
                for (let l = n.length - 1; l >= 0; l--)
                    if (n[l].game_id === e.gameId) {
                        t = n[l].id;
                        break;
                    }
            }
            E((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        v = u.useCallback(() => {
            let e = t[0];
            null != e && p({ serverId: e.id });
        }, [t, p]),
        j = (0, tg.O)((e) => e.highlightFirstCardNonce),
        C = u.useRef(j);
    u.useEffect(() => {
        if (j === C.current) return;
        C.current = j;
        let e = requestAnimationFrame(() => v());
        return () => cancelAnimationFrame(e);
    }, [j, v]);
    let b = u.useCallback(
            (e) => {
                x(tu.OPEN_PLAN_MODAL, td.SHOP_CARD),
                    (0, tm.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => p({ gameId: e.gameId }),
                    });
            },
            [x, p],
        ),
        S = u.useCallback(() => {
            Z.A.setState({ scrollToGameServers: !0 }), (0, K.openUserSettings)(V.X.SUBSCRIPTIONS_PANEL);
        }, []),
        _ = u.useCallback((e) => {
            let t = Y.default.getId() ?? "0";
            (0, Q.A)(t, e.instance);
        }, []),
        A = u.useCallback((e) => {
            (0, $.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        L = u.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = g.current.find((t) => t.gameId === e.gameId);
                function l(t) {
                    (0, tm.S)({
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
                let s = W.A.getSubscriptionById(t);
                null != s
                    ? l(s)
                    : (0, U.hP)()
                          .then(() => {
                              let e = W.A.getSubscriptionById(t);
                              null != e && l(e);
                          })
                          .catch(() => {});
            },
            [p],
        ),
        O = l ? eo.intl.string(er.default["+aRmAc"]) : void 0;
    return (0, d.jsx)(G.Ch, {
        className: t_.XG,
        children: (0, d.jsxs)("div", {
            className: t_.kL,
            children: [
                !s && (0, d.jsx)(ed, {}),
                (0, d.jsx)(eM, {}),
                (0, d.jsxs)("div", {
                    className: t_.Qs,
                    children: [
                        (0, d.jsx)(eR, {}),
                        l &&
                            (0, d.jsx)(tr, {
                                servers: t,
                                onViewAll: S,
                                onJoin: _,
                                onViewPanel: A,
                                onOpenSettings: L,
                                highlightServerId: f.serverId,
                                highlightNonce: f.nonce,
                                planNameByPlanId: m,
                            }),
                        i || r
                            ? (0, d.jsx)(ex, { onRetry: h })
                            : (0, d.jsx)(eN, { games: a, title: O, onSelectGame: b, loading: o }),
                    ],
                }),
            ],
        }),
    });
}
var tI = n(38405),
    tL = n(4227),
    tO = n(50920),
    tk = n(856686),
    tT = n(364522),
    ty = n(783977),
    tR = n(59520);
function tP(e, t, n, l) {
    let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = l;
    if (i > 0) {
        let l = (s + a) / i;
        l > 0 &&
            to.default.track(e, {
                scroll_visible_percent: l,
                source: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function tM(e, t) {
    let { analyticsSource: n } = (0, T.lC)(t),
        l = (0, tR.I)(tP, 5e3, [], { trailing: !0 }),
        s = (0, I.uM)(),
        a = s?.sessionId;
    return {
        handleScroll: u.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    l(tt.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [l, n, a, e]),
    };
}
var tB = n(354328),
    tD = n(356118),
    tH = n(619835),
    tF = n(641150);
function tw() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: l } = (0, P.v)((e) => e),
        { totalCount: s, isFetchingResults: a } = (0, tk.S)(),
        i = (0, P.v)((e) => e.hasFilters()),
        r = u.useCallback(() => {
            if (!i) return "";
            if (a) return eo.intl.string(eo.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return eo.intl.format(eo.t.KJMJOz, { count: s, search: e });
            }
            if (!n && !l && 1 === e.size) {
                if (e.has(tF.q.AVATAR_DECORATION)) return eo.intl.format(eo.t.s1UzGQ, { count: s });
                if (e.has(tF.q.NAMEPLATE)) return eo.intl.format(eo.t.ZWGN9T, { count: s });
                if (e.has(tF.q.PROFILE_EFFECT)) return eo.intl.format(eo.t["v/7apu"], { count: s });
                if (e.has(tF.q.PROFILE_FRAME)) return eo.intl.format(eo.t.eu4eRy, { count: s });
                if (e.has(tF.q.BUNDLE)) return eo.intl.format(eo.t.fZ1rdk, { count: s });
            }
            return 0 === e.size && n && !l
                ? eo.intl.format(eo.t.TxoTTj, { count: s })
                : 0 === e.size && l && !n
                  ? eo.intl.format(eo.t.TLso50, { count: s })
                  : eo.intl.format(eo.t["/rPvmQ"], { count: s });
        }, [e, s, i, t, a, n, l]);
    return (0, d.jsx)(em.D, { variant: "heading-lg/semibold", children: r() });
}
var tG = n(172218),
    tU = n(932793),
    tz = n(511265),
    tV = n(206077),
    tK = n(100057),
    tY = n(828515),
    tW = n(484469),
    t$ = n(346448),
    tq = n(195261),
    tZ = n(132866);
let tX = function () {
    return (0, d.jsx)("div", {
        className: tZ.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, d.jsxs)(
                "div",
                {
                    className: tq.vY,
                    children: [
                        (0, d.jsx)("div", { className: g()(t$.sW, tZ.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, d.jsx)(tW.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tQ = n(828614),
    tJ = n(159439),
    t0 = n(998694);
let t1 = null;
function t2(e) {
    let { category: t } = e,
        n = (0, x.bG)([N.default], () => N.default.getCurrentUser()),
        l = (0, tV.X)(t.products),
        s = (0, tz.p)()(l);
    return null == n || 0 === s.length
        ? null
        : (0, d.jsx)("div", {
              className: tq.vY,
              children: s.map((e, t) =>
                  (0, d.jsx)(
                      I.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, d.jsx)(tQ.A, { skuId: e.skuId, skipLimitedTimeCheck: !0 }, e.skuId),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function t4(e) {
    let { category: t } = e,
        [n, l] = u.useState(!1),
        s = (0, tG.K)(function (e) {
            l(e);
        }, 0.15),
        a = (0, M.W6)(),
        i = (0, tO.a)("CollectiblesCatalogContent"),
        r = (0, I.uM)(),
        o = u.useCallback(() => {
            to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: tc.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (t1 = t.skuId),
                a.push(tt.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, a]);
    return (0, d.jsxs)("div", {
        className: tq.EF,
        ref: s,
        children: [(0, d.jsx)(tY.A, { category: t, onSelect: i ? o : void 0 }), (0, d.jsx)(t2, { category: t })],
    });
}
function t3(e) {
    let { categories: t, setCategoryRef: n, currentPage: l, handlePageChange: s, initialCategoryId: a } = e,
        i = (0, I.uM)(),
        r = (0, tJ.U)(),
        o = i?.sessionId ?? "",
        { noCache: c, includeUnpublished: m } = (0, t0.A)(),
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
        if (null == a || 0 === g.length) {
            h.current = void 0;
            return;
        }
        if (a === h.current) return;
        let e = g.findIndex((e) => e.skuId === a);
        if (-1 === e) return;
        let t = Math.floor(e / tc.l5) + 1;
        t !== l && s(t), (h.current = a);
    }, [a, g, s, l]);
    let x = u.useMemo(() => {
        let e = (l - 1) * tc.l5;
        return g.slice(e, e + tc.l5);
    }, [g, l]);
    return (u.useEffect(() => {
        (0, tK.z)({
            sessionId: o,
            checkpoint: tK.t.SHOP_MOUNTED,
            tab: tc.G2.CATALOG,
            unpublishedCategoriesShown: m,
            cacheDisabled: c,
        });
    }, []),
    u.useEffect(() => {
        r ||
            0 === x.length ||
            (0, tK.z)({
                sessionId: o,
                checkpoint: tK.t.SHOP_RENDERED,
                tab: tc.G2.CATALOG,
                unpublishedCategoriesShown: m,
                cacheDisabled: c,
            });
    }, [o, m, c, r, x.length]),
    r)
        ? (0, d.jsx)(tX, {})
        : (0, d.jsxs)("div", {
              className: tq.LZ,
              children: [
                  x.map((e, t) =>
                      (0, d.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": eo.intl.formatToPlainString(eo.t.FNtLb3, { category: e.name }),
                              children: (0, d.jsx)(I.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, d.jsx)(t4, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, d.jsx)("div", {
                      className: tq.Ej,
                      children: (0, d.jsx)(tU.m, {
                          currentPage: l,
                          totalCount: g.length,
                          pageSize: tc.l5,
                          onPageChange: s,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var t5 = n(177366),
    t9 = n(401864),
    t7 = n(124987),
    t8 = n(691885),
    t6 = n(146919),
    ne = n(858733);
let nt = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, P.v)(),
        l = (0, I.uM)(),
        s = (0, t6.yB)("CollectiblesSortSelect"),
        a = n(),
        i = u.useMemo(() => tc.QB.filter((e) => e.sortType !== t7.$.RELEVANCE || a), [a]),
        r = u.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === t7.$.RECENCY
                ? { label: eo.intl.string(eo.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === t7.$.PRICE
                  ? n === t9.A.ASC
                      ? { label: eo.intl.string(eo.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: eo.intl.string(eo.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === t7.$.RELEVANCE
                    ? { label: eo.intl.string(eo.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: eo.intl.string(eo.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = u.useCallback(
            (e) =>
                ({
                    recent: { sortType: t7.$.RECENCY, sortDirection: t9.A.DESC },
                    "price-asc": { sortType: t7.$.PRICE, sortDirection: t9.A.ASC },
                    "price-desc": { sortType: t7.$.PRICE, sortDirection: t9.A.DESC },
                    popularity: { sortType: t7.$.POPULARITY, sortDirection: t9.A.DESC },
                    relevance: { sortType: t7.$.RELEVANCE, sortDirection: t9.A.DESC },
                })[e],
            [],
        ),
        c = u.useCallback(
            (e) => {
                let n = r(o(e));
                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_section: l?.pageSection,
                    page_category: l?.pageCategory,
                    page_index: l?.pageIndex,
                    page_size: l?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(o(e));
            },
            [l, r, o, t],
        ),
        m = r(e);
    return (0, d.jsx)("div", {
        className: g()(ne.k, { [t6.jP]: s }),
        children: (0, d.jsx)(t8.l, {
            label: eo.intl.string(eo.t.uaX705),
            hideLabel: !0,
            options: i.map(r),
            onSelectionChange: c,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var nn =
        (((i = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (i.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (i.PINK = "COLLECTIBLES_COLOR_PINK"),
        (i.RED = "COLLECTIBLES_COLOR_RED"),
        (i.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (i.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (i.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (i.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (i.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (i.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        i),
    nl =
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
    ns = n(150934),
    na = n(508770),
    ni = n(278416),
    nr = n(602853),
    no = n(661531),
    nc = n(947641),
    nd = n(604338),
    nu = n(785866),
    nm = n(373846),
    ng = n(308323),
    nh = n(608599),
    nx = n(685761),
    nf = n(157225),
    nE = n(413249),
    np = n(510241),
    nv = n(601198),
    nj = n(223311),
    nC = n(7250),
    nb = n(623655),
    nS = n(13875),
    n_ = n(967339);
function nA() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: l,
            onToggleOfferEligible: s,
            offerEligible: a,
            reset: i,
            hasFilters: r,
        } = (0, P.v)(),
        o = (0, nb.z)("FilterBar"),
        c = r(),
        m = (0, nS.sk)("FilterBar"),
        h = (0, I.uM)(),
        x = u.useRef(null),
        f = (0, nj.A)(tt.FYj),
        E = u.useMemo(() => tc._6.filter((e) => m || e !== tF.q.PROFILE_FRAME), [m]),
        p = u.useCallback(
            (e) => {
                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            p(`filter 3p only ${!1 === l ? "on" : "off"}`), n();
        }, [n, l, p]);
    return (0, d.jsxs)("div", {
        className: n_.kT,
        children: [
            (0, d.jsxs)("div", {
                className: g()(n_.KZ, n_.YG),
                children: [
                    (0, d.jsx)("div", {
                        ref: x,
                        tabIndex: -1,
                        children: (0, d.jsx)(et.E, {
                            variant: "text-md/semibold",
                            className: n_.hr,
                            children: eo.intl.string(eo.t.Qk6r1a),
                        }),
                    }),
                    null != f &&
                        (0, d.jsxs)("div", {
                            className: n_.Ym,
                            children: [
                                (0, d.jsx)(ns.S, {
                                    checked: a,
                                    onChange: () => {
                                        p(`filter offer eligible ${!1 === a ? "on" : "off"}`), s();
                                    },
                                    label: eo.intl.string(eo.t.hY8Ft1),
                                }),
                                (0, d.jsx)(na.E, { type: { text: eo.intl.string(eo.t["nb5PC/"]) }, icon: ni.g }),
                            ],
                        }),
                    E.map((e) => (0, d.jsx)(nN, { filter: e, trackFilterAction: p }, e)),
                    (0, d.jsx)(ns.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: eo.intl.string(eo.t.AHHHgG),
                    }),
                    o && (0, d.jsx)(ns.S, { checked: l, onChange: v, label: eo.intl.string(eo.t["+W8gb+"]) }),
                ],
            }),
            (0, d.jsx)(nI, { trackFilterAction: p }),
            (0, d.jsx)(nk, { trackFilterAction: p }),
            c &&
                (0, d.jsx)(en.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), i(), requestAnimationFrame(() => x.current?.focus());
                    },
                    text: eo.intl.string(eo.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function nN(e) {
    let { filter: t, trackFilterAction: n } = e,
        l = {
            [tF.q.AVATAR_DECORATION]: eo.intl.string(eo.t.dRZYNE),
            [tF.q.PROFILE_EFFECT]: eo.intl.string(eo.t["1cNjtx"]),
            [tF.q.NAMEPLATE]: eo.intl.string(eo.t.V68Fqz),
            [tF.q.PROFILE_FRAME]: eo.intl.string(eo.t.ecTJkR),
            [tF.q.BUNDLE]: eo.intl.string(eo.t.FYFpps),
        },
        { itemTypeFilters: s, onToggleItemType: a } = (0, P.v)(),
        i = (0, d.jsx)(ns.S, {
            checked: s.has(t),
            onChange: () => {
                let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === s.has(t) ? "on" : "off"}`), a(t);
            },
            label: l[t] ?? "",
        });
    return t === tF.q.PROFILE_FRAME
        ? (0, d.jsxs)("div", { className: n_.Ym, children: [i, (0, d.jsx)(na.E, { type: "new" })] })
        : i;
}
function nI(e) {
    let { trackFilterAction: t } = e,
        n = u.useMemo(
            () => [
                { color: "#9B59B6", label: eo.intl.string(eo.t.kqUD4P), enum: nn.PURPLE },
                { color: "#3498DB", label: eo.intl.string(eo.t.qQTRae), enum: nn.BLUE },
                { color: "#2ECC71", label: eo.intl.string(eo.t["f/Ylk6"]), enum: nn.GREEN },
                { color: "#A0522D", label: eo.intl.string(eo.t["Sd/BMa"]), enum: nn.BROWN },
                { color: "#F1C40F", label: eo.intl.string(eo.t["0fevYz"]), enum: nn.YELLOW },
            ],
            [],
        ),
        l = u.useMemo(
            () => [
                { color: "#E67E22", label: eo.intl.string(eo.t.ZE7weD), enum: nn.ORANGE },
                { color: "#E74C3C", label: eo.intl.string(eo.t.hKJGOM), enum: nn.RED },
                { color: "#EC407A", label: eo.intl.string(eo.t.HvLEGM), enum: nn.PINK },
                { color: "#FFFFFF", label: eo.intl.string(eo.t["CB+lNO"]), enum: nn.WHITE },
                { color: "#262626", label: eo.intl.string(eo.t["dMey+v"]), enum: nn.BLACK },
            ],
            [],
        );
    return (0, d.jsxs)("div", {
        className: n_.KZ,
        children: [
            (0, d.jsx)(et.E, { variant: "text-md/semibold", className: n_.hr, children: eo.intl.string(eo.t.K1xGoG) }),
            (0, d.jsx)(nL, { colors: n, trackFilterAction: t }),
            (0, d.jsx)(nL, { colors: l, trackFilterAction: t }),
        ],
    });
}
function nL(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: l, onToggleColor: s } = (0, P.v)();
    return (0, d.jsx)("div", {
        className: n_.OW,
        children: t.map((e) => {
            let { color: t, label: a, enum: i } = e;
            return (0, d.jsx)(
                nO,
                { color: t, label: a, enum: i, isToggled: l.has(i), onToggleColor: s, trackFilterAction: n },
                i,
            );
        }),
    });
}
function nO(e) {
    let { color: t, label: n, enum: l, isToggled: s, onToggleColor: a, trackFilterAction: i } = e,
        r = (0, nr.r)(no.A.unsafe_rawColors.WHITE).hex(),
        o = (0, nr.r)(no.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, d.jsx)(
        eU.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, d.jsx)(
                ez.D,
                {
                    className: g()(n_.n1, { [n_.lx]: s }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": s,
                    onClick: () => {
                        i(`filter color ${n.toLowerCase()} ${!s ? "on" : "off"}`), a(l);
                    },
                    children:
                        s &&
                        (0, d.jsx)("div", {
                            className: n_.oE,
                            children: (0, d.jsx)(nc.r, {
                                size: "xs",
                                color: (0, nC.j)({ backgroundColor: t, colors: [r, o] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function nk(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, P.v)(),
        s = (0, eg.Ay)() === ei.NJ.DARK,
        a = u.useCallback(
            (e) => {
                if (n.has(e) || s) return "control-primary-text-default";
            },
            [n, s],
        ),
        i = u.useCallback((e) => (n.has(e) || s ? no.A.colors.WHITE : no.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, s]),
        r = u.useMemo(
            () => [
                {
                    name: eo.intl.string(eo.t.aVBOKh),
                    icon: (0, d.jsx)(nd.E, { size: "xs", color: i(nl.ANIME) }),
                    enum: nl.ANIME,
                },
                {
                    name: eo.intl.string(eo.t["3WoZBc"]),
                    icon: (0, d.jsx)(nu._, { size: "xs", color: i(nl.GAMING) }),
                    enum: nl.GAMING,
                },
                {
                    name: eo.intl.string(eo.t.yuEmLj),
                    icon: (0, d.jsx)(nm.C, { size: "xs", color: i(nl.CUTE_COZY) }),
                    enum: nl.CUTE_COZY,
                },
                {
                    name: eo.intl.string(eo.t.mMvCHo),
                    icon: (0, d.jsx)(ng.L, { size: "xs", color: i(nl.SCI_FI) }),
                    enum: nl.SCI_FI,
                },
                {
                    name: eo.intl.string(eo.t.TlhOQC),
                    icon: (0, d.jsx)(nh.L, { size: "xs", color: i(nl.FOOD_DRINKS) }),
                    enum: nl.FOOD_DRINKS,
                },
                {
                    name: eo.intl.string(eo.t["4IaUIM"]),
                    icon: (0, d.jsx)(nx.f, { size: "xs", color: i(nl.FANTASY) }),
                    enum: nl.FANTASY,
                },
                {
                    name: eo.intl.string(eo.t["w0nSG/"]),
                    icon: (0, d.jsx)(nf.N, { size: "xs", color: i(nl.ANIMALS_PETS) }),
                    enum: nl.ANIMALS_PETS,
                },
                {
                    name: eo.intl.string(eo.t.cJng7v),
                    icon: (0, d.jsx)(nE.p, { size: "xs", color: i(nl.NATURE) }),
                    enum: nl.NATURE,
                },
                {
                    name: eo.intl.string(eo.t["5mUvyM"]),
                    icon: (0, d.jsx)(np.T, { size: "xs", color: i(nl.MOVIES_TV_SHOWS) }),
                    enum: nl.MOVIES_TV_SHOWS,
                },
                {
                    name: eo.intl.string(eo.t.MB9H5Z),
                    icon: (0, d.jsx)(nv.e, { size: "xs", color: i(nl.DARK_MOODY) }),
                    enum: nl.DARK_MOODY,
                },
            ],
            [i],
        );
    return (0, d.jsxs)("div", {
        className: n_.KZ,
        children: [
            (0, d.jsx)(et.E, { variant: "text-md/semibold", className: n_.hr, children: eo.intl.string(eo.t.t1Ztrp) }),
            (0, d.jsx)("div", {
                className: n_.Ot,
                children: r.map((e) => {
                    let { name: s, icon: i, enum: r } = e;
                    return (0, d.jsxs)(
                        ez.D,
                        {
                            className: g()(n_.w4, { [n_.C7]: n.has(r) }),
                            "aria-label": s,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${s.toLowerCase()} ${!e ? "on" : "off"}`), l(r);
                            },
                            children: [i, (0, d.jsx)(et.E, { color: a(r), variant: "text-md/medium", children: s })],
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
var nT = n(561769),
    ny = n(882443);
function nR() {
    return (0, d.jsxs)("div", {
        className: ny.k,
        children: [
            (0, d.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: eo.intl.string(eo.t.oezC3x),
                className: ny._,
            }),
            (0, d.jsx)(em.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t.oezC3x) }),
            (0, d.jsx)(et.E, { variant: "text-md/medium", children: eo.intl.string(eo.t["Tc/Ndl"]) }),
        ],
    });
}
var nP = n(996824);
let nM = { flattenProductVariants: !0 };
function nB(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: l } = e,
        s = (0, I.uM)(),
        a = s?.sessionId ?? "",
        { noCache: i, includeUnpublished: r } = (0, t0.A)(),
        o = (0, x.bG)([N.default], () => N.default.getCurrentUser()),
        { skus: c, currentPage: m, totalCount: h, isFetchingResults: f } = (0, tk.S)(),
        E = (0, x.yK)([L.A], () => L.A.getProductsBySkus(c)),
        p = u.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        v = c?.join("");
    u.useEffect(() => {
        p();
    }, [v, p]);
    let j = (0, tz.p)(),
        C = u.useMemo(() => j(E), [j, E]);
    u.useEffect(() => {
        t ||
            (0, tK.z)({
                sessionId: a,
                checkpoint: tK.t.SHOP_RENDERED,
                tab: l,
                unpublishedCategoriesShown: r,
                cacheDisabled: i,
            });
    }, [a, r, i, t, l]);
    let b = u.useRef(null),
        { setQueryPageSize: S, setQueryPageOffset: _, queryPageSize: A } = (0, P.v)(),
        [O, k] = u.useState(!1),
        T = t || f || null == o;
    u.useEffect(() => {
        T ? k(!1) : C.length > 0 && k(!0);
    }, [T, C.length]);
    let y = A > 0 && !T && 0 === C.length;
    u.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == b.current || S(Math.floor(5 * getComputedStyle(b.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != b.current) return e.observe(b.current), () => e.disconnect();
    }, [S]);
    let R = u.useCallback(
        (e) => {
            to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: s?.sessionId,
                page_section: s?.pageSection,
                page_category: s?.pageCategory,
                page_index: e,
                page_size: A,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                _((e - 1) * A);
        },
        [s, A, _],
    );
    return (0, d.jsxs)(nT.v3.Provider, {
        value: nM,
        children: [
            (0, d.jsxs)("div", {
                className: g()({ [nP.oE]: y }),
                children: [
                    y && (0, d.jsx)(nR, {}),
                    (0, d.jsxs)("div", {
                        className: g()(nP.ZE, { [nP.Kp]: O }),
                        ref: b,
                        children: [
                            T && [...Array(A)].map((e, t) => (0, d.jsx)(tW.A, {}, t)),
                            !T &&
                                C.map((e, t) =>
                                    null == L.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, d.jsx)(
                                              I.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, d.jsx)(
                                                      tQ.A,
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
            h > A &&
                (0, d.jsx)("div", {
                    className: nP.Ej,
                    children: (0, d.jsx)("div", {
                        children: (0, d.jsx)(tU.m, {
                            currentPage: m,
                            totalCount: h,
                            pageSize: A,
                            onPageChange: R,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nD = n(328539);
function nH(e) {
    let { tab: t, categories: n, initialCategoryId: l, showFilterInitially: s = !0, onUnmount: a } = e,
        i = (0, tB.A)("shop_include_unpublished");
    (0, P.S)(i);
    let r = u.useRef(null),
        { handleScroll: o } = tM(r, t),
        c = (0, F.U)("Shop Browse"),
        { setCategoryRef: m, handleScrollToCategory: g } = (0, t5.k0)(r.current),
        [h, x] = u.useState(s),
        [f, E] = u.useState(!1);
    return (
        u.useEffect(() => {
            null != l && g(l);
        }, [l, g]),
        u.useEffect(
            () => () => {
                null != a && a();
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
            className: nD.VM,
            children: (0, d.jsxs)("main", {
                className: nD.MY,
                children: [
                    (0, d.jsx)(G.Gt, {
                        className: nD.OW,
                        ref: r,
                        onScroll: o,
                        children: c
                            ? (0, d.jsx)("div", {
                                  className: nD.en,
                                  children: (0, d.jsx)("div", {
                                      className: nD.pf,
                                      children: (0, d.jsx)(tD.Z_, { tenantId: tt.FYj, templateId: tH.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, d.jsx)(nF, {
                                  isSmallScreen: f,
                                  filterBarOpen: h,
                                  setFilterBarOpen: x,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: m,
                                  initialCategoryId: l,
                              }),
                    }),
                    h && !f && (0, d.jsx)("div", { className: nD.yF }),
                    h && !f && (0, d.jsx)(tT.Ip, { className: nD.kT, children: (0, d.jsx)(nA, {}) }),
                ],
            }),
        })
    );
}
function nF(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: l,
            tab: s,
            scrollerRef: a,
            categories: i,
            setCategoryRef: r,
            initialCategoryId: o,
        } = e,
        c = u.useRef(null),
        m = (0, P.v)((e) => e.hasDefaultFilters()),
        h = (0, I.uM)(),
        { handlePageChange: x, currentPage: f } = (function (e) {
            let [t, n] = u.useState(1);
            return {
                currentPage: t,
                handlePageChange: u.useCallback(
                    (t) => {
                        n(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, n],
                ),
            };
        })(a),
        E = u.useCallback(
            (e) => {
                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            if (t && n)
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
            function e(e) {
                let t = e.target;
                null === c.current ||
                    null === p.current ||
                    c.current.contains(t) ||
                    p.current.contains(t) ||
                    (to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    l(!1));
            }
        }, [t, n, l, h]),
        (0, d.jsx)("div", {
            className: nD.en,
            children: (0, d.jsxs)("div", {
                className: nD.pf,
                children: [
                    (0, d.jsxs)("div", {
                        className: nD.ne,
                        children: [
                            (0, d.jsx)("div", { className: nD.lQ, children: (0, d.jsx)(tw, {}) }),
                            (0, d.jsxs)("div", {
                                className: g()(nD.wR, { [nD.Im]: t }),
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: nD.Ul,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-md/semibold",
                                                children: eo.intl.string(eo.t.uaX705),
                                            }),
                                            (0, d.jsx)(nt, {}),
                                        ],
                                    }),
                                    (0, d.jsx)("div", {
                                        ref: p,
                                        children: (0, d.jsx)(en.$, {
                                            onClick: function () {
                                                let e = !n;
                                                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    l(e);
                                            },
                                            variant: "secondary",
                                            text: eo.intl.string(n ? eo.t.fYtm6f : eo.t["TeTYE+"]),
                                            icon: ty.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, d.jsx)("div", {
                                    className: nD.Dh,
                                    ref: c,
                                    children: (0, d.jsx)(G.Ch, { className: nD.Qo, children: (0, d.jsx)(nA, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, d.jsx)(I.R9, {
                              newValue: { pageIndex: f },
                              children: (0, d.jsx)(t3, {
                                  categories: i,
                                  setCategoryRef: r,
                                  currentPage: f,
                                  handlePageChange: E,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, d.jsx)(nB, { scrollerRef: a, tab: s }, s),
                ],
            }),
        })
    );
}
var nw = n(599062),
    nG = n(651162),
    nU = n(367727);
let nz = u.createContext(null);
function nV(e) {
    let { blockType: t, children: n } = e,
        l = u.useMemo(() => ({ blockType: t }), [t]);
    return (0, d.jsx)(nz.Provider, { value: l, children: n });
}
var nK = n(755172),
    nY = n(325595),
    nW = n(893998),
    n$ = n(110629),
    nq = n(461376),
    nZ = n(607399),
    nX = n(946015),
    nQ = n(717421),
    nJ = n(140735),
    n0 = n(496431),
    n1 = n(324145);
function n2(e) {
    let { endDate: t, size: n = "md", className: l, showSeconds: s = !1 } = e,
        { days: a, hours: i, minutes: r, seconds: o } = (0, n0.A)(t),
        c = (function (e, t, n, l, s) {
            function a(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let i = [a(e), a(t), a(n)];
            return s && i.push(a(l)), i.join(":");
        })(a, i, r, o, s);
    return (0, d.jsxs)("div", {
        className: g()(n1.kL, l),
        role: "timer",
        children: [
            c
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, d.jsx)(
                              et.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: n1.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, d.jsx)(
                              et.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: n1.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, d.jsx)(nJ.A, { children: eo.intl.format(eo.t.j6IyVe, { days: a, hours: i, minutes: r }) }),
        ],
    });
}
var n4 = n(63776);
let n3 = u.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, nQ.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, d.jsxs)(nq.animated.div, {
        className: g()([n4.lP, nZ.Fr && n4.yJ]),
        role: "status",
        style: {
            ...l,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, d.jsxs)(nX.s, {
                direction: nX.s.Direction.VERTICAL,
                children: [
                    (0, d.jsx)(et.E, {
                        variant: "text-md/medium",
                        className: n4.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, d.jsx)(et.E, {
                            variant: "text-sm/medium",
                            className: n4.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, d.jsx)(n2, { endDate: t.endTime }),
        ],
    });
});
var n5 = n(424918),
    n9 = n(993408),
    n7 = n(196231),
    n8 = n(459550);
function n6(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, d.jsx)("div", {
        className: g()(n8.n9, n8.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === n5.u.CATEGORY
                ? (0, d.jsx)(
                      I.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, d.jsx)(
                              n7.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, n9.HF)(e.unpublishedAt) ? eo.intl.string(eo.t["h/uBCR"]) : void 0,
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
function le(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [l, s] = n;
    return (0, d.jsx)("div", {
        className: g()(n8.n9, n8.YB),
        children: (0, d.jsxs)(I.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != l ? l.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == l),
            },
            children: [
                null != l &&
                    (0, d.jsx)(n7.S, {
                        category: l,
                        enablePreview: !0,
                        badgeText: (0, n9.HF)(l.unpublishedAt) ? eo.intl.string(eo.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != s &&
                    (0, d.jsx)(n7.S, {
                        category: s,
                        badgeText: (0, n9.HF)(s.unpublishedAt) ? eo.intl.string(eo.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let lt = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e,
        { analyticsLocations: a } = (0, j.Ay)(el.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, d.jsxs)("div", {
              className: g()(n8.n9, n8.YB),
              children: [
                  (0, d.jsx)("div", {
                      className: g()(n8.Jn, n8.oT),
                      children: (0, d.jsx)("div", { className: n8.uy }),
                  }),
                  (0, d.jsx)("div", {
                      className: g()(n8.Jn, n8.oT),
                      children: (0, d.jsx)("div", { className: n8.uy }),
                  }),
              ],
          })
        : null != s
          ? (0, d.jsx)(j.f5, {
                value: a,
                children: (0, d.jsx)(n6, { featuredBlockRecord: s, handleTransition: n, isLoading: !1 }),
            })
          : (0, d.jsx)(j.f5, {
                value: a,
                children: (0, d.jsx)(le, { categories: l, handleTransition: n, isLoading: !1 }),
            });
};
var ln = n(531685),
    ll = n(621466),
    ls =
        (((o = {}).MOUNTED = "mounted"),
        (o.SORT_OUT = "sort-out"),
        (o.SORT_IN = "sort-in"),
        (o.SHUFFLE_OUT = "shuffle-out"),
        (o.SHUFFLE_IN = "shuffle-in"),
        (o.FINISHED = "finished"),
        o);
n(667532);
var la = n(435558),
    li = n.n(la),
    lr =
        (((c = {}).RECOMMENDED = "recommended"),
        (c.POPULAR = "popular"),
        (c.RECENT = "recent"),
        (c.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (c.RANDOM = "random"),
        c),
    lo = n(153488),
    lc = n(313276),
    ld = n(623373),
    lu = n(885574),
    lm = n(975807),
    lg = n(975571),
    lh = n(938682);
let lx = function (e) {
        let { personalizedResults: t, label: n } = e,
            l = n ?? eo.intl.string(eo.t.NSv5KV);
        return (0, d.jsxs)("div", {
            className: lh.L,
            children: [
                (0, d.jsx)(em.D, { variant: "heading-lg/semibold", children: l }),
                t &&
                    (0, d.jsx)(eU.m, {
                        text: eo.intl.string(eo.t["3taPdj"]),
                        position: "top",
                        "aria-label": eo.intl.string(eo.t["3taPdj"]),
                        children: (0, d.jsx)(ez.D, {
                            onClick: () => (0, lm.A)(lg.A.getArticleURL(tt.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: lh.s,
                            children: (0, d.jsx)(lu.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    lf = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: l,
                numVisibleItems: s,
                tab: a,
                buttonContainerClassName: i,
                orbsSupportedOnly: r,
            } = e,
            o = (0, D.bG)([N.default], () => N.default.getCurrentUser()),
            c = q.Ay.canUseShopDiscounts(o),
            m = (0, nT.Mk)(a),
            h = (0, t6.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: f,
                sortedItems: E,
                sortOptions: p,
                shuffleProducts: v,
                showRecommendationOption: C,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: l } = e,
                    s = (0, D.bG)([lo.A], () => lo.A.hasConsented(tt.YAq.PERSONALIZATION)),
                    a = u.useMemo(() => t?.[lr.RECOMMENDED] ?? [], [t]),
                    i = u.useMemo(() => t?.[lr.POPULAR] ?? [], [t]),
                    r = a.length > 0 && s,
                    [o, c] = u.useState(r ? lr.RECOMMENDED : lr.POPULAR),
                    d = (0, D.bG)([L.A], () => L.A.productsWithVariantsAsGroup),
                    m = u.useMemo(() => (0, n9.CE)(d), [d]),
                    g = (0, lc.A)(),
                    h = (0, tz.p)(),
                    [x, f] = u.useState([]),
                    E = u.useCallback(() => {
                        c(lr.RANDOM), f(li().shuffle(m));
                    }, [m]);
                u.useEffect(() => {
                    f(li().shuffle(m));
                }, [m]);
                let p = u.useMemo(() => {
                    let e = [];
                    switch (o) {
                        case lr.RECENT:
                            e = m;
                            break;
                        case lr.PRICE_LOW_TO_HIGH:
                            e = (0, n9.bf)([...m], n, l);
                            break;
                        case lr.RECOMMENDED:
                            e = g(a);
                            break;
                        case lr.POPULAR:
                            e = g(i);
                            break;
                        case lr.RANDOM:
                            e = x;
                    }
                    return l ? (0, ld.ex)(h(e)) : h(e);
                }, [o, l, h, n, m, g, a, i, x]);
                return {
                    sortType: o,
                    setSortType: c,
                    sortedItems: (0, tV.X)(p),
                    sortOptions: u.useMemo(() => {
                        let e = [
                            { value: lr.POPULAR, label: eo.intl.string(eo.t.Y68e5p) },
                            { value: lr.RECENT, label: eo.intl.string(eo.t["51Bhiz"]) },
                            { value: lr.PRICE_LOW_TO_HIGH, label: eo.intl.string(eo.t.m8RVU2) },
                        ];
                        return r && e.unshift({ value: lr.RECOMMENDED, label: eo.intl.string(eo.t.zPWgFG) }), e;
                    }, [r]),
                    showRecommendationOption: r,
                    shuffleProducts: E,
                };
            })({ sortedSkuIds: l, hasShopDiscount: c, orbsSupportedOnly: r }),
            b = (0, D.bG)([H.Ay], () => H.Ay.useReducedMotion),
            S = (0, D.bG)([ln.A], () => ln.A.isFocused()),
            _ = !b && S,
            { animationPhase: A, startAnimation: O } = (() => {
                let [e, t] = u.useState("mounted"),
                    [n, l] = u.useState(!1),
                    s = u.useRef(null);
                return (
                    u.useEffect(() => {
                        if (n && "finished" === e) {
                            if (null !== s.current) {
                                let e = s.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, ll.vq)(e, HTMLButtonElement) ||
                                    (0, ll.vq)(e, HTMLAnchorElement) ||
                                    (0, ll.vq)(e, HTMLInputElement) ||
                                    (0, ll.vq)(e, HTMLSelectElement) ||
                                    (0, ll.vq)(e, HTMLTextAreaElement)
                                )
                                    e.focus();
                                else {
                                    let t = e.querySelector(
                                        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="combobox"], [role="button"]',
                                    );
                                    t?.focus();
                                }
                            }
                            l(!1);
                        }
                    }, [e, n]),
                    {
                        animationPhase: e,
                        startAnimation: u.useCallback((e) => {
                            let { isShuffling: n, onOutroComplete: a, returnRef: i } = e;
                            i?.current != null && ((s.current = i.current), l(!0)),
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
            k = (0, I.uM)(),
            T = k?.sessionId ?? "",
            { analyticsLocations: y } = (0, j.Ay)(el.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            R = u.useRef(null),
            P = u.useRef(null),
            [M, B] = u.useState(!1),
            F = u.useCallback(
                (e) => {
                    B(!1),
                        O({ isShuffling: !1, onOutroComplete: () => f(e), returnRef: P }),
                        to.default.track(tt.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: T,
                            sort_type: e,
                        });
                },
                [O, f, T],
            );
        return null == o
            ? null
            : (0, d.jsx)(j.f5, {
                  value: y,
                  children: (0, d.jsxs)("div", {
                      className: g()(n8.lD, n8.YB),
                      children: [
                          (0, d.jsxs)("div", {
                              className: n8.$6,
                              children: [
                                  (0, d.jsx)(lx, { label: n, personalizedResults: C }),
                                  (0, d.jsxs)("div", {
                                      className: g()(n8.IE, { [t6.jP]: h }),
                                      children: [
                                          (0, d.jsxs)("div", {
                                              className: n8.gd,
                                              children: [
                                                  (0, d.jsx)(et.E, {
                                                      variant: "text-md/medium",
                                                      children: eo.intl.string(eo.t.uaX705),
                                                  }),
                                                  (0, d.jsx)("div", {
                                                      className: g()(i, n8.pI),
                                                      ref: P,
                                                      children: (0, d.jsx)(t8.l, {
                                                          label: eo.intl.string(eo.t.uaX705),
                                                          hideLabel: !0,
                                                          options: p,
                                                          onSelectionChange: F,
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
                                          (0, d.jsx)("div", {
                                              className: i,
                                              children: (0, d.jsx)(en.$, {
                                                  variant: "secondary",
                                                  text: eo.intl.string(eo.t.X3tnc4),
                                                  buttonRef: R,
                                                  onClick: function () {
                                                      B(!0),
                                                          O({ isShuffling: !0, onOutroComplete: v, returnRef: R }),
                                                          to.default.track(
                                                              tt.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: T },
                                                          );
                                                  },
                                                  disabled: A !== ls.MOUNTED && A !== ls.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, d.jsx)(nJ.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: M && A === ls.FINISHED ? eo.intl.string(eo.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, d.jsx)("div", {
                              className: n8.hm,
                              children: t
                                  ? (0, d.jsx)(d.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, d.jsx)(tW.A, {}, t + 1)),
                                    })
                                  : E.slice(0, s).map((e, t) => {
                                        let n,
                                            l = L.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == l) return null;
                                        if (_)
                                            if (A === ls.SHUFFLE_OUT)
                                                return (0, d.jsx)(
                                                    "div",
                                                    {
                                                        className: n8.Z2,
                                                        children: (0, d.jsx)(tW.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                A === ls.SORT_OUT
                                                    ? (n = n8.MW)
                                                    : A === ls.SHUFFLE_IN
                                                      ? (n = n8.aS)
                                                      : A === ls.SORT_IN && (n = n8.F7);
                                        return (0, d.jsx)(
                                            I.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, d.jsx)("div", {
                                                    className: n,
                                                    children: (0, d.jsx)(tQ.A, {
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
var lE = n(449543),
    lp = n(843793);
let lv = function (e) {
    let { block: t, handleTransition: n, tab: l } = e,
        s = (0, D.bG)([N.default], () => N.default.getCurrentUser()),
        a = (0, nT.Mk)(l),
        i = (0, lc.A)(),
        r = u.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i]),
        o = (0, tV.X)(r),
        { analyticsLocations: c } = (0, j.Ay)(el.A.COLLECTIBLES_SHOP_SHELF),
        m = u.useCallback(() => {
            n({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [n, t.categorySkuId]);
    return null == s || 0 === o.length
        ? null
        : (0, d.jsx)(j.f5, {
              value: c,
              children: (0, d.jsxs)("div", {
                  className: g()(lp.kL, n8.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, d.jsx)("img", {
                              className: lp.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, d.jsxs)("div", {
                          className: lp.Qs,
                          children: [
                              (0, d.jsxs)("div", {
                                  className: lp.wx,
                                  children: [
                                      (0, d.jsxs)("div", {
                                          className: lp.Jb,
                                          children: [
                                              (0, d.jsx)(n$.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, d.jsx)(em.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "text-overlay-light",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, d.jsx)(en.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: m,
                                          }),
                                  ],
                              }),
                              (0, d.jsx)(lE.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: o.map((e, n) =>
                                      null == L.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, d.jsx)(
                                                I.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: n,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, d.jsx)(tQ.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency: a,
                                                    }),
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
var lj = n(269115),
    lC = n(789645),
    lb = n(976860),
    lS = n(48093);
let l_ = "GAME_SERVER_HOSTING_BANNER";
function lA(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        l = (0, I.uM)(),
        s = u.useRef(null),
        a = u.useRef(!1),
        i = u.useRef(null),
        [r, o] = u.useState(!1),
        c = u.useCallback(
            (e) => {
                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: n,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: l_,
                    cta_name: e,
                });
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        ),
        m = u.useCallback(
            (e) => {
                e?.stopPropagation(),
                    c("go_to_game_server_hosting"),
                    (0, lb.pX)(tt.BVt.COLLECTIBLES_SHOP_WITH_TAB(tc.G2.GAME_SERVERS));
            },
            [c],
        ),
        h = u.useCallback(
            (e) => {
                e?.stopPropagation(),
                    c("dismiss"),
                    o(!0),
                    !0 === t.isDismissible &&
                        (0, nU.d6)(eG.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: tn.i.USER_DISMISS,
                        });
            },
            [c, t.isDismissible],
        ),
        x = u.useCallback(
            (e) => {
                !a.current &&
                    (e && null === i.current
                        ? (i.current = setTimeout(() => {
                              (a.current = !0),
                                  (i.current = null),
                                  to.default.track(tt.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: l?.sessionId,
                                      page_type: n,
                                      page_category: l?.pageCategory,
                                      page_section: l?.pageSection,
                                      type: l_,
                                  });
                          }, 1e3))
                        : e || null === i.current || (clearTimeout(i.current), (i.current = null)));
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        );
    return (u.useEffect(
        () => () => {
            null !== i.current && (clearTimeout(i.current), (i.current = null));
        },
        [],
    ),
    r)
        ? null
        : (0, d.jsx)(J.N, {
              theme: ei.NJ.DARKER,
              children: (e) =>
                  (0, d.jsx)(lj.L, {
                      innerRef: s,
                      onChange: x,
                      threshold: 0,
                      children: (0, d.jsx)("div", {
                          ref: s,
                          className: g()(lS.YB, e),
                          children: (0, d.jsxs)(eE.s, {
                              className: lS.kL,
                              onClick: m,
                              "aria-label": eo.intl.string(er.default["34GMP9"]),
                              children: [
                                  (0, d.jsx)("img", {
                                      className: lS.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, d.jsx)("div", { className: lS.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, d.jsx)("div", {
                                          className: lS.b,
                                          children: (0, d.jsx)(eB.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: lC.P,
                                              onClick: h,
                                              "aria-label": eo.intl.string(eo.t.WAI6xu),
                                          }),
                                      }),
                                  (0, d.jsx)("div", {
                                      className: lS.jE,
                                      children: (0, d.jsxs)("div", {
                                          className: lS.rF,
                                          children: [
                                              (0, d.jsxs)("div", {
                                                  className: lS.Z,
                                                  children: [
                                                      (0, d.jsx)(em.D, {
                                                          className: lS.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: eo.intl.string(er.default["34GMP9"]),
                                                      }),
                                                      (0, d.jsx)(et.E, {
                                                          className: lS.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: eo.intl.string(er.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, d.jsx)(en.$, {
                                                  variant: "overlay-primary",
                                                  text: eo.intl.string(eo.t.jVcuVY),
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
var lN = n(337183),
    lI = n(212407),
    lL = n(815280),
    lO = n(10675);
let lk = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        l = (0, tG.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: s, bannerAnimatedUrl: a } = (0, lI.qY)(t),
        i = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, d.jsxs)("div", {
        ref: l,
        className: lO.BX,
        children: [
            (0, d.jsx)("div", {
                className: lO.vK,
                children: null != s && (0, d.jsx)(lL.A, { bannerStatic: s, bannerAnimated: a }),
            }),
            (0, d.jsx)("div", {
                className: lO.HQ,
                children: (0, d.jsxs)("div", {
                    className: lO.Yn,
                    children: [
                        null != t.endTime ? (0, d.jsx)(n2, { endDate: t.endTime, size: "lg" }) : null,
                        (0, d.jsx)(em.D, {
                            variant: "heading-xxl/bold",
                            className: lO.DD,
                            color: "text-strong",
                            style: { ...i },
                            children: t.title,
                        }),
                        r || o
                            ? (0, d.jsxs)(et.E, {
                                  variant: "text-md/medium",
                                  style: { ...i },
                                  children: [
                                      r && t.body,
                                      r && o && " ",
                                      o &&
                                          (0, d.jsx)(eT.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: lO.CU,
                                              style: { ...i },
                                              children: eo.intl.string(eo.t.O7ADgv),
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
var lT = n(189213),
    ly = n(290136),
    lR = n(478016),
    lP = n(825484),
    lM = n(812993),
    lB = n(914410),
    lD = n(34332),
    lH = n(597783),
    lF = n(61750);
function lw(e, t) {
    let n = u.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, D.bG)([tL.A], () => tL.A.getPurchases(n));
    return {
        readyToClaim: u.useMemo(() => l.length === n.length, [l, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: l,
    };
}
var lG = n(162945),
    lU = n(858708);
let lz = u.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: l } = (0, lH.Z)(n),
            s = u.useRef(null),
            { isHoveringOrFocusing: a } = (0, ev.A)(s),
            { readyToClaim: i, collectibleProductSkuIds: r, collectedSkuIds: o } = lw(t, n),
            c = (0, D.bG)([tL.A], () => tL.A.isClaiming === n);
        return (0, d.jsx)(lj.L, {
            onChange: l,
            threshold: 0,
            innerRef: s,
            children: (0, d.jsx)("div", {
                ref: s,
                className: g()(lG.ty, lU.Q3, { [lG.yo]: a }),
                "aria-label": eo.intl.formatToPlainString(eo.t.Ez6aHE, { category: t.name }),
                children: (0, d.jsxs)("div", {
                    className: lG.qt,
                    children: [
                        (0, d.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: lU.L8,
                        }),
                        (0, d.jsx)("div", {
                            className: lG.N1,
                            children: (0, d.jsx)(lM.Lp, {
                                text: eo.intl.string(eo.t.rykAJ9),
                                disableColor: !0,
                                className: lU.HZ,
                            }),
                        }),
                        (0, d.jsxs)("div", {
                            className: lG.xQ,
                            children: [
                                (0, d.jsxs)("div", {
                                    className: lU.xE,
                                    children: [
                                        (0, d.jsxs)("div", {
                                            className: lU.cs,
                                            children: [
                                                (0, d.jsx)(em.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: lG.tZ,
                                                    children: eo.intl.string(eo.t["0mDmg/"]),
                                                }),
                                                (0, d.jsx)(eU.m, {
                                                    text: i
                                                        ? eo.intl.string(eo.t.cKH3tk)
                                                        : eo.intl.formatToPlainString(eo.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, d.jsx)("span", {
                                                        className: lU.ZB,
                                                        children: (0, d.jsx)(ly.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, d.jsx)("div", {
                                            className: lG.oh,
                                            "aria-hidden": !0,
                                            children: (0, d.jsxs)("div", {
                                                className: lU.L$,
                                                children: [
                                                    (0, d.jsx)(lB.Ay, {
                                                        variant: lB.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, d.jsxs)("div", {
                                                        className: g()(lU.__, { [lU.gF]: i }),
                                                        children: [
                                                            i
                                                                ? (0, d.jsx)(lR.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, d.jsx)(et.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: eo.intl.formatToPlainString(eo.t["5TwASM"], {
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
                                    className: lG.Vs,
                                    children: (0, d.jsx)(lP.e, {
                                        wrap: !1,
                                        className: lG.Ld,
                                        fullWidth: !0,
                                        children: (0, d.jsx)(en.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    i &&
                                                        (0, lD.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = L.A.getProduct(n);
                                                                null != e &&
                                                                    (0, lF.A)({
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
                                                                        (0, d.jsx)(lT.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: eo.intl.string(eo.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: eo.intl.string(eo.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, d.jsx)("div", {
                                                                                children: eo.intl.string(
                                                                                    eo.t["0YpIF/"],
                                                                                ),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: eo.intl.string(eo.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !i,
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
    lV = function (e) {
        let t,
            n,
            l,
            { isBlockLoading: s = !1, heroBlock: a, tab: i } = e,
            r = (0, nT.Mk)(i),
            o = u.useMemo(() => L.A.getCategoryForProduct(a.rewardSkuId), [a.rewardSkuId]),
            c = (0, D.bG)([tL.A], () => tL.A.getPurchase(a.rewardSkuId)),
            { products: m } =
                ((t = (0, lc.A)()),
                (n = u.useMemo(
                    () => (s ? [] : t(a.rankedSkuIds).filter((e) => e.skuId !== a.rewardSkuId || null != c)),
                    [s, t, a.rankedSkuIds, c, a.rewardSkuId],
                )),
                (l = (0, tz.p)()(n)),
                { products: (0, tV.X)(l) }),
            g = u.useMemo(
                () =>
                    !s &&
                    0 !== a.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    a.rankedSkuIds.every((e) => L.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, a.rankedSkuIds, m.length],
            ),
            h = s || g,
            { readyToClaim: x } = lw(o, a.rewardSkuId),
            f = null == c && null != a.rewardSkuId && null != o;
        return (0, d.jsx)(lE.A, {
            gap: "xl",
            children: h
                ? (0, d.jsx)(d.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, d.jsx)(tW.A, {}, t)),
                  })
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          f &&
                              x &&
                              (0, d.jsx)(
                                  I.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, d.jsx)(lz, { category: o, rewardSkuId: a.rewardSkuId }),
                                  },
                                  a.rewardSkuId,
                              ),
                          m.map((e, t) => {
                              let n = L.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, d.jsx)(
                                        I.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, d.jsx)(tQ.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, n9.$b)(90);
let lK = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: nG.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    lY = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: l, onVisibilityChange: s } = e,
            a = (0, tG.K)(
                (e) => {
                    s?.(e);
                },
                0.1,
                null != s,
            ),
            i = (0, D.bG)([N.default], () => N.default.getCurrentUser()),
            { analyticsLocations: r } = (0, j.Ay)(el.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: c,
                heroLogo: u,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, lI.Kk)(n),
            x = o?.responsive ?? !1,
            f = o?.backgroundStyle;
        return null != i && (t || n !== lK)
            ? (0, d.jsx)(j.f5, {
                  value: r,
                  children: (0, d.jsxs)("div", {
                      ref: a,
                      className: n8.os,
                      children: [
                          (0, d.jsx)("div", {
                              className: g()(n8.vK, { [n8.no]: x }),
                              style: null != f ? { background: f } : void 0,
                              children:
                                  null != m &&
                                  (0, d.jsx)(lL.A, { bannerStatic: m, bannerAnimated: h, isResponsive: x }),
                          }),
                          (0, d.jsxs)("div", {
                              className: n8.xX,
                              children: [
                                  (0, d.jsx)("div", {
                                      className: g()(n8.bC, { [n8.no]: x }),
                                      children: t
                                          ? (0, d.jsx)("div", { className: n8.Hw })
                                          : (0, d.jsx)("div", {
                                                className: n8.Hw,
                                                children: (0, d.jsxs)("div", {
                                                    className: n8.Wq,
                                                    children: [
                                                        null != u &&
                                                            (0, d.jsx)("img", {
                                                                className: n8.rm,
                                                                src: u,
                                                                alt: n.name,
                                                                style: c?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, d.jsx)(em.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: n8.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, d.jsx)(et.E, {
                                                                variant: "text-md/normal",
                                                                className: n8.Tm,
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
                                  (0, d.jsx)(lV, { isBlockLoading: t, heroBlock: n, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var lW = n(222884);
let l$ = function (e) {
    let { shelf: t, handleTransition: n, tab: l } = e,
        s = (0, D.bG)([N.default], () => N.default.getCurrentUser()),
        a = (0, nT.Mk)(l),
        i = (0, D.bG)([L.A], () => (null != t.categorySkuId ? L.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, lc.A)(),
        o = u.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        c = (0, tV.X)(o),
        { analyticsLocations: m } = (0, j.Ay)(el.A.COLLECTIBLES_SHOP_SHELF),
        h = u.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: i?.isOrbsExclusive === !0 && l !== tc.G2.ORBS,
            });
        }, [t.categorySkuId, i, n, l]);
    if (null == s || 0 === c.length) return null;
    let x = t.buttonText ?? eo.intl.formatToPlainString(eo.t.bc9RBE, { category_name: t.name }),
        f = t.showButton,
        E = t.desktopBackgroundImage,
        p = null != E;
    return (0, d.jsx)(j.f5, {
        value: m,
        children: (0, d.jsxs)("div", {
            className: g()(lW.mu, n8.YB, p ? lW.VA : lW.Ti),
            children: [
                p && (0, d.jsx)("img", { className: lW.iL, src: E, alt: "", "aria-hidden": !0 }),
                (0, d.jsxs)("div", {
                    className: lW.Qs,
                    children: [
                        (0, d.jsxs)("div", {
                            className: lW.wx,
                            children: [
                                (0, d.jsx)(em.D, {
                                    variant: "heading-lg/semibold",
                                    style: p ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                f &&
                                    (0, d.jsx)(en.$, {
                                        variant: p ? "overlay-primary" : "secondary",
                                        text: x,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, d.jsx)(lE.A, {
                            gap: "xl",
                            edgeFade: p ? "sm" : void 0,
                            children: c.map((e, n) =>
                                null == L.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, d.jsx)(
                                          I.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, d.jsx)(tQ.A, { skuId: e.skuId, prioritizedCurrency: a }),
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
var lq = n(465794),
    lZ = n(69236),
    lX = n(44724),
    lQ = n(421108),
    lJ = n(873297);
let l0 = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: l,
            gradientAngle: s,
            skuIds: a,
            tab: i,
            endTime: r,
            ctaType: o = "storefront",
            logoUrl: c,
        } = e,
        m = (0, lQ.u)(r) ?? void 0,
        g = (0, lZ.W8)(),
        h = u.useMemo(
            () =>
                "nitro" !== o || g
                    ? {
                          kind: "button",
                          text: eo.intl.string(eo.t.apFNLU),
                          onClick: () => (0, lX.default)({ applicationId: t }),
                          onMouseDown: () => (0, lX.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, d.jsx)(lq.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: ea.pe.TIER_2,
                              buttonTextOverride: eo.intl.string(eo.t.pj0XBN),
                          }),
                      },
            [o, t, g],
        );
    return (0, d.jsx)(lJ.A, {
        skuIds: a,
        tab: i,
        applicationId: t,
        headerText: n,
        logoUrl: c,
        cta: h,
        timeLeftText: m,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${s}deg, ${l.join(", ")})`,
    });
};
var l1 = n(575593),
    l2 = n(770178),
    l4 = n(929283),
    l3 = n(273411);
let l5 = [
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
function l9(e) {
    let { config: t, baseLeft: n, transitioning: l } = e,
        s = window.innerHeight,
        a = L.A.getProduct(t.skuId),
        i = a?.items[0],
        r = a?.type,
        o = n + t.horizontalJitter;
    return (0, d.jsx)("div", {
        className: l3.LY,
        style: {
            top: l ? -s - 384 : t.top,
            left: l ? o + t.transitionOffsetLeft : o,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != i && r === l1.R.AVATAR_DECORATION && (0, d.jsx)(l4.i, { item: i }),
    });
}
let l7 = (e) => {
        let { peaking: t, transitioning: n, parentWidth: l } = e,
            [s, a] = u.useState(!1),
            [i, r] = u.useState([]),
            [o] = u.useState(() =>
                [...l5]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${tc.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            u.useEffect(() => {
                if (null != l && l > 0) {
                    let e = Math.max(1, Math.floor(l / 130)),
                        t = l / e;
                    r(Array.from({ length: e }, (e, n) => ({ config: o[n % o.length], baseLeft: n * t })));
                }
            }, [l, o]),
            u.useEffect(() => {
                n && setTimeout(() => a(!0), tc.H1);
            }, [n]),
            (0, d.jsx)("div", {
                className: g()(l3.rA, { [l3.Kb]: t, [l3.pp]: s }),
                children: i.map((e, t) => {
                    let { config: l, baseLeft: s } = e;
                    return (0, d.jsx)(l9, { config: l, baseLeft: s, transitioning: n }, l.skuId + t);
                }),
            })
        );
    },
    l8 = function (e) {
        let { peaking: t, transitioning: n } = e,
            l = u.useRef(null),
            [s, a] = u.useState(0),
            i = u.useCallback(() => {
                null != l.current && a(l.current.offsetWidth);
            }, []);
        return (
            (0, l2.g)(l, i),
            (0, d.jsx)("div", {
                ref: l,
                className: l3.eL,
                children: (0, d.jsx)(l7, { peaking: t, transitioning: n, parentWidth: s }),
            })
        );
    };
var l6 = n(815021);
let se = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            l = L.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            s = u.useRef(null),
            a = u.useRef(null),
            [i, r] = u.useState(),
            [o, c] = u.useState(!1);
        u.useEffect(() => {
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
        let m = l?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, lH.Z)(m, "home", "marketing wide banner"),
            x = (0, I.uM)(),
            { bannerURL: f } = (0, lI.w$)(t),
            E = n === tc.G2.ORBS,
            p = null != t.ctaRoute && "" !== t.ctaRoute,
            v = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
            j = null != t.logoURL && "" !== t.logoURL,
            C = u.useCallback(() => {
                if ((c(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, nU.$l)(eG.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: tn.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            b = u.useCallback(
                (e) => {
                    to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: x?.sessionId,
                        sku_id: m,
                        page_type: n,
                        page_section: x?.pageSection,
                        page_category: x?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(x?.tilePosition),
                        cta_name: e,
                    });
                },
                [x, m, n],
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
                                    n = parseInt(t[2], 10);
                                (0, lX.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, lb.pX)(e);
                    }
                },
                [t.ctaRoute, b],
            );
        if (null == f || o) return null;
        let _ = g()(n8.nM, n8.Tq, n8.TS, n8.YB, { [n8._1]: E, [n8.vb]: p }),
            A = (0, d.jsxs)(d.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, d.jsx)("div", {
                            className: n8.Mh,
                            children: (0, d.jsx)(l6.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), C();
                                },
                                "aria-label": eo.intl.string(eo.t.WAI6xu),
                            }),
                        }),
                    (0, d.jsx)("div", {
                        className: g()(n8.zK, { [n8._1]: E }),
                        style: null != i ? { height: `${i}px` } : void 0,
                        children: (0, d.jsx)("img", {
                            ref: a,
                            src: f,
                            alt: t.title,
                            className: g()(n8.LN, { [n8.d5]: E }),
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: g()(n8.Ep, { [n8.Qq]: v }),
                        style: { maxHeight: null != i ? `${i}px` : "auto" },
                        children: (0, d.jsxs)("div", {
                            className: n8.E8,
                            children: [
                                (0, d.jsx)(em.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: E ? n8.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, d.jsx)(et.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: E ? "text-md/medium" : "text-sm/medium",
                                    children: E
                                        ? eo.intl.format(eo.t.SFFP7K, {
                                              helpdeskArticle: lg.A.getArticleURL(tt.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                v &&
                                    (0, d.jsxs)("div", {
                                        className: n8.nP,
                                        children: [
                                            (0, d.jsx)(en.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), S(t.ctaText ?? eo.intl.string(eo.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? eo.intl.string(eo.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? eo.intl.formatToPlainString(eo.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            j && (0, d.jsx)("img", { src: t.logoURL, alt: "", className: n8.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, d.jsx)(J.N, {
            theme: E ? void 0 : ei.NJ.DARK,
            children: (e) =>
                (0, d.jsx)(lj.L, {
                    innerRef: s,
                    onChange: h,
                    threshold: 0,
                    children: p
                        ? (0, d.jsx)(ez.D, { innerRef: s, onClick: () => S(null), className: g()(e, _), children: A })
                        : (0, d.jsx)("div", { ref: s, className: g()(e, _), children: A }),
                }),
        });
    },
    st = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: l, tab: s } = e,
            { noCache: a, includeUnpublished: i } = (0, t0.A)(),
            [r, o] = u.useState(!1),
            c = (0, I.uM)(),
            m = c?.sessionId ?? "",
            h = (0, w.H)({ location: "collectibles_shop_feed" });
        u.useEffect(() => {
            (0, tK.z)({
                sessionId: m,
                checkpoint: tK.t.SHOP_MOUNTED,
                tab: s,
                unpublishedCategoriesShown: i,
                cacheDisabled: a,
            });
        }, [s]);
        let {
                isFetchingShopHome: x,
                fetchShopHomeError: f,
                shopBlocks: E,
                refreshShopHome: p,
            } = (0, nK.y)(s, { noCache: a, includeUnpublished: i, logPerf: !0 }, { sessionId: m, tab: s }),
            v = u.useCallback(() => {
                p();
            }, [p]),
            j = u.useMemo(() => E.some((e) => e instanceof nY.p), [E])
                ? (0, d.jsx)(n$.A, { location: "CollectiblesShop" })
                : null;
        return (u.useEffect(() => {
            null != f ||
                x ||
                0 === E.length ||
                (0, tK.z)({
                    sessionId: m,
                    checkpoint: tK.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: i,
                    cacheDisabled: a,
                });
        }, [f, x, E.length, i, a, m, s]),
        null != f)
            ? (0, d.jsx)(nw.h, { onRetry: v, errorOrigin: nw.A.SHOP_PAGE, errorMessage: f.message })
            : x || 0 === E.length
              ? (0, d.jsxs)("div", {
                    className: g()(n8.g4, n8.Of),
                    children: [
                        (0, d.jsx)(lN.A, { isLoading: x, handleTransition: t, tab: s }),
                        (0, d.jsx)(lt, { isLoading: x, handleTransition: t, categories: [] }),
                        (0, d.jsx)(lf, {
                            isLoading: x,
                            title: s === tc.G2.ORBS ? eo.intl.string(eo.t.dFgeuZ) : eo.intl.string(eo.t.NSv5KV),
                            numVisibleItems: n,
                            tab: s,
                        }),
                    ],
                })
              : (0, d.jsx)(d.Fragment, {
                    children: E.map((e, a) =>
                        (function (e, a, i) {
                            if (null == e) return null;
                            let c = null,
                                u = !1;
                            switch (e.type) {
                                case nG.g.HERO:
                                    c = (0, d.jsx)(
                                        lN.A,
                                        { isLoading: x, handleTransition: t, heroBlock: e, tab: s, badge: j },
                                        i,
                                    );
                                    break;
                                case nG.g.FEATURED:
                                    c = (0, d.jsx)(
                                        lt,
                                        { isLoading: x, handleTransition: t, featuredBlockRecord: e },
                                        i,
                                    );
                                    break;
                                case nG.g.FEED:
                                    let m = e.sortedSkuIds;
                                    c = (0, d.jsx)(
                                        lf,
                                        {
                                            title:
                                                s === tc.G2.ORBS
                                                    ? eo.intl.string(eo.t.dFgeuZ)
                                                    : eo.intl.string(eo.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === nG.g.IMMERSIVE_BANNER ? n8.w : void 0,
                                            tab: s,
                                            orbsSupportedOnly: s === tc.G2.ORBS,
                                        },
                                        i,
                                    );
                                    break;
                                case nG.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, nU.En)(eG.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, d.jsx)(se, { wideBannerBlock: e, tab: s }, i);
                                    break;
                                case nG.g.FRAMES_BANNER:
                                    c = (0, d.jsx)(
                                        se,
                                        {
                                            wideBannerBlock: nW.y.fromServer({
                                                type: nG.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                banner_text_color: "white",
                                                banner_body_text_color: "white",
                                                disable_cta: !0,
                                            }),
                                            tab: s,
                                        },
                                        i,
                                    );
                                    break;
                                case nG.g.FRAMES_PRODUCT_SHELF:
                                    c = (0, d.jsx)(lv, { block: e, handleTransition: t, tab: s }, i);
                                    break;
                                case nG.g.SHELF:
                                    c = (0, d.jsx)(l$, { handleTransition: t, shelf: e, tab: s }, i);
                                    break;
                                case nG.g.COUNTDOWN_TIMER:
                                    (c = (0, d.jsx)(n3, { countdownTimerBlock: e, isVisible: r }, i)), (u = !0);
                                    break;
                                case nG.g.IMMERSIVE_BANNER:
                                    c = (0, d.jsx)(
                                        lk,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        i,
                                    );
                                    break;
                                case nG.g.REWARD_HERO:
                                    c = (0, d.jsx)(lY, { isLoading: x, handleTransition: t, heroBlock: e, tab: s }, i);
                                    break;
                                case nG.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, nU.En)(eG.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, d.jsx)(
                                        nV,
                                        {
                                            blockType: e.type,
                                            children: (0, d.jsx)(lA, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        i,
                                    );
                                case nG.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, d.jsx)(
                                        nV,
                                        {
                                            blockType: e.type,
                                            children: (0, d.jsx)(l0, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: s,
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
                            return (0, d.jsx)(
                                nV,
                                {
                                    blockType: e.type,
                                    children: (0, d.jsx)("div", {
                                        className: g()(n8.v1, n8.Of, { [n8.J1]: 0 === i || u }),
                                        children: c,
                                    }),
                                },
                                i,
                            );
                        })(e, a > 0 ? E[a - 1] : null, a),
                    ),
                });
    },
    sn = function (e) {
        let { handleTransition: t, tab: n, transitionState: l } = e,
            s = u.useRef(null),
            { handleScroll: a } = tM(s, n),
            i = (0, tJ.U)(),
            r = (0, I.uM)(),
            [o, c] = u.useState(tc.md),
            [m, g] = u.useState(!1);
        return (
            u.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        o >= 36 ? g(e < 20) : e <= 200 && c((e) => e + tc.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, o, c, g]),
            (0, d.jsx)(G.Ch, {
                className: n8.OW,
                ref: s,
                onScroll: a,
                children: (0, d.jsxs)("div", {
                    className: n8.bx,
                    children: [
                        (0, d.jsxs)("div", {
                            className: n8.rb,
                            children: [
                                (0, d.jsx)(st, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: i,
                                    tab: n,
                                }),
                                n !== tc.G2.CATALOG &&
                                    o >= 36 &&
                                    (0, d.jsxs)("div", {
                                        className: n8.R$,
                                        children: [
                                            (0, d.jsx)(em.D, {
                                                variant: "heading-md/semibold",
                                                children: eo.intl.string(eo.t.Yr70c4),
                                            }),
                                            (0, d.jsx)(en.$, {
                                                variant: "primary",
                                                text: eo.intl.string(eo.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === tc.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, d.jsx)(l8, { peaking: m, transitioning: l === tc.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var sl = n(154323),
    ss = n(295811),
    sa = n(870216);
let si = { "Any:personalization-header": lx },
    sr = { [tH.b.SHOP_HOME]: si },
    so = { "1465939725649973269": si, "1478495181551440044": si },
    sc = function () {
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
    sd = { prioritizedCurrency: nT.Hi.ORBS };
function su(e) {
    let { tab: t } = e,
        [n, l, s] = (0, D.yK)([sa.A], () => [sa.A.getLayout(t), sa.A.isFetchingLayout(t), sa.A.getLayoutFetchError(t)]),
        a = (0, D.bG)([sl.A], () => sl.A.get("shop_include_unpublished")),
        i = (0, D.bG)([L.A], () => L.A.skipNumCategories),
        r = u.useMemo(() => {
            let e = {};
            return !0 === a && (e.include_unpublished = !0), null != i && i > 0 && (e.skip_num_categories = i), e;
        }, [a, i]),
        o = null == n && !l && s?.status !== 404 && s?.status !== 429;
    if (
        (u.useEffect(() => {
            o && (0, lD.T2)({ tab: t });
        }, [o, t]),
        null == n)
    )
        return t !== B.HOME || o || l
            ? null
            : (0, d.jsx)(tD.Z_, {
                  tenantId: tt.FYj,
                  templateId: tH.b.SHOP_HOME,
                  requestParams: r,
                  overrides: sr[tH.b.SHOP_HOME],
              });
    let c = (0, d.jsx)(tD.Qs, { tenantId: tt.FYj, layoutId: n, overrides: so[n] });
    return (0, d.jsxs)(d.Fragment, {
        children: [
            t === B.ORBS && (0, d.jsx)(sc, {}),
            t === B.ORBS ? (0, d.jsx)(nT.v3.Provider, { value: sd, children: c }) : c,
        ],
    });
}
function sm(e) {
    let { url: t } = e,
        [n, l] = u.useState(null);
    return (u.useEffect(() => {
        !(async function () {
            try {
                let e = await fetch(t),
                    n = await e.json();
                l(n);
            } catch (e) {
                l(null);
            }
        })();
    }, [t]),
    null == n)
        ? null
        : (0, d.jsx)(tD.Ay, { layout: n });
}
let sg = function (e) {
    let { handleTransition: t, tab: n, transitionState: l } = e,
        s = (0, I.uM)(),
        a = (0, D.bG)([ss.A], () => ss.A.getShopLayoutUrlOverride()),
        i = u.useRef(null),
        { handleScroll: r } = tM(i, n),
        [o, c] = u.useState(tc.md),
        [m, h] = u.useState(!1);
    return (
        u.useEffect(() => {
            if (null != i.current) {
                function e() {
                    if (null == i.current) return;
                    let e = i.current.getDistanceFromBottom();
                    o >= 36 ? h(e < 20) : e <= 200 && c((e) => e + tc.md);
                }
                let t = i.current.getScrollerNode();
                return (
                    t?.addEventListener("scroll", e),
                    () => {
                        t?.removeEventListener("scroll", e);
                    }
                );
            }
        }, [i, o, c, h]),
        (0, d.jsx)(G.Ch, {
            className: n8.OW,
            ref: i,
            onScroll: r,
            children: (0, d.jsxs)("div", {
                className: n8.bx,
                children: [
                    (0, d.jsxs)("div", {
                        className: g()(n8.rb, n8.GS),
                        children: [
                            null != a && "" !== a ? (0, d.jsx)(sm, { url: a }) : (0, d.jsx)(su, { tab: n }),
                            n !== B.CATALOG &&
                                o >= 36 &&
                                (0, d.jsxs)("div", {
                                    className: n8.R$,
                                    children: [
                                        (0, d.jsx)(em.D, {
                                            variant: "heading-md/semibold",
                                            children: eo.intl.string(eo.t.Yr70c4),
                                        }),
                                        (0, d.jsx)(en.$, {
                                            variant: "primary",
                                            text: eo.intl.string(eo.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: s?.sessionId,
                                                        page_type: n,
                                                        page_category: n === B.HOME ? void 0 : s?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, d.jsx)(l8, { peaking: m, transitioning: l === tc.Pf.OUT }),
                ],
            }),
        })
    );
};
var sh = n(564027);
let sx = function () {
        return (0, d.jsxs)("div", {
            className: sh.z,
            children: [
                (0, d.jsx)("img", {
                    className: sh.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: eo.intl.string(eo.t["p8+qtU"]),
                }),
                (0, d.jsx)(em.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t["p8+qtU"]) }),
                (0, d.jsx)(et.E, { variant: "text-md/medium", children: eo.intl.string(eo.t.UEiyvs) }),
            ],
        });
    },
    sf = [tc.G2.HOME, tc.G2.ORBS];
function sE(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: l,
            transitionState: s,
            updateAnalyticsState: a,
            refreshCategories: i,
        } = e,
        r = (0, D.bG)([L.A, tL.A], () =>
            null != L.A.error
                ? `shop load fetch categories error: ${L.A.error.message}`
                : null != tL.A.claimError
                  ? `shop load claim error: ${tL.A.claimError.message}`
                  : null != tL.A.fetchError
                    ? `shop load fetch purchase error: ${tL.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, D.bG)([N.default], () => N.default.getCurrentUser()),
            { noCache: n, includeUnpublished: l } = (0, t0.A)();
        u.useEffect(() => {
            null != e &&
                tI.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: l.toString(),
                    },
                });
        }, [e, t, n, l]);
    })(r);
    let o = (0, w.H)({ location: "collectibles_content" }),
        c = (0, D.bG)([H.Ay], () => H.Ay.useReducedMotion),
        m = (0, M.W6)(),
        g = (0, M.zy)(),
        [h] = u.useState(() => {
            if ("POP" === m.action) {
                let e;
                return (e = t1), (t1 = null), e ?? void 0;
            }
        }),
        [x, f] = u.useState(h),
        [E, p] = u.useState(null == h),
        v = u.useMemo(() => {
            let e = new URLSearchParams(g.search).get(tc.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        j = u.useMemo(
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
        C = (0, F.U)("CollectiblesContent"),
        b = (0, tO.a)("CollectiblesContent"),
        S = u.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: s,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, n), b && null != n && i && !r))
                    return void m.push(tt.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = s && !c,
                    d = r ? tc.G2.ORBS : tc.G2.CATALOG;
                f(n), p(!i), l(d, o);
            },
            [c, l, a, b, m],
        ),
        { searchError: _ } = (0, tk.S)();
    return null != _
        ? (0, d.jsx)(sx, {})
        : null != r
          ? (0, d.jsx)(nw.h, { onRetry: i, errorMessage: r, errorOrigin: nw.A.SHOP_PAGE })
          : t === tc.G2.HOME && C
            ? (0, d.jsx)(sg, { tab: B.HOME, transitionState: s, handleTransition: S })
            : t === tc.G2.ORBS && C
              ? (0, d.jsx)(sg, { tab: B.ORBS, transitionState: s, handleTransition: S })
              : sf.includes(t)
                ? (0, d.jsx)(sn, { handleTransition: S, tab: t, transitionState: s })
                : t === tc.G2.GAME_SERVERS
                  ? o
                      ? (0, d.jsx)(tA, {})
                      : (0, d.jsx)(M.rd, { to: tt.BVt.COLLECTIBLES_SHOP_WITH_TAB(tc.G2.HOME) })
                  : (0, d.jsx)(nH, {
                        tab: t,
                        categories: j,
                        initialCategoryId: x ?? v,
                        showFilterInitially: E && null == v,
                        onUnmount: () => {
                            f(void 0), p(!0);
                        },
                    });
}
var sp = n(956123),
    sv = n(812095),
    sj = n(151115),
    sC = n(456670);
let sb = { default: sC.Hk, nitro: sC.O5 };
function sS(e) {
    let {
            promotionTheme: t = "default",
            icon: n,
            headerText: l,
            helpCenterId: s,
            ctaText: a,
            onCtaClick: i,
            hideCta: r,
        } = e,
        o = u.useMemo(() => (null == s ? null : lg.A.getArticleURL(s)), [s]),
        c = (0, sj.s)(n);
    return (0, d.jsx)(J.N, {
        theme: tt.NJ8.DARKER,
        children: (e) =>
            (0, d.jsxs)("div", {
                className: g()(sC.kL, e),
                children: [
                    (0, d.jsx)("div", { className: g()(sC.D7, sb[t]) }),
                    (0, d.jsxs)("div", {
                        className: sC.Qs,
                        children: [
                            (0, d.jsxs)("div", {
                                className: sC.hu,
                                children: [
                                    null != c && (0, d.jsx)(c, { size: "sm", colorClass: sC.Kk }),
                                    (0, d.jsxs)(et.E, {
                                        variant: "text-sm/normal",
                                        color: "text-overlay-light",
                                        children: [
                                            null != l ? (0, sv.U)(l) : null,
                                            null != o &&
                                                (0, d.jsxs)(d.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, d.jsx)(eT.Anchor, {
                                                            href: o,
                                                            target: "_blank",
                                                            className: sC.nf,
                                                            children: eo.intl.string(eo.t.WQdkbb),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            !r && null != a && (0, d.jsx)(en.$, { variant: "overlay-primary", text: a, onClick: i }),
                        ],
                    }),
                ],
            }),
    });
}
let s_ = function (e) {
    let { tab: t, handleTransition: n } = e,
        l = (0, nj.A)(tt.FYj),
        s = (0, P.v)((e) => e.offerEligible),
        a = l?.tenantMetadata?.collectibles?.reward?.storefront?.nagbar,
        i = u.useCallback(() => {
            n(tc.G2.OFFER_ELIGIBLE);
        }, [n]);
    if (t === tc.G2.ORBS || null == a) return null;
    let r = t === tc.G2.CATALOG && s;
    return (0, d.jsx)(sS, {
        promotionTheme: void 0,
        icon: a.icon,
        headerText: a.headerText,
        ctaText: a.cta?.text,
        hideCta: r,
        helpCenterId: a.helpCenterId,
        onCtaClick: i,
    });
};
var sA = n(870308),
    sN = n(650583);
function sI(e) {
    let { children: t, shouldAddEventListener: n, onClose: l } = e,
        s = (0, f.useHasAnyModalOpen)();
    return (
        u.useEffect(() => {
            if (n && !s) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === sN.N$.Escape && l();
            }
        }, [n, s, l]),
        t
    );
}
let sL = function (e) {
    let { tab: t = tc.G2.HOME } = e;
    (0, S.P)(b.a);
    let n = (0, v.A)((0, h.A)()),
        l = (0, x.bG)([N.default], () => N.default.getCurrentUser());
    (0, A.pE)();
    let s = (0, t6.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, M.zy)(),
                t = (0, M.g)(),
                n = u.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                l = null != n ? parseInt(n, 10) : null;
            return {
                onClose: u.useCallback(() => {
                    if (0 === l) {
                        (0, lb.aX)(), (0, K.openUserSettings)();
                        return;
                    }
                    (0, lb.EL)() ? (0, lb.aX)() : (0, lb.pX)(tt.BVt.APP);
                }, [l]),
                source: l,
                ...t,
            };
        })(),
        { currentTab: i, hasFilters: r } = (0, P.v)(),
        o = u.useMemo(() => (t === tc.G2.HOME && null != i && r() ? i : t), [t, i, r]),
        c = (0, k.M)("CollectiblesShop");
    (0, _.A)(c ? tt.FYj : void 0);
    let { categories: m, refreshCategories: B } = (0, y.Ay)({ logPerf: !0 }, { sessionId: n, tab: o }),
        D = u.useMemo(() => [...m.values()], [m]),
        [H, F] = u.useState(),
        w = (0, x.bG)([L.A], () => L.A.getCategory(H)?.name),
        [G, U] = u.useState();
    (0, t5.XU)(n);
    let z = u.useCallback((e, t) => {
            U(e), F(t);
        }, []),
        { selectedTab: V, transitionState: Y, transitionToTab: W } = (0, R.o)(o);
    (0, C.HU)({ location: eo.intl.string(eo.t.pWG4ze) }), (0, T.uS)(n, V, w, Y, G), (0, T.N0)(V, l);
    let { dismissShopButtonDC: $ } = (0, sA.A)();
    u.useEffect(() => {
        $();
    }, [$]),
        u.useEffect(() => {
            (0, p.I)(tt.BVt.COLLECTIBLES_SHOP);
        }, []);
    let q = u.useRef(null),
        Z = u.useRef(null);
    (0, E.tj)(q);
    let X = (0, f.useHasAnyModalOpen)();
    u.useEffect(() => {
        Z.current?.focus();
    }, []),
        (0, t6.gB)();
    let { analyticsLocations: Q } = (0, T.lC)(V);
    return (0, d.jsx)(j.f5, {
        value: Q,
        children: (0, d.jsx)(I.R9, {
            newValue: { sessionId: n, pageCategory: w, pageSize: tc.l5 },
            children: (0, d.jsx)(O.iM, {
                tab: V,
                children: (0, d.jsx)(sI, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, d.jsxs)("div", {
                        className: g()(tq.bx, { [t6.jP]: s }),
                        ref: Z,
                        inert: X,
                        tabIndex: -1,
                        children: [
                            (0, d.jsx)(sp.G, { handleTransition: W, selectedTab: V }),
                            (0, d.jsx)(s_, { tab: V, handleTransition: W }),
                            (0, d.jsx)("div", {
                                className: g()(tq.td, {
                                    [tq.RK]: Y === tc.Pf.VISIBLE,
                                    [tq.in]: Y === tc.Pf.IN,
                                    [tq.FD]: Y === tc.Pf.OUT,
                                }),
                                children: (0, d.jsx)(sE, {
                                    tab: V,
                                    refreshCategories: B,
                                    transitionToTab: W,
                                    transitionState: Y,
                                    categories: D,
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
