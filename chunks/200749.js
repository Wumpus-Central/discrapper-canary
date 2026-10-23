n.d(t, { A: () => d, J: () => c });
var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(834730),
    a = n(821609),
    o = n(235986),
    u = n(946167);
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
        size: h,
        className: m,
        artURL: A,
        noArt: g = !1,
        selected: E = !1,
    } = e;
    return (0, i.jsxs)(o.A, {
        className: m,
        justify: o.A.Justify.CENTER,
        align: o.A.Align.CENTER,
        direction: o.A.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !g &&
                null != A &&
                (0, i.jsx)("div", { className: l()(u.art, u[h]), style: { backgroundImage: `url(${A})` } }),
            null != r
                ? (0, i.jsx)(s.E, { color: "none", variant: "text-md/semibold", className: u.header, children: r })
                : null,
            null != d
                ? (0, i.jsx)(s.E, {
                      className: u.errorCodeMessage,
                      variant: "text-sm/semibold",
                      color: "text-muted",
                      selectable: !0,
                      children: d,
                  })
                : null,
            null != c && (null == d || "small" !== h)
                ? (0, i.jsx)(s.E, { color: "none", className: u.description, variant: "text-sm/medium", children: c })
                : null,
            E || null == n
                ? null
                : (0, i.jsx)("div", {
                      className: u.outerButton,
                      children: (0, i.jsx)(a.$, {
                          size: "small" === h ? "sm" : "md",
                          variant: "secondary",
                          onClick: (e) => {
                              (e.stopPropagation(), t?.(e));
                          },
                          text: n,
                      }),
                  }),
        ],
    });
}
