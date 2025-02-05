n.d(t, { default: () => b });
var l = n(200651);
n(192379);
var i = n(990547),
    r = n(442837),
    a = n(46973),
    s = n(481060),
    o = n(846027),
    u = n(410575),
    c = n(906732),
    d = n(213609),
    m = n(821564),
    f = n(453925),
    h = n(632304),
    p = n(131951),
    v = n(358085),
    g = n(947150),
    E = n(488021),
    Z = n(822556),
    x = n(981631),
    S = n(388032),
    C = n(126741);
function b(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: b = !1, renderInputModes: I = !1, renderInputVolume: _ = !1, renderOutputVolume: N = !1, renderDeafen: R = !1, simplified: y = !1, onSelect: T } = e,
        { analyticsLocations: j } = (0, c.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: j }
    });
    let w = (0, Z.Z)(),
        A = (0, g.Z)(j, y),
        O = (0, E.Z)(j, y),
        P = (0, m.Z)(j),
        k = (0, f.Z)(j),
        M = (0, h.Z)(j),
        D = a.Yn.DEFAULT,
        L = p.Z.isSelfDeaf(D),
        F = (0, r.e7)([p.Z], () => p.Z.getMode()),
        U = F === x.pM4.VOICE_ACTIVITY ? x.pM4.PUSH_TO_TALK : x.pM4.VOICE_ACTIVITY;
    return (0, l.jsx)(u.Z, {
        object: x.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(s.v2r, {
            onSelect: T,
            className: C.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': S.intl.string(S.t.ZR1Ss7),
            children: [
                b ? A : null,
                n ? O : null,
                !y && I
                    ? (0, l.jsx)(s.kSQ, {
                          label: S.intl.string(S.t['pS+K2N']),
                          children: P
                      })
                    : null,
                (0, l.jsxs)(s.kSQ, {
                    children: [
                        _ ? k : null,
                        N ? M : null,
                        y ? (0, l.jsx)(s.Clw, {}) : null,
                        y && R
                            ? (0, l.jsx)(
                                  s.S89,
                                  {
                                      id: 'deafen',
                                      label: S.intl.string(S.t.wjcRFR),
                                      action: () =>
                                          o.Z.toggleSelfDeaf({
                                              context: D,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: L
                                  },
                                  'self-deafen'
                              )
                            : null,
                        y && b && v.isPlatformEmbedded
                            ? (0, l.jsx)(s.S89, {
                                  checked: F === x.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: S.intl.string(S.t.Q8gkVF),
                                  action: () => o.Z.setMode(U, void 0, void 0, { analyticsLocations: j })
                              })
                            : null,
                        w
                    ]
                })
            ]
        })
    });
}
