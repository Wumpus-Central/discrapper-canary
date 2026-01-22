t.d(l, { default: () => c });
var n = t(627968),
    i = t(311907),
    s = t(397927),
    a = t(442433),
    r = t(684407),
    d = t(985018);
let c = (e) => {
    var l;
    let { guildId: t, welcomeChannel: c, onChannelReorder: o, onShowDeleteModal: p, index: b, onSelect: h } = e,
        g = (0, i.bG)([r.A], () => r.A.get(t)),
        u = (null != (l = null == g ? void 0 : g.welcome_channels) ? l : []).length - 1,
        x = (e) => {
            o(c, e, !0);
        };
    return (0, n.jsxs)(s.W1t, {
        navId: "welcome-settings-context",
        "aria-label": d.intl.string(d.t.ogxXGq),
        onClose: a.Z_,
        onSelect: h,
        children: [
            (0, n.jsxs)(s.rXV, {
                children: [
                    (0, n.jsx)(s.Drp, {
                        id: "move-up",
                        label: d.intl.string(d.t["4UBqwA"]),
                        disabled: b <= 0,
                        action: () => x(b - 1),
                    }),
                    (0, n.jsx)(s.Drp, {
                        id: "move-down",
                        label: d.intl.string(d.t.b73Gwa),
                        disabled: b >= u,
                        action: () => x(b + 1),
                    }),
                ],
            }),
            (0, n.jsx)(s.rXV, {
                children: (0, n.jsx)(s.Drp, {
                    id: "delete",
                    label: d.intl.string(d.t.JYBc3K),
                    action: p,
                    color: "danger",
                }),
            }),
        ],
    });
};
