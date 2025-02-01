function t(e, t) {
    var i = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!i) {
        if (Array.isArray(e) || (i = n(e)) || (t && e && 'number' == typeof e.length)) {
            i && (e = i);
            var r = 0,
                a = function () {};
            return {
                s: a,
                n: function () {
                    return r >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[r++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: a
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var s,
        o = !0,
        l = !1;
    return {
        s: function () {
            i = i.call(e);
        },
        n: function () {
            var e = i.next();
            return (o = e.done), e;
        },
        e: function (e) {
            (l = !0), (s = e);
        },
        f: function () {
            try {
                o || null == i.return || i.return();
            } finally {
                if (l) throw s;
            }
        }
    };
}
function n(e, t) {
    if (e) {
        if ('string' == typeof e) return i(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
    }
}
function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function r() {
    this._defaults = [];
}
for (var a = 0, s = ['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts']; a < s.length; a++) {
    let e = s[a];
    r.prototype[e] = function () {
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return (
            this._defaults.push({
                fn: e,
                args: n
            }),
            this
        );
    };
}
(r.prototype._setDefaults = function (e) {
    var n,
        i = t(this._defaults);
    try {
        for (i.s(); !(n = i.n()).done; ) {
            let t = n.value;
            e[t.fn](...t.args);
        }
    } catch (e) {
        i.e(e);
    } finally {
        i.f();
    }
}),
    (e.exports = r);
