n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    l = n(481060),
    s = n(259580),
    c = n(474000);
function r(e) {
    let { options: t, onClick: n, className: o, hideCaret: r } = e;
    return (0, i.jsx)('div', {
        className: a()(c.root, o),
        children: t.map((e, t) =>
            (0, i.jsxs)(
                l.P3F,
                {
                    onClick: () => n(e),
                    className: a()(c.option, e.className),
                    children: [
                        (0, i.jsx)(l.Text, {
                            className: c.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == r ? void 0 : r(e)) &&
                            (0, i.jsx)(s.Z, {
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
