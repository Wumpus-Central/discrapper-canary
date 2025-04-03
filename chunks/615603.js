n.d(t, { Z: () => w }), n(653041), n(627341);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(278074),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(975298),
    m = n(125529),
    g = n(760558),
    p = n(401786),
    h = n(450468),
    f = n(98278),
    b = n(124570),
    N = n(594174),
    x = n(78839),
    _ = n(267642),
    E = n(63063),
    j = n(74538),
    O = n(283029),
    C = n(357956),
    S = n(275909),
    v = n(981631),
    T = n(474936),
    I = n(388032),
    y = n(504185);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: s, onUncancel: a, premiumSubscription: l, useReducedMotion: o, boostManagementDisabledFromFractionalPremium: d } = e,
        u = i.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        g = (0, _.tl)(t),
        p = (null == l ? void 0 : l.isPaused) === !0 || d,
        h = d ? I.NW.format(I.t.hshta2, { helpCenterLink: E.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : I.NW.string(I.t.mOWsFx);
    return (0, r.jsxs)(
        'li',
        {
            className: y.unappliedGuildBoostSlot,
            children: [
                (0, r.jsxs)('div', {
                    className: y.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, r.jsx)(S.Z, {
                            className: y.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: g,
                            useReducedMotion: o
                        }),
                        g && null != l
                            ? (0, r.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: I.NW.format(I.t.Z4ULRE, { date: l.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != u
                              ? (0, r.jsx)(C.Z, { cooldown: u.getTime() })
                              : (0, r.jsx)(c.Text, {
                                    className: y.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: I.NW.string(I.t['2mcaf3'])
                                })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: y.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !g &&
                            (0, r.jsx)(m.Z, {
                                shouldShow: p,
                                text: h,
                                'aria-label': h.toString(),
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.zxk,
                                        P(A({}, e), {
                                            className: y.unappliedGuildBoostSlotCta,
                                            color: c.zxk.Colors.PRIMARY,
                                            look: c.zxk.Looks.LINK,
                                            onClick: () => s(t),
                                            size: c.zxk.Sizes.NONE,
                                            disabled: p,
                                            children: I.NW.string(I.t.twFU3d)
                                        })
                                    )
                            }),
                        g &&
                            (0, r.jsx)(m.Z, {
                                shouldShow: p,
                                text: h,
                                'aria-label': h.toString(),
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.zxk,
                                        P(A({}, e), {
                                            className: y.unappliedGuildBoostSlotCta,
                                            color: c.zxk.Colors.PRIMARY,
                                            look: c.zxk.Looks.LINK,
                                            onClick: () => a(t),
                                            size: c.zxk.Sizes.NONE,
                                            disabled: p,
                                            children: I.NW.string(I.t['2glQNj'])
                                        })
                                    )
                            })
                    ]
                })
            ]
        },
        t.id
    );
}
function D(e) {
    (0, c.ZDy)(async () => (t) => (0, r.jsx)(p.default, P(A({}, t), { guildBoostSlot: e })));
}
function Z(e) {
    (0, c.ZDy)(async () => (t) => (0, r.jsx)(h.default, P(A({}, t), { guildBoostSlotId: e.id })));
}
let w = function (e) {
    let t,
        n,
        { guildBoostSlots: s } = e,
        p = (0, o.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        h = (null == p ? void 0 : p.isPausedOrPausePending) === !0,
        { fractionalState: C } = (0, u.Z)(),
        S = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, o.e7)([N.default], () => N.default.getCurrentUser()),
        k = C === T.a$.FP_SUB_PAUSED,
        W = (0, b.y)('guild_boost_settings_unapplied', w, C),
        L = h && !k,
        {
            appliedGuildBoostSlots: B,
            unappliedGuildBoostSlots: M,
            numActiveGuildBoostSlots: U,
            hasCooldownBoosts: V,
            allGuildBoostsAreOnCooldown: G
        } = i.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                r = !1,
                i = !0;
            return (
                s.forEach((s) => {
                    !(0, _.tl)(s) && n++, s.isOnCooldown() ? (r = !0) : (i = !1), null != s.premiumGuildSubscription ? e.push(s) : t.push(s);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: r,
                    allGuildBoostsAreOnCooldown: i
                }
            );
        }, [s]),
        F = null != p ? j.ZP.getNumIncludedPremiumGuildSubscriptionSlots(p.planId) : 0,
        H = Math.max(0, F - B.length),
        z = U > F,
        Y = F === s.length,
        K = Y ? H : 1,
        q = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < K; t++)
                e.push(
                    (0, r.jsx)(
                        O.Z,
                        {
                            className: y.headerBoostGem,
                            useReducedMotion: S
                        },
                        t
                    )
                );
            return e;
        }, [K, S]),
        X = i.useMemo(() => M.find((e) => e.isAvailable()), [M]);
    if (0 === M.length) return null;
    let J = M.length;
    if (((t = Y ? I.NW.formatToPlainString(G ? I.t['3DW6DQ'] : I.t['/u15QU'], { numUnappliedGuildBoostSlots: J }) : I.NW.formatToPlainString(G ? I.t['3DW6DQ'] : I.t.BPadnJ, { numUnappliedGuildBoostSlots: J })), j.ZP.isPremium(w))) {
        let e = (e, t) =>
            (0, r.jsx)(
                c.P3F,
                {
                    className: y.headerLearnMoreLink,
                    tag: 'span',
                    onClick: () => {
                        (0, f.z)();
                    },
                    children: e
                },
                t
            );
        n = G
            ? I.NW.format(I.t.omcpSE, { learnMoreHook: e })
            : I.NW.format(I.t['5mAkVl'], {
                  numUnappliedGuildBoostSlots: J,
                  learnMoreHook: e
              });
    } else n = G ? I.NW.string(I.t['8pcUZm']) : I.NW.formatToPlainString(I.t.Kaw82t, { numUnappliedGuildBoostSlots: J });
    let Q = (0, l.EQ)({
        subscriptionIsPausedOrPausePending: h,
        fractionalPremiumBlocksBoosting: W
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                fractionalPremiumBlocksBoosting: !0
            },
            () => I.NW.format(I.t['4RgA6O'], { helpCenterLink: E.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        )
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                fractionalPremiumBlocksBoosting: !1
            },
            () => I.NW.string(I.t.mOWsFx)
        )
        .otherwise(() => I.NW.string(I.t.xr4m5O));
    return (0, r.jsx)('div', {
        className: y.wrapper,
        children: (0, r.jsxs)('div', {
            className: a()(y.content, [y.headerWithoutSpecialHeader]),
            children: [
                (0, r.jsxs)('div', {
                    className: y.header,
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.headerContentPrimary,
                            children: [
                                (0, r.jsx)('div', {
                                    className: y.headerBoostGems,
                                    children: q
                                }),
                                (0, r.jsxs)('div', {
                                    className: y.__invalid_headerCopy,
                                    children: [
                                        (0, r.jsx)(c.X6q, {
                                            className: y.headerHeading,
                                            variant: 'heading-lg/bold',
                                            children: t
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            className: y.__invalid_headerSubheading,
                                            color: 'text-primary',
                                            variant: 'text-sm/normal',
                                            children: n
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: y.headerContentSecondary,
                            children: (0, r.jsx)(m.Z, {
                                shouldShow: null == X || L,
                                text: Q,
                                'aria-label': Q.toString(),
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.zxk,
                                        P(A({}, e), {
                                            disabled: null == X || L,
                                            onClick:
                                                null != X
                                                    ? () => {
                                                          (0, c.ZDy)(
                                                              async () => (e) =>
                                                                  (0, r.jsx)(
                                                                      g.default,
                                                                      P(A({}, e), {
                                                                          guildBoostSlots: [X],
                                                                          locationSection: v.jXE.SETTINGS_PREMIUM
                                                                      })
                                                                  )
                                                          );
                                                      }
                                                    : void 0,
                                            children: I.NW.string(I.t.BMx1i4)
                                        })
                                    )
                            })
                        })
                    ]
                }),
                (!Y || V) &&
                    (0, r.jsx)('ul', {
                        className: y.unappliedBoostSlots,
                        children: M.map((e) =>
                            (0, r.jsx)(
                                R,
                                {
                                    guildBoostSlot: e,
                                    isCancellable: z,
                                    onCancel: D,
                                    onUncancel: Z,
                                    premiumSubscription: p,
                                    useReducedMotion: S,
                                    boostManagementDisabledFromFractionalPremium: W
                                },
                                e.id
                            )
                        )
                    })
            ]
        })
    });
};
