n.d(t, { A: () => o });
var i = n(627968),
    s = n(158954),
    a = n(894858),
    l = n(590089),
    r = n(688897);
function o(e) {
    let { node: t } = e,
        n = t.useSubtitle?.(),
        o = t.layout[0].key,
        { parentPanelNode: c } = (0, r.x)(o),
        d = c?.useTitle?.();
    return null == c || null == d
        ? null
        : (0, i.jsx)(l.U, {
              title: d,
              description: n,
              trailingElement: (0, i.jsx)(s.uhT, {}),
              onClick: () => a.A.setState({ requestedTargetKey: o }),
          });
}
