e.exports = d;
var r,
    i = n(416228),
    s = n(41835),
    a = n(971882),
    o = {};
function l(e, t, n) {
    var i;
    return (o[t] ? (i = o[t]) : ((i = r(t)), (o[t] = i)), 2 == arguments.length) ? e[i] : ((e[i] = n), n);
}
function u() {
    return 1;
}
function d(e) {
    if (!(this instanceof d)) return new d(e);
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
function c(e, t, n, r) {
    var i = n.value;
    f(e, i) && (h(e, n), l(e, "allowStale") || (i = void 0)), i && t.call(r, i.value, i.key, e);
}
function _(e, t, n) {
    var r = l(e, "cache").get(t);
    if (r) {
        var i = r.value;
        f(e, i) ? (h(e, r), l(e, "allowStale") || (i = void 0)) : n && l(e, "lruList").unshiftNode(r),
            i && (i = i.value);
    }
    return i;
}
function f(e, t) {
    if (!t || (!t.maxAge && !l(e, "maxAge"))) return !1;
    var n = Date.now() - t.now;
    return t.maxAge ? n > t.maxAge : l(e, "maxAge") && n > l(e, "maxAge");
}
function E(e) {
    if (l(e, "length") > l(e, "max"))
        for (var t = l(e, "lruList").tail; l(e, "length") > l(e, "max") && null !== t; ) {
            var n = t.prev;
            h(e, t), (t = n);
        }
}
function h(e, t) {
    if (t) {
        var n = t.value;
        l(e, "dispose") && l(e, "dispose").call(this, n.key, n.value),
            l(e, "length", l(e, "length") - n.length),
            l(e, "cache").delete(n.key),
            l(e, "lruList").removeNode(t);
    }
}
function p(e, t, n, r, i) {
    (this.key = e), (this.value = t), (this.length = n), (this.now = r), (this.maxAge = i || 0);
}
(r =
    "function" == typeof Symbol
        ? function (e) {
              return Symbol.for(e);
          }
        : function (e) {
              return "_" + e;
          }),
    Object.defineProperty(d.prototype, "max", {
        set: function (e) {
            (!e || "number" != typeof e || e <= 0) && (e = 1 / 0), l(this, "max", e), E(this);
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
            (!e || "number" != typeof e || e < 0) && (e = 0), l(this, "maxAge", e), E(this);
        },
        get: function () {
            return l(this, "maxAge");
        },
        enumerable: !0,
    }),
    Object.defineProperty(d.prototype, "lengthCalculator", {
        set: function (e) {
            "function" != typeof e && (e = u),
                e !== l(this, "lengthCalculator") &&
                    (l(this, "lengthCalculator", e),
                    l(this, "length", 0),
                    l(this, "lruList").forEach(function (e) {
                        (e.length = l(this, "lengthCalculator").call(this, e.value, e.key)),
                            l(this, "length", l(this, "length") + e.length);
                    }, this)),
                E(this);
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
    (d.prototype.rforEach = function (e, t) {
        t = t || this;
        for (var n = l(this, "lruList").tail; null !== n; ) {
            var r = n.prev;
            c(this, e, n, t), (n = r);
        }
    }),
    (d.prototype.forEach = function (e, t) {
        t = t || this;
        for (var n = l(this, "lruList").head; null !== n; ) {
            var r = n.next;
            c(this, e, n, t), (n = r);
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
        l(this, "dispose") &&
            l(this, "lruList") &&
            l(this, "lruList").length &&
            l(this, "lruList").forEach(function (e) {
                l(this, "dispose").call(this, e.key, e.value);
            }, this),
            l(this, "cache", new i()),
            l(this, "lruList", new a()),
            l(this, "length", 0);
    }),
    (d.prototype.dump = function () {
        return l(this, "lruList")
            .map(function (e) {
                if (!f(this, e)) return { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) };
            }, this)
            .toArray()
            .filter(function (e) {
                return e;
            });
    }),
    (d.prototype.dumpLru = function () {
        return l(this, "lruList");
    }),
    (d.prototype.inspect = function (e, t) {
        var n = "LRUCache {",
            r = !1;
        l(this, "allowStale") && ((n += "\n  allowStale: true"), (r = !0));
        var i = l(this, "max");
        i && i !== 1 / 0 && (r && (n += ","), (n += "\n  max: " + s.inspect(i, t)), (r = !0));
        var a = l(this, "maxAge");
        a && (r && (n += ","), (n += "\n  maxAge: " + s.inspect(a, t)), (r = !0));
        var o = l(this, "lengthCalculator");
        o && o !== u && (r && (n += ","), (n += "\n  length: " + s.inspect(l(this, "length"), t)), (r = !0));
        var d = !1;
        return (
            l(this, "lruList").forEach(function (e) {
                d ? (n += ",\n  ") : (r && (n += ",\n"), (d = !0), (n += "\n  "));
                var i = s.inspect(e.key).split("\n").join("\n  "),
                    l = { value: e.value };
                e.maxAge !== a && (l.maxAge = e.maxAge),
                    o !== u && (l.length = e.length),
                    f(this, e) && (l.stale = !0),
                    (l = s.inspect(l, t).split("\n").join("\n  ")),
                    (n += i + " => " + l);
            }),
            (d || r) && (n += "\n"),
            (n += "}")
        );
    }),
    (d.prototype.set = function (e, t, n) {
        var r = (n = n || l(this, "maxAge")) ? Date.now() : 0,
            i = l(this, "lengthCalculator").call(this, t, e);
        if (l(this, "cache").has(e)) {
            if (i > l(this, "max")) return h(this, l(this, "cache").get(e)), !1;
            var s = l(this, "cache").get(e).value;
            return (
                l(this, "dispose") && l(this, "dispose").call(this, e, s.value),
                (s.now = r),
                (s.maxAge = n),
                (s.value = t),
                l(this, "length", l(this, "length") + (i - s.length)),
                (s.length = i),
                this.get(e),
                E(this),
                !0
            );
        }
        var a = new p(e, t, i, r, n);
        return a.length > l(this, "max")
            ? (l(this, "dispose") && l(this, "dispose").call(this, e, t), !1)
            : (l(this, "length", l(this, "length") + a.length),
              l(this, "lruList").unshift(a),
              l(this, "cache").set(e, l(this, "lruList").head),
              E(this),
              !0);
    }),
    (d.prototype.has = function (e) {
        return !(!l(this, "cache").has(e) || f(this, l(this, "cache").get(e).value));
    }),
    (d.prototype.get = function (e) {
        return _(this, e, !0);
    }),
    (d.prototype.peek = function (e) {
        return _(this, e, !1);
    }),
    (d.prototype.pop = function () {
        var e = l(this, "lruList").tail;
        return e ? (h(this, e), e.value) : null;
    }),
    (d.prototype.del = function (e) {
        h(this, l(this, "cache").get(e));
    }),
    (d.prototype.load = function (e) {
        this.reset();
        for (var t = Date.now(), n = e.length - 1; n >= 0; n--) {
            var r = e[n],
                i = r.e || 0;
            if (0 === i) this.set(r.k, r.v);
            else {
                var s = i - t;
                s > 0 && this.set(r.k, r.v, s);
            }
        }
    }),
    (d.prototype.prune = function () {
        var e = this;
        l(this, "cache").forEach(function (t, n) {
            _(e, n, !1);
        });
    });
