n.d(t, { A: () => x });
var l = n(477900);
n(582128);
var a = n(17928),
    r = n(86147),
    i = n(729475),
    s = n(91242),
    o = n(742589),
    u = n(869146),
    d = n(475815),
    c = n(533140),
    m = n(985451),
    f = n(652215),
    h = n(165610),
    g = n(375708);
function x(e) {
    let { frame: t, controlProjectId: n } = e,
        x = (0, c.V0)(t?.id ?? null),
        p = (0, m.o4)(n),
        v = (0, a.bG)(
            [u.A, s.A],
            () => null != t && u.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT) && s.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, h.x1)(t) || v || p) return null;
    let b = (0, c.Uv)(t.id);
    if (null == b || !(0, d.Ub)(b)) return null;
    let j = g.intl.string(x ? g.t.Z7MyNB : g.t.OIDkcp);
    return (0, l.jsx)(o.A.Icon, {
        tooltip: j,
        icon: x ? r.z : i.T,
        "aria-label": j,
        role: "switch",
        "aria-checked": x,
        selected: x,
        onClick: () => (0, c.w4)(t.id),
    });
}
