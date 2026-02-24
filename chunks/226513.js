n.d(t, { A: () => j });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(158954),
    o = n(827734),
    d = n(397927),
    c = n(793574),
    u = n(688810),
    m = n(617354),
    h = n(206018),
    x = n(480890),
    p = n(74848),
    g = n(42473),
    _ = n(731854),
    f = n(985018),
    b = n(368149),
    v = n(631121);
function j(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
            onClick: j,
            iconForeground: C,
            nameplate: A,
            shouldShowOutputDeviceChangedTooltip: T,
            dismissTooltips: S,
        } = e,
        y = t || n,
        { name: E } = (0, p.x5)(_.oh.AUDIO_OUTPUT),
        N = (0, m.A)(t, n, s),
        { analyticsLocations: I } = (0, u.Ay)(c.A.AUDIO_OUTPUT_BUTTON),
        k = i.useRef(null),
        R = y ? o.A.colors.ICON_VOICE_MUTED : "currentColor";
    return (0, a.jsx)(u.f5, {
        value: I,
        children: (0, a.jsx)(d.YNO, {
            targetElementRef: k,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    S(),
                    (0, a.jsx)(u.f5, {
                        value: I,
                        children: (0, a.jsx)(h.A, {
                            onInteraction: (0, x.s)("AudioDeviceMenu", c.A.ACCOUNT),
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
            animation: d.YNO.Animation.FADE,
            spacing: 4,
            children: (e, t) => {
                let { onClick: i } = e,
                    { isShown: d } = t,
                    c = d ? r.tN5 : r.abt;
                return (0, a.jsxs)("div", {
                    ref: k,
                    className: l()(b.Lh, { [b.v8]: y, [b.q6]: d }),
                    children: [
                        (0, a.jsx)(g.A, {
                            "aria-checked": y,
                            "aria-label": f.intl.string(f.t.wjcRFX),
                            className: b.eT,
                            disabled: s,
                            icon: n
                                ? (0, a.jsx)(r.TJE, { size: "refresh_sm", color: R, className: C })
                                : (0, a.jsx)(r.Wtl, {
                                      defaultViewModelInstance: y ? "Off" : "On",
                                      allowAnimationWhileUnfocused: !0,
                                      className: r.d5l.refresh_sm,
                                      dataBinding: { fill: R, on: !y },
                                      eventTargetRef: k,
                                  }),
                            iconForeground: y ? v.o : void 0,
                            innerClassName: l()({ [v.T]: n }),
                            onClick: j,
                            onContextMenu: i,
                            plated: null != A,
                            redGlow: y,
                            role: "switch",
                            tooltipText: N,
                        }),
                        (0, a.jsx)(g.A, {
                            className: l()(b.UT, { [b.q6]: d }),
                            disabled: s,
                            icon: (0, a.jsx)(c, {
                                className: b.$$,
                                size: "custom",
                                width: 12,
                                height: 12,
                                color: y ? o.A.colors.ICON_VOICE_MUTED : "currentColor",
                            }),
                            onClick: i,
                            onContextMenu: i,
                            plated: null != A,
                            redGlow: y,
                            tooltipType: T ? "green_void_do_not_use" : void 0,
                            tooltipForceOpen: T,
                            tooltipPositionKey: T
                                ? f.intl.formatToPlainString(f.t["f+DDY/"], { outputDeviceName: E })
                                : void 0,
                            tooltipShouldShow: !d,
                            tooltipText: T
                                ? f.intl.format(f.t["f+DDY/"], { outputDeviceName: E })
                                : f.intl.string(f.t.aA4Vce),
                            "aria-label": T
                                ? f.intl.formatToPlainString(f.t["f+DDY/"], { outputDeviceName: E })
                                : f.intl.string(f.t.aA4Vce),
                        }),
                    ],
                });
            },
        }),
    });
}
