t.r(l), t.d(l, { playgroundConfig: () => V, aiVisualIdentityCollection: () => g });
var a = t(477900),
    o = t(582128),
    s = t(834730),
    i = t(661531),
    n = t(503698),
    r = t.n(n),
    d = t(374839);
let u = ["1", "2", "3", "4", "5", "6", "7"],
    c = o.memo(function (e) {
        let { size: l = 16, "aria-label": t, className: o, ref: s, color: i = "currentColor" } = e;
        return (0, a.jsx)("div", {
            ref: s,
            className: r()(d.wG, o),
            style: { "--custom-ai-loader-size": `${l}px`, color: "string" == typeof i ? i : i.css },
            role: null == t ? void 0 : "img",
            "aria-label": t,
            "aria-hidden": null == t,
            children: Array.from({ length: 3 }, (e, l) =>
                (0, a.jsx)(
                    "span",
                    {
                        className: d.NI,
                        children: (0, a.jsx)("span", {
                            className: d.u4,
                            children: u.map((e) => (0, a.jsx)("span", { className: d.Vq, children: e }, e)),
                        }),
                    },
                    l,
                ),
            ),
        });
    });
var m = t(935651);
let p = [12, 16, 24, 32, 48, 64],
    x = [
        { label: "Default", className: void 0, note: "2400ms loop" },
        { label: "reduce-motion", className: "reduce-motion", note: "half speed (4800ms)" },
        { label: "stop-animation", className: "stop-animation", note: "frozen on the dot" },
    ],
    h = {
        title: "AILoader",
        stories: [
            {
                name: "AILoader",
                id: "ai-loader",
                component: function (e) {
                    let { size: l, color: t } = e;
                    return (0, a.jsx)("div", {
                        style: "" === t ? void 0 : { color: t },
                        children: (0, a.jsx)(c, { size: l }),
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
                        className: m.UP,
                        children: [
                            (0, a.jsxs)("div", {
                                className: m.uW,
                                children: [
                                    (0, a.jsx)(s.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Sizes",
                                    }),
                                    (0, a.jsxs)(s.E, {
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
                                        className: m.nM,
                                        children: p.map((e) =>
                                            (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: m.Hn,
                                                    children: [
                                                        (0, a.jsx)(c, {
                                                            size: e,
                                                            className: m.O,
                                                            color: i.A.colors.TEXT_DEFAULT,
                                                        }),
                                                        (0, a.jsxs)(s.E, {
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
                                className: m.uW,
                                children: [
                                    (0, a.jsx)(s.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Motion states",
                                    }),
                                    (0, a.jsx)(s.E, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children:
                                            "Reduced motion slows the cycle rather than freezing it, so the loader still reads as \u201Cworking\u201D. The loader also stops entirely while the app is unfocused, matching Mana's Spinner.",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: m.nM,
                                        children: x.map((e) => {
                                            let { label: l, className: t, note: o } = e;
                                            return (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: m.Hn,
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: t,
                                                            children: (0, a.jsx)(c, {
                                                                size: 48,
                                                                color: i.A.colors.TEXT_DEFAULT,
                                                            }),
                                                        }),
                                                        (0, a.jsx)(s.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: l,
                                                        }),
                                                        (0, a.jsx)(s.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: o,
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
                },
            },
        ],
    };
var b = t(844222),
    f = t(402386);
function y(e) {
    let {
            area: l = 0,
            glyphSize: t = 16,
            radius: s = { x: 5, y: 5 },
            color: n = i.A.colors.TEXT_DEFAULT,
            fpsLimit: r = 30,
            edgeBand: d = 3,
        } = e,
        u = o.useContext(b.C),
        {
            top: c = 0,
            bottom: m = 0,
            left: p = 0,
            right: x = 0,
        } = "number" == typeof l ? { top: l, bottom: l, left: l, right: l } : l;
    return (0, a.jsx)(f.j, {
        fit: "layout",
        style: {
            position: "absolute",
            left: -p,
            top: -c,
            width: `calc(100% + ${p}px + ${x}px)`,
            height: `calc(100% + ${c}px + ${m}px)`,
            pointerEvents: "none",
        },
        listenOnDocumentBody: !0,
        withReducedMotion: "play",
        dataBinding: {
            edgeBand: d,
            insetTop: c,
            insetBottom: m,
            insetLeft: p,
            insetRight: x,
            color: n,
            radiusX: "number" == typeof s ? s : s.x,
            radiusY: "number" == typeof s ? s : s.y,
            glyphSize: t,
            fpsLimit: r,
            reducedMotion: u.reducedMotion.enabled,
        },
    });
}
var v = t(860404);
let j = {
        "text-default": i.A.colors.TEXT_DEFAULT,
        "text-muted": i.A.colors.TEXT_MUTED,
        "text-brand": i.A.colors.TEXT_BRAND,
    },
    g = {
        id: "ai-visual-identity",
        name: "AI Visual Identity",
        groups: [
            h,
            {
                title: "AISmallSurfaceAnimation",
                stories: [
                    {
                        name: "AISmallSurfaceAnimation",
                        id: "ai-small-surface-animation",
                        component: function (e) {
                            let {
                                placeholderElementArea: l,
                                areaSize: t,
                                top: o,
                                right: s,
                                bottom: i,
                                left: n,
                                glyphSize: r,
                                radius: d,
                                color: u,
                                edgeBand: c,
                            } = e;
                            return (0, a.jsx)("div", {
                                className: v.q,
                                children: (0, a.jsx)("div", {
                                    className: v.M,
                                    style: { "--__demo-area": `${l}px` },
                                    children: (0, a.jsx)(y, {
                                        area: { top: o ? t : 0, right: s ? t : 0, bottom: i ? t : 0, left: n ? t : 0 },
                                        glyphSize: r,
                                        radius: d,
                                        color: j[u],
                                        edgeBand: c,
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
                                options: Object.keys(j).map((e) => ({ label: e, value: e })),
                            },
                            edgeBand: { label: "Edge band (glyphs)", type: "number", defaultValue: 3, minValue: 0 },
                        },
                    },
                ],
            },
        ],
    },
    V = { collections: [g] };
