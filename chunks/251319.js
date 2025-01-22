var i = r(192379);
function a(e, n) {
    return (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n);
}
var o = 'function' == typeof Object.is ? Object.is : a,
    s = i.useState,
    l = i.useEffect,
    u = i.useLayoutEffect,
    c = i.useDebugValue;
function d(e, n) {
    var r = n(),
        i = s({
            inst: {
                value: r,
                getSnapshot: n
            }
        }),
        a = i[0].inst,
        o = i[1];
    return (
        u(
            function () {
                (a.value = r), (a.getSnapshot = n), f(a) && o({ inst: a });
            },
            [e, r, n]
        ),
        l(
            function () {
                return (
                    f(a) && o({ inst: a }),
                    e(function () {
                        f(a) && o({ inst: a });
                    })
                );
            },
            [e]
        ),
        c(r),
        r
    );
}
function f(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var r = n();
        return !o(e, r);
    } catch (e) {
        return !0;
    }
}
function p(e, n) {
    return n();
}
var h = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? p : d;
n.useSyncExternalStore = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : h;
