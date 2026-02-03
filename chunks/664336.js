n.d(t, {
    A: () => l,
});
var r = n(92674);
class l {
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
        })(this, 0, new r.SpringValue(0));
    }
}
