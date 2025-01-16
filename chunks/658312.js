var i = r(192379),
    a = r(512722),
    s = r.n(a),
    o = r(493773);
let l = 1000 / 24,
    u = 3,
    c = 3000,
    d = function (e) {
        let { minInterval: n = l, allowableMinInterval: r, droppedFramesCallbackThreshold: a, droppedFramesCallback: d, droppedFramesResetTime: f = c } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            _ = i.useRef(0),
            h = i.useRef(),
            p = i.useRef(),
            m = i.useRef(!0),
            g = i.useRef(0),
            E = i.useRef(),
            v = i.useCallback(() => {
                (g.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            I = i.useCallback(() => {
                (m.current = !1), cancelAnimationFrame(_.current), clearTimeout(E.current);
            }, []),
            T = i.useCallback(
                (i) => {
                    if (!m.current) return;
                    null == h.current && (h.current = i), null == p.current && (p.current = i);
                    let o = i - p.current;
                    i - h.current > (null != r ? r : n) * 1.5 && ((g.current += 1), null != E.current && clearTimeout(E.current), (E.current = setTimeout(v, f)), null != a && g.current > a && (s()(null != d, 'useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit'), d() && (g.current = 0))), (h.current = i), o >= n - u && ((p.current = i), e(o)), (_.current = requestAnimationFrame(T));
                },
                [n, r, v, f, a, d, e]
            ),
            b = i.useCallback(() => {
                (m.current = !0), (p.current = void 0), (_.current = requestAnimationFrame(T));
            }, [T]);
        return (
            (0, o.Z)(() => ((_.current = requestAnimationFrame(T)), () => I())),
            {
                stop: I,
                reset: b,
                ticking: m
            }
        );
    };
n.Z = d;
