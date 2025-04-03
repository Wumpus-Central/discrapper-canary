n.d(t, { default: () => P });
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
    y = n(488021),
    h = n(822556),
    v = n(981631),
    j = n(388032),
    S = n(292538);
function P(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: P = !1, renderInputModes: N = !1, renderInputVolume: I = !1, renderOutputVolume: E = !1, renderDeafen: Z = !1, simplified: x = !1, onSelect: w, appContext: C, onInteraction: T } = e,
        { analyticsLocations: A } = (0, u.ZP)();
    (0, d.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: A }
    });
    let D = (0, h.Z)(C),
        _ = (0, O.Z)(A, x),
        k = (0, y.Z)(A, x),
        L = (0, p.Z)(A),
        W = (0, f.Z)(A),
        M = (0, m.Z)(A),
        U = o.Yn.DEFAULT,
        R = g.Z.isSelfDeaf(U),
        V = (0, i.e7)([g.Z], () => g.Z.getMode()),
        F = V === v.pM4.VOICE_ACTIVITY ? v.pM4.PUSH_TO_TALK : v.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: v.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: w,
            onInteraction: T,
            className: S.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': j.NW.string(j.t.ZR1Ss7),
            children: [
                P ? _ : null,
                n ? k : null,
                !x && N
                    ? (0, r.jsx)(a.kSQ, {
                          label: j.NW.string(j.t['pS+K2N']),
                          children: L
                      })
                    : null,
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        I ? W : null,
                        E ? M : null,
                        x ? (0, r.jsx)(a.Clw, {}) : null,
                        x && Z
                            ? (0, r.jsx)(
                                  a.S89,
                                  {
                                      id: 'deafen',
                                      label: j.NW.string(j.t.wjcRFR),
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
                        x && P && b.isPlatformEmbedded
                            ? (0, r.jsx)(a.S89, {
                                  checked: V === v.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: j.NW.string(j.t.Q8gkVF),
                                  action: () => s.Z.setMode(F, void 0, void 0, { analyticsLocations: A })
                              })
                            : null,
                        D
                    ]
                })
            ]
        })
    });
}
