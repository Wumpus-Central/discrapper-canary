"use strict";
n.d(t, { A: () => O });
var i = n(627968);
n(64700);
var r = n(562708),
    s = n(17928),
    a = n(459838),
    o = n(980707),
    l = n(477782),
    u = n(827343),
    c = n(820284),
    d = n(688810),
    _ = n(139286),
    f = n(270816),
    h = n(486487),
    p = n(110027),
    E = n(298242),
    m = n(235058),
    g = n(763827),
    A = n(532624),
    I = n(152567),
    T = n(819027),
    S = n(652215),
    N = n(509381),
    y = n(731854),
    C = n(375708),
    v = n(347933);
function O(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: O,
            onClose: R,
            maybeRenderPTTCheckbox: b = !1,
            renderDeafenCheckbox: D = !1,
            renderInputProfiles: L = !1,
            renderOutputDevices: w = !1,
            renderOutputVolume: M = !1,
            renderInputDevices: P = !1,
            renderInputVolume: x = !1,
            maybeRenderInputMeter: U = !1,
            renderSettingsButton: k = !1,
        } = e,
        { analyticsLocations: G } = (0, d.Ay)();
    (0, _.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: G },
    });
    let F = (0, T.A)(t),
        V = (0, f.H)({ deviceType: y.oh.AUDIO_INPUT, analyticsLocations: G, asSubmenu: !0 }),
        B = (0, f.H)({ deviceType: y.oh.AUDIO_OUTPUT, analyticsLocations: G, asSubmenu: !0 }),
        H = (0, s.bG)([m.Ay], () => m.Ay.getActiveInputProfile()),
        j = (0, p.A)(G),
        Y = (0, h.A)(G),
        W = (0, E.A)(G),
        K = a.x.DEFAULT,
        z = m.Ay.isSelfDeaf(K),
        $ = (0, s.bG)([m.Ay], () => m.Ay.getMode()),
        q = $ === S.TBI.VOICE_ACTIVITY ? S.TBI.PUSH_TO_TALK : S.TBI.VOICE_ACTIVITY,
        Z = (0, s.bG)([m.Ay, A.Ay], () => {
            let e = m.Ay.getModeOptions().shortcut?.length > 0,
                t = null != A.Ay.getKeybindForAction(S.hCu.PUSH_TO_TALK, !1, !0),
                n = null != A.Ay.getKeybindForAction(S.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        X = (0, s.bG)([g.A], () => null != g.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: S.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: O,
            onInteraction: n,
            onClose: R,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": C.intl.string(C.t.ZR1Ss6),
            className: v.MK,
            children: [
                (0, i.jsxs)(l.rX, { children: [P && V, L && j, w && B] }),
                (0, i.jsxs)(l.rX, {
                    children: [
                        x && Y,
                        U &&
                            X &&
                            (0, i.jsx)(l.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                control: () =>
                                    (0, i.jsx)(I.A, {
                                        notchBackground: I.V.BLACK,
                                        location: { section: S.JJy.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: v.Eq,
                                        notchClassName: v.CO,
                                    }),
                            }),
                        M && W,
                    ],
                }),
                (0, i.jsxs)(l.rX, {
                    children: [
                        b && Z
                            ? (0, i.jsx)(l.sL, {
                                  checked: $ === S.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: C.intl.string(C.t.Q8gkVL),
                                  action: () => u.A.setMode(q, void 0, void 0, { analyticsLocations: G }),
                                  disabled: H === N.m.STUDIO,
                              })
                            : null,
                        D &&
                            (0, i.jsx)(
                                l.sL,
                                {
                                    id: "deafen",
                                    label: C.intl.string(C.t.wjcRFX),
                                    action: () => u.A.toggleSelfDeaf({ context: K, location: "AudioDeviceMenu" }),
                                    checked: z,
                                },
                                "self-deafen",
                            ),
                        k && F,
                    ],
                }),
            ],
        }),
    });
}
