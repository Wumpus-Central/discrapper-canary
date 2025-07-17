n.d(t, { Z: () => c });
var a = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    r = n(481060),
    s = n(259580),
    u = n(474000);
function c(e) {
    let { options: t, onClick: n, className: l, hideCaret: c } = e;
    return (0, a.jsx)('div', {
        className: i()(u.root, l),
        children: t.map((e, t) =>
            (0, a.jsxs)(
                r.P3F,
                {
                    onClick: () => n(e),
                    className: i()(u.option, e.className),
                    children: [
                        (0, a.jsx)(r.Text, {
                            className: u.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, a.jsx)(s.Z, {
                                className: u.caret,
                                direction: s.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
