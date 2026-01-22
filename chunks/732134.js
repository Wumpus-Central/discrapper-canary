function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    A: () => a,
}),
    n(896048);
class i extends Map {
    set(e, t) {
        return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t);
    }
    constructor(e) {
        super(), r(this, "maxSize", void 0), (this.maxSize = e);
    }
}
let a = i;
