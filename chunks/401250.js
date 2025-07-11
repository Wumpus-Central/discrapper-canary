n.d(t, { W: () => r });
var a = n(255367),
    i = n(657707),
    o = n(206403);
function r(e) {
    let { node: t } = e;
    return (0, a.jsx)(o.x, {
        title: 'useTitle' in t.data && 'function' == typeof t.data.useTitle ? t.data.useTitle() : '',
        secondaryTrailingElement: (0, a.jsx)(i.LJT, {})
    });
}
