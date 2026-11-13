n.d(t, { w: () => R });
var i,
    r = n(477900),
    a = n(582128),
    s = n(32677),
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
    I = n(781013),
    p = n(51906),
    m = (((i = {}).Disabled = "disabled"), (i.Loading = "loading"), (i.Loaded = "loaded"), (i.Error = "error"), i);
let g = new Map();
function T(e) {
    e.listeners.forEach((e) => e());
}
function S(e, t) {
    (null != t.removalTimer && clearTimeout(t.removalTimer),
        (t.removalTimer = setTimeout(() => {
            var n, i;
            return (
                (n = e),
                void (((i = t).removalTimer = null),
                i.consumers > 0 || g.get(n) !== i || (g.delete(n), i.riveFile.cleanup()))
            );
        }, 3e4)));
}
let N = { status: "disabled", riveFile: null },
    C = { status: "loading", riveFile: null };
function O(e) {
    let { className: t, style: n } = e;
    return (0, r.jsx)("div", {
        className: t,
        style: null != t && "" !== t ? void 0 : { width: "100%", height: "100%", ...n },
        "aria-hidden": !0,
    });
}
function R(e) {
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
                    let t = g.get(e);
                    if (null != t) return t;
                    let n = new l.RiveFile({ buffer: e }),
                        i = { riveFile: n, status: "loading", consumers: 0, removalTimer: null, listeners: new Set() };
                    return (
                        n.on(l.EventType.Load, () => {
                            (n.getInstance(), (i.status = "loaded"), 0 === i.consumers && S(e, i), T(i));
                        }),
                        n.on(l.EventType.LoadError, () => {
                            ((i.status = "error"), g.get(e) === i && g.delete(e), T(i));
                        }),
                        g.set(e, i),
                        (0, p.yO)(n.init()),
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
                            0 === t.consumers && "loaded" === t.status && S(e, t));
                    }
                );
            }, [e]),
            null == e)
                ? N
                : null == t || t.buffer !== e
                  ? C
                  : t.value;
        })(t && null == e.assetLoader ? e.buffer : null);
    return n.status === m.Loading
        ? (0, r.jsx)(O, { className: e.className, style: e.style })
        : (0, r.jsx)(L, { ...e, isRiveWebPerfEnabled: t, sharedRiveFile: n.riveFile ?? void 0 });
}
function L(e) {
    var t, n, i, s;
    let u,
        _,
        E,
        p,
        {
            isRiveWebPerfEnabled: m,
            sharedRiveFile: g,
            buffer: T,
            autoplay: S = !0,
            className: N,
            fit: C,
            alignment: O,
            style: R,
            eventTargetRef: L,
            artboard: y,
            withReducedMotion: D = "halt",
            ref: b,
            artboardProperties: v,
            artboardViewModelInstances: P,
            defaultViewModelInstance: M,
            renderDataBinding: U,
            touchScrollEnabled: w = !0,
            listenOnDocumentBody: G,
            eventCapture: x,
            assetLoader: k,
            onLoad: F,
            stateMachine: B,
            artboardStateMachines: V,
        } = e,
        H = a.useContext(d.C),
        j = (0, o.Rs)(),
        W = (0, c.G9)().isWindowFocused?.() ?? j,
        [Y, K] = (0, o.Xb)(3e4),
        [$, X] = a.useState(void 0),
        z = a.useMemo(() => {
            if (m && null != V) return V[y ?? ""];
        }, [m, V, y]),
        q = null != z,
        [Q] = a.useState(M),
        J = (P?.[y ?? ""] ?? []).length > 0,
        Z = null != U || null != Q || J,
        ee = a.useRef(null),
        et = a.useRef(!1),
        { rive: en, RiveComponent: ei } = (0, l.useRive)(
            {
                eventTarget: L?.current,
                ...(null != g ? { riveFile: g } : { buffer: T }),
                autoplay: S,
                stateMachines: null != B ? [B] : q ? z : $,
                artboard: y,
                autoBind: !!q || !!Z || void 0,
                enableAutoSleep: m,
                useOffscreenRenderer: !0,
                layout: new l.Layout({
                    fit: null != C ? A[C] : l.Fit.Cover,
                    alignment: null != O ? f[O] : l.Alignment.Center,
                }),
                isTouchScrollEnabled: w,
                listenOnDocumentBody: G,
                eventCapture: x,
                assetLoader: k,
                onLoad: F,
            },
            { ...(m ? { shouldUseIntersectionObserver: !1 } : {}) },
        );
    a.useImperativeHandle(
        b,
        () => ({
            play: () => {
                ((et.current = !1), en?.play());
            },
            pause: () => {
                ((et.current = !0), en?.pause());
            },
            stop: () => en?.stop(),
            getPlaybackState: () =>
                null == en
                    ? null
                    : {
                          isPlaying: en.isPlaying,
                          isPaused: en.isPaused,
                          isAutoSleeping: en.isAutoSleeping ?? !1,
                          isRenderScheduled: null != en.frameRequestId,
                          fps: en.fps,
                      },
            getProperties: () => {
                let e = en?.viewModelInstance,
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
                if (null == en) return [];
                let e = new Set(),
                    t = en.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [en],
    );
    let er = Z && (q || null != B || null != $) ? en : null,
        ea = (0, l.useViewModel)(er),
        es = (0, l.useViewModelInstance)(ea, null != Q ? { name: Q, rive: er } : { useDefault: !0, rive: er }),
        el =
            ((t = en),
            (n = K),
            (u = a.useRef(null)),
            a.useEffect(
                () => (
                    (u.current = t),
                    () => {
                        u.current = null;
                    }
                ),
                [t],
            ),
            (_ = a.useRef(!1)),
            a.useCallback(() => {
                null == t ||
                    _.current ||
                    ((_.current = !0),
                    queueMicrotask(() => {
                        ((_.current = !1),
                            u.current === t &&
                                (n(), t.wakeFromAutoSleep?.(), t.isPlaying || (t.artboard?.advance(0), t.drawFrame())));
                    }));
            }, [t, n]));
    (a.useEffect(() => {
        if (null != en && "short-loop" === D && H.reducedMotion.enabled) {
            function e() {
                null != en &&
                    en.isPlaying &&
                    (ee.current = setTimeout(() => {
                        en.pause();
                    }, 5e3));
            }
            function t() {
                clearTimeout(ee.current);
            }
            return (
                en.on(l.EventType.Play, e),
                en.on(l.EventType.Pause, t),
                en.on(l.EventType.Stop, t),
                () => {
                    (en.off(l.EventType.Play, e), en.off(l.EventType.Pause, t), en.off(l.EventType.Stop, t));
                }
            );
        }
    }, [en, D, H.reducedMotion.enabled]),
        a.useLayoutEffect(() => {
            if (null != en) {
                "layout" === C && en.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != en.canvas &&
                        (en.resizeDrawingSurfaceToCanvas(),
                        en.isPlaying || (en.startRendering(), requestAnimationFrame(() => en.stopRendering())));
                }, 100);
                return () => clearTimeout(e);
            }
        }, [en, C]),
        a.useEffect(() => {
            if (null == en || !H.reducedMotion.enabled) return;
            let e = (0, I.b)(en);
            if (null == e) return;
            let t = new (e.ownerDocument.defaultView ?? window).ResizeObserver(() => {
                (en.resizeDrawingSurfaceToCanvas(),
                    en.isPlaying || (en.startRendering(), requestAnimationFrame(() => en.stopRendering())));
            });
            return (t.observe(e), () => t.disconnect());
        }, [en, H.reducedMotion.enabled]),
        a.useEffect(() => {
            q ||
                (null != en &&
                    null == $ &&
                    null == B &&
                    (X(en.stateMachineNames),
                    en.reset({ stateMachines: en.stateMachineNames, autoplay: S, artboard: y, autoBind: !0 }),
                    en.setupRiveListeners()));
        }, [en, S, $, y, B, q]));
    let eo = a.useRef(S);
    a.useEffect(() => {
        (S && !eo.current && (et.current = !1), (eo.current = S));
    }, [S]);
    let ed = a.useRef(0);
    (a.useEffect(() => {
        if (null == en) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((ed.current = t.data),
                t.data > 0 &&
                    ("halt" === D && H.reducedMotion.enabled && en.isPlaying && en.pause(),
                    en.off(l.EventType.Advance, e)));
        };
        return (
            en.on(l.EventType.Advance, e),
            S && !et.current && en.play(),
            () => {
                en.off(l.EventType.Advance, e);
            }
        );
    }, [en, H.reducedMotion.enabled, D, S]),
        a.useEffect(() => {
            K();
        }, [K, y, C, O, v]));
    let { playBriefly: ec } = (function (e) {
            let {
                    rive: t,
                    autoplay: n,
                    isRiveWebPerfEnabled: i,
                    isFocused: r,
                    isUserIdle: s,
                    lastFrameRef: d,
                    isPausedByCallerRef: c,
                    canPlayBriefly: u,
                } = e,
                _ = i && null != t ? (0, I.b)(t) : null,
                E = (0, o.Cz)(_),
                A = r && !s && (!i || E),
                f = a.useRef(!1),
                h = a.useRef(null);
            a.useEffect(() => {
                if (null == t) return;
                t !== h.current && ((h.current = t), i && (f.current = n));
                let e = null,
                    r = c.current;
                return (
                    ((!A && f.current && !0 !== t.isPlayingUntilSettled) || r) && t.isPlaying
                        ? d.current > 0
                            ? t.pause()
                            : ((e = (n) => {
                                  "number" != typeof n.data ||
                                      n.data <= 0 ||
                                      (null != e && t.off(l.EventType.Advance, e),
                                      (!A || c.current) && t.isPlaying && t.pause());
                              }),
                              t.on(l.EventType.Advance, e))
                        : A && !r && !t.isPlaying && f.current
                          ? t.play()
                          : A && !r && !0 === t.isPlayingUntilSettled && t.play(),
                    () => {
                        (null != e && t.off(l.EventType.Advance, e),
                            null != t && A && (f.current = null != t.frameRequestId || !0 === t.isAutoSleeping));
                    }
                );
            }, [t, A, d, n, i, c]);
            let p = !A && (!r || s) && (!i || E) && u,
                m = a.useRef(p);
            return (
                a.useEffect(() => {
                    m.current = p;
                }, [p]),
                {
                    playBriefly: a.useCallback(() => {
                        null == t ||
                            (t.isPlaying && !0 !== t.isPlayingUntilSettled) ||
                            (m.current && f.current && !c.current && t.playUntilSettled?.());
                    }, [t, c]),
                }
            );
        })({
            rive: en,
            autoplay: S,
            isRiveWebPerfEnabled: m,
            isFocused: W,
            isUserIdle: Y,
            lastFrameRef: ed,
            isPausedByCallerRef: et,
            canPlayBriefly: !H.reducedMotion.enabled || "play" === D,
        }),
        eu =
            ((i = en),
            (s = ec),
            (E = a.useRef(null)),
            a.useEffect(
                () => (
                    (E.current = i),
                    () => {
                        E.current = null;
                    }
                ),
                [i],
            ),
            (p = a.useRef(null)),
            a.useCallback(
                (e) => {
                    if (null != i) {
                        if (null != p.current) {
                            p.current.frameTime ??= e;
                            return;
                        }
                        ((p.current = { frameTime: e }),
                            queueMicrotask(() => {
                                let e = p.current;
                                ((p.current = null), null != e && E.current === i && (i.redrawNow?.(e.frameTime), s()));
                            }));
                    }
                },
                [i, s],
            )),
        e_ = a.useMemo(
            () => ({
                instance: es,
                rive: en,
                reducedMotionEnabled: H.reducedMotion.enabled,
                playIfNeeded: el,
                showColorChange: eu,
            }),
            [es, en, H.reducedMotion.enabled, el, eu],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ei, { className: N, style: R, "aria-hidden": !0 }),
            null != U ? (0, r.jsx)(h.j.Provider, { value: e_, children: U() }) : null,
        ],
    });
}
l.RuntimeLoader.setWasmUrl(s);
