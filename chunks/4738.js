r.d(n, {
    D: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(693789),
    c = r(1561),
    d = r(463208),
    f = r(481060),
    p = r(889963),
    h = r(388032),
    _ = r(695265);
function m(e) {
    let { page: n, totalPageCount: r, disabled: i, onPageChange: s } = e,
        [u, p] = o.useState(!1),
        [h, m] = o.useState(null),
        g = null != h && h >= 1 && h <= r,
        E = (e) => {
            let n = parseInt(e);
            if ('' === e || isNaN(n)) {
                m(null);
                return;
            }
            m(n);
        },
        v = (e) => {
            'Enter' === e.key && null != h && g && (s(h), p(!1), m(null));
        };
    return i
        ? (0, a.jsx)(
              f.Heading,
              {
                  className: _.gap,
                  'aria-hidden': !0,
                  variant: 'heading-sm/semibold',
                  children: '\u2026'
              },
              n.key
          )
        : u
          ? (0, a.jsx)(
                d.o,
                {
                    autoFocus: !0,
                    className: _.jumpToPageInlineInput,
                    size: d.o.Sizes.MINI,
                    value: null == h ? '' : ''.concat(h),
                    onChange: E,
                    onBlur: () => {
                        p(!1), m(null);
                    },
                    onKeyPress: v,
                    disabled: i
                },
                n.key
            )
          : (0, a.jsx)(
                c.P,
                {
                    onClick: () => p(!0),
                    children: (0, a.jsx)(f.Heading, {
                        className: l()(_.roundButton, _.gap),
                        'aria-hidden': !0,
                        variant: 'heading-sm/semibold',
                        children: '\u2026'
                    })
                },
                n.key
            );
}
function g(e) {
    let { currentPage: n, totalCount: r, pageSize: i, maxVisiblePages: o, disablePaginationGap: s, onPageChange: d, hideMaxPage: g = !1, className: E } = e,
        v = Math.ceil(r / i);
    function y(e) {
        null != d && d(e);
    }
    function b(e) {
        let { key: n, disabled: r, navigateToPage: i } = e;
        return (0, a.jsxs)(
            u.zx,
            {
                className: _.endButton,
                innerClassName: _.endButtonInner,
                look: u.zx.Looks.BLANK,
                color: u.zx.Colors.TRANSPARENT,
                onClick: i,
                disabled: r,
                rel: 'prev',
                children: [
                    (0, a.jsx)(f.ChevronSmallLeftIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.iconCaret,
                        'aria-hidden': !0
                    }),
                    (0, a.jsx)('span', { children: h.intl.string(h.t['13/7kZ']) })
                ]
            },
            n
        );
    }
    function I(e) {
        let { key: n, disabled: r, navigateToPage: i } = e;
        return (0, a.jsxs)(
            u.zx,
            {
                className: _.endButton,
                innerClassName: _.endButtonInner,
                look: u.zx.Looks.BLANK,
                color: u.zx.Colors.TRANSPARENT,
                onClick: i,
                disabled: r,
                rel: 'next',
                children: [
                    (0, a.jsx)('span', { children: h.intl.string(h.t.PDTjLC) }),
                    (0, a.jsx)(f.ChevronSmallRightIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.iconCaret,
                        'aria-hidden': !0
                    })
                ]
            },
            n
        );
    }
    function T(e) {
        return (0, a.jsx)(
            c.P,
            {
                className: l()(_.roundButton, { [_.activeButton]: e.selected }),
                onClick: e.selected ? void 0 : e.navigateToPage,
                'aria-label': h.intl.formatToPlainString(h.t.IGMs8f, { pageNumber: e.targetPage }),
                'aria-current': e.selected ? 'page' : void 0,
                children: (0, a.jsx)('span', { children: e.targetPage })
            },
            e.key
        );
    }
    function S(e) {
        return (0, a.jsx)(
            m,
            {
                page: e,
                totalPageCount: v,
                disabled: !!s,
                onPageChange: d
            },
            e.key
        );
    }
    function A(e) {
        let { pages: n, hasMultiplePages: r } = e;
        return r
            ? (0, a.jsx)('div', {
                  className: l()(_.pageControlContainer, E),
                  children: (0, a.jsx)('nav', {
                      className: _.pageControl,
                      children: n.map((e) => {
                          switch (e.type) {
                              case p.s.BACK:
                                  return b(e);
                              case p.s.PAGE:
                                  return T(e);
                              case p.s.GAP:
                                  return S(e);
                              case p.s.NEXT:
                                  return I(e);
                              default:
                                  return null;
                          }
                      })
                  })
              })
            : null;
    }
    return (0, a.jsx)(p.W, {
        totalPageCount: v,
        selectedPage: n,
        maxVisiblePages: o,
        hideMaxPage: g,
        onPageChange: y,
        children: A
    });
}
