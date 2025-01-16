r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(927359),
    u = r(975298),
    c = r(125529),
    d = r(501862),
    f = r(63063),
    _ = r(981631),
    h = r(474936),
    p = r(388032),
    m = r(302291);
function g(e) {
    let { hide: n, pillClassName: r, containerClassName: a } = e,
        { fractionalState: g, endsAt: E } = (0, u.Z)(),
        v = (0, l.Z)(E, l.a.LONG_TIME_LEFT);
    if (!0 === n || g === h.a$.NONE) return null;
    let I = p.intl.format(p.t['4RgA6O'], { helpCenterLink: f.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT) });
    return (0, i.jsx)(c.Z, {
        text: I,
        'aria-label': I.toString(),
        tooltipClassName: m.tooltip,
        className: s()(m.unavailableCounterContainer, a),
        children: (e) =>
            (0, i.jsxs)('div', {
                ...e,
                className: s()(m.unavailableCounterPill, r),
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/bold',
                        className: m.unavailableCounterPillText,
                        children: p.intl.string(p.t['5nrJDA']).toUpperCase()
                    }),
                    (0, i.jsx)(d.Z, {
                        countdownText: v,
                        className: m.countDownText
                    })
                ]
            })
    });
}
