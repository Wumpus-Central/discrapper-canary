t.d(n, {
    P: function () {
        return h;
    },
    Z: function () {
        return f;
    }
}),
    t(47120);
var i = t(200651),
    l = t(481060),
    a = t(239091),
    o = t(299206),
    r = t(276022),
    s = t(695346),
    c = t(914010),
    d = t(499254),
    u = t(827498),
    m = t(314734),
    p = t(388032);
function h(e) {
    var n;
    let { application: t } = e,
        i = null !== (n = c.Z.getGuildId()) && void 0 !== n ? n : void 0;
    return (0, r.Z)({
        application: t,
        guildId: i,
        onItemClick: () => {
            (0, l.closeModal)(m.e9), (0, d.yT)(u.ti.DISMISSED);
        }
    });
}
function f(e) {
    let { application: n, onSelect: t } = e,
        r = s.Sb.useSetting(),
        c = (0, o.Z)({
            id: n.id,
            label: p.intl.string(p.t['+NP/b2'])
        }),
        d = h({ application: n });
    return (0, i.jsxs)(l.Menu, {
        navId: 'activity-shelf-item-context',
        onClose: a.Zy,
        'aria-label': p.intl.string(p.t.WkcHT0),
        onSelect: t,
        children: [null != d && (0, i.jsxs)(l.MenuGroup, { children: [...d] }, 'manage-app-actions'), r && (0, i.jsx)(l.MenuGroup, { children: c }, 'developer-actions')]
    });
}
