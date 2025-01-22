e.exports = d;
var i,
    a = r(54673),
    o = r(435210),
    s = r(465170),
    l = {};
function u(e, n, r) {
    var a;
    return (l[n] ? (a = l[n]) : ((a = i(n)), (l[n] = a)), 2 == arguments.length) ? e[a] : ((e[a] = r), r);
}
function c() {
    return 1;
}
function d(e) {
    if (!(this instanceof d)) return new d(e);
    'number' == typeof e && (e = { max: e }), !e && (e = {});
    var n = u(this, 'max', e.max);
    (!n || 'number' != typeof n || n <= 0) && u(this, 'max', 1 / 0);
    var r = e.length || c;
    'function' != typeof r && (r = c), u(this, 'lengthCalculator', r), u(this, 'allowStale', e.stale || !1), u(this, 'maxAge', e.maxAge || 0), u(this, 'dispose', e.dispose), this.reset();
}
function f(e, n, r, i) {
    var a = r.value;
    h(e, a) && (m(e, r), !u(e, 'allowStale') && (a = void 0)), a && n.call(i, a.value, a.key, e);
}
function p(e, n, r) {
    var i = u(e, 'cache').get(n);
    if (i) {
        var a = i.value;
        h(e, a) ? (m(e, i), !u(e, 'allowStale') && (a = void 0)) : r && u(e, 'lruList').unshiftNode(i), a && (a = a.value);
    }
    return a;
}
function h(e, n) {
    if (!n || (!n.maxAge && !u(e, 'maxAge'))) return !1;
    var r = !1,
        i = Date.now() - n.now;
    return (r = n.maxAge ? i > n.maxAge : u(e, 'maxAge') && i > u(e, 'maxAge'));
}
function _(e) {
    if (u(e, 'length') > u(e, 'max'))
        for (var n = u(e, 'lruList').tail; u(e, 'length') > u(e, 'max') && null !== n; ) {
            var r = n.prev;
            m(e, n), (n = r);
        }
}
function m(e, n) {
    if (n) {
        var r = n.value;
        u(e, 'dispose') && u(e, 'dispose').call(this, r.key, r.value), u(e, 'length', u(e, 'length') - r.length), u(e, 'cache').delete(r.key), u(e, 'lruList').removeNode(n);
    }
}
function g(e, n, r, i, a) {
    (this.key = e), (this.value = n), (this.length = r), (this.now = i), (this.maxAge = a || 0);
}
(i =
    'function' == typeof Symbol
        ? function (e) {
              return Symbol.for(e);
          }
        : function (e) {
              return '_' + e;
          }),
    Object.defineProperty(d.prototype, 'max', {
        set: function (e) {
            (!e || 'number' != typeof e || e <= 0) && (e = 1 / 0), u(this, 'max', e), _(this);
        },
        get: function () {
            return u(this, 'max');
        },
        enumerable: !0
    }),
    Object.defineProperty(d.prototype, 'allowStale', {
        set: function (e) {
            u(this, 'allowStale', !!e);
        },
        get: function () {
            return u(this, 'allowStale');
        },
        enumerable: !0
    }),
    Object.defineProperty(d.prototype, 'maxAge', {
        set: function (e) {
            (!e || 'number' != typeof e || e < 0) && (e = 0), u(this, 'maxAge', e), _(this);
        },
        get: function () {
            return u(this, 'maxAge');
        },
        enumerable: !0
    }),
    Object.defineProperty(d.prototype, 'lengthCalculator', {
        set: function (e) {
            'function' != typeof e && (e = c),
                e !== u(this, 'lengthCalculator') &&
                    (u(this, 'lengthCalculator', e),
                    u(this, 'length', 0),
                    u(this, 'lruList').forEach(function (e) {
                        (e.length = u(this, 'lengthCalculator').call(this, e.value, e.key)), u(this, 'length', u(this, 'length') + e.length);
                    }, this)),
                _(this);
        },
        get: function () {
            return u(this, 'lengthCalculator');
        },
        enumerable: !0
    }),
    Object.defineProperty(d.prototype, 'length', {
        get: function () {
            return u(this, 'length');
        },
        enumerable: !0
    }),
    Object.defineProperty(d.prototype, 'itemCount', {
        get: function () {
            return u(this, 'lruList').length;
        },
        enumerable: !0
    }),
    (d.prototype.rforEach = function (e, n) {
        n = n || this;
        for (var r = u(this, 'lruList').tail; null !== r; ) {
            var i = r.prev;
            f(this, e, r, n), (r = i);
        }
    }),
    (d.prototype.forEach = function (e, n) {
        n = n || this;
        for (var r = u(this, 'lruList').head; null !== r; ) {
            var i = r.next;
            f(this, e, r, n), (r = i);
        }
    }),
    (d.prototype.keys = function () {
        return u(this, 'lruList')
            .toArray()
            .map(function (e) {
                return e.key;
            }, this);
    }),
    (d.prototype.values = function () {
        return u(this, 'lruList')
            .toArray()
            .map(function (e) {
                return e.value;
            }, this);
    }),
    (d.prototype.reset = function () {
        u(this, 'dispose') &&
            u(this, 'lruList') &&
            u(this, 'lruList').length &&
            u(this, 'lruList').forEach(function (e) {
                u(this, 'dispose').call(this, e.key, e.value);
            }, this),
            u(this, 'cache', new a()),
            u(this, 'lruList', new s()),
            u(this, 'length', 0);
    }),
    (d.prototype.dump = function () {
        return u(this, 'lruList')
            .map(function (e) {
                if (!h(this, e))
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
    (d.prototype.dumpLru = function () {
        return u(this, 'lruList');
    }),
    (d.prototype.inspect = function (e, n) {
        var r = 'LRUCache {',
            i = !1;
        u(this, 'allowStale') && ((r += '\n  allowStale: true'), (i = !0));
        var a = u(this, 'max');
        a && a !== 1 / 0 && (i && (r += ','), (r += '\n  max: ' + o.inspect(a, n)), (i = !0));
        var s = u(this, 'maxAge');
        s && (i && (r += ','), (r += '\n  maxAge: ' + o.inspect(s, n)), (i = !0));
        var l = u(this, 'lengthCalculator');
        l && l !== c && (i && (r += ','), (r += '\n  length: ' + o.inspect(u(this, 'length'), n)), (i = !0));
        var d = !1;
        return (
            u(this, 'lruList').forEach(function (e) {
                d ? (r += ',\n  ') : (i && (r += ',\n'), (d = !0), (r += '\n  '));
                var a = o.inspect(e.key).split('\n').join('\n  '),
                    u = { value: e.value };
                e.maxAge !== s && (u.maxAge = e.maxAge), l !== c && (u.length = e.length), h(this, e) && (u.stale = !0), (u = o.inspect(u, n).split('\n').join('\n  ')), (r += a + ' => ' + u);
            }),
            (d || i) && (r += '\n'),
            (r += '}')
        );
    }),
    (d.prototype.set = function (e, n, r) {
        var i = (r = r || u(this, 'maxAge')) ? Date.now() : 0,
            a = u(this, 'lengthCalculator').call(this, n, e);
        if (u(this, 'cache').has(e)) {
            if (a > u(this, 'max')) return m(this, u(this, 'cache').get(e)), !1;
            var o = u(this, 'cache').get(e).value;
            return u(this, 'dispose') && u(this, 'dispose').call(this, e, o.value), (o.now = i), (o.maxAge = r), (o.value = n), u(this, 'length', u(this, 'length') + (a - o.length)), (o.length = a), this.get(e), _(this), !0;
        }
        var s = new g(e, n, a, i, r);
        return s.length > u(this, 'max') ? (u(this, 'dispose') && u(this, 'dispose').call(this, e, n), !1) : (u(this, 'length', u(this, 'length') + s.length), u(this, 'lruList').unshift(s), u(this, 'cache').set(e, u(this, 'lruList').head), _(this), !0);
    }),
    (d.prototype.has = function (e) {
        return !(!u(this, 'cache').has(e) || h(this, u(this, 'cache').get(e).value)) && !0;
    }),
    (d.prototype.get = function (e) {
        return p(this, e, !0);
    }),
    (d.prototype.peek = function (e) {
        return p(this, e, !1);
    }),
    (d.prototype.pop = function () {
        var e = u(this, 'lruList').tail;
        return e ? (m(this, e), e.value) : null;
    }),
    (d.prototype.del = function (e) {
        m(this, u(this, 'cache').get(e));
    }),
    (d.prototype.load = function (e) {
        this.reset();
        for (var n = Date.now(), r = e.length - 1; r >= 0; r--) {
            var i = e[r],
                a = i.e || 0;
            if (0 === a) this.set(i.k, i.v);
            else {
                var o = a - n;
                o > 0 && this.set(i.k, i.v, o);
            }
        }
    }),
    (d.prototype.prune = function () {
        var e = this;
        u(this, 'cache').forEach(function (n, r) {
            p(e, r, !1);
        });
    });
