n.d(e, {
    TB: () => p,
    VY: () => R,
    ZP: () => _
}),
    n(388685),
    n(415506);
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
    M = n(912788),
    d = n(509545),
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
        [a, L] = (0, r.Wu)([d.Z], () => [d.Z.get(l), d.Z.get(n)]);
    if ((C()(null != a && null != L, 'Missing startingPlan or newPlan'), x.Y1.indexOf(l) < x.Y1.indexOf(n)))
        switch (n) {
            case x.Xh.PREMIUM_MONTH_TIER_1:
                (e = f.intl.string(f.t.knvOV1)), T.X7u.has(null != s ? s : T.HeQ.UNKNOWN) && (e = f.intl.format(f.t.o6hBiY, {}));
                break;
            case x.Xh.PREMIUM_MONTH_TIER_2:
                (e = f.intl.string(f.t.f8Dqur)), T.X7u.has(null != s ? s : T.HeQ.UNKNOWN) && (e = f.intl.format(f.t.A4THYm, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_1:
                (e = f.intl.string(f.t.YZd5r6)), T.X7u.has(null != s ? s : T.HeQ.UNKNOWN) && (e = f.intl.format(f.t.MHAxpK, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_2:
                (e = f.intl.formatToPlainString(f.t['M/Lknp'], { numFreeGuildSubscriptions: x.cb })), T.X7u.has(null != s ? s : T.HeQ.UNKNOWN) && (e = f.intl.format(f.t.mULxLS, { numFreeGuildSubscriptions: x.cb }));
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
function _(t) {
    let e,
        n,
        { planId: s, enableNoPaymentTrial: H, startingPremiumSubscriptionPlanId: u, onClose: M, followupSKUInfo: _, isDowngrade: p, hideClose: R, postSuccessGuild: j, paymentSourceType: k, startingFractionalPremiumEndsAt: v } = t,
        { enablePremiumRebrandDesign: P } = (0, c.JL)(),
        { theme: U } = (0, a.TCT)(),
        w = (0, r.e7)([o.Z], () => (null != _ ? o.Z.get(_.id) : null)),
        b = (0, g.qH)(v);
    l.useEffect(() => {
        if (null == _ || null != w) return;
        let { applicationId: t, id: e } = _;
        (0, L.$N)(t, e).catch(T.VqG);
    }, [_, w]);
    let A = (t) => (t.skuId === x.Si.TIER_0 ? (T.X7u.has(null != k ? k : T.HeQ.UNKNOWN) ? f.intl.format(f.t.o6hBiY, {}) : f.intl.string(f.t['AGf/yc'])) : t.skuId === x.Si.TIER_1 ? (T.X7u.has(null != k ? k : T.HeQ.UNKNOWN) ? f.intl.format(f.t.o6hBiY, {}) : f.intl.string(f.t.knvOV1)) : T.X7u.has(null != k ? k : T.HeQ.UNKNOWN) ? f.intl.format(f.t.A4THYm, {}) : H ? f.intl.string(f.t['g52y/v']) : f.intl.string(f.t.aTUr3d));
    if (null != w)
        e = (0, i.jsx)('div', {
            className: I.text,
            children: f.intl.format(f.t.tsQOs7, { skuName: w.name })
        });
    else if (b && !p) {
        let t = d.Z.get(s);
        C()(null != t, 'Missing plan'),
            t.skuId === x.Si.TIER_0
                ? (e = (0, i.jsxs)('div', {
                      className: I.text,
                      children: [(0, i.jsx)('p', { children: f.intl.string(f.t.L9lcGx) }), (0, i.jsx)('p', { children: f.intl.format(f.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }))
                : (t.skuId === x.Si.TIER_1 || t.skuId === x.Si.TIER_2) &&
                  (e = (0, i.jsxs)('div', {
                      className: I.text,
                      children: [(0, i.jsx)('p', { children: f.intl.string(f.t.UPpbPz) }), (0, i.jsx)('p', { children: f.intl.format(f.t.EoDFuL, { helpCenterLink: h.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) }) })]
                  }));
    } else if (null != u)
        e = (0, i.jsx)(E, {
            planId: s,
            startingPremiumSubscriptionPlanId: u
        });
    else if (null != j) {
        let t = d.Z.get(s);
        C()(null != t, 'Missing plan'),
            (e = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: I.text,
                        children: A(t)
                    }),
                    (0, i.jsx)('div', {
                        className: I.text,
                        children: f.intl.format(f.t['6aZ0NT'], { guildName: j.name })
                    })
                ]
            }));
    } else {
        let t = d.Z.get(s);
        C()(null != t, 'Missing plan'),
            (e = (0, i.jsx)('div', {
                className: I.text,
                children: A(t)
            }));
    }
    let O = Z.ZP.getPremiumType(s);
    C()(null != O, 'premium type should not be null in purchase confirmation'), (n = null != w ? f.intl.formatToPlainString(f.t['1qGgm5'], { skuName: w.name }) : p ? f.intl.string(f.t.QJ9EyM) : null != j ? f.intl.string(f.t.ta3cXV) : f.intl.string(f.t.TkTvBw));
    let S = () => (T.X7u.has(null != k ? k : T.HeQ.UNKNOWN) ? N.ZP.Types.PREMIUM_PAYMENT_STARTED : null != u ? N.ZP.Types.PREMIUM_UPDATED : N.ZP.Types.PREMIUM_ACTIVATED);
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
                : (0, i.jsx)(a.zxk, {
                      className: I.button,
                      onClick: M,
                      children: n
                  })
        ]
    });
}
function p(t) {
    let { planId: e, onClose: n } = t,
        { giftRecipient: l, selectedGiftStyle: s, hasSentMessage: a, giftMessageError: L, isSendingMessage: c } = (0, H.wD)(),
        o = (0, r.e7)([d.Z], () => d.Z.get(e));
    C()(null != o, 'Missing plan');
    let h = (0, r.e7)([M.Z], () => M.Z.getGiftCode(o.skuId));
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
