n.d(t, { Z: () => i });
var r = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    l = n(481060),
    s = n(259580),
    c = n(474000);
function i(e) {
    let { options: t, onClick: n, className: a, hideCaret: i } = e;
    return (0, r.jsx)('div', {
        className: o()(c.root, a),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                l.P3F,
                {
                    onClick: () => n(e),
                    className: o()(c.option, e.className),
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: c.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == i ? void 0 : i(e)) &&
                            (0, r.jsx)(s.Z, {
                                className: c.caret,
                                direction: s.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
