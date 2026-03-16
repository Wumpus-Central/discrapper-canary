n.d(t, { A: () => D });
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
    p = n(993719),
    x = n(14059),
    g = n(362823),
    _ = n(980923),
    f = n(206018),
    v = n(480890),
    b = n(74848),
    j = n(77735),
    A = n(340913),
    C = n(277342),
    T = n(430452),
    y = n(383501),
    S = n(350535),
    E = n(42473),
    N = n(731854),
    I = n(985018),
    R = n(807880),
    k = n(368149),
    O = n(709502),
    w = n(973324);
function D(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
            suppress: D,
            awaitingRemote: M,
            iconForeground: P,
            onMouseEnter: U,
            onMouseLeave: L,
            onClick: B,
            nameplate: G,
            shouldShowSpeakingWhileMutedTooltip: F,
            shouldShowSpeakingWhilePTTTooltip: V,
            shouldShowInputDeviceChangedTooltip: W,
            shouldShowPTTJoinTooltip: H,
            dismissTooltips: K,
            speaking: z,
        } = e,
        { showPTTIconIndicator: $ } = A.A.useConfig({ location: "MicrophoneButton" }),
        q = (0, o.bG)([T.Ay], () => T.Ay.getMode() === N.TB.PUSH_TO_TALK),
        Q = (0, o.bG)([T.Ay], () => T.Ay.getSettings().modeOptions.shortcut),
        Y = (0, o.bG)([x.A], () => x.A.getIsTutorialActive(g.v.MUTE_TUTORIAL)),
        J = (0, o.bG)([y.A], () => null != y.A.getChannelId()),
        { name: X } = (0, b.x5)(N.oh.AUDIO_INPUT),
        { enabledInputProfiles: Z } = (0, j.d)({ location: "MicrophoneButton" }),
        ee = i.useRef(null),
        et = n || D || s,
        en = (0, C.q)(et),
        { analyticsLocations: ea } = (0, h.Ay)(m.A.AUDIO_INPUT_BUTTON),
        { Component: ei, events: es, play: el } = en,
        er = s || D ? r.O1p : ei;
    i.useEffect(() => () => el(), [et, el]);
    let eo = (0, _.A)(n, s, D, M);
    t = F
        ? { tooltipType: "green_void_do_not_use", tooltipText: I.intl.string(I.t["29gnR4"]), tooltipForceOpen: !0 }
        : H || V
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: I.intl.format(I.t.c1qUOQ, { keybind: S.dI(Q).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: eo };
    let ed = $ && q && J,
        ec = et ? d.A.colors.ICON_VOICE_MUTED : "currentColor",
        eu = i.useCallback(() => {
            B(), Y && p.N(g.v.MUTE_TUTORIAL);
        }, [B, Y]);
    return (0, a.jsxs)(h.f5, {
        value: ea,
        children: [
            (0, a.jsx)(u.YNO, {
                targetElementRef: ee,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        K(),
                        (0, a.jsx)(h.f5, {
                            value: ea,
                            children: (0, a.jsx)(f.A, {
                                onInteraction: (0, v.s)("AudioDeviceMenu", m.A.ACCOUNT),
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
                animation: u.YNO.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: i } = e,
                        { isShown: s } = n,
                        o = s ? r.tN5 : r.abt;
                    return (0, a.jsxs)("div", {
                        ref: ee,
                        className: l()(k.Lh, { [k.v8]: et, [k.q6]: s }),
                        children: [
                            (0, a.jsx)(E.A, {
                                "aria-checked": et,
                                "aria-label": I.intl.string(I.t.w4m945),
                                className: k.eT,
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
                                    U(), es.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    L(), es.onMouseLeave();
                                },
                                plated: null != G,
                                redGlow: et,
                                role: "switch",
                                ...t,
                                children: ed ? (0, a.jsx)("div", { className: l()(O.U, { [O.z]: z }) }) : null,
                            }),
                            (0, a.jsx)(E.A, {
                                "aria-label": W
                                    ? I.intl.formatToPlainString(I.t["18wnuD"], { inputDeviceName: X })
                                    : I.intl.string(I.t.fRzCbB),
                                className: l()(k.UT, { [k.q6]: s }),
                                disabled: M,
                                icon: (0, a.jsx)(o, {
                                    className: k.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: ec,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: U,
                                onMouseLeave: L,
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
            (0, a.jsx)(c.AM, {
                targetElementRef: ee,
                shouldShow: Y,
                graphic: { type: "image", src: w.A },
                onRequestClose: () => {
                    p.N(g.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: I.intl.string(R.default.VG4zAf),
                body: I.intl.string(R.default["8VIRzR"]),
            }),
        ],
    });
}
