n.d(t, {
    P: () => _,
    Z: () => m,
});
var r = n(54381),
    i = n(481060),
    a = n(239091),
    o = n(299206),
    s = n(276022),
    l = n(695346),
    c = n(914010),
    u = n(499254),
    d = n(827498),
    f = n(314734),
    p = n(388032);
function _(e) {
    var t;
    let { application: n } = e,
        r = null != (t = c.Z.getGuildId()) ? t : void 0,
        a = () => {
            (0, i.Mr3)(f.e9), (0, u.y)(d.ti.DISMISSED);
        };
    return (0, s.Z)({
        application: n,
        guildId: r,
        onItemClick: a,
    });
}
function m(e) {
    let { application: t, onSelect: n } = e,
        s = l.Sb.useSetting(),
        c = (0, o.Z)({
            id: t.id,
            label: p.intl.string(p.t["+NP/b2"]),
        }),
        u = _({ application: t });
    return (0, r.jsxs)(i.v2r, {
        navId: "activity-shelf-item-context",
        onClose: a.Zy,
        "aria-label": p.intl.string(p.t.WkcHT9),
        onSelect: n,
        children: [
            null != u && (0, r.jsx)(i.kSQ, { children: u }, "manage-app-actions"),
            s && (0, r.jsx)(i.kSQ, { children: c }, "developer-actions"),
        ],
    });
}
