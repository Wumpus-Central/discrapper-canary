n.d(t, { default: () => N });
var r = n(200651);
n(192379);
var l = n(990547),
    i = n(442837),
    o = n(46973),
    a = n(481060),
    s = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    p = n(821564),
    f = n(453925),
    m = n(632304),
    g = n(131951),
    b = n(358085),
    O = n(947150),
    h = n(488021),
    y = n(822556),
    v = n(981631),
    S = n(388032),
    j = n(292538);
function N(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: N = !1, renderInputModes: P = !1, renderInputVolume: E = !1, renderOutputVolume: Z = !1, renderDeafen: I = !1, simplified: x = !1, onSelect: C, appContext: T, onInteraction: A } = e,
        { analyticsLocations: w } = (0, u.ZP)();
    (0, d.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: w }
    });
    let D = (0, y.Z)(T),
        _ = (0, O.Z)(w, x),
        L = (0, h.Z)(w, x),
        W = (0, p.Z)(w),
        k = (0, f.Z)(w),
        M = (0, m.Z)(w),
        U = o.Yn.DEFAULT,
        R = g.Z.isSelfDeaf(U),
        V = (0, i.e7)([g.Z], () => g.Z.getMode()),
        F = V === v.pM4.VOICE_ACTIVITY ? v.pM4.PUSH_TO_TALK : v.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: v.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: C,
            onInteraction: A,
            className: j.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': S.NW.string(S.t.ZR1Ss7),
            children: [
                N ? _ : null,
                n ? L : null,
                !x && P
                    ? (0, r.jsx)(a.kSQ, {
                          label: S.NW.string(S.t['pS+K2N']),
                          children: W
                      })
                    : null,
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        E ? k : null,
                        Z ? M : null,
                        x ? (0, r.jsx)(a.Clw, {}) : null,
                        x && I
                            ? (0, r.jsx)(
                                  a.S89,
                                  {
                                      id: 'deafen',
                                      label: S.NW.string(S.t.wjcRFR),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: U,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: R
                                  },
                                  'self-deafen'
                              )
                            : null,
                        x && N && b.isPlatformEmbedded
                            ? (0, r.jsx)(a.S89, {
                                  checked: V === v.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: S.NW.string(S.t.Q8gkVF),
                                  action: () => s.Z.setMode(F, void 0, void 0, { analyticsLocations: w })
                              })
                            : null,
                        D
                    ]
                })
            ]
        })
    });
}
