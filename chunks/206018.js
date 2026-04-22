n.d(t, { A: () => D });
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(311907),
    r = n(205693),
    a = n(861672),
    o = n(477782),
    u = n(827343),
    c = n(820284),
    d = n(688810),
    m = n(139286),
    h = n(270816),
    A = n(485873),
    v = n(24933),
    p = n(964592),
    g = n(430452),
    T = n(383501),
    f = n(532624),
    b = n(17143),
    _ = n(819027),
    y = n(652215),
    x = n(509381),
    C = n(731854),
    I = n(985018),
    M = n(347933);
function D(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: D,
            onClose: j,
            maybeRenderPTTCheckbox: O = !1,
            renderDeafenCheckbox: S = !1,
            renderInputProfiles: E = !1,
            renderOutputDevices: U = !1,
            renderOutputVolume: N = !1,
            renderInputDevices: V = !1,
            renderInputVolume: k = !1,
            maybeRenderInputMeter: L = !1,
            renderSettingsButton: w = !1,
        } = e,
        { analyticsLocations: P } = (0, d.Ay)();
    (0, m.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: P },
    });
    let R = (0, _.A)(t),
        B = (0, h.H)({ deviceType: C.oh.AUDIO_INPUT, analyticsLocations: P, asSubmenu: !0 }),
        K = (0, h.H)({ deviceType: C.oh.AUDIO_OUTPUT, analyticsLocations: P, asSubmenu: !0 }),
        Z = (0, s.bG)([g.Ay], () => g.Ay.getActiveInputProfile()),
        $ = (0, v.A)(P),
        G = (0, A.A)(P),
        X = (0, p.A)(P),
        F = r.x.DEFAULT,
        H = g.Ay.isSelfDeaf(F),
        Y = (0, s.bG)([g.Ay], () => g.Ay.getMode()),
        z = Y === y.TBI.VOICE_ACTIVITY ? y.TBI.PUSH_TO_TALK : y.TBI.VOICE_ACTIVITY,
        W = (0, s.bG)([g.Ay, f.Ay], () => {
            let e = g.Ay.getModeOptions().shortcut?.length > 0,
                t = null != f.Ay.getKeybindForAction(y.hCu.PUSH_TO_TALK, !1, !0),
                n = null != f.Ay.getKeybindForAction(y.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        J = (0, s.bG)([T.A], () => null != T.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: y.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(a.W, {
            "data-menu-migrated": !0,
            onSelect: D,
            onInteraction: n,
            onClose: j,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": I.intl.string(I.t.ZR1Ss6),
            className: M.MK,
            children: [
                (0, i.jsxs)(o.rX, { children: [V && B, E && $, U && K] }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        k && G,
                        L &&
                            J &&
                            (0, i.jsx)(o.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                control: () =>
                                    (0, i.jsx)(b.A, {
                                        notchBackground: b.V.BLACK,
                                        location: { section: y.JJy.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: M.Eq,
                                        notchClassName: M.CO,
                                    }),
                            }),
                        N && X,
                    ],
                }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        O && W
                            ? (0, i.jsx)(o.sL, {
                                  checked: Y === y.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: I.intl.string(I.t.Q8gkVL),
                                  action: () => u.A.setMode(z, void 0, void 0, { analyticsLocations: P }),
                                  disabled: Z === x.m.STUDIO,
                              })
                            : null,
                        S &&
                            (0, i.jsx)(
                                o.sL,
                                {
                                    id: "deafen",
                                    label: I.intl.string(I.t.wjcRFX),
                                    action: () => u.A.toggleSelfDeaf({ context: F, location: "AudioDeviceMenu" }),
                                    checked: H,
                                },
                                "self-deafen",
                            ),
                        w && R,
                    ],
                }),
            ],
        }),
    });
}
