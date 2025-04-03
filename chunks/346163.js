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
    g = n(981631),
    p = n(388032);
function h(e) {
    let t,
        n = (0, o.Ob)(e),
        h = null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        f = null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE),
        b = (0, i.e7)([a.default], () => {
            let t = a.default.getCurrentUser();
            return (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        { error: x, loading: j, createEnableRequest: N, submittedRequest: _ } = (0, c.Z)(null == e ? void 0 : e.id),
        { loading: v, error: C, refresh: O, eligibility: y } = (0, d.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: I, requestCooldownDuration: E } = (0, u.Z)(y),
        S = (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: T } = (0, s.eC)(null == e ? void 0 : e.id),
        P = _ || (null == y ? void 0 : y.isApplicationPending) === !0,
        w = (null == y ? void 0 : y.canApply) === !0,
        R = p.NW.format(p.t.aJUdOj, { faqUrl: l.Z.getArticleURL(g.BhN.CREATOR_FAQ) });
    I && T
        ? (t = !0 === h ? p.NW.format(p.t['0o1Q+v'], { communityGuidelineUrl: g.EYA.GUIDELINES }) : p.NW.format(p.t.b6h59v, { communityGuidelineUrl: g.EYA.GUIDELINES }))
        : I &&
          null != E &&
          (t = p.NW.format(p.t.TvX209, {
              requestCooldownDuration: E,
              creatorRevenuePolicyUrl: l.Z.getArticleURL(g.BhN.CREATOR_POLICY)
          }));
    let Z = n && b && !1 === f,
        D = n && !1 === h,
        A = (0, m.f)(),
        k = I && w && b ? p.NW.format(p.t.wbVIUF, {}) : void 0;
    return (
        r.useEffect(() => {
            Z && O();
        }, [O, Z]),
        {
            resubmittingEnableRequest: j,
            resubmissionError: x,
            isGuildOwner: b,
            createEnableRequest: N,
            resubmittedRequest: _,
            eligibilityLoading: v,
            eligibilityError: C,
            refreshEligibility: O,
            eligibility: y,
            eligibleForMonetization: w,
            isApplicationPending: P,
            hasPreviousApplicationRejection: I,
            requestRejectedNoticeText: t,
            reapplyNoticeText: k,
            showAcceptTermsFlow: D,
            wasRejectedInV1: D && (S || I),
            requirementsFinePrintText: R,
            acceptTermsCheckboxText: A
        }
    );
}
