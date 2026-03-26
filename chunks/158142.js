"use strict";
n.d(t, { m: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(862482),
    l = n(397927),
    u = n(62539),
    c = n(985018),
    d = n(583513);
function _(e) {
    let { page: t, totalPageCount: n, disabled: s, onPageChange: o } = e,
        [u, c] = i.useState(!1),
        [_, f] = i.useState(null),
        p = null != _ && _ >= 1 && _ <= n,
        h = (e) => {
            let t = parseInt(e);
            "" === e || isNaN(t) ? f(null) : f(t);
        },
        m = (e) => {
            "Enter" === e.key && null != _ && p && (o(_), c(!1), f(null));
        };
    return s
        ? (0, r.jsx)(
              l.Heading,
              { className: d.rQ, "aria-hidden": !0, variant: "heading-sm/semibold", children: "…" },
              t.key,
          )
        : u
          ? (0, r.jsx)("div", {
                className: d.mF,
                children: (0, r.jsx)(
                    l.ksK,
                    {
                        type: "number",
                        autoFocus: !0,
                        value: null == _ ? "" : `${_}`,
                        onChange: h,
                        onBlur: () => {
                            c(!1), f(null);
                        },
                        onKeyUp: m,
                        disabled: s,
                    },
                    t.key,
                ),
            })
          : (0, r.jsx)(
                l.DUT,
                {
                    onClick: () => c(!0),
                    children: (0, r.jsx)(l.Heading, {
                        className: a()(d.hJ, d.rQ),
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
            totalCount: n,
            pageSize: i,
            maxVisiblePages: s,
            disablePaginationGap: f,
            onPageChange: p,
            hideMaxPage: h = !1,
            className: m,
            renderPageWrapper: E,
        } = e,
        g = Math.ceil(n / i);
    function A(e) {
        null != p && p(e);
    }
    function I(e) {
        let { key: t, disabled: n, navigateToPage: i } = e;
        return (0, r.jsxs)(
            o.$n,
            {
                className: d.Cp,
                innerClassName: d.MO,
                look: o.$n.Looks.BLANK,
                color: o.$n.Colors.TRANSPARENT,
                onClick: i,
                disabled: n,
                rel: "prev",
                children: [
                    (0, r.jsx)(l.n2b, { size: "md", color: "currentColor", className: d.B7, "aria-hidden": !0 }),
                    (0, r.jsx)("span", { children: c.intl.string(c.t["13/7kX"]) }),
                ],
            },
            t,
        );
    }
    function T(e) {
        let { key: t, disabled: n, navigateToPage: i } = e;
        return (0, r.jsxs)(
            o.$n,
            {
                className: d.Cp,
                innerClassName: d.MO,
                look: o.$n.Looks.BLANK,
                color: o.$n.Colors.TRANSPARENT,
                onClick: i,
                disabled: n,
                rel: "next",
                children: [
                    (0, r.jsx)("span", { children: c.intl.string(c.t.PDTjLN) }),
                    (0, r.jsx)(l._BQ, { size: "md", color: "currentColor", className: d.B7, "aria-hidden": !0 }),
                ],
            },
            t,
        );
    }
    function S(e) {
        return (0, r.jsx)(
            l.DUT,
            {
                className: a()(d.hJ, { [d.Xs]: e.selected }),
                onClick: e.selected ? void 0 : e.navigateToPage,
                "aria-label": c.intl.formatToPlainString(c.t.IGMs8S, { pageNumber: e.targetPage }),
                "aria-current": e.selected ? "page" : void 0,
                children: (0, r.jsx)("span", { children: e.targetPage }),
            },
            e.key,
        );
    }
    function y(e) {
        let t = S(e);
        return null != E ? E(e, t) : t;
    }
    function v(e) {
        return (0, r.jsx)(_, { page: e, totalPageCount: g, disabled: !!f, onPageChange: p }, e.key);
    }
    function N(e) {
        let { pages: t, hasMultiplePages: n } = e;
        return n
            ? (0, r.jsx)("div", {
                  className: a()(d.Ug, m),
                  children: (0, r.jsx)("nav", {
                      className: d.DU,
                      children: t.map((e) => {
                          switch (e.type) {
                              case u._.BACK:
                                  return I(e);
                              case u._.PAGE:
                                  return y(e);
                              case u._.GAP:
                                  return v(e);
                              case u._.NEXT:
                                  return T(e);
                              default:
                                  return null;
                          }
                      }),
                  }),
              })
            : null;
    }
    return (0, r.jsx)(u.J, {
        totalPageCount: g,
        selectedPage: t,
        maxVisiblePages: s,
        hideMaxPage: h,
        onPageChange: A,
        children: N,
    });
}
