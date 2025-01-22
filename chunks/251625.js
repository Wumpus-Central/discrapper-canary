r.d(n, {
    EF: function () {
        return s;
    },
    Ti: function () {
        return c;
    },
    ad: function () {
        return u;
    },
    ld: function () {
        return d;
    },
    oH: function () {
        return l;
    }
});
var i = r(653041);
var a = r(177593);
var o = r(47120);
function s(e, n) {
    if (e === n) return !0;
    if (null == e || null == n || e.length !== n.length) return !1;
    let r = e.length;
    for (let i = 0; i < r; i++) if (e[i] !== n[i]) return !1;
    return !0;
}
function l(e) {
    let n = null,
        r = null;
    return function () {
        for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return !s(n, a) && (r = e(...a)), (n = a), r;
    };
}
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5000,
        r = -1,
        i = null;
    return () => ((null == i || Date.now() >= r) && ((r = Date.now() + n), (i = e())), i);
}
function c(e) {
    for (var n in e) e.hasOwnProperty(n) && delete e[n];
}
function d(e) {
    for (let n in e) return !1;
    return !0;
}
