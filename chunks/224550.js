n.d(t, { Z: () => m }), n(411104);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(858987),
    a = n(78839),
    s = n(122289),
    l = n(63063),
    c = n(74538),
    u = n(937615),
    d = n(296848),
    f = n(981631),
    p = n(474936),
    _ = n(388032),
    h = n(90595);
let m = function (e) {
    let t, n, m, g;
    let { subscriptionPlan: E, isGift: v, isTrial: b, isEmbeddedIAP: y, renewalInvoice: O, paymentSourceType: S, hide: I, purchaseType: T, productLine: N, basePrice: A, currentSubscription: C } = e,
        R = (0, i.e7)([a.ZP], () => a.ZP.inReverseTrial());
    if (I) return null;
    let P = null == e.planGroup ? [] : e.planGroup;
    if (null != O) {
        let e = c.ZP.getIntervalForInvoice(O);
        (t = e.intervalType), (n = e.intervalCount), (m = (0, u.og)((0, u.T4)(O.total, O.currency), t, n)), (g = (0, u.og)((0, u.T4)(O.subtotal, O.currency), t, n));
    } else null != E && ((t = E.interval), (n = E.intervalCount));
    let w = (0, o.K)({
            purchaseType: T || f.GZQ.SUBSCRIPTION,
            plan: E,
            premiumSubscription: null == C ? null : C,
            isGift: !!v,
            planGroup: P,
            isPrepaidPaymentSource: !1
        }),
        D = _.NW.format(_.t.Y2Rkqa, {
            primaryText: w,
            paidURL: f.EYA.PAID_TERMS
        }),
        x = _.NW.format(_.t.H2uH5e, {
            primaryText: w,
            paidURL: f.EYA.PAID_TERMS
        }),
        L = '',
        M = '';
    if (y) {
        if (null != m && (null == O ? void 0 : O.subscriptionPeriodEnd) != null) L = _.NW.format(_.t['2VPTa2'], { subtotalRate: g });
        else
            switch (t) {
                case p.rV.MONTH:
                    L = 1 === n ? _.NW.format(_.t['+ywPmZ'], {}) : _.NW.format(_.t.oBwZfn, { intervalCount: n });
                    break;
                case p.rV.YEAR:
                    L = _.NW.format(_.t.y9gsX1, {});
                    break;
                case void 0:
                    (M = D), (L = _.NW.format(_.t.UxGFHx, {}));
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(t));
            }
    } else if (T === f.GZQ.ONE_TIME)
        switch (N) {
            case f.POd.COLLECTIBLES:
                (M = D), (L = v ? _.NW.format(_.t.ofqyUl, { paidURL: f.EYA.PAID_TERMS }) : _.NW.format(_.t.G3l0s7, { paidURL: f.EYA.PAID_TERMS }));
                break;
            case f.POd.GUILD_PRODUCT:
                (M = D), (L = _.NW.format(_.t['GEAQ+v'], { paidURL: f.EYA.PAID_TERMS }));
                break;
            default:
                (M = x), (L = _.NW.string(_.t['9/siSU']));
        }
    else if (null == E || v)
        switch ((v && (M = D), t)) {
            case p.rV.MONTH:
                (L = v ? _.NW.string(_.t.IjNapq) : _.NW.string(_.t['/sGXPj'])), (L = v ? _.NW.string(_.t.IjNapq) : 1 === n ? _.NW.string(_.t['/sGXPj']) : _.NW.formatToPlainString(_.t.Fqjiho, { intervalCount: n }));
                break;
            case p.rV.YEAR:
                L = v ? _.NW.string(_.t.vAfbGx) : _.NW.string(_.t.IGzFc3);
                break;
            case void 0:
                L = '';
                break;
            default:
                throw Error('Unexpected interval: '.concat(t));
        }
    else {
        let e;
        let r = (0, o.K)({
            purchaseType: f.GZQ.SUBSCRIPTION,
            plan: E,
            premiumSubscription: null == C ? null : C,
            isGift: !1,
            planGroup: P,
            isPrepaidPaymentSource: !1
        });
        if ((null != A && null != t && null != n && (e = (0, u.og)((0, u.T4)(A.amount, A.currency), t, n)), null == e)) {
            let e = Error('Missing base rate for legal fine print');
            (0, s.q2)(e, { tags: { planId: E.id } });
        }
        L = (null == C ? void 0 : C.isPaused)
            ? _.NW.format(_.t.B6oNwM, {
                  primaryText: r,
                  rate: e,
                  paidURL: f.EYA.PAID_TERMS,
                  contactLink: f.EYA.CONTACT,
                  helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
              })
            : null != C && (0, d.GY)(C, E.id, P)
              ? _.NW.format(_.t.LyBQUV, {
                    primaryText: r,
                    rate: e,
                    paidURL: f.EYA.PAID_TERMS,
                    contactLink: f.EYA.CONTACT,
                    helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                })
              : R && N === f.POd.BOOST && null != A
                ? _.NW.format(_.t['2nKy//'], {
                      price: (0, u.T4)(A.amount, A.currency),
                      paidServiceTermsArticle: f.EYA.PAID_TERMS,
                      contactUsArticle: f.EYA.CONTACT,
                      subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING)
                  })
                : b
                  ? _.NW.format(_.t['Hvo/Z2'], {
                        buttonText: r,
                        interval: c.ZP.formatInterval(null == E ? void 0 : E.interval),
                        cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS)
                    })
                  : _.NW.format(_.t.anJ7OT, {
                        primaryText: r,
                        rate: e,
                        paidURL: f.EYA.PAID_TERMS,
                        contactLink: f.EYA.CONTACT,
                        helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                    });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            '' !== M &&
                (0, r.jsxs)('div', {
                    children: [(0, r.jsx)('div', { children: M }), (0, r.jsx)('div', { className: h.divider })]
                }),
            '' !== L && (0, r.jsx)('div', { children: L }),
            S === f.HeQ.PAYSAFE_CARD &&
                (0, r.jsx)('div', {
                    className: h.paymentSourceNoticeCopy,
                    children: _.NW.string(_.t.kj9VLC)
                }),
            S === f.HeQ.SOFORT &&
                (0, r.jsxs)('div', {
                    className: h.paymentSourceNoticeCopy,
                    children: [_.NW.string(_.t['UYy1/v']), ' ']
                })
        ]
    });
};
