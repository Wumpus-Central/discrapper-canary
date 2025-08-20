n.d(t, { Z: () => c }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(600164),
    s = n(896914),
    l = n(197571);
function c(e) {
    let { features: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsxs)(
                o.Z,
                {
                    align: o.Z.Align.CENTER,
                    className: a()(l.marginTop20, s.feature, { [s.featureBorder]: 0 !== t }),
                    children: [
                        null != e.icon ? (0, r.jsx)("div", { className: a()(s.icon, e.icon) }) : null,
                        (0, r.jsxs)("div", {
                            children: [
                                null != e.title
                                    ? (0, r.jsx)("div", {
                                          className: a()(l.marginBottom8, s.title),
                                          children: e.title,
                                      })
                                    : null,
                                (0, r.jsx)("div", {
                                    className: s.description,
                                    children: e.description,
                                }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
