n.d(t, { Z: () => c });
var i = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(493773);
let o = 1000 / 24,
    l = 3,
    u = 3000,
    c = function (e) {
        let { minInterval: t = o, allowableMinInterval: n, droppedFramesCallbackThreshold: r, droppedFramesCallback: c, droppedFramesResetTime: d = u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            f = i.useRef(t),
            _ = i.useRef(0),
            p = i.useRef(),
            h = i.useRef(),
            m = i.useRef(!0),
            g = i.useRef(0),
            E = i.useRef(),
            v = i.useCallback(() => {
                (g.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            y = i.useCallback(() => {
                (m.current = !1), cancelAnimationFrame(_.current), clearTimeout(E.current);
            }, []),
            I = i.useCallback(
                (t) => {
                    if (!m.current) return;
                    null == p.current && (p.current = t), null == h.current && (h.current = t);
                    let i = t - h.current;
                    t - p.current > 1.5 * Math.min(null != n ? n : 120, f.current) && ((g.current += 1), null != E.current && clearTimeout(E.current), (E.current = setTimeout(v, d)), null != r && g.current > r && (a()(null != c, 'useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit'), c() && (g.current = 0))), (p.current = t), i >= f.current - l && ((h.current = t), e(i)), (_.current = requestAnimationFrame(I));
                },
                [n, v, d, r, c, e]
            ),
            T = i.useCallback(() => {
                (m.current = !0), (h.current = void 0), (_.current = requestAnimationFrame(I));
            }, [I]);
        return (
            i.useEffect(() => {
                f.current = t;
            }, [t]),
            (0, s.Z)(() => ((_.current = requestAnimationFrame(I)), () => y())),
            {
                stop: y,
                reset: T,
                ticking: m
            }
        );
    };
