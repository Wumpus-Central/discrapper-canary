n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(388905),
    o = n(854674);
function s(e) {
    let { children: t, className: n, ...r } = e,
        s = t();
    return (0, i.jsx)(l.ZP, {
        ...r,
        className: a()(n, o.container),
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
