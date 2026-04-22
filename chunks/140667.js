!(function (t) {
    "use strict";
    var n,
        r = Object.prototype,
        i = r.hasOwnProperty,
        s = "function" == typeof Symbol ? Symbol : {},
        a = s.iterator || "@@iterator",
        o = s.asyncIterator || "@@asyncIterator",
        l = s.toStringTag || "@@toStringTag",
        u = t.regeneratorRuntime;
    if (u) {
        e.exports = u;
        return;
    }
    function d(e, t, r, i) {
        var s,
            a,
            o,
            l,
            u = Object.create((t && t.prototype instanceof p ? t : p).prototype);
        return (
            (s = e),
            (a = r),
            (o = new v(i || [])),
            (l = _),
            (u._invoke = function (e, t) {
                if (l === f) throw Error("Generator is already running");
                if (l === E) {
                    if ("throw" === e) throw t;
                    return b();
                }
                for (o.method = e, o.arg = t; ; ) {
                    var r = o.delegate;
                    if (r) {
                        var i = (function e(t, r) {
                            var i = t.iterator[r.method];
                            if (n === i) {
                                if (((r.delegate = null), "throw" === r.method)) {
                                    if (
                                        t.iterator.return &&
                                        ((r.method = "return"), (r.arg = n), e(t, r), "throw" === r.method)
                                    )
                                        return h;
                                    (r.method = "throw"),
                                        (r.arg = TypeError("The iterator does not provide a 'throw' method"));
                                }
                                return h;
                            }
                            var s = c(i, t.iterator, r.arg);
                            if ("throw" === s.type)
                                return (r.method = "throw"), (r.arg = s.arg), (r.delegate = null), h;
                            var a = s.arg;
                            return a
                                ? a.done
                                    ? ((r[t.resultName] = a.value),
                                      (r.next = t.nextLoc),
                                      "return" !== r.method && ((r.method = "next"), (r.arg = n)),
                                      (r.delegate = null),
                                      h)
                                    : a
                                : ((r.method = "throw"),
                                  (r.arg = TypeError("iterator result is not an object")),
                                  (r.delegate = null),
                                  h);
                        })(r, o);
                        if (i) {
                            if (i === h) continue;
                            return i;
                        }
                    }
                    if ("next" === o.method) o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                        if (l === _) throw ((l = E), o.arg);
                        o.dispatchException(o.arg);
                    } else "return" === o.method && o.abrupt("return", o.arg);
                    l = f;
                    var u = c(s, a, o);
                    if ("normal" === u.type) {
                        if (((l = o.done ? E : "suspendedYield"), u.arg === h)) continue;
                        return { value: u.arg, done: o.done };
                    }
                    "throw" === u.type && ((l = E), (o.method = "throw"), (o.arg = u.arg));
                }
            }),
            u
        );
    }
    function c(e, t, n) {
        try {
            return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
            return { type: "throw", arg: e };
        }
    }
    (u = t.regeneratorRuntime = e.exports).wrap = d;
    var _ = "suspendedStart",
        f = "executing",
        E = "completed",
        h = {};
    function p() {}
    function m() {}
    function g() {}
    var A = {};
    A[a] = function () {
        return this;
    };
    var I = Object.getPrototypeOf,
        T = I && I(I(C([])));
    T && T !== r && i.call(T, a) && (A = T);
    var S = (g.prototype = p.prototype = Object.create(A));
    function y(e) {
        ["next", "throw", "return"].forEach(function (t) {
            e[t] = function (e) {
                return this._invoke(t, e);
            };
        });
    }
    function N(e) {
        var t;
        this._invoke = function (n, r) {
            function s() {
                return new Promise(function (t, s) {
                    !(function t(n, r, s, a) {
                        var o = c(e[n], e, r);
                        if ("throw" === o.type) a(o.arg);
                        else {
                            var l = o.arg,
                                u = l.value;
                            return u && "object" == typeof u && i.call(u, "__await")
                                ? Promise.resolve(u.__await).then(
                                      function (e) {
                                          t("next", e, s, a);
                                      },
                                      function (e) {
                                          t("throw", e, s, a);
                                      },
                                  )
                                : Promise.resolve(u).then(
                                      function (e) {
                                          (l.value = e), s(l);
                                      },
                                      function (e) {
                                          return t("throw", e, s, a);
                                      },
                                  );
                        }
                    })(n, r, t, s);
                });
            }
            return (t = t ? t.then(s, s) : s());
        };
    }
    function O(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function R(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function v(e) {
        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(O, this), this.reset(!0);
    }
    function C(e) {
        if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var r = -1,
                    s = function t() {
                        for (; ++r < e.length; ) if (i.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                        return (t.value = n), (t.done = !0), t;
                    };
                return (s.next = s);
            }
        }
        return { next: b };
    }
    function b() {
        return { value: n, done: !0 };
    }
    (m.prototype = S.constructor = g),
        (g.constructor = m),
        (g[l] = m.displayName = "GeneratorFunction"),
        (u.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (u.mark = function (e) {
            return (
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, g)
                    : ((e.__proto__ = g), l in e || (e[l] = "GeneratorFunction")),
                (e.prototype = Object.create(S)),
                e
            );
        }),
        (u.awrap = function (e) {
            return { __await: e };
        }),
        y(N.prototype),
        (N.prototype[o] = function () {
            return this;
        }),
        (u.AsyncIterator = N),
        (u.async = function (e, t, n, r) {
            var i = new N(d(e, t, n, r));
            return u.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                      return e.done ? e.value : i.next();
                  });
        }),
        y(S),
        (S[l] = "Generator"),
        (S[a] = function () {
            return this;
        }),
        (S.toString = function () {
            return "[object Generator]";
        }),
        (u.keys = function (e) {
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
        (u.values = C),
        (v.prototype = {
            constructor: v,
            reset: function (e) {
                if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = n),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = n),
                    this.tryEntries.forEach(R),
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
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                    var a = this.tryEntries[s],
                        o = a.completion;
                    if ("root" === a.tryLoc) return r("end");
                    if (a.tryLoc <= this.prev) {
                        var l = i.call(a, "catchLoc"),
                            u = i.call(a, "finallyLoc");
                        if (l && u) {
                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                            else if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        } else if (l) {
                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        } else if (u) {
                            if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        } else throw Error("try statement without catch or finally");
                    }
                }
            },
            abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var s = r;
                        break;
                    }
                }
                s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                var a = s ? s.completion : {};
                return ((a.type = e), (a.arg = t), s)
                    ? ((this.method = "next"), (this.next = s.finallyLoc), h)
                    : this.complete(a);
            },
            complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                    "break" === e.type || "continue" === e.type
                        ? (this.next = e.arg)
                        : "return" === e.type
                          ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                          : "normal" === e.type && t && (this.next = t),
                    h
                );
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), R(n), h;
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            R(n);
                        }
                        return i;
                    }
                }
                throw Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
                return (
                    (this.delegate = { iterator: C(e), resultName: t, nextLoc: r }),
                    "next" === this.method && (this.arg = n),
                    h
                );
            },
        });
})(
    (function () {
        return this || ("object" == typeof self && self);
    })() || Function("return this")(),
);
