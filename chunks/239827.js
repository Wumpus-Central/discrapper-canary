n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(388032),
    c = n(501810);
let d = i.forwardRef(function (e, t) {
    var n,
        i,
        { currentPageIndex: s, numPages: d, onChangePage: u, children: m, className: g, showPageCount: p = !0 } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['currentPageIndex', 'numPages', 'onChangePage', 'children', 'className', 'showPageCount']);
    let f = s <= 0,
        b = s >= d - 1;
    return (0, r.jsxs)(
        'div',
        ((n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                className: a()(c.__invalid_paginator, g),
                ref: t
            },
            h
        )),
        (i = i =
            {
                children: [
                    m,
                    (0, r.jsxs)('div', {
                        className: c.pageActions,
                        children: [
                            (0, r.jsx)(l.P3F, {
                                className: a()(c.pageButtonPrev, { [c.disabled]: f }),
                                tabIndex: f ? -1 : 0,
                                onClick: f ? void 0 : () => u(s - 1),
                                children: (0, r.jsx)(l.V7D, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: c.pageButtonIcon,
                                    'aria-label': o.NW.string(o.t.vgfxaG)
                                })
                            }),
                            p
                                ? (0, r.jsx)('div', {
                                      className: c.pageIndicator,
                                      children: o.NW.format(o.t.MtpIws, {
                                          currentPage: s + 1,
                                          numPages: d
                                      })
                                  })
                                : (0, r.jsx)('div', {
                                      className: c.pageIndicator,
                                      children: o.NW.format(o.t.bKI77e, { currentPage: s + 1 })
                                  }),
                            (0, r.jsx)(l.P3F, {
                                className: a()(c.pageButtonNext, { [c.disabled]: b }),
                                tabIndex: b ? -1 : 0,
                                onClick: b ? void 0 : () => u(s + 1),
                                children: (0, r.jsx)(l.Fbu, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: c.pageButtonIcon,
                                    'aria-label': o.NW.string(o.t.XiOHRU)
                                })
                            })
                        ]
                    })
                ]
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
        n)
    );
});
