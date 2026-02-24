n.d(t, { A: () => C });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(158954),
    o = n(827734),
    d = n(348858),
    c = n(397927),
    u = n(793574),
    m = n(688810),
    h = n(617354),
    x = n(206018),
    p = n(480890),
    g = n(74848),
    _ = n(42473),
    f = n(731854),
    b = n(985018),
    v = n(368149),
    j = n(631121);
function C(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
            onClick: C,
            iconForeground: A,
            nameplate: T,
            shouldShowOutputDeviceChangedTooltip: S,
            dismissTooltips: y,
        } = e,
        E = t || n,
        {
            Component: N,
            play: I,
            events: { onMouseEnter: k, onMouseLeave: R },
        } = (0, d.I)(E ? "undeafen" : "deafen"),
        O = n ? r.TJE : N,
        { name: w } = (0, g.x5)(f.oh.AUDIO_OUTPUT),
        D = (0, h.A)(t, n, s),
        { analyticsLocations: M } = (0, m.Ay)(u.A.AUDIO_OUTPUT_BUTTON),
        P = i.useRef(null);
    return (
        i.useEffect(() => () => I(), [E, I]),
        (0, a.jsx)(m.f5, {
            value: M,
            children: (0, a.jsx)(c.YNO, {
                targetElementRef: P,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        y(),
                        (0, a.jsx)(m.f5, {
                            value: M,
                            children: (0, a.jsx)(x.A, {
                                onInteraction: (0, p.s)("AudioDeviceMenu", u.A.ACCOUNT),
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
                animation: c.YNO.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: i } = e,
                        { isShown: d } = t,
                        c = d ? r.tN5 : r.abt;
                    return (0, a.jsxs)("div", {
                        ref: P,
                        className: l()(v.Lh, { [v.v8]: E, [v.q6]: d }),
                        children: [
                            (0, a.jsx)(_.A, {
                                "aria-checked": E,
                                "aria-label": b.intl.string(b.t.wjcRFX),
                                className: v.eT,
                                disabled: s,
                                icon: (0, a.jsx)(O, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: E ? o.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: A,
                                }),
                                iconForeground: E ? j.o : void 0,
                                innerClassName: l()({ [j.T]: n }),
                                onClick: C,
                                onContextMenu: i,
                                onMouseEnter: k,
                                onMouseLeave: R,
                                plated: null != T,
                                redGlow: E,
                                role: "switch",
                                tooltipText: D,
                            }),
                            (0, a.jsx)(_.A, {
                                className: l()(v.UT, { [v.q6]: d }),
                                disabled: s,
                                icon: (0, a.jsx)(c, {
                                    className: v.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: E ? o.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: i,
                                onContextMenu: i,
                                plated: null != T,
                                redGlow: E,
                                tooltipType: S ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: S,
                                tooltipPositionKey: S
                                    ? b.intl.formatToPlainString(b.t["f+DDY/"], { outputDeviceName: w })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: S
                                    ? b.intl.format(b.t["f+DDY/"], { outputDeviceName: w })
                                    : b.intl.string(b.t.aA4Vce),
                                "aria-label": S
                                    ? b.intl.formatToPlainString(b.t["f+DDY/"], { outputDeviceName: w })
                                    : b.intl.string(b.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
