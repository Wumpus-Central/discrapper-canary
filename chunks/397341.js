t.d(n, {
    Z: function () {
        return i;
    }
});
var a = t(666912);
class i {
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
    constructor() {
        var e, n, t;
        (e = this),
            (n = 'top'),
            (t = new a.SpringValue(0)),
            'top' in e
                ? Object.defineProperty(e, n, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[n] = t);
    }
}
