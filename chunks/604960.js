n.r(t), n.d(t, { default: () => f });
var i = n(951288);
n(647438);
var l = n(481060),
    o = n(37234),
    r = n(79808),
    s = n(131051),
    a = n(996733),
    u = n(604227),
    c = n(92959),
    d = n(920952);
function f() {
    let e = (0, a.Z7)(),
        t = (0, s.Z)(d.Z, e);
    return (0, i.jsx)(r.Z, {
        onClose: o.xf,
        root: t,
        sidebarHeader: g,
        sidebarFooter: u.Z,
        initialPanel: c.Z,
    });
}
function g() {
    let e = (0, a.Z7)();
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(l.E1j, {
            size: "md",
            query: e,
            onChange: a.yN,
            onClear: () => (0, a.yN)(""),
        }),
    });
}
