n.d(t, { A: () => p });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(562708),
    s = n(834730),
    o = n(688810),
    u = n(139286),
    c = n(95769),
    d = n(375708),
    m = n(70393);
function p(e) {
    let { giftsToNextTier: t, nextTierName: n, nextTierIcon: i, analyticsLocations: p, className: C } = e,
        { analyticsLocations: h } = (0, o.Ay)();
    return (
        (0, u.A)(
            {
                name: a.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER,
                type: a.ImpressionTypes.VIEW,
                properties: { gifts_to_next_tier: t, next_tier: n, location_stack: p ?? h },
            },
            { trackOnInitialLoad: !0 },
        ),
        (0, l.jsxs)("div", {
            className: r()(m.kL, C),
            children: [
                (0, l.jsx)("div", {
                    className: m.zc,
                    children:
                        null != i && (0, l.jsx)("img", { src: i, alt: "", width: 32, height: 32, className: m.Kk }),
                }),
                (0, l.jsx)(s.E, {
                    variant: "text-md/medium",
                    children: d.intl.format(c.default["0+xfd9"], { giftsRemaining: t, nextTier: n }),
                }),
            ],
        })
    );
}
