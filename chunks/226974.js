function r(e, n) {
    var r = e.length;
    for (e.push(n); 0 < r; ) {
        var i = (r - 1) >>> 1,
            a = e[i];
        if (0 < o(a, n)) (e[i] = n), (e[r] = a), (r = i);
        else break;
    }
}
function i(e) {
    return 0 === e.length ? null : e[0];
}
function a(e) {
    if (0 === e.length) return null;
    var n = e[0],
        r = e.pop();
    if (r !== n) {
        e[0] = r;
        for (var i = 0, a = e.length, s = a >>> 1; i < s; ) {
            var l = 2 * (i + 1) - 1,
                u = e[l],
                c = l + 1,
                d = e[c];
            if (0 > o(u, r)) c < a && 0 > o(d, u) ? ((e[i] = d), (e[c] = r), (i = c)) : ((e[i] = u), (e[l] = r), (i = l));
            else if (c < a && 0 > o(d, r)) (e[i] = d), (e[c] = r), (i = c);
            else break;
        }
    }
    return n;
}
function o(e, n) {
    var r = e.sortIndex - n.sortIndex;
    return 0 !== r ? r : e.id - n.id;
}
if ('object' == typeof performance && 'function' == typeof performance.now) {
    var s,
        l = performance;
    n.unstable_now = function () {
        return l.now();
    };
} else {
    var u = Date,
        c = u.now();
    n.unstable_now = function () {
        return u.now() - c;
    };
}
var d = [],
    f = [],
    p = 1,
    h = null,
    _ = 3,
    m = !1,
    g = !1,
    E = !1,
    v = 'function' == typeof setTimeout ? setTimeout : null,
    y = 'function' == typeof clearTimeout ? clearTimeout : null,
    b = 'undefined' != typeof setImmediate ? setImmediate : null;
function I(e) {
    for (var n = i(f); null !== n; ) {
        if (null === n.callback) a(f);
        else if (n.startTime <= e) a(f), (n.sortIndex = n.expirationTime), r(d, n);
        else break;
        n = i(f);
    }
}
function T(e) {
    if (((E = !1), I(e), !g)) {
        if (null !== i(d)) (g = !0), P(S);
        else {
            var n = i(f);
            null !== n && M(T, n.startTime - e);
        }
    }
}
function S(e, r) {
    (g = !1), E && ((E = !1), y(N), (N = -1)), (m = !0);
    var o = _;
    try {
        for (I(r), h = i(d); null !== h && (!(h.expirationTime > r) || (e && !D())); ) {
            var s = h.callback;
            if ('function' == typeof s) {
                (h.callback = null), (_ = h.priorityLevel);
                var l = s(h.expirationTime <= r);
                (r = n.unstable_now()), 'function' == typeof l ? (h.callback = l) : h === i(d) && a(d), I(r);
            } else a(d);
            h = i(d);
        }
        if (null !== h) var u = !0;
        else {
            var c = i(f);
            null !== c && M(T, c.startTime - r), (u = !1);
        }
        return u;
    } finally {
        (h = null), (_ = o), (m = !1);
    }
}
'undefined' != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
var A = !1,
    C = null,
    N = -1,
    R = 5,
    O = -1;
function D() {
    return !(n.unstable_now() - O < R);
}
function L() {
    if (null !== C) {
        var e = n.unstable_now();
        O = e;
        var r = !0;
        try {
            r = C(!0, e);
        } finally {
            r ? s() : ((A = !1), (C = null));
        }
    } else A = !1;
}
if ('function' == typeof b)
    s = function () {
        b(L);
    };
else if ('undefined' != typeof MessageChannel) {
    var x = new MessageChannel(),
        w = x.port2;
    (x.port1.onmessage = L),
        (s = function () {
            w.postMessage(null);
        });
} else
    s = function () {
        v(L, 0);
    };
function P(e) {
    (C = e), A || ((A = !0), s());
}
function M(e, r) {
    N = v(function () {
        e(n.unstable_now());
    }, r);
}
(n.unstable_IdlePriority = 5),
    (n.unstable_ImmediatePriority = 1),
    (n.unstable_LowPriority = 4),
    (n.unstable_NormalPriority = 3),
    (n.unstable_Profiling = null),
    (n.unstable_UserBlockingPriority = 2),
    (n.unstable_cancelCallback = function (e) {
        e.callback = null;
    }),
    (n.unstable_continueExecution = function () {
        g || m || ((g = !0), P(S));
    }),
    (n.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (R = 0 < e ? Math.floor(1000 / e) : 5);
    }),
    (n.unstable_getCurrentPriorityLevel = function () {
        return _;
    }),
    (n.unstable_getFirstCallbackNode = function () {
        return i(d);
    }),
    (n.unstable_next = function (e) {
        switch (_) {
            case 1:
            case 2:
            case 3:
                var n = 3;
                break;
            default:
                n = _;
        }
        var r = _;
        _ = n;
        try {
            return e();
        } finally {
            _ = r;
        }
    }),
    (n.unstable_pauseExecution = function () {}),
    (n.unstable_requestPaint = function () {}),
    (n.unstable_runWithPriority = function (e, n) {
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
        var r = _;
        _ = e;
        try {
            return n();
        } finally {
            _ = r;
        }
    }),
    (n.unstable_scheduleCallback = function (e, a, o) {
        var s = n.unstable_now();
        switch (((o = 'object' == typeof o && null !== o ? ('number' == typeof (o = o.delay) && 0 < o ? s + o : s) : s), e)) {
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
            (l = o + l),
            (e = {
                id: p++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: l,
                sortIndex: -1
            }),
            o > s ? ((e.sortIndex = o), r(f, e), null === i(d) && e === i(f) && (E ? (y(N), (N = -1)) : (E = !0), M(T, o - s))) : ((e.sortIndex = l), r(d, e), g || m || ((g = !0), P(S))),
            e
        );
    }),
    (n.unstable_shouldYield = D),
    (n.unstable_wrapCallback = function (e) {
        var n = _;
        return function () {
            var r = _;
            _ = n;
            try {
                return e.apply(this, arguments);
            } finally {
                _ = r;
            }
        };
    });
