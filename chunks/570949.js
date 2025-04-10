n.d(t, {
    P: () => f,
    Z: () => h
}),
    n(388685);
var i = n(200651),
    r = n(481060),
    l = n(239091),
    a = n(299206),
    o = n(276022),
    s = n(695346),
    c = n(914010),
    d = n(499254),
    u = n(827498),
    p = n(314734),
    m = n(388032);
function f(e) {
    var t;
    let { application: n } = e,
        i = null != (t = c.Z.getGuildId()) ? t : void 0;
    return (0, o.Z)({
        application: n,
        guildId: i,
        onItemClick: () => {
            (0, r.Mr3)(p.e9), (0, d.yT)(u.ti.DISMISSED);
        }
    });
}
function h(e) {
    let { application: t, onSelect: n } = e,
        o = s.Sb.useSetting(),
        c = (0, a.Z)({
            id: t.id,
            label: m.NW.string(m.t['+NP/b2'])
        }),
        d = f({ application: t });
    return (0, i.jsxs)(r.v2r, {
        navId: 'activity-shelf-item-context',
        onClose: l.Zy,
        'aria-label': m.NW.string(m.t.WkcHT0),
        onSelect: n,
        children: [null != d && (0, i.jsxs)(r.kSQ, { children: [...d] }, 'manage-app-actions'), o && (0, i.jsx)(r.kSQ, { children: c }, 'developer-actions')]
    });
}
