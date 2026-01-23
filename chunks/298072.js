n.d(t, {
    Q: () => p,
    n: () => _,
}),
    n(896048);
var r = n(942381),
    i = n(265690),
    a = n(312852),
    s = n(623373);

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

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = (0, i.h)(
        () => ({
            selectionStates: new Map(),
        }),
        r.x,
    ),
    f = () => ({
        selectedVariantIndex: 0,
    }),
    p = (e) => {
        let t = (0, a.K)(e),
            n = d((t) => {
                var n;
                return null != e && (0, s.B1)(e)
                    ? null == (n = t.selectionStates.get(e.storeListingId))
                        ? void 0
                        : n.selectedVariantIndex
                    : null;
            });
        return null != n ? Math.max(0, n) : t;
    },
    _ = (e, t) => {
        d.setState((n) => {
            var r;
            let i = null != (r = n.selectionStates.get(e.storeListingId)) ? r : f();
            return {
                selectionStates: new Map(n.selectionStates).set(
                    e.storeListingId,
                    u(l({}, i), {
                        selectedVariantIndex: t,
                    }),
                ),
            };
        });
    };
