var a,
    n,
    s,
    o = "__lodash_placeholder__",
    i = [
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
    c = /^\s+|\s+$/g,
    l = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    u = /\{\n\/\* \[wrapped with (.+)\] \*/,
    b = /,? & /,
    f = /^[-+]0x[0-9a-f]+$/i,
    h = /^0b[01]+$/i,
    d = /^\[object .+?Constructor\]$/,
    p = /^0o[0-7]+$/i,
    y = /^(?:0|[1-9]\d*)$/,
    g = parseInt,
    m = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
    v = "object" == typeof self && self && self.Object === Object && self,
    O = m || v || Function("return this")();
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
function w(e) {
    return e != e;
}
function A(e, t) {
    for (var r = -1, a = e.length, n = 0, s = []; ++r < a;) {
        var i = e[r];
        (i === t || i === o) && ((e[r] = o), (s[n++] = r));
    }
    return s;
}
var E = Function.prototype,
    j = Object.prototype,
    x = O["__core-js_shared__"],
    C = (a = /[^.]+$/.exec((x && x.keys && x.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + a : "",
    M = E.toString,
    _ = j.hasOwnProperty,
    R = j.toString,
    S = RegExp(
        "^" +
            M.call(_)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    ),
    D = Object.create,
    P = Math.max,
    B = Math.min,
    F = ((n = q(Object, "defineProperty")), (s = q.name) && s.length > 2 ? n : void 0);
function T(e) {
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
        var a = $((t = e.prototype)) ? D(t) : {},
            n = e.apply(a, r);
        return $(n) ? n : a;
    };
}
function N(e, t, r, a, n, s, o, i, c, l) {
    var u = 128 & t,
        b = 1 & t,
        f = 2 & t,
        h = 24 & t,
        d = 512 & t,
        p = f ? void 0 : T(e);
    function g() {
        for (var m = arguments.length, v = Array(m), k = m; k--;) v[k] = arguments[k];
        if (h)
            var w = L(g),
                E = (function (e, t) {
                    for (var r = e.length, a = 0; r--;) e[r] === t && a++;
                    return a;
                })(v, w);
        if (
            (a &&
                (v = (function (e, t, r, a) {
                    for (
                        var n = -1,
                            s = e.length,
                            o = r.length,
                            i = -1,
                            c = t.length,
                            l = P(s - o, 0),
                            u = Array(c + l),
                            b = !a;
                        ++i < c;
                    )
                        u[i] = t[i];
                    for (; ++n < o;) (b || n < s) && (u[r[n]] = e[n]);
                    for (; l--;) u[i++] = e[n++];
                    return u;
                })(v, a, n, h)),
            s &&
                (v = (function (e, t, r, a) {
                    for (
                        var n = -1,
                            s = e.length,
                            o = -1,
                            i = r.length,
                            c = -1,
                            l = t.length,
                            u = P(s - i, 0),
                            b = Array(u + l),
                            f = !a;
                        ++n < u;
                    )
                        b[n] = e[n];
                    for (var h = n; ++c < l;) b[h + c] = t[c];
                    for (; ++o < i;) (f || n < s) && (b[h + r[o]] = e[n++]);
                    return b;
                })(v, s, o, h)),
            (m -= E),
            h && m < l)
        ) {
            var j = A(v, w);
            return I(e, t, N, g.placeholder, r, v, j, i, c, l - m);
        }
        var x = b ? r : this,
            C = f ? x[e] : e;
        return (
            (m = v.length),
            i
                ? (v = (function (e, t) {
                      for (
                          var r = e.length,
                              a = B(t.length, r),
                              n = (function (e, t) {
                                  var r = -1,
                                      a = e.length;
                                  for (t || (t = Array(a)); ++r < a;) t[r] = e[r];
                                  return t;
                              })(e);
                          a--;
                      ) {
                          var s,
                              o = t[a];
                          e[a] =
                              (s = null == (s = r) ? 0x1fffffffffffff : s) &&
                              ("number" == typeof o || y.test(o)) &&
                              o > -1 &&
                              o % 1 == 0 &&
                              o < s
                                  ? n[o]
                                  : void 0;
                      }
                      return e;
                  })(v, i))
                : d && m > 1 && v.reverse(),
            u && c < m && (v.length = c),
            this && this !== O && this instanceof g && (C = p || T(C)),
            C.apply(x, v)
        );
    }
    return g;
}
function I(e, t, r, a, n, s, o, i, c, l) {
    var u = 8 & t;
    ((t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4));
    var b = r(e, t, n, u ? s : void 0, u ? o : void 0, u ? void 0 : s, u ? void 0 : o, i, c, l);
    return ((b.placeholder = a), z(b, e, t));
}
function L(e) {
    return e.placeholder;
}
function q(e, t) {
    var r,
        a,
        n,
        s = null == e ? void 0 : e[t];
    return !(!$(s) || ((r = s), C && C in r)) &&
        ("[object Function]" == (n = $((a = s)) ? R.call(a) : "") ||
        "[object GeneratorFunction]" == n ||
        (function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
                try {
                    t = !!(e + "");
                } catch (e) {}
            return t;
        })(s)
            ? S
            : d
        ).test(
            (function (e) {
                if (null != e) {
                    try {
                        return M.call(e);
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
var z = F
    ? function (e, t, r) {
          var a,
              n,
              s,
              o,
              c,
              f,
              h,
              d = t + "";
          return F(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value:
                  ((s =
                      ((h =
                          (f = ((a = (o = d.match(u)) ? o[1].split(b) : []),
                          (n = r),
                          !(function (e, t) {
                              for (var r = -1, a = e ? e.length : 0; ++r < a && !1 !== t(e[r], r, e););
                          })(i, function (e) {
                              var t = "_." + e[0];
                              n & e[1] &&
                                  !(
                                      (a ? a.length : 0) &&
                                      (function (e, t) {
                                          if (t != t) {
                                              for (var r = e.length, a = -1; ++a < r;) if (w(e[a])) return a;
                                              return -1;
                                          }
                                          for (var n = -1, s = e.length; ++n < s;) if (e[n] === t) return n;
                                          return -1;
                                      })(a, t) > -1
                                  ) &&
                                  a.push(t);
                          }),
                          (c = a.sort())).length) - 1),
                      (c[h] = (f > 1 ? "& " : "") + c[h]),
                      (c = c.join(f > 2 ? ", " : " ")),
                      d.replace(l, "{\n/* [wrapped with " + c + "] */\n"))),
                  function () {
                      return s;
                  }),
          });
      }
    : function (e) {
          return e;
      };
function U(e, t, r) {
    var a = (function (e, t, r, a, n, s, o, i) {
        var c = 2 & t;
        if (!c && "function" != typeof e) throw TypeError("Expected a function");
        var l = a ? a.length : 0;
        if (
            (l || ((t &= -97), (a = n = void 0)),
            (o = void 0 === o ? o : P(G(o), 0)),
            (i = void 0 === i ? i : G(i)),
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
            (i = f[9] = null == f[9] ? (c ? 0 : e.length) : P(f[9] - l, 0)) || !(24 & t) || (t &= -25),
            t && 1 != t)
        )
            8 == t || 16 == t
                ? (C = (function (e, t, r) {
                      var a = T(e);
                      function n() {
                          for (var s = arguments.length, o = Array(s), i = s, c = L(n); i--;) o[i] = arguments[i];
                          var l = s < 3 && o[0] !== c && o[s - 1] !== c ? [] : A(o, c);
                          return (s -= l.length) < r
                              ? I(e, t, N, n.placeholder, void 0, o, l, void 0, void 0, r - s)
                              : k(this && this !== O && this instanceof n ? a : e, this, o);
                      }
                      return n;
                  })(e, t, i))
                : (32 != t && 33 != t) || n.length
                  ? (C = N.apply(void 0, f))
                  : ((h = e),
                    (d = t),
                    (p = r),
                    (y = a),
                    (g = 1 & d),
                    (m = T(h)),
                    (C = function e() {
                        for (
                            var t = -1,
                                r = arguments.length,
                                a = -1,
                                n = y.length,
                                s = Array(n + r),
                                o = this && this !== O && this instanceof e ? m : h;
                            ++a < n;
                        )
                            s[a] = y[a];
                        for (; r--;) s[a++] = arguments[++t];
                        return k(o, g ? p : this, s);
                    }));
        else
            var h,
                d,
                p,
                y,
                g,
                m,
                v,
                w,
                E,
                j,
                x,
                C =
                    ((v = e),
                    (w = t),
                    (E = r),
                    (j = 1 & w),
                    (x = T(v)),
                    function e() {
                        return (this && this !== O && this instanceof e ? x : v).apply(j ? E : this, arguments);
                    });
        return z(C, e, t);
    })(e, 8, void 0, void 0, void 0, void 0, void 0, (t = r ? void 0 : t));
    return ((a.placeholder = U.placeholder), a);
}
function $(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
}
function G(e) {
    var t,
        r = (t = e)
            ? 1 / 0 ===
                  (t = (function (e) {
                      if ("number" == typeof e) return e;
                      if ("symbol" == typeof (t = e) || (t && "object" == typeof t && "[object Symbol]" == R.call(t)))
                          return 0 / 0;
                      if ($(e)) {
                          var t,
                              r = "function" == typeof e.valueOf ? e.valueOf() : e;
                          e = $(r) ? r + "" : r;
                      }
                      if ("string" != typeof e) return 0 === e ? e : +e;
                      e = e.replace(c, "");
                      var a = h.test(e);
                      return a || p.test(e) ? g(e.slice(2), a ? 2 : 8) : f.test(e) ? 0 / 0 : +e;
                  })(t)) || -1 / 0 === t
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
((U.placeholder = {}), (e.exports = U));
