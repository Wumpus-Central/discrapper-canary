n.d(t, {
    A: () => u,
});
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(397927),
    l = n(532624),
    o = n(350535),
    a = n(652215),
    c = n(39017);
let d = {
    [a.hCu.TOGGLE_MUTE]: {
        slash: s.z0P,
        default: s.cNw,
    },
};

function u(e) {
    let { value: t, action: n, shouldShow: a } = e,
        u = (0, r.bG)([l.Ay], () => l.Ay.getKeybindForAction(n, !1, !0));
    if (null == u || !a) return null;
    let h = o.dI(u.shortcut),
        p = d[n],
        f = t ? p.slash : p.default;
    return (0, i.jsxs)("div", {
        className: c.U$,
        children: [
            (0, i.jsx)(f, {
                className: c.g4,
                size: "xs",
                color: "currentColor",
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-xxs/semibold",
                className: c.z2,
                children: h,
            }),
        ],
    });
}
