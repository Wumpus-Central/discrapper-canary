n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(615675),
    o = n(900797),
    d = n(847374),
    c = n(827734),
    u = n(348858),
    p = n(265872),
    h = n(793574),
    m = n(688810),
    _ = n(617354),
    A = n(206018),
    f = n(480890),
    g = n(74848),
    x = n(42473),
    E = n(731854),
    C = n(985018),
    T = n(490704),
    v = n(967194);
function S(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: l,
            onClick: S,
            iconForeground: b,
            nameplate: j,
            shouldShowOutputDeviceChangedTooltip: I,
            dismissTooltips: R,
        } = e,
        N = t || n,
        {
            Component: y,
            play: M,
            events: { onMouseEnter: O, onMouseLeave: U },
        } = (0, u.I)(N ? "undeafen" : "deafen"),
        k = n ? r.T : y,
        { name: P } = (0, g.x5)(E.oh.AUDIO_OUTPUT),
        w = (0, _.A)(t, n, l),
        { analyticsLocations: L } = (0, m.Ay)(h.A.AUDIO_OUTPUT_BUTTON),
        D = s.useRef(null);
    return (
        s.useEffect(() => () => M(), [N, M]),
        (0, i.jsx)(m.f5, {
            value: L,
            children: (0, i.jsx)(p.Y, {
                targetElementRef: D,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        R(),
                        (0, i.jsx)(m.f5, {
                            value: L,
                            children: (0, i.jsx)(A.A, {
                                onInteraction: (0, f.s)("AudioDeviceMenu", h.A.ACCOUNT),
                                onClose: t,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: s } = e,
                        { isShown: r } = t,
                        u = r ? o.t : d.a;
                    return (0, i.jsxs)("div", {
                        ref: D,
                        className: a()(T.Lh, { [T.v8]: N, [T.q6]: r }),
                        children: [
                            (0, i.jsx)(x.A, {
                                "aria-checked": N,
                                "aria-label": C.intl.string(C.t.wjcRFX),
                                className: T.eT,
                                disabled: l,
                                icon: (0, i.jsx)(k, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: N ? c.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: b,
                                }),
                                iconForeground: N ? v.o : void 0,
                                innerClassName: a()({ [v.T]: n }),
                                onClick: S,
                                onContextMenu: s,
                                onMouseEnter: O,
                                onMouseLeave: U,
                                plated: null != j,
                                redGlow: N,
                                role: "switch",
                                tooltipText: w,
                            }),
                            (0, i.jsx)(x.A, {
                                className: a()(T.UT, { [T.q6]: r }),
                                disabled: l,
                                icon: (0, i.jsx)(u, {
                                    className: T.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: N ? c.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != j,
                                redGlow: N,
                                tooltipType: I ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: I,
                                tooltipPositionKey: I
                                    ? C.intl.formatToPlainString(C.t["f+DDY/"], { outputDeviceName: P })
                                    : void 0,
                                tooltipShouldShow: !r,
                                tooltipText: I
                                    ? C.intl.format(C.t["f+DDY/"], { outputDeviceName: P })
                                    : C.intl.string(C.t.aA4Vce),
                                "aria-label": I
                                    ? C.intl.formatToPlainString(C.t["f+DDY/"], { outputDeviceName: P })
                                    : C.intl.string(C.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
