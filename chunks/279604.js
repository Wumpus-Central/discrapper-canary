t.d(n, { Z: () => s });
var i = t(200651),
    r = t(192379),
    a = t(481060);
function o(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function s(e) {
    let n = r.useCallback(
        (n) => {
            n.stopPropagation(),
                (0, a.ZDy)(async () => {
                    let { default: n } = await t.e('13965').then(t.bind(t, 666083));
                    return (t) => (0, i.jsx)(n, o({ powerup: e }, t));
                });
        },
        [e]
    );
    return {
        onActivate: n,
        onDeactivate: r.useCallback((e) => {
            e.stopPropagation();
        }, []),
        onShowMore: r.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: n } = await t.e('78718').then(t.bind(t, 640139));
                return (t) => (0, i.jsx)(n, o({ powerup: e }, t));
            });
        }, [e])
    };
}
