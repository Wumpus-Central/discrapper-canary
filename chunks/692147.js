n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    o = n(392711),
    a = n(399606),
    s = n(351780),
    l = n(576125),
    c = n(465858),
    u = n(112843),
    d = n(524484);
function h(e) {
    let { reactionRef: t, count: n } = e,
        i = r.useRef(n),
        l = (0, a.e7)([s.Z], () => s.Z.getState()),
        d = (0, u.Z)(),
        h = (0, c.Z)(t);
    return (
        r.useEffect(() => {
            if (n > i.current && null != h) {
                let e = (0, o.clamp)(n, l.confettiCount / 2, 2 * l.confettiCount);
                d.fire(h.x, h.y, { count: e });
            }
            i.current = n;
        }, [n, h, d, l.confettiCount]),
        null
    );
}
function p(e) {
    return (0, i.jsx)(l.Z, {
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
