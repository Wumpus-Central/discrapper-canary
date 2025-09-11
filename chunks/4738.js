n.d(t, { D: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(1561),
    c = n(481060),
    u = n(889963),
    d = n(388032),
    f = n(384);
function _(e) {
    let { page: t, totalPageCount: n, disabled: a, onPageChange: s } = e,
        [u, d] = i.useState(!1),
        [_, p] = i.useState(null),
        h = null != _ && _ >= 1 && _ <= n,
        m = (e) => {
            let t = parseInt(e);
            if ("" === e || isNaN(t)) return void p(null);
            p(t);
        },
        g = (e) => {
            "Enter" === e.key && null != _ && h && (s(_), d(!1), p(null));
        };
    return a
        ? (0, r.jsx)(
              c.X6q,
              {
                  className: f.gap,
                  "aria-hidden": !0,
                  variant: "heading-sm/semibold",
                  children: "\u2026",
              },
              t.key,
          )
        : u
          ? (0, r.jsx)("div", {
                className: f.jumpToPageInlineInput,
                children: (0, r.jsx)(
                    c.oil,
                    {
                        type: "number",
                        autoFocus: !0,
                        value: null == _ ? "" : "".concat(_),
                        onChange: m,
                        onBlur: () => {
                            d(!1), p(null);
                        },
                        onKeyUp: g,
                        disabled: a,
                    },
                    t.key,
                ),
            })
          : (0, r.jsx)(
                l.P,
                {
                    onClick: () => d(!0),
                    children: (0, r.jsx)(c.X6q, {
                        className: o()(f.roundButton, f.gap),
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
            maxVisiblePages: a,
            disablePaginationGap: p,
            onPageChange: h,
            hideMaxPage: m = !1,
            className: g,
            renderPageWrapper: E,
        } = e,
        b = Math.ceil(n / i);
    function y(e) {
        null != h && h(e);
    }
    function O(e) {
        let { key: t, disabled: n, navigateToPage: i } = e;
        return (0, r.jsxs)(
            s.zx,
            {
                className: f.endButton,
                innerClassName: f.endButtonInner,
                look: s.zx.Looks.BLANK,
                color: s.zx.Colors.TRANSPARENT,
                onClick: i,
                disabled: n,
                rel: "prev",
                children: [
                    (0, r.jsx)(c.V7D, {
                        size: "md",
                        color: "currentColor",
                        className: f.iconCaret,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)("span", { children: d.intl.string(d.t["13/7kZ"]) }),
                ],
            },
            t,
        );
    }
    function v(e) {
        let { key: t, disabled: n, navigateToPage: i } = e;
        return (0, r.jsxs)(
            s.zx,
            {
                className: f.endButton,
                innerClassName: f.endButtonInner,
                look: s.zx.Looks.BLANK,
                color: s.zx.Colors.TRANSPARENT,
                onClick: i,
                disabled: n,
                rel: "next",
                children: [
                    (0, r.jsx)("span", { children: d.intl.string(d.t.PDTjLC) }),
                    (0, r.jsx)(c.Fbu, {
                        size: "md",
                        color: "currentColor",
                        className: f.iconCaret,
                        "aria-hidden": !0,
                    }),
                ],
            },
            t,
        );
    }
    function I(e) {
        return (0, r.jsx)(
            l.P,
            {
                className: o()(f.roundButton, { [f.activeButton]: e.selected }),
                onClick: e.selected ? void 0 : e.navigateToPage,
                "aria-label": d.intl.formatToPlainString(d.t.IGMs8f, { pageNumber: e.targetPage }),
                "aria-current": e.selected ? "page" : void 0,
                children: (0, r.jsx)("span", { children: e.targetPage }),
            },
            e.key,
        );
    }
    function T(e) {
        let t = I(e);
        return null != E ? E(e, t) : t;
    }
    function S(e) {
        return (0, r.jsx)(
            _,
            {
                page: e,
                totalPageCount: b,
                disabled: !!p,
                onPageChange: h,
            },
            e.key,
        );
    }
    function A(e) {
        let { pages: t, hasMultiplePages: n } = e;
        return n
            ? (0, r.jsx)("div", {
                  className: o()(f.pageControlContainer, g),
                  children: (0, r.jsx)("nav", {
                      className: f.pageControl,
                      children: t.map((e) => {
                          switch (e.type) {
                              case u.s.BACK:
                                  return O(e);
                              case u.s.PAGE:
                                  return T(e);
                              case u.s.GAP:
                                  return S(e);
                              case u.s.NEXT:
                                  return v(e);
                              default:
                                  return null;
                          }
                      }),
                  }),
              })
            : null;
    }
    return (0, r.jsx)(u.W, {
        totalPageCount: b,
        selectedPage: t,
        maxVisiblePages: a,
        hideMaxPage: m,
        onPageChange: y,
        children: A,
    });
}
