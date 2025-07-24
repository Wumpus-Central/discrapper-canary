n.d(t, { W: () => s });
var a = n(255367),
    i = n(657707),
    r = n(206403);
function s(e) {
    let { node: t } = e;
    return (0, a.jsx)(r.x, {
        title: 'useTitle' in t.data && 'function' == typeof t.data.useTitle ? t.data.useTitle() : '',
        secondaryTrailingElement: (0, a.jsx)(i.LJT, {})
    });
}
