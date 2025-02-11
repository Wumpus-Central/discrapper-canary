n.d(t, { Z: () => x });
var i = n(192379),
    r = n(399606),
    l = n(674180),
    s = n(594174),
    a = n(63063),
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
        _ = (0, r.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        { error: C, loading: f, createEnableRequest: v, submittedRequest: N } = (0, c.Z)(null == e ? void 0 : e.id),
        { loading: j, error: I, refresh: E, eligibility: b } = (0, d.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: T, requestCooldownDuration: S } = (0, u.Z)(b),
        R = (null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: Z } = (0, l.eC)(null == e ? void 0 : e.id),
        y = N || (null == b ? void 0 : b.isApplicationPending) === !0,
        A = (null == b ? void 0 : b.canApply) === !0,
        L = g.intl.format(g.t.aJUdOj, { faqUrl: a.Z.getArticleURL(h.BhN.CREATOR_FAQ) });
    T && Z
        ? (t = !0 === x ? g.intl.format(g.t['0o1Q+v'], { communityGuidelineUrl: h.EYA.GUIDELINES }) : g.intl.format(g.t.b6h59v, { communityGuidelineUrl: h.EYA.GUIDELINES }))
        : T &&
          null != S &&
          (t = g.intl.format(g.t.TvX209, {
              requestCooldownDuration: S,
              creatorRevenuePolicyUrl: a.Z.getArticleURL(h.BhN.CREATOR_POLICY)
          }));
    let D = n && _ && !1 === p,
        k = n && !1 === x,
        O = (0, m.f)(),
        P = T && A && _ ? g.intl.format(g.t.wbVIUF, {}) : void 0;
    return (
        i.useEffect(() => {
            D && E();
        }, [E, D]),
        {
            resubmittingEnableRequest: f,
            resubmissionError: C,
            isGuildOwner: _,
            createEnableRequest: v,
            resubmittedRequest: N,
            eligibilityLoading: j,
            eligibilityError: I,
            refreshEligibility: E,
            eligibility: b,
            eligibleForMonetization: A,
            isApplicationPending: y,
            hasPreviousApplicationRejection: T,
            requestRejectedNoticeText: t,
            reapplyNoticeText: P,
            showAcceptTermsFlow: k,
            wasRejectedInV1: k && (R || T),
            requirementsFinePrintText: L,
            acceptTermsCheckboxText: O
        }
    );
}
