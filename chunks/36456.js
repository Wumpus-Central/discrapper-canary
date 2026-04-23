l.d(t, { default: () => o });
var n = l(627968),
    i = l(17928),
    a = l(550079),
    s = l(477782),
    d = l(442433),
    r = l(684407),
    c = l(985018);
let o = (e) => {
    let { guildId: t, welcomeChannel: l, onChannelReorder: o, onShowDeleteModal: b, index: g, onSelect: h } = e,
        u = (0, i.bG)([r.A], () => r.A.get(t)),
        p = (u?.welcome_channels ?? []).length - 1,
        x = (e) => {
            o(l, e, !0);
        };
    return (0, n.jsxs)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "welcome-settings-context",
        "aria-label": c.intl.string(c.t.ogxXGq),
        onClose: d.Z_,
        onSelect: h,
        children: [
            (0, n.jsxs)(s.rX, {
                children: [
                    (0, n.jsx)(s.Dr, {
                        id: "move-up",
                        label: c.intl.string(c.t["4UBqwA"]),
                        disabled: g <= 0,
                        action: () => x(g - 1),
                    }),
                    (0, n.jsx)(s.Dr, {
                        id: "move-down",
                        label: c.intl.string(c.t.b73Gwa),
                        disabled: g >= p,
                        action: () => x(g + 1),
                    }),
                ],
            }),
            (0, n.jsx)(s.rX, {
                children: (0, n.jsx)(s.Dr, {
                    id: "delete",
                    label: c.intl.string(c.t.JYBc3K),
                    action: b,
                    color: "danger",
                }),
            }),
        ],
    });
};
