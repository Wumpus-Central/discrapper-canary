n.d(t, {
    TB: () => N,
    VY: () => b,
    ZP: () => I
}),
    n(388685),
    n(415506);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    o = n(442837),
    a = n(481060),
    C = n(16084),
    d = n(975298),
    c = n(987209),
    u = n(179118),
    p = n(912788),
    _ = n(509545),
    x = n(55563),
    h = n(63063),
    f = n(74538),
    j = n(296848),
    m = n(741245),
    L = n(474936),
    g = n(981631),
    S = n(388032),
    E = n(106772);
function y(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: l } = e,
        [a, C] = (0, o.Wu)([_.Z], () => [_.Z.get(i), _.Z.get(n)]);
    if ((s()(null != a && null != C, 'Missing startingPlan or newPlan'), L.Y1.indexOf(i) < L.Y1.indexOf(n)))
        switch (n) {
            case L.Xh.PREMIUM_MONTH_TIER_1:
                (t = S.NW.string(S.t.knvOV1)), g.X7u.has(null != l ? l : g.HeQ.UNKNOWN) && (t = S.NW.format(S.t.o6hBiY, {}));
                break;
            case L.Xh.PREMIUM_MONTH_TIER_2:
                (t = S.NW.string(S.t.f8Dqur)), g.X7u.has(null != l ? l : g.HeQ.UNKNOWN) && (t = S.NW.format(S.t.A4THYm, {}));
                break;
            case L.Xh.PREMIUM_YEAR_TIER_1:
                (t = S.NW.string(S.t.YZd5r6)), g.X7u.has(null != l ? l : g.HeQ.UNKNOWN) && (t = S.NW.format(S.t.MHAxpK, {}));
                break;
            case L.Xh.PREMIUM_YEAR_TIER_2:
                (t = S.NW.formatToPlainString(S.t['M/Lknp'], { numFreeGuildSubscriptions: L.cb })), g.X7u.has(null != l ? l : g.HeQ.UNKNOWN) && (t = S.NW.format(S.t.mULxLS, { numFreeGuildSubscriptions: L.cb }));
                break;
            case L.Xh.PREMIUM_3_MONTH_TIER_2:
            case L.Xh.PREMIUM_6_MONTH_TIER_2:
                t = S.NW.string(S.t.aaCoW1);
                break;
            case L.Xh.PREMIUM_MONTH_TIER_0:
            case L.Xh.PREMIUM_YEAR_TIER_0:
                t = S.NW.string(S.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (a.skuId === L.Si.TIER_2 && C.skuId === L.Si.TIER_1) t = S.NW.string(S.t.PNX4ND);
    else
        switch (C.skuId) {
            case L.Si.TIER_0:
                t = S.NW.string(S.t['XEoQ7+']);
                break;
            case L.Si.TIER_1:
                t = S.NW.string(S.t.nLI1Ki);
                break;
            case L.Si.TIER_2:
                t = 1 !== a.intervalCount ? S.NW.string(S.t.qSZZVF) : S.NW.string(S.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(C.skuId));
        }
    return (0, r.jsx)('div', {
        className: E.text,
        children: t
    });
}
function I(e) {
    let t,
        n,
        { planId: l, enableNoPaymentTrial: c, startingPremiumSubscriptionPlanId: u, onClose: p, followupSKUInfo: I, isDowngrade: N, hideClose: b, postSuccessGuild: T, paymentSourceType: P, startingFractionalPremiumEndsAt: M } = e,
        { theme: O } = (0, a.TCT)(),
        Z = (0, o.e7)([x.Z], () => (null != I ? x.Z.get(I.id) : null)),
        v = (0, d.Z)(),
        A = (0, j.qH)(M);
    i.useEffect(() => {
        if (null == I || null != Z) return;
        let { applicationId: e, id: t } = I;
        (0, C.$N)(e, t).catch(g.VqG);
    }, [I, Z]);
    let k = (e) => (e.skuId === L.Si.TIER_0 ? (g.X7u.has(null != P ? P : g.HeQ.UNKNOWN) ? S.NW.format(S.t.o6hBiY, {}) : S.NW.string(S.t['AGf/yc'])) : e.skuId === L.Si.TIER_1 ? (g.X7u.has(null != P ? P : g.HeQ.UNKNOWN) ? S.NW.format(S.t.o6hBiY, {}) : S.NW.string(S.t.knvOV1)) : g.X7u.has(null != P ? P : g.HeQ.UNKNOWN) ? S.NW.format(S.t.A4THYm, {}) : c ? S.NW.string(S.t['g52y/v']) : S.NW.string(S.t.aTUr3d));
    if (null != Z)
        t = (0, r.jsx)('div', {
            className: E.text,
            children: S.NW.format(S.t.tsQOs7, { skuName: Z.name })
        });
    else if (A) {
        let e = _.Z.get(l);
        s()(null != e, 'Missing plan'),
            e.skuId === L.Si.TIER_0
                ? (t = (0, r.jsxs)('div', {
                      className: E.text,
                      children: [(0, r.jsx)('p', { children: S.NW.string(S.t.L9lcGx) }), (0, r.jsx)('p', { children: S.NW.format(S.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (e.skuId === L.Si.TIER_1 || e.skuId === L.Si.TIER_2) &&
                  (t = (0, r.jsxs)('div', {
                      className: E.text,
                      children: [(0, r.jsx)('p', { children: S.NW.string(S.t.UPpbPz) }), (0, r.jsx)('p', { children: S.NW.format(S.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (v.fractionalState === L.a$.NONE || N)
        if (null != u)
            t = (0, r.jsx)(y, {
                planId: l,
                startingPremiumSubscriptionPlanId: u
            });
        else if (null != T) {
            let e = _.Z.get(l);
            s()(null != e, 'Missing plan'),
                (t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: E.text,
                            children: k(e)
                        }),
                        (0, r.jsx)('div', {
                            className: E.text,
                            children: S.NW.format(S.t['6aZ0NT'], { guildName: T.name })
                        })
                    ]
                }));
        } else {
            let e = _.Z.get(l);
            s()(null != e, 'Missing plan'),
                (t = (0, r.jsx)('div', {
                    className: E.text,
                    children: k(e)
                }));
        }
    else
        t = (0, r.jsx)('div', {
            className: E.text,
            children: S.NW.format(S.t.PLXpCw, { helpCenterLink: h.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        });
    let U = f.ZP.getPremiumType(l);
    return (
        s()(null != U, 'premium type should not be null in purchase confirmation'),
        (n = null != Z ? S.NW.formatToPlainString(S.t['1qGgm5'], { skuName: Z.name }) : N ? S.NW.string(S.t.QJ9EyM) : null != T ? S.NW.string(S.t.ta3cXV) : S.NW.string(S.t.TkTvBw)),
        (0, r.jsxs)('div', {
            className: E.confirmation,
            children: [
                (0, r.jsx)(m.C, {
                    className: E.banner,
                    theme: O,
                    premiumType: U,
                    type: g.X7u.has(null != P ? P : g.HeQ.UNKNOWN) ? m.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? m.C.Types.PREMIUM_UPDATED : m.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                b
                    ? null
                    : (0, r.jsx)(a.zxk, {
                          className: E.button,
                          onClick: p,
                          children: n
                      })
            ]
        })
    );
}
function N(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: i, selectedGiftStyle: l, hasSentMessage: a, giftMessageError: C, isSendingMessage: d } = (0, c.wD)(),
        x = (0, o.e7)([_.Z], () => _.Z.get(t));
    s()(null != x, 'Missing plan');
    let h = (0, o.e7)([p.Z], () => p.Z.getGiftCode(x.skuId));
    return (0, r.jsx)(u.Z, {
        giftCode: h,
        subscriptionPlan: x,
        onClose: n,
        selectedGiftStyle: l,
        hasSentMessage: a,
        giftRecipient: i,
        giftMessageError: C,
        isSendingMessage: d
    });
}
function b() {
    return (0, r.jsxs)('div', {
        className: E.redirectConfirmation,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/bold',
                children: S.NW.string(S.t.Xtf9wM)
            }),
            (0, r.jsxs)('div', {
                className: E.redirectBody,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: S.NW.string(S.t.bIVRSU)
                    }),
                    (0, r.jsx)('br', {}),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: S.NW.string(S.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
