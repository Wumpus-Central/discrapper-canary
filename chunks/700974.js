"use strict";
n.d(t, { A: () => P });
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
    h = n(202384),
    p = n(513461),
    g = n(212455),
    E = n(51758),
    A = n(857071),
    I = n(728950),
    T = n(97352),
    y = n(975571),
    S = n(500345),
    v = n(599941),
    C = n(624456),
    b = n(700206),
    N = n(396695),
    R = n(916727),
    O = n(354033),
    D = n(2242),
    L = n(652215),
    w = n(985018);
let x = "MMM DD, YYYY",
    P = (e, t, n, a) => {
        let o,
            P = (0, u.bG)([A.A], () => A.A.isLurking(t)),
            M = (0, E.H)(t),
            k = (0, u.bG)([g.A], () => (null != t ? g.A.getRequest(t) : null)),
            U = k?.applicationStatus === p.B5.SUBMITTED,
            G = e?.subscription_plans[0],
            F = G?.id,
            V = e?.published === !0,
            B = G?.sku_id,
            j = (0, u.bG)([T.A], () => (null != F ? T.A.get(F) : null)),
            { activeSubscription: H, activeSubscriptionPlanFromStore: Y } = (0, b.A)(n),
            W = null == H || null != Y,
            K = (0, v.cY)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
            $ = (0, C.l)(H),
            z = null != $,
            q = !!H?.hasActiveTrial,
            { loading: X, getTrialPurchaseEligibility: Z } = (0, N.E)(),
            Q = (0, v.dL)(e?.id),
            { analyticsLocations: J } = (0, f.Ay)(),
            ee = H?.isPurchasedViaAppleGeneric,
            et = !P && null != j && W && !U && !z && !q && !ee;
        U || (P && !M)
            ? (o = w.intl.string(w.t.pQK5ho))
            : $ === F
              ? (o = w.intl.formatToPlainString(w.t.UlBRTl, {
                    changeDate: null != H ? l()(H.currentPeriodEnd).format(x) : "",
                }))
              : z
                ? (o = w.intl.string(w.t.ePFYOS))
                : q
                  ? (o = w.intl.string(w.t["0lPoT2"]))
                  : ee && (o = w.intl.string(w.t.cEMaCt));
        let en = (0, _.A)(D.Yl);
        i.useEffect(() => {
            V &&
                null != B &&
                c.h.wait(() => {
                    (0, d.ur)(B);
                });
        }, [V, B]);
        let er = i.useCallback(async () => {
                let n, i;
                if (
                    (s()(null != e, "No subscription listing"),
                    s()(null != G, "No subscription plan"),
                    s()(V, "Cannot purchase this unpublished plan"),
                    Q?.active_trial != null)
                ) {
                    let r = await Z(t, e.id, Q.active_trial.id);
                    r?.is_eligible === !0 ? (n = Q?.active_trial?.id) : (i = w.intl.string(w.t.vuvsK5));
                }
                (0, I.A)({
                    activeSubscription: H,
                    analyticsSubscriptionType: L.rzx.GUILD,
                    trialId: n,
                    trialFooterMessageOverride:
                        Q?.active_trial != null
                            ? w.intl.format(w.t.zyGyNk, {
                                  buttonText: w.intl.string(w.t.BEeXib),
                                  interval: (0, S.Gg)(G),
                                  days: 1,
                                  contactLink: L.X7G.CONTACT,
                                  cancelSubscriptionArticle: y.A.getArticleURL(L.MVz.ROLE_SUBSCRIPTION_CANCEL),
                                  helpdeskArticle: y.A.getArticleURL(L.MVz.ROLE_SUBSCRIPTION_TRIAL),
                                  paidServiceTermsArticle: y.A.getArticleURL(L.MVz.PAID_TERMS),
                                  tierName: G.name,
                              })
                            : void 0,
                    analyticsLocations: J,
                    analyticsLocation: a,
                    renderHeader: (n, i, a) => (0, r.jsx)(O.Y, { onClose: i, listing: e, step: a, guildId: t }),
                    initialPlanId: G.id,
                    skuId: G.sku_id,
                    planGroup: K,
                    renderPurchaseConfirmation: (n, i) =>
                        en
                            ? (0, r.jsx)(R.v, { listing: e, onClose: i, guildId: t })
                            : (0, r.jsx)(O.X, { listing: e, onClose: i, guildId: t }),
                    reviewWarningMessage: i,
                });
            }, [V, e, G, H, K, t, J, a, Z, Q, en]),
            ei = i.useCallback(() => {
                (0, h.Ze)(t);
            }, [t]);
        return { openModal: M ? ei : er, canOpenModal: et, cannotOpenReason: o, isCheckingTrialEligibility: X };
    };
