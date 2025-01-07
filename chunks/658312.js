var i = r(192379),
    a = r(493773);
let s = 1000 / 24,
    o = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
            r = i.useRef(0),
            o = i.useRef(),
            l = i.useRef(!0),
            u = i.useCallback(() => {
                (l.current = !1), cancelAnimationFrame(r.current);
            }, []),
            c = i.useCallback(
                (i) => {
                    if (!l.current) return;
                    null == o.current && (o.current = i);
                    let a = i - o.current;
                    a >= n && ((o.current = i), e(a)), (r.current = requestAnimationFrame(c));
                },
                [e, n]
            ),
            d = i.useCallback(() => {
                (l.current = !0), (o.current = void 0), (r.current = requestAnimationFrame(c));
            }, [c]);
        return (
            (0, a.Z)(() => ((r.current = requestAnimationFrame(c)), () => u())),
            {
                stop: u,
                reset: d,
                ticking: l
            }
        );
    };
n.Z = o;
