n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(600164),
    l = n(136420),
    o = n(232186);
function c(e) {
    let { features: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsxs)(
                a.Z,
                {
                    align: a.Z.Align.CENTER,
                    className: r()(o.marginTop20, l.feature, { [l.featureBorder]: 0 !== t }),
                    children: [
                        null != e.icon ? (0, i.jsx)('div', { className: r()(l.icon, e.icon) }) : null,
                        (0, i.jsxs)('div', {
                            children: [
                                null != e.title
                                    ? (0, i.jsx)('div', {
                                          className: r()(o.marginBottom8, l.title),
                                          children: e.title
                                      })
                                    : null,
                                (0, i.jsx)('div', {
                                    className: l.description,
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
