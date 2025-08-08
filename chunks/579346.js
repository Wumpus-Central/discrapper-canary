n.d(t, { Z: () => h });
var r = n(255367),
    o = n(73800),
    l = n(522942),
    a = n(793030),
    i = n(481060),
    s = n(797967),
    c = n(626135),
    d = n(660662),
    u = n(981631),
    f = n(698282),
    p = n(388032),
    m = n(235421),
    g = n(397419);
function h(e) {
    var t;
    let { selectedColors: n, setSelectedColors: h, defaultColor: b, selectedEffectId: x, className: j } = e,
        S = x === l.m.GRADIENT,
        _ = (0, o.useCallback)(
            (e) => {
                h([e]),
                    c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                        default: e === b,
                        colors: [e],
                    });
            },
            [h, b],
        ),
        O = (0, o.useCallback)(
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
            (0, r.jsxs)(a.X6, {
                variant: "heading-md/semibold",
                className: g.selectorHeading,
                children: [
                    p.intl.string(f.default["JOpi7+"]),
                    (0, r.jsx)(i.SrA, {
                        size: "xs",
                        color: i.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, r.jsx)(s.default, {
                className: m.colorPicker,
                colorContainerClassName: m.colorPickerContainer,
                defaultColor: b,
                colors: S ? d.vK : d.gD,
                value: n[0],
                secondaryValue: null != (t = n[1]) ? t : void 0,
                onChange: _,
                onChangeGradientColors: O,
                isGradient: S,
                gradientButtonClassName: m.gradientPicker,
                gradientDegrees: 90,
                allowBlackCustomColor: !0,
            }),
        ],
    });
}
