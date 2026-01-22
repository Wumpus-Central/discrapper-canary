var r = n(64700),
    i = n(524519);
function a(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var s = "function" == typeof Object.is ? Object.is : a,
    o = i.useSyncExternalStore,
    l = r.useRef,
    c = r.useEffect,
    u = r.useMemo,
    d = r.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var a = l(null);
    if (null === a.current) {
        var f = {
            hasValue: !1,
            value: null,
        };
        a.current = f;
    } else f = a.current;
    var p = o(
        e,
        (a = u(
            function () {
                function e(e) {
                    if (!l) {
                        if (((l = !0), (a = e), (e = r(e)), void 0 !== i && f.hasValue)) {
                            var t = f.value;
                            if (i(t, e)) return (o = t);
                        }
                        return (o = e);
                    }
                    if (((t = o), s(a, e))) return t;
                    var n = r(e);
                    return void 0 !== i && i(t, n) ? ((a = e), t) : ((a = e), (o = n));
                }
                var a,
                    o,
                    l = !1,
                    c = void 0 === n ? null : n;
                return [
                    function () {
                        return e(t());
                    },
                    null === c
                        ? void 0
                        : function () {
                              return e(c());
                          },
                ];
            },
            [t, n, r, i],
        ))[0],
        a[1],
    );
    return (
        c(
            function () {
                (f.hasValue = !0), (f.value = p);
            },
            [p],
        ),
        d(p),
        p
    );
};
