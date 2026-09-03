n.d(t, { A: () => _ });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(661531),
    l = n(866665),
    o = n(403581),
    d = n(375708),
    c = n(192416);
let u = { inherit: "currentColor", strong: s.A.colors.ICON_STRONG };
function _(e) {
    let { size: t, color: n, className: r, inline: _ = !1, disabled: E = !1 } = e,
        A = d.intl.string(d.t["5AFxuK"]),
        h = E ? s.A.colors.ICON_MUTED : u.inherit,
        I = null != n ? u[n] : h;
    return (0, i.jsx)(l.m, {
        text: A,
        shouldShow: !E,
        ariaHidden: !0,
        children: (0, i.jsx)(o.t, { size: t, color: I, className: a()({ [c.m]: _ }, r), "aria-label": A }),
    });
}
