n.d(t, { A: () => d, J: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(834730),
    a = n(821609),
    o = n(235986),
    c = n(366594);
function u(e) {
    return e < 400 ? "small" : e < 1e3 ? "medium" : "large";
}
function d(e) {
    let {
        onCTAClick: t,
        callToAction: n,
        header: r,
        description: u,
        errorCodeMessage: d,
        size: A,
        className: h,
        artURL: m,
        noArt: g = !1,
        selected: p = !1,
    } = e;
    return (0, i.jsxs)(o.A, {
        className: h,
        justify: o.A.Justify.CENTER,
        align: o.A.Align.CENTER,
        direction: o.A.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !g &&
                null != m &&
                (0, i.jsx)("div", { className: l()(c.art, c[A]), style: { backgroundImage: `url(${m})` } }),
            null != r
                ? (0, i.jsx)(s.E, { color: "none", variant: "text-md/semibold", className: c.header, children: r })
                : null,
            null != d
                ? (0, i.jsx)(s.E, {
                      className: c.errorCodeMessage,
                      variant: "text-sm/semibold",
                      color: "text-muted",
                      selectable: !0,
                      children: d,
                  })
                : null,
            null != u && (null == d || "small" !== A)
                ? (0, i.jsx)(s.E, { color: "none", className: c.description, variant: "text-sm/medium", children: u })
                : null,
            p || null == n
                ? null
                : (0, i.jsx)("div", {
                      className: c.outerButton,
                      children: (0, i.jsx)(a.$, {
                          size: "small" === A ? "sm" : "md",
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
