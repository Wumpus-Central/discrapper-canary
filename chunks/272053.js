"use strict";
n.d(t, { A: () => l }), n(321073);
var r = n(775602),
    i = n(963935),
    s = n(894858),
    a = n(397274);
class o {
    accessibleDirectory = null;
    navigateWithValidation = null;
    closeWithValidation = null;
    onViewChange = null;
    accordionExpandResolvers = new Map();
    init(e) {
        let { accessibleDirectory: t, navigateWithValidation: n, closeWithValidation: r, onViewChange: i } = e;
        (this.accessibleDirectory = t),
            (this.navigateWithValidation = n),
            (this.closeWithValidation = r),
            (this.onViewChange = i);
    }
    async maybeWaitForAccordionExpansion(e) {
        null != e &&
            (await new Promise((t) => {
                s.A.getField("requestAccordionOpenKey") !== e ? t() : this.accordionExpandResolvers.set(e, t);
            }));
    }
    maybeCreatePanelSnapshot(e) {
        let { currentPanelKey: t, nextPanelKey: n } = e,
            r = s.A.getField("scrollPositionSnapshots");
        if (null == t || t === n) return;
        let o = this.accessibleDirectory?.getPanelOrThrow(t);
        if (null == o || (0, i.GH)(o)) return;
        let l = a.A.getPanelScrollerNode();
        if (null == l) return;
        let u = s.A.getField("currentCategoryKey"),
            c = new Map(r);
        c.set(t, { categoryKey: u, scrollOffset: l.scrollTop }), s.A.setState({ scrollPositionSnapshots: c });
    }
    deletePanelSnapshot(e) {
        let t = new Map(s.A.getField("scrollPositionSnapshots"));
        t.delete(e), s.A.setState({ scrollPositionSnapshots: t });
    }
    deleteAllPanelSnapshots() {
        s.A.setState({ scrollPositionSnapshots: new Map() });
    }
    getNextCategoryKey(e) {
        let { targetEntry: t } = e,
            n = t.parentPanelKey;
        if (null == n) return;
        let r = this.accessibleDirectory?.getPanelOrThrow(n);
        if (null == r || (0, i.GH)(r)) return;
        let s = r.layout;
        if (!(0, i.Iu)(s)) return;
        let a = [],
            o = new Set();
        s.forEach((e) => {
            (0, i.bJ)(e) && (a.push(e), o.add(e.key));
        });
        let l = t.parentCategoryKey;
        if (null == l) return a[0]?.key;
        if (o.has(l)) return l;
        let u = a[0]?.key;
        for (let e of s) {
            if (e.key === l) break;
            o.has(e.key) && (u = e.key);
        }
        return u;
    }
    notifyAccordionExpanded(e) {
        if (e !== s.A.getField("requestAccordionOpenKey")) return;
        s.A.setState({ requestAccordionOpenKey: void 0 });
        let t = this.accordionExpandResolvers.get(e);
        null != t && (this.accordionExpandResolvers.delete(e), t());
    }
    navigate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == this.accessibleDirectory) return;
        let n = this.accessibleDirectory.entry(e);
        if (null == n) return;
        let o = n.parentPanelKey;
        if (null == o) return;
        let l = s.A.getField("currentTabKeys"),
            u = s.A.getField("currentPanelKey"),
            c = l.get(o),
            d = s.A.getField("scrollPositionSnapshots"),
            _ = n.node.type === i.Z6.PANEL ? d.get(o) : void 0,
            f = _?.categoryKey ?? this.getNextCategoryKey({ targetEntry: n }),
            p = null != u ? this.accessibleDirectory.entry(u) : void 0,
            h = p?.parentSidebarItemKey === n.parentSidebarItemKey,
            m = n.parentPanelKey === u,
            E = null == n.parentTabKey || n.parentTabKey === c,
            g = m && E,
            A = async () => {
                t.onTransitionStart?.(),
                    h
                        ? this.maybeCreatePanelSnapshot({ currentPanelKey: u, nextPanelKey: o })
                        : this.deleteAllPanelSnapshots(),
                    n.node.type === i.Z6.PANEL && a.A.enableSidebarCategoryAutoSelect(),
                    s.A.setState({
                        currentPanelKey: o,
                        currentTabKeys: null != n.parentTabKey ? new Map(l).set(o, n.parentTabKey) : l,
                        currentCategoryKey: f,
                        requestAccordionOpenKey: n.parentAccordionKey,
                        showNavigationMobile:
                            null != t.showNavigationMobile
                                ? t.showNavigationMobile
                                : s.A.getField("showNavigationMobile"),
                    });
                let c = null != t.animatePanelScroll ? t.animatePanelScroll : g,
                    d = null != t.animateSidebarScroll && t.animateSidebarScroll;
                if (
                    (null != _
                        ? (await this.scrollToOffset({ scrollOffset: _.scrollOffset }), this.deletePanelSnapshot(o))
                        : await this.scrollToTarget({
                              targetKey: e,
                              targetPanelKey: o,
                              targetAccordionKey: n.parentAccordionKey,
                              scrollBlock: t.panelScrollBlock ?? "start",
                              animatePanelScroll: c,
                              animateSidebarScroll: d,
                          }),
                    !g)
                ) {
                    let e = this.accessibleDirectory?.get(o),
                        t = e?.type === i.Z6.PANEL && (0, i.zY)(e.layout) ? e.layout[0].key : void 0,
                        r = n.parentTabKey ?? t ?? o;
                    this.onViewChange?.(r);
                }
                (!c || r.A.useReducedMotion) && n.node.type !== i.Z6.CATEGORY && s.A.setState({ requestFlashKey: e });
            };
        m ? A() : this.navigateWithValidation?.(e, A);
    }
    async scrollToOffset(e) {
        let { scrollOffset: t } = e;
        await new Promise((e) => requestAnimationFrame(() => e())), await a.A.scrollPanelNodeTo(t);
    }
    async scrollToTarget(e) {
        let {
            targetKey: t,
            targetPanelKey: n,
            targetAccordionKey: r,
            scrollBlock: i,
            animatePanelScroll: s,
            animateSidebarScroll: o,
        } = e;
        await this.maybeWaitForAccordionExpansion(r);
        let l = document.querySelector(`[data-settings-sidebar-item="${n}"]`),
            u = document.querySelector(`[data-nav-anchor-key="${t}"]`);
        (null != l || null != u) &&
            (await Promise.all([
                null != u ? a.A.scrollPanelNodeIntoView(u, { animate: s, block: i }) : Promise.resolve(),
                null != l ? a.A.scrollSidebarNodeIntoView(l, { animate: o, block: "nearest" }) : Promise.resolve(),
            ]));
    }
    reset() {
        (this.accessibleDirectory = null),
            (this.navigateWithValidation = null),
            (this.onViewChange = null),
            this.accordionExpandResolvers.clear(),
            (this.closeWithValidation = null);
    }
}
let l = new o();
