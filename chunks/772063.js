a.d(n, { default: () => g });
var i = a(627968);
a(64700);
var t = a(17928),
    c = a(550079),
    r = a(477782),
    l = a(215026),
    s = a(192308),
    d = a(473935),
    o = a(442433),
    p = a(576705),
    u = a(957565),
    b = a(652215),
    y = a(985018);
let g = function (e) {
    let { guild: n, user: g, onSelect: h } = e,
        m = n?.id ?? b.dJq,
        x = (0, t.bG)([p.A], () => null != n && p.A.canManageUser(b.xBc.BAN_MEMBERS, g, n), [n, g]);
    return (0, i.jsx)(c.W, {
        "data-menu-migrated": !0,
        navId: "member-application-context-menu",
        onClose: o.Z_,
        "aria-label": y.intl.string(y.t.liqwPJ),
        onSelect: h,
        children: (0, i.jsxs)(r.rX, {
            children: [
                x &&
                    (0, i.jsx)(
                        r.Dr,
                        {
                            id: "ban",
                            label: y.intl.string(y.t["I+Cbum"]),
                            icon: l.w,
                            leadingAccessory: { type: "icon", icon: l.w },
                            color: "danger",
                            action: () =>
                                (0, s.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        a.e("33847"),
                                        a.e("91671"),
                                        a.e("2504"),
                                    ]).then(a.bind(a, 333179));
                                    return (n) => (0, i.jsx)(e, { ...n, guildId: m, user: g });
                                }),
                        },
                        "ban",
                    ),
                (0, i.jsx)(
                    r.Dr,
                    {
                        id: "copyUserId",
                        label: "Copy User ID",
                        icon: d.L,
                        leadingAccessory: { type: "icon", icon: d.L },
                        action: () => (0, u.C)(g.id),
                    },
                    "copyUserId",
                ),
            ],
        }),
    });
};
