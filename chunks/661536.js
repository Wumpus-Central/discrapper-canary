l.r(t), l.d(t, { playgroundConfig: () => R, aiVisualIdentityCollection: () => z });
var a = l(477900),
    s = l(582128),
    n = l(834730),
    r = l(661531),
    i = l(503698),
    o = l.n(i),
    d = l(374839);
let u = ["1", "2", "3", "4", "5", "6", "7"],
    c = s.memo(function (e) {
        let { size: t = 16, "aria-label": l, className: s, ref: n, color: r = "currentColor" } = e;
        return (0, a.jsx)("div", {
            ref: n,
            className: o()(d.wG, s),
            style: { "--custom-ai-loader-size": `${t}px`, color: "string" == typeof r ? r : r.css },
            role: null == l ? void 0 : "img",
            "aria-label": l,
            "aria-hidden": null == l,
            children: Array.from({ length: 3 }, (e, t) =>
                (0, a.jsx)(
                    "span",
                    {
                        className: d.NI,
                        children: (0, a.jsx)("span", {
                            className: d.u4,
                            children: u.map((e) => (0, a.jsx)("span", { className: d.Vq, children: e }, e)),
                        }),
                    },
                    t,
                ),
            ),
        });
    });
var x = l(935651);
let m = [12, 16, 24, 32, 48, 64],
    h = [
        { label: "Default", className: void 0, note: "2400ms loop" },
        { label: "reduce-motion", className: "reduce-motion", note: "half speed (4800ms)" },
        { label: "stop-animation", className: "stop-animation", note: "frozen on the dot" },
    ],
    f = {
        title: "AILoader",
        stories: [
            {
                name: "AILoader",
                id: "ai-loader",
                component: function (e) {
                    let { size: t, color: l } = e;
                    return (0, a.jsx)("div", {
                        style: "" === l ? void 0 : { color: l },
                        children: (0, a.jsx)(c, { size: t }),
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
                                    (0, a.jsx)(n.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Sizes",
                                    }),
                                    (0, a.jsxs)(n.E, {
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
                                        className: x.nM,
                                        children: m.map((e) =>
                                            (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: x.Hn,
                                                    children: [
                                                        (0, a.jsx)(c, {
                                                            size: e,
                                                            className: x.O,
                                                            color: r.A.colors.TEXT_DEFAULT,
                                                        }),
                                                        (0, a.jsxs)(n.E, {
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
                                    (0, a.jsx)(n.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Motion states",
                                    }),
                                    (0, a.jsx)(n.E, {
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
                                                            children: (0, a.jsx)(c, {
                                                                size: 48,
                                                                color: r.A.colors.TEXT_DEFAULT,
                                                            }),
                                                        }),
                                                        (0, a.jsx)(n.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: t,
                                                        }),
                                                        (0, a.jsx)(n.E, {
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
var p = l(844222),
    v = l(402386);
function b(e) {
    let {
            area: t = 0,
            glyphSize: l = 16,
            radius: n = { x: 5, y: 5 },
            color: i = r.A.colors.TEXT_DEFAULT,
            fpsLimit: o = 30,
            edgeBand: d = 3,
        } = e,
        u = s.useContext(p.C),
        {
            top: c = 0,
            bottom: x = 0,
            left: m = 0,
            right: h = 0,
        } = "number" == typeof t ? { top: t, bottom: t, left: t, right: t } : t;
    return (0, a.jsx)(v.j, {
        fit: "layout",
        style: {
            position: "absolute",
            left: -m,
            top: -c,
            width: `calc(100% + ${m}px + ${h}px)`,
            height: `calc(100% + ${c}px + ${x}px)`,
            pointerEvents: "none",
        },
        listenOnDocumentBody: !0,
        withReducedMotion: "play",
        dataBinding: {
            edgeBand: d,
            insetTop: c,
            insetBottom: x,
            insetLeft: m,
            insetRight: h,
            color: i,
            radiusX: "number" == typeof n ? n : n.x,
            radiusY: "number" == typeof n ? n : n.y,
            glyphSize: l,
            fpsLimit: o,
            reducedMotion: u.reducedMotion.enabled,
        },
    });
}
var y = l(860404);
let j = {
        "text-default": r.A.colors.TEXT_DEFAULT,
        "text-muted": r.A.colors.TEXT_MUTED,
        "text-brand": r.A.colors.TEXT_BRAND,
    },
    g = {
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
                        right: n,
                        bottom: r,
                        left: i,
                        glyphSize: o,
                        radius: d,
                        color: u,
                        edgeBand: c,
                    } = e;
                    return (0, a.jsx)("div", {
                        className: y.q,
                        children: (0, a.jsx)("div", {
                            className: y.M,
                            style: { "--__demo-area": `${t}px` },
                            children: (0, a.jsx)(b, {
                                area: { top: s ? l : 0, right: n ? l : 0, bottom: r ? l : 0, left: i ? l : 0 },
                                glyphSize: o,
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
    };
var E = l(331322),
    w = l(140735),
    A = l(224341),
    N = l(698873);
let T = s.memo(function (e) {
    let {
            text: t,
            variant: l = "text-md/normal",
            color: r,
            delay: i = 3e3,
            initialDelay: o = 0,
            duration: d = 1e3,
            onComplete: u,
            className: c,
            ref: x,
        } = e,
        m = s.useRef(null),
        h = s.useRef(null),
        f = Array.isArray(t) ? t.join("\0") : t,
        v = s.useMemo(() => f.split("\0"), [f]),
        [b, y] = s.useState(0),
        { reducedMotion: j } = s.useContext(p.C),
        g = (function () {
            let [e, t] = s.useState(() => "u" < typeof document || document.hasFocus());
            return (
                s.useEffect(() => {
                    function e() {
                        t(!0);
                    }
                    function l() {
                        t(!1);
                    }
                    return (
                        window.addEventListener("focus", e),
                        window.addEventListener("blur", l),
                        () => {
                            window.removeEventListener("focus", e), window.removeEventListener("blur", l);
                        }
                    );
                }, []),
                e
            );
        })(),
        E = s.useRef(0),
        T = s.useRef(0),
        V = s.useRef(null),
        C = s.useRef(u),
        M = s.useRef(v);
    s.useEffect(() => {
        (C.current = u), (M.current = v);
    });
    let [S, z] = s.useState(f);
    S !== f && (z(f), y(0));
    let R = v.length > 0 ? b % v.length : 0,
        D = v[R] ?? "",
        L = s.useCallback(() => {
            y((e) => e + 1);
        }, []);
    return (
        s.useImperativeHandle(x, () => ({ play: L, stop: () => h.current?.stop() }), [L]),
        s.useEffect(() => {
            let e = m.current;
            if (null == e) return;
            let t = (0, A.bw)(e, {
                to: M.current[0] ?? "",
                classNames: {
                    textLayer: N.fo,
                    char: N.Tp,
                    glyphLayer: N.sq,
                    glyphCell: N.vF,
                    shifted: N.wI,
                    scrambled: N.Aq,
                    hidden: N.R,
                },
                onComplete: () => C.current?.(),
            });
            return (
                (h.current = t),
                () => {
                    t.destroy(), (h.current = null);
                }
            );
        }, []),
        s.useEffect(() => {
            T.current = R;
            let e = h.current;
            if (null == e) return;
            let t = V.current;
            V.current = D;
            let l = null == t;
            if (
                (e.setOptions({ duration: d, reducedMotion: j.enabled }),
                l ? e.setTransition(D, D) : (e.setTransition(t, D), e.play()),
                null != i)
            ) {
                let e = j.enabled ? A.t : d;
                E.current = l ? i + o : i + e;
            }
        }, [b, R, D, i, o, d, j.enabled]),
        s.useEffect(() => {
            let e = h.current;
            if (null == e) return;
            if (!g) return void e.pause();
            if ((e.resume(), null == i)) return;
            let t = Date.now() + E.current,
                l = window.setTimeout(L, E.current);
            return () => {
                window.clearTimeout(l), (E.current = Math.max(0, t - Date.now()));
            };
        }, [g, b, L, i]),
        (0, a.jsxs)(n.E, {
            variant: l,
            color: r,
            tag: "span",
            className: c,
            children: [
                (0, a.jsx)("span", { ref: m, className: N.Hc, "aria-hidden": !0 }),
                (0, a.jsx)(w.A, { children: D }),
            ],
        })
    );
});
var V = l(918846);
let C = ["Ask about day one survival strategies", "Ask how to build your first mineshaft", "Ask about Minecraft"];
function M(e) {
    let { children: t } = e,
        l = s.useContext(p.C),
        n = s.useMemo(() => ({ ...l, reducedMotion: { ...l.reducedMotion, enabled: !0 } }), [l]);
    return (0, a.jsx)(p.C.Provider, { value: n, children: t });
}
function S() {
    let e = s.useRef(null),
        t = s.useCallback(() => e.current?.play(), []);
    return (0, a.jsx)("div", {
        className: V.dw,
        tabIndex: 0,
        onMouseEnter: t,
        onFocus: t,
        children: (0, a.jsx)(T, { ref: e, text: C, delay: null }),
    });
}
let z = {
        id: "ai-visual-identity",
        name: "AI Visual Identity",
        groups: [
            f,
            g,
            {
                title: "AITextEffect",
                stories: [
                    {
                        name: "AITextEffect",
                        id: "ai-text-effect",
                        component: function () {
                            return (0, a.jsxs)(E.B, {
                                gap: 16,
                                children: [
                                    (0, a.jsx)(n.E, { variant: "text-md/normal", children: "Example showcase" }),
                                    (0, a.jsxs)("div", {
                                        className: V.GG,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: V.uW,
                                                children: [
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Cycling placeholders",
                                                    }),
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "Suggested prompts rotate after the configured delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: V.dw,
                                                        children: (0, a.jsx)(T, { text: C, delay: 1500 }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: V.uW,
                                                children: [
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Staggered offsets",
                                                    }),
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children: "`initialDelay` offsets effects that start together.",
                                                    }),
                                                    (0, a.jsx)(T, { text: C, delay: 1500, initialDelay: 0 }),
                                                    (0, a.jsx)(T, { text: C, delay: 1500, initialDelay: 100 }),
                                                    (0, a.jsx)(T, { text: C, delay: 1500, initialDelay: 200 }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: V.uW,
                                                children: [
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Reduced motion",
                                                    }),
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "This example forces a simple cross-fade regardless of your system setting.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: V.dw,
                                                        children: (0, a.jsx)(M, {
                                                            children: (0, a.jsx)(T, { text: C, delay: 1500 }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: V.uW,
                                                children: [
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Hover to play",
                                                    }),
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "A `null` delay never cycles on its own; each hover or focus calls `play()` on the ref.",
                                                    }),
                                                    (0, a.jsx)(S, {}),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: V.uW,
                                                children: [
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Single line",
                                                    }),
                                                    (0, a.jsx)(n.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "A single string animates back to itself after the initial delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: V.dw,
                                                        children: (0, a.jsx)(T, {
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
    R = { collections: [z] };
