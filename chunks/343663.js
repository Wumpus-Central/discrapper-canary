"use strict";
var r = n(64700),
    i = n(524519),
    s =
        "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    a = i.useSyncExternalStore,
    o = r.useRef,
    l = r.useEffect,
    u = r.useMemo,
    d = r.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var c = o(null);
    if (null === c.current) {
        var _ = { hasValue: !1, value: null };
        c.current = _;
    } else _ = c.current;
    var f = a(
        e,
        (c = u(
            function () {
                function e(e) {
                    if (!l) {
                        if (((l = !0), (a = e), (e = r(e)), void 0 !== i && _.hasValue)) {
                            var t = _.value;
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
        c[1],
    );
    return (
        l(
            function () {
                (_.hasValue = !0), (_.value = f);
            },
            [f],
        ),
        d(f),
        f
    );
};
