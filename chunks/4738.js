n.d(t, { D: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(693789),
    l = n(481060),
    c = n(889963),
    u = n(388032),
    d = n(18039);
function f(e) {
    let { page: t, totalPageCount: n, disabled: o, onPageChange: s } = e,
        [c, u] = i.useState(!1),
        [f, p] = i.useState(null),
        _ = null != f && f >= 1 && f <= n,
        m = (e) => {
            let t = parseInt(e);
            if ("" === e || isNaN(t)) return void p(null);
            p(t);
        },
        h = (e) => {
            "Enter" === e.key && null != f && _ && (s(f), u(!1), p(null));
        };
    return o
        ? (0, r.jsx)(
              l.Heading,
              {
                  className: d.gap,
                  "aria-hidden": !0,
                  variant: "heading-sm/semibold",
                  children: "\u2026",
              },
              t.key,
          )
        : c
          ? (0, r.jsx)("div", {
                className: d.jumpToPageInlineInput,
                children: (0, r.jsx)(
                    l.oil,
                    {
                        type: "number",
                        autoFocus: !0,
                        value: null == f ? "" : "".concat(f),
                        onChange: m,
                        onBlur: () => {
                            u(!1), p(null);
                        },
                        onKeyUp: h,
                        disabled: o,
                    },
                    t.key,
                ),
            })
          : (0, r.jsx)(
                l.P3F,
                {
                    onClick: () => u(!0),
                    children: (0, r.jsx)(l.Heading, {
                        className: a()(d.roundButton, d.gap),
                        "aria-hidden": !0,
                        variant: "heading-sm/semibold",
                        children: "\u2026",
                    }),
                },
                t.key,
            );
}
function p(e) {
    let {
            currentPage: t,
            totalCount: n,
            pageSize: i,
            maxVisiblePages: o,
            disablePaginationGap: p,
            onPageChange: _,
            hideMaxPage: m = !1,
            className: h,
            renderPageWrapper: g,
        } = e,
        E = Math.ceil(n / i);
    function b(e) {
        null != _ && _(e);
    }
    function y(e) {
        let { key: t, disabled: n, navigateToPage: i } = e;
        return (0, r.jsxs)(
            s.zx,
            {
                className: d.endButton,
                innerClassName: d.endButtonInner,
                look: s.zx.Looks.BLANK,
                color: s.zx.Colors.TRANSPARENT,
                onClick: i,
                disabled: n,
                rel: "prev",
                children: [
                    (0, r.jsx)(l.V7D, {
                        size: "md",
                        color: "currentColor",
                        className: d.iconCaret,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)("span", { children: u.intl.string(u.t["13/7kX"]) }),
                ],
            },
            t,
        );
    }
    function O(e) {
        let { key: t, disabled: n, navigateToPage: i } = e;
        return (0, r.jsxs)(
            s.zx,
            {
                className: d.endButton,
                innerClassName: d.endButtonInner,
                look: s.zx.Looks.BLANK,
                color: s.zx.Colors.TRANSPARENT,
                onClick: i,
                disabled: n,
                rel: "next",
                children: [
                    (0, r.jsx)("span", { children: u.intl.string(u.t.PDTjLN) }),
                    (0, r.jsx)(l.Fbu, {
                        size: "md",
                        color: "currentColor",
                        className: d.iconCaret,
                        "aria-hidden": !0,
                    }),
                ],
            },
            t,
        );
    }
    function v(e) {
        return (0, r.jsx)(
            l.P3F,
            {
                className: a()(d.roundButton, { [d.activeButton]: e.selected }),
                onClick: e.selected ? void 0 : e.navigateToPage,
                "aria-label": u.intl.formatToPlainString(u.t.IGMs8S, { pageNumber: e.targetPage }),
                "aria-current": e.selected ? "page" : void 0,
                children: (0, r.jsx)("span", { children: e.targetPage }),
            },
            e.key,
        );
    }
    function S(e) {
        let t = v(e);
        return null != g ? g(e, t) : t;
    }
    function I(e) {
        return (0, r.jsx)(
            f,
            {
                page: e,
                totalPageCount: E,
                disabled: !!p,
                onPageChange: _,
            },
            e.key,
        );
    }
    function T(e) {
        let { pages: t, hasMultiplePages: n } = e;
        return n
            ? (0, r.jsx)("div", {
                  className: a()(d.pageControlContainer, h),
                  children: (0, r.jsx)("nav", {
                      className: d.pageControl,
                      children: t.map((e) => {
                          switch (e.type) {
                              case c.s.BACK:
                                  return y(e);
                              case c.s.PAGE:
                                  return S(e);
                              case c.s.GAP:
                                  return I(e);
                              case c.s.NEXT:
                                  return O(e);
                              default:
                                  return null;
                          }
                      }),
                  }),
              })
            : null;
    }
    return (0, r.jsx)(c.W, {
        totalPageCount: E,
        selectedPage: t,
        maxVisiblePages: o,
        hideMaxPage: m,
        onPageChange: b,
        children: T,
    });
}
