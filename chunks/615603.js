n.d(t, { Z: () => w }), n(539854), n(314940);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(278074),
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
    _ = n(594174),
    x = n(78839),
    E = n(267642),
    j = n(63063),
    C = n(74538),
    O = n(283029),
    S = n(357956),
    v = n(275909),
    T = n(981631),
    I = n(474936),
    N = n(388032),
    y = n(504185);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
function R(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: s, onUncancel: l, premiumSubscription: a, useReducedMotion: o, boostManagementDisabledFromFractionalPremium: d } = e,
        u = r.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        g = (0, E.tl)(t),
        p = (null == a ? void 0 : a.isPaused) === !0 || d,
        h = d ? N.intl.format(N.t.hshta2, { helpCenterLink: j.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : N.intl.string(N.t.mOWsFx);
    return (0, i.jsxs)(
        'li',
        {
            className: y.unappliedGuildBoostSlot,
            children: [
                (0, i.jsxs)('div', {
                    className: y.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, i.jsx)(v.Z, {
                            className: y.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: g,
                            useReducedMotion: o
                        }),
                        g && null != a
                            ? (0, i.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: N.intl.format(N.t.Z4ULRE, { date: a.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != u
                              ? (0, i.jsx)(S.Z, { cooldown: u.getTime() })
                              : (0, i.jsx)(c.Text, {
                                    className: y.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: N.intl.string(N.t['2mcaf3'])
                                })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: y.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !g &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: p,
                                text: h,
                                'aria-label': h.toString(),
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.zxk,
                                        P(A({}, e), {
                                            className: y.unappliedGuildBoostSlotCta,
                                            color: c.zxk.Colors.PRIMARY,
                                            look: c.zxk.Looks.LINK,
                                            onClick: () => s(t),
                                            size: c.zxk.Sizes.NONE,
                                            disabled: p,
                                            children: N.intl.string(N.t.twFU3d)
                                        })
                                    )
                            }),
                        g &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: p,
                                text: h,
                                'aria-label': h.toString(),
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.zxk,
                                        P(A({}, e), {
                                            className: y.unappliedGuildBoostSlotCta,
                                            color: c.zxk.Colors.PRIMARY,
                                            look: c.zxk.Looks.LINK,
                                            onClick: () => l(t),
                                            size: c.zxk.Sizes.NONE,
                                            disabled: p,
                                            children: N.intl.string(N.t['2glQNj'])
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
    (0, c.ZDy)(async () => (t) => (0, i.jsx)(p.default, P(A({}, t), { guildBoostSlot: e })));
}
function Z(e) {
    (0, c.ZDy)(async () => (t) => (0, i.jsx)(h.default, P(A({}, t), { guildBoostSlotId: e.id })));
}
let w = function (e) {
    let t,
        n,
        { guildBoostSlots: s } = e,
        p = (0, o.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        h = (null == p ? void 0 : p.isPausedOrPausePending) === !0,
        { fractionalState: S } = (0, u.Z)(),
        v = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        k = S === I.a$.FP_SUB_PAUSED,
        L = (0, b.y)('guild_boost_settings_unapplied', w, S),
        B = h && !k,
        {
            appliedGuildBoostSlots: M,
            unappliedGuildBoostSlots: U,
            numActiveGuildBoostSlots: V,
            hasCooldownBoosts: G,
            allGuildBoostsAreOnCooldown: F
        } = r.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                r = !0;
            return (
                s.forEach((s) => {
                    !(0, E.tl)(s) && n++, s.isOnCooldown() ? (i = !0) : (r = !1), null != s.premiumGuildSubscription ? e.push(s) : t.push(s);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: i,
                    allGuildBoostsAreOnCooldown: r
                }
            );
        }, [s]),
        H = null != p ? C.ZP.getNumIncludedPremiumGuildSubscriptionSlots(p.planId) : 0,
        z = Math.max(0, H - M.length),
        W = V > H,
        Y = H === s.length,
        K = Y ? z : 1,
        q = r.useMemo(() => {
            let e = [];
            for (let t = 0; t < K; t++)
                e.push(
                    (0, i.jsx)(
                        O.Z,
                        {
                            className: y.headerBoostGem,
                            useReducedMotion: v
                        },
                        t
                    )
                );
            return e;
        }, [K, v]),
        X = r.useMemo(() => U.find((e) => e.isAvailable()), [U]);
    if (0 === U.length) return null;
    let Q = U.length;
    if (((t = Y ? N.intl.formatToPlainString(F ? N.t['3DW6DQ'] : N.t['/u15QU'], { numUnappliedGuildBoostSlots: Q }) : N.intl.formatToPlainString(F ? N.t['3DW6DQ'] : N.t.BPadnJ, { numUnappliedGuildBoostSlots: Q })), C.ZP.isPremium(w))) {
        let e = (e, t) =>
            (0, i.jsx)(
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
        n = F
            ? N.intl.format(N.t.omcpSE, { learnMoreHook: e })
            : N.intl.format(N.t['5mAkVl'], {
                  numUnappliedGuildBoostSlots: Q,
                  learnMoreHook: e
              });
    } else n = F ? N.intl.string(N.t['8pcUZm']) : N.intl.formatToPlainString(N.t.Kaw82t, { numUnappliedGuildBoostSlots: Q });
    let J = (0, a.EQ)({
        subscriptionIsPausedOrPausePending: h,
        fractionalPremiumBlocksBoosting: L
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                fractionalPremiumBlocksBoosting: !0
            },
            () => N.intl.format(N.t['4RgA6O'], { helpCenterLink: j.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        )
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                fractionalPremiumBlocksBoosting: !1
            },
            () => N.intl.string(N.t.mOWsFx)
        )
        .otherwise(() => N.intl.string(N.t.xr4m5O));
    return (0, i.jsx)('div', {
        className: y.wrapper,
        children: (0, i.jsxs)('div', {
            className: l()(y.content, [y.headerWithoutSpecialHeader]),
            children: [
                (0, i.jsxs)('div', {
                    className: y.header,
                    children: [
                        (0, i.jsxs)('div', {
                            className: y.headerContentPrimary,
                            children: [
                                (0, i.jsx)('div', {
                                    className: y.headerBoostGems,
                                    children: q
                                }),
                                (0, i.jsxs)('div', {
                                    className: y.__invalid_headerCopy,
                                    children: [
                                        (0, i.jsx)(c.X6q, {
                                            className: y.headerHeading,
                                            variant: 'heading-lg/bold',
                                            children: t
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            className: y.__invalid_headerSubheading,
                                            color: 'text-primary',
                                            variant: 'text-sm/normal',
                                            children: n
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: y.headerContentSecondary,
                            children: (0, i.jsx)(m.Z, {
                                shouldShow: null == X || B,
                                text: J,
                                'aria-label': J.toString(),
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.zxk,
                                        P(A({}, e), {
                                            disabled: null == X || B,
                                            onClick:
                                                null != X
                                                    ? () => {
                                                          (0, c.ZDy)(
                                                              async () => (e) =>
                                                                  (0, i.jsx)(
                                                                      g.default,
                                                                      P(A({}, e), {
                                                                          guildBoostSlots: [X],
                                                                          locationSection: T.jXE.SETTINGS_PREMIUM
                                                                      })
                                                                  )
                                                          );
                                                      }
                                                    : void 0,
                                            children: N.intl.string(N.t.BMx1i4)
                                        })
                                    )
                            })
                        })
                    ]
                }),
                (!Y || G) &&
                    (0, i.jsx)('ul', {
                        className: y.unappliedBoostSlots,
                        children: U.map((e) =>
                            (0, i.jsx)(
                                R,
                                {
                                    guildBoostSlot: e,
                                    isCancellable: W,
                                    onCancel: D,
                                    onUncancel: Z,
                                    premiumSubscription: p,
                                    useReducedMotion: v,
                                    boostManagementDisabledFromFractionalPremium: L
                                },
                                e.id
                            )
                        )
                    })
            ]
        })
    });
};
