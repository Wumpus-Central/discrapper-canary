i.d(n, { default: () => y });
var a = i(627968);
i(64700);
var l = i(17928),
    d = i(980707),
    r = i(477782),
    c = i(215026),
    s = i(192308),
    t = i(473935),
    o = i(442433),
    u = i(121127),
    p = i(576705),
    b = i(957565),
    g = i(652215),
    h = i(375708);
let y = function (e) {
    let { guild: n, user: y, onSelect: x } = e,
        I = n?.id ?? g.dJq,
        m = (0, u.A)({ userId: y.id, guildId: n?.id ?? null }),
        j = (0, l.bG)([p.A], () => null != n && p.A.canManageUser(g.xBc.BAN_MEMBERS, y, n), [n, y]);
    return (0, a.jsxs)(d.W, {
        "data-menu-migrated": !0,
        navId: "member-application-context-menu",
        onClose: o.Z_,
        "aria-label": h.intl.string(h.t.liqwPJ),
        onSelect: x,
        children: [
            null != m && (0, a.jsx)(r.rX, { children: m }),
            (0, a.jsxs)(r.rX, {
                children: [
                    j &&
                        (0, a.jsx)(
                            r.Dr,
                            {
                                id: "ban",
                                label: h.intl.string(h.t["I+Cbum"]),
                                icon: c.w,
                                leadingAccessory: { type: "icon", icon: c.w },
                                color: "danger",
                                action: () =>
                                    (0, s.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            i.e("38135"),
                                            i.e("91671"),
                                            i.e("2504"),
                                        ]).then(i.bind(i, 333179));
                                        return (n) => (0, a.jsx)(e, { ...n, guildId: I, user: y });
                                    }),
                            },
                            "ban",
                        ),
                    (0, a.jsx)(
                        r.Dr,
                        {
                            id: "copyUserId",
                            label: "Copy User ID",
                            icon: t.L,
                            leadingAccessory: { type: "icon", icon: t.L },
                            action: () => (0, b.C)(y.id),
                        },
                        "copyUserId",
                    ),
                ],
            }),
        ],
    });
};
