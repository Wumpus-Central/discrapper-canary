n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(388905),
    o = n(897914);
function a(e) {
    let { children: t, className: n, ...r } = e,
        a = t();
    return (0, i.jsx)(l.ZP, {
        ...r,
        className: s()(n, o.container),
        contentClassName: o.content,
        children: a.map((e, t) =>
            (0, i.jsx)(
                'div',
                {
                    className: o.column,
                    style: { flexBasis: ''.concat(100 / a.length, '%') },
                    children: e
                },
                t
            )
        )
    });
}
