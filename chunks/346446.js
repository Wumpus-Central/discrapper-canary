n.d(t, { A: () => f, r: () => h });
var i = n(627968),
    l = n(192308),
    a = n(861672),
    s = n(477782),
    r = n(442433),
    o = n(50268),
    c = n(700210),
    d = n(253932),
    u = n(967198),
    m = n(211401),
    p = n(500049),
    _ = n(60809),
    A = n(985018);
function h(e) {
    let { application: t } = e,
        n = u.A.getGuildId() ?? void 0;
    return (0, c.A)({
        application: t,
        guildId: n,
        onItemClick: () => {
            (0, l.closeModal)(_.gS), (0, m.k)(p.Se.DISMISSED);
        },
    });
}
function f(e) {
    let { application: t, onSelect: n } = e,
        l = d.Q_.useSetting(),
        c = (0, o.A)({ id: t.id, label: A.intl.string(A.t["+NP/b2"]) }),
        u = h({ application: t });
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "activity-shelf-item-context",
        onClose: r.Z_,
        "aria-label": A.intl.string(A.t.WkcHT9),
        onSelect: n,
        children: [
            null != u && (0, i.jsx)(s.rX, { children: u }, "manage-app-actions"),
            l && (0, i.jsx)(s.rX, { children: c }, "developer-actions"),
        ],
    });
}
