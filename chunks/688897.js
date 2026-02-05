n.d(t, { x: () => s });
var i = n(199966);
function s(e) {
    let { accessibleDirectory: t } = (0, i._)(),
        n = t.entry(e);
    return {
        parentPanelNode: n?.parentPanelKey != null ? t.get(n.parentPanelKey) : void 0,
        parentSidebarItemNode: n?.parentSidebarItemKey != null ? t.get(n.parentSidebarItemKey) : void 0,
    };
}
