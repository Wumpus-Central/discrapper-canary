n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(175203),
    s = n(430452),
    a = n(348702);
function r(e) {
    let { aspectRatio: t, className: n, children: r, width: o, ...d } = e,
        c = s.A.getVideoComponent();
    return (0, i.jsx)("div", {
        style: { width: o },
        className: a.A,
        children: (0, i.jsxs)("div", {
            className: a.e,
            style: { aspectRatio: t },
            children: [(0, i.jsx)(l.Ay, { className: n, videoComponent: c, width: o, ...d }), r],
        }),
    });
}
