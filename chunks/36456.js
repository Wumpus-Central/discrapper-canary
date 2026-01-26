l.d(t, {
    default: () => o,
});
var n = l(627968),
    i = l(311907),
    a = l(397927),
    s = l(442433),
    d = l(684407),
    r = l(985018);
let o = (e) => {
    var t;
    let { guildId: l, welcomeChannel: o, onChannelReorder: c, onShowDeleteModal: p, index: u, onSelect: b } = e,
        g = (0, i.bG)([d.A], () => d.A.get(l)),
        h = (null != (t = null == g ? void 0 : g.welcome_channels) ? t : []).length - 1,
        x = (e) => {
            c(o, e, !0);
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
                        disabled: u <= 0,
                        action: () => x(u - 1),
                    }),
                    (0, n.jsx)(a.Drp, {
                        id: "move-down",
                        label: r.intl.string(r.t.b73Gwa),
                        disabled: u >= h,
                        action: () => x(u + 1),
                    }),
                ],
            }),
            (0, n.jsx)(a.rXV, {
                children: (0, n.jsx)(a.Drp, {
                    id: "delete",
                    label: r.intl.string(r.t.JYBc3K),
                    action: p,
                    color: "danger",
                }),
            }),
        ],
    });
};
