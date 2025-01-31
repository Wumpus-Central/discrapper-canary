!(function (t) {
    var n,
        i = Object.prototype,
        r = i.hasOwnProperty,
        a = 'function' == typeof Symbol ? Symbol : {},
        s = a.iterator || '@@iterator',
        o = a.asyncIterator || '@@asyncIterator',
        l = a.toStringTag || '@@toStringTag',
        u = !0,
        c = t.regeneratorRuntime;
    if (c) {
        u && (e.exports = c);
        return;
    }
    function d(e, t, n, i) {
        var r = Object.create((t && t.prototype instanceof E ? t : E).prototype),
            a = new x(i || []);
        return (r._invoke = C(e, n, a)), r;
    }
    function f(e, t, n) {
        try {
            return {
                type: 'normal',
                arg: e.call(t, n)
            };
        } catch (e) {
            return {
                type: 'throw',
                arg: e
            };
        }
    }
    (c = t.regeneratorRuntime = u ? e.exports : {}).wrap = d;
    var _ = 'suspendedStart',
        p = 'suspendedYield',
        h = 'executing',
        m = 'completed',
        g = {};
    function E() {}
    function v() {}
    function y() {}
    var I = {};
    I[s] = function () {
        return this;
    };
    var b = Object.getPrototypeOf,
        T = b && b(b(L([])));
    T && T !== i && r.call(T, s) && (I = T);
    var S = (y.prototype = E.prototype = Object.create(I));
    function A(e) {
        ['next', 'throw', 'return'].forEach(function (t) {
            e[t] = function (e) {
                return this._invoke(t, e);
            };
        });
    }
    function N(e) {
        var t;
        function n(t, i, a, s) {
            var o = f(e[t], e, i);
            if ('throw' === o.type) s(o.arg);
            else {
                var l = o.arg,
                    u = l.value;
                return u && 'object' == typeof u && r.call(u, '__await')
                    ? Promise.resolve(u.__await).then(
                          function (e) {
                              n('next', e, a, s);
                          },
                          function (e) {
                              n('throw', e, a, s);
                          }
                      )
                    : Promise.resolve(u).then(
                          function (e) {
                              (l.value = e), a(l);
                          },
                          function (e) {
                              return n('throw', e, a, s);
                          }
                      );
            }
        }
        function i(e, i) {
            function r() {
                return new Promise(function (t, r) {
                    n(e, i, t, r);
                });
            }
            return (t = t ? t.then(r, r) : r());
        }
        this._invoke = i;
    }
    function C(e, t, n) {
        var i = _;
        return function (r, a) {
            if (i === h) throw Error('Generator is already running');
            if (i === m) {
                if ('throw' === r) throw a;
                return P();
            }
            for (n.method = r, n.arg = a; ; ) {
                var s = n.delegate;
                if (s) {
                    var o = R(s, n);
                    if (o) {
                        if (o === g) continue;
                        return o;
                    }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                    if (i === _) throw ((i = m), n.arg);
                    n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                i = h;
                var l = f(e, t, n);
                if ('normal' === l.type) {
                    if (((i = n.done ? m : p), l.arg === g)) continue;
                    return {
                        value: l.arg,
                        done: n.done
                    };
                }
                'throw' === l.type && ((i = m), (n.method = 'throw'), (n.arg = l.arg));
            }
        };
    }
    function R(e, t) {
        var i = e.iterator[t.method];
        if (n === i) {
            if (((t.delegate = null), 'throw' === t.method)) {
                if (e.iterator.return && ((t.method = 'return'), (t.arg = n), R(e, t), 'throw' === t.method)) return g;
                (t.method = 'throw'), (t.arg = TypeError("The iterator does not provide a 'throw' method"));
            }
            return g;
        }
        var r = f(i, e.iterator, t.arg);
        if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), g;
        var a = r.arg;
        return a ? (a.done ? ((t[e.resultName] = a.value), (t.next = e.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = n)), (t.delegate = null), g) : a) : ((t.method = 'throw'), (t.arg = TypeError('iterator result is not an object')), (t.delegate = null), g);
    }
    function O(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function D(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function x(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(O, this), this.reset(!0);
    }
    function L(e) {
        if (e) {
            var t = e[s];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var i = -1,
                    a = function t() {
                        for (; ++i < e.length; ) if (r.call(e, i)) return (t.value = e[i]), (t.done = !1), t;
                        return (t.value = n), (t.done = !0), t;
                    };
                return (a.next = a);
            }
        }
        return { next: P };
    }
    function P() {
        return {
            value: n,
            done: !0
        };
    }
    (v.prototype = S.constructor = y),
        (y.constructor = v),
        (y[l] = v.displayName = 'GeneratorFunction'),
        (c.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === v || 'GeneratorFunction' === (t.displayName || t.name));
        }),
        (c.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : ((e.__proto__ = y), l in e || (e[l] = 'GeneratorFunction')), (e.prototype = Object.create(S)), e;
        }),
        (c.awrap = function (e) {
            return { __await: e };
        }),
        A(N.prototype),
        (N.prototype[o] = function () {
            return this;
        }),
        (c.AsyncIterator = N),
        (c.async = function (e, t, n, i) {
            var r = new N(d(e, t, n, i));
            return c.isGeneratorFunction(t)
                ? r
                : r.next().then(function (e) {
                      return e.done ? e.value : r.next();
                  });
        }),
        A(S),
        (S[l] = 'Generator'),
        (S[s] = function () {
            return this;
        }),
        (S.toString = function () {
            return '[object Generator]';
        }),
        (c.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
                t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var i = t.pop();
                        if (i in e) return (n.value = i), (n.done = !1), n;
                    }
                    return (n.done = !0), n;
                }
            );
        }),
        (c.values = L),
        (x.prototype = {
            constructor: x,
            reset: function (e) {
                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = n), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = n), this.tryEntries.forEach(D), !e)) for (var t in this) 't' === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
            },
            stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ('throw' === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function i(i, r) {
                    return (o.type = 'throw'), (o.arg = e), (t.next = i), r && ((t.method = 'next'), (t.arg = n)), !!r;
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var s = this.tryEntries[a],
                        o = s.completion;
                    if ('root' === s.tryLoc) return i('end');
                    if (s.tryLoc <= this.prev) {
                        var l = r.call(s, 'catchLoc'),
                            u = r.call(s, 'finallyLoc');
                        if (l && u) {
                            if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                            if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                        } else if (l) {
                            if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                        } else if (u) {
                            if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                        } else throw Error('try statement without catch or finally');
                    }
                }
            },
            abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                        var a = i;
                        break;
                    }
                }
                a && ('break' === e || 'continue' === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var s = a ? a.completion : {};
                return ((s.type = e), (s.arg = t), a) ? ((this.method = 'next'), (this.next = a.finallyLoc), g) : this.complete(s);
            },
            complete: function (e, t) {
                if ('throw' === e.type) throw e.arg;
                return 'break' === e.type || 'continue' === e.type ? (this.next = e.arg) : 'return' === e.type ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end')) : 'normal' === e.type && t && (this.next = t), g;
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
                        var i = n.completion;
                        if ('throw' === i.type) {
                            var r = i.arg;
                            D(n);
                        }
                        return r;
                    }
                }
                throw Error('illegal catch attempt');
            },
            delegateYield: function (e, t, i) {
                return (
                    (this.delegate = {
                        iterator: L(e),
                        resultName: t,
                        nextLoc: i
                    }),
                    'next' === this.method && (this.arg = n),
                    g
                );
            }
        });
})(
    (function () {
        return this || ('object' == typeof self && self);
    })() || Function('return this')()
);
