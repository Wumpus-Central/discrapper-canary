n.d(t, { Z: () => h });
var l = n(54381),
    o = n(473749),
    r = n(522942),
    a = n(793030),
    i = n(481060),
    s = n(797967),
    c = n(626135),
    d = n(660662),
    u = n(981631),
    f = n(143525),
    p = n(388032),
    m = n(205178),
    g = n(238267);
function h(e) {
    var t;
    let { selectedColors: n, setSelectedColors: h, defaultColor: b, selectedEffectId: x, className: S } = e,
        j = x === r.m.GRADIENT,
        C = (0, o.useCallback)(
            (e) => {
                h([e]),
                    c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: e === b,
                        colors: [e],
                    });
            },
            [h, b],
        ),
        v = (0, o.useCallback)(
            (e) => {
                h(e),
                    c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: !1,
                        colors: e,
                    });
            },
            [h],
        );
    return (0, l.jsxs)("div", {
        className: S,
        children: [
            (0, l.jsxs)(a.X6q, {
                variant: "heading-md/semibold",
                className: g.selectorHeading,
                children: [
                    p.intl.string(f.default.JOpi7z),
                    (0, l.jsx)(i.SrA, {
                        size: "xs",
                        color: i.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, l.jsx)(s.default, {
                className: m.colorPicker,
                colorContainerClassName: m.colorPickerContainer,
                defaultColor: b,
                colors: j ? d.vK : d.gD,
                value: n[0],
                secondaryValue: null != (t = n[1]) ? t : void 0,
                onChange: C,
                onChangeGradientColors: v,
                isGradient: j,
                gradientButtonClassName: m.gradientPicker,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
