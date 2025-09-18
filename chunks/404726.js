n.d(t, { v: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(943239),
    o = n(995803),
    s = n(213305),
    l = n(402453),
    c = n(405404);
function u(e) {
    let {
            buffer: t,
            autoplay: n = !0,
            className: a,
            fit: l,
            alignment: u,
            style: _,
            eventTargetRef: p,
            artboard: h,
            withReducedMotion: m = "halt",
            ref: g,
            artboardProperties: E,
            dataBinding: b,
            touchScrollEnabled: y = !0,
            dynamicDataBinding: O,
            listenOnDocumentBody: v,
            eventCapture: I,
        } = e,
        T = i.useContext(s.S),
        S = d(),
        [A, C] = i.useState(void 0),
        N = i.useRef(null),
        { rive: R, RiveComponent: P } = (0, o.useRive)({
            eventTarget: null == p ? void 0 : p.current,
            buffer: t,
            autoplay: n,
            stateMachines: A,
            artboard: h,
            useOffscreenRenderer: !0,
            layout: new o.Layout({
                fit: null != l ? c.M[l] : o.Fit.Cover,
                alignment: null != u ? c.Y[u] : o.Alignment.Center,
            }),
            isTouchScrollEnabled: y,
            listenOnDocumentBody: v,
            eventCapture: I,
        });
    i.useImperativeHandle(
        g,
        () => ({
            play: () => (null == R ? void 0 : R.play()),
            pause: () => (null == R ? void 0 : R.pause()),
            stop: () => (null == R ? void 0 : R.stop()),
        }),
        [R],
    ),
        f({
            rive: R,
            artboard: h,
            artboardProperties: E,
            dataBinding: b,
            dynamicDataBinding: O,
        }),
        i.useEffect(() => {
            if (null != R && "short-loop" === m && T.reducedMotion.enabled) {
                let e = () => {
                        R.isPlaying &&
                            (N.current = setTimeout(() => {
                                R.pause();
                            }, 5000));
                    },
                    t = () => {
                        clearTimeout(N.current);
                    };
                return (
                    R.on(o.EventType.Play, e),
                    R.on(o.EventType.Pause, t),
                    R.on(o.EventType.Stop, t),
                    () => {
                        R.off(o.EventType.Play, e), R.off(o.EventType.Pause, t), R.off(o.EventType.Stop, t);
                    }
                );
            }
        }, [R, m, T.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            null != R &&
                "layout" === l &&
                (R.resizeDrawingSurfaceToCanvas(),
                setTimeout(() => {
                    R.resizeDrawingSurfaceToCanvas();
                }, 100));
        }, [R, l]),
        i.useEffect(() => {
            null != R &&
                null == A &&
                (C(R.stateMachineNames),
                R.reset({
                    stateMachines: R.stateMachineNames,
                    autoplay: n,
                    artboard: h,
                    autoBind: !0,
                }),
                R.setupRiveListeners());
        }, [R, n, A, h]);
    let w = i.useRef(0);
    i.useEffect(() => {
        if (null == R) return;
        R.play();
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((w.current = t.data),
                t.data > 0 &&
                    ("halt" === m && T.reducedMotion.enabled && R.isPlaying && R.pause(),
                    R.off(o.EventType.Advance, e)));
        };
        return (
            R.on(o.EventType.Advance, e),
            () => {
                R.off(o.EventType.Advance, e);
            }
        );
    }, [R, T.reducedMotion.enabled, m]);
    let D = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != R)
                return (
                    !S && D.current && R.isPlaying && w.current > 0
                        ? R.pause()
                        : S && !R.isPlaying && D.current && R.play(),
                    () => {
                        null != R && S && (D.current = null != R.frameRequestId);
                    }
                );
        }, [R, S]),
        (0, r.jsx)(P, {
            className: a,
            style: _,
        })
    );
}
function d() {
    let e = window,
        [t, n] = i.useState(e.document.hasFocus());
    return (
        i.useEffect(() => {
            let t = () => n(!0),
                r = () => n(!1);
            return (
                e.addEventListener("focus", t),
                e.addEventListener("blur", r),
                () => {
                    e.removeEventListener("focus", t), e.removeEventListener("blur", r);
                }
            );
        }, [e]),
        t
    );
}
function f(e) {
    let { rive: t, artboard: n, artboardProperties: r, dataBinding: a, dynamicDataBinding: c } = e,
        u = null != c ? c : a,
        d = (0, o.useViewModel)(t);
    (0, o.useViewModelInstance)(d);
    let { theme: f, saturation: _ } = (0, l.ZF)(),
        { highContrastModeEnabled: p } = i.useContext(s.S),
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
