n.d(t, { Z: () => c });
var o = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(259580),
    r = n(845826);
function c(e) {
    let { options: t, onClick: n, className: a, hideCaret: c } = e;
    return (0, o.jsx)('div', {
        className: i()(r.root, a),
        children: t.map((e, t) =>
            (0, o.jsxs)(
                l.P3F,
                {
                    onClick: () => n(e),
                    className: i()(r.option, e.className),
                    children: [
                        (0, o.jsx)(l.Text, {
                            className: r.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, o.jsx)(s.Z, {
                                className: r.caret,
                                direction: s.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
