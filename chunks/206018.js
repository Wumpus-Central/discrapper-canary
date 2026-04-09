n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(311907),
    a = n(205693),
    r = n(397927),
    o = n(827343),
    c = n(820284),
    d = n(688810),
    u = n(139286),
    h = n(48435),
    m = n(485873),
    A = n(24933),
    g = n(964592),
    p = n(430452),
    f = n(383501),
    _ = n(532624),
    E = n(17143),
    x = n(819027),
    C = n(652215),
    S = n(509381),
    T = n(731854),
    N = n(985018),
    I = n(686534);
function v(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: v,
            onClose: y,
            maybeRenderPTTCheckbox: b = !1,
            renderDeafenCheckbox: j = !1,
            renderInputProfiles: R = !1,
            renderOutputDevices: M = !1,
            renderOutputVolume: D = !1,
            renderInputDevices: O = !1,
            renderInputVolume: L = !1,
            maybeRenderInputMeter: P = !1,
            renderSettingsButton: k = !1,
        } = e,
        { analyticsLocations: w } = (0, d.Ay)();
    (0, u.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: w },
    });
    let U = (0, x.A)(t),
        G = (0, h.H)({ deviceType: T.oh.AUDIO_INPUT, analyticsLocations: w, asSubmenu: !0 }),
        F = (0, h.H)({ deviceType: T.oh.AUDIO_OUTPUT, analyticsLocations: w, asSubmenu: !0 }),
        B = (0, s.bG)([p.Ay], () => p.Ay.getActiveInputProfile()),
        H = (0, A.A)(w),
        V = (0, m.A)(w),
        K = (0, g.A)(w),
        W = a.x.DEFAULT,
        z = p.Ay.isSelfDeaf(W),
        q = (0, s.bG)([p.Ay], () => p.Ay.getMode()),
        Y = q === C.TBI.VOICE_ACTIVITY ? C.TBI.PUSH_TO_TALK : C.TBI.VOICE_ACTIVITY,
        J = (0, s.bG)([p.Ay, _.Ay], () => {
            let e = p.Ay.getModeOptions().shortcut?.length > 0,
                t = null != _.Ay.getKeybindForAction(C.hCu.PUSH_TO_TALK, !1, !0),
                n = null != _.Ay.getKeybindForAction(C.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        $ = (0, s.bG)([f.A], () => null != f.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: C.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W1t, {
            "data-menu-migrated": !0,
            onSelect: v,
            onInteraction: n,
            onClose: y,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": N.intl.string(N.t.ZR1Ss6),
            className: I.MK,
            children: [
                (0, i.jsxs)(r.rXV, { children: [O && G, R && H, M && F] }),
                (0, i.jsxs)(r.rXV, {
                    children: [
                        L && V,
                        P &&
                            $ &&
                            (0, i.jsx)(r.aK1, {
                                id: "input-device-meter",
                                interactive: !1,
                                control: () =>
                                    (0, i.jsx)(E.A, {
                                        notchBackground: E.V.BLACK,
                                        location: { section: C.JJy.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: I.Eq,
                                        notchClassName: I.CO,
                                    }),
                            }),
                        D && K,
                    ],
                }),
                (0, i.jsxs)(r.rXV, {
                    children: [
                        b && J
                            ? (0, i.jsx)(r.sLh, {
                                  checked: q === C.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: N.intl.string(N.t.Q8gkVL),
                                  action: () => o.A.setMode(Y, void 0, void 0, { analyticsLocations: w }),
                                  disabled: B === S.m.STUDIO,
                              })
                            : null,
                        j &&
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "deafen",
                                    label: N.intl.string(N.t.wjcRFX),
                                    action: () => o.A.toggleSelfDeaf({ context: W, location: "AudioDeviceMenu" }),
                                    checked: z,
                                },
                                "self-deafen",
                            ),
                        k && U,
                    ],
                }),
            ],
        }),
    });
}
