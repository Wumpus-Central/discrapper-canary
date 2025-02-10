var i = n(444675),
    r =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) n[t[i]] = Object.getOwnPropertyDescriptor(e, t[i]);
            return n;
        },
    a = /%[sdj%]/g;
(t.format = function (e) {
    if (!S(e)) {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(u(arguments[n]));
        return t.join(' ');
    }
    for (
        var n = 1,
            i = arguments,
            r = i.length,
            s = String(e).replace(a, function (e) {
                if ('%%' === e) return '%';
                if (n >= r) return e;
                switch (e) {
                    case '%s':
                        return String(i[n++]);
                    case '%d':
                        return Number(i[n++]);
                    case '%j':
                        try {
                            return JSON.stringify(i[n++]);
                        } catch (e) {
                            return '[Circular]';
                        }
                    default:
                        return e;
                }
            }),
            o = i[n];
        n < r;
        o = i[++n]
    )
        I(o) || !R(o) ? (s += ' ' + o) : (s += ' ' + u(o));
    return s;
}),
    (t.deprecate = function (e, n) {
        if (void 0 !== i && !0 === i.noDeprecation) return e;
        if (void 0 === i)
            return function () {
                return t.deprecate(e, n).apply(this, arguments);
            };
        var r = !1;
        return function () {
            if (!r) {
                if (i.throwDeprecation) throw Error(n);
                i.traceDeprecation ? console.trace(n) : console.error(n), (r = !0);
            }
            return e.apply(this, arguments);
        };
    });
var s = {},
    o = /^$/;
if (i.env.NODE_DEBUG) {
    var l = i.env.NODE_DEBUG;
    o = RegExp(
        '^' +
            (l = l
                .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
                .replace(/\*/g, '.*')
                .replace(/,/g, '$|^')
                .toUpperCase()) +
            '$',
        'i'
    );
}
function u(e, n) {
    var i = {
        seen: [],
        stylize: d
    };
    return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), y(n) ? (i.showHidden = n) : n && t._extend(i, n), N(i.showHidden) && (i.showHidden = !1), N(i.depth) && (i.depth = 2), N(i.colors) && (i.colors = !1), N(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = c), _(i, e, i.depth);
}
function c(e, t) {
    var n = u.styles[t];
    return n ? '\x1B[' + u.colors[n][0] + 'm' + e + '\x1B[' + u.colors[n][1] + 'm' : e;
}
function d(e, t) {
    return e;
}
function f(e) {
    var t = {};
    return (
        e.forEach(function (e, n) {
            t[e] = !0;
        }),
        t
    );
}
function _(e, n, i) {
    if (e.customInspect && n && L(n.inspect) && n.inspect !== t.inspect && !(n.constructor && n.constructor.prototype === n)) {
        var r,
            a = n.inspect(i, e);
        return S(a) || (a = _(e, a, i)), a;
    }
    var s = p(e, n);
    if (s) return s;
    var o = Object.keys(n),
        l = f(o);
    if ((e.showHidden && (o = Object.getOwnPropertyNames(n)), D(n) && (o.indexOf('message') >= 0 || o.indexOf('description') >= 0))) return h(n);
    if (0 === o.length) {
        if (L(n)) {
            var u = n.name ? ': ' + n.name : '';
            return e.stylize('[Function' + u + ']', 'special');
        }
        if (C(n)) return e.stylize(RegExp.prototype.toString.call(n), 'regexp');
        if (O(n)) return e.stylize(Date.prototype.toString.call(n), 'date');
        if (D(n)) return h(n);
    }
    var c = '',
        d = !1,
        y = ['{', '}'];
    return (v(n) && ((d = !0), (y = ['[', ']'])), L(n) && (c = ' [Function' + (n.name ? ': ' + n.name : '') + ']'), C(n) && (c = ' ' + RegExp.prototype.toString.call(n)), O(n) && (c = ' ' + Date.prototype.toUTCString.call(n)), D(n) && (c = ' ' + h(n)), 0 !== o.length || (d && 0 != n.length))
        ? i < 0
            ? C(n)
                ? e.stylize(RegExp.prototype.toString.call(n), 'regexp')
                : e.stylize('[Object]', 'special')
            : (e.seen.push(n),
              (r = d
                  ? m(e, n, i, l, o)
                  : o.map(function (t) {
                        return g(e, n, i, l, t, d);
                    })),
              e.seen.pop(),
              E(r, c, y))
        : y[0] + c + y[1];
}
function p(e, t) {
    if (N(t)) return e.stylize('undefined', 'undefined');
    if (S(t)) {
        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return e.stylize(n, 'string');
    }
    return b(t) ? e.stylize('' + t, 'number') : y(t) ? e.stylize('' + t, 'boolean') : I(t) ? e.stylize('null', 'null') : void 0;
}
function h(e) {
    return '[' + Error.prototype.toString.call(e) + ']';
}
function m(e, t, n, i, r) {
    for (var a = [], s = 0, o = t.length; s < o; ++s) U(t, String(s)) ? a.push(g(e, t, n, i, String(s), !0)) : a.push('');
    return (
        r.forEach(function (r) {
            r.match(/^\d+$/) || a.push(g(e, t, n, i, r, !0));
        }),
        a
    );
}
function g(e, t, n, i, r, a) {
    var s, o, l;
    if (
        ((l = Object.getOwnPropertyDescriptor(t, r) || { value: t[r] }).get ? (o = l.set ? e.stylize('[Getter/Setter]', 'special') : e.stylize('[Getter]', 'special')) : l.set && (o = e.stylize('[Setter]', 'special')),
        U(i, r) || (s = '[' + r + ']'),
        !o &&
            (0 > e.seen.indexOf(l.value)
                ? (o = I(n) ? _(e, l.value, null) : _(e, l.value, n - 1)).indexOf('\n') > -1 &&
                  (o = a
                      ? o
                            .split('\n')
                            .map(function (e) {
                                return '  ' + e;
                            })
                            .join('\n')
                            .slice(2)
                      : '\n' +
                        o
                            .split('\n')
                            .map(function (e) {
                                return '   ' + e;
                            })
                            .join('\n'))
                : (o = e.stylize('[Circular]', 'special'))),
        N(s))
    ) {
        if (a && r.match(/^\d+$/)) return o;
        (s = JSON.stringify('' + r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((s = s.slice(1, -1)), (s = e.stylize(s, 'name')))
            : ((s = s
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
              (s = e.stylize(s, 'string')));
    }
    return s + ': ' + o;
}
function E(e, t, n) {
    var i = 0;
    return e.reduce(function (e, t) {
        return i++, t.indexOf('\n') >= 0 && i++, e + t.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0) > 60
        ? n[0] + ('' === t ? '' : t + '\n ') + ' ' + e.join(',\n  ') + ' ' + n[1]
        : n[0] + t + ' ' + e.join(', ') + ' ' + n[1];
}
function v(e) {
    return Array.isArray(e);
}
function y(e) {
    return 'boolean' == typeof e;
}
function I(e) {
    return null === e;
}
function T(e) {
    return null == e;
}
function b(e) {
    return 'number' == typeof e;
}
function S(e) {
    return 'string' == typeof e;
}
function A(e) {
    return 'symbol' == typeof e;
}
function N(e) {
    return void 0 === e;
}
function C(e) {
    return R(e) && '[object RegExp]' === w(e);
}
function R(e) {
    return 'object' == typeof e && null !== e;
}
function O(e) {
    return R(e) && '[object Date]' === w(e);
}
function D(e) {
    return R(e) && ('[object Error]' === w(e) || e instanceof Error);
}
function L(e) {
    return 'function' == typeof e;
}
function x(e) {
    return null === e || 'boolean' == typeof e || 'number' == typeof e || 'string' == typeof e || 'symbol' == typeof e || void 0 === e;
}
function w(e) {
    return Object.prototype.toString.call(e);
}
function P(e) {
    return e < 10 ? '0' + e.toString(10) : e.toString(10);
}
(t.debuglog = function (e) {
    if (!s[(e = e.toUpperCase())]) {
        if (o.test(e)) {
            var n = i.pid;
            s[e] = function () {
                var i = t.format.apply(t, arguments);
                console.error('%s %d: %s', e, n, i);
            };
        } else s[e] = function () {};
    }
    return s[e];
}),
    (t.inspect = u),
    (u.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
    }),
    (u.styles = {
        special: 'cyan',
        number: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        date: 'magenta',
        regexp: 'red'
    }),
    (t.types = n(842406)),
    (t.isArray = v),
    (t.isBoolean = y),
    (t.isNull = I),
    (t.isNullOrUndefined = T),
    (t.isNumber = b),
    (t.isString = S),
    (t.isSymbol = A),
    (t.isUndefined = N),
    (t.isRegExp = C),
    (t.types.isRegExp = C),
    (t.isObject = R),
    (t.isDate = O),
    (t.types.isDate = O),
    (t.isError = D),
    (t.types.isNativeError = D),
    (t.isFunction = L),
    (t.isPrimitive = x),
    (t.isBuffer = n(102439));
var M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function k() {
    var e = new Date(),
        t = [P(e.getHours()), P(e.getMinutes()), P(e.getSeconds())].join(':');
    return [e.getDate(), M[e.getMonth()], t].join(' ');
}
function U(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
(t.log = function () {
    console.log('%s - %s', k(), t.format.apply(t, arguments));
}),
    (t.inherits = n(689118)),
    (t._extend = function (e, t) {
        if (!t || !R(t)) return e;
        for (var n = Object.keys(t), i = n.length; i--; ) e[n[i]] = t[n[i]];
        return e;
    });
var G = 'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
function B(e, t) {
    if (!e) {
        var n = Error('Promise was rejected with a falsy value');
        (n.reason = e), (e = n);
    }
    return t(e);
}
function Z(e) {
    if ('function' != typeof e) throw TypeError('The "original" argument must be of type Function');
    function t() {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
        var r = t.pop();
        if ('function' != typeof r) throw TypeError('The last argument must be of type Function');
        var a = this,
            s = function () {
                return r.apply(a, arguments);
            };
        e.apply(this, t).then(
            function (e) {
                i.nextTick(s.bind(null, null, e));
            },
            function (e) {
                i.nextTick(B.bind(null, e, s));
            }
        );
    }
    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, r(e)), t;
}
(t.promisify = function (e) {
    if ('function' != typeof e) throw TypeError('The "original" argument must be of type Function');
    if (G && e[G]) {
        var t = e[G];
        if ('function' != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
        return (
            Object.defineProperty(t, G, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }),
            t
        );
    }
    function t() {
        for (
            var t,
                n,
                i = new Promise(function (e, i) {
                    (t = e), (n = i);
                }),
                r = [],
                a = 0;
            a < arguments.length;
            a++
        )
            r.push(arguments[a]);
        r.push(function (e, i) {
            e ? n(e) : t(i);
        });
        try {
            e.apply(this, r);
        } catch (e) {
            n(e);
        }
        return i;
    }
    return (
        Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
        G &&
            Object.defineProperty(t, G, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }),
        Object.defineProperties(t, r(e))
    );
}),
    (t.promisify.custom = G),
    (t.callbackify = Z);
