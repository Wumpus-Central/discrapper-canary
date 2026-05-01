n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(17928),
    r = n(205693),
    a = n(550079),
    u = n(477782),
    o = n(827343),
    d = n(820284),
    c = n(688810),
    h = n(139286),
    A = n(270816),
    f = n(485873),
    g = n(24933),
    E = n(964592),
    I = n(51760),
    S = n(763827),
    _ = n(532624),
    T = n(152567),
    C = n(819027),
    m = n(652215),
    p = n(509381),
    N = n(731854),
    M = n(985018),
    D = n(347933);
function v(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: v,
            onClose: y,
            maybeRenderPTTCheckbox: U = !1,
            renderDeafenCheckbox: O = !1,
            renderInputProfiles: L = !1,
            renderOutputDevices: R = !1,
            renderOutputVolume: w = !1,
            renderInputDevices: P = !1,
            renderInputVolume: G = !1,
            maybeRenderInputMeter: x = !1,
            renderSettingsButton: F = !1,
        } = e,
        { analyticsLocations: V } = (0, c.Ay)();
    (0, h.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: V },
    });
    let b = (0, C.A)(t),
        H = (0, A.H)({ deviceType: N.oh.AUDIO_INPUT, analyticsLocations: V, asSubmenu: !0 }),
        k = (0, A.H)({ deviceType: N.oh.AUDIO_OUTPUT, analyticsLocations: V, asSubmenu: !0 }),
        Y = (0, s.bG)([I.Ay], () => I.Ay.getActiveInputProfile()),
        j = (0, g.A)(V),
        W = (0, f.A)(V),
        J = (0, E.A)(V),
        $ = r.x.DEFAULT,
        B = I.Ay.isSelfDeaf($),
        z = (0, s.bG)([I.Ay], () => I.Ay.getMode()),
        Z = z === m.TBI.VOICE_ACTIVITY ? m.TBI.PUSH_TO_TALK : m.TBI.VOICE_ACTIVITY,
        K = (0, s.bG)([I.Ay, _.Ay], () => {
            let e = I.Ay.getModeOptions().shortcut?.length > 0,
                t = null != _.Ay.getKeybindForAction(m.hCu.PUSH_TO_TALK, !1, !0),
                n = null != _.Ay.getKeybindForAction(m.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        Q = (0, s.bG)([S.A], () => null != S.A.getChannelId());
    return (0, i.jsx)(d.A, {
        object: m.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(a.W, {
            "data-menu-migrated": !0,
            onSelect: v,
            onInteraction: n,
            onClose: y,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": M.intl.string(M.t.ZR1Ss6),
            className: D.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [P && H, L && j, R && k] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        G && W,
                        x &&
                            Q &&
                            (0, i.jsx)(u.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                control: () =>
                                    (0, i.jsx)(T.A, {
                                        notchBackground: T.V.BLACK,
                                        location: { section: m.JJy.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: D.Eq,
                                        notchClassName: D.CO,
                                    }),
                            }),
                        w && J,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        U && K
                            ? (0, i.jsx)(u.sL, {
                                  checked: z === m.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: M.intl.string(M.t.Q8gkVL),
                                  action: () => o.A.setMode(Z, void 0, void 0, { analyticsLocations: V }),
                                  disabled: Y === p.m.STUDIO,
                              })
                            : null,
                        O &&
                            (0, i.jsx)(
                                u.sL,
                                {
                                    id: "deafen",
                                    label: M.intl.string(M.t.wjcRFX),
                                    action: () => o.A.toggleSelfDeaf({ context: $, location: "AudioDeviceMenu" }),
                                    checked: B,
                                },
                                "self-deafen",
                            ),
                        F && b,
                    ],
                }),
            ],
        }),
    });
}
