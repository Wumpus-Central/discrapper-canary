n.d(t, { A: () => v }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(827734),
    r = n(397927),
    o = n(701363),
    d = n(517461),
    c = n(796719),
    u = n(841266),
    m = n(151196),
    h = n(661225),
    x = n(473336),
    p = n(30085),
    g = n(652215),
    f = n(222094);
function v() {
    let e = (0, s.G98)(),
        [t, n] = i.useState(g.NJ8.DARK),
        [v, _] = (0, d.V)("DevToolsGradientContrastPanel_themeStops", (0, p.D)()),
        b = v ?? (0, p.D)(),
        [j, A] = i.useState(["", "", ""]),
        [C, y] = i.useState([null, null, null]),
        [S, E] = i.useState(null),
        { images: T, renderPickers: N } = (0, c.y)(),
        I = i.useMemo(
            () =>
                Object.fromEntries(
                    m.F$.map((e) => {
                        let { value: t } = e;
                        return [t, (0, p.k)(b, t)];
                    }),
                ),
            [b],
        ),
        k = I[t],
        O = i.useCallback(
            (e) => {
                _({ ...b, [t]: e(b[t]) });
            },
            [t, _, b],
        ),
        R = i.useMemo(() => (0, h.CO)({ theme: t, saturation: 1 }), [t]),
        w = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < m.Dp; t++) {
                let n = parseFloat(k.opacities[t]);
                if (isNaN(n) || n < 0 || n > 1) return null;
                e.push({ color: k.colors[t], opacity: n, position: m.ME[t] });
            }
            return e;
        }, [k]),
        D = i.useMemo(() => {
            if (null == w) return null;
            let { text: e, background: t } = R;
            return m._V.map((n, a) =>
                m.iW[k.scales[a]].map((n) => {
                    let i = (0, x._D)(w, a, { ...w[a], color: n.value }),
                        s = (0, h.ct)(e, t, i);
                    return { ...n, trailing: `(${s}:1)` };
                }),
            );
        }, [w, R, k.scales]),
        M = i.useMemo(() => {
            try {
                return m.F$.map((e) => {
                    let { value: t, label: n } = e,
                        a = I[t],
                        i = [];
                    for (let e = 0; e < m.Dp; e++) {
                        let s = parseFloat(a.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: n, result: null };
                        i.push({ color: a.colors[e], opacity: s, position: m.ME[e] });
                    }
                    return { theme: t, label: n, result: (0, h.QW)(i, { theme: t, saturation: 1 }) };
                });
            } catch {
                return null;
            }
        }, [I]);
    return (0, a.jsx)(s.ArX, {
        className: f.XG,
        children: (0, a.jsxs)(s.BJc, {
            gap: 24,
            padding: 8,
            className: f.zr,
            children: [
                (0, a.jsx)(s.DZT, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, a.jsxs)(s.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(s.EYj, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, a.jsx)(s.EYj, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
                        }),
                        (0, a.jsx)(s.EYj, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color — it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, a.jsxs)(s.EYj, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, a.jsx)(r.MzZ, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(r.ZiE, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => n(e),
                    closeOnSelect: !0,
                    options: m.F$,
                }),
                (0, a.jsxs)(s.BJc, {
                    gap: 16,
                    children: [
                        (0, a.jsx)(s.DZT, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, a.jsx)("div", {
                            className: f.G9,
                            children: m._V.map((e, t) => {
                                let n = "" !== j[t];
                                return (0, a.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            (0, a.jsxs)(s.BJc, {
                                                gap: 0,
                                                className: f.hi,
                                                children: [
                                                    (0, a.jsx)(s.EYj, { variant: "text-md/medium", children: e }),
                                                    (0, a.jsx)(s.QWc, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${(0, x.EJ)(k.colors[t], parseFloat(k.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                (0, x.EJ)(k.colors[t], parseFloat(k.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(r.ZiE, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: n,
                                                value: k.scales[t],
                                                onSelectionChange: (e) => {
                                                    let n = m.iW[e][0]?.value;
                                                    O((a) => ({
                                                        ...a,
                                                        scales: (0, x._D)(a.scales, t, e),
                                                        colors: null != n ? (0, x._D)(a.colors, t, n) : a.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: m.GA,
                                            }),
                                            (0, a.jsx)(r.ZiE, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: n,
                                                value: k.colors[t],
                                                onSelectionChange: (e) =>
                                                    O((n) => ({ ...n, colors: (0, x._D)(n.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: D?.[t] ?? m.iW[k.scales[t]],
                                            }),
                                            (0, a.jsx)(r.ksK, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: k.opacities[t],
                                                onChange: (e) =>
                                                    O((n) => ({ ...n, opacities: (0, x._D)(n.opacities, t, e) })),
                                                placeholder: "0–1",
                                            }),
                                            (0, a.jsx)(r.ksK, {
                                                label: `Hex${n && null != C[t] ? ` (dE: ${C[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: j[t],
                                                onChange: (e) => {
                                                    A((n) => (0, x._D)(n, t, e));
                                                    let n = (0, x.xb)(e);
                                                    if (null != n) {
                                                        let e = (0, x.C2)(n);
                                                        y((n) => (0, x._D)(n, t, e.deltaE)),
                                                            O((n) => ({
                                                                ...n,
                                                                scales: (0, x._D)(n.scales, t, e.scale),
                                                                colors: (0, x._D)(n.colors, t, e.color),
                                                            }));
                                                    } else y((e) => (0, x._D)(e, t, null));
                                                },
                                                placeholder: "#hex",
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                        }),
                    ],
                }),
                N(),
                (0, a.jsx)(s.DZT, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, a.jsx)(s.GE8, {
                    value: { ...e, theme: t },
                    children: (0, a.jsx)(s.NPJ, {
                        theme: t,
                        children: (e) =>
                            (0, a.jsx)("div", {
                                className: e,
                                children: (0, a.jsx)(s.BJc, {
                                    gap: 16,
                                    children: (0, a.jsx)("ul", {
                                        className: f.$8,
                                        style: { background: l.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: m.EP.map((e, t) =>
                                            (0, a.jsx)(
                                                o.z9,
                                                {
                                                    route: "",
                                                    selected: S === e.id,
                                                    onClick: () => E(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: (0, x.H9)(
                                                            k.colors[0],
                                                            parseFloat(k.opacities[0]),
                                                        ),
                                                        hoverGradientMiddle: (0, x.H9)(
                                                            k.colors[1],
                                                            parseFloat(k.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: (0, x.H9)(
                                                            k.colors[2],
                                                            parseFloat(k.opacities[2]),
                                                        ),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children:
                                                        "useCustomGradient" in e &&
                                                        T.buttonBackground?.src != null &&
                                                        (0, a.jsx)("div", {
                                                            style: {
                                                                position: "absolute",
                                                                height: "100%",
                                                                bottom: 0,
                                                                insetInlineEnd: 0,
                                                                pointerEvents: "none",
                                                                borderRadius: "inherit",
                                                            },
                                                            children: (0, a.jsx)("img", {
                                                                src: T.buttonBackground.src,
                                                                alt: "",
                                                                "aria-hidden": !0,
                                                                style: {
                                                                    height: "100%",
                                                                    maxWidth: "100%",
                                                                    objectFit: "cover",
                                                                    objectPosition: "bottom right",
                                                                    borderRadius: "inherit",
                                                                },
                                                            }),
                                                        }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                                }),
                            }),
                    }),
                }),
                null != M &&
                    (0, a.jsxs)(s.BJc, {
                        gap: 16,
                        children: [
                            (0, a.jsx)(s.DZT, { variant: "heading-sm/semibold", children: "Results" }),
                            M.map((e) => {
                                let { theme: t, label: n, result: i } = e;
                                return null != i
                                    ? (0, a.jsxs)(
                                          s.BJc,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, a.jsx)(s.EYj, { variant: "text-md/semibold", children: n }),
                                                  (0, a.jsxs)(r.wx6, {
                                                      type: i.passes ? "success" : "critical",
                                                      children: [
                                                          i.passes ? "✓ Passes" : "✗ Fails",
                                                          " WCAG AA — Min contrast: ",
                                                          i.minContrastRatio,
                                                          " : 1",
                                                      ],
                                                  }),
                                                  !i.passes &&
                                                      null != i.suggestion &&
                                                      (0, a.jsxs)(s.BJc, {
                                                          gap: 4,
                                                          children: [
                                                              (0, a.jsx)(s.EYj, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, a.jsxs)(s.EYj, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      m._V[i.suggestion.stopIndex],
                                                                      ": ",
                                                                      (0, a.jsx)("strong", {
                                                                          children: i.suggestion.suggestedColor,
                                                                      }),
                                                                      " →",
                                                                      " ",
                                                                      i.suggestion.resultingMinContrast,
                                                                      " : 1",
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  !i.passes &&
                                                      null == i.suggestion &&
                                                      (0, a.jsx)(s.EYj, {
                                                          variant: "text-sm/normal",
                                                          children:
                                                              "No single swap from the same color scale would fix the contrast ratio.",
                                                      }),
                                              ],
                                          },
                                          t,
                                      )
                                    : null;
                            }),
                        ],
                    }),
                (0, a.jsx)(u.U, { allResolvedStops: I }),
            ],
        }),
    });
}
