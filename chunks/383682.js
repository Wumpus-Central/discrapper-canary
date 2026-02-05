"use strict";
n.d(t, { K: () => r });
class r {
    items;
    limit;
    get length() {
        return this.items.size;
    }
    get capacity() {
        return this.limit;
    }
    constructor(e) {
        (this.items = new Map()), (this.limit = e);
    }
    [Symbol.iterator]() {
        return this.items.entries();
    }
    entries() {
        return this.items.entries();
    }
    keys() {
        return this.items.keys();
    }
    values() {
        return this.items.values();
    }
    ordered() {
        return [...this.items.values()].reverse();
    }
    clear() {
        this.items.clear();
    }
    has(e) {
        return this.items.has(e);
    }
    get(e) {
        return this.items.get(e);
    }
    put(e, t) {
        if ((this.items.delete(e), this.items.set(e, t), this.items.size > this.limit)) {
            let e = this.oldestKey(),
                t = this.items.get(e);
            return this.items.delete(e), [e, t];
        }
    }
    delete(e) {
        return this.items.delete(e);
    }
    oldestKey() {
        return this.items.keys().next().value;
    }
}
