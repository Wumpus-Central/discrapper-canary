n.d(t, { Z: () => g }), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    o = n(524437),
    l = n(481060),
    s = n(153867),
    c = n(857595),
    a = n(607070),
    u = n(906732),
    d = n(705262),
    p = n(210887),
    b = n(740492),
    h = n(695346),
    j = n(874893),
    y = n(981631),
    m = n(388032);
function g() {
    let e = h.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: g,
            useForcedColors: f,
        } = (0, i.cj)([p.Z, b.ZP, a.Z], () => ({
            theme: p.Z.theme,
            useSystemTheme: b.ZP.useSystemTheme,
            useForcedColors: a.Z.useForcedColors,
        })),
        O = h.YC.useSetting(),
        x = (e, i) =>
            (0, r.jsx)(l.k5B, {
                id: e,
                group: "input-modes",
                label: i,
                disabled: f,
                checked: g === j.KW.ON ? "system" === e : e === n,
                action: () => {
                    (0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: "default ".concat(e),
                    }),
                        (0, s.ZI)({ theme: e });
                },
            }),
        S = [
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [
                        x(y.BRd.LIGHT, m.intl.string(m.t.K2sFfo)),
                        x(y.BRd.DARK, m.intl.string(m.t.SMPT1k)),
                        x(y.BRd.DARKER, m.intl.string(m.t.b8Cei3)),
                        x(y.BRd.MIDNIGHT, m.intl.string(m.t.Do4ZJx)),
                        x("system", m.intl.string(m.t["7rOU6j"])),
                    ],
                },
                "theme-items",
            ),
        ];
    return (
        S.push(
            (0, r.jsxs)(
                l.kSQ,
                {
                    label: "UI Density",
                    children: [
                        (0, r.jsx)(l.k5B, {
                            id: "compact-ui",
                            group: "list-density",
                            label: m.intl.string(m.t["7iegX4"]),
                            checked: O === o.Pi.COMPACT,
                            action: () => {
                                h.YC.updateSetting(o.Pi.COMPACT);
                            },
                        }),
                        (0, r.jsx)(l.k5B, {
                            id: "default-ui",
                            group: "list-density",
                            label: m.intl.string(m.t.bBvAEH),
                            checked: O === o.Pi.DEFAULT,
                            action: () => {
                                h.YC.updateSetting(o.Pi.DEFAULT);
                            },
                        }),
                        (0, r.jsx)(l.k5B, {
                            id: "cozy-ui",
                            group: "list-density",
                            label: m.intl.string(m.t["4cuYHx"]),
                            checked: O === o.Pi.COZY,
                            action: () => {
                                h.YC.updateSetting(o.Pi.COZY);
                            },
                        }),
                    ],
                },
                "list-density",
            ),
        ),
        S.push(
            (0, r.jsxs)(
                l.kSQ,
                {
                    label: "Message Display",
                    children: [
                        (0, r.jsx)(l.k5B, {
                            id: "cozy-chat",
                            group: "chat-density",
                            label: m.intl.string(m.t.Jqj4cZ),
                            checked: !e,
                            action: () => {
                                h.jU.updateSetting(!1), (0, c.ZZ)();
                            },
                        }),
                        (0, r.jsx)(l.k5B, {
                            id: "compact-chat",
                            group: "chat-density",
                            label: m.intl.string(m.t["1JNcPS"]),
                            checked: e,
                            action: () => {
                                h.jU.updateSetting(!0), (0, c.ZZ)();
                            },
                        }),
                    ],
                },
                "chat-density",
            ),
        ),
        S
    );
}
