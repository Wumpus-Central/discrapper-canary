n.d(t, { Z: () => h });
var r = n(647438),
    i = n(399606),
    l = n(674180),
    a = n(601964),
    s = n(594174),
    o = n(63063),
    c = n(223892),
    d = n(58259),
    u = n(158992),
    g = n(159361),
    m = n(377176),
    p = n(981631),
    f = n(388032);
function h(e) {
    let t,
        n = (0, c.Ob)(e),
        h = null == e ? void 0 : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
        b = null == e ? void 0 : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE),
        x = (0, i.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != e && (0, a.eM)(e, t);
        }),
        { error: j, loading: v, createEnableRequest: _, submittedRequest: C } = (0, d.Z)(null == e ? void 0 : e.id),
        { loading: O, error: y, refresh: E, eligibility: N } = (0, u.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: I, requestCooldownDuration: S } = (0, g.Z)(N),
        T =
            (null == e ? void 0 : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === !0 ||
            (null == e ? void 0 : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: P } = (0, l.eC)(null == e ? void 0 : e.id),
        w = C || (null == N ? void 0 : N.isApplicationPending) === !0,
        Z = (null == N ? void 0 : N.canApply) === !0,
        R = f.intl.format(f.t.aJUdOi, { faqUrl: o.Z.getArticleURL(p.BhN.CREATOR_FAQ) });
    I && P
        ? (t =
              !0 === h
                  ? f.intl.format(f.t["0o1Q+t"], { communityGuidelineUrl: p.EYA.GUIDELINES })
                  : f.intl.format(f.t.b6h59n, { communityGuidelineUrl: p.EYA.GUIDELINES }))
        : I &&
          null != S &&
          (t = f.intl.format(f.t.TvX207, {
              requestCooldownDuration: S,
              creatorRevenuePolicyUrl: o.Z.getArticleURL(p.BhN.CREATOR_POLICY),
          }));
    let D = n && x && !1 === b,
        A = n && !1 === h,
        L = (0, m.f)(),
        k = I && Z && x ? f.intl.format(f.t.wbVIUB, {}) : void 0;
    return (
        r.useEffect(() => {
            D && E();
        }, [E, D]),
        {
            resubmittingEnableRequest: v,
            resubmissionError: j,
            isGuildOwner: x,
            createEnableRequest: _,
            resubmittedRequest: C,
            eligibilityLoading: O,
            eligibilityError: y,
            refreshEligibility: E,
            eligibility: N,
            eligibleForMonetization: Z,
            isApplicationPending: w,
            hasPreviousApplicationRejection: I,
            requestRejectedNoticeText: t,
            reapplyNoticeText: k,
            showAcceptTermsFlow: A,
            wasRejectedInV1: A && (T || I),
            requirementsFinePrintText: R,
            acceptTermsCheckboxText: L,
        }
    );
}
