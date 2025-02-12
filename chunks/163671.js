n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(388905),
    o = n(92035);
function s(e) {
    let { children: t, className: n, ...r } = e,
        s = t();
    return (0, i.jsx)(a.ZP, {
        ...r,
        className: l()(n, o.container),
        contentClassName: o.content,
        children: s.map((e, t) =>
            (0, i.jsx)(
                'div',
                {
                    className: o.column,
                    style: { flexBasis: ''.concat(100 / s.length, '%') },
                    children: e
                },
                t
            )
        )
    });
}
