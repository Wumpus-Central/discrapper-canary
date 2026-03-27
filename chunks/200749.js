"use strict";
n.d(t, { A: () => c, J: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(235986),
    l = n(59392);
function u(e) {
    return e < 400 ? "small" : e < 1e3 ? "medium" : "large";
}
function c(e) {
    let {
        onCTAClick: t,
        callToAction: n,
        header: i,
        description: u,
        errorCodeMessage: c,
        size: d,
        className: _,
        artURL: f,
        noArt: p = !1,
        selected: h = !1,
    } = e;
    return (0, r.jsxs)(o.A, {
        className: _,
        justify: o.A.Justify.CENTER,
        align: o.A.Align.CENTER,
        direction: o.A.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !p &&
                null != f &&
                (0, r.jsx)("div", { className: s()(l.art, l[d]), style: { backgroundImage: `url(${f})` } }),
            null != i
                ? (0, r.jsx)(a.Text, { color: "none", variant: "text-md/semibold", className: l.header, children: i })
                : null,
            null != c
                ? (0, r.jsx)(a.Text, {
                      className: l.errorCodeMessage,
                      variant: "text-sm/semibold",
                      color: "text-muted",
                      selectable: !0,
                      children: c,
                  })
                : null,
            null != u && (null == c || "small" !== d)
                ? (0, r.jsx)(a.Text, {
                      color: "none",
                      className: l.description,
                      variant: "text-sm/medium",
                      children: u,
                  })
                : null,
            h || null == n
                ? null
                : (0, r.jsx)("div", {
                      className: l.outerButton,
                      children: (0, r.jsx)(a.Button, {
                          size: "small" === d ? "sm" : "md",
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
