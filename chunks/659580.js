n.d(t, { default: () => I });
var r = n(951288);
n(647438);
var i = n(990547),
    l = n(442837),
    a = n(46973),
    o = n(481060),
    s = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    p = n(650958),
    f = n(821564),
    m = n(453925),
    g = n(967003),
    v = n(632304),
    _ = n(131951),
    b = n(358085),
    h = n(822556),
    y = n(981631),
    O = n(345655),
    j = n(65154),
    S = n(388032),
    x = n(895634);
function I(e) {
    let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: I = !1,
            renderInputProfiles: P = !1,
            renderInputModes: C = !1,
            renderInputVolume: E = !1,
            renderOutputVolume: w = !1,
            renderDeafen: T = !1,
            minimal: N = !1,
            onSelect: Z,
            appContext: A,
            onInteraction: D,
        } = e,
        { analyticsLocations: k } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: k },
    });
    let L = (0, h.Z)(A),
        M = (0, p.M)({
            deviceType: j.h7.AUDIO_INPUT,
            analyticsLocations: k,
            asSubmenu: N,
        }),
        U = (0, p.M)({
            deviceType: j.h7.AUDIO_OUTPUT,
            analyticsLocations: k,
            asSubmenu: N,
        }),
        R = (0, l.e7)([_.Z], () => _.Z.getActiveInputProfile()),
        V = (0, g.Z)(k),
        F = (0, f.Z)(k),
        B = (0, m.Z)(k),
        W = (0, v.Z)(k),
        Y = a.Yn.DEFAULT,
        H = _.Z.isSelfDeaf(Y),
        G = (0, l.e7)([_.Z], () => _.Z.getMode()),
        z = G === y.pM4.VOICE_ACTIVITY ? y.pM4.PUSH_TO_TALK : y.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: y.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: Z,
            onInteraction: D,
            className: x.menu,
            onClose: t,
            navId: "audio-device-context",
            "aria-label": S.intl.string(S.t.ZR1Ss7),
            children: [
                I && M,
                n && U,
                P && V,
                !N && C && R !== O._.STUDIO
                    ? (0, r.jsx)(o.kSQ, {
                          label: S.intl.string(S.t["pS+K2N"]),
                          children: F,
                      })
                    : null,
                (0, r.jsxs)(o.kSQ, {
                    children: [
                        E ? B : null,
                        w ? W : null,
                        N ? (0, r.jsx)(o.Clw, {}) : null,
                        N && T
                            ? (0, r.jsx)(
                                  o.S89,
                                  {
                                      id: "deafen",
                                      label: S.intl.string(S.t.wjcRFR),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: Y,
                                              location: "AudioDeviceMenu",
                                          }),
                                      checked: H,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        N && I && b.isPlatformEmbedded
                            ? (0, r.jsx)(o.S89, {
                                  checked: G === y.pM4.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: S.intl.string(S.t.Q8gkVF),
                                  action: () => s.Z.setMode(z, void 0, void 0, { analyticsLocations: k }),
                                  disabled: R === O._.STUDIO,
                              })
                            : null,
                        L,
                    ],
                }),
            ],
        }),
    });
}
