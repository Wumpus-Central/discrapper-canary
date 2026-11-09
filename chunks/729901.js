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
    f = E(l.Alignment);
var h = n(611361),
    I = n(51906),
    p = (((i = {}).Disabled = "disabled"), (i.Loading = "loading"), (i.Loaded = "loaded"), (i.Error = "error"), i);
let m = new Map();
function T(e) {
    e.listeners.forEach((e) => e());
}
function g(e, t) {
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
                            (n.getInstance(), (i.status = "loaded"), 0 === i.consumers && g(e, i), T(i));
                        }),
                        n.on(l.EventType.LoadError, () => {
                            ((i.status = "error"), m.get(e) === i && m.delete(e), T(i));
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
            alignment: T,
            style: g,
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
        { rive: Q, RiveComponent: J } = (0, l.useRive)(
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
                    alignment: null != T ? f[T] : l.Alignment.Center,
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
                ((q.current = !1), Q?.play());
            },
            pause: () => {
                ((q.current = !0), Q?.pause());
            },
            stop: () => Q?.stop(),
            getPlaybackState: () =>
                null == Q
                    ? null
                    : {
                          isPlaying: Q.isPlaying,
                          isPaused: Q.isPaused,
                          isAutoSleeping: Q.isAutoSleeping ?? !1,
                          isRenderScheduled: null != Q.frameRequestId,
                          fps: Q.fps,
                      },
            getProperties: () => {
                let e = Q?.viewModelInstance,
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
                if (null == Q) return [];
                let e = new Set(),
                    t = Q.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [Q],
    );
    let Z = X && (Y || null != w || null != H) ? Q : null,
        ee = (0, l.useViewModel)(Z),
        et = (0, l.useViewModelInstance)(ee, null != K ? { name: K, rive: Z } : { useDefault: !0, rive: Z }),
        en =
            ((t = Q),
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
        if (null != Q && "short-loop" === C && x.reducedMotion.enabled) {
            function e() {
                null != Q &&
                    Q.isPlaying &&
                    (z.current = setTimeout(() => {
                        Q.pause();
                    }, 5e3));
            }
            function t() {
                clearTimeout(z.current);
            }
            return (
                Q.on(l.EventType.Play, e),
                Q.on(l.EventType.Pause, t),
                Q.on(l.EventType.Stop, t),
                () => {
                    (Q.off(l.EventType.Play, e), Q.off(l.EventType.Pause, t), Q.off(l.EventType.Stop, t));
                }
            );
        }
    }, [Q, C, x.reducedMotion.enabled]),
        a.useLayoutEffect(() => {
            if (null != Q) {
                "layout" === m && Q.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != Q.canvas &&
                        (Q.resizeDrawingSurfaceToCanvas(),
                        Q.isPlaying || (Q.startRendering(), requestAnimationFrame(() => Q.stopRendering())));
                }, 100);
                return () => clearTimeout(e);
            }
        }, [Q, m]),
        a.useEffect(() => {
            if (null == Q || !x.reducedMotion.enabled) return;
            let e = Q.canvas;
            if (null == e) return;
            let t = new (e.ownerDocument.defaultView ?? window).ResizeObserver(() => {
                (Q.resizeDrawingSurfaceToCanvas(),
                    Q.isPlaying || (Q.startRendering(), requestAnimationFrame(() => Q.stopRendering())));
            });
            return (t.observe(e), () => t.disconnect());
        }, [Q, x.reducedMotion.enabled]),
        a.useEffect(() => {
            Y ||
                (null != Q &&
                    null == H &&
                    null == w &&
                    (j(Q.stateMachineNames),
                    Q.reset({ stateMachines: Q.stateMachineNames, autoplay: I, artboard: N, autoBind: !0 }),
                    Q.setupRiveListeners()));
        }, [Q, I, H, N, w, Y]));
    let ei = a.useRef(I);
    a.useEffect(() => {
        (I && !ei.current && (q.current = !1), (ei.current = I));
    }, [I]);
    let er = a.useRef(0);
    (a.useEffect(() => {
        if (null == Q) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((er.current = t.data),
                t.data > 0 &&
                    ("halt" === C && x.reducedMotion.enabled && Q.isPlaying && Q.pause(),
                    Q.off(l.EventType.Advance, e)));
        };
        return (
            Q.on(l.EventType.Advance, e),
            I && !q.current && Q.play(),
            () => {
                Q.off(l.EventType.Advance, e);
            }
        );
    }, [Q, x.reducedMotion.enabled, C, I]),
        a.useEffect(() => {
            V();
        }, [V, N, m, T, R]),
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
                f = a.useRef(null);
            a.useEffect(() => {
                if (null == t) return;
                t !== f.current && ((f.current = t), i && (A.current = n));
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
            rive: Q,
            autoplay: I,
            isRiveWebPerfEnabled: u,
            isFocused: F,
            isUserIdle: B,
            lastFrameRef: er,
            isPausedByCallerRef: q,
        }));
    let ea = a.useMemo(
        () => ({ instance: et, rive: Q, reducedMotionEnabled: x.reducedMotion.enabled, playIfNeeded: en }),
        [et, Q, x.reducedMotion.enabled, en],
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(J, { className: p, style: g, "aria-hidden": !0 }),
            null != D ? (0, r.jsx)(h.j.Provider, { value: ea, children: D() }) : null,
        ],
    });
}
l.RuntimeLoader.setWasmUrl(s);
