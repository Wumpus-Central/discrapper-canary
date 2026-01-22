n.d(t, {
    P0: () => d,
    VD: () => f,
    WE: () => u,
}),
    n(896048);
var r = n(353640),
    i = n(121894),
    a = n(652215);
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
function o(e) {
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
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = (0, r.v)(() => ({
    currentToastMap: new Map(),
    queuedToastsMap: new Map(),
}));
function d(e) {
    var t, n;
    let r = null != (t = null == (n = e.options) ? void 0 : n.appContext) ? t : a.BRT.APP;
    (0, i.r)(() => {
        u.setState((t) => {
            if (t.currentToastMap.has(r)) {
                var n;
                let i = new Map(t.queuedToastsMap),
                    a = null != (n = i.get(r)) ? n : [];
                return i.set(r, [...a, e]), c(o({}, t), { queuedToastsMap: i });
            }
            {
                let n = new Map(t.currentToastMap);
                return n.set(r, e), c(o({}, t), { currentToastMap: n });
            }
        });
    });
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.BRT.APP;
    (0, i.r)(() => {
        u.setState((t) => {
            var n, r;
            if (0 === (null != (n = t.queuedToastsMap.get(e)) ? n : []).length) {
                let n = new Map(t.currentToastMap);
                return n.delete(e), c(o({}, t), { currentToastMap: n });
            }
            let i = new Map(t.currentToastMap),
                a = new Map(t.queuedToastsMap),
                s = null != (r = a.get(e)) ? r : [],
                l = s[0];
            return (
                i.set(e, l),
                a.set(e, s.slice(1)),
                c(o({}, t), {
                    currentToastMap: i,
                    queuedToastsMap: a,
                })
            );
        });
    });
}
