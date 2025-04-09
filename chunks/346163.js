n.d(t, { Z: () => f });
var r = n(192379),
    i = n(399606),
    s = n(674180),
    a = n(594174),
    l = n(63063),
    o = n(223892),
    c = n(58259),
    d = n(158992),
    u = n(159361),
    m = n(377176),
    g = n(981631),
    p = n(388032);
function f(e) {
    let t,
        n = (0, o.Ob)(e),
        f = null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        h = null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE),
        b = (0, i.e7)([a.default], () => {
            let t = a.default.getCurrentUser();
            return (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        { error: x, loading: j, createEnableRequest: N, submittedRequest: v } = (0, c.Z)(null == e ? void 0 : e.id),
        { loading: _, error: y, refresh: O, eligibility: C } = (0, d.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: I, requestCooldownDuration: E } = (0, u.Z)(C),
        S = (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: T } = (0, s.eC)(null == e ? void 0 : e.id),
        P = v || (null == C ? void 0 : C.isApplicationPending) === !0,
        w = (null == C ? void 0 : C.canApply) === !0,
        R = p.NW.format(p.t.aJUdOj, { faqUrl: l.Z.getArticleURL(g.BhN.CREATOR_FAQ) });
    I && T
        ? (t = !0 === f ? p.NW.format(p.t['0o1Q+v'], { communityGuidelineUrl: g.EYA.GUIDELINES }) : p.NW.format(p.t.b6h59v, { communityGuidelineUrl: g.EYA.GUIDELINES }))
        : I &&
          null != E &&
          (t = p.NW.format(p.t.TvX209, {
              requestCooldownDuration: E,
              creatorRevenuePolicyUrl: l.Z.getArticleURL(g.BhN.CREATOR_POLICY)
          }));
    let D = n && b && !1 === h,
        Z = n && !1 === f,
        k = (0, m.f)(),
        A = I && w && b ? p.NW.format(p.t.wbVIUF, {}) : void 0;
    return (
        r.useEffect(() => {
            D && O();
        }, [O, D]),
        {
            resubmittingEnableRequest: j,
            resubmissionError: x,
            isGuildOwner: b,
            createEnableRequest: N,
            resubmittedRequest: v,
            eligibilityLoading: _,
            eligibilityError: y,
            refreshEligibility: O,
            eligibility: C,
            eligibleForMonetization: w,
            isApplicationPending: P,
            hasPreviousApplicationRejection: I,
            requestRejectedNoticeText: t,
            reapplyNoticeText: A,
            showAcceptTermsFlow: Z,
            wasRejectedInV1: Z && (S || I),
            requirementsFinePrintText: R,
            acceptTermsCheckboxText: k
        }
    );
}
