n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(600164),
    a = n(136420),
    o = n(232186);
function c(e) {
    let { features: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsxs)(
                l.Z,
                {
                    align: l.Z.Align.CENTER,
                    className: r()(o.marginTop20, a.feature, { [a.featureBorder]: 0 !== t }),
                    children: [
                        null != e.icon ? (0, i.jsx)('div', { className: r()(a.icon, e.icon) }) : null,
                        (0, i.jsxs)('div', {
                            children: [
                                null != e.title
                                    ? (0, i.jsx)('div', {
                                          className: r()(o.marginBottom8, a.title),
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
