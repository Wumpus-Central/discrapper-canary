n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(927359),
    l = n(975298),
    u = n(125529),
    c = n(501862),
    d = n(63063),
    f = n(981631),
    _ = n(474936),
    p = n(388032),
    h = n(59683);
function m(e) {
    let { hide: t, pillClassName: n, containerClassName: r, isInReverseTrial: m } = e,
        { fractionalState: g, endsAt: E } = (0, l.Z)(),
        v = (0, o.Z)(E, o.a.LONG_TIME_LEFT);
    if (!0 === t || g === _.a$.NONE) return null;
    let y = m ? void 0 : p.intl.format(p.t['4RgA6O'], { helpCenterLink: d.Z.getArticleURL(f.BhN.FRACTIONAL_PREMIUM_ABOUT) });
    return (0, i.jsx)(u.Z, {
        text: y,
        'aria-label': null == y ? void 0 : y.toString(),
        tooltipClassName: h.tooltip,
        className: a()(h.unavailableCounterContainer, r),
        children: (e) =>
            (0, i.jsxs)('div', {
                ...e,
                className: a()(h.unavailableCounterPill, n),
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/bold',
                        className: h.unavailableCounterPillText,
                        children: p.intl.string(p.t['5nrJDA']).toUpperCase()
                    }),
                    !m &&
                        (0, i.jsx)(c.Z, {
                            countdownText: v,
                            className: h.countDownText
                        })
                ]
            })
    });
}
