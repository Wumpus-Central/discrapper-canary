t.exports = u;
var n,
    s = r(416228),
    i = r(41835),
    o = r(971882),
    a = {};
function h(t, e, r) {
    var s;
    return (a[e] ? (s = a[e]) : ((s = n(e)), (a[e] = s)), 2 == arguments.length) ? t[s] : ((t[s] = r), r);
}
function l() {
    return 1;
}
function u(t) {
    if (!(this instanceof u)) return new u(t);
    ("number" == typeof t && (t = { max: t }), t || (t = {}));
    var e = h(this, "max", t.max);
    (!e || "number" != typeof e || e <= 0) && h(this, "max", 1 / 0);
    var r = t.length || l;
    ("function" != typeof r && (r = l),
        h(this, "lengthCalculator", r),
        h(this, "allowStale", t.stale || !1),
        h(this, "maxAge", t.maxAge || 0),
        h(this, "dispose", t.dispose),
        this.reset());
}
function c(t, e, r, n) {
    var s = r.value;
    (d(t, s) && (y(t, r), h(t, "allowStale") || (s = void 0)), s && e.call(n, s.value, s.key, t));
}
function f(t, e, r) {
    var n = h(t, "cache").get(e);
    if (n) {
        var s = n.value;
        (d(t, s) ? (y(t, n), h(t, "allowStale") || (s = void 0)) : r && h(t, "lruList").unshiftNode(n),
            s && (s = s.value));
    }
    return s;
}
function d(t, e) {
    if (!e || (!e.maxAge && !h(t, "maxAge"))) return !1;
    var r = Date.now() - e.now;
    return e.maxAge ? r > e.maxAge : h(t, "maxAge") && r > h(t, "maxAge");
}
function p(t) {
    if (h(t, "length") > h(t, "max"))
        for (var e = h(t, "lruList").tail; h(t, "length") > h(t, "max") && null !== e;) {
            var r = e.prev;
            (y(t, e), (e = r));
        }
}
function y(t, e) {
    if (e) {
        var r = e.value;
        (h(t, "dispose") && h(t, "dispose").call(this, r.key, r.value),
            h(t, "length", h(t, "length") - r.length),
            h(t, "cache").delete(r.key),
            h(t, "lruList").removeNode(e));
    }
}
function g(t, e, r, n, s) {
    ((this.key = t), (this.value = e), (this.length = r), (this.now = n), (this.maxAge = s || 0));
}
((n =
    "function" == typeof Symbol
        ? function (t) {
              return Symbol.for(t);
          }
        : function (t) {
              return "_" + t;
          }),
    Object.defineProperty(u.prototype, "max", {
        set: function (t) {
            ((!t || "number" != typeof t || t <= 0) && (t = 1 / 0), h(this, "max", t), p(this));
        },
        get: function () {
            return h(this, "max");
        },
        enumerable: !0,
    }),
    Object.defineProperty(u.prototype, "allowStale", {
        set: function (t) {
            h(this, "allowStale", !!t);
        },
        get: function () {
            return h(this, "allowStale");
        },
        enumerable: !0,
    }),
    Object.defineProperty(u.prototype, "maxAge", {
        set: function (t) {
            ((!t || "number" != typeof t || t < 0) && (t = 0), h(this, "maxAge", t), p(this));
        },
        get: function () {
            return h(this, "maxAge");
        },
        enumerable: !0,
    }),
    Object.defineProperty(u.prototype, "lengthCalculator", {
        set: function (t) {
            ("function" != typeof t && (t = l),
                t !== h(this, "lengthCalculator") &&
                    (h(this, "lengthCalculator", t),
                    h(this, "length", 0),
                    h(this, "lruList").forEach(function (t) {
                        ((t.length = h(this, "lengthCalculator").call(this, t.value, t.key)),
                            h(this, "length", h(this, "length") + t.length));
                    }, this)),
                p(this));
        },
        get: function () {
            return h(this, "lengthCalculator");
        },
        enumerable: !0,
    }),
    Object.defineProperty(u.prototype, "length", {
        get: function () {
            return h(this, "length");
        },
        enumerable: !0,
    }),
    Object.defineProperty(u.prototype, "itemCount", {
        get: function () {
            return h(this, "lruList").length;
        },
        enumerable: !0,
    }),
    (u.prototype.rforEach = function (t, e) {
        e = e || this;
        for (var r = h(this, "lruList").tail; null !== r;) {
            var n = r.prev;
            (c(this, t, r, e), (r = n));
        }
    }),
    (u.prototype.forEach = function (t, e) {
        e = e || this;
        for (var r = h(this, "lruList").head; null !== r;) {
            var n = r.next;
            (c(this, t, r, e), (r = n));
        }
    }),
    (u.prototype.keys = function () {
        return h(this, "lruList")
            .toArray()
            .map(function (t) {
                return t.key;
            }, this);
    }),
    (u.prototype.values = function () {
        return h(this, "lruList")
            .toArray()
            .map(function (t) {
                return t.value;
            }, this);
    }),
    (u.prototype.reset = function () {
        (h(this, "dispose") &&
            h(this, "lruList") &&
            h(this, "lruList").length &&
            h(this, "lruList").forEach(function (t) {
                h(this, "dispose").call(this, t.key, t.value);
            }, this),
            h(this, "cache", new s()),
            h(this, "lruList", new o()),
            h(this, "length", 0));
    }),
    (u.prototype.dump = function () {
        return h(this, "lruList")
            .map(function (t) {
                if (!d(this, t)) return { k: t.key, v: t.value, e: t.now + (t.maxAge || 0) };
            }, this)
            .toArray()
            .filter(function (t) {
                return t;
            });
    }),
    (u.prototype.dumpLru = function () {
        return h(this, "lruList");
    }),
    (u.prototype.inspect = function (t, e) {
        var r = "LRUCache {",
            n = !1;
        h(this, "allowStale") && ((r += "\n  allowStale: true"), (n = !0));
        var s = h(this, "max");
        s && 1 / 0 !== s && (n && (r += ","), (r += "\n  max: " + i.inspect(s, e)), (n = !0));
        var o = h(this, "maxAge");
        o && (n && (r += ","), (r += "\n  maxAge: " + i.inspect(o, e)), (n = !0));
        var a = h(this, "lengthCalculator");
        a && a !== l && (n && (r += ","), (r += "\n  length: " + i.inspect(h(this, "length"), e)), (n = !0));
        var u = !1;
        return (
            h(this, "lruList").forEach(function (t) {
                u ? (r += ",\n  ") : (n && (r += ",\n"), (u = !0), (r += "\n  "));
                var s = i.inspect(t.key).split("\n").join("\n  "),
                    h = { value: t.value };
                (t.maxAge !== o && (h.maxAge = t.maxAge),
                    a !== l && (h.length = t.length),
                    d(this, t) && (h.stale = !0),
                    (h = i.inspect(h, e).split("\n").join("\n  ")),
                    (r += s + " => " + h));
            }),
            (u || n) && (r += "\n"),
            (r += "}")
        );
    }),
    (u.prototype.set = function (t, e, r) {
        var n = (r = r || h(this, "maxAge")) ? Date.now() : 0,
            s = h(this, "lengthCalculator").call(this, e, t);
        if (h(this, "cache").has(t)) {
            if (s > h(this, "max")) return (y(this, h(this, "cache").get(t)), !1);
            var i = h(this, "cache").get(t).value;
            return (
                h(this, "dispose") && h(this, "dispose").call(this, t, i.value),
                (i.now = n),
                (i.maxAge = r),
                (i.value = e),
                h(this, "length", h(this, "length") + (s - i.length)),
                (i.length = s),
                this.get(t),
                p(this),
                !0
            );
        }
        var o = new g(t, e, s, n, r);
        return o.length > h(this, "max")
            ? (h(this, "dispose") && h(this, "dispose").call(this, t, e), !1)
            : (h(this, "length", h(this, "length") + o.length),
              h(this, "lruList").unshift(o),
              h(this, "cache").set(t, h(this, "lruList").head),
              p(this),
              !0);
    }),
    (u.prototype.has = function (t) {
        return !(!h(this, "cache").has(t) || d(this, h(this, "cache").get(t).value));
    }),
    (u.prototype.get = function (t) {
        return f(this, t, !0);
    }),
    (u.prototype.peek = function (t) {
        return f(this, t, !1);
    }),
    (u.prototype.pop = function () {
        var t = h(this, "lruList").tail;
        return t ? (y(this, t), t.value) : null;
    }),
    (u.prototype.del = function (t) {
        y(this, h(this, "cache").get(t));
    }),
    (u.prototype.load = function (t) {
        this.reset();
        for (var e = Date.now(), r = t.length - 1; r >= 0; r--) {
            var n = t[r],
                s = n.e || 0;
            if (0 === s) this.set(n.k, n.v);
            else {
                var i = s - e;
                i > 0 && this.set(n.k, n.v, i);
            }
        }
    }),
    (u.prototype.prune = function () {
        var t = this;
        h(this, "cache").forEach(function (e, r) {
            f(t, r, !1);
        });
    }));
