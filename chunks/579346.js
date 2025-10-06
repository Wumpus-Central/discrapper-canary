n.d(t, { Z: () => h });
var o = n(951288),
    l = n(647438),
    r = n(522942),
    a = n(793030),
    i = n(481060),
    s = n(797967),
    c = n(626135),
    d = n(660662),
    u = n(981631),
    p = n(62222),
    m = n(388032),
    f = n(621515),
    g = n(77426);
function h(e) {
    var t;
    let { selectedColors: n, setSelectedColors: h, defaultColor: x, selectedEffectId: _, className: b } = e,
        S = _ === r.m.GRADIENT,
        j = (0, l.useCallback)(
            (e) => {
                h([e]),
                    c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: e === x,
                        colors: [e],
                    });
            },
            [h, x],
        ),
        C = (0, l.useCallback)(
            (e) => {
                h(e),
                    c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: !1,
                        colors: e,
                    });
            },
            [h],
        );
    return (0, o.jsxs)("div", {
        className: b,
        children: [
            (0, o.jsxs)(a.X6q, {
                variant: "heading-md/semibold",
                className: g.selectorHeading,
                children: [
                    m.intl.string(p.default["JOpi7+"]),
                    (0, o.jsx)(i.SrA, {
                        size: "xs",
                        color: i.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, o.jsx)(s.default, {
                className: f.colorPicker,
                colorContainerClassName: f.colorPickerContainer,
                defaultColor: x,
                colors: S ? d.vK : d.gD,
                value: n[0],
                secondaryValue: null != (t = n[1]) ? t : void 0,
                onChange: j,
                onChangeGradientColors: C,
                isGradient: S,
                gradientButtonClassName: f.gradientPicker,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
