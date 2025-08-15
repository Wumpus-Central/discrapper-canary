n.d(t, { T: () => o }), n(415506);
var i = n(951288);
n(647438);
var l = n(670304),
    s = n(764516);
function o(e) {
    let { node: t } = e,
        n = t.render;
    if (null != n) return (0, i.jsx)(n, {});
    if (1 !== t.layout.length)
        throw Error("Panels with multiple panes must define a render prop to handle the multiple panes");
    return (0, i.jsx)("div", {
        className: s.panel,
        children: (0, i.jsx)(l.Z, { node: t.layout[0] }),
    });
}
