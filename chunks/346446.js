"use strict";
n.d(t, { A: () => h, r: () => p });
var r = n(627968),
    i = n(397927),
    a = n(442433),
    s = n(50268),
    o = n(700210),
    l = n(253932),
    u = n(967198),
    c = n(211401),
    d = n(500049),
    _ = n(60809),
    f = n(985018);
function p(e) {
    let { application: t } = e,
        n = u.A.getGuildId() ?? void 0,
        r = () => {
            (0, i.OoC)(_.gS), (0, c.k)(d.Se.DISMISSED);
        };
    return (0, o.A)({ application: t, guildId: n, onItemClick: r });
}
function h(e) {
    let { application: t, onSelect: n } = e,
        o = l.Q_.useSetting(),
        u = (0, s.A)({ id: t.id, label: f.intl.string(f.t["+NP/b2"]) }),
        c = p({ application: t });
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "activity-shelf-item-context",
        onClose: a.Z_,
        "aria-label": f.intl.string(f.t.WkcHT9),
        onSelect: n,
        children: [
            null != c && (0, r.jsx)(i.rXV, { children: c }, "manage-app-actions"),
            o && (0, r.jsx)(i.rXV, { children: u }, "developer-actions"),
        ],
    });
}
