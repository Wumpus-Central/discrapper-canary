n.d(i, { default: () => l });
var r = n(627968);
n(64700);
var e = n(732159),
    s = n(47167),
    a = n(375708);
function l(t) {
    let { channel: i, category: n, ...l } = t,
        u = (0, s.Ay)(i, !0),
        c = (0, s.Ay)(n);
    return (0, r.jsx)(e.ConfirmModal, {
        title: a.intl.string(a.t.YWMtRe),
        subtitle: a.intl.format(a.t["iKW+jY"], { channelName: u, categoryName: c }),
        confirmText: a.intl.string(a.t.eW8Gy4),
        ...l,
    });
}
