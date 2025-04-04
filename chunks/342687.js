n.d(t, { Z: () => c }), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(826298),
    l = n(871237);
let c = (e) => {
    let { showImage: t } = e,
        {
            usageWidth: n,
            descriptionWidth: o,
            sourceWidth: c
        } = i.useMemo(
            () => ({
                usageWidth: a().random(60, 120),
                descriptionWidth: a().random(200, 600),
                sourceWidth: a().random(45, 90)
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
                        style: { maxWidth: (0, s.Q1)(o) },
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
