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
        for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
            var s = 2 * (r + 1) - 1,
                l = e[s],
                c = s + 1,
                u = e[c];
            if (0 > a(l, n))
                c < i && 0 > a(u, l) ? ((e[r] = u), (e[c] = n), (r = c)) : ((e[r] = l), (e[s] = n), (r = s));
            else if (c < i && 0 > a(u, n)) (e[r] = u), (e[c] = n), (r = c);
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
    var o,
        s = performance;
    t.unstable_now = function () {
        return s.now();
    };
} else {
    var l = Date,
        c = l.now();
    t.unstable_now = function () {
        return l.now() - c;
    };
}
var u = [],
    d = [],
    f = 1,
    p = null,
    _ = 3,
    m = !1,
    h = !1,
    g = !1,
    E = !1,
    b = "function" == typeof setTimeout ? setTimeout : null,
    y = "function" == typeof clearTimeout ? clearTimeout : null,
    O = "undefined" != typeof setImmediate ? setImmediate : null;
function v(e) {
    for (var t = r(d); null !== t; ) {
        if (null === t.callback) i(d);
        else if (t.startTime <= e) i(d), (t.sortIndex = t.expirationTime), n(u, t);
        else break;
        t = r(d);
    }
}
function S(e) {
    if (((g = !1), v(e), !h))
        if (null !== r(u)) (h = !0), I || ((I = !0), o());
        else {
            var t = r(d);
            null !== t && D(S, t.startTime - e);
        }
}
var I = !1,
    T = -1,
    C = 5,
    A = -1;
function N() {
    return !!E || !(t.unstable_now() - A < C);
}
function P() {
    if (((E = !1), I)) {
        var e = t.unstable_now();
        A = e;
        var n = !0;
        try {
            e: {
                (h = !1), g && ((g = !1), y(T), (T = -1)), (m = !0);
                var a = _;
                try {
                    a: {
                        for (v(e), p = r(u); null !== p && !(p.expirationTime > e && N()); ) {
                            var s = p.callback;
                            if ("function" == typeof s) {
                                (p.callback = null), (_ = p.priorityLevel);
                                var l = s(p.expirationTime <= e);
                                if (((e = t.unstable_now()), "function" == typeof l)) {
                                    (p.callback = l), v(e), (n = !0);
                                    break a;
                                }
                                p === r(u) && i(u), v(e);
                            } else i(u);
                            p = r(u);
                        }
                        if (null !== p) n = !0;
                        else {
                            var c = r(d);
                            null !== c && D(S, c.startTime - e), (n = !1);
                        }
                    }
                    break e;
                } finally {
                    (p = null), (_ = a), (m = !1);
                }
            }
        } finally {
            n ? o() : (I = !1);
        }
    }
}
if ("function" == typeof O)
    o = function () {
        O(P);
    };
else if ("undefined" != typeof MessageChannel) {
    var R = new MessageChannel(),
        w = R.port2;
    (R.port1.onmessage = P),
        (o = function () {
            w.postMessage(null);
        });
} else
    o = function () {
        b(P, 0);
    };
function D(e, n) {
    T = b(function () {
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
            : (C = 0 < e ? Math.floor(1000 / e) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
        return _;
    }),
    (t.unstable_next = function (e) {
        switch (_) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = _;
        }
        var n = _;
        _ = t;
        try {
            return e();
        } finally {
            _ = n;
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
        var n = _;
        _ = e;
        try {
            return t();
        } finally {
            _ = n;
        }
    }),
    (t.unstable_scheduleCallback = function (e, i, a) {
        var s = t.unstable_now();
        switch (
            ((a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? s + a : s), e)
        ) {
            case 1:
                var l = -1;
                break;
            case 2:
                l = 250;
                break;
            case 5:
                l = 1073741823;
                break;
            case 4:
                l = 10000;
                break;
            default:
                l = 5000;
        }
        return (
            (l = a + l),
            (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: l,
                sortIndex: -1,
            }),
            a > s
                ? ((e.sortIndex = a),
                  n(d, e),
                  null === r(u) && e === r(d) && (g ? (y(T), (T = -1)) : (g = !0), D(S, a - s)))
                : ((e.sortIndex = l), n(u, e), h || m || ((h = !0), I || ((I = !0), o()))),
            e
        );
    }),
    (t.unstable_shouldYield = N),
    (t.unstable_wrapCallback = function (e) {
        var t = _;
        return function () {
            var n = _;
            _ = t;
            try {
                return e.apply(this, arguments);
            } finally {
                _ = n;
            }
        };
    });
