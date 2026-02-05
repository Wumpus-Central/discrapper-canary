l.d(t, { default: () => c });
var n = l(627968),
    i = l(311907),
    a = l(397927),
    s = l(442433),
    d = l(684407),
    r = l(985018);
let c = (e) => {
    let { guildId: t, welcomeChannel: l, onChannelReorder: c, onShowDeleteModal: o, index: p, onSelect: b } = e,
        g = (0, i.bG)([d.A], () => d.A.get(t)),
        h = (g?.welcome_channels ?? []).length - 1,
        u = (e) => {
            c(l, e, !0);
        };
    return (0, n.jsxs)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "welcome-settings-context",
        "aria-label": r.intl.string(r.t.ogxXGq),
        onClose: s.Z_,
        onSelect: b,
        children: [
            (0, n.jsxs)(a.rXV, {
                children: [
                    (0, n.jsx)(a.Drp, {
                        id: "move-up",
                        label: r.intl.string(r.t["4UBqwA"]),
                        disabled: p <= 0,
                        action: () => u(p - 1),
                    }),
                    (0, n.jsx)(a.Drp, {
                        id: "move-down",
                        label: r.intl.string(r.t.b73Gwa),
                        disabled: p >= h,
                        action: () => u(p + 1),
                    }),
                ],
            }),
            (0, n.jsx)(a.rXV, {
                children: (0, n.jsx)(a.Drp, {
                    id: "delete",
                    label: r.intl.string(r.t.JYBc3K),
                    action: o,
                    color: "danger",
                }),
            }),
        ],
    });
};
