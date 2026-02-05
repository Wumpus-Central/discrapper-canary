l.d(t, { A: () => h });
var s = l(627968),
    a = l(64700),
    n = l(508425),
    i = l(158954),
    r = l(397927),
    o = l(48736),
    d = l(954571),
    c = l(750656),
    u = l(652215),
    m = l(927961),
    _ = l(985018),
    x = l(512134),
    g = l(880203);
function h(e) {
    let { selectedColors: t, setSelectedColors: l, defaultColor: h, selectedEffectId: p, className: f } = e,
        N = p === n.z.GRADIENT,
        A = (0, a.useCallback)(
            (e) => {
                l([e]), d.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === h, colors: [e] });
            },
            [l, h],
        ),
        C = (0, a.useCallback)(
            (e) => {
                l(e), d.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [l],
        );
    return (0, s.jsxs)("div", {
        className: f,
        children: [
            (0, s.jsxs)(i.DZT, {
                variant: "heading-md/semibold",
                className: g.s,
                children: [
                    _.intl.string(m.default.JOpi7z),
                    (0, s.jsx)(r.tvc, { size: "xs", color: r.LU0.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, s.jsx)(o.default, {
                className: x.Ei,
                colorContainerClassName: x.rx,
                defaultColor: h,
                colors: N ? c.Wf : c.Jl,
                value: t[0],
                secondaryValue: t[1] ?? void 0,
                onChange: A,
                onChangeGradientColors: C,
                isGradient: N,
                gradientButtonClassName: x.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
