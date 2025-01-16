var i = r(200651),
    a = r(192379),
    s = r(392711),
    o = r.n(s),
    l = r(826298),
    u = r(253676);
let c = (e) => {
    let { showImage: n } = e,
        {
            usageWidth: r,
            descriptionWidth: s,
            sourceWidth: c
        } = a.useMemo(
            () => ({
                usageWidth: o().random(60, 120),
                descriptionWidth: o().random(200, 600),
                sourceWidth: o().random(45, 90)
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: u.wrapper,
        children: [
            n ? (0, i.jsx)('div', { className: u.image }) : null,
            (0, i.jsxs)('div', {
                className: u.infoWrapper,
                children: [
                    (0, i.jsx)('div', {
                        style: { maxWidth: (0, l.Q1)(r) },
                        className: u.usageWrapper
                    }),
                    (0, i.jsx)('div', {
                        style: { maxWidth: (0, l.Q1)(s) },
                        className: u.description
                    })
                ]
            }),
            (0, i.jsx)('div', {
                style: { width: (0, l.Q1)(c) },
                className: u.source
            })
        ]
    });
};
n.Z = c;
