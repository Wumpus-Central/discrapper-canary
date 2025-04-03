var a,
    n,
    s,
    o = '__lodash_placeholder__',
    i = 1 / 0,
    c = 0 / 0,
    l = [
        ['ary', 128],
        ['bind', 1],
        ['bindKey', 2],
        ['curry', 8],
        ['curryRight', 16],
        ['flip', 512],
        ['partial', 32],
        ['partialRight', 64],
        ['rearg', 256]
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
    Z = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
    w = 'object' == typeof self && self && self.Object === Object && self,
    M = Z || w || Function('return this')();
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
function O(e) {
    return e != e;
}
function C(e, t) {
    for (var r = -1, a = e.length, n = 0, s = []; ++r < a; ) {
        var i = e[r];
        (i === t || i === o) && ((e[r] = o), (s[n++] = r));
    }
    return s;
}
var E = Function.prototype,
    j = Object.prototype,
    x = M['__core-js_shared__'],
    R = (a = /[^.]+$/.exec((x && x.keys && x.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + a : '',
    A = E.toString,
    B = j.hasOwnProperty,
    _ = j.toString,
    N = RegExp(
        '^' +
            A.call(B)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    ),
    S = Object.create,
    P = Math.max,
    I = Math.min,
    D = ((n = z(Object, 'defineProperty')), (s = z.name) && s.length > 2 ? n : void 0);
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
        var a = U((t = e.prototype)) ? S(t) : {},
            n = e.apply(a, r);
        return U(n) ? n : a;
    };
}
function L(e, t, r, a, n, s, o, i, c, l) {
    var u = 128 & t,
        f = 1 & t,
        b = 2 & t,
        d = 24 & t,
        h = 512 & t,
        p = b ? void 0 : T(e);
    function m() {
        for (var g = arguments.length, v = Array(g), Z = g; Z--; ) v[Z] = arguments[Z];
        if (d)
            var w = q(m),
                k = (function (e, t) {
                    for (var r = e.length, a = 0; r--; ) e[r] === t && a++;
                    return a;
                })(v, w);
        if (
            (a &&
                (v = (function (e, t, r, a) {
                    for (var n = -1, s = e.length, o = r.length, i = -1, c = t.length, l = P(s - o, 0), u = Array(c + l), f = !a; ++i < c; ) u[i] = t[i];
                    for (; ++n < o; ) (f || n < s) && (u[r[n]] = e[n]);
                    for (; l--; ) u[i++] = e[n++];
                    return u;
                })(v, a, n, d)),
            s &&
                (v = (function (e, t, r, a) {
                    for (var n = -1, s = e.length, o = -1, i = r.length, c = -1, l = t.length, u = P(s - i, 0), f = Array(u + l), b = !a; ++n < u; ) f[n] = e[n];
                    for (var d = n; ++c < l; ) f[d + c] = t[c];
                    for (; ++o < i; ) (b || n < s) && (f[d + r[o]] = e[n++]);
                    return f;
                })(v, s, o, d)),
            (g -= k),
            d && g < l)
        ) {
            var O = C(v, w);
            return F(e, t, L, m.placeholder, r, v, O, i, c, l - g);
        }
        var E = f ? r : this,
            j = b ? E[e] : e;
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
                          var s,
                              o = t[a];
                          e[a] = (s = null == (s = r) ? 9007199254740991 : s) && ('number' == typeof o || y.test(o)) && o > -1 && o % 1 == 0 && o < s ? n[o] : void 0;
                      }
                      return e;
                  })(v, i))
                : h && g > 1 && v.reverse(),
            u && c < g && (v.length = c),
            this && this !== M && this instanceof m && (j = p || T(j)),
            j.apply(E, v)
        );
    }
    return m;
}
function F(e, t, r, a, n, s, o, i, c, l) {
    var u = 8 & t;
    (t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
    var f = r(e, t, n, u ? s : void 0, u ? o : void 0, u ? void 0 : s, u ? void 0 : o, i, c, l);
    return (f.placeholder = a), $(f, e, t);
}
function q(e) {
    return e.placeholder;
}
function z(e, t) {
    var r,
        a,
        n,
        s = null == e ? void 0 : e[t];
    return !(!U(s) || ((r = s), R && R in r)) &&
        ('[object Function]' == (n = U((a = s)) ? _.call(a) : '') ||
        '[object GeneratorFunction]' == n ||
        (function (e) {
            var t = !1;
            if (null != e && 'function' != typeof e.toString)
                try {
                    t = !!(e + '');
                } catch (e) {}
            return t;
        })(s)
            ? N
            : m
        ).test(
            (function (e) {
                if (null != e) {
                    try {
                        return A.call(e);
                    } catch (e) {}
                    try {
                        return e + '';
                    } catch (e) {}
                }
                return '';
            })(s)
        )
        ? s
        : void 0;
}
var $ = D
    ? function (e, t, r) {
          var a,
              n,
              s,
              o,
              i,
              c,
              u,
              h = t + '';
          return D(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value:
                  ((s =
                      ((u =
                          (c = ((a = (o = h.match(b)) ? o[1].split(d) : []),
                          (n = r),
                          !(function (e, t) {
                              for (var r = -1, a = e ? e.length : 0; ++r < a && !1 !== t(e[r], r, e); );
                          })(l, function (e) {
                              var t = '_.' + e[0];
                              n & e[1] &&
                                  !(
                                      (a ? a.length : 0) &&
                                      (function (e, t, r) {
                                          if (t != t) {
                                              for (var a, n = e.length, s = -1; a ? s-- : ++s < n; ) if (O(e[s], s, e)) return s;
                                              return -1;
                                          }
                                          for (var o = r - 1, i = e.length; ++o < i; ) if (e[o] === t) return o;
                                          return -1;
                                      })(a, t, 0) > -1
                                  ) &&
                                  a.push(t);
                          }),
                          (i = a.sort())).length) - 1),
                      (i[u] = (c > 1 ? '& ' : '') + i[u]),
                      (i = i.join(c > 2 ? ', ' : ' ')),
                      h.replace(f, '{\n/* [wrapped with ' + i + '] */\n'))),
                  function () {
                      return s;
                  })
          });
      }
    : function (e) {
          return e;
      };
function W(e, t, r) {
    var a = (function (e, t, r, a, n, s, o, i) {
        var c = 2 & t;
        if (!c && 'function' != typeof e) throw TypeError('Expected a function');
        var l = a ? a.length : 0;
        if ((l || ((t &= -97), (a = n = void 0)), (o = void 0 === o ? o : P(G(o), 0)), (i = void 0 === i ? i : G(i)), (l -= n ? n.length : 0), 64 & t)) {
            var u = a,
                f = n;
            a = n = void 0;
        }
        var b = [e, t, r, a, n, u, f, s, o, i];
        if (((e = b[0]), (t = b[1]), (r = b[2]), (a = b[3]), (n = b[4]), (i = b[9] = null == b[9] ? (c ? 0 : e.length) : P(b[9] - l, 0)) || !(24 & t) || (t &= -25), t && 1 != t))
            8 == t || 16 == t
                ? (j = (function (e, t, r) {
                      var a = T(e);
                      function n() {
                          for (var s = arguments.length, o = Array(s), i = s, c = q(n); i--; ) o[i] = arguments[i];
                          var l = s < 3 && o[0] !== c && o[s - 1] !== c ? [] : C(o, c);
                          return (s -= l.length) < r ? F(e, t, L, n.placeholder, void 0, o, l, void 0, void 0, r - s) : k(this && this !== M && this instanceof n ? a : e, this, o);
                      }
                      return n;
                  })(e, t, i))
                : (32 != t && 33 != t) || n.length
                  ? (j = L.apply(void 0, b))
                  : ((d = e),
                    (h = t),
                    (p = r),
                    (m = a),
                    (g = 1 & h),
                    (y = T(d)),
                    (j = function e() {
                        for (var t = -1, r = arguments.length, a = -1, n = m.length, s = Array(n + r), o = this && this !== M && this instanceof e ? y : d; ++a < n; ) s[a] = m[a];
                        for (; r--; ) s[a++] = arguments[++t];
                        return k(o, g ? p : this, s);
                    }));
        else
            var d,
                h,
                p,
                m,
                g,
                y,
                v,
                Z,
                w,
                O,
                E,
                j =
                    ((v = e),
                    (Z = t),
                    (w = r),
                    (O = 1 & Z),
                    (E = T(v)),
                    function e() {
                        return (this && this !== M && this instanceof e ? E : v).apply(O ? w : this, arguments);
                    });
        return $(j, e, t);
    })(e, 8, void 0, void 0, void 0, void 0, void 0, (t = r ? void 0 : t));
    return (a.placeholder = W.placeholder), a;
}
function U(e) {
    var t = typeof e;
    return !!e && ('object' == t || 'function' == t);
}
function G(e) {
    var t,
        r = (t = e)
            ? (t = (function (e) {
                  if ('number' == typeof e) return e;
                  if ('symbol' == typeof (t = e) || (t && 'object' == typeof t && '[object Symbol]' == _.call(t))) return c;
                  if (U(e)) {
                      var t,
                          r = 'function' == typeof e.valueOf ? e.valueOf() : e;
                      e = U(r) ? r + '' : r;
                  }
                  if ('string' != typeof e) return 0 === e ? e : +e;
                  e = e.replace(u, '');
                  var a = p.test(e);
                  return a || g.test(e) ? v(e.slice(2), a ? 2 : 8) : h.test(e) ? c : +e;
              })(t)) === i || t === -i
                ? (t < 0 ? -1 : 1) * 1.7976931348623157e308
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
