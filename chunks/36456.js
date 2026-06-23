n.d(t, { default: () => o });
var i = n(627968),
    l = n(17928),
    a = n(980707),
    s = n(477782),
    d = n(442433),
    r = n(684407),
    c = n(375708);
let o = function (e) {
    let { guildId: t, welcomeChannel: n, onChannelReorder: o, onShowDeleteModal: b, index: g, onSelect: h } = e,
        u = (0, l.bG)([r.A], () => r.A.get(t)),
        p = (u?.welcome_channels ?? []).length - 1;
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "welcome-settings-context",
        "aria-label": c.intl.string(c.t.ogxXGq),
        onClose: d.Z_,
        onSelect: h,
        children: [
            (0, i.jsxs)(s.rX, {
                children: [
                    (0, i.jsx)(s.Dr, {
                        id: "move-up",
                        label: c.intl.string(c.t["4UBqwA"]),
                        disabled: g <= 0,
                        action: () => {
                            o(n, g - 1, !0);
                        },
                    }),
                    (0, i.jsx)(s.Dr, {
                        id: "move-down",
                        label: c.intl.string(c.t.b73Gwa),
                        disabled: g >= p,
                        action: () => {
                            o(n, g + 1, !0);
                        },
                    }),
                ],
            }),
            (0, i.jsx)(s.rX, {
                children: (0, i.jsx)(s.Dr, {
                    id: "delete",
                    label: c.intl.string(c.t.JYBc3K),
                    action: b,
                    color: "danger",
                }),
            }),
        ],
    });
};
