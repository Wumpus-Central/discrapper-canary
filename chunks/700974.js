"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    u = n(311907),
    c = n(73153),
    d = n(73825),
    _ = n(241524),
    f = n(688810),
    p = n(202384),
    h = n(513461),
    m = n(212455),
    g = n(51758),
    E = n(857071),
    A = n(728950),
    I = n(97352),
    T = n(975571),
    y = n(500345),
    S = n(599941),
    v = n(624456),
    C = n(700206),
    b = n(396695),
    N = n(916727),
    R = n(354033),
    O = n(2242),
    D = n(652215),
    L = n(985018);
let w = "MMM DD, YYYY",
    x = (e, t, n, a) => {
        let o,
            x = (0, u.bG)([E.A], () => E.A.isLurking(t)),
            P = (0, g.H)(t),
            M = (0, u.bG)([m.A], () => (null != t ? m.A.getRequest(t) : null)),
            k = M?.applicationStatus === h.B5.SUBMITTED,
            U = e?.subscription_plans[0],
            G = U?.id,
            V = e?.published === !0,
            F = U?.sku_id,
            B = (0, u.bG)([I.A], () => (null != G ? I.A.get(G) : null)),
            { activeSubscription: j, activeSubscriptionPlanFromStore: H } = (0, C.A)(n),
            Y = null == j || null != H,
            W = (0, S.cY)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
            K = (0, v.l)(j),
            z = null != K,
            $ = !!j?.hasActiveTrial,
            { loading: q, getTrialPurchaseEligibility: Z } = (0, b.E)(),
            Q = (0, S.dL)(e?.id),
            { analyticsLocations: X } = (0, f.Ay)(),
            J = j?.isPurchasedViaAppleGeneric,
            ee = !x && null != B && Y && !k && !z && !$ && !J;
        k || (x && !P)
            ? (o = L.intl.string(L.t.pQK5ho))
            : K === G
              ? (o = L.intl.formatToPlainString(L.t.UlBRTl, {
                    changeDate: null != j ? l()(j.currentPeriodEnd).format(w) : "",
                }))
              : z
                ? (o = L.intl.string(L.t.ePFYOS))
                : $
                  ? (o = L.intl.string(L.t["0lPoT2"]))
                  : J && (o = L.intl.string(L.t.cEMaCt));
        let et = (0, _.A)(O.Yl);
        i.useEffect(() => {
            V &&
                null != F &&
                c.h.wait(() => {
                    (0, d.ur)(F);
                });
        }, [V, F]);
        let en = i.useCallback(async () => {
                let n, i;
                if (
                    (s()(null != e, "No subscription listing"),
                    s()(null != U, "No subscription plan"),
                    s()(V, "Cannot purchase this unpublished plan"),
                    Q?.active_trial != null)
                ) {
                    let r = await Z(t, e.id, Q.active_trial.id);
                    r?.is_eligible === !0 ? (n = Q?.active_trial?.id) : (i = L.intl.string(L.t.vuvsK5));
                }
                (0, A.A)({
                    activeSubscription: j,
                    analyticsSubscriptionType: D.rzx.GUILD,
                    trialId: n,
                    trialFooterMessageOverride:
                        Q?.active_trial != null
                            ? L.intl.format(L.t.zyGyNk, {
                                  buttonText: L.intl.string(L.t.BEeXib),
                                  interval: (0, y.Gg)(U),
                                  days: 1,
                                  contactLink: D.X7G.CONTACT,
                                  cancelSubscriptionArticle: T.A.getArticleURL(D.MVz.ROLE_SUBSCRIPTION_CANCEL),
                                  helpdeskArticle: T.A.getArticleURL(D.MVz.ROLE_SUBSCRIPTION_TRIAL),
                                  paidServiceTermsArticle: T.A.getArticleURL(D.MVz.PAID_TERMS),
                                  tierName: U.name,
                              })
                            : void 0,
                    analyticsLocations: X,
                    analyticsLocation: a,
                    renderHeader: (n, i, a) => (0, r.jsx)(R.Y, { onClose: i, listing: e, step: a, guildId: t }),
                    initialPlanId: U.id,
                    skuId: U.sku_id,
                    planGroup: W,
                    renderPurchaseConfirmation: (n, i) =>
                        et
                            ? (0, r.jsx)(N.v, { listing: e, onClose: i, guildId: t })
                            : (0, r.jsx)(R.X, { listing: e, onClose: i, guildId: t }),
                    reviewWarningMessage: i,
                });
            }, [V, e, U, j, W, t, X, a, Z, Q, et]),
            er = i.useCallback(() => {
                (0, p.Ze)(t);
            }, [t]);
        return { openModal: P ? er : en, canOpenModal: ee, cannotOpenReason: o, isCheckingTrialEligibility: q };
    };
