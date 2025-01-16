r.d(n, {
    D: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(693789),
    c = r(1561),
    d = r(463208),
    f = r(481060),
    _ = r(889963),
    h = r(388032),
    p = r(695265);
function m(e) {
    let { page: n, totalPageCount: r, disabled: i, onPageChange: o } = e,
        [u, _] = s.useState(!1),
        [h, m] = s.useState(null),
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
            'Enter' === e.key && null != h && g && (o(h), _(!1), m(null));
        };
    return i
        ? (0, a.jsx)(
              f.Heading,
              {
                  className: p.gap,
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
                    className: p.jumpToPageInlineInput,
                    size: d.o.Sizes.MINI,
                    value: null == h ? '' : ''.concat(h),
                    onChange: E,
                    onBlur: () => {
                        _(!1), m(null);
                    },
                    onKeyPress: v,
                    disabled: i
                },
                n.key
            )
          : (0, a.jsx)(
                c.P,
                {
                    onClick: () => _(!0),
                    children: (0, a.jsx)(f.Heading, {
                        className: l()(p.roundButton, p.gap),
                        'aria-hidden': !0,
                        variant: 'heading-sm/semibold',
                        children: '\u2026'
                    })
                },
                n.key
            );
}
function g(e) {
    let { currentPage: n, totalCount: r, pageSize: i, maxVisiblePages: s, disablePaginationGap: o, onPageChange: d, hideMaxPage: g = !1, className: E } = e,
        v = Math.ceil(r / i);
    function I(e) {
        null != d && d(e);
    }
    function T(e) {
        let { key: n, disabled: r, navigateToPage: i } = e;
        return (0, a.jsxs)(
            u.zx,
            {
                className: p.endButton,
                innerClassName: p.endButtonInner,
                look: u.zx.Looks.BLANK,
                color: u.zx.Colors.TRANSPARENT,
                onClick: i,
                disabled: r,
                rel: 'prev',
                children: [
                    (0, a.jsx)(f.ChevronSmallLeftIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: p.iconCaret,
                        'aria-hidden': !0
                    }),
                    (0, a.jsx)('span', { children: h.intl.string(h.t['13/7kZ']) })
                ]
            },
            n
        );
    }
    function b(e) {
        let { key: n, disabled: r, navigateToPage: i } = e;
        return (0, a.jsxs)(
            u.zx,
            {
                className: p.endButton,
                innerClassName: p.endButtonInner,
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
                        className: p.iconCaret,
                        'aria-hidden': !0
                    })
                ]
            },
            n
        );
    }
    function y(e) {
        return (0, a.jsx)(
            c.P,
            {
                className: l()(p.roundButton, { [p.activeButton]: e.selected }),
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
                disabled: !!o,
                onPageChange: d
            },
            e.key
        );
    }
    function A(e) {
        let { pages: n, hasMultiplePages: r } = e;
        return r
            ? (0, a.jsx)('div', {
                  className: l()(p.pageControlContainer, E),
                  children: (0, a.jsx)('nav', {
                      className: p.pageControl,
                      children: n.map((e) => {
                          switch (e.type) {
                              case _.s.BACK:
                                  return T(e);
                              case _.s.PAGE:
                                  return y(e);
                              case _.s.GAP:
                                  return S(e);
                              case _.s.NEXT:
                                  return b(e);
                              default:
                                  return null;
                          }
                      })
                  })
              })
            : null;
    }
    return (0, a.jsx)(_.W, {
        totalPageCount: v,
        selectedPage: n,
        maxVisiblePages: s,
        hideMaxPage: g,
        onPageChange: I,
        children: A
    });
}
