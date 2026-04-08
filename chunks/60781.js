n.d(t, { A: () => f }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(827734),
    r = n(397927),
    o = n(701363),
    d = n(796719),
    c = n(841266),
    u = n(151196),
    m = n(661225),
    h = n(473336),
    x = n(30085),
    p = n(652215),
    g = n(557347);
function f() {
    let e = (0, s.G98)(),
        [t, n] = i.useState(p.NJ8.DARK),
        [f, v] = i.useState(x.D),
        [_, b] = i.useState(["", "", ""]),
        [j, A] = i.useState([null, null, null]),
        [C, y] = i.useState(null),
        { images: S, renderPickers: E } = (0, d.y)(),
        T = i.useMemo(
            () =>
                Object.fromEntries(
                    u.F$.map((e) => {
                        let { value: t } = e;
                        return [t, (0, x.k)(f, t)];
                    }),
                ),
            [f],
        ),
        N = T[t],
        I = i.useCallback(
            (e) => {
                v((n) => ({ ...n, [t]: e(n[t]) }));
            },
            [t],
        ),
        k = i.useMemo(() => (0, m.CO)({ theme: t, saturation: 1 }), [t]),
        O = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < u.Dp; t++) {
                let n = parseFloat(N.opacities[t]);
                if (isNaN(n) || n < 0 || n > 1) return null;
                e.push({ color: N.colors[t], opacity: n, position: u.ME[t] });
            }
            return e;
        }, [N]),
        R = i.useMemo(() => {
            if (null == O) return null;
            let { text: e, background: t } = k;
            return u._V.map((n, a) =>
                u.iW[N.scales[a]].map((n) => {
                    let i = (0, h._D)(O, a, { ...O[a], color: n.value }),
                        s = (0, m.ct)(e, t, i);
                    return { ...n, trailing: `(${s}:1)` };
                }),
            );
        }, [O, k, N.scales]),
        w = i.useMemo(() => {
            try {
                return u.F$.map((e) => {
                    let { value: t, label: n } = e,
                        a = T[t],
                        i = [];
                    for (let e = 0; e < u.Dp; e++) {
                        let s = parseFloat(a.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: n, result: null };
                        i.push({ color: a.colors[e], opacity: s, position: u.ME[e] });
                    }
                    return { theme: t, label: n, result: (0, m.QW)(i, { theme: t, saturation: 1 }) };
                });
            } catch {
                return null;
            }
        }, [T]);
    return (0, a.jsx)(s.ArX, {
        className: g.XG,
        children: (0, a.jsxs)(s.BJc, {
            gap: 24,
            padding: 8,
            className: g.zr,
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
                    options: u.F$,
                }),
                (0, a.jsxs)(s.BJc, {
                    gap: 16,
                    children: [
                        (0, a.jsx)(s.DZT, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, a.jsx)("div", {
                            className: g.G9,
                            children: u._V.map((e, t) => {
                                let n = "" !== _[t];
                                return (0, a.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            (0, a.jsx)(s.EYj, {
                                                variant: "text-md/medium",
                                                className: g.hi,
                                                children: e,
                                            }),
                                            (0, a.jsx)(r.ZiE, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: n,
                                                value: N.scales[t],
                                                onSelectionChange: (e) => {
                                                    let n = u.iW[e][0]?.value;
                                                    I((a) => ({
                                                        ...a,
                                                        scales: (0, h._D)(a.scales, t, e),
                                                        colors: null != n ? (0, h._D)(a.colors, t, n) : a.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: u.GA,
                                            }),
                                            (0, a.jsx)(r.ZiE, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: n,
                                                value: N.colors[t],
                                                onSelectionChange: (e) =>
                                                    I((n) => ({ ...n, colors: (0, h._D)(n.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: R?.[t] ?? u.iW[N.scales[t]],
                                            }),
                                            (0, a.jsx)(r.ksK, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: N.opacities[t],
                                                onChange: (e) =>
                                                    I((n) => ({ ...n, opacities: (0, h._D)(n.opacities, t, e) })),
                                                placeholder: "0–1",
                                            }),
                                            (0, a.jsx)(r.ksK, {
                                                label: `Hex${n && null != j[t] ? ` (dE: ${j[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: _[t],
                                                onChange: (e) => {
                                                    b((n) => (0, h._D)(n, t, e));
                                                    let n = (0, h.xb)(e);
                                                    if (null != n) {
                                                        let e = (0, h.C2)(n);
                                                        A((n) => (0, h._D)(n, t, e.deltaE)),
                                                            I((n) => ({
                                                                ...n,
                                                                scales: (0, h._D)(n.scales, t, e.scale),
                                                                colors: (0, h._D)(n.colors, t, e.color),
                                                            }));
                                                    } else A((e) => (0, h._D)(e, t, null));
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
                E(),
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
                                        className: g.$8,
                                        style: { background: l.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: u.EP.map((e, t) =>
                                            (0, a.jsx)(
                                                o.z9,
                                                {
                                                    route: "",
                                                    selected: C === e.id,
                                                    onClick: () => y(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: (0, h.H9)(
                                                            N.colors[0],
                                                            parseFloat(N.opacities[0]),
                                                        ),
                                                        hoverGradientMiddle: (0, h.H9)(
                                                            N.colors[1],
                                                            parseFloat(N.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: (0, h.H9)(
                                                            N.colors[2],
                                                            parseFloat(N.opacities[2]),
                                                        ),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children:
                                                        "useCustomGradient" in e &&
                                                        S.buttonBackground?.src != null &&
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
                                                                src: S.buttonBackground.src,
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
                null != w &&
                    (0, a.jsxs)(s.BJc, {
                        gap: 16,
                        children: [
                            (0, a.jsx)(s.DZT, { variant: "heading-sm/semibold", children: "Results" }),
                            w.map((e) => {
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
                                                                      u._V[i.suggestion.stopIndex],
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
                (0, a.jsx)(c.U, { allResolvedStops: T }),
            ],
        }),
    });
}
