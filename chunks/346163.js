n.d(t, { Z: () => h });
var r = n(73800),
    i = n(399606),
    l = n(674180),
    s = n(601964),
    a = n(594174),
    o = n(63063),
    c = n(223892),
    d = n(58259),
    u = n(158992),
    m = n(159361),
    g = n(377176),
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
        { error: j, loading: v, createEnableRequest: _, submittedRequest: O } = (0, d.Z)(null == e ? void 0 : e.id),
        { loading: C, error: y, refresh: N, eligibility: I } = (0, u.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: E, requestCooldownDuration: S } = (0, m.Z)(I),
        T = (null == e ? void 0 : e.features.has(p.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.features.has(p.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: P } = (0, l.eC)(null == e ? void 0 : e.id),
        w = O || (null == I ? void 0 : I.isApplicationPending) === !0,
        R = (null == I ? void 0 : I.canApply) === !0,
        Z = f.intl.format(f.t.aJUdOj, { faqUrl: o.Z.getArticleURL(p.BhN.CREATOR_FAQ) });
    E && P
        ? (t = !0 === h ? f.intl.format(f.t['0o1Q+v'], { communityGuidelineUrl: p.EYA.GUIDELINES }) : f.intl.format(f.t.b6h59v, { communityGuidelineUrl: p.EYA.GUIDELINES }))
        : E &&
          null != S &&
          (t = f.intl.format(f.t.TvX209, {
              requestCooldownDuration: S,
              creatorRevenuePolicyUrl: o.Z.getArticleURL(p.BhN.CREATOR_POLICY)
          }));
    let D = n && b && !1 === x,
        A = n && !1 === h,
        L = (0, g.f)(),
        k = E && R && b ? f.intl.format(f.t.wbVIUF, {}) : void 0;
    return (
        r.useEffect(() => {
            D && N();
        }, [N, D]),
        {
            resubmittingEnableRequest: v,
            resubmissionError: j,
            isGuildOwner: b,
            createEnableRequest: _,
            resubmittedRequest: O,
            eligibilityLoading: C,
            eligibilityError: y,
            refreshEligibility: N,
            eligibility: I,
            eligibleForMonetization: R,
            isApplicationPending: w,
            hasPreviousApplicationRejection: E,
            requestRejectedNoticeText: t,
            reapplyNoticeText: k,
            showAcceptTermsFlow: A,
            wasRejectedInV1: A && (T || E),
            requirementsFinePrintText: Z,
            acceptTermsCheckboxText: L
        }
    );
}
