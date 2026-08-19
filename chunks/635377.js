e.exports = c;
var n,
    o = r(416228),
    i = r(41835),
    a = r(971882),
    s = {};
function l(e, t, r) {
    var o;
    return (s[t] ? (o = s[t]) : ((o = n(t)), (s[t] = o)), 2 == arguments.length) ? e[o] : ((e[o] = r), r);
}
function u() {
    return 1;
}
function c(e) {
    if (!(this instanceof c)) return new c(e);
    "number" == typeof e && (e = { max: e }), e || (e = {});
    var t = l(this, "max", e.max);
    (!t || "number" != typeof t || t <= 0) && l(this, "max", 1 / 0);
    var r = e.length || u;
    "function" != typeof r && (r = u),
        l(this, "lengthCalculator", r),
        l(this, "allowStale", e.stale || !1),
        l(this, "maxAge", e.maxAge || 0),
        l(this, "dispose", e.dispose),
        this.reset();
}
function f(e, t, r, n) {
    var o = r.value;
    d(e, o) && (m(e, r), l(e, "allowStale") || (o = void 0)), o && t.call(n, o.value, o.key, e);
}
function p(e, t, r) {
    var n = l(e, "cache").get(t);
    if (n) {
        var o = n.value;
        d(e, o) ? (m(e, n), l(e, "allowStale") || (o = void 0)) : r && l(e, "lruList").unshiftNode(n),
            o && (o = o.value);
    }
    return o;
}
function d(e, t) {
    if (!t || (!t.maxAge && !l(e, "maxAge"))) return !1;
    var r = Date.now() - t.now;
    return t.maxAge ? r > t.maxAge : l(e, "maxAge") && r > l(e, "maxAge");
}
function h(e) {
    if (l(e, "length") > l(e, "max"))
        for (var t = l(e, "lruList").tail; l(e, "length") > l(e, "max") && null !== t; ) {
            var r = t.prev;
            m(e, t), (t = r);
        }
}
function m(e, t) {
    if (t) {
        var r = t.value;
        l(e, "dispose") && l(e, "dispose").call(this, r.key, r.value),
            l(e, "length", l(e, "length") - r.length),
            l(e, "cache").delete(r.key),
            l(e, "lruList").removeNode(t);
    }
}
function v(e, t, r, n, o) {
    (this.key = e), (this.value = t), (this.length = r), (this.now = n), (this.maxAge = o || 0);
}
(n =
    "function" == typeof Symbol
        ? function (e) {
              return Symbol.for(e);
          }
        : function (e) {
              return "_" + e;
          }),
    Object.defineProperty(c.prototype, "max", {
        set: function (e) {
            (!e || "number" != typeof e || e <= 0) && (e = 1 / 0), l(this, "max", e), h(this);
        },
        get: function () {
            return l(this, "max");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "allowStale", {
        set: function (e) {
            l(this, "allowStale", !!e);
        },
        get: function () {
            return l(this, "allowStale");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "maxAge", {
        set: function (e) {
            (!e || "number" != typeof e || e < 0) && (e = 0), l(this, "maxAge", e), h(this);
        },
        get: function () {
            return l(this, "maxAge");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "lengthCalculator", {
        set: function (e) {
            "function" != typeof e && (e = u),
                e !== l(this, "lengthCalculator") &&
                    (l(this, "lengthCalculator", e),
                    l(this, "length", 0),
                    l(this, "lruList").forEach(function (e) {
                        (e.length = l(this, "lengthCalculator").call(this, e.value, e.key)),
                            l(this, "length", l(this, "length") + e.length);
                    }, this)),
                h(this);
        },
        get: function () {
            return l(this, "lengthCalculator");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "length", {
        get: function () {
            return l(this, "length");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "itemCount", {
        get: function () {
            return l(this, "lruList").length;
        },
        enumerable: !0,
    }),
    (c.prototype.rforEach = function (e, t) {
        t = t || this;
        for (var r = l(this, "lruList").tail; null !== r; ) {
            var n = r.prev;
            f(this, e, r, t), (r = n);
        }
    }),
    (c.prototype.forEach = function (e, t) {
        t = t || this;
        for (var r = l(this, "lruList").head; null !== r; ) {
            var n = r.next;
            f(this, e, r, t), (r = n);
        }
    }),
    (c.prototype.keys = function () {
        return l(this, "lruList")
            .toArray()
            .map(function (e) {
                return e.key;
            }, this);
    }),
    (c.prototype.values = function () {
        return l(this, "lruList")
            .toArray()
            .map(function (e) {
                return e.value;
            }, this);
    }),
    (c.prototype.reset = function () {
        l(this, "dispose") &&
            l(this, "lruList") &&
            l(this, "lruList").length &&
            l(this, "lruList").forEach(function (e) {
                l(this, "dispose").call(this, e.key, e.value);
            }, this),
            l(this, "cache", new o()),
            l(this, "lruList", new a()),
            l(this, "length", 0);
    }),
    (c.prototype.dump = function () {
        return l(this, "lruList")
            .map(function (e) {
                if (!d(this, e)) return { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) };
            }, this)
            .toArray()
            .filter(function (e) {
                return e;
            });
    }),
    (c.prototype.dumpLru = function () {
        return l(this, "lruList");
    }),
    (c.prototype.inspect = function (e, t) {
        var r = "LRUCache {",
            n = !1;
        l(this, "allowStale") && ((r += "\n  allowStale: true"), (n = !0));
        var o = l(this, "max");
        o && o !== 1 / 0 && (n && (r += ","), (r += "\n  max: " + i.inspect(o, t)), (n = !0));
        var a = l(this, "maxAge");
        a && (n && (r += ","), (r += "\n  maxAge: " + i.inspect(a, t)), (n = !0));
        var s = l(this, "lengthCalculator");
        s && s !== u && (n && (r += ","), (r += "\n  length: " + i.inspect(l(this, "length"), t)), (n = !0));
        var c = !1;
        return (
            l(this, "lruList").forEach(function (e) {
                c ? (r += ",\n  ") : (n && (r += ",\n"), (c = !0), (r += "\n  "));
                var o = i.inspect(e.key).split("\n").join("\n  "),
                    l = { value: e.value };
                e.maxAge !== a && (l.maxAge = e.maxAge),
                    s !== u && (l.length = e.length),
                    d(this, e) && (l.stale = !0),
                    (l = i.inspect(l, t).split("\n").join("\n  ")),
                    (r += o + " => " + l);
            }),
            (c || n) && (r += "\n"),
            (r += "}")
        );
    }),
    (c.prototype.set = function (e, t, r) {
        var n = (r = r || l(this, "maxAge")) ? Date.now() : 0,
            o = l(this, "lengthCalculator").call(this, t, e);
        if (l(this, "cache").has(e)) {
            if (o > l(this, "max")) return m(this, l(this, "cache").get(e)), !1;
            var i = l(this, "cache").get(e).value;
            return (
                l(this, "dispose") && l(this, "dispose").call(this, e, i.value),
                (i.now = n),
                (i.maxAge = r),
                (i.value = t),
                l(this, "length", l(this, "length") + (o - i.length)),
                (i.length = o),
                this.get(e),
                h(this),
                !0
            );
        }
        var a = new v(e, t, o, n, r);
        return a.length > l(this, "max")
            ? (l(this, "dispose") && l(this, "dispose").call(this, e, t), !1)
            : (l(this, "length", l(this, "length") + a.length),
              l(this, "lruList").unshift(a),
              l(this, "cache").set(e, l(this, "lruList").head),
              h(this),
              !0);
    }),
    (c.prototype.has = function (e) {
        return !(!l(this, "cache").has(e) || d(this, l(this, "cache").get(e).value));
    }),
    (c.prototype.get = function (e) {
        return p(this, e, !0);
    }),
    (c.prototype.peek = function (e) {
        return p(this, e, !1);
    }),
    (c.prototype.pop = function () {
        var e = l(this, "lruList").tail;
        return e ? (m(this, e), e.value) : null;
    }),
    (c.prototype.del = function (e) {
        m(this, l(this, "cache").get(e));
    }),
    (c.prototype.load = function (e) {
        this.reset();
        for (var t = Date.now(), r = e.length - 1; r >= 0; r--) {
            var n = e[r],
                o = n.e || 0;
            if (0 === o) this.set(n.k, n.v);
            else {
                var i = o - t;
                i > 0 && this.set(n.k, n.v, i);
            }
        }
    }),
    (c.prototype.prune = function () {
        var e = this;
        l(this, "cache").forEach(function (t, r) {
            p(e, r, !1);
        });
    });
