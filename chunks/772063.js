var a = i(477900);
i(582128);
var l = i(855986),
    r = i(165862),
    t = i(477782),
    c = i(215026),
    d = i(192308),
    s = i(473935),
    o = i(442433),
    u = i(121127),
    p = i(576705),
    b = i(957565),
    g = i(652215),
    h = i(792996);
i.d(
    e,
    {},
    {
        default: function (n) {
            let { guild: e, user: m, onSelect: x } = n,
                y = e?.id ?? "",
                A = (0, u.A)({ userId: m.id, guildId: e?.id ?? null }),
                I = (0, l.bG)([p.A], () => null != e && p.A.canManageUser(g.xBc.BAN_MEMBERS, m, e), [e, m]);
            return (0, a.jsxs)(r.W, {
                "data-menu-migrated": !0,
                navId: "member-application-context-menu",
                onClose: o.Z_,
                "aria-label": h.intl.string(h.t.liqwPJ),
                onSelect: x,
                children: [
                    null != A && (0, a.jsx)(t.rX, { children: A }),
                    (0, a.jsxs)(t.rX, {
                        children: [
                            I &&
                                (0, a.jsx)(
                                    t.Dr,
                                    {
                                        id: "ban",
                                        label: h.intl.string(h.t["I+Cbum"]),
                                        icon: c.w,
                                        leadingAccessory: { type: "icon", icon: c.w },
                                        color: "danger",
                                        action: () =>
                                            (0, d.mM)(async () => {
                                                let { default: n } = await Promise.all([
                                                    i.e(420282),
                                                    i.e(691671),
                                                    i.e(802504),
                                                ]).then(i.bind(i, 333179));
                                                return (e) => (0, a.jsx)(n, { ...e, guildId: y, user: m });
                                            }),
                                    },
                                    "ban",
                                ),
                            (0, a.jsx)(
                                t.Dr,
                                {
                                    id: "copyUserId",
                                    label: h.intl.string(h.t["/AXYnE"]),
                                    icon: s.L,
                                    leadingAccessory: { type: "icon", icon: s.L },
                                    action: () => (0, b.C)(m.id),
                                },
                                "copyUserId",
                            ),
                        ],
                    }),
                ],
            });
        },
    },
);
