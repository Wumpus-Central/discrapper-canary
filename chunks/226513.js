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
    f = n(42473),
    v = n(731854),
    _ = n(985018),
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
            dismissTooltips: E,
        } = e,
        T = t || n,
        {
            Component: N,
            play: I,
            events: { onMouseEnter: k, onMouseLeave: O },
        } = (0, d.I)(T ? "undeafen" : "deafen"),
        R = n ? r.TJE : N,
        { name: w } = (0, g.x5)(v.oh.AUDIO_OUTPUT),
        D = (0, h.A)(t, n, s),
        { analyticsLocations: M } = (0, m.Ay)(u.A.AUDIO_OUTPUT_BUTTON),
        P = i.useRef(null);
    return (
        i.useEffect(() => () => I(), [T, I]),
        (0, a.jsx)(m.f5, {
            value: M,
            children: (0, a.jsx)(c.YNO, {
                targetElementRef: P,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
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
                        className: l()(b.Lh, { [b.v8]: T, [b.q6]: d }),
                        children: [
                            (0, a.jsx)(f.A, {
                                "aria-checked": T,
                                "aria-label": _.intl.string(_.t.wjcRFX),
                                className: b.eT,
                                disabled: s,
                                icon: (0, a.jsx)(R, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: T ? o.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: C,
                                }),
                                iconForeground: T ? j.o : void 0,
                                innerClassName: l()({ [j.T]: n }),
                                onClick: A,
                                onContextMenu: i,
                                onMouseEnter: k,
                                onMouseLeave: O,
                                plated: null != y,
                                redGlow: T,
                                role: "switch",
                                tooltipText: D,
                            }),
                            (0, a.jsx)(f.A, {
                                className: l()(b.UT, { [b.q6]: d }),
                                disabled: s,
                                icon: (0, a.jsx)(c, {
                                    className: b.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: T ? o.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: i,
                                onContextMenu: i,
                                plated: null != y,
                                redGlow: T,
                                tooltipType: S ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: S,
                                tooltipPositionKey: S
                                    ? _.intl.formatToPlainString(_.t["f+DDY/"], { outputDeviceName: w })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: S
                                    ? _.intl.format(_.t["f+DDY/"], { outputDeviceName: w })
                                    : _.intl.string(_.t.aA4Vce),
                                "aria-label": S
                                    ? _.intl.formatToPlainString(_.t["f+DDY/"], { outputDeviceName: w })
                                    : _.intl.string(_.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
