n.d(t, { A: () => y });
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
    E = n(723702),
    x = n(17143),
    C = n(819027),
    S = n(652215),
    T = n(509381),
    I = n(731854),
    N = n(985018),
    v = n(933421);
function y(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: y,
            onClose: b,
            maybeRenderPTTCheckbox: j = !1,
            renderDeafenCheckbox: R = !1,
            renderInputProfiles: M = !1,
            renderOutputDevices: D = !1,
            renderOutputVolume: O = !1,
            renderInputDevices: L = !1,
            renderInputVolume: P = !1,
            maybeRenderInputMeter: k = !1,
            renderSettingsButton: w = !1,
        } = e,
        { analyticsLocations: U } = (0, d.Ay)();
    (0, u.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: U },
    });
    let G = (0, C.A)(t),
        F = (0, h.H)({ deviceType: I.oh.AUDIO_INPUT, analyticsLocations: U, asSubmenu: !0 }),
        B = (0, h.H)({ deviceType: I.oh.AUDIO_OUTPUT, analyticsLocations: U, asSubmenu: !0 }),
        H = (0, s.bG)([p.Ay], () => p.Ay.getActiveInputProfile()),
        V = (0, A.A)(U),
        K = (0, m.A)(U),
        W = (0, g.A)(U),
        z = a.x.DEFAULT,
        q = p.Ay.isSelfDeaf(z),
        Y = (0, s.bG)([p.Ay], () => p.Ay.getMode()),
        J = Y === S.TBI.VOICE_ACTIVITY ? S.TBI.PUSH_TO_TALK : S.TBI.VOICE_ACTIVITY,
        $ = (0, s.bG)([p.Ay, _.Ay], () => {
            let e = p.Ay.getModeOptions().shortcut?.length > 0,
                t = null != _.Ay.getKeybindForAction(S.hCu.PUSH_TO_TALK, !1, !0),
                n = null != _.Ay.getKeybindForAction(S.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        Z = (0, s.bG)([f.A], () => null != f.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: S.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W1t, {
            "data-menu-migrated": !0,
            onSelect: y,
            onInteraction: n,
            onClose: b,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": N.intl.string(N.t.ZR1Ss6),
            className: v.MK,
            children: [
                (0, i.jsxs)(r.rXV, { children: [L && F, M && V, D && B] }),
                (0, i.jsxs)(r.rXV, {
                    children: [
                        P && K,
                        k &&
                            Z &&
                            (0, i.jsx)(r.aK1, {
                                id: "input-device-meter",
                                interactive: !1,
                                control: () =>
                                    (0, i.jsx)(x.A, {
                                        notchBackground: x.V.BLACK,
                                        location: { section: S.JJy.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: v.Eq,
                                        notchClassName: v.CO,
                                    }),
                            }),
                        O && W,
                    ],
                }),
                (0, i.jsxs)(r.rXV, {
                    children: [
                        j && E.isPlatformEmbedded && $
                            ? (0, i.jsx)(r.sLh, {
                                  checked: Y === S.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: N.intl.string(N.t.Q8gkVL),
                                  action: () => o.A.setMode(J, void 0, void 0, { analyticsLocations: U }),
                                  disabled: H === T.m.STUDIO,
                              })
                            : null,
                        R &&
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "deafen",
                                    label: N.intl.string(N.t.wjcRFX),
                                    action: () => o.A.toggleSelfDeaf({ context: z, location: "AudioDeviceMenu" }),
                                    checked: q,
                                },
                                "self-deafen",
                            ),
                        w && G,
                    ],
                }),
            ],
        }),
    });
}
