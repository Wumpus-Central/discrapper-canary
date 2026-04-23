i.d(t, { A: () => R });
var l = i(627968),
    n = i(64700),
    s = i(284009),
    a = i.n(s),
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
    C = i(700206),
    E = i(396695),
    T = i(916727),
    S = i(354033),
    L = i(2242),
    y = i(652215),
    k = i(985018);
let R = (e, t, i, s) => {
    let r,
        R = (0, d.bG)([A.A], () => A.A.isLurking(t)),
        G = (0, j.H)(t),
        D = (0, d.bG)([v.A], () => (null != t ? v.A.getRequest(t) : null)),
        P = D?.applicationStatus === g.B5.SUBMITTED,
        O = e?.subscription_plans[0],
        M = O?.id,
        U = e?.published === !0,
        F = O?.sku_id,
        w = (0, d.bG)([p.A], () => (null != M ? p.A.get(M) : null)),
        { activeSubscription: V, activeSubscriptionPlanFromStore: z } = (0, C.A)(i),
        B = null == V || null != z,
        Y = (0, b.cY)(i, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        H = (0, I.l)(V),
        X = null != H,
        K = !!V?.hasActiveTrial,
        { loading: W, getTrialPurchaseEligibility: $ } = (0, E.E)(),
        q = (0, b.dL)(e?.id),
        { analyticsLocations: Q } = (0, x.Ay)(),
        Z = V?.isPurchasedViaAppleGeneric,
        J = !R && null != w && B && !P && !X && !K && !Z;
    P || (R && !G)
        ? (r = k.intl.string(k.t.pQK5ho))
        : H === M
          ? (r = k.intl.formatToPlainString(k.t.UlBRTl, {
                changeDate: null != V ? c()(V.currentPeriodEnd).format("MMM DD, YYYY") : "",
            }))
          : X
            ? (r = k.intl.string(k.t.ePFYOS))
            : K
              ? (r = k.intl.string(k.t["0lPoT2"]))
              : Z && (r = k.intl.string(k.t.cEMaCt));
    let ee = (0, m.A)(L.Yl);
    n.useEffect(() => {
        U &&
            null != F &&
            o.h.wait(() => {
                (0, u.ur)(F);
            });
    }, [U, F]);
    let et = n.useCallback(async () => {
            let i, n;
            if (
                (a()(null != e, "No subscription listing"),
                a()(null != O, "No subscription plan"),
                a()(U, "Cannot purchase this unpublished plan"),
                q?.active_trial != null)
            ) {
                let l = await $(t, e.id, q.active_trial.id);
                l?.is_eligible === !0 ? (i = q?.active_trial?.id) : (n = k.intl.string(k.t.vuvsK5));
            }
            (0, f.A)({
                activeSubscription: V,
                analyticsSubscriptionType: y.rzx.GUILD,
                trialId: i,
                trialFooterMessageOverride:
                    q?.active_trial != null
                        ? k.intl.format(k.t.zyGyNk, {
                              buttonText: k.intl.string(k.t.BEeXib),
                              interval: (0, N.Gg)(O),
                              days: 1,
                              contactLink: y.X7G.CONTACT,
                              cancelSubscriptionArticle: _.A.getArticleURL(y.MVz.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: _.A.getArticleURL(y.MVz.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: _.A.getArticleURL(y.MVz.PAID_TERMS),
                              tierName: O.name,
                          })
                        : void 0,
                analyticsLocations: Q,
                analyticsLocation: s,
                renderHeader: (i, n, s) => (0, l.jsx)(S.Y, { onClose: n, listing: e, step: s, guildId: t }),
                initialPlanId: O.id,
                skuId: O.sku_id,
                planGroup: Y,
                renderPurchaseConfirmation: (i, n) =>
                    ee
                        ? (0, l.jsx)(T.v, { listing: e, onClose: n, guildId: t })
                        : (0, l.jsx)(S.X, { listing: e, onClose: n, guildId: t }),
                reviewWarningMessage: n,
            });
        }, [U, e, O, V, Y, t, Q, s, $, q, ee]),
        ei = n.useCallback(() => {
            (0, h.Ze)(t);
        }, [t]);
    return { openModal: G ? ei : et, canOpenModal: J, cannotOpenReason: r, isCheckingTrialEligibility: W };
};
