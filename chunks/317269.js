n.d(t, {
    TB: () => I,
    VY: () => b,
    ZP: () => y
}),
    n(388685),
    n(415506);
var r = n(255367),
    i = n(73800),
    l = n(512722),
    s = n.n(l),
    o = n(442837),
    a = n(481060),
    C = n(16084),
    d = n(987209),
    c = n(179118),
    u = n(912788),
    p = n(509545),
    _ = n(55563),
    x = n(63063),
    h = n(74538),
    f = n(296848),
    j = n(741245),
    m = n(474936),
    L = n(981631),
    g = n(388032),
    S = n(106772);
function E(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: l } = e,
        [a, C] = (0, o.Wu)([p.Z], () => [p.Z.get(i), p.Z.get(n)]);
    if ((s()(null != a && null != C, 'Missing startingPlan or newPlan'), m.Y1.indexOf(i) < m.Y1.indexOf(n)))
        switch (n) {
            case m.Xh.PREMIUM_MONTH_TIER_1:
                (t = g.intl.string(g.t.knvOV1)), L.X7u.has(null != l ? l : L.HeQ.UNKNOWN) && (t = g.intl.format(g.t.o6hBiY, {}));
                break;
            case m.Xh.PREMIUM_MONTH_TIER_2:
                (t = g.intl.string(g.t.f8Dqur)), L.X7u.has(null != l ? l : L.HeQ.UNKNOWN) && (t = g.intl.format(g.t.A4THYm, {}));
                break;
            case m.Xh.PREMIUM_YEAR_TIER_1:
                (t = g.intl.string(g.t.YZd5r6)), L.X7u.has(null != l ? l : L.HeQ.UNKNOWN) && (t = g.intl.format(g.t.MHAxpK, {}));
                break;
            case m.Xh.PREMIUM_YEAR_TIER_2:
                (t = g.intl.formatToPlainString(g.t['M/Lknp'], { numFreeGuildSubscriptions: m.cb })), L.X7u.has(null != l ? l : L.HeQ.UNKNOWN) && (t = g.intl.format(g.t.mULxLS, { numFreeGuildSubscriptions: m.cb }));
                break;
            case m.Xh.PREMIUM_3_MONTH_TIER_2:
            case m.Xh.PREMIUM_6_MONTH_TIER_2:
                t = g.intl.string(g.t.aaCoW1);
                break;
            case m.Xh.PREMIUM_MONTH_TIER_0:
            case m.Xh.PREMIUM_YEAR_TIER_0:
                t = g.intl.string(g.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (a.skuId === m.Si.TIER_2 && C.skuId === m.Si.TIER_1) t = g.intl.string(g.t.PNX4ND);
    else
        switch (C.skuId) {
            case m.Si.TIER_0:
                t = g.intl.string(g.t['XEoQ7+']);
                break;
            case m.Si.TIER_1:
                t = g.intl.string(g.t.nLI1Ki);
                break;
            case m.Si.TIER_2:
                t = 1 !== a.intervalCount ? g.intl.string(g.t.qSZZVF) : g.intl.string(g.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(C.skuId));
        }
    return (0, r.jsx)('div', {
        className: S.text,
        children: t
    });
}
function y(e) {
    let t,
        n,
        { planId: l, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: c, onClose: u, followupSKUInfo: y, isDowngrade: I, hideClose: b, postSuccessGuild: T, paymentSourceType: P, startingFractionalPremiumEndsAt: M } = e,
        { theme: O } = (0, a.TCT)(),
        Z = (0, o.e7)([_.Z], () => (null != y ? _.Z.get(y.id) : null)),
        v = (0, f.qH)(M);
    i.useEffect(() => {
        if (null == y || null != Z) return;
        let { applicationId: e, id: t } = y;
        (0, C.$N)(e, t).catch(L.VqG);
    }, [y, Z]);
    let N = (e) => (e.skuId === m.Si.TIER_0 ? (L.X7u.has(null != P ? P : L.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t['AGf/yc'])) : e.skuId === m.Si.TIER_1 ? (L.X7u.has(null != P ? P : L.HeQ.UNKNOWN) ? g.intl.format(g.t.o6hBiY, {}) : g.intl.string(g.t.knvOV1)) : L.X7u.has(null != P ? P : L.HeQ.UNKNOWN) ? g.intl.format(g.t.A4THYm, {}) : d ? g.intl.string(g.t['g52y/v']) : g.intl.string(g.t.aTUr3d));
    if (null != Z)
        t = (0, r.jsx)('div', {
            className: S.text,
            children: g.intl.format(g.t.tsQOs7, { skuName: Z.name })
        });
    else if (v && !I) {
        let e = p.Z.get(l);
        s()(null != e, 'Missing plan'),
            e.skuId === m.Si.TIER_0
                ? (t = (0, r.jsxs)('div', {
                      className: S.text,
                      children: [(0, r.jsx)('p', { children: g.intl.string(g.t.L9lcGx) }), (0, r.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: x.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (e.skuId === m.Si.TIER_1 || e.skuId === m.Si.TIER_2) &&
                  (t = (0, r.jsxs)('div', {
                      className: S.text,
                      children: [(0, r.jsx)('p', { children: g.intl.string(g.t.UPpbPz) }), (0, r.jsx)('p', { children: g.intl.format(g.t.EoDFuL, { helpCenterLink: x.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (null != c)
        t = (0, r.jsx)(E, {
            planId: l,
            startingPremiumSubscriptionPlanId: c
        });
    else if (null != T) {
        let e = p.Z.get(l);
        s()(null != e, 'Missing plan'),
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: S.text,
                        children: N(e)
                    }),
                    (0, r.jsx)('div', {
                        className: S.text,
                        children: g.intl.format(g.t['6aZ0NT'], { guildName: T.name })
                    })
                ]
            }));
    } else {
        let e = p.Z.get(l);
        s()(null != e, 'Missing plan'),
            (t = (0, r.jsx)('div', {
                className: S.text,
                children: N(e)
            }));
    }
    let k = h.ZP.getPremiumType(l);
    return (
        s()(null != k, 'premium type should not be null in purchase confirmation'),
        (n = null != Z ? g.intl.formatToPlainString(g.t['1qGgm5'], { skuName: Z.name }) : I ? g.intl.string(g.t.QJ9EyM) : null != T ? g.intl.string(g.t.ta3cXV) : g.intl.string(g.t.TkTvBw)),
        (0, r.jsxs)('div', {
            className: S.confirmation,
            children: [
                (0, r.jsx)(j.C, {
                    className: S.banner,
                    theme: O,
                    premiumType: k,
                    type: L.X7u.has(null != P ? P : L.HeQ.UNKNOWN) ? j.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? j.C.Types.PREMIUM_UPDATED : j.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                b
                    ? null
                    : (0, r.jsx)(a.zxk, {
                          className: S.button,
                          onClick: u,
                          children: n
                      })
            ]
        })
    );
}
function I(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: i, selectedGiftStyle: l, hasSentMessage: a, giftMessageError: C, isSendingMessage: _ } = (0, d.wD)(),
        x = (0, o.e7)([p.Z], () => p.Z.get(t));
    s()(null != x, 'Missing plan');
    let h = (0, o.e7)([u.Z], () => u.Z.getGiftCode(x.skuId));
    return (0, r.jsx)(c.Z, {
        giftCode: h,
        subscriptionPlan: x,
        onClose: n,
        selectedGiftStyle: l,
        hasSentMessage: a,
        giftRecipient: i,
        giftMessageError: C,
        isSendingMessage: _
    });
}
function b() {
    return (0, r.jsxs)('div', {
        className: S.redirectConfirmation,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/bold',
                children: g.intl.string(g.t.Xtf9wM)
            }),
            (0, r.jsxs)('div', {
                className: S.redirectBody,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t.bIVRSU)
                    }),
                    (0, r.jsx)('br', {}),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: g.intl.string(g.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
