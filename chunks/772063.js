var a = i(477900);
i(582128);
var c = i(855986),
    r = i(165862),
    l = i(477782),
    d = i(215026),
    t = i(192308),
    s = i(473935),
    o = i(442433),
    u = i(121127),
    p = i(576705),
    I = i(957565),
    m = i(652215),
    b = i(792996);
i.d(
    e,
    {},
    {
        default: function (n) {
            let { guild: e, user: g, onSelect: h } = n,
                x = e?.id ?? "",
                y = (0, u.A)({ userId: g.id, guildId: e?.id ?? null }),
                A = (0, c.bG)([p.A], () => null != e && p.A.canManageUser(m.xBc.BAN_MEMBERS, g, e), [e, g]);
            return (0, a.jsxs)(r.W, {
                "data-menu-migrated": !0,
                navId: "member-application-context-menu",
                onClose: o.Z_,
                "aria-label": b.intl.string(b.t.liqwPJ),
                onSelect: h,
                children: [
                    null != y && (0, a.jsx)(l.rX, { children: y }),
                    (0, a.jsxs)(l.rX, {
                        children: [
                            A &&
                                (0, a.jsx)(
                                    l.Dr,
                                    {
                                        id: "ban",
                                        label: b.intl.string(b.t["I+Cbum"]),
                                        icon: d.HammerIcon,
                                        leadingAccessory: { type: "icon", icon: d.HammerIcon },
                                        color: "danger",
                                        action: () =>
                                            (0, t.mM)(async () => {
                                                let { default: n } = await Promise.all([
                                                    i.e(420282),
                                                    i.e(691671),
                                                    i.e(802504),
                                                ]).then(i.bind(i, 333179));
                                                return (e) => (0, a.jsx)(n, { ...e, guildId: x, user: g });
                                            }),
                                    },
                                    "ban",
                                ),
                            (0, a.jsx)(
                                l.Dr,
                                {
                                    id: "copyUserId",
                                    label: b.intl.string(b.t["/AXYnE"]),
                                    icon: s.IdIcon,
                                    leadingAccessory: { type: "icon", icon: s.IdIcon },
                                    action: () => (0, I.C)(g.id),
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
