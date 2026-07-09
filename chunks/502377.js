"use strict";
n.d(t, { w: () => h });
var i = n(627968),
    r = n(64700),
    a = n(389544),
    s = n(647307),
    l = n(941861),
    o = n(844222),
    d = n(460890),
    c = n(322925),
    u = n.n(c);
function _(e) {
    let t = {};
    for (let n of Object.keys(e)) t[u()(n)] = e[n];
    return t;
}
let E = _(s.Fit),
    A = _(s.Alignment);
function h(e) {
    let {
            buffer: t,
            autoplay: n = !0,
            className: a,
            fit: c,
            alignment: u,
            style: _,
            eventTargetRef: h,
            artboard: I,
            withReducedMotion: f = "halt",
            ref: p,
            artboardProperties: T,
            dataBinding: m,
            onDataBindingChange: g,
            touchScrollEnabled: S = !0,
            dynamicDataBinding: N,
            listenOnDocumentBody: C,
            eventCapture: R,
            assetLoader: O,
            onLoad: L,
            stateMachine: D,
        } = e,
        y = r.useContext(o.C),
        v = (0, l.R)(),
        b = (0, d.G9)().isWindowFocused?.() ?? v,
        [M, P] = (0, l.X)(3e4),
        [U, w] = r.useState(void 0),
        G = r.useRef(null),
        { rive: x, RiveComponent: k } = (0, s.useRive)({
            eventTarget: h?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != D ? [D] : U,
            artboard: I,
            useOffscreenRenderer: !0,
            layout: new s.Layout({
                fit: null != c ? E[c] : s.Fit.Cover,
                alignment: null != u ? A[u] : s.Alignment.Center,
            }),
            isTouchScrollEnabled: S,
            listenOnDocumentBody: C,
            eventCapture: R,
            assetLoader: O,
            onLoad: L,
        });
    r.useImperativeHandle(
        p,
        () => ({
            play: () => x?.play(),
            pause: () => x?.pause(),
            stop: () => x?.stop(),
            getProperties: () =>
                x?.viewModelInstance?.properties.reduce(
                    (e, t) => (
                        "viewModel" === t.type &&
                            x?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                e[t.name + "/" + n.name] = {
                                    type: n.type,
                                    value: x?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                };
                            }),
                        (e[t.name] = { type: t.type, value: x?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                        e
                    ),
                    {},
                ) ?? {},
            getArtboards: () => {
                if (null == x) return [];
                let e = new Set(),
                    t = x.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [x],
    ),
        (function (e) {
            let t,
                {
                    rive: n,
                    artboard: i,
                    artboardProperties: a,
                    dataBinding: l,
                    dynamicDataBinding: c,
                    onDataBindingChange: u,
                } = e,
                _ = c ?? l,
                E = (0, s.useViewModel)(n);
            (0, s.useViewModelInstance)(E);
            let { theme: A, saturation: h } = (0, d.G9)(),
                { highContrastModeEnabled: I } = r.useContext(o.C),
                f = r.useRef({}),
                p =
                    ((t = r.useRef({})),
                    r.useCallback(async (e, n) => {
                        if ("string" != typeof e) return Promise.resolve(e);
                        {
                            if (null != t.current[e]) return Promise.resolve(t.current[e]);
                            let i = await fetch(e, { signal: n }).catch((e) => {
                                if (n?.aborted) return Promise.resolve(null);
                                throw e;
                            });
                            if (null == i || n?.aborted) return Promise.resolve(null);
                            let r = await i.arrayBuffer(),
                                a = await (0, s.decodeImage)(new Uint8Array(r));
                            return (t.current[e] = a), a;
                        }
                    }, [])),
                T = r.useCallback((e, t) => {
                    let n = e?.[t];
                    return null == n ? null : "object" == typeof n && "value" in n ? n.value : n;
                }, []);
            (function (e) {
                let { rive: t, artboard: n, artboardProperties: i, dynamicDataBinding: a, onDataBindingChange: s } = e,
                    l = null != a,
                    o = r.useCallback((e) => (l ? a?.[e]?.type : i[n ?? ""][e]), [l, a, i, n]);
                r.useEffect(() => {
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
                artboardProperties: a,
                dynamicDataBinding: c,
                dataBinding: l,
                onDataBindingChange: u,
            }),
                r.useEffect(() => {
                    let e = new AbortController();
                    return (
                        (async function () {
                            if (null == n || null == n.viewModelInstance || null == _) return;
                            let t = a[i ?? ""];
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
                                                    .resolve({ theme: A, saturation: h, highContrastModeEnabled: I })
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
                                            _ = T(f.current, r);
                                        u && _ !== o && n.viewModelInstance?.trigger(r)?.trigger(), (f.current[r] = o);
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
                        })().catch((e) => {
                            if ("AbortError" !== e.name) throw e;
                        }),
                        () => {
                            e.abort("New data binding applied - aborting previous image fetches.");
                        }
                    );
                }, [T, _, n, i, a, A, n?.viewModelInstance, h, I, p]);
        })({
            rive: x,
            artboard: I,
            artboardProperties: T,
            dataBinding: m,
            dynamicDataBinding: N,
            onDataBindingChange: g,
        }),
        r.useEffect(() => {
            if (null != x && "short-loop" === f && y.reducedMotion.enabled) {
                let e = () => {
                        x.isPlaying &&
                            (G.current = setTimeout(() => {
                                x.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(G.current);
                    };
                return (
                    x.on(s.EventType.Play, e),
                    x.on(s.EventType.Pause, t),
                    x.on(s.EventType.Stop, t),
                    () => {
                        x.off(s.EventType.Play, e), x.off(s.EventType.Pause, t), x.off(s.EventType.Stop, t);
                    }
                );
            }
        }, [x, f, y.reducedMotion.enabled]),
        r.useLayoutEffect(() => {
            if (null != x) {
                "layout" === c && x.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != x.canvas &&
                        (x.resizeDrawingSurfaceToCanvas(),
                        x.isPlaying || (x.startRendering(), requestAnimationFrame(() => x.stopRendering())));
                }, 100);
                return () => clearTimeout(e);
            }
        }, [x, c]),
        r.useEffect(() => {
            if (null == x || !y.reducedMotion.enabled) return;
            let e = x.canvas;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                x.resizeDrawingSurfaceToCanvas(),
                    x.isPlaying || (x.startRendering(), requestAnimationFrame(() => x.stopRendering()));
            });
            return t.observe(e), () => t.disconnect();
        }, [x, y.reducedMotion.enabled]),
        r.useEffect(() => {
            null != x &&
                null == U &&
                null == D &&
                (w(x.stateMachineNames),
                x.reset({ stateMachines: x.stateMachineNames, autoplay: n, artboard: I, autoBind: !0 }),
                x.setupRiveListeners());
        }, [x, n, U, I, D]);
    let F = r.useRef(0);
    r.useEffect(() => {
        if (null == x) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((F.current = t.data),
                t.data > 0 &&
                    ("halt" === f && y.reducedMotion.enabled && x.isPlaying && x.pause(),
                    x.off(s.EventType.Advance, e)));
        };
        return (
            x.on(s.EventType.Advance, e),
            n && x.play(),
            () => {
                x.off(s.EventType.Advance, e);
            }
        );
    }, [x, y.reducedMotion.enabled, f, n]),
        r.useEffect(() => {
            P();
        }, [P, I, c, u, m, N, T]);
    let V = b && !M,
        B = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (null != x)
                return (
                    !V && B.current && x.isPlaying && F.current > 0
                        ? x.pause()
                        : V && !x.isPlaying && B.current && x.play(),
                    () => {
                        null != x && V && (B.current = null != x.frameRequestId);
                    }
                );
        }, [x, V]),
        (0, i.jsx)(k, { className: a, style: _, "aria-hidden": !0 })
    );
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073), s.RuntimeLoader.setWasmUrl(a);
