n.d(t, {
    TB: () => Z,
    VY: () => M,
    ZP: () => S
}),
    n(388685),
    n(415506);
var i = n(255367),
    l = n(73800),
    s = n(512722),
    r = n.n(s),
    a = n(442837),
    o = n(481060),
    C = n(16084),
    d = n(987209),
    c = n(179118),
    u = n(912788),
    p = n(509545),
    x = n(55563),
    h = n(63063),
    f = n(74538),
    j = n(296848),
    m = n(741245),
    _ = n(474936),
    L = n(981631),
    g = n(388032),
    E = n(106772);
function y(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: l, paymentSourceType: s } = e,
        [o, C] = (0, a.Wu)([p.Z], () => [p.Z.get(l), p.Z.get(n)]);
    if ((r()(null != o && null != C, 'Missing startingPlan or newPlan'), _.Y1.indexOf(l) < _.Y1.indexOf(n)))
        switch (n) {
            case _.Xh.PREMIUM_MONTH_TIER_1:
                (t = g.intl.string(g.t.knvOV1)), L.X7u.has(null != s ? s : L.HeQ.UNKNOWN) && (t = g.intl.format(g.t.o6hBiY, {}));
                break;
            case _.Xh.PREMIUM_MONTH_TIER_2:
                (t = g.intl.string(g.t.f8Dqur)), L.X7u.has(null != s ? s : L.HeQ.UNKNOWN) && (t = g.intl.format(g.t.A4THYm, {}));
                break;
            case _.Xh.PREMIUM_YEAR_TIER_1:
                (t = g.intl.string(g.t.YZd5r6)), L.X7u.has(null != s ? s : L.HeQ.UNKNOWN) && (t = g.intl.format(g.t.MHAxpK, {}));
                break;
            case _.Xh.PREMIUM_YEAR_TIER_2:
                (t = g.intl.formatToPlainString(g.t['M/Lknp'], { numFreeGuildSubscriptions: _.cb })), L.X7u.has(null != s ? s : L.HeQ.UNKNOWN) && (t = g.intl.format(g.t.mULxLS, { numFreeGuildSubscriptions: _.cb }));
                break;
            case _.Xh.PREMIUM_3_MONTH_TIER_2:
            case _.Xh.PREMIUM_6_MONTH_TIER_2:
                t = g.intl.string(g.t.aaCoW1);
                break;
            case _.Xh.PREMIUM_MONTH_TIER_0:
            case _.Xh.PREMIUM_YEAR_TIER_0:
                t = g.intl.string(g.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (o.skuId === _.Si.TIER_2 && C.skuId === _.Si.TIER_1) t = g.intl.string(g.t.PNX4ND);
    else
        switch (C.skuId) {
            case _.Si.TIER_0:
                t = g.intl.string(g.t['XEoQ7+']);
                break;
            case _.Si.TIER_1:
                t = g.intl.string(g.t.nLI1Ki);
                break;
            case _.Si.TIER_2:
                t = 1 !== o.intervalCount ? g.intl.string(g.t.qSZZVF) : g.intl.string(g.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(C.skuId));
        }
    return (0, i.jsx)('div', {
        className: E.text,
        children: t
    });
}
function S(e) {
    let t,
        n,
        { planId: s, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: c, onClose: u, followupSKUInfo: S, isDowngrade: Z, hideClose: M, postSuccessGuild: v, paymentSourceType: P, startingFractionalPremiumEndsAt: b } = e,
        { theme: I } = (0, o.TCT)(),
        T = (0, a.e7)([x.Z], () => (null != S ? x.Z.get(S.id) : null)),
        N = (0, j.qH)(b);
    l.useEffect(() => {
        if (null == S || null != T) return;
        let { applicationId: e, id: t } = S;
        (0, C.$N)(e, t).catch(L.VqG);
    }, [S, T]);
    let O = (e) => (e.skuId === _.Si.TIER_0 ? (L.X7u.has(null != P ? P : L.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t['AGf/yc'])) : e.skuId === _.Si.TIER_1 ? (L.X7u.has(null != P ? P : L.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t.knvOV1)) : L.X7u.has(null != P ? P : L.HeQ.UNKNOWN) ? g.intl.format(g.t.A4THYm, {}) : d ? g.intl.string(g.t['g52y/v']) : g.intl.string(g.t.aTUr3d));
    if (null != T)
        t = (0, i.jsx)('div', {
            className: E.text,
            children: g.intl.format(g.t.tsQOs7, { skuName: T.name })
        });
    else if (N && !Z) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            e.skuId === _.Si.TIER_0
                ? (t = (0, i.jsxs)('div', {
                      className: E.text,
                      children: [(0, i.jsx)('p', { children: g.intl.string(g.t.L9lcGx) }), (0, i.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (e.skuId === _.Si.TIER_1 || e.skuId === _.Si.TIER_2) &&
                  (t = (0, i.jsxs)('div', {
                      className: E.text,
                      children: [(0, i.jsx)('p', { children: g.intl.string(g.t.UPpbPz) }), (0, i.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (null != c)
        t = (0, i.jsx)(y, {
            planId: s,
            startingPremiumSubscriptionPlanId: c
        });
    else if (null != v) {
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
                        children: g.intl.format(g.t['6aZ0NT'], { guildName: v.name })
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
        (n = null != T ? g.intl.formatToPlainString(g.t['1qGgm5'], { skuName: T.name }) : Z ? g.intl.string(g.t.QJ9EyM) : null != v ? g.intl.string(g.t.ta3cXV) : g.intl.string(g.t.TkTvBw)),
        (0, i.jsxs)('div', {
            className: E.confirmation,
            children: [
                (0, i.jsx)(m.C, {
                    className: E.banner,
                    theme: I,
                    premiumType: w,
                    type: L.X7u.has(null != P ? P : L.HeQ.UNKNOWN) ? m.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? m.C.Types.PREMIUM_UPDATED : m.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                M
                    ? null
                    : (0, i.jsx)(o.zxk, {
                          className: E.button,
                          onClick: u,
                          children: n
                      })
            ]
        })
    );
}
function Z(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: l, selectedGiftStyle: s, hasSentMessage: o, giftMessageError: C, isSendingMessage: x } = (0, d.wD)(),
        h = (0, a.e7)([p.Z], () => p.Z.get(t));
    r()(null != h, 'Missing plan');
    let f = (0, a.e7)([u.Z], () => u.Z.getGiftCode(h.skuId));
    return (0, i.jsx)(c.Z, {
        giftCode: f,
        subscriptionPlan: h,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: o,
        giftRecipient: l,
        giftMessageError: C,
        isSendingMessage: x
    });
}
function M() {
    return (0, i.jsxs)('div', {
        className: E.redirectConfirmation,
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/bold',
                children: g.intl.string(g.t.Xtf9wM)
            }),
            (0, i.jsxs)('div', {
                className: E.redirectBody,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t.bIVRSU)
                    }),
                    (0, i.jsx)('br', {}),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
