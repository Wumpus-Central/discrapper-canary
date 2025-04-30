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
            if (0 > a(l, n)) c < i && 0 > a(u, l) ? ((e[r] = u), (e[c] = n), (r = c)) : ((e[r] = l), (e[s] = n), (r = s));
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
if (((t.unstable_now = void 0), 'object' == typeof performance && 'function' == typeof performance.now)) {
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
    _ = null,
    p = 3,
    h = !1,
    m = !1,
    g = !1,
    E = 'function' == typeof setTimeout ? setTimeout : null,
    b = 'function' == typeof clearTimeout ? clearTimeout : null,
    y = 'undefined' != typeof setImmediate ? setImmediate : null;
function O(e) {
    for (var t = r(d); null !== t; ) {
        if (null === t.callback) i(d);
        else if (t.startTime <= e) i(d), (t.sortIndex = t.expirationTime), n(u, t);
        else break;
        t = r(d);
    }
}
function v(e) {
    if (((g = !1), O(e), !m))
        if (null !== r(u)) (m = !0), w();
        else {
            var t = r(d);
            null !== t && D(v, t.startTime - e);
        }
}
var I = !1,
    S = -1,
    T = 5,
    A = -1;
function N() {
    return !(t.unstable_now() - A < T);
}
function C() {
    if (I) {
        var e = t.unstable_now();
        A = e;
        var n = !0;
        try {
            e: {
                (m = !1), g && ((g = !1), b(S), (S = -1)), (h = !0);
                var a = p;
                try {
                    a: {
                        for (O(e), _ = r(u); null !== _ && !(_.expirationTime > e && N()); ) {
                            var s = _.callback;
                            if ('function' == typeof s) {
                                (_.callback = null), (p = _.priorityLevel);
                                var l = s(_.expirationTime <= e);
                                if (((e = t.unstable_now()), 'function' == typeof l)) {
                                    (_.callback = l), O(e), (n = !0);
                                    break a;
                                }
                                _ === r(u) && i(u), O(e);
                            } else i(u);
                            _ = r(u);
                        }
                        if (null !== _) n = !0;
                        else {
                            var c = r(d);
                            null !== c && D(v, c.startTime - e), (n = !1);
                        }
                    }
                    break e;
                } finally {
                    (_ = null), (p = a), (h = !1);
                }
            }
        } finally {
            n ? o() : (I = !1);
        }
    }
}
if ('function' == typeof y)
    o = function () {
        y(C);
    };
else if ('undefined' != typeof MessageChannel) {
    var R = new MessageChannel(),
        P = R.port2;
    (R.port1.onmessage = C),
        (o = function () {
            P.postMessage(null);
        });
} else
    o = function () {
        E(C, 0);
    };
function w() {
    I || ((I = !0), o());
}
function D(e, n) {
    S = E(function () {
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
    (t.unstable_continueExecution = function () {
        m || h || ((m = !0), w());
    }),
    (t.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (T = 0 < e ? Math.floor(1000 / e) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
        return p;
    }),
    (t.unstable_getFirstCallbackNode = function () {
        return r(u);
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
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
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
        switch (((a = 'object' == typeof a && null !== a && 'number' == typeof (a = a.delay) && 0 < a ? o + a : o), e)) {
            case 1:
                var s = -1;
                break;
            case 2:
                s = 250;
                break;
            case 5:
                s = 1073741823;
                break;
            case 4:
                s = 10000;
                break;
            default:
                s = 5000;
        }
        return (
            (s = a + s),
            (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: s,
                sortIndex: -1
            }),
            a > o ? ((e.sortIndex = a), n(d, e), null === r(u) && e === r(d) && (g ? (b(S), (S = -1)) : (g = !0), D(v, a - o))) : ((e.sortIndex = s), n(u, e), m || h || ((m = !0), w())),
            e
        );
    }),
    (t.unstable_shouldYield = N),
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
