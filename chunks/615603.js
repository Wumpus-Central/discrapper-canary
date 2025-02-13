n.d(t, { Z: () => L }), n(653041), n(627341);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(278074),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(975298),
    h = n(125529),
    m = n(158153),
    g = n(760558),
    x = n(401786),
    _ = n(450468),
    p = n(98278),
    E = n(314684),
    C = n(594174),
    N = n(78839),
    I = n(267642),
    f = n(63063),
    T = n(74538),
    S = n(283029),
    j = n(357956),
    v = n(275909),
    b = n(981631),
    A = n(474936),
    O = n(735825),
    R = n(388032),
    D = n(957126);
function P(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: l, onUncancel: r, premiumSubscription: a, useReducedMotion: o, fractionalPremiumState: d } = e,
        u = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        m = (0, I.tl)(t),
        g = (null == a ? void 0 : a.isPaused) === !0 || d !== A.a$.NONE,
        x = d !== A.a$.NONE ? R.intl.format(R.t.hshta2, { helpCenterLink: f.Z.getArticleURL(b.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : R.intl.string(R.t.mOWsFx);
    return (0, i.jsxs)(
        'li',
        {
            className: D.unappliedGuildBoostSlot,
            children: [
                (0, i.jsxs)('div', {
                    className: D.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, i.jsx)(v.Z, {
                            className: D.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: m,
                            useReducedMotion: o
                        }),
                        m && null != a
                            ? (0, i.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: R.intl.format(R.t.Z4ULRE, { date: a.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != u
                              ? (0, i.jsx)(j.Z, { cooldown: u.getTime() })
                              : (0, i.jsx)(c.Text, {
                                    className: D.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: R.intl.string(R.t['2mcaf3'])
                                })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: D.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !m &&
                            (0, i.jsx)(h.Z, {
                                shouldShow: g,
                                text: x,
                                'aria-label': x.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.zxk, {
                                        ...e,
                                        className: D.unappliedGuildBoostSlotCta,
                                        color: c.zxk.Colors.PRIMARY,
                                        look: c.zxk.Looks.LINK,
                                        onClick: () => l(t),
                                        size: c.zxk.Sizes.NONE,
                                        disabled: g,
                                        children: R.intl.string(R.t.twFU3d)
                                    })
                            }),
                        m &&
                            (0, i.jsx)(h.Z, {
                                shouldShow: g,
                                text: x,
                                'aria-label': x.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.zxk, {
                                        ...e,
                                        className: D.unappliedGuildBoostSlotCta,
                                        color: c.zxk.Colors.PRIMARY,
                                        look: c.zxk.Looks.LINK,
                                        onClick: () => r(t),
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
let L = function (e) {
    let t, n;
    let { guildBoostSlots: l, fractionalPremiumState: x } = e,
        _ = (0, o.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        j = (null == _ ? void 0 : _.isPausedOrPausePending) === !0,
        { fractionalState: v } = (0, u.Z)(),
        L = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        k = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
        B = (0, E.Vp)(),
        M = v === A.a$.FP_SUB_PAUSED,
        V = v !== A.a$.NONE,
        w = j && !M,
        {
            appliedGuildBoostSlots: U,
            unappliedGuildBoostSlots: G,
            numActiveGuildBoostSlots: F,
            hasCooldownBoosts: z,
            allGuildBoostsAreOnCooldown: Y
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                l.forEach((l) => {
                    !(0, I.tl)(l) && n++, l.isOnCooldown() ? (i = !0) : (s = !1), null != l.premiumGuildSubscription ? e.push(l) : t.push(l);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: i,
                    allGuildBoostsAreOnCooldown: s
                }
            );
        }, [l]),
        H = null != _ ? (0, m.G)(_, B) : 0,
        W = Math.max(0, H - U.length),
        K = F > H,
        X = H === l.length,
        q = X ? W : 1,
        J = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < q; t++)
                e.push(
                    (0, i.jsx)(
                        S.Z,
                        {
                            className: D.headerBoostGem,
                            useReducedMotion: L
                        },
                        t
                    )
                );
            return e;
        }, [q, L]),
        Q = null != B,
        $ = s.useMemo(() => G.find((e) => e.isAvailable()), [G]);
    if (0 === G.length) return null;
    let ee = G.length;
    if (((t = X ? (1 === ee && Q ? R.intl.string(R.t['65r43N']) : R.intl.formatToPlainString(Y ? R.t['3DW6DQ'] : R.t['/u15QU'], { numUnappliedGuildBoostSlots: ee })) : R.intl.formatToPlainString(Y ? R.t['3DW6DQ'] : R.t.BPadnJ, { numUnappliedGuildBoostSlots: ee })), T.ZP.isPremium(k))) {
        if (X && 1 === ee && Q) n = B.skuId === O.Ft.FREE_GUILD_BOOST_1_MONTH ? R.intl.string(R.t.dm8r0t) : R.intl.string(R.t.VGJ9IC);
        else {
            let e = (e, t) =>
                (0, i.jsx)(
                    c.P3F,
                    {
                        className: D.headerLearnMoreLink,
                        tag: 'span',
                        onClick: () => {
                            (0, p.z)();
                        },
                        children: e
                    },
                    t
                );
            n = Y
                ? R.intl.format(R.t.omcpSE, { learnMoreHook: e })
                : R.intl.format(R.t['5mAkVl'], {
                      numUnappliedGuildBoostSlots: ee,
                      learnMoreHook: e
                  });
        }
    } else n = Y ? R.intl.string(R.t['8pcUZm']) : R.intl.formatToPlainString(R.t.Kaw82t, { numUnappliedGuildBoostSlots: ee });
    let et = (0, a.EQ)({
        subscriptionIsPausedOrPausePending: j,
        hasFractionPremium: V
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !0
            },
            () => R.intl.format(R.t['4RgA6O'], { helpCenterLink: f.Z.getArticleURL(b.BhN.FRACTIONAL_PREMIUM_ABOUT) })
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
        className: D.wrapper,
        children: [
            Q &&
                (0, i.jsxs)('div', {
                    className: D.specialHeader,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-xs/semibold',
                            className: D.pill,
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
                className: r()(D.content, {
                    [D.headerWithBoost]: Q,
                    [D.headerWithoutSpecialHeader]: !Q
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: D.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: D.headerContentPrimary,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: D.headerBoostGems,
                                        children: J
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: D.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(c.X6q, {
                                                className: D.headerHeading,
                                                variant: 'heading-lg/bold',
                                                children: t
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                className: D.__invalid_headerSubheading,
                                                color: 'text-primary',
                                                variant: 'text-sm/normal',
                                                children: n
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: D.headerContentSecondary,
                                children: (0, i.jsx)(h.Z, {
                                    shouldShow: null == $ || w,
                                    text: et,
                                    'aria-label': et.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(c.zxk, {
                                            ...e,
                                            disabled: null == $ || w,
                                            onClick:
                                                null != $
                                                    ? () => {
                                                          (0, c.ZDy)(
                                                              async () => (e) =>
                                                                  (0, i.jsx)(g.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [$],
                                                                      locationSection: b.jXE.SETTINGS_PREMIUM
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
                    (!X || z) &&
                        (0, i.jsx)('ul', {
                            className: D.unappliedBoostSlots,
                            children: G.map((e) =>
                                (0, i.jsx)(
                                    P,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: K,
                                        onCancel: y,
                                        onUncancel: Z,
                                        premiumSubscription: _,
                                        useReducedMotion: L,
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
