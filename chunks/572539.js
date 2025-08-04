n.d(t, { Z: () => d });
var l = n(255367);
n(73800);
var a = n(120356),
    i = n.n(a),
    r = n(481060),
    o = n(259580),
    u = n(474000);
function d(e) {
    let { options: t, onClick: n, className: a, hideCaret: d } = e;
    return (0, l.jsx)('div', {
        className: i()(u.root, a),
        children: t.map((e, t) =>
            (0, l.jsxs)(
                r.P3F,
                {
                    onClick: () => n(e),
                    className: i()(u.option, e.className),
                    children: [
                        (0, l.jsx)(r.Text, {
                            className: u.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == d ? void 0 : d(e)) &&
                            (0, l.jsx)(o.Z, {
                                className: u.caret,
                                direction: o.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
