n.d(t, { Z: () => g }), n(411104);
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
    _ = n(474936),
    p = n(388032),
    h = n(88519);
let m = (e, t, n, r) => {
        if (null == e || null == t || null == n) {
            let e = Error('Missing base rate for legal fine print'),
                t = r || 'none';
            return (0, s.q2)(e, { tags: { planId: t } }), null;
        }
        return (0, u.og)((0, u.T4)(e.amount, e.currency), t, n);
    },
    g = function (e) {
        let t, n, s, g;
        let { subscriptionPlan: E, isGift: b, isTrial: v, isOrbCheckout: y, isEmbeddedIAP: O, renewalInvoice: I, paymentSourceType: S, hide: T, purchaseType: N, productLine: A, basePrice: C, currentSubscription: R } = e,
            P = (0, i.e7)([a.ZP], () => a.ZP.inReverseTrial());
        if (T) return null;
        let w = null == e.planGroup ? [] : e.planGroup;
        if (null != I) {
            let e = c.ZP.getIntervalForInvoice(I);
            (t = e.intervalType), (n = e.intervalCount), (s = (0, u.og)((0, u.T4)(I.total, I.currency), t, n)), (g = (0, u.og)((0, u.T4)(I.subtotal, I.currency), t, n));
        } else null != E && ((t = E.interval), (n = E.intervalCount));
        let D = (0, o.K)({
                purchaseType: N || f.GZQ.SUBSCRIPTION,
                plan: E,
                premiumSubscription: null == R ? null : R,
                isGift: !!b,
                planGroup: w,
                isPrepaidPaymentSource: !1
            }),
            L = p.NW.format(p.t.Y2Rkqa, {
                primaryText: D,
                paidURL: f.EYA.PAID_TERMS
            }),
            x = p.NW.format(p.t.H2uH5e, {
                primaryText: D,
                paidURL: f.EYA.PAID_TERMS
            }),
            M = '',
            k = '';
        if (y) M = p.NW.format(p.t.rr811N, { paidURL: f.EYA.PAID_TERMS });
        else if (O) {
            if (null != s && (null == I ? void 0 : I.subscriptionPeriodEnd) != null) M = p.NW.format(p.t['2VPTa2'], { subtotalRate: g });
            else
                switch (t) {
                    case _.rV.MONTH:
                        M = 1 === n ? p.NW.format(p.t['+ywPmZ'], {}) : p.NW.format(p.t.oBwZfn, { intervalCount: n });
                        break;
                    case _.rV.YEAR:
                        M = p.NW.format(p.t.y9gsX1, {});
                        break;
                    case void 0:
                        M = p.NW.format(p.t.UxGFHx, {});
                        break;
                    default:
                        throw Error('Unexpected interval: '.concat(t));
                }
        } else if (N === f.GZQ.ONE_TIME)
            switch (A) {
                case f.POd.COLLECTIBLES:
                    (k = L), (M = b ? p.NW.format(p.t.ofqyUl, { paidURL: f.EYA.PAID_TERMS }) : p.NW.format(p.t.G3l0s7, { paidURL: f.EYA.PAID_TERMS }));
                    break;
                case f.POd.GUILD_PRODUCT:
                    (k = L), (M = p.NW.format(p.t['GEAQ+v'], { paidURL: f.EYA.PAID_TERMS }));
                    break;
                default:
                    (k = x), (M = p.NW.string(p.t['9/siSU']));
            }
        else if (null == E || b)
            switch ((b && (k = L), t)) {
                case _.rV.MONTH:
                    (M = b ? p.NW.string(p.t.IjNapq) : p.NW.string(p.t['/sGXPj'])), (M = b ? p.NW.string(p.t.IjNapq) : 1 === n ? p.NW.string(p.t['/sGXPj']) : p.NW.formatToPlainString(p.t.Fqjiho, { intervalCount: n }));
                    break;
                case _.rV.YEAR:
                    M = b ? p.NW.string(p.t.vAfbGx) : p.NW.string(p.t.IGzFc3);
                    break;
                case void 0:
                    M = '';
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(t));
            }
        else {
            let e;
            let r = (0, o.K)({
                purchaseType: f.GZQ.SUBSCRIPTION,
                plan: E,
                premiumSubscription: null == R ? null : R,
                isGift: !1,
                planGroup: w,
                isPrepaidPaymentSource: !1
            });
            v || (e = m(C, t, n, E.id)),
                (M = (null == R ? void 0 : R.isPausedAllowsResumeButNotUpdates)
                    ? p.NW.format(p.t.B6oNwM, {
                          primaryText: r,
                          rate: e,
                          paidURL: f.EYA.PAID_TERMS,
                          contactLink: f.EYA.CONTACT,
                          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                      })
                    : null != R && (0, d.GY)(R, E.id, w)
                      ? p.NW.format(p.t.LyBQUV, {
                            primaryText: r,
                            rate: e,
                            paidURL: f.EYA.PAID_TERMS,
                            contactLink: f.EYA.CONTACT,
                            helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                        })
                      : P && A === f.POd.BOOST && null != C
                        ? p.NW.format(p.t['2nKy//'], {
                              price: (0, u.T4)(C.amount, C.currency),
                              paidServiceTermsArticle: f.EYA.PAID_TERMS,
                              contactUsArticle: f.EYA.CONTACT,
                              subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING)
                          })
                        : v
                          ? p.NW.format(p.t['Hvo/Z2'], {
                                buttonText: r,
                                interval: c.ZP.formatInterval(null == E ? void 0 : E.interval),
                                cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS)
                            })
                          : p.NW.format(p.t.anJ7OT, {
                                primaryText: r,
                                rate: e,
                                paidURL: f.EYA.PAID_TERMS,
                                contactLink: f.EYA.CONTACT,
                                helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                            }));
        }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                '' !== k &&
                    (0, r.jsxs)('div', {
                        children: [(0, r.jsx)('div', { children: k }), (0, r.jsx)('div', { className: h.divider })]
                    }),
                '' !== M && (0, r.jsx)('div', { children: M }),
                S === f.HeQ.PAYSAFE_CARD &&
                    (0, r.jsx)('div', {
                        className: h.paymentSourceNoticeCopy,
                        children: p.NW.string(p.t.kj9VLC)
                    }),
                S === f.HeQ.SOFORT &&
                    (0, r.jsxs)('div', {
                        className: h.paymentSourceNoticeCopy,
                        children: [p.NW.string(p.t['UYy1/v']), ' ']
                    })
            ]
        });
    };
