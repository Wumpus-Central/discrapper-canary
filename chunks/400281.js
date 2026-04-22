n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(110259),
    r = n(404778),
    a = n(289873),
    o = n(683071),
    d = n(139286),
    c = n(544199),
    u = n(614692),
    m = n(893148),
    g = n(739929),
    h = n(584508),
    x = n(196169),
    _ = n(565447),
    p = n(346076),
    A = n(720281),
    E = n(853922),
    f = n(356028);
function j(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        l = (e) => {
            let { children: t } = e;
            return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(r.c, { className: f.ts }), t] });
        },
        s = (0, i.jsx)(l, { children: (0, i.jsx)(p.A, {}) }, E.u.HOW_IT_WORKS),
        a = (0, i.jsx)(l, { children: (0, i.jsx)(x.A, {}) }, E.u.BENEFITS);
    return null != n || t?.sections == null
        ? (0, i.jsxs)(i.Fragment, { children: [s, a] })
        : (0, i.jsx)(i.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case E.u.HOW_IT_WORKS:
                          return s;
                      case E.u.BENEFITS:
                          return a;
                      case E.u.OTHER_CREATORS:
                          return (0, i.jsx)(
                              l,
                              { children: (0, i.jsx)(_.A, { highlightedCreators: e.creators }) },
                              E.u.OTHER_CREATORS,
                          );
                  }
              }),
          });
}
function N(e) {
    let { guild: t } = e,
        n = (0, g.A)(t),
        { eligibilityLoading: r, eligibilityError: x, eligibility: _ } = n,
        p = (0, u.s)(_),
        { isLoading: E, error: N, creatorMonetizationOnboardingMarketing: I } = (0, m.A)(t.id);
    return (l.useEffect(() => {
        (0, c.G)(t.id);
    }, [t.id]),
    (0, d.A)(
        {
            type: s.ImpressionTypes.PANE,
            name: s.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
            properties: {
                guild_id: t.id,
                is_owner: n.isGuildOwner,
                is_eligible: n.eligibleForMonetization,
                ineligible_reasons: p,
            },
        },
        { disableTrack: null == t.id || null == _ },
    ),
    r || null == _ || E)
        ? (0, i.jsx)(a.y, {})
        : _.actionRequired
          ? (0, i.jsx)(A.A, { guild: t })
          : null != x
            ? (0, i.jsx)(o.w, { type: "critical", children: x.message })
            : (0, i.jsxs)("div", {
                  className: f.kL,
                  children: [
                      (0, i.jsx)(h.A, { guild: t, monetizationEligibility: n }),
                      (0, i.jsx)(j, { onboardingMarketing: I, onboardingMarketingError: N }),
                  ],
              });
}
