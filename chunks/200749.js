n.d(t, {
    A: () => u,
    J: () => c,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(235986),
    l = n(427133);
function c(e) {
    return e < 400 ? "small" : e < 1000 ? "medium" : "large";
}
function u(e) {
    let {
        onCTAClick: t,
        callToAction: n,
        header: i,
        description: c,
        errorCodeMessage: u,
        size: d,
        className: f,
        artURL: p,
        noArt: _ = !1,
        selected: h = !1,
    } = e;
    return (0, r.jsxs)(o.A, {
        className: f,
        justify: o.A.Justify.CENTER,
        align: o.A.Align.CENTER,
        direction: o.A.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !_ &&
                null != p &&
                (0, r.jsx)("div", {
                    className: a()(l.art, l[d]),
                    style: { backgroundImage: "url(".concat(p, ")") },
                }),
            null != i
                ? (0, r.jsx)(s.Text, {
                      color: "none",
                      variant: "text-md/semibold",
                      className: l.header,
                      children: i,
                  })
                : null,
            null != u
                ? (0, r.jsx)(s.Text, {
                      className: l.errorCodeMessage,
                      variant: "text-sm/semibold",
                      color: "text-muted",
                      selectable: !0,
                      children: u,
                  })
                : null,
            null != c && (null == u || "small" !== d)
                ? (0, r.jsx)(s.Text, {
                      color: "none",
                      className: l.description,
                      variant: "text-sm/medium",
                      children: c,
                  })
                : null,
            h || null == n
                ? null
                : (0, r.jsx)("div", {
                      className: l.outerButton,
                      children: (0, r.jsx)(s.Button, {
                          size: "small" === d ? "sm" : "md",
                          variant: "secondary",
                          onClick: (e) => {
                              e.stopPropagation(), null == t || t(e);
                          },
                          text: n,
                      }),
                  }),
        ],
    });
}
