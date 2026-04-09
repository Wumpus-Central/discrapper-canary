n.d(t, { A: () => D });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
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
    f = n(362823),
    v = n(980923),
    _ = n(206018),
    b = n(480890),
    j = n(74848),
    A = n(533488),
    C = n(499156),
    y = n(430452),
    S = n(383501),
    E = n(350535),
    T = n(42473),
    N = n(731854),
    I = n(985018),
    k = n(807880),
    O = n(479360),
    R = n(545229),
    w = n(973324);
function D(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
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
        Y = (0, o.bG)([g.A], () => g.A.getIsTutorialActive(f.v.MUTE_TUTORIAL)),
        J = (0, o.bG)([S.A], () => null != S.A.getChannelId()),
        { name: X } = (0, j.x5)(N.oh.AUDIO_INPUT),
        { enabledInputProfiles: Z } = (0, A.d)({ location: "MicrophoneButton" }),
        ee = i.useRef(null),
        et = n || D || s,
        en = (0, c.L)(et ? "unmute" : "mute"),
        { analyticsLocations: ea } = (0, x.Ay)(h.A.AUDIO_INPUT_BUTTON),
        { Component: ei, events: es, play: el } = en,
        er = s || D ? r.O1p : ei;
    i.useEffect(() => () => el(), [et, el]);
    let eo = (0, v.A)(n, s, D, M);
    t = F
        ? { tooltipType: "green_void_do_not_use", tooltipText: I.intl.string(I.t["29gnR4"]), tooltipForceOpen: !0 }
        : H || V
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: I.intl.format(I.t.c1qUOQ, { keybind: E.dI(Q).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: eo };
    let ed = $ && q && J,
        ec = et ? d.A.colors.ICON_VOICE_MUTED : "currentColor",
        eu = i.useCallback(() => {
            B(), Y && p.N(f.v.MUTE_TUTORIAL);
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
                            children: (0, a.jsx)(_.A, {
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
                        { isShown: s } = n,
                        o = s ? r.tN5 : r.abt;
                    return (0, a.jsxs)("div", {
                        ref: ee,
                        className: l()(O.Lh, { [O.v8]: et, [O.q6]: s }),
                        children: [
                            (0, a.jsx)(T.A, {
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
                                    L(), es.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    U(), es.onMouseLeave();
                                },
                                plated: null != G,
                                redGlow: et,
                                role: "switch",
                                ...t,
                                children: ed ? (0, a.jsx)("div", { className: l()(R.U, { [R.z]: z }) }) : null,
                            }),
                            (0, a.jsx)(T.A, {
                                "aria-label": W
                                    ? I.intl.formatToPlainString(I.t["18wnuD"], { inputDeviceName: X })
                                    : I.intl.string(I.t.fRzCbB),
                                className: l()(O.UT, { [O.q6]: s }),
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
                                tooltipShouldShow: !s,
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
                    p.N(f.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: I.intl.string(k.default.VG4zAf),
                body: I.intl.string(k.default["8VIRzR"]),
            }),
        ],
    });
}
