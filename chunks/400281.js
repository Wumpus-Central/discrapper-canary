"use strict";
n.d(t, { A: () => j, j: () => f });
var i = n(627968),
    s = n(64700),
    l = n(110259),
    r = n(397927),
    a = n(139286),
    o = n(544199),
    d = n(614692),
    c = n(893148),
    u = n(739929),
    m = n(584508),
    g = n(196169),
    x = n(565447),
    h = n(346076),
    _ = n(720281),
    A = n(853922),
    p = n(980197);
function f(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        s = (e) => {
            let { children: t } = e;
            return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(r.cGx, { className: p.ts }), t] });
        },
        l = (0, i.jsx)(s, { children: (0, i.jsx)(h.A, {}) }, A.u.HOW_IT_WORKS),
        a = (0, i.jsx)(s, { children: (0, i.jsx)(g.A, {}) }, A.u.BENEFITS);
    return null != n || t?.sections == null
        ? (0, i.jsxs)(i.Fragment, { children: [l, a] })
        : (0, i.jsx)(i.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case A.u.HOW_IT_WORKS:
                          return l;
                      case A.u.BENEFITS:
                          return a;
                      case A.u.OTHER_CREATORS:
                          return (0, i.jsx)(
                              s,
                              { children: (0, i.jsx)(x.A, { highlightedCreators: e.creators }) },
                              A.u.OTHER_CREATORS,
                          );
                  }
              }),
          });
}
function j(e) {
    let { guild: t } = e,
        n = (0, u.A)(t),
        { eligibilityLoading: g, eligibilityError: x, eligibility: h } = n,
        A = (0, d.s)(h),
        { isLoading: j, error: N, creatorMonetizationOnboardingMarketing: E } = (0, c.A)(t.id);
    return (s.useEffect(() => {
        (0, o.G)(t.id);
    }, [t.id]),
    (0, a.A)(
        {
            type: l.ImpressionTypes.PANE,
            name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
            properties: {
                guild_id: t.id,
                is_owner: n.isGuildOwner,
                is_eligible: n.eligibleForMonetization,
                ineligible_reasons: A,
            },
        },
        { disableTrack: null == t.id || null == h },
    ),
    g || null == h || j)
        ? (0, i.jsx)(r.y$y, {})
        : h.actionRequired
          ? (0, i.jsx)(_.A, { guild: t })
          : null != x
            ? (0, i.jsx)(r.wx6, { type: "critical", children: x.message })
            : (0, i.jsxs)("div", {
                  className: p.kL,
                  children: [
                      (0, i.jsx)(m.A, { guild: t, monetizationEligibility: n }),
                      (0, i.jsx)(f, { onboardingMarketing: E, onboardingMarketingError: N }),
                  ],
              });
}
