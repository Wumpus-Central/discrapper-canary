n.d(t, { A: () => c });
var i = n(627968),
    s = n(158954),
    a = n(894858),
    l = n(688897),
    r = n(590089),
    o = n(191563);
function c(e) {
    let { node: t } = e,
        { destinationKey: n } = t,
        c = t.useSubtitle?.(),
        { parentPanelNode: d, parentSidebarItemNode: u } = (0, l.x)(n),
        _ = t.useTitle?.(),
        m = d?.useTitle?.();
    if (null == d) return null;
    let A = null != u ? u.icon : void 0;
    return (0, i.jsx)(r.U, {
        title: _ ?? m,
        description: c,
        leadingElement:
            null != A && (0, i.jsx)("div", { className: o.z, children: (0, i.jsx)(A, { color: "currentColor" }) }),
        primaryTrailingElement: (0, i.jsx)(s.uhT, {}),
        onClick: () => a.A.setState({ requestedTargetKey: n, disableSidebarScrollAnimate: !0 }),
    });
}
