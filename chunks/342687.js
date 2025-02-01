n.d(t, { Z: () => u });
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n.n(a),
    o = n(826298),
    l = n(253676);
let u = (e) => {
    let { showImage: t } = e,
        {
            usageWidth: n,
            descriptionWidth: a,
            sourceWidth: u
        } = r.useMemo(
            () => ({
                usageWidth: s().random(60, 120),
                descriptionWidth: s().random(200, 600),
                sourceWidth: s().random(45, 90)
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: l.wrapper,
        children: [
            t ? (0, i.jsx)('div', { className: l.image }) : null,
            (0, i.jsxs)('div', {
                className: l.infoWrapper,
                children: [
                    (0, i.jsx)('div', {
                        style: { maxWidth: (0, o.Q1)(n) },
                        className: l.usageWrapper
                    }),
                    (0, i.jsx)('div', {
                        style: { maxWidth: (0, o.Q1)(a) },
                        className: l.description
                    })
                ]
            }),
            (0, i.jsx)('div', {
                style: { width: (0, o.Q1)(u) },
                className: l.source
            })
        ]
    });
};
