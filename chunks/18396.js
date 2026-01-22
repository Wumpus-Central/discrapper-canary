l.d(t, { A: () => x });
var n = l(627968),
    a = l(64700),
    s = l(508425),
    r = l(158954),
    i = l(397927),
    o = l(48736),
    c = l(954571),
    d = l(750656),
    u = l(652215),
    f = l(927961),
    m = l(985018),
    b = l(512134),
    p = l(880203);
function x(e) {
    var t;
    let { selectedColors: l, setSelectedColors: x, defaultColor: g, selectedEffectId: j, className: h } = e,
        v = j === s.z.GRADIENT,
        N = (0, a.useCallback)(
            (e) => {
                x([e]),
                    c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: e === g,
                        colors: [e],
                    });
            },
            [x, g],
        ),
        A = (0, a.useCallback)(
            (e) => {
                x(e),
                    c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: !1,
                        colors: e,
                    });
            },
            [x],
        );
    return (0, n.jsxs)("div", {
        className: h,
        children: [
            (0, n.jsxs)(r.DZT, {
                variant: "heading-md/semibold",
                className: p.s,
                children: [
                    m.intl.string(f.default.JOpi7z),
                    (0, n.jsx)(i.tvc, {
                        size: "xs",
                        color: i.LU0.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, n.jsx)(o.default, {
                className: b.Ei,
                colorContainerClassName: b.rx,
                defaultColor: g,
                colors: v ? d.Wf : d.Jl,
                value: l[0],
                secondaryValue: null != (t = l[1]) ? t : void 0,
                onChange: N,
                onChangeGradientColors: A,
                isGradient: v,
                gradientButtonClassName: b.xr,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
