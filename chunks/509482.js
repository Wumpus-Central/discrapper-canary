n.d(t, { w: () => O });
var i,
    r = n(477900),
    a = n(582128),
    s = n(223145),
    l = n.n(s),
    o = n(971940),
    d = n(941861),
    c = n(844222),
    u = n(432816),
    _ = n(282802),
    E = n.n(_);
function A(e) {
    let t = {};
    for (let n of Object.keys(e)) t[E()(n)] = e[n];
    return t;
}
let h = A(o.Fit),
    f = A(o.Alignment);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073));
var I = n(51906),
    p = (((i = {}).Disabled = "disabled"), (i.Loading = "loading"), (i.Loaded = "loaded"), (i.Error = "error"), i);
let T = new Map();
function m(e) {
    e.listeners.forEach((e) => e());
}
function g(e, t) {
    (null != t.removalTimer && clearTimeout(t.removalTimer),
        (t.removalTimer = setTimeout(() => {
            var n, i;
            return (
                (n = e),
                void (((i = t).removalTimer = null),
                i.consumers > 0 || T.get(n) !== i || (T.delete(n), i.riveFile.cleanup()))
            );
        }, 3e4)));
}
let S = { status: "disabled", riveFile: null },
    N = { status: "loading", riveFile: null };
function C(e) {
    let { className: t, style: n } = e;
    return (0, r.jsx)("div", {
        className: t,
        style: null != t && "" !== t ? void 0 : { width: "100%", height: "100%", ...n },
        "aria-hidden": !0,
    });
}
function O(e) {
    let t = (function () {
            let e = (0, u.G9)().experiments?.enabledExperiments,
                [t] = a.useState(() => e?.includes("rive-web-perf") ?? !1);
            return t;
        })(),
        n = (function (e) {
            let [t, n] = a.useState(null);
            return (a.useLayoutEffect(() => {
                if (null == e) return;
                let t = (function (e) {
                    let t = T.get(e);
                    if (null != t) return t;
                    let n = new o.RiveFile({ buffer: e }),
                        i = { riveFile: n, status: "loading", consumers: 0, removalTimer: null, listeners: new Set() };
                    return (
                        n.on(o.EventType.Load, () => {
                            (n.getInstance(), (i.status = "loaded"), 0 === i.consumers && g(e, i), m(i));
                        }),
                        n.on(o.EventType.LoadError, () => {
                            ((i.status = "error"), T.get(e) === i && T.delete(e), m(i));
                        }),
                        T.set(e, i),
                        (0, I.yO)(n.init()),
                        i
                    );
                })(e);
                function i() {
                    n({
                        buffer: e,
                        value:
                            "loaded" === t.status
                                ? { status: "loaded", riveFile: t.riveFile }
                                : { status: t.status, riveFile: null },
                    });
                }
                return (
                    (t.consumers += 1),
                    null != t.removalTimer && (clearTimeout(t.removalTimer), (t.removalTimer = null)),
                    t.listeners.add(i),
                    i(),
                    () => {
                        (t.listeners.delete(i),
                            (t.consumers -= 1),
                            0 === t.consumers && "loaded" === t.status && g(e, t));
                    }
                );
            }, [e]),
            null == e)
                ? S
                : null == t || t.buffer !== e
                  ? N
                  : t.value;
        })(t && null == e.assetLoader ? e.buffer : null);
    return n.status === p.Loading
        ? (0, r.jsx)(C, { className: e.className, style: e.style })
        : (0, r.jsx)(R, { ...e, isRiveWebPerfEnabled: t, sharedRiveFile: n.riveFile ?? void 0 });
}
function R(e) {
    let {
            isRiveWebPerfEnabled: t,
            sharedRiveFile: n,
            buffer: i,
            autoplay: s = !0,
            className: l,
            fit: _,
            alignment: E,
            style: A,
            eventTargetRef: I,
            artboard: p,
            withReducedMotion: T = "halt",
            ref: m,
            artboardProperties: g,
            dataBinding: S,
            onDataBindingChange: N,
            touchScrollEnabled: C = !0,
            dynamicDataBinding: O,
            listenOnDocumentBody: R,
            eventCapture: L,
            assetLoader: y,
            onLoad: D,
            stateMachine: v,
            artboardStateMachines: b,
        } = e,
        M = a.useContext(c.C),
        P = (0, d.Rs)(),
        U = (0, u.G9)().isWindowFocused?.() ?? P,
        [w, G] = (0, d.Xb)(3e4),
        [x, k] = a.useState(void 0),
        F = a.useMemo(() => {
            if (t && null != b) return b[p ?? ""];
        }, [t, b, p]),
        B = null != F,
        V = null != S || null != O,
        H = a.useRef(null),
        { rive: j, RiveComponent: W } = (0, o.useRive)(
            {
                eventTarget: I?.current,
                ...(null != n ? { riveFile: n } : { buffer: i }),
                autoplay: s,
                stateMachines: null != v ? [v] : B ? F : x,
                artboard: p,
                autoBind: !!B || !!V || void 0,
                enableAutoSleep: t,
                useOffscreenRenderer: !0,
                layout: new o.Layout({
                    fit: null != _ ? h[_] : o.Fit.Cover,
                    alignment: null != E ? f[E] : o.Alignment.Center,
                }),
                isTouchScrollEnabled: C,
                listenOnDocumentBody: R,
                eventCapture: L,
                assetLoader: y,
                onLoad: D,
            },
            { ...(t ? { shouldUseIntersectionObserver: !1 } : {}) },
        );
    (a.useImperativeHandle(
        m,
        () => ({
            play: () => j?.play(),
            pause: () => j?.pause(),
            stop: () => j?.stop(),
            getPlaybackState: () =>
                null == j
                    ? null
                    : {
                          isPlaying: j.isPlaying,
                          isPaused: j.isPaused,
                          isAutoSleeping: j.isAutoSleeping ?? !1,
                          isRenderScheduled: null != j.frameRequestId,
                          fps: j.fps,
                      },
            getProperties: () => {
                let e = j?.viewModelInstance,
                    t = (t, n) => {
                        let i = "enumType" === n ? "enum" : n;
                        return {
                            type: i,
                            value: e?.[i]?.(t)?.value,
                            values: "enum" === i ? e?.enum(t)?.values : void 0,
                        };
                    };
                return (
                    e?.properties.reduce(
                        (n, i) => (
                            "viewModel" === i.type &&
                                e.viewModel(i.name)?.properties.forEach((e) => {
                                    let r = `${i.name}/${e.name}`;
                                    n[r] = t(r, String(e.type));
                                }),
                            (n[i.name] = t(i.name, String(i.type))),
                            n
                        ),
                        {},
                    ) ?? {}
                );
            },
            getArtboards: () => {
                if (null == j) return [];
                let e = new Set(),
                    t = j.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [j],
    ),
        (function (e) {
            let t,
                {
                    rive: n,
                    artboard: i,
                    artboardProperties: r,
                    dataBinding: s,
                    dynamicDataBinding: l,
                    onDataBindingChange: d,
                } = e,
                _ = l ?? s,
                E = (0, o.useViewModel)(n);
            (0, o.useViewModelInstance)(E);
            let { theme: A, saturation: h } = (0, u.G9)(),
                { highContrastModeEnabled: f } = a.useContext(c.C),
                I = a.useRef({}),
                p =
                    ((t = a.useRef({})),
                    a.useCallback(async (e, n) => {
                        if ("string" != typeof e) return Promise.resolve(e);
                        {
                            let i;
                            if (null != t.current[e]) return Promise.resolve(t.current[e]);
                            try {
                                i = await fetch(e, { signal: n });
                            } catch (e) {
                                if (n?.aborted) return null;
                                throw e;
                            }
                            if (n?.aborted) return Promise.resolve(null);
                            let r = await i.arrayBuffer(),
                                a = await (0, o.decodeImage)(new Uint8Array(r));
                            return ((t.current[e] = a), a);
                        }
                    }, [])),
                T = a.useCallback((e, t) => {
                    let n = e?.[t];
                    return null == n ? null : "object" == typeof n && "value" in n ? n.value : n;
                }, []);
            ((function (e) {
                let { rive: t, artboard: n, artboardProperties: i, dynamicDataBinding: r, onDataBindingChange: s } = e,
                    l = null != r,
                    o = a.useCallback((e) => (l ? r?.[e]?.type : i[n ?? ""][e]), [l, r, i, n]);
                a.useEffect(() => {
                    if (null == t || null == s) return;
                    let e = [];
                    return (
                        Object.entries(s).forEach((n) => {
                            let [i, r] = n,
                                a = o(i);
                            if (null == a || null == r) return;
                            let s = t.viewModelInstance?.[a]?.(i);
                            null != s && (s.on(r), e.push([r, s]));
                        }),
                        () => {
                            e.forEach((e) => {
                                let [t, n] = e;
                                null != n && n.off(t);
                            });
                        }
                    );
                }, [t, s, o]);
            })({
                rive: n,
                artboard: i,
                artboardProperties: r,
                dynamicDataBinding: l,
                dataBinding: s,
                onDataBindingChange: d,
            }),
                a.useEffect(() => {
                    let e = new AbortController();
                    async function t() {
                        if (null == n || null == n.viewModelInstance || null == _) return;
                        let t = r[i ?? ""];
                        for (let i of Object.entries(_)) {
                            if (e.signal.aborted) return;
                            let r = i[0],
                                a = i[1],
                                s = null != a && "object" == typeof a && "type" in a,
                                l = s ? a.type : t[r],
                                o = s ? a.value : a;
                            switch (l) {
                                case "color":
                                    if ("number" == typeof o) {
                                        let e = n.viewModelInstance?.color(r);
                                        null != e && (e.value = o);
                                    } else if ("object" == typeof o)
                                        if ("resolve" in o) {
                                            let [e, t, i, a] = o
                                                .resolve({ theme: A, saturation: h, highContrastModeEnabled: f })
                                                .rgba();
                                            n.viewModelInstance?.color(r)?.rgba(e, t, i, 255 * a);
                                        } else n.viewModelInstance?.color(r)?.rgba(o.r, o.g, o.b, (o.a ?? 1) * 255);
                                    break;
                                case "number":
                                    let d = n.viewModelInstance?.number(r);
                                    null != d && (d.value = o);
                                    break;
                                case "boolean":
                                    let c = n.viewModelInstance?.boolean(r);
                                    null != c && (c.value = o);
                                    break;
                                case "trigger":
                                    let u = null != o && ("boolean" == typeof o ? o : 0 !== o),
                                        _ = T(I.current, r);
                                    (u && _ !== o && n.viewModelInstance?.trigger(r)?.trigger(), (I.current[r] = o));
                                    break;
                                case "string":
                                    let E = n.viewModelInstance?.string(r);
                                    null != E && (E.value = o);
                                    break;
                                case "enum":
                                    let m = n.viewModelInstance?.enum(r);
                                    null != m && "string" == typeof o && (m.value = o);
                                    break;
                                case "image":
                                    if (null != o) {
                                        let t = await p(o, e.signal);
                                        if (e.signal.aborted) return;
                                        let i = n.viewModelInstance?.image(r);
                                        null != i && (i.value = t);
                                    }
                                    break;
                                case "artboard":
                                    let g = n.viewModelInstance?.artboard(r),
                                        S = n.getBindableArtboard(o);
                                    null != g && null != S && (g.value = S);
                                    break;
                                default:
                                    console.warn(`Unknown property type: ${l}`);
                            }
                        }
                        (n.wakeFromAutoSleep?.(), n.isPlaying || (n.artboard?.advance(0), n.drawFrame()));
                    }
                    return (
                        (async function () {
                            try {
                                await t();
                            } catch (e) {
                                if (!(e instanceof Error && "AbortError" === e.name)) throw e;
                            }
                        })(),
                        () => {
                            e.abort("New data binding applied - aborting previous image fetches.");
                        }
                    );
                }, [T, _, n, i, r, A, n?.viewModelInstance, h, f, p]));
        })({
            rive: j,
            artboard: p,
            artboardProperties: g,
            dataBinding: S,
            dynamicDataBinding: O,
            onDataBindingChange: N,
        }),
        a.useEffect(() => {
            if (null != j && "short-loop" === T && M.reducedMotion.enabled) {
                function e() {
                    null != j &&
                        j.isPlaying &&
                        (H.current = setTimeout(() => {
                            j.pause();
                        }, 5e3));
                }
                function t() {
                    clearTimeout(H.current);
                }
                return (
                    j.on(o.EventType.Play, e),
                    j.on(o.EventType.Pause, t),
                    j.on(o.EventType.Stop, t),
                    () => {
                        (j.off(o.EventType.Play, e), j.off(o.EventType.Pause, t), j.off(o.EventType.Stop, t));
                    }
                );
            }
        }, [j, T, M.reducedMotion.enabled]),
        a.useLayoutEffect(() => {
            if (null != j) {
                "layout" === _ && j.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != j.canvas &&
                        (j.resizeDrawingSurfaceToCanvas(),
                        j.isPlaying || (j.startRendering(), requestAnimationFrame(() => j.stopRendering())));
                }, 100);
                return () => clearTimeout(e);
            }
        }, [j, _]),
        a.useEffect(() => {
            if (null == j || !M.reducedMotion.enabled) return;
            let e = j.canvas;
            if (null == e) return;
            let t = new (e.ownerDocument.defaultView ?? window).ResizeObserver(() => {
                (j.resizeDrawingSurfaceToCanvas(),
                    j.isPlaying || (j.startRendering(), requestAnimationFrame(() => j.stopRendering())));
            });
            return (t.observe(e), () => t.disconnect());
        }, [j, M.reducedMotion.enabled]),
        a.useEffect(() => {
            B ||
                (null != j &&
                    null == x &&
                    null == v &&
                    (k(j.stateMachineNames),
                    j.reset({ stateMachines: j.stateMachineNames, autoplay: s, artboard: p, autoBind: !0 }),
                    j.setupRiveListeners()));
        }, [j, s, x, p, v, B]));
    let Y = a.useRef(0);
    return (
        a.useEffect(() => {
            if (null == j) return;
            let e = (t) => {
                null != t.data &&
                    "number" == typeof t.data &&
                    ((Y.current = t.data),
                    t.data > 0 &&
                        ("halt" === T && M.reducedMotion.enabled && j.isPlaying && j.pause(),
                        j.off(o.EventType.Advance, e)));
            };
            return (
                j.on(o.EventType.Advance, e),
                s && j.play(),
                () => {
                    j.off(o.EventType.Advance, e);
                }
            );
        }, [j, M.reducedMotion.enabled, T, s]),
        a.useEffect(() => {
            G();
        }, [G, p, _, E, S, O, g]),
        !(function (e) {
            let { rive: t, autoplay: n, isRiveWebPerfEnabled: i, isFocused: r, isUserIdle: s, lastFrameRef: l } = e,
                c = i ? t?.canvas : null,
                u = (0, d.Cz)(c),
                _ = r && !s && (!i || u),
                E = a.useRef(!1),
                A = a.useRef(null);
            a.useEffect(() => {
                if (null == t) return;
                t !== A.current && ((A.current = t), i && (E.current = n));
                let e = null;
                return (
                    !_ && E.current && t.isPlaying
                        ? l.current > 0
                            ? t.pause()
                            : ((e = (n) => {
                                  "number" == typeof n.data &&
                                      !(n.data <= 0) &&
                                      (null != e && t.off(o.EventType.Advance, e), t.isPlaying && t.pause());
                              }),
                              t.on(o.EventType.Advance, e))
                        : _ && !t.isPlaying && E.current && t.play(),
                    () => {
                        (null != e && t.off(o.EventType.Advance, e),
                            null != t && _ && (E.current = null != t.frameRequestId || !0 === t.isAutoSleeping));
                    }
                );
            }, [t, _, l, n, i]);
        })({ rive: j, autoplay: s, isRiveWebPerfEnabled: t, isFocused: U, isUserIdle: w, lastFrameRef: Y }),
        (0, r.jsx)(W, { className: l, style: A, "aria-hidden": !0 })
    );
}
o.RuntimeLoader.setWasmUrl(l());
