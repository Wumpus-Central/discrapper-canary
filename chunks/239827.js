var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(388032),
    c = n(662362);
t.Z = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: r, children: d, className: u, showPageCount: m = !0, ...g } = e,
        h = n <= 0,
        p = n >= s - 1;
    return (0, i.jsxs)('div', {
        className: a()(c.__invalid_paginator, u),
        ref: t,
        ...g,
        children: [
            d,
            (0, i.jsxs)('div', {
                className: c.pageActions,
                children: [
                    (0, i.jsx)(l.Clickable, {
                        className: a()(c.pageButtonPrev, { [c.disabled]: h }),
                        tabIndex: h ? -1 : 0,
                        onClick: h ? void 0 : () => r(n - 1),
                        children: (0, i.jsx)(l.ChevronSmallLeftIcon, {
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
                    (0, i.jsx)(l.Clickable, {
                        className: a()(c.pageButtonNext, { [c.disabled]: p }),
                        tabIndex: p ? -1 : 0,
                        onClick: p ? void 0 : () => r(n + 1),
                        children: (0, i.jsx)(l.ChevronSmallRightIcon, {
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
