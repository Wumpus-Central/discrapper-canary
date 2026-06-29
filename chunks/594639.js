"use strict";
n.d(t, { w: () => p });
var i = n(627968),
    r = n(64700);
let s = n.p + "714ffcb9aa537a7a.wasm";
var a = n(647307),
    o = n(941861),
    l = n(844222),
    u = n(460890),
    c = n(322925),
    d = n.n(c);
function _(e) {
    let t = {};
    for (let n of Object.keys(e)) t[d()(n)] = e[n];
    return t;
}
let h = _(a.Fit),
    f = _(a.Alignment);
function p(e) {
    let {
            buffer: t,
            autoplay: n = !0,
            className: s,
            fit: c,
            alignment: d,
            style: _,
            eventTargetRef: p,
            artboard: E,
            withReducedMotion: m = "halt",
            ref: g,
            artboardProperties: A,
            dataBinding: I,
            onDataBindingChange: T,
            touchScrollEnabled: S = !0,
            dynamicDataBinding: y,
            listenOnDocumentBody: C,
            eventCapture: N,
            assetLoader: v,
            onLoad: R,
            stateMachine: O,
        } = e,
        b = r.useContext(l.C),
        D = (0, o.R)(),
        L = (0, u.G9)().isWindowFocused?.() ?? D,
        [w, M] = (0, o.X)(3e4),
        [P, x] = r.useState(void 0),
        k = r.useRef(null),
        { rive: U, RiveComponent: G } = (0, a.useRive)({
            eventTarget: p?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != O ? [O] : P,
            artboard: E,
            useOffscreenRenderer: !0,
            layout: new a.Layout({
                fit: null != c ? h[c] : a.Fit.Cover,
                alignment: null != d ? f[d] : a.Alignment.Center,
            }),
            isTouchScrollEnabled: S,
            listenOnDocumentBody: C,
            eventCapture: N,
            assetLoader: v,
            onLoad: R,
        });
    r.useImperativeHandle(
        g,
        () => ({
            play: () => U?.play(),
            pause: () => U?.pause(),
            stop: () => U?.stop(),
            getProperties: () =>
                U?.viewModelInstance?.properties.reduce(
                    (e, t) => (
                        "viewModel" === t.type &&
                            U?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                e[t.name + "/" + n.name] = {
                                    type: n.type,
                                    value: U?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                };
                            }),
                        (e[t.name] = { type: t.type, value: U?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                        e
                    ),
                    {},
                ) ?? {},
            getArtboards: () => {
                if (null == U) return [];
                let e = new Set(),
                    t = U.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [U],
    ),
        (function (e) {
            let t,
                {
                    rive: n,
                    artboard: i,
                    artboardProperties: s,
                    dataBinding: o,
                    dynamicDataBinding: c,
                    onDataBindingChange: d,
                } = e,
                _ = c ?? o,
                h = (0, a.useViewModel)(n);
            (0, a.useViewModelInstance)(h);
            let { theme: f, saturation: p } = (0, u.G9)(),
                { highContrastModeEnabled: E } = r.useContext(l.C),
                m = r.useRef({}),
                g =
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
                                s = await (0, a.decodeImage)(new Uint8Array(r));
                            return (t.current[e] = s), s;
                        }
                    }, [])),
                A = r.useCallback((e, t) => {
                    let n = e?.[t];
                    return null == n ? null : "object" == typeof n && "value" in n ? n.value : n;
                }, []);
            (function (e) {
                let { rive: t, artboard: n, artboardProperties: i, dynamicDataBinding: s, onDataBindingChange: a } = e,
                    o = null != s,
                    l = r.useCallback((e) => (o ? s?.[e]?.type : i[n ?? ""][e]), [o, s, i, n]);
                r.useEffect(() => {
                    if (null == t || null == a) return;
                    let e = [];
                    return (
                        Object.entries(a).forEach((n) => {
                            let [i, r] = n,
                                s = l(i);
                            if (null == s || null == r) return;
                            let a = t.viewModelInstance?.[s]?.(i);
                            null != a && (a.on(r), e.push([r, a]));
                        }),
                        () => {
                            e.forEach((e) => {
                                let [t, n] = e;
                                null != n && n.off(t);
                            });
                        }
                    );
                }, [t, a, l]);
            })({
                rive: n,
                artboard: i,
                artboardProperties: s,
                dynamicDataBinding: c,
                dataBinding: o,
                onDataBindingChange: d,
            }),
                r.useEffect(() => {
                    let e = new AbortController();
                    return (
                        (async function () {
                            if (null == n || null == n.viewModelInstance || null == _) return;
                            let t = s[i ?? ""];
                            for (let i of Object.entries(_)) {
                                if (e.signal.aborted) return;
                                let r = i[0],
                                    s = i[1],
                                    a = null != s && "object" == typeof s && "type" in s,
                                    o = a ? s.type : t[r],
                                    l = a ? s.value : s;
                                switch (o) {
                                    case "color":
                                        if ("number" == typeof l) {
                                            let e = n.viewModelInstance?.color(r);
                                            null != e && (e.value = l);
                                        } else if ("object" == typeof l)
                                            if ("resolve" in l) {
                                                let [e, t, i, s] = l
                                                    .resolve({ theme: f, saturation: p, highContrastModeEnabled: E })
                                                    .rgba();
                                                n.viewModelInstance?.color(r)?.rgba(e, t, i, 255 * s);
                                            } else n.viewModelInstance?.color(r)?.rgba(l.r, l.g, l.b, (l.a ?? 1) * 255);
                                        break;
                                    case "number":
                                        let u = n.viewModelInstance?.number(r);
                                        null != u && (u.value = l);
                                        break;
                                    case "boolean":
                                        let c = n.viewModelInstance?.boolean(r);
                                        null != c && (c.value = l);
                                        break;
                                    case "trigger":
                                        let d = null != l && ("boolean" == typeof l ? l : 0 !== l),
                                            _ = A(m.current, r);
                                        d && _ !== l && n.viewModelInstance?.trigger(r)?.trigger(), (m.current[r] = l);
                                        break;
                                    case "string":
                                        let h = n.viewModelInstance?.string(r);
                                        null != h && (h.value = l);
                                        break;
                                    case "image":
                                        if (null != l) {
                                            let t = await g(l, e.signal);
                                            if (e.signal.aborted) return;
                                            let i = n.viewModelInstance?.image(r);
                                            null != i && (i.value = t);
                                        }
                                        break;
                                    case "artboard":
                                        let I = n.viewModelInstance?.artboard(r),
                                            T = n.getBindableArtboard(l);
                                        null != I && null != T && (I.value = T);
                                        break;
                                    default:
                                        console.warn(`Unknown property type: ${o}`);
                                }
                            }
                        })().catch((e) => {
                            if ("AbortError" !== e.name) throw e;
                        }),
                        () => {
                            e.abort("New data binding applied - aborting previous image fetches.");
                        }
                    );
                }, [A, _, n, i, s, f, n?.viewModelInstance, p, E, g]);
        })({
            rive: U,
            artboard: E,
            artboardProperties: A,
            dataBinding: I,
            dynamicDataBinding: y,
            onDataBindingChange: T,
        }),
        r.useEffect(() => {
            if (null != U && "short-loop" === m && b.reducedMotion.enabled) {
                let e = () => {
                        U.isPlaying &&
                            (k.current = setTimeout(() => {
                                U.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(k.current);
                    };
                return (
                    U.on(a.EventType.Play, e),
                    U.on(a.EventType.Pause, t),
                    U.on(a.EventType.Stop, t),
                    () => {
                        U.off(a.EventType.Play, e), U.off(a.EventType.Pause, t), U.off(a.EventType.Stop, t);
                    }
                );
            }
        }, [U, m, b.reducedMotion.enabled]),
        r.useLayoutEffect(() => {
            if (null != U) {
                "layout" === c && U.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != U.canvas && U.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [U, c]),
        r.useEffect(() => {
            if (null == U || !b.reducedMotion.enabled) return;
            let e = U.canvas;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                U.resizeDrawingSurfaceToCanvas();
            });
            return t.observe(e), () => t.disconnect();
        }, [U, b.reducedMotion.enabled]),
        r.useEffect(() => {
            null != U &&
                null == P &&
                null == O &&
                (x(U.stateMachineNames),
                U.reset({ stateMachines: U.stateMachineNames, autoplay: n, artboard: E, autoBind: !0 }),
                U.setupRiveListeners());
        }, [U, n, P, E, O]);
    let F = r.useRef(0);
    r.useEffect(() => {
        if (null == U) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((F.current = t.data),
                t.data > 0 &&
                    ("halt" === m && b.reducedMotion.enabled && U.isPlaying && U.pause(),
                    U.off(a.EventType.Advance, e)));
        };
        return (
            U.on(a.EventType.Advance, e),
            n && U.play(),
            () => {
                U.off(a.EventType.Advance, e);
            }
        );
    }, [U, b.reducedMotion.enabled, m, n]),
        r.useEffect(() => {
            M();
        }, [M, E, c, d, I, y, A]);
    let V = L && !w,
        B = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (null != U)
                return (
                    !V && B.current && U.isPlaying && F.current > 0
                        ? U.pause()
                        : V && !U.isPlaying && B.current && U.play(),
                    () => {
                        null != U && V && (B.current = null != U.frameRequestId);
                    }
                );
        }, [U, V]),
        (0, i.jsx)(G, { className: s, style: _, "aria-hidden": !0 })
    );
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073), a.RuntimeLoader.setWasmUrl(s);
