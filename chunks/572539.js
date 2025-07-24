n.d(t, { Z: () => u });
var l = n(255367);
n(73800);
var a = n(120356),
    i = n.n(a),
    r = n(481060),
    o = n(259580),
    s = n(474000);
function u(e) {
    let { options: t, onClick: n, className: a, hideCaret: u } = e;
    return (0, l.jsx)('div', {
        className: i()(s.root, a),
        children: t.map((e, t) =>
            (0, l.jsxs)(
                r.P3F,
                {
                    onClick: () => n(e),
                    className: i()(s.option, e.className),
                    children: [
                        (0, l.jsx)(r.Text, {
                            className: s.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == u ? void 0 : u(e)) &&
                            (0, l.jsx)(o.Z, {
                                className: s.caret,
                                direction: o.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
