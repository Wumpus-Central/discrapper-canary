n.d(t, { Z: () => d });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(388032),
    c = n(176459);
let d = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: l, children: d, className: u, showPageCount: h = !0, ...m } = e,
        g = n <= 0,
        x = n >= s - 1;
    return (0, i.jsxs)('div', {
        className: r()(c.__invalid_paginator, u),
        ref: t,
        ...m,
        children: [
            d,
            (0, i.jsxs)('div', {
                className: c.pageActions,
                children: [
                    (0, i.jsx)(a.P3F, {
                        className: r()(c.pageButtonPrev, { [c.disabled]: g }),
                        tabIndex: g ? -1 : 0,
                        onClick: g ? void 0 : () => l(n - 1),
                        children: (0, i.jsx)(a.V7D, {
                            size: 'md',
                            color: 'currentColor',
                            className: c.pageButtonIcon,
                            'aria-label': o.intl.string(o.t.vgfxaG)
                        })
                    }),
                    h
                        ? (0, i.jsx)('div', {
                              className: c.pageIndicator,
                              children: o.intl.format(o.t.MtpIws, {
                                  currentPage: n + 1,
                                  numPages: s
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: c.pageIndicator,
                              children: o.intl.format(o.t.bKI77e, { currentPage: n + 1 })
                          }),
                    (0, i.jsx)(a.P3F, {
                        className: r()(c.pageButtonNext, { [c.disabled]: x }),
                        tabIndex: x ? -1 : 0,
                        onClick: x ? void 0 : () => l(n + 1),
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
    });
});
