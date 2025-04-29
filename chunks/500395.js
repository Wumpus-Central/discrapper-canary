n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(481060),
    s = n(213609),
    a = n(787051),
    o = n(696936),
    c = n(539290),
    u = n(975464),
    d = n(388032),
    m = n(900388),
    g = n(270395);
function p(e) {
    let { config: t } = e,
        { noticeText: n, ctaLabel: i, ctaClickable: s, onCtaClicked: a } = t;
    return (0, r.jsxs)('div', {
        className: m.__invalid_ctaContainer,
        children: [
            (0, r.jsx)('img', {
                className: m.__invalid_heroBanner,
                src: g,
                alt: d.intl.string(d.t.Af4klJ)
            }),
            (0, r.jsxs)('div', {
                className: m.__invalid_ctaContent,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: d.intl.string(d.t.PqYfh4)
                    }),
                    (0, r.jsx)(l.LZC, { size: 12 }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d.intl.string(d.t['41wkMT'])
                    }),
                    (0, r.jsx)(l.LZC, { size: 24 }),
                    (0, r.jsx)(c.Z, {
                        className: m.waitlist,
                        color: o.W.BROWN,
                        buttonPosition: c.E.RIGHT,
                        notice: n,
                        ctaLabel: i,
                        ctaDisabled: !s,
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
        { isLoading: o, error: c, creatorMonetizationOnboardingMarketing: d } = (0, a.Z)(t.id);
    return ((0, s.Z)({
        type: i.ImpressionTypes.PANE,
        name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
        properties: { guild_id: t.id }
    }),
    o)
        ? (0, r.jsx)(l.$jN, {})
        : (0, r.jsxs)('div', {
              className: m.__invalid_container,
              children: [
                  (0, r.jsx)(p, { config: n }),
                  (0, r.jsx)(u.C, {
                      onboardingMarketing: d,
                      onboardingMarketingError: c
                  })
              ]
          });
}
