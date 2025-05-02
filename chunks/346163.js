n.d(t, { Z: () => f });
var r = n(192379),
    i = n(399606),
    l = n(674180),
    s = n(594174),
    a = n(63063),
    o = n(223892),
    c = n(58259),
    u = n(158992),
    d = n(159361),
    m = n(377176),
    g = n(981631),
    p = n(388032);
function f(e) {
    let t,
        n = (0, o.Ob)(e),
        f = null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        h = null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE),
        x = (0, i.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        { error: b, loading: j, createEnableRequest: _, submittedRequest: v } = (0, c.Z)(null == e ? void 0 : e.id),
        { loading: O, error: C, refresh: y, eligibility: N } = (0, u.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: I, requestCooldownDuration: E } = (0, d.Z)(N),
        S = (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: T } = (0, l.eC)(null == e ? void 0 : e.id),
        P = v || (null == N ? void 0 : N.isApplicationPending) === !0,
        w = (null == N ? void 0 : N.canApply) === !0,
        R = p.intl.format(p.t.aJUdOj, { faqUrl: a.Z.getArticleURL(g.BhN.CREATOR_FAQ) });
    I && T
        ? (t = !0 === f ? p.intl.format(p.t['0o1Q+v'], { communityGuidelineUrl: g.EYA.GUIDELINES }) : p.intl.format(p.t.b6h59v, { communityGuidelineUrl: g.EYA.GUIDELINES }))
        : I &&
          null != E &&
          (t = p.intl.format(p.t.TvX209, {
              requestCooldownDuration: E,
              creatorRevenuePolicyUrl: a.Z.getArticleURL(g.BhN.CREATOR_POLICY)
          }));
    let Z = n && x && !1 === h,
        D = n && !1 === f,
        k = (0, m.f)(),
        A = I && w && x ? p.intl.format(p.t.wbVIUF, {}) : void 0;
    return (
        r.useEffect(() => {
            Z && y();
        }, [y, Z]),
        {
            resubmittingEnableRequest: j,
            resubmissionError: b,
            isGuildOwner: x,
            createEnableRequest: _,
            resubmittedRequest: v,
            eligibilityLoading: O,
            eligibilityError: C,
            refreshEligibility: y,
            eligibility: N,
            eligibleForMonetization: w,
            isApplicationPending: P,
            hasPreviousApplicationRejection: I,
            requestRejectedNoticeText: t,
            reapplyNoticeText: A,
            showAcceptTermsFlow: D,
            wasRejectedInV1: D && (S || I),
            requirementsFinePrintText: R,
            acceptTermsCheckboxText: k
        }
    );
}
