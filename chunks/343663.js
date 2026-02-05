"use strict";
var r = n(64700),
    i = n(524519);
function a(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var s = "function" == typeof Object.is ? Object.is : a,
    o = i.useSyncExternalStore,
    l = r.useRef,
    u = r.useEffect,
    c = r.useMemo,
    d = r.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var a = l(null);
    if (null === a.current) {
        var _ = { hasValue: !1, value: null };
        a.current = _;
    } else _ = a.current;
    var f = o(
        e,
        (a = c(
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
        a[1],
    );
    return (
        u(
            function () {
                (_.hasValue = !0), (_.value = f);
            },
            [f],
        ),
        d(f),
        f
    );
};
