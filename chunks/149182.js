!(function (t) {
    var n,
        r = Object.prototype,
        i = r.hasOwnProperty,
        o = 'function' == typeof Symbol ? Symbol : {},
        a = o.iterator || '@@iterator',
        s = o.asyncIterator || '@@asyncIterator',
        l = o.toStringTag || '@@toStringTag',
        c = !0,
        u = t.regeneratorRuntime;
    if (u) {
        c && (e.exports = u);
        return;
    }
    function d(e, t, n, r) {
        var i = Object.create((t && t.prototype instanceof E ? t : E).prototype);
        return (i._invoke = A(e, n, new w(r || []))), i;
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
    (u = t.regeneratorRuntime = c ? e.exports : {}).wrap = d;
    var _ = 'suspendedStart',
        p = 'suspendedYield',
        h = 'executing',
        m = 'completed',
        g = {};
    function E() {}
    function b() {}
    function y() {}
    var v = {};
    v[a] = function () {
        return this;
    };
    var O = Object.getPrototypeOf,
        I = O && O(O(D([])));
    I && I !== r && i.call(I, a) && (v = I);
    var S = (y.prototype = E.prototype = Object.create(v));
    function T(e) {
        ['next', 'throw', 'return'].forEach(function (t) {
            e[t] = function (e) {
                return this._invoke(t, e);
            };
        });
    }
    function N(e) {
        var t;
        function n(t, r, o, a) {
            var s = f(e[t], e, r);
            if ('throw' === s.type) a(s.arg);
            else {
                var l = s.arg,
                    c = l.value;
                return c && 'object' == typeof c && i.call(c, '__await')
                    ? Promise.resolve(c.__await).then(
                          function (e) {
                              n('next', e, o, a);
                          },
                          function (e) {
                              n('throw', e, o, a);
                          }
                      )
                    : Promise.resolve(c).then(
                          function (e) {
                              (l.value = e), o(l);
                          },
                          function (e) {
                              return n('throw', e, o, a);
                          }
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
    function A(e, t, n) {
        var r = _;
        return function (i, o) {
            if (r === h) throw Error('Generator is already running');
            if (r === m) {
                if ('throw' === i) throw o;
                return L();
            }
            for (n.method = i, n.arg = o; ; ) {
                var a = n.delegate;
                if (a) {
                    var s = C(a, n);
                    if (s) {
                        if (s === g) continue;
                        return s;
                    }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                    if (r === _) throw ((r = m), n.arg);
                    n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                r = h;
                var l = f(e, t, n);
                if ('normal' === l.type) {
                    if (((r = n.done ? m : p), l.arg === g)) continue;
                    return {
                        value: l.arg,
                        done: n.done
                    };
                }
                'throw' === l.type && ((r = m), (n.method = 'throw'), (n.arg = l.arg));
            }
        };
    }
    function C(e, t) {
        var r = e.iterator[t.method];
        if (n === r) {
            if (((t.delegate = null), 'throw' === t.method)) {
                if (e.iterator.return && ((t.method = 'return'), (t.arg = n), C(e, t), 'throw' === t.method)) return g;
                (t.method = 'throw'), (t.arg = TypeError("The iterator does not provide a 'throw' method"));
            }
            return g;
        }
        var i = f(r, e.iterator, t.arg);
        if ('throw' === i.type) return (t.method = 'throw'), (t.arg = i.arg), (t.delegate = null), g;
        var o = i.arg;
        return o ? (o.done ? ((t[e.resultName] = o.value), (t.next = e.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = n)), (t.delegate = null), g) : o) : ((t.method = 'throw'), (t.arg = TypeError('iterator result is not an object')), (t.delegate = null), g);
    }
    function R(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function P(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function w(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(R, this), this.reset(!0);
    }
    function D(e) {
        if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var r = -1,
                    o = function t() {
                        for (; ++r < e.length; ) if (i.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                        return (t.value = n), (t.done = !0), t;
                    };
                return (o.next = o);
            }
        }
        return { next: L };
    }
    function L() {
        return {
            value: n,
            done: !0
        };
    }
    (b.prototype = S.constructor = y),
        (y.constructor = b),
        (y[l] = b.displayName = 'GeneratorFunction'),
        (u.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name));
        }),
        (u.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : ((e.__proto__ = y), l in e || (e[l] = 'GeneratorFunction')), (e.prototype = Object.create(S)), e;
        }),
        (u.awrap = function (e) {
            return { __await: e };
        }),
        T(N.prototype),
        (N.prototype[s] = function () {
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
        T(S),
        (S[l] = 'Generator'),
        (S[a] = function () {
            return this;
        }),
        (S.toString = function () {
            return '[object Generator]';
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
        (u.values = D),
        (w.prototype = {
            constructor: w,
            reset: function (e) {
                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = n), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = n), this.tryEntries.forEach(P), !e)) for (var t in this) 't' === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
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
                function r(r, i) {
                    return (s.type = 'throw'), (s.arg = e), (t.next = r), i && ((t.method = 'next'), (t.arg = n)), !!i;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o],
                        s = a.completion;
                    if ('root' === a.tryLoc) return r('end');
                    if (a.tryLoc <= this.prev) {
                        var l = i.call(a, 'catchLoc'),
                            c = i.call(a, 'finallyLoc');
                        if (l && c) {
                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                            else if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        } else if (l) {
                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        } else if (c) {
                            if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        } else throw Error('try statement without catch or finally');
                    }
                }
            },
            abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                        var o = r;
                        break;
                    }
                }
                o && ('break' === e || 'continue' === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return ((a.type = e), (a.arg = t), o) ? ((this.method = 'next'), (this.next = o.finallyLoc), g) : this.complete(a);
            },
            complete: function (e, t) {
                if ('throw' === e.type) throw e.arg;
                return 'break' === e.type || 'continue' === e.type ? (this.next = e.arg) : 'return' === e.type ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end')) : 'normal' === e.type && t && (this.next = t), g;
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), g;
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ('throw' === r.type) {
                            var i = r.arg;
                            P(n);
                        }
                        return i;
                    }
                }
                throw Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
                return (
                    (this.delegate = {
                        iterator: D(e),
                        resultName: t,
                        nextLoc: r
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
