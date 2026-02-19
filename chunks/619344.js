"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(709562),
    r = n(985018);
function a(e) {
    let { popoutWindowAlwaysOnTop: t, onToggleStayOnTop: n, ...a } = e,
        o = t ? r.intl.string(r.t.YdyDM9) : r.intl.string(r.t.ZVGHwP),
        c = t ? s.hl9 : s.qgw;
    return (0, i.jsx)(l.A, { onClick: () => n(!t), label: o, iconComponent: c, ...a });
}
