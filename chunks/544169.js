n.d(i, { default: () => a });
var e = n(477900);
n(582128);
var s = n(732159),
    r = n(47167),
    u = n(375708);
function a(t) {
    let { channel: i, category: n, ...a } = t,
        c = (0, r.Ay)(i, !0),
        l = (0, r.Ay)(n);
    return (0, e.jsx)(s.u, {
        title: u.intl.string(u.t.YWMtRe),
        subtitle: u.intl.format(u.t["iKW+jY"], { channelName: c, categoryName: l }),
        confirmText: u.intl.string(u.t.eW8Gy4),
        cancelText: u.intl.string(u.t.s4uM3b),
        ...a,
    });
}
