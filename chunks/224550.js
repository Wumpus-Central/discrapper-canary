n.d(t, { Z: () => E }), n(411104), n(47120);
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
            { subscriptionPlan: b, isGift: y, isTrial: v, isOrbCheckout: O, isEmbeddedIAP: I, renewalInvoice: S, paymentSourceType: T, hide: N, purchaseType: A, productLine: C, basePrice: R, currentSubscription: P, skuId: w } = e,
            D = (0, i.e7)([a.ZP], () => a.ZP.inReverseTrial());
        if (N) return null;
        let L = null == e.planGroup ? [] : e.planGroup;
        if (null != S) {
            let e = c.ZP.getIntervalForInvoice(S);
            (t = e.intervalType), (n = e.intervalCount), (s = (0, u.og)((0, u.T4)(S.total, S.currency), t, n)), (E = (0, u.og)((0, u.T4)(S.subtotal, S.currency), t, n));
        } else null != b && ((t = b.interval), (n = b.intervalCount));
        let x = (0, o.K)({
                purchaseType: A || f.GZQ.SUBSCRIPTION,
                plan: b,
                premiumSubscription: null == P ? null : P,
                isGift: !!y,
                planGroup: L,
                isPrepaidPaymentSource: !1
            }),
            M = h.NW.format(h.t.Y2Rkqa, {
                primaryText: x,
                paidURL: f.EYA.PAID_TERMS
            }),
            k = h.NW.format(h.t.H2uH5e, {
                primaryText: x,
                paidURL: f.EYA.PAID_TERMS
            }),
            j = '',
            U = '';
        if (O) {
            j = h.NW.format(h.t.xlJyOD, {
                virtualGoodsURL: f.EYA.PAID_TERMS_VIRTUAL_GOODS,
                paidURL: f.EYA.PAID_TERMS
            });
            let e = '';
            (e = w === _.Vt.ORB_PROFILE_BADGE ? h.NW.string(h.t.APcKRk) : w === _.Vt.FRACTIONAL_PREMIUM ? h.NW.string(h.t.FhJ74u) : h.NW.string(h.t.jCRYDw)), Array.isArray(j) ? (j = [...j, ' '.concat(e)]) : (j += ' '.concat(e));
        } else if (I)
            if (null != s && (null == S ? void 0 : S.subscriptionPeriodEnd) != null) j = h.NW.format(h.t['2VPTa2'], { subtotalRate: E });
            else
                switch (t) {
                    case p.rV.MONTH:
                        j = 1 === n ? h.NW.format(h.t['+ywPmZ'], {}) : h.NW.format(h.t.oBwZfn, { intervalCount: n });
                        break;
                    case p.rV.YEAR:
                        j = h.NW.format(h.t.y9gsX1, {});
                        break;
                    case void 0:
                        j = h.NW.format(h.t.UxGFHx, {});
                        break;
                    default:
                        throw Error('Unexpected interval: '.concat(t));
                }
        else if (A === f.GZQ.ONE_TIME)
            switch (C) {
                case f.POd.COLLECTIBLES:
                    (U = M), (j = y ? h.NW.format(h.t.ofqyUl, { paidURL: f.EYA.PAID_TERMS }) : h.NW.format(h.t.G3l0s7, { paidURL: f.EYA.PAID_TERMS }));
                    break;
                case f.POd.GUILD_PRODUCT:
                    (U = M), (j = h.NW.format(h.t['GEAQ+v'], { paidURL: f.EYA.PAID_TERMS }));
                    break;
                default:
                    (U = k), (j = h.NW.string(h.t['9/siSU']));
            }
        else if (null == b || y)
            switch ((y && (U = M), t)) {
                case p.rV.MONTH:
                    (j = y ? h.NW.string(h.t.IjNapq) : h.NW.string(h.t['/sGXPj'])), (j = y ? h.NW.string(h.t.IjNapq) : 1 === n ? h.NW.string(h.t['/sGXPj']) : h.NW.formatToPlainString(h.t.Fqjiho, { intervalCount: n }));
                    break;
                case p.rV.YEAR:
                    j = y ? h.NW.string(h.t.vAfbGx) : h.NW.string(h.t.IGzFc3);
                    break;
                case void 0:
                    j = '';
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(t));
            }
        else {
            let e,
                r = (0, o.K)({
                    purchaseType: f.GZQ.SUBSCRIPTION,
                    plan: b,
                    premiumSubscription: null == P ? null : P,
                    isGift: !1,
                    planGroup: L,
                    isPrepaidPaymentSource: !1
                });
            v || (e = g(R, t, n, b.id)),
                (j = (null == P ? void 0 : P.isPausedAllowsResumeButNotUpdates)
                    ? h.NW.format(h.t.B6oNwM, {
                          primaryText: r,
                          rate: e,
                          paidURL: f.EYA.PAID_TERMS,
                          contactLink: f.EYA.CONTACT,
                          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                      })
                    : null != P && (0, d.GY)(P, b.id, L)
                      ? h.NW.format(h.t.LyBQUV, {
                            primaryText: r,
                            rate: e,
                            paidURL: f.EYA.PAID_TERMS,
                            contactLink: f.EYA.CONTACT,
                            helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                        })
                      : D && C === f.POd.BOOST && null != R
                        ? h.NW.format(h.t['2nKy//'], {
                              price: (0, u.T4)(R.amount, R.currency),
                              paidServiceTermsArticle: f.EYA.PAID_TERMS,
                              contactUsArticle: f.EYA.CONTACT,
                              subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING)
                          })
                        : v
                          ? h.NW.format(h.t['Hvo/Z2'], {
                                buttonText: r,
                                interval: c.ZP.formatInterval(null == b ? void 0 : b.interval),
                                cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS)
                            })
                          : h.NW.format(h.t.anJ7OT, {
                                primaryText: r,
                                rate: e,
                                paidURL: f.EYA.PAID_TERMS,
                                contactLink: f.EYA.CONTACT,
                                helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
                            }));
        }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                '' !== U &&
                    (0, r.jsxs)('div', {
                        children: [(0, r.jsx)('div', { children: U }), (0, r.jsx)('div', { className: m.divider })]
                    }),
                '' !== j && (0, r.jsx)('div', { children: j }),
                T === f.HeQ.PAYSAFE_CARD &&
                    (0, r.jsx)('div', {
                        className: m.paymentSourceNoticeCopy,
                        children: h.NW.string(h.t.kj9VLC)
                    }),
                T === f.HeQ.SOFORT &&
                    (0, r.jsxs)('div', {
                        className: m.paymentSourceNoticeCopy,
                        children: [h.NW.string(h.t['UYy1/v']), ' ']
                    })
            ]
        });
    };
