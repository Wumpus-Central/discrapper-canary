n.d(t, { A: () => D });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(827734),
    c = n(523875),
    u = n(342494),
    m = n(397927),
    h = n(793574),
    x = n(688810),
    p = n(993719),
    g = n(14059),
    _ = n(362823),
    f = n(980923),
    v = n(206018),
    b = n(480890),
    j = n(74848),
    A = n(533488),
    C = n(499156),
    y = n(430452),
    S = n(383501),
    T = n(350535),
    E = n(42473),
    N = n(731854),
    I = n(985018),
    k = n(83214),
    O = n(85247),
    R = n(458756),
    w = n(973324);
function D(e) {
    let t,
        {
            selfMute: n,
            serverMute: l,
            suppress: D,
            awaitingRemote: M,
            iconForeground: P,
            onMouseEnter: L,
            onMouseLeave: U,
            onClick: B,
            nameplate: G,
            shouldShowSpeakingWhileMutedTooltip: F,
            shouldShowSpeakingWhilePTTTooltip: V,
            shouldShowInputDeviceChangedTooltip: W,
            shouldShowPTTJoinTooltip: H,
            dismissTooltips: K,
            speaking: z,
        } = e,
        { showPTTIconIndicator: $ } = C.A.useConfig({ location: "MicrophoneButton" }),
        q = (0, o.bG)([y.Ay], () => y.Ay.getMode() === N.TB.PUSH_TO_TALK),
        Q = (0, o.bG)([y.Ay], () => y.Ay.getSettings().modeOptions.shortcut),
        Y = (0, o.bG)([g.A], () => g.A.getIsTutorialActive(_.v.MUTE_TUTORIAL)),
        J = (0, o.bG)([S.A], () => null != S.A.getChannelId()),
        { name: X } = (0, j.x5)(N.oh.AUDIO_INPUT),
        { enabledInputProfiles: Z } = (0, A.d)({ location: "MicrophoneButton" }),
        ee = i.useRef(null),
        et = n || D || l,
        en = (0, c.L)(et ? "unmute" : "mute"),
        { analyticsLocations: ea } = (0, x.Ay)(h.A.AUDIO_INPUT_BUTTON),
        { Component: ei, events: el, play: es } = en,
        er = l || D ? r.O1p : ei;
    i.useEffect(() => () => es(), [et, es]);
    let eo = (0, f.A)(n, l, D, M);
    t = F
        ? { tooltipType: "green_void_do_not_use", tooltipText: I.intl.string(I.t["29gnR4"]), tooltipForceOpen: !0 }
        : H || V
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: I.intl.format(I.t.c1qUOQ, { keybind: T.dI(Q).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: eo };
    let ed = $ && q && J,
        ec = et ? d.A.colors.ICON_VOICE_MUTED : "currentColor",
        eu = i.useCallback(() => {
            B(), Y && p.N(_.v.MUTE_TUTORIAL);
        }, [B, Y]);
    return (0, a.jsxs)(x.f5, {
        value: ea,
        children: [
            (0, a.jsx)(m.YNO, {
                targetElementRef: ee,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        K(),
                        (0, a.jsx)(x.f5, {
                            value: ea,
                            children: (0, a.jsx)(v.A, {
                                onInteraction: (0, b.s)("AudioDeviceMenu", h.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: Z.length > 0,
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
                animation: m.YNO.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: i } = e,
                        { isShown: l } = n,
                        o = l ? r.tN5 : r.abt;
                    return (0, a.jsxs)("div", {
                        ref: ee,
                        className: s()(O.Lh, { [O.v8]: et, [O.q6]: l }),
                        children: [
                            (0, a.jsx)(E.A, {
                                "aria-checked": et,
                                "aria-label": I.intl.string(I.t.w4m945),
                                className: O.eT,
                                disabled: M,
                                icon: (0, a.jsx)(er, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: ec,
                                    className: P,
                                }),
                                onClick: eu,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    L(), el.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    U(), el.onMouseLeave();
                                },
                                plated: null != G,
                                redGlow: et,
                                role: "switch",
                                ...t,
                                children: ed ? (0, a.jsx)("div", { className: s()(R.U, { [R.z]: z }) }) : null,
                            }),
                            (0, a.jsx)(E.A, {
                                "aria-label": W
                                    ? I.intl.formatToPlainString(I.t["18wnuD"], { inputDeviceName: X })
                                    : I.intl.string(I.t.fRzCbB),
                                className: s()(O.UT, { [O.q6]: l }),
                                disabled: M,
                                icon: (0, a.jsx)(o, {
                                    className: O.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: ec,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: L,
                                onMouseLeave: U,
                                plated: null != G,
                                redGlow: et,
                                tooltipType: W ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: W,
                                tooltipPositionKey: W
                                    ? I.intl.formatToPlainString(I.t["18wnuD"], { inputDeviceName: X })
                                    : void 0,
                                tooltipShouldShow: !l,
                                tooltipText: W
                                    ? I.intl.format(I.t["18wnuD"], { inputDeviceName: X })
                                    : I.intl.string(I.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, a.jsx)(u.AM, {
                targetElementRef: ee,
                shouldShow: Y,
                graphic: { type: "image", src: w.A },
                onRequestClose: () => {
                    p.N(_.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: I.intl.string(k.default.VG4zAf),
                body: I.intl.string(k.default["8VIRzR"]),
            }),
        ],
    });
}
