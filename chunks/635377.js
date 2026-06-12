e.exports = c;
var i,
    r = n(416228),
    s = n(41835),
    a = n(971882),
    o = {};
function l(e, t, n) {
    var r;
    return (o[t] ? (r = o[t]) : ((r = i(t)), (o[t] = r)), 2 == arguments.length) ? e[r] : ((e[r] = n), n);
}
function u() {
    return 1;
}
function c(e) {
    if (!(this instanceof c)) return new c(e);
    "number" == typeof e && (e = { max: e }), e || (e = {});
    var t = l(this, "max", e.max);
    (!t || "number" != typeof t || t <= 0) && l(this, "max", 1 / 0);
    var n = e.length || u;
    "function" != typeof n && (n = u),
        l(this, "lengthCalculator", n),
        l(this, "allowStale", e.stale || !1),
        l(this, "maxAge", e.maxAge || 0),
        l(this, "dispose", e.dispose),
        this.reset();
}
function d(e, t, n, i) {
    var r = n.value;
    h(e, r) && (p(e, n), l(e, "allowStale") || (r = void 0)), r && t.call(i, r.value, r.key, e);
}
function _(e, t, n) {
    var i = l(e, "cache").get(t);
    if (i) {
        var r = i.value;
        h(e, r) ? (p(e, i), l(e, "allowStale") || (r = void 0)) : n && l(e, "lruList").unshiftNode(i),
            r && (r = r.value);
    }
    return r;
}
function h(e, t) {
    if (!t || (!t.maxAge && !l(e, "maxAge"))) return !1;
    var n = Date.now() - t.now;
    return t.maxAge ? n > t.maxAge : l(e, "maxAge") && n > l(e, "maxAge");
}
function f(e) {
    if (l(e, "length") > l(e, "max"))
        for (var t = l(e, "lruList").tail; l(e, "length") > l(e, "max") && null !== t; ) {
            var n = t.prev;
            p(e, t), (t = n);
        }
}
function p(e, t) {
    if (t) {
        var n = t.value;
        l(e, "dispose") && l(e, "dispose").call(this, n.key, n.value),
            l(e, "length", l(e, "length") - n.length),
            l(e, "cache").delete(n.key),
            l(e, "lruList").removeNode(t);
    }
}
function E(e, t, n, i, r) {
    (this.key = e), (this.value = t), (this.length = n), (this.now = i), (this.maxAge = r || 0);
}
(i =
    "function" == typeof Symbol
        ? function (e) {
              return Symbol.for(e);
          }
        : function (e) {
              return "_" + e;
          }),
    Object.defineProperty(c.prototype, "max", {
        set: function (e) {
            (!e || "number" != typeof e || e <= 0) && (e = 1 / 0), l(this, "max", e), f(this);
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
            (!e || "number" != typeof e || e < 0) && (e = 0), l(this, "maxAge", e), f(this);
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
                f(this);
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
        for (var n = l(this, "lruList").tail; null !== n; ) {
            var i = n.prev;
            d(this, e, n, t), (n = i);
        }
    }),
    (c.prototype.forEach = function (e, t) {
        t = t || this;
        for (var n = l(this, "lruList").head; null !== n; ) {
            var i = n.next;
            d(this, e, n, t), (n = i);
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
            l(this, "cache", new r()),
            l(this, "lruList", new a()),
            l(this, "length", 0);
    }),
    (c.prototype.dump = function () {
        return l(this, "lruList")
            .map(function (e) {
                if (!h(this, e)) return { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) };
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
        var n = "LRUCache {",
            i = !1;
        l(this, "allowStale") && ((n += "\n  allowStale: true"), (i = !0));
        var r = l(this, "max");
        r && r !== 1 / 0 && (i && (n += ","), (n += "\n  max: " + s.inspect(r, t)), (i = !0));
        var a = l(this, "maxAge");
        a && (i && (n += ","), (n += "\n  maxAge: " + s.inspect(a, t)), (i = !0));
        var o = l(this, "lengthCalculator");
        o && o !== u && (i && (n += ","), (n += "\n  length: " + s.inspect(l(this, "length"), t)), (i = !0));
        var c = !1;
        return (
            l(this, "lruList").forEach(function (e) {
                c ? (n += ",\n  ") : (i && (n += ",\n"), (c = !0), (n += "\n  "));
                var r = s.inspect(e.key).split("\n").join("\n  "),
                    l = { value: e.value };
                e.maxAge !== a && (l.maxAge = e.maxAge),
                    o !== u && (l.length = e.length),
                    h(this, e) && (l.stale = !0),
                    (l = s.inspect(l, t).split("\n").join("\n  ")),
                    (n += r + " => " + l);
            }),
            (c || i) && (n += "\n"),
            (n += "}")
        );
    }),
    (c.prototype.set = function (e, t, n) {
        var i = (n = n || l(this, "maxAge")) ? Date.now() : 0,
            r = l(this, "lengthCalculator").call(this, t, e);
        if (l(this, "cache").has(e)) {
            if (r > l(this, "max")) return p(this, l(this, "cache").get(e)), !1;
            var s = l(this, "cache").get(e).value;
            return (
                l(this, "dispose") && l(this, "dispose").call(this, e, s.value),
                (s.now = i),
                (s.maxAge = n),
                (s.value = t),
                l(this, "length", l(this, "length") + (r - s.length)),
                (s.length = r),
                this.get(e),
                f(this),
                !0
            );
        }
        var a = new E(e, t, r, i, n);
        return a.length > l(this, "max")
            ? (l(this, "dispose") && l(this, "dispose").call(this, e, t), !1)
            : (l(this, "length", l(this, "length") + a.length),
              l(this, "lruList").unshift(a),
              l(this, "cache").set(e, l(this, "lruList").head),
              f(this),
              !0);
    }),
    (c.prototype.has = function (e) {
        return !(!l(this, "cache").has(e) || h(this, l(this, "cache").get(e).value));
    }),
    (c.prototype.get = function (e) {
        return _(this, e, !0);
    }),
    (c.prototype.peek = function (e) {
        return _(this, e, !1);
    }),
    (c.prototype.pop = function () {
        var e = l(this, "lruList").tail;
        return e ? (p(this, e), e.value) : null;
    }),
    (c.prototype.del = function (e) {
        p(this, l(this, "cache").get(e));
    }),
    (c.prototype.load = function (e) {
        this.reset();
        for (var t = Date.now(), n = e.length - 1; n >= 0; n--) {
            var i = e[n],
                r = i.e || 0;
            if (0 === r) this.set(i.k, i.v);
            else {
                var s = r - t;
                s > 0 && this.set(i.k, i.v, s);
            }
        }
    }),
    (c.prototype.prune = function () {
        var e = this;
        l(this, "cache").forEach(function (t, n) {
            _(e, n, !1);
        });
    });
