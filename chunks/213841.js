var a,
    n,
    s,
    o = "__lodash_placeholder__",
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
    g = /^0o[0-7]+$/i,
    v = /^(?:0|[1-9]\d*)$/,
    m = parseInt,
    A = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
    w = "object" == typeof self && self && self.Object === Object && self,
    O = A || w || Function("return this")();

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
    for (var r = -1, a = e.length, n = 0, s = []; ++r < a; ) {
        var i = e[r];
        (i === t || i === o) && ((e[r] = o), (s[n++] = r));
    }
    return s;
}
var j = Function.prototype,
    C = Object.prototype,
    M = O["__core-js_shared__"],
    _ = (a = /[^.]+$/.exec((M && M.keys && M.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + a : "",
    R = j.toString,
    S = C.hasOwnProperty,
    D = C.toString,
    P = RegExp(
        "^" +
            R.call(S)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    ),
    T = Object.create,
    F = Math.max,
    B = Math.min,
    I = ((n = z(Object, "defineProperty")), (s = z.name) && s.length > 2 ? n : void 0);

function N(e) {
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
        var a = G((t = e.prototype)) ? T(t) : {},
            n = e.apply(a, r);
        return G(n) ? n : a;
    };
}

function L(e, t, r, a, n, s, o, i, c, l) {
    var u = 128 & t,
        b = 1 & t,
        f = 2 & t,
        d = 24 & t,
        h = 512 & t,
        p = f ? void 0 : N(e);

    function y() {
        for (var g = arguments.length, m = Array(g), A = g; A--; ) m[A] = arguments[A];
        if (d)
            var w = U(y),
                k = (function (e, t) {
                    for (var r = e.length, a = 0; r--; ) e[r] === t && a++;
                    return a;
                })(m, w);
        if (
            (a &&
                (m = (function (e, t, r, a) {
                    for (
                        var n = -1,
                            s = e.length,
                            o = r.length,
                            i = -1,
                            c = t.length,
                            l = F(s - o, 0),
                            u = Array(c + l),
                            b = !a;
                        ++i < c;
                    )
                        u[i] = t[i];
                    for (; ++n < o; ) (b || n < s) && (u[r[n]] = e[n]);
                    for (; l--; ) u[i++] = e[n++];
                    return u;
                })(m, a, n, d)),
            s &&
                (m = (function (e, t, r, a) {
                    for (
                        var n = -1,
                            s = e.length,
                            o = -1,
                            i = r.length,
                            c = -1,
                            l = t.length,
                            u = F(s - i, 0),
                            b = Array(u + l),
                            f = !a;
                        ++n < u;
                    )
                        b[n] = e[n];
                    for (var d = n; ++c < l; ) b[d + c] = t[c];
                    for (; ++o < i; ) (f || n < s) && (b[d + r[o]] = e[n++]);
                    return b;
                })(m, s, o, d)),
            (g -= k),
            d && g < l)
        ) {
            var E = x(m, w);
            return q(e, t, L, y.placeholder, r, m, E, i, c, l - g);
        }
        var j = b ? r : this,
            C = f ? j[e] : e;
        return (
            (g = m.length),
            i
                ? (m = (function (e, t) {
                      for (
                          var r = e.length,
                              a = B(t.length, r),
                              n = (function (e, t) {
                                  var r = -1,
                                      a = e.length;
                                  for (t || (t = Array(a)); ++r < a; ) t[r] = e[r];
                                  return t;
                              })(e);
                          a--;
                      ) {
                          var s,
                              o = t[a];
                          e[a] =
                              (s = null == (s = r) ? 0x1fffffffffffff : s) &&
                              ("number" == typeof o || v.test(o)) &&
                              o > -1 &&
                              o % 1 == 0 &&
                              o < s
                                  ? n[o]
                                  : void 0;
                      }
                      return e;
                  })(m, i))
                : h && g > 1 && m.reverse(),
            u && c < g && (m.length = c),
            this && this !== O && this instanceof y && (C = p || N(C)),
            C.apply(j, m)
        );
    }
    return y;
}

function q(e, t, r, a, n, s, o, i, c, l) {
    var u = 8 & t;
    (t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
    var b = r(e, t, n, u ? s : void 0, u ? o : void 0, u ? void 0 : s, u ? void 0 : o, i, c, l);
    return (b.placeholder = a), $(b, e, t);
}

function U(e) {
    return e.placeholder;
}

function z(e, t) {
    var r,
        a,
        n,
        s = null == e ? void 0 : e[t];
    return !(!G(s) || ((r = s), _ && _ in r)) &&
        ("[object Function]" == (n = G((a = s)) ? D.call(a) : "") ||
        "[object GeneratorFunction]" == n ||
        (function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
                try {
                    t = !!(e + "");
                } catch (e) {}
            return t;
        })(s)
            ? P
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
            })(s),
        )
        ? s
        : void 0;
}
var $ = I
    ? function (e, t, r) {
          var a,
              n,
              s,
              o,
              i,
              c,
              u,
              h = t + "";
          return I(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value:
                  ((s =
                      ((u =
                          (c = ((a = (o = h.match(f)) ? o[1].split(d) : []),
                          (n = r),
                          !(function (e, t) {
                              for (var r = -1, a = e ? e.length : 0; ++r < a && !1 !== t(e[r], r, e); );
                          })(l, function (e) {
                              var t = "_." + e[0];
                              n & e[1] &&
                                  !(
                                      (a ? a.length : 0) &&
                                      (function (e, t, r) {
                                          if (t != t) {
                                              for (var a = e.length, n = -1; ++n < a; ) if (E(e[n], n, e)) return n;
                                              return -1;
                                          }
                                          for (var s = -1, o = e.length; ++s < o; ) if (e[s] === t) return s;
                                          return -1;
                                      })(a, t, 0) > -1
                                  ) &&
                                  a.push(t);
                          }),
                          (i = a.sort())).length) - 1),
                      (i[u] = (c > 1 ? "& " : "") + i[u]),
                      (i = i.join(c > 2 ? ", " : " ")),
                      h.replace(b, "{\n/* [wrapped with " + i + "] */\n"))),
                  function () {
                      return s;
                  }),
          });
      }
    : function (e) {
          return e;
      };

function W(e, t, r) {
    var a = (function (e, t, r, a, n, s, o, i) {
        var c = 2 & t;
        if (!c && "function" != typeof e) throw TypeError("Expected a function");
        var l = a ? a.length : 0;
        if (
            (l || ((t &= -97), (a = n = void 0)),
            (o = void 0 === o ? o : F(V(o), 0)),
            (i = void 0 === i ? i : V(i)),
            (l -= n ? n.length : 0),
            64 & t)
        ) {
            var u = a,
                b = n;
            a = n = void 0;
        }
        var f = [e, t, r, a, n, u, b, s, o, i];
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
                      var a = N(e);

                      function n() {
                          for (var s = arguments.length, o = Array(s), i = s, c = U(n); i--; ) o[i] = arguments[i];
                          var l = s < 3 && o[0] !== c && o[s - 1] !== c ? [] : x(o, c);
                          return (s -= l.length) < r
                              ? q(e, t, L, n.placeholder, void 0, o, l, void 0, void 0, r - s)
                              : k(this && this !== O && this instanceof n ? a : e, this, o);
                      }
                      return n;
                  })(e, t, i))
                : (32 != t && 33 != t) || n.length
                  ? (C = L.apply(void 0, f))
                  : ((d = e),
                    (h = t),
                    (p = r),
                    (y = a),
                    (g = 1 & h),
                    (v = N(d)),
                    (C = function e() {
                        for (
                            var t = -1,
                                r = arguments.length,
                                a = -1,
                                n = y.length,
                                s = Array(n + r),
                                o = this && this !== O && this instanceof e ? v : d;
                            ++a < n;
                        )
                            s[a] = y[a];
                        for (; r--; ) s[a++] = arguments[++t];
                        return k(o, g ? p : this, s);
                    }));
        else
            var d,
                h,
                p,
                y,
                g,
                v,
                m,
                A,
                w,
                E,
                j,
                C =
                    ((m = e),
                    (A = t),
                    (w = r),
                    (E = 1 & A),
                    (j = N(m)),
                    function e() {
                        return (this && this !== O && this instanceof e ? j : m).apply(E ? w : this, arguments);
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
                  return a || g.test(e) ? m(e.slice(2), a ? 2 : 8) : h.test(e) ? c : +e;
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
