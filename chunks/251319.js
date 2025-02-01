var i = n(192379);
function r(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var a = 'function' == typeof Object.is ? Object.is : r,
    s = i.useState,
    o = i.useEffect,
    l = i.useLayoutEffect,
    u = i.useDebugValue;
function c(e, t) {
    var n = t(),
        i = s({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        r = i[0].inst,
        a = i[1];
    return (
        l(
            function () {
                (r.value = n), (r.getSnapshot = t), d(r) && a({ inst: r });
            },
            [e, n, t]
        ),
        o(
            function () {
                return (
                    d(r) && a({ inst: r }),
                    e(function () {
                        d(r) && a({ inst: r });
                    })
                );
            },
            [e]
        ),
        u(n),
        n
    );
}
function d(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !a(e, n);
    } catch (e) {
        return !0;
    }
}
function f(e, t) {
    return t();
}
var _ = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? f : c;
t.useSyncExternalStore = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : _;
