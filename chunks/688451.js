function i(e) {
    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    throw Error(
        '[Immer] minified error nr: ' +
            e +
            (r.length
                ? ' ' +
                  r
                      .map(function (e) {
                          return "'" + e + "'";
                      })
                      .join(',')
                : '') +
            '. Find the full error at: https://bit.ly/3cXEKWf'
    );
}
function a(e) {
    return !!e && !!e[Q];
}
function s(e) {
    var n;
    return (
        !!e &&
        ((function (e) {
            if (!e || 'object' != typeof e) return !1;
            var n = Object.getPrototypeOf(e);
            if (null === n) return !0;
            var r = Object.hasOwnProperty.call(n, 'constructor') && n.constructor;
            return r === Object || ('function' == typeof r && Function.toString.call(r) === J);
        })(e) ||
            Array.isArray(e) ||
            !!e[q] ||
            !!(null === (n = e.constructor) || void 0 === n ? void 0 : n[q]) ||
            _(e) ||
            h(e))
    );
}
r.d(n, {
    P2: function () {
        return es;
    },
    Uy: function () {
        return ea;
    },
    _x: function () {
        return eo;
    },
    mv: function () {
        return a;
    }
});
function o(e, n, r) {
    void 0 === r && (r = !1),
        0 === l(e)
            ? (r ? Object.keys : $)(e).forEach(function (i) {
                  (r && 'symbol' == typeof i) || n(i, e[i], e);
              })
            : e.forEach(function (r, i) {
                  return n(i, r, e);
              });
}
function l(e) {
    var n = e[Q];
    return n ? (n.i > 3 ? n.i - 4 : n.i) : Array.isArray(e) ? 1 : _(e) ? 2 : h(e) ? 3 : 0;
}
function u(e, n) {
    return 2 === l(e) ? e.has(n) : Object.prototype.hasOwnProperty.call(e, n);
}
function c(e, n) {
    return 2 === l(e) ? e.get(n) : e[n];
}
function d(e, n, r) {
    var i = l(e);
    2 === i ? e.set(n, r) : 3 === i ? e.add(r) : (e[n] = r);
}
function f(e, n) {
    return e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n;
}
function _(e) {
    return Y && e instanceof Map;
}
function h(e) {
    return W && e instanceof Set;
}
function p(e) {
    return e.o || e.t;
}
function m(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var n = ee(e);
    delete n[Q];
    for (var r = $(n), i = 0; i < r.length; i++) {
        var a = r[i],
            s = n[a];
        !1 === s.writable && ((s.writable = !0), (s.configurable = !0)),
            (s.get || s.set) &&
                (n[a] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: s.enumerable,
                    value: e[a]
                });
    }
    return Object.create(Object.getPrototypeOf(e), n);
}
function g(e, n) {
    return (
        void 0 === n && (n = !1),
        v(e) ||
            a(e) ||
            !s(e) ||
            (l(e) > 1 && (e.set = e.add = e.clear = e.delete = E),
            Object.freeze(e),
            n &&
                o(
                    e,
                    function (e, n) {
                        return g(n, !0);
                    },
                    !0
                )),
        e
    );
}
function E() {
    i(2);
}
function v(e) {
    return null == e || 'object' != typeof e || Object.isFrozen(e);
}
function I(e) {
    var n = et[e];
    return n || i(18, e), n;
}
function T(e, n) {
    et[e] || (et[e] = n);
}
function b() {
    return j;
}
function y(e, n) {
    n && (I('Patches'), (e.u = []), (e.s = []), (e.v = n));
}
function S(e) {
    A(e), e.p.forEach(C), (e.p = null);
}
function A(e) {
    e === j && (j = e.l);
}
function N(e) {
    return (j = {
        p: [],
        l: j,
        h: e,
        m: !0,
        _: 0
    });
}
function C(e) {
    var n = e[Q];
    0 === n.i || 1 === n.i ? n.j() : (n.g = !0);
}
function R(e, n) {
    n._ = n.p.length;
    var r = n.p[0],
        a = void 0 !== e && e !== r;
    return n.h.O || I('ES5').S(n, e, a), a ? (r[Q].P && (S(n), i(4)), s(e) && ((e = O(n, e)), n.l || L(n, e)), n.u && I('Patches').M(r[Q].t, e, n.u, n.s)) : (e = O(n, r, [])), S(n), n.u && n.v(n.u, n.s), e !== z ? e : void 0;
}
function O(e, n, r) {
    if (v(n)) return n;
    var i = n[Q];
    if (!i)
        return (
            o(
                n,
                function (a, s) {
                    return D(e, i, n, a, s, r);
                },
                !0
            ),
            n
        );
    if (i.A !== e) return n;
    if (!i.P) return L(e, i.t, !0), i.t;
    if (!i.I) {
        (i.I = !0), i.A._--;
        var a = 4 === i.i || 5 === i.i ? (i.o = m(i.k)) : i.o,
            s = a,
            l = !1;
        3 === i.i && ((s = new Set(a)), a.clear(), (l = !0)),
            o(s, function (n, s) {
                return D(e, i, a, n, s, r, l);
            }),
            L(e, a, !1),
            r && e.u && I('Patches').N(i, r, e.u, e.s);
    }
    return i.o;
}
function D(e, n, r, i, o, l, c) {
    if (a(o)) {
        var f = O(e, o, l && n && 3 !== n.i && !u(n.R, i) ? l.concat(i) : void 0);
        if ((d(r, i, f), !a(f))) return;
        e.m = !1;
    } else c && r.add(o);
    if (s(o) && !v(o)) {
        if (!e.h.D && e._ < 1) return;
        O(e, o), (n && n.A.l) || L(e, o);
    }
}
function L(e, n, r) {
    void 0 === r && (r = !1), !e.l && e.h.D && e.m && g(n, r);
}
function x(e, n) {
    var r = e[Q];
    return (r ? p(r) : e)[n];
}
function w(e, n) {
    if (n in e)
        for (var r = Object.getPrototypeOf(e); r; ) {
            var i = Object.getOwnPropertyDescriptor(r, n);
            if (i) return i;
            r = Object.getPrototypeOf(r);
        }
}
function P(e) {
    e.P || ((e.P = !0), e.l && P(e.l));
}
function M(e) {
    e.o || (e.o = m(e.t));
}
function k(e, n, r) {
    var i = _(n)
        ? I('MapSet').F(n, r)
        : h(n)
          ? I('MapSet').T(n, r)
          : e.O
            ? (function (e, n) {
                  var r = Array.isArray(e),
                      i = {
                          i: r ? 1 : 0,
                          A: n ? n.A : b(),
                          P: !1,
                          I: !1,
                          R: {},
                          l: n,
                          t: e,
                          k: null,
                          o: null,
                          j: null,
                          C: !1
                      },
                      a = i,
                      s = en;
                  r && ((a = [i]), (s = er));
                  var o = Proxy.revocable(a, s),
                      l = o.revoke,
                      u = o.proxy;
                  return (i.k = u), (i.j = l), u;
              })(n, r)
            : I('ES5').J(n, r);
    return (r ? r.A : b()).p.push(i), i;
}
function U(e) {
    return (
        a(e) || i(22, e),
        (function e(n) {
            if (!s(n)) return n;
            var r,
                i = n[Q],
                a = l(n);
            if (i) {
                if (!i.P && (i.i < 4 || !I('ES5').K(i))) return i.t;
                (i.I = !0), (r = B(n, a)), (i.I = !1);
            } else r = B(n, a);
            return (
                o(r, function (n, a) {
                    (i && c(i.t, n) === a) || d(r, n, e(a));
                }),
                3 === a ? new Set(r) : r
            );
        })(e)
    );
}
function B(e, n) {
    switch (n) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return m(e);
}
function G() {
    function e(e, n) {
        var r = s[e];
        return (
            r
                ? (r.enumerable = n)
                : (s[e] = r =
                      {
                          configurable: !0,
                          enumerable: n,
                          get: function () {
                              var n = this[Q];
                              return en.get(n, e);
                          },
                          set: function (n) {
                              var r = this[Q];
                              en.set(r, e, n);
                          }
                      }),
            r
        );
    }
    function n(e) {
        for (var n = e.length - 1; n >= 0; n--) {
            var a = e[n][Q];
            if (!a.P)
                switch (a.i) {
                    case 5:
                        i(a) && P(a);
                        break;
                    case 4:
                        r(a) && P(a);
                }
        }
    }
    function r(e) {
        for (var n = e.t, r = e.k, i = $(r), a = i.length - 1; a >= 0; a--) {
            var s = i[a];
            if (s !== Q) {
                var o = n[s];
                if (void 0 === o && !u(n, s)) return !0;
                var l = r[s],
                    c = l && l[Q];
                if (c ? c.t !== o : !f(l, o)) return !0;
            }
        }
        var d = !!n[Q];
        return i.length !== $(n).length + (d ? 0 : 1);
    }
    function i(e) {
        var n = e.k;
        if (n.length !== e.t.length) return !0;
        var r = Object.getOwnPropertyDescriptor(n, n.length - 1);
        if (r && !r.get) return !0;
        for (var i = 0; i < n.length; i++) if (!n.hasOwnProperty(i)) return !0;
        return !1;
    }
    var s = {};
    T('ES5', {
        J: function (n, r) {
            var i = Array.isArray(n),
                a = (function (n, r) {
                    if (n) {
                        for (var i = Array(r.length), a = 0; a < r.length; a++) Object.defineProperty(i, '' + a, e(a, !0));
                        return i;
                    }
                    var s = ee(r);
                    delete s[Q];
                    for (var o = $(s), l = 0; l < o.length; l++) {
                        var u = o[l];
                        s[u] = e(u, n || !!s[u].enumerable);
                    }
                    return Object.create(Object.getPrototypeOf(r), s);
                })(i, n),
                s = {
                    i: i ? 5 : 4,
                    A: r ? r.A : b(),
                    P: !1,
                    I: !1,
                    R: {},
                    l: r,
                    t: n,
                    k: a,
                    o: null,
                    g: !1,
                    C: !1
                };
            return (
                Object.defineProperty(a, Q, {
                    value: s,
                    writable: !0
                }),
                a
            );
        },
        S: function (e, r, s) {
            s
                ? a(r) && r[Q].A === e && n(e.p)
                : (e.u &&
                      (function e(n) {
                          if (n && 'object' == typeof n) {
                              var r = n[Q];
                              if (r) {
                                  var a = r.t,
                                      s = r.k,
                                      l = r.R,
                                      c = r.i;
                                  if (4 === c)
                                      o(s, function (n) {
                                          n !== Q && (void 0 !== a[n] || u(a, n) ? l[n] || e(s[n]) : ((l[n] = !0), P(r)));
                                      }),
                                          o(a, function (e) {
                                              void 0 !== s[e] || u(s, e) || ((l[e] = !1), P(r));
                                          });
                                  else if (5 === c) {
                                      if ((i(r) && (P(r), (l.length = !0)), s.length < a.length)) for (var d = s.length; d < a.length; d++) l[d] = !1;
                                      else for (var f = a.length; f < s.length; f++) l[f] = !0;
                                      for (var _ = Math.min(s.length, a.length), h = 0; h < _; h++) s.hasOwnProperty(h) || (l[h] = !0), void 0 === l[h] && e(s[h]);
                                  }
                              }
                          }
                      })(e.p[0]),
                  n(e.p));
        },
        K: function (e) {
            return 4 === e.i ? r(e) : i(e);
        }
    });
}
function Z() {
    function e(n) {
        if (!s(n)) return n;
        if (Array.isArray(n)) return n.map(e);
        if (_(n))
            return new Map(
                Array.from(n.entries()).map(function (n) {
                    return [n[0], e(n[1])];
                })
            );
        if (h(n)) return new Set(Array.from(n).map(e));
        var r = Object.create(Object.getPrototypeOf(n));
        for (var i in n) r[i] = e(n[i]);
        return u(n, q) && (r[q] = n[q]), r;
    }
    function n(n) {
        return a(n) ? e(n) : n;
    }
    var r = 'add';
    T('Patches', {
        $: function (n, a) {
            return (
                a.forEach(function (a) {
                    for (var s = a.path, o = a.op, u = n, d = 0; d < s.length - 1; d++) {
                        var f = l(u),
                            _ = s[d];
                        'string' != typeof _ && 'number' != typeof _ && (_ = '' + _), (0 !== f && 1 !== f) || ('__proto__' !== _ && 'constructor' !== _) || i(24), 'function' == typeof u && 'prototype' === _ && i(24), 'object' != typeof (u = c(u, _)) && i(15, s.join('/'));
                    }
                    var h = l(u),
                        p = e(a.value),
                        m = s[s.length - 1];
                    switch (o) {
                        case 'replace':
                            switch (h) {
                                case 2:
                                    return u.set(m, p);
                                case 3:
                                    i(16);
                                default:
                                    return (u[m] = p);
                            }
                        case r:
                            switch (h) {
                                case 1:
                                    return '-' === m ? u.push(p) : u.splice(m, 0, p);
                                case 2:
                                    return u.set(m, p);
                                case 3:
                                    return u.add(p);
                                default:
                                    return (u[m] = p);
                            }
                        case 'remove':
                            switch (h) {
                                case 1:
                                    return u.splice(m, 1);
                                case 2:
                                    return u.delete(m);
                                case 3:
                                    return u.delete(a.value);
                                default:
                                    return delete u[m];
                            }
                        default:
                            i(17, o);
                    }
                }),
                n
            );
        },
        N: function (e, i, a, s) {
            switch (e.i) {
                case 0:
                case 4:
                case 2:
                    return (function (e, i, a, s) {
                        var l = e.t,
                            d = e.o;
                        o(e.R, function (e, o) {
                            var f = c(l, e),
                                _ = c(d, e),
                                h = o ? (u(l, e) ? 'replace' : r) : 'remove';
                            if (f !== _ || 'replace' !== h) {
                                var p = i.concat(e);
                                a.push(
                                    'remove' === h
                                        ? {
                                              op: h,
                                              path: p
                                          }
                                        : {
                                              op: h,
                                              path: p,
                                              value: _
                                          }
                                ),
                                    s.push(
                                        h === r
                                            ? {
                                                  op: 'remove',
                                                  path: p
                                              }
                                            : 'remove' === h
                                              ? {
                                                    op: r,
                                                    path: p,
                                                    value: n(f)
                                                }
                                              : {
                                                    op: 'replace',
                                                    path: p,
                                                    value: n(f)
                                                }
                                    );
                            }
                        });
                    })(e, i, a, s);
                case 5:
                case 1:
                    return (function (e, i, a, s) {
                        var o = e.t,
                            l = e.R,
                            u = e.o;
                        if (u.length < o.length) {
                            var c = [u, o];
                            (o = c[0]), (u = c[1]);
                            var d = [s, a];
                            (a = d[0]), (s = d[1]);
                        }
                        for (var f = 0; f < o.length; f++)
                            if (l[f] && u[f] !== o[f]) {
                                var _ = i.concat([f]);
                                a.push({
                                    op: 'replace',
                                    path: _,
                                    value: n(u[f])
                                }),
                                    s.push({
                                        op: 'replace',
                                        path: _,
                                        value: n(o[f])
                                    });
                            }
                        for (var h = o.length; h < u.length; h++) {
                            var p = i.concat([h]);
                            a.push({
                                op: r,
                                path: p,
                                value: n(u[h])
                            });
                        }
                        o.length < u.length &&
                            s.push({
                                op: 'replace',
                                path: i.concat(['length']),
                                value: o.length
                            });
                    })(e, i, a, s);
                case 3:
                    return (function (e, n, i, a) {
                        var s = e.t,
                            o = e.o,
                            l = 0;
                        s.forEach(function (e) {
                            if (!o.has(e)) {
                                var s = n.concat([l]);
                                i.push({
                                    op: 'remove',
                                    path: s,
                                    value: e
                                }),
                                    a.unshift({
                                        op: r,
                                        path: s,
                                        value: e
                                    });
                            }
                            l++;
                        }),
                            (l = 0),
                            o.forEach(function (e) {
                                if (!s.has(e)) {
                                    var o = n.concat([l]);
                                    i.push({
                                        op: r,
                                        path: o,
                                        value: e
                                    }),
                                        a.unshift({
                                            op: 'remove',
                                            path: o,
                                            value: e
                                        });
                                }
                                l++;
                            });
                    })(e, i, a, s);
            }
        },
        M: function (e, n, r, i) {
            r.push({
                op: 'replace',
                path: [],
                value: n === z ? void 0 : n
            }),
                i.push({
                    op: 'replace',
                    path: [],
                    value: e
                });
        }
    });
}
function F() {
    function e(e, n) {
        function r() {
            this.constructor = e;
        }
        l(e, n), (e.prototype = ((r.prototype = n.prototype), new r()));
    }
    function n(e) {
        e.o || ((e.R = new Map()), (e.o = new Map(e.t)));
    }
    function r(e) {
        e.o ||
            ((e.o = new Set()),
            e.t.forEach(function (n) {
                if (s(n)) {
                    var r = k(e.A.h, n, e);
                    e.p.set(n, r), e.o.add(r);
                } else e.o.add(n);
            }));
    }
    function a(e) {
        e.g && i(3, JSON.stringify(p(e)));
    }
    var l = function (e, n) {
            return (l =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, n) {
                        e.__proto__ = n;
                    }) ||
                function (e, n) {
                    for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
                })(e, n);
        },
        u = (function () {
            function r(e, n) {
                return (
                    (this[Q] = {
                        i: 2,
                        l: n,
                        A: n ? n.A : b(),
                        P: !1,
                        I: !1,
                        o: void 0,
                        R: void 0,
                        t: e,
                        k: this,
                        C: !1,
                        g: !1
                    }),
                    this
                );
            }
            e(r, Map);
            var i = r.prototype;
            return (
                Object.defineProperty(i, 'size', {
                    get: function () {
                        return p(this[Q]).size;
                    }
                }),
                (i.has = function (e) {
                    return p(this[Q]).has(e);
                }),
                (i.set = function (e, r) {
                    var i = this[Q];
                    return a(i), (p(i).has(e) && p(i).get(e) === r) || (n(i), P(i), i.R.set(e, !0), i.o.set(e, r), i.R.set(e, !0)), this;
                }),
                (i.delete = function (e) {
                    if (!this.has(e)) return !1;
                    var r = this[Q];
                    return a(r), n(r), P(r), r.t.has(e) ? r.R.set(e, !1) : r.R.delete(e), r.o.delete(e), !0;
                }),
                (i.clear = function () {
                    var e = this[Q];
                    a(e),
                        p(e).size &&
                            (n(e),
                            P(e),
                            (e.R = new Map()),
                            o(e.t, function (n) {
                                e.R.set(n, !1);
                            }),
                            e.o.clear());
                }),
                (i.forEach = function (e, n) {
                    var r = this;
                    p(this[Q]).forEach(function (i, a) {
                        e.call(n, r.get(a), a, r);
                    });
                }),
                (i.get = function (e) {
                    var r = this[Q];
                    a(r);
                    var i = p(r).get(e);
                    if (r.I || !s(i) || i !== r.t.get(e)) return i;
                    var o = k(r.A.h, i, r);
                    return n(r), r.o.set(e, o), o;
                }),
                (i.keys = function () {
                    return p(this[Q]).keys();
                }),
                (i.values = function () {
                    var e,
                        n = this,
                        r = this.keys();
                    return (
                        ((e = {})[X] = function () {
                            return n.values();
                        }),
                        (e.next = function () {
                            var e = r.next();
                            return e.done
                                ? e
                                : {
                                      done: !1,
                                      value: n.get(e.value)
                                  };
                        }),
                        e
                    );
                }),
                (i.entries = function () {
                    var e,
                        n = this,
                        r = this.keys();
                    return (
                        ((e = {})[X] = function () {
                            return n.entries();
                        }),
                        (e.next = function () {
                            var e = r.next();
                            if (e.done) return e;
                            var i = n.get(e.value);
                            return {
                                done: !1,
                                value: [e.value, i]
                            };
                        }),
                        e
                    );
                }),
                (i[X] = function () {
                    return this.entries();
                }),
                r
            );
        })(),
        c = (function () {
            function n(e, n) {
                return (
                    (this[Q] = {
                        i: 3,
                        l: n,
                        A: n ? n.A : b(),
                        P: !1,
                        I: !1,
                        o: void 0,
                        t: e,
                        k: this,
                        p: new Map(),
                        g: !1,
                        C: !1
                    }),
                    this
                );
            }
            e(n, Set);
            var i = n.prototype;
            return (
                Object.defineProperty(i, 'size', {
                    get: function () {
                        return p(this[Q]).size;
                    }
                }),
                (i.has = function (e) {
                    var n = this[Q];
                    return a(n), n.o ? !!n.o.has(e) || !(!n.p.has(e) || !n.o.has(n.p.get(e))) : n.t.has(e);
                }),
                (i.add = function (e) {
                    var n = this[Q];
                    return a(n), this.has(e) || (r(n), P(n), n.o.add(e)), this;
                }),
                (i.delete = function (e) {
                    if (!this.has(e)) return !1;
                    var n = this[Q];
                    return a(n), r(n), P(n), n.o.delete(e) || (!!n.p.has(e) && n.o.delete(n.p.get(e)));
                }),
                (i.clear = function () {
                    var e = this[Q];
                    a(e), p(e).size && (r(e), P(e), e.o.clear());
                }),
                (i.values = function () {
                    var e = this[Q];
                    return a(e), r(e), e.o.values();
                }),
                (i.entries = function () {
                    var e = this[Q];
                    return a(e), r(e), e.o.entries();
                }),
                (i.keys = function () {
                    return this.values();
                }),
                (i[X] = function () {
                    return this.values();
                }),
                (i.forEach = function (e, n) {
                    for (var r = this.values(), i = r.next(); !i.done; ) e.call(n, i.value, i.value, this), (i = r.next());
                }),
                n
            );
        })();
    T('MapSet', {
        F: function (e, n) {
            return new u(e, n);
        },
        T: function (e, n) {
            return new c(e, n);
        }
    });
}
var V,
    j,
    H = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
    Y = 'undefined' != typeof Map,
    W = 'undefined' != typeof Set,
    K = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
    z = H ? Symbol.for('immer-nothing') : (((V = {})['immer-nothing'] = !0), V),
    q = H ? Symbol.for('immer-draftable') : '__$immer_draftable',
    Q = H ? Symbol.for('immer-state') : '__$immer_state',
    X = ('undefined' != typeof Symbol && Symbol.iterator) || '@@iterator',
    J = '' + Object.prototype.constructor,
    $ =
        'undefined' != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    ee =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var n = {};
            return (
                $(e).forEach(function (r) {
                    n[r] = Object.getOwnPropertyDescriptor(e, r);
                }),
                n
            );
        },
    et = {},
    en = {
        get: function (e, n) {
            if (n === Q) return e;
            var r = p(e);
            if (!u(r, n))
                return (function (e, n, r) {
                    var i,
                        a = w(n, r);
                    return a ? ('value' in a ? a.value : null === (i = a.get) || void 0 === i ? void 0 : i.call(e.k)) : void 0;
                })(e, r, n);
            var i = r[n];
            return e.I || !s(i) ? i : i === x(e.t, n) ? (M(e), (e.o[n] = k(e.A.h, i, e))) : i;
        },
        has: function (e, n) {
            return n in p(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(p(e));
        },
        set: function (e, n, r) {
            var i = w(p(e), n);
            if (null == i ? void 0 : i.set) return i.set.call(e.k, r), !0;
            if (!e.P) {
                var a = x(p(e), n),
                    s = null == a ? void 0 : a[Q];
                if (s && s.t === r) return (e.o[n] = r), (e.R[n] = !1), !0;
                if (f(r, a) && (void 0 !== r || u(e.t, n))) return !0;
                M(e), P(e);
            }
            return (e.o[n] === r && (void 0 !== r || n in e.o)) || (Number.isNaN(r) && Number.isNaN(e.o[n])) || ((e.o[n] = r), (e.R[n] = !0)), !0;
        },
        deleteProperty: function (e, n) {
            return void 0 !== x(e.t, n) || n in e.t ? ((e.R[n] = !1), M(e), P(e)) : delete e.R[n], e.o && delete e.o[n], !0;
        },
        getOwnPropertyDescriptor: function (e, n) {
            var r = p(e),
                i = Reflect.getOwnPropertyDescriptor(r, n);
            return i
                ? {
                      writable: !0,
                      configurable: 1 !== e.i || 'length' !== n,
                      enumerable: i.enumerable,
                      value: r[n]
                  }
                : i;
        },
        defineProperty: function () {
            i(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            i(12);
        }
    },
    er = {};
o(en, function (e, n) {
    er[e] = function () {
        return (arguments[0] = arguments[0][0]), n.apply(this, arguments);
    };
}),
    (er.deleteProperty = function (e, n) {
        return er.set.call(this, e, n, void 0);
    }),
    (er.set = function (e, n, r) {
        return en.set.call(this, e[0], n, r, e[0]);
    });
var ei = new ((function () {
        function e(e) {
            var n = this;
            (this.O = K),
                (this.D = !0),
                (this.produce = function (e, r, a) {
                    if ('function' == typeof e && 'function' != typeof r) {
                        var o,
                            l = r;
                        r = e;
                        var u = n;
                        return function (e) {
                            var n = this;
                            void 0 === e && (e = l);
                            for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                            return u.produce(e, function (e) {
                                var i;
                                return (i = r).call.apply(i, [n, e].concat(a));
                            });
                        };
                    }
                    if (('function' != typeof r && i(6), void 0 !== a && 'function' != typeof a && i(7), s(e))) {
                        var c = N(n),
                            d = k(n, e, void 0),
                            f = !0;
                        try {
                            (o = r(d)), (f = !1);
                        } finally {
                            f ? S(c) : A(c);
                        }
                        return 'undefined' != typeof Promise && o instanceof Promise
                            ? o.then(
                                  function (e) {
                                      return y(c, a), R(e, c);
                                  },
                                  function (e) {
                                      throw (S(c), e);
                                  }
                              )
                            : (y(c, a), R(o, c));
                    }
                    if (!e || 'object' != typeof e) {
                        if ((void 0 === (o = r(e)) && (o = e), o === z && (o = void 0), n.D && g(o, !0), a)) {
                            var _ = [],
                                h = [];
                            I('Patches').M(e, o, _, h), a(_, h);
                        }
                        return o;
                    }
                    i(21, e);
                }),
                (this.produceWithPatches = function (e, r) {
                    if ('function' == typeof e)
                        return function (r) {
                            for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                            return n.produceWithPatches(r, function (n) {
                                return e.apply(void 0, [n].concat(a));
                            });
                        };
                    var i,
                        a,
                        s = n.produce(e, r, function (e, n) {
                            (i = e), (a = n);
                        });
                    return 'undefined' != typeof Promise && s instanceof Promise
                        ? s.then(function (e) {
                              return [e, i, a];
                          })
                        : [s, i, a];
                }),
                'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
        }
        var n = e.prototype;
        return (
            (n.createDraft = function (e) {
                s(e) || i(8), a(e) && (e = U(e));
                var n = N(this),
                    r = k(this, e, void 0);
                return (r[Q].C = !0), A(n), r;
            }),
            (n.finishDraft = function (e, n) {
                var r = (e && e[Q]).A;
                return y(r, n), R(void 0, r);
            }),
            (n.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (n.setUseProxies = function (e) {
                e && !K && i(20), (this.O = e);
            }),
            (n.applyPatches = function (e, n) {
                for (r = n.length - 1; r >= 0; r--) {
                    var r,
                        i = n[r];
                    if (0 === i.path.length && 'replace' === i.op) {
                        e = i.value;
                        break;
                    }
                }
                r > -1 && (n = n.slice(r + 1));
                var s = I('Patches').$;
                return a(e)
                    ? s(e, n)
                    : this.produce(e, function (e) {
                          return s(e, n);
                      });
            }),
            e
        );
    })())(),
    ea = ei.produce,
    es = (ei.produceWithPatches.bind(ei), ei.setAutoFreeze.bind(ei), ei.setUseProxies.bind(ei), ei.applyPatches.bind(ei), ei.createDraft.bind(ei)),
    eo = ei.finishDraft.bind(ei);
