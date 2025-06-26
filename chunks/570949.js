n.d(t, {
    P: () => f,
    Z: () => h
}),
    n(388685);
var i = n(255367),
    l = n(481060),
    r = n(239091),
    o = n(299206),
    a = n(276022),
    c = n(695346),
    s = n(914010),
    u = n(499254),
    d = n(827498),
    p = n(314734),
    m = n(388032);
function f(e) {
    var t;
    let { application: n } = e,
        i = null != (t = s.Z.getGuildId()) ? t : void 0;
    return (0, a.Z)({
        application: n,
        guildId: i,
        onItemClick: () => {
            (0, l.Mr3)(p.e9), (0, u.yT)(d.ti.DISMISSED);
        }
    });
}
function h(e) {
    let { application: t, onSelect: n } = e,
        a = c.Sb.useSetting(),
        s = (0, o.Z)({
            id: t.id,
            label: m.intl.string(m.t['+NP/b2'])
        }),
        u = f({ application: t });
    return (0, i.jsxs)(l.v2r, {
        navId: 'activity-shelf-item-context',
        onClose: r.Zy,
        'aria-label': m.intl.string(m.t.WkcHT0),
        onSelect: n,
        children: [null != u && (0, i.jsxs)(l.kSQ, { children: [...u] }, 'manage-app-actions'), a && (0, i.jsx)(l.kSQ, { children: s }, 'developer-actions')]
    });
}
