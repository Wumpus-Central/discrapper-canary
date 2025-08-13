n.d(t, { Z: () => D }), n(539854);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(607070),
    u = n(975298),
    m = n(125529),
    p = n(760558),
    g = n(401786),
    h = n(450468),
    f = n(98278),
    b = n(594174),
    x = n(78839),
    _ = n(267642),
    j = n(74538),
    E = n(283029),
    C = n(357956),
    O = n(275909),
    v = n(981631),
    S = n(474936),
    T = n(388032),
    I = n(867776);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let {
            guildBoostSlot: t,
            isCancellable: n,
            onCancel: s,
            onUncancel: a,
            premiumSubscription: l,
            useReducedMotion: d,
            fractionalState: u,
        } = e,
        p = r.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        g = (0, _.tl)(t),
        h = (null == l ? void 0 : l.isPaused) === !0 && u === S.a$.NONE,
        f = T.intl.string(T.t.mOWsFx);
    return (0, i.jsxs)(
        "li",
        {
            className: I.unappliedGuildBoostSlot,
            children: [
                (0, i.jsxs)("div", {
                    className: I.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, i.jsx)(O.Z, {
                            className: I.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: g,
                            useReducedMotion: d,
                        }),
                        g && null != l
                            ? (0, i.jsx)(c.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: T.intl.format(T.t.Z4ULRE, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != p
                              ? (0, i.jsx)(C.Z, { cooldown: p.getTime() })
                              : (0, i.jsx)(c.Text, {
                                    className: I.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: T.intl.string(T.t["2mcaf3"]),
                                }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: I.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !g &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: h,
                                text: f,
                                "aria-label": f.toString(),
                                children: (e) =>
                                    (0, i.jsx)(
                                        o.zx,
                                        y(N({}, e), {
                                            className: I.unappliedGuildBoostSlotCta,
                                            color: o.zx.Colors.PRIMARY,
                                            look: o.zx.Looks.LINK,
                                            onClick: () => s(t),
                                            size: o.zx.Sizes.NONE,
                                            disabled: h,
                                            children: T.intl.string(T.t.twFU3d),
                                        }),
                                    ),
                            }),
                        g &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: h,
                                text: f,
                                "aria-label": f.toString(),
                                children: (e) =>
                                    (0, i.jsx)(
                                        o.zx,
                                        y(N({}, e), {
                                            className: I.unappliedGuildBoostSlotCta,
                                            color: o.zx.Colors.PRIMARY,
                                            look: o.zx.Looks.LINK,
                                            onClick: () => a(t),
                                            size: o.zx.Sizes.NONE,
                                            disabled: h,
                                            children: T.intl.string(T.t["2glQNj"]),
                                        }),
                                    ),
                            }),
                    ],
                }),
            ],
        },
        t.id,
    );
}
function P(e) {
    (0, c.ZDy)(async () => (t) => (0, i.jsx)(g.default, y(N({}, t), { guildBoostSlot: e })));
}
function R(e) {
    (0, c.ZDy)(async () => (t) => (0, i.jsx)(h.default, y(N({}, t), { guildBoostSlotId: e.id })));
}
let D = function (e) {
    let t,
        n,
        s,
        { guildBoostSlots: o } = e,
        g = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        h = (null == g ? void 0 : g.isPausedOrPausePending) === !0,
        { fractionalState: C } = (0, u.Z)(),
        O = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        D = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        Z = C === S.a$.FP_SUB_PAUSED,
        w = h && !Z,
        {
            appliedGuildBoostSlots: k,
            unappliedGuildBoostSlots: L,
            numActiveGuildBoostSlots: M,
            hasCooldownBoosts: B,
            allGuildBoostsAreOnCooldown: U,
        } = r.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                r = !0;
            return (
                o.forEach((s) => {
                    !(0, _.tl)(s) && n++,
                        s.isOnCooldown() ? (i = !0) : (r = !1),
                        null != s.premiumGuildSubscription ? e.push(s) : t.push(s);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: i,
                    allGuildBoostsAreOnCooldown: r,
                }
            );
        }, [o]),
        V = null != g ? j.ZP.getNumIncludedPremiumGuildSubscriptionSlots(g.planId) : 0,
        G = Math.max(0, V - k.length),
        F = M > V,
        H = V === o.length,
        z = H ? G : 1,
        W = r.useMemo(() => {
            let e = [];
            for (let t = 0; t < z; t++)
                e.push(
                    (0, i.jsx)(
                        E.Z,
                        {
                            className: I.headerBoostGem,
                            useReducedMotion: O,
                        },
                        t,
                    ),
                );
            return e;
        }, [z, O]),
        Y = r.useMemo(() => L.find((e) => e.isAvailable()), [L]);
    if (0 === L.length) return null;
    let K = L.length;
    if (
        ((t = H
            ? T.intl.formatToPlainString(U ? T.t["3DW6DQ"] : T.t["/u15QU"], { numUnappliedGuildBoostSlots: K })
            : T.intl.formatToPlainString(U ? T.t["3DW6DQ"] : T.t.BPadnJ, { numUnappliedGuildBoostSlots: K })),
        j.ZP.isPremium(D))
    ) {
        let e = (e, t) =>
            (0, i.jsx)(
                c.P3F,
                {
                    className: I.headerLearnMoreLink,
                    tag: "span",
                    onClick: () => {
                        (0, f.z)();
                    },
                    children: e,
                },
                t,
            );
        n = U
            ? T.intl.format(T.t.omcpSE, { learnMoreHook: e })
            : T.intl.format(T.t["5mAkVl"], {
                  numUnappliedGuildBoostSlots: K,
                  learnMoreHook: e,
              });
    } else
        n = U
            ? T.intl.string(T.t["8pcUZm"])
            : T.intl.formatToPlainString(T.t.Kaw82t, { numUnappliedGuildBoostSlots: K });
    return (
        (s = h && C === S.a$.NONE ? T.intl.string(T.t.mOWsFx) : T.intl.string(T.t.xr4m5O)),
        (0, i.jsx)("div", {
            className: I.wrapper,
            children: (0, i.jsxs)("div", {
                className: a()(I.content, [I.headerWithoutSpecialHeader]),
                children: [
                    (0, i.jsxs)("div", {
                        className: I.header,
                        children: [
                            (0, i.jsxs)("div", {
                                className: I.headerContentPrimary,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: I.headerBoostGems,
                                        children: W,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: I.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(c.X6q, {
                                                className: I.headerHeading,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                className: I.__invalid_headerSubheading,
                                                color: "text-primary",
                                                variant: "text-sm/normal",
                                                children: n,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: I.headerContentSecondary,
                                children: (0, i.jsx)(m.Z, {
                                    shouldShow: null == Y || w,
                                    text: s,
                                    "aria-label": s.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(
                                            c.zxk,
                                            y(
                                                N(
                                                    {
                                                        variant: "primary",
                                                        text: T.intl.string(T.t.BMx1i4),
                                                    },
                                                    e,
                                                ),
                                                {
                                                    disabled: null == Y || w,
                                                    onClick:
                                                        null != Y
                                                            ? () => {
                                                                  (0, c.ZDy)(
                                                                      async () => (e) =>
                                                                          (0, i.jsx)(
                                                                              p.default,
                                                                              y(N({}, e), {
                                                                                  guildBoostSlots: [Y],
                                                                                  locationSection:
                                                                                      v.jXE.SETTINGS_PREMIUM,
                                                                              }),
                                                                          ),
                                                                  );
                                                              }
                                                            : void 0,
                                                },
                                            ),
                                        ),
                                }),
                            }),
                        ],
                    }),
                    (!H || B) &&
                        (0, i.jsx)("ul", {
                            className: I.unappliedBoostSlots,
                            children: L.map((e) =>
                                (0, i.jsx)(
                                    A,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: F,
                                        onCancel: P,
                                        onUncancel: R,
                                        premiumSubscription: g,
                                        useReducedMotion: O,
                                        fractionalState: C,
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
