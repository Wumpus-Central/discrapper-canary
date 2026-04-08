n.d(t, { A: () => c });
var i = n(627968),
    s = n(158954),
    l = n(272053),
    a = n(590089),
    r = n(688897),
    o = n(24578),
    d = n(918422);
function c(e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: c, useLeadingDecoration: u, useTrailingDecoration: m } = t,
        g = n?.(),
        _ = c?.(),
        x = u?.(),
        A = m?.(),
        h = t.layout[0].key,
        { parentPanelNode: p } = (0, r.x)(h),
        T = p?.useTitle?.(),
        f = g ?? T;
    return null == p || null == f
        ? null
        : (0, i.jsx)(a.U, {
              role: "link",
              title: f,
              leadingElement: null != x ? (0, i.jsx)(o.g, { decoration: x }) : null,
              description: _,
              trailingElement: (0, i.jsxs)(s.BJc, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != A && (0, i.jsx)(d.Q, { decoration: A }), (0, i.jsx)(s.uhT, {})],
              }),
              onClick: () => l.A.navigate(h),
          });
}
