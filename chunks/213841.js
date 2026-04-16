var a,
    n,
    o,
    s = "__lodash_placeholder__",
    i = 1 / 0,
    c = 0 / 0,
    l = [
        ["ary", 128],
        ["bind", 1],
        ["bindKey", 2],
        ["curry", 8],
        ["curryRight", 16],
        ["flip", 512],
        ["partial", 32],
        ["partialRight", 64],
        ["rearg", 256],
    ],
    u = /^\s+|\s+$/g,
    b = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    f = /\{\n\/\* \[wrapped with (.+)\] \*/,
    d = /,? & /,
    h = /^[-+]0x[0-9a-f]+$/i,
    p = /^0b[01]+$/i,
    y = /^\[object .+?Constructor\]$/,
    v = /^0o[0-7]+$/i,
    g = /^(?:0|[1-9]\d*)$/,
    m = parseInt,
    w = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
    A = "object" == typeof self && self && self.Object === Object && self,
    O = w || A || Function("return this")();
function k(e, t, r) {
    switch (r.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, r[0]);
        case 2:
            return e.call(t, r[0], r[1]);
        case 3:
            return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
}
function E(e) {
    return e != e;
}
function x(e, t) {
    for (var r = -1, a = e.length, n = 0, o = []; ++r < a; ) {
        var i = e[r];
        (i === t || i === s) && ((e[r] = s), (o[n++] = r));
    }
    return o;
}
var j = Function.prototype,
    C = Object.prototype,
    M = O["__core-js_shared__"],
    _ = (a = /[^.]+$/.exec((M && M.keys && M.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + a : "",
    R = j.toString,
    S = C.hasOwnProperty,
    D = C.toString,
    T = RegExp(
        "^" +
            R.call(S)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    ),
    P = Object.create,
    F = Math.max,
    N = Math.min,
    I = ((n = z(Object, "defineProperty")), (o = z.name) && o.length > 2 ? n : void 0);
function B(e) {
    return function () {
        var t,
            r = arguments;
        switch (r.length) {
            case 0:
                return new e();
            case 1:
                return new e(r[0]);
            case 2:
                return new e(r[0], r[1]);
            case 3:
                return new e(r[0], r[1], r[2]);
            case 4:
                return new e(r[0], r[1], r[2], r[3]);
            case 5:
                return new e(r[0], r[1], r[2], r[3], r[4]);
            case 6:
                return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
            case 7:
                return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
        }
        var a = G((t = e.prototype)) ? P(t) : {},
            n = e.apply(a, r);
        return G(n) ? n : a;
    };
}
function L(e, t, r, a, n, o, s, i, c, l) {
    var u = 128 & t,
        b = 1 & t,
        f = 2 & t,
        d = 24 & t,
        h = 512 & t,
        p = f ? void 0 : B(e);
    function y() {
        for (var v = arguments.length, m = Array(v), w = v; w--; ) m[w] = arguments[w];
        if (d)
            var A = q(y),
                k = (function (e, t) {
                    for (var r = e.length, a = 0; r--; ) e[r] === t && a++;
                    return a;
                })(m, A);
        if (
            (a &&
                (m = (function (e, t, r, a) {
                    for (
                        var n = -1,
                            o = e.length,
                            s = r.length,
                            i = -1,
                            c = t.length,
                            l = F(o - s, 0),
                            u = Array(c + l),
                            b = !a;
                        ++i < c;
                    )
                        u[i] = t[i];
                    for (; ++n < s; ) (b || n < o) && (u[r[n]] = e[n]);
                    for (; l--; ) u[i++] = e[n++];
                    return u;
                })(m, a, n, d)),
            o &&
                (m = (function (e, t, r, a) {
                    for (
                        var n = -1,
                            o = e.length,
                            s = -1,
                            i = r.length,
                            c = -1,
                            l = t.length,
                            u = F(o - i, 0),
                            b = Array(u + l),
                            f = !a;
                        ++n < u;
                    )
                        b[n] = e[n];
                    for (var d = n; ++c < l; ) b[d + c] = t[c];
                    for (; ++s < i; ) (f || n < o) && (b[d + r[s]] = e[n++]);
                    return b;
                })(m, o, s, d)),
            (v -= k),
            d && v < l)
        ) {
            var E = x(m, A);
            return U(e, t, L, y.placeholder, r, m, E, i, c, l - v);
        }
        var j = b ? r : this,
            C = f ? j[e] : e;
        return (
            (v = m.length),
            i
                ? (m = (function (e, t) {
                      for (
                          var r = e.length,
                              a = N(t.length, r),
                              n = (function (e, t) {
                                  var r = -1,
                                      a = e.length;
                                  for (t || (t = Array(a)); ++r < a; ) t[r] = e[r];
                                  return t;
                              })(e);
                          a--;
                      ) {
                          var o,
                              s = t[a];
                          e[a] =
                              (o = null == (o = r) ? 0x1fffffffffffff : o) &&
                              ("number" == typeof s || g.test(s)) &&
                              s > -1 &&
                              s % 1 == 0 &&
                              s < o
                                  ? n[s]
                                  : void 0;
                      }
                      return e;
                  })(m, i))
                : h && v > 1 && m.reverse(),
            u && c < v && (m.length = c),
            this && this !== O && this instanceof y && (C = p || B(C)),
            C.apply(j, m)
        );
    }
    return y;
}
function U(e, t, r, a, n, o, s, i, c, l) {
    var u = 8 & t;
    (t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
    var b = r(e, t, n, u ? o : void 0, u ? s : void 0, u ? void 0 : o, u ? void 0 : s, i, c, l);
    return (b.placeholder = a), $(b, e, t);
}
function q(e) {
    return e.placeholder;
}
function z(e, t) {
    var r,
        a,
        n,
        o = null == e ? void 0 : e[t];
    return !(!G(o) || ((r = o), _ && _ in r)) &&
        ("[object Function]" == (n = G((a = o)) ? D.call(a) : "") ||
        "[object GeneratorFunction]" == n ||
        (function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
                try {
                    t = !!(e + "");
                } catch (e) {}
            return t;
        })(o)
            ? T
            : y
        ).test(
            (function (e) {
                if (null != e) {
                    try {
                        return R.call(e);
                    } catch (e) {}
                    try {
                        return e + "";
                    } catch (e) {}
                }
                return "";
            })(o),
        )
        ? o
        : void 0;
}
var $ = I
    ? function (e, t, r) {
          var a,
              n,
              o,
              s,
              i,
              c,
              u,
              h = t + "";
          return I(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value:
                  ((o =
                      ((u =
                          (c = ((a = (s = h.match(f)) ? s[1].split(d) : []),
                          (n = r),
                          !(function (e, t) {
                              for (var r = -1, a = e ? e.length : 0; ++r < a && !1 !== t(e[r], r, e); );
                          })(l, function (e) {
                              var t = "_." + e[0];
                              n & e[1] &&
                                  !(
                                      (a ? a.length : 0) &&
                                      (function (e, t) {
                                          if (t != t) {
                                              for (var r = e.length, a = -1; ++a < r; ) if (E(e[a], a, e)) return a;
                                              return -1;
                                          }
                                          for (var n = -1, o = e.length; ++n < o; ) if (e[n] === t) return n;
                                          return -1;
                                      })(a, t) > -1
                                  ) &&
                                  a.push(t);
                          }),
                          (i = a.sort())).length) - 1),
                      (i[u] = (c > 1 ? "& " : "") + i[u]),
                      (i = i.join(c > 2 ? ", " : " ")),
                      h.replace(b, "{\n/* [wrapped with " + i + "] */\n"))),
                  function () {
                      return o;
                  }),
          });
      }
    : function (e) {
          return e;
      };
function W(e, t, r) {
    var a = (function (e, t, r, a, n, o, s, i) {
        var c = 2 & t;
        if (!c && "function" != typeof e) throw TypeError("Expected a function");
        var l = a ? a.length : 0;
        if (
            (l || ((t &= -97), (a = n = void 0)),
            (s = void 0 === s ? s : F(V(s), 0)),
            (i = void 0 === i ? i : V(i)),
            (l -= n ? n.length : 0),
            64 & t)
        ) {
            var u = a,
                b = n;
            a = n = void 0;
        }
        var f = [e, t, r, a, n, u, b, o, s, i];
        if (
            ((e = f[0]),
            (t = f[1]),
            (r = f[2]),
            (a = f[3]),
            (n = f[4]),
            (i = f[9] = null == f[9] ? (c ? 0 : e.length) : F(f[9] - l, 0)) || !(24 & t) || (t &= -25),
            t && 1 != t)
        )
            8 == t || 16 == t
                ? (C = (function (e, t, r) {
                      var a = B(e);
                      function n() {
                          for (var o = arguments.length, s = Array(o), i = o, c = q(n); i--; ) s[i] = arguments[i];
                          var l = o < 3 && s[0] !== c && s[o - 1] !== c ? [] : x(s, c);
                          return (o -= l.length) < r
                              ? U(e, t, L, n.placeholder, void 0, s, l, void 0, void 0, r - o)
                              : k(this && this !== O && this instanceof n ? a : e, this, s);
                      }
                      return n;
                  })(e, t, i))
                : (32 != t && 33 != t) || n.length
                  ? (C = L.apply(void 0, f))
                  : ((d = e),
                    (h = t),
                    (p = r),
                    (y = a),
                    (v = 1 & h),
                    (g = B(d)),
                    (C = function e() {
                        for (
                            var t = -1,
                                r = arguments.length,
                                a = -1,
                                n = y.length,
                                o = Array(n + r),
                                s = this && this !== O && this instanceof e ? g : d;
                            ++a < n;
                        )
                            o[a] = y[a];
                        for (; r--; ) o[a++] = arguments[++t];
                        return k(s, v ? p : this, o);
                    }));
        else
            var d,
                h,
                p,
                y,
                v,
                g,
                m,
                w,
                A,
                E,
                j,
                C =
                    ((m = e),
                    (w = t),
                    (A = r),
                    (E = 1 & w),
                    (j = B(m)),
                    function e() {
                        return (this && this !== O && this instanceof e ? j : m).apply(E ? A : this, arguments);
                    });
        return $(C, e, t);
    })(e, 8, void 0, void 0, void 0, void 0, void 0, (t = r ? void 0 : t));
    return (a.placeholder = W.placeholder), a;
}
function G(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
}
function V(e) {
    var t,
        r = (t = e)
            ? (t = (function (e) {
                  if ("number" == typeof e) return e;
                  if ("symbol" == typeof (t = e) || (t && "object" == typeof t && "[object Symbol]" == D.call(t)))
                      return c;
                  if (G(e)) {
                      var t,
                          r = "function" == typeof e.valueOf ? e.valueOf() : e;
                      e = G(r) ? r + "" : r;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(u, "");
                  var a = p.test(e);
                  return a || v.test(e) ? m(e.slice(2), a ? 2 : 8) : h.test(e) ? c : +e;
              })(t)) === i || t === -i
                ? (t < 0 ? -1 : 1) * 17976931348623157e292
                : t == t
                  ? t
                  : 0
            : 0 === t
              ? t
              : 0,
        a = r % 1;
    return r == r ? (a ? r - a : r) : 0;
}
(W.placeholder = {}), (e.exports = W);
