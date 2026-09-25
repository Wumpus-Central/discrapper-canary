e.d(i, { default: () => a });
var n = e(477900);
e(582128);
var r = e(732159),
    s = e(47167),
    u = e(375708);
function a(t) {
    let { channel: i, category: e, ...a } = t,
        c = (0, s.Ay)(i, !0),
        l = (0, s.Ay)(e);
    return (0, n.jsx)(r.u, {
        title: u.intl.string(u.t.YWMtRe),
        subtitle: u.intl.format(u.t["iKW+jY"], { channelName: c, categoryName: l }),
        confirmText: u.intl.string(u.t.eW8Gy4),
        ...a,
    });
}
