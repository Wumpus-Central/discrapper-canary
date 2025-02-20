n.d(t, {
    P: () => h,
    Z: () => f
}),
    n(47120);
var i = n(200651),
    l = n(481060),
    r = n(239091),
    o = n(299206),
    a = n(276022),
    s = n(695346),
    c = n(914010),
    u = n(499254),
    d = n(827498),
    m = n(314734),
    p = n(388032);
function h(e) {
    var t;
    let { application: n } = e,
        i = null !== (t = c.Z.getGuildId()) && void 0 !== t ? t : void 0;
    return (0, a.Z)({
        application: n,
        guildId: i,
        onItemClick: () => {
            (0, l.Mr3)(m.e9), (0, u.yT)(d.ti.DISMISSED);
        }
    });
}
function f(e) {
    let { application: t, onSelect: n } = e,
        a = s.Sb.useSetting(),
        c = (0, o.Z)({
            id: t.id,
            label: p.NW.string(p.t['+NP/b2'])
        }),
        u = h({ application: t });
    return (0, i.jsxs)(l.v2r, {
        navId: 'activity-shelf-item-context',
        onClose: r.Zy,
        'aria-label': p.NW.string(p.t.WkcHT0),
        onSelect: n,
        children: [null != u && (0, i.jsxs)(l.kSQ, { children: [...u] }, 'manage-app-actions'), a && (0, i.jsx)(l.kSQ, { children: c }, 'developer-actions')]
    });
}
