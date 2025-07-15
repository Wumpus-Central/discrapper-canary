n.d(t, { W: () => o });
var i = n(255367),
    a = n(657707),
    s = n(206403);
function o(e) {
    let { node: t } = e;
    return (0, i.jsx)(s.x, {
        title: 'useTitle' in t.data && 'function' == typeof t.data.useTitle ? t.data.useTitle() : '',
        secondaryTrailingElement: (0, i.jsx)(a.LJT, {})
    });
}
