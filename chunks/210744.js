l.d(t, { A: () => x });
var n = l(477900);
l(582128);
var a = l(17928),
    r = l(86147),
    i = l(729475),
    s = l(91242),
    o = l(742589),
    u = l(869146),
    d = l(475815),
    c = l(533140),
    m = l(985451),
    f = l(652215),
    h = l(165610),
    g = l(375708);
function x(e) {
    let { frame: t, controlProjectId: l } = e,
        x = (0, c.V0)(t?.id ?? null),
        p = (0, m.o4)(l),
        v = (0, a.bG)(
            [u.A, s.A],
            () => null != t && u.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT) && s.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, h.x1)(t) || v || p) return null;
    let b = (0, c.Uv)(t.id);
    if (null == b || !(0, d.Ub)(b)) return null;
    let j = g.intl.string(x ? g.t.Z7MyNB : g.t.OIDkcp);
    return (0, n.jsx)(o.A.Icon, {
        tooltip: j,
        icon: x ? r.z : i.T,
        "aria-label": j,
        role: "switch",
        "aria-checked": x,
        selected: x,
        onClick: () => (0, c.w4)(t.id),
    });
}
