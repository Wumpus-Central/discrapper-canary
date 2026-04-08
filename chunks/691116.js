n.d(t, { A: () => d });
var i = n(627968),
    s = n(158954),
    l = n(272053),
    a = n(590089),
    r = n(688897),
    o = n(918422);
function d(e) {
    let { node: t } = e,
        n = t.useSubtitle?.(),
        d = t.useTrailingDecoration?.(),
        c = t.layout[0].key,
        { parentPanelNode: u } = (0, r.x)(c),
        m = u?.useTitle?.();
    return null == u || null == m
        ? null
        : (0, i.jsx)(a.U, {
              role: "link",
              title: m,
              description: n,
              trailingElement: (0, i.jsxs)(s.BJc, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != d && (0, i.jsx)(o.Q, { decoration: d }), (0, i.jsx)(s.uhT, {})],
              }),
              onClick: () => l.A.navigate(c),
          });
}
