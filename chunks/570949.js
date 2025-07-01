(n.d(t, {
    P: () => f,
    Z: () => h
}),
    n(388685));
var l = n(255367),
    i = n(481060),
    r = n(239091),
    a = n(299206),
    o = n(276022),
    s = n(695346),
    c = n(914010),
    u = n(499254),
    d = n(827498),
    p = n(314734),
    m = n(388032);
function f(e) {
    var t;
    let { application: n } = e,
        l = null != (t = c.Z.getGuildId()) ? t : void 0;
    return (0, o.Z)({
        application: n,
        guildId: l,
        onItemClick: () => {
            ((0, i.Mr3)(p.e9), (0, u.yT)(d.ti.DISMISSED));
        }
    });
}
function h(e) {
    let { application: t, onSelect: n } = e,
        o = s.Sb.useSetting(),
        c = (0, a.Z)({
            id: t.id,
            label: m.intl.string(m.t['+NP/b2'])
        }),
        u = f({ application: t });
    return (0, l.jsxs)(i.v2r, {
        navId: 'activity-shelf-item-context',
        onClose: r.Zy,
        'aria-label': m.intl.string(m.t.WkcHT0),
        onSelect: n,
        children: [null != u && (0, l.jsxs)(i.kSQ, { children: [...u] }, 'manage-app-actions'), o && (0, l.jsx)(i.kSQ, { children: c }, 'developer-actions')]
    });
}
