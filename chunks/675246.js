function n(e, n) {
    var i = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!i) {
        if (Array.isArray(e) || (i = r(e)) || (n && e && 'number' == typeof e.length)) {
            i && (e = i);
            var a = 0,
                o = function () {};
            return {
                s: o,
                n: function () {
                    return a >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[a++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: o
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var s,
        l = !0,
        u = !1;
    return {
        s: function () {
            i = i.call(e);
        },
        n: function () {
            var e = i.next();
            return (l = e.done), e;
        },
        e: function (e) {
            (u = !0), (s = e);
        },
        f: function () {
            try {
                !l && null != i.return && i.return();
            } finally {
                if (u) throw s;
            }
        }
    };
}
function r(e, n) {
    if (e) {
        if ('string' == typeof e) return i(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, n);
    }
}
function i(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function a() {
    this._defaults = [];
}
for (var o = 0, s = ['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts']; o < s.length; o++) {
    let e = s[o];
    a.prototype[e] = function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return (
            this._defaults.push({
                fn: e,
                args: r
            }),
            this
        );
    };
}
(a.prototype._setDefaults = function (e) {
    var r,
        i = n(this._defaults);
    try {
        for (i.s(); !(r = i.n()).done; ) {
            let n = r.value;
            e[n.fn](...n.args);
        }
    } catch (e) {
        i.e(e);
    } finally {
        i.f();
    }
}),
    (e.exports = a);
