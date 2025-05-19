n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var o = n(120356),
    l = n.n(o),
    a = n(481060),
    i = n(259580),
    s = n(645968);
function c(e) {
    let { options: t, onClick: n, className: o, hideCaret: c } = e;
    return (0, r.jsx)('div', {
        className: l()(s.root, o),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                a.P3F,
                {
                    onClick: () => n(e),
                    className: l()(s.option, e.className),
                    children: [
                        (0, r.jsx)(a.Text, {
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
