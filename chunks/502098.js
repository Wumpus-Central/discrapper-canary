(l.r(t), l.d(t, { playgroundConfig: () => A, aiVisualIdentityCollection: () => N }));
var a = l(477900),
    s = l(582128),
    i = l(661531),
    o = l(865665),
    r = l(13316);
let n = {
        "text-default": i.A.colors.TEXT_DEFAULT,
        "text-muted": i.A.colors.TEXT_MUTED,
        "text-brand": i.A.colors.TEXT_BRAND,
    },
    d = {
        title: "AIBloom",
        stories: [
            {
                name: "AIBloom",
                id: "ai-bloom",
                component: function (e) {
                    let {
                        placeholderElementArea: t,
                        areaSize: l,
                        top: s,
                        right: i,
                        bottom: d,
                        left: c,
                        glyphSize: u,
                        radius: x,
                        color: m,
                        edgeBand: h,
                    } = e;
                    return (0, a.jsx)("div", {
                        className: r.q,
                        children: (0, a.jsx)("div", {
                            className: r.M,
                            style: { "--__demo-area": `${t}px` },
                            children: (0, a.jsx)(o.C, {
                                area: { top: s ? l : 0, right: i ? l : 0, bottom: d ? l : 0, left: c ? l : 0 },
                                glyphSize: u,
                                radius: x,
                                color: n[m],
                                edgeBand: h,
                            }),
                        }),
                    });
                },
                controls: {
                    placeholderElementArea: {
                        label: "Placeholder element area",
                        type: "slider",
                        defaultValue: 400,
                        minValue: 100,
                        maxValue: 600,
                    },
                    areaSize: { label: "Animation area (px)", type: "number", defaultValue: 64, minValue: 0 },
                    top: { label: "Top", type: "boolean", defaultValue: !0 },
                    right: { label: "Right", type: "boolean", defaultValue: !0 },
                    bottom: { label: "Bottom", type: "boolean", defaultValue: !0 },
                    left: { label: "Left", type: "boolean", defaultValue: !0 },
                    glyphSize: { label: "Glyph size (px)", type: "number", defaultValue: 16, minValue: 8 },
                    radius: { label: "Reveal radius (glyphs)", type: "number", defaultValue: 3, minValue: 1 },
                    color: {
                        label: "Color",
                        type: "select",
                        defaultValue: "text-default",
                        options: Object.keys(n).map((e) => ({ label: e, value: e })),
                    },
                    edgeBand: { label: "Edge band (glyphs)", type: "number", defaultValue: 3, minValue: 0 },
                },
            },
        ],
    };
var c = l(834730),
    u = l(823376),
    x = l(935651);
let m = [12, 16, 24, 32, 48, 64],
    h = [
        { label: "Default", className: void 0, note: "2400ms loop" },
        { label: "reduce-motion", className: "reduce-motion", note: "half speed (4800ms)" },
        { label: "stop-animation", className: "stop-animation", note: "frozen on the dot" },
    ],
    p = {
        title: "AILoader",
        stories: [
            {
                name: "AILoader",
                id: "ai-loader",
                component: function (e) {
                    let { size: t, color: l } = e;
                    return (0, a.jsx)("div", {
                        style: "" === l ? void 0 : { color: l },
                        children: (0, a.jsx)(u.i, { size: t }),
                    });
                },
                controls: {
                    size: {
                        label: "Size (px per glyph)",
                        type: "slider",
                        defaultValue: 32,
                        minValue: 8,
                        maxValue: 128,
                    },
                    color: {
                        label: "Color",
                        type: "select",
                        defaultValue: "var(--text-default)",
                        options: [
                            { label: "text-default", value: "var(--text-default)" },
                            { label: "text-muted", value: "var(--text-muted)" },
                            { label: "text-brand", value: "var(--text-brand)" },
                            { label: "white", value: "var(--white)" },
                        ],
                    },
                },
            },
            {
                name: "Sizes & Motion States",
                id: "ai-loader-matrix",
                component: function () {
                    return (0, a.jsxs)("div", {
                        className: x.UP,
                        children: [
                            (0, a.jsxs)("div", {
                                className: x.uW,
                                children: [
                                    (0, a.jsx)(c.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Sizes",
                                    }),
                                    (0, a.jsx)(c.E, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children:
                                            "Glyphs should stay optically centered at every size, and the clip window should never reveal a neighbouring glyph. The dashed outline is the loader's own box: size tall by 3.75 \xd7 size wide.",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: x.nM,
                                        children: m.map((e) =>
                                            (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: x.Hn,
                                                    children: [
                                                        (0, a.jsx)(u.i, {
                                                            size: e,
                                                            className: x.O,
                                                            color: i.A.colors.TEXT_DEFAULT,
                                                        }),
                                                        (0, a.jsxs)(c.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: [e, "px"],
                                                        }),
                                                    ],
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: x.uW,
                                children: [
                                    (0, a.jsx)(c.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Motion states",
                                    }),
                                    (0, a.jsx)(c.E, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children:
                                            "Reduced motion slows the cycle rather than freezing it, so the loader still reads as \u201Cworking\u201D. The loader also stops entirely while the app is unfocused, matching Mana's Spinner.",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: x.nM,
                                        children: h.map((e) => {
                                            let { label: t, className: l, note: s } = e;
                                            return (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: x.Hn,
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: l,
                                                            children: (0, a.jsx)(u.i, {
                                                                size: 48,
                                                                color: i.A.colors.TEXT_DEFAULT,
                                                            }),
                                                        }),
                                                        (0, a.jsx)(c.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: t,
                                                        }),
                                                        (0, a.jsx)(c.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: s,
                                                        }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
            },
        ],
    };
var v = l(844222),
    b = l(331322),
    f = l(864970),
    y = l(829888);
let j = ["Ask about day one survival strategies", "Ask how to build your first mineshaft", "Ask about Minecraft"];
function g(e) {
    let { children: t } = e,
        l = s.useContext(v.C),
        i = s.useMemo(() => ({ ...l, reducedMotion: { ...l.reducedMotion, enabled: !0 } }), [l]);
    return (0, a.jsx)(v.C.Provider, { value: i, children: t });
}
function E() {
    let e = s.useRef(null),
        t = s.useCallback(() => e.current?.play(), []);
    return (0, a.jsx)("div", {
        className: y.dw,
        tabIndex: 0,
        onMouseEnter: t,
        onFocus: t,
        children: (0, a.jsx)(f.o, { ref: e, text: j, delay: null }),
    });
}
let N = {
        id: "ai-visual-identity",
        name: "AI Visual Identity",
        groups: [
            p,
            d,
            {
                title: "AIShimmer",
                stories: [
                    {
                        name: "AIShimmer",
                        id: "ai-shimmer",
                        component: function () {
                            return (0, a.jsxs)(b.B, {
                                gap: 16,
                                children: [
                                    (0, a.jsx)(c.E, { variant: "text-md/normal", children: "Example showcase" }),
                                    (0, a.jsxs)("div", {
                                        className: y.GG,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: y.uW,
                                                children: [
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Cycling placeholders",
                                                    }),
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "Suggested prompts rotate after the configured delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: y.dw,
                                                        children: (0, a.jsx)(f.o, { text: j, delay: 1500 }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: y.uW,
                                                children: [
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Staggered offsets",
                                                    }),
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children: "`initialDelay` offsets effects that start together.",
                                                    }),
                                                    (0, a.jsx)(f.o, { text: j, delay: 1500, initialDelay: 0 }),
                                                    (0, a.jsx)(f.o, { text: j, delay: 1500, initialDelay: 100 }),
                                                    (0, a.jsx)(f.o, { text: j, delay: 1500, initialDelay: 200 }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: y.uW,
                                                children: [
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Reduced motion",
                                                    }),
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "This example forces a simple cross-fade regardless of your system setting.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: y.dw,
                                                        children: (0, a.jsx)(g, {
                                                            children: (0, a.jsx)(f.o, { text: j, delay: 1500 }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: y.uW,
                                                children: [
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Hover to play",
                                                    }),
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "A `null` delay never cycles on its own; each hover or focus calls `play()` on the ref.",
                                                    }),
                                                    (0, a.jsx)(E, {}),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: y.uW,
                                                children: [
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Single line",
                                                    }),
                                                    (0, a.jsx)(c.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "A single string animates back to itself after the initial delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: y.dw,
                                                        children: (0, a.jsx)(f.o, {
                                                            text: "Ask about day one survival strategies",
                                                            delay: 1500,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            });
                        },
                    },
                ],
            },
        ],
    },
    A = { collections: [N] };
