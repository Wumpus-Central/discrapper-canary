n.d(t, {
    Z: function () {
        return u;
    }
});
var o = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(259580),
    r = n(547803);
function u(e) {
    let { options: t, onClick: n, className: i, optionClassName: u, hideCaret: c } = e;
    return (0, o.jsx)('div', {
        className: l()(r.root, i),
        children: t.map((e, t) =>
            (0, o.jsxs)(
                a.Clickable,
                {
                    onClick: () => n(e),
                    className: l()(r.option, u),
                    children: [
                        (0, o.jsx)(a.Text, {
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
