i.d(t, { A: () => R });
var l = i(627968),
    n = i(64700),
    a = i(284009),
    s = i.n(a),
    r = i(989349),
    c = i.n(r),
    d = i(311907),
    o = i(73153),
    u = i(73825),
    m = i(241524),
    x = i(688810),
    h = i(202384),
    g = i(513461),
    v = i(212455),
    j = i(51758),
    A = i(857071),
    f = i(728950),
    p = i(97352),
    _ = i(975571),
    N = i(500345),
    b = i(599941),
    I = i(624456),
    T = i(700206),
    C = i(396695),
    S = i(916727),
    E = i(354033),
    y = i(2242),
    L = i(652215),
    k = i(985018);
let R = (e, t, i, a) => {
    let r,
        R = (0, d.bG)([A.A], () => A.A.isLurking(t)),
        G = (0, j.H)(t),
        P = (0, d.bG)([v.A], () => (null != t ? v.A.getRequest(t) : null)),
        U = P?.applicationStatus === g.B5.SUBMITTED,
        M = e?.subscription_plans[0],
        O = M?.id,
        D = e?.published === !0,
        F = M?.sku_id,
        w = (0, d.bG)([p.A], () => (null != O ? p.A.get(O) : null)),
        { activeSubscription: H, activeSubscriptionPlanFromStore: B } = (0, T.A)(i),
        V = null == H || null != B,
        Y = (0, b.cY)(i, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        z = (0, I.l)(H),
        K = null != z,
        X = !!H?.hasActiveTrial,
        { loading: W, getTrialPurchaseEligibility: q } = (0, C.E)(),
        $ = (0, b.dL)(e?.id),
        { analyticsLocations: Q } = (0, x.Ay)(),
        Z = H?.isPurchasedViaAppleGeneric,
        J = !R && null != w && V && !U && !K && !X && !Z;
    U || (R && !G)
        ? (r = k.intl.string(k.t.pQK5ho))
        : z === O
          ? (r = k.intl.formatToPlainString(k.t.UlBRTl, {
                changeDate: null != H ? c()(H.currentPeriodEnd).format("MMM DD, YYYY") : "",
            }))
          : K
            ? (r = k.intl.string(k.t.ePFYOS))
            : X
              ? (r = k.intl.string(k.t["0lPoT2"]))
              : Z && (r = k.intl.string(k.t.cEMaCt));
    let ee = (0, m.A)(y.Yl);
    n.useEffect(() => {
        D &&
            null != F &&
            o.h.wait(() => {
                (0, u.ur)(F);
            });
    }, [D, F]);
    let et = n.useCallback(async () => {
            let i, n;
            if (
                (s()(null != e, "No subscription listing"),
                s()(null != M, "No subscription plan"),
                s()(D, "Cannot purchase this unpublished plan"),
                $?.active_trial != null)
            ) {
                let l = await q(t, e.id, $.active_trial.id);
                l?.is_eligible === !0 ? (i = $?.active_trial?.id) : (n = k.intl.string(k.t.vuvsK5));
            }
            (0, f.A)({
                activeSubscription: H,
                analyticsSubscriptionType: L.rzx.GUILD,
                trialId: i,
                trialFooterMessageOverride:
                    $?.active_trial != null
                        ? k.intl.format(k.t.zyGyNk, {
                              buttonText: k.intl.string(k.t.BEeXib),
                              interval: (0, N.Gg)(M),
                              days: 1,
                              contactLink: L.X7G.CONTACT,
                              cancelSubscriptionArticle: _.A.getArticleURL(L.MVz.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: _.A.getArticleURL(L.MVz.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: _.A.getArticleURL(L.MVz.PAID_TERMS),
                              tierName: M.name,
                          })
                        : void 0,
                analyticsLocations: Q,
                analyticsLocation: a,
                renderHeader: (i, n, a) => (0, l.jsx)(E.Y, { onClose: n, listing: e, step: a, guildId: t }),
                initialPlanId: M.id,
                skuId: M.sku_id,
                planGroup: Y,
                renderPurchaseConfirmation: (i, n) =>
                    ee
                        ? (0, l.jsx)(S.v, { listing: e, onClose: n, guildId: t })
                        : (0, l.jsx)(E.X, { listing: e, onClose: n, guildId: t }),
                reviewWarningMessage: n,
            });
        }, [D, e, M, H, Y, t, Q, a, q, $, ee]),
        ei = n.useCallback(() => {
            (0, h.Ze)(t);
        }, [t]);
    return { openModal: G ? ei : et, canOpenModal: J, cannotOpenReason: r, isCheckingTrialEligibility: W };
};
