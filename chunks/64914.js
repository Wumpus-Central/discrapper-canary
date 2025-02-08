n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(401430),
    o = n(153867),
    c = n(921801),
    d = n(695103),
    u = n(998502),
    m = n(740492),
    g = n(695346),
    h = n(399970),
    x = n(726985),
    _ = n(981631),
    p = n(388032);
function E() {
    let [e] = s.useState(() => u.ZP.getEnableHardwareAcceleration()),
        t = g.bm.useSetting(),
        n = g.Sb.useSetting(),
        E = (0, r.e7)([d.Z], () => d.Z.testModeApplicationId),
        C = (0, r.e7)([m.ZP], () => m.ZP.showPlayAgain),
        f = s.useCallback((e) => {
            g.bm.updateSetting(!e);
        }, []),
        T = s.useCallback((e) => {
            e ? (0, l.h7j)((e) => (0, i.jsx)(h.Z, { ...e })) : a.mc();
        }, []),
        N = s.useCallback((e) => {
            o.ZP.updatedUnsyncedSettings({ showPlayAgain: e });
        }, []),
        I = s.useCallback((e) => {
            (0, l.h7j)((t) =>
                (0, i.jsx)(l.ConfirmModal, {
                    header: p.intl.string(p.t.aqpAvr),
                    confirmText: p.intl.string(p.t.BddRzc),
                    cancelText: p.intl.string(p.t['ETE/oK']),
                    onConfirm: () => u.ZP.setEnableHardwareAcceleration(e),
                    ...t,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: p.intl.string(p.t.uDP3Ky)
                    })
                })
            );
        }, []);
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: p.intl.string(p.t['8/udY2']),
        children: [
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, i.jsx)(l.j7V, {
                    value: n,
                    onChange: g.Sb.updateSetting,
                    note: p.intl.format(p.t['CY6q/f'], { apiDocsUrl: _.EYA.API_DOCS }),
                    children: p.intl.string(p.t.ObIb1d)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(l.j7V, {
                    value: e,
                    onChange: I,
                    note: p.intl.string(p.t.Afc7l5),
                    children: p.intl.string(p.t['eOC/Fx'])
                })
            }),
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, i.jsx)(l.j7V, {
                    value: !t,
                    onChange: f,
                    note: p.intl.string(p.t['8mYp39']),
                    children: p.intl.string(p.t.fi3UQE)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, i.jsx)(l.j7V, {
                    value: null != E,
                    note: p.intl.string(p.t['52hMnJ']),
                    onChange: T,
                    children: p.intl.string(p.t.erOqlp)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, i.jsx)(l.j7V, {
                    value: C,
                    note: p.intl.string(p.t['B/qU4O']),
                    onChange: N,
                    children: p.intl.string(p.t.qDZryM)
                })
            })
        ]
    });
}
