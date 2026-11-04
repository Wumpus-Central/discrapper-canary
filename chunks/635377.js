e.exports = c;
var t,
    r = s(416228),
    a = s(41835),
    n = s(971882),
    h = {};
function o(e, i, s) {
    var r;
    return (h[i] ? (r = h[i]) : ((r = t(i)), (h[i] = r)), 2 == arguments.length) ? e[r] : ((e[r] = s), s);
}
function u() {
    return 1;
}
function c(e) {
    if (!(this instanceof c)) return new c(e);
    ("number" == typeof e && (e = { max: e }), e || (e = {}));
    var i = o(this, "max", e.max);
    (!i || "number" != typeof i || i <= 0) && o(this, "max", 1 / 0);
    var s = e.length || u;
    ("function" != typeof s && (s = u),
        o(this, "lengthCalculator", s),
        o(this, "allowStale", e.stale || !1),
        o(this, "maxAge", e.maxAge || 0),
        o(this, "dispose", e.dispose),
        this.reset());
}
function l(e, i, s, t) {
    var r = s.value;
    (w(e, r) && ($(e, s), o(e, "allowStale") || (r = void 0)), r && i.call(t, r.value, r.key, e));
}
function _(e, i, s) {
    var t = o(e, "cache").get(i);
    if (t) {
        var r = t.value;
        (w(e, r) ? ($(e, t), o(e, "allowStale") || (r = void 0)) : s && o(e, "lruList").unshiftNode(t),
            r && (r = r.value));
    }
    return r;
}
function w(e, i) {
    if (!i || (!i.maxAge && !o(e, "maxAge"))) return !1;
    var s = Date.now() - i.now;
    return i.maxAge ? s > i.maxAge : o(e, "maxAge") && s > o(e, "maxAge");
}
function d(e) {
    if (o(e, "length") > o(e, "max"))
        for (var i = o(e, "lruList").tail; o(e, "length") > o(e, "max") && null !== i;) {
            var s = i.prev;
            ($(e, i), (i = s));
        }
}
function $(e, i) {
    if (i) {
        var s = i.value;
        (o(e, "dispose") && o(e, "dispose").call(this, s.key, s.value),
            o(e, "length", o(e, "length") - s.length),
            o(e, "cache").delete(s.key),
            o(e, "lruList").removeNode(i));
    }
}
function v(e, i, s, t, r) {
    ((this.key = e), (this.value = i), (this.length = s), (this.now = t), (this.maxAge = r || 0));
}
((t =
    "function" == typeof Symbol
        ? function (e) {
              return Symbol.for(e);
          }
        : function (e) {
              return "_" + e;
          }),
    Object.defineProperty(c.prototype, "max", {
        set: function (e) {
            ((!e || "number" != typeof e || e <= 0) && (e = 1 / 0), o(this, "max", e), d(this));
        },
        get: function () {
            return o(this, "max");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "allowStale", {
        set: function (e) {
            o(this, "allowStale", !!e);
        },
        get: function () {
            return o(this, "allowStale");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "maxAge", {
        set: function (e) {
            ((!e || "number" != typeof e || e < 0) && (e = 0), o(this, "maxAge", e), d(this));
        },
        get: function () {
            return o(this, "maxAge");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "lengthCalculator", {
        set: function (e) {
            ("function" != typeof e && (e = u),
                e !== o(this, "lengthCalculator") &&
                    (o(this, "lengthCalculator", e),
                    o(this, "length", 0),
                    o(this, "lruList").forEach(function (e) {
                        ((e.length = o(this, "lengthCalculator").call(this, e.value, e.key)),
                            o(this, "length", o(this, "length") + e.length));
                    }, this)),
                d(this));
        },
        get: function () {
            return o(this, "lengthCalculator");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "length", {
        get: function () {
            return o(this, "length");
        },
        enumerable: !0,
    }),
    Object.defineProperty(c.prototype, "itemCount", {
        get: function () {
            return o(this, "lruList").length;
        },
        enumerable: !0,
    }),
    (c.prototype.rforEach = function (e, i) {
        i = i || this;
        for (var s = o(this, "lruList").tail; null !== s;) {
            var t = s.prev;
            (l(this, e, s, i), (s = t));
        }
    }),
    (c.prototype.forEach = function (e, i) {
        i = i || this;
        for (var s = o(this, "lruList").head; null !== s;) {
            var t = s.next;
            (l(this, e, s, i), (s = t));
        }
    }),
    (c.prototype.keys = function () {
        return o(this, "lruList")
            .toArray()
            .map(function (e) {
                return e.key;
            }, this);
    }),
    (c.prototype.values = function () {
        return o(this, "lruList")
            .toArray()
            .map(function (e) {
                return e.value;
            }, this);
    }),
    (c.prototype.reset = function () {
        (o(this, "dispose") &&
            o(this, "lruList") &&
            o(this, "lruList").length &&
            o(this, "lruList").forEach(function (e) {
                o(this, "dispose").call(this, e.key, e.value);
            }, this),
            o(this, "cache", new r()),
            o(this, "lruList", new n()),
            o(this, "length", 0));
    }),
    (c.prototype.dump = function () {
        return o(this, "lruList")
            .map(function (e) {
                if (!w(this, e)) return { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) };
            }, this)
            .toArray()
            .filter(function (e) {
                return e;
            });
    }),
    (c.prototype.dumpLru = function () {
        return o(this, "lruList");
    }),
    (c.prototype.inspect = function (e, i) {
        var s = "LRUCache {",
            t = !1;
        o(this, "allowStale") && ((s += "\n  allowStale: true"), (t = !0));
        var r = o(this, "max");
        r && 1 / 0 !== r && (t && (s += ","), (s += "\n  max: " + a.inspect(r, i)), (t = !0));
        var n = o(this, "maxAge");
        n && (t && (s += ","), (s += "\n  maxAge: " + a.inspect(n, i)), (t = !0));
        var h = o(this, "lengthCalculator");
        h && h !== u && (t && (s += ","), (s += "\n  length: " + a.inspect(o(this, "length"), i)), (t = !0));
        var c = !1;
        return (
            o(this, "lruList").forEach(function (e) {
                c ? (s += ",\n  ") : (t && (s += ",\n"), (c = !0), (s += "\n  "));
                var r = a.inspect(e.key).split("\n").join("\n  "),
                    o = { value: e.value };
                (e.maxAge !== n && (o.maxAge = e.maxAge),
                    h !== u && (o.length = e.length),
                    w(this, e) && (o.stale = !0),
                    (o = a.inspect(o, i).split("\n").join("\n  ")),
                    (s += r + " => " + o));
            }),
            (c || t) && (s += "\n"),
            (s += "}")
        );
    }),
    (c.prototype.set = function (e, i, s) {
        var t = (s = s || o(this, "maxAge")) ? Date.now() : 0,
            r = o(this, "lengthCalculator").call(this, i, e);
        if (o(this, "cache").has(e)) {
            if (r > o(this, "max")) return ($(this, o(this, "cache").get(e)), !1);
            var a = o(this, "cache").get(e).value;
            return (
                o(this, "dispose") && o(this, "dispose").call(this, e, a.value),
                (a.now = t),
                (a.maxAge = s),
                (a.value = i),
                o(this, "length", o(this, "length") + (r - a.length)),
                (a.length = r),
                this.get(e),
                d(this),
                !0
            );
        }
        var n = new v(e, i, r, t, s);
        return n.length > o(this, "max")
            ? (o(this, "dispose") && o(this, "dispose").call(this, e, i), !1)
            : (o(this, "length", o(this, "length") + n.length),
              o(this, "lruList").unshift(n),
              o(this, "cache").set(e, o(this, "lruList").head),
              d(this),
              !0);
    }),
    (c.prototype.has = function (e) {
        return !(!o(this, "cache").has(e) || w(this, o(this, "cache").get(e).value));
    }),
    (c.prototype.get = function (e) {
        return _(this, e, !0);
    }),
    (c.prototype.peek = function (e) {
        return _(this, e, !1);
    }),
    (c.prototype.pop = function () {
        var e = o(this, "lruList").tail;
        return e ? ($(this, e), e.value) : null;
    }),
    (c.prototype.del = function (e) {
        $(this, o(this, "cache").get(e));
    }),
    (c.prototype.load = function (e) {
        this.reset();
        for (var i = Date.now(), s = e.length - 1; s >= 0; s--) {
            var t = e[s],
                r = t.e || 0;
            if (0 === r) this.set(t.k, t.v);
            else {
                var a = r - i;
                a > 0 && this.set(t.k, t.v, a);
            }
        }
    }),
    (c.prototype.prune = function () {
        var e = this;
        o(this, "cache").forEach(function (i, s) {
            _(e, s, !1);
        });
    }));
