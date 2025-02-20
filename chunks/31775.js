e.exports = u;
var r,
    i = n(54673),
    o = n(435210),
    a = n(465170),
    s = {};
function l(e, t, n) {
    var i;
    return (s[t] ? (i = s[t]) : ((i = r(t)), (s[t] = i)), 2 == arguments.length) ? e[i] : ((e[i] = n), n);
}
function c() {
    return 1;
}
function u(e) {
    if (!(this instanceof u)) return new u(e);
    'number' == typeof e && (e = { max: e }), e || (e = {});
    var t = l(this, 'max', e.max);
    (!t || 'number' != typeof t || t <= 0) && l(this, 'max', 1 / 0);
    var n = e.length || c;
    'function' != typeof n && (n = c), l(this, 'lengthCalculator', n), l(this, 'allowStale', e.stale || !1), l(this, 'maxAge', e.maxAge || 0), l(this, 'dispose', e.dispose), this.reset();
}
function d(e, t, n, r) {
    var i = n.value;
    p(e, i) && (h(e, n), l(e, 'allowStale') || (i = void 0)), i && t.call(r, i.value, i.key, e);
}
function f(e, t, n) {
    var r = l(e, 'cache').get(t);
    if (r) {
        var i = r.value;
        p(e, i) ? (h(e, r), l(e, 'allowStale') || (i = void 0)) : n && l(e, 'lruList').unshiftNode(r), i && (i = i.value);
    }
    return i;
}
function p(e, t) {
    if (!t || (!t.maxAge && !l(e, 'maxAge'))) return !1;
    var n = !1,
        r = Date.now() - t.now;
    return t.maxAge ? r > t.maxAge : l(e, 'maxAge') && r > l(e, 'maxAge');
}
function _(e) {
    if (l(e, 'length') > l(e, 'max'))
        for (var t = l(e, 'lruList').tail; l(e, 'length') > l(e, 'max') && null !== t; ) {
            var n = t.prev;
            h(e, t), (t = n);
        }
}
function h(e, t) {
    if (t) {
        var n = t.value;
        l(e, 'dispose') && l(e, 'dispose').call(this, n.key, n.value), l(e, 'length', l(e, 'length') - n.length), l(e, 'cache').delete(n.key), l(e, 'lruList').removeNode(t);
    }
}
function m(e, t, n, r, i) {
    (this.key = e), (this.value = t), (this.length = n), (this.now = r), (this.maxAge = i || 0);
}
(r =
    'function' == typeof Symbol
        ? function (e) {
              return Symbol.for(e);
          }
        : function (e) {
              return '_' + e;
          }),
    Object.defineProperty(u.prototype, 'max', {
        set: function (e) {
            (!e || 'number' != typeof e || e <= 0) && (e = 1 / 0), l(this, 'max', e), _(this);
        },
        get: function () {
            return l(this, 'max');
        },
        enumerable: !0
    }),
    Object.defineProperty(u.prototype, 'allowStale', {
        set: function (e) {
            l(this, 'allowStale', !!e);
        },
        get: function () {
            return l(this, 'allowStale');
        },
        enumerable: !0
    }),
    Object.defineProperty(u.prototype, 'maxAge', {
        set: function (e) {
            (!e || 'number' != typeof e || e < 0) && (e = 0), l(this, 'maxAge', e), _(this);
        },
        get: function () {
            return l(this, 'maxAge');
        },
        enumerable: !0
    }),
    Object.defineProperty(u.prototype, 'lengthCalculator', {
        set: function (e) {
            'function' != typeof e && (e = c),
                e !== l(this, 'lengthCalculator') &&
                    (l(this, 'lengthCalculator', e),
                    l(this, 'length', 0),
                    l(this, 'lruList').forEach(function (e) {
                        (e.length = l(this, 'lengthCalculator').call(this, e.value, e.key)), l(this, 'length', l(this, 'length') + e.length);
                    }, this)),
                _(this);
        },
        get: function () {
            return l(this, 'lengthCalculator');
        },
        enumerable: !0
    }),
    Object.defineProperty(u.prototype, 'length', {
        get: function () {
            return l(this, 'length');
        },
        enumerable: !0
    }),
    Object.defineProperty(u.prototype, 'itemCount', {
        get: function () {
            return l(this, 'lruList').length;
        },
        enumerable: !0
    }),
    (u.prototype.rforEach = function (e, t) {
        t = t || this;
        for (var n = l(this, 'lruList').tail; null !== n; ) {
            var r = n.prev;
            d(this, e, n, t), (n = r);
        }
    }),
    (u.prototype.forEach = function (e, t) {
        t = t || this;
        for (var n = l(this, 'lruList').head; null !== n; ) {
            var r = n.next;
            d(this, e, n, t), (n = r);
        }
    }),
    (u.prototype.keys = function () {
        return l(this, 'lruList')
            .toArray()
            .map(function (e) {
                return e.key;
            }, this);
    }),
    (u.prototype.values = function () {
        return l(this, 'lruList')
            .toArray()
            .map(function (e) {
                return e.value;
            }, this);
    }),
    (u.prototype.reset = function () {
        l(this, 'dispose') &&
            l(this, 'lruList') &&
            l(this, 'lruList').length &&
            l(this, 'lruList').forEach(function (e) {
                l(this, 'dispose').call(this, e.key, e.value);
            }, this),
            l(this, 'cache', new i()),
            l(this, 'lruList', new a()),
            l(this, 'length', 0);
    }),
    (u.prototype.dump = function () {
        return l(this, 'lruList')
            .map(function (e) {
                if (!p(this, e))
                    return {
                        k: e.key,
                        v: e.value,
                        e: e.now + (e.maxAge || 0)
                    };
            }, this)
            .toArray()
            .filter(function (e) {
                return e;
            });
    }),
    (u.prototype.dumpLru = function () {
        return l(this, 'lruList');
    }),
    (u.prototype.inspect = function (e, t) {
        var n = 'LRUCache {',
            r = !1;
        l(this, 'allowStale') && ((n += '\n  allowStale: true'), (r = !0));
        var i = l(this, 'max');
        i && i !== 1 / 0 && (r && (n += ','), (n += '\n  max: ' + o.inspect(i, t)), (r = !0));
        var a = l(this, 'maxAge');
        a && (r && (n += ','), (n += '\n  maxAge: ' + o.inspect(a, t)), (r = !0));
        var s = l(this, 'lengthCalculator');
        s && s !== c && (r && (n += ','), (n += '\n  length: ' + o.inspect(l(this, 'length'), t)), (r = !0));
        var u = !1;
        return (
            l(this, 'lruList').forEach(function (e) {
                u ? (n += ',\n  ') : (r && (n += ',\n'), (u = !0), (n += '\n  '));
                var i = o.inspect(e.key).split('\n').join('\n  '),
                    l = { value: e.value };
                e.maxAge !== a && (l.maxAge = e.maxAge), s !== c && (l.length = e.length), p(this, e) && (l.stale = !0), (l = o.inspect(l, t).split('\n').join('\n  ')), (n += i + ' => ' + l);
            }),
            (u || r) && (n += '\n'),
            (n += '}')
        );
    }),
    (u.prototype.set = function (e, t, n) {
        var r = (n = n || l(this, 'maxAge')) ? Date.now() : 0,
            i = l(this, 'lengthCalculator').call(this, t, e);
        if (l(this, 'cache').has(e)) {
            if (i > l(this, 'max')) return h(this, l(this, 'cache').get(e)), !1;
            var o = l(this, 'cache').get(e).value;
            return l(this, 'dispose') && l(this, 'dispose').call(this, e, o.value), (o.now = r), (o.maxAge = n), (o.value = t), l(this, 'length', l(this, 'length') + (i - o.length)), (o.length = i), this.get(e), _(this), !0;
        }
        var a = new m(e, t, i, r, n);
        return a.length > l(this, 'max') ? (l(this, 'dispose') && l(this, 'dispose').call(this, e, t), !1) : (l(this, 'length', l(this, 'length') + a.length), l(this, 'lruList').unshift(a), l(this, 'cache').set(e, l(this, 'lruList').head), _(this), !0);
    }),
    (u.prototype.has = function (e) {
        return !(!l(this, 'cache').has(e) || p(this, l(this, 'cache').get(e).value));
    }),
    (u.prototype.get = function (e) {
        return f(this, e, !0);
    }),
    (u.prototype.peek = function (e) {
        return f(this, e, !1);
    }),
    (u.prototype.pop = function () {
        var e = l(this, 'lruList').tail;
        return e ? (h(this, e), e.value) : null;
    }),
    (u.prototype.del = function (e) {
        h(this, l(this, 'cache').get(e));
    }),
    (u.prototype.load = function (e) {
        this.reset();
        for (var t = Date.now(), n = e.length - 1; n >= 0; n--) {
            var r = e[n],
                i = r.e || 0;
            if (0 === i) this.set(r.k, r.v);
            else {
                var o = i - t;
                o > 0 && this.set(r.k, r.v, o);
            }
        }
    }),
    (u.prototype.prune = function () {
        var e = this;
        l(this, 'cache').forEach(function (t, n) {
            f(e, n, !1);
        });
    });
