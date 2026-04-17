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
    f = n(731854),
    v = n(985018),
    _ = n(490704),
    b = n(967194);
function j(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
            onClick: j,
            iconForeground: A,
            nameplate: C,
            shouldShowOutputDeviceChangedTooltip: y,
            dismissTooltips: S,
        } = e,
        E = t || n,
        { name: T } = (0, p.x5)(f.oh.AUDIO_OUTPUT),
        N = (0, m.A)(t, n, s),
        { analyticsLocations: I } = (0, u.Ay)(c.A.AUDIO_OUTPUT_BUTTON),
        k = i.useRef(null),
        O = E ? o.A.colors.ICON_VOICE_MUTED : "currentColor";
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
                    className: l()(_.Lh, { [_.v8]: E, [_.q6]: d }),
                    children: [
                        (0, a.jsx)(g.A, {
                            "aria-checked": E,
                            "aria-label": v.intl.string(v.t.wjcRFX),
                            className: _.eT,
                            disabled: s,
                            icon: n
                                ? (0, a.jsx)(r.TJE, { size: "refresh_sm", color: O, className: A })
                                : (0, a.jsx)(r.Wtl, {
                                      autoPause: !0,
                                      defaultViewModelInstance: E ? "Off" : "On",
                                      allowAnimationWhileUnfocused: !0,
                                      className: l()(r.d5l.refresh_sm, A),
                                      dataBinding: { fill: O, on: !E },
                                      eventTargetRef: k,
                                  }),
                            iconForeground: E ? b.o : void 0,
                            innerClassName: l()({ [b.T]: n }),
                            onClick: j,
                            onContextMenu: i,
                            plated: null != C,
                            redGlow: E,
                            role: "switch",
                            tooltipText: N,
                        }),
                        (0, a.jsx)(g.A, {
                            className: l()(_.UT, { [_.q6]: d }),
                            disabled: s,
                            icon: (0, a.jsx)(c, {
                                className: _.$$,
                                size: "custom",
                                width: 12,
                                height: 12,
                                color: E ? o.A.colors.ICON_VOICE_MUTED : "currentColor",
                            }),
                            onClick: i,
                            onContextMenu: i,
                            plated: null != C,
                            redGlow: E,
                            tooltipType: y ? "green_void_do_not_use" : void 0,
                            tooltipForceOpen: y,
                            tooltipPositionKey: y
                                ? v.intl.formatToPlainString(v.t["f+DDY/"], { outputDeviceName: T })
                                : void 0,
                            tooltipShouldShow: !d,
                            tooltipText: y
                                ? v.intl.format(v.t["f+DDY/"], { outputDeviceName: T })
                                : v.intl.string(v.t.aA4Vce),
                            "aria-label": y
                                ? v.intl.formatToPlainString(v.t["f+DDY/"], { outputDeviceName: T })
                                : v.intl.string(v.t.aA4Vce),
                        }),
                    ],
                });
            },
        }),
    });
}
