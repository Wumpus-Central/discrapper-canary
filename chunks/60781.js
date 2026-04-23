a.d(t, { A: () => N }), a(321073);
var n = a(627968),
    l = a(64700),
    i = a(460890),
    s = a(573613),
    r = a(331322),
    o = a(534514),
    d = a(834730),
    c = a(123292),
    u = a(43990),
    m = a(827734),
    h = a(349288),
    p = a(783878),
    x = a(292666),
    g = a(683071),
    v = a(701363),
    b = a(517461),
    _ = a(796719),
    f = a(841266),
    j = a(151196),
    A = a(661225),
    y = a(473336),
    C = a(30085),
    E = a(652215),
    S = a(545406);
function N() {
    let e = (0, i.G9)(),
        [t, a] = l.useState(E.NJ8.DARK),
        [N, k] = (0, b.V)("DevToolsGradientContrastPanel_themeStops", (0, C.D)()),
        I = N ?? (0, C.D)(),
        [D, T] = l.useState(["", "", ""]),
        [w, O] = l.useState([null, null, null]),
        [R, L] = l.useState(null),
        { images: M, renderPickers: P } = (0, _.y)(),
        U = l.useMemo(
            () =>
                Object.fromEntries(
                    j.F$.map((e) => {
                        let { value: t } = e;
                        return [t, (0, C.k)(I, t)];
                    }),
                ),
            [I],
        ),
        B = U[t],
        G = l.useCallback(
            (e) => {
                k({ ...I, [t]: e(I[t]) });
            },
            [t, k, I],
        ),
        F = l.useMemo(() => (0, A.CO)({ theme: t, saturation: 1 }), [t]),
        V = l.useMemo(() => {
            let e = [];
            for (let t = 0; t < j.Dp; t++) {
                let a = parseFloat(B.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: B.colors[t], opacity: a, position: j.ME[t] });
            }
            return e;
        }, [B]),
        $ = l.useMemo(() => {
            if (null == V) return null;
            let { text: e, background: t } = F;
            return j._V.map((a, n) =>
                j.iW[B.scales[n]].map((a) => {
                    let l = (0, y._D)(V, n, { ...V[n], color: a.value }),
                        i = (0, A.ct)(e, t, l);
                    return { ...a, trailing: `(${i}:1)` };
                }),
            );
        }, [V, F, B.scales]),
        W = l.useMemo(() => {
            try {
                return j.F$.map((e) => {
                    let { value: t, label: a } = e,
                        n = U[t],
                        l = [];
                    for (let e = 0; e < j.Dp; e++) {
                        let i = parseFloat(n.opacities[e]);
                        if (isNaN(i) || i < 0 || i > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: i, position: j.ME[e] });
                    }
                    return { theme: t, label: a, result: (0, A.QW)(l, { theme: t, saturation: 1 }) };
                });
            } catch {
                return null;
            }
        }, [U]);
    return (0, n.jsx)(s.Ar, {
        className: S.XG,
        children: (0, n.jsxs)(r.B, {
            gap: 24,
            padding: 8,
            className: S.zr,
            children: [
                (0, n.jsx)(o.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, n.jsxs)(r.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color — it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, n.jsxs)(d.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, n.jsx)(h.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(p.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: j.F$,
                }),
                (0, n.jsxs)(r.B, {
                    gap: 16,
                    children: [
                        (0, n.jsx)(o.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, n.jsx)("div", {
                            className: S.G9,
                            children: j._V.map((e, t) => {
                                let a = "" !== D[t];
                                return (0, n.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            (0, n.jsxs)(r.B, {
                                                gap: 0,
                                                className: S.hi,
                                                children: [
                                                    (0, n.jsx)(d.E, { variant: "text-md/medium", children: e }),
                                                    (0, n.jsx)(c.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${(0, y.EJ)(B.colors[t], parseFloat(B.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                (0, y.EJ)(B.colors[t], parseFloat(B.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(p.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: B.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = j.iW[e][0]?.value;
                                                    G((n) => ({
                                                        ...n,
                                                        scales: (0, y._D)(n.scales, t, e),
                                                        colors: null != a ? (0, y._D)(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: j.GA,
                                            }),
                                            (0, n.jsx)(p.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: B.colors[t],
                                                onSelectionChange: (e) =>
                                                    G((a) => ({ ...a, colors: (0, y._D)(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: $?.[t] ?? j.iW[B.scales[t]],
                                            }),
                                            (0, n.jsx)(x.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: B.opacities[t],
                                                onChange: (e) =>
                                                    G((a) => ({ ...a, opacities: (0, y._D)(a.opacities, t, e) })),
                                                placeholder: "0–1",
                                            }),
                                            (0, n.jsx)(x.k, {
                                                label: `Hex${a && null != w[t] ? ` (dE: ${w[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: D[t],
                                                onChange: (e) => {
                                                    T((a) => (0, y._D)(a, t, e));
                                                    let a = (0, y.xb)(e);
                                                    if (null != a) {
                                                        let e = (0, y.C2)(a);
                                                        O((a) => (0, y._D)(a, t, e.deltaE)),
                                                            G((a) => ({
                                                                ...a,
                                                                scales: (0, y._D)(a.scales, t, e.scale),
                                                                colors: (0, y._D)(a.colors, t, e.color),
                                                            }));
                                                    } else O((e) => (0, y._D)(e, t, null));
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
                P(),
                (0, n.jsx)(o.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, n.jsx)(i.GE, {
                    value: { ...e, theme: t },
                    children: (0, n.jsx)(u.N, {
                        theme: t,
                        children: (e) =>
                            (0, n.jsx)("div", {
                                className: e,
                                children: (0, n.jsx)(r.B, {
                                    gap: 16,
                                    children: (0, n.jsx)("ul", {
                                        className: S.$8,
                                        style: { background: m.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: j.EP.map((e, t) =>
                                            (0, n.jsx)(
                                                v.z9,
                                                {
                                                    route: "",
                                                    selected: R === e.id,
                                                    onClick: () => L(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: (0, y.H9)(
                                                            B.colors[0],
                                                            parseFloat(B.opacities[0]),
                                                        ),
                                                        hoverGradientMiddle: (0, y.H9)(
                                                            B.colors[1],
                                                            parseFloat(B.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: (0, y.H9)(
                                                            B.colors[2],
                                                            parseFloat(B.opacities[2]),
                                                        ),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children:
                                                        "useCustomGradient" in e &&
                                                        M.buttonBackground?.src != null &&
                                                        (0, n.jsx)("div", {
                                                            style: {
                                                                position: "absolute",
                                                                height: "100%",
                                                                bottom: 0,
                                                                insetInlineEnd: 0,
                                                                pointerEvents: "none",
                                                                borderRadius: "inherit",
                                                            },
                                                            children: (0, n.jsx)("img", {
                                                                src: M.buttonBackground.src,
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
                null != W &&
                    (0, n.jsxs)(r.B, {
                        gap: 16,
                        children: [
                            (0, n.jsx)(o.D, { variant: "heading-sm/semibold", children: "Results" }),
                            W.map((e) => {
                                let { theme: t, label: a, result: l } = e;
                                return null != l
                                    ? (0, n.jsxs)(
                                          r.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, n.jsx)(d.E, { variant: "text-md/semibold", children: a }),
                                                  (0, n.jsxs)(g.w, {
                                                      type: l.passes ? "success" : "critical",
                                                      children: [
                                                          l.passes ? "✓ Passes" : "✗ Fails",
                                                          " WCAG AA — Min contrast: ",
                                                          l.minContrastRatio,
                                                          " : 1",
                                                      ],
                                                  }),
                                                  !l.passes &&
                                                      null != l.suggestion &&
                                                      (0, n.jsxs)(r.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, n.jsx)(d.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, n.jsxs)(d.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      j._V[l.suggestion.stopIndex],
                                                                      ": ",
                                                                      (0, n.jsx)("strong", {
                                                                          children: l.suggestion.suggestedColor,
                                                                      }),
                                                                      " →",
                                                                      " ",
                                                                      l.suggestion.resultingMinContrast,
                                                                      " : 1",
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  !l.passes &&
                                                      null == l.suggestion &&
                                                      (0, n.jsx)(d.E, {
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
                (0, n.jsx)(f.U, { allResolvedStops: U }),
            ],
        }),
    });
}
