n.d(t, { Z: () => u });
var r = n(192379),
    i = n(399606),
    o = n(745510),
    a = n(351780);
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
    let { createMultipleConfettiAt: e } = r.useContext(o.h),
        t = (0, i.e7)([a.Z], () => a.Z.getState()),
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
            fire: (r, i, o) => {
                var a, s;
                let c = (null == o ? void 0 : o.settings) != null ? l({}, t, o.settings) : t;
                e(r, i, n(c), (null != (a = null == o ? void 0 : o.count) ? a : c.confettiCount) * (null != (s = null == o ? void 0 : o.countMultiplier) ? s : 1), { sprite: null == o ? void 0 : o.sprite });
            }
        }),
        [e, n, t]
    );
}
