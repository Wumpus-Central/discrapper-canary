n.d(t, { Z: () => c }), n(953529);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(600164),
    a = n(841111),
    o = n(20493);
function c(e) {
    let { features: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsxs)(
                l.Z,
                {
                    align: l.Z.Align.CENTER,
                    className: s()(o.marginTop20, a.feature, { [a.featureBorder]: 0 !== t }),
                    children: [
                        null != e.icon ? (0, i.jsx)('div', { className: s()(a.icon, e.icon) }) : null,
                        (0, i.jsxs)('div', {
                            children: [
                                null != e.title
                                    ? (0, i.jsx)('div', {
                                          className: s()(o.marginBottom8, a.title),
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
