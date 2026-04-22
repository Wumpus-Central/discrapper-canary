t.d(n, { A: () => u });
var l = t(627968),
    r = t(331322),
    i = t(881636),
    s = t(272053),
    a = t(590089),
    o = t(688897),
    c = t(669353),
    d = t(104419);
function u(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: u, useLeadingDecoration: x, useTrailingDecoration: j } = n,
        h = t?.(),
        m = u?.(),
        f = x?.(),
        p = j?.(),
        y = n.layout[0].key,
        { parentPanelNode: g } = (0, o.x)(y),
        v = g?.useTitle?.(),
        A = h ?? v;
    return null == g || null == A
        ? null
        : (0, l.jsx)(a.U, {
              role: "link",
              "aria-label": v,
              title: A,
              leadingElement: null != f ? (0, l.jsx)(c.N, { decoration: f }) : null,
              description: m,
              trailingElement: (0, l.jsxs)(r.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != p && (0, l.jsx)(d.V, { decoration: p }), (0, l.jsx)(i.u, {})],
              }),
              onClick: () => s.A.navigate(y),
          });
}
