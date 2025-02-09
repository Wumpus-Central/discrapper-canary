n.d(e, {
    TB: () => E,
    VY: () => b,
    ZP: () => x
}),
    n(47120),
    n(411104);
var o = n(200651),
    r = n(192379),
    i = n(512722),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    u = n(16084),
    c = n(987209),
    d = n(179118),
    _ = n(912788),
    m = n(509545),
    f = n(55563),
    C = n(74538),
    p = n(741245),
    I = n(474936),
    h = n(981631),
    T = n(388032),
    N = n(502663);
function g(t) {
    let e,
        { planId: n, startingPremiumSubscriptionPlanId: r, paymentSourceType: i } = t,
        [s, u] = (0, a.Wu)([m.Z], () => [m.Z.get(r), m.Z.get(n)]);
    if ((l()(null != s && null != u, 'Missing startingPlan or newPlan'), I.Y1.indexOf(r) < I.Y1.indexOf(n)))
        switch (n) {
            case I.Xh.PREMIUM_MONTH_TIER_1:
                (e = T.intl.string(T.t.knvOV1)), h.X7u.has(null != i ? i : h.HeQ.UNKNOWN) && (e = T.intl.format(T.t.o6hBiY, {}));
                break;
            case I.Xh.PREMIUM_MONTH_TIER_2:
                (e = T.intl.string(T.t.f8Dqur)), h.X7u.has(null != i ? i : h.HeQ.UNKNOWN) && (e = T.intl.format(T.t.A4THYm, {}));
                break;
            case I.Xh.PREMIUM_YEAR_TIER_1:
                (e = T.intl.string(T.t.YZd5r6)), h.X7u.has(null != i ? i : h.HeQ.UNKNOWN) && (e = T.intl.format(T.t.MHAxpK, {}));
                break;
            case I.Xh.PREMIUM_YEAR_TIER_2:
                (e = T.intl.formatToPlainString(T.t['M/Lknp'], { numFreeGuildSubscriptions: I.cb })), h.X7u.has(null != i ? i : h.HeQ.UNKNOWN) && (e = T.intl.format(T.t.mULxLS, { numFreeGuildSubscriptions: I.cb }));
                break;
            case I.Xh.PREMIUM_3_MONTH_TIER_2:
            case I.Xh.PREMIUM_6_MONTH_TIER_2:
                e = T.intl.string(T.t.aaCoW1);
                break;
            case I.Xh.PREMIUM_MONTH_TIER_0:
            case I.Xh.PREMIUM_YEAR_TIER_0:
                e = T.intl.string(T.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (s.skuId === I.Si.TIER_2 && u.skuId === I.Si.TIER_1) e = T.intl.string(T.t.PNX4ND);
    else
        switch (u.skuId) {
            case I.Si.TIER_0:
                e = T.intl.string(T.t['XEoQ7+']);
                break;
            case I.Si.TIER_1:
                e = T.intl.string(T.t.nLI1Ki);
                break;
            case I.Si.TIER_2:
                e = 1 !== s.intervalCount ? T.intl.string(T.t.qSZZVF) : T.intl.string(T.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(u.skuId));
        }
    return (0, o.jsx)('div', {
        className: N.text,
        children: e
    });
}
function x(t) {
    let e,
        n,
        { planId: i, enableNoPaymentTrial: c, startingPremiumSubscriptionPlanId: d, onClose: _, followupSKUInfo: x, isDowngrade: E, hideClose: b, postSuccessGuild: M, paymentSourceType: y } = t,
        { theme: P } = (0, s.TCT)(),
        v = (0, a.e7)([f.Z], () => (null != x ? f.Z.get(x.id) : null));
    r.useEffect(() => {
        if (null == x || null != v) return;
        let { applicationId: t, id: e } = x;
        (0, u.$N)(t, e).catch(h.VqG);
    }, [x, v]);
    let R = (t) => (t.skuId === I.Si.TIER_0 ? (h.X7u.has(null != y ? y : h.HeQ.UNKNOWN) ? T.intl.format(T.t.o6hBiY, {}) : T.intl.string(T.t['AGf/yc'])) : t.skuId === I.Si.TIER_1 ? (h.X7u.has(null != y ? y : h.HeQ.UNKNOWN) ? T.intl.format(T.t.o6hBiY, {}) : T.intl.string(T.t.knvOV1)) : h.X7u.has(null != y ? y : h.HeQ.UNKNOWN) ? T.intl.format(T.t.A4THYm, {}) : c ? T.intl.string(T.t['g52y/v']) : T.intl.string(T.t.aTUr3d));
    if (null != v)
        e = (0, o.jsx)('div', {
            className: N.text,
            children: T.intl.format(T.t.tsQOs7, { skuName: v.name })
        });
    else if (null != d)
        e = (0, o.jsx)(g, {
            planId: i,
            startingPremiumSubscriptionPlanId: d
        });
    else if (null != M) {
        let t = m.Z.get(i);
        l()(null != t, 'Missing plan'),
            (e = (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)('div', {
                        className: N.text,
                        children: R(t)
                    }),
                    (0, o.jsx)('div', {
                        className: N.text,
                        children: T.intl.format(T.t['6aZ0NT'], { guildName: M.name })
                    })
                ]
            }));
    } else {
        let t = m.Z.get(i);
        l()(null != t, 'Missing plan'),
            (e = (0, o.jsx)('div', {
                className: N.text,
                children: R(t)
            }));
    }
    let S = C.ZP.getPremiumType(i);
    return (
        l()(null != S, 'premium type should not be null in purchase confirmation'),
        (n = null != v ? T.intl.formatToPlainString(T.t['1qGgm5'], { skuName: v.name }) : E ? T.intl.string(T.t.QJ9EyM) : null != M ? T.intl.string(T.t.ta3cXV) : T.intl.string(T.t.TkTvBw)),
        (0, o.jsxs)('div', {
            className: N.confirmation,
            children: [
                (0, o.jsx)(p.C, {
                    className: N.banner,
                    theme: P,
                    premiumType: S,
                    type: h.X7u.has(null != y ? y : h.HeQ.UNKNOWN) ? p.C.Types.PREMIUM_PAYMENT_STARTED : null != d ? p.C.Types.PREMIUM_UPDATED : p.C.Types.PREMIUM_ACTIVATED
                }),
                e,
                b
                    ? null
                    : (0, o.jsx)(s.zxk, {
                          onClick: _,
                          children: n
                      })
            ]
        })
    );
}
function E(t) {
    let { planId: e, onClose: n } = t,
        { giftRecipient: r, selectedGiftStyle: i, hasSentMessage: s, giftMessageError: u, isSendingMessage: f } = (0, c.wD)(),
        C = (0, a.e7)([m.Z], () => m.Z.get(e));
    l()(null != C, 'Missing plan');
    let p = (0, a.e7)([_.Z], () => _.Z.getGiftCode(C.skuId));
    return (0, o.jsx)(d.Z, {
        giftCode: p,
        subscriptionPlan: C,
        onClose: n,
        selectedGiftStyle: i,
        hasSentMessage: s,
        giftRecipient: r,
        giftMessageError: u,
        isSendingMessage: f
    });
}
function b() {
    return (0, o.jsxs)('div', {
        className: N.redirectConfirmation,
        children: [
            (0, o.jsx)(s.X6q, {
                variant: 'heading-xl/bold',
                children: T.intl.string(T.t.Xtf9wM)
            }),
            (0, o.jsxs)('div', {
                className: N.redirectBody,
                children: [
                    (0, o.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: T.intl.string(T.t.bIVRSU)
                    }),
                    (0, o.jsx)('br', {}),
                    (0, o.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: T.intl.string(T.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
