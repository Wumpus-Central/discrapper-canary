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
    x = n(993719),
    p = n(14059),
    g = n(362823),
    _ = n(980923),
    f = n(206018),
    b = n(480890),
    v = n(74848),
    j = n(77735),
    C = n(340913),
    A = n(277342),
    T = n(430452),
    y = n(383501),
    S = n(350535),
    E = n(42473),
    N = n(731854),
    I = n(985018),
    k = n(807880),
    R = n(368149),
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
            latched: $,
        } = e,
        { showPTTIconIndicator: q } = C.A.useConfig({ location: "MicrophoneButton" }),
        Q = (0, o.bG)([T.Ay], () => T.Ay.getMode() === N.TB.PUSH_TO_TALK),
        Y = (0, o.bG)([T.Ay], () => T.Ay.getSettings().modeOptions.shortcut),
        J = (0, o.bG)([p.A], () => p.A.getIsTutorialActive(g.v.MUTE_TUTORIAL)),
        X = (0, o.bG)([y.A], () => null != y.A.getChannelId()),
        { name: Z } = (0, v.x5)(N.oh.AUDIO_INPUT),
        { enabledInputProfiles: ee } = (0, j.d)({ location: "MicrophoneButton" }),
        et = i.useRef(null),
        en = n || D || s,
        ea = (0, A.q)(en),
        { analyticsLocations: ei } = (0, h.Ay)(m.A.AUDIO_INPUT_BUTTON),
        { Component: es, events: el, play: er } = ea,
        eo = s || D ? r.O1p : es;
    i.useEffect(() => () => er(), [en, er]);
    let ed = (0, _.A)(n, s, D, M);
    t = F
        ? { tooltipType: "green_void_do_not_use", tooltipText: I.intl.string(I.t["29gnR4"]), tooltipForceOpen: !0 }
        : H || V
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: I.intl.format(I.t.c1qUOQ, { keybind: S.dI(Y).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: ed };
    let ec = q && Q && X,
        eu = en ? d.A.colors.ICON_VOICE_MUTED : "currentColor",
        em = i.useCallback(() => {
            B(), J && x.N(g.v.MUTE_TUTORIAL);
        }, [B, J]);
    return (0, a.jsxs)(h.f5, {
        value: ei,
        children: [
            (0, a.jsx)(u.YNO, {
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        K(),
                        (0, a.jsx)(h.f5, {
                            value: ei,
                            children: (0, a.jsx)(f.A, {
                                onInteraction: (0, b.s)("AudioDeviceMenu", m.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: ee.length > 0,
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
                        ref: et,
                        className: l()(R.Lh, { [R.v8]: en, [R.q6]: s }),
                        children: [
                            (0, a.jsx)(E.A, {
                                "aria-checked": en,
                                "aria-label": I.intl.string(I.t.w4m945),
                                className: R.eT,
                                disabled: M,
                                icon: (0, a.jsx)(eo, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: eu,
                                    className: P,
                                }),
                                onClick: em,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    L(), el.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    U(), el.onMouseLeave();
                                },
                                plated: null != G,
                                redGlow: en,
                                role: "switch",
                                ...t,
                                children: ec
                                    ? (0, a.jsx)("div", { className: l()(O.Ur, { [O.zY]: z, [O.yM]: $ && !z }) })
                                    : null,
                            }),
                            (0, a.jsx)(E.A, {
                                "aria-label": W
                                    ? I.intl.formatToPlainString(I.t["18wnuD"], { inputDeviceName: Z })
                                    : I.intl.string(I.t.fRzCbB),
                                className: l()(R.UT, { [R.q6]: s }),
                                disabled: M,
                                icon: (0, a.jsx)(o, {
                                    className: R.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: eu,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: L,
                                onMouseLeave: U,
                                plated: null != G,
                                redGlow: en,
                                tooltipType: W ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: W,
                                tooltipPositionKey: W
                                    ? I.intl.formatToPlainString(I.t["18wnuD"], { inputDeviceName: Z })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: W
                                    ? I.intl.format(I.t["18wnuD"], { inputDeviceName: Z })
                                    : I.intl.string(I.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, a.jsx)(c.AM, {
                targetElementRef: et,
                shouldShow: J,
                graphic: { type: "image", src: w.A },
                onRequestClose: () => {
                    x.N(g.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: I.intl.string(k.default.VG4zAf),
                body: I.intl.string(k.default["8VIRzR"]),
            }),
        ],
    });
}
