n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(401430),
    o = n(153867),
    c = n(921801),
    d = n(695103),
    u = n(998502),
    h = n(740492),
    m = n(695346),
    g = n(399970),
    x = n(726985),
    _ = n(981631),
    p = n(388032);
function E() {
    let [e] = s.useState(() => u.ZP.getEnableHardwareAcceleration()),
        t = m.bm.useSetting(),
        n = m.Sb.useSetting(),
        E = (0, l.e7)([d.Z], () => d.Z.testModeApplicationId),
        C = (0, l.e7)([h.ZP], () => h.ZP.showPlayAgain),
        N = s.useCallback((e) => {
            m.bm.updateSetting(!e);
        }, []),
        f = s.useCallback((e) => {
            e ? (0, r.h7j)((e) => (0, i.jsx)(g.Z, { ...e })) : a.mc();
        }, []),
        I = s.useCallback((e) => {
            o.ZP.updatedUnsyncedSettings({ showPlayAgain: e });
        }, []),
        T = s.useCallback((e) => {
            (0, r.h7j)((t) =>
                (0, i.jsx)(r.ConfirmModal, {
                    header: p.intl.string(p.t.aqpAvr),
                    confirmText: p.intl.string(p.t.BddRzc),
                    cancelText: p.intl.string(p.t['ETE/oK']),
                    onConfirm: () => u.ZP.setEnableHardwareAcceleration(e),
                    ...t,
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: p.intl.string(p.t.uDP3Ky)
                    })
                })
            );
        }, []);
    return (0, i.jsxs)(r.hjN, {
        tag: r.RB0.H1,
        title: p.intl.string(p.t['8/udY2']),
        children: [
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, i.jsx)(r.j7V, {
                    value: n,
                    onChange: m.Sb.updateSetting,
                    note: p.intl.format(p.t['CY6q/f'], { apiDocsUrl: _.EYA.API_DOCS }),
                    children: p.intl.string(p.t.ObIb1d)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(r.j7V, {
                    value: e,
                    onChange: T,
                    note: p.intl.string(p.t.Afc7l5),
                    children: p.intl.string(p.t['eOC/Fx'])
                })
            }),
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, i.jsx)(r.j7V, {
                    value: !t,
                    onChange: N,
                    note: p.intl.string(p.t['8mYp39']),
                    children: p.intl.string(p.t.fi3UQE)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, i.jsx)(r.j7V, {
                    value: null != E,
                    note: p.intl.string(p.t['52hMnJ']),
                    onChange: f,
                    children: p.intl.string(p.t.erOqlp)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: x.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, i.jsx)(r.j7V, {
                    value: C,
                    note: p.intl.string(p.t['B/qU4O']),
                    onChange: I,
                    children: p.intl.string(p.t.qDZryM)
                })
            })
        ]
    });
}
