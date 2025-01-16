n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(750386);
function s(e) {
    let { className: t, onClick: n, ...i } = e,
        s = (0, r.jsx)(l.Clickable, {
            ...i,
            className: a()(null != n && o.clickable, t),
            onClick: n
        });
    return null == n ? (0, r.jsx)(l.BlockInteractions, { children: s }) : s;
}
