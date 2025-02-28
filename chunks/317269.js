n.d(t, {
    TB: () => S,
    VY: () => N,
    ZP: () => E
}),
    n(47120),
    n(411104);
var l = n(200651),
    i = n(192379),
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
    f = n(74538),
    h = n(741245),
    _ = n(474936),
    j = n(981631),
    m = n(388032),
    L = n(128463);
function g(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: s } = e,
        [o, C] = (0, a.Wu)([p.Z], () => [p.Z.get(i), p.Z.get(n)]);
    if ((r()(null != o && null != C, 'Missing startingPlan or newPlan'), _.Y1.indexOf(i) < _.Y1.indexOf(n)))
        switch (n) {
            case _.Xh.PREMIUM_MONTH_TIER_1:
                (t = m.NW.string(m.t.knvOV1)), j.X7u.has(null != s ? s : j.HeQ.UNKNOWN) && (t = m.NW.format(m.t.o6hBiY, {}));
                break;
            case _.Xh.PREMIUM_MONTH_TIER_2:
                (t = m.NW.string(m.t.f8Dqur)), j.X7u.has(null != s ? s : j.HeQ.UNKNOWN) && (t = m.NW.format(m.t.A4THYm, {}));
                break;
            case _.Xh.PREMIUM_YEAR_TIER_1:
                (t = m.NW.string(m.t.YZd5r6)), j.X7u.has(null != s ? s : j.HeQ.UNKNOWN) && (t = m.NW.format(m.t.MHAxpK, {}));
                break;
            case _.Xh.PREMIUM_YEAR_TIER_2:
                (t = m.NW.formatToPlainString(m.t['M/Lknp'], { numFreeGuildSubscriptions: _.cb })), j.X7u.has(null != s ? s : j.HeQ.UNKNOWN) && (t = m.NW.format(m.t.mULxLS, { numFreeGuildSubscriptions: _.cb }));
                break;
            case _.Xh.PREMIUM_3_MONTH_TIER_2:
            case _.Xh.PREMIUM_6_MONTH_TIER_2:
                t = m.NW.string(m.t.aaCoW1);
                break;
            case _.Xh.PREMIUM_MONTH_TIER_0:
            case _.Xh.PREMIUM_YEAR_TIER_0:
                t = m.NW.string(m.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (o.skuId === _.Si.TIER_2 && C.skuId === _.Si.TIER_1) t = m.NW.string(m.t.PNX4ND);
    else
        switch (C.skuId) {
            case _.Si.TIER_0:
                t = m.NW.string(m.t['XEoQ7+']);
                break;
            case _.Si.TIER_1:
                t = m.NW.string(m.t.nLI1Ki);
                break;
            case _.Si.TIER_2:
                t = 1 !== o.intervalCount ? m.NW.string(m.t.qSZZVF) : m.NW.string(m.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(C.skuId));
        }
    return (0, l.jsx)('div', {
        className: L.text,
        children: t
    });
}
function E(e) {
    let t,
        n,
        { planId: s, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: c, onClose: u, followupSKUInfo: E, isDowngrade: S, hideClose: N, postSuccessGuild: y, paymentSourceType: I } = e,
        { theme: O } = (0, o.TCT)(),
        v = (0, a.e7)([x.Z], () => (null != E ? x.Z.get(E.id) : null));
    i.useEffect(() => {
        if (null == E || null != v) return;
        let { applicationId: e, id: t } = E;
        (0, C.$N)(e, t).catch(j.VqG);
    }, [E, v]);
    let b = (e) => (e.skuId === _.Si.TIER_0 ? (j.X7u.has(null != I ? I : j.HeQ.UNKNOWN) ? m.NW.format(m.t.o6hBiY, {}) : m.NW.string(m.t['AGf/yc'])) : e.skuId === _.Si.TIER_1 ? (j.X7u.has(null != I ? I : j.HeQ.UNKNOWN) ? m.NW.format(m.t.o6hBiY, {}) : m.NW.string(m.t.knvOV1)) : j.X7u.has(null != I ? I : j.HeQ.UNKNOWN) ? m.NW.format(m.t.A4THYm, {}) : d ? m.NW.string(m.t['g52y/v']) : m.NW.string(m.t.aTUr3d));
    if (null != v)
        t = (0, l.jsx)('div', {
            className: L.text,
            children: m.NW.format(m.t.tsQOs7, { skuName: v.name })
        });
    else if (null != c)
        t = (0, l.jsx)(g, {
            planId: s,
            startingPremiumSubscriptionPlanId: c
        });
    else if (null != y) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)('div', {
                        className: L.text,
                        children: b(e)
                    }),
                    (0, l.jsx)('div', {
                        className: L.text,
                        children: m.NW.format(m.t['6aZ0NT'], { guildName: y.name })
                    })
                ]
            }));
    } else {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, l.jsx)('div', {
                className: L.text,
                children: b(e)
            }));
    }
    let P = f.ZP.getPremiumType(s);
    return (
        r()(null != P, 'premium type should not be null in purchase confirmation'),
        (n = null != v ? m.NW.formatToPlainString(m.t['1qGgm5'], { skuName: v.name }) : S ? m.NW.string(m.t.QJ9EyM) : null != y ? m.NW.string(m.t.ta3cXV) : m.NW.string(m.t.TkTvBw)),
        (0, l.jsxs)('div', {
            className: L.confirmation,
            children: [
                (0, l.jsx)(h.C, {
                    className: L.banner,
                    theme: O,
                    premiumType: P,
                    type: j.X7u.has(null != I ? I : j.HeQ.UNKNOWN) ? h.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? h.C.Types.PREMIUM_UPDATED : h.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                N
                    ? null
                    : (0, l.jsx)(o.zxk, {
                          className: L.button,
                          onClick: u,
                          children: n
                      })
            ]
        })
    );
}
function S(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: i, selectedGiftStyle: s, hasSentMessage: o, giftMessageError: C, isSendingMessage: x } = (0, d.wD)(),
        f = (0, a.e7)([p.Z], () => p.Z.get(t));
    r()(null != f, 'Missing plan');
    let h = (0, a.e7)([u.Z], () => u.Z.getGiftCode(f.skuId));
    return (0, l.jsx)(c.Z, {
        giftCode: h,
        subscriptionPlan: f,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: o,
        giftRecipient: i,
        giftMessageError: C,
        isSendingMessage: x
    });
}
function N() {
    return (0, l.jsxs)('div', {
        className: L.redirectConfirmation,
        children: [
            (0, l.jsx)(o.X6q, {
                variant: 'heading-xl/bold',
                children: m.NW.string(m.t.Xtf9wM)
            }),
            (0, l.jsxs)('div', {
                className: L.redirectBody,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: m.NW.string(m.t.bIVRSU)
                    }),
                    (0, l.jsx)('br', {}),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: m.NW.string(m.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
