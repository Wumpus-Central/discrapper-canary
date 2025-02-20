n.d(t, { Z: () => h });
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
    p = n(981631),
    g = n(388032);
function h(e) {
    let t;
    let n = (0, o.Ob)(e),
        h = null == e ? void 0 : e.hasFeature(p.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        f = null == e ? void 0 : e.hasFeature(p.oNc.CREATOR_MONETIZABLE),
        b = (0, i.e7)([a.default], () => {
            let t = a.default.getCurrentUser();
            return (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        { error: x, loading: j, createEnableRequest: N, submittedRequest: v } = (0, c.Z)(null == e ? void 0 : e.id),
        { loading: _, error: O, refresh: y, eligibility: C } = (0, d.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: I, requestCooldownDuration: E } = (0, u.Z)(C),
        S = (null == e ? void 0 : e.hasFeature(p.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(p.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: T } = (0, s.eC)(null == e ? void 0 : e.id),
        P = v || (null == C ? void 0 : C.isApplicationPending) === !0,
        w = (null == C ? void 0 : C.canApply) === !0,
        R = g.NW.format(g.t.aJUdOj, { faqUrl: l.Z.getArticleURL(p.BhN.CREATOR_FAQ) });
    I && T
        ? (t = !0 === h ? g.NW.format(g.t['0o1Q+v'], { communityGuidelineUrl: p.EYA.GUIDELINES }) : g.NW.format(g.t.b6h59v, { communityGuidelineUrl: p.EYA.GUIDELINES }))
        : I &&
          null != E &&
          (t = g.NW.format(g.t.TvX209, {
              requestCooldownDuration: E,
              creatorRevenuePolicyUrl: l.Z.getArticleURL(p.BhN.CREATOR_POLICY)
          }));
    let D = n && b && !1 === f,
        Z = n && !1 === h,
        A = (0, m.f)(),
        k = I && w && b ? g.NW.format(g.t.wbVIUF, {}) : void 0;
    return (
        r.useEffect(() => {
            D && y();
        }, [y, D]),
        {
            resubmittingEnableRequest: j,
            resubmissionError: x,
            isGuildOwner: b,
            createEnableRequest: N,
            resubmittedRequest: v,
            eligibilityLoading: _,
            eligibilityError: O,
            refreshEligibility: y,
            eligibility: C,
            eligibleForMonetization: w,
            isApplicationPending: P,
            hasPreviousApplicationRejection: I,
            requestRejectedNoticeText: t,
            reapplyNoticeText: k,
            showAcceptTermsFlow: Z,
            wasRejectedInV1: Z && (S || I),
            requirementsFinePrintText: R,
            acceptTermsCheckboxText: A
        }
    );
}
