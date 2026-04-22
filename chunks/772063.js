a.d(n, { default: () => g });
var i = a(627968);
a(64700);
var t = a(311907),
    c = a(861672),
    r = a(477782),
    d = a(215026),
    l = a(192308),
    s = a(473935),
    o = a(442433),
    p = a(576705),
    u = a(957565),
    b = a(652215),
    y = a(985018);
let g = function (e) {
    let { guild: n, user: g, onSelect: h } = e,
        x = n?.id ?? b.dJq,
        m = (0, t.bG)([p.A], () => null != n && p.A.canManageUser(b.xBc.BAN_MEMBERS, g, n), [n, g]);
    return (0, i.jsx)(c.W, {
        "data-menu-migrated": !0,
        navId: "member-application-context-menu",
        onClose: o.Z_,
        "aria-label": y.intl.string(y.t.liqwPJ),
        onSelect: h,
        children: (0, i.jsxs)(r.rX, {
            children: [
                m &&
                    (0, i.jsx)(
                        r.Dr,
                        {
                            id: "ban",
                            label: y.intl.string(y.t["I+Cbum"]),
                            icon: d.w,
                            leadingAccessory: { type: "icon", icon: d.w },
                            color: "danger",
                            action: () =>
                                (0, l.openModalLazy)(async () => {
                                    let { default: e } = await a.e("57742").then(a.bind(a, 333179));
                                    return (n) => (0, i.jsx)(e, { ...n, guildId: x, user: g });
                                }),
                        },
                        "ban",
                    ),
                (0, i.jsx)(
                    r.Dr,
                    {
                        id: "copyUserId",
                        label: "Copy User ID",
                        icon: s.L,
                        leadingAccessory: { type: "icon", icon: s.L },
                        action: () => (0, u.C)(g.id),
                    },
                    "copyUserId",
                ),
            ],
        }),
    });
};
