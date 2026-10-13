e.exports = d;
var a,
    r = t(416228),
    s = t(41835),
    i = t(971882),
    u = {};
function l(e, n, t) {
    var r;
    return (u[n] ? (r = u[n]) : ((r = a(n)), (u[n] = r)), 2 == arguments.length) ? e[r] : ((e[r] = t), t);
}
function o() {
    return 1;
}
function d(e) {
    if (!(this instanceof d)) return new d(e);
    ("number" == typeof e && (e = { max: e }), e || (e = {}));
    var n = l(this, "max", e.max);
    (!n || "number" != typeof n || n <= 0) && l(this, "max", 1 / 0);
    var t = e.length || o;
    ("function" != typeof t && (t = o),
        l(this, "lengthCalculator", t),
        l(this, "allowStale", e.stale || !1),
        l(this, "maxAge", e.maxAge || 0),
        l(this, "dispose", e.dispose),
        this.reset());
}
function c(e, n, t, a) {
    var r = t.value;
    (y(e, r) && (f(e, t), l(e, "allowStale") || (r = void 0)), r && n.call(a, r.value, r.key, e));
}
function _(e, n, t) {
    var a = l(e, "cache").get(n);
    if (a) {
        var r = a.value;
        (y(e, r) ? (f(e, a), l(e, "allowStale") || (r = void 0)) : t && l(e, "lruList").unshiftNode(a),
            r && (r = r.value));
    }
    return r;
}
function y(e, n) {
    if (!n || (!n.maxAge && !l(e, "maxAge"))) return !1;
    var t = Date.now() - n.now;
    return n.maxAge ? t > n.maxAge : l(e, "maxAge") && t > l(e, "maxAge");
}
function h(e) {
    if (l(e, "length") > l(e, "max"))
        for (var n = l(e, "lruList").tail; l(e, "length") > l(e, "max") && null !== n;) {
            var t = n.prev;
            (f(e, n), (n = t));
        }
}
function f(e, n) {
    if (n) {
        var t = n.value;
        (l(e, "dispose") && l(e, "dispose").call(this, t.key, t.value),
            l(e, "length", l(e, "length") - t.length),
            l(e, "cache").delete(t.key),
            l(e, "lruList").removeNode(n));
    }
}
function m(e, n, t, a, r) {
    ((this.key = e), (this.value = n), (this.length = t), (this.now = a), (this.maxAge = r || 0));
}
((a =
    "function" == typeof Symbol
        ? function (e) {
              return Symbol.for(e);
          }
        : function (e) {
              return "_" + e;
          }),
    Object.defineProperty(d.prototype, "max", {
        set: function (e) {
            ((!e || "number" != typeof e || e <= 0) && (e = 1 / 0), l(this, "max", e), h(this));
        },
        get: function () {
            return l(this, "max");
        },
        enumerable: !0,
    }),
    Object.defineProperty(d.prototype, "allowStale", {
        set: function (e) {
            l(this, "allowStale", !!e);
        },
        get: function () {
            return l(this, "allowStale");
        },
        enumerable: !0,
    }),
    Object.defineProperty(d.prototype, "maxAge", {
        set: function (e) {
            ((!e || "number" != typeof e || e < 0) && (e = 0), l(this, "maxAge", e), h(this));
        },
        get: function () {
            return l(this, "maxAge");
        },
        enumerable: !0,
    }),
    Object.defineProperty(d.prototype, "lengthCalculator", {
        set: function (e) {
            ("function" != typeof e && (e = o),
                e !== l(this, "lengthCalculator") &&
                    (l(this, "lengthCalculator", e),
                    l(this, "length", 0),
                    l(this, "lruList").forEach(function (e) {
                        ((e.length = l(this, "lengthCalculator").call(this, e.value, e.key)),
                            l(this, "length", l(this, "length") + e.length));
                    }, this)),
                h(this));
        },
        get: function () {
            return l(this, "lengthCalculator");
        },
        enumerable: !0,
    }),
    Object.defineProperty(d.prototype, "length", {
        get: function () {
            return l(this, "length");
        },
        enumerable: !0,
    }),
    Object.defineProperty(d.prototype, "itemCount", {
        get: function () {
            return l(this, "lruList").length;
        },
        enumerable: !0,
    }),
    (d.prototype.rforEach = function (e, n) {
        n = n || this;
        for (var t = l(this, "lruList").tail; null !== t;) {
            var a = t.prev;
            (c(this, e, t, n), (t = a));
        }
    }),
    (d.prototype.forEach = function (e, n) {
        n = n || this;
        for (var t = l(this, "lruList").head; null !== t;) {
            var a = t.next;
            (c(this, e, t, n), (t = a));
        }
    }),
    (d.prototype.keys = function () {
        return l(this, "lruList")
            .toArray()
            .map(function (e) {
                return e.key;
            }, this);
    }),
    (d.prototype.values = function () {
        return l(this, "lruList")
            .toArray()
            .map(function (e) {
                return e.value;
            }, this);
    }),
    (d.prototype.reset = function () {
        (l(this, "dispose") &&
            l(this, "lruList") &&
            l(this, "lruList").length &&
            l(this, "lruList").forEach(function (e) {
                l(this, "dispose").call(this, e.key, e.value);
            }, this),
            l(this, "cache", new r()),
            l(this, "lruList", new i()),
            l(this, "length", 0));
    }),
    (d.prototype.dump = function () {
        return l(this, "lruList")
            .map(function (e) {
                if (!y(this, e)) return { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) };
            }, this)
            .toArray()
            .filter(function (e) {
                return e;
            });
    }),
    (d.prototype.dumpLru = function () {
        return l(this, "lruList");
    }),
    (d.prototype.inspect = function (e, n) {
        var t = "LRUCache {",
            a = !1;
        l(this, "allowStale") && ((t += "\n  allowStale: true"), (a = !0));
        var r = l(this, "max");
        r && r !== 1 / 0 && (a && (t += ","), (t += "\n  max: " + s.inspect(r, n)), (a = !0));
        var i = l(this, "maxAge");
        i && (a && (t += ","), (t += "\n  maxAge: " + s.inspect(i, n)), (a = !0));
        var u = l(this, "lengthCalculator");
        u && u !== o && (a && (t += ","), (t += "\n  length: " + s.inspect(l(this, "length"), n)), (a = !0));
        var d = !1;
        return (
            l(this, "lruList").forEach(function (e) {
                d ? (t += ",\n  ") : (a && (t += ",\n"), (d = !0), (t += "\n  "));
                var r = s.inspect(e.key).split("\n").join("\n  "),
                    l = { value: e.value };
                (e.maxAge !== i && (l.maxAge = e.maxAge),
                    u !== o && (l.length = e.length),
                    y(this, e) && (l.stale = !0),
                    (l = s.inspect(l, n).split("\n").join("\n  ")),
                    (t += r + " => " + l));
            }),
            (d || a) && (t += "\n"),
            (t += "}")
        );
    }),
    (d.prototype.set = function (e, n, t) {
        var a = (t = t || l(this, "maxAge")) ? Date.now() : 0,
            r = l(this, "lengthCalculator").call(this, n, e);
        if (l(this, "cache").has(e)) {
            if (r > l(this, "max")) return (f(this, l(this, "cache").get(e)), !1);
            var s = l(this, "cache").get(e).value;
            return (
                l(this, "dispose") && l(this, "dispose").call(this, e, s.value),
                (s.now = a),
                (s.maxAge = t),
                (s.value = n),
                l(this, "length", l(this, "length") + (r - s.length)),
                (s.length = r),
                this.get(e),
                h(this),
                !0
            );
        }
        var i = new m(e, n, r, a, t);
        return i.length > l(this, "max")
            ? (l(this, "dispose") && l(this, "dispose").call(this, e, n), !1)
            : (l(this, "length", l(this, "length") + i.length),
              l(this, "lruList").unshift(i),
              l(this, "cache").set(e, l(this, "lruList").head),
              h(this),
              !0);
    }),
    (d.prototype.has = function (e) {
        return !(!l(this, "cache").has(e) || y(this, l(this, "cache").get(e).value));
    }),
    (d.prototype.get = function (e) {
        return _(this, e, !0);
    }),
    (d.prototype.peek = function (e) {
        return _(this, e, !1);
    }),
    (d.prototype.pop = function () {
        var e = l(this, "lruList").tail;
        return e ? (f(this, e), e.value) : null;
    }),
    (d.prototype.del = function (e) {
        f(this, l(this, "cache").get(e));
    }),
    (d.prototype.load = function (e) {
        this.reset();
        for (var n = Date.now(), t = e.length - 1; t >= 0; t--) {
            var a = e[t],
                r = a.e || 0;
            if (0 === r) this.set(a.k, a.v);
            else {
                var s = r - n;
                s > 0 && this.set(a.k, a.v, s);
            }
        }
    }),
    (d.prototype.prune = function () {
        var e = this;
        l(this, "cache").forEach(function (n, t) {
            _(e, t, !1);
        });
    }));
