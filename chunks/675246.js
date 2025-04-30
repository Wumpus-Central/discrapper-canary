function t(e, t) {
    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!r) {
        if (Array.isArray(e) || (r = n(e)) || (t && e && 'number' == typeof e.length)) {
            r && (e = r);
            var i = 0,
                o = function () {};
            return {
                s: o,
                n: function () {
                    return i >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[i++]
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
    var a,
        s = !0,
        l = !1;
    return {
        s: function () {
            r = r.call(e);
        },
        n: function () {
            var e = r.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (l = !0), (a = e);
        },
        f: function () {
            try {
                s || null == r.return || r.return();
            } finally {
                if (l) throw a;
            }
        }
    };
}
function n(e, t) {
    if (e) {
        if ('string' == typeof e) return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
    }
}
function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function i() {
    this._defaults = [];
}
for (var o = 0, a = ['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts']; o < a.length; o++) {
    let e = a[o];
    i.prototype[e] = function () {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (
            this._defaults.push({
                fn: e,
                args: n
            }),
            this
        );
    };
}
(i.prototype._setDefaults = function (e) {
    var n,
        r = t(this._defaults);
    try {
        for (r.s(); !(n = r.n()).done; ) {
            let t = n.value;
            e[t.fn](...t.args);
        }
    } catch (e) {
        r.e(e);
    } finally {
        r.f();
    }
}),
    (e.exports = i);
