var i = r(192379),
    a = r(512722),
    o = r.n(a),
    s = r(493773);
let l = 1000 / 24,
    u = 3,
    c = 3000,
    d = function (e) {
        let { minInterval: n = l, allowableMinInterval: r, droppedFramesCallbackThreshold: a, droppedFramesCallback: d, droppedFramesResetTime: f = c } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            p = i.useRef(n),
            h = i.useRef(0),
            _ = i.useRef(),
            m = i.useRef(),
            g = i.useRef(!0),
            E = i.useRef(0),
            v = i.useRef(),
            y = i.useCallback(() => {
                (E.current = 0), null != v.current && (clearTimeout(v.current), (v.current = void 0));
            }, []),
            b = i.useCallback(() => {
                (g.current = !1), cancelAnimationFrame(h.current), clearTimeout(v.current);
            }, []),
            I = i.useCallback(
                (n) => {
                    if (!g.current) return;
                    null == _.current && (_.current = n), null == m.current && (m.current = n);
                    let i = n - m.current,
                        s = n - _.current;
                    s > 1.5 * Math.min(null != r ? r : 120, p.current) && ((E.current += 1), null != v.current && clearTimeout(v.current), (v.current = setTimeout(y, f)), null != a && E.current > a && (o()(null != d, 'useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit'), d() && (E.current = 0))), (_.current = n), i >= p.current - u && ((m.current = n), e(i)), (h.current = requestAnimationFrame(I));
                },
                [r, y, f, a, d, e]
            ),
            T = i.useCallback(() => {
                (g.current = !0), (m.current = void 0), (h.current = requestAnimationFrame(I));
            }, [I]);
        return (
            i.useEffect(() => {
                p.current = n;
            }, [n]),
            (0, s.Z)(() => ((h.current = requestAnimationFrame(I)), () => b())),
            {
                stop: b,
                reset: T,
                ticking: g
            }
        );
    };
n.Z = d;
