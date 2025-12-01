n.d(t, { Z: () => E }), n(539854);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(524437),
    o = n(481060),
    s = n(153867),
    l = n(857595),
    c = n(607070),
    u = n(906732),
    d = n(705262),
    f = n(210887),
    p = n(740492),
    _ = n(695346),
    m = n(874893),
    h = n(981631),
    g = n(388032);
function E() {
    let e = _.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: E,
            useForcedColors: b,
        } = (0, i.cj)([f.Z, p.ZP, c.Z], () => ({
            theme: f.Z.theme,
            useSystemTheme: p.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors,
        })),
        y = _.YC.useSetting(),
        O = (e, i) =>
            (0, r.jsx)(o.k5B, {
                id: e,
                group: "input-modes",
                label: i,
                disabled: b,
                checked: E === m.KW.ON ? "system" === e : e === n,
                action: () => {
                    (0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: "default ".concat(e),
                    }),
                        (0, s.ZI)({ theme: e });
                },
            }),
        v = [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [
                        O(h.BRd.LIGHT, g.intl.string(g.t.K2sFfo)),
                        O(h.BRd.DARK, g.intl.string(g.t.SMPT1k)),
                        O(h.BRd.DARKER, g.intl.string(g.t.b8Cei3)),
                        O(h.BRd.MIDNIGHT, g.intl.string(g.t.Do4ZJx)),
                        O("system", g.intl.string(g.t["7rOU6j"])),
                    ],
                },
                "theme-items",
            ),
        ];
    return (
        v.push(
            (0, r.jsxs)(
                o.kSQ,
                {
                    label: "UI Density",
                    children: [
                        (0, r.jsx)(o.k5B, {
                            id: "compact-ui",
                            group: "list-density",
                            label: g.intl.string(g.t["7iegX4"]),
                            checked: y === a.Pi.COMPACT,
                            action: () => {
                                _.YC.updateSetting(a.Pi.COMPACT);
                            },
                        }),
                        (0, r.jsx)(o.k5B, {
                            id: "default-ui",
                            group: "list-density",
                            label: g.intl.string(g.t.bBvAEH),
                            checked: y === a.Pi.DEFAULT,
                            action: () => {
                                _.YC.updateSetting(a.Pi.DEFAULT);
                            },
                        }),
                        (0, r.jsx)(o.k5B, {
                            id: "cozy-ui",
                            group: "list-density",
                            label: g.intl.string(g.t["4cuYHx"]),
                            checked: y === a.Pi.COZY,
                            action: () => {
                                _.YC.updateSetting(a.Pi.COZY);
                            },
                        }),
                    ],
                },
                "list-density",
            ),
        ),
        v.push(
            (0, r.jsxs)(
                o.kSQ,
                {
                    label: "Message Display",
                    children: [
                        (0, r.jsx)(o.k5B, {
                            id: "cozy-chat",
                            group: "chat-density",
                            label: g.intl.string(g.t.Jqj4cZ),
                            checked: !e,
                            action: () => {
                                _.jU.updateSetting(!1), (0, l.ZZ)();
                            },
                        }),
                        (0, r.jsx)(o.k5B, {
                            id: "compact-chat",
                            group: "chat-density",
                            label: g.intl.string(g.t["1JNcPS"]),
                            checked: e,
                            action: () => {
                                _.jU.updateSetting(!0), (0, l.ZZ)();
                            },
                        }),
                    ],
                },
                "chat-density",
            ),
        ),
        v
    );
}
