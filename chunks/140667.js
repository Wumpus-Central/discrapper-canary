!(function (t) {
    "use strict";
    var n,
        r = Object.prototype,
        i = r.hasOwnProperty,
        a = "function" == typeof Symbol ? Symbol : {},
        s = a.iterator || "@@iterator",
        o = a.asyncIterator || "@@asyncIterator",
        l = a.toStringTag || "@@toStringTag",
        u = !0,
        c = t.regeneratorRuntime;
    if (c) {
        u && (e.exports = c);
        return;
    }
    function d(e, t, n, r) {
        var i = Object.create((t && t.prototype instanceof E ? t : E).prototype);
        return (i._invoke = N(e, n, new L(r || []))), i;
    }
    function _(e, t, n) {
        try {
            return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
            return { type: "throw", arg: e };
        }
    }
    (c = t.regeneratorRuntime = u ? e.exports : {}).wrap = d;
    var f = "suspendedStart",
        p = "suspendedYield",
        h = "executing",
        m = "completed",
        g = {};
    function E() {}
    function A() {}
    function I() {}
    var T = {};
    T[s] = function () {
        return this;
    };
    var y = Object.getPrototypeOf,
        S = y && y(y(w([])));
    S && S !== r && i.call(S, s) && (T = S);
    var v = (I.prototype = E.prototype = Object.create(T));
    function C(e) {
        ["next", "throw", "return"].forEach(function (t) {
            e[t] = function (e) {
                return this._invoke(t, e);
            };
        });
    }
    function b(e) {
        var t;
        function n(t, r, a, s) {
            var o = _(e[t], e, r);
            if ("throw" === o.type) s(o.arg);
            else {
                var l = o.arg,
                    u = l.value;
                return u && "object" == typeof u && i.call(u, "__await")
                    ? Promise.resolve(u.__await).then(
                          function (e) {
                              n("next", e, a, s);
                          },
                          function (e) {
                              n("throw", e, a, s);
                          },
                      )
                    : Promise.resolve(u).then(
                          function (e) {
                              (l.value = e), a(l);
                          },
                          function (e) {
                              return n("throw", e, a, s);
                          },
                      );
            }
        }
        function r(e, r) {
            function i() {
                return new Promise(function (t, i) {
                    n(e, r, t, i);
                });
            }
            return (t = t ? t.then(i, i) : i());
        }
        this._invoke = r;
    }
    function N(e, t, n) {
        var r = f;
        return function (i, a) {
            if (r === h) throw Error("Generator is already running");
            if (r === m) {
                if ("throw" === i) throw a;
                return x();
            }
            for (n.method = i, n.arg = a; ; ) {
                var s = n.delegate;
                if (s) {
                    var o = R(s, n);
                    if (o) {
                        if (o === g) continue;
                        return o;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (r === f) throw ((r = m), n.arg);
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = h;
                var l = _(e, t, n);
                if ("normal" === l.type) {
                    if (((r = n.done ? m : p), l.arg === g)) continue;
                    return { value: l.arg, done: n.done };
                }
                "throw" === l.type && ((r = m), (n.method = "throw"), (n.arg = l.arg));
            }
        };
    }
    function R(e, t) {
        var r = e.iterator[t.method];
        if (n === r) {
            if (((t.delegate = null), "throw" === t.method)) {
                if (e.iterator.return && ((t.method = "return"), (t.arg = n), R(e, t), "throw" === t.method)) return g;
                (t.method = "throw"), (t.arg = TypeError("The iterator does not provide a 'throw' method"));
            }
            return g;
        }
        var i = _(r, e.iterator, t.arg);
        if ("throw" === i.type) return (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), g;
        var a = i.arg;
        return a
            ? a.done
                ? ((t[e.resultName] = a.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method && ((t.method = "next"), (t.arg = n)),
                  (t.delegate = null),
                  g)
                : a
            : ((t.method = "throw"), (t.arg = TypeError("iterator result is not an object")), (t.delegate = null), g);
    }
    function O(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function D(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function L(e) {
        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(O, this), this.reset(!0);
    }
    function w(e) {
        if (e) {
            var t = e[s];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var r = -1,
                    a = function t() {
                        for (; ++r < e.length; ) if (i.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                        return (t.value = n), (t.done = !0), t;
                    };
                return (a.next = a);
            }
        }
        return { next: x };
    }
    function x() {
        return { value: n, done: !0 };
    }
    (A.prototype = v.constructor = I),
        (I.constructor = A),
        (I[l] = A.displayName = "GeneratorFunction"),
        (c.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === A || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (c.mark = function (e) {
            return (
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, I)
                    : ((e.__proto__ = I), l in e || (e[l] = "GeneratorFunction")),
                (e.prototype = Object.create(v)),
                e
            );
        }),
        (c.awrap = function (e) {
            return { __await: e };
        }),
        C(b.prototype),
        (b.prototype[o] = function () {
            return this;
        }),
        (c.AsyncIterator = b),
        (c.async = function (e, t, n, r) {
            var i = new b(d(e, t, n, r));
            return c.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                      return e.done ? e.value : i.next();
                  });
        }),
        C(v),
        (v[l] = "Generator"),
        (v[s] = function () {
            return this;
        }),
        (v.toString = function () {
            return "[object Generator]";
        }),
        (c.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
                t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e) return (n.value = r), (n.done = !1), n;
                    }
                    return (n.done = !0), n;
                }
            );
        }),
        (c.values = w),
        (L.prototype = {
            constructor: L,
            reset: function (e) {
                if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = n),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = n),
                    this.tryEntries.forEach(D),
                    !e)
                )
                    for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
            },
            stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function r(r, i) {
                    return (o.type = "throw"), (o.arg = e), (t.next = r), i && ((t.method = "next"), (t.arg = n)), !!i;
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var s = this.tryEntries[a],
                        o = s.completion;
                    if ("root" === s.tryLoc) return r("end");
                    if (s.tryLoc <= this.prev) {
                        var l = i.call(s, "catchLoc"),
                            u = i.call(s, "finallyLoc");
                        if (l && u) {
                            if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                            else if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                        } else if (l) {
                            if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                        } else if (u) {
                            if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                        } else throw Error("try statement without catch or finally");
                    }
                }
            },
            abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var a = r;
                        break;
                    }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var s = a ? a.completion : {};
                return ((s.type = e), (s.arg = t), a)
                    ? ((this.method = "next"), (this.next = a.finallyLoc), g)
                    : this.complete(s);
            },
            complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                    "break" === e.type || "continue" === e.type
                        ? (this.next = e.arg)
                        : "return" === e.type
                          ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                          : "normal" === e.type && t && (this.next = t),
                    g
                );
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), D(n), g;
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            D(n);
                        }
                        return i;
                    }
                }
                throw Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
                return (
                    (this.delegate = { iterator: w(e), resultName: t, nextLoc: r }),
                    "next" === this.method && (this.arg = n),
                    g
                );
            },
        });
})(
    (function () {
        return this || ("object" == typeof self && self);
    })() || Function("return this")(),
);
