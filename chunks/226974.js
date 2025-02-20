function n(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n; ) {
        var r = (n - 1) >>> 1,
            i = e[r];
        if (0 < o(i, t)) (e[r] = t), (e[n] = i), (n = r);
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
        for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
            var s = 2 * (r + 1) - 1,
                l = e[s],
                c = s + 1,
                u = e[c];
            if (0 > o(l, n)) c < i && 0 > o(u, l) ? ((e[r] = u), (e[c] = n), (r = c)) : ((e[r] = l), (e[s] = n), (r = s));
            else if (c < i && 0 > o(u, n)) (e[r] = u), (e[c] = n), (r = c);
            else break;
        }
    }
    return t;
}
function o(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
}
if ('object' == typeof performance && 'function' == typeof performance.now) {
    var a,
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
    h = !1,
    m = !1,
    g = !1,
    E = 'function' == typeof setTimeout ? setTimeout : null,
    v = 'function' == typeof clearTimeout ? clearTimeout : null,
    b = 'undefined' != typeof setImmediate ? setImmediate : null;
function y(e) {
    for (var t = r(d); null !== t; ) {
        if (null === t.callback) i(d);
        else if (t.startTime <= e) i(d), (t.sortIndex = t.expirationTime), n(u, t);
        else break;
        t = r(d);
    }
}
function O(e) {
    if (((g = !1), y(e), !m)) {
        if (null !== r(u)) (m = !0), x(S);
        else {
            var t = r(d);
            null !== t && L(O, t.startTime - e);
        }
    }
}
function S(e, n) {
    (m = !1), g && ((g = !1), v(N), (N = -1)), (h = !0);
    var o = _;
    try {
        for (y(n), p = r(u); null !== p && (!(p.expirationTime > n) || (e && !R())); ) {
            var a = p.callback;
            if ('function' == typeof a) {
                (p.callback = null), (_ = p.priorityLevel);
                var s = a(p.expirationTime <= n);
                (n = t.unstable_now()), 'function' == typeof s ? (p.callback = s) : p === r(u) && i(u), y(n);
            } else i(u);
            p = r(u);
        }
        if (null !== p) var l = !0;
        else {
            var c = r(d);
            null !== c && L(O, c.startTime - n), (l = !1);
        }
        return l;
    } finally {
        (p = null), (_ = o), (h = !1);
    }
}
'undefined' != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
var I = !1,
    T = null,
    N = -1,
    A = 5,
    C = -1;
function R() {
    return !(t.unstable_now() - C < A);
}
function P() {
    if (null !== T) {
        var e = t.unstable_now();
        C = e;
        var n = !0;
        try {
            n = T(!0, e);
        } finally {
            n ? a() : ((I = !1), (T = null));
        }
    } else I = !1;
}
if ('function' == typeof b)
    a = function () {
        b(P);
    };
else if ('undefined' != typeof MessageChannel) {
    var w = new MessageChannel(),
        D = w.port2;
    (w.port1.onmessage = P),
        (a = function () {
            D.postMessage(null);
        });
} else
    a = function () {
        E(P, 0);
    };
function x(e) {
    (T = e), I || ((I = !0), a());
}
function L(e, n) {
    N = E(function () {
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
        m || h || ((m = !0), x(S));
    }),
    (t.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (A = 0 < e ? Math.floor(1000 / e) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
        return _;
    }),
    (t.unstable_getFirstCallbackNode = function () {
        return r(u);
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
        var n = _;
        _ = e;
        try {
            return t();
        } finally {
            _ = n;
        }
    }),
    (t.unstable_scheduleCallback = function (e, i, o) {
        var a = t.unstable_now();
        switch (((o = 'object' == typeof o && null !== o && 'number' == typeof (o = o.delay) && 0 < o ? a + o : a), e)) {
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
            (s = o + s),
            (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: o,
                expirationTime: s,
                sortIndex: -1
            }),
            o > a ? ((e.sortIndex = o), n(d, e), null === r(u) && e === r(d) && (g ? (v(N), (N = -1)) : (g = !0), L(O, o - a))) : ((e.sortIndex = s), n(u, e), m || h || ((m = !0), x(S))),
            e
        );
    }),
    (t.unstable_shouldYield = R),
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
