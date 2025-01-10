t(411104);
var i = t(200651);
t(192379);
var r = t(442837),
    a = t(858987),
    l = t(78839),
    s = t(122289),
    o = t(63063),
    c = t(74538),
    u = t(937615),
    d = t(296848),
    p = t(981631),
    f = t(474936),
    m = t(388032),
    b = t(318411);
n.Z = function (e) {
    let n, t, v, h;
    let { subscriptionPlan: P, isGift: A, isTrial: T, isEmbeddedIAP: g, renewalInvoice: y, paymentSourceType: E, hide: I, purchaseType: x, productLine: _, basePrice: N, currentSubscription: C } = e,
        R = (0, r.e7)([l.ZP], () => l.ZP.inReverseTrial());
    if (I) return null;
    let S = null == e.planGroup ? [] : e.planGroup;
    if (null != y) {
        let e = c.ZP.getIntervalForInvoice(y);
        (n = e.intervalType), (t = e.intervalCount), (v = (0, u.og)((0, u.T4)(y.total, y.currency), n, t)), (h = (0, u.og)((0, u.T4)(y.subtotal, y.currency), n, t));
    } else null != P && ((n = P.interval), (t = P.intervalCount));
    let M = (0, a.K)({
            purchaseType: x || p.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == C ? null : C,
            isGift: !!A,
            planGroup: S,
            isPrepaidPaymentSource: !1
        }),
        L = m.intl.format(m.t.Y2Rkqa, {
            primaryText: M,
            paidURL: p.EYA.PAID_TERMS
        }),
        j = m.intl.format(m.t.H2uH5e, {
            primaryText: M,
            paidURL: p.EYA.PAID_TERMS
        }),
        k = '',
        U = '';
    if (g) {
        if (null != v && (null == y ? void 0 : y.subscriptionPeriodEnd) != null) k = m.intl.format(m.t['2VPTa2'], { subtotalRate: h });
        else
            switch (n) {
                case f.rV.MONTH:
                    k = 1 === t ? m.intl.format(m.t['+ywPmZ'], {}) : m.intl.format(m.t.oBwZfn, { intervalCount: t });
                    break;
                case f.rV.YEAR:
                    k = m.intl.format(m.t.y9gsX1, {});
                    break;
                case void 0:
                    (U = L), (k = m.intl.format(m.t.UxGFHx, {}));
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(n));
            }
    } else if (x === p.GZQ.ONE_TIME)
        switch (_) {
            case p.POd.COLLECTIBLES:
                (U = L), (k = A ? m.intl.format(m.t.ofqyUl, { paidURL: p.EYA.PAID_TERMS }) : m.intl.format(m.t.G3l0s7, { paidURL: p.EYA.PAID_TERMS }));
                break;
            case p.POd.GUILD_PRODUCT:
                (U = L), (k = m.intl.format(m.t['GEAQ+v'], { paidURL: p.EYA.PAID_TERMS }));
                break;
            default:
                (U = j), (k = m.intl.string(m.t['9/siSU']));
        }
    else if (null == P || A)
        switch ((A && (U = L), n)) {
            case f.rV.MONTH:
                (k = A ? m.intl.string(m.t.IjNapq) : m.intl.string(m.t['/sGXPj'])), (k = A ? m.intl.string(m.t.IjNapq) : 1 === t ? m.intl.string(m.t['/sGXPj']) : m.intl.formatToPlainString(m.t.Fqjiho, { intervalCount: t }));
                break;
            case f.rV.YEAR:
                k = A ? m.intl.string(m.t.vAfbGx) : m.intl.string(m.t.IGzFc3);
                break;
            case void 0:
                k = '';
                break;
            default:
                throw Error('Unexpected interval: '.concat(n));
        }
    else {
        let e;
        let i = (0, a.K)({
            purchaseType: p.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == C ? null : C,
            isGift: !1,
            planGroup: S,
            isPrepaidPaymentSource: !1
        });
        if ((null != N && null != n && null != t && (e = (0, u.og)((0, u.T4)(N.amount, N.currency), n, t)), null == e)) {
            let e = Error('Missing base rate for legal fine print');
            (0, s.q2)(e, { tags: { planId: P.id } });
        }
        k = (null == C ? void 0 : C.isPaused)
            ? m.intl.format(m.t.B6oNwM, {
                  primaryText: i,
                  rate: e,
                  paidURL: p.EYA.PAID_TERMS,
                  contactLink: p.EYA.CONTACT,
                  helpdeskArticle: o.Z.getArticleURL(p.BhN.BILLING)
              })
            : null != C && (0, d.GY)(C, P.id, S)
              ? m.intl.format(m.t.LyBQUV, {
                    primaryText: i,
                    rate: e,
                    paidURL: p.EYA.PAID_TERMS,
                    contactLink: p.EYA.CONTACT,
                    helpdeskArticle: o.Z.getArticleURL(p.BhN.BILLING)
                })
              : R && _ === p.POd.BOOST && null != N
                ? m.intl.format(m.t['2nKy//'], {
                      price: (0, u.T4)(N.amount, N.currency),
                      paidServiceTermsArticle: p.EYA.PAID_TERMS,
                      contactUsArticle: p.EYA.CONTACT,
                      subscriptionFAQArticle: o.Z.getArticleURL(p.BhN.BILLING)
                  })
                : T
                  ? m.intl.format(m.t['Hvo/Z2'], {
                        buttonText: i,
                        interval: c.ZP.formatInterval(null == P ? void 0 : P.interval),
                        cancelSubscriptionArticle: o.Z.getArticleURL(p.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: o.Z.getArticleURL(p.BhN.PAID_TERMS)
                    })
                  : m.intl.format(m.t.anJ7OT, {
                        primaryText: i,
                        rate: e,
                        paidURL: p.EYA.PAID_TERMS,
                        contactLink: p.EYA.CONTACT,
                        helpdeskArticle: o.Z.getArticleURL(p.BhN.BILLING)
                    });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            '' !== U &&
                (0, i.jsxs)('div', {
                    children: [(0, i.jsx)('div', { children: U }), (0, i.jsx)('div', { className: b.divider })]
                }),
            '' !== k && (0, i.jsx)('div', { children: k }),
            E === p.HeQ.PAYSAFE_CARD &&
                (0, i.jsx)('div', {
                    className: b.paymentSourceNoticeCopy,
                    children: m.intl.string(m.t.kj9VLC)
                }),
            E === p.HeQ.SOFORT &&
                (0, i.jsxs)('div', {
                    className: b.paymentSourceNoticeCopy,
                    children: [m.intl.string(m.t['UYy1/v']), ' ']
                })
        ]
    });
};
