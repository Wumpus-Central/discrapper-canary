n.d(t, {
    A: () => r,
}),
    n(896048);
class l extends Map {
    set(e, t) {
        return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t);
    }
    constructor(e) {
        super(),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "maxSize", void 0),
            (this.maxSize = e);
    }
}
let r = l;
