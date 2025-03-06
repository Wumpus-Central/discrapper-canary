n.d(t, {
    TB: () => N,
    VY: () => y,
    ZP: () => S
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
    d = n(975298),
    c = n(987209),
    u = n(179118),
    p = n(912788),
    x = n(509545),
    f = n(55563),
    h = n(74538),
    _ = n(741245),
    j = n(474936),
    m = n(981631),
    L = n(388032),
    g = n(128463);
function E(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: s } = e,
        [o, C] = (0, a.Wu)([x.Z], () => [x.Z.get(i), x.Z.get(n)]);
    if ((r()(null != o && null != C, 'Missing startingPlan or newPlan'), j.Y1.indexOf(i) < j.Y1.indexOf(n)))
        switch (n) {
            case j.Xh.PREMIUM_MONTH_TIER_1:
                (t = L.NW.string(L.t.knvOV1)), m.X7u.has(null != s ? s : m.HeQ.UNKNOWN) && (t = L.NW.format(L.t.o6hBiY, {}));
                break;
            case j.Xh.PREMIUM_MONTH_TIER_2:
                (t = L.NW.string(L.t.f8Dqur)), m.X7u.has(null != s ? s : m.HeQ.UNKNOWN) && (t = L.NW.format(L.t.A4THYm, {}));
                break;
            case j.Xh.PREMIUM_YEAR_TIER_1:
                (t = L.NW.string(L.t.YZd5r6)), m.X7u.has(null != s ? s : m.HeQ.UNKNOWN) && (t = L.NW.format(L.t.MHAxpK, {}));
                break;
            case j.Xh.PREMIUM_YEAR_TIER_2:
                (t = L.NW.formatToPlainString(L.t['M/Lknp'], { numFreeGuildSubscriptions: j.cb })), m.X7u.has(null != s ? s : m.HeQ.UNKNOWN) && (t = L.NW.format(L.t.mULxLS, { numFreeGuildSubscriptions: j.cb }));
                break;
            case j.Xh.PREMIUM_3_MONTH_TIER_2:
            case j.Xh.PREMIUM_6_MONTH_TIER_2:
                t = L.NW.string(L.t.aaCoW1);
                break;
            case j.Xh.PREMIUM_MONTH_TIER_0:
            case j.Xh.PREMIUM_YEAR_TIER_0:
                t = L.NW.string(L.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (o.skuId === j.Si.TIER_2 && C.skuId === j.Si.TIER_1) t = L.NW.string(L.t.PNX4ND);
    else
        switch (C.skuId) {
            case j.Si.TIER_0:
                t = L.NW.string(L.t['XEoQ7+']);
                break;
            case j.Si.TIER_1:
                t = L.NW.string(L.t.nLI1Ki);
                break;
            case j.Si.TIER_2:
                t = 1 !== o.intervalCount ? L.NW.string(L.t.qSZZVF) : L.NW.string(L.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(C.skuId));
        }
    return (0, l.jsx)('div', {
        className: g.text,
        children: t
    });
}
function S(e) {
    let t,
        n,
        { planId: s, enableNoPaymentTrial: c, startingPremiumSubscriptionPlanId: u, onClose: p, followupSKUInfo: S, isDowngrade: N, hideClose: y, postSuccessGuild: I, paymentSourceType: O } = e,
        { theme: v } = (0, o.TCT)(),
        b = (0, a.e7)([f.Z], () => (null != S ? f.Z.get(S.id) : null)),
        P = (0, d.Z)();
    i.useEffect(() => {
        if (null == S || null != b) return;
        let { applicationId: e, id: t } = S;
        (0, C.$N)(e, t).catch(m.VqG);
    }, [S, b]);
    let T = (e) => (e.skuId === j.Si.TIER_0 ? (m.X7u.has(null != O ? O : m.HeQ.UNKNOWN) ? L.NW.format(L.t.o6hBiY, {}) : L.NW.string(L.t['AGf/yc'])) : e.skuId === j.Si.TIER_1 ? (m.X7u.has(null != O ? O : m.HeQ.UNKNOWN) ? L.NW.format(L.t.o6hBiY, {}) : L.NW.string(L.t.knvOV1)) : m.X7u.has(null != O ? O : m.HeQ.UNKNOWN) ? L.NW.format(L.t.A4THYm, {}) : c ? L.NW.string(L.t['g52y/v']) : L.NW.string(L.t.aTUr3d));
    if (null != b)
        t = (0, l.jsx)('div', {
            className: g.text,
            children: L.NW.format(L.t.tsQOs7, { skuName: b.name })
        });
    else if (P.fractionalState !== j.a$.NONE)
        t = (0, l.jsx)('div', {
            className: g.text,
            children: L.NW.format(L.t['X4Fr+f'], { expirationDate: P.endsAt.toDate() })
        });
    else if (null != u)
        t = (0, l.jsx)(E, {
            planId: s,
            startingPremiumSubscriptionPlanId: u
        });
    else if (null != I) {
        let e = x.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)('div', {
                        className: g.text,
                        children: T(e)
                    }),
                    (0, l.jsx)('div', {
                        className: g.text,
                        children: L.NW.format(L.t['6aZ0NT'], { guildName: I.name })
                    })
                ]
            }));
    } else {
        let e = x.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, l.jsx)('div', {
                className: g.text,
                children: T(e)
            }));
    }
    let M = h.ZP.getPremiumType(s);
    return (
        r()(null != M, 'premium type should not be null in purchase confirmation'),
        (n = null != b ? L.NW.formatToPlainString(L.t['1qGgm5'], { skuName: b.name }) : N ? L.NW.string(L.t.QJ9EyM) : null != I ? L.NW.string(L.t.ta3cXV) : L.NW.string(L.t.TkTvBw)),
        (0, l.jsxs)('div', {
            className: g.confirmation,
            children: [
                (0, l.jsx)(_.C, {
                    className: g.banner,
                    theme: v,
                    premiumType: M,
                    type: m.X7u.has(null != O ? O : m.HeQ.UNKNOWN) ? _.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? _.C.Types.PREMIUM_UPDATED : _.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                y
                    ? null
                    : (0, l.jsx)(o.zxk, {
                          className: g.button,
                          onClick: p,
                          children: n
                      })
            ]
        })
    );
}
function N(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: i, selectedGiftStyle: s, hasSentMessage: o, giftMessageError: C, isSendingMessage: d } = (0, c.wD)(),
        f = (0, a.e7)([x.Z], () => x.Z.get(t));
    r()(null != f, 'Missing plan');
    let h = (0, a.e7)([p.Z], () => p.Z.getGiftCode(f.skuId));
    return (0, l.jsx)(u.Z, {
        giftCode: h,
        subscriptionPlan: f,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: o,
        giftRecipient: i,
        giftMessageError: C,
        isSendingMessage: d
    });
}
function y() {
    return (0, l.jsxs)('div', {
        className: g.redirectConfirmation,
        children: [
            (0, l.jsx)(o.X6q, {
                variant: 'heading-xl/bold',
                children: L.NW.string(L.t.Xtf9wM)
            }),
            (0, l.jsxs)('div', {
                className: g.redirectBody,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: L.NW.string(L.t.bIVRSU)
                    }),
                    (0, l.jsx)('br', {}),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: L.NW.string(L.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
