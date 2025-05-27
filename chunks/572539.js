n.d(t, { Z: () => c });
var l = n(255367);
n(73800);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    s = n(259580),
    u = n(474000);
function c(e) {
    let { options: t, onClick: n, className: a, hideCaret: c } = e;
    return (0, l.jsx)('div', {
        className: r()(u.root, a),
        children: t.map((e, t) =>
            (0, l.jsxs)(
                i.P3F,
                {
                    onClick: () => n(e),
                    className: r()(u.option, e.className),
                    children: [
                        (0, l.jsx)(i.Text, {
                            className: u.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, l.jsx)(s.Z, {
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
