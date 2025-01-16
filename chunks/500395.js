n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var r = n(990547),
    l = n(481060),
    s = n(213609),
    a = n(787051),
    o = n(696936),
    c = n(539290),
    d = n(975464),
    u = n(388032),
    m = n(479643),
    h = n(270395);
function g(e) {
    let { config: t } = e,
        { noticeText: n, ctaLabel: r, ctaClickable: s, onCtaClicked: a } = t;
    return (0, i.jsxs)('div', {
        className: m.__invalid_ctaContainer,
        children: [
            (0, i.jsx)('img', {
                className: m.__invalid_heroBanner,
                src: h,
                alt: u.intl.string(u.t.Af4klJ)
            }),
            (0, i.jsxs)('div', {
                className: m.__invalid_ctaContent,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: u.intl.string(u.t.PqYfh4)
                    }),
                    (0, i.jsx)(l.Spacer, { size: 12 }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u.intl.string(u.t['41wkMT'])
                    }),
                    (0, i.jsx)(l.Spacer, { size: 24 }),
                    (0, i.jsx)(c.Z, {
                        className: m.waitlist,
                        color: o.W.BROWN,
                        buttonPosition: c.E.RIGHT,
                        notice: n,
                        ctaLabel: r,
                        ctaDisabled: !s,
                        ctaClassName: m.waitlistCtaButton,
                        onClick: a
                    })
                ]
            })
        ]
    });
}
function x(e) {
    let { guild: t, config: n } = e,
        { isLoading: o, error: c, creatorMonetizationOnboardingMarketing: u } = (0, a.Z)(t.id);
    return ((0, s.Z)({
        type: r.ImpressionTypes.PANE,
        name: r.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
        properties: { guild_id: t.id }
    }),
    o)
        ? (0, i.jsx)(l.Spinner, {})
        : (0, i.jsxs)('div', {
              className: m.__invalid_container,
              children: [
                  (0, i.jsx)(g, { config: n }),
                  (0, i.jsx)(d.C, {
                      onboardingMarketing: u,
                      onboardingMarketingError: c
                  })
              ]
          });
}
