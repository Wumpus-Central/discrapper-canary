n.d(t, { A: () => o });
var i = n(627968),
    s = n(158954),
    r = n(894858),
    a = n(590089),
    l = n(688897);
function o(e) {
    let { node: t } = e,
        n = t.useSubtitle?.(),
        o = t.layout[0].key,
        { parentPanelNode: c } = (0, l.x)(o),
        d = c?.useTitle?.();
    return null == c
        ? null
        : (0, i.jsx)(a.U, {
              title: d,
              description: n,
              primaryTrailingElement: (0, i.jsx)(s.uhT, {}),
              onClick: () => r.A.setState({ requestedTargetKey: o }),
          });
}
