n.d(t, {
    P: () => h,
    Z: () => v
}),
    n(47120);
var i = n(200651),
    l = n(481060),
    a = n(239091),
    o = n(299206),
    s = n(276022),
    r = n(695346),
    c = n(914010),
    d = n(499254),
    u = n(827498),
    m = n(314734),
    p = n(388032);
function h(e) {
    var t;
    let { application: n } = e,
        i = null !== (t = c.Z.getGuildId()) && void 0 !== t ? t : void 0;
    return (0, s.Z)({
        application: n,
        guildId: i,
        onItemClick: () => {
            (0, l.Mr3)(m.e9), (0, d.yT)(u.ti.DISMISSED);
        }
    });
}
function v(e) {
    let { application: t, onSelect: n } = e,
        s = r.Sb.useSetting(),
        c = (0, o.Z)({
            id: t.id,
            label: p.intl.string(p.t['+NP/b2'])
        }),
        d = h({ application: t });
    return (0, i.jsxs)(l.v2r, {
        navId: 'activity-shelf-item-context',
        onClose: a.Zy,
        'aria-label': p.intl.string(p.t.WkcHT0),
        onSelect: n,
        children: [null != d && (0, i.jsxs)(l.kSQ, { children: [...d] }, 'manage-app-actions'), s && (0, i.jsx)(l.kSQ, { children: c }, 'developer-actions')]
    });
}
