a.d(t, { Z: () => l });
var n = a(255367);
a(73800);
var s = a(120356),
    o = a.n(s),
    r = a(481060),
    i = a(259580),
    c = a(474000);
function l(e) {
    let { options: t, onClick: a, className: s, hideCaret: l } = e;
    return (0, n.jsx)('div', {
        className: o()(c.root, s),
        children: t.map((e, t) =>
            (0, n.jsxs)(
                r.P3F,
                {
                    onClick: () => a(e),
                    className: o()(c.option, e.className),
                    children: [
                        (0, n.jsx)(r.Text, {
                            className: c.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == l ? void 0 : l(e)) &&
                            (0, n.jsx)(i.Z, {
                                className: c.caret,
                                direction: i.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
