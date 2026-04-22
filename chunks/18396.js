"use strict";
a.d(t, { A: () => f });
var l = a(627968),
    i = a(64700),
    r = a(508425),
    n = a(534514),
    s = a(403581),
    o = a(827734),
    d = a(48736),
    c = a(954571),
    u = a(750656),
    _ = a(652215),
    h = a(864386),
    m = a(985018),
    p = a(250229),
    g = a(257170);
function f(e) {
    let { selectedColors: t, setSelectedColors: a, defaultColor: f, selectedEffectId: b, className: A } = e,
        x = b === r.z.GRADIENT,
        v = (0, i.useCallback)(
            (e) => {
                a([e]), c.default.track(_.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === f, colors: [e] });
            },
            [a, f],
        ),
        C = (0, i.useCallback)(
            (e) => {
                a(e), c.default.track(_.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [a],
        );
    return (0, l.jsxs)("div", {
        className: A,
        children: [
            (0, l.jsxs)(n.D, {
                variant: "heading-md/semibold",
                className: g.s,
                children: [
                    m.intl.string(h.default.JOpi7z),
                    (0, l.jsx)(s.t, { size: "xs", color: o.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(d.default, {
                className: p.Ei,
                colorContainerClassName: p.rx,
                defaultColor: f,
                colors: x ? u.Wf : u.Jl,
                value: t[0],
                secondaryValue: t[1] ?? void 0,
                onChange: v,
                onChangeGradientColors: C,
                isGradient: x,
                gradientButtonClassName: p.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
