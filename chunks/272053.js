"use strict";
n.d(t, { A: () => l });
var r = n(775602),
    i = n(963935),
    s = n(894858),
    a = n(397274);
class o {
    accessibleDirectory = null;
    navigateWithValidation = null;
    onViewChange = null;
    accordionExpandResolvers = new Map();
    init(e) {
        let { accessibleDirectory: t, navigateWithValidation: n, onViewChange: r } = e;
        (this.accessibleDirectory = t), (this.navigateWithValidation = n), (this.onViewChange = r);
    }
    async maybeWaitForAccordionExpansion(e) {
        null != e &&
            (await new Promise((t) => {
                s.A.getField("requestAccordionOpenKey") !== e ? t() : this.accordionExpandResolvers.set(e, t);
            }));
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
            d = n.parentPanelKey === u,
            _ = null == n.parentTabKey || n.parentTabKey === c,
            f = d && _,
            p = async () => {
                t.onTransitionStart?.(),
                    n.node.type === i.Z6.PANEL && a.A.enableSidebarCategoryAutoSelect(),
                    s.A.setState({
                        currentPanelKey: o,
                        currentTabKeys: null != n.parentTabKey ? new Map(l).set(o, n.parentTabKey) : l,
                        currentCategoryKey: n.parentCategoryKey,
                        requestAccordionOpenKey: n.parentAccordionKey,
                        showNavigationMobile:
                            null != t.showNavigationMobile
                                ? t.showNavigationMobile
                                : s.A.getField("showNavigationMobile"),
                    });
                let u = null != t.animatePanelScroll ? t.animatePanelScroll : f,
                    c = null != t.animateSidebarScroll && t.animateSidebarScroll;
                if (
                    (await this.scrollToTarget({
                        targetKey: e,
                        targetPanelKey: o,
                        targetAccordionKey: n.parentAccordionKey,
                        scrollBlock: t.panelScrollBlock ?? "start",
                        animatePanelScroll: u,
                        animateSidebarScroll: c,
                    }),
                    !f)
                ) {
                    let e = this.accessibleDirectory?.get(o),
                        t = e?.type === i.Z6.PANEL && (0, i.zY)(e.layout) ? e.layout[0].key : void 0,
                        r = n.parentTabKey ?? t ?? o;
                    this.onViewChange?.(r);
                }
                (!u || r.A.useReducedMotion) && n.node.type !== i.Z6.CATEGORY && s.A.setState({ requestFlashKey: e });
            };
        d ? p() : this.navigateWithValidation?.(e, p);
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
            this.accordionExpandResolvers.clear();
    }
}
let l = new o();
