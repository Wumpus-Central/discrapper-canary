var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(388032),
    c = n(662362);
t.Z = r.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: r, onChangePage: s, children: d, className: u, showPageCount: m = !0, ...g } = e,
        h = n <= 0,
        p = n >= r - 1;
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
                        onClick: h ? void 0 : () => s(n - 1),
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
                                  numPages: r
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: c.pageIndicator,
                              children: o.intl.format(o.t.bKI77e, { currentPage: n + 1 })
                          }),
                    (0, i.jsx)(l.Clickable, {
                        className: a()(c.pageButtonNext, { [c.disabled]: p }),
                        tabIndex: p ? -1 : 0,
                        onClick: p ? void 0 : () => s(n + 1),
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
