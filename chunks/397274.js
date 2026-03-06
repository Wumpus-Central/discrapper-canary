"use strict";
n.d(t, { A: () => s });
var r = n(775602);
class i {
    isSidebarCategoryAutoSelectEnabled = !0;
    scrollListener = null;
    getPanelScrollerNode() {
        return document.querySelector("[data-settings-panel-scroller]");
    }
    getSidebarScrollerNode() {
        return document.querySelector("[data-settings-sidebar-scroller]");
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
    scroll(e) {
        let { scrollerNode: t, target: n, scrollBehavior: r, scrollBlock: i } = e;
        return new Promise((e) => {
            let s = null,
                a = () => {
                    clearTimeout(s), e(!0);
                };
            requestAnimationFrame(() => {
                t.addEventListener("scroll", a, { once: !0 }),
                    n.scrollIntoView({ behavior: r, block: i }),
                    (s = setTimeout(() => {
                        t.removeEventListener("scroll", a), e(!1);
                    }, 50));
            });
        });
    }
    updateScrollPaddingForStickyDecoration(e) {
        let t = e.querySelector("[data-settings-panel-sticky-decoration]");
        if (null == t) return;
        let n = Math.max(0, t.getBoundingClientRect().bottom - e.getBoundingClientRect().top);
        e.style.scrollPaddingTop = `${n}px`;
    }
    async scrollNodeIntoView(e) {
        let { scrollerNode: t, target: n, options: i } = e;
        if (null == t || null == n) return;
        this.updateScrollPaddingForStickyDecoration(t);
        let s = i.animate && !r.A.useReducedMotion ? "smooth" : "auto",
            a = i.block ?? "start";
        (await this.scroll({ scrollerNode: t, target: n, scrollBehavior: s, scrollBlock: a }))
            ? await new Promise((e) => {
                  t.addEventListener(
                      "scrollend",
                      () => {
                          (t.style.scrollPaddingTop = ""), e();
                      },
                      { once: !0 },
                  );
              })
            : (t.style.scrollPaddingTop = "");
    }
    async scrollPanelNodeIntoView(e, t) {
        this.clearPanelInitialScrollListener(),
            (this.isSidebarCategoryAutoSelectEnabled = !1),
            await this.scrollNodeIntoView({ scrollerNode: this.getPanelScrollerNode(), target: e, options: t }),
            this.setPanelInitialScrollListener(() => {
                this.isSidebarCategoryAutoSelectEnabled = !0;
            });
    }
    async scrollSidebarNodeIntoView(e, t) {
        await this.scrollNodeIntoView({ scrollerNode: this.getSidebarScrollerNode(), target: e, options: t });
    }
    enableSidebarCategoryAutoSelect() {
        this.isSidebarCategoryAutoSelectEnabled = !0;
    }
    reset() {
        (this.isSidebarCategoryAutoSelectEnabled = !0), (this.scrollListener = null);
    }
}
let s = new i();
