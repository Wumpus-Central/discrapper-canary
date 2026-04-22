"use strict";
n.d(t, { A: () => c, J: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(834730),
    o = n(821609),
    l = n(235986),
    u = n(366594);
function d(e) {
    return e < 400 ? "small" : e < 1e3 ? "medium" : "large";
}
function c(e) {
    let {
        onCTAClick: t,
        callToAction: n,
        header: i,
        description: d,
        errorCodeMessage: c,
        size: _,
        className: f,
        artURL: E,
        noArt: h = !1,
        selected: p = !1,
    } = e;
    return (0, r.jsxs)(l.A, {
        className: f,
        justify: l.A.Justify.CENTER,
        align: l.A.Align.CENTER,
        direction: l.A.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !h &&
                null != E &&
                (0, r.jsx)("div", { className: s()(u.art, u[_]), style: { backgroundImage: `url(${E})` } }),
            null != i
                ? (0, r.jsx)(a.E, { color: "none", variant: "text-md/semibold", className: u.header, children: i })
                : null,
            null != c
                ? (0, r.jsx)(a.E, {
                      className: u.errorCodeMessage,
                      variant: "text-sm/semibold",
                      color: "text-muted",
                      selectable: !0,
                      children: c,
                  })
                : null,
            null != d && (null == c || "small" !== _)
                ? (0, r.jsx)(a.E, { color: "none", className: u.description, variant: "text-sm/medium", children: d })
                : null,
            p || null == n
                ? null
                : (0, r.jsx)("div", {
                      className: u.outerButton,
                      children: (0, r.jsx)(o.$, {
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
