n(653041), n(627341);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(278074),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(975298),
    m = n(125529),
    g = n(158153),
    h = n(760558),
    p = n(401786),
    x = n(450468),
    f = n(98278),
    _ = n(314684),
    E = n(594174),
    C = n(78839),
    T = n(267642),
    S = n(63063),
    b = n(74538),
    I = n(283029),
    N = n(357956),
    v = n(275909),
    A = n(981631),
    j = n(474936),
    R = n(735825),
    O = n(388032),
    P = n(11146);
function y(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: r, onUncancel: a, premiumSubscription: l, useReducedMotion: o, fractionalPremiumState: d } = e,
        u = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        g = (0, T.tl)(t),
        h = (null == l ? void 0 : l.isPaused) === !0 || d !== j.a$.NONE,
        p = d !== j.a$.NONE ? O.intl.format(O.t.hshta2, { helpCenterLink: S.Z.getArticleURL(A.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : O.intl.string(O.t.mOWsFx);
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
                        g && null != l
                            ? (0, i.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: O.intl.format(O.t.Z4ULRE, { date: l.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != u
                              ? (0, i.jsx)(N.Z, { cooldown: u.getTime() })
                              : (0, i.jsx)(c.Text, {
                                    className: P.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: O.intl.string(O.t['2mcaf3'])
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
                                text: p,
                                'aria-label': p.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.Button, {
                                        ...e,
                                        className: P.unappliedGuildBoostSlotCta,
                                        color: c.Button.Colors.PRIMARY,
                                        look: c.Button.Looks.LINK,
                                        onClick: () => r(t),
                                        size: c.Button.Sizes.NONE,
                                        disabled: h,
                                        children: O.intl.string(O.t.twFU3d)
                                    })
                            }),
                        g &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: h,
                                text: p,
                                'aria-label': p.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.Button, {
                                        ...e,
                                        className: P.unappliedGuildBoostSlotCta,
                                        color: c.Button.Colors.PRIMARY,
                                        look: c.Button.Looks.LINK,
                                        onClick: () => a(t),
                                        size: c.Button.Sizes.NONE,
                                        disabled: h,
                                        children: O.intl.string(O.t['2glQNj'])
                                    })
                            })
                    ]
                })
            ]
        },
        t.id
    );
}
function D(e) {
    (0, c.openModalLazy)(
        async () => (t) =>
            (0, i.jsx)(p.default, {
                ...t,
                guildBoostSlot: e
            })
    );
}
function B(e) {
    (0, c.openModalLazy)(
        async () => (t) =>
            (0, i.jsx)(x.default, {
                ...t,
                guildBoostSlotId: e.id
            })
    );
}
t.Z = function (e) {
    let t, n;
    let { guildBoostSlots: r, fractionalPremiumState: p } = e,
        x = (0, o.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        N = (null == x ? void 0 : x.isPausedOrPausePending) === !0,
        { fractionalState: v } = (0, u.Z)(),
        Z = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        M = (0, _.Vp)(),
        k = v === j.a$.FP_SUB_PAUSED,
        w = v !== j.a$.NONE,
        F = N && !k,
        {
            appliedGuildBoostSlots: U,
            unappliedGuildBoostSlots: V,
            numActiveGuildBoostSlots: G,
            hasCooldownBoosts: H,
            allGuildBoostsAreOnCooldown: Y
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
        W = null != x ? (0, g.G)(x, M) : 0,
        z = Math.max(0, W - U.length),
        K = G > W,
        q = W === r.length,
        Q = q ? z : 1,
        X = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < Q; t++)
                e.push(
                    (0, i.jsx)(
                        I.Z,
                        {
                            className: P.headerBoostGem,
                            useReducedMotion: Z
                        },
                        t
                    )
                );
            return e;
        }, [Q, Z]),
        J = null != M,
        $ = s.useMemo(() => V.find((e) => e.isAvailable()), [V]);
    if (0 === V.length) return null;
    let ee = V.length;
    if (((t = q ? (1 === ee && J ? O.intl.string(O.t['65r43N']) : O.intl.formatToPlainString(Y ? O.t['3DW6DQ'] : O.t['/u15QU'], { numUnappliedGuildBoostSlots: ee })) : O.intl.formatToPlainString(Y ? O.t['3DW6DQ'] : O.t.BPadnJ, { numUnappliedGuildBoostSlots: ee })), b.ZP.isPremium(L))) {
        if (q && 1 === ee && J) n = M.skuId === R.Ft.FREE_GUILD_BOOST_1_MONTH ? O.intl.string(O.t.dm8r0t) : O.intl.string(O.t.VGJ9IC);
        else {
            let e = (e, t) =>
                (0, i.jsx)(
                    c.Clickable,
                    {
                        className: P.headerLearnMoreLink,
                        tag: 'span',
                        onClick: () => {
                            (0, f.z)();
                        },
                        children: e
                    },
                    t
                );
            n = Y
                ? O.intl.format(O.t.omcpSE, { learnMoreHook: e })
                : O.intl.format(O.t['5mAkVl'], {
                      numUnappliedGuildBoostSlots: ee,
                      learnMoreHook: e
                  });
        }
    } else n = Y ? O.intl.string(O.t['8pcUZm']) : O.intl.formatToPlainString(O.t.Kaw82t, { numUnappliedGuildBoostSlots: ee });
    let et = (0, l.EQ)({
        subscriptionIsPausedOrPausePending: N,
        hasFractionPremium: w
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !0
            },
            () => O.intl.format(O.t['4RgA6O'], { helpCenterLink: S.Z.getArticleURL(A.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        )
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !1
            },
            () => O.intl.string(O.t.mOWsFx)
        )
        .otherwise(() => O.intl.string(O.t.xr4m5O));
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
                            children: O.intl.string(O.t.fhK8ho).toLocaleUpperCase()
                        }),
                        (0, i.jsx)(c.Heading, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: O.intl.string(O.t.Cly3mZ)
                        })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: a()(P.content, {
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
                                        children: X
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: P.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(c.Heading, {
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
                                    shouldShow: null == $ || F,
                                    text: et,
                                    'aria-label': et.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(c.Button, {
                                            ...e,
                                            disabled: null == $ || F,
                                            onClick:
                                                null != $
                                                    ? () => {
                                                          var e;
                                                          return (
                                                              (e = $),
                                                              void (0, c.openModalLazy)(
                                                                  async () => (t) =>
                                                                      (0, i.jsx)(h.default, {
                                                                          ...t,
                                                                          guildBoostSlots: [e],
                                                                          locationSection: A.jXE.SETTINGS_PREMIUM
                                                                      })
                                                              )
                                                          );
                                                      }
                                                    : void 0,
                                            children: O.intl.string(O.t.BMx1i4)
                                        })
                                })
                            })
                        ]
                    }),
                    (!q || H) &&
                        (0, i.jsx)('ul', {
                            className: P.unappliedBoostSlots,
                            children: V.map((e) =>
                                (0, i.jsx)(
                                    y,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: K,
                                        onCancel: D,
                                        onUncancel: B,
                                        premiumSubscription: x,
                                        useReducedMotion: Z,
                                        fractionalPremiumState: p
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
