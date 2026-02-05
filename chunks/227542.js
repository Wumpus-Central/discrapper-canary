"use strict";
n.d(t, { A: () => E }), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(873298),
    s = n(397927),
    o = n(817281),
    l = n(955572),
    u = n(775602),
    c = n(688810),
    d = n(692798),
    _ = n(544028),
    f = n(964404),
    p = n(253932),
    h = n(185928),
    m = n(652215),
    g = n(985018);
function E() {
    let e = p.hH.useSetting(),
        { analyticsLocations: t } = (0, c.Ay)(),
        {
            theme: n,
            useSystemTheme: E,
            useForcedColors: A,
        } = (0, i.cf)([_.A, f.Ay, u.A], () => ({
            theme: _.A.theme,
            useSystemTheme: f.Ay.useSystemTheme,
            useForcedColors: u.A.useForcedColors,
        })),
        I = p.Xi.useSetting(),
        T = (e, i) =>
            (0, r.jsx)(s.iDA, {
                id: e,
                group: "input-modes",
                label: i,
                disabled: A,
                checked: E === h.Q_.ON ? "system" === e : e === n,
                action: () => {
                    (0, d.X8)({ isPersisted: !0, analyticsLocations: t, themeName: `default ${e}` }),
                        (0, o.u_)({ theme: e });
                },
            }),
        y = [
            (0, r.jsxs)(
                s.rXV,
                {
                    children: [
                        T(m.NJ8.LIGHT, g.intl.string(g.t.K2sFfo)),
                        T(m.NJ8.DARK, g.intl.string(g.t.SMPT1k)),
                        T(m.NJ8.DARKER, g.intl.string(g.t.b8Cei3)),
                        T(m.NJ8.MIDNIGHT, g.intl.string(g.t.Do4ZJx)),
                        T("system", g.intl.string(g.t["7rOU6j"])),
                    ],
                },
                "theme-items",
            ),
        ];
    return (
        y.push(
            (0, r.jsxs)(
                s.rXV,
                {
                    label: "UI Density",
                    children: [
                        (0, r.jsx)(s.iDA, {
                            id: "compact-ui",
                            group: "list-density",
                            label: g.intl.string(g.t["7iegX4"]),
                            checked: I === a.NS.COMPACT,
                            action: () => {
                                p.Xi.updateSetting(a.NS.COMPACT);
                            },
                        }),
                        (0, r.jsx)(s.iDA, {
                            id: "default-ui",
                            group: "list-density",
                            label: g.intl.string(g.t.bBvAEH),
                            checked: I === a.NS.DEFAULT,
                            action: () => {
                                p.Xi.updateSetting(a.NS.DEFAULT);
                            },
                        }),
                        (0, r.jsx)(s.iDA, {
                            id: "cozy-ui",
                            group: "list-density",
                            label: g.intl.string(g.t["4cuYHx"]),
                            checked: I === a.NS.COZY,
                            action: () => {
                                p.Xi.updateSetting(a.NS.COZY);
                            },
                        }),
                    ],
                },
                "list-density",
            ),
        ),
        y.push(
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
                                p.hH.updateSetting(!1), (0, l.AC)();
                            },
                        }),
                        (0, r.jsx)(s.iDA, {
                            id: "compact-chat",
                            group: "chat-density",
                            label: g.intl.string(g.t["1JNcPS"]),
                            checked: e,
                            action: () => {
                                p.hH.updateSetting(!0), (0, l.AC)();
                            },
                        }),
                    ],
                },
                "chat-density",
            ),
        ),
        y
    );
}
