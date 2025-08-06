(n.d(t, {
    P: () => p,
    Z: () => h
}),
    n(388685));
var r = n(255367),
    i = n(481060),
    o = n(239091),
    a = n(299206),
    s = n(276022),
    l = n(695346),
    c = n(914010),
    u = n(499254),
    d = n(827498),
    f = n(314734),
    _ = n(388032);
function p(e) {
    var t;
    let { application: n } = e,
        r = null != (t = c.Z.getGuildId()) ? t : void 0,
        o = () => {
            ((0, i.Mr3)(f.e9), (0, u.yT)(d.ti.DISMISSED));
        };
    return (0, s.Z)({
        application: n,
        guildId: r,
        onItemClick: o
    });
}
function h(e) {
    let { application: t, onSelect: n } = e,
        s = l.Sb.useSetting(),
        c = (0, a.Z)({
            id: t.id,
            label: _.intl.string(_.t['+NP/b2'])
        }),
        u = p({ application: t });
    return (0, r.jsxs)(i.v2r, {
        navId: 'activity-shelf-item-context',
        onClose: o.Zy,
        'aria-label': _.intl.string(_.t.WkcHT0),
        onSelect: n,
        children: [null != u && (0, r.jsxs)(i.kSQ, { children: [...u] }, 'manage-app-actions'), s && (0, r.jsx)(i.kSQ, { children: c }, 'developer-actions')]
    });
}
