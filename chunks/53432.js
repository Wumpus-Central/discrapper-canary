(n.d(t, { Z: () => f }), n(539854));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(524437),
    a = n(481060),
    o = n(153867),
    s = n(857595),
    c = n(607070),
    u = n(906732),
    d = n(705262),
    p = n(210887),
    g = n(740492),
    b = n(695346),
    y = n(874893),
    O = n(981631),
    h = n(388032);
function f() {
    let e = b.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: f,
            useForcedColors: j
        } = (0, i.cj)([p.Z, g.ZP, c.Z], () => ({
            theme: p.Z.theme,
            useSystemTheme: g.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors
        })),
        v = b.YC.useSetting(),
        E = (e, i) =>
            (0, r.jsx)(a.k5B, {
                id: e,
                group: 'input-modes',
                label: i,
                disabled: j,
                checked: f === y.KW.ON ? 'system' === e : e === n,
                action: () => {
                    ((0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, o.ZI)({ theme: e }));
                }
            }),
        S = E(O.BRd.DARK, h.intl.string(h.t.SMPT1t)),
        P = E(O.BRd.LIGHT, h.intl.string(h.t.K2sFfn)),
        m = [
            (0, r.jsxs)(
                a.kSQ,
                {
                    children: [P, S, E(O.BRd.DARKER, h.intl.string(h.t.b8Cei4)), E(O.BRd.MIDNIGHT, h.intl.string(h.t.Do4ZJy)), E('system', h.intl.string(h.t['7rOU6u']))]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        m.push(
            (0, r.jsxs)(
                a.kSQ,
                {
                    label: 'UI Density',
                    children: [
                        (0, r.jsx)(a.k5B, {
                            id: 'compact-ui',
                            group: 'list-density',
                            label: h.intl.string(h.t['7iegX1']),
                            checked: v === l.Pi.COMPACT,
                            action: () => {
                                b.YC.updateSetting(l.Pi.COMPACT);
                            }
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: 'default-ui',
                            group: 'list-density',
                            label: h.intl.string(h.t.bBvAEB),
                            checked: v === l.Pi.DEFAULT,
                            action: () => {
                                b.YC.updateSetting(l.Pi.DEFAULT);
                            }
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: 'cozy-ui',
                            group: 'list-density',
                            label: h.intl.string(h.t['4cuYHx']),
                            checked: v === l.Pi.COZY,
                            action: () => {
                                b.YC.updateSetting(l.Pi.COZY);
                            }
                        })
                    ]
                },
                'list-density'
            )
        ),
        m.push(
            (0, r.jsxs)(
                a.kSQ,
                {
                    label: 'Message Display',
                    children: [
                        (0, r.jsx)(a.k5B, {
                            id: 'cozy-chat',
                            group: 'chat-density',
                            label: h.intl.string(h.t.Jqj4cX),
                            checked: !e,
                            action: () => {
                                (b.jU.updateSetting(!1), (0, s.ZZ)());
                            }
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: 'compact-chat',
                            group: 'chat-density',
                            label: h.intl.string(h.t['1JNcPT']),
                            checked: e,
                            action: () => {
                                (b.jU.updateSetting(!0), (0, s.ZZ)());
                            }
                        })
                    ]
                },
                'chat-density'
            )
        ),
        m
    );
}
