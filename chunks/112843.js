n.d(t, { Z: () => u });
var r = n(192379),
    i = n(399606),
    a = n(745510),
    o = n(351780);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = 7;
function u() {
    let { createMultipleConfettiAt: e } = r.useContext(a.h),
        t = (0, i.e7)([o.Z], () => o.Z.getState()),
        n = r.useCallback(
            (e) => ({
                size: {
                    type: 'static-random',
                    minValue: e.confettiSize - c,
                    maxValue: e.confettiSize + c
                }
            }),
            []
        );
    return r.useMemo(
        () => ({
            fire: (r, i, a) => {
                var o, s;
                let c = (null == a ? void 0 : a.settings) != null ? l({}, t, a.settings) : t;
                e(r, i, n(c), (null != (o = null == a ? void 0 : a.count) ? o : c.confettiCount) * (null != (s = null == a ? void 0 : a.countMultiplier) ? s : 1), { sprite: null == a ? void 0 : a.sprite });
            }
        }),
        [e, n, t]
    );
}
