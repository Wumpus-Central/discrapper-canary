n.d(t, { Z: () => h });
var r = n(951288),
    o = n(647438),
    l = n(522942),
    a = n(793030),
    i = n(481060),
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
    let { selectedColors: n, setSelectedColors: h, defaultColor: b, selectedEffectId: x, className: j } = e,
        _ = x === l.m.GRADIENT,
        S = (0, o.useCallback)(
            (e) => {
                h([e]),
                    c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: e === b,
                        colors: [e],
                    });
            },
            [h, b],
        ),
        C = (0, o.useCallback)(
            (e) => {
                h(e),
                    c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: !1,
                        colors: e,
                    });
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: j,
        children: [
            (0, r.jsxs)(a.X6q, {
                variant: "heading-md/semibold",
                className: g.selectorHeading,
                children: [
                    m.intl.string(p.default["JOpi7+"]),
                    (0, r.jsx)(i.SrA, {
                        size: "xs",
                        color: i.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, r.jsx)(s.default, {
                className: f.colorPicker,
                colorContainerClassName: f.colorPickerContainer,
                defaultColor: b,
                colors: _ ? d.vK : d.gD,
                value: n[0],
                secondaryValue: null != (t = n[1]) ? t : void 0,
                onChange: S,
                onChangeGradientColors: C,
                isGradient: _,
                gradientButtonClassName: f.gradientPicker,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
                customPickerPosition: "top",
            }),
        ],
    });
}
