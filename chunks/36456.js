l.d(t, {
    default: () => o,
});
var n = l(627968),
    i = l(311907),
    a = l(397927),
    s = l(442433),
    r = l(684407),
    d = l(985018);
let o = (e) => {
    var t;
    let { guildId: l, welcomeChannel: o, onChannelReorder: c, onShowDeleteModal: p, index: b, onSelect: g } = e,
        h = (0, i.bG)([r.A], () => r.A.get(l)),
        u = (null != (t = null == h ? void 0 : h.welcome_channels) ? t : []).length - 1,
        x = (e) => {
            c(o, e, !0);
        };
    return (0, n.jsxs)(a.W1t, {
        "data-menu-migration-ready": !0,
        navId: "welcome-settings-context",
        "aria-label": d.intl.string(d.t.ogxXGq),
        onClose: s.Z_,
        onSelect: g,
        children: [
            (0, n.jsxs)(a.rXV, {
                children: [
                    (0, n.jsx)(a.Drp, {
                        id: "move-up",
                        label: d.intl.string(d.t["4UBqwA"]),
                        disabled: b <= 0,
                        action: () => x(b - 1),
                    }),
                    (0, n.jsx)(a.Drp, {
                        id: "move-down",
                        label: d.intl.string(d.t.b73Gwa),
                        disabled: b >= u,
                        action: () => x(b + 1),
                    }),
                ],
            }),
            (0, n.jsx)(a.rXV, {
                children: (0, n.jsx)(a.Drp, {
                    id: "delete",
                    label: d.intl.string(d.t.JYBc3K),
                    action: p,
                    color: "danger",
                }),
            }),
        ],
    });
};
