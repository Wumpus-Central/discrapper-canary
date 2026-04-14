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
    getValidatedCategoryKey(e, t) {
        let n = e.layout;
        if (!(0, i.Iu)(n)) return;
        let r = [],
            s = new Set();
        if (
            (n.forEach((e) => {
                (0, i.bJ)(e) && (r.push(e), s.add(e.key));
            }),
            null == t)
        )
            return r[0]?.key;
        if (s.has(t)) return t;
        let a = r[0]?.key;
        for (let e of n) {
            if (e.key === t) break;
            s.has(e.key) && (a = e.key);
        }
        return a;
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
            d = this.accessibleDirectory.getPanelOrThrow(o),
            _ = this.getValidatedCategoryKey(d, n.parentCategoryKey),
            f = n.parentPanelKey === u,
            h = null == n.parentTabKey || n.parentTabKey === c,
            p = f && h,
            m = async () => {
                t.onTransitionStart?.(),
                    n.node.type === i.Z6.PANEL && a.A.enableSidebarCategoryAutoSelect(),
                    s.A.setState({
                        currentPanelKey: o,
                        currentTabKeys: null != n.parentTabKey ? new Map(l).set(o, n.parentTabKey) : l,
                        currentCategoryKey: _,
                        requestAccordionOpenKey: n.parentAccordionKey,
                        showNavigationMobile:
                            null != t.showNavigationMobile
                                ? t.showNavigationMobile
                                : s.A.getField("showNavigationMobile"),
                    });
                let u = null != t.animatePanelScroll ? t.animatePanelScroll : p,
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
                    !p)
                ) {
                    let e = this.accessibleDirectory?.get(o),
                        t = e?.type === i.Z6.PANEL && (0, i.zY)(e.layout) ? e.layout[0].key : void 0,
                        r = n.parentTabKey ?? t ?? o;
                    this.onViewChange?.(r);
                }
                (!u || r.A.useReducedMotion) && n.node.type !== i.Z6.CATEGORY && s.A.setState({ requestFlashKey: e });
            };
        f ? m() : this.navigateWithValidation?.(e, m);
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
