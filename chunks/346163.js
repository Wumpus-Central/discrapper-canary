n.d(t, { Z: () => h });
var r = n(192379),
    i = n(399606),
    s = n(674180),
    l = n(594174),
    a = n(63063),
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
        x = (0, i.e7)([l.default], () => {
            let t = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        { error: b, loading: j, createEnableRequest: N, submittedRequest: _ } = (0, c.Z)(null == e ? void 0 : e.id),
        { loading: v, error: O, refresh: C, eligibility: y } = (0, d.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: I, requestCooldownDuration: E } = (0, u.Z)(y),
        S = (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: T } = (0, s.eC)(null == e ? void 0 : e.id),
        P = _ || (null == y ? void 0 : y.isApplicationPending) === !0,
        w = (null == y ? void 0 : y.canApply) === !0,
        R = p.NW.format(p.t.aJUdOj, { faqUrl: a.Z.getArticleURL(g.BhN.CREATOR_FAQ) });
    I && T
        ? (t = !0 === h ? p.NW.format(p.t['0o1Q+v'], { communityGuidelineUrl: g.EYA.GUIDELINES }) : p.NW.format(p.t.b6h59v, { communityGuidelineUrl: g.EYA.GUIDELINES }))
        : I &&
          null != E &&
          (t = p.NW.format(p.t.TvX209, {
              requestCooldownDuration: E,
              creatorRevenuePolicyUrl: a.Z.getArticleURL(g.BhN.CREATOR_POLICY)
          }));
    let Z = n && x && !1 === f,
        D = n && !1 === h,
        A = (0, m.f)(),
        W = I && w && x ? p.NW.format(p.t.wbVIUF, {}) : void 0;
    return (
        r.useEffect(() => {
            Z && C();
        }, [C, Z]),
        {
            resubmittingEnableRequest: j,
            resubmissionError: b,
            isGuildOwner: x,
            createEnableRequest: N,
            resubmittedRequest: _,
            eligibilityLoading: v,
            eligibilityError: O,
            refreshEligibility: C,
            eligibility: y,
            eligibleForMonetization: w,
            isApplicationPending: P,
            hasPreviousApplicationRejection: I,
            requestRejectedNoticeText: t,
            reapplyNoticeText: W,
            showAcceptTermsFlow: D,
            wasRejectedInV1: D && (S || I),
            requirementsFinePrintText: R,
            acceptTermsCheckboxText: A
        }
    );
}
