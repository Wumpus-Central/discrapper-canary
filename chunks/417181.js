var a,
    n,
    o,
    s = '__lodash_placeholder__',
    i = 1 / 0,
    c = 0 / 0,
    u = [
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
    l = /^\s+|\s+$/g,
    f = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    b = /\{\n\/\* \[wrapped with (.+)\] \*/,
    h = /,? & /,
    d = /^[-+]0x[0-9a-f]+$/i,
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
    for (var r = -1, a = e.length, n = 0, o = []; ++r < a; ) {
        var i = e[r];
        (i === t || i === s) && ((e[r] = s), (o[n++] = r));
    }
    return o;
}
var E = Function.prototype,
    j = Object.prototype,
    x = M['__core-js_shared__'];
var R = (a = /[^.]+$/.exec((x && x.keys && x.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + a : '',
    A = E.toString,
    B = j.hasOwnProperty,
    S = j.toString,
    _ = RegExp(
        '^' +
            A.call(B)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    ),
    N = Object.create,
    P = Math.max,
    I = Math.min;
var D = ((n = z(Object, 'defineProperty')), (o = z.name) && o.length > 2 ? n : void 0);
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
        var a = U((t = e.prototype)) ? N(t) : {},
            n = e.apply(a, r);
        return U(n) ? n : a;
    };
}
function L(e, t, r, a, n, o, s, i, c, u) {
    var l = 128 & t,
        f = 1 & t,
        b = 2 & t,
        h = 24 & t,
        d = 512 & t,
        p = b ? void 0 : T(e);
    return function m() {
        for (var g = arguments.length, v = Array(g), Z = g; Z--; ) v[Z] = arguments[Z];
        if (h)
            var w = q(m),
                k = (function (e, t) {
                    for (var r = e.length, a = 0; r--; ) e[r] === t && a++;
                    return a;
                })(v, w);
        if (
            (a &&
                (v = (function (e, t, r, a) {
                    for (var n = -1, o = e.length, s = r.length, i = -1, c = t.length, u = P(o - s, 0), l = Array(c + u), f = !a; ++i < c; ) l[i] = t[i];
                    for (; ++n < s; ) (f || n < o) && (l[r[n]] = e[n]);
                    for (; u--; ) l[i++] = e[n++];
                    return l;
                })(v, a, n, h)),
            o &&
                (v = (function (e, t, r, a) {
                    for (var n = -1, o = e.length, s = -1, i = r.length, c = -1, u = t.length, l = P(o - i, 0), f = Array(l + u), b = !a; ++n < l; ) f[n] = e[n];
                    for (var h = n; ++c < u; ) f[h + c] = t[c];
                    for (; ++s < i; ) (b || n < o) && (f[h + r[s]] = e[n++]);
                    return f;
                })(v, o, s, h)),
            (g -= k),
            h && g < u)
        ) {
            var O = C(v, w);
            return F(e, t, L, m.placeholder, r, v, O, i, c, u - g);
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
                          var o,
                              s,
                              i = t[a];
                          (o = i), (e[a] = (s = null == (s = r) ? 9007199254740991 : s) && ('number' == typeof o || y.test(o)) && o > -1 && o % 1 == 0 && o < s ? n[i] : void 0);
                      }
                      return e;
                  })(v, i))
                : d && g > 1 && v.reverse(),
            l && c < g && (v.length = c),
            this && this !== M && this instanceof m && (j = p || T(j)),
            j.apply(E, v)
        );
    };
}
function F(e, t, r, a, n, o, s, i, c, u) {
    var l = 8 & t;
    (t |= l ? 32 : 64), !(4 & (t &= ~(l ? 64 : 32))) && (t &= -4);
    var f = r(e, t, n, l ? o : void 0, l ? s : void 0, l ? void 0 : o, l ? void 0 : s, i, c, u);
    return (f.placeholder = a), $(f, e, t);
}
function q(e) {
    return e.placeholder;
}
function z(e, t) {
    var r,
        a,
        n,
        o = ((r = e), (a = t), null == r ? void 0 : r[a]);
    return !(
        !U((n = o)) ||
        (function (e) {
            return !!R && R in e;
        })(n)
    ) &&
        ((function (e) {
            var t = U(e) ? S.call(e) : '';
            return '[object Function]' == t || '[object GeneratorFunction]' == t;
        })(n) ||
        (function (e) {
            var t = !1;
            if (null != e && 'function' != typeof e.toString)
                try {
                    t = !!(e + '');
                } catch (e) {}
            return t;
        })(n)
            ? _
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
            })(n)
        )
        ? o
        : void 0;
}
var $ = D
    ? function (e, t, r) {
          var a,
              n,
              o,
              s,
              i,
              c = t + '';
          return D(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: (function (e) {
                  return function () {
                      return e;
                  };
              })(
                  ((n = c),
                  (i =
                      (s = (o = (function (e, t) {
                          return (
                              !(function (e, t) {
                                  for (var r = -1, a = e ? e.length : 0; ++r < a && !1 !== t(e[r], r, e); );
                              })(u, function (r) {
                                  var a,
                                      n,
                                      o = '_.' + r[0];
                                  if (
                                      t & r[1] &&
                                      ((a = e),
                                      (n = o),
                                      !(
                                          (a ? a.length : 0) &&
                                          (function (e, t, r) {
                                              if (t != t)
                                                  return (function (e, t, r, a) {
                                                      for (var n = e.length, o = r + -1; a ? o-- : ++o < n; ) if (t(e[o], o, e)) return o;
                                                      return -1;
                                                  })(e, O, r);
                                              for (var a = r - 1, n = e.length; ++a < n; ) if (e[a] === t) return a;
                                              return -1;
                                          })(a, n, 0) > -1
                                      ))
                                  )
                                      e.push(o);
                              }),
                              e.sort()
                          );
                      })((a = c.match(b)) ? a[1].split(h) : [], r)).length) - 1),
                  (o[i] = (s > 1 ? '& ' : '') + o[i]),
                  (o = o.join(s > 2 ? ', ' : ' ')),
                  n.replace(f, '{\n/* [wrapped with ' + o + '] */\n'))
              )
          });
      }
    : function (e) {
          return e;
      };
function W(e, t, r) {
    var a = (function (e, t, r, a, n, o, s, i) {
        var c = 2 & t;
        if (!c && 'function' != typeof e) throw TypeError('Expected a function');
        var u = a ? a.length : 0;
        if ((!u && ((t &= -97), (a = n = void 0)), (s = void 0 === s ? s : P(G(s), 0)), (i = void 0 === i ? i : G(i)), (u -= n ? n.length : 0), 64 & t)) {
            var l = a,
                f = n;
            a = n = void 0;
        }
        var b = [e, t, r, a, n, l, f, o, s, i];
        if (((e = b[0]), (t = b[1]), (r = b[2]), (a = b[3]), (n = b[4]), !(i = b[9] = null == b[9] ? (c ? 0 : e.length) : P(b[9] - u, 0)) && 24 & t && (t &= -25), t && 1 != t)) {
            if (8 == t || 16 == t) {
                (h = e),
                    (d = t),
                    (p = i),
                    (m = T(h)),
                    (B = function e() {
                        for (var t = arguments.length, r = Array(t), a = t, n = q(e); a--; ) r[a] = arguments[a];
                        var o = t < 3 && r[0] !== n && r[t - 1] !== n ? [] : C(r, n);
                        return (t -= o.length) < p ? F(h, d, L, e.placeholder, void 0, r, o, void 0, void 0, p - t) : k(this && this !== M && this instanceof e ? m : h, this, r);
                    });
            } else if ((32 != t && 33 != t) || n.length) B = L.apply(void 0, b);
            else {
                (g = e),
                    (y = t),
                    (v = r),
                    (Z = a),
                    (w = 1 & y),
                    (O = T(g)),
                    (B = function e() {
                        for (var t = -1, r = arguments.length, a = -1, n = Z.length, o = Array(n + r), s = this && this !== M && this instanceof e ? O : g; ++a < n; ) o[a] = Z[a];
                        for (; r--; ) o[a++] = arguments[++t];
                        return k(s, w ? v : this, o);
                    });
            }
        } else {
            var h,
                d,
                p,
                m,
                g,
                y,
                v,
                Z,
                w,
                O,
                E,
                j,
                x,
                R,
                A,
                B =
                    ((E = e),
                    (j = t),
                    (x = r),
                    (R = 1 & j),
                    (A = T(E)),
                    function e() {
                        return (this && this !== M && this instanceof e ? A : E).apply(R ? x : this, arguments);
                    });
        }
        return $(B, e, t);
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
                  if ('symbol' == typeof (t = e) || ((r = t) && 'object' == typeof r && '[object Symbol]' == S.call(t))) return c;
                  if (U(e)) {
                      var t,
                          r,
                          a = 'function' == typeof e.valueOf ? e.valueOf() : e;
                      e = U(a) ? a + '' : a;
                  }
                  if ('string' != typeof e) return 0 === e ? e : +e;
                  e = e.replace(l, '');
                  var n = p.test(e);
                  return n || g.test(e) ? v(e.slice(2), n ? 2 : 8) : d.test(e) ? c : +e;
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
