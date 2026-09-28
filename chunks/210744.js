l.d(t, { A: () => g });
var n = l(477900);
l(582128);
var a = l(17928),
    r = l(86147),
    i = l(729475),
    s = l(91242),
    o = l(742589),
    u = l(869146),
    d = l(475815),
    c = l(559676),
    f = l(533140),
    m = l(652215),
    h = l(165610),
    x = l(375708);
function g(e) {
    let { frame: t, controlProjectId: l } = e,
        g = (0, f.V0)(t?.id ?? null),
        p = (0, c.o4)(l),
        v = (0, a.bG)(
            [u.A, s.A],
            () => null != t && u.A.getWindowOpen(m.MLl.ACTIVITY_POPOUT) && s.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, h.x1)(t) || v || p) return null;
    let b = (0, f.Uv)(t.id);
    if (null == b || !(0, d.Ub)(b)) return null;
    let j = x.intl.string(g ? x.t.Z7MyNB : x.t.OIDkcp);
    return (0, n.jsx)(o.A.Icon, {
        tooltip: j,
        icon: g ? r.z : i.T,
        "aria-label": j,
        role: "switch",
        "aria-checked": g,
        selected: g,
        onClick: () => (0, f.w4)(t.id),
    });
}
