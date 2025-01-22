n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(642128);
class a {
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
    constructor() {
        var e, t, n;
        (e = this),
            (t = 'top'),
            (n = new i.SpringValue(0)),
            'top' in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
}
