n.d(t, { A: () => s });
var i = n(775602);
let s = new (class {
    scrollListener = null;
    getPanelScrollerNode() {
        let e = document.querySelectorAll("[data-settings-panel-scroller]");
        return e.length > 0 ? e[0] : null;
    }
    clearInitialScrollListener() {
        if (null == this.scrollListener) return;
        let e = this.getPanelScrollerNode();
        null != e && (e.removeEventListener("scroll", this.scrollListener), (this.scrollListener = null));
    }
    setInitialScrollListener(e) {
        let t = this.getPanelScrollerNode();
        null != t &&
            (null != this.scrollListener && t.removeEventListener("scroll", this.scrollListener),
            (this.scrollListener = () => {
                (this.scrollListener = null), e();
            }),
            t.addEventListener("scroll", this.scrollListener, { once: !0 }));
    }
    scroll(e) {
        let { scrollerNode: t, target: n, scrollBehavior: i, scrollBlock: s } = e;
        return new Promise((e) => {
            let a = null,
                l = () => {
                    clearTimeout(a), e(!0);
                };
            requestAnimationFrame(() => {
                t.addEventListener("scroll", l, { once: !0 }),
                    n.scrollIntoView({ behavior: i, block: s }),
                    (a = setTimeout(() => {
                        t.removeEventListener("scroll", l), e(!1);
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
    async scrollIntoView(e, t) {
        let n = this.getPanelScrollerNode();
        if (null == n) return;
        this.updateScrollPaddingForStickyDecoration(n);
        let s = t.animate && !i.A.useReducedMotion,
            a = t.block ?? "start";
        (await this.scroll({ scrollerNode: n, target: e, scrollBehavior: s ? "smooth" : "auto", scrollBlock: a }))
            ? await new Promise((e) => {
                  n.addEventListener(
                      "scrollend",
                      () => {
                          (n.style.scrollPaddingTop = ""), e();
                      },
                      { once: !0 },
                  );
              })
            : (n.style.scrollPaddingTop = "");
    }
})();
