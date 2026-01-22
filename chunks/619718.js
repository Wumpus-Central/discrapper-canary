n.d(t, { A: () => u });
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(964486);
let o = 1000 / 24,
    l = 3,
    c = 3000,
    u = function (e) {
        let {
                minInterval: t = o,
                allowableMinInterval: n,
                droppedFramesCallbackThreshold: i,
                droppedFramesCallback: u,
                droppedFramesResetTime: d = c,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            f = r.useRef(t),
            p = r.useRef(0),
            _ = r.useRef(void 0),
            h = r.useRef(void 0),
            m = r.useRef(!0),
            g = r.useRef(0),
            E = r.useRef(void 0),
            b = r.useCallback(() => {
                (g.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            y = r.useCallback(() => {
                (m.current = !1), cancelAnimationFrame(p.current), clearTimeout(E.current);
            }, []),
            O = r.useCallback(
                (t) => {
                    if (!m.current) return;
                    null == _.current && (_.current = t), null == h.current && (h.current = t);
                    let r = t - h.current;
                    t - _.current > 1.5 * Math.min(null != n ? n : 120, f.current) &&
                        ((g.current += 1),
                        null != E.current && clearTimeout(E.current),
                        (E.current = setTimeout(b, d)),
                        null != i &&
                            g.current > i &&
                            (a()(
                                null != u,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            u() && (g.current = 0))),
                        (_.current = t),
                        r >= f.current - l && ((h.current = t), e(r)),
                        (p.current = requestAnimationFrame(O));
                },
                [n, b, d, i, u, e],
            ),
            A = r.useCallback(() => {
                (m.current = !0), (h.current = void 0), (p.current = requestAnimationFrame(O));
            }, [O]);
        return (
            r.useEffect(() => {
                f.current = t;
            }, [t]),
            (0, s.Ay)(() => ((p.current = requestAnimationFrame(O)), () => y())),
            {
                stop: y,
                reset: A,
                ticking: m,
            }
        );
    };
