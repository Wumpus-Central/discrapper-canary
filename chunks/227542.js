n.d(t, { A: () => E }), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(873298),
    s = n(397927),
    o = n(817281),
    l = n(955572),
    c = n(775602),
    u = n(688810),
    d = n(692798),
    f = n(544028),
    p = n(964404),
    _ = n(253932),
    h = n(185928),
    m = n(652215),
    g = n(985018);
function E() {
    let e = _.hH.useSetting(),
        { analyticsLocations: t } = (0, u.Ay)(),
        {
            theme: n,
            useSystemTheme: E,
            useForcedColors: b,
        } = (0, i.cf)([f.A, p.Ay, c.A], () => ({
            theme: f.A.theme,
            useSystemTheme: p.Ay.useSystemTheme,
            useForcedColors: c.A.useForcedColors,
        })),
        y = _.Xi.useSetting(),
        O = (e, i) =>
            (0, r.jsx)(s.iDA, {
                id: e,
                group: "input-modes",
                label: i,
                disabled: b,
                checked: E === h.Q_.ON ? "system" === e : e === n,
                action: () => {
                    (0, d.X8)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: "default ".concat(e),
                    }),
                        (0, o.u_)({ theme: e });
                },
            }),
        A = [
            (0, r.jsxs)(
                s.rXV,
                {
                    children: [
                        O(m.NJ8.LIGHT, g.intl.string(g.t.K2sFfo)),
                        O(m.NJ8.DARK, g.intl.string(g.t.SMPT1k)),
                        O(m.NJ8.DARKER, g.intl.string(g.t.b8Cei3)),
                        O(m.NJ8.MIDNIGHT, g.intl.string(g.t.Do4ZJx)),
                        O("system", g.intl.string(g.t["7rOU6j"])),
                    ],
                },
                "theme-items",
            ),
        ];
    return (
        A.push(
            (0, r.jsxs)(
                s.rXV,
                {
                    label: "UI Density",
                    children: [
                        (0, r.jsx)(s.iDA, {
                            id: "compact-ui",
                            group: "list-density",
                            label: g.intl.string(g.t["7iegX4"]),
                            checked: y === a.NS.COMPACT,
                            action: () => {
                                _.Xi.updateSetting(a.NS.COMPACT);
                            },
                        }),
                        (0, r.jsx)(s.iDA, {
                            id: "default-ui",
                            group: "list-density",
                            label: g.intl.string(g.t.bBvAEH),
                            checked: y === a.NS.DEFAULT,
                            action: () => {
                                _.Xi.updateSetting(a.NS.DEFAULT);
                            },
                        }),
                        (0, r.jsx)(s.iDA, {
                            id: "cozy-ui",
                            group: "list-density",
                            label: g.intl.string(g.t["4cuYHx"]),
                            checked: y === a.NS.COZY,
                            action: () => {
                                _.Xi.updateSetting(a.NS.COZY);
                            },
                        }),
                    ],
                },
                "list-density",
            ),
        ),
        A.push(
            (0, r.jsxs)(
                s.rXV,
                {
                    label: "Message Display",
                    children: [
                        (0, r.jsx)(s.iDA, {
                            id: "cozy-chat",
                            group: "chat-density",
                            label: g.intl.string(g.t.Jqj4cZ),
                            checked: !e,
                            action: () => {
                                _.hH.updateSetting(!1), (0, l.AC)();
                            },
                        }),
                        (0, r.jsx)(s.iDA, {
                            id: "compact-chat",
                            group: "chat-density",
                            label: g.intl.string(g.t["1JNcPS"]),
                            checked: e,
                            action: () => {
                                _.hH.updateSetting(!0), (0, l.AC)();
                            },
                        }),
                    ],
                },
                "chat-density",
            ),
        ),
        A
    );
}
