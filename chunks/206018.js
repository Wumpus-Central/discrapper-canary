n.d(t, { A: () => y });
var i = n(627968);
n(64700);
var l = n(562708),
    s = n(17928),
    r = n(459838),
    a = n(980707),
    o = n(477782),
    u = n(827343),
    d = n(820284),
    c = n(688810),
    h = n(139286),
    g = n(270816),
    f = n(486487),
    A = n(110027),
    E = n(298242),
    I = n(761853),
    p = n(763827),
    S = n(532624),
    m = n(152567),
    C = n(819027),
    _ = n(652215),
    N = n(621380),
    T = n(731854),
    v = n(375708),
    M = n(347933);
function y(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: y,
            onClose: D,
            maybeRenderPTTCheckbox: R = !1,
            renderDeafenCheckbox: x = !1,
            renderInputProfiles: O = !1,
            renderOutputDevices: U = !1,
            renderOutputVolume: L = !1,
            renderInputDevices: w = !1,
            renderInputVolume: P = !1,
            maybeRenderInputMeter: G = !1,
            renderSettingsButton: F = !1,
        } = e,
        { analyticsLocations: b } = (0, c.Ay)();
    (0, h.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: b },
    });
    let j = (0, C.A)(t),
        V = (0, g.H)({ deviceType: T.oh.AUDIO_INPUT, analyticsLocations: b, asSubmenu: !0 }),
        k = (0, g.H)({ deviceType: T.oh.AUDIO_OUTPUT, analyticsLocations: b, asSubmenu: !0 }),
        H = (0, s.bG)([I.Ay], () => I.Ay.getActiveInputProfile()),
        B = (0, A.A)(b),
        Y = (0, f.A)(b),
        W = (0, E.A)(b),
        z = r.x.DEFAULT,
        Z = I.Ay.isSelfDeaf(z),
        J = (0, s.bG)([I.Ay], () => I.Ay.getMode()),
        $ = J === _.TBI.VOICE_ACTIVITY ? _.TBI.PUSH_TO_TALK : _.TBI.VOICE_ACTIVITY,
        K = (0, s.bG)([I.Ay, S.Ay], () => {
            let e = I.Ay.getModeOptions().shortcut?.length > 0,
                t = null != S.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !1, !0),
                n = null != S.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        X = (0, s.bG)([p.A], () => null != p.A.getChannelId());
    return (0, i.jsx)(d.A, {
        object: _.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(a.W, {
            "data-menu-migrated": !0,
            onSelect: y,
            onInteraction: n,
            onClose: D,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": v.intl.string(v.t.ZR1Ss6),
            className: M.MK,
            children: [
                (0, i.jsxs)(o.rX, { children: [w && V, O && B, U && k] }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        P && Y,
                        G &&
                            X &&
                            (0, i.jsx)(o.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                control: () =>
                                    (0, i.jsx)(m.A, {
                                        notchBackground: m.V.BLACK,
                                        location: { section: _.JJy.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: M.Eq,
                                        notchClassName: M.CO,
                                    }),
                            }),
                        L && W,
                    ],
                }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        R && K
                            ? (0, i.jsx)(o.sL, {
                                  checked: J === _.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: v.intl.string(v.t.Q8gkVL),
                                  action: () => u.A.setMode($, void 0, void 0, { analyticsLocations: b }),
                                  disabled: H === N.m.STUDIO,
                              })
                            : null,
                        x &&
                            (0, i.jsx)(
                                o.sL,
                                {
                                    id: "deafen",
                                    label: v.intl.string(v.t.wjcRFX),
                                    action: () => u.A.toggleSelfDeaf({ context: z, location: "AudioDeviceMenu" }),
                                    checked: Z,
                                },
                                "self-deafen",
                            ),
                        F && j,
                    ],
                }),
            ],
        }),
    });
}
