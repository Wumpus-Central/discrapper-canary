"use strict";
function n(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n; ) {
        var r = (n - 1) >>> 1,
            i = e[r];
        if (0 < a(i, t)) (e[r] = t), (e[n] = i), (n = r);
        else break;
    }
}
function r(e) {
    return 0 === e.length ? null : e[0];
}
function i(e) {
    if (0 === e.length) return null;
    var t = e[0],
        n = e.pop();
    if (n !== t) {
        e[0] = n;
        for (var r = 0, i = e.length, s = i >>> 1; r < s; ) {
            var o = 2 * (r + 1) - 1,
                l = e[o],
                u = o + 1,
                c = e[u];
            if (0 > a(l, n))
                u < i && 0 > a(c, l) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = l), (e[o] = n), (r = o));
            else if (u < i && 0 > a(c, n)) (e[r] = c), (e[u] = n), (r = u);
            else break;
        }
    }
    return t;
}
function a(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
}
if (((t.unstable_now = void 0), "object" == typeof performance && "function" == typeof performance.now)) {
    var s,
        o = performance;
    t.unstable_now = function () {
        return o.now();
    };
} else {
    var l = Date,
        u = l.now();
    t.unstable_now = function () {
        return l.now() - u;
    };
}
var c = [],
    d = [],
    _ = 1,
    f = null,
    p = 3,
    h = !1,
    m = !1,
    g = !1,
    E = !1,
    A = "function" == typeof setTimeout ? setTimeout : null,
    I = "function" == typeof clearTimeout ? clearTimeout : null,
    T = "u" > typeof setImmediate ? setImmediate : null;
function y(e) {
    for (var t = r(d); null !== t; ) {
        if (null === t.callback) i(d);
        else if (t.startTime <= e) i(d), (t.sortIndex = t.expirationTime), n(c, t);
        else break;
        t = r(d);
    }
}
function S(e) {
    if (((g = !1), y(e), !m))
        if (null !== r(c)) (m = !0), v || ((v = !0), s());
        else {
            var t = r(d);
            null !== t && w(S, t.startTime - e);
        }
}
var v = !1,
    C = -1,
    b = 5,
    N = -1;
function R() {
    return !!E || !(t.unstable_now() - N < b);
}
function O() {
    if (((E = !1), v)) {
        var e = t.unstable_now();
        N = e;
        var n = !0;
        try {
            e: {
                (m = !1), g && ((g = !1), I(C), (C = -1)), (h = !0);
                var a = p;
                try {
                    a: {
                        for (y(e), f = r(c); null !== f && !(f.expirationTime > e && R()); ) {
                            var o = f.callback;
                            if ("function" == typeof o) {
                                (f.callback = null), (p = f.priorityLevel);
                                var l = o(f.expirationTime <= e);
                                if (((e = t.unstable_now()), "function" == typeof l)) {
                                    (f.callback = l), y(e), (n = !0);
                                    break a;
                                }
                                f === r(c) && i(c), y(e);
                            } else i(c);
                            f = r(c);
                        }
                        if (null !== f) n = !0;
                        else {
                            var u = r(d);
                            null !== u && w(S, u.startTime - e), (n = !1);
                        }
                    }
                    break e;
                } finally {
                    (f = null), (p = a), (h = !1);
                }
            }
        } finally {
            n ? s() : (v = !1);
        }
    }
}
if ("function" == typeof T)
    s = function () {
        T(O);
    };
else if ("u" > typeof MessageChannel) {
    var D = new MessageChannel(),
        L = D.port2;
    (D.port1.onmessage = O),
        (s = function () {
            L.postMessage(null);
        });
} else
    s = function () {
        A(O, 0);
    };
function w(e, n) {
    C = A(function () {
        e(t.unstable_now());
    }, n);
}
(t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (e) {
        e.callback = null;
    }),
    (t.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
            ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : (b = 0 < e ? Math.floor(1e3 / e) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
        return p;
    }),
    (t.unstable_next = function (e) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = p;
        }
        var n = p;
        p = t;
        try {
            return e();
        } finally {
            p = n;
        }
    }),
    (t.unstable_requestPaint = function () {
        E = !0;
    }),
    (t.unstable_runWithPriority = function (e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3;
        }
        var n = p;
        p = e;
        try {
            return t();
        } finally {
            p = n;
        }
    }),
    (t.unstable_scheduleCallback = function (e, i, a) {
        var o = t.unstable_now();
        switch (
            ((a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? o + a : o), e)
        ) {
            case 1:
                var l = -1;
                break;
            case 2:
                l = 250;
                break;
            case 5:
                l = 0x3fffffff;
                break;
            case 4:
                l = 1e4;
                break;
            default:
                l = 5e3;
        }
        return (
            (l = a + l),
            (e = { id: _++, callback: i, priorityLevel: e, startTime: a, expirationTime: l, sortIndex: -1 }),
            a > o
                ? ((e.sortIndex = a),
                  n(d, e),
                  null === r(c) && e === r(d) && (g ? (I(C), (C = -1)) : (g = !0), w(S, a - o)))
                : ((e.sortIndex = l), n(c, e), m || h || ((m = !0), v || ((v = !0), s()))),
            e
        );
    }),
    (t.unstable_shouldYield = R),
    (t.unstable_wrapCallback = function (e) {
        var t = p;
        return function () {
            var n = p;
            p = t;
            try {
                return e.apply(this, arguments);
            } finally {
                p = n;
            }
        };
    });
