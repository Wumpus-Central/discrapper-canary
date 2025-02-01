n.d(t, { default: () => o });
var l = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(239091),
    d = n(995532),
    c = n(388032);
let o = (e) => {
    var t;
    let { guildId: o, welcomeChannel: r, onEdit: h, onChannelReorder: u, setShowConfirmModal: b, index: g, onSelect: v } = e,
        x = (0, i.e7)([d.Z], () => d.Z.get(o)),
        w = (null !== (t = null == x ? void 0 : x.welcome_channels) && void 0 !== t ? t : []).length - 1,
        j = (e) => {
            u(r, e, !0);
        };
    return (0, l.jsxs)(s.v2r, {
        navId: 'welcome-settings-context',
        'aria-label': c.intl.string(c.t.ogxXGh),
        onClose: a.Zy,
        onSelect: v,
        children: [
            (0, l.jsxs)(s.kSQ, {
                children: [
                    (0, l.jsx)(s.sNh, {
                        id: 'move-up',
                        label: c.intl.string(c.t['4UBqwM']),
                        disabled: g <= 0,
                        action: () => j(g - 1)
                    }),
                    (0, l.jsx)(s.sNh, {
                        id: 'move-down',
                        label: c.intl.string(c.t.b73Gwc),
                        disabled: g > w,
                        action: () => j(g + 1)
                    })
                ]
            }),
            (0, l.jsxs)(s.kSQ, {
                children: [
                    (0, l.jsx)(s.sNh, {
                        id: 'edit',
                        label: c.intl.string(c.t.u5DUrK),
                        action: () =>
                            (0, s.ZDy)(async () => {
                                let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        welcomeChannel: r,
                                        guildId: o,
                                        onSave: h
                                    });
                            })
                    }),
                    (0, l.jsx)(s.sNh, {
                        id: 'delete',
                        label: c.intl.string(c.t.JYBc3N),
                        action: () => b(!0),
                        color: 'danger'
                    })
                ]
            })
        ]
    });
};
