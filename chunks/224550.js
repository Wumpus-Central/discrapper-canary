n.d(t, { Z: () => E }), n(415506), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(858987),
    o = n(78839),
    s = n(122289),
    l = n(63063),
    c = n(74538),
    u = n(937615),
    d = n(296848),
    f = n(981631),
    p = n(215023),
    _ = n(474936),
    m = n(388032),
    h = n(498138);
let g = (e, t, n, r) => {
        if (null == e || null == t || null == n) {
            let e = Error("Missing base rate for legal fine print"),
                t = r || "none";
            return (0, s.q2)(e, { tags: { planId: t } }), null;
        }
        return (0, u.og)((0, u.T4)(e.amount, e.currency), t, n);
    },
    E = function (e) {
        let t,
            n,
            s,
            E,
            {
                subscriptionPlan: b,
                isGift: y,
                isTrial: O,
                isOrbCheckout: v,
                rentalDuration: S,
                isEmbeddedIAP: I,
                renewalInvoice: T,
                paymentSourceType: A,
                hide: C,
                purchaseType: N,
                productLine: P,
                proratedAmount: R,
                basePrice: D,
                currentSubscription: w,
                skuId: x,
                applicationName: L,
                hasAlreadyLinked: j,
            } = e,
            M = (0, i.e7)([o.Z], () => o.Z.inReverseTrial());
        if (C) return null;
        let k = null == e.planGroup ? [] : e.planGroup;
        if (null != T) {
            let e = c.ZP.getIntervalForInvoice(T);
            (t = e.intervalType),
                (n = e.intervalCount),
                (s = (0, u.og)((0, u.T4)(T.total, T.currency), t, n)),
                (E = (0, u.og)((0, u.T4)(T.subtotal, T.currency), t, n));
        } else null != b && ((t = b.interval), (n = b.intervalCount));
        let U = (0, a.K)({
                purchaseType: N || f.GZQ.SUBSCRIPTION,
                plan: b,
                premiumSubscription: null == w ? null : w,
                productLine: P,
                isGift: !!y,
                planGroup: k,
                isPrepaidPaymentSource: !1,
            }),
            G = m.intl.format(m.t.Y2Rkqc, {
                primaryText: U,
                paidURL: f.EYA.PAID_TERMS,
            }),
            Z = m.intl.format(m.t.H2uH5b, {
                primaryText: U,
                paidURL: f.EYA.PAID_TERMS,
            }),
            B = "",
            F = "";
        if (v) {
            B =
                null != S && S > 0
                    ? m.intl.format(m.t.itoo7A, {
                          days: S,
                          virtualGoodsURL: f.EYA.PAID_TERMS_VIRTUAL_GOODS,
                          paidURL: f.EYA.PAID_TERMS,
                      })
                    : m.intl.format(m.t.xlJyOM, {
                          virtualGoodsURL: f.EYA.PAID_TERMS_VIRTUAL_GOODS,
                          paidURL: f.EYA.PAID_TERMS,
                      });
            let e = "";
            x === p.Vt.ORB_PROFILE_BADGE
                ? (e = m.intl.string(m.t.APcKRo))
                : x === p.Vt.FRACTIONAL_PREMIUM
                  ? (e = m.intl.string(m.t.FhJ74j))
                  : null == S && (e = m.intl.string(m.t["Sxed/G"])),
                Array.isArray(B) ? (B = [...B, " ".concat(e)]) : (B += " ".concat(e));
        } else if (I)
            if (null != s && (null == T ? void 0 : T.subscriptionPeriodEnd) != null)
                B = m.intl.format(m.t["2VPTay"], { subtotalRate: E });
            else
                switch (t) {
                    case _.rV.MONTH:
                        B =
                            1 === n
                                ? m.intl.format(m.t["+ywPmZ"], {})
                                : m.intl.format(m.t.oBwZfh, { intervalCount: n });
                        break;
                    case _.rV.YEAR:
                        B = m.intl.format(m.t.y9gsX5, {});
                        break;
                    case void 0:
                        B = m.intl.format(m.t.UxGFH4, {});
                        break;
                    default:
                        throw Error("Unexpected interval: ".concat(t));
                }
        else if (N === f.GZQ.ONE_TIME)
            switch (P) {
                case f.POd.COLLECTIBLES:
                    (F = G),
                        (B = y
                            ? m.intl.format(m.t.Amdf8X, { paidURL: f.EYA.PAID_TERMS })
                            : m.intl.format(m.t["40vM4o"], { paidURL: f.EYA.PAID_TERMS }));
                    break;
                case f.POd.GUILD_PRODUCT:
                    (F = G), (B = m.intl.format(m.t["GEAQ+u"], { paidURL: f.EYA.PAID_TERMS }));
                    break;
                case f.POd.SOCIAL_LAYER_GAME_ITEM:
                    (F = G),
                        (B =
                            y || !0 === j
                                ? m.intl.format(m.t.VCR6hI, { applicationName: null != L ? L : "game's" })
                                : m.intl.format(m.t.CVITgq, { applicationName: null != L ? L : "game's" }));
                    break;
                default:
                    (F = Z), (B = m.intl.string(m.t["9/siSQ"]));
            }
        else if (null == b || y)
            switch ((y && (F = G), t)) {
                case _.rV.MONTH:
                    (B = y ? m.intl.string(m.t.IjNapk) : m.intl.string(m.t["/sGXPr"])),
                        (B = y
                            ? m.intl.string(m.t.IjNapk)
                            : 1 === n
                              ? m.intl.string(m.t["/sGXPr"])
                              : m.intl.formatToPlainString(m.t.Fqjihk, { intervalCount: n }));
                    break;
                case _.rV.YEAR:
                    B = y ? m.intl.string(m.t.vAfbG8) : m.intl.string(m.t.IGzFc5);
                    break;
                case void 0:
                    B = "";
                    break;
                default:
                    throw Error("Unexpected interval: ".concat(t));
            }
        else {
            let e,
                r = (0, a.K)({
                    productLine: P,
                    purchaseType: f.GZQ.SUBSCRIPTION,
                    plan: b,
                    premiumSubscription: null == w ? null : w,
                    isGift: !1,
                    planGroup: k,
                    isPrepaidPaymentSource: !1,
                });
            O || (e = g(D, t, n, b.id)),
                (B = (null == w ? void 0 : w.isPausedAllowsResumeButNotUpdates)
                    ? m.intl.format(m.t.B6oNwB, {
                          primaryText: r,
                          rate: e,
                          paidURL: f.EYA.PAID_TERMS,
                          contactLink: f.EYA.CONTACT,
                          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING),
                      })
                    : null != w && (0, d.GY)(w, b.id, k)
                      ? m.intl.format(m.t.LyBQUW, {
                            primaryText: r,
                            rate: e,
                            paidURL: f.EYA.PAID_TERMS,
                            contactLink: f.EYA.CONTACT,
                            helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING),
                        })
                      : M && P === f.POd.BOOST && null != D
                        ? m.intl.format(m.t["2nKy/0"], {
                              price: (0, u.T4)(D.amount, D.currency),
                              paidServiceTermsArticle: f.EYA.PAID_TERMS,
                              contactUsArticle: f.EYA.CONTACT,
                              subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING),
                          })
                        : O
                          ? m.intl.format(m.t["Hvo/Z5"], {
                                buttonText: r,
                                interval: c.ZP.formatInterval(null == b ? void 0 : b.interval),
                                cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS),
                            })
                          : null != R && null != D
                            ? m.intl.format(m.t.Kcieh4, {
                                  primaryText: r,
                                  proratedAmount: (0, u.T4)(R, D.currency),
                                  renewalAmount: (0, u.T4)(D.amount, D.currency),
                                  rateInterval: c.ZP.formatInterval(null == b ? void 0 : b.interval),
                                  paidURL: f.EYA.PAID_TERMS,
                                  contactLink: f.EYA.CONTACT,
                                  helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING),
                              })
                            : m.intl.format(m.t.anJ7OX, {
                                  primaryText: r,
                                  rate: e,
                                  paidURL: f.EYA.PAID_TERMS,
                                  contactLink: f.EYA.CONTACT,
                                  helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING),
                              }));
        }
        return (0, r.jsxs)("div", {
            className: h.legalFinePrint,
            children: [
                "" !== F && (0, r.jsx)("div", { children: F }),
                "" !== B && (0, r.jsx)("div", { children: B }),
                A === f.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", { children: m.intl.string(m.t.kj9VLI) }),
                A === f.HeQ.SOFORT && (0, r.jsx)("div", { children: m.intl.string(m.t["UYy1/h"]) }),
            ],
        });
    };
