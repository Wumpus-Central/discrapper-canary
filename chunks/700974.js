n.d(t, {
    A: () => x,
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(311907),
    u = n(73153),
    d = n(73825),
    f = n(241524),
    p = n(688810),
    _ = n(202384),
    h = n(513461),
    m = n(212455),
    g = n(51758),
    E = n(857071),
    b = n(728950),
    y = n(97352),
    O = n(975571),
    A = n(500345),
    v = n(599941),
    S = n(624456),
    I = n(700206),
    T = n(396695),
    C = n(916727),
    N = n(354033),
    R = n(2242),
    w = n(652215),
    P = n(985018);
let D = "MMM DD, YYYY",
    x = (e, t, n, a) => {
        let o,
            x = (0, c.bG)([E.A], () => E.A.isLurking(t)),
            L = (0, g.H)(t),
            j = (0, c.bG)([m.A], () => (null != t ? m.A.getRequest(t) : null)),
            M = (null == j ? void 0 : j.applicationStatus) === h.B5.SUBMITTED,
            k = null == e ? void 0 : e.subscription_plans[0],
            U = null == k ? void 0 : k.id,
            G = (null == e ? void 0 : e.published) === !0,
            V = null == k ? void 0 : k.sku_id,
            F = (0, c.bG)([y.A], () => (null != U ? y.A.get(U) : null)),
            { activeSubscription: B, activeSubscriptionPlanFromStore: H } = (0, I.A)(n),
            Y = null == B || null != H,
            W = (0, v.cY)(n, {
                includeSoftDeleted: !0,
            }).map((e) => e.subscription_plans[0].id),
            K = (0, S.l)(B),
            z = null != K,
            q = !!(null == B ? void 0 : B.hasActiveTrial),
            { loading: X, getTrialPurchaseEligibility: Z } = (0, T.E)(),
            Q = (0, v.dL)(null == e ? void 0 : e.id),
            { analyticsLocations: $ } = (0, p.Ay)(),
            J = null == B ? void 0 : B.isPurchasedViaAppleGeneric,
            ee = !x && null != F && Y && !M && !z && !q && !J;
        M || (x && !L)
            ? (o = P.intl.string(P.t.pQK5ho))
            : K === U
              ? (o = P.intl.formatToPlainString(P.t.UlBRTl, {
                    changeDate: null != B ? l()(B.currentPeriodEnd).format(D) : "",
                }))
              : z
                ? (o = P.intl.string(P.t.ePFYOS))
                : q
                  ? (o = P.intl.string(P.t["0lPoT2"]))
                  : J && (o = P.intl.string(P.t.cEMaCt));
        let et = (0, f.A)(R.Yl);
        i.useEffect(() => {
            G &&
                null != V &&
                u.h.wait(() => {
                    (0, d.ur)(V);
                });
        }, [G, V]);
        let en = i.useCallback(async () => {
                let n, i;
                if (
                    (s()(null != e, "No subscription listing"),
                    s()(null != k, "No subscription plan"),
                    s()(G, "Cannot purchase this unpublished plan"),
                    (null == Q ? void 0 : Q.active_trial) != null)
                ) {
                    let r = await Z(t, e.id, Q.active_trial.id);
                    if ((null == r ? void 0 : r.is_eligible) === !0) {
                        var o;
                        n = null == Q || null == (o = Q.active_trial) ? void 0 : o.id;
                    } else i = P.intl.string(P.t.vuvsK5);
                }
                (0, b.A)({
                    activeSubscription: B,
                    analyticsSubscriptionType: w.rzx.GUILD,
                    trialId: n,
                    trialFooterMessageOverride:
                        (null == Q ? void 0 : Q.active_trial) != null
                            ? P.intl.format(P.t.zyGyNk, {
                                  buttonText: P.intl.string(P.t.BEeXib),
                                  interval: (0, A.Gg)(k),
                                  days: 1,
                                  contactLink: w.X7G.CONTACT,
                                  cancelSubscriptionArticle: O.A.getArticleURL(w.MVz.ROLE_SUBSCRIPTION_CANCEL),
                                  helpdeskArticle: O.A.getArticleURL(w.MVz.ROLE_SUBSCRIPTION_TRIAL),
                                  paidServiceTermsArticle: O.A.getArticleURL(w.MVz.PAID_TERMS),
                                  tierName: k.name,
                              })
                            : void 0,
                    analyticsLocations: $,
                    analyticsLocation: a,
                    renderHeader: (n, i, a) =>
                        (0, r.jsx)(N.Y, {
                            onClose: i,
                            listing: e,
                            step: a,
                            guildId: t,
                        }),
                    initialPlanId: k.id,
                    skuId: k.sku_id,
                    planGroup: W,
                    renderPurchaseConfirmation: (n, i) =>
                        et
                            ? (0, r.jsx)(C.v, {
                                  listing: e,
                                  onClose: i,
                                  guildId: t,
                              })
                            : (0, r.jsx)(N.X, {
                                  listing: e,
                                  onClose: i,
                                  guildId: t,
                              }),
                    reviewWarningMessage: i,
                });
            }, [G, e, k, B, W, t, $, a, Z, Q, et]),
            er = i.useCallback(() => {
                (0, _.Ze)(t);
            }, [t]);
        return {
            openModal: L ? er : en,
            canOpenModal: ee,
            cannotOpenReason: o,
            isCheckingTrialEligibility: X,
        };
    };
