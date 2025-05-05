n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(388032),
    c = n(501810);
let d = r.forwardRef(function (e, t) {
    var n,
        r,
        { currentPageIndex: s, numPages: d, onChangePage: u, children: m, className: g, showPageCount: p = !0 } = e,
        h = (function (e, t) {
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
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['currentPageIndex', 'numPages', 'onChangePage', 'children', 'className', 'showPageCount']);
    let f = s <= 0,
        b = s >= d - 1;
    return (0, i.jsxs)(
        'div',
        ((n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                className: l()(c.__invalid_paginator, g),
                ref: t
            },
            h
        )),
        (r = r =
            {
                children: [
                    m,
                    (0, i.jsxs)('div', {
                        className: c.pageActions,
                        children: [
                            (0, i.jsx)(a.P3F, {
                                className: l()(c.pageButtonPrev, { [c.disabled]: f }),
                                tabIndex: f ? -1 : 0,
                                onClick: f ? void 0 : () => u(s - 1),
                                children: (0, i.jsx)(a.V7D, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: c.pageButtonIcon,
                                    'aria-label': o.intl.string(o.t.vgfxaG)
                                })
                            }),
                            p
                                ? (0, i.jsx)('div', {
                                      className: c.pageIndicator,
                                      children: o.intl.format(o.t.MtpIws, {
                                          currentPage: s + 1,
                                          numPages: d
                                      })
                                  })
                                : (0, i.jsx)('div', {
                                      className: c.pageIndicator,
                                      children: o.intl.format(o.t.bKI77e, { currentPage: s + 1 })
                                  }),
                            (0, i.jsx)(a.P3F, {
                                className: l()(c.pageButtonNext, { [c.disabled]: b }),
                                tabIndex: b ? -1 : 0,
                                onClick: b ? void 0 : () => u(s + 1),
                                children: (0, i.jsx)(a.Fbu, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: c.pageButtonIcon,
                                    'aria-label': o.intl.string(o.t.XiOHRU)
                                })
                            })
                        ]
                    })
                ]
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
        n)
    );
});
