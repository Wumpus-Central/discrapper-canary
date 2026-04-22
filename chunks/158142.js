"use strict";
s.d(t, { m: () => f });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(862482),
    o = s(534514),
    c = s(292666),
    d = s(939249),
    u = s(921853),
    g = s(320448),
    h = s(62539),
    _ = s(985018),
    m = s(156041);
function p(e) {
    let { page: t, totalPageCount: s, disabled: r, onPageChange: i } = e,
        [u, g] = l.useState(!1),
        [h, _] = l.useState(null),
        p = null != h && h >= 1 && h <= s;
    return r
        ? (0, n.jsx)(o.D, { className: m.rQ, "aria-hidden": !0, variant: "heading-sm/semibold", children: "…" }, t.key)
        : u
          ? (0, n.jsx)("div", {
                className: m.mF,
                children: (0, n.jsx)(
                    c.k,
                    {
                        type: "number",
                        autoFocus: !0,
                        value: null == h ? "" : `${h}`,
                        onChange: (e) => {
                            let t = parseInt(e);
                            "" === e || isNaN(t) ? _(null) : _(t);
                        },
                        onBlur: () => {
                            g(!1), _(null);
                        },
                        onKeyUp: (e) => {
                            "Enter" === e.key && null != h && p && (i(h), g(!1), _(null));
                        },
                        disabled: r,
                    },
                    t.key,
                ),
            })
          : (0, n.jsx)(
                d.D,
                {
                    onClick: () => g(!0),
                    children: (0, n.jsx)(o.D, {
                        className: a()(m.hJ, m.rQ),
                        "aria-hidden": !0,
                        variant: "heading-sm/semibold",
                        children: "…",
                    }),
                },
                t.key,
            );
}
function f(e) {
    let {
            currentPage: t,
            totalCount: s,
            pageSize: l,
            maxVisiblePages: r,
            disablePaginationGap: o,
            onPageChange: c,
            hideMaxPage: f = !1,
            className: E,
            renderPageWrapper: x,
        } = e,
        A = Math.ceil(s / l);
    return (0, n.jsx)(h.J, {
        totalPageCount: A,
        selectedPage: t,
        maxVisiblePages: r,
        hideMaxPage: f,
        onPageChange: function (e) {
            null != c && c(e);
        },
        children: function (e) {
            let { pages: t, hasMultiplePages: s } = e;
            return s
                ? (0, n.jsx)("div", {
                      className: a()(m.Ug, E),
                      children: (0, n.jsx)("nav", {
                          className: m.DU,
                          children: t.map((e) => {
                              switch (e.type) {
                                  case h._.BACK:
                                      return (function (e) {
                                          let { key: t, disabled: s, navigateToPage: l } = e;
                                          return (0, n.jsxs)(
                                              i.$n,
                                              {
                                                  className: m.Cp,
                                                  innerClassName: m.MO,
                                                  look: i.$n.Looks.BLANK,
                                                  color: i.$n.Colors.TRANSPARENT,
                                                  onClick: l,
                                                  disabled: s,
                                                  rel: "prev",
                                                  children: [
                                                      (0, n.jsx)(u.n, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: m.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                      (0, n.jsx)("span", { children: _.intl.string(_.t["13/7kX"]) }),
                                                  ],
                                              },
                                              t,
                                          );
                                      })(e);
                                  case h._.PAGE:
                                      let t;
                                      return (
                                          (t = (0, n.jsx)(
                                              d.D,
                                              {
                                                  className: a()(m.hJ, { [m.Xs]: e.selected }),
                                                  onClick: e.selected ? void 0 : e.navigateToPage,
                                                  "aria-label": _.intl.formatToPlainString(_.t.IGMs8S, {
                                                      pageNumber: e.targetPage,
                                                  }),
                                                  "aria-current": e.selected ? "page" : void 0,
                                                  children: (0, n.jsx)("span", { children: e.targetPage }),
                                              },
                                              e.key,
                                          )),
                                          null != x ? x(e, t) : t
                                      );
                                  case h._.GAP:
                                      return (0, n.jsx)(
                                          p,
                                          { page: e, totalPageCount: A, disabled: !!o, onPageChange: c },
                                          e.key,
                                      );
                                  case h._.NEXT:
                                      return (function (e) {
                                          let { key: t, disabled: s, navigateToPage: l } = e;
                                          return (0, n.jsxs)(
                                              i.$n,
                                              {
                                                  className: m.Cp,
                                                  innerClassName: m.MO,
                                                  look: i.$n.Looks.BLANK,
                                                  color: i.$n.Colors.TRANSPARENT,
                                                  onClick: l,
                                                  disabled: s,
                                                  rel: "next",
                                                  children: [
                                                      (0, n.jsx)("span", { children: _.intl.string(_.t.PDTjLN) }),
                                                      (0, n.jsx)(g._, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: m.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                  ],
                                              },
                                              t,
                                          );
                                      })(e);
                                  default:
                                      return null;
                              }
                          }),
                      }),
                  })
                : null;
        },
    });
}
