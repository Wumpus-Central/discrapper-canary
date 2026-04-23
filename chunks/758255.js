"use strict";
n.d(t, { c: () => i });
class r {
    index;
    items;
    [Symbol.iterator]() {
        return this;
    }
    constructor(e) {
        (this.index = 0), (this.items = e);
    }
    next() {
        for (; this.index < this.items.length; ) {
            let e = this.items[this.index].next();
            if (!e.done) return e;
            this.index += 1;
        }
        return { done: !0, value: void 0 };
    }
}
function i() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new r(t);
}
