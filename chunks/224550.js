var i = r(411104);
var a = r(200651);
r(192379);
var o = r(442837),
    s = r(858987),
    l = r(78839),
    u = r(122289),
    c = r(63063),
    d = r(74538),
    f = r(937615),
    p = r(296848),
    h = r(981631),
    _ = r(474936),
    m = r(388032),
    g = r(318411);
function E(e) {
    let n, r, i, E;
    let { subscriptionPlan: v, isGift: y, isTrial: b, isEmbeddedIAP: I, renewalInvoice: T, paymentSourceType: S, hide: A, purchaseType: C, productLine: N, basePrice: R, currentSubscription: O } = e,
        D = (0, o.e7)([l.ZP], () => l.ZP.inReverseTrial());
    if (A) return null;
    let x = null == e.planGroup ? [] : e.planGroup;
    if (null != T) {
        let e = d.ZP.getIntervalForInvoice(T);
        (n = e.intervalType), (r = e.intervalCount), (i = (0, f.og)((0, f.T4)(T.total, T.currency), n, r)), (E = (0, f.og)((0, f.T4)(T.subtotal, T.currency), n, r));
    } else null != v && ((n = v.interval), (r = v.intervalCount));
    let L = (0, s.K)({
            purchaseType: C || h.GZQ.SUBSCRIPTION,
            plan: v,
            premiumSubscription: null == O ? null : O,
            isGift: !!y,
            planGroup: x,
            isPrepaidPaymentSource: !1
        }),
        w = m.intl.format(m.t.Y2Rkqa, {
            primaryText: L,
            paidURL: h.EYA.PAID_TERMS
        }),
        P = m.intl.format(m.t.H2uH5e, {
            primaryText: L,
            paidURL: h.EYA.PAID_TERMS
        }),
        M = '',
        k = '';
    if (I) {
        if (null != i && (null == T ? void 0 : T.subscriptionPeriodEnd) != null) M = m.intl.format(m.t['2VPTa2'], { subtotalRate: E });
        else
            switch (n) {
                case _.rV.MONTH:
                    M = 1 === r ? m.intl.format(m.t['+ywPmZ'], {}) : m.intl.format(m.t.oBwZfn, { intervalCount: r });
                    break;
                case _.rV.YEAR:
                    M = m.intl.format(m.t.y9gsX1, {});
                    break;
                case void 0:
                    (k = w), (M = m.intl.format(m.t.UxGFHx, {}));
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(n));
            }
    } else if (C === h.GZQ.ONE_TIME)
        switch (N) {
            case h.POd.COLLECTIBLES:
                (k = w), (M = y ? m.intl.format(m.t.ofqyUl, { paidURL: h.EYA.PAID_TERMS }) : m.intl.format(m.t.G3l0s7, { paidURL: h.EYA.PAID_TERMS }));
                break;
            case h.POd.GUILD_PRODUCT:
                (k = w), (M = m.intl.format(m.t['GEAQ+v'], { paidURL: h.EYA.PAID_TERMS }));
                break;
            default:
                (k = P), (M = m.intl.string(m.t['9/siSU']));
        }
    else if (null == v || y)
        switch ((y && (k = w), n)) {
            case _.rV.MONTH:
                (M = y ? m.intl.string(m.t.IjNapq) : m.intl.string(m.t['/sGXPj'])), (M = y ? m.intl.string(m.t.IjNapq) : 1 === r ? m.intl.string(m.t['/sGXPj']) : m.intl.formatToPlainString(m.t.Fqjiho, { intervalCount: r }));
                break;
            case _.rV.YEAR:
                M = y ? m.intl.string(m.t.vAfbGx) : m.intl.string(m.t.IGzFc3);
                break;
            case void 0:
                M = '';
                break;
            default:
                throw Error('Unexpected interval: '.concat(n));
        }
    else {
        let e;
        let i = (0, s.K)({
            purchaseType: h.GZQ.SUBSCRIPTION,
            plan: v,
            premiumSubscription: null == O ? null : O,
            isGift: !1,
            planGroup: x,
            isPrepaidPaymentSource: !1
        });
        if ((null != R && null != n && null != r && (e = (0, f.og)((0, f.T4)(R.amount, R.currency), n, r)), null == e)) {
            let e = Error('Missing base rate for legal fine print');
            (0, u.q2)(e, { tags: { planId: v.id } });
        }
        M = (null == O ? void 0 : O.isPaused)
            ? m.intl.format(m.t.B6oNwM, {
                  primaryText: i,
                  rate: e,
                  paidURL: h.EYA.PAID_TERMS,
                  contactLink: h.EYA.CONTACT,
                  helpdeskArticle: c.Z.getArticleURL(h.BhN.BILLING)
              })
            : null != O && (0, p.GY)(O, v.id, x)
              ? m.intl.format(m.t.LyBQUV, {
                    primaryText: i,
                    rate: e,
                    paidURL: h.EYA.PAID_TERMS,
                    contactLink: h.EYA.CONTACT,
                    helpdeskArticle: c.Z.getArticleURL(h.BhN.BILLING)
                })
              : D && N === h.POd.BOOST && null != R
                ? m.intl.format(m.t['2nKy//'], {
                      price: (0, f.T4)(R.amount, R.currency),
                      paidServiceTermsArticle: h.EYA.PAID_TERMS,
                      contactUsArticle: h.EYA.CONTACT,
                      subscriptionFAQArticle: c.Z.getArticleURL(h.BhN.BILLING)
                  })
                : b
                  ? m.intl.format(m.t['Hvo/Z2'], {
                        buttonText: i,
                        interval: d.ZP.formatInterval(null == v ? void 0 : v.interval),
                        cancelSubscriptionArticle: c.Z.getArticleURL(h.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: c.Z.getArticleURL(h.BhN.PAID_TERMS)
                    })
                  : m.intl.format(m.t.anJ7OT, {
                        primaryText: i,
                        rate: e,
                        paidURL: h.EYA.PAID_TERMS,
                        contactLink: h.EYA.CONTACT,
                        helpdeskArticle: c.Z.getArticleURL(h.BhN.BILLING)
                    });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            '' !== k &&
                (0, a.jsxs)('div', {
                    children: [(0, a.jsx)('div', { children: k }), (0, a.jsx)('div', { className: g.divider })]
                }),
            '' !== M && (0, a.jsx)('div', { children: M }),
            S === h.HeQ.PAYSAFE_CARD &&
                (0, a.jsx)('div', {
                    className: g.paymentSourceNoticeCopy,
                    children: m.intl.string(m.t.kj9VLC)
                }),
            S === h.HeQ.SOFORT &&
                (0, a.jsxs)('div', {
                    className: g.paymentSourceNoticeCopy,
                    children: [m.intl.string(m.t['UYy1/v']), ' ']
                })
        ]
    });
}
n.Z = E;
