n.d(t, {
    A: () => p,
});
var r = n(64700),
    i = n(417597),
    l = n(465932),
    s = n(260509),
    a = n(287809),
    c = n(975571),
    o = n(469993),
    d = n(586243),
    u = n(963320),
    f = n(897290),
    g = n(980406),
    b = n(652215),
    m = n(985018);

function p(e) {
    let t,
        n = (0, o.ME)(e),
        p = null == e ? void 0 : e.features.has(b.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
        x = null == e ? void 0 : e.features.has(b.GuildFeatures.CREATOR_MONETIZABLE),
        h = (0, i.bG)([a.default], () => {
            let t = a.default.getCurrentUser();
            return null != e && (0, s.bM)(e, t);
        }),
        { error: j, loading: O, createEnableRequest: y, submittedRequest: v } = (0, d.A)(null == e ? void 0 : e.id),
        { loading: A, error: E, refresh: N, eligibility: _ } = (0, u.A)(null == e ? void 0 : e.id),
        { isApplicationRejected: S, requestCooldownDuration: T } = (0, f.A)(_),
        I =
            (null == e ? void 0 : e.features.has(b.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === !0 ||
            (null == e ? void 0 : e.features.has(b.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: C } = (0, l.YG)(null == e ? void 0 : e.id),
        P = v || (null == _ ? void 0 : _.isApplicationPending) === !0,
        w = (null == _ ? void 0 : _.canApply) === !0,
        R = m.intl.format(m.t.aJUdOi, {
            faqUrl: c.A.getArticleURL(b.MVz.CREATOR_FAQ),
        });
    S && C
        ? (t =
              !0 === p
                  ? m.intl.format(m.t["0o1Q+t"], {
                        communityGuidelineUrl: b.X7G.GUIDELINES,
                    })
                  : m.intl.format(m.t.b6h59n, {
                        communityGuidelineUrl: b.X7G.GUIDELINES,
                    }))
        : S &&
          null != T &&
          (t = m.intl.format(m.t.TvX207, {
              requestCooldownDuration: T,
              creatorRevenuePolicyUrl: c.A.getArticleURL(b.MVz.CREATOR_POLICY),
          }));
    let D = n && h && !1 === x,
        G = n && !1 === p,
        L = (0, g.r)(),
        k = S && w && h ? m.intl.format(m.t.wbVIUB, {}) : void 0;
    return (
        r.useEffect(() => {
            D && N();
        }, [N, D]),
        {
            resubmittingEnableRequest: O,
            resubmissionError: j,
            isGuildOwner: h,
            createEnableRequest: y,
            resubmittedRequest: v,
            eligibilityLoading: A,
            eligibilityError: E,
            refreshEligibility: N,
            eligibility: _,
            eligibleForMonetization: w,
            isApplicationPending: P,
            hasPreviousApplicationRejection: S,
            requestRejectedNoticeText: t,
            reapplyNoticeText: k,
            showAcceptTermsFlow: G,
            wasRejectedInV1: G && (I || S),
            requirementsFinePrintText: R,
            acceptTermsCheckboxText: L,
        }
    );
}
