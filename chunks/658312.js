var i = r(192379),
    a = r(512722),
    o = r.n(a),
    s = r(493773);
let l = 1000 / 24,
    u = 3,
    c = 3000,
    d = function (e) {
        let { minInterval: n = l, allowableMinInterval: r, droppedFramesCallbackThreshold: a, droppedFramesCallback: d, droppedFramesResetTime: f = c } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            p = i.useRef(0),
            h = i.useRef(),
            _ = i.useRef(),
            m = i.useRef(!0),
            g = i.useRef(0),
            E = i.useRef(),
            v = i.useCallback(() => {
                (g.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            y = i.useCallback(() => {
                (m.current = !1), cancelAnimationFrame(p.current), clearTimeout(E.current);
            }, []),
            b = i.useCallback(
                (i) => {
                    if (!m.current) return;
                    null == h.current && (h.current = i), null == _.current && (_.current = i);
                    let s = i - _.current;
                    i - h.current > (null != r ? r : n) * 1.5 && ((g.current += 1), null != E.current && clearTimeout(E.current), (E.current = setTimeout(v, f)), null != a && g.current > a && (o()(null != d, 'useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit'), d() && (g.current = 0))), (h.current = i), s >= n - u && ((_.current = i), e(s)), (p.current = requestAnimationFrame(b));
                },
                [n, r, v, f, a, d, e]
            ),
            I = i.useCallback(() => {
                (m.current = !0), (_.current = void 0), (p.current = requestAnimationFrame(b));
            }, [b]);
        return (
            (0, s.Z)(() => ((p.current = requestAnimationFrame(b)), () => y())),
            {
                stop: y,
                reset: I,
                ticking: m
            }
        );
    };
n.Z = d;
