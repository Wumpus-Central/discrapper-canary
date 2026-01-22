n.d(t, {
    A: () => O,
    j: () => j,
});
var r = n(627968),
    i = n(64700),
    l = n(110259),
    s = n(397927),
    a = n(139286),
    c = n(544199),
    o = n(614692),
    d = n(893148),
    u = n(739929),
    f = n(584508),
    g = n(196169),
    b = n(565447),
    m = n(346076),
    p = n(720281),
    x = n(853922),
    h = n(980197);

function j(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        i = (e) => {
            let { children: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.cGx, {
                        className: h.ts,
                    }),
                    t,
                ],
            });
        },
        l = (0, r.jsx)(
            i,
            {
                children: (0, r.jsx)(m.A, {}),
            },
            x.u.HOW_IT_WORKS,
        ),
        a = (0, r.jsx)(
            i,
            {
                children: (0, r.jsx)(g.A, {}),
            },
            x.u.BENEFITS,
        );
    return null != n || (null == t ? void 0 : t.sections) == null
        ? (0, r.jsxs)(r.Fragment, {
              children: [l, a],
          })
        : (0, r.jsx)(r.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case x.u.HOW_IT_WORKS:
                          return l;
                      case x.u.BENEFITS:
                          return a;
                      case x.u.OTHER_CREATORS:
                          return (0, r.jsx)(
                              i,
                              {
                                  children: (0, r.jsx)(b.A, {
                                      highlightedCreators: e.creators,
                                  }),
                              },
                              x.u.OTHER_CREATORS,
                          );
                  }
              }),
          });
}

function O(e) {
    let { guild: t } = e,
        n = (0, u.A)(t),
        { eligibilityLoading: g, eligibilityError: b, eligibility: m } = n,
        x = (0, o.s)(m),
        { isLoading: O, error: y, creatorMonetizationOnboardingMarketing: v } = (0, d.A)(t.id);
    return (i.useEffect(() => {
        (0, c.G)(t.id);
    }, [t.id]),
    (0, a.A)(
        {
            type: l.ImpressionTypes.PANE,
            name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
            properties: {
                guild_id: t.id,
                is_owner: n.isGuildOwner,
                is_eligible: n.eligibleForMonetization,
                ineligible_reasons: x,
            },
        },
        {
            disableTrack: null == t.id || null == m,
        },
    ),
    g || null == m || O)
        ? (0, r.jsx)(s.y$y, {})
        : m.actionRequired
          ? (0, r.jsx)(p.A, {
                guild: t,
            })
          : null != b
            ? (0, r.jsx)(s.wx6, {
                  type: "critical",
                  children: b.message,
              })
            : (0, r.jsxs)("div", {
                  className: h.kL,
                  children: [
                      (0, r.jsx)(f.A, {
                          guild: t,
                          monetizationEligibility: n,
                      }),
                      (0, r.jsx)(j, {
                          onboardingMarketing: v,
                          onboardingMarketingError: y,
                      }),
                  ],
              });
}
