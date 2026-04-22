a.d(t, { m: () => x });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(862482),
    o = a(534514),
    c = a(292666),
    d = a(939249),
    u = a(921853),
    h = a(320448),
    m = a(62539),
    p = a(985018),
    _ = a(156041);
function g(e) {
    let { page: t, totalPageCount: a, disabled: i, onPageChange: r } = e,
        [u, h] = l.useState(!1),
        [m, p] = l.useState(null),
        g = null != m && m >= 1 && m <= a;
    return i
        ? (0, n.jsx)(o.D, { className: _.rQ, "aria-hidden": !0, variant: "heading-sm/semibold", children: "…" }, t.key)
        : u
          ? (0, n.jsx)("div", {
                className: _.mF,
                children: (0, n.jsx)(
                    c.k,
                    {
                        type: "number",
                        autoFocus: !0,
                        value: null == m ? "" : `${m}`,
                        onChange: (e) => {
                            let t = parseInt(e);
                            "" === e || isNaN(t) ? p(null) : p(t);
                        },
                        onBlur: () => {
                            h(!1), p(null);
                        },
                        onKeyUp: (e) => {
                            "Enter" === e.key && null != m && g && (r(m), h(!1), p(null));
                        },
                        disabled: i,
                    },
                    t.key,
                ),
            })
          : (0, n.jsx)(
                d.D,
                {
                    onClick: () => h(!0),
                    children: (0, n.jsx)(o.D, {
                        className: s()(_.hJ, _.rQ),
                        "aria-hidden": !0,
                        variant: "heading-sm/semibold",
                        children: "…",
                    }),
                },
                t.key,
            );
}
function x(e) {
    let {
            currentPage: t,
            totalCount: a,
            pageSize: l,
            maxVisiblePages: i,
            disablePaginationGap: o,
            onPageChange: c,
            hideMaxPage: x = !1,
            className: A,
            renderPageWrapper: f,
        } = e,
        C = Math.ceil(a / l);
    return (0, n.jsx)(m.J, {
        totalPageCount: C,
        selectedPage: t,
        maxVisiblePages: i,
        hideMaxPage: x,
        onPageChange: function (e) {
            null != c && c(e);
        },
        children: function (e) {
            let { pages: t, hasMultiplePages: a } = e;
            return a
                ? (0, n.jsx)("div", {
                      className: s()(_.Ug, A),
                      children: (0, n.jsx)("nav", {
                          className: _.DU,
                          children: t.map((e) => {
                              switch (e.type) {
                                  case m._.BACK:
                                      return (function (e) {
                                          let { key: t, disabled: a, navigateToPage: l } = e;
                                          return (0, n.jsxs)(
                                              r.$n,
                                              {
                                                  className: _.Cp,
                                                  innerClassName: _.MO,
                                                  look: r.$n.Looks.BLANK,
                                                  color: r.$n.Colors.TRANSPARENT,
                                                  onClick: l,
                                                  disabled: a,
                                                  rel: "prev",
                                                  children: [
                                                      (0, n.jsx)(u.n, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: _.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                      (0, n.jsx)("span", { children: p.intl.string(p.t["13/7kX"]) }),
                                                  ],
                                              },
                                              t,
                                          );
                                      })(e);
                                  case m._.PAGE:
                                      let t;
                                      return (
                                          (t = (0, n.jsx)(
                                              d.D,
                                              {
                                                  className: s()(_.hJ, { [_.Xs]: e.selected }),
                                                  onClick: e.selected ? void 0 : e.navigateToPage,
                                                  "aria-label": p.intl.formatToPlainString(p.t.IGMs8S, {
                                                      pageNumber: e.targetPage,
                                                  }),
                                                  "aria-current": e.selected ? "page" : void 0,
                                                  children: (0, n.jsx)("span", { children: e.targetPage }),
                                              },
                                              e.key,
                                          )),
                                          null != f ? f(e, t) : t
                                      );
                                  case m._.GAP:
                                      return (0, n.jsx)(
                                          g,
                                          { page: e, totalPageCount: C, disabled: !!o, onPageChange: c },
                                          e.key,
                                      );
                                  case m._.NEXT:
                                      return (function (e) {
                                          let { key: t, disabled: a, navigateToPage: l } = e;
                                          return (0, n.jsxs)(
                                              r.$n,
                                              {
                                                  className: _.Cp,
                                                  innerClassName: _.MO,
                                                  look: r.$n.Looks.BLANK,
                                                  color: r.$n.Colors.TRANSPARENT,
                                                  onClick: l,
                                                  disabled: a,
                                                  rel: "next",
                                                  children: [
                                                      (0, n.jsx)("span", { children: p.intl.string(p.t.PDTjLN) }),
                                                      (0, n.jsx)(h._, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: _.B7,
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
