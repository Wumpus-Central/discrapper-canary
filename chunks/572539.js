n.d(t, { Z: () => c });
var o = n(255367);
n(73800);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    l = n(259580),
    s = n(474000);
function c(e) {
    let { options: t, onClick: n, className: i, hideCaret: c } = e;
    return (0, o.jsx)('div', {
        className: r()(s.root, i),
        children: t.map((e, t) =>
            (0, o.jsxs)(
                a.P3F,
                {
                    onClick: () => n(e),
                    className: r()(s.option, e.className),
                    children: [
                        (0, o.jsx)(a.Text, {
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
