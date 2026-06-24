let r, n;
var o,
    s,
    a,
    l,
    c,
    d,
    u,
    h,
    p,
    f,
    m,
    g,
    C,
    v,
    y,
    w,
    _,
    b,
    L,
    E,
    S = {},
    I = [],
    T = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    k = Array.isArray;
function x(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
}
function P(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
}
function M(e, t, i) {
    var r,
        n,
        o,
        s = {};
    for (o in t) "key" == o ? (r = t[o]) : "ref" == o ? (n = t[o]) : (s[o] = t[o]);
    if (
        (arguments.length > 2 && (s.children = arguments.length > 3 ? h.call(arguments, 2) : i),
        "function" == typeof e && null != e.defaultProps)
    )
        for (o in e.defaultProps) void 0 === s[o] && (s[o] = e.defaultProps[o]);
    return O(e, s, r, n, null);
}
function O(e, t, i, r, n) {
    var o = {
        type: e,
        props: t,
        key: i,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: n ?? ++f,
        __i: -1,
        __u: 0,
    };
    return null == n && null != p.vnode && p.vnode(o), o;
}
function A(e) {
    return e.children;
}
function R(e, t) {
    (this.props = e), (this.context = t);
}
function D(e, t) {
    if (null == t) return e.__ ? D(e.__, e.__i + 1) : null;
    for (var i; t < e.__k.length; t++) if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
    return "function" == typeof e.type ? D(e) : null;
}
function F(e) {
    ((!e.__d && (e.__d = !0) && g.push(e) && !U.__r++) || C != p.debounceRendering) &&
        ((C = p.debounceRendering) || v)(U);
}
function U() {
    for (var e, t, i, r, n, o, s = 1; g.length; )
        g.length > s && g.sort(y),
            (e = g.shift()),
            (s = g.length),
            e.__d &&
                ((t = void 0),
                (i = void 0),
                (r = (i = e.__v).__e),
                (n = []),
                (o = []),
                e.__P &&
                    (((t = x({}, i)).__v = i.__v + 1),
                    p.vnode && p.vnode(t),
                    $(e.__P, t, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [r] : null, n, r ?? D(i), !!(32 & i.__u), o),
                    (t.__v = i.__v),
                    (t.__.__k[t.__i] = t),
                    W(n, t, o),
                    (i.__e = i.__ = null),
                    t.__e != r &&
                        (function e(t) {
                            var i, r;
                            if (null != (t = t.__) && null != t.__c) {
                                for (t.__e = t.__c.base = null, i = 0; i < t.__k.length; i++)
                                    if (null != (r = t.__k[i]) && null != r.__e) {
                                        t.__e = t.__c.base = r.__e;
                                        break;
                                    }
                                return e(t);
                            }
                        })(t)));
    U.__r = 0;
}
function H(e, t, i, r, n, o, s, a, l, c, d) {
    var u,
        h,
        f,
        m,
        g,
        C,
        v,
        y = (r && r.__k) || I,
        w = t.length;
    for (
        l = (function (e, t, i, r, n) {
            var o,
                s,
                a,
                l,
                c,
                d = i.length,
                u = d,
                h = 0;
            for (e.__k = Array(n), o = 0; o < n; o++)
                null != (s = t[o]) && "boolean" != typeof s && "function" != typeof s
                    ? ((l = o + h),
                      ((s = e.__k[o] =
                          "string" == typeof s ||
                          "number" == typeof s ||
                          "bigint" == typeof s ||
                          s.constructor == String
                              ? O(null, s, null, null, null)
                              : k(s)
                                ? O(A, { children: s }, null, null, null)
                                : null == s.constructor && s.__b > 0
                                  ? O(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
                                  : s).__ = e),
                      (s.__b = e.__b + 1),
                      (a = null),
                      -1 !=
                          (c = s.__i =
                              (function (e, t, i, r) {
                                  var n,
                                      o,
                                      s,
                                      a = e.key,
                                      l = e.type,
                                      c = t[i],
                                      d = null != c && (2 & c.__u) == 0;
                                  if ((null === c && null == e.key) || (d && a == c.key && l == c.type)) return i;
                                  if (r > +!!d) {
                                      for (n = i - 1, o = i + 1; n >= 0 || o < t.length; )
                                          if (
                                              null != (c = t[(s = n >= 0 ? n-- : o++)]) &&
                                              !(2 & c.__u) &&
                                              a == c.key &&
                                              l == c.type
                                          )
                                              return s;
                                  }
                                  return -1;
                              })(s, i, l, u)) && (u--, (a = i[c]) && (a.__u |= 2)),
                      null == a || null == a.__v
                          ? (-1 == c && (n > d ? h-- : n < d && h++), "function" != typeof s.type && (s.__u |= 4))
                          : c != l && (c == l - 1 ? h-- : c == l + 1 ? h++ : (c > l ? h-- : h++, (s.__u |= 4))))
                    : (e.__k[o] = null);
            if (u)
                for (o = 0; o < d; o++)
                    null == (a = i[o]) ||
                        2 & a.__u ||
                        (a.__e == r && (r = D(a)),
                        (function e(t, i, r) {
                            var n, o;
                            if (
                                (p.unmount && p.unmount(t),
                                (n = t.ref) && ((n.current && n.current != t.__e) || j(n, null, i)),
                                null != (n = t.__c))
                            ) {
                                if (n.componentWillUnmount)
                                    try {
                                        n.componentWillUnmount();
                                    } catch (e) {
                                        p.__e(e, i);
                                    }
                                n.base = n.__P = null;
                            }
                            if ((n = t.__k))
                                for (o = 0; o < n.length; o++) n[o] && e(n[o], i, r || "function" != typeof t.type);
                            r || P(t.__e), (t.__c = t.__ = t.__e = void 0);
                        })(a, a));
            return r;
        })(i, t, y, l, w),
            u = 0;
        u < w;
        u++
    )
        null != (f = i.__k[u]) &&
            ((h = -1 == f.__i ? S : y[f.__i] || S),
            (f.__i = u),
            (C = $(e, f, h, n, o, s, a, l, c, d)),
            (m = f.__e),
            f.ref && h.ref != f.ref && (h.ref && j(h.ref, null, f), d.push(f.ref, f.__c || m, f)),
            null == g && null != m && (g = m),
            (v = !!(4 & f.__u)) || h.__k === f.__k
                ? (l = (function e(t, i, r, n) {
                      var o, s;
                      if ("function" == typeof t.type) {
                          for (o = t.__k, s = 0; o && s < o.length; s++)
                              o[s] && ((o[s].__ = t), (i = e(o[s], i, r, n)));
                          return i;
                      }
                      t.__e != i &&
                          (n && (i && t.type && !i.parentNode && (i = D(t)), r.insertBefore(t.__e, i || null)),
                          (i = t.__e));
                      do i &&= i.nextSibling;
                      while (null != i && 8 == i.nodeType);
                      return i;
                  })(f, l, e, v))
                : "function" == typeof f.type && void 0 !== C
                  ? (l = C)
                  : m && (l = m.nextSibling),
            (f.__u &= -7));
    return (i.__e = g), l;
}
function N(e, t) {
    return (
        (t ||= []),
        null == e ||
            "boolean" == typeof e ||
            (k(e)
                ? e.some(function (e) {
                      N(e, t);
                  })
                : t.push(e)),
        t
    );
}
function V(e, t, i) {
    "-" == t[0]
        ? e.setProperty(t, i ?? "")
        : (e[t] = null == i ? "" : "number" != typeof i || T.test(t) ? i : i + "px");
}
function B(e, t, i, r, n) {
    var o, s;
    e: if ("style" == t)
        if ("string" == typeof i) e.style.cssText = i;
        else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
                for (t in r) (i && t in i) || V(e.style, t, "");
            if (i) for (t in i) (r && i[t] == r[t]) || V(e.style, t, i[t]);
        }
    else if ("o" == t[0] && "n" == t[1])
        (o = t != (t = t.replace(w, "$1"))),
            (t = (s = t.toLowerCase()) in e || "onFocusOut" == t || "onFocusIn" == t ? s.slice(2) : t.slice(2)),
            (e.l ||= {}),
            (e.l[t + o] = i),
            i
                ? r
                    ? (i.u = r.u)
                    : ((i.u = _), e.addEventListener(t, o ? L : b, o))
                : e.removeEventListener(t, o ? L : b, o);
    else {
        if ("http://www.w3.org/2000/svg" == n) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
            t in e
        )
            try {
                e[t] = i ?? "";
                break e;
            } catch {}
        "function" == typeof i ||
            (null == i || (!1 === i && "-" != t[4])
                ? e.removeAttribute(t)
                : e.setAttribute(t, "popover" == t && 1 == i ? "" : i));
    }
}
function z(e) {
    return function (t) {
        if (this.l) {
            var i = this.l[t.type + e];
            if (null == t.t) t.t = _++;
            else if (t.t < i.u) return;
            return i(p.event ? p.event(t) : t);
        }
    };
}
function $(e, t, i, r, n, o, s, a, l, c) {
    var d,
        u,
        f,
        m,
        g,
        C,
        v,
        y,
        w,
        _,
        b,
        L,
        E,
        I,
        T,
        M,
        O,
        F = t.type;
    if (null != t.constructor) return null;
    128 & i.__u && ((l = !!(32 & i.__u)), (o = [(a = t.__e = i.__e)])), (d = p.__b) && d(t);
    e: if ("function" == typeof F)
        try {
            if (
                ((y = t.props),
                (w = "prototype" in F && F.prototype.render),
                (_ = (d = F.contextType) && r[d.__c]),
                (b = d ? (_ ? _.props.value : d.__) : r),
                i.__c
                    ? (v = (u = t.__c = i.__c).__ = u.__E)
                    : (w ? (t.__c = u = new F(y, b)) : ((t.__c = u = new R(y, b)), (u.constructor = F), (u.render = K)),
                      _ && _.sub(u),
                      (u.props = y),
                      (u.state ||= {}),
                      (u.context = b),
                      (u.__n = r),
                      (f = u.__d = !0),
                      (u.__h = []),
                      (u._sb = [])),
                w && null == u.__s && (u.__s = u.state),
                w &&
                    null != F.getDerivedStateFromProps &&
                    (u.__s == u.state && (u.__s = x({}, u.__s)), x(u.__s, F.getDerivedStateFromProps(y, u.__s))),
                (m = u.props),
                (g = u.state),
                (u.__v = t),
                f)
            )
                w && null == F.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(),
                    w && null != u.componentDidMount && u.__h.push(u.componentDidMount);
            else {
                if (
                    (w &&
                        null == F.getDerivedStateFromProps &&
                        y !== m &&
                        null != u.componentWillReceiveProps &&
                        u.componentWillReceiveProps(y, b),
                    (!u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(y, u.__s, b)) ||
                        t.__v == i.__v)
                ) {
                    for (
                        t.__v != i.__v && ((u.props = y), (u.state = u.__s), (u.__d = !1)),
                            t.__e = i.__e,
                            t.__k = i.__k,
                            t.__k.some(function (e) {
                                e && (e.__ = t);
                            }),
                            L = 0;
                        L < u._sb.length;
                        L++
                    )
                        u.__h.push(u._sb[L]);
                    (u._sb = []), u.__h.length && s.push(u);
                    break e;
                }
                null != u.componentWillUpdate && u.componentWillUpdate(y, u.__s, b),
                    w &&
                        null != u.componentDidUpdate &&
                        u.__h.push(function () {
                            u.componentDidUpdate(m, g, C);
                        });
            }
            if (((u.context = b), (u.props = y), (u.__P = e), (u.__e = !1), (E = p.__r), (I = 0), w)) {
                for (
                    u.state = u.__s, u.__d = !1, E && E(t), d = u.render(u.props, u.state, u.context), T = 0;
                    T < u._sb.length;
                    T++
                )
                    u.__h.push(u._sb[T]);
                u._sb = [];
            } else
                do (u.__d = !1), E && E(t), (d = u.render(u.props, u.state, u.context)), (u.state = u.__s);
                while (u.__d && ++I < 25);
            (u.state = u.__s),
                null != u.getChildContext && (r = x(x({}, r), u.getChildContext())),
                w && !f && null != u.getSnapshotBeforeUpdate && (C = u.getSnapshotBeforeUpdate(m, g)),
                (M = d),
                null != d &&
                    d.type === A &&
                    null == d.key &&
                    (M = (function e(t) {
                        return "object" != typeof t || !t || (t.__b && t.__b > 0) ? t : k(t) ? t.map(e) : x({}, t);
                    })(d.props.children)),
                (a = H(e, k(M) ? M : [M], t, i, r, n, o, s, a, l, c)),
                (u.base = t.__e),
                (t.__u &= -161),
                u.__h.length && s.push(u),
                v && (u.__E = u.__ = null);
        } catch (e) {
            if (((t.__v = null), l || null != o))
                if (e.then) {
                    for (t.__u |= l ? 160 : 128; a && 8 == a.nodeType && a.nextSibling; ) a = a.nextSibling;
                    (o[o.indexOf(a)] = null), (t.__e = a);
                } else {
                    for (O = o.length; O--; ) P(o[O]);
                    Z(t);
                }
            else (t.__e = i.__e), (t.__k = i.__k), e.then || Z(t);
            p.__e(e, t, i);
        }
    else
        null == o && t.__v == i.__v
            ? ((t.__k = i.__k), (t.__e = i.__e))
            : (a = t.__e =
                  (function (e, t, i, r, n, o, s, a, l) {
                      var c,
                          d,
                          u,
                          f,
                          m,
                          g,
                          C,
                          v = i.props,
                          y = t.props,
                          w = t.type;
                      if (
                          ("svg" == w
                              ? (n = "http://www.w3.org/2000/svg")
                              : "math" == w
                                ? (n = "http://www.w3.org/1998/Math/MathML")
                                : (n ||= "http://www.w3.org/1999/xhtml"),
                          null != o)
                      ) {
                          for (c = 0; c < o.length; c++)
                              if (
                                  (m = o[c]) &&
                                  "setAttribute" in m == !!w &&
                                  (w ? m.localName == w : 3 == m.nodeType)
                              ) {
                                  (e = m), (o[c] = null);
                                  break;
                              }
                      }
                      if (null == e) {
                          if (null == w) return document.createTextNode(y);
                          (e = document.createElementNS(n, w, y.is && y)),
                              (a &&= (p.__m && p.__m(t, o), !1)),
                              (o = null);
                      }
                      if (null == w) v === y || (a && e.data == y) || (e.data = y);
                      else {
                          if (((o &&= h.call(e.childNodes)), (v = i.props || S), !a && null != o))
                              for (v = {}, c = 0; c < e.attributes.length; c++) v[(m = e.attributes[c]).name] = m.value;
                          for (c in v)
                              if (((m = v[c]), "children" != c)) {
                                  if ("dangerouslySetInnerHTML" == c) u = m;
                                  else if (!(c in y)) {
                                      if (
                                          ("value" == c && "defaultValue" in y) ||
                                          ("checked" == c && "defaultChecked" in y)
                                      )
                                          continue;
                                      B(e, c, null, m, n);
                                  }
                              }
                          for (c in y)
                              (m = y[c]),
                                  "children" == c
                                      ? (f = m)
                                      : "dangerouslySetInnerHTML" == c
                                        ? (d = m)
                                        : "value" == c
                                          ? (g = m)
                                          : "checked" == c
                                            ? (C = m)
                                            : (a && "function" != typeof m) || v[c] === m || B(e, c, m, v[c], n);
                          if (d)
                              a || (u && (d.__html == u.__html || d.__html == e.innerHTML)) || (e.innerHTML = d.__html),
                                  (t.__k = []);
                          else if (
                              (u && (e.innerHTML = ""),
                              H(
                                  "template" == t.type ? e.content : e,
                                  k(f) ? f : [f],
                                  t,
                                  i,
                                  r,
                                  "foreignObject" == w ? "http://www.w3.org/1999/xhtml" : n,
                                  o,
                                  s,
                                  o ? o[0] : i.__k && D(i, 0),
                                  a,
                                  l,
                              ),
                              null != o)
                          )
                              for (c = o.length; c--; ) P(o[c]);
                          a ||
                              ((c = "value"),
                              "progress" == w && null == g
                                  ? e.removeAttribute("value")
                                  : null == g ||
                                    (g === e[c] && ("progress" != w || g) && ("option" != w || g == v[c])) ||
                                    B(e, c, g, v[c], n),
                              (c = "checked"),
                              null != C && C != e[c] && B(e, c, C, v[c], n));
                      }
                      return e;
                  })(i.__e, t, i, r, n, o, s, l, c));
    return (d = p.diffed) && d(t), 128 & t.__u ? void 0 : a;
}
function Z(e) {
    e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Z);
}
function W(e, t, i) {
    for (var r = 0; r < i.length; r++) j(i[r], i[++r], i[++r]);
    p.__c && p.__c(t, e),
        e.some(function (t) {
            try {
                (e = t.__h),
                    (t.__h = []),
                    e.some(function (e) {
                        e.call(t);
                    });
            } catch (e) {
                p.__e(e, t.__v);
            }
        });
}
function j(e, t, i) {
    try {
        if ("function" == typeof e) {
            var r = "function" == typeof e.__u;
            r && e.__u(), (r && null == t) || (e.__u = e(t));
        } else e.current = t;
    } catch (e) {
        p.__e(e, i);
    }
}
function K(e, t, i) {
    return this.constructor(e, i);
}
function G(e, t, i) {
    var r, n, o, s;
    t == document && (t = document.documentElement),
        p.__ && p.__(e, t),
        (n = (r = "function" == typeof i) ? null : (i && i.__k) || t.__k),
        (o = []),
        (s = []),
        $(
            t,
            (e = ((!r && i) || t).__k = M(A, null, [e])),
            n || S,
            S,
            t.namespaceURI,
            !r && i ? [i] : n ? null : t.firstChild ? h.call(t.childNodes) : null,
            o,
            !r && i ? i : n ? n.__e : t.firstChild,
            r,
            s,
        ),
        W(o, e, s);
}
function q(e, t, i) {
    var r,
        n,
        o,
        s,
        a = x({}, e.props);
    for (o in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
        "key" == o ? (r = t[o]) : "ref" == o ? (n = t[o]) : (a[o] = void 0 === t[o] && null != s ? s[o] : t[o]);
    return (
        arguments.length > 2 && (a.children = arguments.length > 3 ? h.call(arguments, 2) : i),
        O(e.type, a, r || e.key, n || e.ref, null)
    );
}
(h = I.slice),
    (p = {
        __e: function (e, t, i, r) {
            for (var n, o, s; (t = t.__); )
                if ((n = t.__c) && !n.__)
                    try {
                        if (
                            ((o = n.constructor) &&
                                null != o.getDerivedStateFromError &&
                                (n.setState(o.getDerivedStateFromError(e)), (s = n.__d)),
                            null != n.componentDidCatch && (n.componentDidCatch(e, r || {}), (s = n.__d)),
                            s)
                        )
                            return (n.__E = n);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
    }),
    (f = 0),
    (m = function (e) {
        return null != e && null == e.constructor;
    }),
    (R.prototype.setState = function (e, t) {
        var i = null != this.__s && this.__s != this.state ? this.__s : (this.__s = x({}, this.state));
        "function" == typeof e && (e = e(x({}, i), this.props)),
            e && x(i, e),
            null != e && this.__v && (t && this._sb.push(t), F(this));
    }),
    (R.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), F(this));
    }),
    (R.prototype.render = A),
    (g = []),
    (v = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (y = function (e, t) {
        return e.__v.__b - t.__v.__b;
    }),
    (U.__r = 0),
    (w = /(PointerCapture)$|Capture$/i),
    (_ = 0),
    (b = z(!1)),
    (L = z(!0)),
    (E = 0);
var Y = 0;
function Q(e, t, i, r, n, o) {
    var s,
        a,
        l = (t ||= {});
    if ("ref" in l) for (a in ((l = {}), t)) "ref" == a ? (s = t[a]) : (l[a] = t[a]);
    var c = {
        type: e,
        props: l,
        key: i,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --Y,
        __i: -1,
        __u: 0,
        __source: n,
        __self: o,
    };
    if ("function" == typeof e && (s = e.defaultProps)) for (a in s) void 0 === l[a] && (l[a] = s[a]);
    return p.vnode && p.vnode(c), c;
}
var X,
    J,
    ee,
    et,
    ei = 0,
    er = [],
    en = p,
    eo = en.__b,
    es = en.__r,
    ea = en.diffed,
    el = en.__c,
    ec = en.unmount,
    ed = en.__;
function eu(e, t) {
    en.__h && en.__h(J, e, ei || t), (ei = 0);
    var i = (J.__H ||= { __: [], __h: [] });
    return e >= i.__.length && i.__.push({}), i.__[e];
}
function eh(e) {
    return (
        (ei = 1),
        (function (e, t) {
            var i = eu(X++, 2);
            if (
                ((i.t = e),
                !i.__c &&
                    ((i.__ = [
                        eL(void 0, t),
                        function (e) {
                            var t = i.__N ? i.__N[0] : i.__[0],
                                r = i.t(t, e);
                            t !== r && ((i.__N = [r, i.__[1]]), i.__c.setState({}));
                        },
                    ]),
                    (i.__c = J),
                    !J.__f))
            ) {
                var r = function (e, t, r) {
                    if (!i.__c.__H) return !0;
                    var o = i.__c.__H.__.filter(function (e) {
                        return !!e.__c;
                    });
                    if (
                        o.every(function (e) {
                            return !e.__N;
                        })
                    )
                        return !n || n.call(this, e, t, r);
                    var s = i.__c.props !== e;
                    return (
                        o.forEach(function (e) {
                            if (e.__N) {
                                var t = e.__[0];
                                (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
                            }
                        }),
                        (n && n.call(this, e, t, r)) || s
                    );
                };
                J.__f = !0;
                var n = J.shouldComponentUpdate,
                    o = J.componentWillUpdate;
                (J.componentWillUpdate = function (e, t, i) {
                    if (this.__e) {
                        var s = n;
                        (n = void 0), r(e, t, i), (n = s);
                    }
                    o && o.call(this, e, t, i);
                }),
                    (J.shouldComponentUpdate = r);
            }
            return i.__N || i.__;
        })(eL, e)
    );
}
function ep(e, t) {
    var i = eu(X++, 3);
    !en.__s && eb(i.__H, t) && ((i.__ = e), (i.u = t), J.__H.__h.push(i));
}
function ef(e, t) {
    var i = eu(X++, 4);
    !en.__s && eb(i.__H, t) && ((i.__ = e), (i.u = t), J.__h.push(i));
}
function em(e) {
    return (
        (ei = 5),
        eg(function () {
            return { current: e };
        }, [])
    );
}
function eg(e, t) {
    var i = eu(X++, 7);
    return eb(i.__H, t) && ((i.__ = e()), (i.__H = t), (i.__h = e)), i.__;
}
function eC(e, t) {
    return (
        (ei = 8),
        eg(function () {
            return e;
        }, t)
    );
}
function ev() {
    for (var e; (e = er.shift()); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(ew), e.__H.__h.forEach(e_), (e.__H.__h = []);
            } catch (t) {
                (e.__H.__h = []), en.__e(t, e.__v);
            }
}
(en.__b = function (e) {
    (J = null), eo && eo(e);
}),
    (en.__ = function (e, t) {
        e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ed && ed(e, t);
    }),
    (en.__r = function (e) {
        es && es(e), (X = 0);
        var t = (J = e.__c).__H;
        t &&
            (ee === J
                ? ((t.__h = []),
                  (J.__h = []),
                  t.__.forEach(function (e) {
                      e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                  }))
                : (t.__h.forEach(ew), t.__h.forEach(e_), (t.__h = []), (X = 0))),
            (ee = J);
    }),
    (en.diffed = function (e) {
        ea && ea(e);
        var t = e.__c;
        t &&
            t.__H &&
            (t.__H.__h.length &&
                ((1 !== er.push(t) && et === en.requestAnimationFrame) ||
                    (
                        (et = en.requestAnimationFrame) ||
                        function (e) {
                            var t,
                                i = function () {
                                    clearTimeout(r), ey && cancelAnimationFrame(t), setTimeout(e);
                                },
                                r = setTimeout(i, 35);
                            ey && (t = requestAnimationFrame(i));
                        }
                    )(ev)),
            t.__H.__.forEach(function (e) {
                e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (ee = J = null);
    }),
    (en.__c = function (e, t) {
        t.some(function (e) {
            try {
                e.__h.forEach(ew),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || e_(e);
                    }));
            } catch (i) {
                t.some(function (e) {
                    e.__h &&= [];
                }),
                    (t = []),
                    en.__e(i, e.__v);
            }
        }),
            el && el(e, t);
    }),
    (en.unmount = function (e) {
        ec && ec(e);
        var t,
            i = e.__c;
        i &&
            i.__H &&
            (i.__H.__.forEach(function (e) {
                try {
                    ew(e);
                } catch (e) {
                    t = e;
                }
            }),
            (i.__H = void 0),
            t && en.__e(t, i.__v));
    });
var ey = "function" == typeof requestAnimationFrame;
function ew(e) {
    var t = J,
        i = e.__c;
    "function" == typeof i && ((e.__c = void 0), i()), (J = t);
}
function e_(e) {
    var t = J;
    (e.__c = e.__()), (J = t);
}
function eb(e, t) {
    return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, i) {
            return t !== e[i];
        })
    );
}
function eL(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function eE(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
}
function eS(e, t) {
    for (var i in e) if ("__source" !== i && !(i in t)) return !0;
    for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1;
}
function eI(e) {
    var t = e.u,
        i = e.__;
    try {
        var r = t();
        return (i !== r || (0 === i && 1 / i != 1 / r)) && (i == i || r == r);
    } catch {
        return !0;
    }
}
function eT(e, t) {
    (this.props = e), (this.context = t);
}
((eT.prototype = new R()).isPureReactComponent = !0),
    (eT.prototype.shouldComponentUpdate = function (e, t) {
        return eS(this.props, e) || eS(this.state, t);
    });
var ek = p.__b;
p.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), ek && ek(e);
};
var ex = ("u" > typeof Symbol && Symbol.for && Symbol.for("react.forward_ref")) || 3911;
function eP(e) {
    function t(t) {
        var i = eE({}, t);
        return delete i.ref, e(i, t.ref || null);
    }
    return (
        (t.$$typeof = ex),
        (t.render = e),
        (t.prototype.isReactComponent = t.__f = !0),
        (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
        t
    );
}
var eM = p.__e;
p.__e = function (e, t, i, r) {
    if (e.then) {
        for (var n, o = t; (o = o.__); )
            if ((n = o.__c) && n.__c) return t.__e ?? ((t.__e = i.__e), (t.__k = i.__k)), n.__c(e, t);
    }
    eM(e, t, i, r);
};
var eO = p.unmount;
function eA() {
    (this.__u = 0), (this.o = null), (this.__b = null);
}
function eR(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
}
function eD() {
    (this.i = null), (this.l = null);
}
(p.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), eO && eO(e);
}),
    ((eA.prototype = new R()).__c = function (e, t) {
        var i = t.__c,
            r = this;
        (r.o ??= []), r.o.push(i);
        var n = eR(r.__v),
            o = !1,
            s = function () {
                o || ((o = !0), (i.__R = null), n ? n(a) : a());
            };
        i.__R = s;
        var a = function () {
            if (!--r.__u) {
                if (r.state.__a) {
                    var e,
                        t = r.state.__a;
                    r.__v.__k[0] = (function e(t, i, r) {
                        return (
                            t &&
                                r &&
                                ((t.__v = null),
                                (t.__k =
                                    t.__k &&
                                    t.__k.map(function (t) {
                                        return e(t, i, r);
                                    })),
                                t.__c &&
                                    t.__c.__P === i &&
                                    (t.__e && r.appendChild(t.__e), (t.__c.__e = !0), (t.__c.__P = r))),
                            t
                        );
                    })(t, t.__c.__P, t.__c.__O);
                }
                for (r.setState({ __a: (r.__b = null) }); (e = r.o.pop()); ) e.forceUpdate();
            }
        };
        r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(s, s);
    }),
    (eA.prototype.componentWillUnmount = function () {
        this.o = [];
    }),
    (eA.prototype.render = function (e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var i = document.createElement("div"),
                    r = this.__v.__k[0].__c;
                this.__v.__k[0] = (function e(t, i, r) {
                    return (
                        t &&
                            (t.__c &&
                                t.__c.__H &&
                                (t.__c.__H.__.forEach(function (e) {
                                    "function" == typeof e.__c && e.__c();
                                }),
                                (t.__c.__H = null)),
                            null != (t = eE({}, t)).__c &&
                                (t.__c.__P === r && (t.__c.__P = i), (t.__c.__e = !0), (t.__c = null)),
                            (t.__k =
                                t.__k &&
                                t.__k.map(function (t) {
                                    return e(t, i, r);
                                }))),
                        t
                    );
                })(this.__b, i, (r.__O = r.__P));
            }
            this.__b = null;
        }
        var n = t.__a && M(A, null, e.fallback);
        return n && (n.__u &= -33), [M(A, null, t.__a ? null : e.children), n];
    });
var eF = function (e, t, i) {
    if ((++i[1] === i[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size)))
        for (i = e.i; i; ) {
            for (; i.length > 3; ) i.pop()();
            if (i[1] < i[0]) break;
            e.i = i = i[2];
        }
};
function eU(e) {
    return (
        (this.getChildContext = function () {
            return e.context;
        }),
        e.children
    );
}
function eH(e) {
    var t = this,
        i = e.h;
    if (
        ((t.componentWillUnmount = function () {
            G(null, t.v), (t.v = null), (t.h = null);
        }),
        t.h && t.h !== i && t.componentWillUnmount(),
        !t.v)
    ) {
        for (var r = t.__v; null !== r && !r.__m && null !== r.__; ) r = r.__;
        (t.h = i),
            (t.v = {
                nodeType: 1,
                parentNode: i,
                childNodes: [],
                __k: { __m: r.__m },
                contains: function () {
                    return !0;
                },
                insertBefore: function (e, i) {
                    this.childNodes.push(e), t.h.insertBefore(e, i);
                },
                removeChild: function (e) {
                    this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.h.removeChild(e);
                },
            });
    }
    G(M(eU, { context: t.context }, e.__v), t.v);
}
function eN(e, t) {
    var i = M(eH, { __v: e, h: t });
    return (i.containerInfo = t), i;
}
((eD.prototype = new R()).__a = function (e) {
    var t = this,
        i = eR(t.__v),
        r = t.l.get(e);
    return (
        r[0]++,
        function (n) {
            var o = function () {
                t.props.revealOrder ? (r.push(n), eF(t, e, r)) : n();
            };
            i ? i(o) : o();
        }
    );
}),
    (eD.prototype.render = function (e) {
        (this.i = null), (this.l = new Map());
        var t = N(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var i = t.length; i--; ) this.l.set(t[i], (this.i = [1, 0, this.i]));
        return e.children;
    }),
    (eD.prototype.componentDidUpdate = eD.prototype.componentDidMount =
        function () {
            var e = this;
            this.l.forEach(function (t, i) {
                eF(e, i, t);
            });
        });
var eV = ("u" > typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
    eB =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    ez = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    e$ = /[A-Z0-9]/g,
    eZ = "u" > typeof document;
(R.prototype.isReactComponent = {}),
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
        Object.defineProperty(R.prototype, e, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + e];
            },
            set: function (t) {
                Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
            },
        });
    });
var eW = p.event;
function ej() {}
function eK() {
    return this.cancelBubble;
}
function eG() {
    return this.defaultPrevented;
}
p.event = function (e) {
    return (
        eW && (e = eW(e)),
        (e.persist = ej),
        (e.isPropagationStopped = eK),
        (e.isDefaultPrevented = eG),
        (e.nativeEvent = e)
    );
};
var eq = {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this.class;
        },
    },
    eY = p.vnode;
p.vnode = function (e) {
    "string" == typeof e.type &&
        (function (e) {
            var t = e.props,
                i = e.type,
                r = {},
                n = -1 === i.indexOf("-");
            for (var o in t) {
                var s = t[o];
                if (
                    !(
                        ("value" === o && "defaultValue" in t && null == s) ||
                        (eZ && "children" === o && "noscript" === i) ||
                        "class" === o ||
                        "className" === o
                    )
                ) {
                    var a,
                        l = o.toLowerCase();
                    "defaultValue" === o && "value" in t && null == t.value
                        ? (o = "value")
                        : "download" === o && !0 === s
                          ? (s = "")
                          : "translate" === l && "no" === s
                            ? (s = !1)
                            : "o" === l[0] && "n" === l[1]
                              ? "ondoubleclick" === l
                                  ? (o = "ondblclick")
                                  : "onchange" !== l ||
                                      ("input" !== i && "textarea" !== i) ||
                                      ((a = t.type),
                                      ("u" > typeof Symbol && "symbol" == typeof Symbol()
                                          ? /fil|che|rad/
                                          : /fil|che|ra/
                                      ).test(a))
                                    ? "onfocus" === l
                                        ? (o = "onfocusin")
                                        : "onblur" === l
                                          ? (o = "onfocusout")
                                          : ez.test(o) && (o = l)
                                    : (l = o = "oninput")
                              : n && eB.test(o)
                                ? (o = o.replace(e$, "-$&").toLowerCase())
                                : null === s && (s = void 0),
                        "oninput" === l && r[(o = l)] && (o = "oninputCapture"),
                        (r[o] = s);
                }
            }
            "select" == i &&
                r.multiple &&
                Array.isArray(r.value) &&
                (r.value = N(t.children).forEach(function (e) {
                    e.props.selected = -1 != r.value.indexOf(e.props.value);
                })),
                "select" == i &&
                    null != r.defaultValue &&
                    (r.value = N(t.children).forEach(function (e) {
                        e.props.selected = r.multiple
                            ? -1 != r.defaultValue.indexOf(e.props.value)
                            : r.defaultValue == e.props.value;
                    })),
                t.class && !t.className
                    ? ((r.class = t.class), Object.defineProperty(r, "className", eq))
                    : ((t.className && !t.class) || (t.class && t.className)) && (r.class = r.className = t.className),
                (e.props = r);
        })(e),
        (e.$$typeof = eV),
        eY && eY(e);
};
var eQ = p.__r;
p.__r = function (e) {
    eQ && eQ(e), e.__c;
};
var eX = p.diffed;
function eJ() {
    return (eJ = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var i = arguments[t];
                  for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
          }).apply(this, arguments);
}
function e1(e, t) {
    if (null == e) return {};
    var i,
        r,
        n = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) t.indexOf((i = o[r])) >= 0 || (n[i] = e[i]);
    return n;
}
p.diffed = function (e) {
    eX && eX(e);
    var t = e.props,
        i = e.__e;
    null != i &&
        "textarea" === e.type &&
        "value" in t &&
        t.value !== i.value &&
        (i.value = null == t.value ? "" : t.value);
};
var e2 = ["context", "children"],
    e3 = ["useFragment"];
function e0(e) {
    return (
        (this.getChildContext = function () {
            return e.context;
        }),
        q(e.children, e1(e, e2))
    );
}
function e6(e) {
    var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
    this.dispatchEvent(t),
        (this._vdom = M(
            e0,
            eJ({}, this._props, { context: t.detail.context }),
            (function e(t, i, r) {
                if (3 === t.nodeType) return t.data;
                if (1 !== t.nodeType) return null;
                var n = [],
                    o = {},
                    s = 0,
                    a = t.attributes,
                    l = t.childNodes;
                for (s = a.length; s--; )
                    "slot" !== a[s].name && ((o[a[s].name] = a[s].value), (o[e5(a[s].name)] = a[s].value));
                for (s = l.length; s--; ) {
                    var c = e(l[s], null, r),
                        d = l[s].slot;
                    d ? (o[d] = M(e8, { name: d }, c)) : (n[s] = c);
                }
                var u = !(!r || !r.shadow),
                    h = i ? M(e8, { useFragment: !u }, n) : n;
                return !u && i && (t.innerHTML = ""), M(i || t.nodeName.toLowerCase(), o, h);
            })(this, this._vdomComponent, e),
        )),
        (this.hasAttribute("hydrate")
            ? function e(t, i) {
                  G(t, i, e);
              }
            : G)(this._vdom, this._root);
}
function e5(e) {
    return e.replace(/-(\w)/g, function (e, t) {
        return t ? t.toUpperCase() : "";
    });
}
function e4(e, t, i) {
    if (this._vdom) {
        var r = {};
        (r[e] = i ??= void 0), (r[e5(e)] = i), (this._vdom = q(this._vdom, r)), G(this._vdom, this._root);
    }
}
function e9() {
    G((this._vdom = null), this._root);
}
function e8(e, t) {
    var i = this,
        r = e.useFragment,
        n = e1(e, e3);
    return M(
        r ? A : "slot",
        eJ({}, n, {
            ref: function (e) {
                e
                    ? ((i.ref = e),
                      i._listener ||
                          ((i._listener = function (e) {
                              e.stopPropagation(), (e.detail.context = t);
                          }),
                          e.addEventListener("_preact", i._listener)))
                    : i.ref.removeEventListener("_preact", i._listener);
            },
        }),
    );
}
var e7,
    te = {};
function tt(e, t, i) {
    if (3 === e.nodeType) {
        var r = "textContent" in e ? e.textContent : e.nodeValue || "";
        if (!1 !== tt.options.trim) {
            var n = 0 === t || t === i.length - 1;
            if (
                (!(r =
                    r.match(/^[\s\n]+$/g) && "all" !== tt.options.trim
                        ? " "
                        : r.replace(/(^[\s\n]+|[\s\n]+$)/g, "all" === tt.options.trim || n ? "" : " ")) ||
                    " " === r) &&
                i.length > 1 &&
                n
            )
                return null;
        }
        return r;
    }
    if (1 !== e.nodeType) return null;
    var o = String(e.nodeName).toLowerCase();
    if ("script" === o && !tt.options.allowScripts) return null;
    var s,
        a,
        l = tt.h(
            o,
            (function (e) {
                var t = e && e.length;
                if (!t) return null;
                for (var i = {}, r = 0; r < t; r++) {
                    var n = e[r],
                        o = n.name,
                        s = n.value;
                    "on" === o.substring(0, 2) && tt.options.allowEvents && (s = Function(s)), (i[o] = s);
                }
                return i;
            })(e.attributes),
            (a = (s = e.childNodes) && Array.prototype.map.call(s, tt).filter(tr)) && a.length ? a : null,
        );
    return tt.visitor && tt.visitor(l), l;
}
var ti,
    tr = function (e) {
        return e;
    },
    tn = {};
function to(e) {
    var t = (e.type || "").toLowerCase(),
        i = to.map;
    i && i.hasOwnProperty(t)
        ? ((e.type = i[t]),
          (e.props = Object.keys(e.props || {}).reduce(function (t, i) {
              return (
                  (t[
                      i.replace(/-(.)/g, function (e, t) {
                          return t.toUpperCase();
                      })
                  ] = e.props[i]),
                  t
              );
          }, {})))
        : (e.type = t.replace(/[^a-z0-9-]/i, ""));
}
function ts() {
    R.apply(this, arguments);
}
function ta(e) {
    let t = e || ("u" > typeof navigator ? navigator.userAgent : ""),
        i = "u" > typeof navigator && navigator.maxTouchPoints > 0;
    return /iPad|iPhone|iPod/.test(t) || (/Mac OS/.test(t) && i) || /iPadOS/.test(t);
}
function tl(e) {
    let t = e || ("u" > typeof navigator ? navigator.userAgent : "");
    return /Android/i.test(t);
}
function tc(e) {
    let t = e || ("u" > typeof navigator ? navigator.userAgent : ""),
        i = "u" > typeof navigator && navigator.maxTouchPoints > 0;
    return /iPad/.test(t) || (/Mac OS/.test(t) && i && !/iPhone|iPod/.test(t));
}
R && (ts.__proto__ = R),
    ((ts.prototype = Object.create(R && R.prototype)).constructor = ts),
    (ts.setReviver = function (e) {
        ti = e;
    }),
    (ts.prototype.shouldComponentUpdate = function (e) {
        var t = this.props;
        return e.wrap !== t.wrap || e.type !== t.type || e.markup !== t.markup;
    }),
    (ts.prototype.setComponents = function (e) {
        if (((this.map = {}), e)) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var i = t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g, "$1$3-$2$4").toLowerCase();
                    this.map[i] = e[t];
                }
        }
    }),
    (ts.prototype.render = function (e) {
        var t = e.wrap;
        void 0 === t && (t = !0);
        var i,
            r = e.type,
            n = e.markup,
            o = e.components,
            s = e.reviver,
            a = e.onError,
            l = e["allow-scripts"],
            c = e["allow-events"],
            d = e.trim,
            u = (function (e, t) {
                var i = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && -1 === t.indexOf(r) && (i[r] = e[r]);
                return i;
            })(e, [
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
            h = s || this.reviver || this.constructor.prototype.reviver || ti || M;
        this.setComponents(o);
        try {
            i = (function (e, t, i, r, n) {
                var o = (function (e, t) {
                    var i, r, n, o;
                    "html" === t
                        ? ((o = "body"), (n = "<!DOCTYPE html>\n<html><body>" + e + "</body></html>"))
                        : ((o = "xml"), (n = '<?xml version="1.0" encoding="UTF-8"?>\n<xml>' + e + "</xml>"));
                    try {
                        i = new DOMParser().parseFromString(n, "html" === t ? "text/html" : "application/xml");
                    } catch (e) {
                        r = e;
                    }
                    if (
                        (i ||
                            "html" !== t ||
                            ((i = e7 ||=
                                (function () {
                                    if (document.implementation && document.implementation.createHTMLDocument)
                                        return document.implementation.createHTMLDocument("");
                                    var e = document.createElement("iframe");
                                    return (
                                        (e.style.cssText =
                                            "position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;"),
                                        e.setAttribute("sandbox", "allow-forms"),
                                        document.body.appendChild(e),
                                        e.contentWindow.document
                                    );
                                })()).open(),
                            i.write(n),
                            i.close()),
                        i)
                    ) {
                        var s = i.getElementsByTagName(o)[0],
                            a = s.firstChild;
                        return (
                            e && !a && (s.error = "Document parse failed."),
                            a &&
                                "parsererror" === String(a.nodeName).toLowerCase() &&
                                (a.removeChild(a.firstChild),
                                a.removeChild(a.lastChild),
                                (s.error = a.textContent || a.nodeValue || r || "Unknown error"),
                                s.removeChild(a)),
                            s
                        );
                    }
                })(e, t);
                if (o && o.error) throw Error(o.error);
                var s = (o && o.body) || o;
                to.map = r || tn;
                var a = s && ((tt.visitor = to), (tt.h = i), (tt.options = n || te), tt(s));
                return (to.map = null), (a && a.props && a.props.children) || null;
            })(n, r, h, this.map, { allowScripts: l, allowEvents: c, trim: d });
        } catch (e) {
            a ? a({ error: e }) : "u" > typeof console && console.error && console.error("preact-markup: " + e);
        }
        if (!1 === t) return i || null;
        var p = u.hasOwnProperty("className") ? "className" : "class",
            f = u[p];
        return (
            f
                ? f.splice
                    ? f.splice(0, 0, "markup")
                    : "string" == typeof f
                      ? (u[p] += " markup")
                      : "object" == typeof f && (f.markup = !0)
                : (u[p] = "markup"),
            h("div", u, i || null)
        );
    });
let td = [
    { outerHeight: 852, outerWidth: 393 },
    { outerHeight: 932, outerWidth: 430 },
    { innerHeight: 631, innerWidth: 375 },
    { innerHeight: 920, innerWidth: 402 },
    { outerHeight: 874, outerWidth: 402 },
    { innerHeight: 874, innerWidth: 402 },
    { outerHeight: 912, outerWidth: 420 },
    { outerHeight: 873, outerWidth: 402 },
    { outerHeight: 956, outerWidth: 440 },
];
function tu() {
    if ("u" < typeof window) return !1;
    let { outerHeight: e, outerWidth: t, innerHeight: i, innerWidth: r } = window;
    return td.some((n) => (n.outerHeight === e && n.outerWidth === t) || (n.innerHeight === i && n.innerWidth === r));
}
var th = i(781322);
function tp() {
    let { userAgent: e, platform: t, maxTouchPoints: i } = (0, th.n)();
    if (!e) return "desktop";
    let r = e.toLowerCase();
    return /iphone|ipad|ipod/.test(r) || ("MacIntel" === t && i > 1)
        ? "ios"
        : /android/.test(r)
          ? "android"
          : "desktop";
}
function tf() {
    let e = (0, th.t)();
    if (!e) return "other";
    let t = e.toLowerCase();
    return t.includes("edg/") || t.includes("edgios/")
        ? "edge"
        : t.includes("samsungbrowser/")
          ? "samsung_browser"
          : t.includes("opr/") || t.includes("opera") || t.includes("opios/") || t.includes("opt/")
            ? "opera"
            : t.includes("chrome") || t.includes("crios")
              ? "chrome"
              : t.includes("firefox") || t.includes("fxios")
                ? "firefox"
                : t.includes("safari")
                  ? "safari"
                  : "other";
}
function tm() {
    if ("u" < typeof window || "u" < typeof screen) return !0;
    if ("function" == typeof window.matchMedia) return !window.matchMedia("(orientation: landscape)").matches;
    if (screen.orientation?.type?.includes("portrait")) return !0;
    if (screen.orientation?.type?.includes("landscape")) return !1;
    let e = window.orientation;
    return "number" == typeof e ? 0 === Math.abs(e) : window.innerHeight >= window.innerWidth;
}
function tg(e) {
    return e ? "portrait" : "landscape";
}
var tC = class {
        constructor() {
            if (
                ((this._current = tg(tm())),
                (this.subscribers = new Set()),
                (this.orientationChangeHandler = this.handleOrientationChange.bind(this)),
                (this.resizeHandler = this.handleResize.bind(this)),
                (this.mediaQueryList = null),
                (this.mediaQueryHandler = this.handleResize.bind(this)),
                "u" < typeof window)
            )
                return;
            screen.orientation
                ? screen.orientation.addEventListener("change", this.orientationChangeHandler)
                : window.addEventListener("orientationchange", this.orientationChangeHandler),
                window.addEventListener("resize", this.resizeHandler),
                "function" == typeof window.matchMedia &&
                    ((this.mediaQueryList = window.matchMedia("(orientation: landscape)")),
                    this.mediaQueryList.addEventListener("change", this.mediaQueryHandler));
        }
        get current() {
            return this._current;
        }
        subscribe(e) {
            return (
                this.subscribers.add(e),
                e(this._current),
                () => {
                    this.subscribers.delete(e);
                }
            );
        }
        cleanup() {
            "u" > typeof window &&
                (screen.orientation
                    ? screen.orientation.removeEventListener("change", this.orientationChangeHandler)
                    : window.removeEventListener("orientationchange", this.orientationChangeHandler),
                window.removeEventListener("resize", this.resizeHandler),
                this.mediaQueryList?.removeEventListener("change", this.mediaQueryHandler),
                (this.mediaQueryList = null),
                this.subscribers.clear());
        }
        handleOrientationChange() {
            setTimeout(() => {
                this.updateState(),
                    document.activeElement instanceof HTMLElement && document.activeElement.blur(),
                    window.focus();
            }, 0);
        }
        handleResize() {
            this.updateState();
        }
        updateState() {
            let e = tg(tm());
            if (e !== this._current) for (let t of ((this._current = e), this.subscribers)) t(this._current);
        }
    },
    tv = i(209688),
    ty = i(588233),
    tw = null,
    t_ = i(129050),
    tb = (e) => "string" == typeof e,
    tL = () => {
        let e,
            t,
            i = new Promise((i, r) => {
                (e = i), (t = r);
            });
        return (i.resolve = e), (i.reject = t), i;
    },
    tE = (e) => (null == e ? "" : "" + e),
    tS = /###/g,
    tI = (e) => (e && e.indexOf("###") > -1 ? e.replace(tS, ".") : e),
    tT = (e) => !e || tb(e),
    tk = (e, t, i) => {
        let r = tb(t) ? t.split(".") : t,
            n = 0;
        for (; n < r.length - 1; ) {
            if (tT(e)) return {};
            let t = tI(r[n]);
            !e[t] && i && (e[t] = new i()), (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}), ++n;
        }
        return tT(e) ? {} : { obj: e, k: tI(r[n]) };
    },
    tx = (e, t, i) => {
        let { obj: r, k: n } = tk(e, t, Object);
        if (void 0 !== r || 1 === t.length) {
            r[n] = i;
            return;
        }
        let o = t[t.length - 1],
            s = t.slice(0, t.length - 1),
            a = tk(e, s, Object);
        for (; void 0 === a.obj && s.length; )
            (o = `${s[s.length - 1]}.${o}`),
                (a = tk(e, (s = s.slice(0, s.length - 1)), Object)),
                a?.obj && void 0 !== a.obj[`${a.k}.${o}`] && (a.obj = void 0);
        a.obj[`${a.k}.${o}`] = i;
    },
    tP = (e, t) => {
        let { obj: i, k: r } = tk(e, t);
        if (i && Object.prototype.hasOwnProperty.call(i, r)) return i[r];
    },
    tM = (e, t, i) => {
        for (let r in t)
            "__proto__" !== r &&
                "constructor" !== r &&
                (r in e
                    ? tb(e[r]) || e[r] instanceof String || tb(t[r]) || t[r] instanceof String
                        ? i && (e[r] = t[r])
                        : tM(e[r], t[r], i)
                    : (e[r] = t[r]));
        return e;
    },
    tO = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" },
    tA = (e) => (tb(e) ? e.replace(/[&<>"'\/]/g, (e) => tO[e]) : e),
    tR = class {
        constructor(e) {
            (this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = []);
        }
        getRegExp(e) {
            let t = this.regExpMap.get(e);
            if (void 0 !== t) return t;
            let i = new RegExp(e);
            return (
                this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
                this.regExpMap.set(e, i),
                this.regExpQueue.push(e),
                i
            );
        }
    },
    tD = [" ", ",", "?", "!", ";"],
    tF = new tR(20),
    tU = (e, t, i = ".") => {
        if (!e) return;
        if (e[t]) return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
        let r = t.split(i),
            n = e;
        for (let e = 0; e < r.length; ) {
            if (!n || "object" != typeof n) return;
            let t,
                o = "";
            for (let s = e; s < r.length; ++s)
                if ((s !== e && (o += i), (o += r[s]), void 0 !== (t = n[o]))) {
                    if (["string", "number", "boolean"].indexOf(typeof t) > -1 && s < r.length - 1) continue;
                    e += s - e + 1;
                    break;
                }
            n = t;
        }
        return n;
    },
    tH = (e) => e?.replace("_", "-"),
    tN = {
        type: "logger",
        log(e) {
            this.output("log", e);
        },
        warn(e) {
            this.output("warn", e);
        },
        error(e) {
            this.output("error", e);
        },
        output(e, t) {
            console?.[e]?.apply?.(console, t);
        },
    },
    tV = new (class e {
        constructor(e, t = {}) {
            this.init(e, t);
        }
        init(e, t = {}) {
            (this.prefix = t.prefix || "i18next:"), (this.logger = e || tN), (this.options = t), (this.debug = t.debug);
        }
        log(...e) {
            return this.forward(e, "log", "", !0);
        }
        warn(...e) {
            return this.forward(e, "warn", "", !0);
        }
        error(...e) {
            return this.forward(e, "error", "");
        }
        deprecate(...e) {
            return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, i, r) {
            return r && !this.debug ? null : (tb(e[0]) && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e));
        }
        create(t) {
            return new e(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
        }
        clone(t) {
            return ((t ||= this.options).prefix = t.prefix || this.prefix), new e(this.logger, t);
        }
    })(),
    tB = class {
        constructor() {
            this.observers = {};
        }
        on(e, t) {
            return (
                e.split(" ").forEach((e) => {
                    this.observers[e] || (this.observers[e] = new Map());
                    let i = this.observers[e].get(t) || 0;
                    this.observers[e].set(t, i + 1);
                }),
                this
            );
        }
        off(e, t) {
            if (this.observers[e]) {
                if (!t) return void delete this.observers[e];
                this.observers[e].delete(t);
            }
        }
        emit(e, ...t) {
            this.observers[e] &&
                Array.from(this.observers[e].entries()).forEach(([e, i]) => {
                    for (let r = 0; r < i; r++) e(...t);
                }),
                this.observers["*"] &&
                    Array.from(this.observers["*"].entries()).forEach(([i, r]) => {
                        for (let n = 0; n < r; n++) i.apply(i, [e, ...t]);
                    });
        }
    },
    tz = class extends tB {
        constructor(e, t = { ns: ["translation"], defaultNS: "translation" }) {
            super(),
                (this.data = e || {}),
                (this.options = t),
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
            0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
        }
        removeNamespaces(e) {
            let t = this.options.ns.indexOf(e);
            t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, i, r = {}) {
            let n = void 0 === r.keySeparator ? this.options.keySeparator : r.keySeparator,
                o = void 0 === r.ignoreJSONStructure ? this.options.ignoreJSONStructure : r.ignoreJSONStructure,
                s;
            e.indexOf(".") > -1
                ? (s = e.split("."))
                : ((s = [e, t]),
                  i && (Array.isArray(i) ? s.push(...i) : tb(i) && n ? s.push(...i.split(n)) : s.push(i)));
            let a = tP(this.data, s);
            return (
                !a && !t && !i && e.indexOf(".") > -1 && ((e = s[0]), (t = s[1]), (i = s.slice(2).join("."))),
                !a && o && tb(i) ? tU(this.data?.[e]?.[t], i, n) : a
            );
        }
        addResource(e, t, i, r, n = { silent: !1 }) {
            let o = void 0 === n.keySeparator ? this.options.keySeparator : n.keySeparator,
                s = [e, t];
            i && (s = s.concat(o ? i.split(o) : i)),
                e.indexOf(".") > -1 && ((s = e.split(".")), (r = t), (t = s[1])),
                this.addNamespaces(t),
                tx(this.data, s, r),
                n.silent || this.emit("added", e, t, i, r);
        }
        addResources(e, t, i, r = { silent: !1 }) {
            for (let r in i) (tb(i[r]) || Array.isArray(i[r])) && this.addResource(e, t, r, i[r], { silent: !0 });
            r.silent || this.emit("added", e, t, i);
        }
        addResourceBundle(e, t, i, r, n, o = { silent: !1, skipCopy: !1 }) {
            let s = [e, t];
            e.indexOf(".") > -1 && ((s = e.split(".")), (r = i), (i = t), (t = s[1])), this.addNamespaces(t);
            let a = tP(this.data, s) || {};
            o.skipCopy || (i = JSON.parse(JSON.stringify(i))),
                r ? tM(a, i, n) : (a = { ...a, ...i }),
                tx(this.data, s, a),
                o.silent || this.emit("added", e, t, i);
        }
        removeResourceBundle(e, t) {
            this.hasResourceBundle(e, t) && delete this.data[e][t],
                this.removeNamespaces(t),
                this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
            return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
            return (t ||= this.options.defaultNS), this.getResource(e, t);
        }
        getDataByLanguage(e) {
            return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
            let t = this.getDataByLanguage(e);
            return !!((t && Object.keys(t)) || []).find((e) => t[e] && Object.keys(t[e]).length > 0);
        }
        toJSON() {
            return this.data;
        }
    },
    t$ = {
        processors: {},
        addPostProcessor(e) {
            this.processors[e.name] = e;
        },
        handle(e, t, i, r, n) {
            return (
                e.forEach((e) => {
                    t = this.processors[e]?.process(t, i, r, n) ?? t;
                }),
                t
            );
        },
    },
    tZ = Symbol("i18next/PATH_KEY");
function tW(e, t) {
    let i,
        r,
        n,
        { [tZ]: o } = e(
            ((i = []),
            ((r = Object.create(null)).get = (e, t) => (
                n?.revoke?.(), t === tZ ? i : (i.push(t), (n = Proxy.revocable(e, r)).proxy)
            )),
            Proxy.revocable(Object.create(null), r).proxy),
        );
    return o.join(t?.keySeparator ?? ".");
}
var tj = {},
    tK = (e) => !tb(e) && "boolean" != typeof e && "number" != typeof e,
    tG = class e extends tB {
        constructor(e, t = {}) {
            super(),
                ((e, t, i) => {
                    e.forEach((e) => {
                        t[e] && (i[e] = t[e]);
                    });
                })(
                    [
                        "resourceStore",
                        "languageUtils",
                        "pluralResolver",
                        "interpolator",
                        "backendConnector",
                        "i18nFormat",
                        "utils",
                    ],
                    e,
                    this,
                ),
                (this.options = t),
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                (this.logger = tV.create("translator"));
        }
        changeLanguage(e) {
            e && (this.language = e);
        }
        exists(e, t = { interpolation: {} }) {
            let i = { ...t };
            if (null == e) return !1;
            let r = this.resolve(e, i);
            if (r?.res === void 0) return !1;
            let n = tK(r.res);
            return !(!1 === i.returnObjects && n);
        }
        extractFromKey(e, t) {
            let i = void 0 === t.nsSeparator ? this.options.nsSeparator : t.nsSeparator;
            void 0 === i && (i = ":");
            let r = void 0 === t.keySeparator ? this.options.keySeparator : t.keySeparator,
                n = t.ns || this.options.defaultNS || [],
                o = i && e.indexOf(i) > -1,
                s =
                    !this.options.userDefinedKeySeparator &&
                    !t.keySeparator &&
                    !this.options.userDefinedNsSeparator &&
                    !t.nsSeparator &&
                    !((e, t, i) => {
                        (t ||= ""), (i ||= "");
                        let r = tD.filter((e) => 0 > t.indexOf(e) && 0 > i.indexOf(e));
                        if (0 === r.length) return !0;
                        let n = tF.getRegExp(`(${r.map((e) => ("?" === e ? "\\?" : e)).join("|")})`),
                            o = !n.test(e);
                        if (!o) {
                            let t = e.indexOf(i);
                            t > 0 && !n.test(e.substring(0, t)) && (o = !0);
                        }
                        return o;
                    })(e, i, r);
            if (o && !s) {
                let t = e.match(this.interpolator.nestingRegexp);
                if (t && t.length > 0) return { key: e, namespaces: tb(n) ? [n] : n };
                let o = e.split(i);
                (i !== r || (i === r && this.options.ns.indexOf(o[0]) > -1)) && (n = o.shift()), (e = o.join(r));
            }
            return { key: e, namespaces: tb(n) ? [n] : n };
        }
        translate(t, i, r) {
            let n = "object" == typeof i ? { ...i } : i;
            if (
                ("object" != typeof n &&
                    this.options.overloadTranslationOptionHandler &&
                    (n = this.options.overloadTranslationOptionHandler(arguments)),
                "object" == typeof n && (n = { ...n }),
                (n ||= {}),
                null == t)
            )
                return "";
            "function" == typeof t && (t = tW(t, { ...this.options, ...n })), Array.isArray(t) || (t = [String(t)]);
            let o = void 0 === n.returnDetails ? this.options.returnDetails : n.returnDetails,
                s = void 0 === n.keySeparator ? this.options.keySeparator : n.keySeparator,
                { key: a, namespaces: l } = this.extractFromKey(t[t.length - 1], n),
                c = l[l.length - 1],
                d = void 0 === n.nsSeparator ? this.options.nsSeparator : n.nsSeparator;
            void 0 === d && (d = ":");
            let u = n.lng || this.language,
                h = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (u?.toLowerCase() === "cimode")
                return h
                    ? o
                        ? {
                              res: `${c}${d}${a}`,
                              usedKey: a,
                              exactUsedKey: a,
                              usedLng: u,
                              usedNS: c,
                              usedParams: this.getUsedParamsDetails(n),
                          }
                        : `${c}${d}${a}`
                    : o
                      ? {
                            res: a,
                            usedKey: a,
                            exactUsedKey: a,
                            usedLng: u,
                            usedNS: c,
                            usedParams: this.getUsedParamsDetails(n),
                        }
                      : a;
            let p = this.resolve(t, n),
                f = p?.res,
                m = p?.usedKey || a,
                g = p?.exactUsedKey || a,
                C = void 0 === n.joinArrays ? this.options.joinArrays : n.joinArrays,
                v = !this.i18nFormat || this.i18nFormat.handleAsObject,
                y = void 0 !== n.count && !tb(n.count),
                w = e.hasDefaultValue(n),
                _ = y ? this.pluralResolver.getSuffix(u, n.count, n) : "",
                b = n.ordinal && y ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 }) : "",
                L = y && !n.ordinal && 0 === n.count,
                E =
                    (L && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
                    n[`defaultValue${_}`] ||
                    n[`defaultValue${b}`] ||
                    n.defaultValue,
                S = f;
            v && !f && w && (S = E);
            let I = tK(S),
                T = Object.prototype.toString.apply(S);
            if (
                v &&
                S &&
                I &&
                0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(T) &&
                !(tb(C) && Array.isArray(S))
            ) {
                if (!n.returnObjects && !this.options.returnObjects) {
                    this.options.returnedObjectHandler ||
                        this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                    let e = this.options.returnedObjectHandler
                        ? this.options.returnedObjectHandler(m, S, { ...n, ns: l })
                        : `key '${a} (${this.language})' returned an object instead of string.`;
                    return o ? ((p.res = e), (p.usedParams = this.getUsedParamsDetails(n)), p) : e;
                }
                if (s) {
                    let e = Array.isArray(S),
                        t = e ? [] : {},
                        i = e ? g : m;
                    for (let e in S)
                        if (Object.prototype.hasOwnProperty.call(S, e)) {
                            let r = `${i}${s}${e}`;
                            w && !f
                                ? (t[e] = this.translate(r, {
                                      ...n,
                                      defaultValue: tK(E) ? E[e] : void 0,
                                      joinArrays: !1,
                                      ns: l,
                                  }))
                                : (t[e] = this.translate(r, { ...n, joinArrays: !1, ns: l })),
                                t[e] === r && (t[e] = S[e]);
                        }
                    f = t;
                }
            } else if (v && tb(C) && Array.isArray(f)) (f = f.join(C)), (f &&= this.extendTranslation(f, t, n, r));
            else {
                let e = !1,
                    i = !1;
                !this.isValidLookup(f) && w && ((e = !0), (f = E)), this.isValidLookup(f) || ((i = !0), (f = a));
                let o =
                        (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && i
                            ? void 0
                            : f,
                    l = w && E !== f && this.options.updateMissing;
                if (i || e || l) {
                    if ((this.logger.log(l ? "updateKey" : "missingKey", u, c, a, l ? E : f), s)) {
                        let e = this.resolve(a, { ...n, keySeparator: !1 });
                        e &&
                            e.res &&
                            this.logger.warn(
                                "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
                            );
                    }
                    let e = [],
                        t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                    if ("fallback" === this.options.saveMissingTo && t && t[0])
                        for (let i = 0; i < t.length; i++) e.push(t[i]);
                    else
                        "all" === this.options.saveMissingTo
                            ? (e = this.languageUtils.toResolveHierarchy(n.lng || this.language))
                            : e.push(n.lng || this.language);
                    let i = (e, t, i) => {
                        let r = w && i !== f ? i : o;
                        this.options.missingKeyHandler
                            ? this.options.missingKeyHandler(e, c, t, r, l, n)
                            : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(e, c, t, r, l, n),
                            this.emit("missingKey", e, c, t, f);
                    };
                    this.options.saveMissing &&
                        (this.options.saveMissingPlurals && y
                            ? e.forEach((e) => {
                                  let t = this.pluralResolver.getSuffixes(e, n);
                                  L &&
                                      n[`defaultValue${this.options.pluralSeparator}zero`] &&
                                      0 > t.indexOf(`${this.options.pluralSeparator}zero`) &&
                                      t.push(`${this.options.pluralSeparator}zero`),
                                      t.forEach((t) => {
                                          i([e], a + t, n[`defaultValue${t}`] || E);
                                      });
                              })
                            : i(e, a, E));
                }
                (f = this.extendTranslation(f, t, n, p, r)),
                    i && f === a && this.options.appendNamespaceToMissingKey && (f = `${c}${d}${a}`),
                    (i || e) &&
                        this.options.parseMissingKeyHandler &&
                        (f = this.options.parseMissingKeyHandler(
                            this.options.appendNamespaceToMissingKey ? `${c}${d}${a}` : a,
                            e ? f : void 0,
                            n,
                        ));
            }
            return o ? ((p.res = f), (p.usedParams = this.getUsedParamsDetails(n)), p) : f;
        }
        extendTranslation(e, t, i, r, n) {
            if (this.i18nFormat?.parse)
                e = this.i18nFormat.parse(
                    e,
                    { ...this.options.interpolation.defaultVariables, ...i },
                    i.lng || this.language || r.usedLng,
                    r.usedNS,
                    r.usedKey,
                    { resolved: r },
                );
            else if (!i.skipInterpolation) {
                i.interpolation &&
                    this.interpolator.init({
                        ...i,
                        interpolation: { ...this.options.interpolation, ...i.interpolation },
                    });
                let o =
                        tb(e) &&
                        (i?.interpolation?.skipOnVariables === void 0
                            ? this.options.interpolation.skipOnVariables
                            : i.interpolation.skipOnVariables),
                    s;
                if (o) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    s = t && t.length;
                }
                let a = i.replace && !tb(i.replace) ? i.replace : i;
                if (
                    (this.options.interpolation.defaultVariables &&
                        (a = { ...this.options.interpolation.defaultVariables, ...a }),
                    (e = this.interpolator.interpolate(e, a, i.lng || this.language || r.usedLng, i)),
                    o)
                ) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    s < (t && t.length) && (i.nest = !1);
                }
                !i.lng && r && r.res && (i.lng = this.language || r.usedLng),
                    !1 !== i.nest &&
                        (e = this.interpolator.nest(
                            e,
                            (...e) =>
                                n?.[0] !== e[0] || i.context
                                    ? this.translate(...e, t)
                                    : (this.logger.warn(
                                          `It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`,
                                      ),
                                      null),
                            i,
                        )),
                    i.interpolation && this.interpolator.reset();
            }
            let o = i.postProcess || this.options.postProcess,
                s = tb(o) ? [o] : o;
            return (
                null != e &&
                    s?.length &&
                    !1 !== i.applyPostProcessor &&
                    (e = t$.handle(
                        s,
                        e,
                        t,
                        this.options && this.options.postProcessPassResolved
                            ? { i18nResolved: { ...r, usedParams: this.getUsedParamsDetails(i) }, ...i }
                            : i,
                        this,
                    )),
                e
            );
        }
        resolve(e, t = {}) {
            let i, r, n, o, s;
            return (
                tb(e) && (e = [e]),
                e.forEach((e) => {
                    if (this.isValidLookup(i)) return;
                    let a = this.extractFromKey(e, t),
                        l = a.key;
                    r = l;
                    let c = a.namespaces;
                    this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
                    let d = void 0 !== t.count && !tb(t.count),
                        u = d && !t.ordinal && 0 === t.count,
                        h = void 0 !== t.context && (tb(t.context) || "number" == typeof t.context) && "" !== t.context,
                        p = t.lngs
                            ? t.lngs
                            : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
                    c.forEach((e) => {
                        this.isValidLookup(i) ||
                            ((s = e),
                            !tj[`${p[0]}-${e}`] &&
                                this.utils?.hasLoadedNamespace &&
                                !this.utils?.hasLoadedNamespace(s) &&
                                ((tj[`${p[0]}-${e}`] = !0),
                                this.logger.warn(
                                    `key "${r}" for languages "${p.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,
                                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                                )),
                            p.forEach((r) => {
                                let s;
                                if (this.isValidLookup(i)) return;
                                o = r;
                                let a = [l];
                                if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(a, l, r, e, t);
                                else {
                                    let e;
                                    d && (e = this.pluralResolver.getSuffix(r, t.count, t));
                                    let i = `${this.options.pluralSeparator}zero`,
                                        n = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                    if (
                                        (d &&
                                            (t.ordinal &&
                                                0 === e.indexOf(n) &&
                                                a.push(l + e.replace(n, this.options.pluralSeparator)),
                                            a.push(l + e),
                                            u && a.push(l + i)),
                                        h)
                                    ) {
                                        let r = `${l}${this.options.contextSeparator || "_"}${t.context}`;
                                        a.push(r),
                                            d &&
                                                (t.ordinal &&
                                                    0 === e.indexOf(n) &&
                                                    a.push(r + e.replace(n, this.options.pluralSeparator)),
                                                a.push(r + e),
                                                u && a.push(r + i));
                                    }
                                }
                                for (; (s = a.pop()); )
                                    this.isValidLookup(i) || ((n = s), (i = this.getResource(r, e, s, t)));
                            }));
                    });
                }),
                { res: i, usedKey: r, exactUsedKey: n, usedLng: o, usedNS: s }
            );
        }
        isValidLookup(e) {
            return (
                void 0 !== e &&
                !(!this.options.returnNull && null === e) &&
                !(!this.options.returnEmptyString && "" === e)
            );
        }
        getResource(e, t, i, r = {}) {
            return this.i18nFormat?.getResource
                ? this.i18nFormat.getResource(e, t, i, r)
                : this.resourceStore.getResource(e, t, i, r);
        }
        getUsedParamsDetails(e = {}) {
            let t = e.replace && !tb(e.replace),
                i = t ? e.replace : e;
            if (
                (t && void 0 !== e.count && (i.count = e.count),
                this.options.interpolation.defaultVariables &&
                    (i = { ...this.options.interpolation.defaultVariables, ...i }),
                !t)
            )
                for (let e of ((i = { ...i }),
                [
                    "defaultValue",
                    "ordinal",
                    "context",
                    "replace",
                    "lng",
                    "lngs",
                    "fallbackLng",
                    "ns",
                    "keySeparator",
                    "nsSeparator",
                    "returnObjects",
                    "returnDetails",
                    "joinArrays",
                    "postProcess",
                    "interpolation",
                ]))
                    delete i[e];
            return i;
        }
        static hasDefaultValue(e) {
            for (let t in e)
                if (
                    Object.prototype.hasOwnProperty.call(e, t) &&
                    "defaultValue" === t.substring(0, 12) &&
                    void 0 !== e[t]
                )
                    return !0;
            return !1;
        }
    },
    tq = class {
        constructor(e) {
            (this.options = e),
                (this.supportedLngs = this.options.supportedLngs || !1),
                (this.logger = tV.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
            if (!(e = tH(e)) || 0 > e.indexOf("-")) return null;
            let t = e.split("-");
            return 2 === t.length || (t.pop(), "x" === t[t.length - 1].toLowerCase())
                ? null
                : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(e) {
            if (!(e = tH(e)) || 0 > e.indexOf("-")) return e;
            let t = e.split("-");
            return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
            if (tb(e) && e.indexOf("-") > -1) {
                let t;
                try {
                    t = Intl.getCanonicalLocales(e)[0];
                } catch {}
                return (
                    t && this.options.lowerCaseLng && (t = t.toLowerCase()),
                    t || (this.options.lowerCaseLng ? e.toLowerCase() : e)
                );
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
        }
        isSupportedCode(e) {
            return (
                ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) &&
                    (e = this.getLanguagePartFromCode(e)),
                !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
            );
        }
        getBestMatchFromCodes(e) {
            let t;
            return e
                ? (e.forEach((e) => {
                      if (t) return;
                      let i = this.formatLanguageCode(e);
                      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
                  }),
                  !t &&
                      this.options.supportedLngs &&
                      e.forEach((e) => {
                          if (t) return;
                          let i = this.getScriptPartFromCode(e);
                          if (this.isSupportedCode(i)) return (t = i);
                          let r = this.getLanguagePartFromCode(e);
                          if (this.isSupportedCode(r)) return (t = r);
                          t = this.options.supportedLngs.find((e) => {
                              if (
                                  e === r ||
                                  (!(0 > e.indexOf("-") && 0 > r.indexOf("-")) &&
                                      ((e.indexOf("-") > 0 &&
                                          0 > r.indexOf("-") &&
                                          e.substring(0, e.indexOf("-")) === r) ||
                                          (0 === e.indexOf(r) && r.length > 1)))
                              )
                                  return e;
                          });
                      }),
                  (t ||= this.getFallbackCodes(this.options.fallbackLng)[0]))
                : null;
        }
        getFallbackCodes(e, t) {
            if (!e) return [];
            if (("function" == typeof e && (e = e(t)), tb(e) && (e = [e]), Array.isArray(e))) return e;
            if (!t) return e.default || [];
            let i = e[t];
            return (
                (i ||= e[this.getScriptPartFromCode(t)]),
                (i ||= e[this.formatLanguageCode(t)]),
                (i ||= e[this.getLanguagePartFromCode(t)]),
                (i ||= e.default) || []
            );
        }
        toResolveHierarchy(e, t) {
            let i = this.getFallbackCodes((!1 === t ? [] : t) || this.options.fallbackLng || [], e),
                r = [],
                n = (e) => {
                    e &&
                        (this.isSupportedCode(e)
                            ? r.push(e)
                            : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`));
                };
            return (
                tb(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
                    ? ("languageOnly" !== this.options.load && n(this.formatLanguageCode(e)),
                      "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          n(this.getScriptPartFromCode(e)),
                      "currentOnly" !== this.options.load && n(this.getLanguagePartFromCode(e)))
                    : tb(e) && n(this.formatLanguageCode(e)),
                i.forEach((e) => {
                    0 > r.indexOf(e) && n(this.formatLanguageCode(e));
                }),
                r
            );
        }
    },
    tY = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
    tQ = {
        select: (e) => (1 === e ? "one" : "other"),
        resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
    },
    tX = class {
        constructor(e, t = {}) {
            (this.languageUtils = e),
                (this.options = t),
                (this.logger = tV.create("pluralResolver")),
                (this.pluralRulesCache = {});
        }
        addRule(e, t) {
            this.rules[e] = t;
        }
        clearCache() {
            this.pluralRulesCache = {};
        }
        getRule(e, t = {}) {
            let i,
                r = tH("dev" === e ? "en" : e),
                n = t.ordinal ? "ordinal" : "cardinal",
                o = JSON.stringify({ cleanedCode: r, type: n });
            if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
            try {
                i = new Intl.PluralRules(r, { type: n });
            } catch {
                if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), tQ;
                if (!e.match(/-|_/)) return tQ;
                let r = this.languageUtils.getLanguagePartFromCode(e);
                i = this.getRule(r, t);
            }
            return (this.pluralRulesCache[o] = i), i;
        }
        needsPlural(e, t = {}) {
            let i = this.getRule(e, t);
            return (i ||= this.getRule("dev", t)), i?.resolvedOptions().pluralCategories.length > 1;
        }
        getPluralFormsOfKey(e, t, i = {}) {
            return this.getSuffixes(e, i).map((e) => `${t}${e}`);
        }
        getSuffixes(e, t = {}) {
            let i = this.getRule(e, t);
            return (i ||= this.getRule("dev", t))
                ? i
                      .resolvedOptions()
                      .pluralCategories.sort((e, t) => tY[e] - tY[t])
                      .map((e) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`)
                : [];
        }
        getSuffix(e, t, i = {}) {
            let r = this.getRule(e, i);
            return r
                ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}`
                : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, i));
        }
    },
    tJ = (e, t, i, r = ".", n = !0) => {
        let o,
            s = void 0 === (o = tP(e, i)) ? tP(t, i) : o;
        return !s && n && tb(i) && void 0 === (s = tU(e, i, r)) && (s = tU(t, i, r)), s;
    },
    t1 = class {
        constructor(e = {}) {
            (this.logger = tV.create("interpolator")),
                (this.options = e),
                (this.format = e?.interpolation?.format || ((e) => e)),
                this.init(e);
        }
        init(e = {}) {
            e.interpolation ||= { escapeValue: !0 };
            let {
                escape: t,
                escapeValue: i,
                useRawValueToEscape: r,
                prefix: n,
                prefixEscaped: o,
                suffix: s,
                suffixEscaped: a,
                formatSeparator: l,
                unescapeSuffix: c,
                unescapePrefix: d,
                nestingPrefix: u,
                nestingPrefixEscaped: h,
                nestingSuffix: p,
                nestingSuffixEscaped: f,
                nestingOptionsSeparator: m,
                maxReplaces: g,
                alwaysFormat: C,
            } = e.interpolation;
            (this.escape = void 0 === t ? tA : t),
                (this.escapeValue = void 0 === i || i),
                (this.useRawValueToEscape = void 0 !== r && r),
                (this.prefix = n ? n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : o || "{{"),
                (this.suffix = s ? s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : a || "}}"),
                (this.formatSeparator = l || ","),
                (this.unescapePrefix = c ? "" : d || "-"),
                (this.unescapeSuffix = this.unescapePrefix ? "" : c || ""),
                (this.nestingPrefix = u
                    ? u.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    : h || "$t(".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")),
                (this.nestingSuffix = p
                    ? p.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    : f || ")".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")),
                (this.nestingOptionsSeparator = m || ","),
                (this.maxReplaces = g || 1e3),
                (this.alwaysFormat = void 0 !== C && C),
                this.resetRegExp();
        }
        reset() {
            this.options && this.init(this.options);
        }
        resetRegExp() {
            let e = (e, t) => (e?.source === t ? ((e.lastIndex = 0), e) : RegExp(t, "g"));
            (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
                (this.regexpUnescape = e(
                    this.regexpUnescape,
                    `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
                )),
                (this.nestingRegexp = e(
                    this.nestingRegexp,
                    `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
                ));
        }
        interpolate(e, t, i, r) {
            let n,
                o,
                s,
                a = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {},
                l = (e) => {
                    if (0 > e.indexOf(this.formatSeparator)) {
                        let n = tJ(t, a, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                        return this.alwaysFormat ? this.format(n, void 0, i, { ...r, ...t, interpolationkey: e }) : n;
                    }
                    let n = e.split(this.formatSeparator),
                        o = n.shift().trim(),
                        s = n.join(this.formatSeparator).trim();
                    return this.format(tJ(t, a, o, this.options.keySeparator, this.options.ignoreJSONStructure), s, i, {
                        ...r,
                        ...t,
                        interpolationkey: o,
                    });
                };
            this.resetRegExp();
            let c = r?.missingInterpolationHandler || this.options.missingInterpolationHandler,
                d =
                    r?.interpolation?.skipOnVariables === void 0
                        ? this.options.interpolation.skipOnVariables
                        : r.interpolation.skipOnVariables;
            return (
                [
                    { regex: this.regexpUnescape, safeValue: (e) => e.replace(/\$/g, "$$$$") },
                    {
                        regex: this.regexp,
                        safeValue: (e) =>
                            this.escapeValue ? this.escape(e).replace(/\$/g, "$$$$") : e.replace(/\$/g, "$$$$"),
                    },
                ].forEach((t) => {
                    for (s = 0; (n = t.regex.exec(e)); ) {
                        let i = n[1].trim();
                        if (void 0 === (o = l(i)))
                            if ("function" == typeof c) {
                                let t = c(e, n, r);
                                o = tb(t) ? t : "";
                            } else if (r && Object.prototype.hasOwnProperty.call(r, i)) o = "";
                            else if (d) {
                                o = n[0];
                                continue;
                            } else this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`), (o = "");
                        else tb(o) || this.useRawValueToEscape || (o = tE(o));
                        let a = t.safeValue(o);
                        if (
                            ((e = e.replace(n[0], a)),
                            d
                                ? ((t.regex.lastIndex += o.length), (t.regex.lastIndex -= n[0].length))
                                : (t.regex.lastIndex = 0),
                            ++s >= this.maxReplaces)
                        )
                            break;
                    }
                }),
                e
            );
        }
        nest(e, t, i = {}) {
            let r,
                n,
                o,
                s = (e, t) => {
                    let i = this.nestingOptionsSeparator;
                    if (0 > e.indexOf(i)) return e;
                    let r = e.split(RegExp(`${i}[ ]*{`)),
                        n = `{${r[1]}`;
                    e = r[0];
                    let s = (n = this.interpolate(n, o)).match(/'/g),
                        a = n.match(/"/g);
                    (((s?.length ?? 0) % 2 != 0 || a) && a.length % 2 == 0) || (n = n.replace(/'/g, '"'));
                    try {
                        (o = JSON.parse(n)), t && (o = { ...t, ...o });
                    } catch (t) {
                        return (
                            this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${i}${n}`
                        );
                    }
                    return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, e;
                };
            for (; (r = this.nestingRegexp.exec(e)); ) {
                let a = [];
                ((o = (o = { ...i }).replace && !tb(o.replace) ? o.replace : o).applyPostProcessor = !1),
                    delete o.defaultValue;
                let l = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
                if (
                    (-1 !== l &&
                        ((a = r[1]
                            .slice(l)
                            .split(this.formatSeparator)
                            .map((e) => e.trim())
                            .filter(Boolean)),
                        (r[1] = r[1].slice(0, l))),
                    (n = t(s.call(this, r[1].trim(), o), o)) && r[0] === e && !tb(n))
                )
                    return n;
                tb(n) || (n = tE(n)),
                    (n ||= (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), "")),
                    a.length &&
                        (n = a.reduce(
                            (e, t) => this.format(e, t, i.lng, { ...i, interpolationkey: r[1].trim() }),
                            n.trim(),
                        )),
                    (e = e.replace(r[0], n)),
                    (this.regexp.lastIndex = 0);
            }
            return e;
        }
    },
    t2 = (e) => {
        let t = {};
        return (i, r, n) => {
            let o = n;
            n &&
                n.interpolationkey &&
                n.formatParams &&
                n.formatParams[n.interpolationkey] &&
                n[n.interpolationkey] &&
                (o = { ...o, [n.interpolationkey]: void 0 });
            let s = r + JSON.stringify(o),
                a = t[s];
            return a || ((a = e(tH(r), n)), (t[s] = a)), a(i);
        };
    },
    t3 = (e) => (t, i, r) => e(tH(i), r)(t),
    t0 = class {
        constructor(e = {}) {
            (this.logger = tV.create("formatter")), (this.options = e), this.init(e);
        }
        init(e, t = { interpolation: {} }) {
            this.formatSeparator = t.interpolation.formatSeparator || ",";
            let i = t.cacheInBuiltFormats ? t2 : t3;
            this.formats = {
                number: i((e, t) => {
                    let i = new Intl.NumberFormat(e, { ...t });
                    return (e) => i.format(e);
                }),
                currency: i((e, t) => {
                    let i = new Intl.NumberFormat(e, { ...t, style: "currency" });
                    return (e) => i.format(e);
                }),
                datetime: i((e, t) => {
                    let i = new Intl.DateTimeFormat(e, { ...t });
                    return (e) => i.format(e);
                }),
                relativetime: i((e, t) => {
                    let i = new Intl.RelativeTimeFormat(e, { ...t });
                    return (e) => i.format(e, t.range || "day");
                }),
                list: i((e, t) => {
                    let i = new Intl.ListFormat(e, { ...t });
                    return (e) => i.format(e);
                }),
            };
        }
        add(e, t) {
            this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
            this.formats[e.toLowerCase().trim()] = t2(t);
        }
        format(e, t, i, r = {}) {
            let n = t.split(this.formatSeparator);
            if (n.length > 1 && n[0].indexOf("(") > 1 && 0 > n[0].indexOf(")") && n.find((e) => e.indexOf(")") > -1)) {
                let e = n.findIndex((e) => e.indexOf(")") > -1);
                n[0] = [n[0], ...n.splice(1, e)].join(this.formatSeparator);
            }
            return n.reduce((e, t) => {
                let { formatName: n, formatOptions: o } = ((e) => {
                    let t = e.toLowerCase().trim(),
                        i = {};
                    if (e.indexOf("(") > -1) {
                        let r = e.split("(");
                        t = r[0].toLowerCase().trim();
                        let n = r[1].substring(0, r[1].length - 1);
                        "currency" === t && 0 > n.indexOf(":")
                            ? (i.currency ||= n.trim())
                            : "relativetime" === t && 0 > n.indexOf(":")
                              ? (i.range ||= n.trim())
                              : n.split(";").forEach((e) => {
                                    if (e) {
                                        let [t, ...r] = e.split(":"),
                                            n = r
                                                .join(":")
                                                .trim()
                                                .replace(/^'+|'+$/g, ""),
                                            o = t.trim();
                                        i[o] || (i[o] = n),
                                            "false" === n && (i[o] = !1),
                                            "true" === n && (i[o] = !0),
                                            isNaN(n) || (i[o] = parseInt(n, 10));
                                    }
                                });
                    }
                    return { formatName: t, formatOptions: i };
                })(t);
                if (this.formats[n]) {
                    let t = e;
                    try {
                        let s = r?.formatParams?.[r.interpolationkey] || {},
                            a = s.locale || s.lng || r.locale || r.lng || i;
                        t = this.formats[n](e, a, { ...o, ...r, ...s });
                    } catch (e) {
                        this.logger.warn(e);
                    }
                    return t;
                }
                return this.logger.warn(`there was no format function for ${n}`), e;
            }, e);
        }
    },
    t6 = class extends tB {
        constructor(e, t, i, r = {}) {
            super(),
                (this.backend = e),
                (this.store = t),
                (this.services = i),
                (this.languageUtils = i.languageUtils),
                (this.options = r),
                (this.logger = tV.create("backendConnector")),
                (this.waitingReads = []),
                (this.maxParallelReads = r.maxParallelReads || 10),
                (this.readingCalls = 0),
                (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
                (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
                (this.state = {}),
                (this.queue = []),
                this.backend?.init?.(i, r.backend, r);
        }
        queueLoad(e, t, i, r) {
            let n = {},
                o = {},
                s = {},
                a = {};
            return (
                e.forEach((e) => {
                    let r = !0;
                    t.forEach((t) => {
                        let s = `${e}|${t}`;
                        !i.reload && this.store.hasResourceBundle(e, t)
                            ? (this.state[s] = 2)
                            : this.state[s] < 0 ||
                              (1 === this.state[s]
                                  ? void 0 === o[s] && (o[s] = !0)
                                  : ((this.state[s] = 1),
                                    (r = !1),
                                    void 0 === o[s] && (o[s] = !0),
                                    void 0 === n[s] && (n[s] = !0),
                                    void 0 === a[t] && (a[t] = !0)));
                    }),
                        r || (s[e] = !0);
                }),
                (Object.keys(n).length || Object.keys(o).length) &&
                    this.queue.push({
                        pending: o,
                        pendingCount: Object.keys(o).length,
                        loaded: {},
                        errors: [],
                        callback: r,
                    }),
                {
                    toLoad: Object.keys(n),
                    pending: Object.keys(o),
                    toLoadLanguages: Object.keys(s),
                    toLoadNamespaces: Object.keys(a),
                }
            );
        }
        loaded(e, t, i) {
            let r = e.split("|"),
                n = r[0],
                o = r[1];
            t && this.emit("failedLoading", n, o, t),
                !t && i && this.store.addResourceBundle(n, o, i, void 0, void 0, { skipCopy: !0 }),
                (this.state[e] = t ? -1 : 2),
                t && i && (this.state[e] = 0);
            let s = {};
            this.queue.forEach((i) => {
                ((e, t, i, r) => {
                    let { obj: n, k: o } = tk(e, t, Object);
                    (n[o] = n[o] || []), n[o].push(i);
                })(i.loaded, [n], o),
                    void 0 !== i.pending[e] && (delete i.pending[e], i.pendingCount--),
                    t && i.errors.push(t),
                    0 !== i.pendingCount ||
                        i.done ||
                        (Object.keys(i.loaded).forEach((e) => {
                            s[e] || (s[e] = {});
                            let t = i.loaded[e];
                            t.length &&
                                t.forEach((t) => {
                                    void 0 === s[e][t] && (s[e][t] = !0);
                                });
                        }),
                        (i.done = !0),
                        i.errors.length ? i.callback(i.errors) : i.callback());
            }),
                this.emit("loaded", s),
                (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, i, r = 0, n = this.retryTimeout, o) {
            if (!e.length) return o(null, {});
            if (this.readingCalls >= this.maxParallelReads)
                return void this.waitingReads.push({ lng: e, ns: t, fcName: i, tried: r, wait: n, callback: o });
            this.readingCalls++;
            let s = (s, a) => {
                    if ((this.readingCalls--, this.waitingReads.length > 0)) {
                        let e = this.waitingReads.shift();
                        this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
                    }
                    s && a && r < this.maxRetries
                        ? setTimeout(() => {
                              this.read.call(this, e, t, i, r + 1, 2 * n, o);
                          }, n)
                        : o(s, a);
                },
                a = this.backend[i].bind(this.backend);
            if (2 === a.length) {
                try {
                    let i = a(e, t);
                    i && "function" == typeof i.then ? i.then((e) => s(null, e)).catch(s) : s(null, i);
                } catch (e) {
                    s(e);
                }
                return;
            }
            return a(e, t, s);
        }
        prepareLoading(e, t, i = {}, r) {
            if (!this.backend)
                return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
            tb(e) && (e = this.languageUtils.toResolveHierarchy(e)), tb(t) && (t = [t]);
            let n = this.queueLoad(e, t, i, r);
            if (!n.toLoad.length) return n.pending.length || r(), null;
            n.toLoad.forEach((e) => {
                this.loadOne(e);
            });
        }
        load(e, t, i) {
            this.prepareLoading(e, t, {}, i);
        }
        reload(e, t, i) {
            this.prepareLoading(e, t, { reload: !0 }, i);
        }
        loadOne(e, t = "") {
            let i = e.split("|"),
                r = i[0],
                n = i[1];
            this.read(r, n, "read", void 0, void 0, (i, o) => {
                i && this.logger.warn(`${t}loading namespace ${n} for language ${r} failed`, i),
                    !i && o && this.logger.log(`${t}loaded namespace ${n} for language ${r}`, o),
                    this.loaded(e, i, o);
            });
        }
        saveMissing(e, t, i, r, n, o = {}, s = () => {}) {
            if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t))
                return void this.logger.warn(
                    `did not save key "${i}" as the namespace "${t}" was not yet loaded`,
                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                );
            if (null != i && "" !== i) {
                if (this.backend?.create) {
                    let a = { ...o, isUpdate: n },
                        l = this.backend.create.bind(this.backend);
                    if (l.length < 6)
                        try {
                            let n;
                            (n = 5 === l.length ? l(e, t, i, r, a) : l(e, t, i, r)) && "function" == typeof n.then
                                ? n.then((e) => s(null, e)).catch(s)
                                : s(null, n);
                        } catch (e) {
                            s(e);
                        }
                    else l(e, t, i, r, s, a);
                }
                e && e[0] && this.store.addResource(e[0], t, i, r);
            }
        }
    },
    t5 = () => ({
        debug: !1,
        initAsync: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: (e) => {
            let t = {};
            if (
                ("object" == typeof e[1] && (t = e[1]),
                tb(e[1]) && (t.defaultValue = e[1]),
                tb(e[2]) && (t.tDescription = e[2]),
                "object" == typeof e[2] || "object" == typeof e[3])
            ) {
                let i = e[3] || e[2];
                Object.keys(i).forEach((e) => {
                    t[e] = i[e];
                });
            }
            return t;
        },
        interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
        },
        cacheInBuiltFormats: !0,
    }),
    t4 = (e) => (
        tb(e.ns) && (e.ns = [e.ns]),
        tb(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
        tb(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
        e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
        "boolean" == typeof e.initImmediate && (e.initAsync = e.initImmediate),
        e
    ),
    t9 = () => {},
    t8 = class e extends tB {
        constructor(e = {}, t) {
            if (
                (super(),
                (this.options = t4(e)),
                (this.services = {}),
                (this.logger = tV),
                (this.modules = { external: [] }),
                ((e) => {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
                        "function" == typeof e[t] && (e[t] = e[t].bind(e));
                    });
                })(this),
                t && !this.isInitialized && !e.isClone)
            ) {
                if (!this.options.initAsync) return this.init(e, t), this;
                setTimeout(() => {
                    this.init(e, t);
                }, 0);
            }
        }
        init(e = {}, t) {
            (this.isInitializing = !0),
                "function" == typeof e && ((t = e), (e = {})),
                null == e.defaultNS &&
                    e.ns &&
                    (tb(e.ns) ? (e.defaultNS = e.ns) : 0 > e.ns.indexOf("translation") && (e.defaultNS = e.ns[0]));
            let i = t5();
            (this.options = { ...i, ...this.options, ...t4(e) }),
                (this.options.interpolation = { ...i.interpolation, ...this.options.interpolation }),
                void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator),
                void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator);
            let r = (e) => (e ? ("function" == typeof e ? new e() : e) : null);
            if (!this.options.isClone) {
                let e;
                this.modules.logger ? tV.init(r(this.modules.logger), this.options) : tV.init(null, this.options),
                    (e = this.modules.formatter ? this.modules.formatter : t0);
                let t = new tq(this.options);
                this.store = new tz(this.options.resources, this.options);
                let n = this.services;
                (n.logger = tV),
                    (n.resourceStore = this.store),
                    (n.languageUtils = t),
                    (n.pluralResolver = new tX(t, {
                        prepend: this.options.pluralSeparator,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    this.options.interpolation.format &&
                        this.options.interpolation.format !== i.interpolation.format &&
                        this.logger.deprecate(
                            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting",
                        ),
                    e &&
                        (!this.options.interpolation.format ||
                            this.options.interpolation.format === i.interpolation.format) &&
                        ((n.formatter = r(e)),
                        n.formatter.init && n.formatter.init(n, this.options),
                        (this.options.interpolation.format = n.formatter.format.bind(n.formatter))),
                    (n.interpolator = new t1(this.options)),
                    (n.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
                    (n.backendConnector = new t6(r(this.modules.backend), n.resourceStore, n, this.options)),
                    n.backendConnector.on("*", (e, ...t) => {
                        this.emit(e, ...t);
                    }),
                    this.modules.languageDetector &&
                        ((n.languageDetector = r(this.modules.languageDetector)),
                        n.languageDetector.init && n.languageDetector.init(n, this.options.detection, this.options)),
                    this.modules.i18nFormat &&
                        ((n.i18nFormat = r(this.modules.i18nFormat)), n.i18nFormat.init && n.i18nFormat.init(this)),
                    (this.translator = new tG(this.services, this.options)),
                    this.translator.on("*", (e, ...t) => {
                        this.emit(e, ...t);
                    }),
                    this.modules.external.forEach((e) => {
                        e.init && e.init(this);
                    });
            }
            if (
                ((this.format = this.options.interpolation.format),
                (t ||= t9),
                this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
            ) {
                let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
            }
            this.services.languageDetector ||
                this.options.lng ||
                this.logger.warn("init: no languageDetector is used and no lng is defined"),
                ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((e) => {
                    this[e] = (...t) => this.store[e](...t);
                }),
                ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((e) => {
                    this[e] = (...t) => (this.store[e](...t), this);
                });
            let n = tL(),
                o = () => {
                    let e = (e, i) => {
                        (this.isInitializing = !1),
                            this.isInitialized &&
                                !this.initializedStoreOnce &&
                                this.logger.warn(
                                    "init: i18next is already initialized. You should call init just once!",
                                ),
                            (this.isInitialized = !0),
                            this.options.isClone || this.logger.log("initialized", this.options),
                            this.emit("initialized", this.options),
                            n.resolve(i),
                            t(e, i);
                    };
                    if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
                    this.changeLanguage(this.options.lng, e);
                };
            return this.options.resources || !this.options.initAsync ? o() : setTimeout(o, 0), n;
        }
        loadResources(e, t = t9) {
            let i = t,
                r = tb(e) ? e : this.language;
            if (("function" == typeof e && (i = e), !this.options.resources || this.options.partialBundledLanguages)) {
                if (r?.toLowerCase() === "cimode" && (!this.options.preload || 0 === this.options.preload.length))
                    return i();
                let e = [],
                    t = (t) => {
                        t &&
                            "cimode" !== t &&
                            this.services.languageUtils.toResolveHierarchy(t).forEach((t) => {
                                "cimode" !== t && 0 > e.indexOf(t) && e.push(t);
                            });
                    };
                r ? t(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e) => t(e)),
                    this.options.preload?.forEach?.((e) => t(e)),
                    this.services.backendConnector.load(e, this.options.ns, (e) => {
                        e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), i(e);
                    });
            } else i(null);
        }
        reloadResources(e, t, i) {
            let r = tL();
            return (
                "function" == typeof e && ((i = e), (e = void 0)),
                "function" == typeof t && ((i = t), (t = void 0)),
                (e ||= this.languages),
                (t ||= this.options.ns),
                (i ||= t9),
                this.services.backendConnector.reload(e, t, (e) => {
                    r.resolve(), i(e);
                }),
                r
            );
        }
        use(e) {
            if (!e)
                throw Error(
                    "You are passing an undefined module! Please check the object you are passing to i18next.use()",
                );
            if (!e.type)
                throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
            return (
                "backend" === e.type && (this.modules.backend = e),
                ("logger" === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
                "languageDetector" === e.type && (this.modules.languageDetector = e),
                "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                "postProcessor" === e.type && t$.addPostProcessor(e),
                "formatter" === e.type && (this.modules.formatter = e),
                "3rdParty" === e.type && this.modules.external.push(e),
                this
            );
        }
        setResolvedLanguage(e) {
            if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
                for (let e = 0; e < this.languages.length; e++) {
                    let t = this.languages[e];
                    if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                        this.resolvedLanguage = t;
                        break;
                    }
                }
                !this.resolvedLanguage &&
                    0 > this.languages.indexOf(e) &&
                    this.store.hasLanguageSomeTranslations(e) &&
                    ((this.resolvedLanguage = e), this.languages.unshift(e));
            }
        }
        changeLanguage(e, t) {
            this.isLanguageChangingTo = e;
            let i = tL();
            this.emit("languageChanging", e);
            let r = (e) => {
                    (this.language = e),
                        (this.languages = this.services.languageUtils.toResolveHierarchy(e)),
                        (this.resolvedLanguage = void 0),
                        this.setResolvedLanguage(e);
                },
                n = (n, o) => {
                    o
                        ? this.isLanguageChangingTo === e &&
                          (r(o),
                          this.translator.changeLanguage(o),
                          (this.isLanguageChangingTo = void 0),
                          this.emit("languageChanged", o),
                          this.logger.log("languageChanged", o))
                        : (this.isLanguageChangingTo = void 0),
                        i.resolve((...e) => this.t(...e)),
                        t && t(n, (...e) => this.t(...e));
                },
                o = (t) => {
                    e || t || !this.services.languageDetector || (t = []);
                    let i = tb(t) ? t : t && t[0],
                        o = this.store.hasLanguageSomeTranslations(i)
                            ? i
                            : this.services.languageUtils.getBestMatchFromCodes(tb(t) ? [t] : t);
                    o &&
                        (this.language || r(o),
                        this.translator.language || this.translator.changeLanguage(o),
                        this.services.languageDetector?.cacheUserLanguage?.(o)),
                        this.loadResources(o, (e) => {
                            n(e, o);
                        });
                };
            return (
                e || !this.services.languageDetector || this.services.languageDetector.async
                    ? !e && this.services.languageDetector && this.services.languageDetector.async
                        ? 0 === this.services.languageDetector.detect.length
                            ? this.services.languageDetector.detect().then(o)
                            : this.services.languageDetector.detect(o)
                        : o(e)
                    : o(this.services.languageDetector.detect()),
                i
            );
        }
        getFixedT(e, t, i) {
            let r = (e, t, ...n) => {
                let o;
                ((o =
                    "object" == typeof t
                        ? { ...t }
                        : this.options.overloadTranslationOptionHandler([e, t].concat(n))).lng = o.lng || r.lng),
                    (o.lngs = o.lngs || r.lngs),
                    (o.ns = o.ns || r.ns),
                    "" !== o.keyPrefix && (o.keyPrefix = o.keyPrefix || i || r.keyPrefix);
                let s = this.options.keySeparator || ".",
                    a;
                return (
                    o.keyPrefix && Array.isArray(e)
                        ? (a = e.map(
                              (e) => (
                                  "function" == typeof e && (e = tW(e, { ...this.options, ...t })),
                                  `${o.keyPrefix}${s}${e}`
                              ),
                          ))
                        : ("function" == typeof e && (e = tW(e, { ...this.options, ...t })),
                          (a = o.keyPrefix ? `${o.keyPrefix}${s}${e}` : e)),
                    this.t(a, o)
                );
            };
            return tb(e) ? (r.lng = e) : (r.lngs = e), (r.ns = t), (r.keyPrefix = i), r;
        }
        t(...e) {
            return this.translator?.translate(...e);
        }
        exists(...e) {
            return this.translator?.exists(...e);
        }
        setDefaultNamespace(e) {
            this.options.defaultNS = e;
        }
        hasLoadedNamespace(e, t = {}) {
            if (!this.isInitialized)
                return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
            if (!this.languages || !this.languages.length)
                return (
                    this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1
                );
            let i = t.lng || this.resolvedLanguage || this.languages[0],
                r = !!this.options && this.options.fallbackLng,
                n = this.languages[this.languages.length - 1];
            if ("cimode" === i.toLowerCase()) return !0;
            let o = (e, t) => {
                let i = this.services.backendConnector.state[`${e}|${t}`];
                return -1 === i || 0 === i || 2 === i;
            };
            if (t.precheck) {
                let e = t.precheck(this, o);
                if (void 0 !== e) return e;
            }
            return !!(
                this.hasResourceBundle(i, e) ||
                !this.services.backendConnector.backend ||
                (this.options.resources && !this.options.partialBundledLanguages) ||
                (o(i, e) && (!r || o(n, e)))
            );
        }
        loadNamespaces(e, t) {
            let i = tL();
            return this.options.ns
                ? (tb(e) && (e = [e]),
                  e.forEach((e) => {
                      0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
                  }),
                  this.loadResources((e) => {
                      i.resolve(), t && t(e);
                  }),
                  i)
                : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
            let i = tL();
            tb(e) && (e = [e]);
            let r = this.options.preload || [],
                n = e.filter((e) => 0 > r.indexOf(e) && this.services.languageUtils.isSupportedCode(e));
            return n.length
                ? ((this.options.preload = r.concat(n)),
                  this.loadResources((e) => {
                      i.resolve(), t && t(e);
                  }),
                  i)
                : (t && t(), Promise.resolve());
        }
        dir(e) {
            if (!(e ||= this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)))
                return "rtl";
            try {
                let t = new Intl.Locale(e);
                if (t && t.getTextInfo) {
                    let e = t.getTextInfo();
                    if (e && e.direction) return e.direction;
                }
            } catch {}
            let t = this.services?.languageUtils || new tq(t5());
            return e.toLowerCase().indexOf("-latn") > 1
                ? "ltr"
                : "ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb"
                        .split(".")
                        .indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1
                  ? "rtl"
                  : "ltr";
        }
        static createInstance(t = {}, i) {
            let r = new e(t, i);
            return (r.createInstance = e.createInstance), r;
        }
        cloneInstance(t = {}, i = t9) {
            let r = t.forkResourceStore;
            r && delete t.forkResourceStore;
            let n = { ...this.options, ...t, isClone: !0 },
                o = new e(n);
            return (
                (void 0 !== t.debug || void 0 !== t.prefix) && (o.logger = o.logger.clone(t)),
                ["store", "services", "language"].forEach((e) => {
                    o[e] = this[e];
                }),
                (o.services = { ...this.services }),
                (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
                r &&
                    ((o.store = new tz(
                        Object.keys(this.store.data).reduce(
                            (e, t) => (
                                (e[t] = { ...this.store.data[t] }),
                                (e[t] = Object.keys(e[t]).reduce((i, r) => ((i[r] = { ...e[t][r] }), i), e[t])),
                                e
                            ),
                            {},
                        ),
                        n,
                    )),
                    (o.services.resourceStore = o.store)),
                t.interpolation && (o.services.interpolator = new t1(n)),
                (o.translator = new tG(o.services, n)),
                o.translator.on("*", (e, ...t) => {
                    o.emit(e, ...t);
                }),
                o.init(n, i),
                (o.translator.options = n),
                (o.translator.backendConnector.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
                o
            );
        }
        toJSON() {
            return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage,
            };
        }
    }.createInstance();
t8.createInstance,
    t8.dir,
    t8.init,
    t8.loadResources,
    t8.reloadResources,
    t8.use,
    t8.changeLanguage,
    t8.getFixedT,
    t8.t,
    t8.exists,
    t8.setDefaultNamespace,
    t8.hasLoadedNamespace,
    t8.loadNamespaces,
    t8.loadLanguages;
var { slice: t7, forEach: ie } = [],
    it = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    ii = function (e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { path: "/" },
            r = `${e}=${encodeURIComponent(t)}`;
        if (i.maxAge > 0) {
            let e = i.maxAge - 0;
            if (Number.isNaN(e)) throw Error("maxAge should be a Number");
            r += `; Max-Age=${Math.floor(e)}`;
        }
        if (i.domain) {
            if (!it.test(i.domain)) throw TypeError("option domain is invalid");
            r += `; Domain=${i.domain}`;
        }
        if (i.path) {
            if (!it.test(i.path)) throw TypeError("option path is invalid");
            r += `; Path=${i.path}`;
        }
        if (i.expires) {
            if ("function" != typeof i.expires.toUTCString) throw TypeError("option expires is invalid");
            r += `; Expires=${i.expires.toUTCString()}`;
        }
        if ((i.httpOnly && (r += "; HttpOnly"), i.secure && (r += "; Secure"), i.sameSite))
            switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                case !0:
                case "strict":
                    r += "; SameSite=Strict";
                    break;
                case "lax":
                    r += "; SameSite=Lax";
                    break;
                case "none":
                    r += "; SameSite=None";
                    break;
                default:
                    throw TypeError("option sameSite is invalid");
            }
        return i.partitioned && (r += "; Partitioned"), r;
    },
    ir = {
        create(e, t, i, r) {
            let n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
            i && ((n.expires = new Date()), n.expires.setTime(n.expires.getTime() + 60 * i * 1e3)),
                r && (n.domain = r),
                (document.cookie = ii(e, t, n));
        },
        read(e) {
            let t = `${e}=`,
                i = document.cookie.split(";");
            for (let e = 0; e < i.length; e++) {
                let r = i[e];
                for (; " " === r.charAt(0); ) r = r.substring(1, r.length);
                if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
            }
            return null;
        },
        remove(e, t) {
            this.create(e, "", -1, t);
        },
    },
    io = {
        name: "cookie",
        lookup(e) {
            let { lookupCookie: t } = e;
            if (t && "u" > typeof document) return ir.read(t) || void 0;
        },
        cacheUserLanguage(e, t) {
            let { lookupCookie: i, cookieMinutes: r, cookieDomain: n, cookieOptions: o } = t;
            i && "u" > typeof document && ir.create(i, e, r, n, o);
        },
    },
    is = {
        name: "querystring",
        lookup(e) {
            let { lookupQuerystring: t } = e,
                i;
            if ("u" > typeof window) {
                let { search: e } = window.location;
                !window.location.search &&
                    window.location.hash?.indexOf("?") > -1 &&
                    (e = window.location.hash.substring(window.location.hash.indexOf("?")));
                let r = e.substring(1).split("&");
                for (let e = 0; e < r.length; e++) {
                    let n = r[e].indexOf("=");
                    n > 0 && r[e].substring(0, n) === t && (i = r[e].substring(n + 1));
                }
            }
            return i;
        },
    },
    ia = {
        name: "hash",
        lookup(e) {
            let { lookupHash: t, lookupFromHashIndex: i } = e,
                r;
            if ("u" > typeof window) {
                let { hash: e } = window.location;
                if (e && e.length > 2) {
                    let n = e.substring(1);
                    if (t) {
                        let e = n.split("&");
                        for (let i = 0; i < e.length; i++) {
                            let n = e[i].indexOf("=");
                            n > 0 && e[i].substring(0, n) === t && (r = e[i].substring(n + 1));
                        }
                    }
                    if (r) return r;
                    if (!r && i > -1) {
                        let t = e.match(/\/([a-zA-Z-]*)/g);
                        return Array.isArray(t) ? t["number" == typeof i ? i : 0]?.replace("/", "") : void 0;
                    }
                }
            }
            return r;
        },
    },
    il = null,
    ic = () => {
        if (null !== il) return il;
        try {
            if (!(il = "u" > typeof window && null !== window.localStorage)) return !1;
            let e = "i18next.translate.boo";
            window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
        } catch {
            il = !1;
        }
        return il;
    },
    id = {
        name: "localStorage",
        lookup(e) {
            let { lookupLocalStorage: t } = e;
            if (t && ic()) return window.localStorage.getItem(t) || void 0;
        },
        cacheUserLanguage(e, t) {
            let { lookupLocalStorage: i } = t;
            i && ic() && window.localStorage.setItem(i, e);
        },
    },
    iu = null,
    ih = () => {
        if (null !== iu) return iu;
        try {
            if (!(iu = "u" > typeof window && null !== window.sessionStorage)) return !1;
            let e = "i18next.translate.boo";
            window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
        } catch {
            iu = !1;
        }
        return iu;
    },
    ip = {
        name: "sessionStorage",
        lookup(e) {
            let { lookupSessionStorage: t } = e;
            if (t && ih()) return window.sessionStorage.getItem(t) || void 0;
        },
        cacheUserLanguage(e, t) {
            let { lookupSessionStorage: i } = t;
            i && ih() && window.sessionStorage.setItem(i, e);
        },
    },
    im = {
        name: "navigator",
        lookup(e) {
            let t = [];
            if ("u" > typeof navigator) {
                let { languages: e, userLanguage: i, language: r } = navigator;
                if (e) for (let i = 0; i < e.length; i++) t.push(e[i]);
                i && t.push(i), r && t.push(r);
            }
            return t.length > 0 ? t : void 0;
        },
    },
    ig = {
        name: "htmlTag",
        lookup(e) {
            let { htmlTag: t } = e,
                i,
                r = t || ("u" > typeof document ? document.documentElement : null);
            return r && "function" == typeof r.getAttribute && (i = r.getAttribute("lang")), i;
        },
    },
    iC = {
        name: "path",
        lookup(e) {
            let { lookupFromPathIndex: t } = e;
            if (typeof window > "u") return;
            let i = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            if (Array.isArray(i)) return i["number" == typeof t ? t : 0]?.replace("/", "");
        },
    },
    iv = {
        name: "subdomain",
        lookup(e) {
            let { lookupFromSubdomainIndex: t } = e,
                i =
                    "u" > typeof window &&
                    window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
            if (i) return i["number" == typeof t ? t + 1 : 1];
        },
    },
    iy = !1;
try {
    document.cookie, (iy = !0);
} catch {}
var iw = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
iy || iw.splice(1, 1);
var i_ = class {
    constructor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (this.type = "languageDetector"), (this.detectors = {}), this.init(e, t);
    }
    init() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { languageUtils: {} },
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (this.services = e),
            (this.options = (function (e) {
                return (
                    ie.call(t7.call(arguments, 1), (t) => {
                        if (t) for (let i in t) void 0 === e[i] && (e[i] = t[i]);
                    }),
                    e
                );
            })(t, this.options || {}, {
                order: iw,
                lookupQuerystring: "lng",
                lookupCookie: "i18next",
                lookupLocalStorage: "i18nextLng",
                lookupSessionStorage: "i18nextLng",
                caches: ["localStorage"],
                excludeCacheFor: ["cimode"],
                convertDetectedLanguage: (e) => e,
            })),
            "string" == typeof this.options.convertDetectedLanguage &&
                this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
                (this.options.convertDetectedLanguage = (e) => e.replace("-", "_")),
            this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
            (this.i18nOptions = i),
            this.addDetector(io),
            this.addDetector(is),
            this.addDetector(id),
            this.addDetector(ip),
            this.addDetector(im),
            this.addDetector(ig),
            this.addDetector(iC),
            this.addDetector(iv),
            this.addDetector(ia);
    }
    addDetector(e) {
        return (this.detectors[e.name] = e), this;
    }
    detect() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.order,
            t = [];
        return (
            e.forEach((e) => {
                if (this.detectors[e]) {
                    let i = this.detectors[e].lookup(this.options);
                    i && "string" == typeof i && (i = [i]), i && (t = t.concat(i));
                }
            }),
            (t = t
                .filter(
                    (e) =>
                        null != e &&
                        !(
                            "string" == typeof e &&
                            [
                                /<\s*script.*?>/i,
                                /<\s*\/\s*script\s*>/i,
                                /<\s*img.*?on\w+\s*=/i,
                                /<\s*\w+\s*on\w+\s*=.*?>/i,
                                /javascript\s*:/i,
                                /vbscript\s*:/i,
                                /expression\s*\(/i,
                                /eval\s*\(/i,
                                /alert\s*\(/i,
                                /document\.cookie/i,
                                /document\.write\s*\(/i,
                                /window\.location/i,
                                /innerHTML/i,
                            ].some((t) => t.test(e))
                        ),
                )
                .map((e) => this.options.convertDetectedLanguage(e))),
            this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes
                ? t
                : t.length > 0
                  ? t[0]
                  : null
        );
    }
    cacheUserLanguage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.caches;
        t &&
            ((this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1) ||
                t.forEach((t) => {
                    this.detectors[t] && this.detectors[t].cacheUserLanguage(e, this.options);
                }));
    }
};
function ib(e) {
    return (ib =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
i_.type = "languageDetector";
function iL() {
    return (
        "function" == typeof XMLHttpRequest ||
        (typeof XMLHttpRequest > "u" ? "undefined" : ib(XMLHttpRequest)) === "object"
    );
}
function iE(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function iS(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null == arguments[t] ? {} : arguments[t];
        t % 2
            ? iE(Object(i), !0).forEach(function (t) {
                  var r, n, o;
                  (r = e),
                      (n = t),
                      (o = i[t]),
                      (n = (function (e) {
                          var t = (function (e, t) {
                              if ("object" != iI(e) || !e) return e;
                              var i = e[Symbol.toPrimitive];
                              if (void 0 !== i) {
                                  var r = i.call(e, t || "default");
                                  if ("object" != iI(r)) return r;
                                  throw TypeError("@@toPrimitive must return a primitive value.");
                              }
                              return ("string" === t ? String : Number)(e);
                          })(e, "string");
                          return "symbol" == iI(t) ? t : t + "";
                      })(n)) in r
                          ? Object.defineProperty(r, n, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (r[n] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : iE(Object(i)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                });
    }
    return e;
}
function iI(e) {
    return (iI =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
var iT = "function" == typeof fetch ? fetch : void 0;
if (
    ("u" > typeof global && global.fetch
        ? (iT = global.fetch)
        : "u" > typeof window && window.fetch && (iT = window.fetch),
    iL() &&
        ("u" > typeof global && global.XMLHttpRequest
            ? (d = global.XMLHttpRequest)
            : "u" > typeof window && window.XMLHttpRequest && (d = window.XMLHttpRequest)),
    "function" == typeof ActiveXObject &&
        ("u" > typeof global && global.ActiveXObject
            ? (u = global.ActiveXObject)
            : "u" > typeof window && window.ActiveXObject && (u = window.ActiveXObject)),
    "function" != typeof iT && (iT = void 0),
    !iT && !d && !u)
)
    try {
        i.e("98789")
            .then(i.bind(i, 803300))
            .then((e) => (0, t_.r)(e.default, 1))
            .then(function (e) {
                iT = e.default;
            })
            .catch(function () {});
    } catch {}
var ik = function (e, t) {
        if (t && "object" === iI(t)) {
            var i = "";
            for (var r in t) i += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
            if (!i) return e;
            e = e + (-1 === e.indexOf("?") ? "?" : "&") + i.slice(1);
        }
        return e;
    },
    ix = function (e, t, i, r) {
        var n = function (e) {
            if (!e.ok) return i(e.statusText || "Error", { status: e.status });
            e.text()
                .then(function (t) {
                    i(null, { status: e.status, data: t });
                })
                .catch(i);
        };
        if (r) {
            var o = r(e, t);
            if (o instanceof Promise) return void o.then(n).catch(i);
        }
        "function" == typeof fetch ? fetch(e, t).then(n).catch(i) : iT(e, t).then(n).catch(i);
    },
    iP = !1,
    iM = function (e, t, i, r) {
        e.queryStringParams && (t = ik(t, e.queryStringParams));
        var n = iS({}, "function" == typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
        typeof window > "u" &&
            "u" > typeof global &&
            void 0 !== global.process &&
            global.process.versions &&
            global.process.versions.node &&
            (n["User-Agent"] =
                `i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),
            i && (n["Content-Type"] = "application/json");
        var o = "function" == typeof e.requestOptions ? e.requestOptions(i) : e.requestOptions,
            s = iS({ method: i ? "POST" : "GET", body: i ? e.stringify(i) : void 0, headers: n }, iP ? {} : o),
            a = "function" == typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
        try {
            ix(t, s, r, a);
        } catch (e) {
            if (!o || 0 === Object.keys(o).length || !e.message || 0 > e.message.indexOf("not implemented"))
                return r(e);
            try {
                Object.keys(o).forEach(function (e) {
                    delete s[e];
                }),
                    ix(t, s, r, a),
                    (iP = !0);
            } catch (e) {
                r(e);
            }
        }
    },
    iO = function (e, t, i, r) {
        i && "object" === iI(i) && (i = ik("", i).slice(1)), e.queryStringParams && (t = ik(t, e.queryStringParams));
        try {
            var n = d ? new d() : new u("MSXML2.XMLHTTP.3.0");
            n.open(i ? "POST" : "GET", t, 1),
                e.crossDomain || n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                (n.withCredentials = !!e.withCredentials),
                i && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                n.overrideMimeType && n.overrideMimeType("application/json");
            var o = e.customHeaders;
            if ((o = "function" == typeof o ? o() : o)) for (var s in o) n.setRequestHeader(s, o[s]);
            (n.onreadystatechange = function () {
                n.readyState > 3 &&
                    r(n.status >= 400 ? n.statusText : null, { status: n.status, data: n.responseText });
            }),
                n.send(i);
        } catch (e) {
            console && console.log(e);
        }
    },
    iA = function (e, t, i, r) {
        return ("function" == typeof i && ((r = i), (i = void 0)),
        (r ||= function () {}),
        iT && 0 !== t.indexOf("file:"))
            ? iM(e, t, i, r)
            : iL() || "function" == typeof ActiveXObject
              ? iO(e, t, i, r)
              : void r(Error("No fetch and no xhr implementation found!"));
    };
function iR(e) {
    return (iR =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function iD(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function iF(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null == arguments[t] ? {} : arguments[t];
        t % 2
            ? iD(Object(i), !0).forEach(function (t) {
                  iU(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : iD(Object(i)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                });
    }
    return e;
}
function iU(e, t, i) {
    return (
        (t = iH(t)) in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
        e
    );
}
function iH(e) {
    var t = (function (e, t) {
        if ("object" != iR(e) || !e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 !== i) {
            var r = i.call(e, t || "default");
            if ("object" != iR(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == iR(t) ? t : t + "";
}
var iN =
    ((o = function e(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (function (e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        })(this, e),
            (this.services = t),
            (this.options = i),
            (this.allOptions = r),
            (this.type = "backend"),
            this.init(t, i, r);
    }),
    (s = [
        {
            key: "init",
            value: function (e) {
                var t = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (
                    ((this.services = e),
                    (this.options = iF(
                        iF(
                            iF(
                                {},
                                {
                                    loadPath: "/locales/{{lng}}/{{ns}}.json",
                                    addPath: "/locales/add/{{lng}}/{{ns}}",
                                    parse: function (e) {
                                        return JSON.parse(e);
                                    },
                                    stringify: JSON.stringify,
                                    parsePayload: function (e, t, i) {
                                        return iU({}, t, i || "");
                                    },
                                    parseLoadPayload: function (e, t) {},
                                    request: iA,
                                    reloadInterval: !("u" > typeof window) && 36e5,
                                    customHeaders: {},
                                    queryStringParams: {},
                                    crossDomain: !1,
                                    withCredentials: !1,
                                    overrideMimeType: !1,
                                    requestOptions: { mode: "cors", credentials: "same-origin", cache: "default" },
                                },
                            ),
                            this.options || {},
                        ),
                        i,
                    )),
                    (this.allOptions = r),
                    this.services && this.options.reloadInterval)
                ) {
                    var n = setInterval(function () {
                        return t.reload();
                    }, this.options.reloadInterval);
                    "object" === iR(n) && "function" == typeof n.unref && n.unref();
                }
            },
        },
        {
            key: "readMulti",
            value: function (e, t, i) {
                this._readAny(e, e, t, t, i);
            },
        },
        {
            key: "read",
            value: function (e, t, i) {
                this._readAny([e], e, [t], t, i);
            },
        },
        {
            key: "_readAny",
            value: function (e, t, i, r, n) {
                var o,
                    s,
                    a = this,
                    l = this.options.loadPath;
                "function" == typeof this.options.loadPath && (l = this.options.loadPath(e, i)),
                    (l = (s = o = l) && "function" == typeof s.then ? o : Promise.resolve(o)).then(function (o) {
                        if (!o) return n(null, {});
                        var s = a.services.interpolator.interpolate(o, { lng: e.join("+"), ns: i.join("+") });
                        a.loadUrl(s, n, t, r);
                    });
            },
        },
        {
            key: "loadUrl",
            value: function (e, t, i, r) {
                var n = this,
                    o = this.options.parseLoadPayload("string" == typeof i ? [i] : i, "string" == typeof r ? [r] : r);
                this.options.request(this.options, e, o, function (o, s) {
                    if (s && ((s.status >= 500 && s.status < 600) || !s.status))
                        return t("failed loading " + e + "; status code: " + s.status, !0);
                    if (s && s.status >= 400 && s.status < 500)
                        return t("failed loading " + e + "; status code: " + s.status, !1);
                    if (!s && o && o.message) {
                        var a,
                            l,
                            c = o.message.toLowerCase();
                        if (
                            ["failed", "fetch", "network", "load"].find(function (e) {
                                return c.indexOf(e) > -1;
                            })
                        )
                            return t("failed loading " + e + ": " + o.message, !0);
                    }
                    if (o) return t(o, !1);
                    try {
                        a = "string" == typeof s.data ? n.options.parse(s.data, i, r) : s.data;
                    } catch {
                        l = "failed parsing " + e + " to json";
                    }
                    if (l) return t(l, !1);
                    t(null, a);
                });
            },
        },
        {
            key: "create",
            value: function (e, t, i, r, n) {
                var o = this;
                if (this.options.addPath) {
                    "string" == typeof e && (e = [e]);
                    var s = this.options.parsePayload(t, i, r),
                        a = 0,
                        l = [],
                        c = [];
                    e.forEach(function (i) {
                        var r = o.options.addPath;
                        "function" == typeof o.options.addPath && (r = o.options.addPath(i, t));
                        var d = o.services.interpolator.interpolate(r, { lng: i, ns: t });
                        o.options.request(o.options, d, s, function (t, i) {
                            (a += 1), l.push(t), c.push(i), a === e.length && "function" == typeof n && n(l, c);
                        });
                    });
                }
            },
        },
        {
            key: "reload",
            value: function () {
                var e = this,
                    t = this.services,
                    i = t.backendConnector,
                    r = t.languageUtils,
                    n = t.logger,
                    o = i.language;
                if (!(o && "cimode" === o.toLowerCase())) {
                    var s = [],
                        a = function (e) {
                            r.toResolveHierarchy(e).forEach(function (e) {
                                0 > s.indexOf(e) && s.push(e);
                            });
                        };
                    a(o),
                        this.allOptions.preload &&
                            this.allOptions.preload.forEach(function (e) {
                                return a(e);
                            }),
                        s.forEach(function (t) {
                            e.allOptions.ns.forEach(function (e) {
                                i.read(t, e, "read", null, null, function (r, o) {
                                    r && n.warn(`loading namespace ${e} for language ${t} failed`, r),
                                        !r && o && n.log(`loaded namespace ${e} for language ${t}`, o),
                                        i.loaded(`${t}|${e}`, r, o);
                                });
                            });
                        });
                }
            },
        },
    ]),
    (function (e, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, iH(r.key), r);
        }
    })(o.prototype, s),
    Object.defineProperty(o, "prototype", { writable: !1 }),
    o);
iN.type = "backend";
var iV = [
        "en",
        "en-DG",
        "es",
        "es-ES",
        "sr",
        "sr-Latn",
        "fr",
        "pt-BR",
        "pt",
        "bn",
        "zh",
        "hi",
        "id",
        "ms",
        "tr",
        "vi",
        "ht",
        "it",
        "de",
        "nl",
        "tl-PH",
        "pl",
        "hu",
        "ro",
        "hmn",
        "so",
        "ca",
        "af-ZA",
        "ar",
        "ar-EG",
        "ar-AE",
        "zh-CN",
        "zh-TW",
        "zh-HANT",
        "cs-CZ",
        "da-DK",
        "fi-FI",
        "fr-CA",
        "el-GR",
        "he",
        "ja",
        "ja-JP",
        "ko-KP",
        "nb-NO",
        "fa-IR",
        "pt-PT",
        "ru-RU",
        "sr-YU",
        "es-419",
        "es-MX",
        "sv-SE",
        "th-TH",
        "uk-UA",
        "am",
        "az",
        "bs",
        "my",
        "ceb",
        "cs",
        "et",
        "ka",
        "el",
        "jv",
        "kk",
        "km",
        "ko",
        "ky",
        "lo",
        "lv",
        "lt",
        "mk",
        "mn",
        "ne",
        "ru",
        "sk",
        "sl",
        "sw",
        "tl",
        "th",
        "uk",
        "ur",
        "uz",
        "hr",
    ],
    iB = "incode:i18n:language",
    iz = (e) => {
        let t,
            i = e.split(".");
        return (t = (i[i.length - 1] || "missing key").replace(/([A-Z])/g, " $1")).charAt(0).toUpperCase() + t.slice(1);
    },
    i$ = new i_();
function iZ(e, t) {
    for (let [i, r] of Object.entries(t)) r && e.addResourceBundle(i, "default", r, !0, !0);
}
i$.addDetector({
    name: "navigatorOnlyLanguage",
    lookup() {
        if (typeof navigator > "u") return "en";
        let e = navigator.language;
        return iV.includes(e) ? e : e.split("-")[0];
    },
});
var iW = null,
    ij = ({ class: e }) =>
        Q("svg", {
            width: "13",
            height: "14",
            viewBox: "0 0 13 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            class: e,
            children: Q("path", {
                d: "M0 8.08009V5.92009H9.198L4.698 1.87009L6.228 0.340088L12.6 6.28009V7.70209L6.228 13.6601L4.698 12.1301L9.198 8.08009H0Z",
                fill: "currentColor",
            }),
        });
function iK() {
    let e = (iW ||= (function (e = {}) {
            let { lang: t, translations: i } = e,
                r = t8.createInstance();
            return (
                r
                    .use(iN)
                    .use(i$)
                    .init({
                        lng: t,
                        fallbackLng: "en",
                        supportedLngs: iV,
                        ns: ["default"],
                        defaultNS: "default",
                        partialBundledLanguages: !0,
                        keySeparator: ".",
                        interpolation: { escapeValue: !1 },
                        backend: {
                            loadPath:
                                "https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=cg41dUINoxdp8BaHDQLJhA",
                        },
                        detection: {
                            order: [
                                "querystring",
                                "cookie",
                                "localStorage",
                                "sessionStorage",
                                "navigatorOnlyLanguage",
                                "htmlTag",
                                "path",
                                "subdomain",
                            ],
                            lookupQuerystring: "lang",
                            lookupLocalStorage: iB,
                            lookupSessionStorage: iB,
                            caches: ["localStorage"],
                        },
                        initImmediate: !1,
                        parseMissingKeyHandler: iz,
                    }),
                i &&
                    (iZ(r, i),
                    r.on("loaded", () => {
                        iZ(r, i);
                    })),
                r
            );
        })()),
        [, t] = eh(0),
        [i, r] = eh(e.isInitialized);
    return (
        ep(() => {
            let i = () => {
                    t((e) => e + 1);
                },
                n = () => {
                    r(!0), t((e) => e + 1);
                };
            return (
                e.on("languageChanged", i),
                e.on("initialized", n),
                e.on("loaded", i),
                () => {
                    e.off("languageChanged", i), e.off("initialized", n), e.off("loaded", i);
                }
            );
        }, [e]),
        { t: eg(() => e.t.bind(e), [e]), ready: i, i18n: e }
    );
}
var iG = ({
    i18nKey: e,
    boldClass: t = "IncodeTransBold",
    arrowClass: i = "IncodeTransArrow",
    components: r,
    defaultValue: n,
}) => {
    let { t: o } = iK(),
        s = n ? o(e, { defaultValue: n }) : o(e),
        a = "<strong>|<\\/strong>|<br\\s*\\/?>|<arrow\\s*\\/>",
        l = r
            ? Object.keys(r)
                  .map((e) => `<${e}>|<\\/${e}>`)
                  .join("|")
            : "",
        c = l ? `${a}|${l}` : a,
        d = s.split(RegExp(`(${c})`, "g")),
        u = !1,
        h = null;
    return Q(A, {
        children: d.map((e, n) => {
            if ("<strong>" === e) return (u = !0), null;
            if ("</strong>" === e) return (u = !1), null;
            if (/^<br\s*\/?>$/.test(e)) return Q("br", {}, n);
            if (/^<arrow\s*\/>$/.test(e)) return Q(ij, { class: i }, n);
            if (r) {
                let t = e.match(/^<(\w+)>$/);
                if (t && r[t[1]]) return (h = t[1]), null;
                let i = e.match(/^<\/(\w+)>$/);
                if (i && r[i[1]]) return (h = null), null;
            }
            return e
                ? h && r
                    ? q(r[h], { key: n }, e)
                    : u
                      ? Q("span", { class: t, children: e }, n)
                      : Q(A, { children: e }, n)
                : null;
        }),
    });
};
function iq() {
    let { t: e } = iK(),
        t = (function () {
            let [e, t] = eh(null),
                i = em(null);
            return (
                ep(() => {
                    let e = document.createElement("div");
                    return (
                        e.setAttribute("data-incode-landscape-portal", ""),
                        document.body.appendChild(e),
                        (i.current = e),
                        t(e),
                        () => {
                            e.remove(), (i.current = null);
                        }
                    );
                }, []),
                e
            );
        })();
    return t
        ? eN(
              Q("div", {
                  class: "IncodeLandscapeBlocker",
                  children: [
                      Q("img", {
                          class: "IncodeLandscapeBlocker-icon",
                          src: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='90'%20height='90'%20viewBox='0%200%2090%2090'%3e%3cg%20fill='%2320263D'%3e%3cpath%20d='M84.12%2027.54l-2.58-2.58L65.036%208.456l-2.58-2.58c-3.127-3.127-8.58-2.764-12.157.81L6.69%2050.306c-3.574%203.574-3.938%209.027-.81%2012.158l21.66%2021.66c3.128%203.127%208.58%202.764%2012.157-.81l43.617-43.616c3.574-3.578%203.937-9.03.806-12.158zm-5.524%208.617l-42.439%2042.44c-1.3%201.3-3.28%201.432-4.42.296l-20.63-20.63c-1.14-1.14-1.008-3.12.297-4.42l42.438-42.44c1.302-1.3%203.282-1.432%204.422-.296l1.031%201.032c1.14%201.14%201.009%203.12-.296%204.421-1.302%201.301-1.433%203.281-.297%204.421L69.02%2031.297c1.14%201.14%203.12%201.01%204.421-.296%201.301-1.301%203.281-1.432%204.421-.296l1.031%201.031c1.137%201.14%201.005%203.12-.296%204.421zM51.885%2090a3.135%203.135%200%2001-2.22-5.351l8.925-8.925a3.138%203.138%200%20014.646.233l3.308%204.046c10.114-5.374%2017.081-15.994%2017.178-28.14a3.136%203.136%200%20013.136-3.113h.026a3.14%203.14%200%20013.112%203.161C89.835%2072.746%2072.746%2089.835%2051.911%2090h-.026zM38.115%200a3.135%203.135%200%20012.22%205.351l-8.925%208.925a3.125%203.125%200%2001-2.378.915%203.138%203.138%200%2001-2.272-1.147l-3.308-4.046C13.34%2015.37%206.373%2025.99%206.274%2038.138a3.14%203.14%200%2001-3.139%203.112h-.026a3.139%203.139%200%2001-3.11-3.161C.166%2017.254%2017.255.165%2038.09%200h.026z'/%3e%3c/g%3e%3c/svg%3e",
                          alt: "",
                          "aria-hidden": !0,
                      }),
                      Q("p", { class: "IncodeLandscapeBlocker-text", children: e("common.landscape") }),
                      Q("p", {
                          class: "IncodeLandscapeBlocker-text",
                          children: e(tc() ? "common.rotateIpad" : "common.rotate"),
                      }),
                  ],
              }),
              t,
          )
        : null;
}
function iY({ children: e }) {
    let { isLandscapeMobile: t } = (function () {
        let [e, t] = eh(!1);
        return (
            ep(() => {
                var e, i;
                let r,
                    n = (tw ||=
                        ((e = new tC()),
                        (i = tp()),
                        (r = () => "desktop" !== i && !tc() && "landscape" === e.current),
                        {
                            get isLandscapeMobile() {
                                return r();
                            },
                            subscribe: (t) =>
                                e.subscribe(() => {
                                    t(r());
                                }),
                            cleanup: () => e.cleanup(),
                        }));
                return (
                    t(n.isLandscapeMobile),
                    n.subscribe((e) => {
                        t(e);
                    })
                );
            }, []),
            { isLandscapeMobile: e }
        );
    })();
    return Q("div", { class: "IncodeComponent", children: [e, t ? Q(iq, {}) : null] });
}
var iQ = new Set([0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 104, 120, 200]),
    iX = ({ size: e, className: t, direction: i = "vertical" }) =>
        void 0 === e
            ? Q("div", { class: `IncodeSpacerFlex ${t || ""}` })
            : ("horizontal" === i || "vertical" === i) && "number" == typeof e && iQ.has(e)
              ? Q("div", {
                    class: `${"horizontal" === i ? ({ 0: "IncodeSpacerHorizontal0", 2: "IncodeSpacerHorizontal2", 4: "IncodeSpacerHorizontal4", 8: "IncodeSpacerHorizontal8", 12: "IncodeSpacerHorizontal12", 16: "IncodeSpacerHorizontal16", 20: "IncodeSpacerHorizontal20", 24: "IncodeSpacerHorizontal24", 32: "IncodeSpacerHorizontal32", 40: "IncodeSpacerHorizontal40", 48: "IncodeSpacerHorizontal48", 64: "IncodeSpacerHorizontal64", 80: "IncodeSpacerHorizontal80", 96: "IncodeSpacerHorizontal96", 104: "IncodeSpacerHorizontal104", 120: "IncodeSpacerHorizontal120", 200: "IncodeSpacerHorizontal200" })[e] : ({ 0: "IncodeSpacerVertical0", 2: "IncodeSpacerVertical2", 4: "IncodeSpacerVertical4", 8: "IncodeSpacerVertical8", 12: "IncodeSpacerVertical12", 16: "IncodeSpacerVertical16", 20: "IncodeSpacerVertical20", 24: "IncodeSpacerVertical24", 32: "IncodeSpacerVertical32", 40: "IncodeSpacerVertical40", 48: "IncodeSpacerVertical48", 64: "IncodeSpacerVertical64", 80: "IncodeSpacerVertical80", 96: "IncodeSpacerVertical96", 104: "IncodeSpacerVertical104", 120: "IncodeSpacerVertical120", 200: "IncodeSpacerVertical200" })[e]} ${t || ""}`,
                })
              : Q("div", { class: `${t || ""}` }),
    iJ = (...e) => {
        let t = [];
        for (let i of e)
            if (i) {
                if ("string" == typeof i) t.push(i);
                else if ("object" == typeof i) for (let [e, r] of Object.entries(i)) r && t.push(e);
            }
        return t.join(" ");
    },
    i1 = ({ size: e, className: t }) =>
        Q("svg", {
            width: e,
            height: e,
            viewBox: "0 0 31 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: iJ("IncodeLoadingIconPrimaryIcon", t),
            "aria-hidden": "true",
            children: Q("path", {
                d: "M28.1614 15.2837C29.453 15.2837 30.5186 14.2304 30.3181 12.9545C30.1344 11.7862 29.8129 10.6411 29.3582 9.54344C28.6044 7.72356 27.4995 6.06997 26.1066 4.67709C24.7137 3.28421 23.0601 2.17932 21.2403 1.4255C20.1426 0.970841 18.9974 0.649265 17.8292 0.46563C16.5533 0.265073 15.5 1.33073 15.5 2.62232C15.5 3.91391 16.5601 4.93461 17.8187 5.22473C18.3748 5.35291 18.9206 5.52729 19.4503 5.74672C20.7028 6.26548 21.8407 7.02585 22.7993 7.98441C23.7578 8.94296 24.5182 10.0809 25.037 11.3333C25.2564 11.8631 25.4308 12.4089 25.559 12.965C25.8491 14.2236 26.8698 15.2837 28.1614 15.2837Z",
            }),
        }),
    i2 = ({ size: e, className: t }) =>
        Q("svg", {
            width: e,
            height: e,
            viewBox: "0 0 31 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: iJ("IncodeLoadingIconSecondaryIcon", t),
            "aria-hidden": "true",
            children: [
                Q("title", { children: "Spinner Outer part" }),
                Q("path", {
                    d: "M30.5 15.2837C30.5 23.568 23.7843 30.2837 15.5 30.2837C7.21573 30.2837 0.5 23.568 0.5 15.2837C0.5 6.99942 7.21573 0.283691 15.5 0.283691C23.7843 0.283691 30.5 6.99942 30.5 15.2837ZM5.17725 15.2837C5.17725 20.9848 9.7989 25.6064 15.5 25.6064C21.2011 25.6064 25.8227 20.9848 25.8227 15.2837C25.8227 9.5826 21.2011 4.96095 15.5 4.96095C9.7989 4.96095 5.17725 9.5826 5.17725 15.2837Z",
                }),
            ],
        }),
    i3 = ({ size: e = 30, secondaryClass: t, primaryClass: i }) => {
        let r = em(null);
        return (
            ef(() => {
                if (!r.current) return;
                let e = performance.now() % 1e3;
                r.current.style.animationDelay = `-${e}ms`;
            }, []),
            Q("div", {
                ref: r,
                class: "IncodeLoadingIcon",
                children: [
                    Q(i2, { size: e, className: t }),
                    Q("div", { class: "IncodeLoadingIconPrimary", children: Q(i1, { size: e, className: i }) }),
                ],
            })
        );
    },
    i0 = eP(({ children: e, className: t, ...i }, r) =>
        Q("h2", { ref: r, class: `IncodeTitle ${t ?? ""}`, ...i, children: e }),
    ),
    i6 = eP(({ children: e, className: t, ...i }, r) =>
        Q("h1", { ref: r, class: iJ("IncodeTypographyH1", t), ...i, children: e }),
    ),
    i5 = ({ children: e, className: t }) => Q("h4", { class: iJ("IncodeTypographyH4", t), children: e }),
    i4 = { small: 24, medium: 48, large: 64 },
    i9 = ({ title: e, subtitle: t, size: i = "medium", fullScreen: r = !0, className: n }) => {
        let o = i4[i],
            s = em(null);
        return (
            ep(() => {
                e && s.current?.focus();
            }, [e]),
            Q("div", {
                class: iJ("IncodeSpinner", r && "IncodeSpinnerFullScreen", n),
                "data-testid": "spinner",
                "data-title": e,
                "data-subtitle": t,
                "data-size": i,
                role: "status",
                "aria-live": "polite",
                children: Q("div", {
                    class: "IncodeSpinnerContent",
                    children: [
                        Q(i3, { size: o }),
                        (e || t) &&
                            Q(A, {
                                children: [
                                    Q(iX, { size: 16 }),
                                    Q("div", {
                                        class: "IncodeSpinnerText",
                                        children: [
                                            e &&
                                                Q(i0, {
                                                    ref: s,
                                                    tabIndex: -1,
                                                    className: "IncodeSpinnerTitle",
                                                    children: e,
                                                }),
                                            t &&
                                                Q(A, {
                                                    children: [
                                                        e && Q(iX, { size: 12 }),
                                                        Q("p", { class: "IncodeSpinnerSubtitle", children: t }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            })
        );
    },
    i8 = ({ spinnerConfig: e, className: t, hideText: i = !1 }) => {
        let { t: r } = iK();
        return Q(i9, {
            title: i ? void 0 : (e?.title ?? r("loadingCircle.hangOn")),
            subtitle: i ? void 0 : (e?.subtitle ?? r("loadingCircle.validating")),
            size: e?.size ?? "large",
            fullScreen: !0,
            className: t,
        });
    },
    i7 = () => Q(i8, {}),
    re = {},
    rt = new Set();
function ri(e) {
    return (
        rt.add(e),
        () => {
            rt.delete(e);
        }
    );
}
function rr() {
    return re;
}
function rn(e) {
    for (let t of e) if (void 0 !== t) return t;
}
var ro = () =>
        Q("svg", {
            width: "121",
            height: "15",
            viewBox: "0 0 121 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: [
                Q("title", { children: "Verified by Incode" }),
                Q("path", {
                    d: "M14.0437 7.25848C14.0437 6.28039 13.5263 5.40448 12.7428 4.92273C12.9498 4.03223 12.6985 3.05413 11.9889 2.3534C11.2793 1.65268 10.3037 1.4191 9.38711 1.60888C8.89928 0.835165 8.01231 0.324219 7.02186 0.324219C6.03141 0.324219 5.14443 0.835165 4.6566 1.60888C3.75485 1.4045 2.76439 1.65268 2.05482 2.3534C1.34524 3.05413 1.10871 4.01763 1.30089 4.92273C0.5174 5.41908 0 6.28039 0 7.25848C0 8.23658 0.5174 9.11249 1.30089 9.59424C1.09393 10.4847 1.34524 11.4628 2.05482 12.1636C2.76439 12.8643 3.74006 13.1125 4.6566 12.9081C5.15922 13.6818 6.03141 14.1928 7.02186 14.1928C8.01231 14.1928 8.8845 13.6818 9.38711 12.9081C10.2889 13.1125 11.2793 12.8643 11.9889 12.1636C12.6985 11.4628 12.9498 10.4993 12.7428 9.59424C13.5263 9.11249 14.0437 8.23658 14.0437 7.25848ZM5.55835 9.55044L4.12442 8.13439C3.85833 7.87162 3.85833 7.46286 4.12442 7.20009C4.39051 6.93732 4.80443 6.93732 5.07052 7.20009L6.04619 8.14899L8.98798 5.2439C9.25407 4.98113 9.66799 4.98113 9.93408 5.2439C10.2002 5.50667 10.2002 5.91543 9.93408 6.1782L6.50446 9.55044C6.23837 9.81321 5.82445 9.81321 5.55835 9.55044Z",
                    fill: "#006AFF",
                }),
                Q("g", {
                    clipPath: "url(#clip0_3596_4926)",
                    children: Q("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M99.5615 4.77612C100.75 4.77612 101.65 5.10527 102.256 5.76745C102.859 6.42644 103.159 7.37568 103.159 8.61153C103.159 9.84729 102.85 10.8036 102.227 11.4773C101.602 12.1527 100.716 12.4896 99.5759 12.4896C98.3971 12.4896 97.5036 12.1576 96.9027 11.491L96.8294 11.4065C96.2795 10.7465 96.0061 9.81371 96.0061 8.61153C96.0061 6.06704 97.2 4.77612 99.5615 4.77612ZM116.24 4.77595C117.393 4.77595 118.246 5.14653 118.789 5.88871C119.303 6.59111 119.565 7.55709 119.578 8.78488L119.578 9.04737H114.512C114.571 9.67854 114.769 10.1565 115.104 10.4868C115.454 10.8329 115.956 11.0069 116.615 11.0069C117.05 11.0069 117.464 10.9536 117.858 10.8466C118.252 10.7404 118.601 10.603 118.903 10.436L119.045 10.3576V11.9732L118.988 11.9979C118.227 12.326 117.354 12.4894 116.369 12.4894C115.258 12.4894 114.38 12.1553 113.741 11.4857C113.103 10.8174 112.786 9.87133 112.786 8.65404C112.786 7.40904 113.086 6.45047 113.689 5.78164C114.294 5.11083 115.147 4.77595 116.24 4.77595ZM111.218 1.95898V10.6742C111.218 11.082 111.046 11.4288 110.708 11.7069C110.379 11.9768 109.968 12.175 109.474 12.3018C108.987 12.427 108.484 12.4894 107.966 12.4894C106.915 12.4894 106.047 12.1952 105.365 11.6057C104.678 11.0111 104.338 9.9826 104.338 8.52554C104.338 7.35747 104.629 6.43997 105.212 5.77535C105.799 5.10823 106.666 4.77591 107.807 4.77591C108.074 4.77591 108.38 4.80944 108.727 4.87649C109.019 4.93425 109.286 5.01533 109.528 5.12005V1.95898H111.218ZM92.4984 4.78985C93.2888 4.78985 94.041 4.93436 94.7545 5.22328L94.8137 5.24725V6.79043L94.6812 6.7353C93.9615 6.43578 93.3061 6.2866 92.7146 6.2866C91.9793 6.2866 91.4366 6.46615 91.0815 6.82095C90.7268 7.17578 90.5468 7.74741 90.5468 8.54031C90.5468 9.37268 90.7229 9.97449 91.0696 10.3476C91.4139 10.719 91.9746 10.907 92.7578 10.907C93.397 10.907 94.0415 10.754 94.6911 10.4472L94.8277 10.3826V11.9301L94.7711 11.955C94.0679 12.2641 93.315 12.4184 92.5128 12.4184C91.5213 12.4184 90.6848 12.1492 90.0066 11.6105L89.9061 11.5276L89.8297 11.4597C89.1796 10.8583 88.8568 9.9208 88.8568 8.65412C88.8568 7.30126 89.1995 6.31575 89.8903 5.70316C90.5765 5.0943 91.4474 4.78985 92.4984 4.78985ZM78.7839 4.98923L78.7987 12.2763H77.0797V4.98923H78.7839ZM84.2386 4.78989C85.269 4.78989 86.0353 5.00451 86.536 5.43937C87.0393 5.87696 87.2891 6.55203 87.2891 7.45911V12.2762H85.5847V7.6587C85.5847 6.7173 85.058 6.25861 83.9647 6.25861C83.5079 6.25861 83.0683 6.3224 82.6463 6.44993L82.4888 6.50074V12.2762H80.784V5.56576L80.836 5.53956C81.2757 5.31813 81.8089 5.13805 82.4373 4.99807L82.6453 4.95436C83.1971 4.84473 83.728 4.78989 84.2386 4.78989ZM99.5615 6.21555C98.8889 6.21555 98.4164 6.41444 98.133 6.8093C97.8433 7.21334 97.6965 7.8138 97.6965 8.61153C97.6965 9.40924 97.8479 10.014 98.1472 10.4277C98.44 10.8325 98.908 11.0355 99.5615 11.0355C100.829 11.0355 101.455 10.2427 101.455 8.61153C101.455 7.79594 101.302 7.19175 100.999 6.79759C100.702 6.41053 100.225 6.21555 99.5615 6.21555ZM108.023 6.24421C106.715 6.24421 106.071 7.00047 106.071 8.55441C106.071 9.33381 106.221 9.93931 106.517 10.3723C106.804 10.7945 107.312 11.0069 108.052 11.0069C108.485 11.0069 108.847 10.9565 109.138 10.8561C109.384 10.7709 109.507 10.6712 109.525 10.562L109.528 10.532V6.61748L109.42 6.56175C109.238 6.47248 109.04 6.40126 108.829 6.34843C108.552 6.27898 108.283 6.24421 108.023 6.24421ZM116.196 6.18776C115.709 6.18776 115.334 6.31243 115.065 6.56036C114.828 6.77872 114.661 7.13776 114.567 7.6393L114.548 7.74896H117.833L117.816 7.63679C117.737 7.16033 117.582 6.80857 117.354 6.57891C117.095 6.31917 116.711 6.18776 116.196 6.18776ZM78.8418 2.45642V3.99628H77.0361V2.45642H78.8418Z",
                        fill: "#006AFF",
                    }),
                }),
                Q("path", {
                    d: "M67.0422 14.1613L68.3952 11.1253H68.0762L65.8872 6.19727H67.0752L68.8132 10.2233L70.5622 6.19727H71.7172L68.1972 14.1613H67.0422Z",
                    fill: "var(--text-body-500-secondary)",
                }),
                Q("path", {
                    d: "M63.0542 11.8733C62.7536 11.8733 62.4786 11.8293 62.2292 11.7413C61.9872 11.6606 61.7746 11.547 61.5912 11.4003C61.4079 11.2536 61.2539 11.085 61.1292 10.8943L61.0192 11.7413H60.0292V3.82129H61.1292V7.06629C61.3052 6.78762 61.5509 6.55296 61.8662 6.36229C62.1889 6.16429 62.5849 6.06529 63.0542 6.06529C63.5822 6.06529 64.0479 6.19362 64.4512 6.45029C64.8546 6.69962 65.1662 7.04429 65.3862 7.48429C65.6136 7.91696 65.7272 8.41562 65.7272 8.98029C65.7272 9.53029 65.6136 10.0253 65.3862 10.4653C65.1662 10.9053 64.8546 11.25 64.4512 11.4993C64.0479 11.7486 63.5822 11.8733 63.0542 11.8733ZM62.8782 10.9163C63.2156 10.9163 63.5126 10.8356 63.7692 10.6743C64.0332 10.513 64.2386 10.2856 64.3852 9.99229C64.5392 9.69896 64.6162 9.35796 64.6162 8.96929C64.6162 8.58062 64.5392 8.24329 64.3852 7.95729C64.2386 7.66396 64.0332 7.43662 63.7692 7.27529C63.5126 7.10662 63.2156 7.02229 62.8782 7.02229C62.5336 7.02229 62.2292 7.10662 61.9652 7.27529C61.7086 7.43662 61.5069 7.66396 61.3602 7.95729C61.2136 8.24329 61.1402 8.58062 61.1402 8.96929C61.1402 9.35796 61.2136 9.69896 61.3602 9.99229C61.5069 10.2856 61.7086 10.513 61.9652 10.6743C61.2292 10.8356 62.5336 10.9163 62.8782 10.9163Z",
                    fill: "var(--text-body-500-secondary)",
                }),
                Q("path", {
                    d: "M52.9768 11.8733C52.4488 11.8733 51.9831 11.7486 51.5798 11.4993C51.1764 11.2426 50.8611 10.898 50.6338 10.4653C50.4138 10.0253 50.3038 9.52662 50.3038 8.96929C50.3038 8.40462 50.4138 7.90596 50.6338 7.47329C50.8611 7.04062 51.1764 6.69962 51.5798 6.45029C51.9904 6.19362 52.4598 6.06529 52.9878 6.06529C53.4204 6.06529 53.8018 6.15329 54.1318 6.32929C54.4618 6.49796 54.7184 6.73996 54.9018 7.05529V3.82129H56.0018V11.7413H55.0118L54.9018 10.8833C54.7918 11.052 54.6488 11.2133 54.4728 11.3673C54.2968 11.514 54.0841 11.635 53.8348 11.7303C53.5854 11.8256 53.2994 11.8733 52.9768 11.8733ZM53.1528 10.9163C53.4974 10.9163 53.8018 10.8356 54.0658 10.6743C54.3298 10.513 54.5314 10.2856 54.6708 9.99229C54.8174 9.69896 54.8908 9.35796 54.8908 8.96929C54.8908 8.58062 54.8174 8.24329 54.6708 7.95729C54.5314 7.66396 54.3298 7.43662 54.0658 7.27529C53.8018 7.10662 53.4974 7.02229 53.1528 7.02229C52.8228 7.02229 52.5258 7.10662 52.2618 7.27529C51.9978 7.43662 51.7924 7.66396 51.6458 7.95729C51.4991 8.24329 51.4258 8.58062 51.4258 8.96929C51.4258 9.35796 51.4991 9.69896 51.6458 9.99229C51.7924 10.2856 51.9978 10.513 52.2618 10.6743C52.5258 10.8356 52.8228 10.9163 53.1528 10.9163Z",
                    fill: "var(--text-body-500-secondary)",
                }),
                Q("path", {
                    d: "M46.7962 11.8734C46.2682 11.8734 45.7989 11.7524 45.3882 11.5104C44.9776 11.2684 44.6549 10.9311 44.4202 10.4984C44.1929 10.0658 44.0792 9.56343 44.0792 8.99143C44.0792 8.40476 44.1929 7.8951 44.4202 7.46243C44.6549 7.02243 44.9776 6.68143 45.3882 6.43943C45.7989 6.1901 46.2756 6.06543 46.8182 6.06543C47.3609 6.06543 47.8266 6.18643 48.2152 6.42843C48.6039 6.67043 48.9046 6.9931 49.1172 7.39643C49.3299 7.79243 49.4362 8.23243 49.4362 8.71643C49.4362 8.78976 49.4326 8.87043 49.4252 8.95843C49.4252 9.0391 49.4216 9.13076 49.4142 9.23343H44.8822V8.45243H48.3362C48.3142 7.99043 48.1602 7.6311 47.8742 7.37443C47.5882 7.11043 47.2326 6.97843 46.8072 6.97843C46.5066 6.97843 46.2316 7.0481 45.9822 7.18743C45.7329 7.31943 45.5312 7.51743 45.3772 7.78143C45.2306 8.0381 45.1572 8.36443 45.1572 8.76043V9.06843C45.1572 9.4791 45.2306 9.82743 45.3772 10.1134C45.5312 10.3921 45.7329 10.6048 45.9822 10.7514C46.2316 10.8908 46.5029 10.9604 46.7962 10.9604C47.1482 10.9604 47.4379 10.8834 47.6652 10.7294C47.8926 10.5754 48.0612 10.3664 48.1712 10.1024H49.2712C49.1759 10.4398 49.0146 10.7441 48.7872 11.0154C48.5599 11.2794 48.2776 11.4884 47.9402 11.6424C47.6102 11.7964 47.2289 11.8734 46.7962 11.8734Z",
                    fill: "var(--text-body-500-secondary)",
                }),
                Q("path", {
                    d: "M38.3714 11.7413V7.13229H37.5574V6.19729H38.3714V5.44929C38.3714 5.06796 38.4337 4.75629 38.5584 4.51429C38.6904 4.27229 38.881 4.09629 39.1304 3.98629C39.3797 3.87629 39.6804 3.82129 40.0324 3.82129H40.6044V4.75629H40.2084C39.9444 4.75629 39.7537 4.81129 39.6364 4.92129C39.5264 5.02396 39.4714 5.20729 39.4714 5.47129V6.19729H42.8484V11.7413H41.7484V7.13229H39.4714V11.7413H38.3714ZM42.3094 5.24029C42.104 5.24029 41.9317 5.17429 41.7924 5.04229C41.653 4.91029 41.5834 4.74162 41.5834 4.53629C41.5834 4.33829 41.653 4.17696 41.7924 4.05229C41.9317 3.92029 42.104 3.85429 42.3094 3.85429C42.522 3.85429 42.6944 3.92029 42.8264 4.05229C42.9657 4.17696 43.0354 4.33829 43.0354 4.53629C43.0354 4.74162 42.9657 4.91029 42.8264 5.04229C42.6944 5.17429 42.522 5.24029 42.3094 5.24029Z",
                    fill: "var(--text-body-500-secondary)",
                }),
                Q("path", {
                    d: "M35.547 11.7416V6.1976H36.647V11.7416H35.547ZM36.108 5.1526C35.8953 5.1526 35.7193 5.0866 35.58 4.9546C35.448 4.8226 35.382 4.65393 35.382 4.4486C35.382 4.2506 35.448 4.08927 35.58 3.9646C35.7193 3.8326 35.8953 3.7666 36.108 3.7666C36.3133 3.7666 36.4856 3.8326 36.625 3.9646C36.7643 4.08927 36.834 4.2506 36.834 4.4486C36.834 4.65393 36.7643 4.8226 36.625 4.9546C36.4856 5.0866 36.3133 5.1526 36.108 5.1526Z",
                    fill: "var(--text-body-500-secondary)",
                }),
                Q("path", {
                    d: "M31.4153 11.7414V6.19743H32.4053L32.5043 7.24243C32.6289 6.9931 32.7903 6.7841 32.9883 6.61543C33.1863 6.43943 33.4173 6.30376 33.6813 6.20843C33.9526 6.1131 34.2606 6.06543 34.6053 6.06543V7.23143H34.2093C33.9819 7.23143 33.7656 7.26076 33.5603 7.31943C33.3549 7.37076 33.1716 7.46243 33.0103 7.59443C32.8563 7.72643 32.7353 7.9061 32.6473 8.13343C32.5593 8.36076 32.5153 8.6431 32.5153 8.98043V11.7414H31.4153Z",
                    fill: "var(--text-body-500-secondary)",
                }),
                Q("path", {
                    d: "M27.6988 11.8734C27.1708 11.8734 26.7015 11.7524 26.2908 11.5104C25.8801 11.2684 25.5575 10.9311 25.3228 10.4984C25.0955 10.0658 24.9818 9.56343 24.9818 8.99143C24.9818 8.40476 25.0955 7.8951 25.3228 7.46243C25.5575 7.02243 25.8801 6.68143 26.2908 6.43943C26.7015 6.1901 27.1781 6.06543 27.7208 6.06543C28.2635 6.06543 28.7291 6.18643 29.1178 6.42843C29.5065 6.67043 29.8071 6.9931 30.0198 7.39643C30.2325 7.79243 30.3388 8.23243 30.3388 8.71643C30.3388 8.78976 30.3351 8.87043 30.3278 8.95843C30.3278 9.0391 30.3241 9.13076 30.3168 9.23343H25.7848V8.45243H29.2388C29.2168 7.99043 29.0628 7.6311 28.7768 7.37443C28.4908 7.11043 28.1351 6.97843 27.7098 6.97843C27.4091 6.97843 27.1341 7.0481 26.8848 7.18743C26.6355 7.31943 26.4338 7.51743 26.2798 7.78143C26.1331 8.0381 26.0598 8.36443 26.0598 8.76043V9.06843C26.0598 9.4791 26.1331 9.82743 26.2798 10.1134C26.4338 10.3921 26.6355 10.6048 26.8848 10.7514C27.1341 10.8908 27.4055 10.9604 27.6988 10.9604C28.0508 10.9604 28.3405 10.8834 28.5678 10.7294C28.7951 10.5754 28.9638 10.3664 29.0738 10.1024H30.1738C30.0785 10.4398 29.9171 10.7441 29.6898 11.0154C29.4625 11.2794 29.1801 11.4884 28.8428 11.6424C28.5128 11.7964 28.1315 11.8734 27.6988 11.8734Z",
                    fill: "var(--text-body-500-secondary)",
                }),
                Q("path", {
                    d: "M21.2482 11.7413L19.1692 6.19727H20.3242L21.8972 10.6853L23.4812 6.19727H24.6142L22.5462 11.7413H21.2482Z",
                    fill: "var(--text-body-500-secondary)",
                }),
                Q("defs", {
                    children: Q("clipPath", {
                        id: "clip0_3596_4926",
                        children: Q("rect", {
                            width: "43.9938",
                            height: "11.7457",
                            fill: "white",
                            transform: "translate(76.1276 1.35156)",
                        }),
                    }),
                }),
            ],
        }),
    rs = ({
        title: e,
        titleId: t,
        subtitle: i,
        titleTopSlot: r,
        className: n,
        logo: o,
        children: s,
        hideHeader: a,
        hideFooterBranding: l,
        "data-testid": c,
        "data-permission-status": d,
    }) => {
        var u, h, p, f, m, g;
        let C,
            v,
            y = em(null);
        ep(() => {
            y.current?.focus();
        }, []);
        let w =
                ((u = {
                    hideHeader: a,
                    hideFooterBranding: l,
                    logo: o,
                    defaultLogoSrc:
                        "data:image/svg+xml,%3csvg%20width='76'%20height='20'%20viewBox='0%200%2076%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.1687%206.01811C42.2312%206.01811%2043.7927%206.59655%2044.8446%207.76024C45.8919%208.91831%2046.4126%2010.5865%2046.4126%2012.7583C46.4126%2014.93%2045.8748%2016.6105%2044.794%2017.7944C43.7102%2018.9815%2042.1729%2019.5735%2040.1937%2019.5735C38.1479%2019.5735%2036.5973%2018.99%2035.5546%2017.8187L35.4273%2017.6701C34.4729%2016.5101%2033.9984%2014.871%2033.9984%2012.7583C33.9984%208.28671%2036.0703%206.01811%2040.1687%206.01811ZM69.1127%206.01781C71.1144%206.01781%2072.5953%206.66904%2073.5373%207.97333C74.4288%209.2077%2074.8837%2010.9053%2074.9066%2013.0629L74.9058%2013.5242H66.1149C66.2174%2014.6334%2066.5602%2015.4734%2067.141%2016.0538C67.7488%2016.662%2068.6195%2016.9679%2069.7639%2016.9679C70.5188%2016.9679%2071.2373%2016.8742%2071.921%2016.6862C72.6048%2016.4995%2073.2105%2016.2581%2073.735%2015.9646L73.9814%2015.8267V18.666L73.8821%2018.7093C72.5607%2019.286%2071.0464%2019.5732%2069.3379%2019.5732C67.4088%2019.5732%2065.8853%2018.986%2064.7769%2017.8093C63.6699%2016.6348%2063.1183%2014.9722%2063.1183%2012.833C63.1183%2010.6451%2063.6389%208.96055%2064.6862%207.78517C65.7359%206.60632%2067.2157%206.01781%2069.1127%206.01781ZM60.3976%201.06738V16.3832C60.3976%2017.0998%2060.0996%2017.7092%2059.5124%2018.198C58.9425%2018.6724%2058.2282%2019.0207%2057.3718%2019.2435C56.5257%2019.4635%2055.6531%2019.5731%2054.7534%2019.5731C52.9298%2019.5731%2051.4237%2019.056%2050.2406%2018.0202C49.0485%2016.9752%2048.4588%2015.1678%2048.4588%2012.6072C48.4588%2010.5545%2048.9627%208.9421%2049.9753%207.77411C50.9938%206.60175%2052.4982%206.01774%2054.4782%206.01774C54.9416%206.01774%2055.4735%206.07665%2056.0742%206.19449C56.582%206.296%2057.0453%206.43849%2057.4648%206.62252V1.06738H60.3976ZM27.911%206.04223C29.2828%206.04223%2030.5881%206.29619%2031.8264%206.80393L31.9291%206.84604V9.55797L31.6992%209.46109C30.4503%208.93473%2029.3127%208.67257%2028.2863%208.67257C27.0102%208.67257%2026.0684%208.98809%2025.4521%209.61162C24.8366%2010.2352%2024.5242%2011.2397%2024.5242%2012.6331C24.5242%2014.0959%2024.8298%2015.1535%2025.4314%2015.8092C26.029%2016.4619%2027.002%2016.7923%2028.3613%2016.7923C29.4706%2016.7923%2030.589%2016.5234%2031.7164%2015.9842L31.9534%2015.8708V18.5903L31.8552%2018.634C30.6349%2019.1773%2029.3283%2019.4483%2027.936%2019.4483C26.2154%2019.4483%2024.7637%2018.9753%2023.5868%2018.0285L23.4123%2017.8829L23.2796%2017.7636C22.1516%2016.7067%2021.5914%2015.0592%2021.5914%2012.8332C21.5914%2010.4557%2022.186%208.72379%2023.3849%207.64725C24.5757%206.57726%2026.0871%206.04223%2027.911%206.04223ZM4.11045%206.39262L4.13613%2019.1987H1.15293V6.39262H4.11045ZM13.5766%206.0423C15.365%206.0423%2016.6948%206.41948%2017.5636%207.18368C18.4372%207.95269%2018.8706%209.13902%2018.8706%2010.7331V19.1984H15.9127V11.0838C15.9127%209.42945%2014.9988%208.62337%2013.1013%208.62337C12.3086%208.62337%2011.5458%208.73548%2010.8133%208.95959L10.5401%209.04888V19.1984H7.58147V7.40579L7.67177%207.35974C8.43481%206.97061%209.36013%206.65415%2010.4506%206.40815L10.8116%206.33134C11.7692%206.13867%2012.6905%206.0423%2013.5766%206.0423ZM40.1687%208.5477C39.0014%208.5477%2038.1814%208.89722%2037.6896%209.59114C37.1869%2010.3012%2036.932%2011.3564%2036.932%2012.7583C36.932%2014.1602%2037.1948%2015.223%2037.7142%2015.9499C38.2224%2016.6613%2039.0345%2017.0182%2040.1687%2017.0182C42.3685%2017.0182%2043.4555%2015.6249%2043.4555%2012.7583C43.4555%2011.325%2043.1888%2010.2632%2042.6636%209.57056C42.1472%208.89036%2041.3203%208.5477%2040.1687%208.5477ZM54.8535%208.59807C52.5835%208.59807%2051.4659%209.9271%2051.4659%2012.6579C51.4659%2014.0276%2051.7253%2015.0917%2052.2391%2015.8527C52.7378%2016.5945%2053.6185%2016.9678%2054.9035%2016.9678C55.6556%2016.9678%2056.2834%2016.8792%2056.7876%2016.7028C57.2156%2016.553%2057.4279%2016.378%2057.4604%2016.186L57.4648%2016.1332V9.25404L57.2778%209.15611C56.9611%208.99923%2056.6189%208.87406%2056.2512%208.78123C55.7705%208.65917%2055.3045%208.59807%2054.8535%208.59807ZM69.0377%208.49888C68.192%208.49888%2067.5412%208.71795%2067.0743%209.15366C66.6631%209.5374%2066.3731%2010.1684%2066.2101%2011.0498L66.1771%2011.2425H71.8784L71.8489%2011.0453C71.7111%2010.208%2071.4421%209.58986%2071.0461%209.18626C70.5969%208.72981%2069.9303%208.49888%2069.0377%208.49888ZM4.21085%201.94156V4.64764H1.07715V1.94156H4.21085Z'%20fill='%23006AFF'/%3e%3c/svg%3e",
                }),
                (f = (p = eh({ t: { __: (h = rr()), u: rr } }))[0].t),
                (m = p[1]),
                ef(
                    function () {
                        (f.__ = h), (f.u = rr), eI(f) && m({ t: f });
                    },
                    [ri, h, rr],
                ),
                ep(
                    function () {
                        return (
                            eI(f) && m({ t: f }),
                            ri(function () {
                                eI(f) && m({ t: f });
                            })
                        );
                    },
                    [ri],
                ),
                (C = h),
                (g = { ...u, uiConfig: C }),
                (v = rn([g.logo?.height, g.uiConfig.logoHeight])),
                {
                    hideHeader: rn([g.hideHeader, g.uiConfig.hideHeader]) ?? !1,
                    hideFooterBranding: rn([g.hideFooterBranding, g.uiConfig.hideFooterBranding]) ?? !1,
                    logoSrc: rn([g.logo?.src, g.uiConfig.logoSrc]) ?? g.defaultLogoSrc,
                    logoHeightPx:
                        (function (e) {
                            if (!e) return;
                            if (/^\d+$/.test(e)) return Number(e);
                            let t = e.match(/^(\d+)px$/);
                            if (t) return Number(t[1]);
                        })(v) ?? 80,
                }),
            _ = e || i || r;
        return Q("div", {
            class: `IncodePageContainer ${n ?? ""}`,
            "data-testid": c,
            "data-permission-status": d,
            children: Q("main", {
                class: "IncodePageInner",
                children: [
                    !w.hideHeader &&
                        Q("header", {
                            class: "IncodePageHeader",
                            children: Q("img", {
                                src: w.logoSrc,
                                height: w.logoHeightPx,
                                class: "IncodePageLogo",
                                "aria-hidden": "true",
                            }),
                        }),
                    _
                        ? Q(A, {
                              children: [
                                  Q(iX, { size: w.hideHeader ? 40 : 24 }),
                                  Q("div", {
                                      class: "IncodePageTitleContainer",
                                      children: [
                                          r
                                              ? Q(A, {
                                                    children: [
                                                        Q("div", { class: "IncodePageTitleTopSlot", children: r }),
                                                        Q(iX, { size: 12 }),
                                                    ],
                                                })
                                              : null,
                                          e
                                              ? Q("h2", {
                                                    ref: y,
                                                    id: t,
                                                    class: "IncodePageTitle",
                                                    tabIndex: -1,
                                                    children: e,
                                                })
                                              : null,
                                          i
                                              ? Q(A, {
                                                    children: [
                                                        Q(iX, { size: 12 }),
                                                        Q("p", { class: "IncodePageSubtitle", children: i }),
                                                    ],
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          })
                        : null,
                    Q("div", { class: "IncodePageContent", children: s }),
                    w.hideFooterBranding
                        ? null
                        : Q("div", {
                              class: "IncodePageFooter",
                              children: Q("div", { class: "IncodePageFooterInner", children: Q(ro, {}) }),
                          }),
                ],
            }),
        });
    },
    ra = { primary: "IncodeButtonPrimary", secondary: "IncodeButtonSecondary", link: "IncodeButtonLink" },
    rl = { L: "IncodeButtonL", M: "IncodeButtonM", S: "IncodeButtonS" },
    rc = eP((e, t) => {
        let {
                isLoading: i = !1,
                variant: r = "primary",
                size: n = "L",
                icon: o,
                class: s,
                type: a = "button",
                children: l,
                disabled: c,
                ...d
            } = e,
            u = !l && !!o,
            h = i && "L" === n;
        return Q("button", {
            ref: t,
            ...d,
            class: iJ("IncodeButton", ra[r], rl[n], h ? "IncodeButtonLoading" : "", u ? "IncodeButtonIconOnly" : "", s),
            disabled: c || h,
            type: a,
            children: h ? Q(i3, { size: 30 }) : u ? o : o ? Q(A, { children: [l, o] }) : l,
        });
    }),
    rd = ({ size: e = 64 }) =>
        Q("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            viewBox: "0 0 64 64",
            fill: "none",
            class: "IncodeSuccessIcon",
            "aria-hidden": "true",
            children: [
                Q("title", { children: "status" }),
                Q("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M32 6.66669C18.032 6.66669 6.66663 18.032 6.66663 32C6.66663 45.9707 18.032 57.3334 32 57.3334C45.968 57.3334 57.3333 45.9707 57.3333 32C57.3333 18.032 45.968 6.66669 32 6.66669Z",
                    fill: "var(--icon-status-positive)",
                }),
                Q("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M42.648 27.2587L30.3333 39.5733C29.9413 39.9653 29.432 40.16 28.92 40.16C28.4053 40.16 27.896 39.9653 27.504 39.5733L21.3466 33.416C20.5653 32.6347 20.5653 31.368 21.3466 30.5867C22.128 29.8053 23.392 29.8053 24.1733 30.5867L28.92 35.3307L39.8186 24.4293C40.6 23.648 41.8666 23.648 42.648 24.4293C43.4293 25.2107 43.4293 26.4773 42.648 27.2587Z",
                    fill: "var(--icon-neutral-0)",
                }),
            ],
        }),
    ru = ({ size: e = 32 }) =>
        Q("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            viewBox: "0 0 64 64",
            fill: "none",
            class: "IncodeErrorIcon",
            "aria-hidden": "true",
            children: [
                Q("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M32 6.66669C18.032 6.66669 6.66669 18.0294 6.66669 32C6.66669 45.968 18.032 57.3334 32 57.3334C45.968 57.3334 57.3334 45.968 57.3334 32C57.3334 18.0294 45.968 6.66669 32 6.66669Z",
                    fill: "var(--icon-status-negative)",
                }),
                Q("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M39.6426 39.6368C39.2533 40.0261 38.7413 40.2235 38.2293 40.2235C37.7146 40.2235 37.2053 40.0261 36.8133 39.6368L31.9973 34.8181L27.1946 39.6208C26.4133 40.4021 25.1467 40.4021 24.3653 39.6208C23.5867 38.8395 23.5867 37.5755 24.3653 36.7941L29.168 31.9915L24.3627 27.1835C23.5813 26.4021 23.5813 25.1381 24.3627 24.3568C25.144 23.5755 26.408 23.5755 27.1893 24.3568L31.9946 29.1621L36.8 24.3595C37.5813 23.5781 38.8453 23.5781 39.6266 24.3595C40.408 25.1381 40.408 26.4048 39.6266 27.1861L34.824 31.9915L39.6426 36.8075C40.424 37.5888 40.424 38.8555 39.6426 39.6368Z",
                    fill: "var(--icon-neutral-0)",
                }),
            ],
        }),
    rh = ({ size: e = 32 }) =>
        Q("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            viewBox: "0 0 32 32",
            fill: "none",
            class: "IncodeWarningIcon",
            "aria-hidden": "true",
            children: [
                Q("title", { children: "Warning" }),
                Q("path", {
                    d: "M16 0C24.848 0 32 7.1696 32 16C32 24.8336 24.848 32 16 32C7.168 32 0 24.8336 0 16C0 7.1696 7.168 0 16 0ZM16 20.6896C15.232 20.6896 14.608 21.3136 14.608 22.0816C14.608 22.8496 15.232 23.4896 16.016 23.4896C16.784 23.4896 17.408 22.8496 17.408 22.0816C17.408 21.3136 16.784 20.6896 16 20.6896ZM16 8.528C15.232 8.528 14.592 9.1696 14.592 9.936V17.008C14.592 17.7776 15.232 18.4 16 18.4C16.768 18.4 17.392 17.7776 17.392 17.008V9.936C17.392 9.1696 16.768 8.528 16 8.528Z",
                    fill: "var(--icon-status-warning)",
                }),
            ],
        }),
    rp = ({ width: e = 14, height: t = 14, class: i, fillColor: r = "var(--icon-neutral-800)" }) =>
        Q("svg", {
            width: e,
            height: t,
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: `IncodeCloseIcon ${i || ""}`,
            "aria-hidden": "true",
            children: Q("path", {
                d: "M24.0578 6.05722C24.5785 5.53676 25.422 5.53667 25.9426 6.05722C26.4633 6.57792 26.4633 7.42226 25.9426 7.94296L17.885 15.9996L25.9426 24.0572C26.4633 24.5779 26.4633 25.4223 25.9426 25.943C25.422 26.4633 24.5785 26.4632 24.0578 25.943L16.0002 17.8853L7.94259 25.943C7.422 26.4633 6.57847 26.4632 6.05782 25.943C5.53712 25.4223 5.53712 24.5779 6.05782 24.0572L14.1145 15.9996L6.05782 7.94296C5.53712 7.42226 5.53712 6.57792 6.05782 6.05722C6.57851 5.53677 7.42196 5.53667 7.94259 6.05722L16.0002 14.1148L24.0578 6.05722Z",
                fill: r,
            }),
        }),
    rf = "IncodeModalScrollLock",
    rm = "data-incode-modal-initial-focus",
    rg =
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function rC(e) {
    return Array.from(e.querySelectorAll(rg));
}
function rv(e) {
    try {
        return e.matches(rg);
    } catch {
        return !1;
    }
}
function ry(e) {
    ep(() => {
        if (!e) return;
        let t = document.querySelector(".IncodeComponent");
        return (
            (t ?? document.body).classList.add(rf),
            () => {
                (t ?? document.body).classList.remove(rf);
            }
        );
    }, [e]);
}
function rw(e, t, i) {
    ep(() => {
        if (!e || !t) return;
        let r = (e) => {
            "Escape" === e.key && (e.preventDefault(), i());
        };
        return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
    }, [e, t, i]);
}
function r_(e, t, i = !0, r) {
    ep(() => {
        if (!e) return;
        let n = document.activeElement,
            o = r?.current ?? null;
        if (i) {
            let e = t.current;
            e &&
                (function (e) {
                    let t = e.querySelector("[autofocus]");
                    if (t && rv(t)) return t;
                    let i = e.querySelector(`[${rm}]`);
                    if (i) {
                        if (rv(i)) return i;
                        let e = i.querySelector(rg);
                        if (e) return e;
                    }
                    return rC(e)[0] ?? e;
                })(e).focus();
        }
        return () => {
            o && "function" == typeof o.focus ? o.focus() : n && "function" == typeof n.focus && n.focus();
        };
    }, [e, t, i, r]);
}
function rb(e, t) {
    ep(() => {
        if (!e) return;
        let i = (e) => {
            if ("Tab" !== e.key) return;
            let i = t.current;
            if (!i) return;
            let r = rC(i);
            if (0 === r.length && document.activeElement === i) return void e.preventDefault();
            if (0 === r.length) return;
            let n = r[0],
                o = r[r.length - 1];
            e.shiftKey
                ? document.activeElement === n && (e.preventDefault(), o.focus())
                : document.activeElement === o && (e.preventDefault(), n.focus());
        };
        return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
    }, [e, t]);
}
var rL = (function () {
    function e(t) {
        var i, r;
        return (
            this.getChildContext ||
                ((i = new Set()),
                ((r = {})[e.__c] = this),
                (this.getChildContext = function () {
                    return r;
                }),
                (this.componentWillUnmount = function () {
                    i = null;
                }),
                (this.shouldComponentUpdate = function (e) {
                    this.props.value != e.value &&
                        i.forEach(function (e) {
                            (e.__e = !0), F(e);
                        });
                }),
                (this.sub = function (e) {
                    i.add(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                        i && i.delete(e), t && t.call(e);
                    };
                })),
            t.children
        );
    }
    return (
        (e.__c = "__cC" + E++),
        (e.__ = null),
        (e.Provider =
            e.__l =
            (e.Consumer = function (e, t) {
                return e.children(t);
            }).contextType =
                e),
        e
    );
})();
function rE() {
    var e, t;
    let i =
        ((e = J.context[rL.__c]),
        ((t = eu(X++, 9)).c = rL),
        e ? (t.__ ?? ((t.__ = !0), e.sub(J)), e.props.value) : rL.__);
    if (!i) throw Error("Modal compound components must be used within Modal.Root");
    return i;
}
var rS = function ({
        open: e,
        children: t,
        onOpenChange: i,
        dismissible: r = !0,
        portalContainer: n,
        class: o,
        hasBackdrop: s = !0,
        manageInitialFocus: a = !0,
        returnFocusRef: l,
    }) {
        let c = (function (e, t) {
                let [i, r] = eh(null);
                return (
                    ep(() => {
                        if (!e) return void r(null);
                        if (t)
                            return (
                                r(t),
                                () => {
                                    r(null);
                                }
                            );
                        let i = document.createElement("div");
                        return (
                            i.setAttribute("data-incode-modal-portal", ""),
                            (document.querySelector(".IncodeComponent") ?? document.body).appendChild(i),
                            r(i),
                            () => {
                                i.remove(), r(null);
                            }
                        );
                    }, [e, t]),
                    i
                );
            })(e, n ?? void 0),
            [d, u] = eh(!1),
            h = em(null),
            p = eC(() => {
                r && i?.(!1);
            }, [r, i]),
            f = eg(() => ({ setHasDescription: u, dismissible: r, requestClose: p }), [r, p]),
            m = e && !!c;
        return (
            ry(e),
            rw(e, r, p),
            r_(m, h, a, l),
            rb(m, h),
            c && e
                ? eN(
                      Q(rL.Provider, {
                          value: f,
                          children: Q("div", {
                              class: iJ("IncodeModalRoot", o),
                              "data-incode-modal": "",
                              children: [
                                  s &&
                                      Q("div", {
                                          class: "IncodeModalBackdrop",
                                          "aria-hidden": "true",
                                          onMouseDown: () => {
                                              p();
                                          },
                                      }),
                                  Q("div", {
                                      ref: h,
                                      class: "IncodeModalDialog",
                                      role: "dialog",
                                      "aria-modal": "true",
                                      "aria-labelledby": "incode-modal-title",
                                      "aria-describedby": d ? "incode-modal-description" : void 0,
                                      tabIndex: -1,
                                      onMouseDown: (e) => {
                                          e.stopPropagation();
                                      },
                                      children: t,
                                  }),
                              ],
                          }),
                      }),
                      c,
                  )
                : null
        );
    },
    rI = function ({ children: e, class: t }) {
        return Q("div", { class: iJ("IncodeModalContent", t), children: e });
    },
    rT = function ({ "aria-label": e = "Close", title: t = "Close", class: i, onClick: r }) {
        let { dismissible: n, requestClose: o } = rE();
        if (!n) return null;
        let s = async () => {
            r && (await r()), o();
        };
        return Q("button", {
            type: "button",
            class: iJ("IncodeModalClose", i),
            "aria-label": e,
            title: t,
            onClick: s,
            children: Q(rp, { height: 32, width: 32, fillColor: "var(--icon-neutral-300)" }),
        });
    },
    rk = function ({ children: e, align: t = "center" }) {
        return Q("div", {
            class: { center: "IncodeModalTitleSectionCenter", left: "IncodeModalTitleSectionLeft" }[t],
            children: e,
        });
    },
    rx = function ({ children: e, ref: t, class: i }) {
        return Q("h2", { id: "incode-modal-title", ref: t, className: iJ("IncodeModalTitle", i), children: e });
    },
    rP = function ({ children: e, class: t }) {
        let { setHasDescription: i } = rE();
        return (
            ef(() => (i(!0), () => i(!1)), [i]),
            Q("p", { id: "incode-modal-description", className: iJ("IncodeModalSubtitle", t), children: e })
        );
    },
    rM = function ({ children: e, class: t, orientation: i = "vertical" }) {
        let r = "vertical" === i ? "IncodeModalActionsVertical" : "IncodeModalActionsHorizontal",
            n = N(e),
            o = [];
        for (let i = 0; i < n.length; i++) {
            let s = n[i];
            if (m(s) && null != s.props && "object" == typeof s.props && "autoFocus" in s.props)
                return Q("div", { class: iJ(r, t), role: "group", children: e });
            o.push(m(s) && 0 === i ? q(s, { [rm]: "" }) : s);
        }
        return Q("div", { class: iJ(r, t), role: "group", children: o });
    },
    rO = ({ isOpen: e = !1, onClose: t, labelledById: i, children: r }) => {
        var n, o;
        let s = em(null),
            a = em(null),
            l = eC(() => {
                t?.();
            }, [t]);
        return (
            ry(e),
            rw(e, !0, l),
            r_(e, s),
            rb(e, s),
            ep(() => {
                if (!n || typeof window > "u") return;
                let e = window.visualViewport;
                if (!e) return;
                let t = () => {
                    let t = o.current;
                    t &&
                        (t.style.setProperty("--incode-visual-viewport-height", `${e.height}px`),
                        t.style.setProperty("--incode-visual-viewport-offset-top", `${e.offsetTop}px`));
                };
                return (
                    t(),
                    e.addEventListener("resize", t),
                    e.addEventListener("scroll", t),
                    () => {
                        e.removeEventListener("resize", t), e.removeEventListener("scroll", t);
                    }
                );
            }, [(n = e), (o = a)]),
            e
                ? Q("div", {
                      ref: a,
                      class: "IncodeBottomSheetOverlay",
                      onClick: (e) => {
                          e.target === e.currentTarget && l();
                      },
                      children: Q("div", {
                          class: "IncodeBottomSheetContainer",
                          onClick: l,
                          children: Q("div", {
                              ref: s,
                              class: "IncodeBottomSheet",
                              role: "dialog",
                              "aria-modal": "true",
                              "aria-labelledby": i,
                              tabIndex: -1,
                              onClick: (e) => e.stopPropagation(),
                              children: r,
                          }),
                      }),
                  })
                : null
        );
    },
    rA = ({ number: e }) =>
        Q("div", {
            class: "IncodeNumberedStep",
            children: Q("span", { class: "IncodeNumberedStepText", children: e }),
        }),
    rR = i(351618),
    rD = i(682781);
async function rF(e) {
    try {
        if ("u" < typeof navigator || !navigator.permissions) return "prompt";
        return (await navigator.permissions.query({ name: e })).state;
    } catch {
        return "prompt";
    }
}
async function rU() {
    return rF("camera");
}
async function rH() {
    let e = await rU();
    return "granted" === e ? "granted" : "denied" === e ? "denied" : "prompt";
}
async function rN() {
    return new rD.t().requestPermission();
}
async function rV(e = {}) {
    try {
        return e.requestMotion && (await rN()), (0, rR.i)(await (0, rR.r)({ video: !0 })), "granted";
    } catch (t) {
        let e = t instanceof Error ? t.name : void 0;
        if ("NotAllowedError" === e || "PermissionDeniedError" === e) return "denied";
        return "prompt";
    }
}
var rB = ({ title: e, description: t, attemptsRemaining: i, onButtonClick: r, "data-testid": n }) => {
        let { t: o } = iK(),
            s = i <= 0,
            a = em(null);
        return (
            ep(() => {
                a.current?.focus();
            }, []),
            Q(rS, {
                open: !0,
                dismissible: !1,
                hasBackdrop: !1,
                manageInitialFocus: !1,
                class: "IncodeErrorContent",
                children: Q(rI, {
                    class: "IncodeErrorContentContent",
                    children: Q(rs, {
                        "data-testid": n,
                        className: "IncodeErrorContentPage",
                        children: Q("div", {
                            class: "IncodeErrorContentContainer",
                            children: [
                                Q("div", {
                                    class: "IncodeErrorContentIconContainer",
                                    children: [
                                        Q(s ? ru : rh, { size: 32 }),
                                        Q(iX, { size: 16 }),
                                        Q(i0, {
                                            ref: a,
                                            id: "incode-modal-title",
                                            tabIndex: -1,
                                            className: "IncodeErrorContentTitle",
                                            children: e,
                                        }),
                                        Q(iX, { size: 12 }),
                                        Q("p", { class: "IncodeErrorContentDescription", children: t }),
                                    ],
                                }),
                                Q("div", {
                                    class: "IncodeErrorContentAttemptsContainer",
                                    children: [
                                        s
                                            ? null
                                            : Q("p", {
                                                  class: "IncodeErrorContentAttemptsText",
                                                  children: o("common.attemptsRemaining", { count: i }),
                                              }),
                                        Q(iX, { size: 24 }),
                                        Q(rc, { onClick: r, children: o(s ? "common.continue" : "common.tryAgain") }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            })
        );
    },
    rz = null;
function r$({
    animationData: e,
    loop: t = !0,
    autoplay: i = !0,
    reverse: r = !1,
    style: n,
    className: o,
    onComplete: s,
    onControlsReady: a,
}) {
    let l = em(null),
        c = !r && i,
        d = em({ container: l.current, renderer: "svg", loop: t, autoplay: c, animationData: e });
    return (
        ep(() => {
            d.current = { container: l.current, renderer: "svg", loop: t, autoplay: c, animationData: e };
        }, [e, t, c]),
        ep(() => {
            if (!l.current) return;
            let e,
                t = !0;
            return (
                (
                    rz ||
                    (rz = new Promise((e, t) => {
                        let i = document.createElement("script");
                        (i.src = "https://cdn.jsdelivr.net/npm/lottie-web@5.13.0/build/player/lottie_light.min.js"),
                            (i.onload = () => e(window.lottie)),
                            (i.onerror = t),
                            document.head.appendChild(i);
                    }))
                ).then((i) => {
                    t &&
                        ((e = i.loadAnimation(d.current)),
                        r && (e.setDirection(-1), e.goToAndPlay(e.totalFrames - 1, !0)),
                        s && e.addEventListener("complete", s),
                        a?.({
                            setSpeed: (t) => e?.setSpeed?.(t),
                            play: () => e?.play?.(),
                            pause: () => e?.pause?.(),
                            stop: () => e?.stop?.(),
                            goToAndPlay: (t, i = !1) => e?.goToAndPlay?.(t, i),
                            goToAndStop: (t, i = !1) => e?.goToAndStop?.(t, i),
                            getTotalFrames: () => e?.totalFrames ?? null,
                        }));
                }),
                () => {
                    (t = !1), a?.(null), e && (s && e.removeEventListener("complete", s), e.destroy());
                }
            );
        }, [s, a, r]),
        Q("div", { ref: l, style: n, className: o, "aria-hidden": "true" })
    );
}
var rZ = ({
        className: e = "",
        animationData: t,
        title: i,
        titleId: r,
        subtitle: n,
        onContinue: o,
        buttonText: s,
        disclaimerText: a,
        isLoading: l,
        stopFramePosition: c = "middle",
    }) => {
        let d = em(null),
            u = eC((e) => {
                d.current = e;
            }, []);
        return (
            ep(() => {
                let e = window.setTimeout(() => {
                    let e = d.current;
                    if (!e) return;
                    let t = e.getTotalFrames();
                    if (!t || t <= 0) return void e.stop();
                    let i = "last" === c ? Math.max(t - 1, 0) : "first" === c ? 0 : Math.floor((t - 1) / 2);
                    e.goToAndStop(i, !0);
                }, 5e3);
                return () => {
                    window.clearTimeout(e);
                };
            }, [c]),
            Q(rs, {
                className: iJ("IncodeTutorialPage", e),
                title: i,
                titleId: r,
                subtitle: n,
                children: [
                    Q("div", {
                        class: "IncodeBaseTutorialContainer",
                        children: Q("div", {
                            class: "IncodeBaseTutorialAnimationContainer",
                            "aria-hidden": "true",
                            children: t
                                ? Q(r$, {
                                      animationData: t,
                                      className: "IncodeBaseTutorialAnimation",
                                      onControlsReady: u,
                                  })
                                : null,
                        }),
                    }),
                    Q("div", {
                        children: [
                            Q("p", { class: "IncodeBaseTutorialDisclaimer", children: a }),
                            Q("div", {
                                class: "IncodeBaseTutorialButtonContainer",
                                children: Q(rc, {
                                    onClick: o,
                                    class: "m-auto max-w-[420px]",
                                    isLoading: l,
                                    children: s,
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    rW = ({ i18nKey: e }) =>
        Q("span", {
            class: "IncodeBoldWithArrow",
            children: Q(iG, { i18nKey: e, arrowClass: "IncodeBoldWithArrowIcon" }),
        }),
    rj = (e) =>
        Q("svg", {
            width: 38,
            height: 38,
            viewBox: "0 0 38 38",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("rect", { width: 38, height: 38, rx: 8, fill: "var(--surface-neutral-50)" }),
                Q("path", {
                    d: "M19 24C20.3807 24 21.5 25.1193 21.5 26.5C21.5 27.8807 20.3807 29 19 29C17.6193 29 16.5 27.8807 16.5 26.5C16.5 25.1193 17.6193 24 19 24ZM19 17C20.3807 17 21.5 18.1193 21.5 19.5C21.5 20.8807 20.3807 22 19 22C17.6193 22 16.5 20.8807 16.5 19.5C16.5 18.1193 17.6193 17 19 17ZM19 10C20.3807 10 21.5 11.1193 21.5 12.5C21.5 13.8807 20.3807 15 19 15C17.6193 15 16.5 13.8807 16.5 12.5C16.5 11.1193 17.6193 10 19 10Z",
                    fill: "#646464",
                }),
            ],
        }),
    rK = (e) =>
        Q("svg", {
            width: 38,
            height: 38,
            viewBox: "0 0 38 38",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("path", {
                    d: "M30.2222 0H7.77778C3.48223 0 0 3.48903 0 7.79297V30.207C0 34.511 3.48223 38 7.77778 38H30.2222C34.5178 38 38 34.511 38 30.207V7.79297C38 3.48903 34.5178 0 30.2222 0Z",
                    fill: "var(--surface-neutral-50)",
                }),
                Q("g", {
                    clipPath: "url(#clip0_12232_5207)",
                    children: Q("path", {
                        d: "M26.1401 19.94C26.1801 19.64 26.2001 19.33 26.2001 19C26.2001 18.68 26.1801 18.36 26.1301 18.06L28.1601 16.48C28.3401 16.34 28.3901 16.07 28.2801 15.87L26.3601 12.55C26.2401 12.33 25.9901 12.26 25.7701 12.33L23.3801 13.29C22.8801 12.91 22.3501 12.59 21.7601 12.35L21.4001 9.81002C21.3601 9.57002 21.1601 9.40002 20.9201 9.40002H17.0801C16.8401 9.40002 16.6501 9.57002 16.6101 9.81002L16.2501 12.35C15.6601 12.59 15.1201 12.92 14.6301 13.29L12.2401 12.33C12.0201 12.25 11.7701 12.33 11.6501 12.55L9.74011 15.87C9.62011 16.08 9.66011 16.34 9.86011 16.48L11.8901 18.06C11.8401 18.36 11.8001 18.69 11.8001 19C11.8001 19.31 11.8201 19.64 11.8701 19.94L9.84011 21.52C9.66011 21.66 9.61011 21.93 9.72011 22.13L11.6401 25.45C11.7601 25.67 12.0101 25.74 12.2301 25.67L14.6201 24.71C15.1201 25.09 15.6501 25.41 16.2401 25.65L16.6001 28.19C16.6501 28.43 16.8401 28.6 17.0801 28.6H20.9201C21.1601 28.6 21.3601 28.43 21.3901 28.19L21.7501 25.65C22.3401 25.41 22.8801 25.09 23.3701 24.71L25.7601 25.67C25.9801 25.75 26.2301 25.67 26.3501 25.45L28.2701 22.13C28.3901 21.91 28.3401 21.66 28.1501 21.52L26.1401 19.94ZM19.0001 22.6C17.0201 22.6 15.4001 20.98 15.4001 19C15.4001 17.02 17.0201 15.4 19.0001 15.4C20.9801 15.4 22.6001 17.02 22.6001 19C22.6001 20.98 20.9801 22.6 19.0001 22.6Z",
                        fill: "#646464",
                    }),
                }),
                Q("defs", {
                    children: Q("clipPath", {
                        id: "clip0_12232_5207",
                        children: Q("rect", {
                            width: 24,
                            height: 24,
                            fill: "var(--surface-neutral-50)",
                            transform: "translate(7 7)",
                        }),
                    }),
                }),
            ],
        }),
    rG = (e) =>
        Q("svg", {
            width: 38,
            height: 38,
            viewBox: "0 0 38 38",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("g", {
                    clipPath: "url(#clip0_12232_5215)",
                    children: Q("g", {
                        clipPath: "url(#clip1_12232_5215)",
                        children: [
                            Q("rect", { width: 38, height: 38, fill: "var(--surface-neutral-50)" }),
                            Q("rect", { width: 38, height: 38, fill: "var(--surface-neutral-50)" }),
                            Q("rect", { x: 6, y: 11, width: 26, height: 16, rx: 8, fill: "#006AFF" }),
                            Q("rect", {
                                x: 14,
                                y: 9,
                                width: 20,
                                height: 20,
                                rx: 10,
                                fill: "#65558F",
                                fillOpacity: 0.08,
                            }),
                            Q("rect", { x: 18, y: 13, width: 12, height: 12, rx: 6, fill: "white" }),
                        ],
                    }),
                }),
                Q("defs", {
                    children: [
                        Q("clipPath", {
                            id: "clip0_12232_5215",
                            children: Q("rect", { width: 38, height: 38, rx: 8.40969, fill: "white" }),
                        }),
                        Q("clipPath", {
                            id: "clip1_12232_5215",
                            children: Q("rect", { width: 38, height: 38, fill: "white" }),
                        }),
                    ],
                }),
            ],
        }),
    rq = (e) =>
        Q("svg", {
            width: 38,
            height: 38,
            viewBox: "0 0 38 38",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("path", {
                    d: "M30.2222 0H7.77778C3.48223 0 0 3.48903 0 7.79297V30.207C0 34.511 3.48223 38 7.77778 38H30.2222C34.5178 38 38 34.511 38 30.207V7.79297C38 3.48903 34.5178 0 30.2222 0Z",
                    fill: "var(--surface-neutral-50)",
                }),
                Q("g", {
                    clipPath: "url(#clip0_12232_5227)",
                    children: [
                        Q("path", {
                            d: "M19 26.4969C23.1421 26.4969 26.5 23.1391 26.5 18.9969C26.5 14.8548 23.1421 11.4969 19 11.4969C14.8579 11.4969 11.5 14.8548 11.5 18.9969C11.5 23.1391 14.8579 26.4969 19 26.4969Z",
                            fill: "white",
                        }),
                        Q("path", {
                            d: "M19.0004 11.5H31.9887C30.6725 9.21964 28.7792 7.32596 26.4991 6.0094C24.2189 4.69285 21.6324 3.99982 18.9994 4C16.3665 4.00018 13.78 4.69357 11.5001 6.01045C9.2201 7.32733 7.32704 9.22127 6.01123 11.5018L12.5054 22.75L12.5112 22.7485C11.8505 21.6093 11.5019 20.3161 11.5004 18.9992C11.499 17.6823 11.8447 16.3883 12.5027 15.2476C13.1608 14.1069 14.1079 13.1599 15.2487 12.5019C16.3895 11.844 17.6835 11.4984 19.0004 11.5Z",
                            fill: "url(#paint0_linear_12232_5227)",
                        }),
                        Q("path", {
                            d: "M19 24.9375C22.2792 24.9375 24.9375 22.2792 24.9375 19C24.9375 15.7208 22.2792 13.0625 19 13.0625C15.7208 13.0625 13.0625 15.7208 13.0625 19C13.0625 22.2792 15.7208 24.9375 19 24.9375Z",
                            fill: "#1A73E8",
                        }),
                        Q("path", {
                            d: "M25.4944 22.7517L19.0002 33.9999C21.6332 34.0003 24.2198 33.3074 26.5 31.991C28.7802 30.6746 30.6737 28.7811 31.99 26.5008C33.3063 24.2205 33.999 21.6339 33.9986 19.001C33.9981 16.368 33.3044 13.7816 31.9873 11.5018H18.9991L18.9976 11.5076C20.3145 11.5051 21.6088 11.8498 22.75 12.5069C23.8912 13.1641 24.839 14.1105 25.4978 15.2508C26.1567 16.391 26.5032 17.6848 26.5026 19.0017C26.502 20.3186 26.1543 21.6121 25.4944 22.7517Z",
                            fill: "url(#paint1_linear_12232_5227)",
                        }),
                        Q("path", {
                            d: "M12.5053 22.7519L6.01118 11.5037C4.69438 13.7837 4.00107 16.3702 4.00098 19.0031C4.00088 21.636 4.69399 24.2226 6.01062 26.5027C7.32724 28.7828 9.22098 30.6761 11.5014 31.9921C13.7818 33.3082 16.3686 34.0007 19.0015 33.9999L25.4956 22.7517L25.4914 22.7475C24.8352 23.8892 23.8895 24.8377 22.7498 25.4975C21.61 26.1572 20.3165 26.5048 18.9996 26.5052C17.6827 26.5057 16.389 26.159 15.2488 25.5C14.1086 24.841 13.1623 23.8931 12.5053 22.7519Z",
                            fill: "url(#paint2_linear_12232_5227)",
                        }),
                    ],
                }),
                Q("defs", {
                    children: [
                        Q("linearGradient", {
                            id: "paint0_linear_12232_5227",
                            x1: 6.01123,
                            y1: 13.375,
                            x2: 31.9887,
                            y2: 13.375,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#D93025" }),
                                Q("stop", { offset: 1, stopColor: "#EA4335" }),
                            ],
                        }),
                        Q("linearGradient", {
                            id: "paint1_linear_12232_5227",
                            x1: 16.951,
                            y1: 33.7993,
                            x2: 29.9397,
                            y2: 11.3022,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#FCC934" }),
                                Q("stop", { offset: 1, stopColor: "#FBBC04" }),
                            ],
                        }),
                        Q("linearGradient", {
                            id: "paint2_linear_12232_5227",
                            x1: 20.6237,
                            y1: 33.0634,
                            x2: 7.63499,
                            y2: 10.5662,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#1E8E3E" }),
                                Q("stop", { offset: 1, stopColor: "#34A853" }),
                            ],
                        }),
                        Q("clipPath", {
                            id: "clip0_12232_5227",
                            children: Q("rect", { width: 30, height: 30, fill: "white", transform: "translate(4 4)" }),
                        }),
                    ],
                }),
            ],
        }),
    rY = (e) =>
        Q("svg", {
            width: 40,
            height: 40,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("rect", { width: 40, height: 40, rx: 8, fill: "var(--surface-neutral-50)" }),
                Q("g", {
                    clipPath: "url(#clip0_6845_3639)",
                    children: [
                        Q("path", {
                            d: "M33.0497 14.7472C32.4377 13.2751 31.1981 11.6858 30.2248 11.1834C31.017 12.7365 31.4755 14.2944 31.6507 15.457C31.6507 15.4593 31.6515 15.465 31.6534 15.4805C30.0611 11.5117 27.3612 9.91143 25.1565 6.42697C25.0452 6.25078 24.9335 6.07412 24.8248 5.88791C24.7694 5.79281 24.7177 5.69563 24.6697 5.59658C24.5781 5.41974 24.5075 5.23281 24.4592 5.03959C24.4596 5.03044 24.4565 5.0215 24.4505 5.01452C24.4446 5.00754 24.4363 5.00302 24.4272 5.00186C24.4186 4.99938 24.4094 4.99938 24.4008 5.00186C24.3988 5.00256 24.3959 5.00485 24.3938 5.00567C24.3907 5.0069 24.3867 5.00971 24.3835 5.01153C24.385 5.00942 24.3883 5.00467 24.3893 5.00356C20.852 7.0752 19.652 10.9075 19.5417 12.8249C18.1292 12.922 16.7787 13.4424 15.6662 14.3183C15.5498 14.2199 15.428 14.128 15.3015 14.0429C14.9805 12.92 14.9669 11.7316 15.262 10.6016C13.8154 11.2603 12.6903 12.3014 11.8723 13.2207H11.8658C11.3076 12.5137 11.347 10.1813 11.3788 9.69434C11.3721 9.66416 10.9624 9.90703 10.9087 9.94365C10.4161 10.2953 9.95561 10.6898 9.53258 11.1226C9.05119 11.6107 8.61134 12.1382 8.21762 12.6995C8.21762 12.7002 8.21721 12.701 8.21697 12.7017C8.21697 12.701 8.21738 12.7002 8.21762 12.6995C7.31213 13.9827 6.66993 15.4326 6.32814 16.9654C6.32141 16.9959 6.31572 17.0276 6.30916 17.0583C6.28268 17.1823 6.18729 17.8025 6.17059 17.9372C6.1693 17.9476 6.16871 17.9576 6.16748 17.968C6.04415 18.6091 5.96778 19.2584 5.93896 19.9107C5.93896 19.9348 5.9375 19.9586 5.9375 19.9826C5.93773 27.7588 12.2424 34.0624 20.0192 34.0624C26.984 34.0624 32.7669 29.0065 33.899 22.3654C33.9229 22.1851 33.942 22.0039 33.963 21.8221C34.2429 19.4075 33.932 16.8695 33.0497 14.7472ZM16.8195 25.7683C16.8854 25.7998 16.9473 25.8342 17.0149 25.8643C17.0177 25.8663 17.0216 25.8684 17.0244 25.8702C16.9556 25.8373 16.8873 25.8033 16.8195 25.7683ZM31.6545 15.4839L31.6527 15.4703C31.6534 15.4753 31.6542 15.4805 31.655 15.4855L31.6545 15.4839Z",
                            fill: "url(#paint0_linear_6845_3639)",
                        }),
                        Q("path", {
                            d: "M33.0496 14.7472C32.4376 13.2751 31.198 11.6858 30.2247 11.1835C31.0169 12.7365 31.4754 14.2944 31.6505 15.4571C31.6505 15.4537 31.6512 15.4599 31.6527 15.4703C31.6534 15.4753 31.6542 15.4805 31.655 15.4855C32.9836 19.0872 32.2598 22.7498 31.2168 24.9879C29.6032 28.4508 25.6964 31.9998 19.5815 31.8268C12.9747 31.6397 7.15437 26.7375 6.06787 20.3169C5.86988 19.3044 6.06787 18.7903 6.16748 17.9683C6.04613 18.602 5.9999 18.7851 5.93896 19.9111C5.93896 19.9351 5.9375 19.9589 5.9375 19.983C5.93762 27.7588 12.2423 34.0625 20.0191 34.0625C26.9838 34.0625 32.7668 29.0065 33.8989 22.3654C33.9228 22.1852 33.9419 22.004 33.9629 21.8222C34.2428 19.4075 33.9318 16.8695 33.0496 14.7472Z",
                            fill: "url(#paint1_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M33.0496 14.7472C32.4376 13.2751 31.198 11.6858 30.2247 11.1835C31.0169 12.7365 31.4754 14.2944 31.6505 15.4571C31.6505 15.4537 31.6512 15.4599 31.6527 15.4703C31.6534 15.4753 31.6542 15.4805 31.655 15.4855C32.9836 19.0872 32.2598 22.7498 31.2168 24.9879C29.6032 28.4508 25.6964 31.9998 19.5815 31.8268C12.9747 31.6397 7.15437 26.7375 6.06787 20.3169C5.86988 19.3044 6.06787 18.7903 6.16748 17.9683C6.04613 18.602 5.9999 18.7851 5.93896 19.9111C5.93896 19.9351 5.9375 19.9589 5.9375 19.983C5.93762 27.7588 12.2423 34.0625 20.0191 34.0625C26.9838 34.0625 32.7668 29.0065 33.8989 22.3654C33.9228 22.1852 33.9419 22.004 33.9629 21.8222C34.2428 19.4075 33.9318 16.8695 33.0496 14.7472Z",
                            fill: "url(#paint2_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M26.2066 16.4017C26.2373 16.4233 26.2652 16.4447 26.2941 16.4661C25.9407 15.8389 25.5006 15.2647 24.9869 14.7604C20.6096 10.3836 23.8391 5.2704 24.3837 5.01072C24.3853 5.00861 24.3886 5.00386 24.3896 5.00275C20.8523 7.07439 19.6523 10.9067 19.542 12.8241C19.7061 12.8127 19.8696 12.7989 20.0366 12.7989C22.6763 12.7989 24.9754 14.2503 26.2066 16.4017Z",
                            fill: "url(#paint3_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M20.0448 17.277C20.0218 17.6272 18.7843 18.8352 18.3515 18.8352C14.3472 18.8352 13.6973 21.2571 13.6973 21.2571C13.8746 23.2968 15.2946 24.9764 17.0143 25.8651C17.0928 25.9057 17.1722 25.9423 17.2516 25.9785C17.3878 26.0388 17.5258 26.0952 17.6652 26.1476C18.2549 26.3564 18.8725 26.4755 19.4975 26.501C26.5159 26.8302 27.8756 18.1107 22.8107 15.5786C24.1078 15.353 25.4542 15.8747 26.206 16.4029C24.9749 14.2517 22.6758 12.8003 20.0361 12.8003C19.8691 12.8003 19.7056 12.8141 19.5415 12.8254C18.1289 12.9225 16.7784 13.443 15.666 14.3189C15.8806 14.5005 16.123 14.7433 16.6336 15.2463C17.5888 16.1877 20.0396 17.1626 20.0448 17.277Z",
                            fill: "url(#paint4_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M20.0448 17.277C20.0218 17.6272 18.7843 18.8352 18.3515 18.8352C14.3472 18.8352 13.6973 21.2571 13.6973 21.2571C13.8746 23.2968 15.2946 24.9764 17.0143 25.8651C17.0928 25.9057 17.1722 25.9423 17.2516 25.9785C17.3878 26.0388 17.5258 26.0952 17.6652 26.1476C18.2549 26.3564 18.8725 26.4755 19.4975 26.501C26.5159 26.8302 27.8756 18.1107 22.8107 15.5786C24.1078 15.353 25.4542 15.8747 26.206 16.4029C24.9749 14.2517 22.6758 12.8003 20.0361 12.8003C19.8691 12.8003 19.7056 12.8141 19.5415 12.8254C18.1289 12.9225 16.7784 13.443 15.666 14.3189C15.8806 14.5005 16.123 14.7433 16.6336 15.2463C17.5888 16.1877 20.0396 17.1626 20.0448 17.277Z",
                            fill: "url(#paint5_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M15.0101 13.8501C15.1082 13.9133 15.2055 13.9778 15.3019 14.0434C14.981 12.9205 14.9673 11.7321 15.2625 10.6021C13.8159 11.2608 12.6908 12.3019 11.8728 13.2213C11.9405 13.2193 13.983 13.1826 15.0101 13.8501Z",
                            fill: "url(#paint6_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M6.0671 20.3167C7.15361 26.7373 12.974 31.6394 19.5807 31.8265C25.6956 31.9996 29.6024 28.4503 31.216 24.9877C32.259 22.7494 32.9828 19.0873 31.6542 15.4852L31.6538 15.4837L31.6519 15.47C31.6504 15.4596 31.6495 15.4534 31.6498 15.4568C31.6498 15.4591 31.6507 15.4648 31.6525 15.4802C32.152 18.7416 30.493 21.9012 27.8995 24.0375L27.8918 24.0558C22.8383 28.1705 18.0027 26.5383 17.0235 25.8703C16.9547 25.8371 16.8864 25.8031 16.8185 25.7681C13.8723 24.3602 12.6552 21.6761 12.9161 19.3741C10.4284 19.3741 9.58015 17.276 9.58015 17.276C9.58015 17.276 11.8137 15.6834 14.7574 17.0685C17.4837 18.3513 20.0442 17.2761 20.0445 17.276C20.0393 17.1616 17.5884 16.1867 16.633 15.2453C16.1224 14.7424 15.88 14.4998 15.6653 14.3179C15.5489 14.2195 15.4271 14.1276 15.3006 14.0425C15.204 13.977 15.1067 13.9126 15.0087 13.8492C13.9817 13.1817 11.9391 13.2184 11.8715 13.2202H11.865C11.3067 12.5131 11.3461 10.1807 11.3779 9.69375C11.3712 9.66357 10.9615 9.90645 10.9078 9.94307C10.4152 10.2947 9.95473 10.6892 9.53169 11.122C9.05029 11.6103 8.61044 12.1379 8.21673 12.6993C8.21673 12.7 8.21632 12.7008 8.21609 12.7015C8.21609 12.7007 8.2165 12.7 8.21673 12.6993C7.31125 13.9824 6.66905 15.4323 6.32726 16.9652C6.32052 16.9957 5.82042 19.1825 6.0671 20.3167Z",
                            fill: "url(#paint7_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M24.9865 14.7609C25.5003 15.2652 25.9404 15.8395 26.2938 16.4667C26.3713 16.5249 26.4437 16.583 26.5052 16.6396C29.6975 19.581 28.0249 23.7412 27.9001 24.0377C30.4935 21.9014 32.1526 18.7418 31.6531 15.4804C30.0608 11.5117 27.3609 9.91143 25.1562 6.42697C25.0448 6.25078 24.9332 6.07412 24.8245 5.88791C24.7691 5.79281 24.7174 5.69563 24.6694 5.59658C24.5778 5.41974 24.5072 5.23281 24.4589 5.03959C24.4592 5.03044 24.4561 5.0215 24.4502 5.01452C24.4443 5.00754 24.436 5.00302 24.4269 5.00186C24.4183 4.99938 24.4091 4.99938 24.4005 5.00186C24.3985 5.00256 24.3956 5.00485 24.3935 5.00567C24.3904 5.0069 24.3864 5.00971 24.3831 5.01153C23.8387 5.27098 20.6093 10.3842 24.9865 14.7609Z",
                            fill: "url(#paint8_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M26.505 16.6396C26.4435 16.5829 26.3711 16.5249 26.2936 16.4666C26.265 16.4451 26.2368 16.4236 26.2061 16.4022C25.4542 15.874 24.1079 15.3524 22.8108 15.5779C27.8757 18.11 26.516 26.8295 19.4976 26.5003C18.8726 26.4748 18.255 26.3557 17.6653 26.1469C17.5259 26.0945 17.388 26.0381 17.2517 25.9778C17.1723 25.9416 17.0929 25.905 17.0144 25.8644C17.0172 25.8664 17.0211 25.8685 17.024 25.8703C18.0031 26.5383 22.8387 28.1705 27.8922 24.0559L27.9 24.0375C28.0247 23.7414 29.6973 19.5811 26.505 16.6396Z",
                            fill: "url(#paint9_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M13.6978 21.2564C13.6978 21.2564 14.3478 18.8344 18.352 18.8344C18.7849 18.8344 20.0225 17.6265 20.0454 17.2762C20.0683 16.9259 17.4848 18.3515 14.7583 17.0687C11.8146 15.6837 9.58105 17.2762 9.58105 17.2762C9.58105 17.2762 10.4293 19.3744 12.917 19.3744C12.6561 21.6763 13.8732 24.3607 16.8194 25.7684C16.8852 25.7998 16.9471 25.8342 17.0147 25.8644C15.2951 24.9756 13.8752 23.296 13.6978 21.2564Z",
                            fill: "url(#paint10_radial_6845_3639)",
                        }),
                        Q("path", {
                            d: "M33.0495 14.7472C32.4375 13.2751 31.1979 11.6858 30.2246 11.1834C31.0167 12.7365 31.4752 14.2944 31.6504 15.457C31.6504 15.4593 31.6513 15.465 31.6532 15.4805C30.0609 11.5117 27.361 9.91143 25.1562 6.42697C25.0449 6.25078 24.9333 6.07412 24.8246 5.88791C24.7692 5.79281 24.7175 5.69563 24.6695 5.59658C24.5779 5.41974 24.5073 5.23281 24.459 5.03959C24.4593 5.03044 24.4562 5.0215 24.4503 5.01452C24.4444 5.00754 24.4361 5.00302 24.427 5.00186C24.4184 4.99938 24.4092 4.99938 24.4006 5.00186C24.3986 5.00256 24.3956 5.00485 24.3935 5.00567C24.3904 5.0069 24.3865 5.00971 24.3832 5.01153C24.3848 5.00942 24.3881 5.00467 24.3891 5.00356C20.8518 7.0752 19.6518 10.9075 19.5415 12.8249C19.7056 12.8135 19.8692 12.7997 20.0362 12.7997C22.676 12.7997 24.9751 14.2511 26.2061 16.4023C25.4542 15.8742 24.1078 15.3525 22.8107 15.5781C27.8756 18.1102 26.5159 26.8296 19.4976 26.5004C18.8726 26.4749 18.2549 26.3558 17.6653 26.1471C17.5258 26.0946 17.3879 26.0382 17.2517 25.9779C17.1722 25.9417 17.0928 25.9051 17.0144 25.8646C17.0172 25.8665 17.021 25.8687 17.0239 25.8704C16.9551 25.8373 16.8867 25.8033 16.8188 25.7683C16.8847 25.7998 16.9466 25.8342 17.0142 25.8643C15.2945 24.9756 13.8745 23.296 13.6971 21.2563C13.6971 21.2563 14.3471 18.8344 18.3513 18.8344C18.7842 18.8344 20.0218 17.6265 20.0447 17.2762C20.0395 17.1618 17.5886 16.1869 16.6332 15.2456C16.1227 14.7426 15.8803 14.5001 15.6656 14.3181C15.5491 14.2198 15.4274 14.1278 15.3008 14.0428C14.9799 12.9199 14.9662 11.7314 15.2613 10.6014C13.8148 11.2601 12.6897 12.3012 11.8717 13.2206H11.8652C11.307 12.5135 11.3463 10.1811 11.3782 9.69416C11.3715 9.66399 10.9617 9.90686 10.9081 9.94348C10.4155 10.2951 9.95497 10.6896 9.53193 11.1224C9.05068 11.6106 8.61097 12.1382 8.21738 12.6995C8.21738 12.7002 8.21697 12.701 8.21674 12.7017C8.21674 12.701 8.21715 12.7002 8.21738 12.6995C7.3119 13.9827 6.6697 15.4326 6.32791 16.9654C6.32117 16.9959 6.31549 17.0276 6.30893 17.0583C6.28244 17.1823 6.16326 17.8114 6.14662 17.9464C6.14533 17.9568 6.14785 17.9361 6.14662 17.9464C6.03794 18.5965 5.96859 19.2526 5.93896 19.911C5.93896 19.9351 5.9375 19.9588 5.9375 19.9829C5.9375 27.7588 12.2422 34.0624 20.019 34.0624C26.9837 34.0624 32.7666 29.0065 33.8988 22.3654C33.9226 22.1851 33.9417 22.0039 33.9628 21.8221C34.2427 19.4075 33.9317 16.8695 33.0495 14.7472ZM31.6525 15.4703C31.6532 15.4753 31.6541 15.4805 31.6549 15.4855L31.6544 15.4839L31.6525 15.4703Z",
                            fill: "url(#paint11_linear_6845_3639)",
                        }),
                    ],
                }),
                Q("defs", {
                    children: [
                        Q("linearGradient", {
                            id: "paint0_linear_6845_3639",
                            x1: 2459.86,
                            y1: 455.467,
                            x2: 198.806,
                            y2: 2636.58,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { offset: 0.05, stopColor: "#FFF44F" }),
                                Q("stop", { offset: 0.37, stopColor: "#FF980E" }),
                                Q("stop", { offset: 0.53, stopColor: "#FF3647" }),
                                Q("stop", { offset: 0.7, stopColor: "#E31587" }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint1_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(1972.27 -283.948) scale(2880.01 2928.51)",
                            children: [
                                Q("stop", { offset: 0.13, stopColor: "#FFBD4F" }),
                                Q("stop", { offset: 0.28, stopColor: "#FF980E" }),
                                Q("stop", { offset: 0.47, stopColor: "#FF3750" }),
                                Q("stop", { offset: 0.78, stopColor: "#EB0878" }),
                                Q("stop", { offset: 0.86, stopColor: "#E50080" }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint2_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(1135.84 926.343) scale(2952.01 2928.51)",
                            children: [
                                Q("stop", { offset: 0.3, stopColor: "#960E18" }),
                                Q("stop", { offset: 0.35, stopColor: "#B11927", stopOpacity: 0.74 }),
                                Q("stop", { offset: 0.43, stopColor: "#DB293D", stopOpacity: 0.34 }),
                                Q("stop", { offset: 0.5, stopColor: "#F5334B", stopOpacity: 0.09 }),
                                Q("stop", { offset: 0.53, stopColor: "#FF3750", stopOpacity: 0 }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint3_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(343.643 -132.558) scale(945.295 1604.88)",
                            children: [
                                Q("stop", { offset: 0.13, stopColor: "#FFF44F" }),
                                Q("stop", { offset: 0.53, stopColor: "#FF980E" }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint4_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(298.397 1522.38) scale(1250.88 1370.98)",
                            children: [
                                Q("stop", { offset: 0.35, stopColor: "#3A8EE6" }),
                                Q("stop", { offset: 0.67, stopColor: "#9059FF" }),
                                Q("stop", { offset: 1, stopColor: "#C139E6" }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint5_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(598.238 465.222) scale(664.216 808.876)",
                            children: [
                                Q("stop", { offset: 0.21, stopColor: "#9059FF", stopOpacity: 0 }),
                                Q("stop", { offset: 0.97, stopColor: "#6E008B", stopOpacity: 0.6 }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint6_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(731.992 -333.531) scale(994.451 997.985)",
                            children: [
                                Q("stop", { offset: 0.1, stopColor: "#FFE226" }),
                                Q("stop", { offset: 0.79, stopColor: "#FF7139" }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint7_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(2221.6 -898.106) scale(4747.72 3985.45)",
                            children: [
                                Q("stop", { offset: 0.11, stopColor: "#FFF44F" }),
                                Q("stop", { offset: 0.46, stopColor: "#FF980E" }),
                                Q("stop", { offset: 0.72, stopColor: "#FF3647" }),
                                Q("stop", { offset: 0.9, stopColor: "#E31587" }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint8_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientTransform: "matrix(328.726 1469.98 -6603.97 326.229 374.184 63.7258)",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#FFF44F" }),
                                Q("stop", { offset: 0.3, stopColor: "#FF980E" }),
                                Q("stop", { offset: 0.57, stopColor: "#FF3647" }),
                                Q("stop", { offset: 0.74, stopColor: "#E31587" }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint9_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(233.119 -461.888) scale(2725.89 2678)",
                            children: [
                                Q("stop", { offset: 0.14, stopColor: "#FFF44F" }),
                                Q("stop", { offset: 0.48, stopColor: "#FF980E" }),
                                Q("stop", { offset: 0.66, stopColor: "#FF3647" }),
                                Q("stop", { offset: 0.9, stopColor: "#E31587" }),
                            ],
                        }),
                        Q("radialGradient", {
                            id: "paint10_radial_6845_3639",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(1676.57 -402.153) scale(3276.42 2931.15)",
                            children: [
                                Q("stop", { offset: 0.09, stopColor: "#FFF44F" }),
                                Q("stop", { offset: 0.63, stopColor: "#FF980E" }),
                            ],
                        }),
                        Q("linearGradient", {
                            id: "paint11_linear_6845_3639",
                            x1: 2255.94,
                            y1: 411.874,
                            x2: 447.877,
                            y2: 2387.38,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { offset: 0.17, stopColor: "#FFF44F", stopOpacity: 0.8 }),
                                Q("stop", { offset: 0.6, stopColor: "#FFF44F", stopOpacity: 0 }),
                            ],
                        }),
                        Q("clipPath", {
                            id: "clip0_6845_3639",
                            children: Q("rect", { width: 30, height: 30, fill: "white", transform: "translate(5 5)" }),
                        }),
                    ],
                }),
            ],
        }),
    rQ = (e) =>
        Q("svg", {
            width: 38,
            height: 38,
            viewBox: "0 0 38 38",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("g", {
                    clipPath: "url(#clip0_6851_3788)",
                    children: Q("g", {
                        clipPath: "url(#clip1_6851_3788)",
                        children: [
                            Q("rect", { width: 38, height: 38, fill: "white" }),
                            Q("rect", { width: 38, height: 38, fill: "url(#paint0_linear_6851_3788)" }),
                            Q("path", {
                                d: "M21.5031 7.81104H16.2853C15.7254 7.81104 15.1884 8.03346 14.7925 8.42937L13.0374 10.1845C12.7999 10.422 12.4777 10.5555 12.1417 10.5555H9.7953C8.14003 10.5555 7.3124 10.5555 6.68017 10.8776C6.12404 11.161 5.6719 11.6131 5.38854 12.1692C5.06641 12.8015 5.06641 13.6291 5.06641 15.2844V24.6155C5.06641 26.2707 5.06641 27.0984 5.38854 27.7306C5.6719 28.2867 6.12404 28.7389 6.68017 29.0222C7.3124 29.3444 8.14003 29.3444 9.7953 29.3444H28.2042C29.8595 29.3444 30.6871 29.3444 31.3193 29.0222C31.8754 28.7389 32.3276 28.2867 32.6109 27.7306C32.9331 27.0984 32.9331 26.2707 32.9331 24.6155V15.2844C32.9331 13.6291 32.9331 12.8015 32.6109 12.1692C32.3276 11.6131 31.8754 11.161 31.3193 10.8776C30.6871 10.5555 29.8595 10.5555 28.2042 10.5555H25.6466C25.3107 10.5555 24.9885 10.422 24.751 10.1845L22.9958 8.42937C22.5999 8.03346 22.063 7.81104 21.5031 7.81104Z",
                                fill: "url(#paint1_linear_6851_3788)",
                            }),
                            Q("circle", { cx: 28.4996, cy: 14.7778, r: 1.26667, fill: "#FCCA00" }),
                            Q("g", {
                                filter: "url(#filter0_d_6851_3788)",
                                children: Q("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M18.9998 26.1778C22.4976 26.1778 25.3332 23.3422 25.3332 19.8444C25.3332 16.3466 22.4976 13.5111 18.9998 13.5111C15.502 13.5111 12.6665 16.3466 12.6665 19.8444C12.6665 23.3422 15.502 26.1778 18.9998 26.1778ZM19 24.911C21.7982 24.911 24.0666 22.6426 24.0666 19.8443C24.0666 17.0461 21.7982 14.7777 19 14.7777C16.2017 14.7777 13.9333 17.0461 13.9333 19.8443C13.9333 22.6426 16.2017 24.911 19 24.911Z",
                                    fill: "url(#paint2_linear_6851_3788)",
                                }),
                            }),
                        ],
                    }),
                }),
                Q("defs", {
                    children: [
                        Q("filter", {
                            id: "filter0_d_6851_3788",
                            x: 11.8221,
                            y: 13.5111,
                            width: 14.3554,
                            height: 14.3555,
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                Q("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                                Q("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                Q("feOffset", { dy: 0.844444 }),
                                Q("feGaussianBlur", { stdDeviation: 0.422222 }),
                                Q("feComposite", { in2: "hardAlpha", operator: "out" }),
                                Q("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",
                                }),
                                Q("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_6851_3788",
                                }),
                                Q("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_6851_3788",
                                    result: "shape",
                                }),
                            ],
                        }),
                        Q("linearGradient", {
                            id: "paint0_linear_6851_3788",
                            x1: 19,
                            y1: 0,
                            x2: 19,
                            y2: 38,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#E5E4EB" }),
                                Q("stop", { offset: 1, stopColor: "#8F8E92" }),
                            ],
                        }),
                        Q("linearGradient", {
                            id: "paint1_linear_6851_3788",
                            x1: 18.9997,
                            y1: 7.81104,
                            x2: 18.9997,
                            y2: 29.3444,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#2D2D2D" }),
                                Q("stop", { offset: 1, stopColor: "#2D2C2E" }),
                            ],
                        }),
                        Q("linearGradient", {
                            id: "paint2_linear_6851_3788",
                            x1: 18.9998,
                            y1: 13.5111,
                            x2: 18.9998,
                            y2: 26.1778,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#C4C3C7" }),
                                Q("stop", { offset: 1, stopColor: "#AAA9B0" }),
                            ],
                        }),
                        Q("clipPath", {
                            id: "clip0_6851_3788",
                            children: Q("rect", { width: 38, height: 38, rx: 8.40969, fill: "white" }),
                        }),
                        Q("clipPath", {
                            id: "clip1_6851_3788",
                            children: Q("rect", { width: 38, height: 38, fill: "white" }),
                        }),
                    ],
                }),
            ],
        }),
    rX = (e) =>
        Q("svg", {
            width: 40,
            height: 40,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("path", {
                    d: "M19.9999 37.4384C29.6309 37.4384 37.4384 29.631 37.4384 20C37.4384 10.369 29.6309 2.56158 19.9999 2.56158C10.369 2.56158 2.56152 10.369 2.56152 20C2.56152 29.631 10.369 37.4384 19.9999 37.4384Z",
                    fill: "url(#paint0_linear_5718_12109)",
                }),
                Q("path", {
                    d: "M19.9999 37.4384C29.6309 37.4384 37.4384 29.631 37.4384 20C37.4384 10.369 29.6309 2.56158 19.9999 2.56158C10.369 2.56158 2.56152 10.369 2.56152 20C2.56152 29.631 10.369 37.4384 19.9999 37.4384Z",
                    fill: "url(#paint1_linear_5718_12109)",
                }),
                Q("path", { d: "M31.9209 8.07874L18.5219 18.5671L21.6379 21.6748L31.9209 8.07874Z", fill: "#FF0000" }),
                Q("path", { d: "M7.88135 31.9208L18.5217 18.5218L21.6745 21.6378L7.88135 31.9208Z", fill: "white" }),
                Q("path", {
                    d: "M20 4.33496V6.90045V4.33496ZM20 33.0995V35.665V33.0995ZM22.721 4.56819L22.2778 7.0948L22.721 4.56819ZM17.7221 32.8896L17.279 35.4318L17.7221 32.8896ZM25.3642 5.28341L24.4857 7.69342L25.3642 5.28341ZM15.522 32.3066L14.6436 34.7166L15.522 32.3066ZM17.279 4.56819L17.7221 7.0948L17.279 4.56819ZM22.2778 32.8896L22.721 35.4318L22.2778 32.8896ZM14.6358 5.28341L15.5143 7.69342L14.6358 5.28341ZM24.4702 32.3066L25.3486 34.7166L24.4702 32.3066ZM12.1636 6.434L13.4541 8.65742L12.1636 6.434ZM26.5536 31.3426L27.8364 33.566L26.5536 31.3426ZM9.93239 7.98884L11.5805 9.95571L9.93239 7.98884ZM28.4194 30.0287L30.0676 31.9956L28.4194 30.0287ZM7.98884 9.91684L9.95571 11.565L7.98884 9.91684ZM30.0287 28.4194L31.9956 30.0676L30.0287 28.4194ZM6.41845 12.1714L8.64187 13.4541L6.41845 12.1714ZM31.3426 26.5536L33.566 27.8364L31.3426 26.5536ZM5.26787 14.6436L7.67787 15.522L5.26787 14.6436ZM32.291 24.4624L34.701 25.3409L32.291 24.4624ZM4.56041 17.2557L7.0948 17.7066L4.56041 17.2557ZM32.9052 22.2778L35.4318 22.721L32.9052 22.2778ZM4.33496 20H6.90045H4.33496ZM33.0995 20H35.665H33.0995ZM4.56819 22.721L7.0948 22.2778L4.56819 22.721ZM32.9052 17.7221L35.4318 17.279L32.9052 17.7221ZM5.29119 25.3642L7.70119 24.4857L5.29119 25.3642ZM32.3066 15.5298L34.7166 14.6513L32.3066 15.5298ZM6.434 27.8364L8.65742 26.5536L6.434 27.8364ZM31.3581 13.4541L33.5815 12.1714L31.3581 13.4541ZM7.99661 30.0676L9.96349 28.4194L7.99661 30.0676ZM30.0209 11.5805L31.9878 9.93239L30.0209 11.5805ZM9.90907 32.0111L11.5572 30.0443L9.90907 32.0111ZM28.3961 9.97126L30.0443 8.00439L28.3961 9.97126ZM12.1636 33.566L13.4541 31.3426L12.1636 33.566ZM26.5536 8.65742L27.8364 6.434L26.5536 8.65742ZM18.6317 4.39715L18.7561 5.79651L18.6317 4.39715ZM21.2439 34.219L21.3682 35.6184L21.2439 34.219ZM15.9418 4.87916L16.3072 6.23187L15.9418 4.87916ZM23.6927 33.7837L24.0581 35.1364L23.6927 33.7837ZM13.3764 5.81206L13.9672 7.07926L13.3764 5.81206ZM26.0172 32.9363L26.6158 34.2035L26.0172 32.9363ZM11.013 7.16477L11.8137 8.31535L11.013 7.16477ZM28.1862 31.6846L28.987 32.8352L28.1862 31.6846ZM8.92174 8.92174L9.90907 9.90907L8.92174 8.92174ZM30.0909 30.0909L31.0782 31.0782L30.0909 30.0909ZM7.17255 11.0208L8.32313 11.8215L7.17255 11.0208ZM31.6924 28.2018L32.8274 28.9792L31.6924 28.2018ZM5.80429 13.3764L7.07148 13.9672L5.80429 13.3764ZM32.9285 26.0172L34.1957 26.6158L32.9285 26.0172ZM4.87138 15.9418L6.22409 16.3072L4.87138 15.9418ZM33.7759 23.6927L35.1286 24.0581L33.7759 23.6927ZM4.39715 18.6395L5.79651 18.7639L4.39715 18.6395ZM34.219 21.2516L35.6184 21.376L34.219 21.2516ZM4.4127 21.376L5.81206 21.2516L4.4127 21.376ZM34.2346 18.7639L35.6339 18.6395L34.2346 18.7639ZM4.87138 24.0581L6.22409 23.6927L4.87138 24.0581ZM33.7759 16.3072L35.1286 15.9418L33.7759 16.3072ZM5.80429 26.6236L7.07148 26.0328L5.80429 26.6236ZM32.9285 13.9827L34.1957 13.3919L32.9285 13.9827ZM7.17255 28.9792L8.32313 28.1784L7.17255 28.9792ZM31.6924 11.7982L32.8274 11.0208L31.6924 11.7982ZM11.013 32.8352L11.8137 31.6846L11.013 32.8352ZM28.1784 8.31535L28.987 7.16477L28.1784 8.31535ZM13.3764 34.1879L13.975 32.9207L13.3764 34.1879ZM26.025 7.05593L26.6236 5.78874L26.025 7.05593ZM15.9418 35.1208L16.3072 33.7681L15.9418 35.1208ZM23.6927 6.21632L24.0581 4.86361L23.6927 6.21632ZM18.6317 35.5873L18.7561 34.1879L18.6317 35.5873ZM21.2439 5.76541L21.3682 4.36606L21.2439 5.76541Z",
                    fill: "black",
                }),
                Q("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.8834 6.90045V4.33496H20.1166V6.90045H19.8834ZM21.4844 4.37638L21.36 5.77574L21.1277 5.75509L21.2521 4.35573L21.4844 4.37638ZM18.64 5.80684L18.5156 4.40748L18.7479 4.38683L18.8723 5.78619L18.64 5.80684ZM17.6073 7.11495L17.1642 4.58833L17.3939 4.54804L17.837 7.07466L17.6073 7.11495ZM22.163 7.07466L22.6061 4.54804L22.8358 4.58833L22.3927 7.11495L22.163 7.07466ZM24.1707 4.89402L23.8053 6.24673L23.5802 6.18591L23.9455 4.8332L24.1707 4.89402ZM16.1947 6.26228L15.8293 4.90956L16.0544 4.84875L16.4198 6.20146L16.1947 6.26228ZM15.4047 7.73335L14.5262 5.32335L14.7453 5.24348L15.6238 7.65348L15.4047 7.73335ZM24.3761 7.65348L25.2546 5.24348L25.4737 5.32335L24.5953 7.73335L24.3761 7.65348ZM26.729 5.83855L26.1304 7.10574L25.9196 7.00612L26.5182 5.73893L26.729 5.83855ZM13.8615 7.12853L13.2707 5.86134L13.4821 5.76278L14.0729 7.02998L13.8615 7.12853ZM13.3532 8.71596L12.0627 6.49253L12.2644 6.37546L13.555 8.59888L13.3532 8.71596ZM27.9374 6.49227L26.6546 8.71569L26.4526 8.59914L27.7354 6.37572L27.9374 6.49227ZM29.0824 7.23182L28.2739 8.3824L28.083 8.24831L28.8916 7.09773L29.0824 7.23182ZM11.718 8.38197L10.9173 7.23138L11.1087 7.09816L11.9095 8.24874L11.718 8.38197ZM11.4911 10.0306L9.84301 8.06373L10.0218 7.91394L11.6699 9.88081L11.4911 10.0306ZM30.1336 8.07928L28.4855 10.0462L28.3067 9.89636L29.9549 7.92949L30.1336 8.07928ZM9.82661 9.99152L8.83928 9.0042L9.0042 8.83928L9.99152 9.82661L9.82661 9.99152ZM9.88081 11.6544L7.91394 10.0062L8.06373 9.82746L10.0306 11.4756L9.88081 11.6544ZM32.0627 10.0218L30.0958 11.6699L29.946 11.4911L31.9129 9.84301L32.0627 10.0218ZM32.8933 11.117L31.7583 11.8944L31.6265 11.702L32.7615 10.9246L32.8933 11.117ZM8.25652 11.9172L7.10593 11.1165L7.23916 10.9251L8.38974 11.7258L8.25652 11.9172ZM8.5836 13.5551L6.36017 12.2724L6.47672 12.0704L8.70014 13.3531L8.5836 13.5551ZM33.6398 12.2724L31.4164 13.5551L31.2998 13.3531L33.5232 12.0704L33.6398 12.2724ZM7.0222 14.0729L5.75501 13.4821L5.85356 13.2707L7.12076 13.8615L7.0222 14.0729ZM34.245 13.4976L32.9778 14.0884L32.8792 13.8771L34.1464 13.2862L34.245 13.4976ZM7.63793 15.6316L5.22793 14.7531L5.3078 14.534L7.71781 15.4125L7.63793 15.6316ZM34.7565 14.7609L32.3465 15.6394L32.2666 15.4203L34.6766 14.5418L34.7565 14.7609ZM6.19368 16.4198L4.84097 16.0544L4.90179 15.8293L6.2545 16.1947L6.19368 16.4198ZM35.159 16.0544L33.8063 16.4198L33.7455 16.1947L35.0982 15.8293L35.159 16.0544ZM7.07438 17.8214L4.53999 17.3705L4.58084 17.1409L7.11523 17.5918L7.07438 17.8214ZM35.4519 17.3939L32.9253 17.837L32.885 17.6073L35.4116 17.1642L35.4519 17.3939ZM5.78619 18.88L4.38683 18.7557L4.40748 18.5233L5.80684 18.6477L5.78619 18.88ZM35.6442 18.7557L34.2449 18.88L34.2242 18.6477L35.6236 18.5233L35.6442 18.7557ZM6.90045 20.1166H4.33496V19.8834H6.90045V20.1166ZM35.665 20.1166H33.0995V19.8834H35.665V20.1166ZM5.82238 21.3678L4.42303 21.4922L4.40238 21.2599L5.80174 21.1355L5.82238 21.3678ZM35.608 21.4922L34.2087 21.3678L34.2293 21.1355L35.6287 21.2599L35.608 21.4922ZM7.11495 22.3927L4.58833 22.8358L4.54804 22.6061L7.07466 22.163L7.11495 22.3927ZM35.4116 22.8358L32.885 22.3927L32.9253 22.163L35.4519 22.6061L35.4116 22.8358ZM6.2545 23.8053L4.90179 24.1707L4.84097 23.9455L6.19368 23.5802L6.2545 23.8053ZM35.0982 24.1707L33.7455 23.8053L33.8063 23.5802L35.159 23.9455L35.0982 24.1707ZM34.6611 25.4504L32.2511 24.5719L32.3309 24.3528L34.7409 25.2313L34.6611 25.4504ZM7.74113 24.5953L5.33113 25.4737L5.25125 25.2546L7.66125 24.3761L7.74113 24.5953ZM34.1459 26.7213L32.8787 26.1227L32.9783 25.9118L34.2455 26.5104L34.1459 26.7213ZM7.12076 26.1385L5.85356 26.7293L5.75501 26.5179L7.0222 25.9271L7.12076 26.1385ZM8.71569 26.6546L6.49227 27.9374L6.37572 27.7354L8.59914 26.4526L8.71569 26.6546ZM33.5077 27.9374L31.2843 26.6546L31.4008 26.4526L33.6242 27.7354L33.5077 27.9374ZM8.38974 28.2742L7.23916 29.0749L7.10593 28.8835L8.25652 28.0827L8.38974 28.2742ZM32.7615 29.0754L31.6265 28.298L31.7583 28.1056L32.8933 28.883L32.7615 29.0754ZM10.0384 28.5088L8.07151 30.157L7.92171 29.9782L9.88859 28.3301L10.0384 28.5088ZM31.9207 30.157L29.9538 28.5088L30.1036 28.3301L32.0705 29.9782L31.9207 30.157ZM29.9782 32.0705L28.3301 30.1036L28.5088 29.9538L30.157 31.9207L29.9782 32.0705ZM11.6466 30.1192L9.99845 32.086L9.81968 31.9362L11.4678 29.9694L11.6466 30.1192ZM30.9958 31.1607L30.0084 30.1734L30.1734 30.0084L31.1607 30.9958L30.9958 31.1607ZM13.555 31.4011L12.2644 33.6245L12.0627 33.5074L13.3532 31.284L13.555 31.4011ZM27.7354 33.6242L26.4526 31.4008L26.6546 31.2843L27.9374 33.5077L27.7354 33.6242ZM11.9095 31.7512L11.1087 32.9018L10.9173 32.7686L11.718 31.618L11.9095 31.7512ZM28.8913 32.9018L28.0905 31.7512L28.2819 31.618L29.0827 32.7686L28.8913 32.9018ZM14.534 34.6766L15.4125 32.2666L15.6316 32.3465L14.7531 34.7565L14.534 34.6766ZM25.2391 34.7565L24.3606 32.3465L24.5797 32.2666L25.4582 34.6766L25.2391 34.7565ZM17.1641 35.4118L17.6073 32.8696L17.837 32.9096L17.3939 35.4518L17.1641 35.4118ZM22.6061 35.4518L22.1629 32.9096L22.3927 32.8696L22.8358 35.4118L22.6061 35.4518ZM14.0804 32.9705L13.4818 34.2377L13.2709 34.1381L13.8695 32.8709L14.0804 32.9705ZM26.5104 34.2533L25.9118 32.9861L26.1227 32.8865L26.7213 34.1536L26.5104 34.2533ZM19.8834 35.665V33.0995H20.1166V35.665H19.8834ZM16.4198 33.7985L16.0544 35.1512L15.8293 35.0904L16.1947 33.7377L16.4198 33.7985ZM23.9455 35.1668L23.5802 33.8141L23.8053 33.7532L24.1707 35.106L23.9455 35.1668ZM18.8723 34.1982L18.7479 35.5976L18.5156 35.5769L18.64 34.1776L18.8723 34.1982ZM21.2521 35.6287L21.1277 34.2293L21.36 34.2087L21.4844 35.608L21.2521 35.6287Z",
                    fill: "white",
                    stroke: "white",
                    strokeWidth: 0.2,
                }),
                Q("defs", {
                    children: [
                        Q("linearGradient", {
                            id: "paint0_linear_5718_12109",
                            x1: 2.56152,
                            y1: 2.56158,
                            x2: 2.56152,
                            y2: 178572,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#19D7FF" }),
                                Q("stop", { offset: 1, stopColor: "#1E64F0" }),
                            ],
                        }),
                        Q("linearGradient", {
                            id: "paint1_linear_5718_12109",
                            x1: 19.9999,
                            y1: 2.56158,
                            x2: 19.9999,
                            y2: 37.4384,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#1CCAFB" }),
                                Q("stop", { offset: 1, stopColor: "#1E6FF1" }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    rJ = (e) =>
        Q("svg", {
            width: 38,
            height: 38,
            viewBox: "0 0 38 38",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("path", {
                    d: "M24.7434 -0.00317383C28.544 -0.00317383 30.4443 -0.00317383 32.5135 0.630264C34.7517 1.43262 36.5253 3.20624 37.3277 5.44439C38.0033 7.51362 38.0033 9.45616 38.0033 13.2568V24.7431C38.0033 28.5437 38.0033 30.4441 37.3699 32.5133C36.5675 34.7514 34.7939 36.5251 32.5558 37.3274C30.4443 38.0031 28.544 38.0031 24.7434 38.0031H13.257C9.4564 38.0031 7.55609 38.0031 5.48686 37.3696C3.20649 36.5251 1.47509 34.7937 0.630508 32.5133C-0.00292969 30.4863 -0.00292969 28.586 -0.00292969 24.7431V13.2568C-0.00292969 9.45616 -0.00292969 7.55585 0.630508 5.48662C1.47509 3.24847 3.20649 1.47485 5.48686 0.672493C7.51386 -0.00317389 9.41418 -0.00317383 13.257 -0.00317383H24.7434Z",
                    fill: "url(#paint0_linear_6848_3671)",
                }),
                Q("path", {
                    d: "M19.0001 35.4718C28.0959 35.4718 35.4695 28.0982 35.4695 19.0025C35.4695 9.90667 28.0959 2.53308 19.0001 2.53308C9.90435 2.53308 2.53076 9.90667 2.53076 19.0025C2.53076 28.0982 9.90435 35.4718 19.0001 35.4718Z",
                    fill: "#2E2E30",
                }),
                Q("path", {
                    d: "M20.1087 10.2355C20.1505 10.2414 20.1923 10.2472 20.2341 10.2531C20.3178 10.2649 20.4432 10.2825 20.5268 10.2943L20.9841 9.16449C21.1207 8.79988 21.1984 8.85345 21.1932 9.19388L21.1541 10.3824C21.2796 10.4 21.441 10.4654 21.5664 10.483L22.1433 9.41269C22.3158 9.09577 22.3994 9.10753 22.3465 9.48389L22.1401 10.6489C22.2597 10.7084 22.4211 10.7737 22.5465 10.7913L23.2371 9.82228C23.4514 9.51124 23.5292 9.56482 23.4345 9.9353L23.1026 11.0827C23.2222 11.1422 23.3836 11.2075 23.4973 11.3087L24.2656 10.3933C24.5158 10.1299 24.5936 10.1835 24.463 10.5063L24.0057 11.6361C24.1194 11.7373 24.2389 11.7968 24.3526 11.898L25.2347 11.0838C25.5267 10.8264 25.6045 10.8799 25.4261 11.2387L24.8551 12.2672C24.9688 12.3684 25.0825 12.4697 25.1544 12.5651L26.1443 11.894C26.4304 11.6783 26.5082 11.7319 26.2939 12.0429L25.5498 13.0898C25.6635 13.191 25.7354 13.2864 25.8432 13.4295L26.899 12.8956C27.2211 12.7276 27.2989 12.7812 27.0428 13.0864L26.2385 13.9541C26.3104 14.0495 26.4182 14.1926 26.4842 14.3298L27.612 13.8913C27.97 13.771 28.0001 13.8606 27.7139 14.0762L26.796 14.8427C26.862 14.9799 26.928 15.1171 26.994 15.2544L28.1459 14.9472C28.4981 14.8687 28.5281 14.9582 28.2478 15.1321L27.258 15.8032C27.324 15.9404 27.3482 16.0717 27.4142 16.2089L28.5903 16.0331C28.9366 15.9965 29.0085 16.0918 28.6445 16.2539L27.5887 16.7878C27.6129 16.9192 27.6789 17.0564 27.6972 17.2295L28.8498 17.2209C29.232 17.232 29.2203 17.3157 28.904 17.4418L27.824 17.8444C27.8482 17.9757 27.8665 18.1489 27.8907 18.2802L29.0675 18.4029C29.4438 18.4558 29.4321 18.5395 29.0799 18.6179L27.9339 18.8833C27.958 19.0146 27.9345 19.1819 27.9169 19.3073L29.0284 19.5915C29.3989 19.6862 29.3871 19.7698 28.999 19.8006L27.8287 19.9346C27.8111 20.0601 27.7876 20.2273 27.77 20.3528C27.77 20.3528 27.77 20.3528 27.7641 20.3946L28.8638 20.7624C29.2284 20.8989 29.2167 20.9825 28.8344 20.9715L27.6818 20.9801C27.6583 21.1473 27.5989 21.2669 27.5754 21.4342L28.6097 21.9633C28.9266 22.1358 28.9149 22.2195 28.5385 22.1666L27.4094 22.0079C27.35 22.1275 27.3265 22.2947 27.267 22.4143L28.242 23.0631C28.553 23.2773 28.4994 23.3551 28.1708 23.2663L27.0593 22.9821C26.9998 23.1017 26.9345 23.2631 26.8751 23.3827L27.7487 24.1451C28.0121 24.3954 28.0003 24.479 27.6357 24.3425L26.5837 23.9387C26.4824 24.0524 26.4171 24.2138 26.3158 24.3275L27.0941 25.1619C27.3574 25.4121 27.298 25.5317 26.9393 25.3533L25.8866 24.651C25.7853 24.7647 25.684 24.8784 25.5828 24.9921L26.2657 25.8983C26.4813 26.1845 26.4277 26.2623 26.1167 26.048L25.1836 25.4051C25.0823 25.5188 24.981 25.6325 24.8438 25.6985L25.4313 26.6766C25.5993 26.9987 25.5457 27.0765 25.2405 26.8204L24.3669 26.0579C24.2238 26.1657 24.1284 26.2376 23.9912 26.3036L24.4415 27.3477C24.6035 27.7117 24.514 27.7417 24.2566 27.4497L23.4783 26.6153C23.3411 26.6813 23.2039 26.7473 23.0667 26.8134L23.3797 27.9235C23.5 28.2815 23.4105 28.3116 23.1948 28.0254L22.5597 27.0833C22.4224 27.1493 22.2852 27.2153 22.1062 27.2754L22.2879 28.4097C22.3664 28.7619 22.2769 28.7919 22.0671 28.4639L21.5273 27.4499C21.396 27.4741 21.217 27.5342 21.0856 27.5584L21.1419 28.6751C21.1726 29.0632 21.0472 29.0455 20.9211 28.7293L20.5008 27.7747C20.3695 27.7989 20.1964 27.8172 20.065 27.8414L19.99 28.9822C19.9789 29.3645 19.8535 29.3469 19.775 28.9947L19.4619 27.8846C19.3306 27.9088 19.1633 27.8853 18.9902 27.9036L18.7479 29.0209C18.695 29.3973 18.5695 29.3796 18.5329 29.0333L18.4407 27.869C18.2734 27.8455 18.1479 27.8278 17.9748 27.8461L17.607 28.9459C17.4705 29.3105 17.3869 29.2987 17.3979 28.9165L17.3893 27.7639C17.2221 27.7404 17.0966 27.7227 16.9352 27.6574L16.4479 28.6977C16.3172 29.0204 16.1918 29.0028 16.2447 28.6265L16.3615 27.4915C16.2001 27.4262 16.0747 27.4085 15.9551 27.3491L15.3063 28.324C15.1339 28.6409 15.0084 28.6233 15.1031 28.2528L15.3455 27.1355C15.2259 27.076 15.0645 27.0107 14.9449 26.9512L14.2184 27.8726C14.0041 28.1836 13.8845 28.1242 14.0211 27.7596L14.3888 26.6599C14.2693 26.6004 14.1556 26.4991 13.9942 26.4338L13.154 27.2539C12.9037 27.5173 12.826 27.4637 12.9566 27.1409L13.4858 26.1065C13.3721 26.0052 13.2584 25.904 13.1388 25.8445L12.2267 26.5692C11.9405 26.7849 11.8628 26.7313 12.0771 26.4203L12.7258 25.4453C12.6121 25.3441 12.4984 25.2428 12.4324 25.1056L11.4661 25.6094C11.1381 25.8192 11.0662 25.7238 11.3164 25.4605L12.0429 24.5391C11.9292 24.4378 11.8632 24.3006 11.7914 24.2053L10.7414 24.6973C10.4193 24.8653 10.3474 24.7699 10.5976 24.5066L11.4378 23.6865C11.3718 23.5493 11.2999 23.4539 11.2339 23.3167L10.118 23.6716C9.7599 23.7918 9.72983 23.7023 10.016 23.4867L10.9699 22.7678C10.9039 22.6306 10.8379 22.4934 10.8137 22.3621L9.67355 22.5856C9.32137 22.6641 9.29131 22.5746 9.6193 22.3648L10.6392 21.7832C10.5732 21.646 10.549 21.5146 10.5248 21.3833L9.27684 21.4638C8.88872 21.4945 8.85866 21.405 9.22259 21.2429L10.3085 20.7985C10.2843 20.6672 10.266 20.4941 10.2418 20.3627L9.05328 20.3236C8.67104 20.3125 8.6828 20.2289 9.04085 20.1086L10.1568 19.7538C10.1326 19.6224 10.1562 19.4552 10.132 19.3238L8.96693 19.1174C8.59057 19.0645 8.6082 18.9391 8.9545 18.9025L10.1365 18.6848C10.1541 18.5593 10.1358 18.3862 10.1534 18.2607L9.00604 17.9289C8.63555 17.8342 8.65319 17.7087 9.03543 17.7198L10.2357 17.6753C10.2534 17.5498 10.2769 17.3826 10.2945 17.2571L9.20654 16.8057C8.88375 16.675 8.90138 16.5496 9.27775 16.6025L10.4604 16.6834C10.478 16.5579 10.5434 16.3965 10.6028 16.277L9.57432 15.706C9.2574 15.5335 9.26916 15.4499 9.64552 15.5028L10.8106 15.7091C10.87 15.5896 10.9353 15.4282 10.9948 15.3086L10.0257 14.618C9.71469 14.4037 9.76826 14.326 10.1387 14.4207L11.2803 14.7943C11.3397 14.6748 11.441 14.5611 11.5004 14.4415L10.6327 13.6372C10.3693 13.387 10.4229 13.3092 10.7457 13.4399L11.8278 13.9331C11.929 13.8194 11.9885 13.6998 12.0897 13.5861L11.3232 12.6682C11.0658 12.3761 11.1611 12.3042 11.4722 12.5185L12.4948 13.1313C12.5961 13.0176 12.6915 12.9458 12.7927 12.8321L12.1275 11.8004C11.9177 11.4724 12.0072 11.4423 12.2765 11.6507L13.2396 12.3831C13.3409 12.2694 13.4781 12.2034 13.5794 12.0897L13.0631 10.9084C12.8951 10.5863 12.9905 10.5144 13.2539 10.7647L14.1158 11.6107C14.2112 11.5389 14.3484 11.4729 14.4856 11.4068L14.0889 10.285C13.9686 9.92694 14.0581 9.89687 14.2738 10.183L15.0344 11.1428C15.1716 11.0768 15.3088 11.0108 15.4042 10.9389L15.1447 9.75107C15.0663 9.3989 15.1558 9.36883 15.3715 9.65501L15.9949 10.6808C16.1321 10.6148 16.2634 10.5906 16.3948 10.5664L16.2666 9.35437C16.2358 8.96625 16.3254 8.93619 16.4874 9.30012L16.9737 10.3919C17.105 10.3677 17.2363 10.3435 17.3676 10.3194L17.4068 9.13081C17.4178 8.74857 17.5015 8.76032 17.6217 9.11838L17.9707 10.2762C18.1021 10.252 18.2752 10.2337 18.4007 10.2513L18.5711 9.03858C18.624 8.66222 18.7076 8.67397 18.7861 9.02615L19.0456 10.214C19.171 10.2316 19.3442 10.2133 19.4696 10.231L19.7596 9.07769C19.8544 8.7072 19.938 8.71896 19.9687 9.10708L20.1087 10.2355ZM17.989 26.2277C21.9618 26.786 25.6343 24.0185 26.1926 20.0458C26.751 16.0731 23.9835 12.4005 20.0108 11.8422C16.0381 11.2839 12.3296 14.0036 11.7712 17.9764C11.2129 21.9491 14.0163 25.6693 17.989 26.2277Z",
                    fill: "black",
                }),
                Q("path", {
                    d: "M20.1087 10.2355C20.1505 10.2414 20.1923 10.2472 20.2341 10.2531C20.3178 10.2649 20.4432 10.2825 20.5268 10.2943L20.9841 9.16449C21.1207 8.79988 21.1984 8.85345 21.1932 9.19388L21.1541 10.3824C21.2796 10.4 21.441 10.4654 21.5664 10.483L22.1433 9.41269C22.3158 9.09577 22.3994 9.10753 22.3465 9.48389L22.1401 10.6489C22.2597 10.7084 22.4211 10.7737 22.5465 10.7913L23.2371 9.82228C23.4514 9.51124 23.5292 9.56482 23.4345 9.9353L23.1026 11.0827C23.2222 11.1422 23.3836 11.2075 23.4973 11.3087L24.2656 10.3933C24.5158 10.1299 24.5936 10.1835 24.463 10.5063L24.0057 11.6361C24.1194 11.7373 24.2389 11.7968 24.3526 11.898L25.2347 11.0838C25.5267 10.8264 25.6045 10.8799 25.4261 11.2387L24.8551 12.2672C24.9688 12.3684 25.0825 12.4697 25.1544 12.5651L26.1443 11.894C26.4304 11.6783 26.5082 11.7319 26.2939 12.0429L25.5498 13.0898C25.6635 13.191 25.7354 13.2864 25.8432 13.4295L26.899 12.8956C27.2211 12.7276 27.2989 12.7812 27.0428 13.0864L26.2385 13.9541C26.3104 14.0495 26.4182 14.1926 26.4842 14.3298L27.612 13.8913C27.97 13.771 28.0001 13.8606 27.7139 14.0762L26.796 14.8427C26.862 14.9799 26.928 15.1171 26.994 15.2544L28.1459 14.9472C28.4981 14.8687 28.5281 14.9582 28.2478 15.1321L27.258 15.8032C27.324 15.9404 27.3482 16.0717 27.4142 16.2089L28.5903 16.0331C28.9366 15.9965 29.0085 16.0918 28.6445 16.2539L27.5887 16.7878C27.6129 16.9192 27.6789 17.0564 27.6972 17.2295L28.8498 17.2209C29.232 17.232 29.2203 17.3157 28.904 17.4418L27.824 17.8444C27.8482 17.9757 27.8665 18.1489 27.8907 18.2802L29.0675 18.4029C29.4438 18.4558 29.4321 18.5395 29.0799 18.6179L27.9339 18.8833C27.958 19.0146 27.9345 19.1819 27.9169 19.3073L29.0284 19.5915C29.3989 19.6862 29.3871 19.7698 28.999 19.8006L27.8287 19.9346C27.8111 20.0601 27.7876 20.2273 27.77 20.3528C27.77 20.3528 27.77 20.3528 27.7641 20.3946L28.8638 20.7624C29.2284 20.8989 29.2167 20.9825 28.8344 20.9715L27.6818 20.9801C27.6583 21.1473 27.5989 21.2669 27.5754 21.4342L28.6097 21.9633C28.9266 22.1358 28.9149 22.2195 28.5385 22.1666L27.4094 22.0079C27.35 22.1275 27.3265 22.2947 27.267 22.4143L28.242 23.0631C28.553 23.2773 28.4994 23.3551 28.1708 23.2663L27.0593 22.9821C26.9998 23.1017 26.9345 23.2631 26.8751 23.3827L27.7487 24.1451C28.0121 24.3954 28.0003 24.479 27.6357 24.3425L26.5837 23.9387C26.4824 24.0524 26.4171 24.2138 26.3158 24.3275L27.0941 25.1619C27.3574 25.4121 27.298 25.5317 26.9393 25.3533L25.8866 24.651C25.7853 24.7647 25.684 24.8784 25.5828 24.9921L26.2657 25.8983C26.4813 26.1845 26.4277 26.2623 26.1167 26.048L25.1836 25.4051C25.0823 25.5188 24.981 25.6325 24.8438 25.6985L25.4313 26.6766C25.5993 26.9987 25.5457 27.0765 25.2405 26.8204L24.3669 26.0579C24.2238 26.1657 24.1284 26.2376 23.9912 26.3036L24.4415 27.3477C24.6035 27.7117 24.514 27.7417 24.2566 27.4497L23.4783 26.6153C23.3411 26.6813 23.2039 26.7473 23.0667 26.8134L23.3797 27.9235C23.5 28.2815 23.4105 28.3116 23.1948 28.0254L22.5597 27.0833C22.4224 27.1493 22.2852 27.2153 22.1062 27.2754L22.2879 28.4097C22.3664 28.7619 22.2769 28.7919 22.0671 28.4639L21.5273 27.4499C21.396 27.4741 21.217 27.5342 21.0856 27.5584L21.1419 28.6751C21.1726 29.0632 21.0472 29.0455 20.9211 28.7293L20.5008 27.7747C20.3695 27.7989 20.1964 27.8172 20.065 27.8414L19.99 28.9822C19.9789 29.3645 19.8535 29.3469 19.775 28.9947L19.4619 27.8846C19.3306 27.9088 19.1633 27.8853 18.9902 27.9036L18.7479 29.0209C18.695 29.3973 18.5695 29.3796 18.5329 29.0333L18.4407 27.869C18.2734 27.8455 18.1479 27.8278 17.9748 27.8461L17.607 28.9459C17.4705 29.3105 17.3869 29.2987 17.3979 28.9165L17.3893 27.7639C17.2221 27.7404 17.0966 27.7227 16.9352 27.6574L16.4479 28.6977C16.3172 29.0204 16.1918 29.0028 16.2447 28.6265L16.3615 27.4915C16.2001 27.4262 16.0747 27.4085 15.9551 27.3491L15.3063 28.324C15.1339 28.6409 15.0084 28.6233 15.1031 28.2528L15.3455 27.1355C15.2259 27.076 15.0645 27.0107 14.9449 26.9512L14.2184 27.8726C14.0041 28.1836 13.8845 28.1242 14.0211 27.7596L14.3888 26.6599C14.2693 26.6004 14.1556 26.4991 13.9942 26.4338L13.154 27.2539C12.9037 27.5173 12.826 27.4637 12.9566 27.1409L13.4858 26.1065C13.3721 26.0052 13.2584 25.904 13.1388 25.8445L12.2267 26.5692C11.9405 26.7849 11.8628 26.7313 12.0771 26.4203L12.7258 25.4453C12.6121 25.3441 12.4984 25.2428 12.4324 25.1056L11.4661 25.6094C11.1381 25.8192 11.0662 25.7238 11.3164 25.4605L12.0429 24.5391C11.9292 24.4378 11.8632 24.3006 11.7914 24.2053L10.7414 24.6973C10.4193 24.8653 10.3474 24.7699 10.5976 24.5066L11.4378 23.6865C11.3718 23.5493 11.2999 23.4539 11.2339 23.3167L10.118 23.6716C9.7599 23.7918 9.72983 23.7023 10.016 23.4867L10.9699 22.7678C10.9039 22.6306 10.8379 22.4934 10.8137 22.3621L9.67355 22.5856C9.32137 22.6641 9.29131 22.5746 9.6193 22.3648L10.6392 21.7832C10.5732 21.646 10.549 21.5146 10.5248 21.3833L9.27684 21.4638C8.88872 21.4945 8.85866 21.405 9.22259 21.2429L10.3085 20.7985C10.2843 20.6672 10.266 20.4941 10.2418 20.3627L9.05328 20.3236C8.67104 20.3125 8.6828 20.2289 9.04085 20.1086L10.1568 19.7538C10.1326 19.6224 10.1562 19.4552 10.132 19.3238L8.96693 19.1174C8.59057 19.0645 8.6082 18.9391 8.9545 18.9025L10.1365 18.6848C10.1541 18.5593 10.1358 18.3862 10.1534 18.2607L9.00604 17.9289C8.63555 17.8342 8.65319 17.7087 9.03543 17.7198L10.2357 17.6753C10.2534 17.5498 10.2769 17.3826 10.2945 17.2571L9.20654 16.8057C8.88375 16.675 8.90138 16.5496 9.27775 16.6025L10.4604 16.6834C10.478 16.5579 10.5434 16.3965 10.6028 16.277L9.57432 15.706C9.2574 15.5335 9.26916 15.4499 9.64552 15.5028L10.8106 15.7091C10.87 15.5896 10.9353 15.4282 10.9948 15.3086L10.0257 14.618C9.71469 14.4037 9.76826 14.326 10.1387 14.4207L11.2803 14.7943C11.3397 14.6748 11.441 14.5611 11.5004 14.4415L10.6327 13.6372C10.3693 13.387 10.4229 13.3092 10.7457 13.4399L11.8278 13.9331C11.929 13.8194 11.9885 13.6998 12.0897 13.5861L11.3232 12.6682C11.0658 12.3761 11.1611 12.3042 11.4722 12.5185L12.4948 13.1313C12.5961 13.0176 12.6915 12.9458 12.7927 12.8321L12.1275 11.8004C11.9177 11.4724 12.0072 11.4423 12.2765 11.6507L13.2396 12.3831C13.3409 12.2694 13.4781 12.2034 13.5794 12.0897L13.0631 10.9084C12.8951 10.5863 12.9905 10.5144 13.2539 10.7647L14.1158 11.6107C14.2112 11.5389 14.3484 11.4729 14.4856 11.4068L14.0889 10.285C13.9686 9.92694 14.0581 9.89687 14.2738 10.183L15.0344 11.1428C15.1716 11.0768 15.3088 11.0108 15.4042 10.9389L15.1447 9.75107C15.0663 9.3989 15.1558 9.36883 15.3715 9.65501L15.9949 10.6808C16.1321 10.6148 16.2634 10.5906 16.3948 10.5664L16.2666 9.35437C16.2358 8.96625 16.3254 8.93619 16.4874 9.30012L16.9737 10.3919C17.105 10.3677 17.2363 10.3435 17.3676 10.3194L17.4068 9.13081C17.4178 8.74857 17.5015 8.76032 17.6217 9.11838L17.9707 10.2762C18.1021 10.252 18.2752 10.2337 18.4007 10.2513L18.5711 9.03858C18.624 8.66222 18.7076 8.67397 18.7861 9.02615L19.0456 10.214C19.171 10.2316 19.3442 10.2133 19.4696 10.231L19.7596 9.07769C19.8544 8.7072 19.938 8.71896 19.9687 9.10708L20.1087 10.2355ZM17.989 26.2277C21.9618 26.786 25.6343 24.0185 26.1926 20.0458C26.751 16.0731 23.9835 12.4005 20.0108 11.8422C16.0381 11.2839 12.3296 14.0036 11.7712 17.9764C11.2129 21.9491 14.0163 25.6693 17.989 26.2277Z",
                    fill: "#7F7F7F",
                }),
                Q("path", {
                    d: "M20.1087 10.2355C20.1505 10.2414 20.1923 10.2472 20.2341 10.2531C20.3178 10.2649 20.4432 10.2825 20.5268 10.2943L20.9841 9.16449C21.1207 8.79988 21.1984 8.85345 21.1932 9.19388L21.1541 10.3824C21.2796 10.4 21.441 10.4654 21.5664 10.483L22.1433 9.41269C22.3158 9.09577 22.3994 9.10753 22.3465 9.48389L22.1401 10.6489C22.2597 10.7084 22.4211 10.7737 22.5465 10.7913L23.2371 9.82228C23.4514 9.51124 23.5292 9.56482 23.4345 9.9353L23.1026 11.0827C23.2222 11.1422 23.3836 11.2075 23.4973 11.3087L24.2656 10.3933C24.5158 10.1299 24.5936 10.1835 24.463 10.5063L24.0057 11.6361C24.1194 11.7373 24.2389 11.7968 24.3526 11.898L25.2347 11.0838C25.5267 10.8264 25.6045 10.8799 25.4261 11.2387L24.8551 12.2672C24.9688 12.3684 25.0825 12.4697 25.1544 12.5651L26.1443 11.894C26.4304 11.6783 26.5082 11.7319 26.2939 12.0429L25.5498 13.0898C25.6635 13.191 25.7354 13.2864 25.8432 13.4295L26.899 12.8956C27.2211 12.7276 27.2989 12.7812 27.0428 13.0864L26.2385 13.9541C26.3104 14.0495 26.4182 14.1926 26.4842 14.3298L27.612 13.8913C27.97 13.771 28.0001 13.8606 27.7139 14.0762L26.796 14.8427C26.862 14.9799 26.928 15.1171 26.994 15.2544L28.1459 14.9472C28.4981 14.8687 28.5281 14.9582 28.2478 15.1321L27.258 15.8032C27.324 15.9404 27.3482 16.0717 27.4142 16.2089L28.5903 16.0331C28.9366 15.9965 29.0085 16.0918 28.6445 16.2539L27.5887 16.7878C27.6129 16.9192 27.6789 17.0564 27.6972 17.2295L28.8498 17.2209C29.232 17.232 29.2203 17.3157 28.904 17.4418L27.824 17.8444C27.8482 17.9757 27.8665 18.1489 27.8907 18.2802L29.0675 18.4029C29.4438 18.4558 29.4321 18.5395 29.0799 18.6179L27.9339 18.8833C27.958 19.0146 27.9345 19.1819 27.9169 19.3073L29.0284 19.5915C29.3989 19.6862 29.3871 19.7698 28.999 19.8006L27.8287 19.9346C27.8111 20.0601 27.7876 20.2273 27.77 20.3528C27.77 20.3528 27.77 20.3528 27.7641 20.3946L28.8638 20.7624C29.2284 20.8989 29.2167 20.9825 28.8344 20.9715L27.6818 20.9801C27.6583 21.1473 27.5989 21.2669 27.5754 21.4342L28.6097 21.9633C28.9266 22.1358 28.9149 22.2195 28.5385 22.1666L27.4094 22.0079C27.35 22.1275 27.3265 22.2947 27.267 22.4143L28.242 23.0631C28.553 23.2773 28.4994 23.3551 28.1708 23.2663L27.0593 22.9821C26.9998 23.1017 26.9345 23.2631 26.8751 23.3827L27.7487 24.1451C28.0121 24.3954 28.0003 24.479 27.6357 24.3425L26.5837 23.9387C26.4824 24.0524 26.4171 24.2138 26.3158 24.3275L27.0941 25.1619C27.3574 25.4121 27.298 25.5317 26.9393 25.3533L25.8866 24.651C25.7853 24.7647 25.684 24.8784 25.5828 24.9921L26.2657 25.8983C26.4813 26.1845 26.4277 26.2623 26.1167 26.048L25.1836 25.4051C25.0823 25.5188 24.981 25.6325 24.8438 25.6985L25.4313 26.6766C25.5993 26.9987 25.5457 27.0765 25.2405 26.8204L24.3669 26.0579C24.2238 26.1657 24.1284 26.2376 23.9912 26.3036L24.4415 27.3477C24.6035 27.7117 24.514 27.7417 24.2566 27.4497L23.4783 26.6153C23.3411 26.6813 23.2039 26.7473 23.0667 26.8134L23.3797 27.9235C23.5 28.2815 23.4105 28.3116 23.1948 28.0254L22.5597 27.0833C22.4224 27.1493 22.2852 27.2153 22.1062 27.2754L22.2879 28.4097C22.3664 28.7619 22.2769 28.7919 22.0671 28.4639L21.5273 27.4499C21.396 27.4741 21.217 27.5342 21.0856 27.5584L21.1419 28.6751C21.1726 29.0632 21.0472 29.0455 20.9211 28.7293L20.5008 27.7747C20.3695 27.7989 20.1964 27.8172 20.065 27.8414L19.99 28.9822C19.9789 29.3645 19.8535 29.3469 19.775 28.9947L19.4619 27.8846C19.3306 27.9088 19.1633 27.8853 18.9902 27.9036L18.7479 29.0209C18.695 29.3973 18.5695 29.3796 18.5329 29.0333L18.4407 27.869C18.2734 27.8455 18.1479 27.8278 17.9748 27.8461L17.607 28.9459C17.4705 29.3105 17.3869 29.2987 17.3979 28.9165L17.3893 27.7639C17.2221 27.7404 17.0966 27.7227 16.9352 27.6574L16.4479 28.6977C16.3172 29.0204 16.1918 29.0028 16.2447 28.6265L16.3615 27.4915C16.2001 27.4262 16.0747 27.4085 15.9551 27.3491L15.3063 28.324C15.1339 28.6409 15.0084 28.6233 15.1031 28.2528L15.3455 27.1355C15.2259 27.076 15.0645 27.0107 14.9449 26.9512L14.2184 27.8726C14.0041 28.1836 13.8845 28.1242 14.0211 27.7596L14.3888 26.6599C14.2693 26.6004 14.1556 26.4991 13.9942 26.4338L13.154 27.2539C12.9037 27.5173 12.826 27.4637 12.9566 27.1409L13.4858 26.1065C13.3721 26.0052 13.2584 25.904 13.1388 25.8445L12.2267 26.5692C11.9405 26.7849 11.8628 26.7313 12.0771 26.4203L12.7258 25.4453C12.6121 25.3441 12.4984 25.2428 12.4324 25.1056L11.4661 25.6094C11.1381 25.8192 11.0662 25.7238 11.3164 25.4605L12.0429 24.5391C11.9292 24.4378 11.8632 24.3006 11.7914 24.2053L10.7414 24.6973C10.4193 24.8653 10.3474 24.7699 10.5976 24.5066L11.4378 23.6865C11.3718 23.5493 11.2999 23.4539 11.2339 23.3167L10.118 23.6716C9.7599 23.7918 9.72983 23.7023 10.016 23.4867L10.9699 22.7678C10.9039 22.6306 10.8379 22.4934 10.8137 22.3621L9.67355 22.5856C9.32137 22.6641 9.29131 22.5746 9.6193 22.3648L10.6392 21.7832C10.5732 21.646 10.549 21.5146 10.5248 21.3833L9.27684 21.4638C8.88872 21.4945 8.85866 21.405 9.22259 21.2429L10.3085 20.7985C10.2843 20.6672 10.266 20.4941 10.2418 20.3627L9.05328 20.3236C8.67104 20.3125 8.6828 20.2289 9.04085 20.1086L10.1568 19.7538C10.1326 19.6224 10.1562 19.4552 10.132 19.3238L8.96693 19.1174C8.59057 19.0645 8.6082 18.9391 8.9545 18.9025L10.1365 18.6848C10.1541 18.5593 10.1358 18.3862 10.1534 18.2607L9.00604 17.9289C8.63555 17.8342 8.65319 17.7087 9.03543 17.7198L10.2357 17.6753C10.2534 17.5498 10.2769 17.3826 10.2945 17.2571L9.20654 16.8057C8.88375 16.675 8.90138 16.5496 9.27775 16.6025L10.4604 16.6834C10.478 16.5579 10.5434 16.3965 10.6028 16.277L9.57432 15.706C9.2574 15.5335 9.26916 15.4499 9.64552 15.5028L10.8106 15.7091C10.87 15.5896 10.9353 15.4282 10.9948 15.3086L10.0257 14.618C9.71469 14.4037 9.76826 14.326 10.1387 14.4207L11.2803 14.7943C11.3397 14.6748 11.441 14.5611 11.5004 14.4415L10.6327 13.6372C10.3693 13.387 10.4229 13.3092 10.7457 13.4399L11.8278 13.9331C11.929 13.8194 11.9885 13.6998 12.0897 13.5861L11.3232 12.6682C11.0658 12.3761 11.1611 12.3042 11.4722 12.5185L12.4948 13.1313C12.5961 13.0176 12.6915 12.9458 12.7927 12.8321L12.1275 11.8004C11.9177 11.4724 12.0072 11.4423 12.2765 11.6507L13.2396 12.3831C13.3409 12.2694 13.4781 12.2034 13.5794 12.0897L13.0631 10.9084C12.8951 10.5863 12.9905 10.5144 13.2539 10.7647L14.1158 11.6107C14.2112 11.5389 14.3484 11.4729 14.4856 11.4068L14.0889 10.285C13.9686 9.92694 14.0581 9.89687 14.2738 10.183L15.0344 11.1428C15.1716 11.0768 15.3088 11.0108 15.4042 10.9389L15.1447 9.75107C15.0663 9.3989 15.1558 9.36883 15.3715 9.65501L15.9949 10.6808C16.1321 10.6148 16.2634 10.5906 16.3948 10.5664L16.2666 9.35437C16.2358 8.96625 16.3254 8.93619 16.4874 9.30012L16.9737 10.3919C17.105 10.3677 17.2363 10.3435 17.3676 10.3194L17.4068 9.13081C17.4178 8.74857 17.5015 8.76032 17.6217 9.11838L17.9707 10.2762C18.1021 10.252 18.2752 10.2337 18.4007 10.2513L18.5711 9.03858C18.624 8.66222 18.7076 8.67397 18.7861 9.02615L19.0456 10.214C19.171 10.2316 19.3442 10.2133 19.4696 10.231L19.7596 9.07769C19.8544 8.7072 19.938 8.71896 19.9687 9.10708L20.1087 10.2355ZM17.989 26.2277C21.9618 26.786 25.6343 24.0185 26.1926 20.0458C26.751 16.0731 23.9835 12.4005 20.0108 11.8422C16.0381 11.2839 12.3296 14.0036 11.7712 17.9764C11.2129 21.9491 14.0163 25.6693 17.989 26.2277Z",
                    fill: "#B4B4B9",
                }),
                Q("path", {
                    d: "M33.8222 19.7613C34.3712 19.6768 34.3712 19.5501 33.8222 19.4234L32.2597 19.1278C32.2597 19.0856 32.2597 19.0434 32.2597 19.0011C32.2597 18.79 32.2597 18.5788 32.2597 18.3677L33.78 17.9876C34.329 17.8609 34.2867 17.692 33.7378 17.6498L32.1753 17.5231C32.1331 17.2697 32.1331 17.0586 32.0908 16.8052L33.5688 16.2562C34.0756 16.0451 34.0756 15.9184 33.5266 15.9184L31.9641 15.9606C31.9219 15.7073 31.8375 15.4961 31.7952 15.2427L33.1888 14.5248C33.6955 14.2715 33.6111 14.1448 33.1043 14.2292L31.5418 14.4826C31.4574 14.2715 31.3729 14.0181 31.2885 13.8069L32.5976 12.9201C33.0621 12.5823 32.9776 12.4556 32.4709 12.6245L30.9506 13.0468C30.824 12.8357 30.7395 12.6245 30.6128 12.4134L31.7952 11.3577C32.2175 10.9776 32.1331 10.8509 31.6263 11.062L30.1905 11.6533C30.0638 11.4421 29.8949 11.231 29.7682 11.062L30.824 9.87963C31.204 9.45734 31.1196 9.37288 30.6128 9.62626L29.1348 10.3864C28.9659 10.2175 28.8392 10.0063 28.6703 9.8374L29.5993 8.5283C29.9371 8.06378 29.8105 7.97932 29.3459 8.27492L28.0791 9.20397C27.9101 9.03505 27.7412 8.86613 27.5301 8.73945L28.2902 7.34588C28.5436 6.83913 28.4169 6.75467 28.0368 7.13474L26.8966 8.19047C26.6855 8.06378 26.5166 7.89486 26.3054 7.76817L26.8966 6.29015C27.1078 5.7834 26.9811 5.69895 26.601 6.12124L25.5875 7.30365C25.3764 7.17697 25.1652 7.09251 24.9541 6.96582L25.3342 5.44557C25.4608 4.89659 25.3342 4.85436 25.0386 5.31888L24.194 6.62799C23.9828 6.54353 23.7295 6.45907 23.5183 6.37461L23.7295 4.81213C23.8139 4.26315 23.6872 4.22092 23.4338 4.72767L22.716 6.12124C22.5048 6.03678 22.2514 5.99455 21.9981 5.95232L22.0403 4.38984C22.0403 3.84086 21.9136 3.79863 21.7025 4.34761L21.1535 5.82563C20.9001 5.7834 20.689 5.74117 20.4356 5.74117L20.1822 4.22092C20.14 3.67194 19.9711 3.67194 19.8444 4.17869L19.4643 5.69895C19.2954 5.69895 19.1265 5.69895 18.9576 5.69895C18.8731 5.69895 18.7886 5.69895 18.7464 5.69895L18.4086 4.13647C18.2819 3.58749 18.1552 3.58749 18.0707 4.13647L17.9018 5.69895C17.6485 5.69895 17.4373 5.74117 17.1839 5.7834L16.635 4.30538C16.466 3.79863 16.2971 3.79863 16.2971 4.34761L16.3393 5.91009C16.086 5.95232 15.8748 5.99455 15.6214 6.07901L14.9458 4.64322C14.6924 4.13647 14.5657 4.1787 14.6079 4.72767L14.7769 6.29015C14.5657 6.37461 14.3123 6.45907 14.1012 6.54353L13.2566 5.23442C12.961 4.7699 12.8343 4.81213 12.961 5.36111L13.3411 6.88136C13.1299 6.96582 12.9188 7.09251 12.7076 7.2192L11.6941 5.99455C11.3563 5.57226 11.2296 5.65672 11.3985 6.16347L11.9475 7.64149C11.7364 7.76817 11.5252 7.89486 11.3563 8.02155L10.2161 6.92359C9.79383 6.54353 9.70937 6.62799 9.96274 7.13474L10.6806 8.5283C10.5117 8.69722 10.3006 8.8239 10.1317 8.99282L8.86478 8.06378C8.40026 7.72595 8.3158 7.85263 8.61141 8.27492L9.49822 9.58403C9.3293 9.75295 9.16039 9.92186 8.99147 10.133L7.64014 9.33065C7.17562 9.03505 7.04893 9.16174 7.42899 9.58403L8.44249 10.7664C8.3158 10.9354 8.14689 11.1465 8.0202 11.3577L6.58441 10.7242C6.07766 10.5131 5.9932 10.6398 6.41549 11.0198L7.59791 12.0755C7.47122 12.2867 7.34453 12.4978 7.26008 12.709L5.73982 12.2867C5.19085 12.1178 5.14862 12.2867 5.61314 12.5823L6.88001 13.4691C6.79555 13.6803 6.66887 13.8914 6.58441 14.1448L5.02193 13.8914C4.47295 13.8069 4.43072 13.9336 4.89524 14.187L6.2888 14.9471C6.20434 15.1583 6.16212 15.4117 6.07766 15.6228L4.51518 15.5806C3.9662 15.5806 3.92397 15.7073 4.43072 15.9184L5.90874 16.4674C5.86651 16.7208 5.82428 16.9319 5.78205 17.1853L4.21957 17.3964C3.6706 17.4387 3.67059 17.5653 4.17734 17.7343L5.6976 18.1565C5.6976 18.4099 5.65537 18.6211 5.65537 18.8744L4.09289 19.1701C3.54391 19.2545 3.54391 19.4234 4.09289 19.5079L5.65537 19.719C5.65537 19.9724 5.6976 20.1835 5.6976 20.4369L4.17734 20.9014C3.62837 21.0704 3.6706 21.1971 4.21957 21.2393L5.78205 21.2815C5.82428 21.5349 5.86651 21.746 5.90874 21.9994L4.47295 22.6751C3.9662 22.9284 4.00843 23.0551 4.55741 23.0129L6.11989 22.844C6.20435 23.0974 6.24657 23.3085 6.33103 23.5619L4.9797 24.3642C4.51518 24.6598 4.55741 24.7865 5.10639 24.6598L6.66887 24.322C6.75332 24.5332 6.88001 24.7443 6.96447 24.9977L5.73982 25.9689C5.31753 26.3068 5.35976 26.4335 5.90874 26.2645L7.38676 25.7578C7.51345 25.9689 7.64014 26.1801 7.76682 26.3912L6.75332 27.4047C6.37326 27.7848 6.45772 27.9115 6.92224 27.6581L8.35803 26.9824C8.48472 27.1936 8.65364 27.3625 8.82255 27.5314L7.85128 28.7561C7.51345 29.1784 7.59791 29.305 8.06243 29.0094L9.37153 28.1649C9.54045 28.3338 9.70937 28.5027 9.87828 28.6716L9.07593 30.0229C8.78032 30.4875 8.90701 30.5719 9.3293 30.2341L10.5539 29.2206C10.7229 29.3895 10.934 29.5162 11.1452 29.6851L10.4695 31.1209C10.2161 31.6277 10.3428 31.7121 10.7229 31.2898L11.8208 30.1496C12.032 30.2763 12.2431 30.403 12.4543 30.5297L11.9475 32.0077C11.7786 32.5145 11.9053 32.5989 12.2431 32.1766L13.2144 30.9098C13.4255 30.9942 13.6367 31.1209 13.8901 31.2054L13.5944 32.7678C13.4678 33.3168 13.6367 33.3591 13.8901 32.8945L14.6924 31.5432C14.9036 31.6277 15.1569 31.7121 15.3681 31.7543L15.1992 33.3591C15.1569 33.908 15.2836 33.9503 15.537 33.4435L16.1704 32.0077C16.4238 32.0499 16.6349 32.0922 16.8883 32.1344L16.9728 33.6969C17.015 34.2459 17.1417 34.2459 17.3106 33.7391L17.7329 32.2189C17.9863 32.2611 18.2397 32.2611 18.4508 32.2611L18.7042 33.8236C18.7886 34.3726 18.9153 34.3726 19.042 33.8236L19.3376 32.2611C19.591 32.2611 19.8021 32.2611 20.0555 32.2189L20.4778 33.7391C20.6467 34.2881 20.7734 34.2459 20.8156 33.6969L20.9001 32.1344C21.1535 32.0922 21.3646 32.0499 21.618 32.0077L22.2092 33.4435C22.4203 33.9503 22.547 33.908 22.547 33.3591L22.3781 31.881C22.6315 31.8388 22.8426 31.7543 23.0538 31.6699L23.8561 33.0212C24.1517 33.4857 24.2784 33.4435 24.1517 32.8945L23.8561 31.3321C24.0673 31.2476 24.3207 31.1631 24.5318 31.0364L25.4608 32.3033C25.7987 32.7678 25.9254 32.6834 25.7565 32.1344L25.3342 30.6986C25.5453 30.5719 25.7565 30.4452 25.9676 30.3186L27.0233 31.4587C27.4034 31.881 27.5301 31.7966 27.3189 31.2898L26.6855 29.854C26.8966 29.7273 27.0656 29.5584 27.2767 29.4317L28.5013 30.4452C28.9236 30.7831 29.0503 30.6986 28.7547 30.2341L27.9524 28.8828C28.1213 28.7138 28.2902 28.5449 28.4591 28.376L29.7682 29.2206C30.2327 29.5162 30.3172 29.4317 29.9794 28.9672L29.0081 27.7426C29.177 27.5737 29.3037 27.3625 29.4726 27.1936L30.9084 27.9115C31.4152 28.1649 31.4996 28.0382 31.1196 27.6581L29.9794 26.5179C30.1061 26.3068 30.2327 26.1379 30.3594 25.9267L31.8375 26.4335C32.3442 26.6024 32.4287 26.4757 32.0064 26.1379L30.7817 25.1666C30.9084 24.9554 30.9929 24.7443 31.1196 24.4909L32.6398 24.8288C33.1888 24.9554 33.231 24.8288 32.7665 24.5332L31.4152 23.6886C31.4996 23.4774 31.5841 23.2241 31.6685 23.0129L33.231 23.1818C33.78 23.2241 33.8222 23.0974 33.3155 22.844L31.8797 22.1683C31.9219 21.9149 32.0064 21.7038 32.0486 21.4504L33.6111 21.4082C34.1601 21.4082 34.2023 21.2393 33.6533 21.0704L32.1753 20.6903C32.2175 20.4369 32.2175 20.2258 32.2597 19.9724L33.8222 19.7613ZM13.4678 27.1936C13.0455 27.9537 11.9475 28.0382 11.2718 27.6581C10.8073 27.4047 9.70937 26.349 8.69587 24.7021C7.76682 23.0129 7.26008 21.1126 7.26008 19.0434C7.26008 15.5806 8.7381 12.4978 11.1452 10.3442C11.9053 9.92186 12.961 10.0063 13.3833 10.7242L17.564 17.9032C17.9018 18.4944 17.9018 19.6346 17.5218 20.2258L13.4678 27.1936ZM28.0368 26.4335C26.6855 28.0382 24.9541 29.305 22.9271 30.0229C20.3089 30.7831 16.8883 30.8253 15.5792 30.1074C14.6924 29.6851 14.3546 28.7561 14.7769 27.9959L18.9153 20.817C19.2532 20.2258 20.14 19.719 20.8156 19.719H28.8814C29.7682 19.719 30.3594 20.4792 30.3594 21.2393C30.3594 21.9149 29.8105 24.2375 28.0368 26.4335ZM18.3663 19.0011C18.3663 18.6633 18.662 18.3677 18.9998 18.3677C19.3376 18.3677 19.6332 18.6633 19.6332 19.0011C19.6332 19.339 19.3376 19.6346 18.9998 19.6346C18.662 19.6346 18.3663 19.339 18.3663 19.0011ZM29.0503 18.241H20.6045C19.8866 18.1988 19.042 17.6076 18.7042 16.9741L14.6924 10.0063C14.2701 9.2462 14.7346 8.40161 15.4103 8.02155C15.8748 7.76817 17.3528 7.30365 19.2954 7.30365C24.8274 7.43034 29.3882 11.4421 30.4439 16.6785C30.5706 17.5653 29.8105 18.241 29.0503 18.241Z",
                    fill: "url(#paint1_linear_6848_3671)",
                }),
                Q("defs", {
                    children: [
                        Q("linearGradient", {
                            id: "paint0_linear_6848_3671",
                            x1: 18.9943,
                            y1: 0.00865034,
                            x2: 18.9943,
                            y2: 38.0022,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#E4E5EA" }),
                                Q("stop", { offset: 1, stopColor: "#8F8F94" }),
                            ],
                        }),
                        Q("linearGradient", {
                            id: "paint1_linear_6848_3671",
                            x1: 18.9915,
                            y1: 3.77593,
                            x2: 18.9915,
                            y2: 34.2685,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { stopColor: "#DCDCE1" }),
                                Q("stop", { offset: 1, stopColor: "#97979C" }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    r1 = (e) =>
        Q("svg", {
            width: 38,
            height: 38,
            viewBox: "0 0 38 38",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("g", {
                    clipPath: "url(#clip0_6848_3728)",
                    children: [
                        Q("rect", { width: 38, height: 38, rx: 8, fill: "#E9E9EB" }),
                        Q("rect", { width: 38, height: 38, fill: "url(#paint0_linear_6848_3728)" }),
                        Q("rect", { x: 4, y: 10, width: 30, height: 18, rx: 9, fill: "#34C759" }),
                        Q("rect", { x: 18, y: 12, width: 14, height: 14, rx: 7, fill: "white" }),
                    ],
                }),
                Q("defs", {
                    children: [
                        Q("linearGradient", {
                            id: "paint0_linear_6848_3728",
                            x1: 19,
                            y1: 0,
                            x2: 19,
                            y2: 38,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                Q("stop", { offset: 0.612213, stopColor: "#E5E4EB" }),
                                Q("stop", { offset: 1, stopColor: "#8F8E92" }),
                            ],
                        }),
                        Q("clipPath", {
                            id: "clip0_6848_3728",
                            children: Q("rect", { width: 38, height: 38, rx: 8, fill: "white" }),
                        }),
                    ],
                }),
            ],
        }),
    r2 = (e) =>
        Q("svg", {
            width: 40,
            height: 40,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("rect", { width: 40, height: 40, rx: 8, fill: "var(--surface-neutral-50)" }),
                Q("g", {
                    clipPath: "url(#clip0_6845_3465)",
                    children: [
                        Q("path", {
                            d: "M23.7499 7.175C25.0934 7.175 26.3964 7.53521 27.5934 8.125H27.8753C25.619 6.62638 22.9139 5.75 19.9998 5.75C17.0856 5.75 14.3805 6.62638 12.1243 8.125H19.8494C21.0551 7.51858 22.37 7.175 23.7499 7.175Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M23.7499 7.175C25.0934 7.175 26.3964 7.53521 27.5934 8.125H27.8753C25.619 6.62638 22.9139 5.75 19.9998 5.75C17.0856 5.75 14.3805 6.62638 12.1243 8.125H19.8494C21.0551 7.51858 22.37 7.175 23.7499 7.175Z",
                            fill: "#37B3F5",
                        }),
                        Q("path", {
                            d: "M9.39673 10.5H16.7814C17.6807 9.51279 18.7131 8.69737 19.8499 8.125H12.1248C11.1146 8.79633 10.2034 9.59988 9.39673 10.5Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M9.39673 10.5H16.7814C17.6807 9.51279 18.7131 8.69737 19.8499 8.125H12.1248C11.1146 8.79633 10.2034 9.59988 9.39673 10.5Z",
                            fill: "#4098F5",
                        }),
                        Q("path", {
                            d: "M28.9522 8.91667C28.6063 8.63642 28.2477 8.372 27.8756 8.125H27.5938C28.064 8.35696 28.5192 8.62058 28.9522 8.91667Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M28.9522 8.91667C28.6063 8.63642 28.2477 8.372 27.8756 8.125H27.5938C28.064 8.35696 28.5192 8.62058 28.9522 8.91667Z",
                            fill: "#37B3F5",
                        }),
                        Q("path", {
                            d: "M16.5102 10.7898C16.5965 10.6884 16.6915 10.5974 16.781 10.5H9.3963C8.74318 11.2291 8.16289 12.0224 7.66968 12.875H14.7955C15.2966 12.058 15.8753 11.3526 16.5102 10.7898Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M16.5102 10.7898C16.5965 10.6884 16.6915 10.5974 16.781 10.5H9.3963C8.74318 11.2291 8.16289 12.0224 7.66968 12.875H14.7955C15.2966 12.058 15.8753 11.3526 16.5102 10.7898Z",
                            fill: "#4687F5",
                        }),
                        Q("path", {
                            d: "M16.5068 10.7937C16.6232 10.6908 16.742 10.5934 16.8623 10.5H16.8591C16.7412 10.5918 16.6256 10.6884 16.5108 10.7898C16.5092 10.7913 16.5076 10.7921 16.5068 10.7937Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            opacity: 0.35,
                            d: "M16.5068 10.7937C16.6232 10.6908 16.742 10.5934 16.8623 10.5H16.8591C16.7412 10.5918 16.6256 10.6884 16.5108 10.7898C16.5092 10.7913 16.5076 10.7921 16.5068 10.7937Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M16.8593 10.5H16.7809C16.6914 10.5982 16.5972 10.6884 16.5101 10.7898C16.6249 10.6884 16.7405 10.5918 16.8593 10.5Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M16.8593 10.5H16.7809C16.6914 10.5982 16.5972 10.6884 16.5101 10.7898C16.6249 10.6884 16.7405 10.5918 16.8593 10.5Z",
                            fill: "#3D1875",
                        }),
                        Q("path", {
                            d: "M14.7955 12.875H7.66892C7.23429 13.6263 6.87012 14.4203 6.57642 15.25H13.6761C13.9777 14.3871 14.3561 13.5899 14.7955 12.875Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M14.7955 12.875H7.66892C7.23429 13.6263 6.87012 14.4203 6.57642 15.25H13.6761C13.9777 14.3871 14.3561 13.5899 14.7955 12.875Z",
                            fill: "#497DF5",
                        }),
                        Q("path", {
                            d: "M13.6759 15.25H6.57619C6.30623 16.014 6.0996 16.8072 5.96265 17.625H13.0734C13.2096 16.7945 13.4138 15.9997 13.6759 15.25Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M13.6759 15.25H6.57619C6.30623 16.014 6.0996 16.8072 5.96265 17.625H13.0734C13.2096 16.7945 13.4138 15.9997 13.6759 15.25Z",
                            fill: "#545EF5",
                        }),
                        Q("path", {
                            d: "M13.0745 17.625H5.96296C5.83313 18.3993 5.75 19.1885 5.75 20H12.875C12.875 19.1862 12.9486 18.3929 13.0745 17.625Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M13.0745 17.625H5.96296C5.83313 18.3993 5.75 19.1885 5.75 20H12.875C12.875 19.1862 12.9486 18.3929 13.0745 17.625Z",
                            fill: "#5B49F5",
                        }),
                        Q("path", {
                            d: "M12.875 20H5.75C5.75 20.8115 5.83313 21.6008 5.96296 22.375H13.0737C12.9486 21.6071 12.875 20.8138 12.875 20Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M12.875 20H5.75C5.75 20.8115 5.83313 21.6008 5.96296 22.375H13.0737C12.9486 21.6071 12.875 20.8138 12.875 20Z",
                            fill: "#6039F5",
                        }),
                        Q("path", {
                            d: "M13.0742 22.375H5.96265C6.0996 23.1928 6.30623 23.986 6.57619 24.75H13.6759C13.4138 24.0003 13.2096 23.2055 13.0742 22.375Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M13.0742 22.375H5.96265C6.0996 23.1928 6.30623 23.986 6.57619 24.75H13.6759C13.4138 24.0003 13.2096 23.2055 13.0742 22.375Z",
                            fill: "#6135EE",
                        }),
                        Q("path", {
                            d: "M13.6761 24.75H6.57642C6.87012 25.5797 7.23429 26.3737 7.66892 27.125H14.7947C14.3561 26.4101 13.9777 25.6129 13.6761 24.75Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M13.6761 24.75H6.57642C6.87012 25.5797 7.23429 26.3737 7.66892 27.125H14.7947C14.3561 26.4101 13.9777 25.6129 13.6761 24.75Z",
                            fill: "#6032E6",
                        }),
                        Q("path", {
                            d: "M16.5062 29.2063L16.5086 29.2079C15.8737 28.6458 15.2965 27.9404 14.7954 27.125H7.66882C8.16203 27.9776 8.74232 28.7709 9.39545 29.5H16.7793C16.6899 29.401 16.5941 29.3092 16.5062 29.2063Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M16.5062 29.2063L16.5086 29.2079C15.8737 28.6458 15.2965 27.9404 14.7954 27.125H7.66882C8.16203 27.9776 8.74232 28.7709 9.39545 29.5H16.7793C16.6899 29.401 16.5941 29.3092 16.5062 29.2063Z",
                            fill: "#602FDB",
                        }),
                        Q("path", {
                            d: "M16.5087 29.2078C16.6243 29.3099 16.7406 29.4073 16.8594 29.4999H16.8625C16.7422 29.4065 16.6243 29.3107 16.5087 29.2078Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            opacity: 0.35,
                            d: "M16.5087 29.2078C16.6243 29.3099 16.7406 29.4073 16.8594 29.4999H16.8625C16.7422 29.4065 16.6243 29.3107 16.5087 29.2078Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M16.5063 29.2062C16.5942 29.3091 16.69 29.401 16.7803 29.4999H16.8586C16.7399 29.4073 16.6235 29.3099 16.5079 29.2078L16.5063 29.2062Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M16.5063 29.2062C16.5942 29.3091 16.69 29.401 16.7803 29.4999H16.8586C16.7399 29.4073 16.6235 29.3099 16.5079 29.2078L16.5063 29.2062Z",
                            fill: "#E7698A",
                        }),
                        Q("path", {
                            d: "M16.7806 29.5H9.39673C10.2034 30.4001 11.1146 31.2037 12.1248 31.875H19.8499C18.7131 31.3026 17.6799 30.4872 16.7806 29.5Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M16.7806 29.5H9.39673C10.2034 30.4001 11.1146 31.2037 12.1248 31.875H19.8499C18.7131 31.3026 17.6799 30.4872 16.7806 29.5Z",
                            fill: "#5F26BD",
                        }),
                        Q("path", {
                            d: "M27.5912 31.8752H27.8746C28.3789 31.5403 29.0732 30.9838 28.9497 31.0835C28.5182 31.3796 28.0622 31.6432 27.5912 31.8752Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M27.5912 31.8752H27.8746C28.3789 31.5403 29.0732 30.9838 28.9497 31.0835C28.5182 31.3796 28.0622 31.6432 27.5912 31.8752Z",
                            fill: "#5D1C9C",
                        }),
                        Q("path", {
                            d: "M23.7491 32.825C22.3692 32.825 21.0543 32.4814 19.8494 31.875H12.1243C14.3805 33.3736 17.0856 34.25 19.9998 34.25C22.9139 34.25 25.619 33.3736 27.8753 31.875H27.5919C26.3949 32.464 25.0918 32.825 23.7491 32.825Z",
                            fill: "#1565C0",
                        }),
                        Q("path", {
                            d: "M23.7491 32.825C22.3692 32.825 21.0543 32.4814 19.8494 31.875H12.1243C14.3805 33.3736 17.0856 34.25 19.9998 34.25C22.9139 34.25 25.619 33.3736 27.8753 31.875H27.5919C26.3949 32.464 25.0918 32.825 23.7491 32.825Z",
                            fill: "#5D1C9C",
                        }),
                        Q("path", {
                            d: "M23.7498 7.17484C22.3699 7.17484 21.055 7.51843 19.8492 8.12484H27.5925C26.3963 7.53505 25.0932 7.17484 23.7498 7.17484Z",
                            fill: "#2A1367",
                        }),
                        Q("path", {
                            d: "M19.8493 8.12502C18.7124 8.6974 17.6801 9.51281 16.7808 10.5H16.8591C16.8702 10.4921 16.8805 10.4842 16.8916 10.4763C16.913 10.4596 16.9351 10.4446 16.9565 10.428C17.1655 10.2712 17.3793 10.1295 17.5978 10.0036C17.6651 9.96485 17.7323 9.92448 17.8004 9.88885C17.8986 9.8374 17.9968 9.7899 18.0957 9.74477C18.2208 9.68777 18.3467 9.6379 18.4741 9.59198C18.5525 9.56427 18.6301 9.53577 18.7093 9.51202C18.8755 9.46135 19.0433 9.42177 19.2128 9.3901C19.2713 9.37981 19.3291 9.36952 19.3877 9.36161C19.5904 9.3331 19.7938 9.31252 19.9997 9.31252C21.1056 9.31252 22.1768 9.74873 23.1402 10.5H30.6033C30.4893 10.3726 30.3768 10.2435 30.2581 10.12C30.1251 9.98227 29.9889 9.84769 29.8504 9.71548C29.6683 9.54131 29.4823 9.3719 29.2915 9.20723C29.1783 9.10985 29.0674 9.0109 28.9518 8.91669L28.9511 8.9159C28.5188 8.61981 28.0628 8.35619 27.5926 8.12423H19.8493V8.12502Z",
                            fill: "#3D1875",
                        }),
                        Q("path", {
                            d: "M23.1406 10.5C23.9133 11.1017 24.6123 11.9108 25.2045 12.875H32.3303C32.2013 12.6518 32.0698 12.4293 31.9289 12.214C31.8529 12.0984 31.7761 11.9828 31.697 11.8696C31.5062 11.5957 31.3075 11.3281 31.0985 11.0692C31.0058 10.9544 30.9093 10.8428 30.8135 10.7312C30.7454 10.652 30.6733 10.5776 30.6037 10.5H23.1406Z",
                            fill: "#5F2190",
                        }),
                        Q("path", {
                            d: "M25.2046 12.875C25.644 13.5899 26.0216 14.3871 26.324 15.25H33.4237C33.339 15.0101 33.259 14.7687 33.1624 14.5351C33.1323 14.4623 33.0999 14.3918 33.0682 14.3198C32.932 14.0071 32.7832 13.7007 32.6257 13.3999C32.5742 13.3025 32.5259 13.2035 32.4729 13.1077C32.4285 13.0286 32.3771 12.9542 32.332 12.875H25.2046Z",
                            fill: "#872DB0",
                        }),
                        Q("path", {
                            d: "M26.3241 15.25C26.5861 15.9997 26.7904 16.7945 26.9258 17.625H34.0365C34.0159 17.5023 34.0041 17.3764 33.9803 17.2545C33.9637 17.1698 33.9471 17.0859 33.9288 17.002C33.8457 16.6125 33.7476 16.2293 33.6336 15.8525C33.6082 15.7685 33.5797 15.6862 33.552 15.6031C33.5132 15.4835 33.4649 15.368 33.423 15.25H26.3241Z",
                            fill: "#9330B9",
                        }),
                        Q("path", {
                            d: "M26.9258 17.625C27.0517 18.3929 27.1253 19.1862 27.1253 20H34.2503C34.2503 19.5503 34.2242 19.107 34.183 18.6684C34.1767 18.6035 34.1727 18.5378 34.1664 18.4729C34.1355 18.1863 34.084 17.906 34.0373 17.625H26.9258Z",
                            fill: "#9B32BF",
                        }),
                        Q("path", {
                            d: "M26.9258 22.375H34.0365C34.084 22.094 34.1355 21.8137 34.1656 21.5271C34.1727 21.463 34.1767 21.3973 34.1822 21.3324C34.2242 20.893 34.2503 20.4497 34.2503 20H27.1253C27.1253 20.8138 27.0517 21.6071 26.9258 22.375Z",
                            fill: "#9C33BE",
                        }),
                        Q("path", {
                            d: "M26.9258 22.375C26.7896 23.2055 26.5861 24.0003 26.3241 24.75H33.4238C33.4657 24.6313 33.5148 24.5149 33.5536 24.3945C33.5805 24.3122 33.6082 24.2315 33.6336 24.1491C33.7483 23.7715 33.8457 23.3875 33.9296 22.9972C33.9478 22.9141 33.9645 22.8302 33.9811 22.7463C34.0048 22.6244 34.0167 22.4985 34.0373 22.375H26.9258Z",
                            fill: "#A83CB6",
                        }),
                        Q("path", {
                            d: "M26.324 24.75C26.0224 25.6129 25.644 26.4101 25.2046 27.125H32.3304C32.3763 27.0458 32.4278 26.9714 32.4721 26.8915C32.5251 26.7965 32.5734 26.6983 32.6241 26.6017C32.7824 26.2993 32.9328 25.9913 33.0698 25.6763C33.0999 25.6066 33.1315 25.5377 33.1608 25.4673C33.2582 25.2329 33.3382 24.9899 33.4237 24.7492L26.324 24.75Z",
                            fill: "#BB49A9",
                        }),
                        Q("path", {
                            d: "M25.2045 27.125C24.6123 28.0893 23.9133 28.8983 23.1406 29.5H30.6037C30.671 29.4248 30.7414 29.3527 30.8071 29.276C30.9061 29.1612 31.0058 29.0464 31.1008 28.9276C31.3082 28.6695 31.5062 28.4043 31.6962 28.132C31.7761 28.018 31.8529 27.9024 31.9289 27.7852C32.0698 27.5699 32.2005 27.3483 32.3303 27.125H25.2045Z",
                            fill: "#D95F94",
                        }),
                        Q("path", {
                            d: "M23.1402 29.5C22.1759 30.2513 21.1056 30.6875 19.9996 30.6875C19.7938 30.6875 19.5903 30.6669 19.3877 30.6376C19.3291 30.6297 19.2705 30.6194 19.2127 30.6091C19.0433 30.5775 18.8755 30.5379 18.7092 30.4872C18.63 30.4635 18.5525 30.435 18.4741 30.4072C18.3466 30.3613 18.2207 30.3115 18.0957 30.2545C17.9967 30.2101 17.8985 30.1618 17.8012 30.1112C17.7315 30.0747 17.6634 30.0336 17.5945 29.994C17.3816 29.8713 17.1726 29.7335 16.9683 29.5808C16.9414 29.5602 16.9137 29.5412 16.8868 29.5206C16.8781 29.5135 16.8686 29.5071 16.8599 29.5008H16.7815C17.6808 30.488 18.7132 31.3034 19.8508 31.8758H27.5933C28.0643 31.6438 28.5195 31.3802 28.9526 31.0841C29.0761 30.9844 29.1948 30.8791 29.3144 30.7746C29.4917 30.6218 29.6643 30.4642 29.8337 30.3027C29.9849 30.1579 30.1337 30.0106 30.2794 29.8602C30.3918 29.743 30.4979 29.6211 30.6064 29.5008L23.1402 29.5Z",
                            fill: "#E7698A",
                        }),
                        Q("path", {
                            d: "M27.591 31.875H19.8485C21.0534 32.4814 22.3684 32.825 23.7483 32.825C25.0917 32.825 26.3948 32.464 27.591 31.875Z",
                            fill: "#FF8978",
                        }),
                    ],
                }),
                Q("defs", {
                    children: Q("clipPath", {
                        id: "clip0_6845_3465",
                        children: Q("rect", { width: 38, height: 38, fill: "white", transform: "translate(1 1)" }),
                    }),
                }),
            ],
        }),
    r3 = (e) =>
        Q("svg", {
            width: 40,
            height: 40,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                Q("rect", { width: 40, height: 40, rx: 8, fill: "var(--surface-neutral-50)" }),
                Q("path", {
                    d: "M20.0002 10C19.2117 10 18.4515 10.0997 17.7258 10.2686C17.5744 10.3039 17.4378 10.3853 17.3348 10.5017C17.2317 10.618 17.1674 10.7635 17.1506 10.918L16.9914 12.3691C16.9393 12.8447 16.6647 13.2654 16.2502 13.5049C15.8366 13.7439 15.3345 13.7703 14.8967 13.5781H14.8957L13.5627 12.9912C13.4205 12.9286 13.2624 12.9118 13.1102 12.9429C12.958 12.974 12.8193 13.0517 12.7131 13.165C11.6768 14.2698 10.8815 15.6075 10.4299 17.1006C10.3849 17.2492 10.3871 17.4081 10.4363 17.5554C10.4854 17.7027 10.5791 17.8311 10.7043 17.9229L11.8869 18.79C12.2731 19.074 12.5002 19.5214 12.5002 20C12.5002 20.4789 12.2731 20.9267 11.8869 21.21L10.7043 22.0762C10.5791 22.168 10.4854 22.2964 10.4363 22.4437C10.3871 22.5909 10.3849 22.7498 10.4299 22.8984C10.8815 24.3913 11.6762 25.7301 12.7131 26.835C12.8194 26.9482 12.9582 27.0256 13.1104 27.0566C13.2626 27.0875 13.4206 27.0705 13.5627 27.0078L14.8957 26.4209C15.3337 26.2283 15.8363 26.256 16.2502 26.4951C16.6647 26.7346 16.9393 27.1553 16.9914 27.6309L17.1506 29.082C17.1675 29.2362 17.2318 29.3814 17.3346 29.4975C17.4375 29.6136 17.5738 29.695 17.7248 29.7305C18.4509 29.8999 19.2117 30 20.0002 30C20.7886 30 21.5489 29.9003 22.2746 29.7314C22.4259 29.6961 22.5626 29.6147 22.6656 29.4983C22.7687 29.382 22.833 29.2365 22.8498 29.082L23.009 27.6309C23.061 27.1553 23.3357 26.7346 23.7502 26.4951C24.1638 26.2561 24.6659 26.2287 25.1037 26.4209L26.4377 27.0078C26.5798 27.0705 26.7378 27.0875 26.89 27.0566C27.0422 27.0256 27.181 26.9482 27.2873 26.835C28.3236 25.7302 29.1189 24.3915 29.5705 22.8984C29.6155 22.7498 29.6133 22.5909 29.5641 22.4437C29.515 22.2964 29.4213 22.168 29.2961 22.0762L28.1135 21.21C27.7273 20.9267 27.5002 20.4789 27.5002 20C27.5002 19.5211 27.7273 19.0733 28.1135 18.79L29.2961 17.9238C29.4213 17.832 29.515 17.7036 29.5641 17.5563C29.6133 17.4091 29.6155 17.2502 29.5705 17.1016C29.1189 15.6085 28.3236 14.2698 27.2873 13.165C27.181 13.0518 27.0422 12.9744 26.89 12.9434C26.7378 12.9125 26.5798 12.9295 26.4377 12.9922L25.1037 13.5791C24.6659 13.7713 24.1638 13.7439 23.7502 13.5049C23.3357 13.2654 23.061 12.8447 23.009 12.3691L22.8498 10.918C22.8329 10.7638 22.7686 10.6186 22.6657 10.5025C22.5629 10.3864 22.4266 10.305 22.2756 10.2695C21.5495 10.1001 20.7886 10 20.0002 10ZM20.0002 11.5C20.4873 11.5 20.9552 11.5874 21.424 11.6699L21.5178 12.5322C21.6217 13.4817 22.1737 14.3262 23.0002 14.8037C23.8273 15.2816 24.8342 15.3365 25.7082 14.9521L26.5012 14.6035C27.1101 15.3347 27.5922 16.1606 27.9289 17.0654L27.2258 17.5811C26.456 18.1458 26.0002 19.0449 26.0002 20C26.0002 20.9551 26.456 21.8542 27.2258 22.4189L27.9289 22.9346C27.5922 23.8394 27.1101 24.6653 26.5012 25.3965L25.7082 25.0479C24.8342 24.6635 23.8273 24.7184 23.0002 25.1963C22.1737 25.6738 21.6217 26.5183 21.5178 27.4678L21.424 28.3301C20.9552 28.4123 20.4871 28.5 20.0002 28.5C19.513 28.5 19.0452 28.4126 18.5764 28.3301L18.4826 27.4678C18.3787 26.5183 17.8267 25.6738 17.0002 25.1963C16.1731 24.7184 15.1661 24.6635 14.2922 25.0479L13.4992 25.3965C12.8902 24.6654 12.4082 23.8395 12.0715 22.9346L12.7746 22.4189C13.5444 21.8542 14.0002 20.9551 14.0002 20C14.0002 19.0449 13.5441 18.1452 12.7746 17.5801L12.0715 17.0645C12.4084 16.1593 12.8909 15.3339 13.5002 14.6025L14.2922 14.9512C15.1661 15.3355 16.1731 15.2816 17.0002 14.8037C17.8267 14.3262 18.3787 13.4817 18.4826 12.5322L18.5764 11.6699C19.0452 11.5877 19.5133 11.5 20.0002 11.5ZM20.0002 16C17.7999 16 16.0002 17.7997 16.0002 20C16.0002 22.2003 17.7999 24 20.0002 24C22.2005 24 24.0002 22.2003 24.0002 20C24.0002 17.7997 22.2005 16 20.0002 16ZM20.0002 17.5C21.3898 17.5 22.5002 18.6104 22.5002 20C22.5002 21.3896 21.3898 22.5 20.0002 22.5C18.6106 22.5 17.5002 21.3896 17.5002 20C17.5002 18.6104 18.6106 17.5 20.0002 17.5Z",
                    fill: "#646464",
                }),
            ],
        }),
    r0 = {
        ios: {
            safari: [
                { uuid: "1", icon: rJ, instructionKey: "open", boldKey: "idv2.permissions.denied.settings" },
                { uuid: "2", icon: rX, instructionKey: "scroll", boldKey: "idv2.permissions.denied.yourBrowser" },
                { uuid: "3", icon: rQ, instructionKey: "tap", boldKey: "idv2.permissions.denied.camera" },
                {
                    uuid: "4",
                    icon: r1,
                    instructionKey: "changeTo",
                    boldKey: "idv2.permissions.denied.allow",
                    additionalTextKey: "idv2.permissions.denied.or",
                    secondBoldKey: "denied.ask",
                },
                { uuid: "5", icon: rX, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            chrome: [
                { uuid: "1", icon: rJ, instructionKey: "open", boldKey: "idv2.permissions.denied.settings" },
                { uuid: "2", icon: rq, instructionKey: "scroll", boldKey: "idv2.permissions.denied.yourBrowser" },
                { uuid: "3", icon: rQ, instructionKey: "tap", boldKey: "idv2.permissions.denied.camera" },
                {
                    uuid: "4",
                    icon: r1,
                    instructionKey: "changeTo",
                    boldKey: "idv2.permissions.denied.allow",
                    additionalTextKey: "idv2.permissions.denied.or",
                    secondBoldKey: "denied.ask",
                },
                { uuid: "5", icon: rq, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            edge: [
                { uuid: "1", icon: rJ, instructionKey: "open", boldKey: "idv2.permissions.denied.settings" },
                { uuid: "2", icon: rq, instructionKey: "scroll", boldKey: "idv2.permissions.denied.yourBrowser" },
                { uuid: "3", icon: rQ, instructionKey: "tap", boldKey: "idv2.permissions.denied.camera" },
                {
                    uuid: "4",
                    icon: r1,
                    instructionKey: "changeTo",
                    boldKey: "idv2.permissions.denied.allow",
                    additionalTextKey: "idv2.permissions.denied.or",
                    secondBoldKey: "denied.ask",
                },
                { uuid: "5", icon: rq, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            firefox: [
                { uuid: "1", icon: rJ, instructionKey: "open", boldKey: "idv2.permissions.denied.settings" },
                { uuid: "2", icon: rY, instructionKey: "scroll", boldKey: "idv2.permissions.denied.yourBrowser" },
                { uuid: "3", icon: rQ, instructionKey: "tap", boldKey: "idv2.permissions.denied.camera" },
                {
                    uuid: "4",
                    icon: r1,
                    instructionKey: "changeTo",
                    boldKey: "idv2.permissions.denied.allow",
                    additionalTextKey: "idv2.permissions.denied.or",
                    secondBoldKey: "denied.ask",
                },
                { uuid: "5", icon: rY, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            opera: [
                { uuid: "1", icon: rJ, instructionKey: "open", boldKey: "idv2.permissions.denied.settings" },
                { uuid: "2", icon: r2, instructionKey: "scroll", boldKey: "idv2.permissions.denied.yourBrowser" },
                { uuid: "3", icon: rQ, instructionKey: "tap", boldKey: "idv2.permissions.denied.camera" },
                {
                    uuid: "4",
                    icon: r1,
                    instructionKey: "changeTo",
                    boldKey: "idv2.permissions.denied.allow",
                    additionalTextKey: "idv2.permissions.denied.or",
                    secondBoldKey: "denied.ask",
                },
                { uuid: "5", icon: r2, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            other: [
                { uuid: "1", icon: rJ, instructionKey: "open", boldKey: "idv2.permissions.denied.settings" },
                { uuid: "2", icon: rq, instructionKey: "scroll", boldKey: "idv2.permissions.denied.yourBrowser" },
                { uuid: "3", icon: rQ, instructionKey: "tap", boldKey: "idv2.permissions.denied.camera" },
                {
                    uuid: "4",
                    icon: r1,
                    instructionKey: "changeTo",
                    boldKey: "idv2.permissions.denied.allow",
                    additionalTextKey: "idv2.permissions.denied.or",
                    secondBoldKey: "denied.ask",
                },
                { uuid: "5", icon: rq, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
        },
        android: {
            chrome: [
                {
                    uuid: "1",
                    icon: rj,
                    instructionKey: "tap",
                    boldKey: "idv2.permissions.denied.dots",
                    additionalTextKey: "idv2.permissions.denied.topRight",
                },
                { uuid: "2", icon: rK, instructionKey: "tap", boldKey: "idv2.permissions.denied.siteSettings" },
                { uuid: "3", icon: rG, instructionKey: "tap", boldKey: "idv2.permissions.denied.cameraAllow" },
                { uuid: "4", icon: rq, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            firefox: [
                {
                    uuid: "1",
                    icon: rj,
                    instructionKey: "tap",
                    boldKey: "idv2.permissions.denied.dots",
                    additionalTextKey: "idv2.permissions.denied.topRight",
                },
                { uuid: "2", icon: r3, instructionKey: "tap", boldKey: "idv2.permissions.denied.siteSettings" },
                {
                    uuid: "3",
                    icon: (e) =>
                        Q("svg", {
                            width: 40,
                            height: 40,
                            viewBox: "0 0 40 40",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            ...e,
                            children: [
                                Q("rect", { width: 40, height: 40, rx: 8, fill: "var(--surface-neutral-50)" }),
                                Q("path", {
                                    d: "M20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12ZM20 13C16.134 13 13 16.134 13 20C13 23.866 16.134 27 20 27C23.866 27 27 23.866 27 20C27 16.134 23.866 13 20 13ZM20 15C22.7614 15 25 17.2386 25 20C25 22.7614 22.7614 25 20 25C17.2386 25 15 22.7614 15 20C15 17.2386 17.2386 15 20 15Z",
                                    fill: "#646464",
                                }),
                            ],
                        }),
                    instructionKey: "tap",
                    boldKey: "idv2.permissions.denied.cameraAllow",
                },
                { uuid: "4", icon: rY, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            edge: [
                {
                    uuid: "1",
                    icon: rj,
                    instructionKey: "tap",
                    boldKey: "idv2.permissions.denied.dots",
                    additionalTextKey: "idv2.permissions.denied.topRight",
                },
                { uuid: "2", icon: rK, instructionKey: "tap", boldKey: "idv2.permissions.denied.siteSettings" },
                { uuid: "3", icon: rG, instructionKey: "tap", boldKey: "idv2.permissions.denied.cameraAllow" },
                { uuid: "4", icon: rq, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            opera: [
                {
                    uuid: "1",
                    icon: rK,
                    instructionKey: "open",
                    boldKey: "idv2.permissions.denied.settingsApp",
                    additionalTextKey: "idv2.permissions.denied.onDevice",
                },
                {
                    uuid: "2",
                    icon: (e) =>
                        Q("svg", {
                            width: 40,
                            height: 40,
                            viewBox: "0 0 40 40",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            ...e,
                            children: [
                                Q("rect", { width: 40, height: 40, rx: 8, fill: "var(--surface-neutral-50)" }),
                                Q("rect", { x: 10, y: 10, width: 20, height: 20, rx: 8, fill: "#006AFF" }),
                                Q("path", {
                                    d: "M17 21C18.3807 21 19.5 22.1193 19.5 23.5C19.5 24.8807 18.3807 26 17 26C15.6193 26 14.5 24.8807 14.5 23.5C14.5 22.1193 15.6193 21 17 21ZM23 21C24.3807 21 25.5 22.1193 25.5 23.5C25.5 24.8807 24.3807 26 23 26C21.6193 26 20.5 24.8807 20.5 23.5C20.5 22.1193 21.6193 21 23 21ZM17 15C18.3807 15 19.5 16.1193 19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15ZM23 15C24.3807 15 25.5 16.1193 25.5 17.5C25.5 18.8807 24.3807 20 23 20C21.6193 20 20.5 18.8807 20.5 17.5C20.5 16.1193 21.6193 15 23 15Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                    instructionKey: "tap",
                    boldKey: "idv2.permissions.denied.opera.appsOpera",
                },
                {
                    uuid: "3",
                    icon: (e) =>
                        Q("svg", {
                            width: 40,
                            height: 40,
                            viewBox: "0 0 40 40",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            ...e,
                            children: [
                                Q("rect", { width: 40, height: 40, rx: 8, fill: "var(--surface-neutral-50)" }),
                                Q("mask", {
                                    id: "path-2-inside-1_6845_3468",
                                    fill: "white",
                                    children: Q("path", {
                                        d: "M28 12C29.6569 12 31 13.3431 31 15V25C31 26.6051 29.7394 27.9158 28.1543 27.9961L28 28H12L11.8457 27.9961C10.2606 27.9158 9 26.6051 9 25V15C9 13.3431 10.3431 12 12 12H28ZM12 13C10.8954 13 10 13.8954 10 15V25C10 26.1046 10.8954 27 12 27H28C29.1046 27 30 26.1046 30 25V15C30 13.8954 29.1046 13 28 13H12ZM20 16C22.2091 16 24 17.7909 24 20C24 22.2091 22.2091 24 20 24C17.7909 24 16 22.2091 16 20C16 17.7909 17.7909 16 20 16ZM20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17ZM27 14C27.5523 14 28 14.4477 28 15C28 15.5523 27.5523 16 27 16C26.4477 16 26 15.5523 26 15C26 14.4477 26.4477 14 27 14Z",
                                    }),
                                }),
                                Q("path", {
                                    d: "M28 12C29.6569 12 31 13.3431 31 15V25C31 26.6051 29.7394 27.9158 28.1543 27.9961L28 28H12L11.8457 27.9961C10.2606 27.9158 9 26.6051 9 25V15C9 13.3431 10.3431 12 12 12H28ZM12 13C10.8954 13 10 13.8954 10 15V25C10 26.1046 10.8954 27 12 27H28C29.1046 27 30 26.1046 30 25V15C30 13.8954 29.1046 13 28 13H12ZM20 16C22.2091 16 24 17.7909 24 20C24 22.2091 22.2091 24 20 24C17.7909 24 16 22.2091 16 20C16 17.7909 17.7909 16 20 16ZM20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17ZM27 14C27.5523 14 28 14.4477 28 15C28 15.5523 27.5523 16 27 16C26.4477 16 26 15.5523 26 15C26 14.4477 26.4477 14 27 14Z",
                                    fill: "#646464",
                                }),
                                Q("path", {
                                    d: "M28.1543 27.9961L28.1796 28.9958L28.1923 28.9955L28.2049 28.9948L28.1543 27.9961ZM28 28V29H28.0127L28.0253 28.9997L28 28ZM12 28L11.9747 28.9997L11.9873 29H12V28ZM11.8457 27.9961L11.7951 28.9948L11.8077 28.9955L11.8204 28.9958L11.8457 27.9961ZM12 12V11V11V12ZM12 13V12V12V13ZM28 27V28V28V27ZM28 12V13C29.1046 13 30 13.8954 30 15H31H32C32 12.7909 30.2091 11 28 11V12ZM31 15H30V25H31H32V15H31ZM31 25H30C30 26.0698 29.1596 26.9439 28.1037 26.9974L28.1543 27.9961L28.2049 28.9948C30.3193 28.8877 32 27.1404 32 25H31ZM28.1543 27.9961L28.129 26.9964L27.9747 27.0003L28 28L28.0253 28.9997L28.1796 28.9958L28.1543 27.9961ZM28 28V27H12V28V29H28V28ZM12 28L12.0253 27.0003L11.871 26.9964L11.8457 27.9961L11.8204 28.9958L11.9747 28.9997L12 28ZM11.8457 27.9961L11.8963 26.9974C10.8404 26.9439 10 26.0698 10 25H9H8C8 27.1404 9.68074 28.8877 11.7951 28.9948L11.8457 27.9961ZM9 25H10V15H9H8V25H9ZM9 15H10C10 13.8954 10.8954 13 12 13V12V11C9.79086 11 8 12.7909 8 15H9ZM12 12V13H28V12V11H12V12ZM12 13V12C10.3431 12 9 13.3431 9 15H10H11C11 14.4477 11.4477 14 12 14V13ZM10 15H9V25H10H11V15H10ZM10 25H9C9 26.6569 10.3431 28 12 28V27V26C11.4477 26 11 25.5523 11 25H10ZM12 27V28H28V27V26H12V27ZM28 27V28C29.6569 28 31 26.6569 31 25H30H29C29 25.5523 28.5523 26 28 26V27ZM30 25H31V15H30H29V25H30ZM30 15H31C31 13.3431 29.6569 12 28 12V13V14C28.5523 14 29 14.4477 29 15H30ZM28 13V12H12V13V14H28V13ZM20 16V17C21.6569 17 23 18.3431 23 20H24H25C25 17.2386 22.7614 15 20 15V16ZM24 20H23C23 21.6569 21.6569 23 20 23V24V25C22.7614 25 25 22.7614 25 20H24ZM20 24V23C18.3431 23 17 21.6569 17 20H16H15C15 22.7614 17.2386 25 20 25V24ZM16 20H17C17 18.3431 18.3431 17 20 17V16V15C17.2386 15 15 17.2386 15 20H16ZM20 17V16C17.7909 16 16 17.7909 16 20H17H18C18 18.8954 18.8954 18 20 18V17ZM17 20H16C16 22.2091 17.7909 24 20 24V23V22C18.8954 22 18 21.1046 18 20H17ZM20 23V24C22.2091 24 24 22.2091 24 20H23H22C22 21.1046 21.1046 22 20 22V23ZM23 20H24C24 17.7909 22.2091 16 20 16V17V18C21.1046 18 22 18.8954 22 20H23ZM27 14V15H28H29C29 13.8954 28.1046 13 27 13V14ZM28 15H27V16V17C28.1046 17 29 16.1046 29 15H28ZM27 16V15H26H25C25 16.1046 25.8954 17 27 17V16ZM26 15H27V14V13C25.8954 13 25 13.8954 25 15H26Z",
                                    fill: "#646464",
                                    mask: "url(#path-2-inside-1_6845_3468)",
                                }),
                            ],
                        }),
                    instructionKey: "tap",
                    boldKey: "idv2.permissions.denied.persmissionsCamera",
                },
                {
                    uuid: "4",
                    icon: (e) =>
                        Q("svg", {
                            width: 40,
                            height: 40,
                            viewBox: "0 0 40 40",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            ...e,
                            children: [
                                Q("rect", { width: 40, height: 40, rx: 8, fill: "var(--surface-neutral-50)" }),
                                Q("circle", { cx: 20, cy: 20, r: 7.5, stroke: "#006AFF" }),
                                Q("circle", { cx: 20, cy: 20, r: 5, fill: "#006AFF" }),
                            ],
                        }),
                    instructionKey: "setTo",
                    boldKey: "idv2.permissions.allowOnlyWhileUsingTheApp",
                    additionalTextKey: "idv2.permissions.denied.or",
                    secondBoldKey: "allowEveryTime",
                },
                { uuid: "5", icon: r2, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            other: [
                {
                    uuid: "1",
                    icon: rj,
                    instructionKey: "tap",
                    boldKey: "idv2.permissions.denied.dots",
                    additionalTextKey: "idv2.permissions.denied.topRight",
                },
                { uuid: "2", icon: rK, instructionKey: "tap", boldKey: "idv2.permissions.denied.siteSettings" },
                { uuid: "3", icon: rG, instructionKey: "tap", boldKey: "idv2.permissions.denied.cameraAllow" },
                { uuid: "4", icon: rq, instructionKey: "returnPress", boldKey: "idv2.permissions.denied.refreshPage" },
            ],
            samsung_browser: [
                {
                    uuid: "1",
                    icon: r3,
                    instructionKey: "tap",
                    boldKey: "\u2261<arrow/>",
                    additionalTextKey: "",
                    secondBoldKey: "idv2.permissions.denied.settings",
                },
                { uuid: "2", icon: r3, instructionKey: "tap", boldKey: "idv2.permissions.denied.sitesAndDownloads" },
                { uuid: "3", icon: r3, instructionKey: "tap", boldKey: "idv2.permissions.denied.sitePermissions" },
                {
                    uuid: "4",
                    icon: (e) =>
                        Q("svg", {
                            width: 40,
                            height: 40,
                            viewBox: "0 0 40 40",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            ...e,
                            children: [
                                Q("rect", { width: 40, height: 40, rx: 8, fill: "var(--surface-neutral-50)" }),
                                Q("rect", { x: 7, y: 12, width: 26, height: 16, rx: 8, fill: "#7882FF" }),
                                Q("circle", { cx: 25, cy: 20, r: 6, fill: "white" }),
                            ],
                        }),
                    instructionKey: "tap",
                    boldKey: "idv2.permissions.denied.cameraFindSiteAllow",
                },
                {
                    uuid: "5",
                    icon: (e) =>
                        Q("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 40,
                            height: 40,
                            viewBox: "0 0 40 40",
                            fill: "none",
                            ...e,
                            children: [
                                Q("rect", { width: 40, height: 40, rx: 8, fill: "#7882FF" }),
                                Q("path", {
                                    d: "M19.623 32.341C26.1382 32.341 31.4199 27.0594 31.4199 20.5442C31.4199 14.0289 26.1382 8.74731 19.623 8.74731C13.1078 8.74731 7.82617 14.0289 7.82617 20.5442C7.82617 27.0594 13.1078 32.341 19.623 32.341Z",
                                    fill: "white",
                                }),
                                Q("path", {
                                    d: "M31.02 17.501C31.6621 19.8852 31.3853 21.861 31.1653 22.8905C31.0674 23.3494 30.68 23.6947 30.2126 23.7315C16.7211 24.7936 10.7263 18.1536 9.2379 16.2094C9 15.8989 8.95263 15.4789 9.12737 15.1294C10.0411 13.4442 11.1663 12.2168 12.2684 11.3199C8.74632 11.4852 6.08948 12.5842 5.42737 14.5789C4.22316 18.201 9.77263 23.3052 17.8211 25.9799C25.8695 28.6547 33.3695 27.8873 34.5737 24.2652C35.2442 22.2452 33.8116 19.7642 31.02 17.501Z",
                                    fill: "#4D5CC1",
                                }),
                            ],
                        }),
                    instructionKey: "returnPress",
                    boldKey: "idv2.permissions.denied.refreshPage",
                },
            ],
        },
        desktop: null,
    },
    r6 = ({ platform: e }) => {
        let { t: t } = iK(),
            i = tf();
        return Q("div", {
            class: "IncodeDeniedInstructionsContainer",
            "data-testid": "denied-instructions-mobile",
            children: Q("ol", {
                class: "IncodeDeniedStepsList",
                children: (r0[e]?.[i] ?? []).map(({ icon: e, ...i }) => {
                    let r;
                    return Q(
                        "li",
                        {
                            class: "IncodeDeniedStepItem",
                            children: [
                                Q("span", {
                                    class: "IncodeSrOnly",
                                    children:
                                        ((r = [
                                            t(`idv2.permissions.denied.${i.instructionKey}`),
                                            t(i.boldKey),
                                            i.additionalTextKey ? t(i.additionalTextKey) : "",
                                            i.secondBoldKey ? t(`idv2.permissions.${i.secondBoldKey}`) : "",
                                        ]
                                            .filter(Boolean)
                                            .join(" ")),
                                        new DOMParser().parseFromString(r, "text/html").body.textContent || ""),
                                }),
                                Q("div", {
                                    class: "IncodeDeniedStepIconContainer",
                                    "aria-hidden": "true",
                                    children: Q(e, { height: 40, width: 40 }),
                                }),
                                Q("div", {
                                    class: "IncodeDeniedStepTextContainer",
                                    "aria-hidden": "true",
                                    children: Q(i5, {
                                        className: "IncodeDeniedStepTextSilent",
                                        children: [
                                            t(`idv2.permissions.denied.${i.instructionKey}`),
                                            " ",
                                            Q(rW, { i18nKey: i.boldKey }),
                                            (i.additionalTextKey || i.secondBoldKey) &&
                                                Q(r5, { labelKey: i.additionalTextKey, boldLabelKey: i.secondBoldKey }),
                                        ],
                                    }),
                                }),
                            ],
                        },
                        i.uuid,
                    );
                }),
            }),
        });
    };
function r5({ labelKey: e, boldLabelKey: t }) {
    let { t: i } = iK();
    return Q("span", {
        class: "IncodeDeniedStepTextSilent IncodeDeniedStepSubtext",
        children: [
            " ",
            e ? i(e) : "",
            t && Q(A, { children: [" ", Q("strong", { children: i(`idv2.permissions.${t}`) })] }),
        ],
    });
}
var r4 = () => {
        var e;
        let t,
            { t: i } = iK(),
            r =
                ((e = tf()),
                (t = [
                    `idv2.permissions.denied.${e}.firstStep`,
                    `idv2.permissions.denied.${e}.secondStep`,
                    `idv2.permissions.denied.${e}.thirdStep`,
                    `idv2.permissions.denied.${e}.fourthStep`,
                    `idv2.permissions.denied.${e}.fifthStep`,
                ]),
                "safari" === e && t.push(`idv2.permissions.denied.${e}.sixthStep`),
                t);
        return Q("div", {
            class: "IncodeDeniedInstructionsContainer",
            "data-testid": "denied-instructions-desktop",
            children: Q("ol", {
                class: "IncodeDeniedDesktopContainer",
                role: "list",
                children: r.map((e, t) => {
                    let n;
                    return Q(
                        "li",
                        {
                            class: "IncodeDeniedDesktopStep",
                            "aria-label":
                                ((n = i(e)), new DOMParser().parseFromString(n, "text/html").body.textContent || ""),
                            children: [
                                Q("div", {
                                    class: "IncodeDeniedDesktopStepNumberColumn",
                                    "aria-hidden": "true",
                                    children: [
                                        Q(rA, { number: t + 1 }),
                                        t < r.length - 1 && Q("div", { class: "IncodeNumberedStepConnector" }),
                                    ],
                                }),
                                Q("p", {
                                    class: "IncodeDeniedStepText",
                                    "aria-hidden": "true",
                                    children: i(e)
                                        .split(/(<strong>[^<]+<\/strong>)/g)
                                        .map((e, t) =>
                                            e.startsWith("<strong>") && e.endsWith("</strong>")
                                                ? Q("strong", { children: e.slice(8, -9) }, t)
                                                : e,
                                        ),
                                }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        });
    },
    r9 = () => {
        let e = tp();
        return "desktop" === e ? Q(r4, {}) : Q(r6, { platform: e });
    },
    r8 = ({ onRefresh: e, "data-testid": t, "data-permission-status": i }) => {
        let { t: r } = iK(),
            n = em(null);
        return (
            ep(() => {
                n.current?.focus();
            }, []),
            Q(rs, {
                hideHeader: !0,
                hideFooterBranding: !0,
                className: "IncodeDeniedPage",
                "data-testid": t,
                "data-permission-status": i,
                children: [
                    Q("div", {
                        class: "IncodeDeniedContainer",
                        children: [
                            Q(i0, { ref: n, tabIndex: -1, children: r("idv2.permissions.denied.title") }),
                            Q(r9, {}),
                        ],
                    }),
                    Q(rc, { onClick: e, children: r("idv2.permissions.denied.refreshPage") }),
                ],
            })
        );
    },
    r7 = [
        {
            icon: (e) =>
                Q("svg", {
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: Q("g", {
                        id: "Camera - Iconly Pro",
                        children: Q("g", {
                            id: "Iconly/Bold/Camera",
                            children: Q("g", {
                                id: "Camera",
                                children: Q("path", {
                                    id: "Vector",
                                    d: "M19.1337 4C20.427 4.01332 21.4803 4.67925 22.0937 5.87791C22.252 6.19423 22.4728 6.65622 22.7041 7.14356L22.9832 7.73286L23.1203 8.0222L23.2537 8.31521C23.307 8.40844 23.4003 8.47503 23.5203 8.47503C26.7203 8.47503 29.3337 11.0855 29.3337 14.2819V22.1931C29.3337 25.3896 26.7203 28 23.5203 28H8.48033C5.26699 28 2.66699 25.3896 2.66699 22.1931V14.2819C2.66699 11.0855 5.26699 8.47503 8.48033 8.47503C8.58699 8.47503 8.69366 8.42175 8.73366 8.31521L8.81366 8.15538C9.18699 7.36959 9.64033 6.41066 9.90699 5.87791C10.5203 4.67925 11.5603 4.01332 12.8537 4H19.1337ZM16.0003 12.5372C14.6003 12.5372 13.2803 13.0832 12.2803 14.0821C11.2937 15.081 10.747 16.3862 10.7603 17.7714C10.7603 19.1698 11.307 20.475 12.2937 21.4739C13.2937 22.4595 14.6003 23.0056 16.0003 23.0056C17.4403 23.0056 18.747 22.4195 19.6937 21.4739C20.6403 20.5283 21.227 19.2231 21.2403 17.7714C21.2403 16.3862 20.6937 15.0677 19.707 14.0688C18.7203 13.0832 17.4003 12.5372 16.0003 12.5372ZM16.0003 14.535C16.867 14.535 17.6803 14.8679 18.2937 15.4806C18.907 16.0932 19.2403 16.9057 19.2403 17.7714C19.227 19.556 17.787 21.0078 16.0003 21.0078C15.1337 21.0078 14.3203 20.6748 13.707 20.0622C13.0937 19.4495 12.7603 18.6371 12.7603 17.7714V17.758C12.747 16.919 13.0803 16.1065 13.6937 15.4939C14.3203 14.8679 15.1337 14.535 16.0003 14.535ZM23.4803 12.2175C22.8137 12.2175 22.2803 12.7636 22.2803 13.4295C22.2803 14.0954 22.8137 14.6282 23.4803 14.6282C24.147 14.6282 24.6937 14.0954 24.6937 13.4295C24.6937 12.7636 24.147 12.2175 23.4803 12.2175Z",
                                    fill: "currentColor",
                                }),
                            }),
                        }),
                    }),
                }),
            textKey: "idv2.permissions.learnMorePage.instructions.1",
        },
        {
            icon: (e) =>
                Q("svg", {
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: Q("g", {
                        id: "Bank Carrd check - Iconly Pro",
                        children: [
                            Q("path", {
                                id: "Vector",
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M22.7166 5.13574H9.28856C5.72856 5.13574 3.33789 7.63841 3.33789 11.3624V11.4691C3.33789 11.69 3.51697 11.8691 3.73789 11.8691H28.2686C28.4894 11.8691 28.6686 11.69 28.6686 11.4691V11.3624C28.6686 7.63841 26.2766 5.13574 22.7166 5.13574Z",
                                fill: "currentColor",
                            }),
                            Q("path", {
                                id: "Vector_2",
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M3.33105 19.2977C3.33105 19.5995 3.65712 19.7977 3.94672 19.7129C5.07919 19.3811 6.36578 19.6628 7.26439 20.5501L7.58103 20.8668C7.73744 21.0232 7.9911 21.0231 8.14723 20.8664L11.5977 17.4035C12.9044 16.1101 15.011 16.0968 16.3177 17.4035C17.611 18.7101 17.6243 20.8168 16.3177 22.1235L12.7713 25.6811C12.5199 25.9333 12.6985 26.3635 13.0546 26.3635H22.7177C26.2777 26.3635 28.6643 23.8568 28.6643 20.1368V14.2701C28.6643 14.0493 28.4853 13.8701 28.2643 13.8701H3.73104C3.51013 13.8701 3.33105 14.0493 3.33105 14.2701V19.2977Z",
                                fill: "currentColor",
                            }),
                            Q("path", {
                                id: "Vector_3",
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M14.6674 19.0557C14.2754 18.6637 13.642 18.6664 13.2527 19.0557L7.86199 24.4544L5.60999 22.2024C5.21932 21.8117 4.58599 21.8117 4.19532 22.2024C3.80599 22.593 3.80599 23.2264 4.19532 23.617L7.15532 26.577C7.34332 26.7637 7.59665 26.869 7.86199 26.869C8.12865 26.869 8.38199 26.7637 8.56999 26.577L14.6674 20.4704C15.058 20.0797 15.058 19.445 14.6674 19.0557Z",
                                fill: "currentColor",
                            }),
                        ],
                    }),
                }),
            textKey: "idv2.permissions.learnMorePage.instructions.2",
        },
        {
            icon: (e) =>
                Q("svg", {
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: Q("g", {
                        id: "Check badge - Iconly Pro",
                        children: Q("path", {
                            id: "Vector",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20.7779 14.0773L15.3473 19.5106C15.1593 19.6986 14.9046 19.8039 14.6393 19.8039C14.3739 19.8039 14.1193 19.6986 13.9326 19.5106L11.2967 16.8706C10.9073 16.4786 10.9073 15.8453 11.298 15.4546C11.69 15.0653 12.322 15.0666 12.7127 15.4559L14.6406 17.3879L19.3633 12.6625C19.7539 12.2719 20.3873 12.2719 20.7779 12.6625C21.1686 13.0532 21.1686 13.6866 20.7779 14.0773ZM27.6046 13.4479L26.6726 12.5159C26.2473 12.0892 26.0139 11.5212 26.0139 10.9199V9.58655C26.0139 7.60122 24.3979 5.98655 22.4139 5.98655H21.0779C20.4739 5.98655 19.9073 5.75322 19.4833 5.32922L18.5353 4.38255C17.1259 2.98522 14.8433 2.99188 13.4446 4.39722L12.5153 5.32922C12.0873 5.75455 11.5207 5.98788 10.918 5.98788H9.58333C7.622 5.98922 6.022 7.56788 5.986 9.52255C5.98465 9.54388 5.98333 9.56522 5.98333 9.58788V10.9172C5.98333 11.5199 5.75 12.0865 5.32467 12.5119L4.38067 13.4573C4.37933 13.4613 4.37533 13.4626 4.37267 13.4653C2.97933 14.8759 2.99133 17.1586 4.39533 18.5493L5.32733 19.4839C5.75133 19.9093 5.986 20.4746 5.986 21.0773V22.4173C5.986 24.4013 7.59933 26.0159 9.58333 26.0159H10.9153C11.5193 26.0173 12.086 26.2506 12.51 26.6733L13.4606 27.6213C14.1379 28.2946 15.0366 28.6653 15.9926 28.6653H16.0086C16.9699 28.6613 17.8713 28.2826 18.5459 27.6039L19.4806 26.6706C19.9006 26.2519 20.4819 26.0119 21.0753 26.0119H22.4166C24.3966 26.0119 26.0113 24.3999 26.0153 22.4173V21.0799C26.0153 20.4786 26.2486 19.9119 26.6713 19.4866L27.6193 18.5386C29.0193 17.1306 29.0113 14.8466 27.6046 13.4479Z",
                            fill: "currentColor",
                        }),
                    }),
                }),
            textKey: "idv2.permissions.learnMorePage.instructions.4",
        },
    ],
    ne = ({ onAllowPermissions: e, onQuitProcess: t, "data-testid": i, "data-permission-status": r }) => {
        let { t: n } = iK(),
            o = em(null);
        return (
            ep(() => {
                o.current?.focus();
            }, []),
            Q(rs, {
                className: "IncodeLearnMorePage",
                hideHeader: !0,
                hideFooterBranding: !0,
                "data-testid": i,
                "data-permission-status": r,
                children: [
                    Q("div", {
                        class: "IncodeLearnMoreContainer",
                        children: [
                            Q("div", {
                                class: "IncodeLearnMoreTitleContainer",
                                children: [
                                    Q(rh, { size: 32 }),
                                    Q(i0, {
                                        ref: o,
                                        tabIndex: -1,
                                        children: n("idv2.permissions.learnMorePage.title"),
                                    }),
                                ],
                            }),
                            Q("ul", {
                                class: "IncodeLearnMoreInstructionsContainer",
                                role: "list",
                                children: r7.map(({ icon: e, ...t }) =>
                                    Q(
                                        "li",
                                        {
                                            class: "IncodeLearnMoreInstruction",
                                            children: [
                                                Q("div", {
                                                    class: "IncodeLearnMoreInstructionIcon",
                                                    "aria-hidden": "true",
                                                    children: Q(e, { height: 32, width: 32 }),
                                                }),
                                                Q(i5, { children: n(t.textKey) }),
                                            ],
                                        },
                                        t.textKey,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    Q("div", {
                        class: "IncodeLearnMoreActions",
                        children: [
                            Q(rc, {
                                variant: "link",
                                onClick: t,
                                children: n("idv2.permissions.learnMorePage.quitProcess"),
                            }),
                            Q(rc, { onClick: e, children: n("idv2.permissions.learnMorePage.allowPermissions") }),
                        ],
                    }),
                ],
            })
        );
    };
function nt({ onAllowPermissions: e, onDenyPermissions: t }) {
    let { t: i } = iK(),
        r = em(null);
    return (
        ep(() => {
            r.current?.focus();
        }, []),
        Q(rO, {
            isOpen: !0,
            labelledById: "permissions-dialog-title",
            children: Q("div", {
                className: "IncodePermissionsBottomSheet",
                children: [
                    Q("div", {
                        class: "IncodePermissionsBottomSheetTitleContainer",
                        children: [
                            Q(i6, {
                                id: "permissions-dialog-title",
                                className: "IncodePermissionsBottomSheetTitle",
                                ref: r,
                                tabIndex: -1,
                                children: i("idv2.permissions.allowPermissionsV2"),
                            }),
                            Q("p", {
                                className: "IncodePermissionsBottomSheetSubtitle",
                                children: i("idv2.permissions.subtitleV2"),
                            }),
                        ],
                    }),
                    Q("div", {
                        class: "IncodePermissionsBottomSheetActions",
                        children: [
                            Q(rc, { variant: "secondary", onClick: t, children: i("idv2.permissions.dontAllow") }),
                            Q(rc, { onClick: e, children: i("idv2.permissions.allowV2") }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var ni = ({ manager: e, permissionStatus: t }) => {
        let i = (function (e) {
                let [t, i] = eh(() => "u" > typeof window && window.matchMedia(e).matches);
                return (
                    ep(() => {
                        if (typeof window > "u") return;
                        let t = window.matchMedia(e),
                            r = () => i(t.matches);
                        return t.addEventListener("change", r), () => t.removeEventListener("change", r);
                    }, [e]),
                    t
                );
            })("(max-width: 767px)"),
            { t: r } = iK();
        if ("requesting" === t) return Q(i8, { className: "IncodePermissionsRequestingPage" });
        if ("learnMore" === t)
            return Q(ne, {
                onAllowPermissions: () => e.requestPermission(),
                onQuitProcess: () => e.close(),
                "data-testid": "permissions",
                "data-permission-status": "learnMore",
            });
        if ("denied" === t)
            return Q(r8, {
                onRefresh: () => window.location.reload(),
                "data-testid": "permissions",
                "data-permission-status": "denied",
            });
        let n = null;
        return (
            (n = i
                ? Q(nt, { onAllowPermissions: e.requestPermission, onDenyPermissions: e.goToLearnMore })
                : Q(rS, {
                      open: !0,
                      children: Q(rI, {
                          children: [
                              Q(rT, { onClick: e.close }),
                              Q(rk, {
                                  children: [
                                      Q(rx, { children: r("idv2.permissions.allowPermissionsV2") }),
                                      Q(rP, { children: r("idv2.permissions.subtitleV2") }),
                                  ],
                              }),
                              Q(rM, {
                                  children: [
                                      Q(rc, {
                                          variant: "secondary",
                                          onClick: e.goToLearnMore,
                                          children: r("idv2.permissions.dontAllow"),
                                      }),
                                      Q(rc, {
                                          variant: "primary",
                                          onClick: e.requestPermission,
                                          children: r("idv2.permissions.allowV2"),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })),
            Q(rs, {
                className: "IncodePermissionsPage",
                hideHeader: !0,
                hideFooterBranding: !0,
                "data-testid": "permissions",
                "data-permission-status": t,
                children: n,
            })
        );
    },
    nr = ({ icon: e, title: t, className: i }) => {
        let r = em(null);
        return (
            ep(() => {
                r.current?.focus();
            }, []),
            Q(rs, {
                className: `IncodeCaptureStatusPage ${i ?? ""}`,
                children: [
                    Q(iX, { size: 40 }),
                    Q("div", {
                        class: "IncodeCaptureStatusContainer",
                        children: [
                            Q(iX, { size: 120 }),
                            e,
                            Q(iX, { size: 16 }),
                            Q(i0, { ref: r, className: "IncodeCaptureStatusTitle", tabIndex: -1, children: t }),
                        ],
                    }),
                ],
            })
        );
    },
    nn = { title: "Something went wrong", description: "Please try again later" },
    no = {
        MASK_ERROR: { title: "notifications.mask", description: "notifications.maskDescription" },
        BRIGHTNESS_ERROR: { title: "notifications.brightness", description: "notifications.brightnessDescription" },
        LIVENESS_ERROR: { title: "notifications.spoof", description: "notifications.spoofDescription" },
        CLOSED_EYES_ERROR: { title: "notifications.closedEyes", description: "notifications.closedEyesDescription" },
        HEAD_COVER_ERROR: {
            title: "notifications.removeHeadwear",
            description: "notifications.removeHeadwearDescription",
        },
        LENSES_ERROR: { title: "notifications.lenses", description: "notifications.lensesDescription" },
        FACE_NOT_FOUND: { title: "notifications.faceNotFound", description: "notifications.faceNotFoundDescription" },
        MULTIPLE_FACES: { title: "notifications.multiple", description: "notifications.multipleDescription" },
        TOO_BLURRY_ERROR: nn,
        TOO_DARK_ERROR: nn,
        SERVER_ERROR: nn,
        FACE_CROPPING_FAILED: nn,
        FACE_TOO_SMALL: nn,
        PROCESSING_ERROR: nn,
        BAD_REQUEST: nn,
        USER_IS_NOT_RECOGNIZED: {
            title: "notifications.accessDenied",
            description: "notifications.accessDeniedDescription",
        },
        SPOOF_ATTEMPT_DETECTED: { title: "notifications.spoof", description: "notifications.spoofDescription" },
        FACE_TOO_DARK: { title: "notifications.brightness", description: "notifications.brightnessDescription" },
        LENSES_DETECTED: { title: "notifications.lenses", description: "notifications.lensesDescription" },
        FACE_MASK_DETECTED: { title: "notifications.mask", description: "notifications.maskDescription" },
        CLOSED_EYES_DETECTED: { title: "notifications.closedEyes", description: "notifications.closedEyesDescription" },
        HEAD_COVER_DETECTED: {
            title: "notifications.removeHeadwear",
            description: "notifications.removeHeadwearDescription",
        },
        FACE_TOO_BLURRY: { title: "notifications.spoof", description: "notifications.spoofDescription" },
        BAD_PHOTO_QUALITY: {
            title: "notifications.lowQualityImage",
            description: "notifications.lowQualityImageDescription",
        },
        NONEXISTENT_CUSTOMER: {
            title: "notifications.nonexistentCustomer",
            description: "notifications.nonexistentCustomerDescription",
        },
        HINT_NOT_PROVIDED: {
            title: "notifications.hintNotProvided",
            description: "notifications.hintNotProvidedDescription",
        },
        SELFIE_IMAGE_LOW_QUALITY: {
            title: "notifications.selfieImageLowQuality",
            description: "notifications.selfieImageLowQualityDescription",
        },
    },
    ns =
        "LIVENESS_ERROR.BRIGHTNESS_ERROR.LENSES_ERROR.MASK_ERROR.CLOSED_EYES_ERROR.HEAD_COVER_ERROR.SERVER_ERROR.FACE_NOT_FOUND.MULTIPLE_FACES.TOO_BLURRY_ERROR.TOO_DARK_ERROR.USER_IS_NOT_RECOGNIZED.SPOOF_ATTEMPT_DETECTED.FACE_TOO_DARK.LENSES_DETECTED.FACE_MASK_DETECTED.CLOSED_EYES_DETECTED.HEAD_COVER_DETECTED.FACE_CROPPING_FAILED.FACE_TOO_SMALL.FACE_TOO_BLURRY.BAD_PHOTO_QUALITY.PROCESSING_ERROR.BAD_REQUEST.NONEXISTENT_CUSTOMER.HINT_NOT_PROVIDED.SELFIE_IMAGE_LOW_QUALITY".split(
            ".",
        ),
    na = ({ error: e, attemptsRemaining: t, onTryAgain: i }) => {
        let { t: r } = iK();
        if (!e) return null;
        let { title: n, description: o } =
            no[
                ((e) => {
                    let t = e.toUpperCase();
                    if (t.includes("HTTP 400") || t.includes("BAD_REQUEST")) return "BAD_REQUEST";
                    if (t.includes("HTTP 500") || t.includes("SERVER_ERROR")) return "SERVER_ERROR";
                    for (let e of ns) if (t.includes(e)) return e;
                    return null;
                })(e) ?? e
            ] ?? nn;
        return Q(rB, {
            "data-testid": "face-capture-error-modal",
            title: r(n) ?? n,
            description: r(t <= 0 ? "notifications.selfieCaptureFailedDescription" : o),
            attemptsRemaining: t,
            onButtonClick: i,
        });
    },
    nl = () =>
        Q("svg", {
            width: "292",
            height: "272",
            viewBox: "0 0 292 272",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: "IncodeFaceOutline",
            "aria-hidden": "true",
            children: [
                Q("title", { children: "Outline" }),
                Q("path", {
                    opacity: "0.8",
                    d: "M145.633 8.0625C115.606 8.06268 85.6206 26.5984 76.9712 54.293L76.771 54.9492C70.4539 76.1063 75.0139 100.802 76.8687 110.58L77.3628 113.188L75.1528 114.656C66.1187 120.66 63.5861 124.089 62.8472 126.92C62.4669 128.377 62.4644 130.035 62.8003 132.412C63.1635 134.983 63.7533 137.484 64.4233 141.347L64.5142 141.841C65.5056 146.956 68.1062 152.133 71.2749 156.618C74.5527 161.257 78.2056 164.826 80.7349 166.584L82.4517 167.777V169.869C82.4517 177.866 85.3476 186.144 89.6763 194.128C93.9906 202.085 99.5748 209.473 104.623 215.646L105.526 216.751V218.178C105.526 220.891 105.68 223.73 105.801 226.9C105.92 230.011 106.003 233.347 105.828 236.771C105.475 243.652 104.077 251.044 99.7446 258.227C91.1977 272.397 72.1081 284.401 31.8677 291.776L29.936 292.124C-41.1597 304.684 -61.4563 361.617 -63.2153 392.062H145.633V400.062H-71.3638L-71.3462 396.044C-71.2048 364.597 -50.9804 298.295 28.5444 284.246L30.4448 283.904C69.9919 276.654 86.1642 265.253 92.894 254.095C96.3216 248.412 97.5261 242.442 97.8374 236.362C97.9939 233.307 97.9241 230.262 97.8071 227.206C97.7111 224.697 97.5799 222.105 97.5396 219.615C92.5931 213.5 87.048 206.064 82.644 197.941C78.308 189.944 74.9442 181.04 74.5024 171.896C71.3932 169.387 67.8531 165.638 64.7417 161.234C61.1656 156.173 57.9337 149.942 56.6587 143.353L56.5415 142.714C55.9864 139.514 55.2491 136.155 54.8784 133.531C54.4806 130.715 54.3377 127.843 55.106 124.899C56.5344 119.427 60.7885 114.886 68.5259 109.489C66.4692 98.2995 62.7062 74.0938 69.106 52.6602L69.3345 51.9092C79.2266 20.2173 112.853 0.0626788 145.633 0.0625V8.0625ZM145.635 0.0625C178.415 0.0625 212.042 20.2172 221.934 51.9092L222.163 52.6602C228.562 74.0938 224.799 98.2996 222.743 109.489C230.48 114.886 234.734 119.427 236.163 124.899C236.931 127.843 236.788 130.715 236.39 133.531C236.019 136.155 235.282 139.514 234.727 142.714L234.61 143.353C233.335 149.942 230.103 156.173 226.527 161.234C223.415 165.638 219.875 169.387 216.766 171.896C216.324 181.04 212.961 189.944 208.625 197.941C204.221 206.064 198.676 213.5 193.729 219.615C193.689 222.105 193.557 224.697 193.461 227.206C193.344 230.262 193.275 233.307 193.431 236.362C193.742 242.442 194.947 248.412 198.375 254.095C205.104 265.253 221.277 276.654 260.824 283.904L262.724 284.246C342.249 298.294 362.473 364.597 362.615 396.044L362.632 400.062H145.635V392.062H354.484C352.725 361.616 332.429 304.683 261.333 292.124L259.401 291.776C219.161 284.401 200.071 272.397 191.524 258.227C187.192 251.044 185.793 243.652 185.441 236.771C185.266 233.347 185.348 230.011 185.467 226.9C185.589 223.73 185.743 220.891 185.743 218.178V216.751L186.646 215.646C191.694 209.473 197.278 202.085 201.592 194.128C205.921 186.144 208.817 177.866 208.817 169.869V167.777L210.534 166.584C213.063 164.826 216.716 161.257 219.994 156.618C223.162 152.133 225.763 146.956 226.754 141.841L226.845 141.347C227.515 137.484 228.105 134.983 228.468 132.412C228.804 130.034 228.802 128.377 228.421 126.92C227.682 124.089 225.15 120.66 216.116 114.656L213.906 113.188L214.4 110.58C216.255 100.802 220.815 76.1064 214.498 54.9492L214.297 54.293C205.648 26.5983 175.662 8.0625 145.635 8.0625V0.0625Z",
                    fill: "white",
                }),
            ],
        }),
    nc = "var(--surface-neutral-100)",
    nd = ({ fill: e, gradientId: t, gradientColor: i }) =>
        Q("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 335 335",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                Q("title", { children: "Loading Border" }),
                Q("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M335 167.5C335 260.008 260.008 335 167.5 335C74.9923 335 0 260.008 0 167.5C0 74.9923 74.9923 0 167.5 0C260.008 0 335 74.9923 335 167.5ZM167.5 325C254.485 325 325 254.485 325 167.5C325 80.5152 254.485 10 167.5 10C80.5152 10 10 80.5152 10 167.5C10 254.485 80.5152 325 167.5 325Z",
                    class: "IncodeLoadingBorderPath",
                    fill: e,
                }),
                t && i
                    ? Q("defs", {
                          children: Q("radialGradient", {
                              id: t,
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform: "translate(240.418 17.4369) rotate(115.674) scale(167.087)",
                              children: [
                                  Q("stop", { "stop-color": i }),
                                  Q("stop", { offset: "1", "stop-color": i, "stop-opacity": "0" }),
                              ],
                          }),
                      })
                    : null,
            ],
        }),
    nu = ({ borderState: e = "idle" }) => {
        let t = (function () {
                var e = eu(X++, 11);
                if (!e.__) {
                    for (var t = J.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
                    var i = (t.__m ||= [0, 0]);
                    e.__ = "P" + i[0] + "-" + i[1]++;
                }
                return e.__;
            })(),
            i = "loading" === e || "capturing" === e,
            r = ((e) => {
                switch (e) {
                    case "success":
                    case "capturing":
                        return "var(--surface-status-positive-500)";
                    case "loading":
                        return "var(--surface-brand-500)";
                    case "error":
                        return "var(--surface-status-negative-500)";
                    case "idle":
                        return nc;
                }
            })(e),
            n = i ? `url(#${t})` : r;
        return Q("div", {
            class: "IncodeLoadingBorder",
            "aria-hidden": "true",
            children: [
                i ? Q("div", { class: "IncodeLoadingBorderBase", children: Q(nd, { fill: nc }) }) : null,
                Q("div", {
                    class: iJ("IncodeLoadingBorderForeground", { IncodeLoadingBorderSpinning: i }),
                    children: Q(nd, { fill: n, gradientId: i ? t : void 0, gradientColor: i ? r : void 0 }),
                }),
            ],
        });
    },
    nh = () =>
        Q("div", {
            class: "IncodeCameraButton",
            children: Q("svg", {
                width: "64",
                height: "64",
                viewBox: "0 0 64 64",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: [
                    Q("circle", { cx: "32", cy: "32", r: "32", class: "IncodeCameraButtonBackground" }),
                    Q("path", {
                        d: "M55.5874 31.8191C55.5872 18.6938 44.9464 8.0537 31.821 8.0537C18.6958 8.05385 8.05581 18.6939 8.05566 31.8191C8.05566 44.9444 18.6958 55.5853 31.821 55.5854C44.9465 55.5854 55.5874 44.9445 55.5874 31.8191ZM57.5566 31.8191C57.5566 46.0321 46.034 57.5547 31.821 57.5547C17.6082 57.5545 6.08643 46.032 6.08643 31.8191C6.08657 17.6063 17.6083 6.08462 31.821 6.08447C46.0339 6.08447 57.5565 17.6062 57.5566 31.8191Z",
                        class: "IncodeCameraButtonRing",
                    }),
                    Q("path", {
                        d: "M35.5186 20.6768C36.887 20.677 37.995 21.777 37.9951 23.1338V24.1045H41.4766C43.0397 24.1052 44.3074 25.3626 44.3076 26.9131V38.5459C44.3076 40.0966 43.0398 41.3535 41.4766 41.3535H21.5381C19.975 41.3533 18.7081 40.0965 18.708 38.5459V26.9131C18.7083 25.3627 19.9751 24.1057 21.5381 24.1055H25.0205V23.1338C25.0206 21.7769 26.1285 20.6768 27.4971 20.6768H35.5186ZM31.5068 26.5273C28.0604 26.5273 25.2559 29.309 25.2559 32.7285C25.2559 36.148 28.0604 38.9297 31.5068 38.9297C34.954 38.9297 37.7588 36.148 37.7588 32.7285C37.7588 29.309 34.954 26.5274 31.5068 26.5273ZM31.5068 28.6348C33.7835 28.6348 35.6357 30.4728 35.6357 32.7305C35.6356 34.9887 33.7833 36.8252 31.5068 36.8252C29.2303 36.8252 27.3791 34.9887 27.3789 32.7305C27.3789 30.4721 29.2302 28.6348 31.5068 28.6348Z",
                        class: "IncodeCameraButtonPath",
                    }),
                ],
            }),
        }),
    np = eP(({ onClick: e, disabled: t }, i) => {
        let { t: r } = iK();
        return Q("div", {
            class: "IncodeSelfieManualCapture",
            "data-testid": "manual-capture-button",
            children: [
                Q("p", {
                    id: "manual-capture-instructions",
                    class: "IncodeSelfieManualCaptureText",
                    children: r("selfiev2.manualCapture.instructions"),
                }),
                Q(iX, { size: 32 }),
                Q("div", {
                    children: Q(rc, {
                        ref: i,
                        id: "manual-capture-button",
                        variant: "link",
                        onClick: e,
                        disabled: t,
                        class: "IncodeSelfieManualCaptureButton",
                        "aria-label": r("selfiev2.manualCapture.captureButton"),
                        children: Q(nh, {}),
                    }),
                }),
            ],
        });
    }),
    nf = ({ detectionState: e, disabled: t }) => {
        let { t: i } = iK(),
            r = em(null),
            n = em({ message: "", at: 0 }),
            o = em(e),
            s = em(t),
            a = em(!1),
            l = em(),
            c = em(),
            d =
                {
                    idle: i("notifications.centerFaceV2"),
                    noFace: i("notifications.faceNotFound"),
                    tooManyFaces: i("notifications.tooManyFaces"),
                    tooClose: i("notifications.moveAway"),
                    tooFar: i("notifications.moveCloser"),
                    blur: i("notifications.onBlur"),
                    dark: i("notifications.onDark"),
                    faceAngle: i("notifications.onFaceAngleV2"),
                    headWear: i("notifications.removeHeadwear"),
                    lenses: i("notifications.removeLenses"),
                    eyesClosed: i("notifications.eyesClosed"),
                    faceMask: i("notifications.mask"),
                    centerFace: i("notifications.centerFaceV2"),
                    getReady: i("notifications.getReady"),
                    capturing: i("idv2.capture.takingPhoto"),
                }[e] ?? "",
            u = eC((e) => {
                let t = Date.now(),
                    i = n.current;
                if (e === i.message && t - i.at < 200) return;
                n.current = { message: e, at: t };
                let o = r.current;
                o &&
                    (clearTimeout(l.current),
                    (o.textContent = ""),
                    (c.current = setTimeout(() => {
                        (o.textContent = e),
                            (l.current = setTimeout(() => {
                                o.textContent = "";
                            }, 3e3));
                    }, 50)));
            }, []);
        return (
            ep(() => {
                let r = s.current;
                if (((s.current = t), t || "manualCapture" === e)) {
                    a.current = !1;
                    return;
                }
                if (a.current) return;
                let n = setTimeout(
                    () => {
                        (a.current = !0), u(i("selfiev2.autoCapture.defaultAriaInstructions"));
                    },
                    r ? 1e3 : 500,
                );
                return () => clearTimeout(n);
            }, [e, t, u, i]),
            ep(() => {
                let r = o.current;
                (o.current = e),
                    t ||
                        "manualCapture" === r ||
                        "manualCapture" !== e ||
                        u(i("idv2.capture.manualCapture.modeSwitchAriaAnnouncement"));
            }, [u, e, i, t]),
            ep(() => {
                t || !d || u(d);
            }, [d, u, t]),
            ep(
                () => () => {
                    clearTimeout(c.current), clearTimeout(l.current);
                },
                [],
            ),
            Q(A, {
                children: [
                    Q("div", {
                        ref: r,
                        class: "IncodeCaptureVisuallyHidden",
                        "aria-live": "assertive",
                        "aria-atomic": "true",
                    }),
                    d
                        ? Q(A, {
                              children: [
                                  Q("div", {
                                      class: "IncodeNotification",
                                      "aria-hidden": "true",
                                      children: Q("p", { class: "IncodeNotificationText", children: d }),
                                  }),
                                  Q(iX, { size: 24 }),
                              ],
                          })
                        : null,
                ],
            })
        );
    },
    nm = ({ manager: e, state: t }) => {
        let {
                captureStatus: i,
                stream: r,
                detectionStatus: n,
                attemptsRemaining: o,
                uploadError: s,
                assistedOnboarding: a,
                ageAssurance: l,
            } = t,
            [c, d] = eh(!1),
            { t: u } = iK(),
            h = em(null);
        return (ep(() => {
            "manualCapture" === n && h.current?.focus();
        }, [n]),
        "initializing" === i)
            ? Q(i8, { spinnerConfig: { subtitle: u("loadingCircle.preparingCamera") } })
            : "detecting" === i
              ? "offline" === n
                  ? Q(rs, { title: "No internet connection" })
                  : Q(rs, {
                        "data-testid": "capture-container",
                        children: [
                            Q(i0, { className: "IncodeCaptureVisuallyHidden", children: u("selfiev2.capture.title") }),
                            Q(iX, { size: 48 }),
                            Q("div", {
                                class: "IncodeCaptureContainer",
                                children: [
                                    Q(nu, {
                                        borderState: c
                                            ? "capturing"
                                            : "detecting" === n
                                              ? "idle"
                                              : "getReady" === n || "getReadyFinished" === n
                                                ? "loading"
                                                : "success" === n
                                                  ? "success"
                                                  : "error" === n
                                                    ? "error"
                                                    : "idle",
                                    }),
                                    Q("div", {
                                        class: "IncodeCaptureFrame",
                                        children: Q("div", {
                                            class: "IncodeCaptureVideoWrapper",
                                            "aria-hidden": "true",
                                            children: r
                                                ? Q(A, {
                                                      children: [
                                                          Q(ng, { stream: r, mirrored: !a }),
                                                          Q("div", {
                                                              class: "IncodeCaptureVideo",
                                                              children: Q(nl, {}),
                                                          }),
                                                      ],
                                                  })
                                                : null,
                                        }),
                                    }),
                                    Q(iX, { size: 32 }),
                                    n ? Q(nf, { detectionState: n, disabled: !!s || c }) : null,
                                    "manualCapture" === n
                                        ? Q(np, {
                                              ref: h,
                                              onClick: () => {
                                                  d(!0), e.capture();
                                              },
                                              disabled: c,
                                          })
                                        : null,
                                ],
                            }),
                            s
                                ? Q(na, {
                                      error: s,
                                      attemptsRemaining: o,
                                      onTryAgain: () => {
                                          e.retryCapture(), d(!1);
                                      },
                                  })
                                : null,
                        ],
                    })
              : "capturing" === i
                ? Q(rs, {
                      className: "IncodeCaptureCapturingPage",
                      title: "Capturing",
                      subtitle: "Taking photo...",
                      children: Q("div", {
                          class: "IncodeCaptureCapturingActions",
                          children: Q(rc, { isLoading: !0, children: "Capturing..." }),
                      }),
                  })
                : "uploading" === i
                  ? Q(nr, {
                        className: "IncodeCaptureStatusUploading",
                        icon: Q(i3, { size: 64 }),
                        title: u(l ? "idv2.capture.processing.verifying" : "idv2.capture.processing.uploading"),
                    })
                  : "uploadError" === i
                    ? Q(na, {
                          error: s,
                          attemptsRemaining: o,
                          onTryAgain: () => {
                              e.retryCapture(), d(!1);
                          },
                      })
                    : "success" === i
                      ? Q(nr, { icon: Q(rd, { size: 64 }), title: u("idv2.capture.processing.success") })
                      : null;
    },
    ng = ({ stream: e, mirrored: t }) => {
        let i = em(null);
        return (
            ep(() => {
                i.current && e && (i.current.srcObject = e);
            }, [e]),
            Q("video", {
                ref: i,
                autoplay: !0,
                playsInline: !0,
                muted: !0,
                "aria-hidden": "true",
                class: t ? "IncodeCaptureVideoElement IncodeCaptureVideoMirrored" : "IncodeCaptureVideoElement",
            })
        );
    },
    nC = ({ manager: e, ageAssurance: t = !1 }) => {
        let { t: r } = iK(),
            [n, o] = eh(!1),
            [s, a] = eh(null);
        return (
            ep(() => {
                i.e("29585")
                    .then(i.bind(i, 10632))
                    .then((e) => {
                        a(e.default);
                    });
            }, []),
            Q(rZ, {
                animationData: s,
                title: r(t ? "face.tutorial.ageAssuranceTitle" : "face.tutorial.title"),
                titleId: "face-tutorial-heading",
                subtitle: r(t ? "face.tutorial.ageAssuranceSubtitle" : "face.tutorial.subtitle"),
                onContinue: () => {
                    o(!0), e.nextStep();
                },
                buttonText: r(t ? "face.tutorial.ageAssuranceStartCapture" : "face.tutorial.startCapture"),
                disclaimerText: r("face.tutorial.autoCapture"),
                isLoading: n,
                className: "IncodeSelfieTutorial",
            })
        );
    },
    nv = i(976886),
    ny = i(133237),
    nw = i(171251);
i(401959);
var n_ = class {
    constructor(e) {
        (this._process = e), (this._active = !1), (this._current = null), (this._last = null);
    }
    start() {
        (this._active = !0), this.flush();
    }
    clear() {
        this._current && ((this._current.next = null), (this._last = this._current));
    }
    enqueue(e) {
        let t = { value: e, next: null };
        if (this._current) {
            (this._last.next = t), (this._last = t);
            return;
        }
        (this._current = t), (this._last = t), this._active && this.flush();
    }
    flush() {
        for (; this._current; ) {
            let e = this._current;
            this._process(e.value), (this._current = e.next);
        }
        this._last = null;
    }
};
let nb = "xstate.init",
    nL = "xstate.stop";
function nE(e, t) {
    return { type: `xstate.done.state.${e}`, output: t };
}
function nS(e, t) {
    return { type: `xstate.error.actor.${e}`, error: t, actorId: e };
}
function nI(e) {
    return { type: nb, input: e };
}
function nT(e) {
    setTimeout(() => {
        throw e;
    });
}
let nk = ("function" == typeof Symbol && Symbol.observable) || "@@observable";
function nx(e) {
    if (nR(e)) return e;
    let t = [],
        i = "";
    for (let r = 0; r < e.length; r++) {
        switch (e.charCodeAt(r)) {
            case 92:
                (i += e[r + 1]), r++;
                continue;
            case 46:
                t.push(i), (i = "");
                continue;
        }
        i += e[r];
    }
    return t.push(i), t;
}
function nP(e) {
    var t;
    return (t = e) && "object" == typeof t && "machine" in t && "value" in t
        ? e.value
        : "string" != typeof e
          ? e
          : (function (e) {
                if (1 === e.length) return e[0];
                let t = {},
                    i = t;
                for (let t = 0; t < e.length - 1; t++)
                    if (t === e.length - 2) i[e[t]] = e[t + 1];
                    else {
                        let r = i;
                        (i = {}), (r[e[t]] = i);
                    }
                return t;
            })(nx(e));
}
function nM(e, t) {
    let i = {},
        r = Object.keys(e);
    for (let n = 0; n < r.length; n++) {
        let o = r[n];
        i[o] = t(e[o], o, e, n);
    }
    return i;
}
function nO(e) {
    var t;
    return void 0 === e ? [] : nR((t = e)) ? t : [t];
}
function nA(e, t, i, r) {
    return "function" == typeof e ? e({ context: t, event: i, self: r }) : e;
}
function nR(e) {
    return Array.isArray(e);
}
function nD(e) {
    var t;
    return (nR((t = e)) ? t : [t]).map((e) => (void 0 === e || "string" == typeof e ? { target: e } : e));
}
function nF(e) {
    if (void 0 !== e && "" !== e) return nO(e);
}
function nU(e, t, i) {
    let r = "object" == typeof e,
        n = r ? e : void 0;
    return {
        next: (r ? e.next : e)?.bind(n),
        error: (r ? e.error : t)?.bind(n),
        complete: (r ? e.complete : i)?.bind(n),
    };
}
function nH(e, t) {
    let i = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
    if (!i) return e.implementations.actors[t];
    let [, r, n] = i,
        o = e.getStateNodeById(n).config.invoke;
    return (Array.isArray(o) ? o[r] : o).src;
}
function nN(e, t) {
    return `${e.sessionId}.${t}`;
}
let nV = 0,
    nB = !1,
    nz =
        (((a = {})[(a.NotStarted = 0)] = "NotStarted"),
        (a[(a.Running = 1)] = "Running"),
        (a[(a.Stopped = 2)] = "Stopped"),
        a),
    n$ = {
        clock: { setTimeout: (e, t) => setTimeout(e, t), clearTimeout: (e) => clearTimeout(e) },
        logger: console.log.bind(console),
        devTools: !1,
    };
var nZ = class {
    constructor(e, t) {
        (this.logic = e),
            (this._snapshot = void 0),
            (this.clock = void 0),
            (this.options = void 0),
            (this.id = void 0),
            (this.mailbox = new n_(this._process.bind(this))),
            (this.observers = new Set()),
            (this.eventListeners = new Map()),
            (this.logger = void 0),
            (this._processingStatus = nz.NotStarted),
            (this._parent = void 0),
            (this._syncSnapshot = void 0),
            (this.ref = void 0),
            (this._actorScope = void 0),
            (this.systemId = void 0),
            (this.sessionId = void 0),
            (this.system = void 0),
            (this._doneEvent = void 0),
            (this.src = void 0),
            (this._deferred = []);
        const i = { ...n$, ...t },
            { clock: r, logger: n, parent: o, syncSnapshot: s, id: a, systemId: l, inspect: c } = i;
        (this.system = o
            ? o.system
            : (function (e, t) {
                  let i = new Map(),
                      r = new Map(),
                      n = new WeakMap(),
                      o = new Set(),
                      s = {},
                      { clock: a, logger: l } = t,
                      c = {
                          schedule: (e, t, i, r, n = Math.random().toString(36).slice(2)) => {
                              let o = { source: e, target: t, event: i, delay: r, id: n, startedAt: Date.now() },
                                  l = nN(e, n);
                              (d._snapshot._scheduledEvents[l] = o),
                                  (s[l] = a.setTimeout(() => {
                                      delete s[l], delete d._snapshot._scheduledEvents[l], d._relay(e, t, i);
                                  }, r));
                          },
                          cancel: (e, t) => {
                              let i = nN(e, t),
                                  r = s[i];
                              delete s[i], delete d._snapshot._scheduledEvents[i], void 0 !== r && a.clearTimeout(r);
                          },
                          cancelAll: (e) => {
                              for (let t in d._snapshot._scheduledEvents) {
                                  let i = d._snapshot._scheduledEvents[t];
                                  i.source === e && c.cancel(e, i.id);
                              }
                          },
                      },
                      d = {
                          _snapshot: { _scheduledEvents: (t?.snapshot && t.snapshot.scheduler) ?? {} },
                          _bookId: () => `x:${nV++}`,
                          _register: (e, t) => (i.set(e, t), e),
                          _unregister: (e) => {
                              i.delete(e.sessionId);
                              let t = n.get(e);
                              void 0 !== t && (r.delete(t), n.delete(e));
                          },
                          get: (e) => r.get(e),
                          getAll: () => Object.fromEntries(r.entries()),
                          _set: (e, t) => {
                              let i = r.get(e);
                              if (i && i !== t) throw Error(`Actor with system ID '${e}' already exists.`);
                              r.set(e, t), n.set(t, e);
                          },
                          inspect: (e) => {
                              let t = nU(e);
                              return (
                                  o.add(t),
                                  {
                                      unsubscribe() {
                                          o.delete(t);
                                      },
                                  }
                              );
                          },
                          _sendInspectionEvent: (t) => {
                              if (!o.size) return;
                              let i = { ...t, rootId: e.sessionId };
                              o.forEach((e) => e.next?.(i));
                          },
                          _relay: (e, t, i) => {
                              d._sendInspectionEvent({ type: "@xstate.event", sourceRef: e, actorRef: t, event: i }),
                                  t._send(i);
                          },
                          scheduler: c,
                          getSnapshot: () => ({ _scheduledEvents: { ...d._snapshot._scheduledEvents } }),
                          start: () => {
                              let e = d._snapshot._scheduledEvents;
                              for (let t in ((d._snapshot._scheduledEvents = {}), e)) {
                                  let { source: i, target: r, event: n, delay: o, id: s } = e[t];
                                  c.schedule(i, r, n, o, s);
                              }
                          },
                          _clock: a,
                          _logger: l,
                      };
                  return d;
              })(this, { clock: r, logger: n })),
            c && !o && this.system.inspect(nU(c)),
            (this.sessionId = this.system._bookId()),
            (this.id = a ?? this.sessionId),
            (this.logger = t?.logger ?? this.system._logger),
            (this.clock = t?.clock ?? this.system._clock),
            (this._parent = o),
            (this._syncSnapshot = s),
            (this.options = i),
            (this.src = i.src ?? e),
            (this.ref = this),
            (this._actorScope = {
                self: this,
                id: this.id,
                sessionId: this.sessionId,
                logger: this.logger,
                defer: (e) => {
                    this._deferred.push(e);
                },
                system: this.system,
                stopChild: (e) => {
                    if (e._parent !== this)
                        throw Error(`Cannot stop child actor ${e.id} of ${this.id} because it is not a child`);
                    e._stop();
                },
                emit: (e) => {
                    let t = this.eventListeners.get(e.type),
                        i = this.eventListeners.get("*");
                    if (t || i)
                        for (let r of [...(t ? t.values() : []), ...(i ? i.values() : [])])
                            try {
                                r(e);
                            } catch (e) {
                                nT(e);
                            }
                },
                actionExecutor: (e) => {
                    let t = () => {
                        if (
                            (this._actorScope.system._sendInspectionEvent({
                                type: "@xstate.action",
                                actorRef: this,
                                action: { type: e.type, params: e.params },
                            }),
                            !e.exec)
                        )
                            return;
                        let t = nB;
                        try {
                            (nB = !0), e.exec(e.info, e.params);
                        } finally {
                            nB = t;
                        }
                    };
                    this._processingStatus === nz.Running ? t() : this._deferred.push(t);
                },
            }),
            (this.send = this.send.bind(this)),
            this.system._sendInspectionEvent({ type: "@xstate.actor", actorRef: this }),
            l && ((this.systemId = l), this.system._set(l, this)),
            this._initState(t?.snapshot ?? t?.state),
            l && "active" !== this._snapshot.status && this.system._unregister(this);
    }
    _initState(e) {
        try {
            this._snapshot = e
                ? this.logic.restoreSnapshot
                    ? this.logic.restoreSnapshot(e, this._actorScope)
                    : e
                : this.logic.getInitialSnapshot(this._actorScope, this.options?.input);
        } catch (e) {
            this._snapshot = { status: "error", output: void 0, error: e };
        }
    }
    update(e, t) {
        let i;
        for (this._snapshot = e; (i = this._deferred.shift()); )
            try {
                i();
            } catch (t) {
                (this._deferred.length = 0), (this._snapshot = { ...e, status: "error", error: t });
            }
        switch (this._snapshot.status) {
            case "active":
                for (let t of this.observers)
                    try {
                        t.next?.(e);
                    } catch (e) {
                        nT(e);
                    }
                break;
            case "done":
                var r;
                for (let t of this.observers)
                    try {
                        t.next?.(e);
                    } catch (e) {
                        nT(e);
                    }
                this._stopProcedure(),
                    this._complete(),
                    (this._doneEvent =
                        ((r = this.id), { type: `xstate.done.actor.${r}`, output: this._snapshot.output, actorId: r })),
                    this._parent && this.system._relay(this, this._parent, this._doneEvent);
                break;
            case "error":
                this._error(this._snapshot.error);
        }
        this.system._sendInspectionEvent({ type: "@xstate.snapshot", actorRef: this, event: t, snapshot: e });
    }
    subscribe(e, t, i) {
        let r = nU(e, t, i);
        if (this._processingStatus !== nz.Stopped) this.observers.add(r);
        else
            switch (this._snapshot.status) {
                case "done":
                    try {
                        r.complete?.();
                    } catch (e) {
                        nT(e);
                    }
                    break;
                case "error": {
                    let e = this._snapshot.error;
                    if (r.error)
                        try {
                            r.error(e);
                        } catch (e) {
                            nT(e);
                        }
                    else nT(e);
                }
            }
        return {
            unsubscribe: () => {
                this.observers.delete(r);
            },
        };
    }
    on(e, t) {
        let i = this.eventListeners.get(e);
        i || ((i = new Set()), this.eventListeners.set(e, i));
        let r = t.bind(void 0);
        return (
            i.add(r),
            {
                unsubscribe: () => {
                    i.delete(r);
                },
            }
        );
    }
    start() {
        if (this._processingStatus === nz.Running) return this;
        this._syncSnapshot &&
            this.subscribe({
                next: (e) => {
                    "active" === e.status &&
                        this.system._relay(this, this._parent, { type: `xstate.snapshot.${this.id}`, snapshot: e });
                },
                error: () => {},
            }),
            this.system._register(this.sessionId, this),
            this.systemId && this.system._set(this.systemId, this),
            (this._processingStatus = nz.Running);
        let e = nI(this.options.input);
        switch (
            (this.system._sendInspectionEvent({
                type: "@xstate.event",
                sourceRef: this._parent,
                actorRef: this,
                event: e,
            }),
            this._snapshot.status)
        ) {
            case "done":
                return this.update(this._snapshot, e), this;
            case "error":
                return this._error(this._snapshot.error), this;
        }
        if ((this._parent || this.system.start(), this.logic.start))
            try {
                this.logic.start(this._snapshot, this._actorScope);
            } catch (e) {
                return (this._snapshot = { ...this._snapshot, status: "error", error: e }), this._error(e), this;
            }
        return (
            this.update(this._snapshot, e), this.options.devTools && this.attachDevTools(), this.mailbox.start(), this
        );
    }
    _process(e) {
        let t, i;
        try {
            t = this.logic.transition(this._snapshot, e, this._actorScope);
        } catch (e) {
            i = { err: e };
        }
        if (i) {
            let { err: e } = i;
            (this._snapshot = { ...this._snapshot, status: "error", error: e }), this._error(e);
            return;
        }
        this.update(t, e), e.type === nL && (this._stopProcedure(), this._complete());
    }
    _stop() {
        return (
            this._processingStatus === nz.Stopped ||
                ((this.mailbox.clear(), this._processingStatus === nz.NotStarted)
                    ? (this._processingStatus = nz.Stopped)
                    : this.mailbox.enqueue({ type: nL })),
            this
        );
    }
    stop() {
        if (this._parent) throw Error("A non-root actor cannot be stopped directly.");
        return this._stop();
    }
    _complete() {
        for (let e of this.observers)
            try {
                e.complete?.();
            } catch (e) {
                nT(e);
            }
        this.observers.clear();
    }
    _reportError(e) {
        if (!this.observers.size) {
            this._parent || nT(e);
            return;
        }
        let t = !1;
        for (let i of this.observers) {
            let r = i.error;
            t ||= !r;
            try {
                r?.(e);
            } catch (e) {
                nT(e);
            }
        }
        this.observers.clear(), t && nT(e);
    }
    _error(e) {
        this._stopProcedure(),
            this._reportError(e),
            this._parent && this.system._relay(this, this._parent, nS(this.id, e));
    }
    _stopProcedure() {
        return (
            this._processingStatus !== nz.Running ||
                (this.system.scheduler.cancelAll(this),
                this.mailbox.clear(),
                (this.mailbox = new n_(this._process.bind(this))),
                (this._processingStatus = nz.Stopped),
                this.system._unregister(this)),
            this
        );
    }
    _send(e) {
        this._processingStatus !== nz.Stopped && this.mailbox.enqueue(e);
    }
    send(e) {
        this.system._relay(void 0, this, e);
    }
    attachDevTools() {
        let { devTools: e } = this.options;
        e &&
            ("function" == typeof e
                ? e
                : (e) => {
                      if ("u" < typeof window) return;
                      let t = (function () {
                          let e =
                              "u" > typeof globalThis
                                  ? globalThis
                                  : "u" > typeof self
                                    ? self
                                    : "u" > typeof window
                                      ? window
                                      : "u" > typeof global
                                        ? global
                                        : void 0;
                          if (e.__xstate__) return e.__xstate__;
                      })();
                      t && t.register(e);
                  })(this);
    }
    toJSON() {
        return { xstate$$type: 1, id: this.id };
    }
    getPersistedSnapshot(e) {
        return this.logic.getPersistedSnapshot(this._snapshot, e);
    }
    [nk]() {
        return this;
    }
    getSnapshot() {
        return this._snapshot;
    }
};
function nW(e, ...[t]) {
    return new nZ(e, t);
}
function nj(e, t, i, r, { sendId: n }) {
    return [t, { sendId: "function" == typeof n ? n(i, r) : n }, void 0];
}
function nK(e, t) {
    e.defer(() => {
        e.system.scheduler.cancel(e.self, t.sendId);
    });
}
function nG(e) {
    function t(e, t) {}
    return (t.type = "xstate.cancel"), (t.sendId = e), (t.resolve = nj), (t.execute = nK), t;
}
function nq(e, t, i, r, { id: n, systemId: o, src: s, input: a, syncSnapshot: l }) {
    let c,
        d,
        u = "string" == typeof s ? nH(t.machine, s) : s,
        h = "function" == typeof n ? n(i) : n;
    return (
        u &&
            ((d = "function" == typeof a ? a({ context: t.context, event: i.event, self: e.self }) : a),
            (c = nW(u, { id: h, src: s, parent: e.self, syncSnapshot: l, systemId: o, input: d }))),
        [oI(t, { children: { ...t.children, [h]: c } }), { id: n, systemId: o, actorRef: c, src: s, input: d }, void 0]
    );
}
function nY(e, { actorRef: t }) {
    t &&
        e.defer(() => {
            t._processingStatus !== nz.Stopped && t.start();
        });
}
function nQ(...[e, { id: t, systemId: i, input: r, syncSnapshot: n = !1 } = {}]) {
    function o(e, t) {}
    return (
        (o.type = "xstate.spawnChild"),
        (o.id = t),
        (o.systemId = i),
        (o.src = e),
        (o.input = r),
        (o.syncSnapshot = n),
        (o.resolve = nq),
        (o.execute = nY),
        o
    );
}
function nX(e, t, i, r, { actorRef: n }) {
    let o = "function" == typeof n ? n(i, r) : n,
        s = "string" == typeof o ? t.children[o] : o,
        a = t.children;
    return s && ((a = { ...a }), delete a[s.id]), [oI(t, { children: a }), s, void 0];
}
function nJ(e, t) {
    if (t) {
        if ((e.system._unregister(t), t._processingStatus !== nz.Running)) return void e.stopChild(t);
        e.defer(() => {
            e.stopChild(t);
        });
    }
}
function n1(e) {
    function t(e, t) {}
    return (t.type = "xstate.stopChild"), (t.actorRef = e), (t.resolve = nX), (t.execute = nJ), t;
}
function n2(e, t, i, r) {
    let { machine: n } = r,
        o = "function" == typeof e,
        s = o ? e : n.implementations.guards["string" == typeof e ? e : e.type];
    if (!o && !s) throw Error(`Guard '${"string" == typeof e ? e : e.type}' is not implemented.'.`);
    if ("function" != typeof s) return n2(s, t, i, r);
    let a = { context: t, event: i },
        l =
            o || "string" == typeof e
                ? void 0
                : "params" in e
                  ? "function" == typeof e.params
                      ? e.params({ context: t, event: i })
                      : e.params
                  : void 0;
    return "check" in s ? s.check(r, a, s) : s(a, l);
}
let n3 = (e) => "atomic" === e.type || "final" === e.type;
function n0(e) {
    return Object.values(e.states).filter((e) => "history" !== e.type);
}
function n6(e, t) {
    let i = [];
    if (t === e) return i;
    let r = e.parent;
    for (; r && r !== t; ) i.push(r), (r = r.parent);
    return i;
}
function n5(e) {
    let t = new Set(e),
        i = n4(t);
    for (let e of t)
        if ("compound" !== e.type || (i.get(e) && i.get(e).length)) {
            if ("parallel" === e.type) {
                for (let i of n0(e)) if ("history" !== i.type && !t.has(i)) for (let e of or(i)) t.add(e);
            }
        } else or(e).forEach((e) => t.add(e));
    for (let e of t) {
        let i = e.parent;
        for (; i; ) t.add(i), (i = i.parent);
    }
    return t;
}
function n4(e) {
    let t = new Map();
    for (let i of e)
        t.has(i) || t.set(i, []), i.parent && (t.has(i.parent) || t.set(i.parent, []), t.get(i.parent).push(i));
    return t;
}
function n9(e, t) {
    return (function e(t, i) {
        let r = i.get(t);
        if (!r) return {};
        if ("compound" === t.type) {
            let e = r[0];
            if (!e) return {};
            if (n3(e)) return e.key;
        }
        let n = {};
        for (let t of r) n[t.key] = e(t, i);
        return n;
    })(e, n4(n5(t)));
}
function n8(e, t) {
    return "compound" === t.type
        ? n0(t).some((t) => "final" === t.type && e.has(t))
        : "parallel" === t.type
          ? n0(t).every((t) => n8(e, t))
          : "final" === t.type;
}
let n7 = (e) => "#" === e[0];
function oe(e, t, i) {
    let r = nF(i.target),
        n = i.reenter ?? !1,
        o = (function (e, t) {
            if (void 0 !== t)
                return t.map((t) => {
                    if ("string" != typeof t) return t;
                    if (n7(t)) return e.machine.getStateNodeById(t);
                    let i = "." === t[0];
                    if (i && !e.parent) return os(e, t.slice(1));
                    let r = i ? e.key + t : t;
                    if (e.parent)
                        try {
                            return os(e.parent, r);
                        } catch (t) {
                            throw Error(`Invalid transition definition for state node '${e.id}':
${t.message}`);
                        }
                    throw Error(
                        `Invalid target: "${t}" is not a valid target from the root node. Did you mean ".${t}"?`,
                    );
                });
        })(e, r),
        s = {
            ...i,
            actions: nO(i.actions),
            guard: i.guard,
            target: o,
            source: e,
            reenter: n,
            eventType: t,
            toJSON: () => ({ ...s, source: `#${e.id}`, target: o ? o.map((e) => `#${e.id}`) : void 0 }),
        };
    return s;
}
function ot(e) {
    let t = nF(e.config.target);
    return t ? { target: t.map((t) => ("string" == typeof t ? os(e.parent, t) : t)) } : e.parent.initial;
}
function oi(e) {
    return "history" === e.type;
}
function or(e) {
    let t = on(e);
    for (let i of t) for (let r of n6(i, e)) t.add(r);
    return t;
}
function on(e) {
    let t = new Set();
    return (
        !(function e(i) {
            if (!t.has(i)) {
                if ((t.add(i), "compound" === i.type)) e(i.initial.target[0]);
                else if ("parallel" === i.type) for (let t of n0(i)) e(t);
            }
        })(e),
        t
    );
}
function oo(e, t) {
    if (n7(t)) return e.machine.getStateNodeById(t);
    if (!e.states) throw Error(`Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`);
    let i = e.states[t];
    if (!i) throw Error(`Child state '${t}' does not exist on '${e.id}'`);
    return i;
}
function os(e, t) {
    if ("string" == typeof t && n7(t))
        try {
            return e.machine.getStateNodeById(t);
        } catch {}
    let i = nx(t).slice(),
        r = e;
    for (; i.length; ) {
        let e = i.shift();
        if (!e.length) break;
        r = oo(r, e);
    }
    return r;
}
function oa(e, t) {
    if ("string" == typeof t) {
        let i = e.states[t];
        if (!i) throw Error(`State '${t}' does not exist on '${e.id}'`);
        return [e, i];
    }
    let i = Object.keys(t),
        r = i.map((t) => oo(e, t)).filter(Boolean);
    return [e.machine.root, e].concat(
        r,
        i.reduce((i, r) => {
            let n = oo(e, r);
            if (!n) return i;
            let o = oa(n, t[r]);
            return i.concat(o);
        }, []),
    );
}
function ol(e, t) {
    let i = e;
    for (; i.parent && i.parent !== t; ) i = i.parent;
    return i.parent === t;
}
function oc(e, t, i) {
    let r = new Set();
    for (let n of e) {
        let e = !1,
            o = new Set();
        for (let s of r)
            if (
                (function (e, t) {
                    let i = new Set(e),
                        r = new Set(t);
                    for (let e of i) if (r.has(e)) return !0;
                    for (let e of r) if (i.has(e)) return !0;
                    return !1;
                })(oh([n], t, i), oh([s], t, i))
            )
                if (ol(n.source, s.source)) o.add(s);
                else {
                    e = !0;
                    break;
                }
        if (!e) {
            for (let e of o) r.delete(e);
            r.add(n);
        }
    }
    return Array.from(r);
}
function od(e, t) {
    if (!e.target) return [];
    let i = new Set();
    for (let r of e.target)
        if (oi(r))
            if (t[r.id]) for (let e of t[r.id]) i.add(e);
            else for (let e of od(ot(r), t)) i.add(e);
        else i.add(r);
    return [...i];
}
function ou(e, t) {
    let i = od(e, t);
    if (!i) return;
    if (!e.reenter && i.every((t) => t === e.source || ol(t, e.source))) return e.source;
    let r = (function (e) {
        let [t, ...i] = e;
        for (let e of n6(t, void 0)) if (i.every((t) => ol(t, e))) return e;
    })(i.concat(e.source));
    return r || (e.reenter ? void 0 : e.source.machine.root);
}
function oh(e, t, i) {
    let r = new Set();
    for (let n of e)
        if (n.target?.length) {
            let e = ou(n, i);
            for (let i of (n.reenter && n.source === e && r.add(e), t)) ol(i, e) && r.add(i);
        }
    return [...r];
}
function op(e, t, i, r, n, o) {
    if (!e.length) return t;
    let s = new Set(t._nodes),
        a = t.historyValue,
        l = oc(e, s, a),
        c = t;
    n ||
        ([c, a] = (function (e, t, i, r, n, o, s, a) {
            let l,
                c = e,
                d = oh(r, n, o);
            for (let e of (d.sort((e, t) => t.order - e.order), d))
                for (let t of (function (e) {
                    return Object.keys(e.states)
                        .map((t) => e.states[t])
                        .filter((e) => "history" === e.type);
                })(e)) {
                    let i;
                    (i = "deep" === t.history ? (t) => n3(t) && ol(t, e) : (t) => t.parent === e),
                        ((l ??= { ...o })[t.id] = Array.from(n).filter(i));
                }
            for (let e of d) (c = og(c, t, i, [...e.exit, ...e.invoke.map((e) => n1(e.id))], s, void 0)), n.delete(e);
            return [c, l || o];
        })(c, r, i, l, s, a, o, i.actionExecutor)),
        (c = (function (e, t, i, r, n, o, s, a) {
            let l = e,
                c = new Set(),
                d = new Set();
            (function (e, t, i, r) {
                for (let n of e) {
                    let e = ou(n, t);
                    for (let o of n.target || [])
                        !oi(o) && (n.source !== o || n.source !== e || n.reenter) && (r.add(o), i.add(o)),
                            of(o, t, i, r);
                    for (let o of od(n, t)) {
                        let s = n6(o, e);
                        e?.type === "parallel" && s.push(e), om(r, t, i, s, !n.source.parent && n.reenter ? void 0 : e);
                    }
                }
            })(r, s, d, c),
                a && d.add(e.machine.root);
            let u = new Set();
            for (let e of [...c].sort((e, t) => e.order - t.order)) {
                n.add(e);
                let r = [];
                for (let t of (r.push(...e.entry), e.invoke)) r.push(nQ(t.src, { ...t, syncSnapshot: !!t.onSnapshot }));
                if (d.has(e)) {
                    let t = e.initial.actions;
                    r.push(...t);
                }
                if (
                    ((l = og(
                        l,
                        t,
                        i,
                        r,
                        o,
                        e.invoke.map((e) => e.id),
                    )),
                    "final" === e.type)
                ) {
                    let r = e.parent,
                        s = r?.type === "parallel" ? r : r?.parent,
                        a = s || e;
                    for (
                        r?.type === "compound" &&
                        o.push(nE(r.id, void 0 !== e.output ? nA(e.output, l.context, t, i.self) : void 0));
                        s?.type === "parallel" && !u.has(s) && n8(n, s);
                    )
                        u.add(s), o.push(nE(s.id)), (a = s), (s = s.parent);
                    if (s) continue;
                    l = oI(l, {
                        status: "done",
                        output: (function (e, t, i, r, n) {
                            if (void 0 === r.output) return;
                            let o = nE(
                                n.id,
                                void 0 !== n.output && n.parent ? nA(n.output, e.context, t, i.self) : void 0,
                            );
                            return nA(r.output, e.context, o, i.self);
                        })(l, t, i, l.machine.root, a),
                    });
                }
            }
            return l;
        })(
            (c = og(
                c,
                r,
                i,
                l.flatMap((e) => e.actions),
                o,
                void 0,
            )),
            r,
            i,
            l,
            s,
            o,
            a,
            n,
        ));
    let d = [...s];
    "done" === c.status &&
        (c = og(
            c,
            r,
            i,
            d.sort((e, t) => t.order - e.order).flatMap((e) => e.exit),
            o,
            void 0,
        ));
    try {
        if (
            a === t.historyValue &&
            (function (e, t) {
                if (e.length !== t.size) return !1;
                for (let i of e) if (!t.has(i)) return !1;
                return !0;
            })(t._nodes, s)
        )
            return c;
        return oI(c, { _nodes: d, historyValue: a });
    } catch (e) {
        throw e;
    }
}
function of(e, t, i, r) {
    var n, o, s, a;
    if (oi(e))
        if (t[e.id]) {
            let s = t[e.id];
            for (let e of s) r.add(e), of(e, t, i, r);
            for (let a of s) {
                (n = a), (o = e.parent), om(r, t, i, n6(n, o));
            }
        } else {
            let n = ot(e);
            for (let o of n.target) r.add(o), n === e.parent?.initial && i.add(e.parent), of(o, t, i, r);
            for (let o of n.target) {
                (s = o), (a = e.parent), om(r, t, i, n6(s, a));
            }
        }
    else if ("compound" === e.type) {
        let [n] = e.initial.target;
        oi(n) || (r.add(n), i.add(n)), of(n, t, i, r), om(r, t, i, n6(n, e));
    } else if ("parallel" === e.type)
        for (let n of n0(e).filter((e) => !oi(e)))
            [...r].some((e) => ol(e, n)) || (oi(n) || (r.add(n), i.add(n)), of(n, t, i, r));
}
function om(e, t, i, r, n) {
    for (let o of r)
        if (((!n || ol(o, n)) && e.add(o), "parallel" === o.type))
            for (let r of n0(o).filter((e) => !oi(e))) [...e].some((e) => ol(e, r)) || (e.add(r), of(r, t, i, e));
}
function og(e, t, i, r, n, o) {
    let s = o ? [] : void 0,
        a = (function e(t, i, r, n, o, s) {
            let { machine: a } = t,
                l = t;
            for (let t of n) {
                var c;
                let n = "function" == typeof t,
                    d = n ? t : ((c = "string" == typeof t ? t : t.type), a.implementations.actions[c]),
                    u = { context: l.context, event: i, self: r.self, system: r.system },
                    h =
                        n || "string" == typeof t
                            ? void 0
                            : "params" in t
                              ? "function" == typeof t.params
                                  ? t.params({ context: l.context, event: i })
                                  : t.params
                              : void 0;
                if (!d || !("resolve" in d)) {
                    r.actionExecutor({
                        type: "string" == typeof t ? t : "object" == typeof t ? t.type : t.name || "(anonymous)",
                        info: u,
                        params: h,
                        exec: d,
                    });
                    continue;
                }
                let [p, f, m] = d.resolve(r, l, u, h, d, o);
                (l = p),
                    "retryResolve" in d && s?.push([d, f]),
                    "execute" in d &&
                        r.actionExecutor({ type: d.type, info: u, params: f, exec: d.execute.bind(null, r, f) }),
                    m && (l = e(l, i, r, m, o, s));
            }
            return l;
        })(e, t, i, r, { internalQueue: n, deferredActorIds: o }, s);
    return (
        s?.forEach(([e, t]) => {
            e.retryResolve(i, a, t);
        }),
        a
    );
}
function oC(e, t, i, r) {
    let n = e,
        o = [];
    function s(e, t, r) {
        i.system._sendInspectionEvent({
            type: "@xstate.microstep",
            actorRef: i.self,
            event: t,
            snapshot: e,
            _transitions: r,
        }),
            o.push(e);
    }
    if (t.type === nL) return s((n = oI(ov(n, t, i), { status: "stopped" })), t, []), { snapshot: n, microstates: o };
    let a = t;
    if (a.type !== nb) {
        let t = a,
            l = t.type.startsWith("xstate.error.actor"),
            c = oy(t, n);
        if (l && !c.length)
            return s((n = oI(e, { status: "error", error: t.error })), t, []), { snapshot: n, microstates: o };
        s((n = op(c, e, i, a, !1, r)), t, c);
    }
    let l = !0;
    for (; "active" === n.status; ) {
        let e = l
                ? (function (e, t) {
                      let i = new Set();
                      for (let r of e._nodes.filter(n3))
                          t: for (let n of [r].concat(n6(r, void 0)))
                              if (n.always) {
                                  for (let r of n.always)
                                      if (void 0 === r.guard || n2(r.guard, e.context, t, e)) {
                                          i.add(r);
                                          break t;
                                      }
                              }
                      return oc(Array.from(i), new Set(e._nodes), e.historyValue);
                  })(n, a)
                : [],
            t = e.length ? n : void 0;
        if (!e.length) {
            if (!r.length) break;
            e = oy((a = r.shift()), n);
        }
        (l = (n = op(e, n, i, a, !1, r)) !== t), s(n, a, e);
    }
    return "active" !== n.status && ov(n, a, i), { snapshot: n, microstates: o };
}
function ov(e, t, i) {
    return og(
        e,
        t,
        i,
        Object.values(e.children).map((e) => n1(e)),
        [],
        void 0,
    );
}
function oy(e, t) {
    return t.machine.getTransitionData(t, e);
}
let ow = function (e) {
        return (function e(t, i) {
            let r = nP(t),
                n = nP(i);
            return "string" == typeof n
                ? "string" == typeof r && n === r
                : "string" == typeof r
                  ? r in n
                  : Object.keys(r).every((t) => t in n && e(r[t], n[t]));
        })(e, this.value);
    },
    o_ = function (e) {
        return this.tags.has(e);
    },
    ob = function (e) {
        let t = this.machine.getTransitionData(this, e);
        return !!t?.length && t.some((e) => void 0 !== e.target || e.actions.length);
    },
    oL = function () {
        let { _nodes: e, tags: t, machine: i, getMeta: r, toJSON: n, can: o, hasTag: s, matches: a, ...l } = this;
        return { ...l, tags: Array.from(t) };
    },
    oE = function () {
        return this._nodes.reduce((e, t) => (void 0 !== t.meta && (e[t.id] = t.meta), e), {});
    };
function oS(e, t) {
    return {
        status: e.status,
        output: e.output,
        error: e.error,
        machine: t,
        context: e.context,
        _nodes: e._nodes,
        value: n9(t.root, e._nodes),
        tags: new Set(e._nodes.flatMap((e) => e.tags)),
        children: e.children,
        historyValue: e.historyValue || {},
        matches: ow,
        hasTag: o_,
        can: ob,
        getMeta: oE,
        toJSON: oL,
    };
}
function oI(e, t = {}) {
    return oS({ ...e, ...t }, e.machine);
}
function oT(e, t, i, r, { event: n, id: o, delay: s }, { internalQueue: a }) {
    let l,
        c = t.machine.implementations.delays;
    if ("string" == typeof n)
        throw Error(`Only event objects may be used with raise; use raise({ type: "${n}" }) instead`);
    let d = "function" == typeof n ? n(i, r) : n;
    if ("string" == typeof s) {
        let e = c && c[s];
        l = "function" == typeof e ? e(i, r) : e;
    } else l = "function" == typeof s ? s(i, r) : s;
    return "number" != typeof l && a.push(d), [t, { event: d, id: o, delay: l }, void 0];
}
function ok(e, t) {
    let { event: i, delay: r, id: n } = t;
    if ("number" == typeof r)
        return void e.defer(() => {
            let t = e.self;
            e.system.scheduler.schedule(t, t, i, r, n);
        });
}
function ox(e, t) {
    function i(e, t) {}
    return (
        (i.type = "xstate.raise"),
        (i.event = e),
        (i.id = t?.id),
        (i.delay = t?.delay),
        (i.resolve = oT),
        (i.execute = ok),
        i
    );
}
let oP = new WeakMap(),
    oM = "xstate.promise.resolve",
    oO = "xstate.promise.reject",
    oA = new WeakMap();
function oR(e) {
    return {
        config: e,
        transition: (e, t, i) => {
            if ("active" !== e.status) return e;
            switch (t.type) {
                case oM: {
                    let i = t.data;
                    return { ...e, status: "done", output: i, input: void 0 };
                }
                case oO:
                    return { ...e, status: "error", error: t.data, input: void 0 };
                case nL:
                    return oA.get(i.self)?.abort(), { ...e, status: "stopped", input: void 0 };
                default:
                    return e;
            }
        },
        start: (t, { self: i, system: r, emit: n }) => {
            if ("active" !== t.status) return;
            let o = new AbortController();
            oA.set(i, o),
                Promise.resolve(e({ input: t.input, system: r, self: i, signal: o.signal, emit: n })).then(
                    (e) => {
                        "active" === i.getSnapshot().status && (oA.delete(i), r._relay(i, i, { type: oM, data: e }));
                    },
                    (e) => {
                        "active" === i.getSnapshot().status && (oA.delete(i), r._relay(i, i, { type: oO, data: e }));
                    },
                );
        },
        getInitialSnapshot: (e, t) => ({ status: "active", output: void 0, error: void 0, input: t }),
        getPersistedSnapshot: (e) => e,
        restoreSnapshot: (e) => e,
    };
}
function oD(e, t, i, r, { assignment: n }) {
    if (!t.context)
        throw Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");
    let o = {},
        s = {
            context: t.context,
            event: i.event,
            spawn: (function (e, { machine: t, context: i }, r, n) {
                return (o, s) => {
                    let a = ((o, s) => {
                        if ("string" != typeof o)
                            return nW(o, {
                                id: s?.id,
                                parent: e.self,
                                syncSnapshot: s?.syncSnapshot,
                                input: s?.input,
                                src: o,
                                systemId: s?.systemId,
                            });
                        {
                            let a = nH(t, o);
                            if (!a) throw Error(`Actor logic '${o}' not implemented in machine '${t.id}'`);
                            let l = nW(a, {
                                id: s?.id,
                                parent: e.self,
                                syncSnapshot: s?.syncSnapshot,
                                input:
                                    "function" == typeof s?.input
                                        ? s.input({ context: i, event: r, self: e.self })
                                        : s?.input,
                                src: o,
                                systemId: s?.systemId,
                            });
                            return (n[l.id] = l), l;
                        }
                    })(o, s);
                    return (
                        (n[a.id] = a),
                        e.defer(() => {
                            a._processingStatus !== nz.Stopped && a.start();
                        }),
                        a
                    );
                };
            })(e, t, i.event, o),
            self: e.self,
            system: e.system,
        },
        a = {};
    if ("function" == typeof n) a = n(s, r);
    else
        for (let e of Object.keys(n)) {
            let t = n[e];
            a[e] = "function" == typeof t ? t(s, r) : t;
        }
    return [
        oI(t, {
            context: Object.assign({}, t.context, a),
            children: Object.keys(o).length ? { ...t.children, ...o } : t.children,
        }),
        void 0,
        void 0,
    ];
}
function oF(e) {
    function t(e, t) {}
    return (t.type = "xstate.assign"), (t.assignment = e), (t.resolve = oD), t;
}
let oU = new WeakMap();
function oH(e, t, i) {
    let r = oU.get(e);
    return r ? t in r || (r[t] = i()) : ((r = { [t]: i() }), oU.set(e, r)), r[t];
}
let oN = {},
    oV = (e) =>
        "string" == typeof e
            ? { type: e }
            : "function" == typeof e
              ? "resolve" in e
                  ? { type: e.type }
                  : { type: e.name }
              : e;
var oB = class e {
        constructor(t, i) {
            if (
                ((this.config = t),
                (this.key = void 0),
                (this.id = void 0),
                (this.type = void 0),
                (this.path = void 0),
                (this.states = void 0),
                (this.history = void 0),
                (this.entry = void 0),
                (this.exit = void 0),
                (this.parent = void 0),
                (this.machine = void 0),
                (this.meta = void 0),
                (this.output = void 0),
                (this.order = -1),
                (this.description = void 0),
                (this.tags = []),
                (this.transitions = void 0),
                (this.always = void 0),
                (this.parent = i._parent),
                (this.key = i._key),
                (this.machine = i._machine),
                (this.path = this.parent ? this.parent.path.concat(this.key) : []),
                (this.id = this.config.id || [this.machine.id, ...this.path].join(".")),
                (this.type =
                    this.config.type ||
                    (this.config.states && Object.keys(this.config.states).length
                        ? "compound"
                        : this.config.history
                          ? "history"
                          : "atomic")),
                (this.description = this.config.description),
                (this.order = this.machine.idMap.size),
                this.machine.idMap.set(this.id, this),
                (this.states = this.config.states
                    ? nM(this.config.states, (t, i) => new e(t, { _parent: this, _key: i, _machine: this.machine }))
                    : oN),
                "compound" === this.type && !this.config.initial)
            )
                throw Error(
                    `No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`,
                );
            (this.history = !0 === this.config.history ? "shallow" : this.config.history || !1),
                (this.entry = nO(this.config.entry).slice()),
                (this.exit = nO(this.config.exit).slice()),
                (this.meta = this.config.meta),
                (this.output = "final" !== this.type && this.parent ? void 0 : this.config.output),
                (this.tags = nO(t.tags).slice());
        }
        _initialize() {
            (this.transitions = (function (e) {
                let t = new Map();
                if (e.config.on)
                    for (let i of Object.keys(e.config.on)) {
                        if ("" === i)
                            throw Error(
                                'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.',
                            );
                        let r = e.config.on[i];
                        t.set(
                            i,
                            nD(r).map((t) => oe(e, i, t)),
                        );
                    }
                if (e.config.onDone) {
                    let i = `xstate.done.state.${e.id}`;
                    t.set(
                        i,
                        nD(e.config.onDone).map((t) => oe(e, i, t)),
                    );
                }
                for (let i of e.invoke) {
                    if (i.onDone) {
                        let r = `xstate.done.actor.${i.id}`;
                        t.set(
                            r,
                            nD(i.onDone).map((t) => oe(e, r, t)),
                        );
                    }
                    if (i.onError) {
                        let r = `xstate.error.actor.${i.id}`;
                        t.set(
                            r,
                            nD(i.onError).map((t) => oe(e, r, t)),
                        );
                    }
                    if (i.onSnapshot) {
                        let r = `xstate.snapshot.${i.id}`;
                        t.set(
                            r,
                            nD(i.onSnapshot).map((t) => oe(e, r, t)),
                        );
                    }
                }
                for (let i of e.after) {
                    let e = t.get(i.eventType);
                    e || ((e = []), t.set(i.eventType, e)), e.push(i);
                }
                return t;
            })(this)),
                this.config.always && (this.always = nD(this.config.always).map((e) => oe(this, "", e))),
                Object.keys(this.states).forEach((e) => {
                    this.states[e]._initialize();
                });
        }
        get definition() {
            return {
                id: this.id,
                key: this.key,
                version: this.machine.version,
                type: this.type,
                initial: this.initial
                    ? {
                          target: this.initial.target,
                          source: this,
                          actions: this.initial.actions.map(oV),
                          eventType: null,
                          reenter: !1,
                          toJSON: () => ({
                              target: this.initial.target.map((e) => `#${e.id}`),
                              source: `#${this.id}`,
                              actions: this.initial.actions.map(oV),
                              eventType: null,
                          }),
                      }
                    : void 0,
                history: this.history,
                states: nM(this.states, (e) => e.definition),
                on: this.on,
                transitions: [...this.transitions.values()].flat().map((e) => ({ ...e, actions: e.actions.map(oV) })),
                entry: this.entry.map(oV),
                exit: this.exit.map(oV),
                meta: this.meta,
                order: this.order || -1,
                output: this.output,
                invoke: this.invoke,
                description: this.description,
                tags: this.tags,
            };
        }
        toJSON() {
            return this.definition;
        }
        get invoke() {
            return oH(this, "invoke", () =>
                nO(this.config.invoke).map((e, t) => {
                    var i, r;
                    let { src: n, systemId: o } = e,
                        s = e.id ?? ((i = this.id), `${t}.${i}`),
                        a = "string" == typeof n ? n : `xstate.invoke.${((r = this.id), `${t}.${r}`)}`;
                    return {
                        ...e,
                        src: a,
                        id: s,
                        systemId: o,
                        toJSON() {
                            let { onDone: t, onError: i, ...r } = e;
                            return { ...r, type: "xstate.invoke", src: a, id: s };
                        },
                    };
                }),
            );
        }
        get on() {
            return oH(this, "on", () =>
                [...this.transitions]
                    .flatMap(([e, t]) => t.map((t) => [e, t]))
                    .reduce((e, [t, i]) => ((e[t] = e[t] || []), e[t].push(i), e), {}),
            );
        }
        get after() {
            return oH(this, "delayedTransitions", () => {
                var e;
                let t;
                return (
                    (e = this),
                    (t = e.config.after)
                        ? Object.keys(t)
                              .flatMap((i) => {
                                  var r;
                                  let n,
                                      o,
                                      s = t[i],
                                      a = Number.isNaN(+i) ? i : +i,
                                      l =
                                          ((r = e.id),
                                          (o = (n = { type: `xstate.after.${a}.${r}` }).type),
                                          e.entry.push(ox(n, { id: o, delay: a })),
                                          e.exit.push(nG(o)),
                                          o);
                                  return nO("string" == typeof s ? { target: s } : s).map((e) => ({
                                      ...e,
                                      event: l,
                                      delay: a,
                                  }));
                              })
                              .map((t) => {
                                  let { delay: i } = t;
                                  return { ...oe(e, t.event, t), delay: i };
                              })
                        : []
                );
            });
        }
        get initial() {
            return oH(this, "initial", () =>
                (function (e, t) {
                    let i = "string" == typeof t ? e.states[t] : t ? e.states[t.target] : void 0;
                    if (!i && t) throw Error(`Initial state node "${t}" not found on parent state node #${e.id}`);
                    let r = {
                        source: e,
                        actions: t && "string" != typeof t ? nO(t.actions) : [],
                        eventType: null,
                        reenter: !1,
                        target: i ? [i] : [],
                        toJSON: () => ({ ...r, source: `#${e.id}`, target: i ? [`#${i.id}`] : [] }),
                    };
                    return r;
                })(this, this.config.initial),
            );
        }
        next(e, t) {
            let i,
                r = t.type,
                n = [];
            for (let o of oH(this, `candidates-${r}`, () => {
                var e;
                return (
                    (e = this),
                    e.transitions.get(r) ||
                        [...e.transitions.keys()]
                            .filter((e) => {
                                if ("*" === e) return !0;
                                if (!e.endsWith(".*")) return !1;
                                let t = e.split("."),
                                    i = r.split(".");
                                for (let e = 0; e < t.length; e++) {
                                    let r = t[e],
                                        n = i[e];
                                    if ("*" === r) return e === t.length - 1;
                                    if (r !== n) return !1;
                                }
                                return !0;
                            })
                            .sort((e, t) => t.length - e.length)
                            .flatMap((t) => e.transitions.get(t))
                );
            })) {
                let { guard: s } = o,
                    a = e.context,
                    l = !1;
                try {
                    l = !s || n2(s, a, t, e);
                } catch (t) {
                    let e = "string" == typeof s ? s : "object" == typeof s ? s.type : void 0;
                    throw Error(`Unable to evaluate guard ${e ? `'${e}' ` : ""}in transition for event '${r}' in state node '${this.id}':
${t.message}`);
                }
                if (l) {
                    n.push(...o.actions), (i = o);
                    break;
                }
            }
            return i ? [i] : void 0;
        }
        get events() {
            return oH(this, "events", () => {
                let { states: e } = this,
                    t = new Set(this.ownEvents);
                if (e)
                    for (let i of Object.keys(e)) {
                        let r = e[i];
                        if (r.states) for (let e of r.events) t.add(`${e}`);
                    }
                return Array.from(t);
            });
        }
        get ownEvents() {
            return Array.from(
                new Set(
                    [...this.transitions.keys()].filter((e) =>
                        this.transitions.get(e).some((e) => !(!e.target && !e.actions.length && !e.reenter)),
                    ),
                ),
            );
        }
    },
    oz = class e {
        constructor(e, t) {
            (this.config = e),
                (this.version = void 0),
                (this.schemas = void 0),
                (this.implementations = void 0),
                (this.__xstatenode = !0),
                (this.idMap = new Map()),
                (this.root = void 0),
                (this.id = void 0),
                (this.states = void 0),
                (this.events = void 0),
                (this.id = e.id || "(machine)"),
                (this.implementations = {
                    actors: t?.actors ?? {},
                    actions: t?.actions ?? {},
                    delays: t?.delays ?? {},
                    guards: t?.guards ?? {},
                }),
                (this.version = this.config.version),
                (this.schemas = this.config.schemas),
                (this.transition = this.transition.bind(this)),
                (this.getInitialSnapshot = this.getInitialSnapshot.bind(this)),
                (this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this)),
                (this.restoreSnapshot = this.restoreSnapshot.bind(this)),
                (this.start = this.start.bind(this)),
                (this.root = new oB(e, { _key: this.id, _machine: this })),
                this.root._initialize(),
                (this.states = this.root.states),
                (this.events = this.root.events);
        }
        provide(t) {
            let { actions: i, guards: r, actors: n, delays: o } = this.implementations;
            return new e(this.config, {
                actions: { ...i, ...t.actions },
                guards: { ...r, ...t.guards },
                actors: { ...n, ...t.actors },
                delays: { ...o, ...t.delays },
            });
        }
        resolveState(e) {
            var t;
            let i = n9((t = this.root), [...n5(oa(t, e.value))]),
                r = n5(oa(this.root, i));
            return oS(
                {
                    _nodes: [...r],
                    context: e.context || {},
                    children: {},
                    status: n8(r, this.root) ? "done" : e.status || "active",
                    output: e.output,
                    error: e.error,
                    historyValue: e.historyValue,
                },
                this,
            );
        }
        transition(e, t, i) {
            return oC(e, t, i, []).snapshot;
        }
        microstep(e, t, i) {
            return oC(e, t, i, []).microstates;
        }
        getTransitionData(e, t) {
            return (
                (function e(t, i, r, n) {
                    if ("string" == typeof i) {
                        let e;
                        return (e = oo(t, i).next(r, n)) && e.length ? e : t.next(r, n);
                    }
                    if (1 === Object.keys(i).length) {
                        let o, s;
                        return (s = e(oo(t, (o = Object.keys(i))[0]), i[o[0]], r, n)) && s.length ? s : t.next(r, n);
                    }
                    let o = [];
                    for (let s of Object.keys(i)) {
                        let a = i[s];
                        if (!a) continue;
                        let l = e(oo(t, s), a, r, n);
                        l && o.push(...l);
                    }
                    return o.length ? o : t.next(r, n);
                })(this.root, e.value, e, t) || []
            );
        }
        getPreInitialState(e, t, i) {
            let { context: r } = this.config,
                n = oS(
                    {
                        context: "function" != typeof r && r ? r : {},
                        _nodes: [this.root],
                        children: {},
                        status: "active",
                    },
                    this,
                );
            return "function" == typeof r
                ? og(
                      n,
                      t,
                      e,
                      [oF(({ spawn: e, event: t, self: i }) => r({ spawn: e, input: t.input, self: i }))],
                      i,
                      void 0,
                  )
                : n;
        }
        getInitialSnapshot(e, t) {
            let i = nI(t),
                r = [],
                n = this.getPreInitialState(e, i, r),
                { snapshot: o } = oC(
                    op(
                        [
                            {
                                target: [...on(this.root)],
                                source: this.root,
                                reenter: !0,
                                actions: [],
                                eventType: null,
                                toJSON: null,
                            },
                        ],
                        n,
                        e,
                        i,
                        !0,
                        r,
                    ),
                    i,
                    e,
                    r,
                );
            return o;
        }
        start(e) {
            Object.values(e.children).forEach((e) => {
                "active" === e.getSnapshot().status && e.start();
            });
        }
        getStateNodeById(e) {
            let t = nx(e),
                i = t.slice(1),
                r = n7(t[0]) ? t[0].slice(1) : t[0],
                n = this.idMap.get(r);
            if (!n) throw Error(`Child state node '#${r}' does not exist on machine '${this.id}'`);
            return os(n, i);
        }
        get definition() {
            return this.root.definition;
        }
        toJSON() {
            return this.definition;
        }
        getPersistedSnapshot(e, t) {
            return (function (e, t) {
                let {
                        _nodes: i,
                        tags: r,
                        machine: n,
                        children: o,
                        context: s,
                        can: a,
                        hasTag: l,
                        matches: c,
                        getMeta: d,
                        toJSON: u,
                        ...h
                    } = e,
                    p = {};
                for (let e in o) {
                    let i = o[e];
                    p[e] = {
                        snapshot: i.getPersistedSnapshot(t),
                        src: i.src,
                        systemId: i.systemId,
                        syncSnapshot: i._syncSnapshot,
                    };
                }
                return {
                    ...h,
                    context: (function e(t) {
                        let i;
                        for (let r in t) {
                            let n = t[r];
                            if (n && "object" == typeof n)
                                if ("sessionId" in n && "send" in n && "ref" in n)
                                    (i ??= Array.isArray(t) ? t.slice() : { ...t })[r] = { xstate$$type: 1, id: n.id };
                                else {
                                    let o = e(n);
                                    o !== n && ((i ??= Array.isArray(t) ? t.slice() : { ...t })[r] = o);
                                }
                        }
                        return i ?? t;
                    })(s),
                    children: p,
                    historyValue: (function (e) {
                        if ("object" != typeof e || null === e) return {};
                        let t = {};
                        for (let i in e) {
                            let r = e[i];
                            Array.isArray(r) && (t[i] = r.map((e) => ({ id: e.id })));
                        }
                        return t;
                    })(h.historyValue),
                };
            })(e, t);
        }
        restoreSnapshot(e, t) {
            let i = {},
                r = e.children;
            Object.keys(r).forEach((e) => {
                let n = r[e],
                    o = n.snapshot,
                    s = n.src,
                    a = "string" == typeof s ? nH(this, s) : s;
                a &&
                    (i[e] = nW(a, {
                        id: e,
                        parent: t.self,
                        syncSnapshot: n.syncSnapshot,
                        snapshot: o,
                        src: s,
                        systemId: n.systemId,
                    }));
            });
            let n = (function (e, t) {
                    if (!t || "object" != typeof t) return {};
                    let i = {};
                    for (let r in t)
                        for (let n of t[r]) {
                            let t = (function (e, t) {
                                if (t instanceof oB) return t;
                                try {
                                    return e.machine.getStateNodeById(t.id);
                                } catch {}
                            })(e, n);
                            t && ((i[r] ??= []), i[r].push(t));
                        }
                    return i;
                })(this.root, e.historyValue),
                o = oS({ ...e, children: i, _nodes: Array.from(n5(oa(this.root, e.value))), historyValue: n }, this),
                s = new Set();
            return (
                !(function e(t, i) {
                    if (!s.has(t))
                        for (let r in (s.add(t), t)) {
                            let n = t[r];
                            if (n && "object" == typeof n) {
                                if ("xstate$$type" in n && 1 === n.xstate$$type) {
                                    t[r] = i[n.id];
                                    continue;
                                }
                                e(n, i);
                            }
                        }
                })(o.context, i),
                o
            );
        }
    };
function o$(e, t, i, r, { event: n }) {
    return [t, { event: "function" == typeof n ? n(i, r) : n }, void 0];
}
function oZ(e, { event: t }) {
    e.defer(() => e.emit(t));
}
function oW(e) {
    function t(e, t) {}
    return (t.type = "xstate.emit"), (t.event = e), (t.resolve = o$), (t.execute = oZ), t;
}
let oj = (((l = {}).Parent = "#_parent"), (l.Internal = "#_internal"), l);
function oK(e, t, i, r, { to: n, event: o, id: s, delay: a }, l) {
    let c,
        d,
        u = t.machine.implementations.delays;
    if ("string" == typeof o)
        throw Error(`Only event objects may be used with sendTo; use sendTo({ type: "${o}" }) instead`);
    let h = "function" == typeof o ? o(i, r) : o;
    if ("string" == typeof a) {
        let e = u && u[a];
        c = "function" == typeof e ? e(i, r) : e;
    } else c = "function" == typeof a ? a(i, r) : a;
    let p = "function" == typeof n ? n(i, r) : n;
    if ("string" == typeof p) {
        if (
            !(d =
                p === oj.Parent
                    ? e.self._parent
                    : p === oj.Internal
                      ? e.self
                      : p.startsWith("#_")
                        ? t.children[p.slice(2)]
                        : l.deferredActorIds?.includes(p)
                          ? p
                          : t.children[p])
        )
            throw Error(`Unable to send event to actor '${p}' from machine '${t.machine.id}'.`);
    } else d = p || e.self;
    return [t, { to: d, targetId: "string" == typeof p ? p : void 0, event: h, id: s, delay: c }, void 0];
}
function oG(e, t, i) {
    "string" == typeof i.to && (i.to = t.children[i.to]);
}
function oq(e, t) {
    e.defer(() => {
        let { to: i, event: r, delay: n, id: o } = t;
        "number" == typeof n
            ? e.system.scheduler.schedule(e.self, i, r, n, o)
            : e.system._relay(e.self, i, "xstate.error" === r.type ? nS(e.self.id, r.data) : r);
    });
}
function oY(e, t, i) {
    function r(e, t) {}
    return (
        (r.type = "xstate.sendTo"),
        (r.to = e),
        (r.event = t),
        (r.id = i?.id),
        (r.delay = i?.delay),
        (r.resolve = oK),
        (r.retryResolve = oG),
        (r.execute = oq),
        r
    );
}
function oQ(e, t, i, r, { collect: n }) {
    let o = [],
        s = function (e) {
            o.push(e);
        };
    return (
        (s.assign = (...e) => {
            o.push(oF(...e));
        }),
        (s.cancel = (...e) => {
            o.push(nG(...e));
        }),
        (s.raise = (...e) => {
            o.push(ox(...e));
        }),
        (s.sendTo = (...e) => {
            o.push(oY(...e));
        }),
        (s.sendParent = (...e) => {
            o.push(
                (function (e, t) {
                    return oY(oj.Parent, e, t);
                })(...e),
            );
        }),
        (s.spawnChild = (...e) => {
            o.push(nQ(...e));
        }),
        (s.stopChild = (...e) => {
            o.push(n1(...e));
        }),
        (s.emit = (...e) => {
            o.push(oW(...e));
        }),
        n(
            {
                context: i.context,
                event: i.event,
                enqueue: s,
                check: (e) => n2(e, t.context, i.event, t),
                self: e.self,
                system: e.system,
            },
            r,
        ),
        [t, void 0, o]
    );
}
function oX(e) {
    function t(e, t) {}
    return (t.type = "xstate.enqueueActions"), (t.collect = e), (t.resolve = oQ), t;
}
function oJ(e, t, i, r, { value: n, label: o }) {
    return [t, { value: "function" == typeof n ? n(i, r) : n, label: o }, void 0];
}
function o1({ logger: e }, { value: t, label: i }) {
    i ? e(i, t) : e(t);
}
function o2(e = ({ context: e, event: t }) => ({ context: e, event: t }), t) {
    function i(e, t) {}
    return (i.type = "xstate.log"), (i.value = e), (i.label = t), (i.resolve = oJ), (i.execute = o1), i;
}
function o3(e) {
    let { context: t } = e;
    if (e.matches("idle")) return { status: "idle" };
    if (e.matches("loading")) return { status: "loading" };
    if (e.matches("tutorial")) return { status: "tutorial", ageAssurance: t.config?.ageAssurance === !0 };
    if (e.matches("closed")) return { status: "closed" };
    if (e.matches("permissions")) {
        let t = (function (e) {
            if (e.matches("permissions")) {
                if (e.matches({ permissions: "idle" })) return "idle";
                if (e.matches({ permissions: "learnMore" })) return "learnMore";
                if (e.matches({ permissions: "requesting" })) return "requesting";
                if (e.matches({ permissions: "denied" })) return "denied";
            }
        })(e);
        return void 0 === t
            ? { status: "permissions", permissionStatus: "idle" }
            : { status: "permissions", permissionStatus: t };
    }
    if (e.matches("capture"))
        return {
            status: "capture",
            captureStatus:
                (e.matches({ capture: "initializing" })
                    ? "initializing"
                    : e.matches({ capture: "detecting" })
                      ? "detecting"
                      : e.matches({ capture: "capturing" }) || e.matches({ capture: "capturingManual" })
                        ? "capturing"
                        : e.matches({ capture: "preparingUpload" }) ||
                            e.matches({ capture: "uploading" }) ||
                            e.matches({ capture: "validatingUpload" })
                          ? "uploading"
                          : e.matches({ capture: "uploadError" })
                            ? "uploadError"
                            : e.matches({ capture: "success" })
                              ? "success"
                              : void 0) ?? "initializing",
            stream: t.stream,
            detectionStatus: t.detectionStatus ?? "idle",
            debugFrame: t.debugFrame,
            attemptsRemaining: t.attemptsRemaining ?? 0,
            uploadError: t.uploadError,
            assistedOnboarding: t.config?.assistedOnboarding ?? !1,
            ageAssurance: t.config?.ageAssurance === !0,
        };
    if (e.matches("processing")) return { status: "processing" };
    if (e.matches("finished")) return { status: "finished", processResponse: t.processResponse };
    if (e.matches("error")) {
        let e = t.error;
        return { status: "error", error: "string" == typeof e ? e : e ? e.message : "Unknown error" };
    }
    return { status: "idle" };
}
function o0(e, t) {
    let i = 0 === t ? "Exhausted" : "";
    switch (e) {
        case "LENSES_ERROR":
        case "LENSES_DETECTED":
            return `faceCapture.resultError.lensesDetected${i}`;
        case "BRIGHTNESS_ERROR":
            return `faceCapture.resultError.tooBright${i}`;
        case "MASK_ERROR":
        case "FACE_MASK_DETECTED":
            return `faceCapture.resultError.faceMaskDetected${i}`;
        case "FACE_TOO_DARK":
        case "TOO_DARK_ERROR":
            return `faceCapture.resultError.tooDark${i}`;
        case "CLOSED_EYES_ERROR":
        case "CLOSED_EYES_DETECTED":
            return `faceCapture.resultError.eyesClosed${i}`;
        case "HEAD_COVER_ERROR":
        case "HEAD_COVER_DETECTED":
            return `faceCapture.resultError.headCovered${i}`;
        case "FACE_OCCLUDED":
            return `faceCapture.resultError.faceOcclusion${i}`;
        case "TOO_BLURRY_ERROR":
        case "FACE_TOO_BLURRY":
        case "BAD_PHOTO_QUALITY":
        case "SELFIE_IMAGE_LOW_QUALITY":
            return `faceCapture.resultError.lowQuality${i}`;
        case "SERVER_ERROR":
        case "PROCESSING_ERROR":
        case "BAD_REQUEST":
            return `faceCapture.resultError.processingFailed${i}`;
        default:
            return `faceCapture.resultError.faceNotAligned${i}`;
    }
}
function o6(e) {
    return "string" == typeof e ? e : "object" == typeof e ? Object.keys(e)[0] : void 0;
}
function o5({ actor: e, trackElementClicked: t, trackCaptureAttemptFinished: i }) {
    return (
        (e.getSnapshot().context.dependencies.trackCaptureAttemptFinished = i),
        {
            load() {
                e.send({ type: "LOAD" });
            },
            nextStep() {
                t?.("nextStep"), e.send({ type: "NEXT_STEP" });
            },
            requestPermission() {
                t?.("requestPermission"), e.send({ type: "REQUEST_PERMISSION" });
            },
            goToLearnMore() {
                t?.("goToLearnMore"), e.send({ type: "GO_TO_LEARN_MORE" });
            },
            back() {
                t?.("back"), e.send({ type: "BACK" });
            },
            close() {
                t?.("close"), e.send({ type: "QUIT" });
            },
            reset() {
                e.send({ type: "RESET" });
            },
            retryCapture() {
                t?.("retryCapture"), e.send({ type: "RETRY_CAPTURE" });
            },
            capture() {
                t?.("capture"), e.send({ type: "MANUAL_CAPTURE" });
            },
        }
    );
}
function o4(e) {
    let t = e.context.uploadError;
    if ("string" == typeof t && 0 !== t.length) return { errorCode: t };
}
var o9 = class {
    async get(e) {
        try {
            let t = localStorage.getItem(e);
            if (null === t) return null;
            return JSON.parse(t);
        } catch (t) {
            if (t instanceof SyntaxError) throw Error(`Invalid JSON stored at key "${e}": ${t.message}`);
            throw t;
        }
    }
    async set(e, t) {
        try {
            let i = JSON.stringify(t);
            localStorage.setItem(e, i);
        } catch (t) {
            if ((t instanceof DOMException || "QuotaExceededError" === t.name) && "QuotaExceededError" === t.name)
                throw Error(`Storage quota exceeded for key "${e}"`);
            if (t instanceof TypeError) throw Error(`Failed to serialize value for key "${e}": ${t.message}`);
            throw t;
        }
    }
    async remove(e) {
        localStorage.removeItem(e);
    }
    async clear() {
        localStorage.clear();
    }
};
function o8(e) {
    return new Promise((t) => setTimeout(t, e));
}
var o7 = i(581763);
let se = [
    "rear",
    "back",
    "r\xfcck",
    "arri\xe8re",
    "trasera",
    "tr\xe1s",
    "traseira",
    "posteriore",
    "\u540E\u9762",
    "\u5F8C\u9762",
    "\u80CC\u9762",
    "\u540E\u7F6E",
    "\u5F8C\u7F6E",
    "\u80CC\u7F6E",
    "\u0437\u0430\u0434\u043D\u0435\u0439",
    "\u0627\u0644\u062E\u0644\u0641\u064A\u0629",
    "\uD6C4",
    "arka",
    "achterzijde",
    "\u0E2B\u0E25\u0E31\u0E07",
    "baksidan",
    "bagside",
    "sau",
    "bak",
    "tylny",
    "takakamera",
    "belakang",
    "\u05D0\u05D7\u05D5\u05E8\u05D9\u05EA",
    "\u03C0\u03AF\u03C3\u03C9",
    "spate",
    "h\xe1ts\xf3",
    "zadn\xed",
    "darrere",
    "zadn\xe1",
    "\u0437\u0430\u0434\u043D\u044F",
    "stra\u017Enja",
    "\u092C\u0948\u0915",
];
function st(e) {
    let t = e.toLowerCase();
    return se.some((e) => t.includes(e));
}
async function si() {
    let e = await (0, rR.n)(),
        t = e.map((t, i) => {
            var r;
            let n;
            return (
                (r = e.length),
                (n = "" === t.label ? (1 === r || i + 1 <= r / 2 ? "front" : "back") : st(t.label) ? "back" : "front"),
                { deviceId: t.deviceId, label: t.label, cameraType: n }
            );
        });
    if (t.length > 1 && !t.some((e) => "back" === e.cameraType)) {
        let e = t.map((e) => {
                let t = e.label.match(/\b([0-9]+)MP?\b/i);
                return t ? parseInt(t[1], 10) : NaN;
            }),
            i = t.length - 1;
        e.some(isNaN) || (i = e.lastIndexOf(Math.max(...e))), (t[i].cameraType = "back");
    }
    return t;
}
function sr(e) {
    let t = { resizeMode: "none", facingMode: "environment" };
    switch (e) {
        case 0:
            return { ...t, height: { ideal: 720 } };
        case 1:
            return {
                ...t,
                width: { min: 3200, ideal: 3840, max: 4096 },
                height: { min: 1800, ideal: 2160, max: 2400 },
            };
        case 2:
            return { ...t, width: { min: 1400, ideal: 1920, max: 2160 }, height: { min: 900, ideal: 1080, max: 1440 } };
        case 3:
            return { ...t, width: { min: 800, ideal: 1400, max: 1920 }, height: { min: 600, ideal: 900, max: 1080 } };
        case 4:
            return { ...t, width: { min: 640, ideal: 800, max: 1400 }, height: { min: 480, ideal: 480, max: 900 } };
        case 5:
            return { ...t, width: { min: 640, ideal: 640, max: 800 }, height: { min: 480, ideal: 480, max: 600 } };
        default:
            return {};
    }
}
async function sn(e = 0) {
    if (e > 5) throw Error("Failed to get camera after all fallback attempts");
    try {
        let t = await (0, rR.r)({ video: sr(e) }),
            i = t.getVideoTracks()[0],
            r = (function (e, t) {
                let i = e.getSettings(),
                    r = t.find((t) => t.deviceId === i.deviceId || ("" !== t.label && t.label === e.label));
                if (r) {
                    if (("environment" === i.facingMode || st(e.label)) && t.length > 1)
                        return (
                            t.forEach((e) => {
                                e.deviceId === r.deviceId
                                    ? (e.cameraType = "back")
                                    : st(e.label) || (e.cameraType = "front");
                            }),
                            (function (e, t) {
                                if (0 === t.length) return;
                                if (1 === t.length) return t[0];
                                let i = t.map((e) => {
                                        let t = e.label.match(/\b([0-9]+)\s*MP?\b/i);
                                        return { camera: e, mp: t ? parseInt(t[1], 10) : 0 };
                                    }),
                                    r = Math.max(...i.map((e) => e.mp));
                                if (r > 0) {
                                    let e = i.find((e) => e.mp === r);
                                    if (e) return e.camera;
                                }
                                let n = e.getSettings(),
                                    o = t.find((t) => t.deviceId === n.deviceId || t.label === e.label);
                                return o || t[0];
                            })(
                                e,
                                t.filter((e) => "back" === e.cameraType),
                            )
                        );
                    if (1 === t.length) return r;
                }
            })(i, await si());
        if (((0, rR.i)(t), !r)) throw Error("Could not identify main camera");
        let n = await (0, rR.r)({
            video: (function (e, t) {
                let i = { deviceId: { exact: e.deviceId }, resizeMode: "none" };
                if (t <= 1) return { ...i, width: { ideal: 1920 }, height: { ideal: 1080 } };
                let r = sr(t);
                return { ...i, width: r.width, height: r.height };
            })(r, e),
        });
        return await so(n), { stream: n, fallbackLevel: e };
    } catch (r) {
        let t = r instanceof Error ? r.name : "UnknownError",
            i = Math.min(e + 1, 5);
        if ("NotReadableError" === t) return await o8(300), sn(i);
        if ("AbortError" === t) return await o8(300), sn(e);
        return sn(i);
    }
}
async function so(e) {
    let t = e.getVideoTracks()[0];
    try {
        await (0, rR.t)(t, { advanced: [{ focusDistance: 1 }] });
    } catch {}
}
async function ss() {
    let e = await (0, rR.r)({
        audio: !1,
        video: { resizeMode: "none", facingMode: "environment", height: { ideal: tu() ? 1080 : 720 } },
    });
    return await so(e), e;
}
async function sa(e, t = 0) {
    if (t > 5) throw Error("Failed to get desktop camera after all fallback attempts");
    let i = (function (e, t = 0) {
        let i,
            { deviceId: r } = e,
            n = (function (e) {
                switch (e) {
                    case 0:
                        return {
                            width: { min: 3200, ideal: 3840, max: 4096 },
                            height: { min: 1800, ideal: 2160, max: 2400 },
                        };
                    case 1:
                        return {
                            width: { min: 1400, ideal: 1920, max: 2160 },
                            height: { min: 900, ideal: 1080, max: 1440 },
                        };
                    case 2:
                        return {
                            width: { min: 800, ideal: 1400, max: 1920 },
                            height: { min: 600, ideal: 900, max: 1080 },
                        };
                    case 3:
                        return {
                            width: { min: 640, ideal: 800, max: 1400 },
                            height: { min: 480, ideal: 480, max: 900 },
                        };
                    case 4:
                        return {
                            width: { min: 640, ideal: 640, max: 800 },
                            height: { min: 480, ideal: 480, max: 600 },
                        };
                    default:
                        return {};
                }
            })(t);
        return {
            audio:
                ((i = "u" > typeof navigator ? navigator.userAgent : ""),
                /Safari/i.test(i) && !/Chrome|Chromium|Edge/i.test(i)),
            video: { facingMode: "user", deviceId: r ? { exact: r } : void 0, ...n },
        };
    })(e, t);
    try {
        return await (0, rR.r)(i);
    } catch (r) {
        let i = t + 1;
        if (i > 5) throw r;
        return sa(e, i);
    }
}
async function sl(e) {
    return ta() ? { stream: await ss() } : tl() ? sn(0) : { stream: await sa({ deviceId: e }) };
}
var sc = i(196283),
    sd = class extends nv.t {
        constructor() {
            super(nv.l.SelfieWithQualityMetrics),
                (this.defaultThresholds = {
                    frameMinX: 0,
                    frameMinY: 0,
                    frameMaxX: 1,
                    frameMaxY: 1,
                    brightnessThreshold: 50,
                    blurrinessThreshold: 50,
                    tiltRotationAngleThreshold: 15,
                    minMagicCropSize: 200,
                    headwearThreshold: 0.86,
                    lensesThreshold: 0.95,
                    closedEyesThreshold: 0.9,
                    maskThreshold: 0.85,
                    minFaceQualityScore: 0.63,
                    faceOcclusionThreshold: 0.3,
                    getReadyDelay: 2e3,
                    framesAggregationInterval: 2e3,
                    minFramesWithFace: 3,
                }),
                (this.currentFrame = null);
        }
        async processFrame(e) {
            (this.currentFrame = e), await this.processFrameWasm(e);
        }
        async initialize(e) {
            !0 === e.useOnDeviceWorkflow
                ? ((this.pipelineType = nv.l.OnDeviceSelfieWorkflow), await this.initializeBase(e, "onDeviceSelfie"))
                : await this.initializeBase(e, "selfie"),
                this.applyDefaults(e.autocaptureInterval ?? 0);
        }
        processPhoto(e) {
            this.ensureInitialized(), nv.r.processPhoto(e);
        }
        async postFaceResults(e) {
            return this.ensureInitialized(), nv.r.postFaceResults(e);
        }
        setCallbacks(e) {
            this.ensureInitialized();
            let t = (t, i) => {
                let r = null;
                if ((this.currentFrame ? (r = o7.n.fromImageData(this.currentFrame)) : t && (r = new o7.n(t)), !r))
                    return;
                let n = i ? this.formatFaceCoordinates(i) : this.createDefaultFaceCoordinates(r);
                try {
                    r.updateBase64Image(), r.updateBlob();
                } catch {}
                e.onCapture?.(r, n);
            };
            nv.r.setFaceDetectionCallbacks(
                this.getPipelineType(),
                e.onFarAway ?? (() => {}),
                e.onTooClose ?? (() => {}),
                e.onTooManyFaces ?? (() => {}),
                e.onNoFace ?? (() => {}),
                t,
                e.onGetReady ?? (() => {}),
                e.onGetReadyFinished ?? (() => {}),
                e.onCenterFace ?? (() => {}),
                e.onDark ?? (() => {}),
                e.onBlur ?? (() => {}),
                e.onFaceAngle ?? (() => {}),
                e.onLenses ?? (() => {}),
                e.onMask ?? (() => {}),
                e.onEyesClosed ?? (() => {}),
                e.onHeadWear ?? (() => {}),
                e.onSwitchToManualCapture ?? (() => {}),
                e.onFaceOccluded ?? (() => {}),
            );
        }
        setPositionConstraints(e) {
            this.ensureInitialized(),
                nv.r.setFacePositionConstraints(this.getPipelineType(), e.minX, e.minY, e.maxX, e.maxY);
        }
        applyDefaults(e = 0) {
            this.ensureInitialized(),
                this.setThresholds({
                    brightnessThreshold: this.defaultThresholds.brightnessThreshold,
                    blurrinessThreshold: this.defaultThresholds.blurrinessThreshold,
                    tiltRotationAngleThreshold: this.defaultThresholds.tiltRotationAngleThreshold,
                    minMagicCropSize: this.defaultThresholds.minMagicCropSize,
                    autocaptureInterval: e,
                    minFaceQualityScore: this.defaultThresholds.minFaceQualityScore,
                    faceOcclusionThreshold: this.defaultThresholds.faceOcclusionThreshold,
                    getReadyDelay: this.defaultThresholds.getReadyDelay,
                    framesAggregationInterval: this.defaultThresholds.framesAggregationInterval,
                    minFramesWithFace: this.defaultThresholds.minFramesWithFace,
                }),
                this.setPositionConstraints({
                    minX: this.defaultThresholds.frameMinX,
                    minY: this.defaultThresholds.frameMinY,
                    maxX: this.defaultThresholds.frameMaxX,
                    maxY: this.defaultThresholds.frameMaxY,
                }),
                this.setAttributesThresholds({
                    headwearThreshold: this.defaultThresholds.headwearThreshold,
                    lensesThreshold: this.defaultThresholds.lensesThreshold,
                    closedEyesThreshold: this.defaultThresholds.closedEyesThreshold,
                    maskThreshold: this.defaultThresholds.maskThreshold,
                });
        }
        setAutocaptureInterval(e) {
            (this.ensureInitialized(), this.currentThresholds)
                ? this.setThresholds({ ...this.currentThresholds, autocaptureInterval: e })
                : this.applyDefaults(e);
        }
        setThresholds(e) {
            this.ensureInitialized(),
                (this.currentThresholds = { ...e }),
                nv.r.setFaceDetectionThresholds(
                    this.getPipelineType(),
                    e.brightnessThreshold,
                    e.blurrinessThreshold,
                    e.tiltRotationAngleThreshold,
                    e.minMagicCropSize,
                    e.autocaptureInterval,
                    e.minFaceQualityScore,
                    e.faceOcclusionThreshold,
                    e.getReadyDelay,
                    e.framesAggregationInterval,
                    e.minFramesWithFace,
                );
        }
        setAttributesThresholds(e) {
            this.ensureInitialized(),
                nv.r.setFaceAttributesThresholds(
                    this.getPipelineType(),
                    e.headwearThreshold,
                    e.lensesThreshold,
                    e.closedEyesThreshold,
                    e.maskThreshold,
                );
        }
        setChecksEnabled(e) {
            this.ensureInitialized(),
                nv.r.setFaceChecksEnabled(
                    this.getPipelineType(),
                    e.lenses,
                    e.mask,
                    e.closedEyes,
                    e.headWear,
                    e.occlusion,
                );
        }
        setVideoSelfieMode(e) {
            this.ensureInitialized(), nv.r.setFaceDetectionMode(this.getPipelineType(), e);
        }
        reset() {
            super.reset(), (this.currentFrame = null);
        }
        createDefaultFaceCoordinates(e) {
            return {
                rightEyeX: 0,
                rightEyeY: 0,
                leftEyeX: 0,
                leftEyeY: 0,
                noseTipX: 0,
                noseTipY: 0,
                rightMouthX: 0,
                rightMouthY: 0,
                mouthX: 0,
                mouthY: 0,
                x: 0,
                y: 0,
                width: e.width() ?? 0,
                height: e.height() ?? 0,
            };
        }
        formatFaceCoordinates(e) {
            return {
                rightEyeX: e.rightEye.x,
                rightEyeY: e.rightEye.y,
                leftEyeX: e.leftEye.x,
                leftEyeY: e.leftEye.y,
                noseTipX: e.noseTip.x,
                noseTipY: e.noseTip.y,
                rightMouthX: e.rightMouthCorner.x,
                rightMouthY: e.rightMouthCorner.y,
                mouthX: e.leftMouthCorner.x,
                mouthY: e.leftMouthCorner.y,
                x: e.rect.x,
                y: e.rect.y,
                width: e.rect.width,
                height: e.rect.height,
            };
        }
    },
    su = class {
        constructor(e) {
            (this.disposed = !1),
                (this.isProcessing = !1),
                (this.onFrameEvent = () => {
                    if (this.disposed || this.isProcessing) return;
                    let e = this.capturer.getLatestFrame();
                    e &&
                        (this.onFrame?.(e),
                        (this.isProcessing = !0),
                        this.provider
                            .processFrame(e)
                            .catch(() => {})
                            .finally(() => {
                                this.isProcessing = !1;
                            }));
                }),
                (this.capturer = e.capturer),
                (this.provider = e.provider),
                (this.onFrame = e.onFrame),
                this.capturer.addEventListener("frame", this.onFrameEvent);
        }
        dispose() {
            this.disposed ||
                ((this.disposed = !0),
                this.capturer.removeEventListener("frame", this.onFrameEvent),
                this.provider.reset());
        }
        isDisposed() {
            return this.disposed;
        }
    };
async function sh(e) {
    return (await tv.t.post(nw.t.recordingCreateSessionV2, { type: e })).data;
}
async function sp(e) {
    return (
        await tv.t.post(nw.t.recordingStartV2, {
            videoRecordingId: e.videoRecordingId,
            frameRate: 30,
            outputMode: "COMPOSED",
            resolution: e.resolution,
            type: e.type,
            hasAudio: e.hasAudio ?? !1,
        })
    ).data;
}
async function sf(e) {
    return (await tv.t.post(nw.t.recordingStopV2, { videoRecordingId: e })).data;
}
async function sm(e, t) {
    try {
        return (
            (
                await tv.t.post(
                    nw.t.deepsightVideoImport,
                    { video: e, type: "selfie" },
                    { headers: { "X-Incode-Hardware-Id": t } },
                )
            ).data.recordingId ?? ""
        );
    } catch {
        return "";
    }
}
let sg = {
    FACE_OCCLUDED: "FACE_OCCLUDED",
    LIVENESS: "LIVENESS_ERROR",
    BRIGHTNESS: "BRIGHTNESS_ERROR",
    LENSES: "LENSES_ERROR",
    MASK: "MASK_ERROR",
    CLOSED_EYES: "CLOSED_EYES_ERROR",
    HEAD_COVER: "HEAD_COVER_ERROR",
    SERVER: "SERVER_ERROR",
    FACE_NOT_FOUND: "FACE_NOT_FOUND",
    MULTIPLE_FACES: "MULTIPLE_FACES",
    TOO_BLURRY: "TOO_BLURRY_ERROR",
    TOO_DARK: "TOO_DARK_ERROR",
    USER_IS_NOT_RECOGNIZED: "USER_IS_NOT_RECOGNIZED",
    SPOOF_ATTEMPT_DETECTED: "SPOOF_ATTEMPT_DETECTED",
    FACE_TOO_DARK: "FACE_TOO_DARK",
    LENSES_DETECTED: "LENSES_DETECTED",
    FACE_MASK_DETECTED: "FACE_MASK_DETECTED",
    CLOSED_EYES_DETECTED: "CLOSED_EYES_DETECTED",
    HEAD_COVER_DETECTED: "HEAD_COVER_DETECTED",
    FACE_CROPPING_FAILED: "FACE_CROPPING_FAILED",
    FACE_TOO_SMALL: "FACE_TOO_SMALL",
    FACE_TOO_BLURRY: "FACE_TOO_BLURRY",
    BAD_PHOTO_QUALITY: "BAD_PHOTO_QUALITY",
    PROCESSING_ERROR: "PROCESSING_ERROR",
    BAD_REQUEST: "BAD_REQUEST",
    NONEXISTENT_CUSTOMER: "NONEXISTENT_CUSTOMER",
    HINT_NOT_PROVIDED: "HINT_NOT_PROVIDED",
    SELFIE_IMAGE_LOW_QUALITY: "SELFIE_IMAGE_LOW_QUALITY",
};
async function sC({ encryptedBase64Image: e, faceCoordinates: t, signal: i, metadata: r, recordingId: n }) {
    try {
        let o = {
                base64Image: e,
                faceCoordinates: t ?? void 0,
                encrypted: !0,
                clientInfo: { deviceClass: tp() },
                metadata: r ?? void 0,
            },
            s = { imageType: "selfie" };
        n && (s.recordingId = n);
        let a = await tv.t.post(nw.t.selfie, o, { signal: i, query: s });
        if (!a.ok) throw Error(`POST ${nw.t.selfie} failed: ${a.status} ${a.statusText}`);
        return a.data;
    } catch (t) {
        let e = sv(t);
        if (e) throw Error(e);
        throw Error(sg.SERVER);
    }
}
let sv = (e) => {
    if (!1 === e.ok && "number" == typeof e.status)
        return 400 !== e.status
            ? sg.SERVER
            : "number" != typeof e.data?.status
              ? sg.BAD_REQUEST
              : ({
                    3004: sg.FACE_NOT_FOUND,
                    3005: sg.FACE_NOT_FOUND,
                    3006: sg.TOO_BLURRY,
                    3007: sg.TOO_DARK,
                    4010: sg.MULTIPLE_FACES,
                    4019: sg.FACE_NOT_FOUND,
                    4077: sg.BAD_PHOTO_QUALITY,
                    4078: sg.FACE_OCCLUDED,
                }[e.data.status] ?? sg.BAD_REQUEST);
};
async function sy(e = "selfie", t) {
    return (await tv.t.post(nw.t.processFace, {}, { query: { imageType: e }, signal: t })).data;
}
let sw = { video: { facingMode: "user", height: { ideal: 480 }, width: { ideal: 640 } }, audio: !1 },
    s_ = { video: { height: { ideal: 1080 } }, audio: !1 };
function sb(e) {
    return e
        ? {
              video: {
                  facingMode: "user",
                  height: e.height ? { ideal: e.height } : void 0,
                  width: e.width ? { ideal: e.width } : void 0,
              },
              audio: !1,
          }
        : tu()
          ? s_
          : sw;
}
async function sL(e) {
    return e
        ? (0, rR.r)(sb(e))
        : !(function () {
                let e,
                    t,
                    i = "u" > typeof navigator ? navigator.userAgent : "";
                return !(
                    /Mobile|Android/i.test(i) ||
                    ((e = /Linux/i.test(i)),
                    (t = /Chrome/i.test(i) && !/Edge/i.test(i)),
                    !/Mobile|Android/i.test(i) &&
                        e &&
                        t &&
                        (("u" > typeof navigator && navigator.maxTouchPoints > 0) ||
                            "ontouchstart" in ("u" > typeof document ? document.documentElement : {}))) ||
                    ta(i)
                );
            })()
          ? (0, rR.r)(sb())
          : sa({});
}
async function sE(e) {
    let { config: t } = e,
        i = sb(t.cameraResolution),
        r = new sd();
    return (
        await r.initialize({
            autocaptureInterval: 1e3 * t.autoCaptureTimeout,
            useOnDeviceWorkflow: !0 === t.onDeviceFaceResultsSubmissionEnabled,
        }),
        r.setChecksEnabled({
            lenses: t.validateLenses ?? !1,
            mask: t.validateFaceMask ?? !1,
            closedEyes: t.validateClosedEyes ?? !1,
            headWear: t.validateHeadCover ?? !1,
            occlusion: !1,
        }),
        await e.deepsightService.performPrcCheck({ constraints: { video: i.video } }),
        { stream: t.assistedOnboarding ? (await sl()).stream : await sL(t.cameraResolution), provider: r }
    );
}
async function sS({ canvas: e, dependencies: t }) {
    let i = e.getBase64Image();
    if (!i) throw Error("Canvas image is empty or null");
    return (await t.getWasmUtil()).encryptImage(i);
}
async function sI() {
    let { OpenViduRecordingProvider: e } = await Promise.all([i.e("7079"), i.e("30117")]).then(i.bind(i, 807428));
    return new e();
}
async function sT(e) {
    if ("VIDEOLIVENESS" === e.config.deepsightLiveness || !0 !== e.config.enableFaceRecording) return;
    if (e.existing) return e.existing;
    let t = e.config.recording?.capability ?? (await sI()),
        i = e.clonedStream,
        r = i.getAudioTracks().length > 0,
        n = (function (e) {
            let t = e.getVideoTracks()[0];
            if (!t) return;
            let i = t.getSettings(),
                r = i.width,
                n = i.height;
            if ("number" == typeof r && "number" == typeof n) return `${r}x${n}`;
        })(i),
        o = await sh("selfie"),
        s = await t.connect({ sessionToken: o.token, stream: i, events: {} });
    return (
        await sp({ videoRecordingId: o.videoRecordingId, type: "selfie", resolution: n, hasAudio: r }),
        {
            token: o.token,
            sessionId: o.sessionId,
            videoRecordingId: o.videoRecordingId,
            connection: s,
            resolution: n,
            hasAudio: r,
        }
    );
}
async function sk(e) {
    try {
        await sf(e.videoRecordingId);
    } finally {
        await e.connection.disconnect();
    }
}
async function sx(e) {
    let { loadDeepsightSession: t } = await i.e("27811").then(i.bind(i, 543278));
    return t({ ds: e.ds, storage: e.storage });
}
var sP = class {
    constructor(e, t) {
        (this.hasFrame = !1),
            (this.disposed = !1),
            (this.eventTarget = new EventTarget()),
            (this.video = document.createElement("video")),
            (this.video.srcObject = e),
            (this.video.autoplay = !0),
            (this.video.playsInline = !0),
            (this.video.muted = !0);
        const i = e.getVideoTracks()[0]?.getSettings(),
            r = t?.width ?? i?.width ?? 1280,
            n = t?.height ?? i?.height ?? 720;
        (this.canvas = document.createElement("canvas")),
            (this.canvas.width = r),
            (this.canvas.height = n),
            (this.ctx = this.canvas.getContext("2d", { willReadFrequently: !0 }));
        const o = t?.fps ?? 10,
            s = o > 0 ? Math.max(16, Math.floor(1e3 / o)) : 0;
        this.video.addEventListener("loadedmetadata", () => {
            this.video.videoWidth > 0 &&
                this.video.videoHeight > 0 &&
                ((this.canvas.width = this.video.videoWidth), (this.canvas.height = this.video.videoHeight));
        });
        try {
            this.video.play();
        } catch {}
        this.rafLoop(s);
    }
    addEventListener(e, t, i) {
        this.eventTarget.addEventListener(e, t, i);
    }
    removeEventListener(e, t, i) {
        this.eventTarget.removeEventListener(e, t, i);
    }
    getLatestCanvas() {
        return (this.hasFrame || this.tick(), this.hasFrame) ? new o7.n(this.canvas) : null;
    }
    getLatestFrame() {
        if (!this.ctx || (this.hasFrame || this.tick(), !this.hasFrame)) return null;
        try {
            return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        } catch {
            return null;
        }
    }
    dispose() {
        this.disposed ||
            ((this.disposed = !0),
            void 0 !== this.rafId && (window.cancelAnimationFrame(this.rafId), (this.rafId = void 0)),
            (this.video.srcObject = null),
            (this.canvas.width = 0),
            (this.canvas.height = 0),
            (this.hasFrame = !1));
    }
    rafLoop(e) {
        let t = (i) => {
            if (!this.disposed) {
                if (e <= 0 || void 0 === this.lastTickTimeMs || i - this.lastTickTimeMs >= e) {
                    this.lastTickTimeMs = i;
                    let e = this.lastFrameTimeSeconds;
                    this.tick();
                    let t = this.video.currentTime;
                    void 0 === e
                        ? this.hasFrame &&
                          ((this.lastFrameTimeSeconds = t), this.eventTarget.dispatchEvent(new Event("frame")))
                        : this.hasFrame &&
                          t !== e &&
                          ((this.lastFrameTimeSeconds = t), this.eventTarget.dispatchEvent(new Event("frame")));
                }
                this.rafId = window.requestAnimationFrame(t);
            }
        };
        this.rafId = window.requestAnimationFrame(t);
    }
    tick() {
        if (!this.ctx || this.video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
        let e = this.video.videoWidth,
            t = this.video.videoHeight;
        if (0 !== e && 0 !== t) {
            (this.canvas.width !== e || this.canvas.height !== t) &&
                ((this.canvas.width = e), (this.canvas.height = t));
            try {
                this.ctx.drawImage(this.video, 0, 0), (this.hasFrame = !0);
            } catch {
                this.hasFrame = !1;
            }
        }
    }
};
async function sM() {
    try {
        await tv.t.put(nw.t.updateSession, { manualSelfieCheckNeeded: !0 });
    } catch {}
}
async function sO(e) {
    let t = document.createElement("video");
    (t.preload = "metadata"), (t.src = URL.createObjectURL(e));
    try {
        Number.isFinite(t.duration) ||
            ((t.currentTime = Number.MAX_SAFE_INTEGER),
            await new Promise((e) => {
                let i = () => {
                        Number.isFinite(t.duration) &&
                            (t.removeEventListener("durationchange", i),
                            t.removeEventListener("timeupdate", r),
                            e(t.duration));
                    },
                    r = () => {
                        Number.isFinite(t.duration) &&
                            (t.removeEventListener("timeupdate", r),
                            t.removeEventListener("durationchange", i),
                            e(t.duration));
                    };
                t.addEventListener("durationchange", i), t.addEventListener("timeupdate", r);
            }));
        let e = t.duration;
        return Number.isFinite(e) ? e : null;
    } finally {
        URL.revokeObjectURL(t.src), (t.src = "");
    }
}
async function sA(e, t) {
    let i = document.createElement("video");
    (i.preload = "metadata"), (i.playsInline = !0), (i.muted = !0);
    let r = URL.createObjectURL(e);
    i.src = r;
    let n = await sO(e);
    if (!n || n < t) return URL.revokeObjectURL(r), e;
    let o = Math.max(0, Math.floor(n) - t);
    await new Promise((e) => {
        i.readyState >= 2 ? e() : i.addEventListener("loadedmetadata", () => e(), { once: !0 });
    });
    let s = document.createElement("canvas");
    (s.width = 230), (s.height = 320);
    let a = tl() ? 15 : 24,
        l = s.captureStream(a),
        c = s.getContext("2d");
    (i.currentTime = o),
        await new Promise((e) => {
            i.addEventListener("seeked", () => e(), { once: !0 });
        }),
        c.drawImage(i, 0, 0, s.width, s.height);
    let d = e.type || (MediaRecorder.isTypeSupported("video/webm") ? "video/webm" : "video/mp4"),
        u = new MediaRecorder(l.clone(), { mimeType: d, videoBitsPerSecond: 5e5, bitsPerSecond: 5e5 }),
        h = [];
    u.ondataavailable = (e) => {
        e.data.size > 0 && h.push(e.data);
    };
    let p = new Promise((e) => {
        u.onstop = () => {
            let t = new Blob(h, { type: d });
            URL.revokeObjectURL(r),
                u.stream?.getTracks().forEach((e) => e.stop()),
                l.getTracks().forEach((e) => e.stop()),
                (i.src = ""),
                e(t);
        };
    });
    i.addEventListener("play", () => {
        !(function e() {
            if (i.currentTime >= n) {
                u.stop(), i.pause();
                return;
            }
            c.drawImage(i, 0, 0, s.width, s.height), requestAnimationFrame(e);
        })(),
            setTimeout(() => {
                u.start(100);
            }, 500);
    }),
        i.play().catch(() => {
            URL.revokeObjectURL(r);
        });
    let f = await p;
    return console.timeEnd("trimLastNSecondsUsingPlayback"), f;
}
async function sR(e, t) {
    return await sA(e, t);
}
var sD = class {
    constructor() {
        (this.mediaRecorder = null),
            (this._isRecording = !1),
            (this._hasError = !1),
            (this._error = null),
            (this.mimeType = ""),
            (this.stream = null),
            (this.pauseRecordingBound = this.pauseRecording.bind(this));
    }
    get isRecording() {
        return this._isRecording;
    }
    get hasError() {
        return this._hasError;
    }
    get error() {
        return this._error;
    }
    startRecording(e) {
        this.reset(), this.registerEventListeners(), (this.stream = e);
        try {
            let t,
                i =
                    ((t = (function () {
                        for (let e of ta()
                            ? ["video/mp4", "video/webm", "video/webm;codecs=vp9", "video/webm;codecs=vp8"]
                            : ["video/webm", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/mp4"])
                            if (MediaRecorder.isTypeSupported(e)) return e;
                        return "";
                    })()),
                    ta()
                        ? { mimeType: t, videoBitsPerSecond: 1e6, bitsPerSecond: 1e6 }
                        : { mimeType: t, videoBitsPerSecond: 5e5, bitsPerSecond: 5e5 });
            this.mimeType = i.mimeType;
            let r = new MediaRecorder(e.clone(), i);
            (r.onerror = (e) => {
                (this._error = `Recording error: ${e}`), (this._isRecording = !1), (this._hasError = !0);
            }),
                r.start(),
                (this.mediaRecorder = r),
                (this._isRecording = !0),
                (this._error = null),
                (this._hasError = !1);
        } catch (e) {
            (this._error = `Failed to start recording: ${e}`), (this._hasError = !0);
        }
    }
    async stopRecording(e, t, i) {
        let r = this.mediaRecorder;
        return new Promise((n, o) => {
            if ((this.removeEventListeners(), r && this._isRecording)) {
                let s = [];
                (r.ondataavailable = (e) => {
                    e.data.size > 0 && s.push(e.data);
                }),
                    (r.onstop = async () => {
                        try {
                            let r = await sR(new Blob(s, { type: this.mimeType }), e),
                                o = t(
                                    await new Promise((e, t) => {
                                        let i = new FileReader();
                                        (i.onloadend = () => {
                                            e(i.result.split(",")[1]);
                                        }),
                                            (i.onerror = () => t(i.error ?? Error("FileReader error"))),
                                            i.readAsDataURL(r);
                                    }),
                                );
                            i(await r.arrayBuffer()),
                                (this._isRecording = !1),
                                n({ trimmedBlob: r, encryptedVideo: o });
                        } catch (e) {
                            (this._isRecording = !1),
                                (this._error = `Recording stop failed: ${e}`),
                                (this._hasError = !0),
                                o(e);
                        }
                    }),
                    r.stop(),
                    (this._isRecording = !1);
            } else n({ trimmedBlob: new Blob([], { type: this.mimeType }), encryptedVideo: "" });
            r?.stream?.getTracks().forEach((e) => e.stop());
        });
    }
    reset() {
        (this._isRecording = !1), (this._error = null), (this._hasError = !1);
    }
    pauseRecording() {
        if (this._isRecording && this.mediaRecorder?.state === "recording")
            try {
                this.mediaRecorder.pause();
            } catch {}
    }
    registerEventListeners() {
        document.addEventListener("visibilitychange", this.pauseRecordingBound);
    }
    removeEventListeners() {
        document.removeEventListener("visibilitychange", this.pauseRecordingBound);
    }
};
function sF() {
    return r || (r = Promise.all([i.e("7079"), i.e("30117")]).then(i.bind(i, 807428))), r;
}
var sU = class {
        constructor(e, t) {
            (this.recorder = new sD()), (this.sessionToken = t), (this.wasmUtil = e);
        }
        async start(e) {
            this.recorder.startRecording(e);
        }
        async stop() {
            if (!this.recorder.isRecording) return { recordingId: null };
            let e = await this.recorder.stopRecording(
                10,
                (e) => this.wasmUtil.encryptImage(e),
                (e) => this.wasmUtil.ckvcks(e),
            );
            return this.sessionToken
                ? { recordingId: await sm(e.encryptedVideo, this.sessionToken) }
                : { recordingId: null };
        }
        async stopAndGetVideo() {
            if (!this.recorder.isRecording) return { videoBase64: void 0 };
            try {
                return {
                    videoBase64:
                        (
                            await this.recorder.stopRecording(
                                10,
                                (e) => e,
                                () => {},
                            )
                        ).encryptedVideo || void 0,
                };
            } catch {
                return { videoBase64: void 0 };
            }
        }
        cleanup() {
            this.recorder.reset();
        }
    },
    sH = class {
        constructor(e) {
            this.config = e;
        }
        async start(e) {
            if (!this.provider) {
                let { OpenViduRecordingProvider: e } = await sF();
                this.provider = new e();
            }
            this.session = await sT({
                config: { ...this.config, recording: { capability: this.provider } },
                clonedStream: e.clone(),
                existing: this.session,
            });
        }
        async stop() {
            return this.session && (sk(this.session), (this.session = void 0)), { recordingId: null };
        }
        async stopAndGetVideo() {
            return this.session && (sk(this.session), (this.session = void 0)), { videoBase64: void 0 };
        }
        cleanup() {
            this.session && sk(this.session);
        }
    };
async function sN(e) {
    let t = (0, tv.r)(),
        i = (await e.recordingService?.stop())?.recordingId ?? null;
    try {
        e.deepsightService &&
            (await Promise.all([
                e.deepsightService.performVirtualCameraCheck(t, "SELFIE"),
                e.deepsightService.analyzeFrame(e.capturedImage.getImageData()),
            ]));
    } catch (e) {}
    let r = e.deepsightService?.getPipelineState() ?? "";
    return (
        e.dependencies.trackCaptureAttemptFinished?.({ logs: r }),
        { encryptedBase64Image: await sS({ canvas: e.capturedImage, dependencies: e.dependencies }), recordingId: i }
    );
}
async function sV(e) {
    if (!e.capturedImage) throw Error("On-device capture requires a captured image canvas");
    if (!e.provider) throw Error("On-device capture requires the FaceDetectionProvider to be initialized");
    return (
        e.manualCaptureTriggered &&
            (await new Promise((e) => {
                let t = !1,
                    i = () => {
                        t || ((t = !0), e());
                    };
                "function" == typeof requestAnimationFrame &&
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            setTimeout(i, 0);
                        });
                    }),
                    setTimeout(i, 100);
            }),
            await o8(350),
            e.provider.processPhoto(e.capturedImage.canvas)),
        { encryptedBase64Image: "", recordingId: null }
    );
}
async function sB(e, t) {
    let i = e.provider;
    if (!i) throw Error("On-device upload requires the FaceDetectionProvider to be initialized");
    let r = (0, tv.r)();
    return (await i.postFaceResults({ headers: r ? { "X-Incode-Hardware-Id": r } : void 0, timeout: 3e4 })) ?? {};
}
let sz = (e) => e.captureAttempts ?? e.numberOfAttempts ?? 3,
    s$ = (function e({ schemas: t, actors: i, actions: r, guards: n, delays: o }) {
        return {
            assign: oF,
            sendTo: oY,
            raise: ox,
            log: o2,
            cancel: nG,
            stopChild: n1,
            enqueueActions: oX,
            emit: oW,
            spawnChild: nQ,
            createStateConfig: (e) => e,
            createAction: (e) => e,
            createMachine: (e) => new oz({ ...e, schemas: t }, { actors: i, actions: r, guards: n, delays: o }),
            extend: (s) =>
                e({
                    schemas: t,
                    actors: i,
                    actions: { ...r, ...s.actions },
                    guards: { ...n, ...s.guards },
                    delays: { ...o, ...s.delays },
                }),
        };
    })({
        types: { context: {}, events: {}, input: {} },
        actors: {
            checkPermission: oR(async () => rH()),
            requestPermission: oR(async ({ input: e }) => rV({ requestMotion: e.requestMotionPermission })),
            initializeCamera: oR(async ({ input: e }) =>
                sE({ config: e.config, deepsightService: e.deepsightService }),
            ),
            runDetection: {
                config: (c = ({ input: e, sendBack: t }) => {
                    if (!e.frameCapturer || !e.provider)
                        return t({ type: "DETECTION_UPDATE", status: "error" }), () => {};
                    if (e.manualCaptureTriggered)
                        return t({ type: "DETECTION_UPDATE", status: "manualCapture" }), () => {};
                    let { cleanup: i, reset: r } = (function (e) {
                        let t,
                            i,
                            { provider: r } = e,
                            n = (r) => {
                                i?.isDisposed() === !0 || (t !== r && ((t = r), e.onUpdate(r)));
                            },
                            o = () => {
                                i?.dispose();
                            },
                            s = () => {
                                o();
                            };
                        return (
                            (async () => {
                                try {
                                    r.setCallbacks({
                                        onFarAway: () => n("tooFar"),
                                        onTooClose: () => n("tooClose"),
                                        onTooManyFaces: () => n("tooManyFaces"),
                                        onNoFace: () => n("idle"),
                                        onCenterFace: () => n("centerFace"),
                                        onGetReady: () => n("getReady"),
                                        onGetReadyFinished: () => n("getReadyFinished"),
                                        onDark: () => {
                                            e.config.validateBrightness && n("dark");
                                        },
                                        onBlur: () => n("blur"),
                                        onFaceAngle: () => n("faceAngle"),
                                        onLenses: () => {
                                            e.config.validateLenses && n("lenses");
                                        },
                                        onMask: () => {
                                            e.config.validateFaceMask && n("faceMask");
                                        },
                                        onEyesClosed: () => {
                                            e.config.validateClosedEyes && n("eyesClosed");
                                        },
                                        onHeadWear: () => {
                                            e.config.validateHeadCover && n("headWear");
                                        },
                                        onFaceOccluded: () => n("faceOcclusion"),
                                        onSwitchToManualCapture: () => {
                                            n("manualCapture"), o();
                                        },
                                        onCapture: (t, i) => {
                                            n("success"), e.onSuccess(t, i), s();
                                        },
                                    }),
                                        n("detecting"),
                                        (i = new su({ capturer: e.capturer, provider: r, onFrame: e.onFrame }));
                                } catch {
                                    n("error"), s();
                                }
                            })(),
                            {
                                cleanup: s,
                                reset: () => {
                                    r.reset();
                                },
                            }
                        );
                    })({
                        config: e.config,
                        capturer: e.frameCapturer,
                        onUpdate: (e) => t({ type: "DETECTION_UPDATE", status: e }),
                        onFrame: (e) => t({ type: "DETECTION_FRAME", frame: e }),
                        onSuccess: (e, i) => t({ type: "DETECTION_SUCCESS", canvas: e, faceCoordinates: i }),
                        provider: e.provider,
                    });
                    return t({ type: "DETECTION_RESET_READY", reset: r }), i;
                }),
                start: (e, t) => {
                    let { self: i, system: r, emit: n } = t,
                        o = { receivers: void 0, dispose: void 0 };
                    oP.set(i, o),
                        (o.dispose = c({
                            input: e.input,
                            system: r,
                            self: i,
                            sendBack: (e) => {
                                "stopped" !== i.getSnapshot().status && i._parent && r._relay(i, i._parent, e);
                            },
                            receive: (e) => {
                                (o.receivers ??= new Set()), o.receivers.add(e);
                            },
                            emit: n,
                        }));
                },
                transition: (e, t, i) => {
                    let r = oP.get(i.self);
                    return (
                        t.type === nL
                            ? ((e = { ...e, status: "stopped", error: void 0 }), r.dispose?.())
                            : r.receivers?.forEach((e) => e(t)),
                        e
                    );
                },
                getInitialSnapshot: (e, t) => ({ status: "active", output: void 0, error: void 0, input: t }),
                getPersistedSnapshot: (e) => e,
                restoreSnapshot: (e) => e,
            },
            initializeDeepsightSession: oR(async ({ input: e }) => await sx({ ds: e.ds, storage: e.storage })),
            startRecording: oR(async ({ input: e }) => {
                if (!e.stream) return e.recordingService;
                let t = await e.dependencies.getWasmUtil(),
                    i = (0, tv.r)(),
                    r =
                        e.recordingService ??
                        (function (e) {
                            if (!0 !== e.config.onDeviceFaceResultsSubmissionEnabled) {
                                if ("VIDEOLIVENESS" === e.config.deepsightLiveness)
                                    return new sU(e.wasmUtil, e.sessionToken);
                                if (!0 === e.config.enableFaceRecording) return new sH(e.config);
                            }
                        })({ config: e.config, wasmUtil: t, sessionToken: i });
                return r && (await r.start(e.stream)), r;
            }),
            checkVirtualCamera: oR(async ({ input: e }) => {
                if (!e.deepsightService || !e.stream) return !1;
                let t = e.stream.getVideoTracks()[0];
                return !!t && e.deepsightService.checkVirtualCamera(t);
            }),
            prepareFaceUpload: oR(async () => {
                throw Error("prepareFaceUpload must be provided by variant");
            }),
            uploadFace: oR(async () => {
                throw Error("uploadFace must be provided by variant");
            }),
            processFace: oR(async () => {
                throw Error("processFace must be provided by variant");
            }),
        },
        actions: {
            stopMediaStream: oF(({ context: e }) => {
                var t;
                return (
                    e.frameCapturer?.dispose(),
                    e.stream && ((t = e.stream), (0, rR.i)(t)),
                    e.provider?.dispose(),
                    { stream: void 0, provider: void 0, frameCapturer: void 0 }
                );
            }),
            setStreamAndCapturer: oF({
                stream: ({ event: e }) => {
                    if ("output" in e) return e.output.stream;
                },
                provider: ({ event: e }) => {
                    if ("output" in e) return e.output.provider;
                },
                frameCapturer: ({ event: e }) => {
                    if ("output" in e) return new sP(e.output.stream);
                },
            }),
            trackTutorial: () => void 0,
            trackContinue: () => {},
            resetContext: oF(({ context: e }) => ({
                stream: void 0,
                provider: void 0,
                frameCapturer: void 0,
                error: void 0,
                detectionStatus: "idle",
                debugFrame: void 0,
                capturedImage: void 0,
                faceCoordinates: void 0,
                uploadResponse: void 0,
                processResponse: void 0,
                recordingService: void 0,
                attemptsRemaining: sz(e.config),
                uploadError: void 0,
                permissionResult: void 0,
                resetDetection: void 0,
                deepsightService: void 0,
                manualCaptureTriggered: !1,
                captureOnlyResult: void 0,
            })),
            resetDetection: ({ context: e }) => {
                e.resetDetection?.();
            },
            captureImage: oF({
                capturedImage: ({ context: e }) =>
                    e.capturedImage ? e.capturedImage : (e.frameCapturer?.getLatestCanvas() ?? void 0),
            }),
            captureLatestFrame: oF({ capturedImage: ({ context: e }) => e.frameCapturer?.getLatestCanvas() ?? void 0 }),
            clearUploadFailure: oF({
                uploadError: () => void 0,
                detectionStatus: () => "idle",
                capturedImage: () => void 0,
            }),
            clearStreamForRetry: oF(({ context: e }) => {
                var t;
                return (
                    e.frameCapturer?.dispose(),
                    e.stream && ((t = e.stream), (0, rR.i)(t)),
                    e.provider?.dispose(),
                    { stream: void 0, provider: void 0, frameCapturer: void 0 }
                );
            }),
            decrementAttemptsRemaining: oF(({ context: e }) => ({ attemptsRemaining: e.attemptsRemaining - 1 })),
            setUploadErrorFromUploadValidation: oF({ uploadError: () => sg.SERVER }),
            setTerminalError: oF({ error: () => "Authentication failed" }),
            clearRecordingService: oF({ recordingService: () => void 0 }),
            cleanup: ({ context: e }) => {
                e.deepsightService?.cleanup(), e.recordingService?.cleanup();
            },
            setPermissionResultFromEvent: oF({ permissionResult: ({ event: e }) => e.output }),
            setPermissionDenied: oF({ permissionResult: () => "denied" }),
            setPermissionRefresh: oF({ permissionResult: () => "refresh" }),
            setDeepsightServiceFromEvent: oF({ deepsightService: ({ event: e }) => e.output }),
            setErrorFromEvent: oF({ error: ({ event: e }) => String(e.error) }),
            setDetectionStatusDetecting: oF({
                detectionStatus: ({ context: e }) => (e.manualCaptureTriggered ? "manualCapture" : "detecting"),
            }),
            setRecordingServiceFromEvent: oF({
                recordingService: ({ context: e, event: t }) => t.output ?? e.recordingService,
            }),
            setDetectionStatusFromEvent: oF({ detectionStatus: ({ event: e }) => e.status }),
            setManualCaptureTriggered: oF({
                manualCaptureTriggered: ({ context: e, event: t }) => {
                    let i = t.status;
                    return e.manualCaptureTriggered || "manualCapture" === i;
                },
            }),
            setDebugFrameFromEvent: oF({ debugFrame: ({ event: e }) => e.frame }),
            setResetDetectionFromEvent: oF({ resetDetection: ({ event: e }) => e.reset }),
            setCapturedImageFromEvent: oF({
                capturedImage: ({ event: e }) => e.canvas,
                faceCoordinates: ({ event: e }) => e.faceCoordinates,
            }),
            setUploadPreparationFromEvent: oF({
                encryptedBase64Image: ({ event: e }) => e.output.encryptedBase64Image,
                uploadRecordingId: ({ event: e }) => e.output.recordingId,
            }),
            setUploadResponseFromEvent: oF({ uploadResponse: ({ event: e }) => e.output }),
            setProcessResponseFromEvent: oF({ processResponse: ({ event: e }) => e.output }),
            setServerErrorAndDecrement: oF(({ context: e }) => ({
                uploadError: sg.SERVER,
                attemptsRemaining: e.attemptsRemaining - 1,
            })),
            sendLabelInspection: () => {
                (0, sc.t)({ cameraLabelInspectionStatus: "FAIL" });
            },
            flagFaceManualReview: () => {
                sM();
            },
            preloadRecordingProvider: ({ context: e }) => {
                !0 === e.config.enableFaceRecording &&
                    "VIDEOLIVENESS" !== e.config.deepsightLiveness &&
                    (sF(),
                    n ||
                        (n = (async () =>
                            (
                                await Promise.all([i.e("7079"), i.e("90050")]).then(i.bind(i, 669785))
                            ).loadOpenVidu())()));
            },
            noOp: () => void 0,
        },
        guards: {
            hasShowTutorial: ({ context: e }) => e.config.showTutorial,
            isPermissionGranted: ({ event: e }) => "output" in e && "granted" === e.output,
            isPermissionDeniedError: ({ event: e }) => {
                if ("error" in e) {
                    let t = e.error;
                    return t?.name === "NotAllowedError" || t?.name === "PermissionDeniedError";
                }
                return !1;
            },
            hasStream: ({ context: e }) => void 0 !== e.stream,
            isCameraAndDeepsightReady: ({ context: e }) => void 0 !== e.stream && void 0 !== e.deepsightService,
            hasAttemptsRemaining: ({ context: e }) => e.attemptsRemaining > 0,
            hasCapturedImage: ({ context: e }) => void 0 !== e.capturedImage,
            hasUploadValidationError: () => !1,
            isTerminalUploadError: () => !1,
            isNoAttemptsTerminal: () => !1,
        },
    }).createMachine({
        id: "faceCapture",
        initial: "idle",
        context: ({ input: e }) => ({
            config: e.config,
            dependencies: e.dependencies,
            authHint: e.authHint,
            stream: void 0,
            provider: void 0,
            frameCapturer: void 0,
            error: void 0,
            detectionStatus: "idle",
            debugFrame: void 0,
            capturedImage: void 0,
            faceCoordinates: void 0,
            uploadResponse: void 0,
            processResponse: void 0,
            recordingService: void 0,
            attemptsRemaining: sz(e.config),
            uploadError: void 0,
            permissionResult: void 0,
            resetDetection: void 0,
            deepsightService: void 0,
            encryptedBase64Image: void 0,
            uploadRecordingId: void 0,
            manualCaptureTriggered: !1,
            captureOnlyResult: void 0,
        }),
        on: { QUIT: { target: "#faceCapture.closed" } },
        states: {
            idle: { on: { LOAD: [{ target: "tutorial", guard: "hasShowTutorial" }, { target: "loading" }] } },
            loading: {
                entry: "preloadRecordingProvider",
                invoke: [
                    {
                        id: "checkPermissionLoading",
                        src: "checkPermission",
                        onDone: [
                            {
                                target: "capture",
                                guard: "isPermissionGranted",
                                actions: "setPermissionResultFromEvent",
                            },
                            { target: "permissions", actions: "setPermissionResultFromEvent" },
                        ],
                    },
                    {
                        id: "loadingInitDeepsight",
                        src: "initializeDeepsightSession",
                        input: ({ context: e }) => ({ ds: e.config.ds, storage: e.dependencies.storage }),
                        onDone: { actions: "setDeepsightServiceFromEvent" },
                        onError: { actions: "noOp" },
                    },
                ],
            },
            tutorial: {
                initial: "checkingPermission",
                entry: ["trackTutorial", "preloadRecordingProvider"],
                states: {
                    checkingPermission: {
                        invoke: {
                            id: "checkPermissionTutorial",
                            src: "checkPermission",
                            onDone: [
                                {
                                    target: "initializingCamera",
                                    guard: "isPermissionGranted",
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "ready", actions: "setPermissionResultFromEvent" },
                            ],
                        },
                    },
                    initializingCamera: {
                        type: "parallel",
                        states: {
                            cameraInit: {
                                initial: "initializingDeepsight",
                                states: {
                                    initializingDeepsight: {
                                        invoke: {
                                            id: "tutorialInitDeepsight",
                                            src: "initializeDeepsightSession",
                                            input: ({ context: e }) => ({
                                                ds: e.config.ds,
                                                storage: e.dependencies.storage,
                                            }),
                                            onDone: {
                                                target: "initializingStream",
                                                actions: "setDeepsightServiceFromEvent",
                                            },
                                            onError: { target: "#faceCapture.tutorial.ready" },
                                        },
                                    },
                                    initializingStream: {
                                        invoke: {
                                            id: "tutorialInitCamera",
                                            src: "initializeCamera",
                                            input: ({ context: e }) => ({
                                                config: e.config,
                                                dependencies: e.dependencies,
                                                deepsightService: e.deepsightService,
                                            }),
                                            onDone: { target: "ready", actions: "setStreamAndCapturer" },
                                            onError: [
                                                {
                                                    target: "#faceCapture.tutorial.ready",
                                                    guard: "isPermissionDeniedError",
                                                    actions: "setPermissionDenied",
                                                },
                                                { target: "#faceCapture.tutorial.ready", actions: "setErrorFromEvent" },
                                            ],
                                        },
                                    },
                                    ready: { type: "final" },
                                },
                            },
                            userIntent: {
                                initial: "waiting",
                                states: {
                                    waiting: { on: { NEXT_STEP: { target: "clicked", actions: "trackContinue" } } },
                                    clicked: { type: "final" },
                                },
                            },
                        },
                        onDone: { target: "#faceCapture.capture" },
                    },
                    ready: {
                        initial: "idle",
                        states: {
                            idle: {
                                always: [
                                    {
                                        target: "initializingDeepsight",
                                        guard: ({ context: e }) => void 0 === e.deepsightService,
                                    },
                                    { target: "readyForNext" },
                                ],
                            },
                            initializingDeepsight: {
                                invoke: {
                                    id: "initializeDeepsightTutorial",
                                    src: "initializeDeepsightSession",
                                    input: ({ context: e }) => ({ ds: e.config.ds, storage: e.dependencies.storage }),
                                    onDone: { target: "readyForNext", actions: "setDeepsightServiceFromEvent" },
                                    onError: { target: "readyForNext" },
                                },
                            },
                            readyForNext: {
                                on: {
                                    NEXT_STEP: {
                                        target: "#faceCapture.tutorial.waitingForPermission",
                                        actions: "trackContinue",
                                    },
                                },
                            },
                        },
                    },
                    waitingForPermission: {
                        invoke: {
                            id: "checkPermissionWaiting",
                            src: "checkPermission",
                            onDone: [
                                {
                                    target: "#faceCapture.capture",
                                    guard: "isPermissionGranted",
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "#faceCapture.permissions", actions: "setPermissionResultFromEvent" },
                            ],
                        },
                    },
                },
            },
            permissions: {
                entry: "preloadRecordingProvider",
                initial: "checkingDeepsight",
                states: {
                    checkingDeepsight: {
                        always: [
                            {
                                target: "initializingDeepsight",
                                guard: ({ context: e }) => void 0 === e.deepsightService,
                            },
                            { target: "idle" },
                        ],
                    },
                    initializingDeepsight: {
                        invoke: {
                            id: "initializeDeepsightPerms",
                            src: "initializeDeepsightSession",
                            input: ({ context: e }) => ({ ds: e.config.ds, storage: e.dependencies.storage }),
                            onDone: { target: "idle", actions: "setDeepsightServiceFromEvent" },
                            onError: { target: "idle" },
                        },
                    },
                    idle: {
                        invoke: {
                            id: "checkPermissionIdle",
                            src: "checkPermission",
                            onDone: [
                                {
                                    target: "#faceCapture.capture",
                                    guard: "isPermissionGranted",
                                    actions: "setPermissionResultFromEvent",
                                },
                                {
                                    target: "denied",
                                    guard: ({ event: e }) => "denied" === e.output,
                                    actions: "setPermissionResultFromEvent",
                                },
                            ],
                        },
                        on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" },
                    },
                    learnMore: { on: { BACK: "idle", REQUEST_PERMISSION: "requesting" } },
                    requesting: {
                        invoke: {
                            id: "requestPermission",
                            src: "requestPermission",
                            input: ({ context: e }) => ({ requestMotionPermission: !0 === e.config.ds }),
                            onDone: [
                                {
                                    target: "#faceCapture.capture",
                                    guard: "isPermissionGranted",
                                    actions: "setPermissionResultFromEvent",
                                },
                                {
                                    target: "denied",
                                    guard: ({ event: e }) => "denied" === e.output,
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "idle", actions: "setPermissionResultFromEvent" },
                            ],
                            onError: { target: "denied" },
                        },
                    },
                    denied: { entry: "setPermissionRefresh" },
                },
            },
            capture: {
                entry: "preloadRecordingProvider",
                initial: "checkingDeepsight",
                exit: ["stopMediaStream", "cleanup", "clearRecordingService"],
                states: {
                    checkingDeepsight: {
                        always: [
                            {
                                target: "initializingDeepsight",
                                guard: ({ context: e }) => void 0 === e.deepsightService,
                            },
                            { target: "checkingStream" },
                        ],
                    },
                    initializingDeepsight: {
                        invoke: {
                            id: "initializeDeepsightCapture",
                            src: "initializeDeepsightSession",
                            input: ({ context: e }) => ({ ds: e.config.ds, storage: e.dependencies.storage }),
                            onDone: { target: "checkingStream", actions: ["setDeepsightServiceFromEvent"] },
                            onError: { target: "#faceCapture.permissions" },
                        },
                    },
                    checkingStream: {
                        always: [
                            {
                                target: "initializingDeepsight",
                                guard: ({ context: e }) => void 0 === e.deepsightService,
                            },
                            { target: "detecting", guard: "hasStream" },
                            { target: "initializing" },
                        ],
                    },
                    initializing: {
                        invoke: {
                            id: "initializeCamera",
                            src: "initializeCamera",
                            input: ({ context: e }) => ({
                                config: e.config,
                                dependencies: e.dependencies,
                                deepsightService: e.deepsightService,
                            }),
                            onDone: { target: "detecting", actions: ["setStreamAndCapturer"] },
                            onError: [
                                {
                                    target: "#faceCapture.permissions",
                                    guard: "isPermissionDeniedError",
                                    actions: "setPermissionDenied",
                                },
                                { target: "#faceCapture.error", actions: "setErrorFromEvent" },
                            ],
                        },
                    },
                    detecting: {
                        entry: ["setDetectionStatusDetecting"],
                        invoke: [
                            {
                                id: "checkVirtualCamera",
                                src: "checkVirtualCamera",
                                input: ({ context: e }) => ({ stream: e.stream, deepsightService: e.deepsightService }),
                                onDone: [
                                    {
                                        target: "#faceCapture.processing",
                                        guard: ({ event: e }) => !0 === e.output,
                                        actions: "sendLabelInspection",
                                    },
                                ],
                                onError: { actions: "noOp" },
                            },
                            {
                                id: "startRecording",
                                src: "startRecording",
                                input: ({ context: e }) => ({
                                    config: e.config,
                                    dependencies: e.dependencies,
                                    recordingService: e.recordingService,
                                    stream: e.stream,
                                }),
                                onDone: { actions: "setRecordingServiceFromEvent" },
                                onError: { actions: "noOp" },
                            },
                            {
                                id: "runDetection",
                                src: "runDetection",
                                input: ({ context: e }) => ({
                                    frameCapturer: e.frameCapturer,
                                    provider: e.provider,
                                    config: e.config,
                                    manualCaptureTriggered: e.manualCaptureTriggered,
                                }),
                            },
                        ],
                        on: {
                            DETECTION_UPDATE: { actions: ["setDetectionStatusFromEvent", "setManualCaptureTriggered"] },
                            DETECTION_FRAME: { actions: "setDebugFrameFromEvent" },
                            DETECTION_RESET_READY: { actions: "setResetDetectionFromEvent" },
                            DETECTION_SUCCESS: { target: "capturing", actions: "setCapturedImageFromEvent" },
                            MANUAL_CAPTURE: { target: "capturingManual" },
                        },
                    },
                    capturing: {
                        entry: ["captureImage"],
                        always: [
                            { target: "preparingUpload", guard: "hasCapturedImage" },
                            { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        ],
                    },
                    capturingManual: {
                        entry: ["captureLatestFrame"],
                        always: [
                            { target: "preparingUpload", guard: "hasCapturedImage" },
                            { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        ],
                    },
                    preparingUpload: {
                        invoke: {
                            id: "prepareFaceUpload",
                            src: "prepareFaceUpload",
                            input: ({ context: e }) => e,
                            onDone: { target: "uploading", actions: "setUploadPreparationFromEvent" },
                            onError: { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        },
                    },
                    uploading: {
                        invoke: {
                            id: "uploadFace",
                            src: "uploadFace",
                            input: ({ context: e }) => e,
                            onDone: { target: "validatingUpload", actions: "setUploadResponseFromEvent" },
                            onError: { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        },
                    },
                    validatingUpload: {
                        always: [
                            {
                                target: "#faceCapture.error",
                                guard: "isTerminalUploadError",
                                actions: "setTerminalError",
                            },
                            {
                                target: "uploadError",
                                guard: "hasUploadValidationError",
                                actions: ["setUploadErrorFromUploadValidation", "decrementAttemptsRemaining"],
                            },
                            { target: "success" },
                        ],
                    },
                    uploadError: {
                        on: {
                            RETRY_CAPTURE: [
                                {
                                    target: "checkingStream",
                                    guard: "hasAttemptsRemaining",
                                    actions: ["resetDetection", "clearUploadFailure", "clearStreamForRetry"],
                                },
                                {
                                    target: "#faceCapture.error",
                                    guard: "isNoAttemptsTerminal",
                                    actions: ["setTerminalError"],
                                },
                                { target: "#faceCapture.terminalProcessing", actions: ["flagFaceManualReview"] },
                            ],
                        },
                    },
                    success: { entry: "cleanup", after: { 3e3: { target: "#faceCapture.processing" } } },
                },
            },
            processing: {
                invoke: {
                    id: "processFace",
                    src: "processFace",
                    input: ({ context: e }) => e,
                    onDone: { target: "finished", actions: "setProcessResponseFromEvent" },
                    onError: { target: "finished" },
                },
            },
            terminalProcessing: {
                entry: "cleanup",
                invoke: {
                    id: "processFace",
                    src: "processFace",
                    input: ({ context: e }) => e,
                    onDone: { target: "finished", actions: "setProcessResponseFromEvent" },
                    onError: { target: "finished" },
                },
            },
            finished: { entry: "stopMediaStream", type: "final" },
            closed: { entry: "stopMediaStream", type: "final" },
            error: { entry: "stopMediaStream", on: { RESET: { target: "idle", actions: "resetContext" } } },
        },
    });
Object.values(sg);
let sZ = ({ config: e, response: t }) =>
        t
            ? 0 !== t.confidence
                ? sg.LIVENESS
                : e.validateBrightness && !t.isBright
                  ? sg.BRIGHTNESS
                  : e.validateLenses && t.hasLenses
                    ? sg.LENSES
                    : e.validateFaceMask && t.hasFaceMask
                      ? sg.MASK
                      : e.validateClosedEyes && t.hasClosedEyes
                        ? sg.CLOSED_EYES
                        : e.validateHeadCover && t.hasHeadCover
                          ? sg.HEAD_COVER
                          : void 0
            : sg.SERVER,
    sW = s$.provide({
        actors: {
            prepareFaceUpload: oR(async ({ input: e }) =>
                !0 === e.config.onDeviceFaceResultsSubmissionEnabled ? sV(e) : sN(e),
            ),
            uploadFace: oR(async ({ input: e, signal: t }) =>
                !0 === e.config.onDeviceFaceResultsSubmissionEnabled
                    ? sB(e, t)
                    : sC({
                          encryptedBase64Image: e.encryptedBase64Image,
                          faceCoordinates: e.faceCoordinates,
                          metadata: e.deepsightService?.getMetadata(),
                          recordingId: e.uploadRecordingId,
                          signal: t,
                      }),
            ),
            processFace: oR(async ({ input: e, signal: t }) =>
                !0 === e.config.onDeviceFaceResultsSubmissionEnabled ? {} : sy("selfie", t),
            ),
        },
        actions: {
            setUploadErrorFromUploadValidation: oF({
                uploadError: ({ context: e }) => {
                    if (!0 !== e.config.onDeviceFaceResultsSubmissionEnabled)
                        return sZ({ config: e.config, response: e.uploadResponse }) ?? sg.SERVER;
                },
            }),
        },
        guards: {
            hasUploadValidationError: ({ context: e }) =>
                !0 !== e.config.onDeviceFaceResultsSubmissionEnabled &&
                void 0 !== sZ({ config: e.config, response: e.uploadResponse }),
            isTerminalUploadError: () => !1,
        },
    });
async function sj(e, t) {
    let i,
        r = e.capturedImage;
    if (!r) throw Error("selfieCaptureOnly: no captured image");
    try {
        i = (await e.recordingService?.stopAndGetVideo())?.videoBase64;
    } catch {
        i = void 0;
    }
    if (t.aborted) throw new DOMException("Aborted", "AbortError");
    let n = "";
    try {
        if (e.deepsightService) {
            let i = r.getImageData();
            if ((i && (await e.deepsightService.analyzeFrame(i)), t.aborted))
                throw new DOMException("Aborted", "AbortError");
            n = e.deepsightService.getMetadata();
        }
    } catch (e) {
        if (e?.name === "AbortError") throw e;
        n = "";
    }
    let o = r.getBase64Image() ?? "",
        s = r.getBlobData();
    if (!s) throw Error("selfieCaptureOnly: failed to build image blob");
    return { imageBase64: o, blob: s.blob, url: s.url, metadata: n, videoBase64: i };
}
s$.provide({
    actors: {
        prepareFaceUpload: oR(async () => ({ encryptedBase64Image: "", recordingId: null })),
        uploadFace: oR(async ({ input: e, signal: t }) => await sj(e, t)),
        processFace: oR(async () => ({})),
    },
    actions: { setUploadResponseFromEvent: oF({ captureOnlyResult: ({ event: e }) => e.output }) },
    guards: { hasUploadValidationError: () => !1, isTerminalUploadError: () => !1 },
});
var sK = !1,
    sG = ({ config: e, manager: t, onFinish: r, onError: n }) => {
        ep(() => {
            sK || ((sK = !0), i.e("29585").then(i.bind(i, 10632)));
        }, []);
        let [o, s] = (function (e, t = {}) {
            let { autoLoad: i = !0, manageLifecycle: r = !0 } = t,
                [n] = eh(e),
                [o, s] = eh(() => n.getState());
            return (
                ep(() => {
                    let e = n.subscribe(s);
                    return (
                        r && i && n.load && n.load(),
                        () => {
                            e(), r && n.stop?.();
                        }
                    );
                }, [n, i, r]),
                [o, n]
            );
        })(
            () => {
                var i, r, n;
                let o;
                if (t) return t;
                if (!e) throw Error("Selfie config is required when no manager is provided");
                return (
                    (o = (i = { config: e }).dependencies ?? {
                        storage: new o9(),
                        getWasmUtil: () => ny.t.getInstance(),
                    }),
                    (r = nW(sW, { input: { config: i.config, dependencies: o, authHint: i.authHint } }).start()),
                    (n = ty.n.faceCapture),
                    (function (e) {
                        let { actor: t, mapState: i, createApi: r, instrumentation: n } = e;
                        function o() {
                            return t.getSnapshot();
                        }
                        function s() {
                            return i(o());
                        }
                        let a = n?.getScreenName(o()),
                            l = n?.getErrorName(o()),
                            c = n?.getErrorPayload(o()),
                            d = r({
                                actor: t,
                                getSnapshot: o,
                                trackElementClicked: n
                                    ? (e, t) => {
                                          n.onElementClicked?.(n.moduleName, a, {
                                              element: e,
                                              action: t?.action,
                                              metadata: t?.metadata,
                                          });
                                      }
                                    : void 0,
                                trackCaptureAttemptFinished: n
                                    ? (e) => {
                                          n.onCaptureAttemptFinished?.(n.moduleName, a, { logs: e.logs });
                                      }
                                    : void 0,
                            });
                        n?.onModuleOpened(n.moduleName),
                            n && void 0 !== a && n.onScreenOpened(n.moduleName, a),
                            n && void 0 !== l && n.onErrorTriggered(n.moduleName, l, c);
                        let u = n
                                ? t.subscribe((e) => {
                                      let t = n.getScreenName(e),
                                          i = n.getErrorName(e),
                                          r = n.getErrorPayload(e);
                                      if (a === t) {
                                          void 0 !== i && i !== l && n.onErrorTriggered(n.moduleName, i, r),
                                              (l = i),
                                              (c = r);
                                          return;
                                      }
                                      void 0 !== a && n.onScreenClosed(n.moduleName, a),
                                          void 0 !== t && n.onScreenOpened(n.moduleName, t),
                                          (a = t),
                                          void 0 !== i && i !== l && n.onErrorTriggered(n.moduleName, i, r),
                                          (l = i),
                                          (c = r);
                                  })
                                : void 0,
                            h = !1;
                        return Object.defineProperties(
                            {
                                getState: s,
                                subscribe: function (e) {
                                    let i = t.subscribe(() => {
                                        e(s());
                                    });
                                    return () => i.unsubscribe();
                                },
                                stop() {
                                    h ||
                                        ((h = !0),
                                        u?.unsubscribe(),
                                        n && void 0 !== a && n.onScreenClosed(n.moduleName, a),
                                        (a = void 0),
                                        (l = void 0),
                                        (c = void 0),
                                        n?.onModuleClosed(n.moduleName),
                                        t.stop());
                                },
                            },
                            Object.getOwnPropertyDescriptors(d),
                        );
                    })({
                        actor: r,
                        mapState: o3,
                        createApi: o5,
                        instrumentation: (0, ty.o)(n, {
                            getEventScreenName: (e) =>
                                (function (e, t) {
                                    if (t === ty.n.authFace || t === ty.n.authentication)
                                        return (function (e) {
                                            let { value: t } = e;
                                            if (null == t) return;
                                            let i = o6(t);
                                            if (void 0 !== i)
                                                switch (i) {
                                                    case "tutorial":
                                                        return ty.r.authFaceTutorial;
                                                    case "capture":
                                                        return (function (e) {
                                                            let { value: t } = e;
                                                            if ("object" != typeof t || null === t) return;
                                                            let i = t.capture;
                                                            if (void 0 !== i) {
                                                                if ("string" == typeof i)
                                                                    switch (i) {
                                                                        case "preparingUpload":
                                                                        case "uploading":
                                                                        case "validatingUpload":
                                                                            return ty.r.authFaceUpload;
                                                                        case "uploadError":
                                                                            return ty.r.authFaceError;
                                                                        case "success":
                                                                            return ty.r.authFaceUploadSuccess;
                                                                        case "checkingDeepsight":
                                                                        case "initializingDeepsight":
                                                                        case "checkingStream":
                                                                        case "initializing":
                                                                        case "detecting":
                                                                        case "capturing":
                                                                        case "capturingManual":
                                                                            return ty.r.authFace;
                                                                    }
                                                                if ("object" == typeof i && null !== i) {
                                                                    let e = Object.keys(i);
                                                                    if (
                                                                        e.includes("uploading") ||
                                                                        e.includes("validatingUpload")
                                                                    )
                                                                        return ty.r.authFaceUpload;
                                                                    if (e.includes("uploadError"))
                                                                        return ty.r.authFaceError;
                                                                    if (e.includes("success"))
                                                                        return ty.r.authFaceUploadSuccess;
                                                                }
                                                                return ty.r.authFace;
                                                            }
                                                        })(e);
                                                    case "finished":
                                                        return ty.r.authFaceUploadSuccess;
                                                    case "error":
                                                        return ty.r.authFaceUploadFailed;
                                                    default:
                                                        return ty.r.authFace;
                                                }
                                        })(e);
                                    let { value: i } = e;
                                    if (null == i) return;
                                    let r = o6(i);
                                    if (void 0 !== r)
                                        switch (r) {
                                            case "idle":
                                            case "loading":
                                            case "processing":
                                                return "faceCapture.loading.processing";
                                            case "tutorial":
                                                if (e.context?.config?.ageAssurance === !0)
                                                    return "faceCapture.tutorial.ageAssurance";
                                                if ("object" == typeof e.value && null !== e.value) {
                                                    let t = e.value.tutorial;
                                                    if ("object" == typeof t && null !== t && "initializingCamera" in t)
                                                        return "faceCapture.tutorial.loading";
                                                }
                                                return "faceCapture.tutorial.default";
                                            case "permissions":
                                                return "faceCapture.tutorial.default";
                                            case "capture":
                                                return (function (e) {
                                                    let { value: t, context: i } = e;
                                                    if ("object" != typeof t || null === t) return;
                                                    let r = t.capture;
                                                    if (void 0 !== r) {
                                                        if ("string" == typeof r)
                                                            switch (r) {
                                                                case "checkingDeepsight":
                                                                case "initializingDeepsight":
                                                                case "checkingStream":
                                                                case "initializing":
                                                                    return "faceCapture.capturing.initiatingState";
                                                                case "detecting":
                                                                    switch (i?.detectionStatus) {
                                                                        case "getReady":
                                                                        case "getReadyFinished":
                                                                            return "faceCapture.capturing.getReady";
                                                                        case "dark":
                                                                            return "faceCapture.capturing.tooDark";
                                                                        case "tooBright":
                                                                            return "faceCapture.capturing.tooBright";
                                                                        case "tooClose":
                                                                            return "faceCapture.capturing.moveAway";
                                                                        case "tooFar":
                                                                            return "faceCapture.capturing.moveCloser";
                                                                        case "moveLeft":
                                                                            return "faceCapture.capturing.moveLeft";
                                                                        case "moveRight":
                                                                            return "faceCapture.capturing.moveRight";
                                                                        case "blur":
                                                                        case "centerFace":
                                                                        case "noFace":
                                                                        case "tooManyFaces":
                                                                            return "faceCapture.capturing.alignFace";
                                                                        case "faceAngle":
                                                                        case "lookAtCamera":
                                                                            return "faceCapture.capturing.lookAtCamera";
                                                                        case "eyesClosed":
                                                                            return "faceCapture.capturing.eyesClosed";
                                                                        case "faceMask":
                                                                            return "faceCapture.capturing.maskDetected";
                                                                        case "lenses":
                                                                            return "faceCapture.capturing.glassesDetected";
                                                                        case "headWear":
                                                                            return "faceCapture.capturing.hatDetected";
                                                                        case "faceOcclusion":
                                                                            return "faceCapture.capturing.faceOcclusion";
                                                                        case "manualCapture":
                                                                            return "faceCapture.manualCapture.default";
                                                                        case "capturing":
                                                                            return "faceCapture.loading.processing";
                                                                        case "detecting":
                                                                        case "idle":
                                                                        case "offline":
                                                                            return "faceCapture.genericErrors.noConnection";
                                                                        default:
                                                                            return "faceCapture.capturing.initiatingState";
                                                                    }
                                                                case "capturing":
                                                                    return "faceCapture.loading.processing";
                                                                case "capturingManual":
                                                                    return "faceCapture.manualCapture.default";
                                                                case "preparingUpload":
                                                                case "uploading":
                                                                case "validatingUpload":
                                                                    return "faceCapture.loading.uploading";
                                                                case "uploadError":
                                                                    return o0(i?.uploadError, i?.attemptsRemaining);
                                                                case "success":
                                                                    return "faceCapture.resultSuccess.default";
                                                            }
                                                        if ("object" == typeof r && null !== r) {
                                                            let e = Object.keys(r);
                                                            if (e.includes("uploading"))
                                                                return "faceCapture.loading.uploading";
                                                            if (e.includes("uploadError"))
                                                                return o0(i?.uploadError, i?.attemptsRemaining);
                                                            if (e.includes("success"))
                                                                return "faceCapture.resultSuccess.default";
                                                        }
                                                        return "faceCapture.capturing.initiatingState";
                                                    }
                                                })(e);
                                            case "finished":
                                                return "faceCapture.resultSuccess.default";
                                            case "closed":
                                                return "faceCapture.closed";
                                            case "error":
                                                return "faceCapture.resultError.processingFailed";
                                            default:
                                                return `faceCapture.${r}`;
                                        }
                                })(e, n),
                            getErrorPayload: o4,
                        }),
                    })
                );
            },
            { manageLifecycle: !t },
        );
        return "idle" === o.status || "loading" === o.status
            ? Q(i8, { hideText: !0 })
            : "tutorial" === o.status
              ? Q(nC, { manager: s, ageAssurance: o.ageAssurance })
              : "permissions" === o.status
                ? Q(ni, { manager: s, permissionStatus: o.permissionStatus })
                : "capture" === o.status
                  ? Q(nm, { manager: s, state: o })
                  : "processing" === o.status
                    ? Q(i7, {})
                    : ("finished" === o.status
                          ? r?.()
                          : "closed" === o.status
                            ? n?.(void 0)
                            : "error" === o.status && n?.(o.error),
                      null);
    };
void 0 === customElements.get("incode-selfie") &&
    (function (e, t, i, r) {
        function n() {
            var t,
                i = Reflect.construct(HTMLElement, [], n);
            return (
                (i._vdomComponent = e),
                r && r.shadow
                    ? ((i._root = i.attachShadow({
                          mode: r.mode || "open",
                          serializable: null != (t = r.serializable) && t,
                      })),
                      r.adoptedStyleSheets && (i._root.adoptedStyleSheets = r.adoptedStyleSheets))
                    : (i._root = i),
                i
            );
        }
        ((n.prototype = Object.create(HTMLElement.prototype)).constructor = n),
            (n.prototype.connectedCallback = function () {
                e6.call(this, r);
            }),
            (n.prototype.attributeChangedCallback = e4),
            (n.prototype.disconnectedCallback = e9),
            (n.observedAttributes = i = i || e.observedAttributes || Object.keys(e.propTypes || {})),
            e.formAssociated && (n.formAssociated = !0),
            i.forEach(function (e) {
                Object.defineProperty(n.prototype, e, {
                    get: function () {
                        return this._vdom ? this._vdom.props[e] : this._props[e];
                    },
                    set: function (t) {
                        this._vdom
                            ? this.attributeChangedCallback(e, null, t)
                            : ((this._props ||= {}), (this._props[e] = t));
                        var i = typeof t;
                        (null != t && "string" !== i && "boolean" !== i && "number" !== i) || this.setAttribute(e, t);
                    },
                });
            }),
            customElements.define(t || e.tagName || e.displayName || e.name, n);
    })(
        ({ config: e, manager: t, onFinish: i, onError: r }) =>
            Q(iY, { children: e || t ? Q(sG, { config: e, manager: t, onFinish: i, onError: r }) : null }),
        "incode-selfie",
        ["config", "manager", "onFinish", "onError"],
        { shadow: !1 },
    );
