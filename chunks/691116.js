n.d(t, { A: () => o });
var i = n(627968),
    s = n(158954),
    l = n(272053),
    a = n(590089),
    r = n(688897);
function o(e) {
    let { node: t } = e,
        n = t.useSubtitle?.(),
        o = t.layout[0].key,
        { parentPanelNode: d } = (0, r.x)(o),
        c = d?.useTitle?.();
    return null == d || null == c
        ? null
        : (0, i.jsx)(a.U, {
              title: c,
              description: n,
              trailingElement: (0, i.jsx)(s.uhT, {}),
              onClick: () => l.A.navigate(o),
          });
}
