n.d(t, { default: () => C });
var i = n(200651);
n(192379);
var l = n(990547),
    a = n(442837),
    r = n(46973),
    s = n(481060),
    o = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    m = n(821564),
    f = n(453925),
    p = n(632304),
    h = n(131951),
    g = n(358085),
    v = n(947150),
    _ = n(488021),
    I = n(822556),
    S = n(981631),
    x = n(388032),
    E = n(126741);
function C(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: C = !1, renderInputModes: Z = !1, renderInputVolume: y = !1, renderOutputVolume: b = !1, renderDeafen: N = !1, simplified: T = !1, onSelect: A } = e,
        { analyticsLocations: w } = (0, u.ZP)();
    (0, d.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: w }
    });
    let P = (0, I.Z)(),
        j = (0, v.Z)(w, T),
        R = (0, _.Z)(w, T),
        k = (0, m.Z)(w),
        L = (0, f.Z)(w),
        O = (0, p.Z)(w),
        M = r.Yn.DEFAULT,
        D = h.Z.isSelfDeaf(M),
        U = (0, a.e7)([h.Z], () => h.Z.getMode()),
        F = U === S.pM4.VOICE_ACTIVITY ? S.pM4.PUSH_TO_TALK : S.pM4.VOICE_ACTIVITY;
    return (0, i.jsx)(c.Z, {
        object: S.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.v2r, {
            onSelect: A,
            className: E.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': x.intl.string(x.t.ZR1Ss7),
            children: [
                C ? j : null,
                n ? R : null,
                !T && Z
                    ? (0, i.jsx)(s.kSQ, {
                          label: x.intl.string(x.t['pS+K2N']),
                          children: k
                      })
                    : null,
                (0, i.jsxs)(s.kSQ, {
                    children: [
                        y ? L : null,
                        b ? O : null,
                        T ? (0, i.jsx)(s.Clw, {}) : null,
                        T && N
                            ? (0, i.jsx)(
                                  s.S89,
                                  {
                                      id: 'deafen',
                                      label: x.intl.string(x.t.wjcRFR),
                                      action: () =>
                                          o.Z.toggleSelfDeaf({
                                              context: M,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: D
                                  },
                                  'self-deafen'
                              )
                            : null,
                        T && C && g.isPlatformEmbedded
                            ? (0, i.jsx)(s.S89, {
                                  checked: U === S.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: x.intl.string(x.t.Q8gkVF),
                                  action: () => o.Z.setMode(F, void 0, void 0, { analyticsLocations: w })
                              })
                            : null,
                        P
                    ]
                })
            ]
        })
    });
}
