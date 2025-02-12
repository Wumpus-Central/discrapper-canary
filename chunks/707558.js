n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(600164),
    a = n(714143),
    o = n(483938);
function c(e) {
    let { features: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsxs)(
                r.Z,
                {
                    align: r.Z.Align.CENTER,
                    className: l()(o.marginTop20, a.feature, { [a.featureBorder]: 0 !== t }),
                    children: [
                        null != e.icon ? (0, i.jsx)('div', { className: l()(a.icon, e.icon) }) : null,
                        (0, i.jsxs)('div', {
                            children: [
                                null != e.title
                                    ? (0, i.jsx)('div', {
                                          className: l()(o.marginBottom8, a.title),
                                          children: e.title
                                      })
                                    : null,
                                (0, i.jsx)('div', {
                                    className: a.description,
                                    children: e.description
                                })
                            ]
                        })
                    ]
                },
                t
            )
        )
    });
}
