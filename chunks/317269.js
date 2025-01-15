e.d(n, {
    TB: function () {
        return E;
    },
    VY: function () {
        return x;
    },
    ZP: function () {
        return g;
    }
}),
    e(47120),
    e(411104);
var r = e(200651),
    o = e(192379),
    i = e(512722),
    a = e.n(i),
    l = e(442837),
    s = e(481060),
    u = e(16084),
    c = e(987209),
    d = e(179118),
    f = e(912788),
    m = e(509545),
    C = e(55563),
    _ = e(74538),
    p = e(741245),
    h = e(474936),
    I = e(981631),
    T = e(388032),
    N = e(11843);
function b(t) {
    var n, e;
    let o,
        { planId: i, startingPremiumSubscriptionPlanId: s, paymentSourceType: u } = t,
        [c, d] = (0, l.Wu)([m.Z], () => [m.Z.get(s), m.Z.get(i)]);
    if ((a()(null != c && null != d, 'Missing startingPlan or newPlan'), (n = s), (e = i), h.Y1.indexOf(n) < h.Y1.indexOf(e)))
        switch (i) {
            case h.Xh.PREMIUM_MONTH_TIER_1:
                (o = T.intl.string(T.t.knvOV1)), I.X7u.has(null != u ? u : I.HeQ.UNKNOWN) && (o = T.intl.format(T.t.o6hBiY, {}));
                break;
            case h.Xh.PREMIUM_MONTH_TIER_2:
                (o = T.intl.string(T.t.f8Dqur)), I.X7u.has(null != u ? u : I.HeQ.UNKNOWN) && (o = T.intl.format(T.t.A4THYm, {}));
                break;
            case h.Xh.PREMIUM_YEAR_TIER_1:
                (o = T.intl.string(T.t.YZd5r6)), I.X7u.has(null != u ? u : I.HeQ.UNKNOWN) && (o = T.intl.format(T.t.MHAxpK, {}));
                break;
            case h.Xh.PREMIUM_YEAR_TIER_2:
                (o = T.intl.formatToPlainString(T.t['M/Lknp'], { numFreeGuildSubscriptions: h.cb })), I.X7u.has(null != u ? u : I.HeQ.UNKNOWN) && (o = T.intl.format(T.t.mULxLS, { numFreeGuildSubscriptions: h.cb }));
                break;
            case h.Xh.PREMIUM_3_MONTH_TIER_2:
            case h.Xh.PREMIUM_6_MONTH_TIER_2:
                o = T.intl.string(T.t.aaCoW1);
                break;
            case h.Xh.PREMIUM_MONTH_TIER_0:
            case h.Xh.PREMIUM_YEAR_TIER_0:
                o = T.intl.string(T.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(i));
        }
    else if (c.skuId === h.Si.TIER_2 && d.skuId === h.Si.TIER_1) o = T.intl.string(T.t.PNX4ND);
    else
        switch (d.skuId) {
            case h.Si.TIER_0:
                o = T.intl.string(T.t['XEoQ7+']);
                break;
            case h.Si.TIER_1:
                o = T.intl.string(T.t.nLI1Ki);
                break;
            case h.Si.TIER_2:
                o = 1 !== c.intervalCount ? T.intl.string(T.t.qSZZVF) : T.intl.string(T.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(d.skuId));
        }
    return (0, r.jsx)('div', {
        className: N.text,
        children: o
    });
}
function g(t) {
    let n,
        e,
        { planId: i, enableNoPaymentTrial: c, startingPremiumSubscriptionPlanId: d, onClose: f, followupSKUInfo: g, isDowngrade: E, hideClose: x, postSuccessGuild: M, paymentSourceType: y } = t,
        { theme: P } = (0, s.useThemeContext)(),
        v = (0, l.e7)([C.Z], () => (null != g ? C.Z.get(g.id) : null));
    o.useEffect(() => {
        if (null == g || null != v) return;
        let { applicationId: t, id: n } = g;
        (0, u.$N)(t, n).catch(I.VqG);
    }, [g, v]);
    let S = (t) => {
        if (t.skuId === h.Si.TIER_0) return I.X7u.has(null != y ? y : I.HeQ.UNKNOWN) ? T.intl.format(T.t.o6hBiY, {}) : T.intl.string(T.t['AGf/yc']);
        if (t.skuId === h.Si.TIER_1) return I.X7u.has(null != y ? y : I.HeQ.UNKNOWN) ? T.intl.format(T.t.o6hBiY, {}) : T.intl.string(T.t.knvOV1);
        return I.X7u.has(null != y ? y : I.HeQ.UNKNOWN) ? T.intl.format(T.t.A4THYm, {}) : c ? T.intl.string(T.t['g52y/v']) : T.intl.string(T.t.aTUr3d);
    };
    if (null != v)
        n = (0, r.jsx)('div', {
            className: N.text,
            children: T.intl.format(T.t.tsQOs7, { skuName: v.name })
        });
    else if (null != d)
        n = (0, r.jsx)(b, {
            planId: i,
            startingPremiumSubscriptionPlanId: d
        });
    else if (null != M) {
        let t = m.Z.get(i);
        a()(null != t, 'Missing plan'),
            (n = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: N.text,
                        children: S(t)
                    }),
                    (0, r.jsx)('div', {
                        className: N.text,
                        children: T.intl.format(T.t['6aZ0NT'], { guildName: M.name })
                    })
                ]
            }));
    } else {
        let t = m.Z.get(i);
        a()(null != t, 'Missing plan'),
            (n = (0, r.jsx)('div', {
                className: N.text,
                children: S(t)
            }));
    }
    let R = _.ZP.getPremiumType(i);
    return (
        a()(null != R, 'premium type should not be null in purchase confirmation'),
        (e = null != v ? T.intl.formatToPlainString(T.t['1qGgm5'], { skuName: v.name }) : E ? T.intl.string(T.t.QJ9EyM) : null != M ? T.intl.string(T.t.ta3cXV) : T.intl.string(T.t.TkTvBw)),
        (0, r.jsxs)('div', {
            className: N.confirmation,
            children: [
                (0, r.jsx)(p.C, {
                    className: N.banner,
                    theme: P,
                    premiumType: R,
                    type: I.X7u.has(null != y ? y : I.HeQ.UNKNOWN) ? p.C.Types.PREMIUM_PAYMENT_STARTED : null != d ? p.C.Types.PREMIUM_UPDATED : p.C.Types.PREMIUM_ACTIVATED
                }),
                n,
                x
                    ? null
                    : (0, r.jsx)(s.Button, {
                          onClick: f,
                          children: e
                      })
            ]
        })
    );
}
function E(t) {
    let { planId: n, onClose: e } = t,
        { giftRecipient: o, selectedGiftStyle: i, hasSentMessage: s, giftMessageError: u, isSendingMessage: C } = (0, c.wD)(),
        _ = (0, l.e7)([m.Z], () => m.Z.get(n));
    a()(null != _, 'Missing plan');
    let p = (0, l.e7)([f.Z], () => f.Z.getGiftCode(_.skuId));
    return (0, r.jsx)(d.Z, {
        giftCode: p,
        subscriptionPlan: _,
        onClose: e,
        selectedGiftStyle: i,
        hasSentMessage: s,
        giftRecipient: o,
        giftMessageError: u,
        isSendingMessage: C
    });
}
function x() {
    return (0, r.jsxs)('div', {
        className: N.redirectConfirmation,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: 'heading-xl/bold',
                children: T.intl.string(T.t.Xtf9wM)
            }),
            (0, r.jsxs)('div', {
                className: N.redirectBody,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: T.intl.string(T.t.bIVRSU)
                    }),
                    (0, r.jsx)('br', {}),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: T.intl.string(T.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
