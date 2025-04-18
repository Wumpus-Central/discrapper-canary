n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(990547),
    s = n(481060),
    l = n(213609),
    a = n(787051),
    o = n(696936),
    c = n(539290),
    d = n(975464),
    u = n(388032),
    m = n(900388),
    g = n(270395);
function p(e) {
    let { config: t } = e,
        { noticeText: n, ctaLabel: i, ctaClickable: l, onCtaClicked: a } = t;
    return (0, r.jsxs)('div', {
        className: m.__invalid_ctaContainer,
        children: [
            (0, r.jsx)('img', {
                className: m.__invalid_heroBanner,
                src: g,
                alt: u.NW.string(u.t.Af4klJ)
            }),
            (0, r.jsxs)('div', {
                className: m.__invalid_ctaContent,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: u.NW.string(u.t.PqYfh4)
                    }),
                    (0, r.jsx)(s.LZC, { size: 12 }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u.NW.string(u.t['41wkMT'])
                    }),
                    (0, r.jsx)(s.LZC, { size: 24 }),
                    (0, r.jsx)(c.Z, {
                        className: m.waitlist,
                        color: o.W.BROWN,
                        buttonPosition: c.E.RIGHT,
                        notice: n,
                        ctaLabel: i,
                        ctaDisabled: !l,
                        ctaClassName: m.waitlistCtaButton,
                        onClick: a
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { guild: t, config: n } = e,
        { isLoading: o, error: c, creatorMonetizationOnboardingMarketing: u } = (0, a.Z)(t.id);
    return ((0, l.Z)({
        type: i.ImpressionTypes.PANE,
        name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
        properties: { guild_id: t.id }
    }),
    o)
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsxs)('div', {
              className: m.__invalid_container,
              children: [
                  (0, r.jsx)(p, { config: n }),
                  (0, r.jsx)(d.C, {
                      onboardingMarketing: u,
                      onboardingMarketingError: c
                  })
              ]
          });
}
