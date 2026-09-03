l.r(t), l.d(t, { playgroundConfig: () => T, aiVisualIdentityCollection: () => N });
var a = l(477900),
    s = l(582128),
    i = l(834730),
    o = l(661531),
    n = l(264709),
    r = l(935651);
let d = [12, 16, 24, 32, 48, 64],
    c = [
        { label: "Default", className: void 0, note: "2400ms loop" },
        { label: "reduce-motion", className: "reduce-motion", note: "half speed (4800ms)" },
        { label: "stop-animation", className: "stop-animation", note: "frozen on the dot" },
    ],
    u = {
        title: "AILoader",
        stories: [
            {
                name: "AILoader",
                id: "ai-loader",
                component: function (e) {
                    let { size: t, color: l } = e;
                    return (0, a.jsx)("div", {
                        style: "" === l ? void 0 : { color: l },
                        children: (0, a.jsx)(n.i, { size: t }),
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
                        className: r.UP,
                        children: [
                            (0, a.jsxs)("div", {
                                className: r.uW,
                                children: [
                                    (0, a.jsx)(i.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Sizes",
                                    }),
                                    (0, a.jsxs)(i.E, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children: [
                                            "Glyphs should stay optically centered at every size, and the clip window should never reveal a neighbouring glyph. The dashed outline is the loader's own box: ",
                                            "size",
                                            " tall by 3.75 \xd7 ",
                                            "size",
                                            " wide.",
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        className: r.nM,
                                        children: d.map((e) =>
                                            (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: r.Hn,
                                                    children: [
                                                        (0, a.jsx)(n.i, {
                                                            size: e,
                                                            className: r.O,
                                                            color: o.A.colors.TEXT_DEFAULT,
                                                        }),
                                                        (0, a.jsxs)(i.E, {
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
                                className: r.uW,
                                children: [
                                    (0, a.jsx)(i.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Motion states",
                                    }),
                                    (0, a.jsx)(i.E, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children:
                                            "Reduced motion slows the cycle rather than freezing it, so the loader still reads as \u201Cworking\u201D. The loader also stops entirely while the app is unfocused, matching Mana's Spinner.",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: r.nM,
                                        children: c.map((e) => {
                                            let { label: t, className: l, note: s } = e;
                                            return (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: r.Hn,
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: l,
                                                            children: (0, a.jsx)(n.i, {
                                                                size: 48,
                                                                color: o.A.colors.TEXT_DEFAULT,
                                                            }),
                                                        }),
                                                        (0, a.jsx)(i.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: t,
                                                        }),
                                                        (0, a.jsx)(i.E, {
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
var x = l(844222),
    m = l(402386);
function h(e) {
    let {
            area: t = 0,
            glyphSize: l = 16,
            radius: i = { x: 5, y: 5 },
            color: n = o.A.colors.TEXT_DEFAULT,
            fpsLimit: r = 30,
            edgeBand: d = 3,
        } = e,
        c = s.useContext(x.C),
        {
            top: u = 0,
            bottom: h = 0,
            left: p = 0,
            right: f = 0,
        } = "number" == typeof t ? { top: t, bottom: t, left: t, right: t } : t;
    return (0, a.jsx)(m.j, {
        fit: "layout",
        style: {
            position: "absolute",
            left: -p,
            top: -u,
            width: `calc(100% + ${p}px + ${f}px)`,
            height: `calc(100% + ${u}px + ${h}px)`,
            pointerEvents: "none",
        },
        listenOnDocumentBody: !0,
        withReducedMotion: "play",
        dataBinding: {
            edgeBand: d,
            insetTop: u,
            insetBottom: h,
            insetLeft: p,
            insetRight: f,
            color: n,
            radiusX: "number" == typeof i ? i : i.x,
            radiusY: "number" == typeof i ? i : i.y,
            glyphSize: l,
            fpsLimit: r,
            reducedMotion: c.reducedMotion.enabled,
        },
    });
}
var p = l(860404);
let f = {
        "text-default": o.A.colors.TEXT_DEFAULT,
        "text-muted": o.A.colors.TEXT_MUTED,
        "text-brand": o.A.colors.TEXT_BRAND,
    },
    b = {
        title: "AISmallSurfaceAnimation",
        stories: [
            {
                name: "AISmallSurfaceAnimation",
                id: "ai-small-surface-animation",
                component: function (e) {
                    let {
                        placeholderElementArea: t,
                        areaSize: l,
                        top: s,
                        right: i,
                        bottom: o,
                        left: n,
                        glyphSize: r,
                        radius: d,
                        color: c,
                        edgeBand: u,
                    } = e;
                    return (0, a.jsx)("div", {
                        className: p.q,
                        children: (0, a.jsx)("div", {
                            className: p.M,
                            style: { "--__demo-area": `${t}px` },
                            children: (0, a.jsx)(h, {
                                area: { top: s ? l : 0, right: i ? l : 0, bottom: o ? l : 0, left: n ? l : 0 },
                                glyphSize: r,
                                radius: d,
                                color: f[c],
                                edgeBand: u,
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
                        options: Object.keys(f).map((e) => ({ label: e, value: e })),
                    },
                    edgeBand: { label: "Edge band (glyphs)", type: "number", defaultValue: 3, minValue: 0 },
                },
            },
        ],
    };
var v = l(331322),
    y = l(895971),
    j = l(918846);
let g = ["Ask about day one survival strategies", "Ask how to build your first mineshaft", "Ask about Minecraft"];
function E(e) {
    let { children: t } = e,
        l = s.useContext(x.C),
        i = s.useMemo(() => ({ ...l, reducedMotion: { ...l.reducedMotion, enabled: !0 } }), [l]);
    return (0, a.jsx)(x.C.Provider, { value: i, children: t });
}
function A() {
    let e = s.useRef(null),
        t = s.useCallback(() => e.current?.play(), []);
    return (0, a.jsx)("div", {
        className: j.dw,
        tabIndex: 0,
        onMouseEnter: t,
        onFocus: t,
        children: (0, a.jsx)(y.n, { ref: e, text: g, delay: null }),
    });
}
let N = {
        id: "ai-visual-identity",
        name: "AI Visual Identity",
        groups: [
            u,
            b,
            {
                title: "AITextEffect",
                stories: [
                    {
                        name: "AITextEffect",
                        id: "ai-text-effect",
                        component: function () {
                            return (0, a.jsxs)(v.B, {
                                gap: 16,
                                children: [
                                    (0, a.jsx)(i.E, { variant: "text-md/normal", children: "Example showcase" }),
                                    (0, a.jsxs)("div", {
                                        className: j.GG,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: j.uW,
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Cycling placeholders",
                                                    }),
                                                    (0, a.jsx)(i.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "Suggested prompts rotate after the configured delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: j.dw,
                                                        children: (0, a.jsx)(y.n, { text: g, delay: 1500 }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: j.uW,
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Staggered offsets",
                                                    }),
                                                    (0, a.jsx)(i.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children: "`initialDelay` offsets effects that start together.",
                                                    }),
                                                    (0, a.jsx)(y.n, { text: g, delay: 1500, initialDelay: 0 }),
                                                    (0, a.jsx)(y.n, { text: g, delay: 1500, initialDelay: 100 }),
                                                    (0, a.jsx)(y.n, { text: g, delay: 1500, initialDelay: 200 }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: j.uW,
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Reduced motion",
                                                    }),
                                                    (0, a.jsx)(i.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "This example forces a simple cross-fade regardless of your system setting.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: j.dw,
                                                        children: (0, a.jsx)(E, {
                                                            children: (0, a.jsx)(y.n, { text: g, delay: 1500 }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: j.uW,
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Hover to play",
                                                    }),
                                                    (0, a.jsx)(i.E, {
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
                                                    (0, a.jsx)(i.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Single line",
                                                    }),
                                                    (0, a.jsx)(i.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "A single string animates back to itself after the initial delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: j.dw,
                                                        children: (0, a.jsx)(y.n, {
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
