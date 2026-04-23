n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(175203),
    a = n(430452),
    s = n(636359);
function r(e) {
    let { aspectRatio: t, className: n, children: r, width: o, ...c } = e,
        d = a.Ay.getVideoComponent();
    return (0, i.jsx)("div", {
        style: { width: o },
        className: s.A,
        children: (0, i.jsxs)("div", {
            className: s.e,
            style: { aspectRatio: t },
            children: [(0, i.jsx)(l.Ay, { className: n, videoComponent: d, width: o, ...c }), r],
        }),
    });
}
