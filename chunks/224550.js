n.d(t, { Z: () => m }), n(411104);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(858987),
    s = n(78839),
    o = n(122289),
    l = n(63063),
    u = n(74538),
    c = n(937615),
    d = n(296848),
    f = n(981631),
    _ = n(474936),
    p = n(388032),
    h = n(896247);
let m = function (e) {
    let t, n, m, g;
    let { subscriptionPlan: E, isGift: v, isTrial: y, isEmbeddedIAP: I, renewalInvoice: T, paymentSourceType: b, hide: S, purchaseType: A, productLine: N, basePrice: C, currentSubscription: R } = e,
        O = (0, r.e7)([s.ZP], () => s.ZP.inReverseTrial());
    if (S) return null;
    let D = null == e.planGroup ? [] : e.planGroup;
    if (null != T) {
        let e = u.ZP.getIntervalForInvoice(T);
        (t = e.intervalType), (n = e.intervalCount), (m = (0, c.og)((0, c.T4)(T.total, T.currency), t, n)), (g = (0, c.og)((0, c.T4)(T.subtotal, T.currency), t, n));
    } else null != E && ((t = E.interval), (n = E.intervalCount));
    let L = (0, a.K)({
            purchaseType: A || f.GZQ.SUBSCRIPTION,
            plan: E,
            premiumSubscription: null == R ? null : R,
            isGift: !!v,
            planGroup: D,
            isPrepaidPaymentSource: !1
        }),
        x = p.intl.format(p.t.Y2Rkqa, {
            primaryText: L,
            paidURL: f.EYA.PAID_TERMS
        }),
        w = p.intl.format(p.t.H2uH5e, {
            primaryText: L,
            paidURL: f.EYA.PAID_TERMS
        }),
        P = '',
        M = '';
    if (I) {
        if (null != m && (null == T ? void 0 : T.subscriptionPeriodEnd) != null) P = p.intl.format(p.t['2VPTa2'], { subtotalRate: g });
        else
            switch (t) {
                case _.rV.MONTH:
                    P = 1 === n ? p.intl.format(p.t['+ywPmZ'], {}) : p.intl.format(p.t.oBwZfn, { intervalCount: n });
                    break;
                case _.rV.YEAR:
                    P = p.intl.format(p.t.y9gsX1, {});
                    break;
                case void 0:
                    (M = x), (P = p.intl.format(p.t.UxGFHx, {}));
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(t));
            }
    } else if (A === f.GZQ.ONE_TIME)
        switch (N) {
            case f.POd.COLLECTIBLES:
                (M = x), (P = v ? p.intl.format(p.t.ofqyUl, { paidURL: f.EYA.PAID_TERMS }) : p.intl.format(p.t.G3l0s7, { paidURL: f.EYA.PAID_TERMS }));
                break;
            case f.POd.GUILD_PRODUCT:
                (M = x), (P = p.intl.format(p.t['GEAQ+v'], { paidURL: f.EYA.PAID_TERMS }));
                break;
            default:
                (M = w), (P = p.intl.string(p.t['9/siSU']));
        }
    else if (null == E || v)
        switch ((v && (M = x), t)) {
            case _.rV.MONTH:
                (P = v ? p.intl.string(p.t.IjNapq) : p.intl.string(p.t['/sGXPj'])), (P = v ? p.intl.string(p.t.IjNapq) : 1 === n ? p.intl.string(p.t['/sGXPj']) : p.intl.formatToPlainString(p.t.Fqjiho, { intervalCount: n }));
                break;
            case _.rV.YEAR:
                P = v ? p.intl.string(p.t.vAfbGx) : p.intl.string(p.t.IGzFc3);
                break;
            case void 0:
                P = '';
                break;
            default:
                throw Error('Unexpected interval: '.concat(t));
        }
    else {
        let e;
        let i = (0, a.K)({
            purchaseType: f.GZQ.SUBSCRIPTION,
            plan: E,
            premiumSubscription: null == R ? null : R,
            isGift: !1,
            planGroup: D,
            isPrepaidPaymentSource: !1
        });
        if ((null != C && null != t && null != n && (e = (0, c.og)((0, c.T4)(C.amount, C.currency), t, n)), null == e)) {
            let e = Error('Missing base rate for legal fine print');
            (0, o.q2)(e, { tags: { planId: E.id } });
        }
        P = (null == R ? void 0 : R.isPaused)
            ? p.intl.format(p.t.B6oNwM, {
                  primaryText: i,
                  rate: e,
                  paidURL: f.EYA.PAID_TERMS,
                  contactLink: f.EYA.CONTACT,
                  helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
              })
            : null != R && (0, d.GY)(R, E.id, D)
              ? p.intl.format(p.t.LyBQUV, {
                    primaryText: i,
                    rate: e,
                    paidURL: f.EYA.PAID_TERMS,
                    contactLink: f.EYA.CONTACT,
                    helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                })
              : O && N === f.POd.BOOST && null != C
                ? p.intl.format(p.t['2nKy//'], {
                      price: (0, c.T4)(C.amount, C.currency),
                      paidServiceTermsArticle: f.EYA.PAID_TERMS,
                      contactUsArticle: f.EYA.CONTACT,
                      subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING)
                  })
                : y
                  ? p.intl.format(p.t['Hvo/Z2'], {
                        buttonText: i,
                        interval: u.ZP.formatInterval(null == E ? void 0 : E.interval),
                        cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS)
                    })
                  : p.intl.format(p.t.anJ7OT, {
                        primaryText: i,
                        rate: e,
                        paidURL: f.EYA.PAID_TERMS,
                        contactLink: f.EYA.CONTACT,
                        helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                    });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            '' !== M &&
                (0, i.jsxs)('div', {
                    children: [(0, i.jsx)('div', { children: M }), (0, i.jsx)('div', { className: h.divider })]
                }),
            '' !== P && (0, i.jsx)('div', { children: P }),
            b === f.HeQ.PAYSAFE_CARD &&
                (0, i.jsx)('div', {
                    className: h.paymentSourceNoticeCopy,
                    children: p.intl.string(p.t.kj9VLC)
                }),
            b === f.HeQ.SOFORT &&
                (0, i.jsxs)('div', {
                    className: h.paymentSourceNoticeCopy,
                    children: [p.intl.string(p.t['UYy1/v']), ' ']
                })
        ]
    });
};
