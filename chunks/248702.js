i.d(t, {
    C: () => a,
    S: () => S,
    _: () => eo,
    a: () => eI,
    b: () => V,
    c: () => eO,
    d: () => ec,
    f: () => ea,
    g: () => eu,
    h: () => ed,
    i: () => e_,
    l: () => es,
    m: () => eh,
    n: () => e2,
    o: () => ex,
    p: () => en,
    r: () => eD,
    s: () => eY,
    t: () => to,
    u: () => el,
    v: () => z,
    x: () => B,
    y: () => k,
});
var r,
    n,
    o,
    a,
    s,
    l,
    c,
    d,
    u,
    h,
    p,
    f,
    m,
    g = {},
    v = [],
    C = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    y = Array.isArray;
function w(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
}
function _(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
}
function b(e, t, i) {
    var n,
        o,
        a,
        s = {};
    for (a in t) "key" == a ? (n = t[a]) : "ref" == a ? (o = t[a]) : (s[a] = t[a]);
    if (
        (arguments.length > 2 && (s.children = arguments.length > 3 ? r.call(arguments, 2) : i),
        "function" == typeof e && null != e.defaultProps)
    )
        for (a in e.defaultProps) void 0 === s[a] && (s[a] = e.defaultProps[a]);
    return L(e, s, n, o, null);
}
function L(e, t, i, r, a) {
    var s = {
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
        __v: a ?? ++o,
        __i: -1,
        __u: 0,
    };
    return null == a && null != n.vnode && n.vnode(s), s;
}
function S(e) {
    return e.children;
}
function E(e, t) {
    (this.props = e), (this.context = t);
}
function I(e, t) {
    if (null == t) return e.__ ? I(e.__, e.__i + 1) : null;
    for (var i; t < e.__k.length; t++) if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
    return "function" == typeof e.type ? I(e) : null;
}
function T(e) {
    ((!e.__d && (e.__d = !0) && s.push(e) && !M.__r++) || l != n.debounceRendering) &&
        ((l = n.debounceRendering) || c)(M);
}
function M() {
    for (var e, t, i, r, o, a, l = 1; s.length; )
        s.length > l && s.sort(d),
            (e = s.shift()),
            (l = s.length),
            e.__d &&
                ((t = void 0),
                (i = void 0),
                (r = (i = e.__v).__e),
                (o = []),
                (a = []),
                e.__P &&
                    (((t = w({}, i)).__v = i.__v + 1),
                    n.vnode && n.vnode(t),
                    R(e.__P, t, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [r] : null, o, r ?? I(i), !!(32 & i.__u), a),
                    (t.__v = i.__v),
                    (t.__.__k[t.__i] = t),
                    D(o, t, a),
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
    M.__r = 0;
}
function x(e, t, i, r, o, a, s, l, c, d, u) {
    var h,
        p,
        f,
        m,
        C,
        w,
        b,
        E = (r && r.__k) || v,
        T = t.length;
    for (
        c = (function (e, t, i, r, o) {
            var a,
                s,
                l,
                c,
                d,
                u = i.length,
                h = u,
                p = 0;
            for (e.__k = Array(o), a = 0; a < o; a++)
                null != (s = t[a]) && "boolean" != typeof s && "function" != typeof s
                    ? ((c = a + p),
                      ((s = e.__k[a] =
                          "string" == typeof s ||
                          "number" == typeof s ||
                          "bigint" == typeof s ||
                          s.constructor == String
                              ? L(null, s, null, null, null)
                              : y(s)
                                ? L(S, { children: s }, null, null, null)
                                : null == s.constructor && s.__b > 0
                                  ? L(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
                                  : s).__ = e),
                      (s.__b = e.__b + 1),
                      (l = null),
                      -1 !=
                          (d = s.__i =
                              (function (e, t, i, r) {
                                  var n,
                                      o,
                                      a,
                                      s = e.key,
                                      l = e.type,
                                      c = t[i],
                                      d = null != c && (2 & c.__u) == 0;
                                  if ((null === c && null == e.key) || (d && s == c.key && l == c.type)) return i;
                                  if (r > +!!d) {
                                      for (n = i - 1, o = i + 1; n >= 0 || o < t.length; )
                                          if (
                                              null != (c = t[(a = n >= 0 ? n-- : o++)]) &&
                                              !(2 & c.__u) &&
                                              s == c.key &&
                                              l == c.type
                                          )
                                              return a;
                                  }
                                  return -1;
                              })(s, i, c, h)) && (h--, (l = i[d]) && (l.__u |= 2)),
                      null == l || null == l.__v
                          ? (-1 == d && (o > u ? p-- : o < u && p++), "function" != typeof s.type && (s.__u |= 4))
                          : d != c && (d == c - 1 ? p-- : d == c + 1 ? p++ : (d > c ? p-- : p++, (s.__u |= 4))))
                    : (e.__k[a] = null);
            if (h)
                for (a = 0; a < u; a++)
                    null == (l = i[a]) ||
                        2 & l.__u ||
                        (l.__e == r && (r = I(l)),
                        (function e(t, i, r) {
                            var o, a;
                            if (
                                (n.unmount && n.unmount(t),
                                (o = t.ref) && ((o.current && o.current != t.__e) || U(o, null, i)),
                                null != (o = t.__c))
                            ) {
                                if (o.componentWillUnmount)
                                    try {
                                        o.componentWillUnmount();
                                    } catch (e) {
                                        n.__e(e, i);
                                    }
                                o.base = o.__P = null;
                            }
                            if ((o = t.__k))
                                for (a = 0; a < o.length; a++) o[a] && e(o[a], i, r || "function" != typeof t.type);
                            r || _(t.__e), (t.__c = t.__ = t.__e = void 0);
                        })(l, l));
            return r;
        })(i, t, E, c, T),
            h = 0;
        h < T;
        h++
    )
        null != (f = i.__k[h]) &&
            ((p = -1 == f.__i ? g : E[f.__i] || g),
            (f.__i = h),
            (w = R(e, f, p, o, a, s, l, c, d, u)),
            (m = f.__e),
            f.ref && p.ref != f.ref && (p.ref && U(p.ref, null, f), u.push(f.ref, f.__c || m, f)),
            null == C && null != m && (C = m),
            (b = !!(4 & f.__u)) || p.__k === f.__k
                ? (c = (function e(t, i, r, n) {
                      var o, a;
                      if ("function" == typeof t.type) {
                          for (o = t.__k, a = 0; o && a < o.length; a++)
                              o[a] && ((o[a].__ = t), (i = e(o[a], i, r, n)));
                          return i;
                      }
                      t.__e != i &&
                          (n && (i && t.type && !i.parentNode && (i = I(t)), r.insertBefore(t.__e, i || null)),
                          (i = t.__e));
                      do i &&= i.nextSibling;
                      while (null != i && 8 == i.nodeType);
                      return i;
                  })(f, c, e, b))
                : "function" == typeof f.type && void 0 !== w
                  ? (c = w)
                  : m && (c = m.nextSibling),
            (f.__u &= -7));
    return (i.__e = C), c;
}
function k(e, t) {
    return (
        (t ||= []),
        null == e ||
            "boolean" == typeof e ||
            (y(e)
                ? e.some(function (e) {
                      k(e, t);
                  })
                : t.push(e)),
        t
    );
}
function O(e, t, i) {
    "-" == t[0]
        ? e.setProperty(t, i ?? "")
        : (e[t] = null == i ? "" : "number" != typeof i || C.test(t) ? i : i + "px");
}
function P(e, t, i, r, n) {
    var o, a;
    t: if ("style" == t)
        if ("string" == typeof i) e.style.cssText = i;
        else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
                for (t in r) (i && t in i) || O(e.style, t, "");
            if (i) for (t in i) (r && i[t] == r[t]) || O(e.style, t, i[t]);
        }
    else if ("o" == t[0] && "n" == t[1])
        (o = t != (t = t.replace(u, "$1"))),
            (t = (a = t.toLowerCase()) in e || "onFocusOut" == t || "onFocusIn" == t ? a.slice(2) : t.slice(2)),
            (e.l ||= {}),
            (e.l[t + o] = i),
            i
                ? r
                    ? (i.u = r.u)
                    : ((i.u = h), e.addEventListener(t, o ? f : p, o))
                : e.removeEventListener(t, o ? f : p, o);
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
                break t;
            } catch {}
        "function" == typeof i ||
            (null == i || (!1 === i && "-" != t[4])
                ? e.removeAttribute(t)
                : e.setAttribute(t, "popover" == t && 1 == i ? "" : i));
    }
}
function A(e) {
    return function (t) {
        if (this.l) {
            var i = this.l[t.type + e];
            if (null == t.t) t.t = h++;
            else if (t.t < i.u) return;
            return i(n.event ? n.event(t) : t);
        }
    };
}
function R(e, t, i, o, a, s, l, c, d, u) {
    var h,
        p,
        f,
        m,
        v,
        C,
        b,
        L,
        T,
        M,
        k,
        O,
        A,
        R,
        D,
        U,
        H,
        V = t.type;
    if (null != t.constructor) return null;
    128 & i.__u && ((d = !!(32 & i.__u)), (s = [(c = t.__e = i.__e)])), (h = n.__b) && h(t);
    t: if ("function" == typeof V)
        try {
            if (
                ((L = t.props),
                (T = "prototype" in V && V.prototype.render),
                (M = (h = V.contextType) && o[h.__c]),
                (k = h ? (M ? M.props.value : h.__) : o),
                i.__c
                    ? (b = (p = t.__c = i.__c).__ = p.__E)
                    : (T ? (t.__c = p = new V(L, k)) : ((t.__c = p = new E(L, k)), (p.constructor = V), (p.render = N)),
                      M && M.sub(p),
                      (p.props = L),
                      (p.state ||= {}),
                      (p.context = k),
                      (p.__n = o),
                      (f = p.__d = !0),
                      (p.__h = []),
                      (p._sb = [])),
                T && null == p.__s && (p.__s = p.state),
                T &&
                    null != V.getDerivedStateFromProps &&
                    (p.__s == p.state && (p.__s = w({}, p.__s)), w(p.__s, V.getDerivedStateFromProps(L, p.__s))),
                (m = p.props),
                (v = p.state),
                (p.__v = t),
                f)
            )
                T && null == V.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(),
                    T && null != p.componentDidMount && p.__h.push(p.componentDidMount);
            else {
                if (
                    (T &&
                        null == V.getDerivedStateFromProps &&
                        L !== m &&
                        null != p.componentWillReceiveProps &&
                        p.componentWillReceiveProps(L, k),
                    (!p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(L, p.__s, k)) ||
                        t.__v == i.__v)
                ) {
                    for (
                        t.__v != i.__v && ((p.props = L), (p.state = p.__s), (p.__d = !1)),
                            t.__e = i.__e,
                            t.__k = i.__k,
                            t.__k.some(function (e) {
                                e && (e.__ = t);
                            }),
                            O = 0;
                        O < p._sb.length;
                        O++
                    )
                        p.__h.push(p._sb[O]);
                    (p._sb = []), p.__h.length && l.push(p);
                    break t;
                }
                null != p.componentWillUpdate && p.componentWillUpdate(L, p.__s, k),
                    T &&
                        null != p.componentDidUpdate &&
                        p.__h.push(function () {
                            p.componentDidUpdate(m, v, C);
                        });
            }
            if (((p.context = k), (p.props = L), (p.__P = e), (p.__e = !1), (A = n.__r), (R = 0), T)) {
                for (
                    p.state = p.__s, p.__d = !1, A && A(t), h = p.render(p.props, p.state, p.context), D = 0;
                    D < p._sb.length;
                    D++
                )
                    p.__h.push(p._sb[D]);
                p._sb = [];
            } else
                do (p.__d = !1), A && A(t), (h = p.render(p.props, p.state, p.context)), (p.state = p.__s);
                while (p.__d && ++R < 25);
            (p.state = p.__s),
                null != p.getChildContext && (o = w(w({}, o), p.getChildContext())),
                T && !f && null != p.getSnapshotBeforeUpdate && (C = p.getSnapshotBeforeUpdate(m, v)),
                (U = h),
                null != h &&
                    h.type === S &&
                    null == h.key &&
                    (U = (function e(t) {
                        return "object" != typeof t || !t || (t.__b && t.__b > 0) ? t : y(t) ? t.map(e) : w({}, t);
                    })(h.props.children)),
                (c = x(e, y(U) ? U : [U], t, i, o, a, s, l, c, d, u)),
                (p.base = t.__e),
                (t.__u &= -161),
                p.__h.length && l.push(p),
                b && (p.__E = p.__ = null);
        } catch (e) {
            if (((t.__v = null), d || null != s))
                if (e.then) {
                    for (t.__u |= d ? 160 : 128; c && 8 == c.nodeType && c.nextSibling; ) c = c.nextSibling;
                    (s[s.indexOf(c)] = null), (t.__e = c);
                } else {
                    for (H = s.length; H--; ) _(s[H]);
                    F(t);
                }
            else (t.__e = i.__e), (t.__k = i.__k), e.then || F(t);
            n.__e(e, t, i);
        }
    else
        null == s && t.__v == i.__v
            ? ((t.__k = i.__k), (t.__e = i.__e))
            : (c = t.__e =
                  (function (e, t, i, o, a, s, l, c, d) {
                      var u,
                          h,
                          p,
                          f,
                          m,
                          v,
                          C,
                          w = i.props,
                          b = t.props,
                          L = t.type;
                      if (
                          ("svg" == L
                              ? (a = "http://www.w3.org/2000/svg")
                              : "math" == L
                                ? (a = "http://www.w3.org/1998/Math/MathML")
                                : (a ||= "http://www.w3.org/1999/xhtml"),
                          null != s)
                      ) {
                          for (u = 0; u < s.length; u++)
                              if (
                                  (m = s[u]) &&
                                  "setAttribute" in m == !!L &&
                                  (L ? m.localName == L : 3 == m.nodeType)
                              ) {
                                  (e = m), (s[u] = null);
                                  break;
                              }
                      }
                      if (null == e) {
                          if (null == L) return document.createTextNode(b);
                          (e = document.createElementNS(a, L, b.is && b)),
                              (c &&= (n.__m && n.__m(t, s), !1)),
                              (s = null);
                      }
                      if (null == L) w === b || (c && e.data == b) || (e.data = b);
                      else {
                          if (((s &&= r.call(e.childNodes)), (w = i.props || g), !c && null != s))
                              for (w = {}, u = 0; u < e.attributes.length; u++) w[(m = e.attributes[u]).name] = m.value;
                          for (u in w)
                              if (((m = w[u]), "children" != u)) {
                                  if ("dangerouslySetInnerHTML" == u) p = m;
                                  else if (!(u in b)) {
                                      if (
                                          ("value" == u && "defaultValue" in b) ||
                                          ("checked" == u && "defaultChecked" in b)
                                      )
                                          continue;
                                      P(e, u, null, m, a);
                                  }
                              }
                          for (u in b)
                              (m = b[u]),
                                  "children" == u
                                      ? (f = m)
                                      : "dangerouslySetInnerHTML" == u
                                        ? (h = m)
                                        : "value" == u
                                          ? (v = m)
                                          : "checked" == u
                                            ? (C = m)
                                            : (c && "function" != typeof m) || w[u] === m || P(e, u, m, w[u], a);
                          if (h)
                              c || (p && (h.__html == p.__html || h.__html == e.innerHTML)) || (e.innerHTML = h.__html),
                                  (t.__k = []);
                          else if (
                              (p && (e.innerHTML = ""),
                              x(
                                  "template" == t.type ? e.content : e,
                                  y(f) ? f : [f],
                                  t,
                                  i,
                                  o,
                                  "foreignObject" == L ? "http://www.w3.org/1999/xhtml" : a,
                                  s,
                                  l,
                                  s ? s[0] : i.__k && I(i, 0),
                                  c,
                                  d,
                              ),
                              null != s)
                          )
                              for (u = s.length; u--; ) _(s[u]);
                          c ||
                              ((u = "value"),
                              "progress" == L && null == v
                                  ? e.removeAttribute("value")
                                  : null == v ||
                                    (v === e[u] && ("progress" != L || v) && ("option" != L || v == w[u])) ||
                                    P(e, u, v, w[u], a),
                              (u = "checked"),
                              null != C && C != e[u] && P(e, u, C, w[u], a));
                      }
                      return e;
                  })(i.__e, t, i, o, a, s, l, d, u));
    return (h = n.diffed) && h(t), 128 & t.__u ? void 0 : c;
}
function F(e) {
    e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(F);
}
function D(e, t, i) {
    for (var r = 0; r < i.length; r++) U(i[r], i[++r], i[++r]);
    n.__c && n.__c(t, e),
        e.some(function (t) {
            try {
                (e = t.__h),
                    (t.__h = []),
                    e.some(function (e) {
                        e.call(t);
                    });
            } catch (e) {
                n.__e(e, t.__v);
            }
        });
}
function U(e, t, i) {
    try {
        if ("function" == typeof e) {
            var r = "function" == typeof e.__u;
            r && e.__u(), (r && null == t) || (e.__u = e(t));
        } else e.current = t;
    } catch (e) {
        n.__e(e, i);
    }
}
function N(e, t, i) {
    return this.constructor(e, i);
}
function H(e, t, i) {
    var o, a, s, l;
    t == document && (t = document.documentElement),
        n.__ && n.__(e, t),
        (a = (o = "function" == typeof i) ? null : (i && i.__k) || t.__k),
        (s = []),
        (l = []),
        R(
            t,
            (e = ((!o && i) || t).__k = b(S, null, [e])),
            a || g,
            g,
            t.namespaceURI,
            !o && i ? [i] : a ? null : t.firstChild ? r.call(t.childNodes) : null,
            s,
            !o && i ? i : a ? a.__e : t.firstChild,
            o,
            l,
        ),
        D(s, e, l);
}
function V(e, t, i) {
    var n,
        o,
        a,
        s,
        l = w({}, e.props);
    for (a in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
        "key" == a ? (n = t[a]) : "ref" == a ? (o = t[a]) : (l[a] = void 0 === t[a] && null != s ? s[a] : t[a]);
    return (
        arguments.length > 2 && (l.children = arguments.length > 3 ? r.call(arguments, 2) : i),
        L(e.type, l, n || e.key, o || e.ref, null)
    );
}
function B(e) {
    function t(e) {
        var i, r;
        return (
            this.getChildContext ||
                ((i = new Set()),
                ((r = {})[t.__c] = this),
                (this.getChildContext = function () {
                    return r;
                }),
                (this.componentWillUnmount = function () {
                    i = null;
                }),
                (this.shouldComponentUpdate = function (e) {
                    this.props.value != e.value &&
                        i.forEach(function (e) {
                            (e.__e = !0), T(e);
                        });
                }),
                (this.sub = function (e) {
                    i.add(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                        i && i.delete(e), t && t.call(e);
                    };
                })),
            e.children
        );
    }
    return (
        (t.__c = "__cC" + m++),
        (t.__ = e),
        (t.Provider =
            t.__l =
            (t.Consumer = function (e, t) {
                return e.children(t);
            }).contextType =
                t),
        t
    );
}
(r = v.slice),
    (n = {
        __e: function (e, t, i, r) {
            for (var n, o, a; (t = t.__); )
                if ((n = t.__c) && !n.__)
                    try {
                        if (
                            ((o = n.constructor) &&
                                null != o.getDerivedStateFromError &&
                                (n.setState(o.getDerivedStateFromError(e)), (a = n.__d)),
                            null != n.componentDidCatch && (n.componentDidCatch(e, r || {}), (a = n.__d)),
                            a)
                        )
                            return (n.__E = n);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
    }),
    (o = 0),
    (a = function (e) {
        return null != e && null == e.constructor;
    }),
    (E.prototype.setState = function (e, t) {
        var i = null != this.__s && this.__s != this.state ? this.__s : (this.__s = w({}, this.state));
        "function" == typeof e && (e = e(w({}, i), this.props)),
            e && w(i, e),
            null != e && this.__v && (t && this._sb.push(t), T(this));
    }),
    (E.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), T(this));
    }),
    (E.prototype.render = S),
    (s = []),
    (c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (d = function (e, t) {
        return e.__v.__b - t.__v.__b;
    }),
    (M.__r = 0),
    (u = /(PointerCapture)$|Capture$/i),
    (h = 0),
    (p = A(!1)),
    (f = A(!0)),
    (m = 0);
var $ = 0;
function z(e, t, i, r, o, a) {
    var s,
        l,
        c = (t ||= {});
    if ("ref" in c) for (l in ((c = {}), t)) "ref" == l ? (s = t[l]) : (c[l] = t[l]);
    var d = {
        type: e,
        props: c,
        key: i,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --$,
        __i: -1,
        __u: 0,
        __source: o,
        __self: a,
    };
    if ("function" == typeof e && (s = e.defaultProps)) for (l in s) void 0 === c[l] && (c[l] = s[l]);
    return n.vnode && n.vnode(d), d;
}
var j,
    Z,
    W,
    K,
    G = 0,
    q = [],
    Y = n,
    Q = Y.__b,
    X = Y.__r,
    J = Y.diffed,
    ee = Y.__c,
    et = Y.unmount,
    ei = Y.__;
function er(e, t) {
    Y.__h && Y.__h(Z, e, G || t), (G = 0);
    var i = (Z.__H ||= { __: [], __h: [] });
    return e >= i.__.length && i.__.push({}), i.__[e];
}
function en(e) {
    return (
        (G = 1),
        (function (e, t) {
            var i = er(j++, 2);
            if (
                ((i.t = e),
                !i.__c &&
                    ((i.__ = [
                        eC(void 0, t),
                        function (e) {
                            var t = i.__N ? i.__N[0] : i.__[0],
                                r = i.t(t, e);
                            t !== r && ((i.__N = [r, i.__[1]]), i.__c.setState({}));
                        },
                    ]),
                    (i.__c = Z),
                    !Z.__f))
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
                    var a = i.__c.props !== e;
                    return (
                        o.forEach(function (e) {
                            if (e.__N) {
                                var t = e.__[0];
                                (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
                            }
                        }),
                        (n && n.call(this, e, t, r)) || a
                    );
                };
                Z.__f = !0;
                var n = Z.shouldComponentUpdate,
                    o = Z.componentWillUpdate;
                (Z.componentWillUpdate = function (e, t, i) {
                    if (this.__e) {
                        var a = n;
                        (n = void 0), r(e, t, i), (n = a);
                    }
                    o && o.call(this, e, t, i);
                }),
                    (Z.shouldComponentUpdate = r);
            }
            return i.__N || i.__;
        })(eC, e)
    );
}
function eo(e, t) {
    var i = er(j++, 3);
    !Y.__s && ev(i.__H, t) && ((i.__ = e), (i.u = t), Z.__H.__h.push(i));
}
function ea(e, t) {
    var i = er(j++, 4);
    !Y.__s && ev(i.__H, t) && ((i.__ = e), (i.u = t), Z.__h.push(i));
}
function es(e) {
    return (
        (G = 5),
        ec(function () {
            return { current: e };
        }, [])
    );
}
function el(e, t, i) {
    (G = 6),
        ea(
            function () {
                if ("function" == typeof e) {
                    var i = e(t());
                    return function () {
                        e(null), i && "function" == typeof i && i();
                    };
                }
                if (e)
                    return (
                        (e.current = t()),
                        function () {
                            return (e.current = null);
                        }
                    );
            },
            null == i ? i : i.concat(e),
        );
}
function ec(e, t) {
    var i = er(j++, 7);
    return ev(i.__H, t) && ((i.__ = e()), (i.__H = t), (i.__h = e)), i.__;
}
function ed(e, t) {
    return (
        (G = 8),
        ec(function () {
            return e;
        }, t)
    );
}
function eu(e) {
    var t = Z.context[e.__c],
        i = er(j++, 9);
    return (i.c = e), t ? (i.__ ?? ((i.__ = !0), t.sub(Z)), t.props.value) : e.__;
}
function eh() {
    var e = er(j++, 11);
    if (!e.__) {
        for (var t = Z.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
        var i = (t.__m ||= [0, 0]);
        e.__ = "P" + i[0] + "-" + i[1]++;
    }
    return e.__;
}
function ep() {
    for (var e; (e = q.shift()); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(em), e.__H.__h.forEach(eg), (e.__H.__h = []);
            } catch (t) {
                (e.__H.__h = []), Y.__e(t, e.__v);
            }
}
(Y.__b = function (e) {
    (Z = null), Q && Q(e);
}),
    (Y.__ = function (e, t) {
        e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ei && ei(e, t);
    }),
    (Y.__r = function (e) {
        X && X(e), (j = 0);
        var t = (Z = e.__c).__H;
        t &&
            (W === Z
                ? ((t.__h = []),
                  (Z.__h = []),
                  t.__.forEach(function (e) {
                      e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                  }))
                : (t.__h.forEach(em), t.__h.forEach(eg), (t.__h = []), (j = 0))),
            (W = Z);
    }),
    (Y.diffed = function (e) {
        J && J(e);
        var t = e.__c;
        t &&
            t.__H &&
            (t.__H.__h.length &&
                ((1 !== q.push(t) && K === Y.requestAnimationFrame) ||
                    (
                        (K = Y.requestAnimationFrame) ||
                        function (e) {
                            var t,
                                i = function () {
                                    clearTimeout(r), ef && cancelAnimationFrame(t), setTimeout(e);
                                },
                                r = setTimeout(i, 35);
                            ef && (t = requestAnimationFrame(i));
                        }
                    )(ep)),
            t.__H.__.forEach(function (e) {
                e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (W = Z = null);
    }),
    (Y.__c = function (e, t) {
        t.some(function (e) {
            try {
                e.__h.forEach(em),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || eg(e);
                    }));
            } catch (i) {
                t.some(function (e) {
                    e.__h &&= [];
                }),
                    (t = []),
                    Y.__e(i, e.__v);
            }
        }),
            ee && ee(e, t);
    }),
    (Y.unmount = function (e) {
        et && et(e);
        var t,
            i = e.__c;
        i &&
            i.__H &&
            (i.__H.__.forEach(function (e) {
                try {
                    em(e);
                } catch (e) {
                    t = e;
                }
            }),
            (i.__H = void 0),
            t && Y.__e(t, i.__v));
    });
var ef = "function" == typeof requestAnimationFrame;
function em(e) {
    var t = Z,
        i = e.__c;
    "function" == typeof i && ((e.__c = void 0), i()), (Z = t);
}
function eg(e) {
    var t = Z;
    (e.__c = e.__()), (Z = t);
}
function ev(e, t) {
    return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, i) {
            return t !== e[i];
        })
    );
}
function eC(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function ey(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
}
function ew(e, t) {
    for (var i in e) if ("__source" !== i && !(i in t)) return !0;
    for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1;
}
function e_(e, t) {
    var i = t(),
        r = en({ t: { __: i, u: t } }),
        n = r[0].t,
        o = r[1];
    return (
        ea(
            function () {
                (n.__ = i), (n.u = t), eb(n) && o({ t: n });
            },
            [e, i, t],
        ),
        eo(
            function () {
                return (
                    eb(n) && o({ t: n }),
                    e(function () {
                        eb(n) && o({ t: n });
                    })
                );
            },
            [e],
        ),
        i
    );
}
function eb(e) {
    var t = e.u,
        i = e.__;
    try {
        var r = t();
        return (i !== r || (0 === i && 1 / i != 1 / r)) && (i == i || r == r);
    } catch {
        return !0;
    }
}
function eL(e, t) {
    (this.props = e), (this.context = t);
}
((eL.prototype = new E()).isPureReactComponent = !0),
    (eL.prototype.shouldComponentUpdate = function (e, t) {
        return ew(this.props, e) || ew(this.state, t);
    });
var eS = n.__b;
n.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), eS && eS(e);
};
var eE = ("u" > typeof Symbol && Symbol.for && Symbol.for("react.forward_ref")) || 3911;
function eI(e) {
    function t(t) {
        var i = ey({}, t);
        return delete i.ref, e(i, t.ref || null);
    }
    return (
        (t.$$typeof = eE),
        (t.render = e),
        (t.prototype.isReactComponent = t.__f = !0),
        (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
        t
    );
}
var eT = n.__e;
n.__e = function (e, t, i, r) {
    if (e.then) {
        for (var n, o = t; (o = o.__); )
            if ((n = o.__c) && n.__c) return t.__e ?? ((t.__e = i.__e), (t.__k = i.__k)), n.__c(e, t);
    }
    eT(e, t, i, r);
};
var eM = n.unmount;
function ex() {
    (this.__u = 0), (this.o = null), (this.__b = null);
}
function ek(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
}
function eO(e) {
    var t, i, r;
    function n(n) {
        if (
            (t ||
                (t = e()).then(
                    function (e) {
                        i = e.default || e;
                    },
                    function (e) {
                        r = e;
                    },
                ),
            r)
        )
            throw r;
        if (!i) throw t;
        return b(i, n);
    }
    return (n.displayName = "Lazy"), (n.__f = !0), n;
}
function eP() {
    (this.i = null), (this.l = null);
}
(n.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), eM && eM(e);
}),
    ((ex.prototype = new E()).__c = function (e, t) {
        var i = t.__c,
            r = this;
        (r.o ??= []), r.o.push(i);
        var n = ek(r.__v),
            o = !1,
            a = function () {
                o || ((o = !0), (i.__R = null), n ? n(s) : s());
            };
        i.__R = a;
        var s = function () {
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
        r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(a, a);
    }),
    (ex.prototype.componentWillUnmount = function () {
        this.o = [];
    }),
    (ex.prototype.render = function (e, t) {
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
                            null != (t = ey({}, t)).__c &&
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
        var n = t.__a && b(S, null, e.fallback);
        return n && (n.__u &= -33), [b(S, null, t.__a ? null : e.children), n];
    });
var eA = function (e, t, i) {
    if ((++i[1] === i[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size)))
        for (i = e.i; i; ) {
            for (; i.length > 3; ) i.pop()();
            if (i[1] < i[0]) break;
            e.i = i = i[2];
        }
};
function eR(e) {
    return (
        (this.getChildContext = function () {
            return e.context;
        }),
        e.children
    );
}
function eF(e) {
    var t = this,
        i = e.h;
    if (
        ((t.componentWillUnmount = function () {
            H(null, t.v), (t.v = null), (t.h = null);
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
    H(b(eR, { context: t.context }, e.__v), t.v);
}
function eD(e, t) {
    var i = b(eF, { __v: e, h: t });
    return (i.containerInfo = t), i;
}
((eP.prototype = new E()).__a = function (e) {
    var t = this,
        i = ek(t.__v),
        r = t.l.get(e);
    return (
        r[0]++,
        function (n) {
            var o = function () {
                t.props.revealOrder ? (r.push(n), eA(t, e, r)) : n();
            };
            i ? i(o) : o();
        }
    );
}),
    (eP.prototype.render = function (e) {
        (this.i = null), (this.l = new Map());
        var t = k(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var i = t.length; i--; ) this.l.set(t[i], (this.i = [1, 0, this.i]));
        return e.children;
    }),
    (eP.prototype.componentDidUpdate = eP.prototype.componentDidMount =
        function () {
            var e = this;
            this.l.forEach(function (t, i) {
                eA(e, i, t);
            });
        });
var eU = ("u" > typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
    eN =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    eH = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    eV = /[A-Z0-9]/g,
    eB = "u" > typeof document;
(E.prototype.isReactComponent = {}),
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
        Object.defineProperty(E.prototype, e, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + e];
            },
            set: function (t) {
                Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
            },
        });
    });
var e$ = n.event;
function ez() {}
function ej() {
    return this.cancelBubble;
}
function eZ() {
    return this.defaultPrevented;
}
n.event = function (e) {
    return (
        e$ && (e = e$(e)),
        (e.persist = ez),
        (e.isPropagationStopped = ej),
        (e.isDefaultPrevented = eZ),
        (e.nativeEvent = e)
    );
};
var eW = {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this.class;
        },
    },
    eK = n.vnode;
n.vnode = function (e) {
    "string" == typeof e.type &&
        (function (e) {
            var t = e.props,
                i = e.type,
                r = {},
                n = -1 === i.indexOf("-");
            for (var o in t) {
                var a = t[o];
                if (
                    !(
                        ("value" === o && "defaultValue" in t && null == a) ||
                        (eB && "children" === o && "noscript" === i) ||
                        "class" === o ||
                        "className" === o
                    )
                ) {
                    var s,
                        l = o.toLowerCase();
                    "defaultValue" === o && "value" in t && null == t.value
                        ? (o = "value")
                        : "download" === o && !0 === a
                          ? (a = "")
                          : "translate" === l && "no" === a
                            ? (a = !1)
                            : "o" === l[0] && "n" === l[1]
                              ? "ondoubleclick" === l
                                  ? (o = "ondblclick")
                                  : "onchange" !== l ||
                                      ("input" !== i && "textarea" !== i) ||
                                      ((s = t.type),
                                      ("u" > typeof Symbol && "symbol" == typeof Symbol()
                                          ? /fil|che|rad/
                                          : /fil|che|ra/
                                      ).test(s))
                                    ? "onfocus" === l
                                        ? (o = "onfocusin")
                                        : "onblur" === l
                                          ? (o = "onfocusout")
                                          : eH.test(o) && (o = l)
                                    : (l = o = "oninput")
                              : n && eN.test(o)
                                ? (o = o.replace(eV, "-$&").toLowerCase())
                                : null === a && (a = void 0),
                        "oninput" === l && r[(o = l)] && (o = "oninputCapture"),
                        (r[o] = a);
                }
            }
            "select" == i &&
                r.multiple &&
                Array.isArray(r.value) &&
                (r.value = k(t.children).forEach(function (e) {
                    e.props.selected = -1 != r.value.indexOf(e.props.value);
                })),
                "select" == i &&
                    null != r.defaultValue &&
                    (r.value = k(t.children).forEach(function (e) {
                        e.props.selected = r.multiple
                            ? -1 != r.defaultValue.indexOf(e.props.value)
                            : r.defaultValue == e.props.value;
                    })),
                t.class && !t.className
                    ? ((r.class = t.class), Object.defineProperty(r, "className", eW))
                    : ((t.className && !t.class) || (t.class && t.className)) && (r.class = r.className = t.className),
                (e.props = r);
        })(e),
        (e.$$typeof = eU),
        eK && eK(e);
};
var eG = n.__r;
n.__r = function (e) {
    eG && eG(e), e.__c;
};
var eq = n.diffed;
n.diffed = function (e) {
    eq && eq(e);
    var t = e.props,
        i = e.__e;
    null != i &&
        "textarea" === e.type &&
        "value" in t &&
        t.value !== i.value &&
        (i.value = null == t.value ? "" : t.value);
};
var eY = function (e, t) {
    return e(t);
};
function eQ() {
    return (eQ = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var i = arguments[t];
                  for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
          }).apply(this, arguments);
}
function eX(e, t) {
    if (null == e) return {};
    var i,
        r,
        n = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) t.indexOf((i = o[r])) >= 0 || (n[i] = e[i]);
    return n;
}
var eJ = ["context", "children"],
    e1 = ["useFragment"];
function e2(e, t, i, r) {
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
    return (
        ((n.prototype = Object.create(HTMLElement.prototype)).constructor = n),
        (n.prototype.connectedCallback = function () {
            e3.call(this, r);
        }),
        (n.prototype.attributeChangedCallback = e5),
        (n.prototype.disconnectedCallback = e4),
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
        customElements.define(t || e.tagName || e.displayName || e.name, n),
        n
    );
}
function e0(e) {
    return (
        (this.getChildContext = function () {
            return e.context;
        }),
        V(e.children, eX(e, eJ))
    );
}
function e3(e) {
    var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
    this.dispatchEvent(t),
        (this._vdom = b(
            e0,
            eQ({}, this._props, { context: t.detail.context }),
            (function e(t, i, r) {
                if (3 === t.nodeType) return t.data;
                if (1 !== t.nodeType) return null;
                var n = [],
                    o = {},
                    a = 0,
                    s = t.attributes,
                    l = t.childNodes;
                for (a = s.length; a--; )
                    "slot" !== s[a].name && ((o[s[a].name] = s[a].value), (o[e6(s[a].name)] = s[a].value));
                for (a = l.length; a--; ) {
                    var c = e(l[a], null, r),
                        d = l[a].slot;
                    d ? (o[d] = b(e8, { name: d }, c)) : (n[a] = c);
                }
                var u = !(!r || !r.shadow),
                    h = i ? b(e8, { useFragment: !u }, n) : n;
                return !u && i && (t.innerHTML = ""), b(i || t.nodeName.toLowerCase(), o, h);
            })(this, this._vdomComponent, e),
        )),
        (this.hasAttribute("hydrate")
            ? function e(t, i) {
                  H(t, i, e);
              }
            : H)(this._vdom, this._root);
}
function e6(e) {
    return e.replace(/-(\w)/g, function (e, t) {
        return t ? t.toUpperCase() : "";
    });
}
function e5(e, t, i) {
    if (this._vdom) {
        var r = {};
        (r[e] = i ??= void 0), (r[e6(e)] = i), (this._vdom = V(this._vdom, r)), H(this._vdom, this._root);
    }
}
function e4() {
    H((this._vdom = null), this._root);
}
function e8(e, t) {
    var i = this,
        r = e.useFragment,
        n = eX(e, e1);
    return b(
        r ? S : "slot",
        eQ({}, n, {
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
var e9,
    e7 = {};
function te(e, t, i) {
    if (3 === e.nodeType) {
        var r = "textContent" in e ? e.textContent : e.nodeValue || "";
        if (!1 !== te.options.trim) {
            var n = 0 === t || t === i.length - 1;
            if (
                (!(r =
                    r.match(/^[\s\n]+$/g) && "all" !== te.options.trim
                        ? " "
                        : r.replace(/(^[\s\n]+|[\s\n]+$)/g, "all" === te.options.trim || n ? "" : " ")) ||
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
    if ("script" === o && !te.options.allowScripts) return null;
    var a,
        s,
        l = te.h(
            o,
            (function (e) {
                var t = e && e.length;
                if (!t) return null;
                for (var i = {}, r = 0; r < t; r++) {
                    var n = e[r],
                        o = n.name,
                        a = n.value;
                    "on" === o.substring(0, 2) && te.options.allowEvents && (a = Function(a)), (i[o] = a);
                }
                return i;
            })(e.attributes),
            (s = (a = e.childNodes) && Array.prototype.map.call(a, te).filter(ti)) && s.length ? s : null,
        );
    return te.visitor && te.visitor(l), l;
}
var tt,
    ti = function (e) {
        return e;
    },
    tr = {};
function tn(e) {
    var t = (e.type || "").toLowerCase(),
        i = tn.map;
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
var to = (function (e) {
    function t() {
        e.apply(this, arguments);
    }
    return (
        e && (t.__proto__ = e),
        ((t.prototype = Object.create(e && e.prototype)).constructor = t),
        (t.setReviver = function (e) {
            tt = e;
        }),
        (t.prototype.shouldComponentUpdate = function (e) {
            var t = this.props;
            return e.wrap !== t.wrap || e.type !== t.type || e.markup !== t.markup;
        }),
        (t.prototype.setComponents = function (e) {
            if (((this.map = {}), e)) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        var i = t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g, "$1$3-$2$4").toLowerCase();
                        this.map[i] = e[t];
                    }
            }
        }),
        (t.prototype.render = function (e) {
            var t = e.wrap;
            void 0 === t && (t = !0);
            var i,
                r = e.type,
                n = e.markup,
                o = e.components,
                a = e.reviver,
                s = e.onError,
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
                h = a || this.reviver || this.constructor.prototype.reviver || tt || b;
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
                                ((i = e9 ||=
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
                            var a = i.getElementsByTagName(o)[0],
                                s = a.firstChild;
                            return (
                                e && !s && (a.error = "Document parse failed."),
                                s &&
                                    "parsererror" === String(s.nodeName).toLowerCase() &&
                                    (s.removeChild(s.firstChild),
                                    s.removeChild(s.lastChild),
                                    (a.error = s.textContent || s.nodeValue || r || "Unknown error"),
                                    a.removeChild(s)),
                                a
                            );
                        }
                    })(e, t);
                    if (o && o.error) throw Error(o.error);
                    var a = (o && o.body) || o;
                    tn.map = r || tr;
                    var s = a && ((te.visitor = tn), (te.h = i), (te.options = n || e7), te(a));
                    return (tn.map = null), (s && s.props && s.props.children) || null;
                })(n, r, h, this.map, { allowScripts: l, allowEvents: c, trim: d });
            } catch (e) {
                s ? s({ error: e }) : "u" > typeof console && console.error && console.error("preact-markup: " + e);
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
        }),
        t
    );
})(E);
