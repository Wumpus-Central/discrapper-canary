(n.d(e, {
    TB: () => _,
    VY: () => R,
    ZP: () => p
}),
    n(388685),
    n(415506));
var i = n(255367),
    l = n(73800),
    s = n(512722),
    C = n.n(s),
    r = n(442837),
    a = n(481060),
    L = n(16084),
    H = n(987209),
    c = n(563132),
    u = n(179118),
    d = n(912788),
    M = n(509545),
    o = n(55563),
    h = n(63063),
    Z = n(74538),
    g = n(296848),
    m = n(335105),
    N = n(741245),
    x = n(474936),
    T = n(981631),
    f = n(388032),
    I = n(106772);
function E(t) {
    let e,
        { planId: n, startingPremiumSubscriptionPlanId: l, paymentSourceType: s } = t,
        [a, L] = (0, r.Wu)([M.Z], () => [M.Z.get(l), M.Z.get(n)]);
    if ((C()(null != a && null != L, 'Missing startingPlan or newPlan'), x.Y1.indexOf(l) < x.Y1.indexOf(n)))
        switch (n) {
            case x.Xh.PREMIUM_MONTH_TIER_1:
                ((e = f.intl.string(f.t.knvOV1)), T.X7u.has(null != s ? s : T.HeQ.UNKNOWN) && (e = f.intl.format(f.t.o6hBiY, {})));
                break;
            case x.Xh.PREMIUM_MONTH_TIER_2:
                ((e = f.intl.string(f.t.f8Dqur)), T.X7u.has(null != s ? s : T.HeQ.UNKNOWN) && (e = f.intl.format(f.t.A4THYm, {})));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_1:
                ((e = f.intl.string(f.t.YZd5r6)), T.X7u.has(null != s ? s : T.HeQ.UNKNOWN) && (e = f.intl.format(f.t.MHAxpK, {})));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_2:
                ((e = f.intl.formatToPlainString(f.t['M/Lknp'], { numFreeGuildSubscriptions: x.cb })), T.X7u.has(null != s ? s : T.HeQ.UNKNOWN) && (e = f.intl.format(f.t.mULxLS, { numFreeGuildSubscriptions: x.cb })));
                break;
            case x.Xh.PREMIUM_3_MONTH_TIER_2:
            case x.Xh.PREMIUM_6_MONTH_TIER_2:
                e = f.intl.string(f.t.aaCoW1);
                break;
            case x.Xh.PREMIUM_MONTH_TIER_0:
            case x.Xh.PREMIUM_YEAR_TIER_0:
                e = f.intl.string(f.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(n));
        }
    else if (a.skuId === x.Si.TIER_2 && L.skuId === x.Si.TIER_1) e = f.intl.string(f.t.PNX4ND);
    else
        switch (L.skuId) {
            case x.Si.TIER_0:
                e = f.intl.string(f.t['XEoQ7+']);
                break;
            case x.Si.TIER_1:
                e = f.intl.string(f.t.nLI1Ki);
                break;
            case x.Si.TIER_2:
                e = 1 !== a.intervalCount ? f.intl.string(f.t.qSZZVF) : f.intl.string(f.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(L.skuId));
        }
    return (0, i.jsx)('div', {
        className: I.text,
        children: e
    });
}
function p(t) {
    let e,
        n,
        { planId: s, enableNoPaymentTrial: H, startingPremiumSubscriptionPlanId: u, onClose: d, followupSKUInfo: p, isDowngrade: _, hideClose: R, postSuccessGuild: v, paymentSourceType: j, startingFractionalPremiumEndsAt: k } = t,
        { enablePremiumBrandRefresh: P } = (0, c.JL)(),
        { theme: U } = (0, a.TCT)(),
        w = (0, r.e7)([o.Z], () => (null != p ? o.Z.get(p.id) : null)),
        b = (0, g.qH)(k);
    l.useEffect(() => {
        if (null == p || null != w) return;
        let { applicationId: t, id: e } = p;
        (0, L.$N)(t, e).catch(T.VqG);
    }, [p, w]);
    let A = (t) => (t.skuId === x.Si.TIER_0 ? (T.X7u.has(null != j ? j : T.HeQ.UNKNOWN) ? f.intl.format(f.t.o6hBiY, {}) : f.intl.string(f.t['AGf/yc'])) : t.skuId === x.Si.TIER_1 ? (T.X7u.has(null != j ? j : T.HeQ.UNKNOWN) ? f.intl.format(f.t.o6hBiY, {}) : f.intl.string(f.t.knvOV1)) : T.X7u.has(null != j ? j : T.HeQ.UNKNOWN) ? f.intl.format(f.t.A4THYm, {}) : H ? f.intl.string(f.t['g52y/v']) : f.intl.string(f.t.aTUr3d));
    if (null != w)
        e = (0, i.jsx)('div', {
            className: I.text,
            children: f.intl.format(f.t.tsQOs7, { skuName: w.name })
        });
    else if (b && !_) {
        let t = M.Z.get(s);
        (C()(null != t, 'Missing plan'),
            t.skuId === x.Si.TIER_0
                ? (e = (0, i.jsxs)('div', {
                      className: I.text,
                      children: [(0, i.jsx)('p', { children: f.intl.string(f.t.L9lcGx) }), (0, i.jsx)('p', { children: f.intl.format(f.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (t.skuId === x.Si.TIER_1 || t.skuId === x.Si.TIER_2) &&
                  (e = (0, i.jsxs)('div', {
                      className: I.text,
                      children: [(0, i.jsx)('p', { children: f.intl.string(f.t.UPpbPz) }), (0, i.jsx)('p', { children: f.intl.format(f.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  })));
    } else if (null != u)
        e = (0, i.jsx)(E, {
            planId: s,
            startingPremiumSubscriptionPlanId: u
        });
    else if (null != v) {
        let t = M.Z.get(s);
        (C()(null != t, 'Missing plan'),
            (e = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: I.text,
                        children: A(t)
                    }),
                    (0, i.jsx)('div', {
                        className: I.text,
                        children: f.intl.format(f.t['6aZ0NT'], { guildName: v.name })
                    })
                ]
            })));
    } else {
        let t = M.Z.get(s);
        (C()(null != t, 'Missing plan'),
            (e = (0, i.jsx)('div', {
                className: I.text,
                children: A(t)
            })));
    }
    let O = Z.ZP.getPremiumType(s);
    (C()(null != O, 'premium type should not be null in purchase confirmation'), (n = null != w ? f.intl.formatToPlainString(f.t['1qGgm5'], { skuName: w.name }) : _ ? f.intl.string(f.t.QJ9EyM) : null != v ? f.intl.string(f.t.ta3cXV) : f.intl.string(f.t.TkTvBw)));
    let S = () => (T.X7u.has(null != j ? j : T.HeQ.UNKNOWN) ? N.ZP.Types.PREMIUM_PAYMENT_STARTED : null != u ? N.ZP.Types.PREMIUM_UPDATED : N.ZP.Types.PREMIUM_ACTIVATED);
    return (0, i.jsxs)('div', {
        className: I.confirmation,
        children: [
            P
                ? (0, i.jsx)(m.Z, {
                      type: S(),
                      theme: U
                  })
                : (0, i.jsx)(N.ZP, {
                      className: I.banner,
                      theme: U,
                      premiumType: O,
                      type: S()
                  }),
            e,
            R
                ? null
                : (0, i.jsx)('div', {
                      'data-button-hoisted-classname-wrapper': !0,
                      className: I.button,
                      children: (0, i.jsx)(a.zxk, {
                          variant: 'primary',
                          text: n,
                          onClick: d
                      })
                  })
        ]
    });
}
function _(t) {
    let { planId: e, onClose: n } = t,
        { giftRecipient: l, selectedGiftStyle: s, hasSentMessage: a, giftMessageError: L, isSendingMessage: c } = (0, H.wD)(),
        o = (0, r.e7)([M.Z], () => M.Z.get(e));
    C()(null != o, 'Missing plan');
    let h = (0, r.e7)([d.Z], () => d.Z.getGiftCode(o.skuId));
    return (0, i.jsx)(u.Z, {
        giftCode: h,
        subscriptionPlan: o,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: a,
        giftRecipient: l,
        giftMessageError: L,
        isSendingMessage: c
    });
}
function R() {
    return (0, i.jsxs)('div', {
        className: I.redirectConfirmation,
        children: [
            (0, i.jsx)(a.X6q, {
                variant: 'heading-xl/bold',
                children: f.intl.string(f.t.Xtf9wM)
            }),
            (0, i.jsxs)('div', {
                className: I.redirectBody,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: f.intl.string(f.t.bIVRSU)
                    }),
                    (0, i.jsx)('br', {}),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: f.intl.string(f.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
