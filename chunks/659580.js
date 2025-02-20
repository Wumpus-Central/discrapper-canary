n.d(t, { default: () => N });
var r = n(200651);
n(192379);
var l = n(990547),
    i = n(442837),
    a = n(46973),
    o = n(481060),
    s = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    f = n(821564),
    p = n(453925),
    m = n(632304),
    g = n(131951),
    y = n(358085),
    b = n(947150),
    h = n(488021),
    v = n(822556),
    O = n(981631),
    j = n(388032),
    S = n(694189);
function N(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: N = !1, renderInputModes: P = !1, renderInputVolume: I = !1, renderOutputVolume: x = !1, renderDeafen: E = !1, simplified: w = !1, onSelect: Z, appContext: T } = e,
        { analyticsLocations: A } = (0, u.ZP)();
    (0, d.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: A }
    });
    let C = (0, v.Z)(T),
        D = (0, b.Z)(A, w),
        _ = (0, h.Z)(A, w),
        k = (0, f.Z)(A),
        W = (0, p.Z)(A),
        R = (0, m.Z)(A),
        M = a.Yn.DEFAULT,
        L = g.Z.isSelfDeaf(M),
        U = (0, i.e7)([g.Z], () => g.Z.getMode()),
        G = U === O.pM4.VOICE_ACTIVITY ? O.pM4.PUSH_TO_TALK : O.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: O.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: Z,
            className: S.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': j.NW.string(j.t.ZR1Ss7),
            children: [
                N ? D : null,
                n ? _ : null,
                !w && P
                    ? (0, r.jsx)(o.kSQ, {
                          label: j.NW.string(j.t['pS+K2N']),
                          children: k
                      })
                    : null,
                (0, r.jsxs)(o.kSQ, {
                    children: [
                        I ? W : null,
                        x ? R : null,
                        w ? (0, r.jsx)(o.Clw, {}) : null,
                        w && E
                            ? (0, r.jsx)(
                                  o.S89,
                                  {
                                      id: 'deafen',
                                      label: j.NW.string(j.t.wjcRFR),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: M,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: L
                                  },
                                  'self-deafen'
                              )
                            : null,
                        w && N && y.isPlatformEmbedded
                            ? (0, r.jsx)(o.S89, {
                                  checked: U === O.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: j.NW.string(j.t.Q8gkVF),
                                  action: () => s.Z.setMode(G, void 0, void 0, { analyticsLocations: A })
                              })
                            : null,
                        C
                    ]
                })
            ]
        })
    });
}
