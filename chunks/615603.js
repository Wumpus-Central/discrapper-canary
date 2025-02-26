n.d(t, { Z: () => Z }), n(653041), n(627341);
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
    b = n(594174),
    N = n(78839),
    x = n(267642),
    _ = n(63063),
    E = n(74538),
    j = n(283029),
    C = n(357956),
    O = n(275909),
    v = n(981631),
    S = n(474936),
    T = n(388032),
    I = n(623644);
function y(e) {
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
function A(e, t) {
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
function P(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: s, onUncancel: a, premiumSubscription: l, useReducedMotion: o, fractionalPremiumState: d } = e,
        u = i.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        g = (0, x.tl)(t),
        p = (null == l ? void 0 : l.isPaused) === !0 || d !== S.a$.NONE,
        h = d !== S.a$.NONE ? T.NW.format(T.t.hshta2, { helpCenterLink: _.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : T.NW.string(T.t.mOWsFx);
    return (0, r.jsxs)(
        'li',
        {
            className: I.unappliedGuildBoostSlot,
            children: [
                (0, r.jsxs)('div', {
                    className: I.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, r.jsx)(O.Z, {
                            className: I.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: g,
                            useReducedMotion: o
                        }),
                        g && null != l
                            ? (0, r.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: T.NW.format(T.t.Z4ULRE, { date: l.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != u
                              ? (0, r.jsx)(C.Z, { cooldown: u.getTime() })
                              : (0, r.jsx)(c.Text, {
                                    className: I.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: T.NW.string(T.t['2mcaf3'])
                                })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: I.unappliedGuildBoostSlotContentSecondary,
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
                                        A(y({}, e), {
                                            className: I.unappliedGuildBoostSlotCta,
                                            color: c.zxk.Colors.PRIMARY,
                                            look: c.zxk.Looks.LINK,
                                            onClick: () => s(t),
                                            size: c.zxk.Sizes.NONE,
                                            disabled: p,
                                            children: T.NW.string(T.t.twFU3d)
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
                                        A(y({}, e), {
                                            className: I.unappliedGuildBoostSlotCta,
                                            color: c.zxk.Colors.PRIMARY,
                                            look: c.zxk.Looks.LINK,
                                            onClick: () => a(t),
                                            size: c.zxk.Sizes.NONE,
                                            disabled: p,
                                            children: T.NW.string(T.t['2glQNj'])
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
function R(e) {
    (0, c.ZDy)(async () => (t) => (0, r.jsx)(p.default, A(y({}, t), { guildBoostSlot: e })));
}
function D(e) {
    (0, c.ZDy)(async () => (t) => (0, r.jsx)(h.default, A(y({}, t), { guildBoostSlotId: e.id })));
}
let Z = function (e) {
    let t, n;
    let { guildBoostSlots: s, fractionalPremiumState: p } = e,
        h = (0, o.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        C = (null == h ? void 0 : h.isPausedOrPausePending) === !0,
        { fractionalState: O } = (0, u.Z)(),
        Z = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        k = O === S.a$.FP_SUB_PAUSED,
        W = O !== S.a$.NONE,
        L = C && !k,
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
                    !(0, x.tl)(s) && n++, s.isOnCooldown() ? (r = !0) : (i = !1), null != s.premiumGuildSubscription ? e.push(s) : t.push(s);
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
        F = null != h ? E.ZP.getNumIncludedPremiumGuildSubscriptionSlots(h.planId) : 0,
        H = Math.max(0, F - B.length),
        z = U > F,
        Y = F === s.length,
        K = Y ? H : 1,
        q = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < K; t++)
                e.push(
                    (0, r.jsx)(
                        j.Z,
                        {
                            className: I.headerBoostGem,
                            useReducedMotion: Z
                        },
                        t
                    )
                );
            return e;
        }, [K, Z]),
        X = i.useMemo(() => M.find((e) => e.isAvailable()), [M]);
    if (0 === M.length) return null;
    let J = M.length;
    if (((t = Y ? T.NW.formatToPlainString(G ? T.t['3DW6DQ'] : T.t['/u15QU'], { numUnappliedGuildBoostSlots: J }) : T.NW.formatToPlainString(G ? T.t['3DW6DQ'] : T.t.BPadnJ, { numUnappliedGuildBoostSlots: J })), E.ZP.isPremium(w))) {
        let e = (e, t) =>
            (0, r.jsx)(
                c.P3F,
                {
                    className: I.headerLearnMoreLink,
                    tag: 'span',
                    onClick: () => {
                        (0, f.z)();
                    },
                    children: e
                },
                t
            );
        n = G
            ? T.NW.format(T.t.omcpSE, { learnMoreHook: e })
            : T.NW.format(T.t['5mAkVl'], {
                  numUnappliedGuildBoostSlots: J,
                  learnMoreHook: e
              });
    } else n = G ? T.NW.string(T.t['8pcUZm']) : T.NW.formatToPlainString(T.t.Kaw82t, { numUnappliedGuildBoostSlots: J });
    let Q = (0, l.EQ)({
        subscriptionIsPausedOrPausePending: C,
        hasFractionPremium: W
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !0
            },
            () => T.NW.format(T.t['4RgA6O'], { helpCenterLink: _.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        )
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !1
            },
            () => T.NW.string(T.t.mOWsFx)
        )
        .otherwise(() => T.NW.string(T.t.xr4m5O));
    return (0, r.jsx)('div', {
        className: I.wrapper,
        children: (0, r.jsxs)('div', {
            className: a()(I.content, [I.headerWithoutSpecialHeader]),
            children: [
                (0, r.jsxs)('div', {
                    className: I.header,
                    children: [
                        (0, r.jsxs)('div', {
                            className: I.headerContentPrimary,
                            children: [
                                (0, r.jsx)('div', {
                                    className: I.headerBoostGems,
                                    children: q
                                }),
                                (0, r.jsxs)('div', {
                                    className: I.__invalid_headerCopy,
                                    children: [
                                        (0, r.jsx)(c.X6q, {
                                            className: I.headerHeading,
                                            variant: 'heading-lg/bold',
                                            children: t
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            className: I.__invalid_headerSubheading,
                                            color: 'text-primary',
                                            variant: 'text-sm/normal',
                                            children: n
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: I.headerContentSecondary,
                            children: (0, r.jsx)(m.Z, {
                                shouldShow: null == X || L,
                                text: Q,
                                'aria-label': Q.toString(),
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.zxk,
                                        A(y({}, e), {
                                            disabled: null == X || L,
                                            onClick:
                                                null != X
                                                    ? () => {
                                                          (0, c.ZDy)(
                                                              async () => (e) =>
                                                                  (0, r.jsx)(
                                                                      g.default,
                                                                      A(y({}, e), {
                                                                          guildBoostSlots: [X],
                                                                          locationSection: v.jXE.SETTINGS_PREMIUM
                                                                      })
                                                                  )
                                                          );
                                                      }
                                                    : void 0,
                                            children: T.NW.string(T.t.BMx1i4)
                                        })
                                    )
                            })
                        })
                    ]
                }),
                (!Y || V) &&
                    (0, r.jsx)('ul', {
                        className: I.unappliedBoostSlots,
                        children: M.map((e) =>
                            (0, r.jsx)(
                                P,
                                {
                                    guildBoostSlot: e,
                                    isCancellable: z,
                                    onCancel: R,
                                    onUncancel: D,
                                    premiumSubscription: h,
                                    useReducedMotion: Z,
                                    fractionalPremiumState: p
                                },
                                e.id
                            )
                        )
                    })
            ]
        })
    });
};
