n.d(t, { E: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(990078),
    s = n(547056),
    o = n(169295),
    d = n(18301),
    c = n(652215),
    u = n(985018),
    _ = n(663566);
let m = {
    [c.uje.WINDOWS]: { icon: d.A, getLabel: () => u.intl.string(u.t["0/xHFO"]) },
    [c.uje.MACOS]: { icon: o.A, getLabel: () => u.intl.string(u.t.E4u4n5) },
    [c.uje.LINUX]: { icon: s.A, getLabel: () => u.intl.string(u.t.tcawo3) },
};
function h(e) {
    let { operatingSystem: t, className: n } = e,
        l = m[t];
    if (null == l) throw Error(`Unexpected operating system: ${t}`);
    let r = l.icon;
    return (0, i.jsx)(a.m, { text: l.getLabel(), children: (0, i.jsx)(r, { className: n }) });
}
let p = (e) => {
    let { systems: t, className: n, iconClassName: l } = e;
    return (0, i.jsx)("div", {
        className: r()(_.I, n),
        children: t.map((e) => (0, i.jsx)(h, { operatingSystem: e, className: r()(_.A, l) }, e)),
    });
};
