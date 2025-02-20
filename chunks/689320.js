function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { t: () => a }), n(266796), n(47120);
let i = Symbol.iterator;
class o {
    [i]() {
        return this;
    }
    next() {
        for (; this.index < this.items.length; ) {
            let e = this.items[this.index].next();
            if (!e.done) return e;
            this.index += 1;
        }
        return {
            done: !0,
            value: void 0
        };
    }
    constructor(e) {
        r(this, 'index', void 0), r(this, 'items', void 0), (this.index = 0), (this.items = e);
    }
}
function a() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new o(t);
}
