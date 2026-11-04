n.d(t, { w: () => O });
var i,
    r = n(477900),
    a = n(582128),
    s = n(848837),
    l = n(971940),
    o = n(941861),
    d = n(844222),
    c = n(116711),
    u = n(282802),
    _ = n.n(u);
function E(e) {
    let t = {};
    for (let n of Object.keys(e)) t[_()(n)] = e[n];
    return t;
}
let A = E(l.Fit),
    h = E(l.Alignment);
var f = n(611361),
    I = n(51906),
    p = (((i = {}).Disabled = "disabled"), (i.Loading = "loading"), (i.Loaded = "loaded"), (i.Error = "error"), i);
let m = new Map();
function g(e) {
    e.listeners.forEach((e) => e());
}
function T(e, t) {
    (null != t.removalTimer && clearTimeout(t.removalTimer),
        (t.removalTimer = setTimeout(() => {
            var n, i;
            return (
                (n = e),
                void (((i = t).removalTimer = null),
                i.consumers > 0 || m.get(n) !== i || (m.delete(n), i.riveFile.cleanup()))
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
            let e = (0, c.G9)().experiments?.enabledExperiments,
                [t] = a.useState(() => e?.includes("rive-web-perf") ?? !1);
            return t;
        })(),
        n = (function (e) {
            let [t, n] = a.useState(null);
            return (a.useLayoutEffect(() => {
                if (null == e) return;
                let t = (function (e) {
                    let t = m.get(e);
                    if (null != t) return t;
                    let n = new l.RiveFile({ buffer: e }),
                        i = { riveFile: n, status: "loading", consumers: 0, removalTimer: null, listeners: new Set() };
                    return (
                        n.on(l.EventType.Load, () => {
                            (n.getInstance(), (i.status = "loaded"), 0 === i.consumers && T(e, i), g(i));
                        }),
                        n.on(l.EventType.LoadError, () => {
                            ((i.status = "error"), m.get(e) === i && m.delete(e), g(i));
                        }),
                        m.set(e, i),
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
                            0 === t.consumers && "loaded" === t.status && T(e, t));
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
    var t, n;
    let i,
        s,
        {
            isRiveWebPerfEnabled: u,
            sharedRiveFile: _,
            buffer: E,
            autoplay: I = !0,
            className: p,
            fit: m,
            alignment: g,
            style: T,
            eventTargetRef: S,
            artboard: N,
            withReducedMotion: C = "halt",
            ref: O,
            artboardProperties: R,
            artboardViewModelInstances: L,
            defaultViewModelInstance: y,
            renderDataBinding: D,
            touchScrollEnabled: b = !0,
            listenOnDocumentBody: v,
            eventCapture: P,
            assetLoader: M,
            onLoad: U,
            stateMachine: w,
            artboardStateMachines: G,
        } = e,
        x = a.useContext(d.C),
        k = (0, o.Rs)(),
        F = (0, c.G9)().isWindowFocused?.() ?? k,
        [B, V] = (0, o.Xb)(3e4),
        [H, j] = a.useState(void 0),
        W = a.useMemo(() => {
            if (u && null != G) return G[N ?? ""];
        }, [u, G, N]),
        Y = null != W,
        [K] = a.useState(y),
        $ = (L?.[N ?? ""] ?? []).length > 0,
        X = null != D || null != K || $,
        z = a.useRef(null),
        q = a.useRef(!1),
        { rive: Z, RiveComponent: Q } = (0, l.useRive)(
            {
                eventTarget: S?.current,
                ...(null != _ ? { riveFile: _ } : { buffer: E }),
                autoplay: I,
                stateMachines: null != w ? [w] : Y ? W : H,
                artboard: N,
                autoBind: !!Y || !!X || void 0,
                enableAutoSleep: u,
                useOffscreenRenderer: !0,
                layout: new l.Layout({
                    fit: null != m ? A[m] : l.Fit.Cover,
                    alignment: null != g ? h[g] : l.Alignment.Center,
                }),
                isTouchScrollEnabled: b,
                listenOnDocumentBody: v,
                eventCapture: P,
                assetLoader: M,
                onLoad: U,
            },
            { ...(u ? { shouldUseIntersectionObserver: !1 } : {}) },
        );
    a.useImperativeHandle(
        O,
        () => ({
            play: () => {
                ((q.current = !1), Z?.play());
            },
            pause: () => {
                ((q.current = !0), Z?.pause());
            },
            stop: () => Z?.stop(),
            getPlaybackState: () =>
                null == Z
                    ? null
                    : {
                          isPlaying: Z.isPlaying,
                          isPaused: Z.isPaused,
                          isAutoSleeping: Z.isAutoSleeping ?? !1,
                          isRenderScheduled: null != Z.frameRequestId,
                          fps: Z.fps,
                      },
            getProperties: () => {
                let e = Z?.viewModelInstance,
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
                if (null == Z) return [];
                let e = new Set(),
                    t = Z.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [Z],
    );
    let J = X && (Y || null != w || null != H) ? Z : null,
        ee = (0, l.useViewModel)(J),
        et = (0, l.useViewModelInstance)(ee, null != K ? { name: K, rive: J } : { useDefault: !0, rive: J }),
        en =
            ((t = Z),
            (n = V),
            (i = a.useRef(null)),
            a.useEffect(
                () => (
                    (i.current = t),
                    () => {
                        i.current = null;
                    }
                ),
                [t],
            ),
            (s = a.useRef(!1)),
            a.useCallback(() => {
                null == t ||
                    s.current ||
                    ((s.current = !0),
                    queueMicrotask(() => {
                        ((s.current = !1),
                            i.current === t &&
                                (n(), t.wakeFromAutoSleep?.(), t.isPlaying || (t.artboard?.advance(0), t.drawFrame())));
                    }));
            }, [t, n]));
    (a.useEffect(() => {
        if (null != Z && "short-loop" === C && x.reducedMotion.enabled) {
            function e() {
                null != Z &&
                    Z.isPlaying &&
                    (z.current = setTimeout(() => {
                        Z.pause();
                    }, 5e3));
            }
            function t() {
                clearTimeout(z.current);
            }
            return (
                Z.on(l.EventType.Play, e),
                Z.on(l.EventType.Pause, t),
                Z.on(l.EventType.Stop, t),
                () => {
                    (Z.off(l.EventType.Play, e), Z.off(l.EventType.Pause, t), Z.off(l.EventType.Stop, t));
                }
            );
        }
    }, [Z, C, x.reducedMotion.enabled]),
        a.useLayoutEffect(() => {
            if (null != Z) {
                "layout" === m && Z.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != Z.canvas &&
                        (Z.resizeDrawingSurfaceToCanvas(),
                        Z.isPlaying || (Z.startRendering(), requestAnimationFrame(() => Z.stopRendering())));
                }, 100);
                return () => clearTimeout(e);
            }
        }, [Z, m]),
        a.useEffect(() => {
            if (null == Z || !x.reducedMotion.enabled) return;
            let e = Z.canvas;
            if (null == e) return;
            let t = new (e.ownerDocument.defaultView ?? window).ResizeObserver(() => {
                (Z.resizeDrawingSurfaceToCanvas(),
                    Z.isPlaying || (Z.startRendering(), requestAnimationFrame(() => Z.stopRendering())));
            });
            return (t.observe(e), () => t.disconnect());
        }, [Z, x.reducedMotion.enabled]),
        a.useEffect(() => {
            Y ||
                (null != Z &&
                    null == H &&
                    null == w &&
                    (j(Z.stateMachineNames),
                    Z.reset({ stateMachines: Z.stateMachineNames, autoplay: I, artboard: N, autoBind: !0 }),
                    Z.setupRiveListeners()));
        }, [Z, I, H, N, w, Y]));
    let ei = a.useRef(I);
    a.useEffect(() => {
        (I && !ei.current && (q.current = !1), (ei.current = I));
    }, [I]);
    let er = a.useRef(0);
    (a.useEffect(() => {
        if (null == Z) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((er.current = t.data),
                t.data > 0 &&
                    ("halt" === C && x.reducedMotion.enabled && Z.isPlaying && Z.pause(),
                    Z.off(l.EventType.Advance, e)));
        };
        return (
            Z.on(l.EventType.Advance, e),
            I && !q.current && Z.play(),
            () => {
                Z.off(l.EventType.Advance, e);
            }
        );
    }, [Z, x.reducedMotion.enabled, C, I]),
        a.useEffect(() => {
            V();
        }, [V, N, m, g, R]),
        (function (e) {
            let {
                    rive: t,
                    autoplay: n,
                    isRiveWebPerfEnabled: i,
                    isFocused: r,
                    isUserIdle: s,
                    lastFrameRef: d,
                    isPausedByCallerRef: c,
                } = e,
                u = i ? t?.canvas : null,
                _ = (0, o.Cz)(u),
                E = r && !s && (!i || _),
                A = a.useRef(!1),
                h = a.useRef(null);
            a.useEffect(() => {
                if (null == t) return;
                t !== h.current && ((h.current = t), i && (A.current = n));
                let e = null,
                    r = c.current;
                return (
                    ((!E && A.current) || r) && t.isPlaying
                        ? d.current > 0
                            ? t.pause()
                            : ((e = (n) => {
                                  "number" != typeof n.data ||
                                      n.data <= 0 ||
                                      (null != e && t.off(l.EventType.Advance, e),
                                      (!E || c.current) && t.isPlaying && t.pause());
                              }),
                              t.on(l.EventType.Advance, e))
                        : E && !r && !t.isPlaying && A.current && t.play(),
                    () => {
                        (null != e && t.off(l.EventType.Advance, e),
                            null != t && E && (A.current = null != t.frameRequestId || !0 === t.isAutoSleeping));
                    }
                );
            }, [t, E, d, n, i, c]);
        })({
            rive: Z,
            autoplay: I,
            isRiveWebPerfEnabled: u,
            isFocused: F,
            isUserIdle: B,
            lastFrameRef: er,
            isPausedByCallerRef: q,
        }));
    let ea = a.useMemo(
        () => ({ instance: et, rive: Z, reducedMotionEnabled: x.reducedMotion.enabled, playIfNeeded: en }),
        [et, Z, x.reducedMotion.enabled, en],
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Q, { className: p, style: T, "aria-hidden": !0 }),
            null != D ? (0, r.jsx)(f.j.Provider, { value: ea, children: D() }) : null,
        ],
    });
}
l.RuntimeLoader.setWasmUrl(s);
