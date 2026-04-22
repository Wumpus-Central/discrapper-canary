n.d(t, { A: () => c });
var i = n(627968),
    s = n(158954),
    l = n(272053),
    r = n(590089),
    a = n(688897),
    o = n(669353),
    d = n(104419);
function c(e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: c, useLeadingDecoration: u, useTrailingDecoration: m } = t,
        g = n?.(),
        _ = c?.(),
        x = u?.(),
        h = m?.(),
        A = t.layout[0].key,
        { parentPanelNode: p } = (0, a.x)(A),
        T = p?.useTitle?.(),
        f = g ?? T;
    return null == p || null == f
        ? null
        : (0, i.jsx)(r.U, {
              role: "link",
              "aria-label": T,
              title: f,
              leadingElement: null != x ? (0, i.jsx)(o.N, { decoration: x }) : null,
              description: _,
              trailingElement: (0, i.jsxs)(s.BJc, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != h && (0, i.jsx)(d.V, { decoration: h }), (0, i.jsx)(s.uhT, {})],
              }),
              onClick: () => l.A.navigate(A),
          });
}
