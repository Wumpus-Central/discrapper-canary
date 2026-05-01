"use strict";
n.d(t, { w: () => m });
var i = n(627968),
    r = n(64700),
    s = n(389544),
    a = n(647307),
    o = n(941861),
    l = n(844222),
    _ = n(460890),
    d = n(322925),
    u = n.n(d);
function c(e) {
    let t = {};
    for (let n of Object.keys(e)) t[u()(n)] = e[n];
    return t;
}
let E = c(a.Fit),
    h = c(a.Alignment);
function m(e) {
    let {
            buffer: t,
            autoplay: n = !0,
            className: s,
            fit: d,
            alignment: u,
            style: c,
            eventTargetRef: m,
            artboard: f,
            withReducedMotion: g = "halt",
            ref: A,
            artboardProperties: I,
            dataBinding: p,
            onDataBindingChange: T,
            touchScrollEnabled: S = !0,
            dynamicDataBinding: N,
            listenOnDocumentBody: O,
            eventCapture: R,
            assetLoader: C,
            onLoad: y,
            stateMachine: D,
        } = e,
        L = r.useContext(l.C),
        v = (0, o.R)(),
        w = (0, _.G9)().isWindowFocused?.() ?? v,
        [P, b] = (0, o.X)(3e4),
        [k, U] = r.useState(void 0),
        M = r.useRef(null),
        { rive: G, RiveComponent: x } = (0, a.useRive)({
            eventTarget: m?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != D ? [D] : k,
            artboard: f,
            useOffscreenRenderer: !0,
            layout: new a.Layout({
                fit: null != d ? E[d] : a.Fit.Cover,
                alignment: null != u ? h[u] : a.Alignment.Center,
            }),
            isTouchScrollEnabled: S,
            listenOnDocumentBody: O,
            eventCapture: R,
            assetLoader: C,
            onLoad: y,
        });
    r.useImperativeHandle(
        A,
        () => ({
            play: () => G?.play(),
            pause: () => G?.pause(),
            stop: () => G?.stop(),
            getProperties: () =>
                G?.viewModelInstance?.properties.reduce(
                    (e, t) => (
                        "viewModel" === t.type &&
                            G?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                e[t.name + "/" + n.name] = {
                                    type: n.type,
                                    value: G?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                };
                            }),
                        (e[t.name] = { type: t.type, value: G?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                        e
                    ),
                    {},
                ) ?? {},
            getArtboards: () => {
                if (null == G) return [];
                let e = new Set(),
                    t = G.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [G],
    ),
        (function (e) {
            let t,
                {
                    rive: n,
                    artboard: i,
                    artboardProperties: s,
                    dataBinding: o,
                    dynamicDataBinding: d,
                    onDataBindingChange: u,
                } = e,
                c = d ?? o,
                E = (0, a.useViewModel)(n);
            (0, a.useViewModelInstance)(E);
            let { theme: h, saturation: m } = (0, _.G9)(),
                { highContrastModeEnabled: f } = r.useContext(l.C),
                g = r.useRef({}),
                A =
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
                I = r.useCallback((e, t) => {
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
                dynamicDataBinding: d,
                dataBinding: o,
                onDataBindingChange: u,
            }),
                r.useEffect(() => {
                    let e = new AbortController();
                    return (
                        (async function () {
                            if (null == n || null == n.viewModelInstance || null == c) return;
                            let t = s[i ?? ""];
                            for (let i of Object.entries(c)) {
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
                                                    .resolve({ theme: h, saturation: m, highContrastModeEnabled: f })
                                                    .rgba();
                                                n.viewModelInstance?.color(r)?.rgba(e, t, i, 255 * s);
                                            } else n.viewModelInstance?.color(r)?.rgba(l.r, l.g, l.b, (l.a ?? 1) * 255);
                                        break;
                                    case "number":
                                        let _ = n.viewModelInstance?.number(r);
                                        null != _ && (_.value = l);
                                        break;
                                    case "boolean":
                                        let d = n.viewModelInstance?.boolean(r);
                                        null != d && (d.value = l);
                                        break;
                                    case "trigger":
                                        let u = null != l && ("boolean" == typeof l ? l : 0 !== l),
                                            c = I(g.current, r);
                                        u && c !== l && n.viewModelInstance?.trigger(r)?.trigger(), (g.current[r] = l);
                                        break;
                                    case "string":
                                        let E = n.viewModelInstance?.string(r);
                                        null != E && (E.value = l);
                                        break;
                                    case "image":
                                        if (null != l) {
                                            let t = await A(l, e.signal);
                                            if (e.signal.aborted) return;
                                            let i = n.viewModelInstance?.image(r);
                                            null != i && (i.value = t);
                                        }
                                        break;
                                    case "artboard":
                                        let p = n.viewModelInstance?.artboard(r),
                                            T = n.getBindableArtboard(l);
                                        null != p && null != T && (p.value = T);
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
                }, [I, c, n, i, s, h, n?.viewModelInstance, m, f, A]);
        })({
            rive: G,
            artboard: f,
            artboardProperties: I,
            dataBinding: p,
            dynamicDataBinding: N,
            onDataBindingChange: T,
        }),
        r.useEffect(() => {
            if (null != G && "short-loop" === g && L.reducedMotion.enabled) {
                let e = () => {
                        G.isPlaying &&
                            (M.current = setTimeout(() => {
                                G.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(M.current);
                    };
                return (
                    G.on(a.EventType.Play, e),
                    G.on(a.EventType.Pause, t),
                    G.on(a.EventType.Stop, t),
                    () => {
                        G.off(a.EventType.Play, e), G.off(a.EventType.Pause, t), G.off(a.EventType.Stop, t);
                    }
                );
            }
        }, [G, g, L.reducedMotion.enabled]),
        r.useLayoutEffect(() => {
            if (null != G) {
                "layout" === d && G.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != G.canvas && G.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [G, d]),
        r.useEffect(() => {
            null != G &&
                null == k &&
                null == D &&
                (U(G.stateMachineNames),
                G.reset({ stateMachines: G.stateMachineNames, autoplay: n, artboard: f, autoBind: !0 }),
                G.setupRiveListeners());
        }, [G, n, k, f, D]);
    let V = r.useRef(0);
    r.useEffect(() => {
        if (null == G) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((V.current = t.data),
                t.data > 0 &&
                    ("halt" === g && L.reducedMotion.enabled && G.isPlaying && G.pause(),
                    G.off(a.EventType.Advance, e)));
        };
        return (
            G.on(a.EventType.Advance, e),
            n && G.play(),
            () => {
                G.off(a.EventType.Advance, e);
            }
        );
    }, [G, L.reducedMotion.enabled, g, n]),
        r.useEffect(() => {
            b();
        }, [b, f, d, u, p, N, I]);
    let F = w && !P,
        B = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (null != G)
                return (
                    !F && B.current && G.isPlaying && V.current > 0
                        ? G.pause()
                        : F && !G.isPlaying && B.current && G.play(),
                    () => {
                        null != G && F && (B.current = null != G.frameRequestId);
                    }
                );
        }, [G, F]),
        (0, i.jsx)(x, { className: s, style: c })
    );
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073), a.RuntimeLoader.setWasmUrl(s);
