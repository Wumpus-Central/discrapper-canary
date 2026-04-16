n.d(t, { A: () => w });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(158954),
    o = n(311907),
    d = n(827734),
    c = n(342494),
    u = n(397927),
    m = n(793574),
    h = n(688810),
    x = n(993719),
    p = n(14059),
    g = n(362823),
    f = n(980923),
    v = n(206018),
    _ = n(480890),
    b = n(74848),
    j = n(533488),
    A = n(499156),
    C = n(430452),
    y = n(383501),
    S = n(350535),
    E = n(42473),
    T = n(731854),
    N = n(985018),
    I = n(224585),
    k = n(490704),
    O = n(949341),
    R = n(973324);
function w(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
            suppress: w,
            awaitingRemote: D,
            iconForeground: M,
            onMouseEnter: P,
            onMouseLeave: L,
            onClick: U,
            nameplate: B,
            shouldShowSpeakingWhileMutedTooltip: G,
            shouldShowSpeakingWhilePTTTooltip: F,
            shouldShowInputDeviceChangedTooltip: V,
            shouldShowPTTJoinTooltip: W,
            dismissTooltips: H,
            speaking: K,
        } = e,
        { showPTTIconIndicator: z } = A.A.useConfig({ location: "MicrophoneButton" }),
        $ = (0, o.bG)([C.Ay], () => C.Ay.getMode() === T.TB.PUSH_TO_TALK),
        q = (0, o.bG)([C.Ay], () => C.Ay.getSettings().modeOptions.shortcut),
        Q = (0, o.bG)([p.A], () => p.A.getIsTutorialActive(g.v.MUTE_TUTORIAL)),
        Y = (0, o.bG)([y.A], () => null != y.A.getChannelId()),
        { name: J } = (0, b.x5)(T.oh.AUDIO_INPUT),
        { enabledInputProfiles: X } = (0, j.d)({ location: "MicrophoneButton" }),
        Z = i.useRef(null),
        ee = i.useRef(null),
        et = n || w || s,
        { analyticsLocations: en } = (0, h.Ay)(m.A.AUDIO_INPUT_BUTTON),
        ea = (0, f.A)(n, s, w, D);
    t = G
        ? { tooltipType: "green_void_do_not_use", tooltipText: N.intl.string(N.t["29gnR4"]), tooltipForceOpen: !0 }
        : W || F
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: N.intl.format(N.t.c1qUOQ, { keybind: S.dI(q).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: ea };
    let ei = z && $ && Y,
        es = et ? d.A.colors.ICON_VOICE_MUTED : "currentColor",
        el = i.useCallback(() => {
            U(), Q && x.N(g.v.MUTE_TUTORIAL);
        }, [U, Q]);
    return (0, a.jsxs)(h.f5, {
        value: en,
        children: [
            (0, a.jsx)(u.YNO, {
                targetElementRef: Z,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        H(),
                        (0, a.jsx)(h.f5, {
                            value: en,
                            children: (0, a.jsx)(v.A, {
                                onInteraction: (0, _.s)("AudioDeviceMenu", m.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: X.length > 0,
                                renderInputDevices: !0,
                                maybeRenderInputMeter: !0,
                                renderInputVolume: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: u.YNO.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: i } = e,
                        { isShown: o } = n,
                        d = o ? r.tN5 : r.abt;
                    return (0, a.jsxs)("div", {
                        ref: Z,
                        className: l()(k.Lh, { [k.v8]: et, [k.q6]: o }),
                        children: [
                            (0, a.jsx)(E.A, {
                                ref: ee,
                                "aria-checked": et,
                                "aria-label": N.intl.string(N.t.w4m945),
                                className: k.eT,
                                disabled: D,
                                icon:
                                    s || w
                                        ? (0, a.jsx)(r.O1p, { size: "refresh_sm", color: es, className: M })
                                        : (0, a.jsx)(r.F0F, {
                                              allowAnimationWhileUnfocused: !0,
                                              defaultViewModelInstance: et ? "Off" : "On",
                                              dataBinding: { on: !et, fill: es },
                                              eventTargetRef: ee,
                                              className: l()(r.d5l.refresh_sm, M),
                                          }),
                                onClick: el,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    P();
                                },
                                onMouseLeave: () => {
                                    L();
                                },
                                plated: null != B,
                                redGlow: et,
                                role: "switch",
                                ...t,
                                children: ei ? (0, a.jsx)("div", { className: l()(O.U, { [O.z]: K }) }) : null,
                            }),
                            (0, a.jsx)(E.A, {
                                "aria-label": V
                                    ? N.intl.formatToPlainString(N.t["18wnuD"], { inputDeviceName: J })
                                    : N.intl.string(N.t.fRzCbB),
                                className: l()(k.UT, { [k.q6]: o }),
                                disabled: D,
                                icon: (0, a.jsx)(d, {
                                    className: k.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: es,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: P,
                                onMouseLeave: L,
                                plated: null != B,
                                redGlow: et,
                                tooltipType: V ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: V,
                                tooltipPositionKey: V
                                    ? N.intl.formatToPlainString(N.t["18wnuD"], { inputDeviceName: J })
                                    : void 0,
                                tooltipShouldShow: !o,
                                tooltipText: V
                                    ? N.intl.format(N.t["18wnuD"], { inputDeviceName: J })
                                    : N.intl.string(N.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, a.jsx)(c.AM, {
                targetElementRef: Z,
                shouldShow: Q,
                graphic: { type: "image", src: R.A },
                onRequestClose: () => {
                    x.N(g.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: N.intl.string(I.default.VG4zAf),
                body: N.intl.string(I.default["8VIRzR"]),
            }),
        ],
    });
}
