n.d(t, { v: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(943239),
    o = n(995803),
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
            touchScrollEnabled: T = !0,
            dynamicDataBinding: S,
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
            isTouchScrollEnabled: T,
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
            dynamicDataBinding: S,
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
    let { theme: f, saturation: _ } = (0, c.ZF)(),
        { highContrastModeEnabled: p } = i.useContext(l.S),
        h = i.useRef(null);
    i.useEffect(() => {
        if (null == t || null == t.viewModelInstance || null == u) return;
        let e = r[null != n ? n : ""];
        Object.entries(u).forEach((n) => {
            var r, i, a, o, s, l, c, u;
            let [d, m] = n,
                g = "object" == typeof m && "type" in m,
                E = g ? m.type : e[d],
                b = g ? m.value : m;
            switch (E) {
                case "color":
                    let [y, O, v, I] = b
                        .resolve({
                            theme: f,
                            saturation: _,
                            highContrastModeEnabled: p,
                        })
                        .rgba();
                    null == (i = t.viewModelInstance) || null == (r = i.color(d)) || r.rgba(y, O, v, 255 * I);
                    break;
                case "number":
                    let T = null == (a = t.viewModelInstance) ? void 0 : a.number(d);
                    null != T && (T.value = b);
                    break;
                case "boolean":
                    let S = null == (o = t.viewModelInstance) ? void 0 : o.boolean(d);
                    null != S && (S.value = b);
                    break;
                case "trigger":
                    null != b &&
                        ("boolean" == typeof b ? b : 0 !== b) &&
                        (null == (s = h.current) ? void 0 : s[d]) !== b &&
                        (null == (c = t.viewModelInstance) || null == (l = c.trigger(d)) || l.trigger());
                    break;
                case "string":
                    let A = null == (u = t.viewModelInstance) ? void 0 : u.string(d);
                    null != A && (A.value = b);
                    break;
                default:
                    console.warn("Unknown property type: ".concat(E));
            }
        }),
            (h.current = u);
    }, [u, t, n, r, f, null == t ? void 0 : t.viewModelInstance, _, p]);
}
o.RuntimeLoader.setWasmUrl(a);
