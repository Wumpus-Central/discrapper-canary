n.d(t, { Z: () => r });
var o = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(259580),
    c = n(474000);
function r(e) {
    let { options: t, onClick: n, className: a, hideCaret: r } = e;
    return (0, o.jsx)('div', {
        className: i()(c.root, a),
        children: t.map((e, t) =>
            (0, o.jsxs)(
                l.P3F,
                {
                    onClick: () => n(e),
                    className: i()(c.option, e.className),
                    children: [
                        (0, o.jsx)(l.Text, {
                            className: c.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == r ? void 0 : r(e)) &&
                            (0, o.jsx)(s.Z, {
                                className: c.caret,
                                direction: s.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
