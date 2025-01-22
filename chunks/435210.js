var i = r(444675),
    a =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) r[n[i]] = Object.getOwnPropertyDescriptor(e, n[i]);
            return r;
        },
    o = /%[sdj%]/g;
(n.format = function (e) {
    if (!A(e)) {
        for (var n = [], r = 0; r < arguments.length; r++) n.push(c(arguments[r]));
        return n.join(' ');
    }
    for (
        var r = 1,
            i = arguments,
            a = i.length,
            s = String(e).replace(o, function (e) {
                if ('%%' === e) return '%';
                if (r >= a) return e;
                switch (e) {
                    case '%s':
                        return String(i[r++]);
                    case '%d':
                        return Number(i[r++]);
                    case '%j':
                        try {
                            return JSON.stringify(i[r++]);
                        } catch (e) {
                            return '[Circular]';
                        }
                    default:
                        return e;
                }
            }),
            l = i[r];
        r < a;
        l = i[++r]
    )
        I(l) || !O(l) ? (s += ' ' + l) : (s += ' ' + c(l));
    return s;
}),
    (n.deprecate = function (e, r) {
        if (void 0 !== i && !0 === i.noDeprecation) return e;
        if (void 0 === i)
            return function () {
                return n.deprecate(e, r).apply(this, arguments);
            };
        var a = !1;
        return function n() {
            if (!a) {
                if (i.throwDeprecation) throw Error(r);
                i.traceDeprecation ? console.trace(r) : console.error(r);
                a = !0;
            }
            return e.apply(this, arguments);
        };
    });
var s = {},
    l = /^$/;
if (i.env.NODE_DEBUG) {
    var u = i.env.NODE_DEBUG;
    l = RegExp(
        '^' +
            (u = u
                .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
                .replace(/\*/g, '.*')
                .replace(/,/g, '$|^')
                .toUpperCase()) +
            '$',
        'i'
    );
}
function c(e, r) {
    var i = {
        seen: [],
        stylize: f
    };
    return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), b(r) ? (i.showHidden = r) : r && n._extend(i, r), N(i.showHidden) && (i.showHidden = !1), N(i.depth) && (i.depth = 2), N(i.colors) && (i.colors = !1), N(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = d), h(i, e, i.depth);
}
function d(e, n) {
    var r = c.styles[n];
    return r ? '\x1B[' + c.colors[r][0] + 'm' + e + '\x1B[' + c.colors[r][1] + 'm' : e;
}
function f(e, n) {
    return e;
}
function p(e) {
    var n = {};
    return (
        e.forEach(function (e, r) {
            n[e] = !0;
        }),
        n
    );
}
function h(e, r, i) {
    if (e.customInspect && r && x(r.inspect) && r.inspect !== n.inspect && !(r.constructor && r.constructor.prototype === r)) {
        var a,
            o = r.inspect(i, e);
        return !A(o) && (o = h(e, o, i)), o;
    }
    var s = _(e, r);
    if (s) return s;
    var l = Object.keys(r),
        u = p(l);
    if ((e.showHidden && (l = Object.getOwnPropertyNames(r)), L(r) && (l.indexOf('message') >= 0 || l.indexOf('description') >= 0))) return m(r);
    if (0 === l.length) {
        if (x(r)) {
            var c = r.name ? ': ' + r.name : '';
            return e.stylize('[Function' + c + ']', 'special');
        }
        if (R(r)) return e.stylize(RegExp.prototype.toString.call(r), 'regexp');
        if (D(r)) return e.stylize(Date.prototype.toString.call(r), 'date');
        if (L(r)) return m(r);
    }
    var d = '',
        f = !1,
        b = ['{', '}'];
    if ((y(r) && ((f = !0), (b = ['[', ']'])), x(r) && (d = ' [Function' + (r.name ? ': ' + r.name : '') + ']'), R(r) && (d = ' ' + RegExp.prototype.toString.call(r)), D(r) && (d = ' ' + Date.prototype.toUTCString.call(r)), L(r) && (d = ' ' + m(r)), 0 === l.length && (!f || 0 == r.length))) return b[0] + d + b[1];
    if (i < 0) return R(r) ? e.stylize(RegExp.prototype.toString.call(r), 'regexp') : e.stylize('[Object]', 'special');
    return (
        e.seen.push(r),
        (a = f
            ? g(e, r, i, u, l)
            : l.map(function (n) {
                  return E(e, r, i, u, n, f);
              })),
        e.seen.pop(),
        v(a, d, b)
    );
}
function _(e, n) {
    if (N(n)) return e.stylize('undefined', 'undefined');
    if (A(n)) {
        var r = "'" + JSON.stringify(n).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return e.stylize(r, 'string');
    }
    return S(n) ? e.stylize('' + n, 'number') : b(n) ? e.stylize('' + n, 'boolean') : I(n) ? e.stylize('null', 'null') : void 0;
}
function m(e) {
    return '[' + Error.prototype.toString.call(e) + ']';
}
function g(e, n, r, i, a) {
    for (var o = [], s = 0, l = n.length; s < l; ++s) B(n, String(s)) ? o.push(E(e, n, r, i, String(s), !0)) : o.push('');
    return (
        a.forEach(function (a) {
            !a.match(/^\d+$/) && o.push(E(e, n, r, i, a, !0));
        }),
        o
    );
}
function E(e, n, r, i, a, o) {
    var s, l, u;
    if (
        ((u = Object.getOwnPropertyDescriptor(n, a) || { value: n[a] }).get ? (l = u.set ? e.stylize('[Getter/Setter]', 'special') : e.stylize('[Getter]', 'special')) : u.set && (l = e.stylize('[Setter]', 'special')),
        !B(i, a) && (s = '[' + a + ']'),
        !l &&
            (0 > e.seen.indexOf(u.value)
                ? (l = I(r) ? h(e, u.value, null) : h(e, u.value, r - 1)).indexOf('\n') > -1 &&
                  (l = o
                      ? l
                            .split('\n')
                            .map(function (e) {
                                return '  ' + e;
                            })
                            .join('\n')
                            .slice(2)
                      : '\n' +
                        l
                            .split('\n')
                            .map(function (e) {
                                return '   ' + e;
                            })
                            .join('\n'))
                : (l = e.stylize('[Circular]', 'special'))),
        N(s))
    ) {
        if (o && a.match(/^\d+$/)) return l;
        (s = JSON.stringify('' + a)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((s = s.slice(1, -1)), (s = e.stylize(s, 'name')))
            : ((s = s
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
              (s = e.stylize(s, 'string')));
    }
    return s + ': ' + l;
}
function v(e, n, r) {
    var i = 0;
    return e.reduce(function (e, n) {
        return i++, n.indexOf('\n') >= 0 && i++, e + n.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0) > 60
        ? r[0] + ('' === n ? '' : n + '\n ') + ' ' + e.join(',\n  ') + ' ' + r[1]
        : r[0] + n + ' ' + e.join(', ') + ' ' + r[1];
}
function y(e) {
    return Array.isArray(e);
}
function b(e) {
    return 'boolean' == typeof e;
}
function I(e) {
    return null === e;
}
function T(e) {
    return null == e;
}
function S(e) {
    return 'number' == typeof e;
}
function A(e) {
    return 'string' == typeof e;
}
function C(e) {
    return 'symbol' == typeof e;
}
function N(e) {
    return void 0 === e;
}
function R(e) {
    return O(e) && '[object RegExp]' === P(e);
}
function O(e) {
    return 'object' == typeof e && null !== e;
}
function D(e) {
    return O(e) && '[object Date]' === P(e);
}
function L(e) {
    return O(e) && ('[object Error]' === P(e) || e instanceof Error);
}
function x(e) {
    return 'function' == typeof e;
}
function w(e) {
    return null === e || 'boolean' == typeof e || 'number' == typeof e || 'string' == typeof e || 'symbol' == typeof e || void 0 === e;
}
function P(e) {
    return Object.prototype.toString.call(e);
}
function M(e) {
    return e < 10 ? '0' + e.toString(10) : e.toString(10);
}
(n.debuglog = function (e) {
    if (!s[(e = e.toUpperCase())]) {
        if (l.test(e)) {
            var r = i.pid;
            s[e] = function () {
                var i = n.format.apply(n, arguments);
                console.error('%s %d: %s', e, r, i);
            };
        } else s[e] = function () {};
    }
    return s[e];
}),
    (n.inspect = c),
    (c.colors = {
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
    (c.styles = {
        special: 'cyan',
        number: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        date: 'magenta',
        regexp: 'red'
    }),
    (n.types = r(842406)),
    (n.isArray = y),
    (n.isBoolean = b),
    (n.isNull = I),
    (n.isNullOrUndefined = T),
    (n.isNumber = S),
    (n.isString = A),
    (n.isSymbol = C),
    (n.isUndefined = N),
    (n.isRegExp = R),
    (n.types.isRegExp = R),
    (n.isObject = O),
    (n.isDate = D),
    (n.types.isDate = D),
    (n.isError = L),
    (n.types.isNativeError = L),
    (n.isFunction = x),
    (n.isPrimitive = w),
    (n.isBuffer = r(102439));
var k = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function U() {
    var e = new Date(),
        n = [M(e.getHours()), M(e.getMinutes()), M(e.getSeconds())].join(':');
    return [e.getDate(), k[e.getMonth()], n].join(' ');
}
function B(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
}
(n.log = function () {
    console.log('%s - %s', U(), n.format.apply(n, arguments));
}),
    (n.inherits = r(689118)),
    (n._extend = function (e, n) {
        if (!n || !O(n)) return e;
        for (var r = Object.keys(n), i = r.length; i--; ) e[r[i]] = n[r[i]];
        return e;
    });
var G = 'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
function Z(e, n) {
    if (!e) {
        var r = Error('Promise was rejected with a falsy value');
        (r.reason = e), (e = r);
    }
    return n(e);
}
function F(e) {
    if ('function' != typeof e) throw TypeError('The "original" argument must be of type Function');
    function n() {
        for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
        var a = n.pop();
        if ('function' != typeof a) throw TypeError('The last argument must be of type Function');
        var o = this,
            s = function () {
                return a.apply(o, arguments);
            };
        e.apply(this, n).then(
            function (e) {
                i.nextTick(s.bind(null, null, e));
            },
            function (e) {
                i.nextTick(Z.bind(null, e, s));
            }
        );
    }
    return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), Object.defineProperties(n, a(e)), n;
}
(n.promisify = function (e) {
    if ('function' != typeof e) throw TypeError('The "original" argument must be of type Function');
    if (G && e[G]) {
        var n = e[G];
        if ('function' != typeof n) throw TypeError('The "util.promisify.custom" argument must be of type Function');
        return (
            Object.defineProperty(n, G, {
                value: n,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }),
            n
        );
    }
    function n() {
        for (
            var n,
                r,
                i = new Promise(function (e, i) {
                    (n = e), (r = i);
                }),
                a = [],
                o = 0;
            o < arguments.length;
            o++
        )
            a.push(arguments[o]);
        a.push(function (e, i) {
            e ? r(e) : n(i);
        });
        try {
            e.apply(this, a);
        } catch (e) {
            r(e);
        }
        return i;
    }
    return (
        Object.setPrototypeOf(n, Object.getPrototypeOf(e)),
        G &&
            Object.defineProperty(n, G, {
                value: n,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }),
        Object.defineProperties(n, a(e))
    );
}),
    (n.promisify.custom = G),
    (n.callbackify = F);
