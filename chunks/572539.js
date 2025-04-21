n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    o = n(481060),
    i = n(259580),
    s = n(474000);
function c(e) {
    let { options: t, onClick: n, className: l, hideCaret: c } = e;
    return (0, r.jsx)('div', {
        className: a()(s.root, l),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                o.P3F,
                {
                    onClick: () => n(e),
                    className: a()(s.option, e.className),
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: s.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, r.jsx)(i.Z, {
                                className: s.caret,
                                direction: i.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
