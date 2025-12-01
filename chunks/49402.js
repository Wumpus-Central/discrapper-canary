n.d(t, { I: () => h });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(781160),
    l = n(821541),
    c = n(780900);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e, t, n) {
    let a = (0, c.G6)(e);
    return i.forwardRef(function (u, f) {
        var {
                children: m,
                className: h,
                dir: g = "ltr",
                orientation: E = "vertical",
                overflow: b = "scroll",
                fade: y = !1,
                customTheme: O = !1,
                paddingFix: v = !0,
                style: S,
                gap: I,
                experimental_useStack: T,
            } = u,
            A = _(u, [
                "children",
                "className",
                "dir",
                "orientation",
                "overflow",
                "fade",
                "customTheme",
                "paddingFix",
                "style",
                "gap",
                "experimental_useStack",
            ]);
        let { scrollerRef: C, getScrollerState: N } = (0, c.Ke)(),
            P = (0, c.t2)(C, E);
        i.useImperativeHandle(
            f,
            () =>
                d(
                    {
                        getScrollerNode: () => C.current,
                        getScrollerState: N,
                    },
                    (0, c.Ue)(C, N, P, E),
                ),
            [C, N, E, P],
        );
        let R = (0, c.tT)({
            paddingFix: v,
            orientation: E,
            dir: g,
            className: h,
            scrollerRef: C,
            specs: a,
        });
        return T
            ? (0, r.jsx)(
                  l.K,
                  p(
                      d(
                          {
                              gap: I,
                              ref: C,
                              className: o()(h, {
                                  [e]: !0,
                                  [t]: y,
                                  [n]: O,
                              }),
                              style: (0, c.uT)(S, E, b),
                              dir: g,
                          },
                          A,
                      ),
                      {
                          children: (0, r.jsxs)(s.Jc, {
                              containerRef: C,
                              children: [m, R],
                          }),
                      },
                  ),
              )
            : (0, r.jsx)(
                  "div",
                  p(
                      d(
                          {
                              ref: C,
                              className: o()(h, {
                                  [e]: !0,
                                  [t]: y,
                                  [n]: O,
                              }),
                              style: (0, c.uT)(S, E, b),
                              dir: g,
                          },
                          A,
                      ),
                      {
                          children: (0, r.jsxs)(s.Jc, {
                              containerRef: C,
                              children: [m, R],
                          }),
                      },
                  ),
              );
    });
}
