n.d(t, {
    TB: () => S,
    VY: () => I,
    ZP: () => g
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
    u = n(179118),
    c = n(912788),
    p = n(509545),
    x = n(55563),
    h = n(74538),
    _ = n(741245),
    f = n(474936),
    j = n(981631),
    m = n(388032),
    L = n(307862);
function E(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: s } = e,
        [o, C] = (0, a.Wu)([p.Z], () => [p.Z.get(i), p.Z.get(n)]);
    if ((r()(null != o && null != C, 'Missing startingPlan or newPlan'), f.Y1.indexOf(i) < f.Y1.indexOf(n)))
        switch (n) {
            case f.Xh.PREMIUM_MONTH_TIER_1:
                (t = m.intl.string(m.t.knvOV1)), j.X7u.has(null != s ? s : j.HeQ.UNKNOWN) && (t = m.intl.format(m.t.o6hBiY, {}));
                break;
            case f.Xh.PREMIUM_MONTH_TIER_2:
                (t = m.intl.string(m.t.f8Dqur)), j.X7u.has(null != s ? s : j.HeQ.UNKNOWN) && (t = m.intl.format(m.t.A4THYm, {}));
                break;
            case f.Xh.PREMIUM_YEAR_TIER_1:
                (t = m.intl.string(m.t.YZd5r6)), j.X7u.has(null != s ? s : j.HeQ.UNKNOWN) && (t = m.intl.format(m.t.MHAxpK, {}));
                break;
            case f.Xh.PREMIUM_YEAR_TIER_2:
                (t = m.intl.formatToPlainString(m.t['M/Lknp'], { numFreeGuildSubscriptions: f.cb })), j.X7u.has(null != s ? s : j.HeQ.UNKNOWN) && (t = m.intl.format(m.t.mULxLS, { numFreeGuildSubscriptions: f.cb }));
                break;
            case f.Xh.PREMIUM_3_MONTH_TIER_2:
            case f.Xh.PREMIUM_6_MONTH_TIER_2:
                t = m.intl.string(m.t.aaCoW1);
                break;
            case f.Xh.PREMIUM_MONTH_TIER_0:
            case f.Xh.PREMIUM_YEAR_TIER_0:
                t = m.intl.string(m.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (o.skuId === f.Si.TIER_2 && C.skuId === f.Si.TIER_1) t = m.intl.string(m.t.PNX4ND);
    else
        switch (C.skuId) {
            case f.Si.TIER_0:
                t = m.intl.string(m.t['XEoQ7+']);
                break;
            case f.Si.TIER_1:
                t = m.intl.string(m.t.nLI1Ki);
                break;
            case f.Si.TIER_2:
                t = 1 !== o.intervalCount ? m.intl.string(m.t.qSZZVF) : m.intl.string(m.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(C.skuId));
        }
    return (0, l.jsx)('div', {
        className: L.text,
        children: t
    });
}
function g(e) {
    let t,
        n,
        { planId: s, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: u, onClose: c, followupSKUInfo: g, isDowngrade: S, hideClose: I, postSuccessGuild: N, paymentSourceType: T } = e,
        { theme: M } = (0, o.TCT)(),
        v = (0, a.e7)([x.Z], () => (null != g ? x.Z.get(g.id) : null));
    i.useEffect(() => {
        if (null == g || null != v) return;
        let { applicationId: e, id: t } = g;
        (0, C.$N)(e, t).catch(j.VqG);
    }, [g, v]);
    let y = (e) => (e.skuId === f.Si.TIER_0 ? (j.X7u.has(null != T ? T : j.HeQ.UNKNOWN) ? m.intl.format(m.t.o6hBiY, {}) : m.intl.string(m.t['AGf/yc'])) : e.skuId === f.Si.TIER_1 ? (j.X7u.has(null != T ? T : j.HeQ.UNKNOWN) ? m.intl.format(m.t.o6hBiY, {}) : m.intl.string(m.t.knvOV1)) : j.X7u.has(null != T ? T : j.HeQ.UNKNOWN) ? m.intl.format(m.t.A4THYm, {}) : d ? m.intl.string(m.t['g52y/v']) : m.intl.string(m.t.aTUr3d));
    if (null != v)
        t = (0, l.jsx)('div', {
            className: L.text,
            children: m.intl.format(m.t.tsQOs7, { skuName: v.name })
        });
    else if (null != u)
        t = (0, l.jsx)(E, {
            planId: s,
            startingPremiumSubscriptionPlanId: u
        });
    else if (null != N) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)('div', {
                        className: L.text,
                        children: y(e)
                    }),
                    (0, l.jsx)('div', {
                        className: L.text,
                        children: m.intl.format(m.t['6aZ0NT'], { guildName: N.name })
                    })
                ]
            }));
    } else {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, l.jsx)('div', {
                className: L.text,
                children: y(e)
            }));
    }
    let Z = h.ZP.getPremiumType(s);
    return (
        r()(null != Z, 'premium type should not be null in purchase confirmation'),
        (n = null != v ? m.intl.formatToPlainString(m.t['1qGgm5'], { skuName: v.name }) : S ? m.intl.string(m.t.QJ9EyM) : null != N ? m.intl.string(m.t.ta3cXV) : m.intl.string(m.t.TkTvBw)),
        (0, l.jsxs)('div', {
            className: L.confirmation,
            children: [
                (0, l.jsx)(_.C, {
                    className: L.banner,
                    theme: M,
                    premiumType: Z,
                    type: j.X7u.has(null != T ? T : j.HeQ.UNKNOWN) ? _.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? _.C.Types.PREMIUM_UPDATED : _.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                I
                    ? null
                    : (0, l.jsx)(o.zxk, {
                          onClick: c,
                          children: n
                      })
            ]
        })
    );
}
function S(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: i, selectedGiftStyle: s, hasSentMessage: o, giftMessageError: C, isSendingMessage: x } = (0, d.wD)(),
        h = (0, a.e7)([p.Z], () => p.Z.get(t));
    r()(null != h, 'Missing plan');
    let _ = (0, a.e7)([c.Z], () => c.Z.getGiftCode(h.skuId));
    return (0, l.jsx)(u.Z, {
        giftCode: _,
        subscriptionPlan: h,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: o,
        giftRecipient: i,
        giftMessageError: C,
        isSendingMessage: x
    });
}
function I() {
    return (0, l.jsxs)('div', {
        className: L.redirectConfirmation,
        children: [
            (0, l.jsx)(o.X6q, {
                variant: 'heading-xl/bold',
                children: m.intl.string(m.t.Xtf9wM)
            }),
            (0, l.jsxs)('div', {
                className: L.redirectBody,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: m.intl.string(m.t.bIVRSU)
                    }),
                    (0, l.jsx)('br', {}),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: m.intl.string(m.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
