n.d(t, { Z: () => c });
var o = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    r = n(481060),
    l = n(259580),
    s = n(474000);
function c(e) {
    let { options: t, onClick: n, className: i, hideCaret: c } = e;
    return (0, o.jsx)('div', {
        className: a()(s.root, i),
        children: t.map((e, t) =>
            (0, o.jsxs)(
                r.P3F,
                {
                    onClick: () => n(e),
                    className: a()(s.option, e.className),
                    children: [
                        (0, o.jsx)(r.Text, {
                            className: s.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, o.jsx)(l.Z, {
                                className: s.caret,
                                direction: l.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
