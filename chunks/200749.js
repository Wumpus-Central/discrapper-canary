"use strict";
n.d(t, { A: () => d, J: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(834730),
    o = n(821609),
    l = n(235986),
    u = n(366594);
function c(e) {
    return e < 400 ? "small" : e < 1e3 ? "medium" : "large";
}
function d(e) {
    let {
        onCTAClick: t,
        callToAction: n,
        header: r,
        description: c,
        errorCodeMessage: d,
        size: _,
        className: h,
        artURL: f,
        noArt: p = !1,
        selected: E = !1,
    } = e;
    return (0, i.jsxs)(l.A, {
        className: h,
        justify: l.A.Justify.CENTER,
        align: l.A.Align.CENTER,
        direction: l.A.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !p &&
                null != f &&
                (0, i.jsx)("div", { className: s()(u.art, u[_]), style: { backgroundImage: `url(${f})` } }),
            null != r
                ? (0, i.jsx)(a.E, { color: "none", variant: "text-md/semibold", className: u.header, children: r })
                : null,
            null != d
                ? (0, i.jsx)(a.E, {
                      className: u.errorCodeMessage,
                      variant: "text-sm/semibold",
                      color: "text-muted",
                      selectable: !0,
                      children: d,
                  })
                : null,
            null != c && (null == d || "small" !== _)
                ? (0, i.jsx)(a.E, { color: "none", className: u.description, variant: "text-sm/medium", children: c })
                : null,
            E || null == n
                ? null
                : (0, i.jsx)("div", {
                      className: u.outerButton,
                      children: (0, i.jsx)(o.$, {
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
