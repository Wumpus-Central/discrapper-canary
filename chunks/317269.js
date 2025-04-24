n.d(t, {
    TB: () => P,
    VY: () => O,
    ZP: () => E
}),
    n(388685),
    n(415506);
var r = n(200651),
    o = n(192379),
    i = n(512722),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    c = n(16084),
    u = n(975298),
    d = n(987209),
    _ = n(179118),
    m = n(912788),
    f = n(509545),
    p = n(55563),
    h = n(63063),
    I = n(74538),
    C = n(296848),
    b = n(741245),
    T = n(474936),
    g = n(981631),
    N = n(388032),
    y = n(106772);
function x(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: o, paymentSourceType: i } = e,
        [s, c] = (0, a.Wu)([f.Z], () => [f.Z.get(o), f.Z.get(n)]);
    if ((l()(null != s && null != c, 'Missing startingPlan or newPlan'), T.Y1.indexOf(o) < T.Y1.indexOf(n)))
        switch (n) {
            case T.Xh.PREMIUM_MONTH_TIER_1:
                (t = N.intl.string(N.t.knvOV1)), g.X7u.has(null != i ? i : g.HeQ.UNKNOWN) && (t = N.intl.format(N.t.o6hBiY, {}));
                break;
            case T.Xh.PREMIUM_MONTH_TIER_2:
                (t = N.intl.string(N.t.f8Dqur)), g.X7u.has(null != i ? i : g.HeQ.UNKNOWN) && (t = N.intl.format(N.t.A4THYm, {}));
                break;
            case T.Xh.PREMIUM_YEAR_TIER_1:
                (t = N.intl.string(N.t.YZd5r6)), g.X7u.has(null != i ? i : g.HeQ.UNKNOWN) && (t = N.intl.format(N.t.MHAxpK, {}));
                break;
            case T.Xh.PREMIUM_YEAR_TIER_2:
                (t = N.intl.formatToPlainString(N.t['M/Lknp'], { numFreeGuildSubscriptions: T.cb })), g.X7u.has(null != i ? i : g.HeQ.UNKNOWN) && (t = N.intl.format(N.t.mULxLS, { numFreeGuildSubscriptions: T.cb }));
                break;
            case T.Xh.PREMIUM_3_MONTH_TIER_2:
            case T.Xh.PREMIUM_6_MONTH_TIER_2:
                t = N.intl.string(N.t.aaCoW1);
                break;
            case T.Xh.PREMIUM_MONTH_TIER_0:
            case T.Xh.PREMIUM_YEAR_TIER_0:
                t = N.intl.string(N.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (s.skuId === T.Si.TIER_2 && c.skuId === T.Si.TIER_1) t = N.intl.string(N.t.PNX4ND);
    else
        switch (c.skuId) {
            case T.Si.TIER_0:
                t = N.intl.string(N.t['XEoQ7+']);
                break;
            case T.Si.TIER_1:
                t = N.intl.string(N.t.nLI1Ki);
                break;
            case T.Si.TIER_2:
                t = 1 !== s.intervalCount ? N.intl.string(N.t.qSZZVF) : N.intl.string(N.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(c.skuId));
        }
    return (0, r.jsx)('div', {
        className: y.text,
        children: t
    });
}
function E(e) {
    let t,
        n,
        { planId: i, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: _, onClose: m, followupSKUInfo: E, isDowngrade: P, hideClose: O, postSuccessGuild: M, paymentSourceType: j, startingFractionalPremiumEndsAt: R } = e,
        { theme: S } = (0, s.TCT)(),
        k = (0, a.e7)([p.Z], () => (null != E ? p.Z.get(E.id) : null)),
        L = (0, u.Z)(),
        U = (0, C.qH)(R);
    o.useEffect(() => {
        if (null == E || null != k) return;
        let { applicationId: e, id: t } = E;
        (0, c.$N)(e, t).catch(g.VqG);
    }, [E, k]);
    let A = (e) => (e.skuId === T.Si.TIER_0 ? (g.X7u.has(null != j ? j : g.HeQ.UNKNOWN) ? N.intl.format(N.t.o6hBiY, {}) : N.intl.string(N.t['AGf/yc'])) : e.skuId === T.Si.TIER_1 ? (g.X7u.has(null != j ? j : g.HeQ.UNKNOWN) ? N.intl.format(N.t.o6hBiY, {}) : N.intl.string(N.t.knvOV1)) : g.X7u.has(null != j ? j : g.HeQ.UNKNOWN) ? N.intl.format(N.t.A4THYm, {}) : d ? N.intl.string(N.t['g52y/v']) : N.intl.string(N.t.aTUr3d));
    if (null != k)
        t = (0, r.jsx)('div', {
            className: y.text,
            children: N.intl.format(N.t.tsQOs7, { skuName: k.name })
        });
    else if (U) {
        let e = f.Z.get(i);
        l()(null != e, 'Missing plan'),
            e.skuId === T.Si.TIER_0
                ? (t = (0, r.jsxs)('div', {
                      className: y.text,
                      children: [(0, r.jsx)('p', { children: N.intl.string(N.t.L9lcGx) }), (0, r.jsx)('p', { children: N.intl.format(N.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (e.skuId === T.Si.TIER_1 || e.skuId === T.Si.TIER_2) &&
                  (t = (0, r.jsxs)('div', {
                      className: y.text,
                      children: [(0, r.jsx)('p', { children: N.intl.string(N.t.UPpbPz) }), (0, r.jsx)('p', { children: N.intl.format(N.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (L.fractionalState === T.a$.NONE || P)
        if (null != _)
            t = (0, r.jsx)(x, {
                planId: i,
                startingPremiumSubscriptionPlanId: _
            });
        else if (null != M) {
            let e = f.Z.get(i);
            l()(null != e, 'Missing plan'),
                (t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: y.text,
                            children: A(e)
                        }),
                        (0, r.jsx)('div', {
                            className: y.text,
                            children: N.intl.format(N.t['6aZ0NT'], { guildName: M.name })
                        })
                    ]
                }));
        } else {
            let e = f.Z.get(i);
            l()(null != e, 'Missing plan'),
                (t = (0, r.jsx)('div', {
                    className: y.text,
                    children: A(e)
                }));
        }
    else
        t = (0, r.jsx)('div', {
            className: y.text,
            children: N.intl.format(N.t.PLXpCw, { helpCenterLink: h.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        });
    let v = I.ZP.getPremiumType(i);
    return (
        l()(null != v, 'premium type should not be null in purchase confirmation'),
        (n = null != k ? N.intl.formatToPlainString(N.t['1qGgm5'], { skuName: k.name }) : P ? N.intl.string(N.t.QJ9EyM) : null != M ? N.intl.string(N.t.ta3cXV) : N.intl.string(N.t.TkTvBw)),
        (0, r.jsxs)('div', {
            className: y.confirmation,
            children: [
                (0, r.jsx)(b.C, {
                    className: y.banner,
                    theme: S,
                    premiumType: v,
                    type: g.X7u.has(null != j ? j : g.HeQ.UNKNOWN) ? b.C.Types.PREMIUM_PAYMENT_STARTED : null != _ ? b.C.Types.PREMIUM_UPDATED : b.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                O
                    ? null
                    : (0, r.jsx)(s.zxk, {
                          className: y.button,
                          onClick: m,
                          children: n
                      })
            ]
        })
    );
}
function P(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: o, selectedGiftStyle: i, hasSentMessage: s, giftMessageError: c, isSendingMessage: u } = (0, d.wD)(),
        p = (0, a.e7)([f.Z], () => f.Z.get(t));
    l()(null != p, 'Missing plan');
    let h = (0, a.e7)([m.Z], () => m.Z.getGiftCode(p.skuId));
    return (0, r.jsx)(_.Z, {
        giftCode: h,
        subscriptionPlan: p,
        onClose: n,
        selectedGiftStyle: i,
        hasSentMessage: s,
        giftRecipient: o,
        giftMessageError: c,
        isSendingMessage: u
    });
}
function O() {
    return (0, r.jsxs)('div', {
        className: y.redirectConfirmation,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-xl/bold',
                children: N.intl.string(N.t.Xtf9wM)
            }),
            (0, r.jsxs)('div', {
                className: y.redirectBody,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t.bIVRSU)
                    }),
                    (0, r.jsx)('br', {}),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
