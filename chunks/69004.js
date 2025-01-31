n.d(t, { Z: () => i }), n(47120);
class l extends Map {
    set(e, t) {
        return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t);
    }
    constructor(e) {
        var t, n;
        super(),
            (n = void 0),
            (t = 'maxSize') in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n),
            (this.maxSize = e);
    }
}
let i = l;
