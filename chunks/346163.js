n.d(t, { Z: () => h });
var r = n(647438),
    i = n(399606),
    l = n(674180),
    s = n(601964),
    a = n(594174),
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
        h = null == e ? void 0 : e.features.has(p.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        x = null == e ? void 0 : e.features.has(p.oNc.CREATOR_MONETIZABLE),
        b = (0, i.e7)([a.default], () => {
            let t = a.default.getCurrentUser();
            return null != e && (0, s.eM)(e, t);
        }),
        { error: j, loading: _, createEnableRequest: v, submittedRequest: C } = (0, d.Z)(null == e ? void 0 : e.id),
        { loading: O, error: y, refresh: N, eligibility: E } = (0, u.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: I, requestCooldownDuration: S } = (0, g.Z)(E),
        T =
            (null == e ? void 0 : e.features.has(p.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 ||
            (null == e ? void 0 : e.features.has(p.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: P } = (0, l.eC)(null == e ? void 0 : e.id),
        w = C || (null == E ? void 0 : E.isApplicationPending) === !0,
        Z = (null == E ? void 0 : E.canApply) === !0,
        R = f.intl.format(f.t.aJUdOj, { faqUrl: o.Z.getArticleURL(p.BhN.CREATOR_FAQ) });
    I && P
        ? (t =
              !0 === h
                  ? f.intl.format(f.t["0o1Q+v"], { communityGuidelineUrl: p.EYA.GUIDELINES })
                  : f.intl.format(f.t.b6h59v, { communityGuidelineUrl: p.EYA.GUIDELINES }))
        : I &&
          null != S &&
          (t = f.intl.format(f.t.TvX209, {
              requestCooldownDuration: S,
              creatorRevenuePolicyUrl: o.Z.getArticleURL(p.BhN.CREATOR_POLICY),
          }));
    let D = n && b && !1 === x,
        A = n && !1 === h,
        L = (0, m.f)(),
        k = I && Z && b ? f.intl.format(f.t.wbVIUF, {}) : void 0;
    return (
        r.useEffect(() => {
            D && N();
        }, [N, D]),
        {
            resubmittingEnableRequest: _,
            resubmissionError: j,
            isGuildOwner: b,
            createEnableRequest: v,
            resubmittedRequest: C,
            eligibilityLoading: O,
            eligibilityError: y,
            refreshEligibility: N,
            eligibility: E,
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
