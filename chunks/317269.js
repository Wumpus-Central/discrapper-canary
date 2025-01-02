n.d(t, {
    TB: function () {
        return E;
    },
    VY: function () {
        return I;
    },
    ZP: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    l = n(192379),
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
function S(e) {
    var t, n;
    let l,
        { planId: s, startingPremiumSubscriptionPlanId: o, paymentSourceType: C } = e,
        [d, u] = (0, a.Wu)([p.Z], () => [p.Z.get(o), p.Z.get(s)]);
    if ((r()(null != d && null != u, 'Missing startingPlan or newPlan'), (t = o), (n = s), f.Y1.indexOf(t) < f.Y1.indexOf(n)))
        switch (s) {
            case f.Xh.PREMIUM_MONTH_TIER_1:
                (l = m.intl.string(m.t.knvOV1)), j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) && (l = m.intl.format(m.t.o6hBiY, {}));
                break;
            case f.Xh.PREMIUM_MONTH_TIER_2:
                (l = m.intl.string(m.t.f8Dqur)), j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) && (l = m.intl.format(m.t.A4THYm, {}));
                break;
            case f.Xh.PREMIUM_YEAR_TIER_1:
                (l = m.intl.string(m.t.YZd5r6)), j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) && (l = m.intl.format(m.t.MHAxpK, {}));
                break;
            case f.Xh.PREMIUM_YEAR_TIER_2:
                (l = m.intl.formatToPlainString(m.t['M/Lknp'], { numFreeGuildSubscriptions: f.cb })), j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) && (l = m.intl.format(m.t.mULxLS, { numFreeGuildSubscriptions: f.cb }));
                break;
            case f.Xh.PREMIUM_3_MONTH_TIER_2:
            case f.Xh.PREMIUM_6_MONTH_TIER_2:
                l = m.intl.string(m.t.aaCoW1);
                break;
            case f.Xh.PREMIUM_MONTH_TIER_0:
            case f.Xh.PREMIUM_YEAR_TIER_0:
                l = m.intl.string(m.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(s));
        }
    else if (d.skuId === f.Si.TIER_2 && u.skuId === f.Si.TIER_1) l = m.intl.string(m.t.PNX4ND);
    else
        switch (u.skuId) {
            case f.Si.TIER_0:
                l = m.intl.string(m.t['XEoQ7+']);
                break;
            case f.Si.TIER_1:
                l = m.intl.string(m.t.nLI1Ki);
                break;
            case f.Si.TIER_2:
                l = 1 !== d.intervalCount ? m.intl.string(m.t.qSZZVF) : m.intl.string(m.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(u.skuId));
        }
    return (0, i.jsx)('div', {
        className: L.text,
        children: l
    });
}
function g(e) {
    let t,
        n,
        { planId: s, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: u, onClose: c, followupSKUInfo: g, isDowngrade: E, hideClose: I, postSuccessGuild: M, paymentSourceType: v } = e,
        { theme: y } = (0, o.useThemeContext)(),
        T = (0, a.e7)([x.Z], () => (null != g ? x.Z.get(g.id) : null));
    l.useEffect(() => {
        if (null == g || null != T) return;
        let { applicationId: e, id: t } = g;
        (0, C.$N)(e, t).catch(j.VqG);
    }, [g, T]);
    let N = (e) => {
        if (e.skuId === f.Si.TIER_0) return j.X7u.has(null != v ? v : j.HeQ.UNKNOWN) ? m.intl.format(m.t.o6hBiY, {}) : m.intl.string(m.t['AGf/yc']);
        if (e.skuId === f.Si.TIER_1) return j.X7u.has(null != v ? v : j.HeQ.UNKNOWN) ? m.intl.format(m.t.o6hBiY, {}) : m.intl.string(m.t.knvOV1);
        return j.X7u.has(null != v ? v : j.HeQ.UNKNOWN) ? m.intl.format(m.t.A4THYm, {}) : d ? m.intl.string(m.t['g52y/v']) : m.intl.string(m.t.aTUr3d);
    };
    if (null != T)
        t = (0, i.jsx)('div', {
            className: L.text,
            children: m.intl.format(m.t.tsQOs7, { skuName: T.name })
        });
    else if (null != u)
        t = (0, i.jsx)(S, {
            planId: s,
            startingPremiumSubscriptionPlanId: u
        });
    else if (null != M) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: L.text,
                        children: N(e)
                    }),
                    (0, i.jsx)('div', {
                        className: L.text,
                        children: m.intl.format(m.t['6aZ0NT'], { guildName: M.name })
                    })
                ]
            }));
    } else {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, i.jsx)('div', {
                className: L.text,
                children: N(e)
            }));
    }
    let P = h.ZP.getPremiumType(s);
    return (
        r()(null != P, 'premium type should not be null in purchase confirmation'),
        (n = null != T ? m.intl.formatToPlainString(m.t['1qGgm5'], { skuName: T.name }) : E ? m.intl.string(m.t.QJ9EyM) : null != M ? m.intl.string(m.t.ta3cXV) : m.intl.string(m.t.TkTvBw)),
        (0, i.jsxs)('div', {
            className: L.confirmation,
            children: [
                (0, i.jsx)(_.C, {
                    className: L.banner,
                    theme: y,
                    premiumType: P,
                    type: j.X7u.has(null != v ? v : j.HeQ.UNKNOWN) ? _.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? _.C.Types.PREMIUM_UPDATED : _.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                I
                    ? null
                    : (0, i.jsx)(o.Button, {
                          onClick: c,
                          children: n
                      })
            ]
        })
    );
}
function E(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: l, selectedGiftStyle: s, hasSentMessage: o, giftMessageError: C, isSendingMessage: x } = (0, d.wD)(),
        h = (0, a.e7)([p.Z], () => p.Z.get(t));
    r()(null != h, 'Missing plan');
    let _ = (0, a.e7)([c.Z], () => c.Z.getGiftCode(h.skuId));
    return (0, i.jsx)(u.Z, {
        giftCode: _,
        subscriptionPlan: h,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: o,
        giftRecipient: l,
        giftMessageError: C,
        isSendingMessage: x
    });
}
function I() {
    return (0, i.jsxs)('div', {
        className: L.redirectConfirmation,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/bold',
                children: m.intl.string(m.t.Xtf9wM)
            }),
            (0, i.jsxs)('div', {
                className: L.redirectBody,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: m.intl.string(m.t.bIVRSU)
                    }),
                    (0, i.jsx)('br', {}),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: m.intl.string(m.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
