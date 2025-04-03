n.d(t, { D: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(693789),
    l = n(1561),
    c = n(463208),
    u = n(481060),
    d = n(889963),
    f = n(388032),
    _ = n(578949);
function p(e) {
    let { page: t, totalPageCount: n, disabled: o, onPageChange: s } = e,
        [d, f] = i.useState(!1),
        [p, h] = i.useState(null),
        m = null != p && p >= 1 && p <= n,
        g = (e) => {
            let t = parseInt(e);
            if ('' === e || isNaN(t)) return void h(null);
            h(t);
        },
        E = (e) => {
            'Enter' === e.key && null != p && m && (s(p), f(!1), h(null));
        };
    return o
        ? (0, r.jsx)(
              u.X6q,
              {
                  className: _.gap,
                  'aria-hidden': !0,
                  variant: 'heading-sm/semibold',
                  children: '\u2026'
              },
              t.key
          )
        : d
          ? (0, r.jsx)(
                c.o,
                {
                    autoFocus: !0,
                    className: _.jumpToPageInlineInput,
                    size: c.o.Sizes.MINI,
                    value: null == p ? '' : ''.concat(p),
                    onChange: g,
                    onBlur: () => {
                        f(!1), h(null);
                    },
                    onKeyPress: E,
                    disabled: o
                },
                t.key
            )
          : (0, r.jsx)(
                l.P,
                {
                    onClick: () => f(!0),
                    children: (0, r.jsx)(u.X6q, {
                        className: a()(_.roundButton, _.gap),
                        'aria-hidden': !0,
                        variant: 'heading-sm/semibold',
                        children: '\u2026'
                    })
                },
                t.key
            );
}
function h(e) {
    let { currentPage: t, totalCount: n, pageSize: i, maxVisiblePages: o, disablePaginationGap: c, onPageChange: h, hideMaxPage: m = !1, className: g } = e,
        E = Math.ceil(n / i);
    function b(e) {
        null != h && h(e);
    }
    function y(e) {
        let { key: t, disabled: n, navigateToPage: i } = e;
        return (0, r.jsxs)(
            s.zx,
            {
                className: _.endButton,
                innerClassName: _.endButtonInner,
                look: s.zx.Looks.BLANK,
                color: s.zx.Colors.TRANSPARENT,
                onClick: i,
                disabled: n,
                rel: 'prev',
                children: [
                    (0, r.jsx)(u.V7D, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.iconCaret,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)('span', { children: f.NW.string(f.t['13/7kZ']) })
                ]
            },
            t
        );
    }
    function v(e) {
        let { key: t, disabled: n, navigateToPage: i } = e;
        return (0, r.jsxs)(
            s.zx,
            {
                className: _.endButton,
                innerClassName: _.endButtonInner,
                look: s.zx.Looks.BLANK,
                color: s.zx.Colors.TRANSPARENT,
                onClick: i,
                disabled: n,
                rel: 'next',
                children: [
                    (0, r.jsx)('span', { children: f.NW.string(f.t.PDTjLC) }),
                    (0, r.jsx)(u.Fbu, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.iconCaret,
                        'aria-hidden': !0
                    })
                ]
            },
            t
        );
    }
    function O(e) {
        return (0, r.jsx)(
            l.P,
            {
                className: a()(_.roundButton, { [_.activeButton]: e.selected }),
                onClick: e.selected ? void 0 : e.navigateToPage,
                'aria-label': f.NW.formatToPlainString(f.t.IGMs8f, { pageNumber: e.targetPage }),
                'aria-current': e.selected ? 'page' : void 0,
                children: (0, r.jsx)('span', { children: e.targetPage })
            },
            e.key
        );
    }
    function I(e) {
        return (0, r.jsx)(
            p,
            {
                page: e,
                totalPageCount: E,
                disabled: !!c,
                onPageChange: h
            },
            e.key
        );
    }
    function S(e) {
        let { pages: t, hasMultiplePages: n } = e;
        return n
            ? (0, r.jsx)('div', {
                  className: a()(_.pageControlContainer, g),
                  children: (0, r.jsx)('nav', {
                      className: _.pageControl,
                      children: t.map((e) => {
                          switch (e.type) {
                              case d.s.BACK:
                                  return y(e);
                              case d.s.PAGE:
                                  return O(e);
                              case d.s.GAP:
                                  return I(e);
                              case d.s.NEXT:
                                  return v(e);
                              default:
                                  return null;
                          }
                      })
                  })
              })
            : null;
    }
    return (0, r.jsx)(d.W, {
        totalPageCount: E,
        selectedPage: t,
        maxVisiblePages: o,
        hideMaxPage: m,
        onPageChange: b,
        children: S
    });
}
