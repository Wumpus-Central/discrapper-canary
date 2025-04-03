r.d(t, {
    TB: () => x,
    VY: () => E,
    ZP: () => T
}),
    r(47120),
    r(411104);
var n = r(200651),
    o = r(192379),
    i = r(512722),
    l = r.n(i),
    a = r(442837),
    s = r(481060),
    u = r(16084),
    c = r(975298),
    d = r(987209),
    _ = r(179118),
    m = r(912788),
    f = r(509545),
    p = r(55563),
    N = r(74538),
    C = r(741245),
    h = r(474936),
    I = r(981631),
    b = r(388032),
    g = r(106772);
function y(e) {
    let t,
        { planId: r, startingPremiumSubscriptionPlanId: o, paymentSourceType: i } = e,
        [s, u] = (0, a.Wu)([f.Z], () => [f.Z.get(o), f.Z.get(r)]);
    if ((l()(null != s && null != u, 'Missing startingPlan or newPlan'), h.Y1.indexOf(o) < h.Y1.indexOf(r)))
        switch (r) {
            case h.Xh.PREMIUM_MONTH_TIER_1:
                (t = b.NW.string(b.t.knvOV1)), I.X7u.has(null != i ? i : I.HeQ.UNKNOWN) && (t = b.NW.format(b.t.o6hBiY, {}));
                break;
            case h.Xh.PREMIUM_MONTH_TIER_2:
                (t = b.NW.string(b.t.f8Dqur)), I.X7u.has(null != i ? i : I.HeQ.UNKNOWN) && (t = b.NW.format(b.t.A4THYm, {}));
                break;
            case h.Xh.PREMIUM_YEAR_TIER_1:
                (t = b.NW.string(b.t.YZd5r6)), I.X7u.has(null != i ? i : I.HeQ.UNKNOWN) && (t = b.NW.format(b.t.MHAxpK, {}));
                break;
            case h.Xh.PREMIUM_YEAR_TIER_2:
                (t = b.NW.formatToPlainString(b.t['M/Lknp'], { numFreeGuildSubscriptions: h.cb })), I.X7u.has(null != i ? i : I.HeQ.UNKNOWN) && (t = b.NW.format(b.t.mULxLS, { numFreeGuildSubscriptions: h.cb }));
                break;
            case h.Xh.PREMIUM_3_MONTH_TIER_2:
            case h.Xh.PREMIUM_6_MONTH_TIER_2:
                t = b.NW.string(b.t.aaCoW1);
                break;
            case h.Xh.PREMIUM_MONTH_TIER_0:
            case h.Xh.PREMIUM_YEAR_TIER_0:
                t = b.NW.string(b.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(r));
        }
    else if (s.skuId === h.Si.TIER_2 && u.skuId === h.Si.TIER_1) t = b.NW.string(b.t.PNX4ND);
    else
        switch (u.skuId) {
            case h.Si.TIER_0:
                t = b.NW.string(b.t['XEoQ7+']);
                break;
            case h.Si.TIER_1:
                t = b.NW.string(b.t.nLI1Ki);
                break;
            case h.Si.TIER_2:
                t = 1 !== s.intervalCount ? b.NW.string(b.t.qSZZVF) : b.NW.string(b.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(u.skuId));
        }
    return (0, n.jsx)('div', {
        className: g.text,
        children: t
    });
}
function T(e) {
    let t,
        r,
        { planId: i, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: _, onClose: m, followupSKUInfo: T, isDowngrade: x, hideClose: E, postSuccessGuild: P, paymentSourceType: O } = e,
        { theme: W } = (0, s.TCT)(),
        S = (0, a.e7)([p.Z], () => (null != T ? p.Z.get(T.id) : null)),
        M = (0, c.Z)();
    o.useEffect(() => {
        if (null == T || null != S) return;
        let { applicationId: e, id: t } = T;
        (0, u.$N)(e, t).catch(I.VqG);
    }, [T, S]);
    let j = (e) => (e.skuId === h.Si.TIER_0 ? (I.X7u.has(null != O ? O : I.HeQ.UNKNOWN) ? b.NW.format(b.t.o6hBiY, {}) : b.NW.string(b.t['AGf/yc'])) : e.skuId === h.Si.TIER_1 ? (I.X7u.has(null != O ? O : I.HeQ.UNKNOWN) ? b.NW.format(b.t.o6hBiY, {}) : b.NW.string(b.t.knvOV1)) : I.X7u.has(null != O ? O : I.HeQ.UNKNOWN) ? b.NW.format(b.t.A4THYm, {}) : d ? b.NW.string(b.t['g52y/v']) : b.NW.string(b.t.aTUr3d));
    if (null != S)
        t = (0, n.jsx)('div', {
            className: g.text,
            children: b.NW.format(b.t.tsQOs7, { skuName: S.name })
        });
    else if (M.fractionalState !== h.a$.NONE)
        t = (0, n.jsx)('div', {
            className: g.text,
            children: b.NW.format(b.t['X4Fr+f'], { expirationDate: M.endsAt.toDate() })
        });
    else if (null != _)
        t = (0, n.jsx)(y, {
            planId: i,
            startingPremiumSubscriptionPlanId: _
        });
    else if (null != P) {
        let e = f.Z.get(i);
        l()(null != e, 'Missing plan'),
            (t = (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)('div', {
                        className: g.text,
                        children: j(e)
                    }),
                    (0, n.jsx)('div', {
                        className: g.text,
                        children: b.NW.format(b.t['6aZ0NT'], { guildName: P.name })
                    })
                ]
            }));
    } else {
        let e = f.Z.get(i);
        l()(null != e, 'Missing plan'),
            (t = (0, n.jsx)('div', {
                className: g.text,
                children: j(e)
            }));
    }
    let k = N.ZP.getPremiumType(i);
    return (
        l()(null != k, 'premium type should not be null in purchase confirmation'),
        (r = null != S ? b.NW.formatToPlainString(b.t['1qGgm5'], { skuName: S.name }) : x ? b.NW.string(b.t.QJ9EyM) : null != P ? b.NW.string(b.t.ta3cXV) : b.NW.string(b.t.TkTvBw)),
        (0, n.jsxs)('div', {
            className: g.confirmation,
            children: [
                (0, n.jsx)(C.C, {
                    className: g.banner,
                    theme: W,
                    premiumType: k,
                    type: I.X7u.has(null != O ? O : I.HeQ.UNKNOWN) ? C.C.Types.PREMIUM_PAYMENT_STARTED : null != _ ? C.C.Types.PREMIUM_UPDATED : C.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                E
                    ? null
                    : (0, n.jsx)(s.zxk, {
                          className: g.button,
                          onClick: m,
                          children: r
                      })
            ]
        })
    );
}
function x(e) {
    let { planId: t, onClose: r } = e,
        { giftRecipient: o, selectedGiftStyle: i, hasSentMessage: s, giftMessageError: u, isSendingMessage: c } = (0, d.wD)(),
        p = (0, a.e7)([f.Z], () => f.Z.get(t));
    l()(null != p, 'Missing plan');
    let N = (0, a.e7)([m.Z], () => m.Z.getGiftCode(p.skuId));
    return (0, n.jsx)(_.Z, {
        giftCode: N,
        subscriptionPlan: p,
        onClose: r,
        selectedGiftStyle: i,
        hasSentMessage: s,
        giftRecipient: o,
        giftMessageError: u,
        isSendingMessage: c
    });
}
function E() {
    return (0, n.jsxs)('div', {
        className: g.redirectConfirmation,
        children: [
            (0, n.jsx)(s.X6q, {
                variant: 'heading-xl/bold',
                children: b.NW.string(b.t.Xtf9wM)
            }),
            (0, n.jsxs)('div', {
                className: g.redirectBody,
                children: [
                    (0, n.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: b.NW.string(b.t.bIVRSU)
                    }),
                    (0, n.jsx)('br', {}),
                    (0, n.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: b.NW.string(b.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
