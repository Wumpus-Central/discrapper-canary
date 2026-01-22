n.d(t, { A: () => u });
var l = n(627968),
    r = n(64700),
    i = n(620141),
    a = n(966598),
    s = n(224964),
    o = n(31408);
function c(e) {
    let { callTileRef: t, isFiring: n } = e,
        l = (0, s.A)(),
        i = (0, a.A)(t);
    return (
        r.useEffect(() => {
            n &&
                null != i &&
                null != t &&
                l.fire(i.x + t.clientWidth / 2, i.y + t.clientHeight / 2, { countMultiplier: 4 });
        }, [t, l, n, i]),
        null
    );
}
function u(e) {
    return (0, l.jsx)(i.A, {
        confettiLocation: o.k.CALL_TILE,
        children: (0, l.jsx)(
            c,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
