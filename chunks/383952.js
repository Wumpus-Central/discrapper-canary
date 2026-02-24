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
    _ = n(980923),
    f = n(206018),
    b = n(480890),
    v = n(74848),
    j = n(77735),
    C = n(340913),
    A = n(430452),
    T = n(383501),
    S = n(350535),
    y = n(42473),
    E = n(731854),
    N = n(985018),
    I = n(807880),
    k = n(368149),
    R = n(709502),
    O = n(973324);
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
        { showPTTIconIndicator: z } = C.A.useConfig({ location: "MicrophoneButton" }),
        $ = (0, o.bG)([A.Ay], () => A.Ay.getMode() === E.TB.PUSH_TO_TALK),
        q = (0, o.bG)([A.Ay], () => A.Ay.getSettings().modeOptions.shortcut),
        Q = (0, o.bG)([p.A], () => p.A.getIsTutorialActive(g.v.MUTE_TUTORIAL)),
        Y = (0, o.bG)([T.A], () => null != T.A.getChannelId()),
        { name: J } = (0, v.x5)(E.oh.AUDIO_INPUT),
        { enabledInputProfiles: X } = (0, j.d)({ location: "MicrophoneButton" }),
        Z = i.useRef(null),
        ee = n || w || s,
        { analyticsLocations: et } = (0, h.Ay)(m.A.AUDIO_INPUT_BUTTON),
        en = (0, _.A)(n, s, w, D);
    t = G
        ? { tooltipType: "green_void_do_not_use", tooltipText: N.intl.string(N.t["29gnR4"]), tooltipForceOpen: !0 }
        : W || F
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: N.intl.format(N.t.c1qUOQ, { keybind: S.dI(q).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: en };
    let ea = z && $ && Y,
        ei = ee ? d.A.colors.ICON_VOICE_MUTED : "currentColor",
        es = i.useCallback(() => {
            U(), Q && x.N(g.v.MUTE_TUTORIAL);
        }, [U, Q]);
    return (0, a.jsxs)(h.f5, {
        value: et,
        children: [
            (0, a.jsx)(u.YNO, {
                targetElementRef: Z,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        H(),
                        (0, a.jsx)(h.f5, {
                            value: et,
                            children: (0, a.jsx)(f.A, {
                                onInteraction: (0, b.s)("AudioDeviceMenu", m.A.ACCOUNT),
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
                        className: l()(k.Lh, { [k.v8]: ee, [k.q6]: o }),
                        children: [
                            (0, a.jsx)(y.A, {
                                "aria-checked": ee,
                                "aria-label": N.intl.string(N.t.w4m945),
                                className: k.eT,
                                disabled: D,
                                icon:
                                    s || w
                                        ? (0, a.jsx)(r.O1p, { size: "refresh_sm", color: ei, className: M })
                                        : (0, a.jsx)(r.F0F, {
                                              allowAnimationWhileUnfocused: !0,
                                              defaultViewModelInstance: ee ? "Off" : "On",
                                              dataBinding: { on: !ee, fill: ei },
                                              eventTargetRef: Z,
                                              className: r.d5l.refresh_sm,
                                          }),
                                onClick: es,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    P();
                                },
                                onMouseLeave: () => {
                                    L();
                                },
                                plated: null != B,
                                redGlow: ee,
                                role: "switch",
                                ...t,
                                children: ea ? (0, a.jsx)("div", { className: l()(R.U, { [R.z]: K }) }) : null,
                            }),
                            (0, a.jsx)(y.A, {
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
                                    color: ei,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: P,
                                onMouseLeave: L,
                                plated: null != B,
                                redGlow: ee,
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
                graphic: { type: "image", src: O.A },
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
