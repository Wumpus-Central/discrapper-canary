n.d(t, { Z: () => E }), n(415506), n(388685);
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(858987),
    o = n(78839),
    s = n(122289),
    l = n(63063),
    c = n(74538),
    u = n(937615),
    d = n(296848),
    f = n(981631),
    _ = n(215023),
    p = n(474936),
    h = n(388032),
    m = n(215893);
let g = (e, t, n, r) => {
        if (null == e || null == t || null == n) {
            let e = Error('Missing base rate for legal fine print'),
                t = r || 'none';
            return (0, s.q2)(e, { tags: { planId: t } }), null;
        }
        return (0, u.og)((0, u.T4)(e.amount, e.currency), t, n);
    },
    E = function (e) {
        let t,
            n,
            s,
            E,
            { subscriptionPlan: b, isGift: y, isTrial: v, isOrbCheckout: O, isEmbeddedIAP: I, renewalInvoice: S, paymentSourceType: T, hide: A, purchaseType: N, productLine: C, proratedAmount: R, basePrice: P, currentSubscription: w, skuId: D } = e,
            L = (0, i.e7)([o.ZP], () => o.ZP.inReverseTrial());
        if (A) return null;
        let x = null == e.planGroup ? [] : e.planGroup;
        if (null != S) {
            let e = c.ZP.getIntervalForInvoice(S);
            (t = e.intervalType), (n = e.intervalCount), (s = (0, u.og)((0, u.T4)(S.total, S.currency), t, n)), (E = (0, u.og)((0, u.T4)(S.subtotal, S.currency), t, n));
        } else null != b && ((t = b.interval), (n = b.intervalCount));
        let M = (0, a.K)({
                purchaseType: N || f.GZQ.SUBSCRIPTION,
                plan: b,
                premiumSubscription: null == w ? null : w,
                productLine: C,
                isGift: !!y,
                planGroup: x,
                isPrepaidPaymentSource: !1
            }),
            k = h.intl.format(h.t.Y2Rkqa, {
                primaryText: M,
                paidURL: f.EYA.PAID_TERMS
            }),
            j = h.intl.format(h.t.H2uH5e, {
                primaryText: M,
                paidURL: f.EYA.PAID_TERMS
            }),
            U = '',
            G = '';
        if (O) {
            U = h.intl.format(h.t.xlJyOD, {
                virtualGoodsURL: f.EYA.PAID_TERMS_VIRTUAL_GOODS,
                paidURL: f.EYA.PAID_TERMS
            });
            let e = '';
            (e = D === _.Vt.ORB_PROFILE_BADGE ? h.intl.string(h.t.APcKRk) : D === _.Vt.FRACTIONAL_PREMIUM ? h.intl.string(h.t.FhJ74u) : h.intl.string(h.t.jCRYDw)), Array.isArray(U) ? (U = [...U, ' '.concat(e)]) : (U += ' '.concat(e));
        } else if (I)
            if (null != s && (null == S ? void 0 : S.subscriptionPeriodEnd) != null) U = h.intl.format(h.t['2VPTa2'], { subtotalRate: E });
            else
                switch (t) {
                    case p.rV.MONTH:
                        U = 1 === n ? h.intl.format(h.t['+ywPmZ'], {}) : h.intl.format(h.t.oBwZfn, { intervalCount: n });
                        break;
                    case p.rV.YEAR:
                        U = h.intl.format(h.t.y9gsX1, {});
                        break;
                    case void 0:
                        U = h.intl.format(h.t.UxGFHx, {});
                        break;
                    default:
                        throw Error('Unexpected interval: '.concat(t));
                }
        else if (N === f.GZQ.ONE_TIME)
            switch (C) {
                case f.POd.COLLECTIBLES:
                    (G = k), (U = y ? h.intl.format(h.t.ofqyUl, { paidURL: f.EYA.PAID_TERMS }) : h.intl.format(h.t.G3l0s7, { paidURL: f.EYA.PAID_TERMS }));
                    break;
                case f.POd.GUILD_PRODUCT:
                    (G = k), (U = h.intl.format(h.t['GEAQ+v'], { paidURL: f.EYA.PAID_TERMS }));
                    break;
                default:
                    (G = j), (U = h.intl.string(h.t['9/siSU']));
            }
        else if (null == b || y)
            switch ((y && (G = k), t)) {
                case p.rV.MONTH:
                    (U = y ? h.intl.string(h.t.IjNapq) : h.intl.string(h.t['/sGXPj'])), (U = y ? h.intl.string(h.t.IjNapq) : 1 === n ? h.intl.string(h.t['/sGXPj']) : h.intl.formatToPlainString(h.t.Fqjiho, { intervalCount: n }));
                    break;
                case p.rV.YEAR:
                    U = y ? h.intl.string(h.t.vAfbGx) : h.intl.string(h.t.IGzFc3);
                    break;
                case void 0:
                    U = '';
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(t));
            }
        else {
            let e,
                r = (0, a.K)({
                    productLine: C,
                    purchaseType: f.GZQ.SUBSCRIPTION,
                    plan: b,
                    premiumSubscription: null == w ? null : w,
                    isGift: !1,
                    planGroup: x,
                    isPrepaidPaymentSource: !1
                });
            v || (e = g(P, t, n, b.id)),
                (U = (null == w ? void 0 : w.isPausedAllowsResumeButNotUpdates)
                    ? h.intl.format(h.t.B6oNwM, {
                          primaryText: r,
                          rate: e,
                          paidURL: f.EYA.PAID_TERMS,
                          contactLink: f.EYA.CONTACT,
                          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                      })
                    : null != w && (0, d.GY)(w, b.id, x)
                      ? h.intl.format(h.t.LyBQUV, {
                            primaryText: r,
                            rate: e,
                            paidURL: f.EYA.PAID_TERMS,
                            contactLink: f.EYA.CONTACT,
                            helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                        })
                      : L && C === f.POd.BOOST && null != P
                        ? h.intl.format(h.t['2nKy//'], {
                              price: (0, u.T4)(P.amount, P.currency),
                              paidServiceTermsArticle: f.EYA.PAID_TERMS,
                              contactUsArticle: f.EYA.CONTACT,
                              subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING)
                          })
                        : v
                          ? h.intl.format(h.t['Hvo/Z2'], {
                                buttonText: r,
                                interval: c.ZP.formatInterval(null == b ? void 0 : b.interval),
                                cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS)
                            })
                          : null != R && null != P
                            ? h.intl.format(h.t.Kcieh4, {
                                  primaryText: r,
                                  proratedAmount: (0, u.T4)(R, P.currency),
                                  renewalAmount: (0, u.T4)(P.amount, P.currency),
                                  rateInterval: c.ZP.formatInterval(null == b ? void 0 : b.interval),
                                  paidURL: f.EYA.PAID_TERMS,
                                  contactLink: f.EYA.CONTACT,
                                  helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                              })
                            : h.intl.format(h.t.anJ7OT, {
                                  primaryText: r,
                                  rate: e,
                                  paidURL: f.EYA.PAID_TERMS,
                                  contactLink: f.EYA.CONTACT,
                                  helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                              }));
        }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                '' !== G &&
                    (0, r.jsxs)('div', {
                        children: [(0, r.jsx)('div', { children: G }), (0, r.jsx)('div', { className: m.divider })]
                    }),
                '' !== U && (0, r.jsx)('div', { children: U }),
                T === f.HeQ.PAYSAFE_CARD &&
                    (0, r.jsx)('div', {
                        className: m.paymentSourceNoticeCopy,
                        children: h.intl.string(h.t.kj9VLC)
                    }),
                T === f.HeQ.SOFORT &&
                    (0, r.jsxs)('div', {
                        className: m.paymentSourceNoticeCopy,
                        children: [h.intl.string(h.t['UYy1/v']), ' ']
                    })
            ]
        });
    };
