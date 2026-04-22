n.d(t, { A: () => _ });
var i = n(64700),
    l = n(417597),
    s = n(465932),
    r = n(260509),
    a = n(287809),
    o = n(975571),
    d = n(469993),
    c = n(586243),
    u = n(963320),
    m = n(897290),
    g = n(980406),
    h = n(652215),
    x = n(985018);
function _(e) {
    let t,
        n = (0, d.ME)(e),
        _ = e?.features.has(h.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
        p = e?.features.has(h.GuildFeatures.CREATOR_MONETIZABLE),
        A = (0, l.bG)([a.default], () => {
            let t = a.default.getCurrentUser();
            return null != e && (0, r.bM)(e, t);
        }),
        { error: E, loading: f, createEnableRequest: j, submittedRequest: N } = (0, c.A)(e?.id),
        { loading: I, error: C, refresh: b, eligibility: v } = (0, u.A)(e?.id),
        { isApplicationRejected: S, requestCooldownDuration: T } = (0, m.A)(v),
        y =
            e?.features.has(h.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) === !0 ||
            e?.features.has(h.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) === !0,
        { isMonetizationReapplicationDisabled: R } = (0, s.YG)(e?.id),
        L = N || v?.isApplicationPending === !0,
        D = v?.canApply === !0,
        O = x.intl.format(x.t.aJUdOi, { faqUrl: o.A.getArticleURL(h.MVz.CREATOR_FAQ) });
    S && R
        ? (t =
              !0 === _
                  ? x.intl.format(x.t["0o1Q+t"], { communityGuidelineUrl: h.X7G.GUIDELINES })
                  : x.intl.format(x.t.b6h59n, { communityGuidelineUrl: h.X7G.GUIDELINES }))
        : S &&
          null != T &&
          (t = x.intl.format(x.t.TvX207, {
              requestCooldownDuration: T,
              creatorRevenuePolicyUrl: o.A.getArticleURL(h.MVz.CREATOR_POLICY),
          }));
    let G = n && A && !1 === p,
        M = n && !1 === _,
        k = (0, g.r)(),
        U = S && D && A ? x.intl.format(x.t.wbVIUB, {}) : void 0;
    return (
        i.useEffect(() => {
            G && b();
        }, [b, G]),
        {
            resubmittingEnableRequest: f,
            resubmissionError: E,
            isGuildOwner: A,
            createEnableRequest: j,
            resubmittedRequest: N,
            eligibilityLoading: I,
            eligibilityError: C,
            refreshEligibility: b,
            eligibility: v,
            eligibleForMonetization: D,
            isApplicationPending: L,
            hasPreviousApplicationRejection: S,
            requestRejectedNoticeText: t,
            reapplyNoticeText: U,
            showAcceptTermsFlow: M,
            wasRejectedInV1: M && (y || S),
            requirementsFinePrintText: O,
            acceptTermsCheckboxText: k,
        }
    );
}
