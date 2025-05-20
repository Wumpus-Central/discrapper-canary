n.d(t, {
    TB: () => I,
    VY: () => P,
    ZP: () => y
}),
    n(388685),
    n(415506);
var l = n(255367),
    i = n(73800),
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
    _ = n(741245),
    L = n(474936),
    m = n(981631),
    g = n(388032),
    E = n(106772);
function S(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: s } = e,
        [o, C] = (0, a.Wu)([p.Z], () => [p.Z.get(i), p.Z.get(n)]);
    if ((r()(null != o && null != C, 'Missing startingPlan or newPlan'), L.Y1.indexOf(i) < L.Y1.indexOf(n)))
        switch (n) {
            case L.Xh.PREMIUM_MONTH_TIER_1:
                (t = g.intl.string(g.t.knvOV1)), m.X7u.has(null != s ? s : m.HeQ.UNKNOWN) && (t = g.intl.format(g.t.o6hBiY, {}));
                break;
            case L.Xh.PREMIUM_MONTH_TIER_2:
                (t = g.intl.string(g.t.f8Dqur)), m.X7u.has(null != s ? s : m.HeQ.UNKNOWN) && (t = g.intl.format(g.t.A4THYm, {}));
                break;
            case L.Xh.PREMIUM_YEAR_TIER_1:
                (t = g.intl.string(g.t.YZd5r6)), m.X7u.has(null != s ? s : m.HeQ.UNKNOWN) && (t = g.intl.format(g.t.MHAxpK, {}));
                break;
            case L.Xh.PREMIUM_YEAR_TIER_2:
                (t = g.intl.formatToPlainString(g.t['M/Lknp'], { numFreeGuildSubscriptions: L.cb })), m.X7u.has(null != s ? s : m.HeQ.UNKNOWN) && (t = g.intl.format(g.t.mULxLS, { numFreeGuildSubscriptions: L.cb }));
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
    else if (o.skuId === L.Si.TIER_2 && C.skuId === L.Si.TIER_1) t = g.intl.string(g.t.PNX4ND);
    else
        switch (C.skuId) {
            case L.Si.TIER_0:
                t = g.intl.string(g.t['XEoQ7+']);
                break;
            case L.Si.TIER_1:
                t = g.intl.string(g.t.nLI1Ki);
                break;
            case L.Si.TIER_2:
                t = 1 !== o.intervalCount ? g.intl.string(g.t.qSZZVF) : g.intl.string(g.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(C.skuId));
        }
    return (0, l.jsx)('div', {
        className: E.text,
        children: t
    });
}
function y(e) {
    let t,
        n,
        { planId: s, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: c, onClose: u, followupSKUInfo: y, isDowngrade: I, hideClose: P, postSuccessGuild: M, paymentSourceType: O, startingFractionalPremiumEndsAt: Z } = e,
        { theme: T } = (0, o.TCT)(),
        b = (0, a.e7)([x.Z], () => (null != y ? x.Z.get(y.id) : null)),
        v = (0, j.qH)(Z);
    i.useEffect(() => {
        if (null == y || null != b) return;
        let { applicationId: e, id: t } = y;
        (0, C.$N)(e, t).catch(m.VqG);
    }, [y, b]);
    let N = (e) => (e.skuId === L.Si.TIER_0 ? (m.X7u.has(null != O ? O : m.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t['AGf/yc'])) : e.skuId === L.Si.TIER_1 ? (m.X7u.has(null != O ? O : m.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t.knvOV1)) : m.X7u.has(null != O ? O : m.HeQ.UNKNOWN) ? g.intl.format(g.t.A4THYm, {}) : d ? g.intl.string(g.t['g52y/v']) : g.intl.string(g.t.aTUr3d));
    if (null != b)
        t = (0, l.jsx)('div', {
            className: E.text,
            children: g.intl.format(g.t.tsQOs7, { skuName: b.name })
        });
    else if (v && !I) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            e.skuId === L.Si.TIER_0
                ? (t = (0, l.jsxs)('div', {
                      className: E.text,
                      children: [(0, l.jsx)('p', { children: g.intl.string(g.t.L9lcGx) }), (0, l.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(m.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (e.skuId === L.Si.TIER_1 || e.skuId === L.Si.TIER_2) &&
                  (t = (0, l.jsxs)('div', {
                      className: E.text,
                      children: [(0, l.jsx)('p', { children: g.intl.string(g.t.UPpbPz) }), (0, l.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(m.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (null != c)
        t = (0, l.jsx)(S, {
            planId: s,
            startingPremiumSubscriptionPlanId: c
        });
    else if (null != M) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)('div', {
                        className: E.text,
                        children: N(e)
                    }),
                    (0, l.jsx)('div', {
                        className: E.text,
                        children: g.intl.format(g.t['6aZ0NT'], { guildName: M.name })
                    })
                ]
            }));
    } else {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, l.jsx)('div', {
                className: E.text,
                children: N(e)
            }));
    }
    let k = f.ZP.getPremiumType(s);
    return (
        r()(null != k, 'premium type should not be null in purchase confirmation'),
        (n = null != b ? g.intl.formatToPlainString(g.t['1qGgm5'], { skuName: b.name }) : I ? g.intl.string(g.t.QJ9EyM) : null != M ? g.intl.string(g.t.ta3cXV) : g.intl.string(g.t.TkTvBw)),
        (0, l.jsxs)('div', {
            className: E.confirmation,
            children: [
                (0, l.jsx)(_.C, {
                    className: E.banner,
                    theme: T,
                    premiumType: k,
                    type: m.X7u.has(null != O ? O : m.HeQ.UNKNOWN) ? _.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? _.C.Types.PREMIUM_UPDATED : _.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                P
                    ? null
                    : (0, l.jsx)(o.zxk, {
                          className: E.button,
                          onClick: u,
                          children: n
                      })
            ]
        })
    );
}
function I(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: i, selectedGiftStyle: s, hasSentMessage: o, giftMessageError: C, isSendingMessage: x } = (0, d.wD)(),
        h = (0, a.e7)([p.Z], () => p.Z.get(t));
    r()(null != h, 'Missing plan');
    let f = (0, a.e7)([u.Z], () => u.Z.getGiftCode(h.skuId));
    return (0, l.jsx)(c.Z, {
        giftCode: f,
        subscriptionPlan: h,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: o,
        giftRecipient: i,
        giftMessageError: C,
        isSendingMessage: x
    });
}
function P() {
    return (0, l.jsxs)('div', {
        className: E.redirectConfirmation,
        children: [
            (0, l.jsx)(o.X6q, {
                variant: 'heading-xl/bold',
                children: g.intl.string(g.t.Xtf9wM)
            }),
            (0, l.jsxs)('div', {
                className: E.redirectBody,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t.bIVRSU)
                    }),
                    (0, l.jsx)('br', {}),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
