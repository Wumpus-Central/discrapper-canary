!(function (t) {
    "use strict";
    var r,
        n = Object.prototype,
        i = n.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        s = o.asyncIterator || "@@asyncIterator",
        l = o.toStringTag || "@@toStringTag",
        u = t.regeneratorRuntime;
    if (u) {
        e.exports = u;
        return;
    }
    function c(e, t, n, i) {
        var o,
            a,
            s,
            l,
            u = Object.create((t && t.prototype instanceof v ? t : v).prototype);
        return (
            (o = e),
            (a = n),
            (s = new T(i || [])),
            (l = d),
            (u._invoke = function (e, t) {
                if (l === p) throw Error("Generator is already running");
                if (l === h) {
                    if ("throw" === e) throw t;
                    return P();
                }
                for (s.method = e, s.arg = t; ; ) {
                    var n = s.delegate;
                    if (n) {
                        var i = (function e(t, n) {
                            var i = t.iterator[n.method];
                            if (r === i) {
                                if (((n.delegate = null), "throw" === n.method)) {
                                    if (
                                        t.iterator.return &&
                                        ((n.method = "return"), (n.arg = r), e(t, n), "throw" === n.method)
                                    )
                                        return m;
                                    (n.method = "throw"),
                                        (n.arg = TypeError("The iterator does not provide a 'throw' method"));
                                }
                                return m;
                            }
                            var o = f(i, t.iterator, n.arg);
                            if ("throw" === o.type)
                                return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), m;
                            var a = o.arg;
                            return a
                                ? a.done
                                    ? ((n[t.resultName] = a.value),
                                      (n.next = t.nextLoc),
                                      "return" !== n.method && ((n.method = "next"), (n.arg = r)),
                                      (n.delegate = null),
                                      m)
                                    : a
                                : ((n.method = "throw"),
                                  (n.arg = TypeError("iterator result is not an object")),
                                  (n.delegate = null),
                                  m);
                        })(n, s);
                        if (i) {
                            if (i === m) continue;
                            return i;
                        }
                    }
                    if ("next" === s.method) s.sent = s._sent = s.arg;
                    else if ("throw" === s.method) {
                        if (l === d) throw ((l = h), s.arg);
                        s.dispatchException(s.arg);
                    } else "return" === s.method && s.abrupt("return", s.arg);
                    l = p;
                    var u = f(o, a, s);
                    if ("normal" === u.type) {
                        if (((l = s.done ? h : "suspendedYield"), u.arg === m)) continue;
                        return { value: u.arg, done: s.done };
                    }
                    "throw" === u.type && ((l = h), (s.method = "throw"), (s.arg = u.arg));
                }
            }),
            u
        );
    }
    function f(e, t, r) {
        try {
            return { type: "normal", arg: e.call(t, r) };
        } catch (e) {
            return { type: "throw", arg: e };
        }
    }
    (u = t.regeneratorRuntime = e.exports).wrap = c;
    var d = "suspendedStart",
        p = "executing",
        h = "completed",
        m = {};
    function v() {}
    function y() {}
    function g() {}
    var b = {};
    b[a] = function () {
        return this;
    };
    var w = Object.getPrototypeOf,
        _ = w && w(w(M([])));
    _ && _ !== n && i.call(_, a) && (b = _);
    var S = (g.prototype = v.prototype = Object.create(b));
    function x(e) {
        ["next", "throw", "return"].forEach(function (t) {
            e[t] = function (e) {
                return this._invoke(t, e);
            };
        });
    }
    function E(e) {
        var t;
        this._invoke = function (r, n) {
            function o() {
                return new Promise(function (t, o) {
                    !(function t(r, n, o, a) {
                        var s = f(e[r], e, n);
                        if ("throw" === s.type) a(s.arg);
                        else {
                            var l = s.arg,
                                u = l.value;
                            return u && "object" == typeof u && i.call(u, "__await")
                                ? Promise.resolve(u.__await).then(
                                      function (e) {
                                          t("next", e, o, a);
                                      },
                                      function (e) {
                                          t("throw", e, o, a);
                                      },
                                  )
                                : Promise.resolve(u).then(
                                      function (e) {
                                          (l.value = e), o(l);
                                      },
                                      function (e) {
                                          return t("throw", e, o, a);
                                      },
                                  );
                        }
                    })(r, n, t, o);
                });
            }
            return (t = t ? t.then(o, o) : o());
        };
    }
    function k(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function C(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function T(e) {
        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(k, this), this.reset(!0);
    }
    function M(e) {
        if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var n = -1,
                    o = function t() {
                        for (; ++n < e.length; ) if (i.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                        return (t.value = r), (t.done = !0), t;
                    };
                return (o.next = o);
            }
        }
        return { next: P };
    }
    function P() {
        return { value: r, done: !0 };
    }
    (y.prototype = S.constructor = g),
        (g.constructor = y),
        (g[l] = y.displayName = "GeneratorFunction"),
        (u.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name));
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
        x(E.prototype),
        (E.prototype[s] = function () {
            return this;
        }),
        (u.AsyncIterator = E),
        (u.async = function (e, t, r, n) {
            var i = new E(c(e, t, r, n));
            return u.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                      return e.done ? e.value : i.next();
                  });
        }),
        x(S),
        (S[l] = "Generator"),
        (S[a] = function () {
            return this;
        }),
        (S.toString = function () {
            return "[object Generator]";
        }),
        (u.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
                t.reverse(),
                function r() {
                    for (; t.length; ) {
                        var n = t.pop();
                        if (n in e) return (r.value = n), (r.done = !1), r;
                    }
                    return (r.done = !0), r;
                }
            );
        }),
        (u.values = M),
        (T.prototype = {
            constructor: T,
            reset: function (e) {
                if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = r),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = r),
                    this.tryEntries.forEach(C),
                    !e)
                )
                    for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r);
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
                function n(n, i) {
                    return (s.type = "throw"), (s.arg = e), (t.next = n), i && ((t.method = "next"), (t.arg = r)), !!i;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o],
                        s = a.completion;
                    if ("root" === a.tryLoc) return n("end");
                    if (a.tryLoc <= this.prev) {
                        var l = i.call(a, "catchLoc"),
                            u = i.call(a, "finallyLoc");
                        if (l && u) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                            else if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                        } else if (l) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                        } else if (u) {
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                        } else throw Error("try statement without catch or finally");
                    }
                }
            },
            abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var n = this.tryEntries[r];
                    if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var o = n;
                        break;
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return ((a.type = e), (a.arg = t), o)
                    ? ((this.method = "next"), (this.next = o.finallyLoc), m)
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
                    m
                );
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), m;
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var i = n.arg;
                            C(r);
                        }
                        return i;
                    }
                }
                throw Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
                return (
                    (this.delegate = { iterator: M(e), resultName: t, nextLoc: n }),
                    "next" === this.method && (this.arg = r),
                    m
                );
            },
        });
})(
    (function () {
        return this || ("object" == typeof self && self);
    })() || Function("return this")(),
);
