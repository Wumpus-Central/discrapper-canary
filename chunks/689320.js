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
n.d(t, { t: () => o }), n(953529), n(388685);
let i = Symbol.iterator;
class a {
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
function o() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new a(t);
}
