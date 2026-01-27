n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(985018),
    a = n(69940);
let o = i.forwardRef(function (e, t) {
    var n, i;
    let [o, ...c] = [e, t],
        { currentPageIndex: d, numPages: u, onChangePage: _, children: p, showPageCount: m = !0 } = o,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(o, ["currentPageIndex", "numPages", "onChangePage", "children", "showPageCount"]),
        [A] = c,
        f = m
            ? s.intl.format(s.t.MtpIwg, {
                  currentPage: d + 1,
                  numPages: u,
              })
            : s.intl.format(s.t.bKI77c, {
                  currentPage: d + 1,
              });
    return (0, r.jsxs)(
        "div",
        ((n = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                ref: A,
            },
            g,
        )),
        (i = i =
            {
                children: [
                    p,
                    (0, r.jsx)("div", {
                        className: a.v,
                        children: (0, r.jsxs)("div", {
                            className: a.U,
                            children: [
                                (0, r.jsx)(l.K0, {
                                    variant: "icon-only",
                                    icon: l.n2b,
                                    disabled: d <= 0,
                                    onClick: () => _(d - 1),
                                    "aria-label": s.intl.string(s.t.vgfxaA),
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    children: f,
                                }),
                                (0, r.jsx)(l.K0, {
                                    variant: "icon-only",
                                    icon: l._BQ,
                                    disabled: d >= u - 1,
                                    onClick: () => _(d + 1),
                                    "aria-label": s.intl.string(s.t.XiOHRX),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(i)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
              }),
        n),
    );
});
