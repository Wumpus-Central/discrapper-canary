(n.d(t, { Z: () => h }), n(539854));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(524437),
    a = n(481060),
    o = n(153867),
    c = n(857595),
    s = n(607070),
    u = n(906732),
    d = n(705262),
    p = n(210887),
    g = n(740492),
    b = n(695346),
    y = n(874893),
    O = n(981631),
    f = n(388032);
function h() {
    let e = b.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: h,
            useForcedColors: j
        } = (0, i.cj)([p.Z, g.ZP, s.Z], () => ({
            theme: p.Z.theme,
            useSystemTheme: g.ZP.useSystemTheme,
            useForcedColors: s.Z.useForcedColors
        })),
        v = b.YC.useSetting(),
        S = (e, i) =>
            (0, r.jsx)(a.k5B, {
                id: e,
                group: 'input-modes',
                label: i,
                disabled: j,
                checked: h === y.KW.ON ? 'system' === e : e === n,
                action: () => {
                    ((0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, o.ZI)({ theme: e }));
                }
            }),
        E = S(O.BRd.DARK, f.intl.string(f.t.SMPT1t)),
        P = S(O.BRd.LIGHT, f.intl.string(f.t.K2sFfn)),
        m = [
            (0, r.jsxs)(
                a.kSQ,
                {
                    children: [P, E, S(O.BRd.DARKER, f.intl.string(f.t.b8Cei4)), S(O.BRd.MIDNIGHT, f.intl.string(f.t.Do4ZJy)), S('system', f.intl.string(f.t['7rOU6u']))]
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
                            label: f.intl.string(f.t['7iegX1']),
                            checked: v === l.Pi.COMPACT,
                            action: () => {
                                b.YC.updateSetting(l.Pi.COMPACT);
                            }
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: 'default-ui',
                            group: 'list-density',
                            label: f.intl.string(f.t.bBvAEB),
                            checked: v === l.Pi.DEFAULT,
                            action: () => {
                                b.YC.updateSetting(l.Pi.DEFAULT);
                            }
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: 'cozy-ui',
                            group: 'list-density',
                            label: f.intl.string(f.t['4cuYHx']),
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
                            label: f.intl.string(f.t.Jqj4cX),
                            checked: !e,
                            action: () => {
                                (b.jU.updateSetting(!1), (0, c.ZZ)());
                            }
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: 'compact-chat',
                            group: 'chat-density',
                            label: f.intl.string(f.t['1JNcPT']),
                            checked: e,
                            action: () => {
                                (b.jU.updateSetting(!0), (0, c.ZZ)());
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
