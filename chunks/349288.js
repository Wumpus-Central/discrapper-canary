n.r(t),
    n.d(t, {
        Anchor: () => g,
    }),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(470562),
    l = n(158954),
    c = n(752239),
    u = n(820162);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function g(e) {
    let {
            href: t,
            onClick: n,
            className: a,
            children: d,
            rel: p,
            target: m,
            useDefaultUnderlineStyles: g = !0,
            title: E,
            style: b,
            focusProps: y,
            ref: O,
        } = e,
        A = h(e, [
            "href",
            "onClick",
            "className",
            "children",
            "rel",
            "target",
            "useDefaultUnderlineStyles",
            "title",
            "style",
            "focusProps",
            "ref",
        ]);
    null != t && null == n && (n = c.V.getDefaultLinkInterceptor(t));
    let v = i.useContext(l.gmh),
        S = {
            className: s()(
                u.Y,
                {
                    [u.D]: g,
                },
                a,
            ),
            href: t,
            onClick: n,
            rel: null != p ? p : void 0,
            target: null != m ? m : void 0,
            title: null != E ? E : void 0,
            style: null != b ? b : void 0,
        };
    return (null == t || (0, o.e)(t) || ((S.rel = "noreferrer noopener"), (S.target = "_blank")),
    v && delete S.href,
    null != n)
        ? (0, r.jsx)(
              l.DUT,
              _(
                  f(
                      {
                          tag: "a",
                      },
                      A,
                      S,
                  ),
                  {
                      onClick: n,
                      focusProps: y,
                      innerRef: O,
                      children: d,
                  },
              ),
          )
        : (0, r.jsx)(
              l.vN3,
              _(f({}, y), {
                  children: (0, r.jsx)(
                      "a",
                      _(f({}, A, S), {
                          ref: O,
                          children: d,
                      }),
                  ),
              }),
          );
}
