n.d(t, { default: () => w });
var r = n(54381);
n(473749);
var i = n(990547),
    o = n(442837),
    l = n(46973),
    a = n(481060),
    s = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    p = n(650958),
    m = n(821564),
    f = n(453925),
    b = n(967003),
    g = n(632304),
    v = n(131951),
    y = n(358085),
    j = n(822556),
    O = n(981631),
    h = n(345655),
    x = n(65154),
    _ = n(388032),
    P = n(895634);
function w(e) {
    let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: w = !1,
            renderInputProfiles: C = !1,
            renderInputModes: E = !1,
            renderInputVolume: I = !1,
            renderOutputVolume: T = !1,
            renderDeafen: S = !1,
            minimal: N = !1,
            onSelect: Z,
            appContext: D,
            onInteraction: k,
        } = e,
        { analyticsLocations: M } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: M },
    });
    let A = (0, j.Z)(D),
        R = (0, p.M)({
            deviceType: x.h7.AUDIO_INPUT,
            analyticsLocations: M,
            asSubmenu: N,
        }),
        L = (0, p.M)({
            deviceType: x.h7.AUDIO_OUTPUT,
            analyticsLocations: M,
            asSubmenu: N,
        }),
        V = (0, o.e7)([v.Z], () => v.Z.getActiveInputProfile()),
        F = (0, b.Z)(M),
        U = (0, m.Z)(M),
        Y = (0, f.Z)(M),
        H = (0, g.Z)(M),
        z = l.Yn.DEFAULT,
        B = v.Z.isSelfDeaf(z),
        q = (0, o.e7)([v.Z], () => v.Z.getMode()),
        W = q === O.pM4.VOICE_ACTIVITY ? O.pM4.PUSH_TO_TALK : O.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: O.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: Z,
            onInteraction: k,
            className: P.menu,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": _.intl.string(_.t.ZR1Ss6),
            children: [
                w && R,
                n && L,
                C && F,
                !N && E && V !== h._.STUDIO
                    ? (0, r.jsx)(a.kSQ, {
                          label: _.intl.string(_.t["pS+K2L"]),
                          children: U,
                      })
                    : null,
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        I ? Y : null,
                        T ? H : null,
                        N ? (0, r.jsx)(a.Clw, {}) : null,
                        N && S
                            ? (0, r.jsx)(
                                  a.S89,
                                  {
                                      id: "deafen",
                                      label: _.intl.string(_.t.wjcRFX),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: z,
                                              location: "AudioDeviceMenu",
                                          }),
                                      checked: B,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        N && w && y.isPlatformEmbedded
                            ? (0, r.jsx)(a.S89, {
                                  checked: q === O.pM4.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: _.intl.string(_.t.Q8gkVL),
                                  action: () => s.Z.setMode(W, void 0, void 0, { analyticsLocations: M }),
                                  disabled: V === h._.STUDIO,
                              })
                            : null,
                        A,
                    ],
                }),
            ],
        }),
    });
}
