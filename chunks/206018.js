n.d(e, { A: () => S });
var i = n(627968);
n(64700);
var s = n(110259),
    l = n(17928),
    r = n(205693),
    a = n(550079),
    u = n(477782),
    o = n(827343),
    c = n(820284),
    d = n(688810),
    m = n(139286),
    h = n(270816),
    p = n(485873),
    A = n(24933),
    g = n(964592),
    v = n(51760),
    T = n(763827),
    _ = n(532624),
    f = n(152567),
    y = n(819027),
    C = n(652215),
    b = n(509381),
    x = n(731854),
    I = n(985018),
    M = n(347933);
function S(t) {
    let {
            appContext: e,
            onInteraction: n,
            onSelect: S,
            onClose: j,
            maybeRenderPTTCheckbox: O = !1,
            renderDeafenCheckbox: D = !1,
            renderInputProfiles: E = !1,
            renderOutputDevices: k = !1,
            renderOutputVolume: N = !1,
            renderInputDevices: L = !1,
            renderInputVolume: V = !1,
            maybeRenderInputMeter: U = !1,
            renderSettingsButton: P = !1,
        } = t,
        { analyticsLocations: w } = (0, d.Ay)();
    (0, m.A)({
        type: s.ImpressionTypes.MENU,
        name: s.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: w },
    });
    let R = (0, y.A)(e),
        B = (0, h.H)({ deviceType: x.oh.AUDIO_INPUT, analyticsLocations: w, asSubmenu: !0 }),
        $ = (0, h.H)({ deviceType: x.oh.AUDIO_OUTPUT, analyticsLocations: w, asSubmenu: !0 }),
        G = (0, l.bG)([v.Ay], () => v.Ay.getActiveInputProfile()),
        K = (0, A.A)(w),
        X = (0, p.A)(w),
        F = (0, g.A)(w),
        Y = r.x.DEFAULT,
        H = v.Ay.isSelfDeaf(Y),
        J = (0, l.bG)([v.Ay], () => v.Ay.getMode()),
        W = J === C.TBI.VOICE_ACTIVITY ? C.TBI.PUSH_TO_TALK : C.TBI.VOICE_ACTIVITY,
        Z = (0, l.bG)([v.Ay, _.Ay], () => {
            let t = v.Ay.getModeOptions().shortcut?.length > 0,
                e = null != _.Ay.getKeybindForAction(C.hCu.PUSH_TO_TALK, !1, !0),
                n = null != _.Ay.getKeybindForAction(C.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return t || e || n;
        }),
        z = (0, l.bG)([T.A], () => null != T.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: C.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(a.W, {
            "data-menu-migrated": !0,
            onSelect: S,
            onInteraction: n,
            onClose: j,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": I.intl.string(I.t.ZR1Ss6),
            className: M.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [L && B, E && K, k && $] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        V && X,
                        U &&
                            z &&
                            (0, i.jsx)(u.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                control: () =>
                                    (0, i.jsx)(f.A, {
                                        notchBackground: f.V.BLACK,
                                        location: { section: C.JJy.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: M.Eq,
                                        notchClassName: M.CO,
                                    }),
                            }),
                        N && F,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        O && Z
                            ? (0, i.jsx)(u.sL, {
                                  checked: J === C.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: I.intl.string(I.t.Q8gkVL),
                                  action: () => o.A.setMode(W, void 0, void 0, { analyticsLocations: w }),
                                  disabled: G === b.m.STUDIO,
                              })
                            : null,
                        D &&
                            (0, i.jsx)(
                                u.sL,
                                {
                                    id: "deafen",
                                    label: I.intl.string(I.t.wjcRFX),
                                    action: () => o.A.toggleSelfDeaf({ context: Y, location: "AudioDeviceMenu" }),
                                    checked: H,
                                },
                                "self-deafen",
                            ),
                        P && R,
                    ],
                }),
            ],
        }),
    });
}
