i.d(e, { default: () => x });
var a = i(477900);
i(582128);
var l = i(17928),
    t = i(980707),
    d = i(477782),
    r = i(215026),
    c = i(192308),
    s = i(473935),
    o = i(442433),
    u = i(121127),
    p = i(576705),
    b = i(957565),
    g = i(652215),
    h = i(105292);
let x = function (n) {
    let { guild: e, user: x, onSelect: y } = n,
        m = e?.id ?? g.dJq,
        A = (0, u.A)({ userId: x.id, guildId: e?.id ?? null }),
        I = (0, l.bG)([p.A], () => null != e && p.A.canManageUser(g.xBc.BAN_MEMBERS, x, e), [e, x]);
    return (0, a.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "member-application-context-menu",
        onClose: o.Z_,
        "aria-label": h.intl.string(h.t.liqwPJ),
        onSelect: y,
        children: [
            null != A && (0, a.jsx)(d.rX, { children: A }),
            (0, a.jsxs)(d.rX, {
                children: [
                    I &&
                        (0, a.jsx)(
                            d.Dr,
                            {
                                id: "ban",
                                label: h.intl.string(h.t["I+Cbum"]),
                                icon: r.w,
                                leadingAccessory: { type: "icon", icon: r.w },
                                color: "danger",
                                action: () =>
                                    (0, c.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([
                                            i.e("420282"),
                                            i.e("691671"),
                                            i.e("802504"),
                                        ]).then(i.bind(i, 333179));
                                        return (e) => (0, a.jsx)(n, { ...e, guildId: m, user: x });
                                    }),
                            },
                            "ban",
                        ),
                    (0, a.jsx)(
                        d.Dr,
                        {
                            id: "copyUserId",
                            label: h.intl.string(h.t["/AXYnE"]),
                            icon: s.L,
                            leadingAccessory: { type: "icon", icon: s.L },
                            action: () => (0, b.C)(x.id),
                        },
                        "copyUserId",
                    ),
                ],
            }),
        ],
    });
};
