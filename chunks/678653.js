(l.r(t), l.d(t, { playgroundConfig: () => T, aiVisualIdentityCollection: () => N }));
var a = l(477900),
    s = l(582128),
    o = l(661531),
    i = l(844222),
    n = l(402386);
function r(e) {
    let {
            area: t = 0,
            glyphSize: l = 16,
            radius: r = { x: 5, y: 5 },
            color: d = o.A.colors.TEXT_DEFAULT,
            fpsLimit: c = 30,
            edgeBand: u = 3,
        } = e,
        x = s.useContext(i.C),
        {
            top: m = 0,
            bottom: h = 0,
            left: p = 0,
            right: b = 0,
        } = "number" == typeof t ? { top: t, bottom: t, left: t, right: t } : t;
    return (0, a.jsx)(n.j, {
        fit: "layout",
        style: {
            position: "absolute",
            left: -p,
            top: -m,
            width: `calc(100% + ${p}px + ${b}px)`,
            height: `calc(100% + ${m}px + ${h}px)`,
            pointerEvents: "none",
        },
        listenOnDocumentBody: !0,
        withReducedMotion: "play",
        dataBinding: {
            edgeBand: u,
            insetTop: m,
            insetBottom: h,
            insetLeft: p,
            insetRight: b,
            color: d,
            radiusX: "number" == typeof r ? r : r.x,
            radiusY: "number" == typeof r ? r : r.y,
            glyphSize: l,
            fpsLimit: c,
            reducedMotion: x.reducedMotion.enabled,
        },
    });
}
var d = l(13316);
let c = {
        "text-default": o.A.colors.TEXT_DEFAULT,
        "text-muted": o.A.colors.TEXT_MUTED,
        "text-brand": o.A.colors.TEXT_BRAND,
    },
    u = {
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
                        right: o,
                        bottom: i,
                        left: n,
                        glyphSize: u,
                        radius: x,
                        color: m,
                        edgeBand: h,
                    } = e;
                    return (0, a.jsx)("div", {
                        className: d.q,
                        children: (0, a.jsx)("div", {
                            className: d.M,
                            style: { "--__demo-area": `${t}px` },
                            children: (0, a.jsx)(r, {
                                area: { top: s ? l : 0, right: o ? l : 0, bottom: i ? l : 0, left: n ? l : 0 },
                                glyphSize: u,
                                radius: x,
                                color: c[m],
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
                        options: Object.keys(c).map((e) => ({ label: e, value: e })),
                    },
                    edgeBand: { label: "Edge band (glyphs)", type: "number", defaultValue: 3, minValue: 0 },
                },
            },
        ],
    };
var x = l(834730),
    m = l(823376),
    h = l(935651);
let p = [12, 16, 24, 32, 48, 64],
    b = [
        { label: "Default", className: void 0, note: "2400ms loop" },
        { label: "reduce-motion", className: "reduce-motion", note: "half speed (4800ms)" },
        { label: "stop-animation", className: "stop-animation", note: "frozen on the dot" },
    ],
    v = {
        title: "AILoader",
        stories: [
            {
                name: "AILoader",
                id: "ai-loader",
                component: function (e) {
                    let { size: t, color: l } = e;
                    return (0, a.jsx)("div", {
                        style: "" === l ? void 0 : { color: l },
                        children: (0, a.jsx)(m.i, { size: t }),
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
                        className: h.UP,
                        children: [
                            (0, a.jsxs)("div", {
                                className: h.uW,
                                children: [
                                    (0, a.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Sizes",
                                    }),
                                    (0, a.jsx)(x.E, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children:
                                            "Glyphs should stay optically centered at every size, and the clip window should never reveal a neighbouring glyph. The dashed outline is the loader's own box: size tall by 3.75 \xd7 size wide.",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: h.nM,
                                        children: p.map((e) =>
                                            (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: h.Hn,
                                                    children: [
                                                        (0, a.jsx)(m.i, {
                                                            size: e,
                                                            className: h.O,
                                                            color: o.A.colors.TEXT_DEFAULT,
                                                        }),
                                                        (0, a.jsxs)(x.E, {
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
                                className: h.uW,
                                children: [
                                    (0, a.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Motion states",
                                    }),
                                    (0, a.jsx)(x.E, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children:
                                            "Reduced motion slows the cycle rather than freezing it, so the loader still reads as \u201Cworking\u201D. The loader also stops entirely while the app is unfocused, matching Mana's Spinner.",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: h.nM,
                                        children: b.map((e) => {
                                            let { label: t, className: l, note: s } = e;
                                            return (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: h.Hn,
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: l,
                                                            children: (0, a.jsx)(m.i, {
                                                                size: 48,
                                                                color: o.A.colors.TEXT_DEFAULT,
                                                            }),
                                                        }),
                                                        (0, a.jsx)(x.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: t,
                                                        }),
                                                        (0, a.jsx)(x.E, {
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
var f = l(331322),
    y = l(864970),
    j = l(829888);
let g = ["Ask about day one survival strategies", "Ask how to build your first mineshaft", "Ask about Minecraft"];
function E(e) {
    let { children: t } = e,
        l = s.useContext(i.C),
        o = s.useMemo(() => ({ ...l, reducedMotion: { ...l.reducedMotion, enabled: !0 } }), [l]);
    return (0, a.jsx)(i.C.Provider, { value: o, children: t });
}
function A() {
    let e = s.useRef(null),
        t = s.useCallback(() => e.current?.play(), []);
    return (0, a.jsx)("div", {
        className: j.dw,
        tabIndex: 0,
        onMouseEnter: t,
        onFocus: t,
        children: (0, a.jsx)(y.o, { ref: e, text: g, delay: null }),
    });
}
let N = {
        id: "ai-visual-identity",
        name: "AI Visual Identity",
        groups: [
            v,
            u,
            {
                title: "AIShimmer",
                stories: [
                    {
                        name: "AIShimmer",
                        id: "ai-shimmer",
                        component: function () {
                            return (0, a.jsxs)(f.B, {
                                gap: 16,
                                children: [
                                    (0, a.jsx)(x.E, { variant: "text-md/normal", children: "Example showcase" }),
                                    (0, a.jsxs)("div", {
                                        className: j.GG,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: j.uW,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Cycling placeholders",
                                                    }),
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "Suggested prompts rotate after the configured delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: j.dw,
                                                        children: (0, a.jsx)(y.o, { text: g, delay: 1500 }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: j.uW,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Staggered offsets",
                                                    }),
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children: "`initialDelay` offsets effects that start together.",
                                                    }),
                                                    (0, a.jsx)(y.o, { text: g, delay: 1500, initialDelay: 0 }),
                                                    (0, a.jsx)(y.o, { text: g, delay: 1500, initialDelay: 100 }),
                                                    (0, a.jsx)(y.o, { text: g, delay: 1500, initialDelay: 200 }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: j.uW,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Reduced motion",
                                                    }),
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "This example forces a simple cross-fade regardless of your system setting.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: j.dw,
                                                        children: (0, a.jsx)(E, {
                                                            children: (0, a.jsx)(y.o, { text: g, delay: 1500 }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: j.uW,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Hover to play",
                                                    }),
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "A `null` delay never cycles on its own; each hover or focus calls `play()` on the ref.",
                                                    }),
                                                    (0, a.jsx)(A, {}),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: j.uW,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Single line",
                                                    }),
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "A single string animates back to itself after the initial delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: j.dw,
                                                        children: (0, a.jsx)(y.o, {
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
    T = { collections: [N] };
