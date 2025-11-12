n.d(t, { v: () => d }),
    n(388685),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
var r = n(951288),
    i = n(647438),
    a = n(902778),
    o = n(948890),
    s = n(150677),
    l = n(213305),
    c = n(402453),
    u = n(405404);
function d(e) {
    var t, n, a;
    let {
            buffer: d,
            autoplay: _ = !0,
            className: p,
            fit: h,
            alignment: m,
            style: g,
            eventTargetRef: E,
            artboard: b,
            withReducedMotion: y = "halt",
            ref: O,
            artboardProperties: v,
            dataBinding: I,
            touchScrollEnabled: S = !0,
            dynamicDataBinding: T,
            listenOnDocumentBody: A,
            eventCapture: C,
        } = e,
        N = i.useContext(l.S),
        R = (0, s.C)(),
        P = null != (a = null == (t = (n = (0, c.ZF)()).isWindowFocused) ? void 0 : t.call(n)) ? a : R,
        [w, D] = i.useState(void 0),
        x = i.useRef(null),
        { rive: L, RiveComponent: M } = (0, o.useRive)({
            eventTarget: null == E ? void 0 : E.current,
            buffer: d,
            autoplay: _,
            stateMachines: w,
            artboard: b,
            useOffscreenRenderer: !0,
            layout: new o.Layout({
                fit: null != h ? u.M[h] : o.Fit.Cover,
                alignment: null != m ? u.Y[m] : o.Alignment.Center,
            }),
            isTouchScrollEnabled: S,
            listenOnDocumentBody: A,
            eventCapture: C,
        });
    i.useImperativeHandle(
        O,
        () => ({
            play: () => (null == L ? void 0 : L.play()),
            pause: () => (null == L ? void 0 : L.pause()),
            stop: () => (null == L ? void 0 : L.stop()),
        }),
        [L],
    ),
        f({
            rive: L,
            artboard: b,
            artboardProperties: v,
            dataBinding: I,
            dynamicDataBinding: T,
        }),
        i.useEffect(() => {
            if (null != L && "short-loop" === y && N.reducedMotion.enabled) {
                let e = () => {
                        L.isPlaying &&
                            (x.current = setTimeout(() => {
                                L.pause();
                            }, 5000));
                    },
                    t = () => {
                        clearTimeout(x.current);
                    };
                return (
                    L.on(o.EventType.Play, e),
                    L.on(o.EventType.Pause, t),
                    L.on(o.EventType.Stop, t),
                    () => {
                        L.off(o.EventType.Play, e), L.off(o.EventType.Pause, t), L.off(o.EventType.Stop, t);
                    }
                );
            }
        }, [L, y, N.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            null != L &&
                "layout" === h &&
                (L.resizeDrawingSurfaceToCanvas(),
                setTimeout(() => {
                    L.resizeDrawingSurfaceToCanvas();
                }, 100));
        }, [L, h]),
        i.useEffect(() => {
            null != L &&
                null == w &&
                (D(L.stateMachineNames),
                L.reset({
                    stateMachines: L.stateMachineNames,
                    autoplay: _,
                    artboard: b,
                    autoBind: !0,
                }),
                L.setupRiveListeners());
        }, [L, _, w, b]);
    let j = i.useRef(0);
    i.useEffect(() => {
        if (null == L) return;
        L.play();
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((j.current = t.data),
                t.data > 0 &&
                    ("halt" === y && N.reducedMotion.enabled && L.isPlaying && L.pause(),
                    L.off(o.EventType.Advance, e)));
        };
        return (
            L.on(o.EventType.Advance, e),
            () => {
                L.off(o.EventType.Advance, e);
            }
        );
    }, [L, N.reducedMotion.enabled, y]);
    let k = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != L)
                return (
                    !P && k.current && L.isPlaying && j.current > 0
                        ? L.pause()
                        : P && !L.isPlaying && k.current && L.play(),
                    () => {
                        null != L && P && (k.current = null != L.frameRequestId);
                    }
                );
        }, [L, P]),
        (0, r.jsx)(M, {
            className: p,
            style: g,
        })
    );
}
function f(e) {
    let { rive: t, artboard: n, artboardProperties: r, dataBinding: a, dynamicDataBinding: s } = e,
        u = null != s ? s : a,
        d = (0, o.useViewModel)(t);
    (0, o.useViewModelInstance)(d);
    let { theme: f, saturation: p } = (0, c.ZF)(),
        { highContrastModeEnabled: h } = i.useContext(l.S),
        m = i.useRef(null),
        g = _();
    i.useEffect(() => {
        let e = new AbortController();
        return (
            (async function () {
                if (null == t || null == t.viewModelInstance || null == u) return;
                let i = r[null != n ? n : ""];
                for (let n of Object.entries(u)) {
                    var a, o, s, l, c, d, _, E, b;
                    if (e.signal.aborted) return;
                    let r = n[0],
                        u = n[1],
                        y = null != u && "object" == typeof u && "type" in u,
                        O = y ? u.type : i[r],
                        v = y ? u.value : u;
                    switch (O) {
                        case "color":
                            let [I, S, T, A] = v
                                .resolve({
                                    theme: f,
                                    saturation: p,
                                    highContrastModeEnabled: h,
                                })
                                .rgba();
                            null == (o = t.viewModelInstance) || null == (a = o.color(r)) || a.rgba(I, S, T, 255 * A);
                            break;
                        case "number":
                            let C = null == (s = t.viewModelInstance) ? void 0 : s.number(r);
                            null != C && (C.value = v);
                            break;
                        case "boolean":
                            let N = null == (l = t.viewModelInstance) ? void 0 : l.boolean(r);
                            null != N && (N.value = v);
                            break;
                        case "trigger":
                            null != v &&
                                ("boolean" == typeof v ? v : 0 !== v) &&
                                (null == (c = m.current) ? void 0 : c[r]) !== v &&
                                (null == (_ = t.viewModelInstance) || null == (d = _.trigger(r)) || d.trigger());
                            break;
                        case "string":
                            let R = null == (E = t.viewModelInstance) ? void 0 : E.string(r);
                            null != R && (R.value = v);
                            break;
                        case "image":
                            if (null != v) {
                                let n = await g(v, e.signal);
                                if (e.signal.aborted) return;
                                let i = null == (b = t.viewModelInstance) ? void 0 : b.image(r);
                                null != i && (i.value = n);
                            }
                            break;
                        default:
                            console.warn("Unknown property type: ".concat(O));
                    }
                }
            })(),
            () => {
                e.abort(), (m.current = u);
            }
        );
    }, [u, t, n, r, f, null == t ? void 0 : t.viewModelInstance, p, h, g]);
}
function _() {
    let e = i.useRef({});
    return i.useCallback(async (t, n) => {
        if ("string" != typeof t) return Promise.resolve(t);
        {
            if (null != e.current[t]) return Promise.resolve(e.current[t]);
            let r = await fetch(t, { signal: n }),
                i = await r.arrayBuffer(),
                a = await (0, o.decodeImage)(new Uint8Array(i));
            return (e.current[t] = a), a;
        }
    }, []);
}
o.RuntimeLoader.setWasmUrl(a);
