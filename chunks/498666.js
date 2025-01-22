var i = r(192379),
    a = r(969710);
function o(e, n) {
    return (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n);
}
var s = 'function' == typeof Object.is ? Object.is : o,
    l = a.useSyncExternalStore,
    u = i.useRef,
    c = i.useEffect,
    d = i.useMemo,
    f = i.useDebugValue;
n.useSyncExternalStoreWithSelector = function (e, n, r, i, a) {
    var o = u(null);
    if (null === o.current) {
        var p = {
            hasValue: !1,
            value: null
        };
        o.current = p;
    } else p = o.current;
    var h = l(
        e,
        (o = d(
            function () {
                function e(e) {
                    if (!u) {
                        if (((u = !0), (o = e), (e = i(e)), void 0 !== a && p.hasValue)) {
                            var n = p.value;
                            if (a(n, e)) return (l = n);
                        }
                        return (l = e);
                    }
                    if (((n = l), s(o, e))) return n;
                    var r = i(e);
                    return void 0 !== a && a(n, r) ? n : ((o = e), (l = r));
                }
                var o,
                    l,
                    u = !1,
                    c = void 0 === r ? null : r;
                return [
                    function () {
                        return e(n());
                    },
                    null === c
                        ? void 0
                        : function () {
                              return e(c());
                          }
                ];
            },
            [n, r, i, a]
        ))[0],
        o[1]
    );
    return (
        c(
            function () {
                (p.hasValue = !0), (p.value = h);
            },
            [h]
        ),
        f(h),
        h
    );
};
