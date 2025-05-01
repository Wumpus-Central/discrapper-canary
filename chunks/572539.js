n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(481060),
    i = n(259580),
    s = n(474000);
function c(e) {
    let { options: t, onClick: n, className: r, hideCaret: c } = e;
    return (0, l.jsx)('div', {
        className: a()(s.root, r),
        children: t.map((e, t) =>
            (0, l.jsxs)(
                o.P3F,
                {
                    onClick: () => n(e),
                    className: a()(s.option, e.className),
                    children: [
                        (0, l.jsx)(o.Text, {
                            className: s.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, l.jsx)(i.Z, {
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
