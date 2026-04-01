n.d(t, { A: () => A });
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
    v = n(985018),
    b = n(479360),
    j = n(622154);
function A(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
            onClick: A,
            iconForeground: C,
            nameplate: y,
            shouldShowOutputDeviceChangedTooltip: S,
            dismissTooltips: T,
        } = e,
        E = t || n,
        {
            Component: N,
            play: I,
            events: { onMouseEnter: k, onMouseLeave: O },
        } = (0, d.I)(E ? "undeafen" : "deafen"),
        R = n ? r.TJE : N,
        { name: w } = (0, g.x5)(f.oh.AUDIO_OUTPUT),
        D = (0, h.A)(t, n, s),
        { analyticsLocations: P } = (0, m.Ay)(u.A.AUDIO_OUTPUT_BUTTON),
        M = i.useRef(null);
    return (
        i.useEffect(() => () => I(), [E, I]),
        (0, a.jsx)(m.f5, {
            value: P,
            children: (0, a.jsx)(c.YNO, {
                targetElementRef: M,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        T(),
                        (0, a.jsx)(m.f5, {
                            value: P,
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
                        ref: M,
                        className: l()(b.Lh, { [b.v8]: E, [b.q6]: d }),
                        children: [
                            (0, a.jsx)(_.A, {
                                "aria-checked": E,
                                "aria-label": v.intl.string(v.t.wjcRFX),
                                className: b.eT,
                                disabled: s,
                                icon: (0, a.jsx)(R, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: E ? o.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: C,
                                }),
                                iconForeground: E ? j.o : void 0,
                                innerClassName: l()({ [j.T]: n }),
                                onClick: A,
                                onContextMenu: i,
                                onMouseEnter: k,
                                onMouseLeave: O,
                                plated: null != y,
                                redGlow: E,
                                role: "switch",
                                tooltipText: D,
                            }),
                            (0, a.jsx)(_.A, {
                                className: l()(b.UT, { [b.q6]: d }),
                                disabled: s,
                                icon: (0, a.jsx)(c, {
                                    className: b.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: E ? o.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: i,
                                onContextMenu: i,
                                plated: null != y,
                                redGlow: E,
                                tooltipType: S ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: S,
                                tooltipPositionKey: S
                                    ? v.intl.formatToPlainString(v.t["f+DDY/"], { outputDeviceName: w })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: S
                                    ? v.intl.format(v.t["f+DDY/"], { outputDeviceName: w })
                                    : v.intl.string(v.t.aA4Vce),
                                "aria-label": S
                                    ? v.intl.formatToPlainString(v.t["f+DDY/"], { outputDeviceName: w })
                                    : v.intl.string(v.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
