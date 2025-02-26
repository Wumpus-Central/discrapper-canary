t.d(n, { Z: () => s });
var r = t(200651),
    i = t(192379),
    o = t(481060);
function a(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function s(e) {
    let n = i.useCallback(
        (n) => {
            n.stopPropagation(),
                (0, o.ZDy)(async () => {
                    let { default: n } = await t.e('13965').then(t.bind(t, 666083));
                    return (t) => (0, r.jsx)(n, a({ powerup: e }, t));
                });
        },
        [e]
    );
    return {
        onActivate: n,
        onDeactivate: i.useCallback(
            (n) => {
                n.stopPropagation(),
                    (0, o.ZDy)(async () => {
                        let { default: n } = await t.e('31924').then(t.bind(t, 625651));
                        return (t) => (0, r.jsx)(n, a({ powerup: e }, t));
                    });
            },
            [e]
        ),
        onShowMore: i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: n } = await t.e('78718').then(t.bind(t, 640139));
                return (t) => (0, r.jsx)(n, a({ powerup: e }, t));
            });
        }, [e])
    };
}
