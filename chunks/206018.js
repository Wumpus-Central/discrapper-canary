"use strict";
n.d(t, { A: () => R });
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
    h = n(270816),
    f = n(486487),
    p = n(110027),
    E = n(298242),
    m = n(941327),
    g = n(763827),
    A = n(532624),
    I = n(152567),
    T = n(819027),
    S = n(652215),
    y = n(621380),
    C = n(731854),
    N = n(375708),
    v = n(347933);
function R(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: R,
            onClose: O,
            maybeRenderPTTCheckbox: b = !1,
            renderDeafenCheckbox: D = !1,
            renderInputProfiles: L = !1,
            renderOutputDevices: w = !1,
            renderOutputVolume: M = !1,
            renderInputDevices: P = !1,
            renderInputVolume: x = !1,
            maybeRenderInputMeter: k = !1,
            renderSettingsButton: U = !1,
        } = e,
        { analyticsLocations: G } = (0, d.Ay)();
    (0, _.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: G },
    });
    let F = (0, T.A)(t),
        V = (0, h.H)({ deviceType: C.oh.AUDIO_INPUT, analyticsLocations: G, asSubmenu: !0 }),
        B = (0, h.H)({ deviceType: C.oh.AUDIO_OUTPUT, analyticsLocations: G, asSubmenu: !0 }),
        j = (0, s.bG)([m.Ay], () => m.Ay.getActiveInputProfile()),
        H = (0, p.A)(G),
        Y = (0, f.A)(G),
        W = (0, E.A)(G),
        K = a.x.DEFAULT,
        $ = m.Ay.isSelfDeaf(K),
        z = (0, s.bG)([m.Ay], () => m.Ay.getMode()),
        q = z === S.TBI.VOICE_ACTIVITY ? S.TBI.PUSH_TO_TALK : S.TBI.VOICE_ACTIVITY,
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
            onSelect: R,
            onInteraction: n,
            onClose: O,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": N.intl.string(N.t.ZR1Ss6),
            className: v.MK,
            children: [
                (0, i.jsxs)(l.rX, { children: [P && V, L && H, w && B] }),
                (0, i.jsxs)(l.rX, {
                    children: [
                        x && Y,
                        k &&
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
                                  checked: z === S.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: N.intl.string(N.t.Q8gkVL),
                                  action: () => u.A.setMode(q, void 0, void 0, { analyticsLocations: G }),
                                  disabled: j === y.m.STUDIO,
                              })
                            : null,
                        D &&
                            (0, i.jsx)(
                                l.sL,
                                {
                                    id: "deafen",
                                    label: N.intl.string(N.t.wjcRFX),
                                    action: () => u.A.toggleSelfDeaf({ context: K, location: "AudioDeviceMenu" }),
                                    checked: $,
                                },
                                "self-deafen",
                            ),
                        U && F,
                    ],
                }),
            ],
        }),
    });
}
