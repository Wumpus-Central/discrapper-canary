n.d(t, { G: () => f }), n(388685), n(647438);
var r = n(374470),
    i = n(730606),
    a = n(312097),
    o = n(52824);
function s(e, t, n) {
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
                s(e, t, n[t]);
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
function d(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = arguments.length > 4 ? arguments[4] : void 0;
    e.preventDefault(),
        (0, r.k)(e.currentTarget) && e.currentTarget.blur(),
        (0, a.K)(
            u(l({}, i), {
                items: t,
                startingIndex: n,
                location: null != o ? o : "zoomedMediaModalHelper",
            }),
        );
}
function f(e, t, n) {
    let r = {},
        a = {};
    for (let [s, l] of e.entries()) {
        let c = (0, o.q)({
            proxyURL: l.proxyUrl,
            url: l.url,
        });
        (r[c] = (r) => d(r, e, s, t, n)), (a[c] = () => (0, i.WG)(l, e.length > 1));
    }
    return {
        srcToOnClickOverride: r,
        srcToHandlePreloadImage: a,
    };
}
