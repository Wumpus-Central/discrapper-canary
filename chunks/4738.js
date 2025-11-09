n.d(t, { D: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(481060),
    c = n(889963),
    u = n(388032),
    d = n(384);
function f(e) {
    let { page: t, totalPageCount: n, disabled: a, onPageChange: s } = e,
        [c, u] = i.useState(!1),
        [f, _] = i.useState(null),
        p = null != f && f >= 1 && f <= n,
        h = (e) => {
            let t = parseInt(e);
            if ("" === e || isNaN(t)) return void _(null);
            _(t);
        },
        m = (e) => {
            "Enter" === e.key && null != f && p && (s(f), u(!1), _(null));
        };
    return a
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
                        onChange: h,
                        onBlur: () => {
                            u(!1), _(null);
                        },
                        onKeyUp: m,
                        disabled: a,
                    },
                    t.key,
                ),
            })
          : (0, r.jsx)(
                l.P3F,
                {
                    onClick: () => u(!0),
                    children: (0, r.jsx)(l.Heading, {
                        className: o()(d.roundButton, d.gap),
                        "aria-hidden": !0,
                        variant: "heading-sm/semibold",
                        children: "\u2026",
                    }),
                },
                t.key,
            );
}
function _(e) {
    let {
            currentPage: t,
            totalCount: n,
            pageSize: i,
            maxVisiblePages: a,
            disablePaginationGap: _,
            onPageChange: p,
            hideMaxPage: h = !1,
            className: m,
            renderPageWrapper: g,
        } = e,
        E = Math.ceil(n / i);
    function b(e) {
        null != p && p(e);
    }
    function y(e) {
        let { key: t, disabled: n, navigateToPage: i } = e;
        return (0, r.jsxs)(
            s.Button,
            {
                className: d.endButton,
                innerClassName: d.endButtonInner,
                look: s.Button.Looks.BLANK,
                color: s.Button.Colors.TRANSPARENT,
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
            s.Button,
            {
                className: d.endButton,
                innerClassName: d.endButtonInner,
                look: s.Button.Looks.BLANK,
                color: s.Button.Colors.TRANSPARENT,
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
                className: o()(d.roundButton, { [d.activeButton]: e.selected }),
                onClick: e.selected ? void 0 : e.navigateToPage,
                "aria-label": u.intl.formatToPlainString(u.t.IGMs8S, { pageNumber: e.targetPage }),
                "aria-current": e.selected ? "page" : void 0,
                children: (0, r.jsx)("span", { children: e.targetPage }),
            },
            e.key,
        );
    }
    function I(e) {
        let t = v(e);
        return null != g ? g(e, t) : t;
    }
    function S(e) {
        return (0, r.jsx)(
            f,
            {
                page: e,
                totalPageCount: E,
                disabled: !!_,
                onPageChange: p,
            },
            e.key,
        );
    }
    function T(e) {
        let { pages: t, hasMultiplePages: n } = e;
        return n
            ? (0, r.jsx)("div", {
                  className: o()(d.pageControlContainer, m),
                  children: (0, r.jsx)("nav", {
                      className: d.pageControl,
                      children: t.map((e) => {
                          switch (e.type) {
                              case c.s.BACK:
                                  return y(e);
                              case c.s.PAGE:
                                  return I(e);
                              case c.s.GAP:
                                  return S(e);
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
        maxVisiblePages: a,
        hideMaxPage: h,
        onPageChange: b,
        children: T,
    });
}
