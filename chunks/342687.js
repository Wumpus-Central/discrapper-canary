n.d(t, { Z: () => c }), n(953529);
var r = n(200651),
    i = n(192379),
    a = n(392711),
    o = n.n(a),
    s = n(826298),
    l = n(871237);
let c = (e) => {
    let { showImage: t } = e,
        {
            usageWidth: n,
            descriptionWidth: a,
            sourceWidth: c
        } = i.useMemo(
            () => ({
                usageWidth: o().random(60, 120),
                descriptionWidth: o().random(200, 600),
                sourceWidth: o().random(45, 90)
            }),
            []
        );
    return (0, r.jsxs)('div', {
        className: l.wrapper,
        children: [
            t ? (0, r.jsx)('div', { className: l.image }) : null,
            (0, r.jsxs)('div', {
                className: l.infoWrapper,
                children: [
                    (0, r.jsx)('div', {
                        style: { maxWidth: (0, s.Q1)(n) },
                        className: l.usageWrapper
                    }),
                    (0, r.jsx)('div', {
                        style: { maxWidth: (0, s.Q1)(a) },
                        className: l.description
                    })
                ]
            }),
            (0, r.jsx)('div', {
                style: { width: (0, s.Q1)(c) },
                className: l.source
            })
        ]
    });
};
