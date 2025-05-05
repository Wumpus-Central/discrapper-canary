n.d(t, { Z: () => u });
var r = n(73800),
    i = n(512722),
    o = n.n(i),
    a = n(493773);
let s = 1000 / 24,
    l = 3,
    c = 3000,
    u = function (e) {
        let { minInterval: t = s, allowableMinInterval: n, droppedFramesCallbackThreshold: i, droppedFramesCallback: u, droppedFramesResetTime: d = c } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            f = r.useRef(t),
            _ = r.useRef(0),
            p = r.useRef(void 0),
            h = r.useRef(void 0),
            m = r.useRef(!0),
            g = r.useRef(0),
            E = r.useRef(void 0),
            b = r.useCallback(() => {
                (g.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            y = r.useCallback(() => {
                (m.current = !1), cancelAnimationFrame(_.current), clearTimeout(E.current);
            }, []),
            O = r.useCallback(
                (t) => {
                    if (!m.current) return;
                    null == p.current && (p.current = t), null == h.current && (h.current = t);
                    let r = t - h.current;
                    t - p.current > 1.5 * Math.min(null != n ? n : 120, f.current) && ((g.current += 1), null != E.current && clearTimeout(E.current), (E.current = setTimeout(b, d)), null != i && g.current > i && (o()(null != u, 'useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit'), u() && (g.current = 0))), (p.current = t), r >= f.current - l && ((h.current = t), e(r)), (_.current = requestAnimationFrame(O));
                },
                [n, b, d, i, u, e]
            ),
            v = r.useCallback(() => {
                (m.current = !0), (h.current = void 0), (_.current = requestAnimationFrame(O));
            }, [O]);
        return (
            r.useEffect(() => {
                f.current = t;
            }, [t]),
            (0, a.ZP)(() => ((_.current = requestAnimationFrame(O)), () => y())),
            {
                stop: y,
                reset: v,
                ticking: m
            }
        );
    };
