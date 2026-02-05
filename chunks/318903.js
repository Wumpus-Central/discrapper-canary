n.d(t, { A: () => d });
var i = n(627968),
    s = n(158954),
    r = n(199966),
    a = n(963935),
    l = n(894858),
    o = n(590089),
    c = n(191563);
function d(e) {
    let { node: t } = e,
        { destinationKey: n } = t,
        d = t.useSubtitle?.(),
        { accessibleDirectory: u } = (0, r._)(),
        _ = u.entry(n),
        m = _?.parentPanelKey != null ? u.get(_.parentPanelKey) : void 0,
        A = t.useTitle?.(),
        g = m?.useTitle?.();
    if (null == m) return null;
    let E = m.parent?.type === a.Z6.SIDEBAR_ITEM ? m.parent.icon : void 0;
    return (0, i.jsx)(o.U, {
        title: A ?? g,
        description: d,
        leadingElement:
            null != E && (0, i.jsx)("div", { className: c.z, children: (0, i.jsx)(E, { color: "currentColor" }) }),
        primaryTrailingElement: (0, i.jsx)(s.uhT, {}),
        onClick: () => l.A.setState({ requestedTargetKey: n }),
    });
}
