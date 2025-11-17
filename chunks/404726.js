n.d(t, { v: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(902778),
    o = n(865288),
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
            onLoad: P,
        } = e,
        D = i.useContext(l.S),
        w = (0, s.C)(),
        x = null != (a = null == (t = (n = (0, c.ZF)()).isWindowFocused) ? void 0 : t.call(n)) ? a : w,
        [L, M] = i.useState(void 0),
        k = i.useRef(null),
        { rive: j, RiveComponent: U } = (0, o.useRive)({
            eventTarget: null == E ? void 0 : E.current,
            buffer: f,
            autoplay: _,
            stateMachines: L,
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
            onLoad: P,
        });
    i.useImperativeHandle(
        O,
        () => ({
            play: () => (null == j ? void 0 : j.play()),
            pause: () => (null == j ? void 0 : j.pause()),
            stop: () => (null == j ? void 0 : j.stop()),
            getProperties: () => {
                var e, t;
                return null !=
                    (t =
                        null == j || null == (e = j.viewModelInstance)
                            ? void 0
                            : e.properties.reduce((e, t) => {
                                  var n, r, i;
                                  return (
                                      (e[t.name] = {
                                          type: t.type,
                                          value:
                                              null == j ||
                                              null == (i = j.viewModelInstance) ||
                                              null == (r = i[t.type]) ||
                                              null == (n = r.call(i, t.name))
                                                  ? void 0
                                                  : n.value,
                                      }),
                                      e
                                  );
                              }, {}))
                    ? t
                    : {};
            },
        }),
        [j],
    ),
        (0, d.P)({
            rive: j,
            artboard: b,
            artboardProperties: v,
            dataBinding: I,
            dynamicDataBinding: A,
            onDataBindingChange: T,
        }),
        i.useEffect(() => {
            if (null != j && "short-loop" === y && D.reducedMotion.enabled) {
                let e = () => {
                        j.isPlaying &&
                            (k.current = setTimeout(() => {
                                j.pause();
                            }, 5000));
                    },
                    t = () => {
                        clearTimeout(k.current);
                    };
                return (
                    j.on(o.EventType.Play, e),
                    j.on(o.EventType.Pause, t),
                    j.on(o.EventType.Stop, t),
                    () => {
                        j.off(o.EventType.Play, e), j.off(o.EventType.Pause, t), j.off(o.EventType.Stop, t);
                    }
                );
            }
        }, [j, y, D.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            null != j &&
                "layout" === h &&
                (j.resizeDrawingSurfaceToCanvas(),
                setTimeout(() => {
                    j.resizeDrawingSurfaceToCanvas();
                }, 100));
        }, [j, h]),
        i.useEffect(() => {
            null != j &&
                null == L &&
                (M(j.stateMachineNames),
                j.reset({
                    stateMachines: j.stateMachineNames,
                    autoplay: _,
                    artboard: b,
                    autoBind: !0,
                }),
                j.setupRiveListeners());
        }, [j, _, L, b]);
    let G = i.useRef(0);
    i.useEffect(() => {
        if (null == j) return;
        j.play();
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((G.current = t.data),
                t.data > 0 &&
                    ("halt" === y && D.reducedMotion.enabled && j.isPlaying && j.pause(),
                    j.off(o.EventType.Advance, e)));
        };
        return (
            j.on(o.EventType.Advance, e),
            () => {
                j.off(o.EventType.Advance, e);
            }
        );
    }, [j, D.reducedMotion.enabled, y]);
    let B = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != j)
                return (
                    !x && B.current && j.isPlaying && G.current > 0
                        ? j.pause()
                        : x && !j.isPlaying && B.current && j.play(),
                    () => {
                        null != j && x && (B.current = null != j.frameRequestId);
                    }
                );
        }, [j, x]),
        (0, r.jsx)(U, {
            className: p,
            style: g,
        })
    );
}
o.RuntimeLoader.setWasmUrl(a);
