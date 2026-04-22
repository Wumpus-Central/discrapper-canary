"use strict";
n.d(t, { A: () => i });
var r = n(775602);
let i = new (class {
    isSidebarCategoryAutoSelectEnabled = !0;
    panelScrollerRef = null;
    sidebarScrollerRef = null;
    scrollListener = null;
    getPanelScrollerNode() {
        return this.panelScrollerRef?.getScrollerNode() ?? null;
    }
    getSidebarScrollerNode() {
        return this.sidebarScrollerRef?.getScrollerNode() ?? null;
    }
    setPanelScrollerRef(e) {
        this.panelScrollerRef = e;
    }
    setSidebarScrollerRef(e) {
        this.sidebarScrollerRef = e;
    }
    getIsSidebarCategoryAutoSelectEnabled() {
        return this.isSidebarCategoryAutoSelectEnabled;
    }
    clearPanelInitialScrollListener() {
        if (null == this.scrollListener) return;
        let e = this.getPanelScrollerNode();
        null != e && (e.removeEventListener("scroll", this.scrollListener), (this.scrollListener = null));
    }
    setPanelInitialScrollListener(e) {
        let t = this.getPanelScrollerNode();
        null != t &&
            (null != this.scrollListener && t.removeEventListener("scroll", this.scrollListener),
            (this.scrollListener = () => {
                (this.scrollListener = null), e();
            }),
            t.addEventListener("scroll", this.scrollListener, { once: !0 }));
    }
    scrollIntoView(e) {
        let { scrollerRef: t, target: n, options: i, padding: s } = e;
        return new Promise((e) => {
            t.scrollIntoViewNode({
                node: n,
                animate: !!i.animate && !r.A.useReducedMotion,
                shouldScrollToStart: "start" === i.block,
                padding: s,
                callback: () => {
                    requestAnimationFrame(() => e(!0));
                },
            });
        });
    }
    scrollTo(e) {
        let { scrollerRef: t, to: n } = e;
        return new Promise((e) => {
            t.scrollTo({
                to: n,
                animate: !1,
                callback: () => {
                    requestAnimationFrame(() => e(!0));
                },
            });
        });
    }
    async scrollPanelNodeTo(e) {
        null != this.panelScrollerRef &&
            (this.clearPanelInitialScrollListener(),
            (this.isSidebarCategoryAutoSelectEnabled = !1),
            await this.scrollTo({ scrollerRef: this.panelScrollerRef, to: e }),
            this.setPanelInitialScrollListener(() => {
                this.isSidebarCategoryAutoSelectEnabled = !0;
            }));
    }
    async scrollPanelNodeIntoView(e, t) {
        if (null == this.panelScrollerRef) return;
        let n = this.panelScrollerRef.getScrollerNode();
        if (null == n) return;
        this.clearPanelInitialScrollListener(), (this.isSidebarCategoryAutoSelectEnabled = !1);
        let r = n.querySelector("[data-settings-panel-sticky-decoration]"),
            i = Math.max(0, (r?.getBoundingClientRect().bottom ?? 0) - n.getBoundingClientRect().top);
        await this.scrollIntoView({ scrollerRef: this.panelScrollerRef, target: e, options: t, padding: 16 + i }),
            this.setPanelInitialScrollListener(() => {
                this.isSidebarCategoryAutoSelectEnabled = !0;
            });
    }
    async scrollSidebarNodeIntoView(e, t) {
        null != this.sidebarScrollerRef &&
            (await this.scrollIntoView({ scrollerRef: this.sidebarScrollerRef, target: e, options: t, padding: 12 }));
    }
    enableSidebarCategoryAutoSelect() {
        this.isSidebarCategoryAutoSelectEnabled = !0;
    }
    reset() {
        (this.isSidebarCategoryAutoSelectEnabled = !0),
            (this.scrollListener = null),
            (this.panelScrollerRef = null),
            (this.sidebarScrollerRef = null);
    }
})();
