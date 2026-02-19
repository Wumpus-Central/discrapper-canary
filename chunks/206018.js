n.d(t, { A: () => O });
var r = n(627968);
n(64700);
var a = n(110259),
    l = n(311907),
    i = n(205693),
    u = n(397927),
    s = n(827343),
    o = n(820284),
    c = n(688810),
    d = n(139286),
    m = n(48435),
    A = n(485873),
    v = n(24933),
    _ = n(964592),
    g = n(430452),
    h = n(383501),
    p = n(532624),
    f = n(723702),
    C = n(17143),
    b = n(819027),
    I = n(652215),
    T = n(509381),
    y = n(731854),
    x = n(985018),
    E = n(220636);
function O(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: O,
            onClose: S,
            maybeRenderPTTCheckbox: N = !1,
            renderDeafenCheckbox: M = !1,
            renderInputProfiles: j = !1,
            renderOutputDevices: k = !1,
            renderOutputVolume: D = !1,
            renderInputDevices: P = !1,
            renderInputVolume: V = !1,
            maybeRenderInputMeter: U = !1,
            renderSettingsButton: R = !1,
        } = e,
        { analyticsLocations: L } = (0, c.Ay)();
    (0, d.A)({
        type: a.ImpressionTypes.MENU,
        name: a.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: L },
    });
    let B = (0, b.A)(t),
        F = (0, m.H)({ deviceType: y.oh.AUDIO_INPUT, analyticsLocations: L, asSubmenu: !0 }),
        H = (0, m.H)({ deviceType: y.oh.AUDIO_OUTPUT, analyticsLocations: L, asSubmenu: !0 }),
        K = (0, l.bG)([g.Ay], () => g.Ay.getActiveInputProfile()),
        X = (0, v.A)(L),
        w = (0, A.A)(L),
        G = (0, _.A)(L),
        J = i.x.DEFAULT,
        Z = g.Ay.isSelfDeaf(J),
        q = (0, l.bG)([g.Ay], () => g.Ay.getMode()),
        Y = q === I.TBI.VOICE_ACTIVITY ? I.TBI.PUSH_TO_TALK : I.TBI.VOICE_ACTIVITY,
        Q = (0, l.bG)([g.Ay, p.Ay], () => {
            let e = g.Ay.getModeOptions().shortcut?.length > 0,
                t = null != p.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !1, !0),
                n = null != p.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        W = (0, l.bG)([h.A], () => null != h.A.getChannelId());
    return (0, r.jsx)(o.A, {
        object: I.ZSU.CONTEXT_MENU,
        children: (0, r.jsxs)(u.W1t, {
            "data-menu-migrated": !0,
            onSelect: O,
            onInteraction: n,
            onClose: S,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": x.intl.string(x.t.ZR1Ss6),
            className: E.MK,
            children: [
                (0, r.jsxs)(u.rXV, { children: [P && F, j && X, k && H] }),
                (0, r.jsxs)(u.rXV, {
                    children: [
                        V && w,
                        U &&
                            W &&
                            (0, r.jsx)(u.aK1, {
                                id: "input-device-meter",
                                control: () =>
                                    (0, r.jsx)(C.A, {
                                        notchBackground: C.V.BLACK,
                                        location: { section: I.JJy.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: E.Eq,
                                        notchClassName: E.CO,
                                    }),
                            }),
                        D && G,
                    ],
                }),
                (0, r.jsxs)(u.rXV, {
                    children: [
                        N && f.isPlatformEmbedded && Q
                            ? (0, r.jsx)(u.sLh, {
                                  checked: q === I.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: x.intl.string(x.t.Q8gkVL),
                                  action: () => s.A.setMode(Y, void 0, void 0, { analyticsLocations: L }),
                                  disabled: K === T.m.STUDIO,
                              })
                            : null,
                        M &&
                            (0, r.jsx)(
                                u.sLh,
                                {
                                    id: "deafen",
                                    label: x.intl.string(x.t.wjcRFX),
                                    action: () => s.A.toggleSelfDeaf({ context: J, location: "AudioDeviceMenu" }),
                                    checked: Z,
                                },
                                "self-deafen",
                            ),
                        R && B,
                    ],
                }),
            ],
        }),
    });
}
