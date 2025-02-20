n.d(t, { Z: () => a });
var r = n(642128);
class a {
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
    constructor() {
        var e;
        (e = new r.SpringValue(0)),
            'top' in this
                ? Object.defineProperty(this, 'top', {
                      value: e,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this.top = e);
    }
}
