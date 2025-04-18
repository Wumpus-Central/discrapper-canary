n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    l = n(481060),
    s = n(259580),
    i = n(645968);
function c(e) {
    let { options: t, onClick: n, className: a, hideCaret: c } = e;
    return (0, r.jsx)('div', {
        className: o()(i.root, a),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                l.P3F,
                {
                    onClick: () => n(e),
                    className: o()(i.option, e.className),
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: i.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, r.jsx)(s.Z, {
                                className: i.caret,
                                direction: s.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
