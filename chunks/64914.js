n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(401430),
    o = n(153867),
    c = n(921801),
    d = n(695103),
    u = n(998502),
    m = n(740492),
    g = n(695346),
    h = n(399970),
    p = n(726985),
    x = n(981631),
    f = n(388032);
function E() {
    let [e] = r.useState(() => u.ZP.getEnableHardwareAcceleration()),
        t = g.bm.useSetting(),
        n = g.Sb.useSetting(),
        E = (0, s.e7)([d.Z], () => d.Z.testModeApplicationId),
        _ = (0, s.e7)([m.ZP], () => m.ZP.showPlayAgain),
        C = r.useCallback((e) => {
            g.bm.updateSetting(!e);
        }, []),
        T = r.useCallback((e) => {
            e ? (0, a.openModal)((e) => (0, i.jsx)(h.Z, { ...e })) : l.mc();
        }, []),
        S = r.useCallback((e) => {
            o.ZP.updatedUnsyncedSettings({ showPlayAgain: e });
        }, []),
        b = r.useCallback((e) => {
            (0, a.openModal)((t) =>
                (0, i.jsx)(a.ConfirmModal, {
                    header: f.intl.string(f.t.aqpAvr),
                    confirmText: f.intl.string(f.t.BddRzc),
                    cancelText: f.intl.string(f.t['ETE/oK']),
                    onConfirm: () => u.ZP.setEnableHardwareAcceleration(e),
                    ...t,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        children: f.intl.string(f.t.uDP3Ky)
                    })
                })
            );
        }, []);
    return (0, i.jsxs)(a.FormSection, {
        tag: a.FormTitleTags.H1,
        title: f.intl.string(f.t['8/udY2']),
        children: [
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, i.jsx)(a.FormSwitch, {
                    value: n,
                    onChange: g.Sb.updateSetting,
                    note: f.intl.format(f.t['CY6q/f'], { apiDocsUrl: x.EYA.API_DOCS }),
                    children: f.intl.string(f.t.ObIb1d)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(a.FormSwitch, {
                    value: e,
                    onChange: b,
                    note: f.intl.string(f.t.Afc7l5),
                    children: f.intl.string(f.t['eOC/Fx'])
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, i.jsx)(a.FormSwitch, {
                    value: !t,
                    onChange: C,
                    note: f.intl.string(f.t['8mYp39']),
                    children: f.intl.string(f.t.fi3UQE)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, i.jsx)(a.FormSwitch, {
                    value: null != E,
                    note: f.intl.string(f.t['52hMnJ']),
                    onChange: T,
                    children: f.intl.string(f.t.erOqlp)
                })
            }),
            (0, i.jsx)(c.F, {
                setting: p.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
                children: (0, i.jsx)(a.FormSwitch, {
                    value: _,
                    note: f.intl.string(f.t['B/qU4O']),
                    onChange: S,
                    children: f.intl.string(f.t.qDZryM)
                })
            })
        ]
    });
}
