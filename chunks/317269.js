n.d(t, {
    TB: () => v,
    VY: () => P,
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
    g = n(981631),
    L = n(388032),
    E = n(106772);
function y(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: l, paymentSourceType: s } = e,
        [o, C] = (0, a.Wu)([p.Z], () => [p.Z.get(l), p.Z.get(n)]);
    if ((r()(null != o && null != C, 'Missing startingPlan or newPlan'), _.Y1.indexOf(l) < _.Y1.indexOf(n)))
        switch (n) {
            case _.Xh.PREMIUM_MONTH_TIER_1:
                (t = L.intl.string(L.t.knvOV1)), g.X7u.has(null != s ? s : g.HeQ.UNKNOWN) && (t = L.intl.format(L.t.o6hBiY, {}));
                break;
            case _.Xh.PREMIUM_MONTH_TIER_2:
                (t = L.intl.string(L.t.f8Dqur)), g.X7u.has(null != s ? s : g.HeQ.UNKNOWN) && (t = L.intl.format(L.t.A4THYm, {}));
                break;
            case _.Xh.PREMIUM_YEAR_TIER_1:
                (t = L.intl.string(L.t.YZd5r6)), g.X7u.has(null != s ? s : g.HeQ.UNKNOWN) && (t = L.intl.format(L.t.MHAxpK, {}));
                break;
            case _.Xh.PREMIUM_YEAR_TIER_2:
                (t = L.intl.formatToPlainString(L.t['M/Lknp'], { numFreeGuildSubscriptions: _.cb })), g.X7u.has(null != s ? s : g.HeQ.UNKNOWN) && (t = L.intl.format(L.t.mULxLS, { numFreeGuildSubscriptions: _.cb }));
                break;
            case _.Xh.PREMIUM_3_MONTH_TIER_2:
            case _.Xh.PREMIUM_6_MONTH_TIER_2:
                t = L.intl.string(L.t.aaCoW1);
                break;
            case _.Xh.PREMIUM_MONTH_TIER_0:
            case _.Xh.PREMIUM_YEAR_TIER_0:
                t = L.intl.string(L.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (o.skuId === _.Si.TIER_2 && C.skuId === _.Si.TIER_1) t = L.intl.string(L.t.PNX4ND);
    else
        switch (C.skuId) {
            case _.Si.TIER_0:
                t = L.intl.string(L.t['XEoQ7+']);
                break;
            case _.Si.TIER_1:
                t = L.intl.string(L.t.nLI1Ki);
                break;
            case _.Si.TIER_2:
                t = 1 !== o.intervalCount ? L.intl.string(L.t.qSZZVF) : L.intl.string(L.t.RNjcNj);
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
        { planId: s, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: c, onClose: u, followupSKUInfo: S, isDowngrade: v, hideClose: P, postSuccessGuild: b, paymentSourceType: I, startingFractionalPremiumEndsAt: T } = e,
        { theme: M } = (0, o.TCT)(),
        Z = (0, a.e7)([x.Z], () => (null != S ? x.Z.get(S.id) : null)),
        N = (0, j.qH)(T);
    l.useEffect(() => {
        if (null == S || null != Z) return;
        let { applicationId: e, id: t } = S;
        (0, C.$N)(e, t).catch(g.VqG);
    }, [S, Z]);
    let O = (e) => (e.skuId === _.Si.TIER_0 ? (g.X7u.has(null != I ? I : g.HeQ.UNKNOWN) ? L.intl.format(L.t.o6hBiY, {}) : L.intl.string(L.t['AGf/yc'])) : e.skuId === _.Si.TIER_1 ? (g.X7u.has(null != I ? I : g.HeQ.UNKNOWN) ? L.intl.format(L.t.o6hBiY, {}) : L.intl.string(L.t.knvOV1)) : g.X7u.has(null != I ? I : g.HeQ.UNKNOWN) ? L.intl.format(L.t.A4THYm, {}) : d ? L.intl.string(L.t['g52y/v']) : L.intl.string(L.t.aTUr3d));
    if (null != Z)
        t = (0, i.jsx)('div', {
            className: E.text,
            children: L.intl.format(L.t.tsQOs7, { skuName: Z.name })
        });
    else if (N && !v) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            e.skuId === _.Si.TIER_0
                ? (t = (0, i.jsxs)('div', {
                      className: E.text,
                      children: [(0, i.jsx)('p', { children: L.intl.string(L.t.L9lcGx) }), (0, i.jsx)('p', { children: L.intl.format(L.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (e.skuId === _.Si.TIER_1 || e.skuId === _.Si.TIER_2) &&
                  (t = (0, i.jsxs)('div', {
                      className: E.text,
                      children: [(0, i.jsx)('p', { children: L.intl.string(L.t.UPpbPz) }), (0, i.jsx)('p', { children: L.intl.format(L.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (null != c)
        t = (0, i.jsx)(y, {
            planId: s,
            startingPremiumSubscriptionPlanId: c
        });
    else if (null != b) {
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
                        children: L.intl.format(L.t['6aZ0NT'], { guildName: b.name })
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
    let R = f.ZP.getPremiumType(s);
    return (
        r()(null != R, 'premium type should not be null in purchase confirmation'),
        (n = null != Z ? L.intl.formatToPlainString(L.t['1qGgm5'], { skuName: Z.name }) : v ? L.intl.string(L.t.QJ9EyM) : null != b ? L.intl.string(L.t.ta3cXV) : L.intl.string(L.t.TkTvBw)),
        (0, i.jsxs)('div', {
            className: E.confirmation,
            children: [
                (0, i.jsx)(m.C, {
                    className: E.banner,
                    theme: M,
                    premiumType: R,
                    type: g.X7u.has(null != I ? I : g.HeQ.UNKNOWN) ? m.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? m.C.Types.PREMIUM_UPDATED : m.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                P
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
function v(e) {
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
function P() {
    return (0, i.jsxs)('div', {
        className: E.redirectConfirmation,
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/bold',
                children: L.intl.string(L.t.Xtf9wM)
            }),
            (0, i.jsxs)('div', {
                className: E.redirectBody,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: L.intl.string(L.t.bIVRSU)
                    }),
                    (0, i.jsx)('br', {}),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: L.intl.string(L.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
