n.d(t, { v: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(252762),
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
        } = e,
        v = i.useContext(s.S),
        I = d(),
        [T, S] = i.useState(void 0),
        A = i.useRef(null),
        { rive: C, RiveComponent: N } = (0, o.useRive)({
            eventTarget: null == p ? void 0 : p.current,
            buffer: t,
            autoplay: n,
            stateMachines: T,
            artboard: h,
            useOffscreenRenderer: !0,
            layout: new o.Layout({
                fit: null != l ? c.M[l] : o.Fit.Cover,
                alignment: null != u ? c.Y[u] : o.Alignment.Center,
            }),
            isTouchScrollEnabled: y,
        });
    i.useImperativeHandle(
        g,
        () => ({
            play: () => (null == C ? void 0 : C.play()),
            pause: () => (null == C ? void 0 : C.pause()),
            stop: () => (null == C ? void 0 : C.stop()),
        }),
        [C],
    ),
        f({
            rive: C,
            artboard: h,
            artboardProperties: E,
            dataBinding: b,
            dynamicDataBinding: O,
        }),
        i.useEffect(() => {
            if (null != C && "short-loop" === m && v.reducedMotion.enabled) {
                let e = () => {
                        C.isPlaying &&
                            (A.current = setTimeout(() => {
                                C.pause();
                            }, 5000));
                    },
                    t = () => {
                        clearTimeout(A.current);
                    };
                return (
                    C.on(o.EventType.Play, e),
                    C.on(o.EventType.Pause, t),
                    C.on(o.EventType.Stop, t),
                    () => {
                        C.off(o.EventType.Play, e), C.off(o.EventType.Pause, t), C.off(o.EventType.Stop, t);
                    }
                );
            }
        }, [C, m, v.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            null != C &&
                "layout" === l &&
                (C.resizeDrawingSurfaceToCanvas(),
                setTimeout(() => {
                    C.resizeDrawingSurfaceToCanvas();
                }, 100));
        }, [C, l]),
        i.useEffect(() => {
            null != C &&
                null == T &&
                (S(C.stateMachineNames),
                C.reset({
                    stateMachines: C.stateMachineNames,
                    autoplay: n,
                    artboard: h,
                    autoBind: !0,
                }),
                C.setupRiveListeners());
        }, [C, n, T, h]);
    let R = i.useRef(0);
    i.useEffect(() => {
        if (null == C) return;
        C.play();
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((R.current = t.data),
                t.data > 0 &&
                    ("halt" === m && v.reducedMotion.enabled && C.isPlaying && C.pause(),
                    C.off(o.EventType.Advance, e)));
        };
        return (
            C.on(o.EventType.Advance, e),
            () => {
                C.off(o.EventType.Advance, e);
            }
        );
    }, [C, v.reducedMotion.enabled, m]);
    let P = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != C)
                return (
                    !I && P.current && C.isPlaying && R.current > 0
                        ? C.pause()
                        : I && !C.isPlaying && P.current && C.play(),
                    () => {
                        null != C && I && (P.current = null != C.frameRequestId);
                    }
                );
        }, [C, I]),
        (0, r.jsx)(N, {
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
