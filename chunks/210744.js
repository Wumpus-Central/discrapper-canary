l.d(t, { A: () => x });
var n = l(477900);
l(582128);
var a = l(17928),
    i = l(86147),
    r = l(729475),
    s = l(91242),
    u = l(742589),
    o = l(869146),
    d = l(475815),
    c = l(559676),
    f = l(533140),
    m = l(652215),
    h = l(165610),
    g = l(375708);
function x(e) {
    let { frame: t, controlProjectId: l } = e,
        x = (0, f.V0)(t?.id ?? null),
        p = (0, c.o4)(l),
        v = (0, a.bG)(
            [o.A, s.A],
            () => null != t && o.A.getWindowOpen(m.MLl.ACTIVITY_POPOUT) && s.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, h.x1)(t) || v || p) return null;
    let b = (0, f.Uv)(t.id);
    if (null == b || !(0, d.Ub)(b)) return null;
    let j = g.intl.string(x ? g.t.Z7MyNB : g.t.OIDkcp);
    return (0, n.jsx)(u.A.Icon, {
        tooltip: j,
        icon: x ? i.z : r.T,
        "aria-label": j,
        role: "switch",
        "aria-checked": x,
        selected: x,
        onClick: () => (0, f.w4)(t.id),
    });
}
