n.d(t, { Z: () => k }), n(539854);
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
    _ = n(760558),
    p = n(401786),
    h = n(450468),
    m = n(98278),
    g = n(594174),
    E = n(78839),
    b = n(267642),
    y = n(74538),
    O = n(283029),
    v = n(357956),
    I = n(275909),
    T = n(981631),
    S = n(474936),
    A = n(388032),
    C = n(387473);
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
function R(e) {
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
function P(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let {
            guildBoostSlot: t,
            isCancellable: n,
            onCancel: a,
            onUncancel: o,
            premiumSubscription: s,
            useReducedMotion: d,
            fractionalState: f,
        } = e,
        _ = i.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        p = (0, b.tl)(t),
        h = (null == s ? void 0 : s.isPaused) === !0 && f === S.a$.NONE,
        m = A.intl.string(A.t.mOWsF1);
    return (0, r.jsxs)(
        "li",
        {
            className: C.unappliedGuildBoostSlot,
            children: [
                (0, r.jsxs)("div", {
                    className: C.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, r.jsx)(I.Z, {
                            className: C.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: p,
                            useReducedMotion: d,
                        }),
                        p && null != s
                            ? (0, r.jsx)(u.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: A.intl.format(A.t.Z4ULRD, { date: s.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != _
                              ? (0, r.jsx)(v.Z, { cooldown: _.getTime() })
                              : (0, r.jsx)(u.Text, {
                                    className: C.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: A.intl.string(A.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: C.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !p &&
                            (0, r.jsx)(l.Z, {
                                shouldShow: h,
                                text: m,
                                "aria-label": m.toString(),
                                children: (e) =>
                                    (0, r.jsx)("div", {
                                        className: C.unappliedGuildBoostSlotCta,
                                        children: (0, r.jsx)(
                                            c.Avr,
                                            D(R({}, e), {
                                                variant: "primary",
                                                text: A.intl.string(A.t.twFU3R),
                                                onClick: () => a(t),
                                                disabled: h,
                                                size: "sm",
                                            }),
                                        ),
                                    }),
                            }),
                        p &&
                            (0, r.jsx)(l.Z, {
                                shouldShow: h,
                                text: m,
                                "aria-label": m.toString(),
                                children: (e) =>
                                    (0, r.jsx)("div", {
                                        className: C.unappliedGuildBoostSlotCta,
                                        children: (0, r.jsx)(
                                            c.Avr,
                                            D(R({}, e), {
                                                variant: "primary",
                                                text: A.intl.string(A.t["2glQNp"]),
                                                onClick: () => o(t),
                                                disabled: h,
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
                _.default,
                D(R({}, t), {
                    guildBoostSlots: [e],
                    locationSection: T.jXE.SETTINGS_PREMIUM,
                }),
            ),
    );
}
function L(e) {
    (0, u.ZDy)(async () => (t) => (0, r.jsx)(p.default, D(R({}, t), { guildBoostSlot: e })));
}
function M(e) {
    (0, u.ZDy)(async () => (t) => (0, r.jsx)(h.default, D(R({}, t), { guildBoostSlotId: e.id })));
}
let k = function (e) {
    let t,
        n,
        a,
        { guildBoostSlots: c } = e,
        _ = (0, s.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
        p = (null == _ ? void 0 : _.isPausedOrPausePending) === !0,
        { fractionalState: h } = (0, f.Z)(),
        v = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        I = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        T = h === S.a$.FP_SUB_PAUSED,
        N = p && !T,
        {
            appliedGuildBoostSlots: P,
            unappliedGuildBoostSlots: k,
            numActiveGuildBoostSlots: j,
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
        B = null != _ ? y.ZP.getNumIncludedPremiumGuildSubscriptionSlots(_.planId) : 0,
        Z = Math.max(0, B - P.length),
        F = j > B,
        V = B === c.length,
        H = V ? Z : 1,
        Y = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < H; t++)
                e.push(
                    (0, r.jsx)(
                        O.Z,
                        {
                            className: C.headerBoostGem,
                            useReducedMotion: v,
                        },
                        t,
                    ),
                );
            return e;
        }, [H, v]),
        W = i.useMemo(() => k.find((e) => e.isAvailable()), [k]);
    if (0 === k.length) return null;
    let K = k.length;
    if (
        ((t = V
            ? A.intl.formatToPlainString(G ? A.t["3DW6Dc"] : A.t["/u15Qc"], { numUnappliedGuildBoostSlots: K })
            : A.intl.formatToPlainString(G ? A.t["3DW6Dc"] : A.t.BPadnO, { numUnappliedGuildBoostSlots: K })),
        y.ZP.isPremium(I))
    ) {
        let e = (e, t) =>
            (0, r.jsx)(
                u.P3F,
                {
                    className: C.headerLearnMoreLink,
                    tag: "span",
                    onClick: () => {
                        (0, m.z)();
                    },
                    children: e,
                },
                t,
            );
        n = G
            ? A.intl.format(A.t.omcpSE, { learnMoreHook: e })
            : A.intl.format(A.t["5mAkVi"], {
                  numUnappliedGuildBoostSlots: K,
                  learnMoreHook: e,
              });
    } else
        n = G
            ? A.intl.string(A.t["8pcUZi"])
            : A.intl.formatToPlainString(A.t.Kaw82o, { numUnappliedGuildBoostSlots: K });
    return (
        (a = p && h === S.a$.NONE ? A.intl.string(A.t.mOWsF1) : A.intl.string(A.t.xr4m5B)),
        (0, r.jsx)("div", {
            className: C.wrapper,
            children: (0, r.jsxs)("div", {
                className: o()(C.content, [C.headerWithoutSpecialHeader]),
                children: [
                    (0, r.jsxs)("div", {
                        className: C.header,
                        children: [
                            (0, r.jsxs)("div", {
                                className: C.headerContentPrimary,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: C.headerBoostGems,
                                        children: Y,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: C.__invalid_headerCopy,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: C.headerHeading,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                className: C.__invalid_headerSubheading,
                                                color: "text-primary",
                                                variant: "text-sm/normal",
                                                children: n,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: C.headerContentSecondary,
                                children: (0, r.jsx)(l.Z, {
                                    shouldShow: null == W || N,
                                    text: a,
                                    "aria-label": a.toString(),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            u.Button,
                                            D(
                                                R(
                                                    {
                                                        variant: "primary",
                                                        text: A.intl.string(A.t.BMx1iy),
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
                            className: C.unappliedBoostSlots,
                            children: k.map((e) =>
                                (0, r.jsx)(
                                    w,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: F,
                                        onCancel: L,
                                        onUncancel: M,
                                        premiumSubscription: _,
                                        useReducedMotion: v,
                                        fractionalState: h,
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
