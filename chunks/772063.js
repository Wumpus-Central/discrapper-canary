i.d(n, { default: () => p });
var a = i(627968);
i(64700);
var t = i(311907),
    c = i(397927),
    r = i(442433),
    s = i(576705),
    d = i(957565),
    l = i(652215),
    o = i(985018);
let p = function (e) {
    let { guild: n, user: p, onSelect: u } = e,
        b = n?.id ?? l.dJq,
        g = (0, t.bG)([s.A], () => null != n && s.A.canManageUser(l.xBc.BAN_MEMBERS, p, n), [n, p]);
    return (0, a.jsx)(c.W1t, {
        "data-menu-migrated": !0,
        navId: "member-application-context-menu",
        onClose: r.Z_,
        "aria-label": o.intl.string(o.t.liqwPJ),
        onSelect: u,
        children: (0, a.jsxs)(c.rXV, {
            children: [
                g &&
                    (0, a.jsx)(
                        c.Drp,
                        {
                            id: "ban",
                            label: o.intl.string(o.t["I+Cbum"]),
                            icon: c.wI0,
                            leadingAccessory: { type: "icon", icon: c.wI0 },
                            color: "danger",
                            action: () =>
                                (0, c.mMO)(async () => {
                                    let { default: e } = await i.e("80123").then(i.bind(i, 333179));
                                    return (n) => (0, a.jsx)(e, { ...n, guildId: b, user: p });
                                }),
                        },
                        "ban",
                    ),
                (0, a.jsx)(
                    c.Drp,
                    {
                        id: "copyUserId",
                        label: "Copy User ID",
                        icon: c.L9S,
                        leadingAccessory: { type: "icon", icon: c.L9S },
                        action: () => (0, d.C)(p.id),
                    },
                    "copyUserId",
                ),
            ],
        }),
    });
};
