let n, i;
r.d(t, { default: () => nE });
var o,
    l,
    a,
    s,
    d,
    c,
    u,
    p,
    h,
    m = r(850171),
    v = r(555256),
    g = {},
    f = [],
    _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    b = Array.isArray;
function y(e, t) {
    for (var r in t) e[r] = t[r];
    return e;
}
function x(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function k(e, t, r) {
    var n,
        i,
        o,
        a = {};
    for (o in t) "key" == o ? (n = t[o]) : "ref" == o ? (i = t[o]) : (a[o] = t[o]);
    if (
        (arguments.length > 2 && (a.children = arguments.length > 3 ? l.call(arguments, 2) : r),
        "function" == typeof e && null != e.defaultProps)
    )
        for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o]);
    return w(e, a, n, i, null);
}
function w(e, t, r, n, i) {
    var o = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: i ?? ++s,
        __i: -1,
        __u: 0,
    };
    return null == i && null != a.vnode && a.vnode(o), o;
}
function C() {
    return { current: null };
}
function S(e) {
    return e.children;
}
function E(e, t) {
    (this.props = e), (this.context = t);
}
function j(e, t) {
    if (null == t) return e.__ ? j(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++) if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
    return "function" == typeof e.type ? j(e) : null;
}
function T(e) {
    ((!e.__d && (e.__d = !0) && d.push(e) && !I.__r++) || c !== a.debounceRendering) &&
        ((c = a.debounceRendering) || u)(I);
}
function I() {
    var e, t, r, n, i, o, l, s, c;
    for (d.sort(p); (e = d.shift()); )
        e.__d &&
            ((t = d.length),
            (n = void 0),
            (o = (i = (r = e).__v).__e),
            (s = []),
            (c = []),
            (l = r.__P) &&
                (((n = y({}, i)).__v = i.__v + 1),
                a.vnode && a.vnode(n),
                D(
                    l,
                    n,
                    i,
                    r.__n,
                    void 0 !== l.ownerSVGElement,
                    32 & i.__u ? [o] : null,
                    s,
                    o ?? j(i),
                    !!(32 & i.__u),
                    c,
                ),
                (n.__.__k[n.__i] = n),
                U(s, n, c),
                n.__e != o &&
                    (function e(t) {
                        var r, n;
                        if (null != (t = t.__) && null != t.__c) {
                            for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
                                if (null != (n = t.__k[r]) && null != n.__e) {
                                    t.__e = t.__c.base = n.__e;
                                    break;
                                }
                            return e(t);
                        }
                    })(n)),
            d.length > t && d.sort(p));
    I.__r = 0;
}
function P(e, t, r, n, i, o, l, a, s, d, c) {
    var u,
        p,
        h,
        m,
        v,
        _ = (n && n.__k) || f,
        y = t.length;
    for (
        r.__d = s,
            (function (e, t, r) {
                var n,
                    i,
                    o,
                    l,
                    a,
                    s = t.length,
                    d = r.length,
                    c = d,
                    u = 0;
                for (e.__k = [], n = 0; n < s; n++)
                    null !=
                    (i = e.__k[n] =
                        null == (i = t[n]) || "boolean" == typeof i || "function" == typeof i
                            ? null
                            : "string" == typeof i ||
                                "number" == typeof i ||
                                "bigint" == typeof i ||
                                i.constructor == String
                              ? w(null, i, null, null, i)
                              : b(i)
                                ? w(S, { children: i }, null, null, null)
                                : void 0 === i.constructor && i.__b > 0
                                  ? w(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                                  : i)
                        ? ((i.__ = e),
                          (i.__b = e.__b + 1),
                          (a = (function (e, t, r, n) {
                              var i = e.key,
                                  o = e.type,
                                  l = r - 1,
                                  a = r + 1,
                                  s = t[r];
                              if (null === s || (s && i == s.key && o === s.type)) return r;
                              if (n > (null == s || 131072 & s.__u ? 0 : 1))
                                  for (; l >= 0 || a < t.length; ) {
                                      if (l >= 0) {
                                          if ((s = t[l]) && !(131072 & s.__u) && i == s.key && o === s.type) return l;
                                          l--;
                                      }
                                      if (a < t.length) {
                                          if ((s = t[a]) && !(131072 & s.__u) && i == s.key && o === s.type) return a;
                                          a++;
                                      }
                                  }
                              return -1;
                          })(i, r, (l = n + u), c)),
                          (i.__i = a),
                          (o = null),
                          -1 !== a && (c--, (o = r[a]) && (o.__u |= 131072)),
                          null == o || null === o.__v
                              ? (-1 == a && u--, "function" != typeof i.type && (i.__u |= 65536))
                              : a !== l &&
                                (a === l + 1
                                    ? u++
                                    : a > l
                                      ? c > s - l
                                          ? (u += a - l)
                                          : u--
                                      : (u = a < l && a == l - 1 ? a - l : 0),
                                a !== n + u && (i.__u |= 65536)))
                        : (o = r[n]) &&
                          null == o.key &&
                          o.__e &&
                          (o.__e == e.__d && (e.__d = j(o)), q(o, o, !1), (r[n] = null), c--);
                if (c)
                    for (n = 0; n < d; n++)
                        null == (o = r[n]) || 131072 & o.__u || (o.__e == e.__d && (e.__d = j(o)), q(o, o));
            })(r, t, _),
            s = r.__d,
            u = 0;
        u < y;
        u++
    )
        null != (h = r.__k[u]) &&
            "boolean" != typeof h &&
            "function" != typeof h &&
            ((p = -1 === h.__i ? g : _[h.__i] || g),
            (h.__i = u),
            D(e, h, p, i, o, l, a, s, d, c),
            (m = h.__e),
            h.ref && p.ref != h.ref && (p.ref && B(p.ref, null, h), c.push(h.ref, h.__c || m, h)),
            null == v && null != m && (v = m),
            65536 & h.__u || p.__k === h.__k
                ? (s = (function e(t, r, n) {
                      var i, o;
                      if ("function" == typeof t.type) {
                          for (i = t.__k, o = 0; i && o < i.length; o++) i[o] && ((i[o].__ = t), (r = e(i[o], r, n)));
                          return r;
                      }
                      return t.__e != r && (n.insertBefore(t.__e, r || null), (r = t.__e)), r && r.nextSibling;
                  })(h, s, e))
                : "function" == typeof h.type && void 0 !== h.__d
                  ? (s = h.__d)
                  : m && (s = m.nextSibling),
            (h.__d = void 0),
            (h.__u &= -196609));
    (r.__d = s), (r.__e = v);
}
function N(e, t) {
    return (
        (t = t || []),
        null == e ||
            "boolean" == typeof e ||
            (b(e)
                ? e.some(function (e) {
                      N(e, t);
                  })
                : t.push(e)),
        t
    );
}
function M(e, t, r) {
    "-" === t[0]
        ? e.setProperty(t, r ?? "")
        : (e[t] = null == r ? "" : "number" != typeof r || _.test(t) ? r : r + "px");
}
function L(e, t, r, n, i) {
    var o;
    e: if ("style" === t)
        if ("string" == typeof r) e.style.cssText = r;
        else {
            if (("string" == typeof n && (e.style.cssText = n = ""), n))
                for (t in n) (r && t in r) || M(e.style, t, "");
            if (r) for (t in r) (n && r[t] === n[t]) || M(e.style, t, r[t]);
        }
    else if ("o" === t[0] && "n" === t[1])
        (o = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1"))),
            (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + o] = r),
            r
                ? n
                    ? (r.u = n.u)
                    : ((r.u = Date.now()), e.addEventListener(t, o ? H : R, o))
                : e.removeEventListener(t, o ? H : R, o);
    else {
        if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (
            "width" !== t &&
            "height" !== t &&
            "href" !== t &&
            "list" !== t &&
            "form" !== t &&
            "tabIndex" !== t &&
            "download" !== t &&
            "rowSpan" !== t &&
            "colSpan" !== t &&
            "role" !== t &&
            t in e
        )
            try {
                e[t] = r ?? "";
                break e;
            } catch {}
        "function" == typeof r ||
            (null == r || (!1 === r && "-" !== t[4]) ? e.removeAttribute(t) : e.setAttribute(t, r));
    }
}
function R(e) {
    var t = this.l[e.type + !1];
    if (e.t) {
        if (e.t <= t.u) return;
    } else e.t = Date.now();
    return t(a.event ? a.event(e) : e);
}
function H(e) {
    return this.l[e.type + !0](a.event ? a.event(e) : e);
}
function D(e, t, r, n, i, o, s, d, c, u) {
    var p,
        h,
        m,
        v,
        f,
        _,
        k,
        w,
        C,
        T,
        I,
        N,
        M,
        R,
        H,
        D = t.type;
    if (void 0 !== t.constructor) return null;
    128 & r.__u && ((c = !!(32 & r.__u)), (o = [(d = t.__e = r.__e)])), (p = a.__b) && p(t);
    e: if ("function" == typeof D)
        try {
            if (
                ((w = t.props),
                (C = (p = D.contextType) && n[p.__c]),
                (T = p ? (C ? C.props.value : p.__) : n),
                r.__c
                    ? (k = (h = t.__c = r.__c).__ = h.__E)
                    : ("prototype" in D && D.prototype.render
                          ? (t.__c = h = new D(w, T))
                          : ((t.__c = h = new E(w, T)), (h.constructor = D), (h.render = O)),
                      C && C.sub(h),
                      (h.props = w),
                      h.state || (h.state = {}),
                      (h.context = T),
                      (h.__n = n),
                      (m = h.__d = !0),
                      (h.__h = []),
                      (h._sb = [])),
                null == h.__s && (h.__s = h.state),
                null != D.getDerivedStateFromProps &&
                    (h.__s == h.state && (h.__s = y({}, h.__s)), y(h.__s, D.getDerivedStateFromProps(w, h.__s))),
                (v = h.props),
                (f = h.state),
                (h.__v = t),
                m)
            )
                null == D.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(),
                    null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
                if (
                    (null == D.getDerivedStateFromProps &&
                        w !== v &&
                        null != h.componentWillReceiveProps &&
                        h.componentWillReceiveProps(w, T),
                    !h.__e &&
                        ((null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(w, h.__s, T)) ||
                            t.__v === r.__v))
                ) {
                    for (
                        t.__v !== r.__v && ((h.props = w), (h.state = h.__s), (h.__d = !1)),
                            t.__e = r.__e,
                            t.__k = r.__k,
                            t.__k.forEach(function (e) {
                                e && (e.__ = t);
                            }),
                            I = 0;
                        I < h._sb.length;
                        I++
                    )
                        h.__h.push(h._sb[I]);
                    (h._sb = []), h.__h.length && s.push(h);
                    break e;
                }
                null != h.componentWillUpdate && h.componentWillUpdate(w, h.__s, T),
                    null != h.componentDidUpdate &&
                        h.__h.push(function () {
                            h.componentDidUpdate(v, f, _);
                        });
            }
            if (
                ((h.context = T),
                (h.props = w),
                (h.__P = e),
                (h.__e = !1),
                (N = a.__r),
                (M = 0),
                "prototype" in D && D.prototype.render)
            ) {
                for (
                    h.state = h.__s, h.__d = !1, N && N(t), p = h.render(h.props, h.state, h.context), R = 0;
                    R < h._sb.length;
                    R++
                )
                    h.__h.push(h._sb[R]);
                h._sb = [];
            } else
                do (h.__d = !1), N && N(t), (p = h.render(h.props, h.state, h.context)), (h.state = h.__s);
                while (h.__d && ++M < 25);
            (h.state = h.__s),
                null != h.getChildContext && (n = y(y({}, n), h.getChildContext())),
                m || null == h.getSnapshotBeforeUpdate || (_ = h.getSnapshotBeforeUpdate(v, f)),
                P(
                    e,
                    b((H = null != p && p.type === S && null == p.key ? p.props.children : p)) ? H : [H],
                    t,
                    r,
                    n,
                    i,
                    o,
                    s,
                    d,
                    c,
                    u,
                ),
                (h.base = t.__e),
                (t.__u &= -161),
                h.__h.length && s.push(h),
                k && (h.__E = h.__ = null);
        } catch (e) {
            (t.__v = null),
                c || null != o
                    ? ((t.__e = d), (t.__u |= c ? 160 : 32), (o[o.indexOf(d)] = null))
                    : ((t.__e = r.__e), (t.__k = r.__k)),
                a.__e(e, t, r);
        }
    else
        null == o && t.__v === r.__v
            ? ((t.__k = r.__k), (t.__e = r.__e))
            : (t.__e = (function (e, t, r, n, i, o, a, s, d) {
                  var c,
                      u,
                      p,
                      h,
                      m,
                      v,
                      f,
                      _ = r.props,
                      y = t.props,
                      k = t.type;
                  if (("svg" === k && (i = !0), null != o)) {
                      for (c = 0; c < o.length; c++)
                          if ((m = o[c]) && "setAttribute" in m == !!k && (k ? m.localName === k : 3 === m.nodeType)) {
                              (e = m), (o[c] = null);
                              break;
                          }
                  }
                  if (null == e) {
                      if (null === k) return document.createTextNode(y);
                      (e = i
                          ? document.createElementNS("http://www.w3.org/2000/svg", k)
                          : document.createElement(k, y.is && y)),
                          (o = null),
                          (s = !1);
                  }
                  if (null === k) _ === y || (s && e.data === y) || (e.data = y);
                  else {
                      if (((o = o && l.call(e.childNodes)), (_ = r.props || g), !s && null != o))
                          for (_ = {}, c = 0; c < e.attributes.length; c++) _[(m = e.attributes[c]).name] = m.value;
                      for (c in _)
                          (m = _[c]),
                              "children" == c ||
                                  ("dangerouslySetInnerHTML" == c
                                      ? (p = m)
                                      : "key" === c || c in y || L(e, c, null, m, i));
                      for (c in y)
                          (m = y[c]),
                              "children" == c
                                  ? (h = m)
                                  : "dangerouslySetInnerHTML" == c
                                    ? (u = m)
                                    : "value" == c
                                      ? (v = m)
                                      : "checked" == c
                                        ? (f = m)
                                        : "key" === c ||
                                          (s && "function" != typeof m) ||
                                          _[c] === m ||
                                          L(e, c, m, _[c], i);
                      if (u)
                          s || (p && (u.__html === p.__html || u.__html === e.innerHTML)) || (e.innerHTML = u.__html),
                              (t.__k = []);
                      else if (
                          (p && (e.innerHTML = ""),
                          P(
                              e,
                              b(h) ? h : [h],
                              t,
                              r,
                              n,
                              i && "foreignObject" !== k,
                              o,
                              a,
                              o ? o[0] : r.__k && j(r, 0),
                              s,
                              d,
                          ),
                          null != o)
                      )
                          for (c = o.length; c--; ) null != o[c] && x(o[c]);
                      s ||
                          ((c = "value"),
                          void 0 === v ||
                              (v === e[c] && ("progress" !== k || v) && ("option" !== k || v === _[c])) ||
                              L(e, c, v, _[c], !1),
                          (c = "checked"),
                          void 0 !== f && f !== e[c] && L(e, c, f, _[c], !1));
                  }
                  return e;
              })(r.__e, t, r, n, i, o, s, c, u));
    (p = a.diffed) && p(t);
}
function U(e, t, r) {
    t.__d = void 0;
    for (var n = 0; n < r.length; n++) B(r[n], r[++n], r[++n]);
    a.__c && a.__c(t, e),
        e.some(function (t) {
            try {
                (e = t.__h),
                    (t.__h = []),
                    e.some(function (e) {
                        e.call(t);
                    });
            } catch (e) {
                a.__e(e, t.__v);
            }
        });
}
function B(e, t, r) {
    try {
        "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
        a.__e(e, r);
    }
}
function q(e, t, r) {
    var n, i;
    if (
        (a.unmount && a.unmount(e),
        (n = e.ref) && ((n.current && n.current !== e.__e) || B(n, null, t)),
        null != (n = e.__c))
    ) {
        if (n.componentWillUnmount)
            try {
                n.componentWillUnmount();
            } catch (e) {
                a.__e(e, t);
            }
        (n.base = n.__P = null), (e.__c = void 0);
    }
    if ((n = e.__k)) for (i = 0; i < n.length; i++) n[i] && q(n[i], t, r || "function" != typeof e.type);
    r || null == e.__e || x(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function O(e, t, r) {
    return this.constructor(e, r);
}
function V(e, t, r) {
    var n, i, o, s;
    a.__ && a.__(e, t),
        (i = (n = "function" == typeof r) ? null : (r && r.__k) || t.__k),
        (o = []),
        (s = []),
        D(
            t,
            (e = ((!n && r) || t).__k = k(S, null, [e])),
            i || g,
            g,
            void 0 !== t.ownerSVGElement,
            !n && r ? [r] : i ? null : t.firstChild ? l.call(t.childNodes) : null,
            o,
            !n && r ? r : i ? i.__e : t.firstChild,
            n,
            s,
        ),
        U(o, e, s);
}
function A(e, t, r) {
    var n,
        i,
        o,
        a,
        s = y({}, e.props);
    for (o in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
        "key" == o ? (n = t[o]) : "ref" == o ? (i = t[o]) : (s[o] = void 0 === t[o] && void 0 !== a ? a[o] : t[o]);
    return (
        arguments.length > 2 && (s.children = arguments.length > 3 ? l.call(arguments, 2) : r),
        w(e.type, s, n || e.key, i || e.ref, null)
    );
}
function z(e, t) {
    var r = {
        __c: (t = "__cC" + h++),
        __: e,
        Consumer: function (e, t) {
            return e.children(t);
        },
        Provider: function (e) {
            var r, n;
            return (
                this.getChildContext ||
                    ((r = []),
                    ((n = {})[t] = this),
                    (this.getChildContext = function () {
                        return n;
                    }),
                    (this.shouldComponentUpdate = function (e) {
                        this.props.value !== e.value &&
                            r.some(function (e) {
                                (e.__e = !0), T(e);
                            });
                    }),
                    (this.sub = function (e) {
                        r.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                            r.splice(r.indexOf(e), 1), t && t.call(e);
                        };
                    })),
                e.children
            );
        },
    };
    return (r.Provider.__ = r.Consumer.contextType = r);
}
(l = f.slice),
    (a = {
        __e: function (e, t, r, n) {
            for (var i, o, l; (t = t.__); )
                if ((i = t.__c) && !i.__)
                    try {
                        if (
                            ((o = i.constructor) &&
                                null != o.getDerivedStateFromError &&
                                (i.setState(o.getDerivedStateFromError(e)), (l = i.__d)),
                            null != i.componentDidCatch && (i.componentDidCatch(e, n || {}), (l = i.__d)),
                            l)
                        )
                            return (i.__E = i);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
    }),
    (s = 0),
    (E.prototype.setState = function (e, t) {
        var r;
        (r = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = y({}, this.state))),
            "function" == typeof e && (e = e(y({}, r), this.props)),
            e && y(r, e),
            null != e && this.__v && (t && this._sb.push(t), T(this));
    }),
    (E.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), T(this));
    }),
    (E.prototype.render = S),
    (d = []),
    (u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (p = function (e, t) {
        return e.__v.__b - t.__v.__b;
    }),
    (I.__r = 0),
    (h = 0);
var $ = 0;
function F(e, t, r, n, i, o) {
    var l,
        s,
        d = {};
    for (s in t) "ref" == s ? (l = t[s]) : (d[s] = t[s]);
    var c = {
        type: e,
        props: d,
        key: r,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --$,
        __i: -1,
        __u: 0,
        __source: i,
        __self: o,
    };
    if ("function" == typeof e && (l = e.defaultProps)) for (s in l) void 0 === d[s] && (d[s] = l[s]);
    return a.vnode && a.vnode(c), c;
}
var W,
    Z,
    G,
    K,
    Q = 0,
    J = [],
    Y = [],
    X = a.__b,
    ee = a.__r,
    et = a.diffed,
    er = a.__c,
    en = a.unmount;
function ei(e, t) {
    a.__h && a.__h(Z, e, Q || t), (Q = 0);
    var r =
        Z.__H ||
        (Z.__H = {
            __: [],
            __h: [],
        });
    return e >= r.__.length && r.__.push({ __V: Y }), r.__[e];
}
function eo(e) {
    return (Q = 1), el(ex, e);
}
function el(e, t, r) {
    var n = ei(W++, 2);
    if (
        ((n.t = e),
        !n.__c &&
            ((n.__ = [
                r ? r(t) : ex(void 0, t),
                function (e) {
                    var t = n.__N ? n.__N[0] : n.__[0],
                        r = n.t(t, e);
                    t !== r && ((n.__N = [r, n.__[1]]), n.__c.setState({}));
                },
            ]),
            (n.__c = Z),
            !Z.u))
    ) {
        var i = function (e, t, r) {
            if (!n.__c.__H) return !0;
            var i = n.__c.__H.__.filter(function (e) {
                return e.__c;
            });
            if (
                i.every(function (e) {
                    return !e.__N;
                })
            )
                return !o || o.call(this, e, t, r);
            var l = !1;
            return (
                i.forEach(function (e) {
                    if (e.__N) {
                        var t = e.__[0];
                        (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (l = !0);
                    }
                }),
                !(!l && n.__c.props === e) && (!o || o.call(this, e, t, r))
            );
        };
        Z.u = !0;
        var o = Z.shouldComponentUpdate,
            l = Z.componentWillUpdate;
        (Z.componentWillUpdate = function (e, t, r) {
            if (this.__e) {
                var n = o;
                (o = void 0), i(e, t, r), (o = n);
            }
            l && l.call(this, e, t, r);
        }),
            (Z.shouldComponentUpdate = i);
    }
    return n.__N || n.__;
}
function ea(e, t) {
    var r = ei(W++, 3);
    !a.__s && ey(r.__H, t) && ((r.__ = e), (r.i = t), Z.__H.__h.push(r));
}
function es(e, t) {
    var r = ei(W++, 4);
    !a.__s && ey(r.__H, t) && ((r.__ = e), (r.i = t), Z.__h.push(r));
}
function ed(e) {
    return (
        (Q = 5),
        eu(function () {
            return { current: e };
        }, [])
    );
}
function ec(e, t, r) {
    (Q = 6),
        es(
            function () {
                return "function" == typeof e
                    ? (e(t()),
                      function () {
                          return e(null);
                      })
                    : e
                      ? ((e.current = t()),
                        function () {
                            return (e.current = null);
                        })
                      : void 0;
            },
            null == r ? r : r.concat(e),
        );
}
function eu(e, t) {
    var r = ei(W++, 7);
    return ey(r.__H, t) ? ((r.__V = e()), (r.i = t), (r.__h = e), r.__V) : r.__;
}
function ep(e, t) {
    return (
        (Q = 8),
        eu(function () {
            return e;
        }, t)
    );
}
function eh(e) {
    var t = Z.context[e.__c],
        r = ei(W++, 9);
    return (r.c = e), t ? (null == r.__ && ((r.__ = !0), t.sub(Z)), t.props.value) : e.__;
}
function em(e, t) {
    a.useDebugValue && a.useDebugValue(t ? t(e) : e);
}
function ev() {
    var e = ei(W++, 11);
    if (!e.__) {
        for (var t = Z.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++;
    }
    return e.__;
}
function eg() {
    for (var e; (e = J.shift()); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(e_), e.__H.__h.forEach(eb), (e.__H.__h = []);
            } catch (t) {
                (e.__H.__h = []), a.__e(t, e.__v);
            }
}
(a.__b = function (e) {
    (Z = null), X && X(e);
}),
    (a.__r = function (e) {
        ee && ee(e), (W = 0);
        var t = (Z = e.__c).__H;
        t &&
            (G === Z
                ? ((t.__h = []),
                  (Z.__h = []),
                  t.__.forEach(function (e) {
                      e.__N && (e.__ = e.__N), (e.__V = Y), (e.__N = e.i = void 0);
                  }))
                : (t.__h.forEach(e_), t.__h.forEach(eb), (t.__h = []), (W = 0))),
            (G = Z);
    }),
    (a.diffed = function (e) {
        et && et(e);
        var t = e.__c;
        t &&
            t.__H &&
            (t.__H.__h.length &&
                ((1 !== J.push(t) && K === a.requestAnimationFrame) ||
                    (
                        (K = a.requestAnimationFrame) ||
                        function (e) {
                            var t,
                                r = function () {
                                    clearTimeout(n), ef && cancelAnimationFrame(t), setTimeout(e);
                                },
                                n = setTimeout(r, 100);
                            ef && (t = requestAnimationFrame(r));
                        }
                    )(eg)),
            t.__H.__.forEach(function (e) {
                e.i && (e.__H = e.i), e.__V !== Y && (e.__ = e.__V), (e.i = void 0), (e.__V = Y);
            })),
            (G = Z = null);
    }),
    (a.__c = function (e, t) {
        t.some(function (e) {
            try {
                e.__h.forEach(e_),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || eb(e);
                    }));
            } catch (r) {
                t.some(function (e) {
                    e.__h && (e.__h = []);
                }),
                    (t = []),
                    a.__e(r, e.__v);
            }
        }),
            er && er(e, t);
    }),
    (a.unmount = function (e) {
        en && en(e);
        var t,
            r = e.__c;
        r &&
            r.__H &&
            (r.__H.__.forEach(function (e) {
                try {
                    e_(e);
                } catch (e) {
                    t = e;
                }
            }),
            (r.__H = void 0),
            t && a.__e(t, r.__v));
    });
var ef = "function" == typeof requestAnimationFrame;
function e_(e) {
    var t = Z,
        r = e.__c;
    "function" == typeof r && ((e.__c = void 0), r()), (Z = t);
}
function eb(e) {
    var t = Z;
    (e.__c = e.__()), (Z = t);
}
function ey(e, t) {
    return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, r) {
            return t !== e[r];
        })
    );
}
function ex(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function ek(e, t) {
    for (var r in t) e[r] = t[r];
    return e;
}
function ew(e, t) {
    for (var r in e) if ("__source" !== r && !(r in t)) return !0;
    for (var n in t) if ("__source" !== n && e[n] !== t[n]) return !0;
    return !1;
}
function eC(e) {
    this.props = e;
}
function eS(e, t) {
    function r(e) {
        var r = this.props.ref,
            n = r == e.ref;
        return !n && r && (r.call ? r(null) : (r.current = null)), t ? !t(this.props, e) || !n : ew(this.props, e);
    }
    function n(t) {
        return (this.shouldComponentUpdate = r), k(e, t);
    }
    return (
        (n.displayName = "Memo(" + (e.displayName || e.name) + ")"),
        (n.prototype.isReactComponent = !0),
        (n.__f = !0),
        n
    );
}
((eC.prototype = new E()).isPureReactComponent = !0),
    (eC.prototype.shouldComponentUpdate = function (e, t) {
        return ew(this.props, e) || ew(this.state, t);
    });
var eE = a.__b;
a.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), eE && eE(e);
};
var ej = ("u" > typeof Symbol && Symbol.for && Symbol.for("react.forward_ref")) || 3911;
function eT(e) {
    function t(t) {
        var r = ek({}, t);
        return delete r.ref, e(r, t.ref || null);
    }
    return (
        (t.$$typeof = ej),
        (t.render = t),
        (t.prototype.isReactComponent = t.__f = !0),
        (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
        t
    );
}
var eI = function (e, t) {
        return null == e ? null : N(N(e).map(t));
    },
    eP = {
        map: eI,
        forEach: eI,
        count: function (e) {
            return e ? N(e).length : 0;
        },
        only: function (e) {
            var t = N(e);
            if (1 !== t.length) throw "Children.only";
            return t[0];
        },
        toArray: N,
    },
    eN = a.__e;
a.__e = function (e, t, r, n) {
    if (e.then) {
        for (var i, o = t; (o = o.__); )
            if ((i = o.__c) && i.__c) return null == t.__e && ((t.__e = r.__e), (t.__k = r.__k)), i.__c(e, t);
    }
    eN(e, t, r, n);
};
var eM = a.unmount;
function eL() {
    (this.__u = 0), (this.t = null), (this.__b = null);
}
function eR(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
}
function eH(e) {
    var t, r, n;
    function i(i) {
        if (
            (t ||
                (t = e()).then(
                    function (e) {
                        r = e.default || e;
                    },
                    function (e) {
                        n = e;
                    },
                ),
            n)
        )
            throw n;
        if (!r) throw t;
        return k(r, i);
    }
    return (i.displayName = "Lazy"), (i.__f = !0), i;
}
function eD() {
    (this.u = null), (this.o = null);
}
(a.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), eM && eM(e);
}),
    ((eL.prototype = new E()).__c = function (e, t) {
        var r = t.__c,
            n = this;
        null == n.t && (n.t = []), n.t.push(r);
        var i = eR(n.__v),
            o = !1,
            l = function () {
                o || ((o = !0), (r.__R = null), i ? i(a) : a());
            };
        r.__R = l;
        var a = function () {
            if (!--n.__u) {
                if (n.state.__a) {
                    var e,
                        t = n.state.__a;
                    n.__v.__k[0] = (function e(t, r, n) {
                        return (
                            t &&
                                n &&
                                ((t.__v = null),
                                (t.__k =
                                    t.__k &&
                                    t.__k.map(function (t) {
                                        return e(t, r, n);
                                    })),
                                t.__c &&
                                    t.__c.__P === r &&
                                    (t.__e && n.appendChild(t.__e), (t.__c.__e = !0), (t.__c.__P = n))),
                            t
                        );
                    })(t, t.__c.__P, t.__c.__O);
                }
                for (n.setState({ __a: (n.__b = null) }); (e = n.t.pop()); ) e.forceUpdate();
            }
        };
        n.__u++ || 32 & t.__u || n.setState({ __a: (n.__b = n.__v.__k[0]) }), e.then(l, l);
    }),
    (eL.prototype.componentWillUnmount = function () {
        this.t = [];
    }),
    (eL.prototype.render = function (e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var r = document.createElement("div"),
                    n = this.__v.__k[0].__c;
                this.__v.__k[0] = (function e(t, r, n) {
                    return (
                        t &&
                            (t.__c &&
                                t.__c.__H &&
                                (t.__c.__H.__.forEach(function (e) {
                                    "function" == typeof e.__c && e.__c();
                                }),
                                (t.__c.__H = null)),
                            null != (t = ek({}, t)).__c && (t.__c.__P === n && (t.__c.__P = r), (t.__c = null)),
                            (t.__k =
                                t.__k &&
                                t.__k.map(function (t) {
                                    return e(t, r, n);
                                }))),
                        t
                    );
                })(this.__b, r, (n.__O = n.__P));
            }
            this.__b = null;
        }
        var i = t.__a && k(S, null, e.fallback);
        return i && (i.__u &= -33), [k(S, null, t.__a ? null : e.children), i];
    });
var eU = function (e, t, r) {
    if ((++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)))
        for (r = e.u; r; ) {
            for (; r.length > 3; ) r.pop()();
            if (r[1] < r[0]) break;
            e.u = r = r[2];
        }
};
function eB(e) {
    return (
        (this.getChildContext = function () {
            return e.context;
        }),
        e.children
    );
}
function eq(e) {
    var t = this,
        r = e.i;
    (t.componentWillUnmount = function () {
        V(null, t.l), (t.l = null), (t.i = null);
    }),
        t.i && t.i !== r && t.componentWillUnmount(),
        t.l ||
            ((t.i = r),
            (t.l = {
                nodeType: 1,
                parentNode: r,
                childNodes: [],
                appendChild: function (e) {
                    this.childNodes.push(e), t.i.appendChild(e);
                },
                insertBefore: function (e, r) {
                    this.childNodes.push(e), t.i.appendChild(e);
                },
                removeChild: function (e) {
                    this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e);
                },
            })),
        V(k(eB, { context: t.context }, e.__v), t.l);
}
function eO(e, t) {
    var r = k(eq, {
        __v: e,
        i: t,
    });
    return (r.containerInfo = t), r;
}
((eD.prototype = new E()).__a = function (e) {
    var t = this,
        r = eR(t.__v),
        n = t.o.get(e);
    return (
        n[0]++,
        function (i) {
            var o = function () {
                t.props.revealOrder ? (n.push(i), eU(t, e, n)) : i();
            };
            r ? r(o) : o();
        }
    );
}),
    (eD.prototype.render = function (e) {
        (this.u = null), (this.o = new Map());
        var t = N(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var r = t.length; r--; ) this.o.set(t[r], (this.u = [1, 0, this.u]));
        return e.children;
    }),
    (eD.prototype.componentDidUpdate = eD.prototype.componentDidMount =
        function () {
            var e = this;
            this.o.forEach(function (t, r) {
                eU(e, r, t);
            });
        });
var eV = ("u" > typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
    eA =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    ez = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    e$ = /[A-Z0-9]/g,
    eF = "u" > typeof document;
function eW(e, t, r) {
    return null == t.__k && (t.textContent = ""), V(e, t), "function" == typeof r && r(), e ? e.__c : null;
}
function eZ(e, t, r) {
    return (
        (function e(t, r) {
            V(t, r, e);
        })(e, t),
        "function" == typeof r && r(),
        e ? e.__c : null
    );
}
(E.prototype.isReactComponent = {}),
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
        Object.defineProperty(E.prototype, e, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + e];
            },
            set: function (t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t,
                });
            },
        });
    });
var eG = a.event;
function eK() {}
function eQ() {
    return this.cancelBubble;
}
function eJ() {
    return this.defaultPrevented;
}
a.event = function (e) {
    return (
        eG && (e = eG(e)),
        (e.persist = eK),
        (e.isPropagationStopped = eQ),
        (e.isDefaultPrevented = eJ),
        (e.nativeEvent = e)
    );
};
var eY,
    eX = {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this.class;
        },
    },
    e1 = a.vnode;
a.vnode = function (e) {
    "string" == typeof e.type &&
        (function (e) {
            var t = e.props,
                r = e.type,
                n = {};
            for (var i in t) {
                var o = t[i];
                if (
                    !(
                        ("value" === i && "defaultValue" in t && null == o) ||
                        (eF && "children" === i && "noscript" === r) ||
                        "class" === i ||
                        "className" === i
                    )
                ) {
                    var l,
                        a = i.toLowerCase();
                    "defaultValue" === i && "value" in t && null == t.value
                        ? (i = "value")
                        : "download" === i && !0 === o
                          ? (o = "")
                          : "ondoubleclick" === a
                            ? (i = "ondblclick")
                            : "onchange" !== a ||
                                ("input" !== r && "textarea" !== r) ||
                                ((l = t.type),
                                ("u" > typeof Symbol && "symbol" == typeof Symbol()
                                    ? /fil|che|rad/
                                    : /fil|che|ra/
                                ).test(l))
                              ? "onfocus" === a
                                  ? (i = "onfocusin")
                                  : "onblur" === a
                                    ? (i = "onfocusout")
                                    : ez.test(i)
                                      ? (i = a)
                                      : -1 === r.indexOf("-") && eA.test(i)
                                        ? (i = i.replace(e$, "-$&").toLowerCase())
                                        : null === o && (o = void 0)
                              : (a = i = "oninput"),
                        "oninput" === a && n[(i = a)] && (i = "oninputCapture"),
                        (n[i] = o);
                }
            }
            "select" == r &&
                n.multiple &&
                Array.isArray(n.value) &&
                (n.value = N(t.children).forEach(function (e) {
                    e.props.selected = -1 != n.value.indexOf(e.props.value);
                })),
                "select" == r &&
                    null != n.defaultValue &&
                    (n.value = N(t.children).forEach(function (e) {
                        e.props.selected = n.multiple
                            ? -1 != n.defaultValue.indexOf(e.props.value)
                            : n.defaultValue == e.props.value;
                    })),
                t.class && !t.className
                    ? ((n.class = t.class), Object.defineProperty(n, "className", eX))
                    : ((t.className && !t.class) || (t.class && t.className)) && (n.class = n.className = t.className),
                (e.props = n);
        })(e),
        (e.$$typeof = eV),
        e1 && e1(e);
};
var e0 = a.__r;
a.__r = function (e) {
    e0 && e0(e), (eY = e.__c);
};
var e3 = a.diffed;
a.diffed = function (e) {
    e3 && e3(e);
    var t = e.props,
        r = e.__e;
    null != r &&
        "textarea" === e.type &&
        "value" in t &&
        t.value !== r.value &&
        (r.value = null == t.value ? "" : t.value),
        (eY = null);
};
var e5 = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function (e) {
                return eY.__n[e.__c].props.value;
            },
        },
    },
};
function e2(e) {
    return k.bind(null, e);
}
function e4(e) {
    return !!e && e.$$typeof === eV;
}
function e6(e) {
    return e4(e) && e.type === S;
}
function e8(e) {
    return e4(e) ? A.apply(null, arguments) : e;
}
function e9(e) {
    return !!e.__k && (V(null, e), !0);
}
function e7(e) {
    return (e && (e.base || (1 === e.nodeType && e))) || null;
}
var te = function (e, t) {
        return e(t);
    },
    tt = function (e, t) {
        return e(t);
    };
function tr(e) {
    e();
}
function tn(e) {
    return e;
}
function ti() {
    return [!1, tr];
}
function to(e, t) {
    var r = t(),
        n = eo({
            h: {
                __: r,
                v: t,
            },
        }),
        i = n[0].h,
        o = n[1];
    return (
        es(
            function () {
                (i.__ = r), (i.v = t), tl(i) && o({ h: i });
            },
            [e, r, t],
        ),
        ea(
            function () {
                return (
                    tl(i) && o({ h: i }),
                    e(function () {
                        tl(i) && o({ h: i });
                    })
                );
            },
            [e],
        ),
        r
    );
}
function tl(e) {
    var t = e.v,
        r = e.__;
    try {
        var n = t();
        return (r !== n || (0 === r && 1 / r != 1 / n)) && (r == r || n == n);
    } catch {
        return !0;
    }
}
let ta = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                Children: eP,
                Component: E,
                Fragment: S,
                PureComponent: eC,
                StrictMode: S,
                Suspense: eL,
                SuspenseList: eD,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: e5,
                cloneElement: e8,
                createContext: z,
                createElement: k,
                createFactory: e2,
                createPortal: eO,
                createRef: C,
                default: {
                    useState: eo,
                    useId: ev,
                    useReducer: el,
                    useEffect: ea,
                    useLayoutEffect: es,
                    useInsertionEffect: es,
                    useTransition: ti,
                    useDeferredValue: tn,
                    useSyncExternalStore: to,
                    startTransition: tr,
                    useRef: ed,
                    useImperativeHandle: ec,
                    useMemo: eu,
                    useCallback: ep,
                    useContext: eh,
                    useDebugValue: em,
                    version: "17.0.2",
                    Children: eP,
                    render: eW,
                    hydrate: eZ,
                    unmountComponentAtNode: e9,
                    createPortal: eO,
                    createElement: k,
                    createContext: z,
                    createFactory: e2,
                    cloneElement: e8,
                    createRef: C,
                    Fragment: S,
                    isValidElement: e4,
                    isElement: e4,
                    isFragment: e6,
                    findDOMNode: e7,
                    Component: E,
                    PureComponent: eC,
                    memo: eS,
                    forwardRef: eT,
                    flushSync: tt,
                    unstable_batchedUpdates: te,
                    StrictMode: S,
                    Suspense: eL,
                    SuspenseList: eD,
                    lazy: eH,
                    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: e5,
                },
                findDOMNode: e7,
                flushSync: tt,
                forwardRef: eT,
                hydrate: eZ,
                isElement: e4,
                isFragment: e6,
                isValidElement: e4,
                lazy: eH,
                memo: eS,
                render: eW,
                startTransition: tr,
                unmountComponentAtNode: e9,
                unstable_batchedUpdates: te,
                useCallback: ep,
                useContext: eh,
                useDebugValue: em,
                useDeferredValue: tn,
                useEffect: ea,
                useErrorBoundary: function (e) {
                    var t = ei(W++, 10),
                        r = eo();
                    return (
                        (t.__ = e),
                        Z.componentDidCatch ||
                            (Z.componentDidCatch = function (e, n) {
                                t.__ && t.__(e, n), r[1](e);
                            }),
                        [
                            r[0],
                            function () {
                                r[1](void 0);
                            },
                        ]
                    );
                },
                useId: ev,
                useImperativeHandle: ec,
                useInsertionEffect: es,
                useLayoutEffect: es,
                useMemo: eu,
                useReducer: el,
                useRef: ed,
                useState: eo,
                useSyncExternalStore: to,
                useTransition: ti,
                version: "17.0.2",
            },
            Symbol.toStringTag,
            { value: "Module" },
        ),
    ),
    ts = (e) => {
        let t,
            r = new Set(),
            n = (e, n) => {
                let i = "function" == typeof e ? e(t) : e;
                if (!Object.is(i, t)) {
                    let e = t;
                    (t = (n ?? "object" != typeof i) ? i : Object.assign({}, t, i)), r.forEach((r) => r(t, e));
                }
            },
            i = () => t,
            o = {
                setState: n,
                getState: i,
                subscribe: (e) => (r.add(e), () => r.delete(e)),
                destroy: () => r.clear(),
            };
        return (t = e(n, i, o)), o;
    };
var td = { exports: {} },
    tc = {};
let tu = (function (e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if ("function" == typeof t) {
        var r = function e() {
            return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
        };
        r.prototype = t.prototype;
    } else r = {};
    return (
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.keys(e).forEach(function (t) {
            var n = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(
                r,
                t,
                n.get
                    ? n
                    : {
                          enumerable: !0,
                          get: function () {
                              return e[t];
                          },
                      },
            );
        }),
        r
    );
})(ta);
var tp,
    th,
    tm,
    tv,
    tg = { exports: {} },
    tf = {};
let { useSyncExternalStoreWithSelector: t_ } = (tv ||
        ((tv = 1),
        (td.exports = (function () {
            if (tm) return tc;
            tm = 1;
            var e =
                    (th ||
                        ((th = 1),
                        (tg.exports = (function () {
                            if (tp) return tf;
                            tp = 1;
                            var e =
                                    "function" == typeof Object.is
                                        ? Object.is
                                        : function (e, t) {
                                              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                                          },
                                t = tu.useState,
                                r = tu.useEffect,
                                n = tu.useLayoutEffect,
                                i = tu.useDebugValue;
                            function o(t) {
                                var r = t.getSnapshot;
                                t = t.value;
                                try {
                                    var n = r();
                                    return !e(t, n);
                                } catch {
                                    return !0;
                                }
                            }
                            var l =
                                typeof window > "u" ||
                                void 0 === window.document ||
                                void 0 === window.document.createElement
                                    ? function (e, t) {
                                          return t();
                                      }
                                    : function (e, l) {
                                          var a = l(),
                                              s = t({
                                                  inst: {
                                                      value: a,
                                                      getSnapshot: l,
                                                  },
                                              }),
                                              d = s[0].inst,
                                              c = s[1];
                                          return (
                                              n(
                                                  function () {
                                                      (d.value = a), (d.getSnapshot = l), o(d) && c({ inst: d });
                                                  },
                                                  [e, a, l],
                                              ),
                                              r(
                                                  function () {
                                                      return (
                                                          o(d) && c({ inst: d }),
                                                          e(function () {
                                                              o(d) && c({ inst: d });
                                                          })
                                                      );
                                                  },
                                                  [e],
                                              ),
                                              i(a),
                                              a
                                          );
                                      };
                            return (
                                (tf.useSyncExternalStore =
                                    void 0 !== tu.useSyncExternalStore ? tu.useSyncExternalStore : l),
                                tf
                            );
                        })())),
                    tg.exports),
                t =
                    "function" == typeof Object.is
                        ? Object.is
                        : function (e, t) {
                              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                          },
                r = e.useSyncExternalStore,
                n = tu.useRef,
                i = tu.useEffect,
                o = tu.useMemo,
                l = tu.useDebugValue;
            return (
                (tc.useSyncExternalStoreWithSelector = function (e, a, s, d, c) {
                    var u = n(null);
                    if (null === u.current) {
                        var p = {
                            hasValue: !1,
                            value: null,
                        };
                        u.current = p;
                    } else p = u.current;
                    var h = r(
                        e,
                        (u = o(
                            function () {
                                function e(e) {
                                    if (!i) {
                                        if (((i = !0), (r = e), (e = d(e)), void 0 !== c && p.hasValue)) {
                                            var o = p.value;
                                            if (c(o, e)) return (n = o);
                                        }
                                        return (n = e);
                                    }
                                    if (((o = n), t(r, e))) return o;
                                    var l = d(e);
                                    return void 0 !== c && c(o, l) ? o : ((r = e), (n = l));
                                }
                                var r,
                                    n,
                                    i = !1,
                                    o = void 0 === s ? null : s;
                                return [
                                    function () {
                                        return e(a());
                                    },
                                    null === o
                                        ? void 0
                                        : function () {
                                              return e(o());
                                          },
                                ];
                            },
                            [a, s, d, c],
                        ))[0],
                        u[1],
                    );
                    return (
                        i(
                            function () {
                                (p.hasValue = !0), (p.value = h);
                            },
                            [h],
                        ),
                        l(h),
                        h
                    );
                }),
                tc
            );
        })())),
    (o = td.exports) && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default"))
        ? o.default
        : o,
    tb = (e) => {
        let t = "function" == typeof e ? (e ? ts(e) : ts) : e,
            r = (e, r) =>
                (function (e, t = e.getState, r) {
                    let n = t_(e.subscribe, e.getState, e.getServerState || e.getState, t, r);
                    return em(n), n;
                })(t, e, r);
        return Object.assign(r, t), r;
    },
    ty = (e) => (e ? tb(e) : tb),
    tx = {
        eq: (e, t) => e == t,
        neq(e, t) {
            return !this.eq(e, t);
        },
        gt: (e, t) => e > t,
        gte: (e, t) => e >= t,
        lt: (e, t) => e < t,
        lte: (e, t) => e <= t,
        list_exact: (e, t) =>
            !(!Array.isArray(e) || !Array.isArray(t)) && e.slice().sort().join(",") === t.slice().sort().join(","),
        list_all: (e, t) => !(!Array.isArray(e) || !Array.isArray(t)) && !t.some((t) => -1 === e.indexOf(t)),
        list_alo(e, t) {
            if (!Array.isArray(t)) return !1;
            let r = new Set(Array.isArray(e) ? e : [e]);
            return t.some((e) => r.has(e));
        },
        list_dni(e, t) {
            if (!Array.isArray(t)) return !1;
            let r = new Set(Array.isArray(e) ? e : [e]);
            return t.every((e) => !r.has(e));
        },
        contains(e, t) {
            let r = e.toLowerCase(),
                n = t.toLowerCase();
            return r.includes(n);
        },
        notcontains(e, t) {
            return !this.contains(e, t);
        },
    },
    tk = (e, t, r) => {
        switch (t) {
            case "videovoice":
                return !!(e && e.value);
            case "open":
                return !!r;
            case "multipleselect":
                return !!(r && Object.keys(r).length);
            case "recordedtask":
                return (null == r ? void 0 : r.taskStatus) === "completed";
            case "texturlprompt":
                return !e.value;
            case "consentlegal":
            case "nps":
            case "likert":
                return null !== r;
            case "multiplechoice":
                return void 0 !== r;
            case "matrix":
                return !!(r && Object.values(r).every((e) => null !== e));
            default:
                return !0;
        }
    },
    tw = (e, t) => {
        if ("matrix" === t) {
            let t = Object.keys(e).length,
                r = Object.values(e).filter((e) => null !== e).length;
            return r > 0 && r < t;
        }
        return !1;
    },
    tC = ({ cards: e, index: t, hasEndCard: r, allResponses: n, uploadProgress: i = {} }) => {
        let o;
        if (t >= e.length || t < 0) return null;
        let l = e[t],
            a = t + 1,
            s = l.props.routingOptions || [];
        for (let t = 0; t < s.length; t++) {
            let { group: i, target: o } = s[t];
            if (!(null != i && i.length)) continue;
            let d = i[0];
            if (void 0 === d.questionIndex || d.questionIndex > n.length) continue;
            let c = tS({
                comparator: d.comparator,
                response: n[d.questionIndex],
                type: l.type,
                value: d.value,
            });
            for (let t = 1; t < i.length; t += 2) {
                let r = i[t],
                    o = i[t + 1],
                    l = tS({
                        comparator: o.comparator,
                        response: n[o.questionIndex],
                        type: e[o.questionIndex].type,
                        value: o.value,
                    });
                1 === r ? c && (c = l) : 2 === r && (c || (c = l));
            }
            if (c) {
                a = -1 === o && r ? e.length - 1 : o;
                break;
            }
        }
        let d = e.findIndex((e) => "uploading" === e.type);
        return t >= (o = d > 0 ? (r ? e.length - 3 : e.length - 2) : e.length - 1) || -1 === a || (null !== a && a > o)
            ? d > 0 && Object.values(i).some((e) => e.isSubmitted && !e.isComplete)
                ? d
                : r
                  ? e.length - 1
                  : null
            : -1 === a
              ? null
              : a;
    },
    tS = ({ comparator: e, response: t, type: r, value: n }) => {
        if ("answered" === e)
            switch (r) {
                case "texturlprompt":
                    return void 0 === t;
                case "consentlegal":
                    return t && !0 === t.submitted;
                case "recordedtask":
                    return "taskStatus" in t && "completed" === t.taskStatus;
                case "likert":
                case "nps":
                    return Number.isInteger(t);
                case "matrix":
                    return Object.values(t).every((e) => null !== e);
                case "multiplechoice":
                    return void 0 !== t;
                case "multipleselect":
                    return (null == t ? void 0 : t.length) > 0;
                case "open":
                    return t && t.length > 0;
                case "videovoice":
                    return !!(null != t && t.mediaRecordingUid);
                default:
                    return !1;
            }
        if ("given_up" === e) return "recordedtask" !== r || ("taskStatus" in t && "given.up" === t.taskStatus);
        if ("partial" === e) return "matrix" === r && tw(t, r);
        if ("skipped" === e)
            switch (r) {
                case "texturlprompt":
                    return null == t ? void 0 : t.skipped;
                case "consentlegal":
                case "likert":
                case "nps":
                case "videovoice":
                    return null === t;
                case "recordedtask":
                    return "taskStatus" in t && "abandoned" === t.taskStatus;
                case "open":
                case "multipleselect":
                    return (null == t ? void 0 : t.length) === 0;
                case "multiplechoice":
                    return void 0 === t;
                case "matrix":
                    return Object.values(t).every((e) => null === e);
                default:
                    return !1;
            }
        return tx[e](t, n);
    },
    tE = (e) => {
        var t, r, n, i, o;
        switch (e.type) {
            case "multipleselect":
                return e && e.props && e.props.options
                    ? e.props.options.length > 13
                        ? e.props.options.map((e) => [e.value])
                        : ((t = e.props.options.map((e) => e.value)),
                          (r = !e.props.properties.required),
                          t.reduce((e, t) => e.concat(e.map((e) => [...e, t])), [[]]).filter((e) => r || e.length > 0))
                    : null;
            case "multiplechoice": {
                if (!e || !e.props || !e.props.options) return null;
                let t = e.props.options.map((e) => e.value);
                return e.props.properties.required || t.push(void 0), t;
            }
            case "matrix": {
                if (!(null != (n = null == e ? void 0 : e.props) && n.options)) return null;
                let t = e.props.properties.matrixColumn,
                    r = e.props.options,
                    i = r.reduce((e, t) => ((e[t.id] = null), e), {}),
                    o = [
                        {
                            ...i,
                            [r[0].id]: t[0].value,
                        },
                        r.reduce((e, r) => ((e[r.id] = t[0].value), e), {}),
                    ];
                return e.props.properties.required || o.push(i), o;
            }
            case "likert":
                return [
                    ...Array.from(
                        Array(
                            Number(null == (o = null == (i = e.props) ? void 0 : i.properties) ? void 0 : o.range) || 5,
                        ).keys(),
                    ).map((e) => e + 1),
                    ...(e.props.properties.required ? [] : [null]),
                ];
            case "nps":
                return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...(e.props.properties.required ? [] : [null])];
            case "videovoice":
            case "open":
                return ["1", ...(e.props.properties.required ? [] : [""])];
            case "recordedtask": {
                let t = [{ taskStatus: "completed" }, { taskStatus: "given.up" }];
                return e.props.properties.required || t.push({ taskStatus: "abandoned" }), t;
            }
            case "texturlprompt":
                return [void 0, ...(e.props.properties.required ? [] : [{ skipped: !0 }])];
            case "consentlegal":
                return [1, ...(e.props.properties.required ? [] : [null])];
            default:
                return [1];
        }
    },
    tj = (e) => e in tx,
    tT = (e) => "object" == typeof e && null !== e && "taskStatus" in e,
    tI = (e, t = []) =>
        t.reduce((t, r) => {
            let { group: n, target: i } = r;
            return null != n && n.length
                ? [
                      ...t,
                      ...n
                          .filter((t) => !!Number(t) || ("object" == typeof t && t.questionIndex === e))
                          .map((e) => {
                              let { comparator: t, value: r } = e;
                              return {
                                  comparator: t,
                                  target: i,
                                  value: r,
                              };
                          }),
                  ]
                : [...t];
        }, []),
    tP = new Set(["thanks", "uploading"]),
    tN = ty()((e, t) => ({
        allResponses: [],
        answers: void 0,
        apiURL: "",
        border: "#000000",
        cards: [],
        close: async (e = m.A) => {
            let r = t(),
                { fadeout: n, remove: i, trackHistory: o, studyType: l } = r;
            await n(e),
                tM(r) || o({ event: "closed" }),
                v.b.info("SurveyClosing", { surveyId: r.surveyId }),
                m.C.enable(),
                i({
                    initiator: v.D.Closed,
                    studyType: l,
                });
        },
        configureExitOnOverlayClick: () => {},
        customMetadata: {},
        destroy: async (e) => {
            let { eventEmitFn: r, fadeout: n, remove: i, studyType: o, surveyId: l } = t();
            r("survey.complete", l),
                await n(e),
                m.C.enable(),
                i({
                    initiator: v.D.Complete,
                    studyType: o,
                });
        },
        endCard: { headline: "" },
        envId: "",
        eventEmitFn: v.e.emit.bind(v.e),
        fadeout: async (e) => {
            let { eventEmitFn: r, headers: n, viewDocument: i } = t();
            return (0, v.h)(n)
                ? Promise.resolve()
                : (r(v.S.SurveyFadingOut),
                  new Promise((t) => {
                      let r = i.getElementById(e);
                      r
                          ? (r.addEventListener("transitionend", () => {
                                t();
                            }),
                            r.classList.remove("ul-app--visible"))
                          : t();
                  }));
        },
        forceBrandedLogo: !1,
        frame: document.createElement("iframe"),
        handleClickEmbedButton: (r) => {
            let { cards: n, eventEmitFn: i, index: o } = t();
            i(r, {
                qid: n[o].name,
                props: n[o].props,
            }),
                e(() => ({ hasViewedEmbed: !0 }));
        },
        handleUploadUpdate: ({ mediaRecordingUid: r, isComplete: n, progressPct: i, isSubmitted: o }) => {
            var l, a, s;
            let { cards: d, destroy: c, index: u, uploadProgress: p } = t(),
                h = n || (null == (l = p[r]) ? void 0 : l.isComplete);
            if (
                (e({
                    uploadProgress: {
                        ...p,
                        [r]: {
                            progressPct: h ? 100 : i || (null == (a = p[r]) ? void 0 : a.progressPct),
                            isComplete: h,
                            isSubmitted: o || (null == (s = p[r]) ? void 0 : s.isSubmitted),
                        },
                    },
                }),
                "uploading" !== d[u].type)
            )
                return;
            let v = Object.entries(p).every(([e, t]) => !t.isSubmitted || t.isComplete || (r == e && n));
            if (v && u >= d.length - 1) return c(m.A);
            e({
                index: v ? u + 1 : u,
                uploadingCardViewed: !0,
            });
        },
        hasViewedEmbed: !1,
        headers: {
            Authorization: "",
            "Content-Type": "",
            "userleap-platform": "web",
            "x-ul-environment-id": "",
            "x-ul-installation-method": "web-snippet",
            "x-ul-sdk-version": "",
            "x-ul-visitor-id": "",
        },
        index: 0,
        isPreview: !1,
        marketingUrl: "https://sprig.com",
        meta: {
            ch: 0,
            cw: 0,
            l: "",
            mode: null,
            p: "",
            sh: 0,
            sw: 0,
        },
        mode: void 0,
        next: (r) => {
            let {
                allResponses: n,
                cards: i,
                eventEmitFn: o,
                index: l,
                responseGroupUid: a,
                submit: s,
                trackHistory: d,
                uploadProgress: c,
                viewedCardCount: u,
            } = t();
            e({ minScrollableHeight: void 0 });
            let p = Date.now(),
                h = [...i],
                m = h[l],
                { type: v } = r.data,
                g = { ...r.data },
                f = g.value;
            tP.has(m.type) || (m.value = f), (g.answeredAt = p), delete g.type;
            let _ = {
                    response: g,
                    responseGroupUid: a,
                    questionIndex: l,
                },
                b = "multiplechoice" === v ? Object.values(f).find((e) => !1 !== e) : f;
            "multipleselect" === v && (b = h[l].props.options.reduce((e, t) => (f[t.id] && e.push(t.value), e), []));
            let y = n.slice(0);
            (y[l] = b), e({ allResponses: y });
            let x = tC({
                cards: h,
                index: l,
                hasEndCard: !!r.endCard,
                uploadProgress: c,
                allResponses: y,
            });
            if (null === x) return (_.completedAt = p), s(_), void r.completeSurvey();
            tP.has(h[x].type) && (_.completedAt = p);
            let k = s(_);
            tP.has(h[x].type) ||
                k.finally(() => {
                    d({
                        event: "seen",
                        index: x,
                    });
                });
            let w = h[x];
            h[x] &&
                o &&
                o("survey.question", {
                    qid: w.name,
                    props: w.props,
                }),
                e({
                    cards: h,
                    hasViewedEmbed: !1,
                    index: x,
                    viewedCardCount: u + 1,
                });
        },
        pendingRemoveIframeReason: null,
        previewKey: null,
        previewMode: void 0,
        recorder: () => {},
        recorderEventEmitter: v.e,
        resolveTrackedPromise: () => {
            let { removeIframeIfReady: r } = t();
            e((e) => ({ unresolvedRequestCount: e.unresolvedRequestCount - 1 })), r();
        },
        responseGroupUid: "",
        remove: ({ initiator: r, studyType: n }) => {
            let { eventEmitFn: i, removeIframeIfReady: o, surveyId: l } = t();
            e({
                pendingRemoveIframeReason: r,
                studyType: n,
            }),
                i(v.S.SurveyCloseRequested, {
                    name: v.S.SurveyCloseRequested,
                    initiator: r,
                    studyType: n,
                    "survey.id": l,
                }),
                o();
        },
        removeIframeIfReady: () => {
            let {
                eventEmitFn: r,
                pendingRemoveIframeReason: n,
                unresolvedRequestCount: i,
                studyType: o,
                surveyId: l,
            } = t();
            n &&
                0 === i &&
                (r(v.S.SurveyWillClose, {
                    name: v.S.SurveyWillClose,
                    initiator: n,
                    studyType: o,
                    "survey.id": l,
                }),
                e({
                    pendingRemoveIframeReason: null,
                    studyType: o,
                }));
        },
        seen: async () => {
            let { trackHistory: e } = t();
            return e({
                event: "seen",
                isNew: !0,
            });
        },
        slugName: null,
        showStripes: !1,
        showSurveyBrand: !1,
        styleNonce: "",
        submit: async ({ completedAt: e, questionIndex: r, response: n, responseGroupUid: i }) => {
            let o = t();
            if (!i || tM(o)) return;
            let l = {
                    responseGroupUid: i,
                    meta: o.meta,
                    customMetadata: o.customMetadata,
                    responses: [n],
                    completedAt: e,
                    previewKey: o.previewKey,
                },
                a = await o.trackPromise(
                    (0, v.s)(`${o.apiURL}/sdk/1/environments/${o.envId}/visitors/${o.userId}/responses/submit`, {
                        body: JSON.stringify(l),
                        headers: o.headers,
                        method: "POST",
                    }),
                );
            a.ok
                ? o.eventEmitFn(v.S.QuestionAnswered, {
                      ...n,
                      questionIndex: r,
                      "survey.id": o.surveyId,
                  })
                : a.reportError &&
                  (console.warn("[Sprig] (ERR-427) Failed to submit response", a.error),
                  await o.trackPromise(tL(o, "submitResponse", a.error)));
        },
        surveyId: 0,
        tabTitle: "",
        trackHistory: async ({ event: e, index: r, isNew: n = !1 }) => {
            let i = t();
            if (tM(i)) return;
            let { cards: o, index: l } = i,
                a = void 0 !== r ? o[r] : o[l],
                s = {
                    sid: i.surveyId,
                    qid: a.name,
                    action: e,
                    vid: i.userId,
                    eid: i.envId,
                    isNew: n,
                    responseGroupUid: i.responseGroupUid,
                    previewKey: i.previewKey,
                },
                d = await i.trackPromise(
                    (0, v.s)(`${i.apiURL}/sdk/1/visitors/${i.userId}/surveys/${i.surveyId}/history`, {
                        body: JSON.stringify(s),
                        headers: i.headers,
                        method: "POST",
                    }),
                );
            !d.ok &&
                d.reportError &&
                (console.warn("[Sprig] (ERR-428) Failed to track survey event", d.error),
                await i.trackPromise(tL(i, "trackHistory", d.error)));
        },
        trackPromise: async (r) => {
            let { resolveTrackedPromise: n } = t();
            return (
                e((e) => ({ unresolvedRequestCount: e.unresolvedRequestCount + 1 })),
                r
                    .then((e) => (n(), e))
                    .catch((e) => {
                        throw (n(), e);
                    })
            );
        },
        unresolvedRequestCount: 0,
        update: () => {
            let {
                    cards: r,
                    index: n,
                    headers: i,
                    eventEmitFn: o,
                    frame: l,
                    useMobileStyling: a,
                    surveyId: s,
                    viewDocument: d,
                } = t(),
                c = "web" === i["userleap-platform"],
                u = (0, v.h)(i),
                p = r[n],
                h = "matrix" === p.type && !(p.props.properties.displayMatrixAsAccordion || a);
            e({ minScrollableHeight: void 0 }),
                setTimeout(() => {
                    var t, r, n;
                    u || a || null == (t = null == l ? void 0 : l.setWidth) || t.call(l, m.D);
                    let [i, p, g] = (0, m.a)(d, c && !a, u);
                    u
                        ? (o(v.S.SurveyHeight, {
                              name: v.S.SurveyHeight,
                              contentFrameHeight: i,
                              "survey.id": s,
                          }),
                          o(v.S.SurveyWidth, {
                              name: v.S.SurveyWidth,
                              contentFrameWidth: p,
                              "survey.id": s,
                          }))
                        : (null == (r = l.setHeight) || r.call(l, i),
                          e({ minScrollableHeight: g }),
                          !a && h && (null == (n = l.setWidth) || n.call(l, p)));
                }, 100);
        },
        uploadingCardViewed: !1,
        uploadProgress: {},
        useDesktopPrototype: void 0,
        useMobileStyling: !1,
        userId: "",
        viewDocument: window.document,
        viewedCardCount: 0,
    })),
    tM = (e) => !e.userId || (e.meta && "test" === e.meta.mode) || e.isPreview || e.previewMode,
    tL = async (e, t, r) => {
        let { mode: n, userId: i, envId: o, apiURL: l, headers: a, viewDocument: s } = e,
            d = s.documentElement,
            c = {
                mode: n,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                clientWidth: d.clientWidth,
                clientHeight: d.clientHeight,
                location: window.location.href,
                language: window.navigator.language,
            },
            u = {
                action: t,
                err: {
                    message: `${null == r ? void 0 : r.name} - ${null == r ? void 0 : r.message}`,
                    stack: null == r ? void 0 : r.stack,
                },
                meta: c,
                vid: i,
                envId: o,
            };
        (
            await (0, v.s)(`${l}/sdk/1/errors`, {
                method: "POST",
                headers: Object.assign({ "x-ul-error": window.btoa(`userleap-${Date.now()}-error`) }, a),
                body: JSON.stringify(u),
            })
        ).ok || console.warn("[Sprig] (ERR-444) Failed to report error to API", r);
    },
    tR = (e) =>
        k(
            "svg",
            {
                fill: "none",
                height: 24,
                viewBox: "0 0 24 24",
                width: 24,
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
            },
            k("path", {
                d: "M17 10L12 15L7 10",
                stroke: "#0B2330",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
            }),
        ),
    tH = (e) =>
        k(
            "svg",
            {
                fill: "none",
                height: 10,
                viewBox: "0 0 10 10",
                width: 10,
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
            },
            k("path", {
                d: "M9.15377 1.30774L4.07685 8.23082L1.30762 5.00005",
                stroke: "white",
                strokeLinecap: "round",
                strokeWidth: 2,
            }),
        ),
    tD = ({ visible: e }) =>
        F("div", {
            className: "sprig-check-background",
            style: { opacity: +!!e },
            children: F(tH, { className: "sprig-check" }),
        }),
    tU = "250ms",
    tB = eT(({ animate: e, children: t, header: r, isOpen: n, onClick: i, showHeaderCheck: o }, l) => {
        let a = ed(null),
            [s, d] = eo(0),
            [c, u] = eo("none"),
            [p, h] = eo(!0);
        return (
            ea(() => {
                var e;
                let t = null == (e = a.current) ? void 0 : e.getBoundingClientRect();
                d(n && t ? t.height : 0);
            }, [n]),
            ea(() => {
                (s || !n) && p && h(!1), u(e && !p ? `height ${tU} ease` : "none");
            }, [e, p, s, n]),
            F("div", {
                className: "sprig-accordion",
                ref: l,
                children: [
                    F("button", {
                        className: "sprig-accordion-header-container",
                        onClick: i,
                        type: "button",
                        children: [
                            F("div", {
                                className: "sprig-header-label-container",
                                children: [
                                    F("span", {
                                        className: "sprig-header-label",
                                        children: r,
                                    }),
                                    F(tD, { visible: o }),
                                ],
                            }),
                            F(tR, {
                                className: "sprig-caret",
                                style: {
                                    transitionDuration: e ? tU : "0",
                                    transform: n ? "rotate(-180deg)" : "none",
                                },
                            }),
                        ],
                    }),
                    F("div", {
                        className: "sprig-accordion-body",
                        style: {
                            transition: c,
                            height: s,
                        },
                        children: F("div", {
                            ref: a,
                            children: t,
                        }),
                    }),
                ],
            })
        );
    }),
    tq = (...e) => e.filter(Boolean).join(" "),
    tO = (e, t, r) => {
        let n = t ? "--mobile" : "--desktop";
        return `${e + n} ${e + (r ? `${n}_${r}` : "")} ${e}`;
    },
    tV = (e) =>
        F("button", {
            ...e,
            className: tq("ul-card-text__button", e.className),
            id: "ul-card-text__button",
        }),
    tA = () => {
        let { viewDocument: e } = tN((e) => ({ viewDocument: e.viewDocument })),
            [t, r] = eo(!1);
        return (
            ea(() => {
                let t = e.querySelector(".sprig-question-body"),
                    n = new ResizeObserver(() => {
                        window.requestAnimationFrame(() => {
                            r(!!(t && (0, m.i)(t) && t.scrollHeight > t.offsetHeight));
                        });
                    });
                return (
                    t && n.observe(t),
                    () => {
                        t && n.disconnect();
                    }
                );
            }, [e]),
            t
        );
    },
    tz = ({ plainText: e, richText: t, id: r, className: n, isHeader: i }) =>
        t
            ? F("div", {
                  className: n,
                  dangerouslySetInnerHTML: { __html: t },
                  id: r,
              })
            : e
              ? F(i ? "h1" : "p", {
                    className: n,
                    id: r,
                    children: e,
                })
              : null,
    t$ = () => {
        let {
                cards: e,
                close: t,
                endCard: r,
                headers: n,
                index: i,
            } = tN((e) => ({
                cards: e.cards,
                close: e.close,
                endCard: e.endCard,
                headers: e.headers,
                index: e.index,
                useMobileStyling: e.useMobileStyling,
            })),
            o = e.length,
            l = eu(() => () => t(m.A), [t]);
        return ["email", "link"].includes(n["userleap-platform"]) || (r && i + 1 === o)
            ? null
            : F("div", {
                  "aria-label": "Close button",
                  className: "close-btn",
                  onClick: l,
                  onKeyPress: (e) => {
                      "Enter" === e.key && l();
                  },
                  role: "button",
                  tabIndex: 0,
                  children: F("svg", {
                      fill: "none",
                      height: "16px",
                      viewBox: "0 0 13 13",
                      width: "16px",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: F("path", {
                          d: "M2.54964 1.78369L1.78369 2.54964L5.73405 6.5L1.78369 10.4504L2.54964 11.2163L6.5 7.26595L10.4504 11.2163L11.2163 10.4504L7.26595 6.5L11.2163 2.54964L10.4504 1.78369L6.5 5.73405L2.54964 1.78369Z",
                          fill: "#262136",
                      }),
                  }),
              });
    },
    tF = ({ message: e, properties: t }) => {
        let r = ed(null),
            n = null == t ? void 0 : t.captionText;
        return F("div", {
            className: tq("question-header-container", "sprig-header-container", tA() ? "sprig-border-bottom" : null),
            ref: r,
            children: [
                F("div", {
                    className: "question-header-button-container",
                    children: [
                        F(tz, {
                            className: "ul-question",
                            id: "ul-question",
                            isHeader: !0,
                            plainText: e,
                            richText: null == t ? void 0 : t.questionHtml,
                        }),
                        F(t$, {}),
                    ],
                }),
                F(tz, {
                    className: "ul-caption",
                    id: "ul-caption",
                    plainText: n,
                    richText: null == t ? void 0 : t.captionHtml,
                }),
            ],
        });
    },
    tW = ({ buttonText: e = "View Prototype", handleClick: t }) =>
        F(
            "button",
            {
                className: "prototype-button",
                onClick: t,
                children: e,
            },
            "prototype-btn",
        ),
    tZ = ({ defaultBody: e, embeddedType: t = "prototype", properties: r }) => {
        var n;
        let {
                handleClickEmbedButton: i,
                hasViewedEmbed: o,
                headers: l,
                useDesktopPrototype: a,
            } = tN((e) => ({
                handleClickEmbedButton: e.handleClickEmbedButton,
                hasViewedEmbed: e.hasViewedEmbed,
                headers: e.headers,
                useDesktopPrototype: e.useDesktopPrototype,
            })),
            s =
                (null == r ? void 0 : r.conceptUrl) ||
                (null == (n = null == r ? void 0 : r.consentDocument) ? void 0 : n.url),
            d = window.innerWidth < m.E,
            c = l["userleap-platform"],
            u = (e, t) => {
                e.preventDefault(), i(t);
            };
        if (!a && d && !o && s && ["email", "link"].includes(c)) {
            if ("prototype" === t)
                return F(tW, {
                    handleClick: (e) => {
                        u(e, "question.prototype.click");
                    },
                });
            if ("pdf" === t)
                return F(tW, {
                    buttonText: (null == r ? void 0 : r.viewDocumentText) || "View Document",
                    handleClick: (e) => {
                        u(e, "question.agreement.click");
                    },
                });
        }
        return e();
    },
    tG = ({ isSelected: e, id: t, divId: r, themeColor: n }) =>
        F("div", {
            "aria-checked": e,
            "aria-labelledby": `label-${t}`,
            className: "select-checkbox",
            id: r,
            role: "checkbox",
            style: e
                ? {
                      backgroundColor: n,
                      borderColor: n,
                      boxShadow: "none",
                  }
                : {},
            tabIndex: 0,
            children: e && F(tH, {}),
        }),
    tK = (e, t) => {
        let r = ed(0);
        return () => {
            if (e.current) {
                let n = e.current;
                n.style.height = "1px";
                let i = n.scrollHeight + (n.offsetHeight - n.clientHeight),
                    o = parseInt(window.getComputedStyle(n).getPropertyValue("max-height")),
                    l = i <= o ? i : o;
                r.current !== l && t(), (r.current = l), (n.style.height = `${l}px`);
            }
        };
    },
    tQ = ({
        ariaLabel: e,
        border: t,
        choiceStyle: r = {},
        label: n,
        isSelected: i,
        value: o,
        text: l,
        id: a,
        isRadio: s,
        useMobileStyling: d,
        error: c,
        allowTextEntry: u,
        noneOfTheAbove: p,
        promptText: h,
        onUserInputChanged: v,
    }) => {
        let { styleNonce: g, viewDocument: f } = tN((e) => ({
                styleNonce: e.styleNonce,
                viewDocument: e.viewDocument,
            })),
            [_, b] = eo(!1);
        t0(f, t, g);
        let y = ({ isSelected: e, userText: t }) => {
                v &&
                    v({
                        id: a,
                        selected: e,
                        value: o,
                        userText: t,
                        noneOfTheAbove: p,
                    });
            },
            x = (e) => {
                e.stopPropagation(),
                    y({
                        isSelected: s || !i,
                        userText: l,
                    }),
                    b(!1);
            },
            k = () => {
                _ && b(!1);
            },
            w = {
                onClick: (e) => x(e),
                onKeyPress: (e) => {
                    ("Enter" !== e.key && " " !== e.key) || x(e);
                },
            };
        "ontouchstart" in f.documentElement
            ? ((w.onTouchStart = k), (w.onTouchCancel = k), (w.onTouchEnd = k))
            : ((w.onMouseDown = () => {
                  _ || b(!0);
              }),
              (w.onMouseLeave = k));
        let C = s ? `radio-${a}` : `checkbox-${a}`,
            S = i || _ ? [tX] : [],
            E = [...(c ? [t1] : []), ...S],
            j = n ? { "aria-labelledby": `label-${a}` } : { "aria-label": e };
        return F("div", {
            className: tq(tO("choice", d), ...E),
            id: `choice-div-${a}`,
            style: {
                ...r,
                ...(c ? { borderColor: m.b } : {}),
            },
            ...w,
            children: [
                F("div", {
                    className: tq("choice-label-container"),
                    children: [
                        s
                            ? F("div", {
                                  ...j,
                                  className: tq("select-radio", ...S),
                                  id: C,
                                  role: "radio",
                                  tabIndex: 0,
                              })
                            : F(tG, {
                                  divId: C,
                                  id: a,
                                  isSelected: i,
                                  themeColor: t,
                              }),
                        n &&
                            F("label", {
                                className: tq(tO("select-label", d)),
                                htmlFor: C,
                                id: `label-${a}`,
                                children: n,
                            }),
                    ],
                }),
                u &&
                    i &&
                    F("div", {
                        className: tq("choice-text-entry-container", ...S),
                        children: F(tJ, {
                            onTextChange: (e) =>
                                y({
                                    isSelected: i,
                                    userText: e,
                                }),
                            promptText: h || "Please specify",
                            textValue: l,
                            useMobileStyling: d,
                        }),
                    }),
            ],
        });
    },
    tJ = ({ promptText: e, textValue: t, onTextChange: r, useMobileStyling: n }) => {
        let i = ed(null),
            { update: o } = tN((e) => ({ update: e.update })),
            l = tK(i, () => o());
        return (
            ea(
                () => (
                    l(),
                    i.current && i.current.focus(),
                    () => {
                        o();
                    }
                ),
                [],
            ),
            F("textarea", {
                "aria-label": e,
                "aria-multiline": "true",
                "aria-placeholder": e,
                className: tq(tO("choice-text-input", n)),
                "data-gramm": "false",
                maxLength: 5000,
                name: "text",
                onChange: (e) => {
                    l(), e.stopPropagation(), r(e.currentTarget.value);
                },
                onClick: (e) => {
                    e.stopPropagation();
                },
                onKeyPress: (e) => {
                    e.stopPropagation();
                },
                placeholder: e,
                ref: i,
                role: "textbox",
                rows: 1,
                value: t,
            })
        );
    },
    tY = "ul-select-style-element",
    tX = "ul-select-active-dynamic-style",
    t1 = "ul-select-error-dynamic-style",
    t0 = (e, t, r) => {
        let n = e.getElementById(tY),
            i = !1;
        n || ((n = e.createElement("style")), (i = !0)),
            "style" === n.tagName.toLowerCase() &&
                ((n.id = tY), r && (n.nonce = r), (n.textContent = t3(t)), i && e.head.appendChild(n));
    },
    t3 = (e) => `
    .${tX} {
      border-color: ${e};
    }
    .${tX} .select-radio, .${tX}.select-radio {
      border: 6px solid ${e};
      box-shadow: none;
    }
    .${t1} {
      border-color: ${m.b};
    }
  `,
    t5 = ({ children: e }) =>
        F("div", {
            className: "sprig-question-body",
            children: e,
        }),
    t2 = ({ children: e }) =>
        F("div", {
            className: tq("sprig-question-footer-container", tA() ? "sprig-border-top" : null),
            children: e,
        }),
    t4 = (e) => (null == e ? void 0 : e.buttonText) || "Next",
    t6 = (e) => (null == e ? void 0 : e.skipButtonText) || "Skip",
    t8 = ({ className: e, message: t, next: r, properties: n, questionId: i, type: o }) => {
        let { useMobileStyling: l, border: a } = tN((e) => ({
                useMobileStyling: e.useMobileStyling,
                border: e.border,
            })),
            [s, d] = eo(!1),
            [c, u] = eo(""),
            [p, h] = eo(!1),
            v = null == n ? void 0 : n.collectName,
            g = (null == n ? void 0 : n.nameLabelText) || "Full Name",
            f = (null == n ? void 0 : n.consentText) || "I agree to the stated conditions",
            _ = (null == n ? void 0 : n.submitButtonText) || "Submit",
            b = !!c.trim(),
            y = s && (!v || b),
            x = (e, t = !1) => {
                e.preventDefault(), e.stopPropagation();
                let n = null;
                if (!t) {
                    if (!y) return void h(!0);
                    (n = { submitted: !0 }), v && (n.name = c);
                }
                r({
                    value: n,
                    questionId: i,
                    type: o,
                });
            },
            k = (e) => {
                e.preventDefault(), e.stopPropagation(), u(e.currentTarget.value);
            },
            w = (e) => {
                e.currentTarget.style.borderColor = p && !b ? m.b : a;
            },
            C = (e) => {
                e.currentTarget.style.borderColor = p && !b ? m.b : m.d;
            };
        return F(
            "div",
            {
                className: tq(e, "ul-card__consent-legal", "fade-in-transition"),
                children: [
                    F(tF, {
                        message: t,
                        properties: { questionHtml: n.questionHtml },
                    }),
                    F(S, {
                        children: [
                            null != n && n.richTextBody
                                ? F(t5, {
                                      children: F("div", {
                                          className: "ul-rich-text-body",
                                          dangerouslySetInnerHTML:
                                              null != n && n.richTextBody ? { __html: n.richTextBody } : void 0,
                                          id: "ul-card__consent-legal-body-container",
                                      }),
                                  })
                                : null,
                            F(tZ, {
                                properties: n,
                                defaultBody: () =>
                                    F(t2, {
                                        children: [
                                            F("div", {
                                                className: "sprig-stretch",
                                                children: [
                                                    F(tQ, {
                                                        allowTextEntry: !1,
                                                        border: a,
                                                        error: p && !s,
                                                        id: "consent",
                                                        isRadio: !1,
                                                        isSelected: s,
                                                        label: f,
                                                        onUserInputChanged: ({ selected: e }) => {
                                                            e !== s && d(!s);
                                                        },
                                                        useMobileStyling: l,
                                                    }),
                                                    v &&
                                                        F("input", {
                                                            "aria-label": g,
                                                            "aria-placeholder": g,
                                                            className: tq(tO("ul-consent-legal__name-input", l)),
                                                            "data-gramm": "false",
                                                            maxLength: 250,
                                                            name: "name",
                                                            onBlur: C,
                                                            onFocus: w,
                                                            onInput: k,
                                                            placeholder: g,
                                                            style: p && !b ? { borderColor: m.b } : {},
                                                            tabIndex: 0,
                                                            value: c,
                                                        }),
                                                ],
                                            }),
                                            F("div", {
                                                className: "ul-card__button-wrapper ul-card-vertical__button-wrapper",
                                                children: [
                                                    F(tV, {
                                                        className: y ? "" : "sprig-button-disabled",
                                                        onClick: x,
                                                        children: _,
                                                    }),
                                                    !1 === n.required &&
                                                        F("button", {
                                                            className: "ul-card-skip__button",
                                                            onClick: (e) => x(e, !0),
                                                            children: t6(n),
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                embeddedType: "pdf",
                            }),
                        ],
                    }),
                ],
            },
            i,
        );
    },
    t9 = ({
        activeValue: e,
        border: t,
        icon: r,
        isPressed: n,
        onSubmit: i,
        range: o,
        scaleLabelType: l,
        setActiveValue: a,
        setIsPressed: s,
        useMobileStyling: d,
        value: c,
        viewDocument: u,
    }) => {
        let p = `option-${c}`,
            h = "number" === l,
            m = h && c === e,
            [v, g] = (c <= e && "star" === l) || c === e ? (n ? [t, 1] : [t, 0.3]) : ["", 1];
        return F("button", {
            "aria-label": h ? void 0 : String(c),
            className: (() => {
                switch (l) {
                    case "star":
                        return tq(tO("likert-star", d), tO(`likert-star-${c}`, d));
                    case "smiley":
                        return tq(tO("likert-smiley", d), tO(`likert-smiley-${c}`, d));
                    default:
                        return c === o
                            ? tq(tO("likert-number", d), tO(`likert-number-${c}`, d), tO("likert-last-option", d))
                            : tq(tO("likert-number", d), tO(`likert-number-${c}`, d));
                }
            })(),
            dangerouslySetInnerHTML: { __html: r },
            id: p,
            onClick: () => i(),
            onKeyDown: (e) => {
                var t, r;
                let n = u.querySelectorAll(`.likert-${l ?? "number"}`),
                    o = c - 1;
                "ArrowRight" === e.key
                    ? null == (t = n[o + 1]) || t.focus()
                    : "ArrowLeft" === e.key
                      ? null == (r = n[o - 1]) || r.focus()
                      : ("Enter" !== e.key && " " !== e.key) || i();
            },
            onPointerDown: () => s(!0),
            onPointerEnter: () => a(c),
            onPointerLeave: () => {
                a(-1), s(!1);
            },
            style: {
                color: h ? "" : v,
                borderColor: m ? v : "",
                fillOpacity: m ? "" : g,
                zIndex: m ? 3 : "auto",
            },
            tabIndex: 0,
        });
    },
    t7 = ({ className: e, labels: t, message: r, next: n, properties: i, questionId: o, type: l }) => {
        let a,
            {
                border: s,
                useMobileStyling: d,
                viewDocument: c,
            } = tN((e) => ({
                border: e.border,
                useMobileStyling: e.useMobileStyling,
                viewDocument: e.viewDocument,
            })),
            [u, p] = eo(-1),
            [h, m] = eo(!1),
            v = t && t.left,
            g = t && t.right,
            { range: f, scaleLabelType: _, ratingIcons: b } = i;
        f && (a = Number(f));
        let y = a || 5,
            x = [...Array(y)].map((e, t) => {
                let r = t + 1;
                return F(
                    t9,
                    {
                        activeValue: u,
                        border: s,
                        icon: ((e) => {
                            var t, r;
                            switch (_) {
                                case "star":
                                    return null == (t = b[0]) ? void 0 : t.svg;
                                case "smiley":
                                    return null == (r = b[e]) ? void 0 : r.svg;
                                default:
                                    return String(e + 1);
                            }
                        })(t),
                        isPressed: h,
                        onSubmit: () =>
                            n({
                                value: r,
                                questionId: o,
                                type: l,
                            }),
                        range: y,
                        scaleLabelType: _,
                        setActiveValue: p,
                        setIsPressed: m,
                        useMobileStyling: d,
                        value: r,
                        viewDocument: c,
                    },
                    t,
                );
            }),
            k = (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    n({
                        value: null,
                        questionId: o,
                        type: l,
                    });
            };
        return F(
            "form",
            {
                className: tq(e, "ul-card--likert", "fade-in-transition"),
                children: [
                    F(tF, {
                        message: r,
                        properties: i,
                    }),
                    F(tZ, {
                        properties: i,
                        defaultBody: () =>
                            F(S, {
                                children: [
                                    F(t5, {
                                        children: [
                                            F("div", {
                                                "aria-label": `Rating (1 - ${y})`,
                                                className: "ul-card--likert__numbers",
                                                role: "radiogroup",
                                                children: x,
                                            }),
                                            F("div", {
                                                className: "ul-card--likert__labels",
                                                children: [F("span", { children: v }), F("span", { children: g })],
                                            }),
                                        ],
                                    }),
                                    !i.required &&
                                        F(t2, {
                                            children: F("div", {
                                                className: "ul-vertical-centered-container",
                                                children: F(tV, {
                                                    onClick: k,
                                                    children: t4(i),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                    }),
                ],
            },
            o,
        );
    },
    re = (e) => e && (e.scrollHeight > e.offsetHeight ? e : re(e.parentElement)),
    rt = ({ columns: e, onSelect: t, options: r, selectedOptions: n }) => {
        let i = ed([]),
            { border: o, useMobileStyling: l } = tN((e) => ({
                border: e.border,
                useMobileStyling: e.useMobileStyling,
            })),
            [a, s] = eo(r.findIndex((e) => null === n[e.id])),
            d = ep(
                (e, o) => {
                    t(e, o);
                    let l = a + 1,
                        d = r[l];
                    if (d && null === n[d.id]) {
                        s(l);
                        let e = i.current[a];
                        if (null != e && e.firstElementChild) {
                            let t = re(e),
                                r = e.firstElementChild,
                                n =
                                    ((e) => {
                                        if (!e || !(e instanceof HTMLElement)) return 0;
                                        let t = getComputedStyle(e);
                                        return (
                                            parseFloat(t.marginTop) +
                                            parseFloat(t.marginBottom) +
                                            (parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth))
                                        );
                                    })(e) + r.clientHeight;
                            null == t || t.scrollTo(0, e.offsetTop + n);
                        }
                    }
                },
                [t, r, n, a],
            ),
            c = ep(
                (t, r) => {
                    let c = a === t;
                    return F(
                        tB,
                        {
                            animate: !0,
                            header: r.label,
                            isOpen: c,
                            onClick: () => s(c && !window.UserLeap.isMobileSDK ? -1 : t),
                            ref: (e) => {
                                e && (i.current[t] = e);
                            },
                            showHeaderCheck: null !== n[r.id],
                            children: F("div", {
                                style: { paddingTop: "12px" },
                                children: e.map((e) =>
                                    F(
                                        tQ,
                                        {
                                            allowTextEntry: !1,
                                            ariaLabel: `${r.label}-${e.label}`,
                                            border: o,
                                            error: !1,
                                            id: `${r.id}-${e.value}`,
                                            isRadio: !0,
                                            isSelected: n[r.id] === e.value,
                                            label: e.label,
                                            onUserInputChanged: () => d(r.id, e.value),
                                            useMobileStyling: l,
                                        },
                                        e.label,
                                    ),
                                ),
                            }),
                        },
                        r.id,
                    );
                },
                [o, e, a, d, n, l],
            );
        return F("div", { children: r.map((e, t) => c(t, e)) });
    },
    rr = ({ columns: e, onSelect: t, options: r, selectedOptions: n }) => {
        let { border: i, useMobileStyling: o } = tN((e) => ({
                border: e.border,
                useMobileStyling: e.useMobileStyling,
            })),
            l = r.length,
            a = e.length,
            s = ed(null),
            [d, c] = eo(!1);
        return (
            ea(() => {
                let e = s.current,
                    t = new ResizeObserver((t) => {
                        window.requestAnimationFrame(() => {
                            e && c(Math.round(t[0].contentRect.width) < e.scrollWidth);
                        });
                    });
                return (
                    e && t.observe(e),
                    () => {
                        e && t.unobserve(e);
                    }
                );
            }, []),
            F("div", {
                className: "ul-card--matrix_question_container",
                children: [
                    F("div", {
                        className: tq("ul-card--matrix_container", d && "ul-matrix-scroll-gradient"),
                        onScroll: () => {
                            let e = s.current;
                            e && c(e.clientWidth + Math.abs(e.scrollLeft) < e.scrollWidth);
                        },
                        ref: s,
                        children: F("div", {
                            className: "ul-card--matrix_grid",
                            style: `--numColumns: ${a}; --numRows: ${l + 1}`,
                            children: [
                                F("div", {}),
                                " ",
                                e.map((e) =>
                                    F(
                                        "div",
                                        {
                                            className: "ul-matrix-column-label",
                                            children: e.label,
                                        },
                                        e.label,
                                    ),
                                ),
                                r.map((r) =>
                                    F(S, {
                                        children: [
                                            F(
                                                "div",
                                                {
                                                    "aria-label": r.label,
                                                    className: "ul-matrix-row-label",
                                                    children: r.label,
                                                },
                                                r.label,
                                            ),
                                            F("div", {
                                                className: "ul-matrix-row-options",
                                                role: "radiogroup",
                                                children: e.map((e, l) =>
                                                    F(
                                                        "div",
                                                        {
                                                            className: tq(
                                                                "ul-matrix-option-wrapper",
                                                                l === a - 1 && "ul-matrix-last-option",
                                                            ),
                                                            children: F(tQ, {
                                                                allowTextEntry: !1,
                                                                ariaLabel: `${r.label}-${e.label}`,
                                                                border: i,
                                                                choiceStyle: {
                                                                    background: "transparent",
                                                                    border: "none",
                                                                    marginBottom: "0",
                                                                    padding: "0",
                                                                },
                                                                error: !1,
                                                                id: `${r.id}-${e.value}`,
                                                                isRadio: !0,
                                                                isSelected: n[r.id] === e.value,
                                                                onUserInputChanged: () => t(r.id, e.value),
                                                                useMobileStyling: o,
                                                            }),
                                                        },
                                                        e.value,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                ),
                            ],
                        }),
                    }),
                    d &&
                        F("button", {
                            className: "ul-matrix-scroll-arrow",
                            onClick: (e) => {
                                e.preventDefault();
                                let t = s.current;
                                if (t) {
                                    let e = "rtl" === getComputedStyle(t).direction;
                                    t.scrollLeft = e ? t.clientWidth - t.scrollWidth : t.scrollWidth;
                                }
                            },
                            children: F("svg", {
                                fill: "currentColor",
                                height: "32",
                                viewBox: "0 0 256 256",
                                width: "32",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: F("path", {
                                    d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z",
                                }),
                            }),
                        }),
                ],
            })
        );
    },
    rn = ({ className: e, message: t, next: r, options: n, properties: i, questionId: o, type: l }) => {
        let { useMobileStyling: a } = tN((e) => ({ useMobileStyling: e.useMobileStyling })),
            s = i.matrixColumn,
            d = i.required,
            [c, u] = eo(n.reduce((e, t) => ((e[t.id] = null), e), {})),
            p = (e, t) => {
                u((r) => ({
                    ...r,
                    [e]: t,
                }));
            },
            h = d && Object.values(c).every((e) => null == e),
            m = i.displayMatrixAsAccordion || a;
        return F(
            "form",
            {
                className: tq(e, "fade-in-transition", "ul-card__matrix"),
                id: "text-form",
                onSubmit: (e) => {
                    e.preventDefault(),
                        e.stopPropagation(),
                        r({
                            value: c,
                            questionId: o,
                            type: l,
                        });
                },
                children: [
                    F(tF, {
                        message: t,
                        properties: i,
                    }),
                    F(tZ, {
                        properties: i,
                        defaultBody: () =>
                            F(S, {
                                children: [
                                    F(t5, {
                                        children: F(m ? rt : rr, {
                                            columns: s,
                                            onSelect: p,
                                            options: n,
                                            selectedOptions: c,
                                        }),
                                    }),
                                    F(t2, {
                                        children: F("div", {
                                            className: "ul-card__button-wrapper",
                                            children: F(tV, {
                                                disabled: h,
                                                children: t4(i),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                    }),
                ],
            },
            o,
        );
    },
    ri = ({ options: e, selectItem: t, selectedOptions: r, showCheckbox: n }) => {
        let { themeColor: i } = tN((e) => ({
            doc: e.viewDocument,
            themeColor: e.border,
        }));
        return F("div", {
            className: "select-list",
            children: e.map((e) => {
                var o;
                return F(
                    "div",
                    {
                        className: "select-option",
                        onClick: (r) => {
                            t(e), r.stopPropagation();
                        },
                        role: "option",
                        children: [
                            n &&
                                F(tG, {
                                    divId: ((o = e.id), `checkbox-div-${o}`),
                                    id: e.id,
                                    isSelected: r.includes(e),
                                    themeColor: i,
                                }),
                            e.label,
                        ],
                    },
                    e.id,
                );
            }),
        });
    },
    ro = ({
        isMultiSelect: e = !1,
        multiselectText: t = "choices selected",
        onChange: r,
        options: n,
        placeholderText: i,
        value: o,
    }) => {
        let [l, a] = eo(!1),
            { viewDocument: s, update: d } = tN((e) => ({
                viewDocument: e.viewDocument,
                update: e.update,
            })),
            c = () => {
                a(!l), d();
            };
        return (
            ea(() => {
                var e;
                let t = () => {
                    a(!1), d();
                };
                s.addEventListener("click", t);
                try {
                    null == (e = window.parent) || e.addEventListener("click", t);
                } catch {
                    window.addEventListener("click", t);
                }
                return () => {
                    var e;
                    s.removeEventListener("click", t);
                    try {
                        null == (e = window.parent) || e.removeEventListener("click", t);
                    } catch {
                        window.removeEventListener("click", t);
                    }
                };
            }, [s, d]),
            F(S, {
                children: [
                    F("button", {
                        "aria-label": "choice dropdown button",
                        className: tq("select-button", ...(0 === o.length ? ["select-button-placeholder"] : [])),
                        onClick: (e) => {
                            e.stopPropagation(), c();
                        },
                        type: "button",
                        children: [
                            F("span", {
                                children: 0 === o.length ? i : 1 === o.length ? o[0].label : `${o.length} ${t}`,
                            }),
                            F(tR, {}),
                        ],
                    }),
                    l &&
                        F(ri, {
                            options: n,
                            selectedOptions: o,
                            selectItem: (t) => {
                                var n;
                                let i = o.some((e) => e.id === t.id),
                                    l = o.some((e) => {
                                        var t;
                                        return null == (t = e.optionProperties) ? void 0 : t.noneOfTheAbove;
                                    });
                                null != (n = t.optionProperties) && n.noneOfTheAbove && !i
                                    ? r([t])
                                    : e
                                      ? r(i ? o.filter((e) => e.id !== t.id) : l ? [t] : [...o, t])
                                      : i || r([t]),
                                    e || c();
                            },
                            showCheckbox: e,
                        }),
                ],
            })
        );
    },
    rl = ({ className: e, message: t, onSubmit: r, options: n = [], properties: i, questionId: o, type: l }) => {
        let { border: a, useMobileStyling: s } = tN((e) => ({
                border: e.border,
                useMobileStyling: e.useMobileStyling,
            })),
            [d, c] = eo(n.reduce((e, t) => ((e[t.id] = { isSelected: !1 }), e), {})),
            u = "multiplechoice" === l,
            p = i.required,
            h = n.find((e) => {
                var t;
                return null == (t = e.optionProperties) ? void 0 : t.noneOfTheAbove;
            }),
            m = Object.entries(d).some(([e, t]) => {
                var r;
                let i = n.find((t) => `${t.id}` === e),
                    o = void 0 === t.userText || "" === t.userText.trim();
                return (
                    (null == (r = null == i ? void 0 : i.optionProperties) ? void 0 : r.allowsTextEntry) &&
                    o &&
                    t.isSelected
                );
            }),
            v = Object.values(d).some((e) => e.isSelected),
            g = m || (p && !v),
            f = n.map(({ id: e, label: t, value: r, optionProperties: n }) => {
                var i, o;
                let l = `${e}`,
                    { allowsTextEntry: c, noneOfTheAbove: p } = {
                        allowsTextEntry: !1,
                        noneOfTheAbove: !1,
                        ...n,
                    };
                return F(
                    tQ,
                    {
                        allowTextEntry: c,
                        border: a,
                        error: !1,
                        id: l,
                        isRadio: u,
                        isSelected: !!(null != (i = d[l]) && i.isSelected),
                        label: t,
                        noneOfTheAbove: p,
                        onUserInputChanged: (e) => b(e.id, e.selected, e.userText, e.noneOfTheAbove),
                        promptText: "Please specify",
                        text: null == (o = d[e]) ? void 0 : o.userText,
                        useMobileStyling: s,
                        value: r,
                    },
                    l,
                );
            }),
            _ = (e) => {
                e.preventDefault(), e.stopPropagation(), r(d);
            },
            b = (e, t, r, n) => {
                let i = Object.assign({}, d);
                if ((u || n) && t) for (let e of Object.values(i)) (e.isSelected = !1), delete e.userText;
                else h && !n && d[h.id].isSelected && (i[h.id].isSelected = !1);
                (i[e] = {
                    isSelected: t,
                    userText: r,
                }),
                    c(i);
            };
        return F(
            "form",
            {
                className: tq(e, "ul-card--multiple", "fade-in-transition"),
                id: "text-form",
                onSubmit: _,
                children: [
                    F(tF, {
                        message: t,
                        properties: i,
                    }),
                    F(tZ, {
                        properties: i,
                        defaultBody: () =>
                            F(S, {
                                children: [
                                    F(t5, {
                                        children: i.isDropdown
                                            ? F(ro, {
                                                  isMultiSelect: !u,
                                                  multiselectText: i.dropdownMultiselectedText ?? "choices selected",
                                                  onChange: (e) => {
                                                      let t = { ...d };
                                                      for (let r of n)
                                                          e.includes(r)
                                                              ? (t[r.id].isSelected = !0)
                                                              : (t[r.id].isSelected = !1);
                                                      c(t);
                                                  },
                                                  options: n,
                                                  placeholderText:
                                                      i.dropdownPlaceholderText ??
                                                      (u ? "Select choice" : "Select choice(s)"),
                                                  value: n.filter((e) => d[e.id].isSelected),
                                              })
                                            : F("div", {
                                                  className: tq(tO("ul-card__choices", s)),
                                                  role: u ? "radiogroup" : "group",
                                                  children: f,
                                              }),
                                    }),
                                    F(t2, {
                                        children: F("div", {
                                            className: "ul-card__button-wrapper",
                                            children: F(tV, {
                                                disabled: g,
                                                onClick: _,
                                                children: t4(i),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                    }),
                ],
            },
            o,
        );
    },
    ra = (e) => {
        let { questionId: t, type: r, next: n, options: i } = e;
        return F(rl, {
            ...e,
            onSubmit: (e) => {
                let [o, l] = Object.entries(e).find(([, e]) => e.isSelected) || [void 0, void 0],
                    a = i.find((e) => `${e.id}` === o),
                    s = null != l && l.userText ? { [o]: { userText: l.userText } } : null;
                n({
                    value: a && o ? { [o]: a.value } : {},
                    secondaryValue: s,
                    questionId: t,
                    type: r,
                });
            },
        });
    },
    rs = (e) => {
        let { questionId: t, type: r, next: n } = e;
        return F(rl, {
            ...e,
            onSubmit: (e) => {
                n({
                    value: Object.entries(e).reduce((e, [t, r]) => ((e[t] = r.isSelected), e), {}),
                    secondaryValue: Object.entries(e).reduce((e, [t, r]) => {
                        if (!r.userText) return e;
                        let n = e || {};
                        return (n[t] = { userText: r.userText }), n;
                    }, null),
                    questionId: t,
                    type: r,
                });
            },
        });
    },
    rd = ({ className: e, props: { labels: t, message: r, properties: n }, next: i, questionId: o, type: l }) => {
        let {
                border: a,
                useMobileStyling: s,
                viewDocument: d,
            } = tN((e) => ({
                border: e.border,
                useMobileStyling: e.useMobileStyling,
                viewDocument: e.viewDocument,
            })),
            c = t && t.left,
            u = t && t.right,
            p = [...Array(11)].map((e, t) =>
                F(
                    "button",
                    {
                        className: tq(tO("nps-number", s), tO(`nps-number-${t}`, s)),
                        id: `option-${t}`,
                        onClick: () =>
                            i({
                                value: t,
                                questionId: o,
                                type: l,
                            }),
                        onKeyDown: (e) => {
                            var r, n;
                            let a = d.querySelectorAll("button.nps-number");
                            "ArrowRight" === e.key
                                ? null == (r = a[t + 1]) || r.focus()
                                : "ArrowLeft" === e.key
                                  ? null == (n = a[t - 1]) || n.focus()
                                  : ("Enter" !== e.key && " " !== e.key) ||
                                    i({
                                        value: t,
                                        questionId: o,
                                        type: l,
                                    });
                        },
                        onPointerDown: (e) => {
                            (e.currentTarget.style.zIndex = "2"), (e.currentTarget.style.borderColor = a);
                        },
                        onPointerLeave: (e) => {
                            (e.currentTarget.style.zIndex = "auto"), (e.currentTarget.style.borderColor = m.d);
                        },
                        tabIndex: 0,
                        children: t,
                    },
                    t,
                ),
            ),
            h = (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        value: null,
                        questionId: o,
                        type: l,
                    });
            };
        return F(
            "form",
            {
                className: tq(e, "ul-card--nps", "fade-in-transition"),
                children: [
                    F(tF, {
                        message: r,
                        properties: n,
                    }),
                    F(tZ, {
                        properties: n,
                        defaultBody: () =>
                            F(S, {
                                children: [
                                    F(t5, {
                                        children: [
                                            F("div", {
                                                className: "ul-card--nps__numbers",
                                                children: p,
                                            }),
                                            F("div", {
                                                className: "ul-card--nps__labels",
                                                children: [F("span", { children: c }), F("span", { children: u })],
                                            }),
                                        ],
                                    }),
                                    !n.required &&
                                        F(t2, {
                                            children: F("div", {
                                                className: "ul-vertical-centered-container",
                                                children: F(tV, {
                                                    onClick: h,
                                                    children: t4(n),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                    }),
                ],
            },
            o,
        );
    },
    rc = ({ className: e, message: t, next: r, properties: n, questionId: i, type: o }) => {
        let {
                border: l,
                useMobileStyling: a,
                update: s,
            } = tN((e) => ({
                border: e.border,
                useMobileStyling: e.useMobileStyling,
                update: e.update,
            })),
            [d, c] = eo(""),
            u = ed(null),
            p = d.trim(),
            h = !0 === n.required && !p,
            v = tK(u, () => s()),
            g = (e) => {
                v(), e.preventDefault(), e.stopPropagation(), c(e.currentTarget.value);
            },
            f = (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    r({
                        value: d,
                        questionId: i,
                        type: o,
                    });
            },
            _ = n && n.openTextPlaceholder ? n.openTextPlaceholder : "",
            b = (e) => {
                e.currentTarget.style.borderColor = l;
            },
            y = (e) => {
                e.currentTarget.style.borderColor = m.d;
            };
        return F(
            "form",
            {
                className: tq(e, "ul-card--text", "fade-in-transition"),
                id: "text-form",
                children: [
                    F(tF, {
                        message: t,
                        properties: n,
                    }),
                    F(tZ, {
                        defaultBody: () =>
                            F("div", {
                                className: "ul-card-text",
                                children: [
                                    F(t5, {
                                        children: F("div", {
                                            className: "ul-card-text__container",
                                            children: F("textarea", {
                                                "aria-labelledby": "ul-question",
                                                "aria-describedby": "ul-caption",
                                                "aria-multiline": "true",
                                                "aria-placeholder": _,
                                                className: tq(tO("ul-card-text__input", a)),
                                                "data-gramm": "false",
                                                maxLength: 5000,
                                                name: "text",
                                                onBlur: y,
                                                onChange: g,
                                                onFocus: b,
                                                placeholder: _,
                                                ref: u,
                                                role: "textbox",
                                                tabIndex: 0,
                                            }),
                                        }),
                                    }),
                                    F(t2, {
                                        children: [
                                            F(tV, {
                                                disabled: h,
                                                onClick: f,
                                                children: t4(n),
                                            }),
                                            n.footerHtml &&
                                                F("div", {
                                                    className: "footer",
                                                    dangerouslySetInnerHTML: { __html: n.footerHtml },
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        properties: n,
                    }),
                ],
            },
            i,
        );
    },
    ru = (e, t) =>
        void 0 === e
            ? 1
            : e
              ? !("av_permission" === t.type ? t.permissionDescriptors : []).includes("camera") ||
                e.getVideoTracks().length > 0
                  ? 3
                  : 1
              : 2,
    rp = {
        avStream: null,
        currentPage: null,
        mediaRecordingUids: null,
        nextQuestion: () => {},
        passthroughData: void 0,
        recordingMediaTypes: void 0,
        screenPermissionRequested: !1,
        type: void 0,
    },
    rh = ty((e) => ({
        ...rp,
        reset: () => {
            e(rp);
        },
        updatePage: (t) => {
            e(t);
        },
    }));
function rm({ currentPage: e, pages: t }) {
    let { avStream: r, recordingMediaTypes: n, updatePage: i } = rh.getState(),
        { recorderEventEmitter: o } = tN.getState();
    o.emit("av.permission", {
        "permission.descriptors": e.permissionDescriptors,
        "stream.ready": (l, a) => {
            if (r === l) return;
            let s = e;
            if (l && !e.permissionDescriptors.includes("camera")) {
                let r = t.indexOf(e),
                    l = null != a && a.active ? r + 2 : r + 1;
                null != a &&
                    a.active &&
                    n &&
                    o.emit("begin.recording", {
                        "recording.media.types": n,
                        "start.recording.callback": (e) => i({ mediaRecordingUids: e }),
                    }),
                    (s = t[l]);
            }
            i({
                currentPage: s,
                avStream: l,
            });
        },
    });
}
function rv({ status: e }) {
    let { nextQuestion: t, passthroughData: r, mediaRecordingUids: n, reset: i } = rh.getState(),
        { recorderEventEmitter: o, handleUploadUpdate: l, index: a } = tN.getState(),
        s = {
            value: { taskStatus: e },
            type: "recordedtask",
            questionId: (null == r ? void 0 : r.questionId) || 1,
        };
    r &&
        o.emit("finish.task", {
            "begin.callback": (e) => {
                l({
                    mediaRecordingUid: e,
                    isSubmitted: !0,
                    progressPct: 0,
                    isComplete: !1,
                });
            },
            "progress.callback": (e, t) => {
                l({
                    mediaRecordingUid: e,
                    progressPct: t.detail,
                    isSubmitted: !1,
                    isComplete: !1,
                });
            },
            "upload.callback": (e) => {
                e &&
                    l({
                        mediaRecordingUid: e,
                        isComplete: !0,
                        isSubmitted: !0,
                        progressPct: 100,
                    });
            },
            "passthrough.data": r,
            "current.index": a,
            "task.response": s,
            "task.complete.callback": (e) => {
                (s.value.taskDurationMillisecond = e), n && (s.value.mediaRecordingUids = n), i(), t(s);
            },
        });
}
function rg({ pages: e, setIsRequestingPermission: t }) {
    let { recorderEventEmitter: r, eventEmitFn: n } = tN.getState(),
        { updatePage: i, currentPage: o, recordingMediaTypes: l, screenPermissionRequested: a } = rh.getState();
    if (!o) return;
    let s = e.indexOf(o);
    switch (o.type) {
        case "av_permission":
            return (
                a &&
                    l &&
                    r.emit("begin.recording", {
                        "recording.media.types": l,
                        "start.recording.callback": (e) => {
                            i({ mediaRecordingUids: e });
                        },
                    }),
                void i({ currentPage: e[a ? s + 2 : s + 1] })
            );
        case "screen_permission":
            return void r.emit("screen.permission", {
                "screen.permission.requested": t,
                "stream.ready.callback": (t, n) => {
                    let a = n ? e[s + 1] : o;
                    n &&
                        l &&
                        r.emit("begin.recording", {
                            "recording.media.types": l,
                            "start.recording.callback": (e) => {
                                i({
                                    captureStream: n,
                                    mediaRecordingUids: e,
                                });
                            },
                        }),
                        i({
                            currentPage: a,
                            screenPermissionRequested: !0,
                            captureStream: n,
                        });
                },
            });
        case "start_task":
            return (
                n("recorded.task.start"),
                r.emit("recorded.task.start"),
                r.emit("start.task"),
                void i({
                    currentPage: e[s + 1],
                    screenPermissionRequested: !0,
                })
            );
        case "complete_task":
            return;
    }
}
let rf = "ul-permission-graphics-container",
    r_ = "ul-permission-body",
    rb = tq(rf, "ul_recorded-task-inset-spacing"),
    ry = tq("ul-horizontal-button-container", "ul-horizontal-button-container-left"),
    rx = ({ richTextBody: e }) =>
        F("div", {
            className: "ul-rich-text-body",
            dangerouslySetInnerHTML: { __html: e },
            id: "ul-task-detail-container",
        }),
    rk = ({ required: e, skipButtonText: t, bottom: r = !1 }) =>
        e
            ? null
            : F(tV, {
                  className: tq(r && "ul-skip-button-below", "ul-button-inactive"),
                  onClick: rv.bind(null, { status: "abandoned" }),
                  children: t || "Skip",
              }),
    rw = (e) => {
        let { avStream: t, captureStream: r, recordingMediaTypes: n, updatePage: i } = rh.getState(),
            o = (null == n ? void 0 : n.includes("audio")) || (null == n ? void 0 : n.includes("video"));
        ea(() => {
            let n = setInterval(() => {
                o && t && !t.active
                    ? i({
                          avStream: null,
                          currentPage: e[0],
                      })
                    : (r && r.active) ||
                      i({
                          captureStream: void 0,
                          currentPage: e[+!!o],
                      });
            }, 1000);
            return () => clearInterval(n);
        }, [t, r, o, e, n, i]);
    },
    rC = ({ content: e, pages: t, required: r }) => {
        let { buttonText: n, skipButtonText: i, taskDetail: o } = e;
        return (
            rw(t),
            F(
                "div",
                {
                    className: "ul-task-page",
                    children: [
                        o && F(rx, { richTextBody: o }),
                        F("div", {
                            className: ry,
                            children: [
                                F(tV, {
                                    onClick: rg.bind(null, { pages: t }),
                                    children: n,
                                }),
                                F(rk, {
                                    required: r,
                                    skipButtonText: i,
                                }),
                            ],
                        }),
                    ],
                },
                "start-task",
            )
        );
    },
    rS = ({ content: e, pages: t, properties: r }) => {
        let { buttonText: n, skipButtonText: i } = e;
        rw(t);
        let o = F(tZ, {
            properties: r,
            defaultBody: () =>
                F("div", {
                    className: ry,
                    children: [
                        F(tV, {
                            className: "ul-complete-task-button",
                            onClick: rv.bind(null, { status: "completed" }),
                            children: n,
                        }),
                        F(tV, {
                            className: tq("ul-button-inactive"),
                            onClick: rv.bind(null, { status: "given.up" }),
                            children: i,
                        }),
                    ],
                }),
        });
        return F(
            "div",
            {
                className: "ul-task-page",
                children: [e.taskDetail && F(rx, { richTextBody: e.taskDetail }), o],
            },
            "complete-task",
        );
    },
    rE = ({ content: e, pages: t, required: r }) => {
        let { buttonText: n, skipButtonText: i } = e,
            [o] = tN((e) => [e.tabTitle]),
            [l, a] = eo(!1);
        return F("div", {
            children: [
                F("div", {
                    className: rb,
                    children: [
                        F("p", {
                            style: { marginTop: "auto" },
                            children: e.selectTabText,
                        }),
                        F("div", {
                            className: "ul-select-tab-container",
                            children: F("p", {
                                className: r_,
                                children: o,
                            }),
                        }),
                    ],
                }),
                F("div", {
                    className: r ? "" : ry,
                    children: [
                        F(tV, {
                            disabled: l,
                            onClick: rg.bind(null, {
                                pages: t,
                                setIsRequestingPermission: a,
                            }),
                            children: n,
                        }),
                        F(rk, {
                            required: r,
                            skipButtonText: i,
                        }),
                    ],
                }),
            ],
        });
    },
    rj = ({ content: e }) =>
        F(
            "div",
            {
                className: tq(
                    rf,
                    "ul_permission_svg_container",
                    "ul_recorded-task-inset-spacing",
                    "ul-center-horizontally",
                ),
                dangerouslySetInnerHTML: { __html: e.svg },
            },
            "ul-permission-request-graphic",
        ),
    rT = ({ content: e, pages: t, required: r }) => {
        let { permissionDeniedHeadline: n, permissionDeniedBody: i, skipButtonText: o, tryAgainButtonText: l } = e,
            a = "av_permission" === t[0].type ? t[0] : null;
        return (
            ea(() => {
                let e = setInterval(() => {
                    null !== a &&
                        rm({
                            currentPage: a,
                            pages: t,
                        });
                }, 1000);
                return () => clearInterval(e);
            }, [a, t]),
            a
                ? F("div", {
                      children: [
                          F("div", {
                              className: rb,
                              children: F("p", {
                                  className: "ul-av-permission-denied-paragraph",
                                  children: [
                                      F("span", {
                                          className: "ul-av-permission-denied-headline",
                                          children: n,
                                      }),
                                      F("span", {
                                          className: r_,
                                          children: i,
                                      }),
                                  ],
                              }),
                          }),
                          F("div", {
                              className: ry,
                              children: [
                                  F(tV, {
                                      onClick: rm.bind(null, {
                                          currentPage: a,
                                          pages: t,
                                      }),
                                      children: l,
                                  }),
                                  F(rk, {
                                      required: r,
                                      skipButtonText: o,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
        );
    },
    rI = ({ stream: e }) =>
        F("video", {
            autoPlay: !0,
            className: tq("ul_recorded-task-inset-spacing"),
            id: "ul-record-task-video-preview",
            muted: !0,
            ref: (t) => {
                t && (t.srcObject = e || null);
            },
        }),
    rP = ({ content: e, pages: t, required: r }) => {
        let { skipButtonText: n } = e,
            { avStream: i } = rh.getState();
        return (
            rw(t),
            F("div", {
                children: [
                    F(rI, { stream: i }),
                    F("div", {
                        className: "ul-vertical-button-container-center",
                        children: [
                            F(tV, {
                                onClick: rg.bind(null, { pages: t }),
                                children: e.buttonText,
                            }),
                            F(rk, {
                                bottom: !0,
                                required: r,
                                skipButtonText: n,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    rN = ({ properties: e }) => {
        let { pages: t, required: r } = e,
            { avStream: n, currentPage: i } = rh.getState();
        if (void 0 === i) return null;
        switch (null == i ? void 0 : i.type) {
            case "av_permission": {
                let e = ru(n, i);
                return 1 === e
                    ? F(rj, { content: i })
                    : F(2 === e ? rT : rP, {
                          content: i,
                          pages: t,
                          required: r,
                      });
            }
            case "screen_permission":
                return F(rE, {
                    content: i,
                    pages: t,
                    required: r,
                });
            case "start_task":
                return F(rC, {
                    content: i,
                    pages: t,
                    required: r,
                });
            case "complete_task":
                return F(rS, {
                    content: i,
                    pages: t,
                    properties: e,
                });
            default:
                return null;
        }
    },
    rM = ({ className: e, properties: t, next: r, questionId: n }) => {
        let { surveyId: i, responseGroupUid: o, userId: l } = tN(),
            { screenPermissionRequested: a } = rh(),
            s = rh((e) => e.avStream),
            d = rh((e) => e.currentPage);
        d ||
            (d = (function ({ pages: e, userId: t, responseGroupUid: r, surveyId: n, questionId: i, next: o }) {
                let { updatePage: l } = rh.getState(),
                    { eventEmitFn: a, recorderEventEmitter: s } = tN.getState(),
                    d = {
                        questionId: i,
                        surveyId: n,
                        visitorId: t,
                        responseGroupUid: r,
                    },
                    c = 0;
                s.emit("recorded.task.permission.screen"),
                    a("recorded.task.permission.screen"),
                    s.emit("permission.status", {
                        "permission.status.callback": (t, r, n, i) => {
                            let a = e[c],
                                { type: u } = a,
                                p = ["screen"];
                            if ("av_permission" === a.type) {
                                let { permissionDescriptors: e } = a,
                                    n = null == e ? void 0 : e.includes("microphone"),
                                    i = null == e ? void 0 : e.includes("camera");
                                n && p.push("audio"),
                                    i && p.push("video"),
                                    ((null != t && t.active && !i) || (null != t && t.active && r)) && c++;
                            }
                            "screen_permission" === e[c].type &&
                                n &&
                                (c++,
                                s.emit("begin.recording", {
                                    "recording.media.types": p,
                                    "start.recording.callback": (e) => l({ mediaRecordingUids: e }),
                                })),
                                l({
                                    currentPage: e[c],
                                    avStream: t,
                                    screenPermissionRequested: n,
                                    nextQuestion: o,
                                    type: u,
                                    passthroughData: d,
                                    recordingMediaTypes: p,
                                    captureStream: i,
                                });
                        },
                    });
                let u = e[c];
                return (
                    "av_permission" === u.type &&
                        rm({
                            currentPage: u,
                            pages: e,
                        }),
                    u
                );
            })({
                questionId: n,
                surveyId: i,
                next: (e) => {
                    r(e);
                },
                pages: t.pages,
                responseGroupUid: o,
                userId: l,
            }));
        let c = d.headline,
            u = d.captionText,
            p = ru(s, d);
        return (
            "screen_permission" === d.type &&
                a &&
                ((c = d.permissionDeniedHeadline), (u = d.permissionDeniedCaptionText)),
            "av_permission" === d.type &&
                3 === p &&
                ((c = d.permissionGrantedHeadline), (u = d.permissionGrantedCaptionText)),
            F("div", {
                className: tq(e, "ul-center-horizontally", "fade-in-transition"),
                children: [
                    F(tF, {
                        message: c,
                        properties: { captionText: u },
                    }),
                    F(t5, { children: F(rN, { properties: t }) }),
                ],
            })
        );
    },
    rL = {
        "{{user_id}}": "externalUserId",
        "{{email}}": "email",
    },
    rR = ({ className: e, message: t, next: r, properties: n, questionId: i, type: o }) => {
        var l, a;
        let { visitorAttributes: s } = tN((e) => ({ visitorAttributes: e.visitorAttributes })),
            d = (e, t = !1) => {
                r({
                    value: t ? { skipped: !0 } : void 0,
                    questionId: i,
                    type: o,
                });
            },
            c = (e) => {
                ("Enter" !== e.key && " " !== e.key) ||
                    r({
                        value: void 0,
                        questionId: i,
                        type: o,
                    });
            },
            u = ((e, t = {}) => {
                if (!e) return e;
                try {
                    let t = new URL(e);
                    if ("http:" !== t.protocol && "https:" !== t.protocol) return;
                } catch {
                    return;
                }
                let r = e,
                    n = [];
                for (let [e, i] of Object.entries(rL))
                    if (r.toLowerCase().includes(e))
                        if (t[i]) {
                            let n = RegExp(e, "gi");
                            r = r.replace(n, t[i]);
                        } else n.push(e);
                if (0 === n.length || !r.includes("?")) return r;
                let i = r.slice(0, r.indexOf("?")),
                    o = r
                        .slice(r.indexOf("?") + 1)
                        .split("&")
                        .map((e) => e.split("="))
                        .filter((e) => !n.includes(e[1]));
                return 0 === o.length ? i : `${i}?${o.map((e) => e.join("=")).join("&")}`;
            })(n && n.buttonUrl, s);
        return F(
            "div",
            {
                className: tq(e, "ul-card__text-url-prompt", "fade-in-transition"),
                children: [
                    F(tF, {
                        message: t,
                        properties: { questionHtml: n.questionHtml },
                    }),
                    F(t5, {
                        children:
                            ((l = null == n ? void 0 : n.richTextBody),
                            (a = null == n ? void 0 : n.body),
                            l
                                ? F("div", {
                                      className: "ul-rich-text-body",
                                      dangerouslySetInnerHTML: { __html: l },
                                      id: "ul-card__text-url-body-container",
                                  })
                                : a
                                  ? F("div", {
                                        className: "ul-rich-text-body",
                                        id: "ul-card__text-url-body-container",
                                        children: (a ? a.split(/\n\s*\n/g) : []).map((e, t) =>
                                            F("p", { children: e }, t),
                                        ),
                                    })
                                  : null),
                    }),
                    F(tZ, {
                        defaultBody: () =>
                            F(t2, {
                                children: F("div", {
                                    className: "ul-card-button-group",
                                    children: [
                                        F("a", {
                                            className: "ul-card-text__button ul-card__text-url-prompt-button",
                                            href: u,
                                            id: "ul-card-text__button",
                                            onClick: d,
                                            onKeyPress: c,
                                            rel: "noreferrer",
                                            role: u ? "link" : "button",
                                            tabIndex: 0,
                                            target: "_blank",
                                            children: t4(n),
                                        }),
                                        !1 === n.required &&
                                            F("button", {
                                                className: "ul-card-skip__button",
                                                onClick: (e) => d(0, !0),
                                                children: t6(n),
                                            }),
                                    ],
                                }),
                            }),
                        properties: n,
                    }),
                ],
            },
            i,
        );
    },
    rH = ({ className: e, questionId: t }) => {
        let {
            border: r,
            destroy: n,
            endCard: i,
            forceBrandedLogo: o,
        } = tN((e) => ({
            border: e.border,
            destroy: e.destroy,
            endCard: e.endCard,
            forceBrandedLogo: e.forceBrandedLogo,
        }));
        ea(() => {
            setTimeout(
                () => {
                    n(m.A);
                },
                o ? 4000 : 2000,
            );
        }, [n, o]);
        let l =
                i && i.subheader
                    ? F("p", {
                          className: "ul-caption",
                          children: i.subheader,
                      })
                    : null,
            a = i && i.headline ? i.headline : "";
        return F(
            "div",
            {
                className: tq(e, "ul-card--thanks", "fade-in-transition"),
                children: F("div", {
                    children: F("div", {
                        className: "ul-card--thanks-content",
                        children: [
                            F("div", {
                                className: "ul-thanks-check",
                                children: F("svg", {
                                    "aria-labelledby": "title",
                                    fill: "none",
                                    height: "99",
                                    viewBox: "0 0 81 99",
                                    width: "81",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        F("path", {
                                            clipRule: "evenodd",
                                            d: "M40.5 77C60.9345 77 77.5 60.4345 77.5 40C77.5 19.5655 60.9345 3 40.5 3C20.0655 3 3.5 19.5655 3.5 40C3.5 60.4345 20.0655 77 40.5 77ZM80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40Z",
                                            fill: r,
                                            fillRule: "evenodd",
                                        }),
                                        F("path", {
                                            clipRule: "evenodd",
                                            d: "M55.025 22.9046C55.6299 23.4705 55.6616 24.4198 55.0956 25.0247C54.8724 25.2634 54.6109 25.5285 54.3157 25.8277C52.2547 27.9168 48.5549 31.667 44.8135 39.6658C43.2818 42.9406 42.0864 45.8386 41.0823 48.2729C40.6539 49.3116 40.2603 50.2659 39.8902 51.129C39.287 52.5359 38.7248 53.7508 38.1744 54.625C37.8997 55.0613 37.5806 55.4905 37.2017 55.8245C36.8201 56.1607 36.2613 56.5 35.5457 56.5C34.6742 56.5 34.0892 55.9692 33.7774 55.6083C33.4502 55.2296 33.1752 54.7511 32.9396 54.301C32.7305 53.9013 32.5088 53.4367 32.2797 52.9565C32.2429 52.8794 32.2059 52.8019 32.1688 52.7243C31.8942 52.1499 31.5959 51.534 31.2537 50.8868C29.8886 48.305 27.8539 45.2878 24.2343 43.1382C23.522 42.7152 23.2875 41.7949 23.7105 41.0826C24.1335 40.3703 25.0539 40.1358 25.7662 40.5588C30.0556 43.1062 32.4149 46.6647 33.9058 49.4845C34.2776 50.1876 34.5973 50.8487 34.8753 51.4302C34.9147 51.5124 34.9529 51.5926 34.9902 51.6707C35.2222 52.1567 35.4164 52.5637 35.5978 52.9102C35.6151 52.9434 35.6321 52.9754 35.6485 53.0061C36.0565 52.3531 36.5341 51.3434 37.133 49.9468C37.4781 49.1418 37.8572 48.2229 38.2761 47.2074C39.2886 44.7532 40.5339 41.7347 42.0961 38.3948C46.0591 29.9221 50.0641 25.8648 52.1535 23.7482C52.4423 23.4556 52.6944 23.2002 52.9048 22.9753C53.4708 22.3703 54.42 22.3387 55.025 22.9046ZM35.1994 53.5892C35.1994 53.5892 35.2 53.5888 35.2012 53.5879C35.2 53.5889 35.1994 53.5893 35.1994 53.5892ZM36.0666 53.6682C36.0732 53.674 36.0765 53.6775 36.0765 53.6777C36.0765 53.678 36.0732 53.6751 36.0666 53.6682Z",
                                            fill: r,
                                            fillRule: "evenodd",
                                        }),
                                        F("path", {
                                            d: "M69.5 97C69.5 98.1046 56.2924 99 40 99C23.7076 99 10.5 98.1046 10.5 97C10.5 95.8954 23.7076 95 40 95C56.2924 95 69.5 95.8954 69.5 97Z",
                                            fill: "black",
                                            fillOpacity: "0.2",
                                        }),
                                    ],
                                }),
                            }),
                            F(tF, { message: a }),
                            l,
                        ],
                    }),
                }),
            },
            t,
        );
    },
    rD = "https://cdn.sprig.com",
    rU = {
        document: void 0,
        videojs: void 0,
    },
    rB = "hidden",
    rq = ".m3u8",
    rO = "questionId",
    rV = "ul-video-recorder-camera-off-button",
    rA = "ul-recording-in-session",
    rz = [
        {
            type: "link",
            content: `${rD}/dependencies/videojs-record-4.5.0.min.css`,
        },
        {
            type: "script",
            content: `${rD}/dependencies/RecordRTC-5.6.2.js`,
        },
        {
            type: "script",
            content: `${rD}/dependencies/adapter.8.0.0.min.js`,
        },
        {
            type: "script",
            content: `${rD}/dependencies/videojs-record-4.5.0.min.js`,
        },
        {
            type: "script",
            content: `${rD}/userleap-web-upchunk-v2.2.2.js`,
        },
    ],
    r$ = [
        {
            type: "link",
            content: `${rD}/dependencies/video-js-7.18.0.min.css`,
        },
        {
            type: "script",
            content: `${rD}/dependencies/video-js-7.18.0.min.js`,
        },
        {
            type: "style",
            content: `/* progress control styles */
.video-js .vjs-control {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.video-js .vjs-progress-control .vjs-progress-holder {
  margin: 0 0px;
}

.video-js .vjs-progress-control {
  position: absolute;
  height: 3px;
  width: 100%;
}
/* position and align the buttons and button texts */
.ul-control-panel {
  bottom: 0;
  width: 100%;
  flex-direction: column;
  background-color: white;
  height: fit-content;
  z-index: 2;
}

.ul-buttons-panel {
  color: black;
  display: flex;
  gap: 20px;
  height: 50px;
  justify-content: center;
  margin: 10px;
  padding: 2px 14px 0;
}

.video-js .vjs-volume-panel {
  height: 30px;
  width: 40px;
}

.ul-inactive {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}

/* buttons */
.ul-buttons-panel > .vjs-button {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: flex;
  height: 3em;
  justify-content: center;
  width: 3em;
}

.vjs-button>.vjs-icon-placeholder:before {
  align-items: center;
  display: flex;
  font-size: unset;
  line-height: 0.5;
  justify-content: center;
}

span.ul-button-text {
  align-self: flex-end;
  position: relative;
  top: 14px;
}

#ul-camera-button {
  white-space: nowrap;
}

.video-js .vjs-volume-control.vjs-volume-horizontal {
  background-color: #fff;
  z-index: 1;
}

.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {
  background-color: black;
}

.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active {
  width: 40px;
}

.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,
.video-js .vjs-volume-panel .vjs-volume-control:active,
.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control,
.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,
.video-js .vjs-volume-panel:active .vjs-volume-control,
.video-js .vjs-volume-panel:focus .vjs-volume-control {
  visibility: visible;
  left: 40px;
  position: absolute;
  transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;
}

/* play button customization */
.video-js .vjs-play-control {
  color: black;
}

.video-js .vjs-play-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5363 6.40226L1.93958 10.7006C1.64037 10.8502 1.28833 10.6326 1.28833 10.2981V1.7014C1.28833 1.36688 1.64037 1.14931 1.93958 1.29891L10.5363 5.59727C10.868 5.76311 10.868 6.23642 10.5363 6.40226Z' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
}

/* position and style the current timer */
.ul-time-panel {
  position: absolute;
  bottom: 80px;
  left: 10px;
  height: 22px;
  color: black;
  border: 1px solid #e0e0eb;
  border-radius: 23px;
  background-color: white;
  width: fit-content;
}

.video-js .vjs-current-time,
.vjs-no-flex .vjs-current-time {
  display: flex;
  align-items: center;
  text-align: center;
}

/* remove the dot progress indicator */
.video-js .vjs-play-progress:before,
.video-js .vjs-volume-level:before,
.vjs-icon-circle:before,
.vjs-seek-to-live-control .vjs-icon-placeholder:before {
  content: none;
}

.video-js .vjs-mute-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.825.324A.75.75 0 019.25 1v11.667a.75.75 0 01-1.219.585l-3.96-3.169H1a.75.75 0 01-.75-.75v-5a.75.75 0 01.75-.75h3.07L8.031.414a.75.75 0 01.794-.09zM7.75 2.56L4.802 4.92a.75.75 0 01-.469.164H1.75v3.5h2.583a.75.75 0 01.469.165l2.948 2.358V2.56zM14.911.47a.75.75 0 011.061 0 9.084 9.084 0 010 12.844.75.75 0 01-1.06-1.06 7.584 7.584 0 000-10.724.75.75 0 010-1.06zM11.97 3.41a.75.75 0 011.06 0 4.917 4.917 0 010 6.953.75.75 0 11-1.06-1.06 3.417 3.417 0 000-4.832.75.75 0 010-1.06z' fill='%23262136'/%3E%3C/svg%3E");
}

.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 1.167L4.333 4.5H1v5h3.333L8.5 12.833V1.167zM17.17 4.5l-5 5M12.17 4.5l5 5' stroke='%23262136' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.82489 0.32403C9.08474 0.44892 9.25 0.711703 9.25 1.00001V12.6667C9.25 12.955 9.08474 13.2178 8.82489 13.3427C8.56504 13.4675 8.25661 13.4324 8.03148 13.2523L4.07025 10.0833H1C0.585786 10.0833 0.25 9.74755 0.25 9.33334V4.33334C0.25 3.91913 0.585786 3.58334 1 3.58334H4.07025L8.03148 0.414355C8.25661 0.234253 8.56504 0.19914 8.82489 0.32403ZM7.75 2.56048L4.80185 4.91899C4.66887 5.02538 4.50364 5.08334 4.33333 5.08334H1.75V8.58334H4.33333C4.50364 8.58334 4.66887 8.6413 4.80185 8.74769L7.75 11.1062V2.56048Z' fill='%23262136'/%3E%3C/svg%3E%0A");
}

.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.82489 0.32403C9.08474 0.44892 9.25 0.711703 9.25 1.00001V12.6667C9.25 12.955 9.08474 13.2178 8.82489 13.3427C8.56504 13.4675 8.25661 13.4324 8.03148 13.2523L4.07025 10.0833H1C0.585786 10.0833 0.25 9.74755 0.25 9.33334V4.33334C0.25 3.91913 0.585786 3.58334 1 3.58334H4.07025L8.03148 0.414355C8.25661 0.234253 8.56504 0.19914 8.82489 0.32403ZM7.75 2.56048L4.80185 4.91899C4.66887 5.02538 4.50364 5.08334 4.33333 5.08334H1.75V8.58334H4.33333C4.50364 8.58334 4.66887 8.6413 4.80185 8.74769L7.75 11.1062V2.56048Z' fill='%23262136'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.9698 3.41124C12.2627 3.11839 12.7376 3.11846 13.0304 3.4114C13.9521 4.33341 14.4699 5.58376 14.4699 6.88748C14.4699 8.19121 13.9521 9.44156 13.0304 10.3636C12.7376 10.6565 12.2627 10.6566 11.9698 10.3637C11.6768 10.0709 11.6767 9.596 11.9696 9.30307C12.6101 8.66235 12.9699 7.79346 12.9699 6.88748C12.9699 5.98151 12.6101 5.11262 11.9696 4.4719C11.6767 4.17896 11.6768 3.70409 11.9698 3.41124Z' fill='%23262136'/%3E%3C/svg%3E%0A");
}

.video-js .vjs-volume-control:hover .vjs-mouse-display {
  display: none !important;
}

.video-js .vjs-play-progress {
  background-color: black;
}

/* position video player inside the container */
.video-js .vjs-tech {
  position: static;
}

.video-js .vjs-time-tooltip {
  padding: 0.25em 0.75em;
  align-items: center;
  color: #333;
  background: #FCFCFD;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #E0E0EB;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -25px;
  font-size: 12px !important;
  width: 50px !important;
}

.video-js .vjs-play-progress.vjs-slider-bar .vjs-time-tooltip {
  visibility: hidden !important;
}

.video-js .vjs-progress-control .vjs-mouse-display {
  z-index: 2;
}

.ul-video-player {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  border: 1px solid #E6E6E6;
  background-color: white;
  box-sizing: border-box;
  border-radius: 4px;
  background-clip: border-box;
  overflow: hidden;
}

.video-js.vjs-fullscreen:not(.vjs-ios-native-fs) {
  border: none;
}

#video-response-player-secondary-video-player {
  max-width: 200px;
  margin-right: 20px;
  background-color: transparent;
}

#ul-card-video__player_recorder-video-recorder.vjs-fullscreen {
  display: table;
}

.video-js div.vjs-progress-control {
  margin-top: -3px;
}

.video-js .vjs-progress-control .vjs-slider {
  background-color: #B2BBBD;
}

.vjs-record.video-js .vjs-control.vjs-button.vjs-fullscreen-control {
  position:relative;
}

.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.82143 2.54004L12.2614 2.54004C12.9242 2.54004 13.4614 3.0773 13.4614 3.74004L13.4614 6.18004' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.17955 13.46L3.73955 13.46C3.07681 13.46 2.53955 12.9227 2.53955 12.26L2.53955 9.81996' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.7772 3.22266L9.36475 6.63516' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.29434 9.70605L2.88184 13.1186' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.583 9.813H5.25a1 1 0 011 1v3.666M5.375 10.688L1 15.061M14.917 5.813H11.25a1 1 0 01-1-1V1.146M15.063 1l-4.376 4.375' stroke='%23262136' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before, .video-js .vjs-icon-replay:before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5363 6.40226L1.93958 10.7006C1.64037 10.8502 1.28833 10.6326 1.28833 10.2981V1.7014C1.28833 1.36688 1.64037 1.14931 1.93958 1.29891L10.5363 5.59727C10.868 5.76311 10.868 6.23642 10.5363 6.40226Z' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
}

.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before, .vjs-icon-pause:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3.61885' y='2.06074' width='3.16185' height='11.88' rx='0.9' fill='black' stroke='%23EDEDED' stroke-width='0.6' stroke-linecap='round'/%3E%3Crect x='9.21797' y='2.06074' width='3.16185' height='11.88' rx='0.9' fill='black' stroke='%23EDEDED' stroke-width='0.6' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  padding: 2px;
}

.vjs-error-display {
  display: none;
}

.ul-video-player-video {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}

.ul-video-container {
  width: 100%;
  height: auto;
  left: 0px;
  top: 0px;

  background-color: transparent;
  border-radius: 4px;

  align-items: start;
  display: flex;
  flex-direction: column;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
  position: relative;
}

.vjs-record button.vjs-device-button.vjs-control {
  background: rgba(255, 255, 255, 96);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  border-radius: 0;
  line-height: 0.6;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
}

.vjs-record .vjs-device-button.vjs-control:before {
  font-size: 14px !important;
  color: #333;
  content: "Your browser needs to access your camera and microphone for video recording";
  line-height: 135%;
}

.vjs-record .vjs-device-button.vjs-control.permission-denied:before {
  font-size: 16px !important;
  color: #262136;
  content: "Unable to access your camera and microphone";
}

.vjs-record .vjs-device-button.vjs-control:after {
  display: inline-block;
  background: #F0F0F5;
  font-size: 13px;
  border-radius: 4px;
  content: "Request Permissions";
  padding: 1em 2em;
  color: #333;
  margin-top: 20px;
}

.vjs-record .vjs-device-button.vjs-control.permission-denied:after {
  display: inline-block;
  background: white;
  font-size: 13px;
  content: "Please go to your browser settings and update permissions to enable recording";
  padding: 1em;
  color: #4B575D;
  margin: 5px;
  line-height: 135%;
  text-align: center;
}

.vjs-control.vjs-button.ul-video-recorder-delete-button, .vjs-control.vjs-button.ul-video-recorder-toggle-button, .vjs-control.vjs-button.ul-video-recorder-camera-off-button-audio-only, .vjs-control.vjs-button.ul-video-recorder-camera-off-button {
  cursor: pointer;
}

.ul-video-recorder-delete-button .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.21234 7.37549V11.1193M2.53931 4.25595H13.4593H2.53931ZM5.57234 4.25595V3.00833C5.57222 2.84433 5.60354 2.68192 5.6645 2.53038C5.72546 2.37884 5.81488 2.24115 5.92762 2.12519C6.04037 2.00922 6.17424 1.91726 6.32158 1.85456C6.46892 1.79185 6.62683 1.75964 6.78628 1.75977H9.21234C9.37179 1.75964 9.5297 1.79185 9.67703 1.85456C9.82437 1.91726 9.95824 2.00922 10.071 2.12519C10.1837 2.24115 10.2732 2.37884 10.3341 2.53038C10.3951 2.68192 10.4264 2.84433 10.4263 3.00833V4.25595H5.57234ZM12.2463 4.25595V12.9912C12.2463 13.3223 12.1184 13.6399 11.8907 13.8741C11.6631 14.1082 11.3543 14.2398 11.0323 14.2398H4.96628C4.64432 14.2398 4.33555 14.1082 4.10789 13.8741C3.88023 13.6399 3.75234 13.3223 3.75234 12.9912V4.25595H12.2463ZM6.78628 7.37549V11.1193V7.37549Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}

.ul-video-recorder-toggle-button .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z' fill='%23D15153'/%3E%3C/svg%3E");
}

.ul-video-recorder-toggle-button.ul-recording-in-session .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 10L12 2C12 0.89543 11.1046 -4.85396e-07 10 -4.37114e-07L2 -8.74228e-08C0.89543 -3.91405e-08 -4.85396e-07 0.895431 -4.37114e-07 2L-8.74228e-08 10C-3.91405e-08 11.1046 0.895431 12 2 12L10 12C11.1046 12 12 11.1046 12 10Z' fill='%23D15153'/%3E%3C/svg%3E%0A");
}

.ul-video-recorder-camera-off-button .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2645_4654)'%3E%3Cpath d='M15.1491 4.75L10.5991 8L15.1491 11.25V4.75Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.29912 3.4502H2.14912C1.43115 3.4502 0.849121 4.03223 0.849121 4.7502V11.2502C0.849121 11.9682 1.43115 12.5502 2.14912 12.5502H9.29912C10.0171 12.5502 10.5991 11.9682 10.5991 11.2502V4.7502C10.5991 4.03223 10.0171 3.4502 9.29912 3.4502Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2645_4654'%3E%3Crect width='15.6' height='15.6' fill='white' transform='translate(0.199951 0.200195)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
}

.ul-video-recorder-camera-off-button-audio-only .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='22' height='15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.75 3A2.75 2.75 0 013.5.25h9.081A2.75 2.75 0 0115.331 3v9a2.75 2.75 0 01-2.75 2.75H3.5A2.75 2.75 0 01.75 12V3zM3.5 1.75c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h9.081c.69 0 1.25-.56 1.25-1.25V3c0-.69-.56-1.25-1.25-1.25H3.5z' fill='%23262136'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.53 2.03l-12 12-1.06-1.06 12-12 1.06 1.06zM20.87 1.525a.75.75 0 01.38.652v10.588a.75.75 0 01-1.134.644l-5.92-3.53a.75.75 0 01-.365-.643v-3.53a.75.75 0 01.366-.644l5.919-3.53a.75.75 0 01.754-.007zm-5.539 4.607V8.81l4.419 2.635V3.497l-4.419 2.635z' fill='%23262136'/%3E%3C/svg%3E");
  transform: scale(0.75);
}

.ul-upload-progress-label {
  padding: 0.15em 0.75em;
  align-items: center;
  font-size: 12px;
  color: #333;
  background: #FCFCFD;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #E0E0EB;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 75px;
  left: calc(50% - 65px);
  width: 130px;
  z-index: 5;
}

.ul-upload-progress-label__time {
  display: inline-flex;
  margin-left: 0.8em;
  align-items: center;
}

.ul-upload-progress-label__time:before {
  content: "";
  display: inline-flex;
  width: 1px;
  height: 12px;
  background-color: #E0E0EB;
  margin-right: 0.8em;
}

@keyframes grow {
  0% {
    transform: scale(1);
    background-color: #EEECFC;
  }
  50%  {
    transform: scale(1.2);
    background-color: #E1DFF4;
  }
  100% {
    transform: scale(1);
    background-color: #EEECFC;
  }
}

.ul-audio-recorder-placeholder:before {
  width: 80px;
  height: 80px;
  border-radius: 120px;
  background-color: #EEECFC;
  content: "";
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  animation: 6s infinite grow;
  transform-origin: 50% 60%;
}

.ul-audio-recorder-placeholder:after {
  content: url("data:image/svg+xml,%3Csvg width='98' height='98' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='98' height='98'%3E%3Ccircle cx='49' cy='49' r='49' fill='%23EDECF8'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Ccircle cx='49' cy='49' r='50' fill='%23645CC2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.422 81.812c5.405-15.547 20.187-26.706 37.576-26.706 17.39 0 32.172 11.159 37.577 26.707-9.164 10.43-22.601 17.013-37.576 17.013-14.976 0-28.414-6.583-37.577-17.014z' fill='%23fff' fill-opacity='.6'/%3E%3Ccircle cx='49' cy='29' r='17' fill='%23fff' fill-opacity='.7'/%3E%3C/g%3E%3C/svg%3E");
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%) scale(0.6);
}

.ul-audio-recorder-placeholder {
  min-height: 150px;
  width: 100%;
  background-color: #fcfcfd;
  display: block;
  position: relative;
}

.vjs-fullscreen .ul-audio-recorder-placeholder {
  vertical-align: middle;
  display: table-cell;
}

.vjs-fullscreen .ul-control-panel {
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  background-color: #F8F8F8;
}

.vjs-playback-rate .vjs-playback-rate-value {
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: center;
}

.vjs-playback-rate .vjs-menu {
  left: -5px;
  bottom: 3px;
}

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
}

.vjs-menu li {
  font-size: 12px;
  padding: 5px 0;
}

.vjs-menu li.vjs-selected {
  color: lightgray;
}

.vjs-menu li.vjs-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.vjs-fullscreen .ul-buttons-panel {
  top: calc(50% - 30px);
  position: relative;
}

.vjs-fullscreen .vjs-record-indicator.vjs-control {
  bottom: 90px !important;
}

.vjs-record.video-js div.vjs-control.vjs-record-indicator {
  padding: 0.3em 0.75em 0.15em 15px;
  align-items: center;
  font-size: 12px;
  color: #333;
  background: #FCFCFD;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #E0E0EB;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 75px;
  top: auto;
  left: calc(50% - 21px);
  width: 43px;
  height: 16px;
  z-index: 4;
}

.vjs-record.video-js div.vjs-control.vjs-record-indicator:after {
  content: "";
  background-color: #EB5757;
  width: 6px;
  height: 6px;
  border-radius: 8px;
  animation: none;
  top: 4px;
  left: 5px;
}

.vjs-record.video-js div.vjs-control.vjs-record-indicator:before {
  position: relative;
  font-size: 9px;
  animation: none;
  opacity: 1;
  color: #333;
  top: auto;
  left: auto;
}

.ul-video-player-loading {
  display: inline-block;
  position: relative;
  width: 6rem;
  height: 6rem;

}
.ul-video-player-loading div {
  box-sizing: border-box;
  position: absolute;
  display: block;
  width: 80%;
  height: 80%;
  margin: 5px;
  border: 5px solid #666;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #666 transparent transparent transparent;
}

.first {
  animation-delay: -0.45s;
}
.second {
  animation-delay: -0.3s;
}
.third {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.ul-video-btn {
  width: 100%;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 8px;
  font-weight: 500;
  font-size: 15px;
}

.ul-record-response-btn:before, .ul-record-response-btn:after, .ul-back-question-btn:before, .ul-back-question-btn:after {
  margin: 0 5px;
  vertical-align: middle;
}

.ul-record-response-btn:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2645_4654)'%3E%3Cpath d='M15.1491 4.75L10.5991 8L15.1491 11.25V4.75Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.29912 3.4502H2.14912C1.43115 3.4502 0.849121 4.03223 0.849121 4.7502V11.2502C0.849121 11.9682 1.43115 12.5502 2.14912 12.5502H9.29912C10.0171 12.5502 10.5991 11.9682 10.5991 11.2502V4.7502C10.5991 4.03223 10.0171 3.4502 9.29912 3.4502Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2645_4654'%3E%3Crect width='15.6' height='15.6' fill='white' transform='translate(0.199951 0.200195)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  display: inline-block;
  transform: translate(0px, 2px);
}

.ul-record-response-btn:after {
  content: 'Record your Response';
}

.ul-back-question-btn:before {
  content: url("data:image/svg+xml,%3Csvg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.8757 8.22361L1.1118 14.6056C0.945578 14.6887 0.75 14.5678 0.75 14.382V1.61803C0.75 1.43219 0.945579 1.31131 1.1118 1.39443L13.8757 7.77639C14.06 7.86852 14.06 8.13148 13.8757 8.22361Z' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  display: inline-block;
  transform: scale(0.85) translate(0, 1px);
  -moz-transform: scale(0.85) translate(0, 2px);
}

.ul-back-question-btn:after {
  content: 'Back to Question';
}

.hidden {
  display: none !important;
  opacity: 0;
  visibility: hidden;
}

.visible {
  visibility: visible;
  opacity: 1;
  animation: fade 0.3s;
}

@keyframes fade {
  0% {
      opacity: 0;
  }

  100% {
      opacity: 1;
  }
}

#ul-recording-countdown-screen {
  width: 100%;
  height: 100%;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  text-align: center;
  font-size: 15px;
  z-index: 1;
  display: table;
}

.ul-countdown-text {
  vertical-align: middle;
  display: table-cell;
  transform: translate(0, -25px);
}

.vjs-fullscreen > #ul-recording-countdown-screen {
  font-size: 25px;
  transform: unset;
}

.vjs-poster {
  background-size: cover;
}
`,
        },
    ],
    rF = "-video-player",
    rW = "-secondary-video-player",
    rZ = "-video-recorder",
    rG = async ({ event: e, apiBase: t, headers: r, visitorId: n, envId: i, metadata: o }) => {
        let l = rU.document.documentElement;
        if (!n || !i) return;
        let a = {
            event: `SDK - ${e}`,
            visitorId: n,
            environmentId: i,
            metadata: {
                ...(o || {}),
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                clientWidth: l.clientWidth,
                clientHeight: l.clientHeight,
                location: window.location.href,
                language: navigator.language,
            },
        };
        (
            await fetch(`${t}/sdk/1/visitors/${n}/analytics`, {
                method: "POST",
                cache: "no-cache",
                headers: r,
                body: JSON.stringify(a),
            })
        ).ok || console.warn("[Sprig] (ERR-444) Failed to track analytics", e);
    },
    rK = async (e, t, r, n, i, o) => {
        rG({
            event: `Video Error ${t}`,
            apiBase: r,
            headers: n,
            visitorId: i,
            envId: o,
            metadata: { errorMessage: e.message },
        });
        let l = rU.document.documentElement,
            a = {
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                clientWidth: l.clientWidth,
                clientHeight: l.clientHeight,
                location: window.location.href,
                language: navigator.language,
            },
            s = {
                action: t,
                err: {
                    message: e.message,
                    stack: e.stack,
                },
                meta: a,
                vid: i,
                envId: o,
            };
        (
            await fetch(`${r}/sdk/1/errors`, {
                method: "POST",
                cache: "no-cache",
                headers: {
                    ...n,
                    "userleap-platform": "video_recorder",
                    "x-ul-error": window.btoa(`userleap-${Date.now()}-error`),
                },
                body: JSON.stringify(s),
            })
        ).ok || console.warn("[Sprig] (ERR-444) Failed to report error to API", e);
    },
    rQ = (e, t) => {
        if (0 === e.length) return t && t();
        Promise.all(
            e.reduce(
                (e, t) => (
                    e.push(
                        ((e, { type: t, content: r }) =>
                            new Promise(function (n, i) {
                                let o;
                                "script" === t
                                    ? ((o = rU.document.createElement("script")).src = r)
                                    : "link" === t
                                      ? (((o = rU.document.createElement("link")).rel = "stylesheet"),
                                        (o.href = r),
                                        (o.type = "text/css"))
                                      : ((o = rU.document.createElement("style")).innerHTML = r),
                                    (o.onload = function () {
                                        n(r);
                                    }),
                                    (o.onerror = function () {
                                        i(r);
                                    }),
                                    (o.async = !1),
                                    (o.id = btoa(r)),
                                    e.appendChild(o);
                            }))(rU.document.head, t),
                    ),
                    e
                ),
                [],
            ),
        )
            .then(() => {
                (rU.videojs = rU.document.defaultView.videojs), t && t();
            })
            .catch(function (e) {
                console.log(e + " failed to load");
            });
    },
    rJ = (e, t, r) => {
        if (("start" === t && (e.style.visibility = "visible"), "none" === t)) e.style.visibility = rB;
        else if ("success" === t) (e.style.visibility = rB), (e.innerHTML = "Upload succeeded!");
        else {
            let t = Math.round(parseFloat(r));
            (e.innerHTML = `Uploading <span class="ul-upload-progress-label__time">${t}%</span>`),
                (e.style.background = `linear-gradient(to right, #E0E0EB 0%, #E0E0EB ${t}%, #FCFCFD ${t}%, #FCFCFD 100%)`);
        }
    },
    rY = (e, t) => {
        let r = rU.videojs(e.id());
        return null == r ? void 0 : r.payload[t];
    },
    rX = (e, t) => {
        let r = new (rU.videojs.getComponent("Component"))(e);
        return (
            r.addClass("ul-buttons-panel"),
            t.map((e) => {
                r.addChild(e);
            }),
            r1(r),
            r
        );
    },
    r1 = (e) => {
        e.children().forEach((e) => {
            if (np[e.name_]) {
                let t = r0(np[e.name_], `ul-${np[e.name_]}`);
                e.el_.appendChild(t);
            }
        });
    },
    r0 = (e, t = "") => {
        let r = rU.document.createElement("span");
        return (r.className = "ul-button-text"), (r.innerHTML = e), (r.id = t), r;
    },
    r3 = (e, t, r, n, i = !1, o) => {
        e.addClass("ul-video-player");
        let l = new (rU.videojs.getComponent("Component"))(e);
        l.addClass("ul-control-panel"),
            (e.progressBar = l.addChild("ProgressControl")),
            r && e.src(r),
            (e.audioPlayerPlaceholder = new (rU.videojs.getComponent("Component"))(e)),
            e.audioPlayerPlaceholder.addClass("ul-audio-recorder-placeholder");
        let a = r && r.src ? r9(r.src) : null;
        r && (i || !a)
            ? (e.children()[0].classList.add("vjs-hidden"),
              (rU.document.getElementById(`${e.id()}_html5_api`).style.height = "0px"))
            : (e.audioPlayerPlaceholder.hide(),
              (rU.document.getElementById(`${e.id()}_html5_api`).style.height = "100%"),
              a && e.poster(a)),
            e.on("play", () => {
                i || !r || a || r6(e), null == o || o.play();
            }),
            e.on("pause", () => {
                null == o || o.pause();
            }),
            e.on("seeked", () => {
                null == o || o.currentTime(e.currentTime());
            }),
            e.on("ratechange", () => {
                null == o || o.playbackRate(e.playbackRate());
            }),
            e.addChild(e.audioPlayerPlaceholder, {}, 1),
            l.addChild(t),
            e.addChild(l),
            n && n(e);
    },
    r5 = (e, t = 3) => {
        let r = rU.document.getElementById("ul-recording-countdown-screen");
        r && 0 === t
            ? (r.remove(), e.record().start())
            : r &&
              ((r.innerHTML = `<span class='ul-countdown-text'>Recording in... ${t}</span>`),
              setTimeout(() => {
                  r5(e, t - 1);
              }, 1000));
    },
    r2 = (e) => {
        let t = rU.document.createElement("div");
        return (
            (t.className = "ul-video-container"),
            t.appendChild(
                ((e) => {
                    let t = rU.document.createElement("div");
                    return (
                        (t.className = "ul-video-player-loading"),
                        (t.id = e + "-loading-spiner"),
                        ["first", "second", "third", "fourth"].map((e) => {
                            let r = rU.document.createElement("div");
                            (r.className = e), t.appendChild(r);
                        }),
                        t
                    );
                })(e),
            ),
            t
        );
    },
    r4 = (e, t) => {
        let r = rU.document.createElement("video");
        (r.id = e), (r.className = "video-js vjs-default-skin ul-video-player-video");
        let n = rU.document.createElement("p");
        (n.className = "vjs-no-js"),
            (n.innerHTML = "To view this video please enable JavaScript, and consider upgrading to a web browser that");
        let i = rU.document.createElement("a");
        return (
            (i.href = "https://videojs.com/html5-video-support/"),
            (i.target = "_blank"),
            (i.innerHTML = "supports HTML5 video"),
            n.appendChild(i),
            r.appendChild(n),
            t.appendChild(r),
            t
        );
    },
    r6 = (e, t) => {
        e.children()[0].classList.remove("vjs-hidden"),
            e.audioPlayerPlaceholder.hide(),
            (rU.document.getElementById(`${e.id()}_html5_api`).style.height = "100%");
    },
    r8 = (e, t) =>
        rU.document.getElementById(e)
            ? t
                ? rU.videojs(e, t)
                : rU.videojs(e)
            : (console.error(`Error in finding player element with ID, ${e}`), null),
    r9 = (e) => {
        if (!e) return null;
        let t = e.match(/https:\/\/stream.mux.com\/(.*)/),
            r = t ? t[1] : null;
        return r.includes(rq) && (r = r.replace(rq, "")), r ? `https://image.mux.com/${r}/thumbnail.jpg?time=0` : null;
    },
    r7 = "upload.started",
    ne = "upload.progress",
    nt = "upload.finished",
    nr = "delete",
    nn = "error",
    ni = "media.type",
    no = "permission_denied",
    nl = "other",
    na = "upload.id",
    ns = "upload.progress.pct",
    nd = "media.recording.uid",
    nc = "video",
    nu = "audio",
    np = {
        PlaybackRateMenuButton: "Speed",
        PlayToggle: "Play",
        FullscreenToggle: "Expand",
        TurnOnCamera: "Turn on",
        TurnOffCamera: "Turn off",
        DeleteButton: "Delete",
        RecordButton: "Record",
        StopButton: "Stop",
        PauseButton: "Pause",
    },
    nh = "ul-card-video__player_recorder",
    nm = "ul-video-btn",
    nv = ({ className: e, message: t, next: r, properties: o, questionId: l, type: a }) => {
        let {
                apiURL: s,
                envId: d,
                handleUploadUpdate: c,
                headers: u,
                responseGroupUid: p,
                surveyId: h,
                update: m,
                viewDocument: g,
                visitorId: f,
            } = tN((e) => ({
                apiURL: e.apiURL,
                envId: e.envId,
                handleUploadUpdate: e.handleUploadUpdate,
                headers: e.headers,
                responseGroupUid: e.responseGroupUid,
                surveyId: e.surveyId,
                update: e.update,
                viewDocument: e.viewDocument,
                visitorId: e.userId,
            })),
            [_, b] = eo(!1),
            [y, x] = eo(null),
            [k, w] = eo(null),
            [C, S] = eo(0),
            E = ed(null),
            j = o && o.videoUrl;
        ea(() => {
            let e = E.current,
                t = new ResizeObserver(() => {
                    m();
                });
            return (
                e && t.observe(e),
                () => {
                    e && t.unobserve(e);
                }
            );
        }, [m]);
        let T = (e, t) => {
                e === r7
                    ? (x(t[na]), w(t[nd]), b(!0))
                    : e === nr
                      ? (x(null), w(null), b(!1))
                      : e === ne
                        ? isNaN(t[ns])
                            ? c({
                                  mediaRecordingUid: t[nd],
                                  isComplete: !0,
                              })
                            : c({
                                  mediaRecordingUid: t[nd],
                                  progressPct: t[ns],
                              })
                        : e === nt &&
                          c({
                              mediaRecordingUid: t[nd],
                              isComplete: !0,
                          });
            },
            I = (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    document.getElementById(nh) &&
                        ((e) => {
                            let t = e + rZ;
                            if (rU.document.getElementById(t) && rU.videojs) {
                                try {
                                    if (!rU.videojs(t).record().stream) return;
                                } catch {
                                    return;
                                }
                                rU.videojs(t).record().stop(), rU.videojs(t).record().stopDevice();
                            }
                        })(nh),
                    y && k
                        ? (c({
                              mediaRecordingUid: k,
                              isSubmitted: !0,
                          }),
                          r({
                              value: { mediaRecordingUid: k },
                              questionId: l,
                              type: a,
                          }))
                        : r({
                              value: null,
                              questionId: l,
                              type: a,
                          });
            };
        return F("form", {
            className: tq(e, "ul-card--video", "fade-in-transition"),
            id: "ul-video-interview-form",
            children: [
                F(tF, {
                    message: t,
                    properties: o,
                }),
                F(t5, {
                    children: [
                        F("div", {
                            id: "ul-question-player-container",
                            ref: E,
                            style: { display: 0 === C ? "" : "none" },
                            children: [
                                F("div", {
                                    id: nh,
                                    ref: (e) => {
                                        if (e && 0 === e.children.length && !o.hideRecordedPrompt) {
                                            let t = ((
                                                e,
                                                t,
                                                r,
                                                n = !1,
                                                i = "https://api.sprig.com",
                                                o = document,
                                                l = null,
                                                a = null,
                                            ) => {
                                                rU.document = o;
                                                let s = e + rF,
                                                    d = r2(s);
                                                return (
                                                    rU.document.addEventListener("securitypolicyviolation", (e) => {
                                                        rK(
                                                            Error(
                                                                `Voice & Video feature violates ${e.violatedDirective} web page CSP policies for the question player.`,
                                                            ),
                                                            "playerDeviceError",
                                                            i,
                                                            {},
                                                        );
                                                    }),
                                                    rQ(r$, () => {
                                                        rU.document.getElementById(s + "-loading-spiner").remove(),
                                                            r4(s, d);
                                                        let o = {
                                                            playsinline: !0,
                                                            playbackRates: [0.5, 1, 1.5, 2],
                                                            fill: !0,
                                                        };
                                                        try {
                                                            let i = e + rW;
                                                            r4(i, d);
                                                            let c = r8(s, o),
                                                                u = r8(i, {
                                                                    muted: !0,
                                                                    ...o,
                                                                });
                                                            if (!c || !u) return;
                                                            ((e, t, r) => {
                                                                e.addClass(`ul${rW}`);
                                                                let n = new (rU.videojs.getComponent("Component"))(e);
                                                                t && e.src(t), e.addChild(n), r && r(e);
                                                            })(u, l, a),
                                                                l || u.addClass(rB);
                                                            let p = rX(c, [
                                                                    "PlaybackRateMenuButton",
                                                                    "PlayToggle",
                                                                    "FullscreenToggle",
                                                                ]),
                                                                h = p
                                                                    .children()
                                                                    .find((e) => "FullscreenToggle" === e.name_);
                                                            h.hasClass("vjs-disabled") && h.hide(),
                                                                r3(c, p, t, r, n, u);
                                                        } catch (e) {
                                                            return void rK(
                                                                Error(`Error when creating video player object ${e}`),
                                                                "playerDeviceError",
                                                                i,
                                                                {},
                                                            );
                                                        }
                                                    }),
                                                    d
                                                );
                                            })(
                                                nh,
                                                {
                                                    src: j,
                                                    type: "application/x-mpegURL",
                                                },
                                                void 0,
                                                o.mediaType === nu,
                                                s,
                                                g,
                                            );
                                            e.appendChild(t);
                                        }
                                    },
                                }),
                                F(tZ, {
                                    defaultBody: () =>
                                        F("button", {
                                            className: `${nm} ul-record-response-btn`,
                                            onClick: (e) => {
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    document.getElementById(nh) &&
                                                        ((e) => {
                                                            let t = r8(e + rF);
                                                            null == t || t.pause();
                                                        })(nh),
                                                    S(1);
                                            },
                                        }),
                                    properties: o,
                                }),
                            ],
                        }),
                        F("div", {
                            style: { display: 1 === C ? "block" : "none" },
                            children: [
                                F("button", {
                                    className: `${nm} ul-back-question-btn`,
                                    onClick: (e) => {
                                        e.preventDefault(), e.stopPropagation(), S(0);
                                    },
                                    style: { display: o.hideRecordedPrompt ? "none" : "block" },
                                }),
                                F("div", {
                                    id: "ul-recorder-player-container",
                                    ref: (e) => {
                                        if (e && 0 === e.children.length) {
                                            let t = ((
                                                e,
                                                t = {},
                                                r = "https://api.userleap.com",
                                                o,
                                                l,
                                                a,
                                                s = !1,
                                                d = document,
                                            ) => {
                                                rU.document = d;
                                                let c = e + rZ,
                                                    u = r2(c);
                                                return (
                                                    rU.document.addEventListener("securitypolicyviolation", (e) => {
                                                        rK(
                                                            Error(
                                                                `Voice & Video feature violates ${e.violatedDirective} web page CSP policies for the recorder player.`,
                                                            ),
                                                            "recorderDeviceError",
                                                            r,
                                                            a,
                                                            t.visitorId,
                                                            t.envId,
                                                        );
                                                    }),
                                                    rQ(r$.concat(rz), () => {
                                                        r4(c, u),
                                                            rU.document.getElementById(c + "-loading-spiner").remove();
                                                        try {
                                                            ((e, t, r, o, l, a, s, d = !1) => {
                                                                let c;
                                                                i = Date.now();
                                                                let u = r8(t, {
                                                                    controls: !1,
                                                                    bigPlayButton: !1,
                                                                    fluid: !1,
                                                                    width: 1280,
                                                                    height: 720,
                                                                    playsinline: !0,
                                                                    plugins: {
                                                                        record: {
                                                                            audio: !0,
                                                                            video: {
                                                                                mandatory: {
                                                                                    minWidth: 1280,
                                                                                    minHeight: 720,
                                                                                },
                                                                            },
                                                                            frameWidth: 1280,
                                                                            frameHeight: 720,
                                                                            maxLength: 600,
                                                                            autoMuteDevice: !0,
                                                                        },
                                                                    },
                                                                });
                                                                if (!u) return;
                                                                u.payload = r;
                                                                let {
                                                                        surveyId: p,
                                                                        questionId: h,
                                                                        responseGroupUid: m,
                                                                        visitorId: g,
                                                                        envId: f,
                                                                    } = r,
                                                                    _ = (e) => {
                                                                        let t = rV + "-audio-only";
                                                                        rJ(u.uploadProgressLabel, "none"),
                                                                            n && n.startTime >= i && n.abort();
                                                                        let r =
                                                                            rU.document.getElementById(
                                                                                "ul-camera-button",
                                                                            );
                                                                        e
                                                                            ? (u
                                                                                  .children()[0]
                                                                                  .classList.add("vjs-hidden"),
                                                                              k.removeClass(rV),
                                                                              k.addClass(t),
                                                                              (r.innerHTML = np.TurnOnCamera),
                                                                              u.audioPlayerPlaceholder.removeClass(
                                                                                  "vjs-hidden",
                                                                              ),
                                                                              null == c ||
                                                                                  c.getTracks().forEach((e) => {
                                                                                      e.stop();
                                                                                  }),
                                                                              window.navigator.mediaDevices
                                                                                  .getUserMedia({
                                                                                      video: !0,
                                                                                      audio: !0,
                                                                                  })
                                                                                  .then((e) => {
                                                                                      (c = e),
                                                                                          e
                                                                                              .getVideoTracks()
                                                                                              .forEach((e) => {
                                                                                                  e.enabled = !1;
                                                                                              }),
                                                                                          u.record().onDeviceReady(e);
                                                                                  })
                                                                                  .catch(
                                                                                      u
                                                                                          .record()
                                                                                          .onDeviceError.bind(
                                                                                              u.record(),
                                                                                          ),
                                                                                  ))
                                                                            : (null == c ||
                                                                                  c.getVideoTracks().forEach((e) => {
                                                                                      e.enabled = !0;
                                                                                  }),
                                                                              u
                                                                                  .children()[0]
                                                                                  .classList.remove("vjs-hidden"),
                                                                              u.record().getDevice(),
                                                                              k.removeClass(t),
                                                                              k.addClass(rV),
                                                                              (r.innerHTML = np.TurnOffCamera),
                                                                              u.audioPlayerPlaceholder.addClass(
                                                                                  "vjs-hidden",
                                                                              ));
                                                                    },
                                                                    b = new (rU.videojs.getComponent("Button"))(u, {
                                                                        clickHandler: () => {
                                                                            b.hasClass(rB) ||
                                                                                (rG({
                                                                                    event: "Video Delete Button Clicked",
                                                                                    apiBase: o,
                                                                                    headers: s,
                                                                                    visitorId: g,
                                                                                    envId: f,
                                                                                    metadata: {
                                                                                        questionId: h,
                                                                                        responseGroupUid: m,
                                                                                        surveyId: p,
                                                                                    },
                                                                                }),
                                                                                _(u.cameraOff),
                                                                                l(nr, {}),
                                                                                k.removeClass(rB),
                                                                                b.addClass(rB));
                                                                        },
                                                                    });
                                                                b.addClass("ul-video-recorder-delete-button"),
                                                                    b.el_.appendChild(
                                                                        r0(np.DeleteButton, "ul-delete-button"),
                                                                    );
                                                                let y = rU.document.getElementById(t),
                                                                    x = () => {
                                                                        y.classList.contains("vjs-fullscreen") &&
                                                                        u.cameraOff
                                                                            ? (y.style.display = "table")
                                                                            : (y.style.display = "flex");
                                                                    };
                                                                x();
                                                                let k = new (rU.videojs.getComponent("Button"))(u, {
                                                                    clickHandler: () => {
                                                                        u.record().isRecording() ||
                                                                            ((u.cameraOff = !u.cameraOff),
                                                                            rG({
                                                                                event: "Video Camera Button Clicked",
                                                                                apiBase: o,
                                                                                headers: s,
                                                                                visitorId: r.visitorId,
                                                                                envId: r.envId,
                                                                                metadata: {
                                                                                    questionId: h,
                                                                                    responseGroupUid: m,
                                                                                    surveyId: p,
                                                                                    cameraOff: u.cameraOff,
                                                                                },
                                                                            }),
                                                                            _(u.cameraOff),
                                                                            b.hasClass(rB) || b.addClass(rB),
                                                                            l(nr, {}),
                                                                            x());
                                                                    },
                                                                });
                                                                k.addClass(rV),
                                                                    k.el_.appendChild(
                                                                        r0(np.TurnOffCamera, "ul-camera-button"),
                                                                    );
                                                                let w = new (rU.videojs.getComponent("Button"))(u, {
                                                                    clickHandler: () => {
                                                                        let e =
                                                                            rU.document.getElementById(
                                                                                "ul-recorder-toggle",
                                                                            );
                                                                        if (u.record().isRecording())
                                                                            u.record().stop(),
                                                                                e && (e.innerHTML = np.RecordButton),
                                                                                w.removeClass(rA),
                                                                                b.removeClass(rB);
                                                                        else {
                                                                            let t = rU.document.getElementById(
                                                                                "ul-recording-countdown-screen",
                                                                            );
                                                                            if (t)
                                                                                t.remove(),
                                                                                    e &&
                                                                                        (e.innerHTML = np.RecordButton),
                                                                                    _(u.cameraOff),
                                                                                    l(nr, {}),
                                                                                    k.removeClass(rB),
                                                                                    b.addClass(rB),
                                                                                    w.removeClass(rA),
                                                                                    E.show();
                                                                            else {
                                                                                w.addClass(rA),
                                                                                    E.hide(),
                                                                                    k.addClass(rB),
                                                                                    b.addClass(rB),
                                                                                    e && (e.innerHTML = np.StopButton);
                                                                                let t =
                                                                                    rU.document.createElement("div");
                                                                                (t.id =
                                                                                    "ul-recording-countdown-screen"),
                                                                                    y.insertBefore(t, y.children[1]),
                                                                                    (t.style.height = `${y.offsetHeight}px`),
                                                                                    r5(u, 3);
                                                                            }
                                                                        }
                                                                    },
                                                                });
                                                                w.addClass("ul-video-recorder-toggle-button"),
                                                                    w.el_.appendChild(
                                                                        r0(np.RecordButton, "ul-recorder-toggle"),
                                                                    );
                                                                let C = rU.document.createElement("p");
                                                                (C.style.visibility = "hidden"),
                                                                    (C.className = "ul-upload-progress-label"),
                                                                    e.appendChild(C),
                                                                    (u.uploadProgressLabel = C);
                                                                let S = rX(u, [
                                                                        b,
                                                                        k,
                                                                        "PlayToggle",
                                                                        w,
                                                                        "FullscreenToggle",
                                                                    ]),
                                                                    E = S.children().find(
                                                                        (e) => "FullscreenToggle" === e.name_,
                                                                    );
                                                                E.hasClass("vjs-disabled") && E.hide();
                                                                let j = S.children().find(
                                                                    (e) => "PlayToggle" === e.name_,
                                                                );
                                                                j.hide(),
                                                                    b.addClass(rB),
                                                                    r3(u, S, a, !1, d),
                                                                    u.on("stopRecord", () => {
                                                                        w.hide(), j.show(), E.show(), b.removeClass(rB);
                                                                    }),
                                                                    u.on("deviceReady", () => {
                                                                        w.show(), j.hide(), b.addClass(rB);
                                                                    }),
                                                                    ((e, t, r, i, o) => {
                                                                        let {
                                                                            surveyId: l,
                                                                            responseGroupUid: a,
                                                                            visitorId: s,
                                                                            envId: d,
                                                                        } = e.payload;
                                                                        e.on("deviceError", function () {
                                                                            console.warn(
                                                                                "device error: ",
                                                                                e.deviceErrorCode,
                                                                            ),
                                                                                "Permission denied" ===
                                                                                e.deviceErrorCode.message
                                                                                    ? (e.deviceButton.addClass(
                                                                                          "permission-denied",
                                                                                      ),
                                                                                      r && r(nn, { type: no }),
                                                                                      rG({
                                                                                          event: "Video Permission Denied",
                                                                                          apiBase: t,
                                                                                          headers: o,
                                                                                          visitorId: s,
                                                                                          envId: d,
                                                                                          metadata: {
                                                                                              questionId: rY(e, rO),
                                                                                              responseGroupUid: a,
                                                                                              surveyId: l,
                                                                                          },
                                                                                      }))
                                                                                    : (r && r(nn, { type: nl }),
                                                                                      rK(
                                                                                          Error(
                                                                                              e.deviceErrorCode.message,
                                                                                          ),
                                                                                          "recorderDeviceError",
                                                                                          t,
                                                                                          o,
                                                                                          s,
                                                                                          d,
                                                                                      ));
                                                                        }),
                                                                            e.on("error", function (r, n) {
                                                                                rK(
                                                                                    n || e.error(),
                                                                                    "recorderError",
                                                                                    t,
                                                                                    o,
                                                                                    s,
                                                                                    d,
                                                                                );
                                                                            }),
                                                                            e.on("startRecord", function (r, n) {
                                                                                i(e.uploadProgressLabel, "none"),
                                                                                    rG({
                                                                                        event: "Video Record Start",
                                                                                        apiBase: t,
                                                                                        headers: o,
                                                                                        visitorId: s,
                                                                                        envId: d,
                                                                                        metadata: {
                                                                                            questionId: rY(e, rO),
                                                                                            responseGroupUid: a,
                                                                                            surveyId: l,
                                                                                        },
                                                                                    });
                                                                            }),
                                                                            e.on("finishRecord", async function () {
                                                                                i(e.uploadProgressLabel, "start", 0);
                                                                                let c = rY(e, rO);
                                                                                if (!l)
                                                                                    return (
                                                                                        r && r(nn, { type: nl }),
                                                                                        rK(
                                                                                            Error(
                                                                                                "internal error: missing fields in payload",
                                                                                            ),
                                                                                            "finishRecord",
                                                                                            t,
                                                                                            o,
                                                                                            s,
                                                                                            d,
                                                                                        ),
                                                                                        null
                                                                                    );
                                                                                e.record().stopDevice();
                                                                                let u = e.cameraOff ? nu : nc,
                                                                                    p = (0, v.v)();
                                                                                rG({
                                                                                    event: "Video Record Finish",
                                                                                    apiBase: t,
                                                                                    headers: o,
                                                                                    visitorId: s,
                                                                                    envId: d,
                                                                                    metadata: {
                                                                                        mediaRecordingUid: p,
                                                                                        questionId: c,
                                                                                        responseGroupUid: a,
                                                                                        surveyId: l,
                                                                                        mediaType: u,
                                                                                    },
                                                                                });
                                                                                let h = {
                                                                                    surveyId: l,
                                                                                    updatedAt: new Date().toISOString(),
                                                                                    mediaType: u,
                                                                                    mediaRecordingUid: p,
                                                                                };
                                                                                c && (h.questionId = c),
                                                                                    a && (h.responseGroupUid = a),
                                                                                    s && (h.visitorId = s);
                                                                                let m = await (async () => {
                                                                                    let e = await fetch(
                                                                                        `${t}/2/environments/integrations/upload`,
                                                                                        {
                                                                                            method: "POST",
                                                                                            cache: "no-cache",
                                                                                            headers: {
                                                                                                "Content-Type":
                                                                                                    "application/json",
                                                                                            },
                                                                                            body: JSON.stringify(h),
                                                                                        },
                                                                                    );
                                                                                    if (e.ok) {
                                                                                        let t = await e.json();
                                                                                        return (
                                                                                            r &&
                                                                                                r(r7, {
                                                                                                    [na]: t.upload.id,
                                                                                                    [ni]: u,
                                                                                                    [nd]: p,
                                                                                                }),
                                                                                            t.upload.url
                                                                                        );
                                                                                    }
                                                                                    return (
                                                                                        r &&
                                                                                            r(nn, {
                                                                                                type: nl,
                                                                                                response: e,
                                                                                            }),
                                                                                        rK(
                                                                                            Error(
                                                                                                "failed to get upload response with url",
                                                                                            ),
                                                                                            "finishRecord",
                                                                                            t,
                                                                                            o,
                                                                                            s,
                                                                                            d,
                                                                                        ),
                                                                                        null
                                                                                    );
                                                                                })();
                                                                                m &&
                                                                                    (((n =
                                                                                        rU.document.defaultView.UpChunk.createUpload(
                                                                                            {
                                                                                                endpoint: m,
                                                                                                file: new rU.document.defaultView.File(
                                                                                                    [e.recordedData],
                                                                                                    `recording ${u} ${Date.now()}`,
                                                                                                ),
                                                                                                chunkSize: 5120,
                                                                                            },
                                                                                        )).startTime = Date.now()),
                                                                                    rG({
                                                                                        event: "Video Upload Start",
                                                                                        apiBase: t,
                                                                                        headers: o,
                                                                                        visitorId: s,
                                                                                        envId: d,
                                                                                        metadata: {
                                                                                            mediaRecordingUid: p,
                                                                                            questionId: c,
                                                                                            responseGroupUid: a,
                                                                                            surveyId: l,
                                                                                            mediaType: u,
                                                                                            url: m,
                                                                                        },
                                                                                    }),
                                                                                    n.on("error", (n) => {
                                                                                        i(
                                                                                            e.uploadProgressLabel,
                                                                                            "none",
                                                                                        ),
                                                                                            r && r(nt, { [nd]: p }),
                                                                                            rK(
                                                                                                n,
                                                                                                "finishRecord",
                                                                                                t,
                                                                                                o,
                                                                                                s,
                                                                                                d,
                                                                                            );
                                                                                    }),
                                                                                    n.on("progress", (t) => {
                                                                                        r &&
                                                                                            r(ne, {
                                                                                                [nd]: p,
                                                                                                [ns]: t.detail,
                                                                                            }),
                                                                                            i(
                                                                                                e.uploadProgressLabel,
                                                                                                "progress",
                                                                                                t.detail,
                                                                                            );
                                                                                    }),
                                                                                    n.on("success", () => {
                                                                                        i(
                                                                                            e.uploadProgressLabel,
                                                                                            "success",
                                                                                        ),
                                                                                            r && r(nt, { [nd]: p }),
                                                                                            rG({
                                                                                                event: "Video Upload Success",
                                                                                                apiBase: t,
                                                                                                headers: o,
                                                                                                visitorId: s,
                                                                                                envId: d,
                                                                                                metadata: {
                                                                                                    mediaRecordingUid:
                                                                                                        p,
                                                                                                    questionId: c,
                                                                                                    responseGroupUid: a,
                                                                                                    surveyId: l,
                                                                                                    mediaType: u,
                                                                                                    url: m,
                                                                                                    elapsedMs:
                                                                                                        n.startTime &&
                                                                                                        Date.now() -
                                                                                                            n.startTime,
                                                                                                },
                                                                                            });
                                                                                    }));
                                                                            });
                                                                    })(u, o, l, rJ, s);
                                                                let T = [{ name: "microphone" }];
                                                                u.cameraOff || T.push({ name: "camera" }),
                                                                    Promise.all(
                                                                        T.map((e) => {
                                                                            var t;
                                                                            return null ==
                                                                                (t =
                                                                                    null == navigator
                                                                                        ? void 0
                                                                                        : navigator.permissions)
                                                                                ? void 0
                                                                                : t.query(e);
                                                                        }),
                                                                    )
                                                                        .then((e) => {
                                                                            e.reduce(
                                                                                (e, t) => e & ("granted" === t.state),
                                                                                !0,
                                                                            ) &&
                                                                                u &&
                                                                                (u.deviceButton &&
                                                                                    u.deviceButton.hide(),
                                                                                u.record().getDevice());
                                                                        })
                                                                        .catch((e) => {});
                                                            })(u, c, t, r, o, l, a, s);
                                                        } catch (e) {
                                                            return void rK(
                                                                Error(
                                                                    `Error when creating video recorder player object ${e}`,
                                                                ),
                                                                "recorderDeviceError",
                                                                r,
                                                                a,
                                                                t.visitorId,
                                                                t.envId,
                                                            );
                                                        }
                                                    }),
                                                    u
                                                );
                                            })(
                                                nh,
                                                {
                                                    surveyId: h,
                                                    responseGroupUid: p,
                                                    questionId: l,
                                                    visitorId: f,
                                                    envId: d,
                                                },
                                                s,
                                                T,
                                                void 0,
                                                {
                                                    ...u,
                                                    "x-ul-video-recorder-origin": "sdk",
                                                },
                                                o.mediaType === nu,
                                                g,
                                            );
                                            e.appendChild(t);
                                        }
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                F(t2, {
                    children: [
                        F(tV, {
                            disabled: !_,
                            onClick: I,
                            children: t4(o),
                        }),
                        F("button", {
                            className: "ul-card-text__button ul-button-inactive ul-card-skip__button",
                            id: "ul-card-video__skip_button",
                            onClick: I,
                            style: {
                                display: o.required ? "none" : "block",
                                ...(_ ? { display: "none" } : {}),
                            },
                            children: t6(o),
                        }),
                    ],
                }),
            ],
        });
    },
    ng = ({ className: e }) => {
        let t,
            r,
            { uploadProgress: n } = tN((e) => ({ uploadProgress: e.uploadProgress }));
        Object.values(n).filter((e) => e.isSubmitted).length > 1
            ? ((t = "Your responses are processing"),
              (r = "Please keep this tab open until your responses are fully processed."))
            : ((t = "Your response is processing"),
              (r = "Please keep this tab open until your response is fully processed."));
        let i = Math.round(
            Math.min(
                99,
                ...Object.values(n)
                    .filter((e) => e.isSubmitted)
                    .map((e) => e.progressPct || 0),
            ),
        );
        return F("div", {
            className: tq(e, "ul-card--uploading", "fade-in-transition"),
            children: [
                F("div", {
                    "aria-busy": "true",
                    "aria-label": "Processing...",
                    "aria-live": "polite",
                    className: "ul-loading-spinner-container",
                    role: "progressbar",
                    children: F("div", {
                        className: "ul-loading-spinner",
                        children: [
                            F("div", { className: "first" }),
                            F("div", { className: "second" }),
                            F("div", { className: "third" }),
                            F("div", { className: "fourth" }),
                        ],
                    }),
                }),
                F(tF, { message: `${t} (${i}% complete)` }),
                F("p", {
                    className: "ul-caption",
                    children: r,
                }),
            ],
        });
    },
    nf = ({ logoOnly: e = !1, style: t = {} }) =>
        F("svg", {
            alt: (e ? "Powered by " : "") + "Sprig",
            width: e ? "35" : "112",
            height: "15",
            viewBox: e ? "79 0 31 15" : "0 0 112 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                display: "block",
                ...t,
            },
            children: [
                !e &&
                    F("path", {
                        d: "M0.648926 12.0181V2.8584H4.21631C6.0127 2.8584 7.25684 4.06445 7.25684 5.86084V5.87354C7.25684 7.66357 6.0127 8.88867 4.21631 8.88867H2.0708V12.0181H0.648926ZM3.86084 4.05811H2.0708V7.69531H3.86084C5.09229 7.69531 5.80957 7.02881 5.80957 5.87988V5.86719C5.80957 4.72461 5.09229 4.05811 3.86084 4.05811ZM11.6621 12.1514C9.63721 12.1514 8.39941 10.7993 8.39941 8.57764V8.56494C8.39941 6.34961 9.64355 4.99121 11.6621 4.99121C13.6743 4.99121 14.9185 6.34326 14.9185 8.56494V8.57764C14.9185 10.7993 13.6807 12.1514 11.6621 12.1514ZM11.6621 11.0024C12.8428 11.0024 13.5156 10.1011 13.5156 8.57764V8.56494C13.5156 7.03516 12.8428 6.14014 11.6621 6.14014C10.4751 6.14014 9.80859 7.03516 9.80859 8.56494V8.57764C9.80859 10.1074 10.4751 11.0024 11.6621 11.0024ZM17.6226 12.0181L15.7183 5.12451H17.1021L18.3398 10.4438H18.4414L19.8633 5.12451H21.1709L22.5928 10.4438H22.7007L23.9321 5.12451H25.2969L23.3989 12.0181H21.9834L20.5552 6.87646H20.4473L19.0254 12.0181H17.6226ZM29.334 12.1514C27.3154 12.1514 26.0967 10.7739 26.0967 8.59033V8.58398C26.0967 6.43213 27.3408 4.99121 29.2642 4.99121C31.1875 4.99121 32.3682 6.38135 32.3682 8.45068V8.93311H27.4805C27.5059 10.2534 28.2295 11.0215 29.3657 11.0215C30.248 11.0215 30.7749 10.5835 30.9399 10.228L30.9653 10.1772L32.292 10.1709L32.2793 10.228C32.0508 11.1357 31.0986 12.1514 29.334 12.1514ZM29.2705 6.12109C28.3311 6.12109 27.6201 6.76221 27.4995 7.94922H31.0034C30.8955 6.71777 30.2036 6.12109 29.2705 6.12109ZM34.0059 12.0181V5.12451H35.3833V6.16553H35.4849C35.7324 5.43555 36.3735 5.00391 37.2939 5.00391C37.5161 5.00391 37.7573 5.03564 37.897 5.06738V6.33691C37.6494 6.28613 37.4146 6.25439 37.1543 6.25439C36.1006 6.25439 35.3833 6.90186 35.3833 7.89844V12.0181H34.0059ZM41.9277 12.1514C39.9092 12.1514 38.6904 10.7739 38.6904 8.59033V8.58398C38.6904 6.43213 39.9346 4.99121 41.8579 4.99121C43.7812 4.99121 44.9619 6.38135 44.9619 8.45068V8.93311H40.0742C40.0996 10.2534 40.8232 11.0215 41.9595 11.0215C42.8418 11.0215 43.3687 10.5835 43.5337 10.228L43.5591 10.1772L44.8857 10.1709L44.873 10.228C44.6445 11.1357 43.6924 12.1514 41.9277 12.1514ZM41.8643 6.12109C40.9248 6.12109 40.2139 6.76221 40.0933 7.94922H43.5972C43.4893 6.71777 42.7974 6.12109 41.8643 6.12109ZM49.1133 12.1323C47.3804 12.1323 46.2568 10.7422 46.2568 8.57764V8.56494C46.2568 6.38135 47.3613 5.00391 49.1133 5.00391C50.0591 5.00391 50.8652 5.47363 51.2334 6.21631H51.3413V2.42041H52.7124V12.0181H51.3413V10.9326H51.2334C50.8335 11.688 50.0781 12.1323 49.1133 12.1323ZM49.5068 10.958C50.6558 10.958 51.3604 10.0503 51.3604 8.57764V8.56494C51.3604 7.09229 50.6494 6.18457 49.5068 6.18457C48.3516 6.18457 47.6597 7.08594 47.6597 8.56494V8.57764C47.6597 10.0566 48.3516 10.958 49.5068 10.958ZM61.98 12.1323C61.0151 12.1323 60.2598 11.688 59.8599 10.9326H59.7583V12.0181H58.3809V2.42041H59.7583V6.21631H59.8599C60.228 5.47363 61.0342 5.00391 61.98 5.00391C63.7319 5.00391 64.8364 6.38135 64.8364 8.56494V8.57764C64.8364 10.7422 63.7192 12.1323 61.98 12.1323ZM61.5928 10.958C62.7417 10.958 63.4336 10.0566 63.4336 8.57764V8.56494C63.4336 7.08594 62.7417 6.18457 61.5928 6.18457C60.4438 6.18457 59.7329 7.09229 59.7329 8.56494V8.57764C59.7329 10.0503 60.4438 10.958 61.5928 10.958ZM66.8867 14.4429C66.7153 14.4429 66.5122 14.4302 66.3345 14.4111V13.3257C66.4678 13.3447 66.6392 13.3511 66.7979 13.3511C67.439 13.3511 67.8262 13.0781 68.0293 12.3799L68.1309 12.0244L65.6299 5.12451H67.1152L68.8418 10.6343H68.9624L70.6826 5.12451H72.1299L69.5654 12.2847C68.9814 13.9287 68.2832 14.4429 66.8867 14.4429Z",
                        fill: "black",
                        fillOpacity: "0.7",
                    }),
                F("path", {
                    d: "M81.1088 6.63629C79.6878 6.32154 78.9672 5.76865 78.9672 4.99369C78.9672 4.19299 79.736 3.5886 80.7556 3.5886C81.8066 3.5886 82.5995 4.25285 82.5995 5.13336V5.20352H84.0518V5.13336C84.0518 3.52424 82.6405 2.30774 80.7693 2.30774C79.8676 2.30774 79.0414 2.58451 78.4433 3.08655C78.1463 3.33144 77.9077 3.63818 77.7448 3.98479C77.5818 4.33141 77.4984 4.70934 77.5005 5.09153C77.4946 5.44197 77.5675 5.78934 77.714 6.10857C77.8605 6.42779 78.0769 6.71092 78.3475 6.93752C78.8512 7.37584 79.5659 7.70024 80.4709 7.90299C81.9949 8.23898 82.7676 8.81054 82.7676 9.60094C82.7676 10.4576 81.9258 11.1032 80.813 11.1032C79.6571 11.1032 78.7854 10.3856 78.7854 9.43424V9.36408H77.3318V9.43424C77.3318 11.1167 78.8219 12.3847 80.7973 12.3847C81.7421 12.3847 82.6093 12.0983 83.2393 11.5769C83.5519 11.3237 83.8034 11.0048 83.9753 10.6433C84.1472 10.2818 84.2352 9.88702 84.2329 9.48766C84.2329 8.05875 83.1833 7.09907 81.1088 6.63629Z",
                    fill: "black",
                    fillOpacity: "0.7",
                }),
                F("path", {
                    d: "M89.2394 4.68276C88.6963 4.67605 88.1596 4.79915 87.6751 5.04156C87.1905 5.28397 86.7725 5.63851 86.4566 6.07497V4.85204H85.0747V14.8479H86.4566V11.0356C86.7725 11.472 87.1906 11.8265 87.6751 12.0688C88.1596 12.3111 88.6963 12.434 89.2394 12.4272C91.3836 12.4272 93 10.7627 93 8.55495C93 6.34723 91.3836 4.68276 89.2394 4.68276ZM91.5608 8.84202C91.5057 9.41605 91.2512 9.95356 90.8406 10.3633C90.4299 10.773 89.8883 11.0296 89.3078 11.0896C88.5363 11.1669 87.8177 10.9461 87.2841 10.4692C86.7505 9.99222 86.4566 9.3106 86.4566 8.55495C86.4566 7.10159 87.5538 6.00546 89.0087 6.00546C89.7619 6.00546 90.4421 6.29124 90.9171 6.81002C91.407 7.34232 91.6357 8.06385 91.5608 8.84202Z",
                    fill: "black",
                    fillOpacity: "0.7",
                }),
                F("path", {
                    d: "M109.95 4.85407V6.06349C109.298 5.18298 108.292 4.68286 107.153 4.68286C105.017 4.68286 103.406 6.31709 103.406 8.48426C103.406 10.6514 105.017 12.285 107.153 12.285C108.296 12.285 109.303 11.79 109.95 10.9185V11.1046C109.95 12.6101 108.993 13.5826 107.513 13.5826C106.513 13.5826 105.68 13.1494 105.284 12.424L105.264 12.3867H103.838L103.871 12.48C104.112 13.1892 104.583 13.8001 105.211 14.2179C105.841 14.6324 106.637 14.8512 107.513 14.8512C108.637 14.8512 109.594 14.4972 110.28 13.8285C110.967 13.1597 111.332 12.2194 111.332 11.1213V4.85407H109.95ZM109.175 10.3502C108.588 10.905 107.752 11.138 106.879 10.9887C106.361 10.8984 105.886 10.6475 105.523 10.2725C105.16 9.89751 104.927 9.41787 104.859 8.90328C104.736 8.03757 104.999 7.21756 105.581 6.655C106.069 6.19093 106.723 5.93643 107.401 5.94699C107.565 5.94713 107.729 5.96026 107.891 5.98625C108.946 6.15489 109.781 7.01609 109.921 8.0852C110.039 8.96507 109.766 9.78958 109.175 10.3502Z",
                    fill: "black",
                    fillOpacity: "0.7",
                }),
                F("path", {
                    d: "M101.89 2.12378C101.63 2.06766 101.358 2.11486 101.133 2.25518C100.908 2.39551 100.747 2.61769 100.687 2.87371C100.626 3.12973 100.67 3.39902 100.809 3.62339C100.947 3.84775 101.17 4.00917 101.428 4.07275C101.503 4.08936 101.58 4.09778 101.657 4.09786C101.906 4.09824 102.146 4.0083 102.331 3.84518C102.517 3.68206 102.636 3.45714 102.664 3.21327C102.693 2.9694 102.63 2.72361 102.487 2.5227C102.344 2.32179 102.132 2.17981 101.89 2.12378Z",
                    fill: "black",
                    fillOpacity: "0.7",
                }),
                F("path", {
                    d: "M100.967 10.934H99.7755C98.9285 10.934 98.4196 10.3644 98.4196 9.40982C98.4196 8.4791 98.8757 7.36945 99.8054 6.01778L99.8178 5.99976V5.61807L95.8571 5.06453C95.8585 4.90331 95.8162 4.74466 95.7346 4.60501C95.653 4.46536 95.5352 4.34979 95.3932 4.27027C95.0381 4.07718 94.6498 4.07717 94.3279 4.26383C94.1667 4.35799 94.035 4.4945 93.9476 4.65816C93.8602 4.82182 93.8205 5.00623 93.8328 5.19087C93.8452 5.37552 93.9092 5.55315 94.0176 5.70402C94.1261 5.85489 94.2748 5.97309 94.4472 6.04546L93.2151 12.258H94.5833L95.7196 6.35891L97.8593 6.7155C97.284 7.73439 96.9921 8.68442 96.9921 9.53919C96.9921 11.1168 97.9577 12.1498 99.5187 12.2496V12.258H102.346V4.87723H100.967V10.934Z",
                    fill: "black",
                    fillOpacity: "0.7",
                }),
            ],
        }),
    n_ = () => {
        let {
                border: e,
                cards: t,
                forceBrandedLogo: r,
                headers: n,
                index: i,
                marketingUrl: o,
                showSurveyBrand: l,
                slugName: a,
                surveyId: s,
                viewedCardCount: d,
            } = tN((e) => ({
                border: e.border,
                cards: e.cards,
                forceBrandedLogo: e.forceBrandedLogo,
                headers: e.headers,
                index: e.index,
                marketingUrl: e.marketingUrl,
                showSurveyBrand: e.showSurveyBrand,
                slugName: e.slugName,
                surveyId: e.surveyId,
                viewedCardCount: e.viewedCardCount,
            })),
            c = ed(null),
            u = t.filter((e) => "uploading" !== e.type && "thanks" !== e.type),
            p = ((e, t) => {
                let r = new Set(["thanks", "uploading"]);
                if (t >= e.length || t < 0 || r.has(e[t].type)) return 0;
                let n = e.filter((e) => !r.has(e.type));
                if (t === n.length - 1) return 1;
                let i = {
                    [n.length - 1]: 1,
                    [-1]: 0,
                };
                for (let e = n.length - 2; e >= t; e--) {
                    let r = n[e],
                        o = tI(e, r.props.routingOptions);
                    if (0 === o.length) {
                        i[e] = i[e + 1] + 1;
                        continue;
                    }
                    let l = 0,
                        a = tE(r);
                    if (null === a) return n.length - 1 - t;
                    for (let s = 0; s < o.length && 0 !== a.length; s++) {
                        let { comparator: d, target: c, value: u } = o[s],
                            p = a.filter((e) => {
                                let t = tk({ value: e }, r.type, e),
                                    n = tw(e, r.type);
                                return !(
                                    (t && "answered" === d) ||
                                    (n && "partial" === d) ||
                                    (!t && !n && "skipped" === d) ||
                                    ("given_up" === d && tT(e) && "given.up" === e.taskStatus) ||
                                    (t && "open" === r.type && ("contains" === d || "notcontains" === d)) ||
                                    (t && tj(d) && tx[d](e, u))
                                );
                            });
                        if (p.length < a.length) {
                            let r = parseInt(String(c), 10);
                            if ((-1 !== r && r <= e) || r >= n.length) return n.length - 1 - t;
                            l = Math.max(i[r] + 1, l);
                        }
                        a = p;
                    }
                    a.length > 0 && (l = Math.max(i[e + 1] + 1, l)), (i[e] = l);
                }
                return i[t];
            })(t, i),
            h = d + 1,
            m = h / (h + p),
            v = `${o}?utm_source=survey_branding&utm_medium=website&utm_campaign=${a}&utm_content=${s}${r && "&utm_term=poweredby_pill"}`;
        ea(() => {
            c.current && (c.current.style.width = 100 * m + "%");
        }, [m]);
        let g = "thanks" === t[i].type;
        return F("footer", {
            className: "ul-footer " + ("link" === n["userleap-platform"] ? "ul-footer__link" : ""),
            children:
                g && r
                    ? F("a", {
                          dir: "ltr",
                          href: v,
                          rel: "noreferrer",
                          target: "_blank",
                          children: F("div", {
                              className: "thank-you-card-link",
                              children: [
                                  F("div", {
                                      className: "sprig-box-logo",
                                      children: F(nf, {
                                          logoOnly: !0,
                                          style: { margin: "auto" },
                                      }),
                                  }),
                                  F("div", {
                                      children: F("p", {
                                          children: [
                                              "Capture insights about your own product",
                                              F(nb, {
                                                  style: {
                                                      display: "inline-flex",
                                                      marginInlineStart: "4px",
                                                      verticalAlign: "middle",
                                                  },
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      })
                    : F(S, {
                          children: [
                              u.length > 1 &&
                                  F("div", {
                                      id: "ul-progress-bar-container",
                                      children: F("div", {
                                          id: "ul-progress-bar-current",
                                          ref: c,
                                          style: { border: `1px solid ${e || "#000"}` },
                                      }),
                                  }),
                              l
                                  ? F("div", {
                                        className: r ? "yellow-footer-logo" : "",
                                        style: {
                                            marginTop: "4px",
                                            marginBottom: "4px",
                                        },
                                        children: F("a", {
                                            href: v,
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: F("div", {
                                                style: { display: "flex" },
                                                children: [
                                                    F(nf, { logoOnly: !1 }),
                                                    r &&
                                                        F(nb, {
                                                            style: {
                                                                display: "block",
                                                                margin: "auto 0 auto 4px",
                                                                transform: "rotateY(0deg) rotate(-45deg)",
                                                            },
                                                        }),
                                                ],
                                            }),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    },
    nb = ({ style: e }) =>
        F("svg", {
            fill: "none",
            height: "10",
            style: e,
            viewBox: "0 0 12 10",
            width: "12",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                F("path", {
                    d: "M1.47839 5.2085L10.9384 5.2085",
                    stroke: "black",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.35",
                }),
                F("path", {
                    d: "M7.0686 1.15845L10.9386 5.20845L7.0686 9.25845",
                    stroke: "black",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.35",
                }),
            ],
        }),
    ny = () => {
        let e,
            {
                answers: t,
                border: r,
                cards: n,
                close: i,
                configureExitOnOverlayClick: o,
                destroy: l,
                endCard: a,
                eventEmitFn: s,
                fontFamily: d,
                headers: c,
                index: u,
                minScrollableHeight: p,
                next: h,
                previewMode: g,
                productConfig: f,
                seen: _,
                showStripes: b,
                studyType: y,
                surveyId: x,
                update: w,
                useMobileStyling: C,
                viewDocument: S,
            } = tN((e) => ({
                answers: e.answers,
                border: e.border,
                cards: e.cards,
                close: e.close,
                configureExitOnOverlayClick: e.configureExitOnOverlayClick,
                destroy: e.destroy,
                endCard: e.endCard,
                eventEmitFn: e.eventEmitFn,
                fontFamily: e.fontFamily,
                headers: e.headers,
                index: e.index,
                previewMode: e.previewMode,
                productConfig: e.productConfig,
                minScrollableHeight: e.minScrollableHeight,
                next: e.next,
                seen: e.seen,
                showStripes: e.showStripes,
                studyType: e.studyType,
                surveyId: e.surveyId,
                update: e.update,
                useMobileStyling: e.useMobileStyling,
                viewDocument: e.viewDocument,
            })),
            E = ed(null),
            j = ed(!1),
            T = c["userleap-platform"],
            { props: I, type: P, name: N } = n[u];
        ea(() => {
            if (window.Sprig)
                return (
                    (window.Sprig.trackHistory = (e) => tN.getState().trackHistory(e)),
                    () => {
                        window.Sprig.trackHistory = void 0;
                    }
                );
        }, []),
            ea(() => {
                E.current &&
                    (E.current.classList.contains("ul-app--visible") || E.current.classList.add("ul-app--visible"),
                    !j.current &&
                        s &&
                        ((j.current = !0),
                        s(v.S.SurveyAppeared, {
                            name: v.S.SurveyAppeared,
                            "survey.id": x,
                        })));
            }, [s, x]),
            ea(() => {
                let e = () => {
                    "visible" === S.visibilityState && (_(), S.removeEventListener("visibilitychange", e));
                };
                return (
                    S.addEventListener("visibilitychange", e),
                    e(),
                    () => {
                        S.removeEventListener("visibilitychange", e);
                    }
                );
            }, [_, S]),
            ea(() => {
                w();
            }, [u, w]),
            ea(() => {
                o(() => i());
            }, [i, o]);
        let M = async function (e) {
            h({
                data: e,
                completeSurvey: () => {
                    l(m.A);
                },
                endCard: a,
            }),
                (0, m.r)(S);
        };
        if (t) {
            for (let e of t)
                if (e.questionId === N) {
                    let t;
                    if ("multiplechoice" === P) {
                        let r = I.options.find(({ value: t }) => t === e.value);
                        if (!r) break;
                        t = { [r.id]: r.value };
                    } else t = e.value;
                    M({
                        value: t,
                        type: P,
                        questionId: e.questionId,
                    });
                    break;
                }
        }
        let L =
            !C &&
            ((null == f ? void 0 : f.framePosition) === "center" ||
                (null == f ? void 0 : f.desktopDisplay) === "center-modal" ||
                ((null == f ? void 0 : f.placement) || "").includes("center"));
        return F("div", {
            className: tq("ul-app", (0, v.h)(c) ? "ul-app--visible" : "ul-app--overlay"),
            dir: "auto",
            id: m.A,
            onClick: (e) => {
                var t;
                let r = window.sprigAPI,
                    n = e.target;
                if (r && n) {
                    for (let i of [n, n.parentElement])
                        if ((null == (t = null == i ? void 0 : i.tagName) ? void 0 : t.toLowerCase()) === "a") {
                            e.preventDefault();
                            try {
                                let e = new URL(i.href);
                                ("http:" !== e.protocol && "https:" !== e.protocol) ||
                                    null == r ||
                                    r.openUrl(e.toString());
                            } catch (e) {
                                console.error(e);
                            }
                            return;
                        }
                }
            },
            ref: E,
            style: {
                "--theme": r,
                ...(d ? { fontFamily: d.replace(";", "") } : {}),
                ...(L ? { position: "relative" } : {}),
            },
            children: F("div", {
                className: "ul-app__container",
                children: F("div", {
                    className: tq(tO("ul-card__container", C, y)),
                    style: {
                        ...("feedbackButton" !== y || (null == f ? void 0 : f.desktopDisplay) === "center-modal"
                            ? { borderColor: r }
                            : {}),
                        ...((null == f ? void 0 : f.desktopDisplay) === "slider" ? { margin: "0px" } : {}),
                    },
                    children: F("div", {
                        className: "sprig-container",
                        style: { minHeight: p },
                        children: [
                            b &&
                                F("div", {
                                    className: "ul-header__container",
                                    dir: "ltr",
                                    children: F("div", {
                                        className: "ul-header",
                                        children: "For development purposes only",
                                    }),
                                }),
                            g &&
                                F("div", {
                                    className: "ul-header__container",
                                    dir: "ltr",
                                    children: F("div", {
                                        className: "ul-header",
                                        children: "Preview Mode: Response will not be recorded.",
                                    }),
                                }),
                            F("div", {
                                className: tq(((e = "ul-card-main-content"), `${e} ${e}__${T}`)),
                                children: (() => {
                                    let e = {
                                        className: "ul-card",
                                        next: M,
                                        questionId: N,
                                        type: P,
                                    };
                                    switch (P) {
                                        case "consentlegal":
                                            return k(t8, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "likert":
                                            return k(t7, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "matrix":
                                            return k(rn, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "multiplechoice":
                                            return k(ra, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "multipleselect":
                                            return k(rs, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "nps":
                                            return k(rd, {
                                                ...e,
                                                key: N,
                                                props: I,
                                            });
                                        case "open":
                                            return k(rc, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "recordedtask":
                                            return k(rM, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "texturlprompt":
                                            return k(rR, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "thanks":
                                            return k(rH, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "uploading":
                                            return k(ng, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        case "videovoice":
                                            return k(nv, {
                                                ...e,
                                                ...I,
                                                key: N,
                                            });
                                        default:
                                            return null;
                                    }
                                })(),
                            }),
                            F(n_, {}),
                        ],
                    }),
                }),
            }),
        });
    },
    nx = () => (MediaRecorder.isTypeSupported("video/webm") ? "video/webm" : "video/mp4"),
    nk = (e) =>
        new MediaRecorder(e, {
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 2500000,
            mimeType: nx(),
        }),
    nw = (e, t, r) => {
        (r[t] = []),
            (e.ondataavailable = function (e) {
                r[t].push(e.data);
            }),
            (e.currentMediaRecordingUid = t),
            e.start();
    };
function nC(e, t, r, n, i, o) {
    if (e && "inactive" !== e.state) {
        let { "begin.callback": l } = n,
            a = e.currentMediaRecordingUid;
        a &&
            (l && l(a),
            (e.onstop = () =>
                (async function (e, t, r, n, i, o, l) {
                    let a = tN.getState().viewDocument,
                        { "upload.callback": s, "progress.callback": d } = n,
                        c = {
                            mediaType: r,
                            updatedAt: new Date().toISOString(),
                            mediaRecordingUid: i,
                            ...n["passthrough.data"],
                        },
                        u = await (async (e, t) => {
                            var r;
                            let n = await fetch(t, {
                                method: "POST",
                                cache: "no-cache",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(e),
                            });
                            if (n.ok) {
                                let e = await n.json();
                                return null == (r = null == e ? void 0 : e.upload) ? void 0 : r.url;
                            }
                            return null;
                        })(c, e);
                    if (!u) return void (s && s(null, { message: "failed to get upload url" }));
                    let p = new Blob(l, { type: nx() });
                    if (!a.defaultView) return;
                    let h = new a.defaultView.File([p], `recording video ${Date.now()}`),
                        m = o.createUpload({
                            endpoint: u,
                            file: h,
                            chunkSize: 5120,
                        });
                    m.on("error", (e) => {
                        s && s(null, e);
                    }),
                        m.on("progress", (e) => {
                            d && d(i, e);
                        }),
                        m.on("success", () => {
                            s && s(i, !0);
                        });
                })(t, 0, r, n, a, i, o)),
            e.stop());
    }
}
let nS = Object.create({
    state: { chunks: {} },
    stopRecording(e) {
        let { uploadApiEndpoint: t, avRecorder: r, screenRecorder: n, UpChunk: i } = this.state,
            o = this.state.avStream && this.state.avStream.getVideoTracks().length > 0 ? "video" : "audio";
        this.state.chunks &&
            t &&
            i &&
            (null != r &&
                r.currentMediaRecordingUid &&
                nC(r, t, o, e, i, this.state.chunks[null == r ? void 0 : r.currentMediaRecordingUid]),
            null != n &&
                n.currentMediaRecordingUid &&
                nC(n, t, "screen", e, i, this.state.chunks[null == n ? void 0 : n.currentMediaRecordingUid]));
    },
    handleCancelledStream(e) {
        let t = e.getVideoTracks(),
            r = e.getAudioTracks(),
            n = t.length && t[0];
        (n = n || (r.length && r[0])) &&
            n.addEventListener("ended", () => {
                [this.state.avRecorder, this.state.screenRecorder].map((e) => {
                    e &&
                        ("recording" === e.state && e.stop(),
                        e.stream.getTracks().map((e) => {
                            "live" === e.readyState && e.stop();
                        }));
                }),
                    Object.assign(this.state, {
                        avStream: null,
                        captureStream: null,
                        avRecorder: null,
                        screenRecorder: null,
                    });
            });
    },
    taskDurationMillisecond() {
        return this.state.startTime ? new Date().getTime() - this.state.startTime.getTime() : 0;
    },
    setUpChunk(e) {
        this.state.UpChunk = e;
    },
    configure(e, t) {
        Object.assign(this.state, t),
            (this.state.uploadApiEndpoint = `${t.apiURL}/2/environments/integrations/upload`),
            (this.state.chunks = {}),
            e.on("permission.status", this.permissionStatusCallback.bind(this)),
            e.on("av.permission", async (e) => {
                this.avPermissionCallback(e);
            }),
            e.on("begin.recording", this.beginRecordingCallback.bind(this)),
            e.on("start.task", this.startTaskCallback.bind(this)),
            e.on("screen.permission", async (e) => {
                this.screenPermissionCallback(e);
            }),
            e.on("finish.task", async (e) => {
                this.finishTaskCallback(e);
            });
    },
    async avPermissionCallback(e) {
        var t, r, n;
        let { "stream.ready": i, "permission.descriptors": o } = e;
        try {
            null != (t = this.state.avStream) &&
                t.active &&
                (this.state.avStream.getTracks().map((e) => "live" === e.readyState && e.stop()),
                (null == (r = this.state.captureStream) ? void 0 : r.getAudioTracks().length) === 1 &&
                    this.state.captureStream.removeTrack(this.state.captureStream.getAudioTracks()[0])),
                (this.state.avStream = await navigator.mediaDevices.getUserMedia({
                    video: o.includes("camera"),
                    audio: !0,
                })),
                (null == (n = this.state.captureStream) ? void 0 : n.getAudioTracks().length) === 0 &&
                    this.state.captureStream.addTrack(this.state.avStream.getAudioTracks()[0]),
                this.handleCancelledStream(this.state.avStream);
        } catch (e) {
            return console.warn("Error: failed to get permissions: " + e), void (i && i(null, null));
        }
        i && i(this.state.avStream, this.state.captureStream);
    },
    async screenPermissionCallback(e) {
        let { "screen.permission.requested": t, "stream.ready.callback": r } = e;
        null == t || t(!0);
        try {
            this.state.captureStream = await navigator.mediaDevices.getDisplayMedia({
                video: !0,
                cursor: "always",
                displaySurface: "browser",
                preferCurrentTab: !0,
            });
        } catch (e) {
            return (
                null == t || t(!1), console.warn("Error: failed to get permissions: " + e), void (r && r(null, null))
            );
        }
        null == t || t(!1),
            this.state.avStream &&
                this.state.avStream.getAudioTracks().length > 0 &&
                this.state.captureStream.addTrack(this.state.avStream.getAudioTracks()[0]),
            this.handleCancelledStream(this.state.captureStream),
            r && r(this.state.avStream || null, this.state.captureStream);
    },
    beginRecordingCallback(e) {
        let { "recording.media.types": t, "start.recording.callback": r = () => {} } = e;
        if (!t) return;
        let n = [];
        if (t.includes("video") && this.state.avStream) {
            this.state.avRecorder = nk(this.state.avStream);
            let e = (0, v.v)();
            nw(this.state.avRecorder, e, this.state.chunks), n.push(e);
        }
        if (t.includes("screen") && this.state.captureStream) {
            this.state.screenRecorder = nk(this.state.captureStream);
            let e = (0, v.v)();
            nw(this.state.screenRecorder, e, this.state.chunks), n.push(e);
        }
        n && r && r(n);
    },
    async finishTaskCallback(e) {
        let { "current.index": t, "task.response": r, "task.complete.callback": n } = e;
        await this.stopRecording(e),
            n && n(this.taskDurationMillisecond()),
            this.state.cards &&
                void 0 !== this.state.hasEndCard &&
                this.lookAheadAndStopStream(t, r, this.state.cards, this.state.hasEndCard);
    },
    startTaskCallback() {
        this.state.startTime = new Date();
    },
    permissionStatusCallback(e) {
        var t;
        let { "permission.status.callback": r } = e,
            n = this.state.avStream;
        r &&
            r(
                n,
                !!n && (null == n ? void 0 : n.getVideoTracks().length) > 0,
                !!(null != (t = this.state.captureStream) && t.active),
                this.state.captureStream,
            );
    },
    lookAheadAndStopStream(e, t, r, n) {
        let { avRecorder: i, screenRecorder: o } = this.state,
            { allResponses: l } = tN.getState(),
            a = tC({
                cards: r,
                index: e,
                hasEndCard: n,
                allResponses: l,
            });
        (null !== a && "recordedtask" === r[a].type) ||
            [i, o].map((e) => {
                e &&
                    ("recording" === e.state && e.stop(),
                    e.stream.getTracks().map((e) => {
                        "live" === e.readyState && e.stop();
                    }));
            });
    },
});
Object.freeze(nS);
let nE = {
    configure: function (e, t = !0) {
        var r;
        let {
                answers: n,
                apiURL: i,
                endCard: o,
                eventEmitFn: l,
                fontFamilyURL: a,
                frame: s,
                previewKey: d,
                viewDocument: c,
                viewWindow: u,
            } = e,
            p = (0, v.h)(e.headers) ? e.frame : c.body,
            h = e.UpChunk || window.UpChunk,
            g = v.e,
            f = ((e, t) => {
                let r = [...e],
                    n = new Set(["videovoice", "recordedtask"]);
                return (
                    e.some((e) => n.has(e.type)) &&
                        r.push({
                            name: -2,
                            props: { routingOptions: [] },
                            type: "uploading",
                        }),
                    t &&
                        r.push({
                            name: -1,
                            props: { routingOptions: [] },
                            type: "thanks",
                        }),
                    r
                );
            })(e.cards, !!o);
        nS.configure(g, {
            cards: f,
            hasEndCard: !!o,
            apiURL: i,
            UpChunk: h,
        }),
            tN.setState({
                apiURL: i,
                answers: n,
                border: e.border,
                index: e.startingQuestionIdx || 0,
                cards: f,
                configureExitOnOverlayClick: e.configureExitOnOverlayClick,
                customMetadata: e.customMetadata,
                endCard: e.endCard,
                envId: e.envId,
                eventEmitFn: l,
                fontFamily: e.fontFamily,
                forceBrandedLogo: e.forceBrandedLogo,
                frame: s,
                headers: e.headers,
                hasViewedEmbed: !1,
                isPreview: e.isPreview,
                marketingUrl: "https://sprig.com",
                meta: (({ mode: e = null, viewWindow: t, viewDocument: r, trackPageViewUrl: n }) => {
                    let i,
                        o = r.documentElement;
                    try {
                        i = t.parent.location.href;
                    } catch {
                        i = t.location.href;
                    }
                    return {
                        mode: e,
                        sw: t.screen.width,
                        sh: t.screen.height,
                        cw: o.clientWidth,
                        ch: o.clientHeight,
                        p: n ?? i,
                        l: t.navigator.language,
                    };
                })({
                    mode: e.mode,
                    viewWindow: u,
                    viewDocument: c,
                    trackPageViewUrl: e.trackPageViewUrl,
                }),
                mode: e.mode,
                previewKey: d,
                previewMode: e.previewMode,
                productConfig: e.productConfig,
                recorder: nS,
                recorderEventEmitter: g,
                responseGroupUid: e.responseGroupUid,
                showStripes: e.showStripes,
                showSurveyBrand: e.showSurveyBrand,
                slugName: e.slugName,
                styleNonce: e.styleNonce,
                studyType: e.studyType,
                surveyId: e.surveyId,
                tabTitle: e.tabTitle,
                uploadingCardViewed: !1,
                uploadProgress: {},
                useMobileStyling: e.useMobileStyling,
                useDesktopPrototype: e.useDesktopPrototype,
                userId: e.userId,
                viewDocument: e.viewDocument,
                visitorAttributes: e.visitorAttributes,
                viewedCardCount: e.startingQuestionIdx || 0,
            });
        let { head: _ } = c;
        if (
            ((0, m.e)({
                document: c,
                elementId: "sprig-style",
                styleString:
                    'html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}ol,ul{padding-inline-start:1em}.ul-loading-spinner-container{font-size:1.8rem;flex-grow:1;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.ul-loading-spinner{display:inline-block;position:relative;width:6rem;height:6rem}.ul-loading-spinner div{box-sizing:border-box;display:block;position:absolute;width:80%;height:80%;margin:5px;border:5px solid #152e3e;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#152e3e transparent transparent transparent}.ul-loading-spinner .first{animation-delay:-.45s}.ul-loading-spinner .second{animation-delay:-.3s}.ul-loading-spinner .third{animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.fade-in-transition{animation:fadeIn .4s ease-in}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.ul-card{flex:1 1 auto;border-radius:2px;display:flex;flex-direction:column;font-size:17px;line-height:19px;text-align:start;min-width:200px;min-height:0;justify-content:center}.ul-card__container--desktop{border:2px solid #fff;box-shadow:0 0 15px #00000026;margin:15px}.ul-card__container--mobile{border-width:0;box-shadow:0 0 5px #00000040;margin-top:5px}.sprig-container{display:flex;flex-direction:column;width:100%;height:fit-content;flex:1 1 auto;min-height:0;justify-content:center}.ul-card__container{background:#fff;border-radius:6px;display:flex;flex-direction:column;flex-grow:1;flex:1 1 auto;font-size:17px;line-height:23px;padding:0;min-height:0;position:relative;text-align:center;word-break:break-word;overflow:auto}.ul-card__container--desktop_feedbackButton{box-shadow:unset}.ul-card-vertical__button-wrapper{flex-direction:column;align-items:center}.ul-card__button-wrapper{margin-top:4px;display:flex;gap:16px;justify-content:center;align-self:stretch}.sprig-question-footer-container{align-items:center;width:100%;height:fit-content;display:flex;flex-direction:column;padding:12px 20px 0}.ul-rich-text-body{min-height:2em}.ul-rich-text-body,.ul-rich-text-body p{margin-top:10px;margin-bottom:10px}.ul-rich-text-body li{margin:5px 0}.ul-rich-text-body p,.ul-rich-text-body li{font-size:15px;line-height:130.35%;letter-spacing:.02em;color:#343442;text-align:start;white-space:pre-line}.ul-rich-text-body:last-child,.ul-rich-text-body li:last-child{margin-bottom:15px}.ul-card-main-content__link,.ul-card-main-content__email,.ul-card-main-content__web,.ul-card-main-content__android,.ul-card-main-content__ios{display:flex;flex:1 1 auto;min-height:0;flex-direction:column;z-index:2;height:fit-content}.sprig-border-bottom{border-bottom:1px solid rgba(0,0,0,.1)}.sprig-border-top{border-top:1px solid rgba(0,0,0,.1)}.question-header-container{z-index:1}.sprig-header-container{padding:16px}.question-header-button-container{display:grid;grid-template-columns:97fr 3fr;align-items:center;justify-content:space-between;width:100%;height:fit-content}.ul-card--thanks-content .question-header-button-container{justify-content:center}.sprig-question-body{padding:0 20px;min-height:0;flex-shrink:1;overflow:auto;position:relative;align-self:stretch;width:100%}.sprig-stretch{align-self:stretch}.ul-question{color:#343442;display:block;font-size:17px;line-height:125%;font-weight:500;cursor:default;text-align:start}.ul-question ol,.ul-question ul,.ul-caption ol,.ul-caption ul{margin-left:1em}.ul-caption{flex:1 0 auto;font-size:14px;line-height:130.35%;letter-spacing:.02em;color:#6c6c6e;text-align:start;margin-top:4px}.ul-card__choices{margin:5px 0 0;flex:1 0}.choice--mobile{border:2px solid #e6e6e6}.choice--desktop{border:1px solid #e6e6e6}.choice{align-items:flex-start;color:#262136;cursor:pointer;display:flex;justify-content:flex-start;flex-direction:column;box-sizing:border-box;border-radius:3px;margin-bottom:7px;font-size:15px;line-height:20px;padding:10px 20px 10px 15px;background-color:#00000003}.choice--desktop:hover,.choice--desktop:active,.choice--mobile:active{background-color:#0000000d}.choice-label-container{align-items:center;display:flex;flex-direction:row;flex:0 0 fit-content;gap:15px;height:fit-content;justify-content:flex-start;width:100%}.choice-text-entry-container{width:100%;height:fit-content;flex:0 1 fit-content;overflow:hidden}.choice .choice-text-input--mobile{max-height:63px}.choice .choice-text-input--desktop{max-height:150px}.choice .choice-text-input{box-sizing:border-box;background-color:transparent;color:#343442;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;min-height:20px;max-height:60px;padding:0;margin-top:8px;resize:none;width:100%;font-size:14px;line-height:20px;outline:none;border:none;overflow-wrap:break-word}.choice .choice-text-input::placeholder{color:#6c6c6e80}.ul-thanks-check{text-align:center;margin-bottom:20px}.ul-card--thanks-content{padding:20px 0 10px}.ul-card--thanks .ul-question{padding-top:0;text-align:center}.ul-card--thanks .ul-caption{padding-top:0;text-align:center;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto;hyphenate-limit-lines:no-limit}.ul-card--uploading .ul-question{padding-top:15px;text-align:center}.ul-card--uploading .ul-caption{padding-top:5px;text-align:center;overflow-wrap:break-word}.select-checkbox{height:16px;width:16px;display:flex;box-sizing:border-box;background-color:"transparent";align-items:center;justify-content:center;border-radius:4px;border:1px solid #b0b5b7;flex-shrink:0}.select-radio{height:16px;width:16px;border-radius:16px;border:1px solid #323232;display:flex;box-sizing:border-box;box-shadow:inset 2px 2px #0000001a;background-color:"transparent";align-items:center;justify-content:center}.footer{width:100%;margin-top:12px;font-size:12px;line-height:12px;color:#000000b3}[class^=CenteredSurveyLayout] .ul-header__container,[class^=QuestionConceptTestLayout] .ul-header__container,.ul-websurvey-frame .ul-card__container,.ul-websurvey-frame-mobile .ul-card__container{margin-bottom:unset}[class^=CenteredSurveyLayout] .ul-card__container,[class^=QuestionConceptTestLayout] .ul-card__container,.ul-websurvey-frame .ul-card__container,.ul-websurvey-frame-mobile .ul-card__container{align-self:center;box-shadow:unset;border-radius:unset;border:none!important;position:unset;width:100%}@media only screen and (min-height: 600px) and (width: 600px){.ul-card{position:relative;top:-20px}}.ul-vertical-centered-container{display:flex;flex-direction:column;align-items:center;align-self:stretch}.sprig-accordion{width:100%;margin-bottom:8px}.sprig-accordion-body{width:100%;overflow:hidden}.sprig-accordion-header-container{background:transparent;border:none;display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;cursor:pointer;margin:8px 0 0;padding:0;font-family:inherit}.sprig-header-label-container{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:8px;flex:1 1 0}.sprig-header-label{color:#343442;font-size:15px;font-weight:590;line-height:21px;text-align:start;overflow:hidden}.sprig-check-background{flex:0 0 16px;height:16px;width:16px;border-radius:8px;margin-right:8px;background-color:#efefee;display:flex;align-items:center;justify-content:center}.sprig-check{height:9px;width:9px;margin-left:-1px}.sprig-check path{stroke:#506067;stroke-width:1.5}.sprig-caret{height:20px;width:20px;transition-property:transform}.sprig-caret path{stroke:#000}.ul-consent-legal__name-input--mobile{border:2px solid #e6e6e6}.ul-consent-legal__name-input--desktop{border:1px solid #e6e6e6}.ul-consent-legal__name-input{background:#00000003;box-sizing:border-box;color:#343442;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;padding:10px 20px 10px 15px;border-radius:3px;font-size:15px;line-height:20px;margin-bottom:7px;width:100%}.ul-consent-legal__name-input::placeholder{color:#6c6c6e80}.ul-consent-legal__name-input:focus{outline:none;background:#fff}.ul-consent-legal__name-input--desktop:hover:not(:focus){background-color:#0000000d}.ul-card__consent-legal .choice{font-size:15px;padding:10px 15px;background-color:#00000003}.ul-card__consent-legal .choice--desktop:hover,.ul-card__consent-legal .choice--desktop:active,.ul-card__consent-legal .choice--mobile:active{background-color:#0000000d}.ul-card--likert__numbers{align-items:center;border-radius:5px;display:flex;flex-direction:row;flex:1 0;justify-content:center;margin:5px 0 0}.ul-card--likert__numbers>button{padding:unset}.likert-number--mobile{border:2px solid #e6e6e6}.likert-number--mobile:not(:first-child){margin-inline-start:-2px}.likert-number--desktop{border:1px solid #e6e6e6}.likert-number--desktop:not(:first-child){margin-inline-start:-1px}.likert-number{align-items:center;cursor:pointer;display:flex;justify-content:center;flex:1 0;background-color:#00000003;font-size:18px;line-height:24px;height:67px}.likert-number:first-child{border-start-start-radius:5px;border-end-start-radius:5px}.likert-number:last-child{border-start-end-radius:5px;border-end-end-radius:5px}.likert-number:active,.likert-number--desktop:hover{background-color:#0000000d;font-weight:500}.likert-star--mobile:not(:first-child){margin-inline-start:-2px}.likert-star--desktop:not(:first-child){margin-inline-start:-1px}.likert-star{align-items:center;cursor:pointer;display:flex;justify-content:space-between;flex:1 0;color:transparent;font-size:18px;line-height:24px;height:67px;background:unset;border:unset}.likert-smiley--mobile:not(:first-child){margin-inline-start:-2px}.likert-smiley--desktop:not(:first-child){margin-inline-start:-1px}.likert-smiley{align-items:center;cursor:pointer;display:flex;justify-content:space-between;flex:1 0;color:transparent;line-height:24px;height:67px;background:unset;border:unset}.likert-smiley>svg{margin:0 auto}.likert-smiley circle:not(:first-child){fill-opacity:1}.ul-card--likert__labels{align-items:center;color:#262136;display:flex;flex-direction:row;flex:1 0;font-weight:500;font-size:13px;line-height:15px;justify-content:space-between;margin:7px 0 10px}.ul-card--matrix_grid{display:grid;grid-template-columns:max-content repeat(var(--numColumns),minmax(107px,1fr));grid-template-rows:repeat(var(--numRows),min-content);margin:0 auto;row-gap:4px;width:max-content}.ul-matrix-row-options{display:grid;grid-column:2/-1;grid-template-columns:subgrid}.ul-matrix-column-label{font-size:15px;max-width:150px;padding:10px 12px;text-align:center}.ul-card--matrix_container{margin-bottom:16px;overflow:auto}.ul-card--matrix_question_container{display:flex;flex-direction:column}.ul-matrix-scroll-gradient{-webkit-mask-image:linear-gradient(90deg,#000 90%,transparent);mask-image:linear-gradient(90deg,#000 90%,transparent)}.ul-matrix-scroll-gradient:dir(rtl){-webkit-mask-image:linear-gradient(270deg,#000,90%,transparent);mask-image:linear-gradient(270deg,#000,90%,transparent)}.ul-matrix-scroll-gradient:dir(rtl)+.ul-matrix-scroll-arrow{rotate:180deg}.ul-matrix-scroll-arrow{align-self:flex-end;background:none;border:none;color:#000;padding:0;position:absolute;top:45%}.ul-matrix-scroll-arrow:hover{cursor:pointer}.ul-matrix-option-wrapper{align-items:center;background:#f9f9f8;display:flex;justify-content:center;padding:10px 12px}.ul-matrix-last-option{border-start-end-radius:4px;border-end-end-radius:4px}.ul-matrix-row-label{align-items:center;background:#f9f9f8;border-end-start-radius:4px;border-start-start-radius:4px;display:flex;font-size:15px;left:0;right:0;max-width:200px;min-width:100px;padding:10px 12px;position:sticky}.ul-matrix-option-selected{border:6px solid var(--border);box-shadow:none}.ul-card__matrix{max-width:100%}.select-label{cursor:pointer;flex:1;overflow-wrap:anywhere;text-align:start}.ul-card--nps__numbers{align-items:center;border-radius:5px;display:flex;flex-direction:row;flex:1 0;justify-content:center;margin:5px 0 0}.nps-number--mobile{border:2px solid #e6e6e6}.nps-number--mobile:not(:first-child){margin-inline-start:-2px}.nps-number--desktop{border:1px solid #e6e6e6}.nps-number--desktop:not(:first-child){margin-inline-start:-1px}.nps-number{align-items:center;cursor:pointer;display:flex;justify-content:center;flex:1 0;background-color:#00000003;font-size:18px;line-height:24px;height:67px;padding:unset}.nps-number:first-child{border-start-start-radius:5px;border-end-start-radius:5px}.nps-number:last-child{border-start-end-radius:5px;border-end-end-radius:5px}.nps-number:active,.nps-number--desktop:hover{background-color:#0000000d;font-weight:500}.ul-card--nps__labels{align-items:center;color:#262136;display:flex;flex-direction:row;flex:1 0;font-weight:500;font-size:13px;line-height:15px;justify-content:space-between;margin:7px 0 10px}.ul-card-text{margin-top:2px;margin-bottom:3px;align-items:center;display:flex;flex-direction:column;justify-content:center;padding:0}.ul-card-text__container{align-items:center;box-sizing:border-box;border-radius:3px;display:flex;justify-content:center;margin-bottom:12px;flex:1 0 100%}.ul-card-text__input--mobile{border:2px solid #e6e6e6;max-height:63px}.ul-card-text__input--desktop{border:1px solid #e6e6e6;max-height:150px}.ul-card-text__input{background:#00000003;box-sizing:border-box;color:#343442;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;min-height:63px;overflow:auto;padding:12px;resize:none;width:100%;border-radius:3px;font-size:15px;line-height:20px;overflow-wrap:break-word}.ul-card-text__input::placeholder{color:#6c6c6e80}.ul-card-text__input:focus{outline:none;background:#fff}.ul-card-text__input--desktop:hover:not(:focus){background-color:#0000000d}.ul-card__text-url-prompt-button{text-decoration:none;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:-webkit-fill-available}#ul-card-video__player_recorder{width:100%;width:-moz-available;width:-webkit-fill-available;width:fill-available}.ul-card-record__task{flex:1 0 auto;margin-top:2px;margin-bottom:3px;align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding:0}#ul-record-task-upload-progress,#ul-record-task-video-preview{width:100%;height:150px}.ul-permission-graphics-container{width:100%;height:150px;background-color:#0000000d;text-align:center;flex-direction:column;margin-left:auto;margin-right:auto;border-radius:5px;display:flex;align-items:center;font-size:15px;color:#000000b3}.ul-av-permission-denied-paragraph{margin:auto 15px;font-size:12px}.ul-av-permission-denied-headline{font-size:14px;color:#262136;text-decoration:underline;font-size:12px}.ul-permission-body{color:#000;margin:5px auto 5px 5px;line-height:135%;text-align:center}.ul-select-tab-container{width:240px;height:46px;background:#fff;border-radius:5px;text-align:start;align-items:center;display:flex;padding:0 5px;margin-top:20px;margin-bottom:auto}.ul-select-tab-text{color:#4b575d;margin:5px;line-height:135%;text-align:center}button.ul-task-skip-button{color:#000;background-color:#fff}#ul-task-detail-container{margin-top:0;margin-bottom:0;overflow:auto}#ul-task-detail-container.ul-rich-text-body p,#ul-task-detail-container.ul-rich-text-body li,#ul-task-detail-container.ul-rich-text-body{color:#4c4c4c}#ul-task-detail-container :first-child{margin-top:0}#ul-task-detail-container :last-child{margin-bottom:20px}.ul-horizontal-button-container{width:100%;display:flex;flex-direction:row}.ul-skip-button-below{margin-top:5px}.ul-horizontal-button-container-center{justify-content:center}.ul-vertical-button-container-center{display:flex;flex-direction:column;align-items:center}.ul-horizontal-button-container-left{justify-content:flex-start}.ul_recorded-task-inset-spacing{margin-top:5px;margin-bottom:24px}.ul_permission_svg_container{justify-content:center}.ul-card-text__button{background-color:var(--theme);border-radius:3px;border:none;color:#fff;cursor:pointer;font-size:15px;font-weight:500;line-height:18px;padding:10.5px 21px}.ul-card-text__button:disabled,.ul-card-text__button.sprig-button-disabled{background-color:#0000001a;color:#0003}.ul-card-text__button.ul-button-inactive{background-color:#fff!important;color:#5d696f!important}.ul-card-skip__button{color:#00000080;background:none;border:none;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;cursor:pointer}.ul-card-button-group{align-items:center;display:flex;gap:15px;justify-content:center;flex-direction:column}.select-button{align-items:center;background-color:transparent;border-radius:8px;border:1px solid #0b2330;box-shadow:0 0 0 2px #c8cccc;cursor:pointer;display:flex;font-size:15px;justify-content:space-between;margin-bottom:8px;padding:4px 8px 4px 16px;width:100%}.select-button:hover{background-color:#f3f3f3}.select-button:active{background-color:#eee}.select-button span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.select-button.select-button-placeholder{color:#b0b5b7}.select-button svg{flex-shrink:0}.select-list{position:relative;height:fit-content;padding:4px 0;z-index:100;background-color:#fff;border:1px solid #E2E3E1;box-shadow:0 16px 24px #0b23300d,0 4px 12px #0b233008;border-radius:8px;overflow-y:scroll;width:100%}.select-option{align-items:center;cursor:pointer;display:flex;font-size:15px;gap:16px;line-height:20px;padding:8px 16px}.select-option:hover{background-color:#f3f3f3}html,body{cursor:default;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;height:100%;overflow:hidden;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-webkit-touch-callout:none}b{font-weight:500}form{margin-block-end:0;margin-block-start:0}#ul-app{opacity:0;width:100%;flex-grow:2;display:flex}#ul-app.ul-app--overlay{position:absolute;bottom:0;transition:opacity .1s ease-out;transition-delay:.1s}#ul-app.ul-app--visible{opacity:1;bottom:0}.ul-app__container{width:100%;display:flex;flex-direction:column;max-height:100vh}.ul-header__container{margin-bottom:15px}.ul-header{align-items:center;background:repeating-linear-gradient(120deg,#ebebeb,#ebebeb 24px,#fff 24px,#fff 48px);border-bottom:2px solid #ebebeb;display:flex;font-size:14px;font-weight:500;height:40px;justify-content:center;width:100%}.ul-footer{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;margin-top:auto;flex-grow:0;width:100%;min-height:10px;height:fit-content;flex-shrink:0}.ul-footer>.yellow-footer-logo{background:#fad133;border:1px solid #f9c600;border-radius:14px;padding:6px 12px}.ul-footer>.yellow-footer-logo:hover{background:#f9c600}.ul-footer .thank-you-card-link{background:#00000003;border:1px solid #e6e6e6;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;gap:12px;margin-bottom:15px;padding:12px;text-align:initial;width:280px}.ul-footer .thank-you-card-link:hover{background:#00000008}.ul-footer>a{color:inherit}.ul-footer-bubble{display:inline-block;margin:0 3px;width:7px;height:7px;border-radius:3px;border:1px solid transparent}.sprig-box-logo{background:#f9c600;border-radius:5px;display:flex;padding:4px}.close-container{display:flex;justify-content:flex-end;width:100%;height:0}.close-btn{cursor:pointer;height:16px;margin-inline-end:-10px;position:relative;top:-10px;width:16px;z-index:1;align-self:flex-start;justify-self:end;flex-shrink:0}.ul-app__container{transition:opacity .3s ease-out}.ul-center-horizontally{text-align:center}#ul-progress-bar-container{width:100%;height:2px;background-color:#0000001a;border-radius:2px;max-width:250px;margin:16px 0}#ul-progress-bar-current{transition:width 1s ease;width:0%;height:0;border-radius:2px}.prototype-button{align-self:stretch;background:#00000003;border:1.5px solid #e6e6e6;border-radius:4px 0 0 4px;flex:none;flex-grow:0;height:fit-content;line-height:16.5px;margin:0 20px;padding:20px 0;font-size:14px;font-family:inherit;text-decoration:underline}.prototype-button:hover{cursor:pointer}',
            }),
            e.customStyles &&
                (0, m.e)({
                    document: c,
                    elementId: "ul-custom-style",
                    styleString: e.customStyles,
                    nonce: e.styleNonce,
                }),
            e.fontFamily && a && parent)
        ) {
            let e = c.createElement("link");
            (e.rel = "stylesheet"), (e.href = a), _.appendChild(e);
        }
        if (!h && e.cards.some((e) => "recordedtask" === e.type)) {
            let t = c.createElement("script");
            (t.src = e.upchunkLibraryURL ?? "https://cdn.sprig.com/userleap-web-upchunk-v2.2.2.js"),
                (t.onload = () => {
                    nS.setUpChunk(u.UpChunk);
                }),
                (t.onerror = () => {
                    console.warn(
                        "[Sprig] - recording functionality not configured due to UpChunk library load failure",
                    );
                }),
                _.appendChild(t);
        }
        let b = l || (null == (r = s.eventEmitter) ? void 0 : r.emit);
        null == b || b("verify.view.version", { "view.version": "2.34.0" }),
            p &&
                t &&
                (V(F(ny, {}), p),
                v.e.once(v.S.SurveyClosed, () => {
                    e9(p);
                }));
    },
};
