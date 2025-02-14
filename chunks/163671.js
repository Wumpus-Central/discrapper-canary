n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(388905),
    s = n(92035);
function o(e) {
    let { children: t, className: n, ...r } = e,
        o = t();
    return (0, i.jsx)(l.ZP, {
        ...r,
        className: a()(n, s.container),
        contentClassName: s.content,
        children: o.map((e, t) =>
            (0, i.jsx)(
                'div',
                {
                    className: s.column,
                    style: { flexBasis: ''.concat(100 / o.length, '%') },
                    children: e
                },
                t
            )
        )
    });
}
