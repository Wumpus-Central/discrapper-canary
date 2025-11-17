t.d(l, { default: () => o });
var n = t(54381),
    i = t(442837),
    s = t(481060),
    a = t(239091),
    d = t(995532),
    c = t(388032);
let o = (e) => {
    var l;
    let { guildId: t, welcomeChannel: o, onChannelReorder: r, onShowDeleteModal: h, index: u, onSelect: b } = e,
        g = (0, i.e7)([d.Z], () => d.Z.get(t)),
        p = (null != (l = null == g ? void 0 : g.welcome_channels) ? l : []).length - 1,
        x = (e) => {
            r(o, e, !0);
        };
    return (0, n.jsxs)(s.v2r, {
        navId: "welcome-settings-context",
        "aria-label": c.intl.string(c.t.ogxXGq),
        onClose: a.Zy,
        onSelect: b,
        children: [
            (0, n.jsxs)(s.kSQ, {
                children: [
                    (0, n.jsx)(s.sNh, {
                        id: "move-up",
                        label: c.intl.string(c.t["4UBqwA"]),
                        disabled: u <= 0,
                        action: () => x(u - 1),
                    }),
                    (0, n.jsx)(s.sNh, {
                        id: "move-down",
                        label: c.intl.string(c.t.b73Gwa),
                        disabled: u >= p,
                        action: () => x(u + 1),
                    }),
                ],
            }),
            (0, n.jsx)(s.kSQ, {
                children: (0, n.jsx)(s.sNh, {
                    id: "delete",
                    label: c.intl.string(c.t.JYBc3K),
                    action: h,
                    color: "danger",
                }),
            }),
        ],
    });
};
