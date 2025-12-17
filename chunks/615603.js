n.d(t, { Z: () => M }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(589358),
    c = n(159691),
    u = n(481060),
    d = n(607070),
    f = n(975298),
    p = n(760558),
    _ = n(401786),
    m = n(450468),
    h = n(98278),
    g = n(594174),
    E = n(78839),
    b = n(267642),
    y = n(74538),
    O = n(283029),
    v = n(357956),
    S = n(275909),
    I = n(981631),
    T = n(474936),
    C = n(388032),
    A = n(502846);
function N(e, t, n) {
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
function P(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let {
            guildBoostSlot: t,
            isCancellable: n,
            onCancel: a,
            onUncancel: o,
            premiumSubscription: s,
            useReducedMotion: d,
            fractionalState: f,
        } = e,
        p = i.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        _ = (0, b.tl)(t),
        m = (null == s ? void 0 : s.isPaused) === !0 && f === T.a$.NONE,
        h = C.intl.string(C.t.mOWsF1);
    return (0, r.jsxs)(
        "li",
        {
            className: A.unappliedGuildBoostSlot,
            children: [
                (0, r.jsxs)("div", {
                    className: A.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, r.jsx)(S.Z, {
                            className: A.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: _,
                            useReducedMotion: d,
                        }),
                        _ && null != s
                            ? (0, r.jsx)(u.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: C.intl.format(C.t.Z4ULRD, { date: s.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != p
                              ? (0, r.jsx)(v.Z, { cooldown: p.getTime() })
                              : (0, r.jsx)(u.Text, {
                                    className: A.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: C.intl.string(C.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: A.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !_ &&
                            (0, r.jsx)(l.Z, {
                                shouldShow: m,
                                text: h,
                                "aria-label": h.toString(),
                                children: (e) =>
                                    (0, r.jsx)("div", {
                                        className: A.unappliedGuildBoostSlotCta,
                                        children: (0, r.jsx)(
                                            c.Avr,
                                            w(P({}, e), {
                                                variant: "primary",
                                                text: C.intl.string(C.t.twFU3R),
                                                onClick: () => a(t),
                                                disabled: m,
                                                size: "sm",
                                            }),
                                        ),
                                    }),
                            }),
                        _ &&
                            (0, r.jsx)(l.Z, {
                                shouldShow: m,
                                text: h,
                                "aria-label": h.toString(),
                                children: (e) =>
                                    (0, r.jsx)("div", {
                                        className: A.unappliedGuildBoostSlotCta,
                                        children: (0, r.jsx)(
                                            c.Avr,
                                            w(P({}, e), {
                                                variant: "primary",
                                                text: C.intl.string(C.t["2glQNp"]),
                                                onClick: () => o(t),
                                                disabled: m,
                                                size: "sm",
                                            }),
                                        ),
                                    }),
                            }),
                    ],
                }),
            ],
        },
        t.id,
    );
}
function x(e) {
    (0, u.ZDy)(
        async () => (t) =>
            (0, r.jsx)(
                p.default,
                w(P({}, t), {
                    guildBoostSlots: [e],
                    locationSection: I.jXE.SETTINGS_PREMIUM,
                }),
            ),
    );
}
function L(e) {
    (0, u.ZDy)(async () => (t) => (0, r.jsx)(_.default, w(P({}, t), { guildBoostSlot: e })));
}
function j(e) {
    (0, u.ZDy)(async () => (t) => (0, r.jsx)(m.default, w(P({}, t), { guildBoostSlotId: e.id })));
}
let M = function (e) {
    let t,
        n,
        a,
        { guildBoostSlots: c } = e,
        p = (0, s.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
        _ = (null == p ? void 0 : p.isPausedOrPausePending) === !0,
        { fractionalState: m } = (0, f.Z)(),
        v = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        S = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        I = m === T.a$.FP_SUB_PAUSED,
        N = _ && !I,
        {
            appliedGuildBoostSlots: R,
            unappliedGuildBoostSlots: M,
            numActiveGuildBoostSlots: k,
            hasCooldownBoosts: U,
            allGuildBoostsAreOnCooldown: G,
        } = i.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                r = !1,
                i = !0;
            return (
                c.forEach((a) => {
                    !(0, b.tl)(a) && n++,
                        a.isOnCooldown() ? (r = !0) : (i = !1),
                        null != a.premiumGuildSubscription ? e.push(a) : t.push(a);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: r,
                    allGuildBoostsAreOnCooldown: i,
                }
            );
        }, [c]),
        Z = null != p ? y.ZP.getNumIncludedPremiumGuildSubscriptionSlots(p.planId) : 0,
        F = Math.max(0, Z - R.length),
        B = k > Z,
        V = Z === c.length,
        H = V ? F : 1,
        Y = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < H; t++)
                e.push(
                    (0, r.jsx)(
                        O.Z,
                        {
                            className: A.headerBoostGem,
                            useReducedMotion: v,
                        },
                        t,
                    ),
                );
            return e;
        }, [H, v]),
        W = i.useMemo(() => M.find((e) => e.isAvailable()), [M]);
    if (0 === M.length) return null;
    let K = M.length;
    if (
        ((t = V
            ? C.intl.formatToPlainString(G ? C.t["3DW6Dc"] : C.t["/u15Qc"], { numUnappliedGuildBoostSlots: K })
            : C.intl.formatToPlainString(G ? C.t["3DW6Dc"] : C.t.BPadnO, { numUnappliedGuildBoostSlots: K })),
        y.ZP.isPremium(S))
    ) {
        let e = (e, t) =>
            (0, r.jsx)(
                u.P3F,
                {
                    className: A.headerLearnMoreLink,
                    tag: "span",
                    onClick: () => {
                        (0, h.z)();
                    },
                    children: e,
                },
                t,
            );
        n = G
            ? C.intl.format(C.t.omcpSE, { learnMoreHook: e })
            : C.intl.format(C.t["5mAkVi"], {
                  numUnappliedGuildBoostSlots: K,
                  learnMoreHook: e,
              });
    } else
        n = G
            ? C.intl.string(C.t["8pcUZi"])
            : C.intl.formatToPlainString(C.t.Kaw82o, { numUnappliedGuildBoostSlots: K });
    return (
        (a = _ && m === T.a$.NONE ? C.intl.string(C.t.mOWsF1) : C.intl.string(C.t.xr4m5B)),
        (0, r.jsx)("div", {
            className: A.wrapper,
            children: (0, r.jsxs)("div", {
                className: o()(A.content, [A.headerWithoutSpecialHeader]),
                children: [
                    (0, r.jsxs)("div", {
                        className: A.header,
                        children: [
                            (0, r.jsxs)("div", {
                                className: A.headerContentPrimary,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: A.headerBoostGems,
                                        children: Y,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: A.__invalid_headerCopy,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: A.headerHeading,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                className: A.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: n,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: A.headerContentSecondary,
                                children: (0, r.jsx)(l.Z, {
                                    shouldShow: null == W || N,
                                    text: a,
                                    "aria-label": a.toString(),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            u.Button,
                                            w(
                                                P(
                                                    {
                                                        variant: "primary",
                                                        text: C.intl.string(C.t.BMx1iy),
                                                    },
                                                    e,
                                                ),
                                                {
                                                    disabled: null == W || N,
                                                    onClick: null != W ? () => x(W) : void 0,
                                                },
                                            ),
                                        ),
                                }),
                            }),
                        ],
                    }),
                    (!V || U) &&
                        (0, r.jsx)("ul", {
                            className: A.unappliedBoostSlots,
                            children: M.map((e) =>
                                (0, r.jsx)(
                                    D,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: B,
                                        onCancel: L,
                                        onUncancel: j,
                                        premiumSubscription: p,
                                        useReducedMotion: v,
                                        fractionalState: m,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                ],
            }),
        })
    );
};
