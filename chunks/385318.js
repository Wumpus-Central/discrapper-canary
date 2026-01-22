n.d(t, {
    default: () => S,
});
var l = n(627968);
n(64700);
var r = n(110259),
    i = n(311907),
    a = n(205693),
    s = n(397927),
    o = n(827343),
    c = n(820284),
    u = n(688810),
    d = n(139286),
    f = n(48435),
    p = n(813977),
    b = n(485873),
    g = n(24933),
    m = n(964592),
    h = n(430452),
    A = n(723702),
    y = n(819027),
    _ = n(652215),
    E = n(509381),
    v = n(731854),
    O = n(985018),
    x = n(220636);

function S(e) {
    let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: S = !1,
            renderInputProfiles: N = !1,
            renderInputModes: C = !1,
            renderInputVolume: j = !1,
            renderOutputVolume: T = !1,
            renderDeafen: I = !1,
            minimal: w = !1,
            onSelect: R,
            appContext: P,
            onInteraction: D,
        } = e,
        { analyticsLocations: k } = (0, u.Ay)();
    (0, d.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: k,
        },
    });
    let L = (0, y.A)(P),
        M = (0, f.H)({
            deviceType: v.oh.AUDIO_INPUT,
            analyticsLocations: k,
            asSubmenu: w,
        }),
        U = (0, f.H)({
            deviceType: v.oh.AUDIO_OUTPUT,
            analyticsLocations: k,
            asSubmenu: w,
        }),
        V = (0, i.bG)([h.A], () => h.A.getActiveInputProfile()),
        F = (0, g.A)(k),
        G = (0, p.A)(k),
        H = (0, b.A)(k),
        B = (0, m.A)(k),
        Y = a.x.DEFAULT,
        W = h.A.isSelfDeaf(Y),
        z = (0, i.bG)([h.A], () => h.A.getMode()),
        K = z === _.TBI.VOICE_ACTIVITY ? _.TBI.PUSH_TO_TALK : _.TBI.VOICE_ACTIVITY;
    return (0, l.jsx)(c.A, {
        object: _.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(s.W1t, {
            onSelect: R,
            onInteraction: D,
            className: x.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": O.intl.string(O.t.ZR1Ss6),
            children: [
                S && M,
                n && U,
                N && F,
                !w && C && V !== E.my.STUDIO
                    ? (0, l.jsx)(s.rXV, {
                          label: O.intl.string(O.t["pS+K2L"]),
                          children: G,
                      })
                    : null,
                (0, l.jsxs)(s.rXV, {
                    children: [
                        j ? H : null,
                        T ? B : null,
                        w ? (0, l.jsx)(s.bXX, {}) : null,
                        w && I
                            ? (0, l.jsx)(
                                  s.sLh,
                                  {
                                      id: "deafen",
                                      label: O.intl.string(O.t.wjcRFX),
                                      action: () =>
                                          o.A.toggleSelfDeaf({
                                              context: Y,
                                              location: "AudioDeviceMenu",
                                          }),
                                      checked: W,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        w && S && A.isPlatformEmbedded
                            ? (0, l.jsx)(s.sLh, {
                                  checked: z === _.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: O.intl.string(O.t.Q8gkVL),
                                  action: () =>
                                      o.A.setMode(K, void 0, void 0, {
                                          analyticsLocations: k,
                                      }),
                                  disabled: V === E.my.STUDIO,
                              })
                            : null,
                        L,
                    ],
                }),
            ],
        }),
    });
}
