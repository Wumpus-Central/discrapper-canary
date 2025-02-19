n.d(t, { Z: () => W }), n(653041), n(627341);
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
    g = n(158153),
    p = n(760558),
    h = n(401786),
    f = n(450468),
    N = n(98278),
    x = n(314684),
    b = n(594174),
    _ = n(78839),
    E = n(267642),
    j = n(63063),
    C = n(74538),
    O = n(283029),
    v = n(357956),
    S = n(275909),
    T = n(981631),
    I = n(474936),
    y = n(735825),
    A = n(388032),
    P = n(623644);
function R(e) {
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
function D(e, t) {
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
function Z(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: s, onUncancel: a, premiumSubscription: l, useReducedMotion: o, fractionalPremiumState: d } = e,
        u = i.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        g = (0, E.tl)(t),
        p = (null == l ? void 0 : l.isPaused) === !0 || d !== I.a$.NONE,
        h = d !== I.a$.NONE ? A.NW.format(A.t.hshta2, { helpCenterLink: j.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : A.NW.string(A.t.mOWsFx);
    return (0, r.jsxs)(
        'li',
        {
            className: P.unappliedGuildBoostSlot,
            children: [
                (0, r.jsxs)('div', {
                    className: P.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, r.jsx)(S.Z, {
                            className: P.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: g,
                            useReducedMotion: o
                        }),
                        g && null != l
                            ? (0, r.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: A.NW.format(A.t.Z4ULRE, { date: l.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != u
                              ? (0, r.jsx)(v.Z, { cooldown: u.getTime() })
                              : (0, r.jsx)(c.Text, {
                                    className: P.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: A.NW.string(A.t['2mcaf3'])
                                })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: P.unappliedGuildBoostSlotContentSecondary,
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
                                        D(R({}, e), {
                                            className: P.unappliedGuildBoostSlotCta,
                                            color: c.zxk.Colors.PRIMARY,
                                            look: c.zxk.Looks.LINK,
                                            onClick: () => s(t),
                                            size: c.zxk.Sizes.NONE,
                                            disabled: p,
                                            children: A.NW.string(A.t.twFU3d)
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
                                        D(R({}, e), {
                                            className: P.unappliedGuildBoostSlotCta,
                                            color: c.zxk.Colors.PRIMARY,
                                            look: c.zxk.Looks.LINK,
                                            onClick: () => a(t),
                                            size: c.zxk.Sizes.NONE,
                                            disabled: p,
                                            children: A.NW.string(A.t['2glQNj'])
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
function w(e) {
    (0, c.ZDy)(async () => (t) => (0, r.jsx)(h.default, D(R({}, t), { guildBoostSlot: e })));
}
function k(e) {
    (0, c.ZDy)(async () => (t) => (0, r.jsx)(f.default, D(R({}, t), { guildBoostSlotId: e.id })));
}
let W = function (e) {
    let t, n;
    let { guildBoostSlots: s, fractionalPremiumState: h } = e,
        f = (0, o.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
        v = (null == f ? void 0 : f.isPausedOrPausePending) === !0,
        { fractionalState: S } = (0, u.Z)(),
        W = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        B = (0, x.Vp)(),
        M = S === I.a$.FP_SUB_PAUSED,
        U = S !== I.a$.NONE,
        V = v && !M,
        {
            appliedGuildBoostSlots: G,
            unappliedGuildBoostSlots: F,
            numActiveGuildBoostSlots: H,
            hasCooldownBoosts: z,
            allGuildBoostsAreOnCooldown: Y
        } = i.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                r = !1,
                i = !0;
            return (
                s.forEach((s) => {
                    !(0, E.tl)(s) && n++, s.isOnCooldown() ? (r = !0) : (i = !1), null != s.premiumGuildSubscription ? e.push(s) : t.push(s);
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
        K = null != f ? (0, g.G)(f, B) : 0,
        q = Math.max(0, K - G.length),
        X = H > K,
        J = K === s.length,
        Q = J ? q : 1,
        $ = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < Q; t++)
                e.push(
                    (0, r.jsx)(
                        O.Z,
                        {
                            className: P.headerBoostGem,
                            useReducedMotion: W
                        },
                        t
                    )
                );
            return e;
        }, [Q, W]),
        ee = null != B,
        et = i.useMemo(() => F.find((e) => e.isAvailable()), [F]);
    if (0 === F.length) return null;
    let en = F.length;
    if (((t = J ? (1 === en && ee ? A.NW.string(A.t['65r43N']) : A.NW.formatToPlainString(Y ? A.t['3DW6DQ'] : A.t['/u15QU'], { numUnappliedGuildBoostSlots: en })) : A.NW.formatToPlainString(Y ? A.t['3DW6DQ'] : A.t.BPadnJ, { numUnappliedGuildBoostSlots: en })), C.ZP.isPremium(L))) {
        if (J && 1 === en && ee) n = B.skuId === y.Ft.FREE_GUILD_BOOST_1_MONTH ? A.NW.string(A.t.dm8r0t) : A.NW.string(A.t.VGJ9IC);
        else {
            let e = (e, t) =>
                (0, r.jsx)(
                    c.P3F,
                    {
                        className: P.headerLearnMoreLink,
                        tag: 'span',
                        onClick: () => {
                            (0, N.z)();
                        },
                        children: e
                    },
                    t
                );
            n = Y
                ? A.NW.format(A.t.omcpSE, { learnMoreHook: e })
                : A.NW.format(A.t['5mAkVl'], {
                      numUnappliedGuildBoostSlots: en,
                      learnMoreHook: e
                  });
        }
    } else n = Y ? A.NW.string(A.t['8pcUZm']) : A.NW.formatToPlainString(A.t.Kaw82t, { numUnappliedGuildBoostSlots: en });
    let er = (0, l.EQ)({
        subscriptionIsPausedOrPausePending: v,
        hasFractionPremium: U
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !0
            },
            () => A.NW.format(A.t['4RgA6O'], { helpCenterLink: j.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        )
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !1
            },
            () => A.NW.string(A.t.mOWsFx)
        )
        .otherwise(() => A.NW.string(A.t.xr4m5O));
    return (0, r.jsxs)('div', {
        className: P.wrapper,
        children: [
            ee &&
                (0, r.jsxs)('div', {
                    className: P.specialHeader,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/semibold',
                            className: P.pill,
                            children: A.NW.string(A.t.fhK8ho).toLocaleUpperCase()
                        }),
                        (0, r.jsx)(c.X6q, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: A.NW.string(A.t.Cly3mZ)
                        })
                    ]
                }),
            (0, r.jsxs)('div', {
                className: a()(P.content, {
                    [P.headerWithBoost]: ee,
                    [P.headerWithoutSpecialHeader]: !ee
                }),
                children: [
                    (0, r.jsxs)('div', {
                        className: P.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: P.headerContentPrimary,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: P.headerBoostGems,
                                        children: $
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: P.__invalid_headerCopy,
                                        children: [
                                            (0, r.jsx)(c.X6q, {
                                                className: P.headerHeading,
                                                variant: 'heading-lg/bold',
                                                children: t
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                className: P.__invalid_headerSubheading,
                                                color: 'text-primary',
                                                variant: 'text-sm/normal',
                                                children: n
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: P.headerContentSecondary,
                                children: (0, r.jsx)(m.Z, {
                                    shouldShow: null == et || V,
                                    text: er,
                                    'aria-label': er.toString(),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.zxk,
                                            D(R({}, e), {
                                                disabled: null == et || V,
                                                onClick:
                                                    null != et
                                                        ? () => {
                                                              (0, c.ZDy)(
                                                                  async () => (e) =>
                                                                      (0, r.jsx)(
                                                                          p.default,
                                                                          D(R({}, e), {
                                                                              guildBoostSlots: [et],
                                                                              locationSection: T.jXE.SETTINGS_PREMIUM
                                                                          })
                                                                      )
                                                              );
                                                          }
                                                        : void 0,
                                                children: A.NW.string(A.t.BMx1i4)
                                            })
                                        )
                                })
                            })
                        ]
                    }),
                    (!J || z) &&
                        (0, r.jsx)('ul', {
                            className: P.unappliedBoostSlots,
                            children: F.map((e) =>
                                (0, r.jsx)(
                                    Z,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: X,
                                        onCancel: w,
                                        onUncancel: k,
                                        premiumSubscription: f,
                                        useReducedMotion: W,
                                        fractionalPremiumState: h
                                    },
                                    e.id
                                )
                            )
                        })
                ]
            })
        ]
    });
};
