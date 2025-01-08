n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(192379),
    r = n(399606),
    l = n(674180),
    a = n(594174),
    s = n(63063),
    o = n(223892),
    c = n(58259),
    d = n(158992),
    u = n(159361),
    m = n(377176),
    h = n(981631),
    g = n(388032);
function x(e) {
    let t;
    let n = (0, o.Ob)(e),
        x = null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        p = null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE),
        f = (0, r.e7)([a.default], () => {
            let t = a.default.getCurrentUser();
            return (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        { error: C, loading: v, createEnableRequest: _, submittedRequest: N } = (0, c.Z)(null == e ? void 0 : e.id),
        { loading: I, error: T, refresh: j, eligibility: b } = (0, d.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: S, requestCooldownDuration: E } = (0, u.Z)(b),
        R = (null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: y } = (0, l.eC)(null == e ? void 0 : e.id),
        A = N || (null == b ? void 0 : b.isApplicationPending) === !0,
        Z = (null == b ? void 0 : b.canApply) === !0,
        L = g.intl.format(g.t.aJUdOj, { faqUrl: s.Z.getArticleURL(h.BhN.CREATOR_FAQ) });
    S && y
        ? (t = !0 === x ? g.intl.format(g.t['0o1Q+v'], { communityGuidelineUrl: h.EYA.GUIDELINES }) : g.intl.format(g.t.b6h59v, { communityGuidelineUrl: h.EYA.GUIDELINES }))
        : S &&
          null != E &&
          (t = g.intl.format(g.t.TvX209, {
              requestCooldownDuration: E,
              creatorRevenuePolicyUrl: s.Z.getArticleURL(h.BhN.CREATOR_POLICY)
          }));
    let D = n && f && !1 === p,
        O = n && !1 === x,
        k = (0, m.f)(),
        M = S && Z && f ? g.intl.format(g.t.wbVIUF, {}) : void 0;
    return (
        i.useEffect(() => {
            D && j();
        }, [j, D]),
        {
            resubmittingEnableRequest: v,
            resubmissionError: C,
            isGuildOwner: f,
            createEnableRequest: _,
            resubmittedRequest: N,
            eligibilityLoading: I,
            eligibilityError: T,
            refreshEligibility: j,
            eligibility: b,
            eligibleForMonetization: Z,
            isApplicationPending: A,
            hasPreviousApplicationRejection: S,
            requestRejectedNoticeText: t,
            reapplyNoticeText: M,
            showAcceptTermsFlow: O,
            wasRejectedInV1: O && (R || S),
            requirementsFinePrintText: L,
            acceptTermsCheckboxText: k
        }
    );
}
