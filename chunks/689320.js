function i(e, t, n) {
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
n.d(t, { t: () => s }), n(47120);
let r = Symbol.iterator;
class a {
    [r]() {
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
        i(this, 'index', void 0), i(this, 'items', void 0), (this.index = 0), (this.items = e);
    }
}
function s() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new a(t);
}
