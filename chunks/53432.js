n.d(t, { Z: () => E }), n(539854);
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(524437),
    a = n(481060),
    s = n(153867),
    l = n(857595),
    c = n(607070),
    u = n(906732),
    d = n(705262),
    f = n(210887),
    _ = n(740492),
    p = n(695346),
    h = n(874893),
    m = n(981631),
    g = n(388032);
function E() {
    let e = p.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: E,
            useForcedColors: b,
        } = (0, i.cj)([f.Z, _.ZP, c.Z], () => ({
            theme: f.Z.theme,
            useSystemTheme: _.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors,
        })),
        y = p.YC.useSetting(),
        O = (e, i) =>
            (0, r.jsx)(a.k5B, {
                id: e,
                group: "input-modes",
                label: i,
                disabled: b,
                checked: E === h.KW.ON ? "system" === e : e === n,
                action: () => {
                    (0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: "default ".concat(e),
                    }),
                        (0, s.ZI)({ theme: e });
                },
            }),
        v = O(m.BRd.DARK, g.intl.string(g.t.SMPT1t)),
        I = O(m.BRd.LIGHT, g.intl.string(g.t.K2sFfn)),
        T = [
            (0, r.jsxs)(
                a.kSQ,
                {
                    children: [
                        I,
                        v,
                        O(m.BRd.DARKER, g.intl.string(g.t.b8Cei4)),
                        O(m.BRd.MIDNIGHT, g.intl.string(g.t.Do4ZJy)),
                        O("system", g.intl.string(g.t["7rOU6u"])),
                    ],
                },
                "theme-items",
            ),
            ,
        ];
    return (
        T.push(
            (0, r.jsxs)(
                a.kSQ,
                {
                    label: "UI Density",
                    children: [
                        (0, r.jsx)(a.k5B, {
                            id: "compact-ui",
                            group: "list-density",
                            label: g.intl.string(g.t["7iegX1"]),
                            checked: y === o.Pi.COMPACT,
                            action: () => {
                                p.YC.updateSetting(o.Pi.COMPACT);
                            },
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: "default-ui",
                            group: "list-density",
                            label: g.intl.string(g.t.bBvAEB),
                            checked: y === o.Pi.DEFAULT,
                            action: () => {
                                p.YC.updateSetting(o.Pi.DEFAULT);
                            },
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: "cozy-ui",
                            group: "list-density",
                            label: g.intl.string(g.t["4cuYHx"]),
                            checked: y === o.Pi.COZY,
                            action: () => {
                                p.YC.updateSetting(o.Pi.COZY);
                            },
                        }),
                    ],
                },
                "list-density",
            ),
        ),
        T.push(
            (0, r.jsxs)(
                a.kSQ,
                {
                    label: "Message Display",
                    children: [
                        (0, r.jsx)(a.k5B, {
                            id: "cozy-chat",
                            group: "chat-density",
                            label: g.intl.string(g.t.Jqj4cX),
                            checked: !e,
                            action: () => {
                                p.jU.updateSetting(!1), (0, l.ZZ)();
                            },
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: "compact-chat",
                            group: "chat-density",
                            label: g.intl.string(g.t["1JNcPT"]),
                            checked: e,
                            action: () => {
                                p.jU.updateSetting(!0), (0, l.ZZ)();
                            },
                        }),
                    ],
                },
                "chat-density",
            ),
        ),
        T
    );
}
