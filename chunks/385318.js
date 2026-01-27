n.d(t, {
    default: () => S,
});
var r = n(627968);
n(64700);
var l = n(110259),
    i = n(311907),
    a = n(205693),
    o = n(397927),
    s = n(827343),
    c = n(820284),
    u = n(688810),
    d = n(139286),
    f = n(48435),
    p = n(813977),
    g = n(485873),
    m = n(24933),
    _ = n(964592),
    h = n(430452),
    y = n(723702),
    A = n(819027),
    b = n(652215),
    E = n(509381),
    v = n(731854),
    O = n(985018),
    x = n(220636);

function S(e) {
    let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: S = !1,
            renderInputProfiles: C = !1,
            renderInputModes: N = !1,
            renderInputVolume: I = !1,
            renderOutputVolume: j = !1,
            renderDeafen: T = !1,
            minimal: w = !1,
            onSelect: P,
            appContext: R,
            onInteraction: D,
        } = e,
        { analyticsLocations: k } = (0, u.Ay)();
    (0, d.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: k,
        },
    });
    let L = (0, A.A)(R),
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
        F = (0, m.A)(k),
        G = (0, p.A)(k),
        B = (0, g.A)(k),
        H = (0, _.A)(k),
        W = a.x.DEFAULT,
        z = h.A.isSelfDeaf(W),
        Y = (0, i.bG)([h.A], () => h.A.getMode()),
        K = Y === b.TBI.VOICE_ACTIVITY ? b.TBI.PUSH_TO_TALK : b.TBI.VOICE_ACTIVITY;
    return (0, r.jsx)(c.A, {
        object: b.ZSU.CONTEXT_MENU,
        children: (0, r.jsxs)(o.W1t, {
            "data-menu-migrated": !0,
            onSelect: P,
            onInteraction: D,
            className: x.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": O.intl.string(O.t.ZR1Ss6),
            children: [
                S && M,
                n && U,
                C && F,
                !w && N && V !== E.my.STUDIO
                    ? (0, r.jsx)(o.rXV, {
                          label: O.intl.string(O.t["pS+K2L"]),
                          children: G,
                      })
                    : null,
                (0, r.jsxs)(o.rXV, {
                    children: [
                        I ? B : null,
                        j ? H : null,
                        w ? (0, r.jsx)(o.bXX, {}) : null,
                        w && T
                            ? (0, r.jsx)(
                                  o.sLh,
                                  {
                                      id: "deafen",
                                      label: O.intl.string(O.t.wjcRFX),
                                      action: () =>
                                          s.A.toggleSelfDeaf({
                                              context: W,
                                              location: "AudioDeviceMenu",
                                          }),
                                      checked: z,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        w && S && y.isPlatformEmbedded
                            ? (0, r.jsx)(o.sLh, {
                                  checked: Y === b.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: O.intl.string(O.t.Q8gkVL),
                                  action: () =>
                                      s.A.setMode(K, void 0, void 0, {
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
