n.d(t, { Z: () => p });
var r = n(473749),
    i = n(399606),
    l = n(674180),
    a = n(601964),
    s = n(594174),
    o = n(63063),
    c = n(223892),
    d = n(58259),
    u = n(158992),
    g = n(159361),
    f = n(377176),
    m = n(981631),
    b = n(388032);
function p(e) {
    let t,
        n = (0, c.Ob)(e),
        p = null == e ? void 0 : e.features.has(m.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
        h = null == e ? void 0 : e.features.has(m.GuildFeatures.CREATOR_MONETIZABLE),
        x = (0, i.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != e && (0, a.eM)(e, t);
        }),
        { error: j, loading: v, createEnableRequest: O, submittedRequest: C } = (0, d.Z)(null == e ? void 0 : e.id),
        { loading: y, error: N, refresh: E, eligibility: I } = (0, u.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: S, requestCooldownDuration: _ } = (0, g.Z)(I),
        T =
            (null == e ? void 0 : e.features.has(m.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === !0 ||
            (null == e ? void 0 : e.features.has(m.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: P } = (0, l.eC)(null == e ? void 0 : e.id),
        w = C || (null == I ? void 0 : I.isApplicationPending) === !0,
        Z = (null == I ? void 0 : I.canApply) === !0,
        R = b.intl.format(b.t.aJUdOi, { faqUrl: o.Z.getArticleURL(m.BhN.CREATOR_FAQ) });
    S && P
        ? (t =
              !0 === p
                  ? b.intl.format(b.t["0o1Q+t"], { communityGuidelineUrl: m.EYA.GUIDELINES })
                  : b.intl.format(b.t.b6h59n, { communityGuidelineUrl: m.EYA.GUIDELINES }))
        : S &&
          null != _ &&
          (t = b.intl.format(b.t.TvX207, {
              requestCooldownDuration: _,
              creatorRevenuePolicyUrl: o.Z.getArticleURL(m.BhN.CREATOR_POLICY),
          }));
    let D = n && x && !1 === h,
        A = n && !1 === p,
        L = (0, f.f)(),
        k = S && Z && x ? b.intl.format(b.t.wbVIUB, {}) : void 0;
    return (
        r.useEffect(() => {
            D && E();
        }, [E, D]),
        {
            resubmittingEnableRequest: v,
            resubmissionError: j,
            isGuildOwner: x,
            createEnableRequest: O,
            resubmittedRequest: C,
            eligibilityLoading: y,
            eligibilityError: N,
            refreshEligibility: E,
            eligibility: I,
            eligibleForMonetization: Z,
            isApplicationPending: w,
            hasPreviousApplicationRejection: S,
            requestRejectedNoticeText: t,
            reapplyNoticeText: k,
            showAcceptTermsFlow: A,
            wasRejectedInV1: A && (T || S),
            requirementsFinePrintText: R,
            acceptTermsCheckboxText: L,
        }
    );
}
