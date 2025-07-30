n.d(t, { default: () => x });
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(442837),
    a = n(46973),
    o = n(481060),
    s = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    f = n(650958),
    p = n(821564),
    m = n(453925),
    g = n(967003),
    h = n(632304),
    b = n(131951),
    v = n(358085),
    _ = n(822556),
    y = n(981631),
    O = n(345655),
    S = n(65154),
    I = n(388032),
    j = n(292538);
function x(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: x = !1, renderInputProfiles: E = !1, renderInputModes: P = !1, renderInputVolume: C = !1, renderOutputVolume: T = !1, renderDeafen: N = !1, minimal: A = !1, onSelect: w, appContext: D, onInteraction: Z } = e,
        { analyticsLocations: L } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: L }
    });
    let M = (0, _.Z)(D),
        k = (0, f.M)({
            deviceType: S.h7.AUDIO_INPUT,
            analyticsLocations: L,
            asSubmenu: A
        }),
        U = (0, f.M)({
            deviceType: S.h7.AUDIO_OUTPUT,
            analyticsLocations: L,
            asSubmenu: A
        }),
        R = (0, l.e7)([b.Z], () => b.Z.getActiveInputProfile()),
        V = (0, g.Z)(L),
        F = (0, p.Z)(L),
        G = (0, m.Z)(L),
        B = (0, h.Z)(L),
        W = a.Yn.DEFAULT,
        H = b.Z.isSelfDeaf(W),
        Y = (0, l.e7)([b.Z], () => b.Z.getMode()),
        z = Y === y.pM4.VOICE_ACTIVITY ? y.pM4.PUSH_TO_TALK : y.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: y.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: w,
            onInteraction: Z,
            className: j.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': I.intl.string(I.t.ZR1Ss7),
            children: [
                x && k,
                n && U,
                E && V,
                !A && P && R !== O._.STUDIO
                    ? (0, r.jsx)(o.kSQ, {
                          label: I.intl.string(I.t['pS+K2N']),
                          children: F
                      })
                    : null,
                (0, r.jsxs)(o.kSQ, {
                    children: [
                        C ? G : null,
                        T ? B : null,
                        A ? (0, r.jsx)(o.Clw, {}) : null,
                        A && N
                            ? (0, r.jsx)(
                                  o.S89,
                                  {
                                      id: 'deafen',
                                      label: I.intl.string(I.t.wjcRFR),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: W,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: H
                                  },
                                  'self-deafen'
                              )
                            : null,
                        A && x && v.isPlatformEmbedded
                            ? (0, r.jsx)(o.S89, {
                                  checked: Y === y.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: I.intl.string(I.t.Q8gkVF),
                                  action: () => s.Z.setMode(z, void 0, void 0, { analyticsLocations: L }),
                                  disabled: R === O._.STUDIO
                              })
                            : null,
                        M
                    ]
                })
            ]
        })
    });
}
