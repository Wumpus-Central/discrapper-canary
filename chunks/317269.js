n.d(t, {
    TB: () => b,
    VY: () => T,
    ZP: () => N
}),
    n(388685),
    n(415506);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    o = n(913527),
    a = n.n(o),
    C = n(442837),
    d = n(481060),
    c = n(16084),
    u = n(975298),
    p = n(987209),
    _ = n(179118),
    x = n(912788),
    h = n(509545),
    f = n(55563),
    j = n(63063),
    m = n(74538),
    L = n(741245),
    g = n(474936),
    S = n(981631),
    E = n(388032),
    y = n(106772);
function I(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: l } = e,
        [o, a] = (0, C.Wu)([h.Z], () => [h.Z.get(i), h.Z.get(n)]);
    if ((s()(null != o && null != a, 'Missing startingPlan or newPlan'), g.Y1.indexOf(i) < g.Y1.indexOf(n)))
        switch (n) {
            case g.Xh.PREMIUM_MONTH_TIER_1:
                (t = E.NW.string(E.t.knvOV1)), S.X7u.has(null != l ? l : S.HeQ.UNKNOWN) && (t = E.NW.format(E.t.o6hBiY, {}));
                break;
            case g.Xh.PREMIUM_MONTH_TIER_2:
                (t = E.NW.string(E.t.f8Dqur)), S.X7u.has(null != l ? l : S.HeQ.UNKNOWN) && (t = E.NW.format(E.t.A4THYm, {}));
                break;
            case g.Xh.PREMIUM_YEAR_TIER_1:
                (t = E.NW.string(E.t.YZd5r6)), S.X7u.has(null != l ? l : S.HeQ.UNKNOWN) && (t = E.NW.format(E.t.MHAxpK, {}));
                break;
            case g.Xh.PREMIUM_YEAR_TIER_2:
                (t = E.NW.formatToPlainString(E.t['M/Lknp'], { numFreeGuildSubscriptions: g.cb })), S.X7u.has(null != l ? l : S.HeQ.UNKNOWN) && (t = E.NW.format(E.t.mULxLS, { numFreeGuildSubscriptions: g.cb }));
                break;
            case g.Xh.PREMIUM_3_MONTH_TIER_2:
            case g.Xh.PREMIUM_6_MONTH_TIER_2:
                t = E.NW.string(E.t.aaCoW1);
                break;
            case g.Xh.PREMIUM_MONTH_TIER_0:
            case g.Xh.PREMIUM_YEAR_TIER_0:
                t = E.NW.string(E.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (o.skuId === g.Si.TIER_2 && a.skuId === g.Si.TIER_1) t = E.NW.string(E.t.PNX4ND);
    else
        switch (a.skuId) {
            case g.Si.TIER_0:
                t = E.NW.string(E.t['XEoQ7+']);
                break;
            case g.Si.TIER_1:
                t = E.NW.string(E.t.nLI1Ki);
                break;
            case g.Si.TIER_2:
                t = 1 !== o.intervalCount ? E.NW.string(E.t.qSZZVF) : E.NW.string(E.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(a.skuId));
        }
    return (0, r.jsx)('div', {
        className: y.text,
        children: t
    });
}
function N(e) {
    let t,
        n,
        { planId: l, enableNoPaymentTrial: o, startingPremiumSubscriptionPlanId: p, onClose: _, followupSKUInfo: x, isDowngrade: N, hideClose: b, postSuccessGuild: T, paymentSourceType: M, startingFractionalPremiumEndsAt: P } = e,
        { theme: O } = (0, d.TCT)(),
        Z = (0, C.e7)([f.Z], () => (null != x ? f.Z.get(x.id) : null)),
        v = (0, u.Z)(),
        A = null != P && a().isMoment(P) && P.isSameOrAfter(a()());
    i.useEffect(() => {
        if (null == x || null != Z) return;
        let { applicationId: e, id: t } = x;
        (0, c.$N)(e, t).catch(S.VqG);
    }, [x, Z]);
    let k = (e) => (e.skuId === g.Si.TIER_0 ? (S.X7u.has(null != M ? M : S.HeQ.UNKNOWN) ? E.NW.format(E.t.o6hBiY, {}) : E.NW.string(E.t['AGf/yc'])) : e.skuId === g.Si.TIER_1 ? (S.X7u.has(null != M ? M : S.HeQ.UNKNOWN) ? E.NW.format(E.t.o6hBiY, {}) : E.NW.string(E.t.knvOV1)) : S.X7u.has(null != M ? M : S.HeQ.UNKNOWN) ? E.NW.format(E.t.A4THYm, {}) : o ? E.NW.string(E.t['g52y/v']) : E.NW.string(E.t.aTUr3d));
    if (null != Z)
        t = (0, r.jsx)('div', {
            className: y.text,
            children: E.NW.format(E.t.tsQOs7, { skuName: Z.name })
        });
    else if (A) {
        let e = h.Z.get(l);
        s()(null != e, 'Missing plan'),
            e.skuId === g.Si.TIER_0
                ? (t = (0, r.jsxs)('div', {
                      className: y.text,
                      children: [(0, r.jsx)('p', { children: E.NW.string(E.t.L9lcGx) }), (0, r.jsx)('p', { children: E.NW.format(E.t.EoDFuL, { helpCenterLink: j.Z.getArticleURL(S.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (e.skuId === g.Si.TIER_1 || e.skuId === g.Si.TIER_2) &&
                  (t = (0, r.jsxs)('div', {
                      className: y.text,
                      children: [(0, r.jsx)('p', { children: E.NW.string(E.t.UPpbPz) }), (0, r.jsx)('p', { children: E.NW.format(E.t.EoDFuL, { helpCenterLink: j.Z.getArticleURL(S.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (v.fractionalState === g.a$.NONE || N)
        if (null != p)
            t = (0, r.jsx)(I, {
                planId: l,
                startingPremiumSubscriptionPlanId: p
            });
        else if (null != T) {
            let e = h.Z.get(l);
            s()(null != e, 'Missing plan'),
                (t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: y.text,
                            children: k(e)
                        }),
                        (0, r.jsx)('div', {
                            className: y.text,
                            children: E.NW.format(E.t['6aZ0NT'], { guildName: T.name })
                        })
                    ]
                }));
        } else {
            let e = h.Z.get(l);
            s()(null != e, 'Missing plan'),
                (t = (0, r.jsx)('div', {
                    className: y.text,
                    children: k(e)
                }));
        }
    else
        t = (0, r.jsx)('div', {
            className: y.text,
            children: E.NW.format(E.t.PLXpCw, { helpCenterLink: j.Z.getArticleURL(S.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        });
    let U = m.ZP.getPremiumType(l);
    return (
        s()(null != U, 'premium type should not be null in purchase confirmation'),
        (n = null != Z ? E.NW.formatToPlainString(E.t['1qGgm5'], { skuName: Z.name }) : N ? E.NW.string(E.t.QJ9EyM) : null != T ? E.NW.string(E.t.ta3cXV) : E.NW.string(E.t.TkTvBw)),
        (0, r.jsxs)('div', {
            className: y.confirmation,
            children: [
                (0, r.jsx)(L.C, {
                    className: y.banner,
                    theme: O,
                    premiumType: U,
                    type: S.X7u.has(null != M ? M : S.HeQ.UNKNOWN) ? L.C.Types.PREMIUM_PAYMENT_STARTED : null != p ? L.C.Types.PREMIUM_UPDATED : L.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                b
                    ? null
                    : (0, r.jsx)(d.zxk, {
                          className: y.button,
                          onClick: _,
                          children: n
                      })
            ]
        })
    );
}
function b(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: i, selectedGiftStyle: l, hasSentMessage: o, giftMessageError: a, isSendingMessage: d } = (0, p.wD)(),
        c = (0, C.e7)([h.Z], () => h.Z.get(t));
    s()(null != c, 'Missing plan');
    let u = (0, C.e7)([x.Z], () => x.Z.getGiftCode(c.skuId));
    return (0, r.jsx)(_.Z, {
        giftCode: u,
        subscriptionPlan: c,
        onClose: n,
        selectedGiftStyle: l,
        hasSentMessage: o,
        giftRecipient: i,
        giftMessageError: a,
        isSendingMessage: d
    });
}
function T() {
    return (0, r.jsxs)('div', {
        className: y.redirectConfirmation,
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/bold',
                children: E.NW.string(E.t.Xtf9wM)
            }),
            (0, r.jsxs)('div', {
                className: y.redirectBody,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: E.NW.string(E.t.bIVRSU)
                    }),
                    (0, r.jsx)('br', {}),
                    (0, r.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: E.NW.string(E.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
