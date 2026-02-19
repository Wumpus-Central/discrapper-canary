"use strict";
n.d(t, { default: () => a });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(47167),
    r = n(985018);
function a(e) {
    let { channel: t, category: n, ...a } = e,
        o = (0, l.Ay)(t, !0),
        c = (0, l.Ay)(n);
    return (0, i.jsx)(s.ConfirmModal, {
        title: r.intl.string(r.t.YWMtRe),
        subtitle: r.intl.format(r.t["iKW+jY"], { channelName: o, categoryName: c }),
        confirmText: r.intl.string(r.t.eW8Gy4),
        ...a,
    });
}
