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
    g = n(158153),
    h = n(760558),
    x = n(401786),
    _ = n(450468),
    p = n(98278),
    E = n(314684),
    C = n(594174),
    f = n(78839),
    T = n(267642),
    N = n(63063),
    S = n(74538),
    I = n(283029),
    b = n(357956),
    v = n(275909),
    j = n(981631),
    A = n(474936),
    O = n(735825),
    R = n(388032),
    P = n(553065);
function D(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: r, onUncancel: l, premiumSubscription: a, useReducedMotion: o, fractionalPremiumState: d } = e,
        u = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        g = (0, T.tl)(t),
        h = (null == a ? void 0 : a.isPaused) === !0 || d !== A.a$.NONE,
        x = d !== A.a$.NONE ? R.intl.format(R.t.hshta2, { helpCenterLink: N.Z.getArticleURL(j.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : R.intl.string(R.t.mOWsFx);
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
                            isCanceled: g,
                            useReducedMotion: o
                        }),
                        g && null != a
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
                            !g &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: h,
                                text: x,
                                'aria-label': x.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.zxk, {
                                        ...e,
                                        className: P.unappliedGuildBoostSlotCta,
                                        color: c.zxk.Colors.PRIMARY,
                                        look: c.zxk.Looks.LINK,
                                        onClick: () => r(t),
                                        size: c.zxk.Sizes.NONE,
                                        disabled: h,
                                        children: R.intl.string(R.t.twFU3d)
                                    })
                            }),
                        g &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: h,
                                text: x,
                                'aria-label': x.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.zxk, {
                                        ...e,
                                        className: P.unappliedGuildBoostSlotCta,
                                        color: c.zxk.Colors.PRIMARY,
                                        look: c.zxk.Looks.LINK,
                                        onClick: () => l(t),
                                        size: c.zxk.Sizes.NONE,
                                        disabled: h,
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
            (0, i.jsx)(x.default, {
                ...t,
                guildBoostSlot: e
            })
    );
}
function Z(e) {
    (0, c.ZDy)(
        async () => (t) =>
            (0, i.jsx)(_.default, {
                ...t,
                guildBoostSlotId: e.id
            })
    );
}
let k = function (e) {
    let t, n;
    let { guildBoostSlots: r, fractionalPremiumState: x } = e,
        _ = (0, o.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
        b = (null == _ ? void 0 : _.isPausedOrPausePending) === !0,
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
        Y = null != _ ? (0, g.G)(_, B) : 0,
        W = Math.max(0, Y - U.length),
        K = F > Y,
        q = Y === r.length,
        X = q ? W : 1,
        J = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < X; t++)
                e.push(
                    (0, i.jsx)(
                        I.Z,
                        {
                            className: P.headerBoostGem,
                            useReducedMotion: k
                        },
                        t
                    )
                );
            return e;
        }, [X, k]),
        Q = null != B,
        $ = s.useMemo(() => G.find((e) => e.isAvailable()), [G]);
    if (0 === G.length) return null;
    let ee = G.length;
    if (((t = q ? (1 === ee && Q ? R.intl.string(R.t['65r43N']) : R.intl.formatToPlainString(z ? R.t['3DW6DQ'] : R.t['/u15QU'], { numUnappliedGuildBoostSlots: ee })) : R.intl.formatToPlainString(z ? R.t['3DW6DQ'] : R.t.BPadnJ, { numUnappliedGuildBoostSlots: ee })), S.ZP.isPremium(L))) {
        if (q && 1 === ee && Q) n = B.skuId === O.Ft.FREE_GUILD_BOOST_1_MONTH ? R.intl.string(R.t.dm8r0t) : R.intl.string(R.t.VGJ9IC);
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
            Q &&
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
                    [P.headerWithBoost]: Q,
                    [P.headerWithoutSpecialHeader]: !Q
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
                                        children: J
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
                                                                  (0, i.jsx)(h.default, {
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
                    (!q || H) &&
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
                                        premiumSubscription: _,
                                        useReducedMotion: k,
                                        fractionalPremiumState: x
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
