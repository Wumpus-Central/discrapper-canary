n.d(t, { P: () => v }), n(388685), n(35282), n(49124);
var a = n(54381),
    l = n(473749),
    i = n(394900),
    r = n(661105),
    s = n(609067),
    o = n(94367),
    c = n(407146),
    d = n(481060),
    u = n(789654),
    m = n(246992),
    p = n(500949),
    h = n(416825);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = Object.keys(p.jQ).map((e) => ({
        value: e,
        label: e,
    })),
    b = Array.from(
        Array.from(
            Object.keys(c.b).reduce((e, t) => {
                let [n] = t.split(".");
                return e.add(n), e;
            }, new Set()),
        ),
    ).map((e) => ({
        value: e,
        label: e,
    }));
function v(e) {
    let { state: t, setState: n } = e,
        { scales: i } = t,
        [r, s] = l.useState(null),
        o = (0, a.jsxs)("div", {
            className: h.section,
            children: [
                (0, a.jsx)(d.VcW, {
                    options: b,
                    placeholder: "Select a scale to edit...",
                    value: void 0,
                    onChange: (e) => {
                        let a = t.scales.find((t) => t.name === e);
                        null == a &&
                            ((a = {
                                name: e,
                                base: "plum" === e ? c.b["plum.10"].hex : c.b["".concat(e, ".500")].hex,
                                colorSpace: p.jQ.ICTCP,
                                showColumnarPalettePreview: !1,
                                useP3ColorSpace: !1,
                                darkness: 0,
                                lightness: 0,
                                easing: p.iw.LINEAR,
                                easingStrength: 1,
                                steps: 26,
                            }),
                            n(
                                f(x({}, t), {
                                    scales: [...t.scales, a],
                                }),
                            ));
                    },
                    popoutLayerContext: m.O$,
                }),
                (0, a.jsx)("ul", {
                    className: h.overrides,
                    children: i.map((e) =>
                        (0, a.jsx)(
                            "li",
                            {
                                children: (0, a.jsx)(d.P3F, {
                                    onClick: () => s(e.name),
                                    style: { cursor: "pointer" },
                                    children: (0, a.jsx)(_, {
                                        scale: e,
                                        onRemove: () =>
                                            n(f(x({}, t), { scales: t.scales.filter((t) => t.name !== e.name) })),
                                    }),
                                }),
                            },
                            e.name,
                        ),
                    ),
                }),
            ],
        }),
        u = i.find((e) => e.name === r),
        g =
            null != u
                ? (0, a.jsx)(j, {
                      onClose: () => s(null),
                      scale: u,
                      setState: n,
                  })
                : o;
    return (0, a.jsx)("div", { children: g });
}
function j(e) {
    let { scale: t, setState: n, onClose: l } = e,
        {
            name: c,
            base: x,
            lightness: f,
            showColumnarPalettePreview: b,
            colorSpace: v,
            easingStrength: j = 1,
            useP3ColorSpace: _,
            steps: C = 26,
        } = t,
        S = (0, p.XM)(t),
        E = (0, p.W6)(S, c);
    return (0, a.jsxs)(d.Kqy, {
        gap: 20,
        children: [
            (0, a.jsxs)("div", {
                className: h.titleWithIcon,
                children: [
                    (0, a.jsx)(d.P3F, {
                        onClick: l,
                        style: { maxWidth: 80 },
                        children: (0, a.jsx)(d.whL, { size: "sm" }),
                    }),
                    (0, a.jsx)(d.Text, {
                        variant: "text-lg/bold",
                        children: c,
                    }),
                    (0, a.jsx)(d.P3F, {
                        onClick: function () {
                            let e = Object.entries(S).reduce((e, t) => {
                                let [n, a] = t;
                                return (
                                    (e[n] = {
                                        value: (0, i.Z)((0, r.Z)(a, p.HW.sRGB), { format: "hex" }),
                                        type: "color",
                                    }),
                                    e
                                );
                            }, {});
                            (0, u.q)("figma-".concat(t.name), JSON.stringify(e, null, 4));
                        },
                        style: { cursor: "pointer" },
                        children: (0, a.jsx)(y, {}),
                    }),
                ],
            }),
            (0, a.jsx)(d.gNt, {
                label: "Base Color",
                description: "The base color the <code>{name}</code> palette is generated from.",
                children: (0, a.jsx)("input", {
                    type: "color",
                    value: x,
                    onChange: (e) => (0, p.Ib)(c, e.target.value, n),
                }),
            }),
            (0, a.jsx)(d.q4e, {
                label: "Color Space",
                description:
                    "The color space used to generate the palette. Different color spaces will produce different results.",
                options: g,
                value: v,
                onChange: (e) => (0, p.t4)(c, e, n),
                popoutLayerContext: m.O$,
            }),
            (0, a.jsx)(d.iRW, {
                label: "Lighten",
                description:
                    "Decrease the darkness of the darkest color in the palette. Increasing this makes the darker colors in the palette lighter.",
                onValueRender: () => null,
                initialValue: f,
                stickToMarkers: !0,
                markers: Array.from({ length: 21 }, (e, t) => t / 10),
                minValue: 0,
                maxValue: 2,
                onValueChange: (e) => (0, p.h9)(c, e, n),
                onMarkerRender: (e) => "".concat((100 * e).toFixed(), "%"),
            }),
            (0, a.jsx)(d.iRW, {
                label: "Darken",
                description:
                    "Increase the darkness of the lightest color in the palette. Increasing this makes the lighter colors in the palette darker.",
                onValueRender: () => null,
                initialValue: 0,
                stickToMarkers: !0,
                markers: Array.from({ length: 21 }, (e, t) => t / 10),
                minValue: 0,
                maxValue: 2,
                onValueChange: (e) => (0, p.YE)(c, e, n),
                onMarkerRender: (e) => "".concat((100 * e).toFixed(), "%"),
            }),
            (0, a.jsx)(d.iRW, {
                label: "Easing Strength",
                description: "Adjust the strength of the easing function.",
                onValueRender: () => null,
                initialValue: j,
                minValue: 1,
                maxValue: 5,
                onValueChange: (e) => (0, p.rd)(c, e, n),
                onMarkerRender: (e) => "".concat(e.toFixed(2)),
            }),
            (0, a.jsx)(d.rsf, {
                label: "Show columnar palette preview",
                description:
                    "Renders the palette preview in a single column, useful for comparing the luminance of each step.",
                checked: b,
                onChange: (e) => (0, p.KB)(c, e, n),
            }),
            (0, a.jsx)(d.rsf, {
                label: "Use P3 Color Space",
                description:
                    "Renders the palette preview in a single column, useful for comparing the luminance of each step.",
                checked: _,
                disabled: !p.S2,
                onChange: (e) => (0, p.uF)(c, e, n),
            }),
            (0, a.jsx)(d.iRW, {
                label: "Steps",
                description: "Adjust the number of steps in the palette.",
                helperText: "".concat(C),
                onValueRender: () => null,
                initialValue: C,
                minValue: (0, p.A0)(c).length,
                maxValue: 100,
                onValueChange: (e) => (0, p.YC)(c, Math.round(e), n),
                onMarkerRender: () => null,
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        children: "Palette Preview",
                    }),
                    (0, a.jsx)("div", {
                        className: h.paletteOverrides,
                        "data-columnar": b,
                        children: Object.entries(S).map((e, n) => {
                            let [l, c] = e,
                                u = (0, p.HI)(c),
                                m = (0, s.Z)((0, o.Z)("black"), c) > 4.5 ? "black" : "white",
                                h = E[l];
                            return (0, a.jsxs)(
                                "div",
                                {
                                    style: { backgroundColor: u },
                                    children: [
                                        (0, a.jsxs)(d.Text, {
                                            variant: b ? "text-sm/medium" : "text-xs/medium",
                                            style: { color: m },
                                            children: [
                                                t.name,
                                                ".",
                                                n + 1,
                                                b && null != h
                                                    ? (0, a.jsx)("strong", { children: " - ".concat(h) })
                                                    : "",
                                            ],
                                        }),
                                        b &&
                                            (0, a.jsxs)(d.Text, {
                                                variant: "text-xxs/medium",
                                                style: {
                                                    opacity: 0.75,
                                                    color: m,
                                                },
                                                children: [
                                                    (0, i.Z)((0, r.Z)(c, p.HW.sRGB), { format: "hex" }).toUpperCase(),
                                                    " - ",
                                                    u,
                                                ],
                                            }),
                                    ],
                                },
                                l,
                            );
                        }),
                    }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { scale: t, onRemove: n } = e,
        s = l.useMemo(
            () => Object.values((0, p.XM)(t)).map((e) => (0, i.Z)((0, r.Z)(e, p.HW.sRGB), { format: "hex" })),
            [t],
        );
    return (0, a.jsxs)("li", {
        className: h.override,
        children: [
            (0, a.jsxs)("div", {
                className: h.overrideHeader,
                children: [
                    (0, a.jsx)("div", {
                        className: h.title,
                        children: (0, a.jsx)(d.Text, {
                            lineClamp: 1,
                            variant: "text-md/medium",
                            className: h.overrideHeading,
                            tabularNumbers: !0,
                            children: t.name,
                        }),
                    }),
                    (0, a.jsx)("span", {}),
                    (0, a.jsx)("span", {}),
                    (0, a.jsx)(d.P3F, {
                        className: h.removeOverride,
                        onClick: n,
                        children: (0, a.jsx)(d.Dio, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: h.palettePreview,
                children: s.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            style: {
                                width: 16,
                                height: 16,
                                backgroundColor: e,
                                borderRadius: "var(--radius-xs)",
                            },
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
let y = () =>
    (0, a.jsxs)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, a.jsx)("path", {
                d: "M7.08366 18.3337C8.69366 18.3337 10.0003 17.0892 10.0003 15.5559V12.7781H7.08366C5.47366 12.7781 4.16699 14.0225 4.16699 15.5559C4.16699 17.0892 5.47366 18.3337 7.08366 18.3337Z",
                fill: "#0ACF83",
            }),
            (0, a.jsx)("path", {
                d: "M4.16699 10.0003C4.16699 8.46699 5.47366 7.22255 7.08366 7.22255H10.0003V12.7781H7.08366C5.47366 12.7781 4.16699 11.5337 4.16699 10.0003Z",
                fill: "#A259FF",
            }),
            (0, a.jsx)("path", {
                d: "M4.16702 4.44477C4.16702 2.91144 5.47369 1.66699 7.08369 1.66699H10.0004L10.0003 7.22255H7.08366C5.47366 7.22255 4.16702 5.9781 4.16702 4.44477Z",
                fill: "#F24E1E",
            }),
            (0, a.jsx)("path", {
                d: "M10.0004 1.66699L12.917 1.66699C14.527 1.66699 15.8337 2.91144 15.8337 4.44477C15.8337 5.9781 14.527 7.22255 12.917 7.22255H10.0003L10.0004 1.66699Z",
                fill: "#FF7262",
            }),
            (0, a.jsx)("path", {
                d: "M15.8337 10.0003C15.8337 11.5337 14.527 12.7781 12.917 12.7781C11.307 12.7781 10.0003 11.5337 10.0003 10.0003C10.0003 8.46699 11.307 7.22255 12.917 7.22255C14.527 7.22255 15.8337 8.46699 15.8337 10.0003Z",
                fill: "#1ABCFE",
            }),
        ],
    });
