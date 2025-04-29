var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })();
function o(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
var a = n(161796),
    s = n(512722),
    l = function (e) {
        return e;
    },
    c = (function () {
        function e() {
            o(this, e);
        }
        return (
            i(e, null, [
                {
                    key: 'create',
                    value: function (e) {
                        if (e.outputRange && 'string' == typeof e.outputRange[0]) return _(e);
                        var t = e.outputRange;
                        g('outputRange', t);
                        var n = e.inputRange;
                        g('inputRange', n), m(n), s(n.length === t.length, 'inputRange (' + n.length + ') and outputRange (' + t.length + ') must have the same length');
                        var r = e.easing || l,
                            i = 'extend';
                        void 0 !== e.extrapolateLeft ? (i = e.extrapolateLeft) : void 0 !== e.extrapolate && (i = e.extrapolate);
                        var o = 'extend';
                        return (
                            void 0 !== e.extrapolateRight ? (o = e.extrapolateRight) : void 0 !== e.extrapolate && (o = e.extrapolate),
                            function (e) {
                                s('number' == typeof e, 'Cannot interpolation an input which is not a number');
                                var a = h(e, n);
                                return u(e, n[a], n[a + 1], t[a], t[a + 1], r, i, o);
                            }
                        );
                    }
                }
            ]),
            e
        );
    })();
function u(e, t, n, r, i, o, a, s) {
    var l = e;
    if (l < t)
        if ('identity' === a) return l;
        else 'clamp' === a && (l = t);
    if (l > n)
        if ('identity' === s) return l;
        else 'clamp' === s && (l = n);
    return r === i ? r : t === n ? (e <= t ? r : i) : (t === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= t) : (l = (l - t) / (n - t)), (l = o(l)), r === -1 / 0 ? (l = -l) : i === 1 / 0 ? (l += r) : (l = l * (i - r) + r), l);
}
function d(e) {
    var t = a(e);
    return null === t ? e : 'rgba(' + ((4278190080 & (t = t || 0)) >>> 24) + ', ' + ((16711680 & t) >>> 16) + ', ' + ((65280 & t) >>> 8) + ', ' + (255 & t) / 255 + ')';
}
var f = /[0-9\.-]+/g;
function _(e) {
    var t = e.outputRange;
    s(t.length >= 2, 'Bad output range'), p((t = t.map(d)));
    var n = t[0].match(f).map(function () {
        return [];
    });
    t.forEach(function (e) {
        e.match(f).forEach(function (e, t) {
            n[t].push(+e);
        });
    });
    var i = t[0].match(f).map(function (t, i) {
            return c.create(r({}, e, { outputRange: n[i] }));
        }),
        o = /^rgb/.test(t[0]);
    return function (e) {
        var n = 0;
        return t[0].replace(f, function () {
            var t = i[n++](e);
            return String(o && n < 4 ? Math.round(t) : t);
        });
    };
}
function p(e) {
    for (var t = e[0].replace(f, ''), n = 1; n < e.length; ++n) s(t === e[n].replace(f, ''), 'invalid pattern ' + e[0] + ' and ' + e[n]);
}
function h(e, t) {
    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
    return n - 1;
}
function m(e) {
    s(e.length >= 2, 'inputRange must have at least 2 elements');
    for (var t = 1; t < e.length; ++t) s(e[t] >= e[t - 1], 'inputRange must be monotonically increasing ' + e);
}
function g(e, t) {
    s(t.length >= 2, e + ' must have at least 2 elements'), s(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + 'cannot be ]-infinity;+infinity[ ' + t);
}
e.exports = c;
