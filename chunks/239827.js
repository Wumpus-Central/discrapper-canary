n.d(t, { Z: () => d });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(388032),
    c = n(244955);
let d = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: r, children: d, className: u, showPageCount: m = !0, ...g } = e,
        h = n <= 0,
        x = n >= s - 1;
    return (0, i.jsxs)('div', {
        className: l()(c.__invalid_paginator, u),
        ref: t,
        ...g,
        children: [
            d,
            (0, i.jsxs)('div', {
                className: c.pageActions,
                children: [
                    (0, i.jsx)(a.P3F, {
                        className: l()(c.pageButtonPrev, { [c.disabled]: h }),
                        tabIndex: h ? -1 : 0,
                        onClick: h ? void 0 : () => r(n - 1),
                        children: (0, i.jsx)(a.V7D, {
                            size: 'md',
                            color: 'currentColor',
                            className: c.pageButtonIcon,
                            'aria-label': o.intl.string(o.t.vgfxaG)
                        })
                    }),
                    m
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
                        className: l()(c.pageButtonNext, { [c.disabled]: x }),
                        tabIndex: x ? -1 : 0,
                        onClick: x ? void 0 : () => r(n + 1),
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
