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
    h = n(488021),
    y = n(822556),
    v = n(981631),
    S = n(388032),
    j = n(292538);
function P(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: P = !1, renderInputModes: E = !1, renderInputVolume: I = !1, renderOutputVolume: Z = !1, renderDeafen: x = !1, simplified: C = !1, onSelect: T, appContext: N, onInteraction: A } = e,
        { analyticsLocations: w } = (0, u.ZP)();
    (0, d.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: w }
    });
    let D = (0, y.Z)(N),
        _ = (0, O.Z)(w, C),
        L = (0, h.Z)(w, C),
        k = (0, p.Z)(w),
        M = (0, f.Z)(w),
        U = (0, m.Z)(w),
        R = o.Yn.DEFAULT,
        V = g.Z.isSelfDeaf(R),
        F = (0, i.e7)([g.Z], () => g.Z.getMode()),
        Y = F === v.pM4.VOICE_ACTIVITY ? v.pM4.PUSH_TO_TALK : v.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: v.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: T,
            onInteraction: A,
            className: j.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': S.intl.string(S.t.ZR1Ss7),
            children: [
                P ? _ : null,
                n ? L : null,
                !C && E
                    ? (0, r.jsx)(a.kSQ, {
                          label: S.intl.string(S.t['pS+K2N']),
                          children: k
                      })
                    : null,
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        I ? M : null,
                        Z ? U : null,
                        C ? (0, r.jsx)(a.Clw, {}) : null,
                        C && x
                            ? (0, r.jsx)(
                                  a.S89,
                                  {
                                      id: 'deafen',
                                      label: S.intl.string(S.t.wjcRFR),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: R,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: V
                                  },
                                  'self-deafen'
                              )
                            : null,
                        C && P && b.isPlatformEmbedded
                            ? (0, r.jsx)(a.S89, {
                                  checked: F === v.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: S.intl.string(S.t.Q8gkVF),
                                  action: () => s.Z.setMode(Y, void 0, void 0, { analyticsLocations: w })
                              })
                            : null,
                        D
                    ]
                })
            ]
        })
    });
}
