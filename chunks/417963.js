var n = r(582128),
    i = r(937787),
    o =
        "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    a = i.useSyncExternalStore,
    s = n.useRef,
    l = n.useEffect,
    u = n.useMemo,
    c = n.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
    var f = s(null);
    if (null === f.current) {
        var d = { hasValue: !1, value: null };
        f.current = d;
    } else d = f.current;
    var p = a(
        e,
        (f = u(
            function () {
                function e(e) {
                    if (!l) {
                        if (((l = !0), (a = e), (e = n(e)), void 0 !== i && d.hasValue)) {
                            var t = d.value;
                            if (i(t, e)) return (s = t);
                        }
                        return (s = e);
                    }
                    if (((t = s), o(a, e))) return t;
                    var r = n(e);
                    return void 0 !== i && i(t, r) ? ((a = e), t) : ((a = e), (s = r));
                }
                var a,
                    s,
                    l = !1,
                    u = void 0 === r ? null : r;
                return [
                    function () {
                        return e(t());
                    },
                    null === u
                        ? void 0
                        : function () {
                              return e(u());
                          },
                ];
            },
            [t, r, n, i],
        ))[0],
        f[1],
    );
    return (
        l(
            function () {
                (d.hasValue = !0), (d.value = p);
            },
            [p],
        ),
        c(p),
        p
    );
};
