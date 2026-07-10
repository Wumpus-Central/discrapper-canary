n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(562708),
    s = n(834730),
    o = n(688810),
    u = n(139286),
    c = n(360615),
    d = n(375708),
    p = n(44168);
function m(e) {
    let { giftsToNextTier: t, nextTierName: n, nextTierIcon: i, analyticsLocations: m, className: C } = e,
        { analyticsLocations: h } = (0, o.Ay)();
    return (
        (0, u.A)(
            {
                name: a.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER,
                type: a.ImpressionTypes.VIEW,
                properties: { gifts_to_next_tier: t, next_tier: n, location_stack: m ?? h },
            },
            { trackOnInitialLoad: !0 },
        ),
        (0, l.jsxs)("div", {
            className: r()(p.kL, C),
            children: [
                (0, l.jsx)("div", {
                    className: p.zc,
                    children:
                        null != i && (0, l.jsx)("img", { src: i, alt: "", width: 32, height: 32, className: p.Kk }),
                }),
                (0, l.jsx)(s.E, {
                    variant: "text-md/medium",
                    children: d.intl.format(c.default["0+xfd9"], { giftsRemaining: t, nextTier: n }),
                }),
            ],
        })
    );
}
