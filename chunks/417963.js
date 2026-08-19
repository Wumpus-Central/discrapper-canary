"use strict";
var n = r(582128),
    o = r(937787),
    i =
        "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    a = o.useSyncExternalStore,
    s = n.useRef,
    l = n.useEffect,
    u = n.useMemo,
    c = n.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
    var f = s(null);
    if (null === f.current) {
        var p = { hasValue: !1, value: null };
        f.current = p;
    } else p = f.current;
    var d = a(
        e,
        (f = u(
            function () {
                function e(e) {
                    if (!l) {
                        if (((l = !0), (a = e), (e = n(e)), void 0 !== o && p.hasValue)) {
                            var t = p.value;
                            if (o(t, e)) return (s = t);
                        }
                        return (s = e);
                    }
                    if (((t = s), i(a, e))) return t;
                    var r = n(e);
                    return void 0 !== o && o(t, r) ? ((a = e), t) : ((a = e), (s = r));
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
            [t, r, n, o],
        ))[0],
        f[1],
    );
    return (
        l(
            function () {
                (p.hasValue = !0), (p.value = d);
            },
            [d],
        ),
        c(d),
        d
    );
};
