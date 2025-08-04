(n.d(t, { Z: () => k }), n(539854), n(314940));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(278074),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(607070),
    m = n(975298),
    p = n(125529),
    g = n(760558),
    h = n(401786),
    f = n(450468),
    b = n(98278),
    x = n(124570),
    _ = n(594174),
    j = n(78839),
    C = n(267642),
    E = n(63063),
    O = n(74538),
    v = n(283029),
    S = n(357956),
    T = n(275909),
    N = n(981631),
    I = n(474936),
    y = n(388032),
    A = n(504185);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function R(e, t) {
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
function D(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: s, onUncancel: a, premiumSubscription: l, useReducedMotion: o, boostManagementDisabledFromFractionalPremium: u } = e,
        m = r.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        g = (0, C.tl)(t),
        h = (null == l ? void 0 : l.isPaused) === !0 || u,
        f = u ? y.intl.format(y.t.hshta2, { helpCenterLink: E.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : y.intl.string(y.t.mOWsFx);
    return (0, i.jsxs)(
        'li',
        {
            className: A.unappliedGuildBoostSlot,
            children: [
                (0, i.jsxs)('div', {
                    className: A.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, i.jsx)(T.Z, {
                            className: A.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: g,
                            useReducedMotion: o
                        }),
                        g && null != l
                            ? (0, i.jsx)(d.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: y.intl.format(y.t.Z4ULRE, { date: l.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != m
                              ? (0, i.jsx)(S.Z, { cooldown: m.getTime() })
                              : (0, i.jsx)(d.Text, {
                                    className: A.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: y.intl.string(y.t['2mcaf3'])
                                })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: A.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !g &&
                            (0, i.jsx)(p.Z, {
                                shouldShow: h,
                                text: f,
                                'aria-label': f.toString(),
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.zx,
                                        R(P({}, e), {
                                            className: A.unappliedGuildBoostSlotCta,
                                            color: c.zx.Colors.PRIMARY,
                                            look: c.zx.Looks.LINK,
                                            onClick: () => s(t),
                                            size: c.zx.Sizes.NONE,
                                            disabled: h,
                                            children: y.intl.string(y.t.twFU3d)
                                        })
                                    )
                            }),
                        g &&
                            (0, i.jsx)(p.Z, {
                                shouldShow: h,
                                text: f,
                                'aria-label': f.toString(),
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.zx,
                                        R(P({}, e), {
                                            className: A.unappliedGuildBoostSlotCta,
                                            color: c.zx.Colors.PRIMARY,
                                            look: c.zx.Looks.LINK,
                                            onClick: () => a(t),
                                            size: c.zx.Sizes.NONE,
                                            disabled: h,
                                            children: y.intl.string(y.t['2glQNj'])
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
function Z(e) {
    (0, d.ZDy)(async () => (t) => (0, i.jsx)(h.default, R(P({}, t), { guildBoostSlot: e })));
}
function w(e) {
    (0, d.ZDy)(async () => (t) => (0, i.jsx)(f.default, R(P({}, t), { guildBoostSlotId: e.id })));
}
let k = function (e) {
    let t,
        n,
        { guildBoostSlots: s } = e,
        c = (0, o.e7)([j.Z], () => j.Z.getPremiumTypeSubscription()),
        h = (null == c ? void 0 : c.isPausedOrPausePending) === !0,
        { fractionalState: f } = (0, m.Z)(),
        S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        T = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        k = f === I.a$.FP_SUB_PAUSED,
        L = (0, x.y)('guild_boost_settings_unapplied', T, f),
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
                    (!(0, C.tl)(s) && n++, s.isOnCooldown() ? (i = !0) : (r = !1), null != s.premiumGuildSubscription ? e.push(s) : t.push(s));
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
        H = null != c ? O.ZP.getNumIncludedPremiumGuildSubscriptionSlots(c.planId) : 0,
        W = Math.max(0, H - M.length),
        z = V > H,
        Y = H === s.length,
        K = Y ? W : 1,
        q = r.useMemo(() => {
            let e = [];
            for (let t = 0; t < K; t++)
                e.push(
                    (0, i.jsx)(
                        v.Z,
                        {
                            className: A.headerBoostGem,
                            useReducedMotion: S
                        },
                        t
                    )
                );
            return e;
        }, [K, S]),
        X = r.useMemo(() => U.find((e) => e.isAvailable()), [U]);
    if (0 === U.length) return null;
    let J = U.length;
    if (((t = Y ? y.intl.formatToPlainString(F ? y.t['3DW6DQ'] : y.t['/u15QU'], { numUnappliedGuildBoostSlots: J }) : y.intl.formatToPlainString(F ? y.t['3DW6DQ'] : y.t.BPadnJ, { numUnappliedGuildBoostSlots: J })), O.ZP.isPremium(T))) {
        let e = (e, t) =>
            (0, i.jsx)(
                d.P3F,
                {
                    className: A.headerLearnMoreLink,
                    tag: 'span',
                    onClick: () => {
                        (0, b.z)();
                    },
                    children: e
                },
                t
            );
        n = F
            ? y.intl.format(y.t.omcpSE, { learnMoreHook: e })
            : y.intl.format(y.t['5mAkVl'], {
                  numUnappliedGuildBoostSlots: J,
                  learnMoreHook: e
              });
    } else n = F ? y.intl.string(y.t['8pcUZm']) : y.intl.formatToPlainString(y.t.Kaw82t, { numUnappliedGuildBoostSlots: J });
    let Q = (0, l.EQ)({
        subscriptionIsPausedOrPausePending: h,
        fractionalPremiumBlocksBoosting: L
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                fractionalPremiumBlocksBoosting: !0
            },
            () => y.intl.format(y.t['4RgA6O'], { helpCenterLink: E.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        )
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                fractionalPremiumBlocksBoosting: !1
            },
            () => y.intl.string(y.t.mOWsFx)
        )
        .otherwise(() => y.intl.string(y.t.xr4m5O));
    return (0, i.jsx)('div', {
        className: A.wrapper,
        children: (0, i.jsxs)('div', {
            className: a()(A.content, [A.headerWithoutSpecialHeader]),
            children: [
                (0, i.jsxs)('div', {
                    className: A.header,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.headerContentPrimary,
                            children: [
                                (0, i.jsx)('div', {
                                    className: A.headerBoostGems,
                                    children: q
                                }),
                                (0, i.jsxs)('div', {
                                    className: A.__invalid_headerCopy,
                                    children: [
                                        (0, i.jsx)(d.X6q, {
                                            className: A.headerHeading,
                                            variant: 'heading-lg/bold',
                                            children: t
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            className: A.__invalid_headerSubheading,
                                            color: 'text-primary',
                                            variant: 'text-sm/normal',
                                            children: n
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: A.headerContentSecondary,
                            children: (0, i.jsx)(p.Z, {
                                shouldShow: null == X || B,
                                text: Q,
                                'aria-label': Q.toString(),
                                children: (e) =>
                                    (0, i.jsx)(
                                        d.zxk,
                                        R(
                                            P(
                                                {
                                                    variant: 'primary',
                                                    text: y.intl.string(y.t.BMx1i4)
                                                },
                                                e
                                            ),
                                            {
                                                disabled: null == X || B,
                                                onClick:
                                                    null != X
                                                        ? () => {
                                                              (0, d.ZDy)(
                                                                  async () => (e) =>
                                                                      (0, i.jsx)(
                                                                          g.default,
                                                                          R(P({}, e), {
                                                                              guildBoostSlots: [X],
                                                                              locationSection: N.jXE.SETTINGS_PREMIUM
                                                                          })
                                                                      )
                                                              );
                                                          }
                                                        : void 0
                                            }
                                        )
                                    )
                            })
                        })
                    ]
                }),
                (!Y || G) &&
                    (0, i.jsx)('ul', {
                        className: A.unappliedBoostSlots,
                        children: U.map((e) =>
                            (0, i.jsx)(
                                D,
                                {
                                    guildBoostSlot: e,
                                    isCancellable: z,
                                    onCancel: Z,
                                    onUncancel: w,
                                    premiumSubscription: c,
                                    useReducedMotion: S,
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
