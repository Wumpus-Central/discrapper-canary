"use strict";
var r = n(582128),
    i = n(937787),
    a =
        "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    o = i.useSyncExternalStore,
    s = r.useRef,
    l = r.useEffect,
    u = r.useMemo,
    c = r.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var d = s(null);
    if (null === d.current) {
        var f = { hasValue: !1, value: null };
        d.current = f;
    } else f = d.current;
    var p = o(
        e,
        (d = u(
            function () {
                function e(e) {
                    if (!l) {
                        if (((l = !0), (o = e), (e = r(e)), void 0 !== i && f.hasValue)) {
                            var t = f.value;
                            if (i(t, e)) return (s = t);
                        }
                        return (s = e);
                    }
                    if (((t = s), a(o, e))) return t;
                    var n = r(e);
                    return void 0 !== i && i(t, n) ? ((o = e), t) : ((o = e), (s = n));
                }
                var o,
                    s,
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
                          },
                ];
            },
            [t, n, r, i],
        ))[0],
        d[1],
    );
    return (
        l(
            function () {
                (f.hasValue = !0), (f.value = p);
            },
            [p],
        ),
        c(p),
        p
    );
};
