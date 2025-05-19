n.d(t, {
    TB: () => E,
    VY: () => P,
    ZP: () => x
}),
    n(388685),
    n(415506);
var r = n(255367),
    o = n(73800),
    i = n(512722),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    c = n(16084),
    u = n(987209),
    d = n(179118),
    _ = n(912788),
    m = n(509545),
    f = n(55563),
    p = n(63063),
    h = n(74538),
    I = n(296848),
    C = n(741245),
    b = n(474936),
    T = n(981631),
    g = n(388032),
    N = n(747686);
function y(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: o, paymentSourceType: i } = e,
        [s, c] = (0, a.Wu)([m.Z], () => [m.Z.get(o), m.Z.get(n)]);
    if ((l()(null != s && null != c, 'Missing startingPlan or newPlan'), b.Y1.indexOf(o) < b.Y1.indexOf(n)))
        switch (n) {
            case b.Xh.PREMIUM_MONTH_TIER_1:
                (t = g.intl.string(g.t.knvOV1)), T.X7u.has(null != i ? i : T.HeQ.UNKNOWN) && (t = g.intl.format(g.t.o6hBiY, {}));
                break;
            case b.Xh.PREMIUM_MONTH_TIER_2:
                (t = g.intl.string(g.t.f8Dqur)), T.X7u.has(null != i ? i : T.HeQ.UNKNOWN) && (t = g.intl.format(g.t.A4THYm, {}));
                break;
            case b.Xh.PREMIUM_YEAR_TIER_1:
                (t = g.intl.string(g.t.YZd5r6)), T.X7u.has(null != i ? i : T.HeQ.UNKNOWN) && (t = g.intl.format(g.t.MHAxpK, {}));
                break;
            case b.Xh.PREMIUM_YEAR_TIER_2:
                (t = g.intl.formatToPlainString(g.t['M/Lknp'], { numFreeGuildSubscriptions: b.cb })), T.X7u.has(null != i ? i : T.HeQ.UNKNOWN) && (t = g.intl.format(g.t.mULxLS, { numFreeGuildSubscriptions: b.cb }));
                break;
            case b.Xh.PREMIUM_3_MONTH_TIER_2:
            case b.Xh.PREMIUM_6_MONTH_TIER_2:
                t = g.intl.string(g.t.aaCoW1);
                break;
            case b.Xh.PREMIUM_MONTH_TIER_0:
            case b.Xh.PREMIUM_YEAR_TIER_0:
                t = g.intl.string(g.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (s.skuId === b.Si.TIER_2 && c.skuId === b.Si.TIER_1) t = g.intl.string(g.t.PNX4ND);
    else
        switch (c.skuId) {
            case b.Si.TIER_0:
                t = g.intl.string(g.t['XEoQ7+']);
                break;
            case b.Si.TIER_1:
                t = g.intl.string(g.t.nLI1Ki);
                break;
            case b.Si.TIER_2:
                t = 1 !== s.intervalCount ? g.intl.string(g.t.qSZZVF) : g.intl.string(g.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(c.skuId));
        }
    return (0, r.jsx)('div', {
        className: N.text,
        children: t
    });
}
function x(e) {
    let t,
        n,
        { planId: i, enableNoPaymentTrial: u, startingPremiumSubscriptionPlanId: d, onClose: _, followupSKUInfo: x, isDowngrade: E, hideClose: P, postSuccessGuild: O, paymentSourceType: M, startingFractionalPremiumEndsAt: j } = e,
        { theme: S } = (0, s.TCT)(),
        R = (0, a.e7)([f.Z], () => (null != x ? f.Z.get(x.id) : null)),
        k = (0, I.qH)(j);
    o.useEffect(() => {
        if (null == x || null != R) return;
        let { applicationId: e, id: t } = x;
        (0, c.$N)(e, t).catch(T.VqG);
    }, [x, R]);
    let U = (e) => (e.skuId === b.Si.TIER_0 ? (T.X7u.has(null != M ? M : T.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t['AGf/yc'])) : e.skuId === b.Si.TIER_1 ? (T.X7u.has(null != M ? M : T.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t.knvOV1)) : T.X7u.has(null != M ? M : T.HeQ.UNKNOWN) ? g.intl.format(g.t.A4THYm, {}) : u ? g.intl.string(g.t['g52y/v']) : g.intl.string(g.t.aTUr3d));
    if (null != R)
        t = (0, r.jsx)('div', {
            className: N.text,
            children: g.intl.format(g.t.tsQOs7, { skuName: R.name })
        });
    else if (k && !E) {
        let e = m.Z.get(i);
        l()(null != e, 'Missing plan'),
            e.skuId === b.Si.TIER_0
                ? (t = (0, r.jsxs)('div', {
                      className: N.text,
                      children: [(0, r.jsx)('p', { children: g.intl.string(g.t.L9lcGx) }), (0, r.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: p.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (e.skuId === b.Si.TIER_1 || e.skuId === b.Si.TIER_2) &&
                  (t = (0, r.jsxs)('div', {
                      className: N.text,
                      children: [(0, r.jsx)('p', { children: g.intl.string(g.t.UPpbPz) }), (0, r.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: p.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (null != d)
        t = (0, r.jsx)(y, {
            planId: i,
            startingPremiumSubscriptionPlanId: d
        });
    else if (null != O) {
        let e = m.Z.get(i);
        l()(null != e, 'Missing plan'),
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: N.text,
                        children: U(e)
                    }),
                    (0, r.jsx)('div', {
                        className: N.text,
                        children: g.intl.format(g.t['6aZ0NT'], { guildName: O.name })
                    })
                ]
            }));
    } else {
        let e = m.Z.get(i);
        l()(null != e, 'Missing plan'),
            (t = (0, r.jsx)('div', {
                className: N.text,
                children: U(e)
            }));
    }
    let L = h.ZP.getPremiumType(i);
    return (
        l()(null != L, 'premium type should not be null in purchase confirmation'),
        (n = null != R ? g.intl.formatToPlainString(g.t['1qGgm5'], { skuName: R.name }) : E ? g.intl.string(g.t.QJ9EyM) : null != O ? g.intl.string(g.t.ta3cXV) : g.intl.string(g.t.TkTvBw)),
        (0, r.jsxs)('div', {
            className: N.confirmation,
            children: [
                (0, r.jsx)(C.C, {
                    className: N.banner,
                    theme: S,
                    premiumType: L,
                    type: T.X7u.has(null != M ? M : T.HeQ.UNKNOWN) ? C.C.Types.PREMIUM_PAYMENT_STARTED : null != d ? C.C.Types.PREMIUM_UPDATED : C.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                P
                    ? null
                    : (0, r.jsx)(s.zxk, {
                          className: N.button,
                          onClick: _,
                          children: n
                      })
            ]
        })
    );
}
function E(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: o, selectedGiftStyle: i, hasSentMessage: s, giftMessageError: c, isSendingMessage: f } = (0, u.wD)(),
        p = (0, a.e7)([m.Z], () => m.Z.get(t));
    l()(null != p, 'Missing plan');
    let h = (0, a.e7)([_.Z], () => _.Z.getGiftCode(p.skuId));
    return (0, r.jsx)(d.Z, {
        giftCode: h,
        subscriptionPlan: p,
        onClose: n,
        selectedGiftStyle: i,
        hasSentMessage: s,
        giftRecipient: o,
        giftMessageError: c,
        isSendingMessage: f
    });
}
function P() {
    return (0, r.jsxs)('div', {
        className: N.redirectConfirmation,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-xl/bold',
                children: g.intl.string(g.t.Xtf9wM)
            }),
            (0, r.jsxs)('div', {
                className: N.redirectBody,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t.bIVRSU)
                    }),
                    (0, r.jsx)('br', {}),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
