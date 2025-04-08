n.d(t, { Z: () => c });
var a = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    r = n(481060),
    o = n(259580),
    i = n(474000);
function c(e) {
    let { options: t, onClick: n, className: l, hideCaret: c } = e;
    return (0, a.jsx)('div', {
        className: s()(i.root, l),
        children: t.map((e, t) =>
            (0, a.jsxs)(
                r.P3F,
                {
                    onClick: () => n(e),
                    className: s()(i.option, e.className),
                    children: [
                        (0, a.jsx)(r.Text, {
                            className: i.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, a.jsx)(o.Z, {
                                className: i.caret,
                                direction: o.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
