n.d(t, { Z: () => u });
var r = n(192379),
    i = n(512722),
    o = n.n(i),
    a = n(493773);
let s = 1000 / 24,
    l = 3,
    c = 3000,
    u = function (e) {
        let { minInterval: t = s, allowableMinInterval: n, droppedFramesCallbackThreshold: i, droppedFramesCallback: u, droppedFramesResetTime: d = c } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            f = r.useRef(t),
            p = r.useRef(0),
            _ = r.useRef(),
            h = r.useRef(),
            m = r.useRef(!0),
            g = r.useRef(0),
            E = r.useRef(),
            v = r.useCallback(() => {
                (g.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            b = r.useCallback(() => {
                (m.current = !1), cancelAnimationFrame(p.current), clearTimeout(E.current);
            }, []),
            y = r.useCallback(
                (t) => {
                    if (!m.current) return;
                    null == _.current && (_.current = t), null == h.current && (h.current = t);
                    let r = t - h.current;
                    t - _.current > 1.5 * Math.min(null != n ? n : 120, f.current) && ((g.current += 1), null != E.current && clearTimeout(E.current), (E.current = setTimeout(v, d)), null != i && g.current > i && (o()(null != u, 'useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit'), u() && (g.current = 0))), (_.current = t), r >= f.current - l && ((h.current = t), e(r)), (p.current = requestAnimationFrame(y));
                },
                [n, v, d, i, u, e]
            ),
            O = r.useCallback(() => {
                (m.current = !0), (h.current = void 0), (p.current = requestAnimationFrame(y));
            }, [y]);
        return (
            r.useEffect(() => {
                f.current = t;
            }, [t]),
            (0, a.ZP)(() => ((p.current = requestAnimationFrame(y)), () => b())),
            {
                stop: b,
                reset: O,
                ticking: m
            }
        );
    };
