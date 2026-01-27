n.d(t, {
    A: () => h,
});
var i = n(627968),
    l = n(64700),
    r = n(735438),
    o = n(417597),
    a = n(3137),
    s = n(620141),
    u = n(966598),
    c = n(224964),
    d = n(31408);

function p(e) {
    let { reactionRef: t, count: n } = e,
        i = l.useRef(n),
        s = (0, o.bG)([a.A], () => a.A.getState()),
        d = (0, c.A)(),
        p = (0, u.A)(t);
    return (
        l.useEffect(() => {
            if (n > i.current && null != p) {
                let e = (0, r.clamp)(n, s.confettiCount / 2, 2 * s.confettiCount);
                d.fire(p.x, p.y, {
                    count: e,
                });
            }
            i.current = n;
        }, [n, p, d, s.confettiCount]),
        null
    );
}

function h(e) {
    return (0, i.jsx)(s.A, {
        confettiLocation: d.k.REACTION,
        children: (0, i.jsx)(
            p,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
