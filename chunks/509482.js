n.d(t, { w: () => N });
var i,
    r = n(477900),
    a = n(582128),
    s = n(895975),
    l = n(971940),
    o = n(941861),
    d = n(844222),
    c = n(460890),
    u = n(282802),
    _ = n.n(u);
function E(e) {
    let t = {};
    for (let n of Object.keys(e)) t[_()(n)] = e[n];
    return t;
}
let A = E(l.Fit),
    h = E(l.Alignment);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073));
var f = (((i = {}).Disabled = "disabled"), (i.Loading = "loading"), (i.Loaded = "loaded"), (i.Error = "error"), i);
let I = new Map();
function p(e) {
    e.listeners.forEach((e) => e());
}
function T(e, t) {
    (null != t.removalTimer && clearTimeout(t.removalTimer),
        (t.removalTimer = setTimeout(() => {
            var n, i;
            return (
                (n = e),
                void (((i = t).removalTimer = null),
                i.consumers > 0 || I.get(n) !== i || (I.delete(n), i.riveFile.cleanup()))
            );
        }, 3e4)));
}
let m = { status: "disabled", riveFile: null },
    g = { status: "loading", riveFile: null };
function S(e) {
    let { className: t, style: n } = e;
    return (0, r.jsx)("div", {
        className: t,
        style: null != t && "" !== t ? void 0 : { width: "100%", height: "100%", ...n },
        "aria-hidden": !0,
    });
}
function N(e) {
    let t = (function () {
            let e = (0, c.G9)().experiments?.enabledExperiments,
                [t] = a.useState(() => e?.includes("rive-web-perf") ?? !1);
            return t;
        })(),
        n = (function (e) {
            let [t, n] = a.useState(null);
            return (a.useLayoutEffect(() => {
                if (null == e) return;
                let t = (function (e) {
                    let t = I.get(e);
                    if (null != t) return t;
                    let n = new l.RiveFile({ buffer: e }),
                        i = { riveFile: n, status: "loading", consumers: 0, removalTimer: null, listeners: new Set() };
                    return (
                        n.on(l.EventType.Load, () => {
                            (n.getInstance(), (i.status = "loaded"), 0 === i.consumers && T(e, i), p(i));
                        }),
                        n.on(l.EventType.LoadError, () => {
                            ((i.status = "error"), I.get(e) === i && I.delete(e), p(i));
                        }),
                        I.set(e, i),
                        n.init().catch(() => {}),
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
                            0 === t.consumers && "loaded" === t.status && T(e, t));
                    }
                );
            }, [e]),
            null == e)
                ? m
                : null == t || t.buffer !== e
                  ? g
                  : t.value;
        })(t && null == e.assetLoader ? e.buffer : null);
    return n.status === f.Loading
        ? (0, r.jsx)(S, { className: e.className, style: e.style })
        : (0, r.jsx)(C, { ...e, isRiveWebPerfEnabled: t, sharedRiveFile: n.riveFile ?? void 0 });
}
function C(e) {
    let {
            isRiveWebPerfEnabled: t,
            sharedRiveFile: n,
            buffer: i,
            autoplay: s = !0,
            className: u,
            fit: _,
            alignment: E,
            style: f,
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
        M = a.useContext(d.C),
        P = (0, o.Rs)(),
        U = (0, c.G9)().isWindowFocused?.() ?? P,
        [w, G] = (0, o.Xb)(3e4),
        [x, k] = a.useState(void 0),
        F = a.useMemo(() => {
            if (t && null != b) return b[p ?? ""];
        }, [t, b, p]),
        B = null != F,
        V = a.useRef(null),
        { rive: H, RiveComponent: j } = (0, l.useRive)(
            {
                eventTarget: I?.current,
                ...(null != n ? { riveFile: n } : { buffer: i }),
                autoplay: s,
                stateMachines: null != v ? [v] : B ? F : x,
                artboard: p,
                autoBind: !!B || void 0,
                enableAutoSleep: t,
                useOffscreenRenderer: !0,
                layout: new l.Layout({
                    fit: null != _ ? A[_] : l.Fit.Cover,
                    alignment: null != E ? h[E] : l.Alignment.Center,
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
            play: () => H?.play(),
            pause: () => H?.pause(),
            stop: () => H?.stop(),
            getPlaybackState: () =>
                null == H
                    ? null
                    : {
                          isPlaying: H.isPlaying,
                          isPaused: H.isPaused,
                          isAutoSleeping: H.isAutoSleeping ?? !1,
                          isRenderScheduled: null != H.frameRequestId,
                          fps: H.fps,
                      },
            getProperties: () =>
                H?.viewModelInstance?.properties.reduce(
                    (e, t) => (
                        "viewModel" === t.type &&
                            H?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                e[t.name + "/" + n.name] = {
                                    type: n.type,
                                    value: H?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                };
                            }),
                        (e[t.name] = { type: t.type, value: H?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                        e
                    ),
                    {},
                ) ?? {},
            getArtboards: () => {
                if (null == H) return [];
                let e = new Set(),
                    t = H.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [H],
    ),
        (function (e) {
            let t,
                {
                    rive: n,
                    artboard: i,
                    artboardProperties: r,
                    dataBinding: s,
                    dynamicDataBinding: o,
                    onDataBindingChange: u,
                } = e,
                _ = o ?? s,
                E = (0, l.useViewModel)(n);
            (0, l.useViewModelInstance)(E);
            let { theme: A, saturation: h } = (0, c.G9)(),
                { highContrastModeEnabled: f } = a.useContext(d.C),
                I = a.useRef({}),
                p =
                    ((t = a.useRef({})),
                    a.useCallback(async (e, n) => {
                        if ("string" != typeof e) return Promise.resolve(e);
                        {
                            if (null != t.current[e]) return Promise.resolve(t.current[e]);
                            let i = await fetch(e, { signal: n }).catch((e) => {
                                if (n?.aborted) return Promise.resolve(null);
                                throw e;
                            });
                            if (null == i || n?.aborted) return Promise.resolve(null);
                            let r = await i.arrayBuffer(),
                                a = await (0, l.decodeImage)(new Uint8Array(r));
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
                dynamicDataBinding: o,
                dataBinding: s,
                onDataBindingChange: u,
            }),
                a.useEffect(() => {
                    let e = new AbortController();
                    return (
                        (async function () {
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
                                        (u && _ !== o && n.viewModelInstance?.trigger(r)?.trigger(),
                                            (I.current[r] = o));
                                        break;
                                    case "string":
                                        let E = n.viewModelInstance?.string(r);
                                        null != E && (E.value = o);
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
                                        let m = n.viewModelInstance?.artboard(r),
                                            g = n.getBindableArtboard(o);
                                        null != m && null != g && (m.value = g);
                                        break;
                                    default:
                                        console.warn(`Unknown property type: ${l}`);
                                }
                            }
                            n.wakeFromAutoSleep?.();
                        })().catch((e) => {
                            if ("AbortError" !== e.name) throw e;
                        }),
                        () => {
                            e.abort("New data binding applied - aborting previous image fetches.");
                        }
                    );
                }, [T, _, n, i, r, A, n?.viewModelInstance, h, f, p]));
        })({
            rive: H,
            artboard: p,
            artboardProperties: g,
            dataBinding: S,
            dynamicDataBinding: O,
            onDataBindingChange: N,
        }),
        a.useEffect(() => {
            if (null != H && "short-loop" === T && M.reducedMotion.enabled) {
                function e() {
                    null != H &&
                        H.isPlaying &&
                        (V.current = setTimeout(() => {
                            H.pause();
                        }, 5e3));
                }
                function t() {
                    clearTimeout(V.current);
                }
                return (
                    H.on(l.EventType.Play, e),
                    H.on(l.EventType.Pause, t),
                    H.on(l.EventType.Stop, t),
                    () => {
                        (H.off(l.EventType.Play, e), H.off(l.EventType.Pause, t), H.off(l.EventType.Stop, t));
                    }
                );
            }
        }, [H, T, M.reducedMotion.enabled]),
        a.useLayoutEffect(() => {
            if (null != H) {
                "layout" === _ && H.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != H.canvas &&
                        (H.resizeDrawingSurfaceToCanvas(),
                        H.isPlaying || (H.startRendering(), requestAnimationFrame(() => H.stopRendering())));
                }, 100);
                return () => clearTimeout(e);
            }
        }, [H, _]),
        a.useEffect(() => {
            if (null == H || !M.reducedMotion.enabled) return;
            let e = H.canvas;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                (H.resizeDrawingSurfaceToCanvas(),
                    H.isPlaying || (H.startRendering(), requestAnimationFrame(() => H.stopRendering())));
            });
            return (t.observe(e), () => t.disconnect());
        }, [H, M.reducedMotion.enabled]),
        a.useEffect(() => {
            B ||
                (null != H &&
                    null == x &&
                    null == v &&
                    (k(H.stateMachineNames),
                    H.reset({ stateMachines: H.stateMachineNames, autoplay: s, artboard: p, autoBind: !0 }),
                    H.setupRiveListeners()));
        }, [H, s, x, p, v, B]));
    let W = a.useRef(0);
    return (
        a.useEffect(() => {
            if (null == H) return;
            let e = (t) => {
                null != t.data &&
                    "number" == typeof t.data &&
                    ((W.current = t.data),
                    t.data > 0 &&
                        ("halt" === T && M.reducedMotion.enabled && H.isPlaying && H.pause(),
                        H.off(l.EventType.Advance, e)));
            };
            return (
                H.on(l.EventType.Advance, e),
                s && H.play(),
                () => {
                    H.off(l.EventType.Advance, e);
                }
            );
        }, [H, M.reducedMotion.enabled, T, s]),
        a.useEffect(() => {
            G();
        }, [G, p, _, E, S, O, g]),
        !(function (e) {
            let { rive: t, autoplay: n, isRiveWebPerfEnabled: i, isFocused: r, isUserIdle: s, lastFrameRef: d } = e,
                c = i ? t?.canvas : null,
                u = (0, o.Cz)(c),
                _ = r && !s && (!i || u),
                E = a.useRef(!1),
                A = a.useRef(null);
            a.useEffect(() => {
                if (null == t) return;
                t !== A.current && ((A.current = t), i && (E.current = n));
                let e = null;
                return (
                    !_ && E.current && t.isPlaying
                        ? d.current > 0
                            ? t.pause()
                            : ((e = (n) => {
                                  "number" == typeof n.data &&
                                      !(n.data <= 0) &&
                                      (null != e && t.off(l.EventType.Advance, e), t.isPlaying && t.pause());
                              }),
                              t.on(l.EventType.Advance, e))
                        : _ && !t.isPlaying && E.current && t.play(),
                    () => {
                        (null != e && t.off(l.EventType.Advance, e),
                            null != t && _ && (E.current = null != t.frameRequestId || !0 === t.isAutoSleeping));
                    }
                );
            }, [t, _, d, n, i]);
        })({ rive: H, autoplay: s, isRiveWebPerfEnabled: t, isFocused: U, isUserIdle: w, lastFrameRef: W }),
        (0, r.jsx)(j, { className: u, style: f, "aria-hidden": !0 })
    );
}
l.RuntimeLoader.setWasmUrl(s);
