"use strict";
n.d(t, { A: () => l }), n(321073);
var i = n(775602),
    r = n(963935),
    s = n(894858),
    a = n(397274);
class o {
    accessibleDirectory = null;
    navigateWithValidation = null;
    closeWithValidation = null;
    onViewChange = null;
    accordionExpandResolvers = new Map();
    init(e) {
        let { accessibleDirectory: t, navigateWithValidation: n, closeWithValidation: i, onViewChange: r } = e;
        (this.accessibleDirectory = t),
            (this.navigateWithValidation = n),
            (this.closeWithValidation = i),
            (this.onViewChange = r);
    }
    async maybeWaitForAccordionExpansion(e) {
        null != e &&
            (await new Promise((t) => {
                s.A.getField("requestAccordionOpenKey") !== e ? t() : this.accordionExpandResolvers.set(e, t);
            }));
    }
    maybeCreatePanelSnapshot(e) {
        let { currentPanelKey: t, nextPanelKey: n } = e,
            i = s.A.getField("scrollPositionSnapshots");
        if (null == t || t === n) return;
        let o = this.accessibleDirectory?.getPanelOrThrow(t);
        if (null == o || (0, r.Px)(o)) return;
        let l = a.A.getPanelScrollerNode();
        if (null == l) return;
        let _ = s.A.getField("currentCategoryKey"),
            d = new Map(i);
        d.set(t, { categoryKey: _, scrollOffset: l.scrollTop }), s.A.setState({ scrollPositionSnapshots: d });
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
        let i = this.accessibleDirectory?.getPanelOrThrow(n);
        if (null == i) return;
        if ((0, r.Px)(i)) {
            let e = i.parent;
            for (; null != e; ) {
                if (e.type === r.Z6.CATEGORY && (0, r.bJ)(e)) return e.key;
                e = e.parent;
            }
            return;
        }
        let s = i.layout;
        if (!(0, r.Iu)(s)) return;
        let a = [],
            o = new Set();
        s.forEach((e) => {
            (0, r.bJ)(e) && (a.push(e), o.add(e.key));
        });
        let l = t.parentCategoryKey;
        if (null == l) return a[0]?.key;
        if (o.has(l)) return l;
        let _ = a[0]?.key;
        for (let e of s) {
            if (e.key === l) break;
            o.has(e.key) && (_ = e.key);
        }
        return _;
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
            _ = s.A.getField("currentPanelKey"),
            d = l.get(o),
            u = s.A.getField("scrollPositionSnapshots"),
            c = n.node.type === r.Z6.PANEL ? u.get(o) : void 0,
            E = c?.categoryKey ?? this.getNextCategoryKey({ targetEntry: n }),
            h = null != _ ? this.accessibleDirectory.entry(_) : void 0,
            m = h?.parentSidebarItemKey === n.parentSidebarItemKey,
            f = n.parentPanelKey === _,
            g = null == n.parentTabKey || n.parentTabKey === d,
            I = f && g,
            A = async () => {
                t.onTransitionStart?.(),
                    m
                        ? this.maybeCreatePanelSnapshot({ currentPanelKey: _, nextPanelKey: o })
                        : this.deleteAllPanelSnapshots(),
                    n.node.type === r.Z6.PANEL && a.A.enableSidebarCategoryAutoSelect(),
                    s.A.setState({
                        currentPanelKey: o,
                        currentTabKeys: null != n.parentTabKey ? new Map(l).set(o, n.parentTabKey) : l,
                        currentCategoryKey: E,
                        requestAccordionOpenKey: n.parentAccordionKey,
                        showNavigationMobile:
                            null != t.showNavigationMobile
                                ? t.showNavigationMobile
                                : s.A.getField("showNavigationMobile"),
                    });
                let d = null != t.animatePanelScroll ? t.animatePanelScroll : I,
                    u = null != t.animateSidebarScroll && t.animateSidebarScroll;
                null != c
                    ? (await this.scrollToOffset({ scrollOffset: c.scrollOffset }), this.deletePanelSnapshot(o))
                    : await this.scrollToTarget({
                          targetKey: e,
                          targetPanelKey: o,
                          targetAccordionKey: n.parentAccordionKey,
                          scrollBlock: t.panelScrollBlock ?? "start",
                          animatePanelScroll: d,
                          animateSidebarScroll: u,
                      });
                let h = document.querySelector(`[data-nav-anchor-key="${e}"]`);
                if ((h?.focus({ preventScroll: !0 }), !I)) {
                    let e = this.accessibleDirectory?.get(o),
                        t = e?.type === r.Z6.PANEL && (0, r.zY)(e.layout) ? e.layout[0].key : void 0,
                        i = n.parentTabKey ?? t ?? o;
                    this.onViewChange?.(i);
                }
                (!d || i.A.useReducedMotion) && n.node.type !== r.Z6.CATEGORY && s.A.setState({ requestFlashKey: e });
            };
        f ? A() : this.navigateWithValidation?.(e, A);
    }
    async scrollToOffset(e) {
        let { scrollOffset: t } = e;
        await new Promise((e) => requestAnimationFrame(() => e())), await a.A.scrollPanelNodeTo(t);
    }
    async scrollToTarget(e) {
        let {
            targetKey: t,
            targetPanelKey: n,
            targetAccordionKey: i,
            scrollBlock: r,
            animatePanelScroll: s,
            animateSidebarScroll: o,
        } = e;
        await this.maybeWaitForAccordionExpansion(i);
        let l = document.querySelector(`[data-settings-sidebar-item="${n}"]`),
            _ = document.querySelector(`[data-nav-anchor-key="${t}"]`);
        (null != l || null != _) &&
            (await Promise.all([
                null != _ ? a.A.scrollPanelNodeIntoView(_, { animate: s, block: r }) : Promise.resolve(),
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
