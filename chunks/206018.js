n.d(t, { A: () => D });
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(17928),
    r = n(205693),
    a = n(550079),
    o = n(477782),
    u = n(827343),
    c = n(820284),
    d = n(688810),
    m = n(139286),
    h = n(270816),
    A = n(485873),
    v = n(24933),
    g = n(964592),
    p = n(969341),
    f = n(763827),
    T = n(532624),
    b = n(152567),
    y = n(819027),
    _ = n(652215),
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
            renderOutputVolume: L = !1,
            renderInputDevices: N = !1,
            renderInputVolume: k = !1,
            maybeRenderInputMeter: V = !1,
            renderSettingsButton: w = !1,
        } = e,
        { analyticsLocations: P } = (0, d.Ay)();
    (0, m.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: P },
    });
    let R = (0, y.A)(t),
        B = (0, h.H)({ deviceType: C.oh.AUDIO_INPUT, analyticsLocations: P, asSubmenu: !0 }),
        G = (0, h.H)({ deviceType: C.oh.AUDIO_OUTPUT, analyticsLocations: P, asSubmenu: !0 }),
        Z = (0, s.bG)([p.Ay], () => p.Ay.getActiveInputProfile()),
        $ = (0, v.A)(P),
        K = (0, A.A)(P),
        F = (0, g.A)(P),
        X = r.x.DEFAULT,
        H = p.Ay.isSelfDeaf(X),
        Y = (0, s.bG)([p.Ay], () => p.Ay.getMode()),
        z = Y === _.TBI.VOICE_ACTIVITY ? _.TBI.PUSH_TO_TALK : _.TBI.VOICE_ACTIVITY,
        W = (0, s.bG)([p.Ay, T.Ay], () => {
            let e = p.Ay.getModeOptions().shortcut?.length > 0,
                t = null != T.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !1, !0),
                n = null != T.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        J = (0, s.bG)([f.A], () => null != f.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: _.ZSU.CONTEXT_MENU,
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
                (0, i.jsxs)(o.rX, { children: [N && B, E && $, U && G] }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        k && K,
                        V &&
                            J &&
                            (0, i.jsx)(o.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                control: () =>
                                    (0, i.jsx)(b.A, {
                                        notchBackground: b.V.BLACK,
                                        location: { section: _.JJy.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: M.Eq,
                                        notchClassName: M.CO,
                                    }),
                            }),
                        L && F,
                    ],
                }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        O && W
                            ? (0, i.jsx)(o.sL, {
                                  checked: Y === _.TBI.PUSH_TO_TALK,
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
                                    action: () => u.A.toggleSelfDeaf({ context: X, location: "AudioDeviceMenu" }),
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
