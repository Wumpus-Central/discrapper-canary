n.d(t, { Z: () => a });
var r = n(790519);
class a {
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
    constructor() {
        !(function (e, t, n) {
            "top" in e
                ? Object.defineProperty(e, "top", {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = n);
        })(this, "top", new r.SpringValue(0));
    }
}
