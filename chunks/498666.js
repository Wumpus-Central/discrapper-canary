var i = n(192379),
    r = n(969710);
function a(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var s = 'function' == typeof Object.is ? Object.is : a,
    o = r.useSyncExternalStore,
    l = i.useRef,
    u = i.useEffect,
    c = i.useMemo,
    d = i.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, n, i, r) {
    var a = l(null);
    if (null === a.current) {
        var f = {
            hasValue: !1,
            value: null
        };
        a.current = f;
    } else f = a.current;
    var _ = o(
        e,
        (a = c(
            function () {
                function e(e) {
                    if (!l) {
                        if (((l = !0), (a = e), (e = i(e)), void 0 !== r && f.hasValue)) {
                            var t = f.value;
                            if (r(t, e)) return (o = t);
                        }
                        return (o = e);
                    }
                    if (((t = o), s(a, e))) return t;
                    var n = i(e);
                    return void 0 !== r && r(t, n) ? t : ((a = e), (o = n));
                }
                var a,
                    o,
                    l = !1,
                    u = void 0 === n ? null : n;
                return [
                    function () {
                        return e(t());
                    },
                    null === u
                        ? void 0
                        : function () {
                              return e(u());
                          }
                ];
            },
            [t, n, i, r]
        ))[0],
        a[1]
    );
    return (
        u(
            function () {
                (f.hasValue = !0), (f.value = _);
            },
            [_]
        ),
        d(_),
        _
    );
};
