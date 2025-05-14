n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    i = n(481060),
    s = n(259580),
    c = n(474000);
function l(e) {
    let { options: t, onClick: n, className: o, hideCaret: l } = e;
    return (0, r.jsx)('div', {
        className: a()(c.root, o),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                i.P3F,
                {
                    onClick: () => n(e),
                    className: a()(c.option, e.className),
                    children: [
                        (0, r.jsx)(i.Text, {
                            className: c.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == l ? void 0 : l(e)) &&
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
