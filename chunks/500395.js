n.d(t, { Z: () => m });
var r = n(54381),
    i = n(990547),
    l = n(481060),
    a = n(213609),
    s = n(787051),
    o = n(975464),
    c = n(388032),
    d = n(370511),
    u = n(270395);
function g(e) {
    let { config: t } = e,
        { noticeText: n, ctaLabel: i, ctaClickable: a, onCtaClicked: s } = t;
    return (0, r.jsxs)("div", {
        className: d.__invalid_ctaContainer,
        children: [
            (0, r.jsx)("img", {
                className: d.__invalid_heroBanner,
                src: u,
                alt: c.intl.string(c.t.Af4klP),
            }),
            (0, r.jsxs)("div", {
                className: d.__invalid_ctaContent,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: c.intl.string(c.t["PqYfh/"]),
                    }),
                    (0, r.jsx)(l.LZC, { size: 12 }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: c.intl.string(c.t["41wkMc"]),
                    }),
                    (0, r.jsx)(l.LZC, { size: 24 }),
                    (0, r.jsx)(l.Wn, {
                        messageType: l.QYI.INFO,
                        action: (0, r.jsx)(l.Button, {
                            variant: "overlay-secondary",
                            text: i,
                            onClick: s,
                            disabled: !a,
                        }),
                        children: n,
                    }),
                ],
            }),
        ],
    });
}
function m(e) {
    let { guild: t, config: n } = e,
        { isLoading: c, error: u, creatorMonetizationOnboardingMarketing: m } = (0, s.Z)(t.id);
    return ((0, a.Z)({
        type: i.ImpressionTypes.PANE,
        name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
        properties: { guild_id: t.id },
    }),
    c)
        ? (0, r.jsx)(l.$jN, {})
        : (0, r.jsxs)("div", {
              className: d.__invalid_container,
              children: [
                  (0, r.jsx)(g, { config: n }),
                  (0, r.jsx)(o.C, {
                      onboardingMarketing: m,
                      onboardingMarketingError: u,
                  }),
              ],
          });
}
