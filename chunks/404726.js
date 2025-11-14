n.d(t, { v: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(902778),
    o = n(948890),
    s = n(150677),
    l = n(213305),
    c = n(402453),
    u = n(405404),
    d = n(860109);
function f(e) {
    var t, n, a;
    let {
            buffer: f,
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
            onDataBindingChange: T,
            touchScrollEnabled: S = !0,
            dynamicDataBinding: A,
            listenOnDocumentBody: C,
            eventCapture: N,
            assetLoader: R,
        } = e,
        P = i.useContext(l.S),
        D = (0, s.C)(),
        w = null != (a = null == (t = (n = (0, c.ZF)()).isWindowFocused) ? void 0 : t.call(n)) ? a : D,
        [x, L] = i.useState(void 0),
        M = i.useRef(null),
        { rive: k, RiveComponent: j } = (0, o.useRive)({
            eventTarget: null == E ? void 0 : E.current,
            buffer: f,
            autoplay: _,
            stateMachines: x,
            artboard: b,
            useOffscreenRenderer: !0,
            layout: new o.Layout({
                fit: null != h ? u.M[h] : o.Fit.Cover,
                alignment: null != m ? u.Y[m] : o.Alignment.Center,
            }),
            isTouchScrollEnabled: S,
            listenOnDocumentBody: C,
            eventCapture: N,
            assetLoader: R,
        });
    i.useImperativeHandle(
        O,
        () => ({
            play: () => (null == k ? void 0 : k.play()),
            pause: () => (null == k ? void 0 : k.pause()),
            stop: () => (null == k ? void 0 : k.stop()),
        }),
        [k],
    ),
        (0, d.P)({
            rive: k,
            artboard: b,
            artboardProperties: v,
            dataBinding: I,
            dynamicDataBinding: A,
            onDataBindingChange: T,
        }),
        i.useEffect(() => {
            if (null != k && "short-loop" === y && P.reducedMotion.enabled) {
                let e = () => {
                        k.isPlaying &&
                            (M.current = setTimeout(() => {
                                k.pause();
                            }, 5000));
                    },
                    t = () => {
                        clearTimeout(M.current);
                    };
                return (
                    k.on(o.EventType.Play, e),
                    k.on(o.EventType.Pause, t),
                    k.on(o.EventType.Stop, t),
                    () => {
                        k.off(o.EventType.Play, e), k.off(o.EventType.Pause, t), k.off(o.EventType.Stop, t);
                    }
                );
            }
        }, [k, y, P.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            null != k &&
                "layout" === h &&
                (k.resizeDrawingSurfaceToCanvas(),
                setTimeout(() => {
                    k.resizeDrawingSurfaceToCanvas();
                }, 100));
        }, [k, h]),
        i.useEffect(() => {
            null != k &&
                null == x &&
                (L(k.stateMachineNames),
                k.reset({
                    stateMachines: k.stateMachineNames,
                    autoplay: _,
                    artboard: b,
                    autoBind: !0,
                }),
                k.setupRiveListeners());
        }, [k, _, x, b]);
    let U = i.useRef(0);
    i.useEffect(() => {
        if (null == k) return;
        k.play();
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((U.current = t.data),
                t.data > 0 &&
                    ("halt" === y && P.reducedMotion.enabled && k.isPlaying && k.pause(),
                    k.off(o.EventType.Advance, e)));
        };
        return (
            k.on(o.EventType.Advance, e),
            () => {
                k.off(o.EventType.Advance, e);
            }
        );
    }, [k, P.reducedMotion.enabled, y]);
    let G = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != k)
                return (
                    !w && G.current && k.isPlaying && U.current > 0
                        ? k.pause()
                        : w && !k.isPlaying && G.current && k.play(),
                    () => {
                        null != k && w && (G.current = null != k.frameRequestId);
                    }
                );
        }, [k, w]),
        (0, r.jsx)(j, {
            className: p,
            style: g,
        })
    );
}
o.RuntimeLoader.setWasmUrl(a);
