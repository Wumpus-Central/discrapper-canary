a.d(t, { A: () => g });
var l = a(627968),
    n = a(64700),
    s = a(508425),
    r = a(534514),
    i = a(403581),
    o = a(827734),
    c = a(48736),
    d = a(954571),
    u = a(750656),
    m = a(652215),
    _ = a(864386),
    h = a(985018),
    p = a(250229),
    f = a(257170);
function g(e) {
    let { selectedColors: t, setSelectedColors: a, defaultColor: g, selectedEffectId: x, className: A } = e,
        v = x === s.z.GRADIENT,
        N = (0, n.useCallback)(
            (e) => {
                a([e]), d.default.track(m.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === g, colors: [e] });
            },
            [a, g],
        ),
        C = (0, n.useCallback)(
            (e) => {
                a(e), d.default.track(m.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [a],
        );
    return (0, l.jsxs)("div", {
        className: A,
        children: [
            (0, l.jsxs)(r.D, {
                variant: "heading-md/semibold",
                className: f.s,
                children: [
                    h.intl.string(_.default.JOpi7z),
                    (0, l.jsx)(i.t, { size: "xs", color: o.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(c.default, {
                className: p.Ei,
                colorContainerClassName: p.rx,
                defaultColor: g,
                colors: v ? u.Wf : u.Jl,
                value: t[0],
                secondaryValue: t[1] ?? void 0,
                onChange: N,
                onChangeGradientColors: C,
                isGradient: v,
                gradientButtonClassName: p.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
