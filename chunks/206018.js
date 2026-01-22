r.d(t, {
    A: () => C,
});
var n = r(627968);
r(64700);
var o = r(110259),
    u = r(311907),
    i = r(205693),
    l = r(397927),
    a = r(827343),
    c = r(820284),
    s = r(688810),
    b = r(139286),
    p = r(48435),
    O = r(485873),
    f = r(24933),
    y = r(964592),
    d = r(430452),
    m = r(383501),
    g = r(532624),
    v = r(723702),
    j = r(17143),
    P = r(819027),
    A = r(652215),
    h = r(509381),
    w = r(731854),
    _ = r(985018),
    S = r(220636);

function C(e) {
    let {
            appContext: t,
            onInteraction: r,
            onSelect: C,
            onClose: D,
            maybeRenderPTTCheckbox: k = !1,
            renderDeafenCheckbox: T = !1,
            renderInputProfiles: I = !1,
            renderOutputDevices: E = !1,
            renderOutputVolume: V = !1,
            renderInputDevices: M = !1,
            renderInputVolume: U = !1,
            maybeRenderInputMeter: x = !1,
            renderSettingsButton: N = !1,
        } = e,
        { analyticsLocations: L } = (0, s.Ay)();
    (0, b.A)({
        type: o.ImpressionTypes.MENU,
        name: o.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: L,
        },
    });
    let R = (0, P.A)(t),
        B = (0, p.H)({
            deviceType: w.oh.AUDIO_INPUT,
            analyticsLocations: L,
            asSubmenu: !0,
        }),
        F = (0, p.H)({
            deviceType: w.oh.AUDIO_OUTPUT,
            analyticsLocations: L,
            asSubmenu: !0,
        }),
        K = (0, u.bG)([d.A], () => d.A.getActiveInputProfile()),
        X = (0, f.A)(L),
        H = (0, O.A)(L),
        G = (0, y.A)(L),
        J = i.x.DEFAULT,
        Y = d.A.isSelfDeaf(J),
        Z = (0, u.bG)([d.A], () => d.A.getMode()),
        q = Z === A.TBI.VOICE_ACTIVITY ? A.TBI.PUSH_TO_TALK : A.TBI.VOICE_ACTIVITY,
        Q = (0, u.bG)([d.A, g.Ay], () => {
            var e;
            let t = (null == (e = d.A.getModeOptions().shortcut) ? void 0 : e.length) > 0,
                r = null != g.Ay.getKeybindForAction(A.hCu.PUSH_TO_TALK, !1, !0),
                n = null != g.Ay.getKeybindForAction(A.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return t || r || n;
        }),
        W = (0, u.bG)([m.A], () => null != m.A.getChannelId());
    return (0, n.jsx)(c.A, {
        object: A.ZSU.CONTEXT_MENU,
        children: (0, n.jsxs)(l.W1t, {
            onSelect: C,
            onInteraction: r,
            onClose: D,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": _.intl.string(_.t.ZR1Ss6),
            className: S.MK,
            children: [
                (0, n.jsxs)(l.rXV, {
                    children: [M && B, I && X, E && F],
                }),
                (0, n.jsxs)(l.rXV, {
                    children: [
                        U && H,
                        x &&
                            W &&
                            (0, n.jsx)(l.aK1, {
                                id: "input-device-meter",
                                control: () =>
                                    (0, n.jsx)(j.A, {
                                        notchBackground: j.V.BLACK,
                                        location: {
                                            section: A.JJy.CONTEXT_MENU,
                                        },
                                        meterOnly: !0,
                                        containerClassName: S.Eq,
                                        notchClassName: S.CO,
                                    }),
                            }),
                        V && G,
                    ],
                }),
                (0, n.jsxs)(l.rXV, {
                    children: [
                        k && v.isPlatformEmbedded && Q
                            ? (0, n.jsx)(l.sLh, {
                                  checked: Z === A.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: _.intl.string(_.t.Q8gkVL),
                                  action: () =>
                                      a.A.setMode(q, void 0, void 0, {
                                          analyticsLocations: L,
                                      }),
                                  disabled: K === h.my.STUDIO,
                              })
                            : null,
                        T &&
                            (0, n.jsx)(
                                l.sLh,
                                {
                                    id: "deafen",
                                    label: _.intl.string(_.t.wjcRFX),
                                    action: () =>
                                        a.A.toggleSelfDeaf({
                                            context: J,
                                            location: "AudioDeviceMenu",
                                        }),
                                    checked: Y,
                                },
                                "self-deafen",
                            ),
                        N && R,
                    ],
                }),
            ],
        }),
    });
}
