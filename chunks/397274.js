n.d(t, {
    A: () => i,
});
var r = n(775602);
let i = new (class {
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
            t.addEventListener("scroll", this.scrollListener, {
                once: !0,
            }));
    }
    scroll(e) {
        let { scrollerNode: t, target: n, scrollBehavior: r, scrollBlock: i } = e;
        return new Promise((e) => {
            let l = null,
                s = () => {
                    clearTimeout(l), e(!0);
                };
            requestAnimationFrame(() => {
                t.addEventListener("scroll", s, {
                    once: !0,
                }),
                    n.scrollIntoView({
                        behavior: r,
                        block: i,
                    }),
                    (l = setTimeout(() => {
                        t.removeEventListener("scroll", s), e(!1);
                    }, 50));
            });
        });
    }
    async scrollIntoView(e, t) {
        var n;
        let i = this.getPanelScrollerNode();
        if (null == i) return;
        let l = t.animate && !r.A.useReducedMotion,
            s = null != (n = t.block) ? n : "start";
        (await this.scroll({
            scrollerNode: i,
            target: e,
            scrollBehavior: l ? "smooth" : "auto",
            scrollBlock: s,
        })) &&
            (await new Promise((e) => {
                i.addEventListener("scrollend", () => e(), {
                    once: !0,
                });
            }));
    }
    constructor() {
        !(function (e, t, n) {
            t in e
                ? Object.defineProperty(e, t, {
                      value: null,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = null);
        })(this, "scrollListener", 0);
    }
})();
