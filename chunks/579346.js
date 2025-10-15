n.d(t, { Z: () => h });
var l = n(951288),
    o = n(647438),
    r = n(522942),
    i = n(793030),
    a = n(481060),
    s = n(797967),
    c = n(626135),
    d = n(660662),
    u = n(981631),
    p = n(693450),
    m = n(388032),
    f = n(745993),
    g = n(959389);
function h(e) {
    var t;
    let { selectedColors: n, setSelectedColors: h, defaultColor: x, selectedEffectId: _, className: b } = e,
        S = _ === r.m.GRADIENT,
        C = (0, o.useCallback)(
            (e) => {
                h([e]),
                    c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: e === x,
                        colors: [e],
                    });
            },
            [h, x],
        ),
        j = (0, o.useCallback)(
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
        className: b,
        children: [
            (0, l.jsxs)(i.X6q, {
                variant: "heading-md/semibold",
                className: g.selectorHeading,
                children: [
                    m.intl.string(p.default["JOpi7+"]),
                    (0, l.jsx)(a.SrA, {
                        size: "xs",
                        color: a.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, l.jsx)(s.default, {
                className: f.colorPicker,
                colorContainerClassName: f.colorPickerContainer,
                defaultColor: x,
                colors: S ? d.vK : d.gD,
                value: n[0],
                secondaryValue: null != (t = n[1]) ? t : void 0,
                onChange: C,
                onChangeGradientColors: j,
                isGradient: S,
                gradientButtonClassName: f.gradientPicker,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
