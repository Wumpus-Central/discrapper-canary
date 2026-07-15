d.d(t, {
    _: () => le,
    a: () => lV,
    b: () => J,
    c: () => lR,
    d: () => ln,
    f: () => lc,
    g: () => lb,
    h: () => lZ,
    i: () => lX,
    l: () => la,
    m: () => lm,
    n: () => l2,
    o: () => lz,
    p: () => li,
    r: () => lD,
    s: () => lB,
    t: () => te,
    u: () => ls,
    v: () => E,
    x: () => Y,
    y: () => O,
});
var i,
    e,
    c,
    a,
    s,
    n,
    Z,
    b,
    m,
    o,
    u,
    h,
    W = {},
    G = [],
    p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    N = Array.isArray;
function M(l, t) {
    for (var d in t) l[d] = t[d];
    return l;
}
function X(l) {
    l && l.parentNode && l.parentNode.removeChild(l);
}
function r(l, t, d) {
    var e,
        c,
        a,
        s = {};
    for (a in t) "key" == a ? (e = t[a]) : "ref" == a ? (c = t[a]) : (s[a] = t[a]);
    if (
        (arguments.length > 2 && (s.children = arguments.length > 3 ? i.call(arguments, 2) : d),
        "function" == typeof l && null != l.defaultProps)
    )
        for (a in l.defaultProps) void 0 === s[a] && (s[a] = l.defaultProps[a]);
    return y(l, s, e, c, null);
}
function y(l, t, d, i, a) {
    var s = {
        type: l,
        props: t,
        key: d,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == a ? ++c : a,
        __i: -1,
        __u: 0,
    };
    return null == a && null != e.vnode && e.vnode(s), s;
}
function Y(l) {
    return l.children;
}
function T(l, t) {
    (this.props = l), (this.context = t);
}
function V(l, t) {
    if (null == t) return l.__ ? V(l.__, l.__i + 1) : null;
    for (var d; t < l.__k.length; t++) if (null != (d = l.__k[t]) && null != d.__e) return d.__e;
    return "function" == typeof l.type ? V(l) : null;
}
function L(l) {
    ((!l.__d && (l.__d = !0) && a.push(l) && !I.__r++) || s != e.debounceRendering) &&
        ((s = e.debounceRendering) || n)(I);
}
function I() {
    for (var l, t, d, i, c, s, n = 1; a.length; )
        a.length > n && a.sort(Z),
            (l = a.shift()),
            (n = a.length),
            l.__d &&
                ((t = void 0),
                (d = void 0),
                (i = (d = l.__v).__e),
                (c = []),
                (s = []),
                l.__P &&
                    (((t = M({}, d)).__v = d.__v + 1),
                    e.vnode && e.vnode(t),
                    x(
                        l.__P,
                        t,
                        d,
                        l.__n,
                        l.__P.namespaceURI,
                        32 & d.__u ? [i] : null,
                        c,
                        null == i ? V(d) : i,
                        !!(32 & d.__u),
                        s,
                    ),
                    (t.__v = d.__v),
                    (t.__.__k[t.__i] = t),
                    D(c, t, s),
                    (d.__e = d.__ = null),
                    t.__e != i &&
                        (function l(t) {
                            var d, i;
                            if (null != (t = t.__) && null != t.__c) {
                                for (t.__e = t.__c.base = null, d = 0; d < t.__k.length; d++)
                                    if (null != (i = t.__k[d]) && null != i.__e) {
                                        t.__e = t.__c.base = i.__e;
                                        break;
                                    }
                                return l(t);
                            }
                        })(t)));
    I.__r = 0;
}
function z(l, t, d, i, c, a, s, n, Z, b, m) {
    var o,
        u,
        h,
        p,
        M,
        r,
        T,
        L = (i && i.__k) || G,
        I = t.length;
    for (
        Z = (function (l, t, d, i, c) {
            var a,
                s,
                n,
                Z,
                b,
                m = d.length,
                o = m,
                u = 0;
            for (l.__k = Array(c), a = 0; a < c; a++)
                null != (s = t[a]) && "boolean" != typeof s && "function" != typeof s
                    ? ((Z = a + u),
                      ((s = l.__k[a] =
                          "string" == typeof s ||
                          "number" == typeof s ||
                          "bigint" == typeof s ||
                          s.constructor == String
                              ? y(null, s, null, null, null)
                              : N(s)
                                ? y(Y, { children: s }, null, null, null)
                                : null == s.constructor && s.__b > 0
                                  ? y(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
                                  : s).__ = l),
                      (s.__b = l.__b + 1),
                      (n = null),
                      -1 !=
                          (b = s.__i =
                              (function (l, t, d, i) {
                                  var e,
                                      c,
                                      a,
                                      s = l.key,
                                      n = l.type,
                                      Z = t[d],
                                      b = null != Z && 0 == (2 & Z.__u);
                                  if ((null === Z && null == l.key) || (b && s == Z.key && n == Z.type)) return d;
                                  if (i > +!!b) {
                                      for (e = d - 1, c = d + 1; e >= 0 || c < t.length; )
                                          if (
                                              null != (Z = t[(a = e >= 0 ? e-- : c++)]) &&
                                              0 == (2 & Z.__u) &&
                                              s == Z.key &&
                                              n == Z.type
                                          )
                                              return a;
                                  }
                                  return -1;
                              })(s, d, Z, o)) && (o--, (n = d[b]) && (n.__u |= 2)),
                      null == n || null == n.__v
                          ? (-1 == b && (c > m ? u-- : c < m && u++), "function" != typeof s.type && (s.__u |= 4))
                          : b != Z && (b == Z - 1 ? u-- : b == Z + 1 ? u++ : (b > Z ? u-- : u++, (s.__u |= 4))))
                    : (l.__k[a] = null);
            if (o)
                for (a = 0; a < m; a++)
                    null != (n = d[a]) &&
                        0 == (2 & n.__u) &&
                        (n.__e == i && (i = V(n)),
                        (function l(t, d, i) {
                            var c, a;
                            if (
                                (e.unmount && e.unmount(t),
                                (c = t.ref) && ((c.current && c.current != t.__e) || j(c, null, d)),
                                null != (c = t.__c))
                            ) {
                                if (c.componentWillUnmount)
                                    try {
                                        c.componentWillUnmount();
                                    } catch (l) {
                                        e.__e(l, d);
                                    }
                                c.base = c.__P = null;
                            }
                            if ((c = t.__k))
                                for (a = 0; a < c.length; a++) c[a] && l(c[a], d, i || "function" != typeof t.type);
                            i || X(t.__e), (t.__c = t.__ = t.__e = void 0);
                        })(n, n));
            return i;
        })(d, t, L, Z, I),
            o = 0;
        o < I;
        o++
    )
        null != (h = d.__k[o]) &&
            ((u = -1 == h.__i ? W : L[h.__i] || W),
            (h.__i = o),
            (r = x(l, h, u, c, a, s, n, Z, b, m)),
            (p = h.__e),
            h.ref && u.ref != h.ref && (u.ref && j(u.ref, null, h), m.push(h.ref, h.__c || p, h)),
            null == M && null != p && (M = p),
            (T = !!(4 & h.__u)) || u.__k === h.__k
                ? (Z = (function l(t, d, i, e) {
                      var c, a;
                      if ("function" == typeof t.type) {
                          for (c = t.__k, a = 0; c && a < c.length; a++)
                              c[a] && ((c[a].__ = t), (d = l(c[a], d, i, e)));
                          return d;
                      }
                      t.__e != d &&
                          (e && (d && t.type && !d.parentNode && (d = V(t)), i.insertBefore(t.__e, d || null)),
                          (d = t.__e));
                      do d = d && d.nextSibling;
                      while (null != d && 8 == d.nodeType);
                      return d;
                  })(h, Z, l, T))
                : "function" == typeof h.type && void 0 !== r
                  ? (Z = r)
                  : p && (Z = p.nextSibling),
            (h.__u &= -7));
    return (d.__e = M), Z;
}
function w(l, t) {
    return (
        (t = t || []),
        null == l ||
            "boolean" == typeof l ||
            (N(l)
                ? l.some(function (l) {
                      w(l, t);
                  })
                : t.push(l)),
        t
    );
}
function R(l, t, d) {
    "-" == t[0]
        ? l.setProperty(t, null == d ? "" : d)
        : (l[t] = null == d ? "" : "number" != typeof d || p.test(t) ? d : d + "px");
}
function S(l, t, d, i, e) {
    var c, a;
    t: if ("style" == t)
        if ("string" == typeof d) l.style.cssText = d;
        else {
            if (("string" == typeof i && (l.style.cssText = i = ""), i))
                for (t in i) (d && t in d) || R(l.style, t, "");
            if (d) for (t in d) (i && d[t] == i[t]) || R(l.style, t, d[t]);
        }
    else if ("o" == t[0] && "n" == t[1])
        (c = t != (t = t.replace(b, "$1"))),
            (t = (a = t.toLowerCase()) in l || "onFocusOut" == t || "onFocusIn" == t ? a.slice(2) : t.slice(2)),
            l.l || (l.l = {}),
            (l.l[t + c] = d),
            d
                ? i
                    ? (d.u = i.u)
                    : ((d.u = m), l.addEventListener(t, c ? u : o, c))
                : l.removeEventListener(t, c ? u : o, c);
    else {
        if ("http://www.w3.org/2000/svg" == e) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in l
        )
            try {
                l[t] = null == d ? "" : d;
                break t;
            } catch (l) {}
        "function" == typeof d ||
            (null == d || (!1 === d && "-" != t[4])
                ? l.removeAttribute(t)
                : l.setAttribute(t, "popover" == t && 1 == d ? "" : d));
    }
}
function C(l) {
    return function (t) {
        if (this.l) {
            var d = this.l[t.type + l];
            if (null == t.t) t.t = m++;
            else if (t.t < d.u) return;
            return d(e.event ? e.event(t) : t);
        }
    };
}
function x(l, t, d, c, a, s, n, Z, b, m) {
    var o,
        u,
        h,
        G,
        p,
        r,
        y,
        L,
        I,
        w,
        R,
        C,
        x,
        D,
        j,
        F,
        O,
        J = t.type;
    if (null != t.constructor) return null;
    128 & d.__u && ((b = !!(32 & d.__u)), (s = [(Z = t.__e = d.__e)])), (o = e.__b) && o(t);
    t: if ("function" == typeof J)
        try {
            if (
                ((L = t.props),
                (I = "prototype" in J && J.prototype.render),
                (w = (o = J.contextType) && c[o.__c]),
                (R = o ? (w ? w.props.value : o.__) : c),
                d.__c
                    ? (y = (u = t.__c = d.__c).__ = u.__E)
                    : (I ? (t.__c = u = new J(L, R)) : ((t.__c = u = new T(L, R)), (u.constructor = J), (u.render = U)),
                      w && w.sub(u),
                      (u.props = L),
                      u.state || (u.state = {}),
                      (u.context = R),
                      (u.__n = c),
                      (h = u.__d = !0),
                      (u.__h = []),
                      (u._sb = [])),
                I && null == u.__s && (u.__s = u.state),
                I &&
                    null != J.getDerivedStateFromProps &&
                    (u.__s == u.state && (u.__s = M({}, u.__s)), M(u.__s, J.getDerivedStateFromProps(L, u.__s))),
                (G = u.props),
                (p = u.state),
                (u.__v = t),
                h)
            )
                I && null == J.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(),
                    I && null != u.componentDidMount && u.__h.push(u.componentDidMount);
            else {
                if (
                    (I &&
                        null == J.getDerivedStateFromProps &&
                        L !== G &&
                        null != u.componentWillReceiveProps &&
                        u.componentWillReceiveProps(L, R),
                    (!u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(L, u.__s, R)) ||
                        t.__v == d.__v)
                ) {
                    for (
                        t.__v != d.__v && ((u.props = L), (u.state = u.__s), (u.__d = !1)),
                            t.__e = d.__e,
                            t.__k = d.__k,
                            t.__k.some(function (l) {
                                l && (l.__ = t);
                            }),
                            C = 0;
                        C < u._sb.length;
                        C++
                    )
                        u.__h.push(u._sb[C]);
                    (u._sb = []), u.__h.length && n.push(u);
                    break t;
                }
                null != u.componentWillUpdate && u.componentWillUpdate(L, u.__s, R),
                    I &&
                        null != u.componentDidUpdate &&
                        u.__h.push(function () {
                            u.componentDidUpdate(G, p, r);
                        });
            }
            if (((u.context = R), (u.props = L), (u.__P = l), (u.__e = !1), (x = e.__r), (D = 0), I)) {
                for (
                    u.state = u.__s, u.__d = !1, x && x(t), o = u.render(u.props, u.state, u.context), j = 0;
                    j < u._sb.length;
                    j++
                )
                    u.__h.push(u._sb[j]);
                u._sb = [];
            } else
                do (u.__d = !1), x && x(t), (o = u.render(u.props, u.state, u.context)), (u.state = u.__s);
                while (u.__d && ++D < 25);
            (u.state = u.__s),
                null != u.getChildContext && (c = M(M({}, c), u.getChildContext())),
                I && !h && null != u.getSnapshotBeforeUpdate && (r = u.getSnapshotBeforeUpdate(G, p)),
                (F = o),
                null != o &&
                    o.type === Y &&
                    null == o.key &&
                    (F = (function l(t) {
                        return "object" != typeof t || null == t || (t.__b && t.__b > 0)
                            ? t
                            : N(t)
                              ? t.map(l)
                              : M({}, t);
                    })(o.props.children)),
                (Z = z(l, N(F) ? F : [F], t, d, c, a, s, n, Z, b, m)),
                (u.base = t.__e),
                (t.__u &= -161),
                u.__h.length && n.push(u),
                y && (u.__E = u.__ = null);
        } catch (l) {
            if (((t.__v = null), b || null != s))
                if (l.then) {
                    for (t.__u |= b ? 160 : 128; Z && 8 == Z.nodeType && Z.nextSibling; ) Z = Z.nextSibling;
                    (s[s.indexOf(Z)] = null), (t.__e = Z);
                } else {
                    for (O = s.length; O--; ) X(s[O]);
                    g(t);
                }
            else (t.__e = d.__e), (t.__k = d.__k), l.then || g(t);
            e.__e(l, t, d);
        }
    else
        null == s && t.__v == d.__v
            ? ((t.__k = d.__k), (t.__e = d.__e))
            : (Z = t.__e =
                  (function (l, t, d, c, a, s, n, Z, b) {
                      var m,
                          o,
                          u,
                          h,
                          G,
                          p,
                          M,
                          r = d.props,
                          y = t.props,
                          Y = t.type;
                      if (
                          ("svg" == Y
                              ? (a = "http://www.w3.org/2000/svg")
                              : "math" == Y
                                ? (a = "http://www.w3.org/1998/Math/MathML")
                                : a || (a = "http://www.w3.org/1999/xhtml"),
                          null != s)
                      ) {
                          for (m = 0; m < s.length; m++)
                              if (
                                  (G = s[m]) &&
                                  "setAttribute" in G == !!Y &&
                                  (Y ? G.localName == Y : 3 == G.nodeType)
                              ) {
                                  (l = G), (s[m] = null);
                                  break;
                              }
                      }
                      if (null == l) {
                          if (null == Y) return document.createTextNode(y);
                          (l = document.createElementNS(a, Y, y.is && y)),
                              Z && (e.__m && e.__m(t, s), (Z = !1)),
                              (s = null);
                      }
                      if (null == Y) r === y || (Z && l.data == y) || (l.data = y);
                      else {
                          if (((s = s && i.call(l.childNodes)), (r = d.props || W), !Z && null != s))
                              for (r = {}, m = 0; m < l.attributes.length; m++) r[(G = l.attributes[m]).name] = G.value;
                          for (m in r)
                              if (((G = r[m]), "children" == m));
                              else if ("dangerouslySetInnerHTML" == m) u = G;
                              else if (!(m in y)) {
                                  if (
                                      ("value" == m && "defaultValue" in y) ||
                                      ("checked" == m && "defaultChecked" in y)
                                  )
                                      continue;
                                  S(l, m, null, G, a);
                              }
                          for (m in y)
                              (G = y[m]),
                                  "children" == m
                                      ? (h = G)
                                      : "dangerouslySetInnerHTML" == m
                                        ? (o = G)
                                        : "value" == m
                                          ? (p = G)
                                          : "checked" == m
                                            ? (M = G)
                                            : (Z && "function" != typeof G) || r[m] === G || S(l, m, G, r[m], a);
                          if (o)
                              Z || (u && (o.__html == u.__html || o.__html == l.innerHTML)) || (l.innerHTML = o.__html),
                                  (t.__k = []);
                          else if (
                              (u && (l.innerHTML = ""),
                              z(
                                  "template" == t.type ? l.content : l,
                                  N(h) ? h : [h],
                                  t,
                                  d,
                                  c,
                                  "foreignObject" == Y ? "http://www.w3.org/1999/xhtml" : a,
                                  s,
                                  n,
                                  s ? s[0] : d.__k && V(d, 0),
                                  Z,
                                  b,
                              ),
                              null != s)
                          )
                              for (m = s.length; m--; ) X(s[m]);
                          Z ||
                              ((m = "value"),
                              "progress" == Y && null == p
                                  ? l.removeAttribute("value")
                                  : null == p ||
                                    (p === l[m] && ("progress" != Y || p) && ("option" != Y || p == r[m])) ||
                                    S(l, m, p, r[m], a),
                              (m = "checked"),
                              null != M && M != l[m] && S(l, m, M, r[m], a));
                      }
                      return l;
                  })(d.__e, t, d, c, a, s, n, b, m));
    return (o = e.diffed) && o(t), 128 & t.__u ? void 0 : Z;
}
function g(l) {
    l && l.__c && (l.__c.__e = !0), l && l.__k && l.__k.forEach(g);
}
function D(l, t, d) {
    for (var i = 0; i < d.length; i++) j(d[i], d[++i], d[++i]);
    e.__c && e.__c(t, l),
        l.some(function (t) {
            try {
                (l = t.__h),
                    (t.__h = []),
                    l.some(function (l) {
                        l.call(t);
                    });
            } catch (l) {
                e.__e(l, t.__v);
            }
        });
}
function j(l, t, d) {
    try {
        if ("function" == typeof l) {
            var i = "function" == typeof l.__u;
            i && l.__u(), (i && null == t) || (l.__u = l(t));
        } else l.current = t;
    } catch (l) {
        e.__e(l, d);
    }
}
function U(l, t, d) {
    return this.constructor(l, d);
}
function F(l, t, d) {
    var c, a, s, n;
    t == document && (t = document.documentElement),
        e.__ && e.__(l, t),
        (a = (c = "function" == typeof d) ? null : (d && d.__k) || t.__k),
        (s = []),
        (n = []),
        x(
            t,
            (l = ((!c && d) || t).__k = r(Y, null, [l])),
            a || W,
            W,
            t.namespaceURI,
            !c && d ? [d] : a ? null : t.firstChild ? i.call(t.childNodes) : null,
            s,
            !c && d ? d : a ? a.__e : t.firstChild,
            c,
            n,
        ),
        D(s, l, n);
}
function O(l, t, d) {
    var e,
        c,
        a,
        s,
        n = M({}, l.props);
    for (a in (l.type && l.type.defaultProps && (s = l.type.defaultProps), t))
        "key" == a ? (e = t[a]) : "ref" == a ? (c = t[a]) : (n[a] = void 0 === t[a] && null != s ? s[a] : t[a]);
    return (
        arguments.length > 2 && (n.children = arguments.length > 3 ? i.call(arguments, 2) : d),
        y(l.type, n, e || l.key, c || l.ref, null)
    );
}
function J(l) {
    function t(l) {
        var d, i;
        return (
            this.getChildContext ||
                ((d = new Set()),
                ((i = {})[t.__c] = this),
                (this.getChildContext = function () {
                    return i;
                }),
                (this.componentWillUnmount = function () {
                    d = null;
                }),
                (this.shouldComponentUpdate = function (l) {
                    this.props.value != l.value &&
                        d.forEach(function (l) {
                            (l.__e = !0), L(l);
                        });
                }),
                (this.sub = function (l) {
                    d.add(l);
                    var t = l.componentWillUnmount;
                    l.componentWillUnmount = function () {
                        d && d.delete(l), t && t.call(l);
                    };
                })),
            l.children
        );
    }
    return (
        (t.__c = "__cC" + h++),
        (t.__ = l),
        (t.Provider =
            t.__l =
            (t.Consumer = function (l, t) {
                return l.children(t);
            }).contextType =
                t),
        t
    );
}
(i = G.slice),
    (e = {
        __e: function (l, t, d, i) {
            for (var e, c, a; (t = t.__); )
                if ((e = t.__c) && !e.__)
                    try {
                        if (
                            ((c = e.constructor) &&
                                null != c.getDerivedStateFromError &&
                                (e.setState(c.getDerivedStateFromError(l)), (a = e.__d)),
                            null != e.componentDidCatch && (e.componentDidCatch(l, i || {}), (a = e.__d)),
                            a)
                        )
                            return (e.__E = e);
                    } catch (t) {
                        l = t;
                    }
            throw l;
        },
    }),
    (c = 0),
    (T.prototype.setState = function (l, t) {
        var d = null != this.__s && this.__s != this.state ? this.__s : (this.__s = M({}, this.state));
        "function" == typeof l && (l = l(M({}, d), this.props)),
            l && M(d, l),
            null != l && this.__v && (t && this._sb.push(t), L(this));
    }),
    (T.prototype.forceUpdate = function (l) {
        this.__v && ((this.__e = !0), l && this.__h.push(l), L(this));
    }),
    (T.prototype.render = Y),
    (a = []),
    (n = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (Z = function (l, t) {
        return l.__v.__b - t.__v.__b;
    }),
    (I.__r = 0),
    (b = /(PointerCapture)$|Capture$/i),
    (m = 0),
    (o = C(!1)),
    (u = C(!0)),
    (h = 0);
var k = 0;
function E(l, t, d, i, c, a) {
    t || (t = {});
    var s,
        n,
        Z = t;
    if ("ref" in Z) for (n in ((Z = {}), t)) "ref" == n ? (s = t[n]) : (Z[n] = t[n]);
    var b = {
        type: l,
        props: Z,
        key: d,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --k,
        __i: -1,
        __u: 0,
        __source: c,
        __self: a,
    };
    if ("function" == typeof l && (s = l.defaultProps)) for (n in s) void 0 === Z[n] && (Z[n] = s[n]);
    return e.vnode && e.vnode(b), b;
}
var v,
    K,
    H,
    Q,
    P = 0,
    f = [],
    B = e,
    A = B.__b,
    _ = B.__r,
    $ = B.diffed,
    q = B.__c,
    ll = B.unmount,
    lt = B.__;
function ld(l, t) {
    B.__h && B.__h(K, l, P || t), (P = 0);
    var d = K.__H || (K.__H = { __: [], __h: [] });
    return l >= d.__.length && d.__.push({}), d.__[l];
}
function li(l) {
    return (
        (P = 1),
        (function (l, t) {
            var d = ld(v++, 2);
            if (
                ((d.t = l),
                !d.__c &&
                    ((d.__ = [
                        lp(void 0, t),
                        function (l) {
                            var t = d.__N ? d.__N[0] : d.__[0],
                                i = d.t(t, l);
                            t !== i && ((d.__N = [i, d.__[1]]), d.__c.setState({}));
                        },
                    ]),
                    (d.__c = K),
                    !K.__f))
            ) {
                var i = function (l, t, i) {
                    if (!d.__c.__H) return !0;
                    var c = d.__c.__H.__.filter(function (l) {
                        return !!l.__c;
                    });
                    if (
                        c.every(function (l) {
                            return !l.__N;
                        })
                    )
                        return !e || e.call(this, l, t, i);
                    var a = d.__c.props !== l;
                    return (
                        c.forEach(function (l) {
                            if (l.__N) {
                                var t = l.__[0];
                                (l.__ = l.__N), (l.__N = void 0), t !== l.__[0] && (a = !0);
                            }
                        }),
                        (e && e.call(this, l, t, i)) || a
                    );
                };
                K.__f = !0;
                var e = K.shouldComponentUpdate,
                    c = K.componentWillUpdate;
                (K.componentWillUpdate = function (l, t, d) {
                    if (this.__e) {
                        var a = e;
                        (e = void 0), i(l, t, d), (e = a);
                    }
                    c && c.call(this, l, t, d);
                }),
                    (K.shouldComponentUpdate = i);
            }
            return d.__N || d.__;
        })(lp, l)
    );
}
function le(l, t) {
    var d = ld(v++, 3);
    !B.__s && lG(d.__H, t) && ((d.__ = l), (d.u = t), K.__H.__h.push(d));
}
function lc(l, t) {
    var d = ld(v++, 4);
    !B.__s && lG(d.__H, t) && ((d.__ = l), (d.u = t), K.__h.push(d));
}
function la(l) {
    return (
        (P = 5),
        ln(function () {
            return { current: l };
        }, [])
    );
}
function ls(l, t, d) {
    (P = 6),
        lc(
            function () {
                if ("function" == typeof l) {
                    var d = l(t());
                    return function () {
                        l(null), d && "function" == typeof d && d();
                    };
                }
                if (l)
                    return (
                        (l.current = t()),
                        function () {
                            return (l.current = null);
                        }
                    );
            },
            null == d ? d : d.concat(l),
        );
}
function ln(l, t) {
    var d = ld(v++, 7);
    return lG(d.__H, t) && ((d.__ = l()), (d.__H = t), (d.__h = l)), d.__;
}
function lZ(l, t) {
    return (
        (P = 8),
        ln(function () {
            return l;
        }, t)
    );
}
function lb(l) {
    var t = K.context[l.__c],
        d = ld(v++, 9);
    return (d.c = l), t ? (d.__ ?? ((d.__ = !0), t.sub(K)), t.props.value) : l.__;
}
function lm() {
    var l = ld(v++, 11);
    if (!l.__) {
        for (var t = K.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
        var d = t.__m || (t.__m = [0, 0]);
        l.__ = "P" + d[0] + "-" + d[1]++;
    }
    return l.__;
}
function lo() {
    for (var l; (l = f.shift()); )
        if (l.__P && l.__H)
            try {
                l.__H.__h.forEach(lh), l.__H.__h.forEach(lW), (l.__H.__h = []);
            } catch (t) {
                (l.__H.__h = []), B.__e(t, l.__v);
            }
}
(B.__b = function (l) {
    (K = null), A && A(l);
}),
    (B.__ = function (l, t) {
        l && t.__k && t.__k.__m && (l.__m = t.__k.__m), lt && lt(l, t);
    }),
    (B.__r = function (l) {
        _ && _(l), (v = 0);
        var t = (K = l.__c).__H;
        t &&
            (H === K
                ? ((t.__h = []),
                  (K.__h = []),
                  t.__.forEach(function (l) {
                      l.__N && (l.__ = l.__N), (l.u = l.__N = void 0);
                  }))
                : (t.__h.forEach(lh), t.__h.forEach(lW), (t.__h = []), (v = 0))),
            (H = K);
    }),
    (B.diffed = function (l) {
        $ && $(l);
        var t = l.__c;
        t &&
            t.__H &&
            (t.__H.__h.length &&
                ((1 !== f.push(t) && Q === B.requestAnimationFrame) ||
                    (
                        (Q = B.requestAnimationFrame) ||
                        function (l) {
                            var t,
                                d = function () {
                                    clearTimeout(i), lu && cancelAnimationFrame(t), setTimeout(l);
                                },
                                i = setTimeout(d, 35);
                            lu && (t = requestAnimationFrame(d));
                        }
                    )(lo)),
            t.__H.__.forEach(function (l) {
                l.u && (l.__H = l.u), (l.u = void 0);
            })),
            (H = K = null);
    }),
    (B.__c = function (l, t) {
        t.some(function (l) {
            try {
                l.__h.forEach(lh),
                    (l.__h = l.__h.filter(function (l) {
                        return !l.__ || lW(l);
                    }));
            } catch (d) {
                t.some(function (l) {
                    l.__h && (l.__h = []);
                }),
                    (t = []),
                    B.__e(d, l.__v);
            }
        }),
            q && q(l, t);
    }),
    (B.unmount = function (l) {
        ll && ll(l);
        var t,
            d = l.__c;
        d &&
            d.__H &&
            (d.__H.__.forEach(function (l) {
                try {
                    lh(l);
                } catch (l) {
                    t = l;
                }
            }),
            (d.__H = void 0),
            t && B.__e(t, d.__v));
    });
var lu = "function" == typeof requestAnimationFrame;
function lh(l) {
    var t = K,
        d = l.__c;
    "function" == typeof d && ((l.__c = void 0), d()), (K = t);
}
function lW(l) {
    var t = K;
    (l.__c = l.__()), (K = t);
}
function lG(l, t) {
    return (
        !l ||
        l.length !== t.length ||
        t.some(function (t, d) {
            return t !== l[d];
        })
    );
}
function lp(l, t) {
    return "function" == typeof t ? t(l) : t;
}
function lN(l, t) {
    for (var d in t) l[d] = t[d];
    return l;
}
function lM(l, t) {
    for (var d in l) if ("__source" !== d && !(d in t)) return !0;
    for (var i in t) if ("__source" !== i && l[i] !== t[i]) return !0;
    return !1;
}
function lX(l, t) {
    var d = t(),
        i = li({ t: { __: d, u: t } }),
        e = i[0].t,
        c = i[1];
    return (
        lc(
            function () {
                (e.__ = d), (e.u = t), lr(e) && c({ t: e });
            },
            [l, d, t],
        ),
        le(
            function () {
                return (
                    lr(e) && c({ t: e }),
                    l(function () {
                        lr(e) && c({ t: e });
                    })
                );
            },
            [l],
        ),
        d
    );
}
function lr(l) {
    var t = l.u,
        d = l.__;
    try {
        var i = t();
        return (d !== i || (0 === d && 1 / d != 1 / i)) && (d == d || i == i);
    } catch (l) {
        return !0;
    }
}
function ly(l, t) {
    (this.props = l), (this.context = t);
}
((ly.prototype = new T()).isPureReactComponent = !0),
    (ly.prototype.shouldComponentUpdate = function (l, t) {
        return lM(this.props, l) || lM(this.state, t);
    });
var lY = e.__b;
e.__b = function (l) {
    l.type && l.type.__f && l.ref && ((l.props.ref = l.ref), (l.ref = null)), lY && lY(l);
};
var lT = ("u" > typeof Symbol && Symbol.for && Symbol.for("react.forward_ref")) || 3911;
function lV(l) {
    function t(t) {
        var d = lN({}, t);
        return delete d.ref, l(d, t.ref || null);
    }
    return (
        (t.$$typeof = lT),
        (t.render = l),
        (t.prototype.isReactComponent = t.__f = !0),
        (t.displayName = "ForwardRef(" + (l.displayName || l.name) + ")"),
        t
    );
}
var lL = e.__e;
e.__e = function (l, t, d, i) {
    if (l.then) {
        for (var e, c = t; (c = c.__); )
            if ((e = c.__c) && e.__c) return t.__e ?? ((t.__e = d.__e), (t.__k = d.__k)), e.__c(l, t);
    }
    lL(l, t, d, i);
};
var lI = e.unmount;
function lz() {
    (this.__u = 0), (this.o = null), (this.__b = null);
}
function lw(l) {
    var t = l.__.__c;
    return t && t.__a && t.__a(l);
}
function lR(l) {
    var t, d, i;
    function e(e) {
        if (
            (t ||
                (t = l()).then(
                    function (l) {
                        d = l.default || l;
                    },
                    function (l) {
                        i = l;
                    },
                ),
            i)
        )
            throw i;
        if (!d) throw t;
        return r(d, e);
    }
    return (e.displayName = "Lazy"), (e.__f = !0), e;
}
function lS() {
    (this.i = null), (this.l = null);
}
(e.unmount = function (l) {
    var t = l.__c;
    t && t.__R && t.__R(), t && 32 & l.__u && (l.type = null), lI && lI(l);
}),
    ((lz.prototype = new T()).__c = function (l, t) {
        var d = t.__c,
            i = this;
        (i.o ??= []), i.o.push(d);
        var e = lw(i.__v),
            c = !1,
            a = function () {
                c || ((c = !0), (d.__R = null), e ? e(s) : s());
            };
        d.__R = a;
        var s = function () {
            if (!--i.__u) {
                if (i.state.__a) {
                    var l,
                        t = i.state.__a;
                    i.__v.__k[0] = (function l(t, d, i) {
                        return (
                            t &&
                                i &&
                                ((t.__v = null),
                                (t.__k =
                                    t.__k &&
                                    t.__k.map(function (t) {
                                        return l(t, d, i);
                                    })),
                                t.__c &&
                                    t.__c.__P === d &&
                                    (t.__e && i.appendChild(t.__e), (t.__c.__e = !0), (t.__c.__P = i))),
                            t
                        );
                    })(t, t.__c.__P, t.__c.__O);
                }
                for (i.setState({ __a: (i.__b = null) }); (l = i.o.pop()); ) l.forceUpdate();
            }
        };
        i.__u++ || 32 & t.__u || i.setState({ __a: (i.__b = i.__v.__k[0]) }), l.then(a, a);
    }),
    (lz.prototype.componentWillUnmount = function () {
        this.o = [];
    }),
    (lz.prototype.render = function (l, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var d = document.createElement("div"),
                    i = this.__v.__k[0].__c;
                this.__v.__k[0] = (function l(t, d, i) {
                    return (
                        t &&
                            (t.__c &&
                                t.__c.__H &&
                                (t.__c.__H.__.forEach(function (l) {
                                    "function" == typeof l.__c && l.__c();
                                }),
                                (t.__c.__H = null)),
                            null != (t = lN({}, t)).__c &&
                                (t.__c.__P === i && (t.__c.__P = d), (t.__c.__e = !0), (t.__c = null)),
                            (t.__k =
                                t.__k &&
                                t.__k.map(function (t) {
                                    return l(t, d, i);
                                }))),
                        t
                    );
                })(this.__b, d, (i.__O = i.__P));
            }
            this.__b = null;
        }
        var e = t.__a && r(Y, null, l.fallback);
        return e && (e.__u &= -33), [r(Y, null, t.__a ? null : l.children), e];
    });
var lC = function (l, t, d) {
    if ((++d[1] === d[0] && l.l.delete(t), l.props.revealOrder && ("t" !== l.props.revealOrder[0] || !l.l.size)))
        for (d = l.i; d; ) {
            for (; d.length > 3; ) d.pop()();
            if (d[1] < d[0]) break;
            l.i = d = d[2];
        }
};
function lx(l) {
    return (
        (this.getChildContext = function () {
            return l.context;
        }),
        l.children
    );
}
function lg(l) {
    var t = this,
        d = l.h;
    if (
        ((t.componentWillUnmount = function () {
            F(null, t.v), (t.v = null), (t.h = null);
        }),
        t.h && t.h !== d && t.componentWillUnmount(),
        !t.v)
    ) {
        for (var i = t.__v; null !== i && !i.__m && null !== i.__; ) i = i.__;
        (t.h = d),
            (t.v = {
                nodeType: 1,
                parentNode: d,
                childNodes: [],
                __k: { __m: i.__m },
                contains: function () {
                    return !0;
                },
                insertBefore: function (l, d) {
                    this.childNodes.push(l), t.h.insertBefore(l, d);
                },
                removeChild: function (l) {
                    this.childNodes.splice(this.childNodes.indexOf(l) >>> 1, 1), t.h.removeChild(l);
                },
            });
    }
    F(r(lx, { context: t.context }, l.__v), t.v);
}
function lD(l, t) {
    var d = r(lg, { __v: l, h: t });
    return (d.containerInfo = t), d;
}
((lS.prototype = new T()).__a = function (l) {
    var t = this,
        d = lw(t.__v),
        i = t.l.get(l);
    return (
        i[0]++,
        function (e) {
            var c = function () {
                t.props.revealOrder ? (i.push(e), lC(t, l, i)) : e();
            };
            d ? d(c) : c();
        }
    );
}),
    (lS.prototype.render = function (l) {
        (this.i = null), (this.l = new Map());
        var t = w(l.children);
        l.revealOrder && "b" === l.revealOrder[0] && t.reverse();
        for (var d = t.length; d--; ) this.l.set(t[d], (this.i = [1, 0, this.i]));
        return l.children;
    }),
    (lS.prototype.componentDidUpdate = lS.prototype.componentDidMount =
        function () {
            var l = this;
            this.l.forEach(function (t, d) {
                lC(l, d, t);
            });
        });
var lj = ("u" > typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
    lU =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    lF = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    lO = /[A-Z0-9]/g,
    lJ = "u" > typeof document;
(T.prototype.isReactComponent = {}),
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (l) {
        Object.defineProperty(T.prototype, l, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + l];
            },
            set: function (t) {
                Object.defineProperty(this, l, { configurable: !0, writable: !0, value: t });
            },
        });
    });
var lk = e.event;
function lE() {}
function lv() {
    return this.cancelBubble;
}
function lK() {
    return this.defaultPrevented;
}
e.event = function (l) {
    return (
        lk && (l = lk(l)),
        (l.persist = lE),
        (l.isPropagationStopped = lv),
        (l.isDefaultPrevented = lK),
        (l.nativeEvent = l)
    );
};
var lH = {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this.class;
        },
    },
    lQ = e.vnode;
e.vnode = function (l) {
    "string" == typeof l.type &&
        (function (l) {
            var t = l.props,
                d = l.type,
                i = {},
                e = -1 === d.indexOf("-");
            for (var c in t) {
                var a = t[c];
                if (
                    !(
                        ("value" === c && "defaultValue" in t && null == a) ||
                        (lJ && "children" === c && "noscript" === d) ||
                        "class" === c ||
                        "className" === c
                    )
                ) {
                    var s,
                        n = c.toLowerCase();
                    "defaultValue" === c && "value" in t && null == t.value
                        ? (c = "value")
                        : "download" === c && !0 === a
                          ? (a = "")
                          : "translate" === n && "no" === a
                            ? (a = !1)
                            : "o" === n[0] && "n" === n[1]
                              ? "ondoubleclick" === n
                                  ? (c = "ondblclick")
                                  : "onchange" !== n ||
                                      ("input" !== d && "textarea" !== d) ||
                                      ((s = t.type),
                                      ("u" > typeof Symbol && "symbol" == typeof Symbol()
                                          ? /fil|che|rad/
                                          : /fil|che|ra/
                                      ).test(s))
                                    ? "onfocus" === n
                                        ? (c = "onfocusin")
                                        : "onblur" === n
                                          ? (c = "onfocusout")
                                          : lF.test(c) && (c = n)
                                    : (n = c = "oninput")
                              : e && lU.test(c)
                                ? (c = c.replace(lO, "-$&").toLowerCase())
                                : null === a && (a = void 0),
                        "oninput" === n && i[(c = n)] && (c = "oninputCapture"),
                        (i[c] = a);
                }
            }
            "select" == d &&
                i.multiple &&
                Array.isArray(i.value) &&
                (i.value = w(t.children).forEach(function (l) {
                    l.props.selected = -1 != i.value.indexOf(l.props.value);
                })),
                "select" == d &&
                    null != i.defaultValue &&
                    (i.value = w(t.children).forEach(function (l) {
                        l.props.selected = i.multiple
                            ? -1 != i.defaultValue.indexOf(l.props.value)
                            : i.defaultValue == l.props.value;
                    })),
                t.class && !t.className
                    ? ((i.class = t.class), Object.defineProperty(i, "className", lH))
                    : ((t.className && !t.class) || (t.class && t.className)) && (i.class = i.className = t.className),
                (l.props = i);
        })(l),
        (l.$$typeof = lj),
        lQ && lQ(l);
};
var lP = e.__r;
e.__r = function (l) {
    lP && lP(l), l.__c;
};
var lf = e.diffed;
e.diffed = function (l) {
    lf && lf(l);
    var t = l.props,
        d = l.__e;
    null != d &&
        "textarea" === l.type &&
        "value" in t &&
        t.value !== d.value &&
        (d.value = null == t.value ? "" : t.value);
};
var lB = function (l, t) {
    return l(t);
};
function lA() {
    return (lA = Object.assign
        ? Object.assign.bind()
        : function (l) {
              for (var t = 1; t < arguments.length; t++) {
                  var d = arguments[t];
                  for (var i in d) Object.prototype.hasOwnProperty.call(d, i) && (l[i] = d[i]);
              }
              return l;
          }).apply(this, arguments);
}
function l_(l, t) {
    if (null == l) return {};
    var d,
        i,
        e = {},
        c = Object.keys(l);
    for (i = 0; i < c.length; i++) t.indexOf((d = c[i])) >= 0 || (e[d] = l[d]);
    return e;
}
var l$ = ["context", "children"],
    lq = ["useFragment"];
function l2(l, t, d, i) {
    function e() {
        var t,
            d = Reflect.construct(HTMLElement, [], e);
        return (
            (d._vdomComponent = l),
            i && i.shadow
                ? ((d._root = d.attachShadow({
                      mode: i.mode || "open",
                      serializable: null != (t = i.serializable) && t,
                  })),
                  i.adoptedStyleSheets && (d._root.adoptedStyleSheets = i.adoptedStyleSheets))
                : (d._root = d),
            d
        );
    }
    return (
        ((e.prototype = Object.create(HTMLElement.prototype)).constructor = e),
        (e.prototype.connectedCallback = function () {
            l1.call(this, i);
        }),
        (e.prototype.attributeChangedCallback = l9),
        (e.prototype.disconnectedCallback = l3),
        (e.observedAttributes = d = d || l.observedAttributes || Object.keys(l.propTypes || {})),
        l.formAssociated && (e.formAssociated = !0),
        d.forEach(function (l) {
            Object.defineProperty(e.prototype, l, {
                get: function () {
                    return this._vdom ? this._vdom.props[l] : this._props[l];
                },
                set: function (t) {
                    this._vdom
                        ? this.attributeChangedCallback(l, null, t)
                        : (this._props || (this._props = {}), (this._props[l] = t));
                    var d = typeof t;
                    (null != t && "string" !== d && "boolean" !== d && "number" !== d) || this.setAttribute(l, t);
                },
            });
        }),
        customElements.define(t || l.tagName || l.displayName || l.name, e),
        e
    );
}
function l0(l) {
    return (
        (this.getChildContext = function () {
            return l.context;
        }),
        O(l.children, l_(l, l$))
    );
}
function l1(l) {
    var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
    this.dispatchEvent(t),
        (this._vdom = r(
            l0,
            lA({}, this._props, { context: t.detail.context }),
            (function l(t, d, i) {
                if (3 === t.nodeType) return t.data;
                if (1 !== t.nodeType) return null;
                var e = [],
                    c = {},
                    a = 0,
                    s = t.attributes,
                    n = t.childNodes;
                for (a = s.length; a--; )
                    "slot" !== s[a].name && ((c[s[a].name] = s[a].value), (c[l5(s[a].name)] = s[a].value));
                for (a = n.length; a--; ) {
                    var Z = l(n[a], null, i),
                        b = n[a].slot;
                    b ? (c[b] = r(l4, { name: b }, Z)) : (e[a] = Z);
                }
                var m = !(!i || !i.shadow),
                    o = d ? r(l4, { useFragment: !m }, e) : e;
                return !m && d && (t.innerHTML = ""), r(d || t.nodeName.toLowerCase(), c, o);
            })(this, this._vdomComponent, l),
        )),
        (this.hasAttribute("hydrate")
            ? function l(t, d) {
                  F(t, d, l);
              }
            : F)(this._vdom, this._root);
}
function l5(l) {
    return l.replace(/-(\w)/g, function (l, t) {
        return t ? t.toUpperCase() : "";
    });
}
function l9(l, t, d) {
    if (this._vdom) {
        var i = {};
        (i[l] = d = null == d ? void 0 : d), (i[l5(l)] = d), (this._vdom = O(this._vdom, i)), F(this._vdom, this._root);
    }
}
function l3() {
    F((this._vdom = null), this._root);
}
function l4(l, t) {
    var d = this,
        i = l.useFragment,
        e = l_(l, lq);
    return r(
        i ? Y : "slot",
        lA({}, e, {
            ref: function (l) {
                l
                    ? ((d.ref = l),
                      d._listener ||
                          ((d._listener = function (l) {
                              l.stopPropagation(), (l.detail.context = t);
                          }),
                          l.addEventListener("_preact", d._listener)))
                    : d.ref.removeEventListener("_preact", d._listener);
            },
        }),
    );
}
var l7,
    l6 = {};
function l8(l, t, d) {
    if (3 === l.nodeType) {
        var i = "textContent" in l ? l.textContent : l.nodeValue || "";
        if (!1 !== l8.options.trim) {
            var e = 0 === t || t === d.length - 1;
            if (
                (!(i =
                    i.match(/^[\s\n]+$/g) && "all" !== l8.options.trim
                        ? " "
                        : i.replace(/(^[\s\n]+|[\s\n]+$)/g, "all" === l8.options.trim || e ? "" : " ")) ||
                    " " === i) &&
                d.length > 1 &&
                e
            )
                return null;
        }
        return i;
    }
    if (1 !== l.nodeType) return null;
    var c = String(l.nodeName).toLowerCase();
    if ("script" === c && !l8.options.allowScripts) return null;
    var a,
        s,
        n = l8.h(
            c,
            (function (l) {
                var t = l && l.length;
                if (!t) return null;
                for (var d = {}, i = 0; i < t; i++) {
                    var e = l[i],
                        c = e.name,
                        a = e.value;
                    "on" === c.substring(0, 2) && l8.options.allowEvents && (a = Function(a)), (d[c] = a);
                }
                return d;
            })(l.attributes),
            (s = (a = l.childNodes) && Array.prototype.map.call(a, l8).filter(tt)) && s.length ? s : null,
        );
    return l8.visitor && l8.visitor(n), n;
}
var tl,
    tt = function (l) {
        return l;
    },
    td = {};
function ti(l) {
    var t = (l.type || "").toLowerCase(),
        d = ti.map;
    d && d.hasOwnProperty(t)
        ? ((l.type = d[t]),
          (l.props = Object.keys(l.props || {}).reduce(function (t, d) {
              return (
                  (t[
                      d.replace(/-(.)/g, function (l, t) {
                          return t.toUpperCase();
                      })
                  ] = l.props[d]),
                  t
              );
          }, {})))
        : (l.type = t.replace(/[^a-z0-9-]/i, ""));
}
var te = (function (l) {
    function t() {
        l.apply(this, arguments);
    }
    return (
        l && (t.__proto__ = l),
        ((t.prototype = Object.create(l && l.prototype)).constructor = t),
        (t.setReviver = function (l) {
            tl = l;
        }),
        (t.prototype.shouldComponentUpdate = function (l) {
            var t = this.props;
            return l.wrap !== t.wrap || l.type !== t.type || l.markup !== t.markup;
        }),
        (t.prototype.setComponents = function (l) {
            if (((this.map = {}), l)) {
                for (var t in l)
                    if (l.hasOwnProperty(t)) {
                        var d = t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g, "$1$3-$2$4").toLowerCase();
                        this.map[d] = l[t];
                    }
            }
        }),
        (t.prototype.render = function (l) {
            var t = l.wrap;
            void 0 === t && (t = !0);
            var d,
                i = l.type,
                e = l.markup,
                c = l.components,
                a = l.reviver,
                s = l.onError,
                n = l["allow-scripts"],
                Z = l["allow-events"],
                b = l.trim,
                m = (function (l, t) {
                    var d = {};
                    for (var i in l) Object.prototype.hasOwnProperty.call(l, i) && -1 === t.indexOf(i) && (d[i] = l[i]);
                    return d;
                })(l, [
                    "wrap",
                    "type",
                    "markup",
                    "components",
                    "reviver",
                    "onError",
                    "allow-scripts",
                    "allow-events",
                    "trim",
                ]),
                o = a || this.reviver || this.constructor.prototype.reviver || tl || r;
            this.setComponents(c);
            try {
                d = (function (l, t, d, i, e) {
                    var c = (function (l, t) {
                        var d, i, e, c;
                        "html" === t
                            ? ((c = "body"), (e = "<!DOCTYPE html>\n<html><body>" + l + "</body></html>"))
                            : ((c = "xml"), (e = '<?xml version="1.0" encoding="UTF-8"?>\n<xml>' + l + "</xml>"));
                        try {
                            d = new DOMParser().parseFromString(e, "html" === t ? "text/html" : "application/xml");
                        } catch (l) {
                            i = l;
                        }
                        if (
                            (d ||
                                "html" !== t ||
                                ((d =
                                    l7 ||
                                    (l7 = (function () {
                                        if (document.implementation && document.implementation.createHTMLDocument)
                                            return document.implementation.createHTMLDocument("");
                                        var l = document.createElement("iframe");
                                        return (
                                            (l.style.cssText =
                                                "position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;"),
                                            l.setAttribute("sandbox", "allow-forms"),
                                            document.body.appendChild(l),
                                            l.contentWindow.document
                                        );
                                    })())).open(),
                                d.write(e),
                                d.close()),
                            d)
                        ) {
                            var a = d.getElementsByTagName(c)[0],
                                s = a.firstChild;
                            return (
                                l && !s && (a.error = "Document parse failed."),
                                s &&
                                    "parsererror" === String(s.nodeName).toLowerCase() &&
                                    (s.removeChild(s.firstChild),
                                    s.removeChild(s.lastChild),
                                    (a.error = s.textContent || s.nodeValue || i || "Unknown error"),
                                    a.removeChild(s)),
                                a
                            );
                        }
                    })(l, t);
                    if (c && c.error) throw Error(c.error);
                    var a = (c && c.body) || c;
                    ti.map = i || td;
                    var s = a && ((l8.visitor = ti), (l8.h = d), (l8.options = e || l6), l8(a));
                    return (ti.map = null), (s && s.props && s.props.children) || null;
                })(e, i, o, this.map, { allowScripts: n, allowEvents: Z, trim: b });
            } catch (l) {
                s ? s({ error: l }) : "u" > typeof console && console.error && console.error("preact-markup: " + l);
            }
            if (!1 === t) return d || null;
            var u = m.hasOwnProperty("className") ? "className" : "class",
                h = m[u];
            return (
                h
                    ? h.splice
                        ? h.splice(0, 0, "markup")
                        : "string" == typeof h
                          ? (m[u] += " markup")
                          : "object" == typeof h && (h.markup = !0)
                    : (m[u] = "markup"),
                o("div", m, d || null)
            );
        }),
        t
    );
})(T);
