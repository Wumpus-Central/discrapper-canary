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
n.d(t, { A: () => a }), n(896048);
class i extends Array {
    push() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        for (let e of t) this.length >= this.maxSize && this.shift(), super.push(e);
        return this.length;
    }
    constructor(e) {
        super(), r(this, "maxSize", void 0), (this.maxSize = e);
    }
}
let a = i;
