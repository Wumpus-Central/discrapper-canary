n.d(t, {
    L: () => c,
    Z: () => u,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(600164),
    l = n(388354);
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
        selected: m = !1,
    } = e;
    return (0, r.jsxs)(s.Z, {
        className: f,
        justify: s.Z.Justify.CENTER,
        align: s.Z.Align.CENTER,
        direction: s.Z.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !_ &&
                null != p &&
                (0, r.jsx)("div", {
                    className: a()(l.art, l[d]),
                    style: { backgroundImage: "url(".concat(p, ")") },
                }),
            null != i
                ? (0, r.jsx)(o.Text, {
                      color: "none",
                      variant: "text-md/semibold",
                      className: l.header,
                      children: i,
                  })
                : null,
            null != u
                ? (0, r.jsx)(o.Text, {
                      className: l.errorCodeMessage,
                      variant: "text-sm/semibold",
                      color: "text-muted",
                      selectable: !0,
                      children: u,
                  })
                : null,
            null != c && (null == u || "small" !== d)
                ? (0, r.jsx)(o.Text, {
                      color: "none",
                      className: l.description,
                      variant: "text-sm/medium",
                      children: c,
                  })
                : null,
            m || null == n
                ? null
                : (0, r.jsx)("div", {
                      className: l.outerButton,
                      children: (0, r.jsx)(o.Button, {
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
