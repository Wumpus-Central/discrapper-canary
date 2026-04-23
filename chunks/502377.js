"use strict";
n.d(t, { w: () => m });
var i = n(627968),
    r = n(64700),
    s = n(389544),
    a = n(647307),
    o = n(941861),
    l = n(844222),
    d = n(460890),
    _ = n(322925),
    u = n.n(_);
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
            fit: _,
            alignment: u,
            style: c,
            eventTargetRef: m,
            artboard: f,
            withReducedMotion: g = "halt",
            ref: p,
            artboardProperties: A,
            dataBinding: I,
            onDataBindingChange: T,
            touchScrollEnabled: S = !0,
            dynamicDataBinding: N,
            listenOnDocumentBody: C,
            eventCapture: R,
            assetLoader: O,
            onLoad: y,
            stateMachine: v,
        } = e,
        D = r.useContext(l.C),
        L = (0, o.R)(),
        b = (0, d.G9)().isWindowFocused?.() ?? L,
        [w, P] = (0, o.X)(3e4),
        [k, M] = r.useState(void 0),
        U = r.useRef(null),
        { rive: x, RiveComponent: G } = (0, a.useRive)({
            eventTarget: m?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != v ? [v] : k,
            artboard: f,
            useOffscreenRenderer: !0,
            layout: new a.Layout({
                fit: null != _ ? E[_] : a.Fit.Cover,
                alignment: null != u ? h[u] : a.Alignment.Center,
            }),
            isTouchScrollEnabled: S,
            listenOnDocumentBody: C,
            eventCapture: R,
            assetLoader: O,
            onLoad: y,
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
                    artboardProperties: s,
                    dataBinding: o,
                    dynamicDataBinding: _,
                    onDataBindingChange: u,
                } = e,
                c = _ ?? o,
                E = (0, a.useViewModel)(n);
            (0, a.useViewModelInstance)(E);
            let { theme: h, saturation: m } = (0, d.G9)(),
                { highContrastModeEnabled: f } = r.useContext(l.C),
                g = r.useRef({}),
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
                dynamicDataBinding: _,
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
                                        let d = n.viewModelInstance?.number(r);
                                        null != d && (d.value = l);
                                        break;
                                    case "boolean":
                                        let _ = n.viewModelInstance?.boolean(r);
                                        null != _ && (_.value = l);
                                        break;
                                    case "trigger":
                                        let u = null != l && ("boolean" == typeof l ? l : 0 !== l),
                                            c = A(g.current, r);
                                        u && c !== l && n.viewModelInstance?.trigger(r)?.trigger(), (g.current[r] = l);
                                        break;
                                    case "string":
                                        let E = n.viewModelInstance?.string(r);
                                        null != E && (E.value = l);
                                        break;
                                    case "image":
                                        if (null != l) {
                                            let t = await p(l, e.signal);
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
                }, [A, c, n, i, s, h, n?.viewModelInstance, m, f, p]);
        })({
            rive: x,
            artboard: f,
            artboardProperties: A,
            dataBinding: I,
            dynamicDataBinding: N,
            onDataBindingChange: T,
        }),
        r.useEffect(() => {
            if (null != x && "short-loop" === g && D.reducedMotion.enabled) {
                let e = () => {
                        x.isPlaying &&
                            (U.current = setTimeout(() => {
                                x.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(U.current);
                    };
                return (
                    x.on(a.EventType.Play, e),
                    x.on(a.EventType.Pause, t),
                    x.on(a.EventType.Stop, t),
                    () => {
                        x.off(a.EventType.Play, e), x.off(a.EventType.Pause, t), x.off(a.EventType.Stop, t);
                    }
                );
            }
        }, [x, g, D.reducedMotion.enabled]),
        r.useLayoutEffect(() => {
            if (null != x) {
                "layout" === _ && x.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != x.canvas && x.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [x, _]),
        r.useEffect(() => {
            null != x &&
                null == k &&
                null == v &&
                (M(x.stateMachineNames),
                x.reset({ stateMachines: x.stateMachineNames, autoplay: n, artboard: f, autoBind: !0 }),
                x.setupRiveListeners());
        }, [x, n, k, f, v]);
    let V = r.useRef(0);
    r.useEffect(() => {
        if (null == x) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((V.current = t.data),
                t.data > 0 &&
                    ("halt" === g && D.reducedMotion.enabled && x.isPlaying && x.pause(),
                    x.off(a.EventType.Advance, e)));
        };
        return (
            x.on(a.EventType.Advance, e),
            n && x.play(),
            () => {
                x.off(a.EventType.Advance, e);
            }
        );
    }, [x, D.reducedMotion.enabled, g, n]),
        r.useEffect(() => {
            P();
        }, [P, f, _, u, I, N, A]);
    let F = b && !w,
        B = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (null != x)
                return (
                    !F && B.current && x.isPlaying && V.current > 0
                        ? x.pause()
                        : F && !x.isPlaying && B.current && x.play(),
                    () => {
                        null != x && F && (B.current = null != x.frameRequestId);
                    }
                );
        }, [x, F]),
        (0, i.jsx)(G, { className: s, style: c })
    );
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073), a.RuntimeLoader.setWasmUrl(s);
