n.d(t, {
    TB: () => b,
    VY: () => I,
    ZP: () => E
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
    f = n(63063),
    h = n(74538),
    m = n(741245),
    j = n(474936),
    L = n(981631),
    g = n(388032),
    S = n(106772);
function y(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: l } = e,
        [a, C] = (0, o.Wu)([_.Z], () => [_.Z.get(i), _.Z.get(n)]);
    if ((s()(null != a && null != C, 'Missing startingPlan or newPlan'), j.Y1.indexOf(i) < j.Y1.indexOf(n)))
        switch (n) {
            case j.Xh.PREMIUM_MONTH_TIER_1:
                (t = g.NW.string(g.t.knvOV1)), L.X7u.has(null != l ? l : L.HeQ.UNKNOWN) && (t = g.NW.format(g.t.o6hBiY, {}));
                break;
            case j.Xh.PREMIUM_MONTH_TIER_2:
                (t = g.NW.string(g.t.f8Dqur)), L.X7u.has(null != l ? l : L.HeQ.UNKNOWN) && (t = g.NW.format(g.t.A4THYm, {}));
                break;
            case j.Xh.PREMIUM_YEAR_TIER_1:
                (t = g.NW.string(g.t.YZd5r6)), L.X7u.has(null != l ? l : L.HeQ.UNKNOWN) && (t = g.NW.format(g.t.MHAxpK, {}));
                break;
            case j.Xh.PREMIUM_YEAR_TIER_2:
                (t = g.NW.formatToPlainString(g.t['M/Lknp'], { numFreeGuildSubscriptions: j.cb })), L.X7u.has(null != l ? l : L.HeQ.UNKNOWN) && (t = g.NW.format(g.t.mULxLS, { numFreeGuildSubscriptions: j.cb }));
                break;
            case j.Xh.PREMIUM_3_MONTH_TIER_2:
            case j.Xh.PREMIUM_6_MONTH_TIER_2:
                t = g.NW.string(g.t.aaCoW1);
                break;
            case j.Xh.PREMIUM_MONTH_TIER_0:
            case j.Xh.PREMIUM_YEAR_TIER_0:
                t = g.NW.string(g.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (a.skuId === j.Si.TIER_2 && C.skuId === j.Si.TIER_1) t = g.NW.string(g.t.PNX4ND);
    else
        switch (C.skuId) {
            case j.Si.TIER_0:
                t = g.NW.string(g.t['XEoQ7+']);
                break;
            case j.Si.TIER_1:
                t = g.NW.string(g.t.nLI1Ki);
                break;
            case j.Si.TIER_2:
                t = 1 !== a.intervalCount ? g.NW.string(g.t.qSZZVF) : g.NW.string(g.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(C.skuId));
        }
    return (0, r.jsx)('div', {
        className: S.text,
        children: t
    });
}
function E(e) {
    let t,
        n,
        { planId: l, enableNoPaymentTrial: c, startingPremiumSubscriptionPlanId: u, onClose: p, followupSKUInfo: E, isDowngrade: b, hideClose: I, postSuccessGuild: N, paymentSourceType: T } = e,
        { theme: M } = (0, a.TCT)(),
        P = (0, o.e7)([x.Z], () => (null != E ? x.Z.get(E.id) : null)),
        O = (0, d.Z)();
    i.useEffect(() => {
        if (null == E || null != P) return;
        let { applicationId: e, id: t } = E;
        (0, C.$N)(e, t).catch(L.VqG);
    }, [E, P]);
    let Z = (e) => (e.skuId === j.Si.TIER_0 ? (L.X7u.has(null != T ? T : L.HeQ.UNKNOWN) ? g.NW.format(g.t.o6hBiY, {}) : g.NW.string(g.t['AGf/yc'])) : e.skuId === j.Si.TIER_1 ? (L.X7u.has(null != T ? T : L.HeQ.UNKNOWN) ? g.NW.format(g.t.o6hBiY, {}) : g.NW.string(g.t.knvOV1)) : L.X7u.has(null != T ? T : L.HeQ.UNKNOWN) ? g.NW.format(g.t.A4THYm, {}) : c ? g.NW.string(g.t['g52y/v']) : g.NW.string(g.t.aTUr3d));
    if (null != P)
        t = (0, r.jsx)('div', {
            className: S.text,
            children: g.NW.format(g.t.tsQOs7, { skuName: P.name })
        });
    else if (O.fractionalState === j.a$.NONE || b)
        if (null != u)
            t = (0, r.jsx)(y, {
                planId: l,
                startingPremiumSubscriptionPlanId: u
            });
        else if (null != N) {
            let e = _.Z.get(l);
            s()(null != e, 'Missing plan'),
                (t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: S.text,
                            children: Z(e)
                        }),
                        (0, r.jsx)('div', {
                            className: S.text,
                            children: g.NW.format(g.t['6aZ0NT'], { guildName: N.name })
                        })
                    ]
                }));
        } else {
            let e = _.Z.get(l);
            s()(null != e, 'Missing plan'),
                (t = (0, r.jsx)('div', {
                    className: S.text,
                    children: Z(e)
                }));
        }
    else
        t = (0, r.jsx)('div', {
            className: S.text,
            children: g.NW.format(g.t.PLXpCw, { helpCenterLink: f.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        });
    let v = h.ZP.getPremiumType(l);
    return (
        s()(null != v, 'premium type should not be null in purchase confirmation'),
        (n = null != P ? g.NW.formatToPlainString(g.t['1qGgm5'], { skuName: P.name }) : b ? g.NW.string(g.t.QJ9EyM) : null != N ? g.NW.string(g.t.ta3cXV) : g.NW.string(g.t.TkTvBw)),
        (0, r.jsxs)('div', {
            className: S.confirmation,
            children: [
                (0, r.jsx)(m.C, {
                    className: S.banner,
                    theme: M,
                    premiumType: v,
                    type: L.X7u.has(null != T ? T : L.HeQ.UNKNOWN) ? m.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? m.C.Types.PREMIUM_UPDATED : m.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                I
                    ? null
                    : (0, r.jsx)(a.zxk, {
                          className: S.button,
                          onClick: p,
                          children: n
                      })
            ]
        })
    );
}
function b(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: i, selectedGiftStyle: l, hasSentMessage: a, giftMessageError: C, isSendingMessage: d } = (0, c.wD)(),
        x = (0, o.e7)([_.Z], () => _.Z.get(t));
    s()(null != x, 'Missing plan');
    let f = (0, o.e7)([p.Z], () => p.Z.getGiftCode(x.skuId));
    return (0, r.jsx)(u.Z, {
        giftCode: f,
        subscriptionPlan: x,
        onClose: n,
        selectedGiftStyle: l,
        hasSentMessage: a,
        giftRecipient: i,
        giftMessageError: C,
        isSendingMessage: d
    });
}
function I() {
    return (0, r.jsxs)('div', {
        className: S.redirectConfirmation,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/bold',
                children: g.NW.string(g.t.Xtf9wM)
            }),
            (0, r.jsxs)('div', {
                className: S.redirectBody,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: g.NW.string(g.t.bIVRSU)
                    }),
                    (0, r.jsx)('br', {}),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: g.NW.string(g.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
