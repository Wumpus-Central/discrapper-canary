n.d(t, {
    A: () => a,
});
var l = n(108531);
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
                : (e.top = n);
        })(this, 0, new l.SpringValue(0));
    }
}
