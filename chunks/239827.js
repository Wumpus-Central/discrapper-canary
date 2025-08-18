n.d(t, { Z: () => o });
var i = n(951288),
    r = n(647438),
    s = n(481060),
    a = n(388032),
    l = n(729020);
let o = r.forwardRef(function (e, t) {
    var n,
        r,
        { currentPageIndex: o, numPages: c, onChangePage: d, children: u, showPageCount: m = !0 } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++)
                    (n = s[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["currentPageIndex", "numPages", "onChangePage", "children", "showPageCount"]);
    let g = m
        ? a.intl.format(a.t.MtpIws, {
              currentPage: o + 1,
              numPages: c,
          })
        : a.intl.format(a.t.bKI77e, { currentPage: o + 1 });
    return (0, i.jsxs)(
        "div",
        ((n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({ ref: t }, p)),
        (r = r =
            {
                children: [
                    u,
                    (0, i.jsx)("div", {
                        className: l.pageActions,
                        children: (0, i.jsxs)("div", {
                            className: l.buttons,
                            children: [
                                (0, i.jsx)(s.hU, {
                                    variant: "icon-only",
                                    icon: s.V7D,
                                    disabled: o <= 0,
                                    onClick: () => d(o - 1),
                                    "aria-label": a.intl.string(a.t.vgfxaG),
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    children: g,
                                }),
                                (0, i.jsx)(s.hU, {
                                    variant: "icon-only",
                                    icon: s.Fbu,
                                    disabled: o >= c - 1,
                                    onClick: () => d(o + 1),
                                    "aria-label": a.intl.string(a.t.XiOHRU),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        n),
    );
});
