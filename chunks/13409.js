var r = n(192379);
function i(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var o = 'function' == typeof Object.is ? Object.is : i,
    a = r.useState,
    s = r.useEffect,
    l = r.useLayoutEffect,
    c = r.useDebugValue;
function u(e, t) {
    var n = t(),
        r = a({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        i = r[0].inst,
        o = r[1];
    return (
        l(
            function () {
                (i.value = n), (i.getSnapshot = t), d(i) && o({ inst: i });
            },
            [e, n, t]
        ),
        s(
            function () {
                return (
                    d(i) && o({ inst: i }),
                    e(function () {
                        d(i) && o({ inst: i });
                    })
                );
            },
            [e]
        ),
        c(n),
        n
    );
}
function d(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !o(e, n);
    } catch (e) {
        return !0;
    }
}
function f(e, t) {
    return t();
}
var _ = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? f : u;
t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : _;
