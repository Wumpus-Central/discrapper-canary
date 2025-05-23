n.d(t, {
    TB: () => M,
    VY: () => Z,
    ZP: () => S
}),
    n(388685),
    n(415506);
var i = n(255367),
    l = n(73800),
    s = n(512722),
    r = n.n(s),
    a = n(442837),
    C = n(481060),
    o = n(16084),
    d = n(987209),
    c = n(179118),
    u = n(912788),
    p = n(509545),
    x = n(55563),
    h = n(63063),
    f = n(74538),
    j = n(296848),
    m = n(741245),
    L = n(474936),
    _ = n(981631),
    g = n(388032),
    E = n(106772);
function y(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: l, paymentSourceType: s } = e,
        [C, o] = (0, a.Wu)([p.Z], () => [p.Z.get(l), p.Z.get(n)]);
    if ((r()(null != C && null != o, 'Missing startingPlan or newPlan'), L.Y1.indexOf(l) < L.Y1.indexOf(n)))
        switch (n) {
            case L.Xh.PREMIUM_MONTH_TIER_1:
                (t = g.intl.string(g.t.knvOV1)), _.X7u.has(null != s ? s : _.HeQ.UNKNOWN) && (t = g.intl.format(g.t.o6hBiY, {}));
                break;
            case L.Xh.PREMIUM_MONTH_TIER_2:
                (t = g.intl.string(g.t.f8Dqur)), _.X7u.has(null != s ? s : _.HeQ.UNKNOWN) && (t = g.intl.format(g.t.A4THYm, {}));
                break;
            case L.Xh.PREMIUM_YEAR_TIER_1:
                (t = g.intl.string(g.t.YZd5r6)), _.X7u.has(null != s ? s : _.HeQ.UNKNOWN) && (t = g.intl.format(g.t.MHAxpK, {}));
                break;
            case L.Xh.PREMIUM_YEAR_TIER_2:
                (t = g.intl.formatToPlainString(g.t['M/Lknp'], { numFreeGuildSubscriptions: L.cb })), _.X7u.has(null != s ? s : _.HeQ.UNKNOWN) && (t = g.intl.format(g.t.mULxLS, { numFreeGuildSubscriptions: L.cb }));
                break;
            case L.Xh.PREMIUM_3_MONTH_TIER_2:
            case L.Xh.PREMIUM_6_MONTH_TIER_2:
                t = g.intl.string(g.t.aaCoW1);
                break;
            case L.Xh.PREMIUM_MONTH_TIER_0:
            case L.Xh.PREMIUM_YEAR_TIER_0:
                t = g.intl.string(g.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (C.skuId === L.Si.TIER_2 && o.skuId === L.Si.TIER_1) t = g.intl.string(g.t.PNX4ND);
    else
        switch (o.skuId) {
            case L.Si.TIER_0:
                t = g.intl.string(g.t['XEoQ7+']);
                break;
            case L.Si.TIER_1:
                t = g.intl.string(g.t.nLI1Ki);
                break;
            case L.Si.TIER_2:
                t = 1 !== C.intervalCount ? g.intl.string(g.t.qSZZVF) : g.intl.string(g.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(o.skuId));
        }
    return (0, i.jsx)('div', {
        className: E.text,
        children: t
    });
}
function S(e) {
    let t,
        n,
        { planId: s, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: c, onClose: u, followupSKUInfo: S, isDowngrade: M, hideClose: Z, postSuccessGuild: P, paymentSourceType: v, startingFractionalPremiumEndsAt: I } = e,
        { theme: b } = (0, C.TCT)(),
        T = (0, a.e7)([x.Z], () => (null != S ? x.Z.get(S.id) : null)),
        N = (0, j.qH)(I);
    l.useEffect(() => {
        if (null == S || null != T) return;
        let { applicationId: e, id: t } = S;
        (0, o.$N)(e, t).catch(_.VqG);
    }, [S, T]);
    let O = (e) => (e.skuId === L.Si.TIER_0 ? (_.X7u.has(null != v ? v : _.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t['AGf/yc'])) : e.skuId === L.Si.TIER_1 ? (_.X7u.has(null != v ? v : _.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t.knvOV1)) : _.X7u.has(null != v ? v : _.HeQ.UNKNOWN) ? g.intl.format(g.t.A4THYm, {}) : d ? g.intl.string(g.t['g52y/v']) : g.intl.string(g.t.aTUr3d));
    if (null != T)
        t = (0, i.jsx)('div', {
            className: E.text,
            children: g.intl.format(g.t.tsQOs7, { skuName: T.name })
        });
    else if (N && !M) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            e.skuId === L.Si.TIER_0
                ? (t = (0, i.jsxs)('div', {
                      className: E.text,
                      children: [(0, i.jsx)('p', { children: g.intl.string(g.t.L9lcGx) }), (0, i.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (e.skuId === L.Si.TIER_1 || e.skuId === L.Si.TIER_2) &&
                  (t = (0, i.jsxs)('div', {
                      className: E.text,
                      children: [(0, i.jsx)('p', { children: g.intl.string(g.t.UPpbPz) }), (0, i.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (null != c)
        t = (0, i.jsx)(y, {
            planId: s,
            startingPremiumSubscriptionPlanId: c
        });
    else if (null != P) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: E.text,
                        children: O(e)
                    }),
                    (0, i.jsx)('div', {
                        className: E.text,
                        children: g.intl.format(g.t['6aZ0NT'], { guildName: P.name })
                    })
                ]
            }));
    } else {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, i.jsx)('div', {
                className: E.text,
                children: O(e)
            }));
    }
    let w = f.ZP.getPremiumType(s);
    return (
        r()(null != w, 'premium type should not be null in purchase confirmation'),
        (n = null != T ? g.intl.formatToPlainString(g.t['1qGgm5'], { skuName: T.name }) : M ? g.intl.string(g.t.QJ9EyM) : null != P ? g.intl.string(g.t.ta3cXV) : g.intl.string(g.t.TkTvBw)),
        (0, i.jsxs)('div', {
            className: E.confirmation,
            children: [
                (0, i.jsx)(m.C, {
                    className: E.banner,
                    theme: b,
                    premiumType: w,
                    type: _.X7u.has(null != v ? v : _.HeQ.UNKNOWN) ? m.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? m.C.Types.PREMIUM_UPDATED : m.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                Z
                    ? null
                    : (0, i.jsx)(C.zxk, {
                          className: E.button,
                          onClick: u,
                          children: n
                      })
            ]
        })
    );
}
function M(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: l, selectedGiftStyle: s, hasSentMessage: C, giftMessageError: o, isSendingMessage: x } = (0, d.wD)(),
        h = (0, a.e7)([p.Z], () => p.Z.get(t));
    r()(null != h, 'Missing plan');
    let f = (0, a.e7)([u.Z], () => u.Z.getGiftCode(h.skuId));
    return (0, i.jsx)(c.Z, {
        giftCode: f,
        subscriptionPlan: h,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: C,
        giftRecipient: l,
        giftMessageError: o,
        isSendingMessage: x
    });
}
function Z() {
    return (0, i.jsxs)('div', {
        className: E.redirectConfirmation,
        children: [
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/bold',
                children: g.intl.string(g.t.Xtf9wM)
            }),
            (0, i.jsxs)('div', {
                className: E.redirectBody,
                children: [
                    (0, i.jsx)(C.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t.bIVRSU)
                    }),
                    (0, i.jsx)('br', {}),
                    (0, i.jsx)(C.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
