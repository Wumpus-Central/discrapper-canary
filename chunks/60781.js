n.d(t, { A: () => g }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(827734),
    r = n(397927),
    o = n(701363),
    d = n(841266),
    c = n(151196),
    u = n(661225),
    m = n(473336),
    h = n(30085),
    x = n(652215),
    p = n(222094);
function g() {
    let e = (0, s.G98)(),
        [t, n] = i.useState(x.NJ8.DARK),
        [g, f] = i.useState(h.D),
        [_, v] = i.useState(["", "", ""]),
        [b, j] = i.useState([null, null, null]),
        [A, C] = i.useState(null),
        y = i.useMemo(
            () =>
                Object.fromEntries(
                    c.F$.map((e) => {
                        let { value: t } = e;
                        return [t, (0, h.k)(g, t)];
                    }),
                ),
            [g],
        ),
        E = y[t],
        S = i.useCallback(
            (e) => {
                f((n) => ({ ...n, [t]: e(n[t]) }));
            },
            [t],
        ),
        T = i.useMemo(() => (0, u.CO)({ theme: t, saturation: 1 }), [t]),
        N = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < c.Dp; t++) {
                let n = parseFloat(E.opacities[t]);
                if (isNaN(n) || n < 0 || n > 1) return null;
                e.push({ color: E.colors[t], opacity: n, position: c.ME[t] });
            }
            return e;
        }, [E]),
        I = i.useMemo(() => {
            if (null == N) return null;
            let { text: e, background: t } = T;
            return c._V.map((n, a) =>
                c.iW[E.scales[a]].map((n) => {
                    let i = (0, m._D)(N, a, { ...N[a], color: n.value }),
                        s = (0, u.ct)(e, t, i);
                    return { ...n, trailing: `(${s}:1)` };
                }),
            );
        }, [N, T, E.scales]),
        O = i.useMemo(() => {
            try {
                return c.F$.map((e) => {
                    let { value: t, label: n } = e,
                        a = y[t],
                        i = [];
                    for (let e = 0; e < c.Dp; e++) {
                        let s = parseFloat(a.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: n, result: null };
                        i.push({ color: a.colors[e], opacity: s, position: c.ME[e] });
                    }
                    return { theme: t, label: n, result: (0, u.QW)(i, { theme: t, saturation: 1 }) };
                });
            } catch {
                return null;
            }
        }, [y]);
    return (0, a.jsx)(s.ArX, {
        className: p.XG,
        children: (0, a.jsxs)(s.BJc, {
            gap: 24,
            padding: 8,
            className: p.zr,
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
                    options: c.F$,
                }),
                (0, a.jsxs)(s.BJc, {
                    gap: 16,
                    children: [
                        (0, a.jsx)(s.DZT, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, a.jsx)("div", {
                            className: p.G9,
                            children: c._V.map((e, t) => {
                                let n = "" !== _[t];
                                return (0, a.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            (0, a.jsx)(s.EYj, {
                                                variant: "text-md/medium",
                                                className: p.hi,
                                                children: e,
                                            }),
                                            (0, a.jsx)(r.ZiE, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: n,
                                                value: E.scales[t],
                                                onSelectionChange: (e) => {
                                                    let n = c.iW[e][0]?.value;
                                                    S((a) => ({
                                                        ...a,
                                                        scales: (0, m._D)(a.scales, t, e),
                                                        colors: null != n ? (0, m._D)(a.colors, t, n) : a.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: c.GA,
                                            }),
                                            (0, a.jsx)(r.ZiE, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: n,
                                                value: E.colors[t],
                                                onSelectionChange: (e) =>
                                                    S((n) => ({ ...n, colors: (0, m._D)(n.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: I?.[t] ?? c.iW[E.scales[t]],
                                            }),
                                            (0, a.jsx)(r.ksK, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: E.opacities[t],
                                                onChange: (e) =>
                                                    S((n) => ({ ...n, opacities: (0, m._D)(n.opacities, t, e) })),
                                                placeholder: "0–1",
                                            }),
                                            (0, a.jsx)(r.ksK, {
                                                label: `Hex${n && null != b[t] ? ` (dE: ${b[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: _[t],
                                                onChange: (e) => {
                                                    v((n) => (0, m._D)(n, t, e));
                                                    let n = (0, m.xb)(e);
                                                    if (null != n) {
                                                        let e = (0, m.C2)(n);
                                                        j((n) => (0, m._D)(n, t, e.deltaE)),
                                                            S((n) => ({
                                                                ...n,
                                                                scales: (0, m._D)(n.scales, t, e.scale),
                                                                colors: (0, m._D)(n.colors, t, e.color),
                                                            }));
                                                    } else j((e) => (0, m._D)(e, t, null));
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
                                        className: p.$8,
                                        style: { background: l.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: c.EP.map((e, t) =>
                                            (0, a.jsx)(
                                                o.z9,
                                                {
                                                    route: "",
                                                    selected: A === e.id,
                                                    onClick: () => C(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: (0, m.H9)(
                                                            E.colors[0],
                                                            parseFloat(E.opacities[0]),
                                                        ),
                                                        hoverGradientMiddle: (0, m.H9)(
                                                            E.colors[1],
                                                            parseFloat(E.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: (0, m.H9)(
                                                            E.colors[2],
                                                            parseFloat(E.opacities[2]),
                                                        ),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                                }),
                            }),
                    }),
                }),
                null != O &&
                    (0, a.jsxs)(s.BJc, {
                        gap: 16,
                        children: [
                            (0, a.jsx)(s.DZT, { variant: "heading-sm/semibold", children: "Results" }),
                            O.map((e) => {
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
                                                                      c._V[i.suggestion.stopIndex],
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
                (0, a.jsx)(d.U, { allResolvedStops: y }),
            ],
        }),
    });
}
