"use strict";
n.d(t, { A: () => u, J: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(834730),
    l = n(821609),
    o = n(235986),
    d = n(366594);
function c(e) {
    return e < 400 ? "small" : e < 1e3 ? "medium" : "large";
}
function u(e) {
    let {
        onCTAClick: t,
        callToAction: n,
        header: r,
        description: c,
        errorCodeMessage: u,
        size: _,
        className: E,
        artURL: A,
        noArt: h = !1,
        selected: I = !1,
    } = e;
    return (0, i.jsxs)(o.A, {
        className: E,
        justify: o.A.Justify.CENTER,
        align: o.A.Align.CENTER,
        direction: o.A.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !h &&
                null != A &&
                (0, i.jsx)("div", { className: a()(d.art, d[_]), style: { backgroundImage: `url(${A})` } }),
            null != r
                ? (0, i.jsx)(s.E, { color: "none", variant: "text-md/semibold", className: d.header, children: r })
                : null,
            null != u
                ? (0, i.jsx)(s.E, {
                      className: d.errorCodeMessage,
                      variant: "text-sm/semibold",
                      color: "text-muted",
                      selectable: !0,
                      children: u,
                  })
                : null,
            null != c && (null == u || "small" !== _)
                ? (0, i.jsx)(s.E, { color: "none", className: d.description, variant: "text-sm/medium", children: c })
                : null,
            I || null == n
                ? null
                : (0, i.jsx)("div", {
                      className: d.outerButton,
                      children: (0, i.jsx)(l.$, {
                          size: "small" === _ ? "sm" : "md",
                          variant: "secondary",
                          onClick: (e) => {
                              e.stopPropagation(), t?.(e);
                          },
                          text: n,
                      }),
                  }),
        ],
    });
}
