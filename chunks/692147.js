n.d(t, { Z: () => p });
var i = n(255367),
    o = n(73800),
    l = n(392711),
    r = n(399606),
    a = n(351780),
    s = n(576125),
    c = n(465858),
    u = n(112843),
    d = n(524484);
function h(e) {
    let { reactionRef: t, count: n } = e,
        i = o.useRef(n),
        s = (0, r.e7)([a.Z], () => a.Z.getState()),
        d = (0, u.Z)(),
        h = (0, c.Z)(t);
    return (
        o.useEffect(() => {
            if (n > i.current && null != h) {
                let e = (0, l.clamp)(n, s.confettiCount / 2, 2 * s.confettiCount);
                d.fire(h.x, h.y, { count: e });
            }
            i.current = n;
        }, [n, h, d, s.confettiCount]),
        null
    );
}
function p(e) {
    return (0, i.jsx)(s.Z, {
        confettiLocation: d.Hn.REACTION,
        children: (0, i.jsx)(
            h,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, e)
        )
    });
}
