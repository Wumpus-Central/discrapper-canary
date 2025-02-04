n.d(t, { Z: () => k }), n(653041), n(627341);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(278074),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(975298),
    m = n(125529),
    h = n(158153),
    g = n(760558),
    _ = n(401786),
    x = n(450468),
    p = n(98278),
    E = n(314684),
    C = n(594174),
    f = n(78839),
    T = n(267642),
    N = n(63063),
    I = n(74538),
    S = n(283029),
    b = n(357956),
    v = n(275909),
    j = n(981631),
    A = n(474936),
    O = n(735825),
    R = n(388032),
    P = n(11146);
function D(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: r, onUncancel: l, premiumSubscription: a, useReducedMotion: o, fractionalPremiumState: d } = e,
        u = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        h = (0, T.tl)(t),
        g = (null == a ? void 0 : a.isPaused) === !0 || d !== A.a$.NONE,
        _ = d !== A.a$.NONE ? R.intl.format(R.t.hshta2, { helpCenterLink: N.Z.getArticleURL(j.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : R.intl.string(R.t.mOWsFx);
    return (0, i.jsxs)(
        'li',
        {
            className: P.unappliedGuildBoostSlot,
            children: [
                (0, i.jsxs)('div', {
                    className: P.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, i.jsx)(v.Z, {
                            className: P.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: h,
                            useReducedMotion: o
                        }),
                        h && null != a
                            ? (0, i.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: R.intl.format(R.t.Z4ULRE, { date: a.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != u
                              ? (0, i.jsx)(b.Z, { cooldown: u.getTime() })
                              : (0, i.jsx)(c.Text, {
                                    className: P.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: R.intl.string(R.t['2mcaf3'])
                                })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: P.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !h &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: g,
                                text: _,
                                'aria-label': _.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.zxk, {
                                        ...e,
                                        className: P.unappliedGuildBoostSlotCta,
                                        color: c.zxk.Colors.PRIMARY,
                                        look: c.zxk.Looks.LINK,
                                        onClick: () => r(t),
                                        size: c.zxk.Sizes.NONE,
                                        disabled: g,
                                        children: R.intl.string(R.t.twFU3d)
                                    })
                            }),
                        h &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: g,
                                text: _,
                                'aria-label': _.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.zxk, {
                                        ...e,
                                        className: P.unappliedGuildBoostSlotCta,
                                        color: c.zxk.Colors.PRIMARY,
                                        look: c.zxk.Looks.LINK,
                                        onClick: () => l(t),
                                        size: c.zxk.Sizes.NONE,
                                        disabled: g,
                                        children: R.intl.string(R.t['2glQNj'])
                                    })
                            })
                    ]
                })
            ]
        },
        t.id
    );
}
function y(e) {
    (0, c.ZDy)(
        async () => (t) =>
            (0, i.jsx)(_.default, {
                ...t,
                guildBoostSlot: e
            })
    );
}
function Z(e) {
    (0, c.ZDy)(
        async () => (t) =>
            (0, i.jsx)(x.default, {
                ...t,
                guildBoostSlotId: e.id
            })
    );
}
let k = function (e) {
    let t, n;
    let { guildBoostSlots: r, fractionalPremiumState: _ } = e,
        x = (0, o.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
        b = (null == x ? void 0 : x.isPausedOrPausePending) === !0,
        { fractionalState: v } = (0, u.Z)(),
        k = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
        B = (0, E.Vp)(),
        M = v === A.a$.FP_SUB_PAUSED,
        w = v !== A.a$.NONE,
        V = b && !M,
        {
            appliedGuildBoostSlots: U,
            unappliedGuildBoostSlots: G,
            numActiveGuildBoostSlots: F,
            hasCooldownBoosts: H,
            allGuildBoostsAreOnCooldown: z
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                r.forEach((r) => {
                    !(0, T.tl)(r) && n++, r.isOnCooldown() ? (i = !0) : (s = !1), null != r.premiumGuildSubscription ? e.push(r) : t.push(r);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: i,
                    allGuildBoostsAreOnCooldown: s
                }
            );
        }, [r]),
        Y = null != x ? (0, h.G)(x, B) : 0,
        W = Math.max(0, Y - U.length),
        K = F > Y,
        X = Y === r.length,
        q = X ? W : 1,
        Q = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < q; t++)
                e.push(
                    (0, i.jsx)(
                        S.Z,
                        {
                            className: P.headerBoostGem,
                            useReducedMotion: k
                        },
                        t
                    )
                );
            return e;
        }, [q, k]),
        J = null != B,
        $ = s.useMemo(() => G.find((e) => e.isAvailable()), [G]);
    if (0 === G.length) return null;
    let ee = G.length;
    if (((t = X ? (1 === ee && J ? R.intl.string(R.t['65r43N']) : R.intl.formatToPlainString(z ? R.t['3DW6DQ'] : R.t['/u15QU'], { numUnappliedGuildBoostSlots: ee })) : R.intl.formatToPlainString(z ? R.t['3DW6DQ'] : R.t.BPadnJ, { numUnappliedGuildBoostSlots: ee })), I.ZP.isPremium(L))) {
        if (X && 1 === ee && J) n = B.skuId === O.Ft.FREE_GUILD_BOOST_1_MONTH ? R.intl.string(R.t.dm8r0t) : R.intl.string(R.t.VGJ9IC);
        else {
            let e = (e, t) =>
                (0, i.jsx)(
                    c.P3F,
                    {
                        className: P.headerLearnMoreLink,
                        tag: 'span',
                        onClick: () => {
                            (0, p.z)();
                        },
                        children: e
                    },
                    t
                );
            n = z
                ? R.intl.format(R.t.omcpSE, { learnMoreHook: e })
                : R.intl.format(R.t['5mAkVl'], {
                      numUnappliedGuildBoostSlots: ee,
                      learnMoreHook: e
                  });
        }
    } else n = z ? R.intl.string(R.t['8pcUZm']) : R.intl.formatToPlainString(R.t.Kaw82t, { numUnappliedGuildBoostSlots: ee });
    let et = (0, a.EQ)({
        subscriptionIsPausedOrPausePending: b,
        hasFractionPremium: w
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !0
            },
            () => R.intl.format(R.t['4RgA6O'], { helpCenterLink: N.Z.getArticleURL(j.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        )
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !1
            },
            () => R.intl.string(R.t.mOWsFx)
        )
        .otherwise(() => R.intl.string(R.t.xr4m5O));
    return (0, i.jsxs)('div', {
        className: P.wrapper,
        children: [
            J &&
                (0, i.jsxs)('div', {
                    className: P.specialHeader,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-xs/semibold',
                            className: P.pill,
                            children: R.intl.string(R.t.fhK8ho).toLocaleUpperCase()
                        }),
                        (0, i.jsx)(c.X6q, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: R.intl.string(R.t.Cly3mZ)
                        })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: l()(P.content, {
                    [P.headerWithBoost]: J,
                    [P.headerWithoutSpecialHeader]: !J
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: P.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: P.headerContentPrimary,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: P.headerBoostGems,
                                        children: Q
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: P.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(c.X6q, {
                                                className: P.headerHeading,
                                                variant: 'heading-lg/bold',
                                                children: t
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                className: P.__invalid_headerSubheading,
                                                color: 'text-primary',
                                                variant: 'text-sm/normal',
                                                children: n
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: P.headerContentSecondary,
                                children: (0, i.jsx)(m.Z, {
                                    shouldShow: null == $ || V,
                                    text: et,
                                    'aria-label': et.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(c.zxk, {
                                            ...e,
                                            disabled: null == $ || V,
                                            onClick:
                                                null != $
                                                    ? () => {
                                                          (0, c.ZDy)(
                                                              async () => (e) =>
                                                                  (0, i.jsx)(g.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [$],
                                                                      locationSection: j.jXE.SETTINGS_PREMIUM
                                                                  })
                                                          );
                                                      }
                                                    : void 0,
                                            children: R.intl.string(R.t.BMx1i4)
                                        })
                                })
                            })
                        ]
                    }),
                    (!X || H) &&
                        (0, i.jsx)('ul', {
                            className: P.unappliedBoostSlots,
                            children: G.map((e) =>
                                (0, i.jsx)(
                                    D,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: K,
                                        onCancel: y,
                                        onUncancel: Z,
                                        premiumSubscription: x,
                                        useReducedMotion: k,
                                        fractionalPremiumState: _
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
