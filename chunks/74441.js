"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(532624),
    r = n(350535),
    o = n(652215),
    d = n(694615);
let c = { [o.hCu.TOGGLE_MUTE]: { slash: l.z0P, default: l.cNw } };
function u(e) {
    let { value: t, action: n, shouldShow: o } = e,
        u = (0, s.bG)([a.Ay], () => a.Ay.getKeybindForAction(n, !1, !0));
    if (null == u || !o) return null;
    let h = r.dI(u.shortcut),
        p = c[n],
        A = t ? p.slash : p.default;
    return (0, i.jsxs)("div", {
        className: d.U$,
        children: [
            (0, i.jsx)(A, { className: d.g4, size: "xs", color: "currentColor" }),
            (0, i.jsx)(l.Text, { variant: "text-xxs/semibold", className: d.z2, children: h }),
        ],
    });
}
