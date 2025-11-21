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
    _ = n(215023),
    p = n(474936),
    h = n(388032),
    m = n(498138);
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
                isEmbeddedIAP: I,
                renewalInvoice: T,
                paymentSourceType: S,
                hide: A,
                purchaseType: C,
                productLine: N,
                proratedAmount: R,
                basePrice: P,
                currentSubscription: D,
                skuId: w,
                applicationName: L,
                hasAlreadyLinked: x,
            } = e,
            M = (0, i.e7)([o.Z], () => o.Z.inReverseTrial());
        if (A) return null;
        let k = null == e.planGroup ? [] : e.planGroup;
        if (null != T) {
            let e = c.ZP.getIntervalForInvoice(T);
            (t = e.intervalType),
                (n = e.intervalCount),
                (s = (0, u.og)((0, u.T4)(T.total, T.currency), t, n)),
                (E = (0, u.og)((0, u.T4)(T.subtotal, T.currency), t, n));
        } else null != b && ((t = b.interval), (n = b.intervalCount));
        let j = (0, a.K)({
                purchaseType: C || f.GZQ.SUBSCRIPTION,
                plan: b,
                premiumSubscription: null == D ? null : D,
                productLine: N,
                isGift: !!y,
                planGroup: k,
                isPrepaidPaymentSource: !1,
            }),
            U = h.intl.format(h.t.Y2Rkqc, {
                primaryText: j,
                paidURL: f.EYA.PAID_TERMS,
            }),
            G = h.intl.format(h.t.H2uH5b, {
                primaryText: j,
                paidURL: f.EYA.PAID_TERMS,
            }),
            B = "",
            Z = "";
        if (v) {
            B = h.intl.format(h.t.xlJyOM, {
                virtualGoodsURL: f.EYA.PAID_TERMS_VIRTUAL_GOODS,
                paidURL: f.EYA.PAID_TERMS,
            });
            let e = "";
            (e =
                w === _.Vt.ORB_PROFILE_BADGE
                    ? h.intl.string(h.t.APcKRo)
                    : w === _.Vt.FRACTIONAL_PREMIUM
                      ? h.intl.string(h.t.FhJ74j)
                      : h.intl.string(h.t["Sxed/G"])),
                Array.isArray(B) ? (B = [...B, " ".concat(e)]) : (B += " ".concat(e));
        } else if (I)
            if (null != s && (null == T ? void 0 : T.subscriptionPeriodEnd) != null)
                B = h.intl.format(h.t["2VPTay"], { subtotalRate: E });
            else
                switch (t) {
                    case p.rV.MONTH:
                        B =
                            1 === n
                                ? h.intl.format(h.t["+ywPmZ"], {})
                                : h.intl.format(h.t.oBwZfh, { intervalCount: n });
                        break;
                    case p.rV.YEAR:
                        B = h.intl.format(h.t.y9gsX5, {});
                        break;
                    case void 0:
                        B = h.intl.format(h.t.UxGFH4, {});
                        break;
                    default:
                        throw Error("Unexpected interval: ".concat(t));
                }
        else if (C === f.GZQ.ONE_TIME)
            switch (N) {
                case f.POd.COLLECTIBLES:
                    (Z = U),
                        (B = y
                            ? h.intl.format(h.t.Amdf8X, { paidURL: f.EYA.PAID_TERMS })
                            : h.intl.format(h.t["40vM4o"], { paidURL: f.EYA.PAID_TERMS }));
                    break;
                case f.POd.GUILD_PRODUCT:
                    (Z = U), (B = h.intl.format(h.t["GEAQ+u"], { paidURL: f.EYA.PAID_TERMS }));
                    break;
                case f.POd.SOCIAL_LAYER_GAME_ITEM:
                    (Z = U),
                        (B =
                            y || !0 === x
                                ? h.intl.format(h.t.VCR6hI, { applicationName: null != L ? L : "game's" })
                                : h.intl.format(h.t.CVITgq, { applicationName: null != L ? L : "game's" }));
                    break;
                default:
                    (Z = G), (B = h.intl.string(h.t["9/siSQ"]));
            }
        else if (null == b || y)
            switch ((y && (Z = U), t)) {
                case p.rV.MONTH:
                    (B = y ? h.intl.string(h.t.IjNapk) : h.intl.string(h.t["/sGXPr"])),
                        (B = y
                            ? h.intl.string(h.t.IjNapk)
                            : 1 === n
                              ? h.intl.string(h.t["/sGXPr"])
                              : h.intl.formatToPlainString(h.t.Fqjihk, { intervalCount: n }));
                    break;
                case p.rV.YEAR:
                    B = y ? h.intl.string(h.t.vAfbG8) : h.intl.string(h.t.IGzFc5);
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
                    productLine: N,
                    purchaseType: f.GZQ.SUBSCRIPTION,
                    plan: b,
                    premiumSubscription: null == D ? null : D,
                    isGift: !1,
                    planGroup: k,
                    isPrepaidPaymentSource: !1,
                });
            O || (e = g(P, t, n, b.id)),
                (B = (null == D ? void 0 : D.isPausedAllowsResumeButNotUpdates)
                    ? h.intl.format(h.t.B6oNwB, {
                          primaryText: r,
                          rate: e,
                          paidURL: f.EYA.PAID_TERMS,
                          contactLink: f.EYA.CONTACT,
                          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING),
                      })
                    : null != D && (0, d.GY)(D, b.id, k)
                      ? h.intl.format(h.t.LyBQUW, {
                            primaryText: r,
                            rate: e,
                            paidURL: f.EYA.PAID_TERMS,
                            contactLink: f.EYA.CONTACT,
                            helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING),
                        })
                      : M && N === f.POd.BOOST && null != P
                        ? h.intl.format(h.t["2nKy/0"], {
                              price: (0, u.T4)(P.amount, P.currency),
                              paidServiceTermsArticle: f.EYA.PAID_TERMS,
                              contactUsArticle: f.EYA.CONTACT,
                              subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING),
                          })
                        : O
                          ? h.intl.format(h.t["Hvo/Z5"], {
                                buttonText: r,
                                interval: c.ZP.formatInterval(null == b ? void 0 : b.interval),
                                cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS),
                            })
                          : null != R && null != P
                            ? h.intl.format(h.t.Kcieh4, {
                                  primaryText: r,
                                  proratedAmount: (0, u.T4)(R, P.currency),
                                  renewalAmount: (0, u.T4)(P.amount, P.currency),
                                  rateInterval: c.ZP.formatInterval(null == b ? void 0 : b.interval),
                                  paidURL: f.EYA.PAID_TERMS,
                                  contactLink: f.EYA.CONTACT,
                                  helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING),
                              })
                            : h.intl.format(h.t.anJ7OX, {
                                  primaryText: r,
                                  rate: e,
                                  paidURL: f.EYA.PAID_TERMS,
                                  contactLink: f.EYA.CONTACT,
                                  helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING),
                              }));
        }
        return (0, r.jsxs)("div", {
            className: m.legalFinePrint,
            children: [
                "" !== Z && (0, r.jsx)("div", { children: Z }),
                "" !== B && (0, r.jsx)("div", { children: B }),
                S === f.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", { children: h.intl.string(h.t.kj9VLI) }),
                S === f.HeQ.SOFORT && (0, r.jsx)("div", { children: h.intl.string(h.t["UYy1/h"]) }),
            ],
        });
    };
