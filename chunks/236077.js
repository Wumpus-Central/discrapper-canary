n.d(t, { A: () => a });
var i = n(284009),
    s = n.n(i),
    l = n(963935);
class a {
    map = new Map();
    defaultPanel;
    register(e) {
        let {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: i,
            parentTabKey: s,
            parentCategoryKey: l,
            parentAccordionKey: a,
        } = e;
        this.map.set(t.key, {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: i,
            parentTabKey: s,
            parentCategoryKey: l,
            parentAccordionKey: a,
        });
    }
    entry(e) {
        return this.map.get(e);
    }
    get(e) {
        return this.entry(e)?.node;
    }
    setDefaultPanel(e) {
        this.defaultPanel = e;
    }
    getDefaultPanel() {
        return this.defaultPanel;
    }
    getPanelOrThrow(e) {
        let t = this.get(e);
        return s()(t?.type === l.Z6.PANEL, `[SettingsDirectory] key is not for a panel: ${e}`), t;
    }
}
