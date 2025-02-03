function n(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n; ) {
        var i = (n - 1) >>> 1,
            r = e[i];
        if (0 < a(r, t)) (e[i] = t), (e[n] = r), (n = i);
        else break;
    }
}
function i(e) {
    return 0 === e.length ? null : e[0];
}
function r(e) {
    if (0 === e.length) return null;
    var t = e[0],
        n = e.pop();
    if (n !== t) {
        e[0] = n;
        for (var i = 0, r = e.length, s = r >>> 1; i < s; ) {
            var o = 2 * (i + 1) - 1,
                l = e[o],
                u = o + 1,
                c = e[u];
            if (0 > a(l, n)) u < r && 0 > a(c, l) ? ((e[i] = c), (e[u] = n), (i = u)) : ((e[i] = l), (e[o] = n), (i = o));
            else if (u < r && 0 > a(c, n)) (e[i] = c), (e[u] = n), (i = u);
            else break;
        }
    }
    return t;
}
function a(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
}
if ('object' == typeof performance && 'function' == typeof performance.now) {
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
    f = 1,
    _ = null,
    p = 3,
    h = !1,
    m = !1,
    g = !1,
    E = 'function' == typeof setTimeout ? setTimeout : null,
    v = 'function' == typeof clearTimeout ? clearTimeout : null,
    y = 'undefined' != typeof setImmediate ? setImmediate : null;
function I(e) {
    for (var t = i(d); null !== t; ) {
        if (null === t.callback) r(d);
        else if (t.startTime <= e) r(d), (t.sortIndex = t.expirationTime), n(c, t);
        else break;
        t = i(d);
    }
}
function b(e) {
    if (((g = !1), I(e), !m)) {
        if (null !== i(c)) (m = !0), P(T);
        else {
            var t = i(d);
            null !== t && w(b, t.startTime - e);
        }
    }
}
function T(e, n) {
    (m = !1), g && ((g = !1), v(N), (N = -1)), (h = !0);
    var a = p;
    try {
        for (I(n), _ = i(c); null !== _ && (!(_.expirationTime > n) || (e && !O())); ) {
            var s = _.callback;
            if ('function' == typeof s) {
                (_.callback = null), (p = _.priorityLevel);
                var o = s(_.expirationTime <= n);
                (n = t.unstable_now()), 'function' == typeof o ? (_.callback = o) : _ === i(c) && r(c), I(n);
            } else r(c);
            _ = i(c);
        }
        if (null !== _) var l = !0;
        else {
            var u = i(d);
            null !== u && w(b, u.startTime - n), (l = !1);
        }
        return l;
    } finally {
        (_ = null), (p = a), (h = !1);
    }
}
'undefined' != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
var S = !1,
    A = null,
    N = -1,
    C = 5,
    R = -1;
function O() {
    return !(t.unstable_now() - R < C);
}
function D() {
    if (null !== A) {
        var e = t.unstable_now();
        R = e;
        var n = !0;
        try {
            n = A(!0, e);
        } finally {
            n ? s() : ((S = !1), (A = null));
        }
    } else S = !1;
}
if ('function' == typeof y)
    s = function () {
        y(D);
    };
else if ('undefined' != typeof MessageChannel) {
    var x = new MessageChannel(),
        L = x.port2;
    (x.port1.onmessage = D),
        (s = function () {
            L.postMessage(null);
        });
} else
    s = function () {
        E(D, 0);
    };
function P(e) {
    (A = e), S || ((S = !0), s());
}
function w(e, n) {
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
        m || h || ((m = !0), P(T));
    }),
    (t.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (C = 0 < e ? Math.floor(1000 / e) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
        return p;
    }),
    (t.unstable_getFirstCallbackNode = function () {
        return i(c);
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
    (t.unstable_scheduleCallback = function (e, r, a) {
        var s = t.unstable_now();
        switch (((a = 'object' == typeof a && null !== a && 'number' == typeof (a = a.delay) && 0 < a ? s + a : s), e)) {
            case 1:
                var o = -1;
                break;
            case 2:
                o = 250;
                break;
            case 5:
                o = 1073741823;
                break;
            case 4:
                o = 10000;
                break;
            default:
                o = 5000;
        }
        return (
            (o = a + o),
            (e = {
                id: f++,
                callback: r,
                priorityLevel: e,
                startTime: a,
                expirationTime: o,
                sortIndex: -1
            }),
            a > s ? ((e.sortIndex = a), n(d, e), null === i(c) && e === i(d) && (g ? (v(N), (N = -1)) : (g = !0), w(b, a - s))) : ((e.sortIndex = o), n(c, e), m || h || ((m = !0), P(T))),
            e
        );
    }),
    (t.unstable_shouldYield = O),
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
