n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(666654),
    o = n(900797),
    d = n(847374),
    c = n(311907),
    u = n(827734),
    p = n(523875),
    h = n(265486),
    m = n(265872),
    _ = n(793574),
    A = n(688810),
    f = n(993719),
    g = n(14059),
    x = n(362823),
    E = n(980923),
    C = n(206018),
    T = n(480890),
    v = n(74848),
    S = n(533488),
    b = n(499156),
    j = n(430452),
    I = n(383501),
    R = n(350535),
    N = n(42473),
    y = n(731854),
    M = n(985018),
    O = n(224585),
    U = n(490704),
    k = n(949341),
    P = n(973324);
function w(e) {
    let t,
        {
            selfMute: n,
            serverMute: l,
            suppress: w,
            awaitingRemote: L,
            iconForeground: D,
            onMouseEnter: F,
            onMouseLeave: B,
            onClick: G,
            nameplate: V,
            shouldShowSpeakingWhileMutedTooltip: W,
            shouldShowSpeakingWhilePTTTooltip: Q,
            shouldShowInputDeviceChangedTooltip: H,
            shouldShowPTTJoinTooltip: q,
            dismissTooltips: z,
            speaking: K,
        } = e,
        { showPTTIconIndicator: $ } = b.A.useConfig({ location: "MicrophoneButton" }),
        Y = (0, c.bG)([j.Ay], () => j.Ay.getMode() === y.TB.PUSH_TO_TALK),
        X = (0, c.bG)([j.Ay], () => j.Ay.getSettings().modeOptions.shortcut),
        Z = (0, c.bG)([g.A], () => g.A.getIsTutorialActive(x.v.MUTE_TUTORIAL)),
        J = (0, c.bG)([I.A], () => null != I.A.getChannelId()),
        { name: ee } = (0, v.x5)(y.oh.AUDIO_INPUT),
        { enabledInputProfiles: et } = (0, S.d)({ location: "MicrophoneButton" }),
        en = s.useRef(null),
        ei = n || w || l,
        es = (0, p.L)(ei ? "unmute" : "mute"),
        { analyticsLocations: el } = (0, A.Ay)(_.A.AUDIO_INPUT_BUTTON),
        { Component: ea, events: er, play: eo } = es,
        ed = l || w ? r.O : ea;
    s.useEffect(() => () => eo(), [ei, eo]);
    let ec = (0, E.A)(n, l, w, L);
    t = W
        ? { tooltipType: "green_void_do_not_use", tooltipText: M.intl.string(M.t["29gnR4"]), tooltipForceOpen: !0 }
        : q || Q
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: M.intl.format(M.t.c1qUOQ, { keybind: R.dI(X).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: ec };
    let eu = $ && Y && J,
        ep = ei ? u.A.colors.ICON_VOICE_MUTED : "currentColor",
        eh = s.useCallback(() => {
            G(), Z && f.N(x.v.MUTE_TUTORIAL);
        }, [G, Z]);
    return (0, i.jsxs)(A.f5, {
        value: el,
        children: [
            (0, i.jsx)(m.Y, {
                targetElementRef: en,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        z(),
                        (0, i.jsx)(A.f5, {
                            value: el,
                            children: (0, i.jsx)(C.A, {
                                onInteraction: (0, T.s)("AudioDeviceMenu", _.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: et.length > 0,
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
                animation: m.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: s } = e,
                        { isShown: l } = n,
                        r = l ? o.t : d.a;
                    return (0, i.jsxs)("div", {
                        ref: en,
                        className: a()(U.Lh, { [U.v8]: ei, [U.q6]: l }),
                        children: [
                            (0, i.jsx)(N.A, {
                                "aria-checked": ei,
                                "aria-label": M.intl.string(M.t.w4m945),
                                className: U.eT,
                                disabled: L,
                                icon: (0, i.jsx)(ed, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: ep,
                                    className: D,
                                }),
                                onClick: eh,
                                onContextMenu: s,
                                onMouseEnter: () => {
                                    F(), er.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    B(), er.onMouseLeave();
                                },
                                plated: null != V,
                                redGlow: ei,
                                role: "switch",
                                ...t,
                                children: eu ? (0, i.jsx)("div", { className: a()(k.U, { [k.z]: K }) }) : null,
                            }),
                            (0, i.jsx)(N.A, {
                                "aria-label": H
                                    ? M.intl.formatToPlainString(M.t["18wnuD"], { inputDeviceName: ee })
                                    : M.intl.string(M.t.fRzCbB),
                                className: a()(U.UT, { [U.q6]: l }),
                                disabled: L,
                                icon: (0, i.jsx)(r, {
                                    className: U.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: ep,
                                }),
                                onClick: s,
                                onContextMenu: s,
                                onMouseEnter: F,
                                onMouseLeave: B,
                                plated: null != V,
                                redGlow: ei,
                                tooltipType: H ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: H,
                                tooltipPositionKey: H
                                    ? M.intl.formatToPlainString(M.t["18wnuD"], { inputDeviceName: ee })
                                    : void 0,
                                tooltipShouldShow: !l,
                                tooltipText: H
                                    ? M.intl.format(M.t["18wnuD"], { inputDeviceName: ee })
                                    : M.intl.string(M.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(h.A, {
                targetElementRef: en,
                shouldShow: Z,
                graphic: { type: "image", src: P.A },
                onRequestClose: () => {
                    f.N(x.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: M.intl.string(O.default.VG4zAf),
                body: M.intl.string(O.default["8VIRzR"]),
            }),
        ],
    });
}
