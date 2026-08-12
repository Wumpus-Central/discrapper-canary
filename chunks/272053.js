"use strict";
n.d(t, { A: () => o }), n(321073);
var i = n(775602),
    r = n(963935),
    a = n(894858),
    s = n(397274);
class l {
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
                a.A.getField("requestAccordionOpenKey") !== e ? t() : this.accordionExpandResolvers.set(e, t);
            }));
    }
    maybeCreatePanelSnapshot(e) {
        let { currentPanelKey: t, nextPanelKey: n } = e,
            i = a.A.getField("scrollPositionSnapshots");
        if (null == t || t === n) return;
        let l = this.accessibleDirectory?.getPanelOrThrow(t);
        if (null == l || (0, r.Px)(l)) return;
        let o = s.A.getPanelScrollerNode();
        if (null == o) return;
        let d = a.A.getField("currentCategoryKey"),
            c = new Map(i);
        c.set(t, { categoryKey: d, scrollOffset: o.scrollTop }), a.A.setState({ scrollPositionSnapshots: c });
    }
    deletePanelSnapshot(e) {
        let t = new Map(a.A.getField("scrollPositionSnapshots"));
        t.delete(e), a.A.setState({ scrollPositionSnapshots: t });
    }
    deleteAllPanelSnapshots() {
        a.A.setState({ scrollPositionSnapshots: new Map() });
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
        let a = i.layout;
        if (!(0, r.zS)(a)) return;
        let s = [],
            l = new Set();
        a.forEach((e) => {
            (0, r.bJ)(e) && (s.push(e), l.add(e.key));
        });
        let o = t.parentCategoryKey;
        if (null == o) return s[0]?.key;
        if (l.has(o)) return o;
        let d = s[0]?.key;
        for (let e of a) {
            if (e.key === o) break;
            l.has(e.key) && (d = e.key);
        }
        return d;
    }
    notifyAccordionExpanded(e) {
        if (e !== a.A.getField("requestAccordionOpenKey")) return;
        a.A.setState({ requestAccordionOpenKey: void 0 });
        let t = this.accordionExpandResolvers.get(e);
        null != t && (this.accordionExpandResolvers.delete(e), t());
    }
    navigate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == this.accessibleDirectory) return;
        let n = this.accessibleDirectory.entry(e);
        if (null == n) return;
        let l = n.parentPanelKey;
        if (null == l) return;
        let o = a.A.getField("currentPanelKey"),
            d = a.A.getField("scrollPositionSnapshots"),
            c = n.node.type === r.Z6.PANEL ? d.get(l) : void 0,
            u = c?.categoryKey ?? this.getNextCategoryKey({ targetEntry: n }),
            _ = null != o ? this.accessibleDirectory.entry(o) : void 0,
            E = _?.parentSidebarItemKey === n.parentSidebarItemKey,
            A = n.parentPanelKey === o,
            h = async () => {
                t.onTransitionStart?.(),
                    E
                        ? this.maybeCreatePanelSnapshot({ currentPanelKey: o, nextPanelKey: l })
                        : this.deleteAllPanelSnapshots(),
                    n.node.type === r.Z6.PANEL && s.A.enableSidebarCategoryAutoSelect(),
                    a.A.setState({
                        currentPanelKey: l,
                        currentCategoryKey: u,
                        requestAccordionOpenKey: n.parentAccordionKey,
                        showNavigationMobile:
                            null != t.showNavigationMobile
                                ? t.showNavigationMobile
                                : a.A.getField("showNavigationMobile"),
                    });
                let d = null != t.animatePanelScroll ? t.animatePanelScroll : A,
                    _ = null != t.animateSidebarScroll && t.animateSidebarScroll;
                null != c
                    ? (await this.scrollToOffset({ scrollOffset: c.scrollOffset }), this.deletePanelSnapshot(l))
                    : await this.scrollToTarget({
                          targetKey: e,
                          targetPanelKey: l,
                          targetAccordionKey: n.parentAccordionKey,
                          scrollBlock: t.panelScrollBlock ?? "start",
                          animatePanelScroll: d,
                          animateSidebarScroll: _,
                      });
                let h = document.querySelector(`[data-nav-anchor-key="${e}"]`);
                null != h
                    ? h.focus({ preventScroll: !0 })
                    : document.querySelector("[data-nav-anchor-key]")?.focus({ preventScroll: !0 }),
                    A || this.onViewChange?.(l),
                    (!d || i.Ay.useReducedMotion) &&
                        n.node.type !== r.Z6.CATEGORY &&
                        a.A.setState({ requestFlashKey: e });
            };
        A ? h() : this.navigateWithValidation?.(e, h);
    }
    async scrollToOffset(e) {
        let { scrollOffset: t } = e;
        await new Promise((e) => requestAnimationFrame(() => e())), await s.A.scrollPanelNodeTo(t);
    }
    async scrollToTarget(e) {
        let {
            targetKey: t,
            targetPanelKey: n,
            targetAccordionKey: i,
            scrollBlock: r,
            animatePanelScroll: a,
            animateSidebarScroll: l,
        } = e;
        await this.maybeWaitForAccordionExpansion(i);
        let o = document.querySelector(`[data-settings-sidebar-item="${n}"]`),
            d = document.querySelector(`[data-nav-anchor-key="${t}"]`);
        (null != o || null != d) &&
            (await Promise.all([
                null != d ? s.A.scrollPanelNodeIntoView(d, { animate: a, block: r }) : Promise.resolve(),
                null != o ? s.A.scrollSidebarNodeIntoView(o, { animate: l, block: "nearest" }) : Promise.resolve(),
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
let o = new l();
