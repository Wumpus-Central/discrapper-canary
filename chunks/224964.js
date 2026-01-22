n.d(t, {
    A: () => u,
});
var r = n(64700),
    i = n(417597),
    a = n(21161),
    s = n(3137);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
let c = 7;

function u() {
    let { createMultipleConfettiAt: e } = r.useContext(a.x),
        t = (0, i.bG)([s.A], () => s.A.getState()),
        n = r.useCallback(
            (e) => ({
                size: {
                    type: "static-random",
                    minValue: e.confettiSize - c,
                    maxValue: e.confettiSize + c,
                },
            }),
            [],
        );
    return r.useMemo(
        () => ({
            fire: (r, i, a) => {
                var s, o;
                let c = (null == a ? void 0 : a.settings) != null ? l({}, t, a.settings) : t;
                e(
                    r,
                    i,
                    n(c),
                    (null != (s = null == a ? void 0 : a.count) ? s : c.confettiCount) *
                        (null != (o = null == a ? void 0 : a.countMultiplier) ? o : 1),
                    {
                        sprite: null == a ? void 0 : a.sprite,
                    },
                );
            },
        }),
        [e, n, t],
    );
}
