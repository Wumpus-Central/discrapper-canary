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
    f = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    b = /\{\n\/\* \[wrapped with (.+)\] \*/,
    d = /,? & /,
    h = /^[-+]0x[0-9a-f]+$/i,
    p = /^0b[01]+$/i,
    m = /^\[object .+?Constructor\]$/,
    g = /^0o[0-7]+$/i,
    y = /^(?:0|[1-9]\d*)$/,
    v = parseInt,
    w = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
    M = "object" == typeof self && self && self.Object === Object && self,
    A = w || M || Function("return this")();
function O(e, t, r) {
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
function k(e) {
    return e != e;
}
function C(e, t) {
    for (var r = -1, a = e.length, n = 0, o = []; ++r < a; ) {
        var i = e[r];
        (i === t || i === s) && ((e[r] = s), (o[n++] = r));
    }
    return o;
}
var E = Function.prototype,
    x = Object.prototype,
    R = A["__core-js_shared__"],
    _ = (a = /[^.]+$/.exec((R && R.keys && R.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + a : "",
    j = E.toString,
    S = x.hasOwnProperty,
    N = x.toString,
    B = RegExp(
        "^" +
            j
                .call(S)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    ),
    D = Object.create,
    P = Math.max,
    I = Math.min,
    T = ((n = $(Object, "defineProperty")), (o = $.name) && o.length > 2 ? n : void 0);
function L(e) {
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
        var a = G((t = e.prototype)) ? D(t) : {},
            n = e.apply(a, r);
        return G(n) ? n : a;
    };
}
function F(e, t, r, a, n, o, s, i, c, l) {
    var u = 128 & t,
        f = 1 & t,
        b = 2 & t,
        d = 24 & t,
        h = 512 & t,
        p = b ? void 0 : L(e);
    function m() {
        for (var g = arguments.length, v = Array(g), w = g; w--; ) v[w] = arguments[w];
        if (d)
            var M = q(m),
                O = (function (e, t) {
                    for (var r = e.length, a = 0; r--; ) e[r] === t && a++;
                    return a;
                })(v, M);
        if (
            (a &&
                (v = (function (e, t, r, a) {
                    for (
                        var n = -1,
                            o = e.length,
                            s = r.length,
                            i = -1,
                            c = t.length,
                            l = P(o - s, 0),
                            u = Array(c + l),
                            f = !a;
                        ++i < c;
                    )
                        u[i] = t[i];
                    for (; ++n < s; ) (f || n < o) && (u[r[n]] = e[n]);
                    for (; l--; ) u[i++] = e[n++];
                    return u;
                })(v, a, n, d)),
            o &&
                (v = (function (e, t, r, a) {
                    for (
                        var n = -1,
                            o = e.length,
                            s = -1,
                            i = r.length,
                            c = -1,
                            l = t.length,
                            u = P(o - i, 0),
                            f = Array(u + l),
                            b = !a;
                        ++n < u;
                    )
                        f[n] = e[n];
                    for (var d = n; ++c < l; ) f[d + c] = t[c];
                    for (; ++s < i; ) (b || n < o) && (f[d + r[s]] = e[n++]);
                    return f;
                })(v, o, s, d)),
            (g -= O),
            d && g < l)
        ) {
            var k = C(v, M);
            return z(e, t, F, m.placeholder, r, v, k, i, c, l - g);
        }
        var E = f ? r : this,
            x = b ? E[e] : e;
        return (
            (g = v.length),
            i
                ? (v = (function (e, t) {
                      for (
                          var r = e.length,
                              a = I(t.length, r),
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
                              ("number" == typeof s || y.test(s)) &&
                              s > -1 &&
                              s % 1 == 0 &&
                              s < o
                                  ? n[s]
                                  : void 0;
                      }
                      return e;
                  })(v, i))
                : h && g > 1 && v.reverse(),
            u && c < g && (v.length = c),
            this && this !== A && this instanceof m && (x = p || L(x)),
            x.apply(E, v)
        );
    }
    return m;
}
function z(e, t, r, a, n, o, s, i, c, l) {
    var u = 8 & t;
    (t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
    var f = r(e, t, n, u ? o : void 0, u ? s : void 0, u ? void 0 : o, u ? void 0 : s, i, c, l);
    return (f.placeholder = a), U(f, e, t);
}
function q(e) {
    return e.placeholder;
}
function $(e, t) {
    var r,
        a,
        n,
        o = null == e ? void 0 : e[t];
    return !(!G(o) || ((r = o), _ && _ in r)) &&
        ("[object Function]" == (n = G((a = o)) ? N.call(a) : "") ||
        "[object GeneratorFunction]" == n ||
        (function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
                try {
                    t = !!(e + "");
                } catch (e) {}
            return t;
        })(o)
            ? B
            : m
        ).test(
            (function (e) {
                if (null != e) {
                    try {
                        return j.call(e);
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
var U = T
    ? function (e, t, r) {
          var a,
              n,
              o,
              s,
              i,
              c,
              u,
              h = t + "";
          return T(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value:
                  ((o =
                      ((u =
                          (c = ((a = (s = h.match(b)) ? s[1].split(d) : []),
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
                                              for (var a = e.length, n = -1; ++n < a; ) if (k(e[n], n, e)) return n;
                                              return -1;
                                          }
                                          for (var o = -1, s = e.length; ++o < s; ) if (e[o] === t) return o;
                                          return -1;
                                      })(a, t, 0) > -1
                                  ) &&
                                  a.push(t);
                          }),
                          (i = a.sort())).length) - 1),
                      (i[u] = (c > 1 ? "& " : "") + i[u]),
                      (i = i.join(c > 2 ? ", " : " ")),
                      h.replace(f, "{\n/* [wrapped with " + i + "] */\n"))),
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
            (s = void 0 === s ? s : P(H(s), 0)),
            (i = void 0 === i ? i : H(i)),
            (l -= n ? n.length : 0),
            64 & t)
        ) {
            var u = a,
                f = n;
            a = n = void 0;
        }
        var b = [e, t, r, a, n, u, f, o, s, i];
        if (
            ((e = b[0]),
            (t = b[1]),
            (r = b[2]),
            (a = b[3]),
            (n = b[4]),
            (i = b[9] = null == b[9] ? (c ? 0 : e.length) : P(b[9] - l, 0)) || !(24 & t) || (t &= -25),
            t && 1 != t)
        )
            8 == t || 16 == t
                ? (x = (function (e, t, r) {
                      var a = L(e);
                      function n() {
                          for (var o = arguments.length, s = Array(o), i = o, c = q(n); i--; ) s[i] = arguments[i];
                          var l = o < 3 && s[0] !== c && s[o - 1] !== c ? [] : C(s, c);
                          return (o -= l.length) < r
                              ? z(e, t, F, n.placeholder, void 0, s, l, void 0, void 0, r - o)
                              : O(this && this !== A && this instanceof n ? a : e, this, s);
                      }
                      return n;
                  })(e, t, i))
                : (32 != t && 33 != t) || n.length
                  ? (x = F.apply(void 0, b))
                  : ((d = e),
                    (h = t),
                    (p = r),
                    (m = a),
                    (g = 1 & h),
                    (y = L(d)),
                    (x = function e() {
                        for (
                            var t = -1,
                                r = arguments.length,
                                a = -1,
                                n = m.length,
                                o = Array(n + r),
                                s = this && this !== A && this instanceof e ? y : d;
                            ++a < n;
                        )
                            o[a] = m[a];
                        for (; r--; ) o[a++] = arguments[++t];
                        return O(s, g ? p : this, o);
                    }));
        else
            var d,
                h,
                p,
                m,
                g,
                y,
                v,
                w,
                M,
                k,
                E,
                x =
                    ((v = e),
                    (w = t),
                    (M = r),
                    (k = 1 & w),
                    (E = L(v)),
                    function e() {
                        return (this && this !== A && this instanceof e ? E : v).apply(k ? M : this, arguments);
                    });
        return U(x, e, t);
    })(e, 8, void 0, void 0, void 0, void 0, void 0, (t = r ? void 0 : t));
    return (a.placeholder = W.placeholder), a;
}
function G(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
}
function H(e) {
    var t,
        r = (t = e)
            ? (t = (function (e) {
                  if ("number" == typeof e) return e;
                  if ("symbol" == typeof (t = e) || (t && "object" == typeof t && "[object Symbol]" == N.call(t)))
                      return c;
                  if (G(e)) {
                      var t,
                          r = "function" == typeof e.valueOf ? e.valueOf() : e;
                      e = G(r) ? r + "" : r;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(u, "");
                  var a = p.test(e);
                  return a || g.test(e) ? v(e.slice(2), a ? 2 : 8) : h.test(e) ? c : +e;
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
