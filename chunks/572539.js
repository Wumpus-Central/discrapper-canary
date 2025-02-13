n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(259580),
    c = n(159558);
function r(e) {
    let { options: t, onClick: n, className: l, optionClassName: r, hideCaret: u } = e;
    return (0, i.jsx)('div', {
        className: o()(c.root, l),
        children: t.map((e, t) =>
            (0, i.jsxs)(
                a.P3F,
                {
                    onClick: () => n(e),
                    className: o()(c.option, r),
                    children: [
                        (0, i.jsx)(a.Text, {
                            className: c.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == u ? void 0 : u(e)) &&
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
