"use strict";
n.d(t, { o: () => a });
class i {
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
function r() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new i(t);
}
var s = n(383682);
class a {
    primary;
    extended;
    constructor(e, t) {
        (this.primary = new s.K(e)), (this.extended = new s.K(t));
    }
    get totalLength() {
        return this.primary.length + this.extended.length;
    }
    get primaryCapacity() {
        return this.primary.capacity;
    }
    get extendedCapacity() {
        return this.extended.capacity;
    }
    clear() {
        this.primary.clear(), this.extended.clear();
    }
    has(e) {
        return this.primary.has(e);
    }
    hasExtended(e) {
        return this.primary.has(e) || this.extended.has(e);
    }
    get(e) {
        return this.primary.get(e);
    }
    put(e, t) {
        let n = this.primary.put(e, t);
        void 0 !== n && this.extended.put(n[0], n[1]);
    }
    delete(e) {
        let t = this.primary.delete(e),
            n = this.extended.delete(e);
        return this.upstreamItems(), t || n;
    }
    upstreamItems() {
        if (this.canUpstreamItems()) {
            for (let [e, t] of this.extended.entries())
                if ((this.primary.put(e, t), this.extended.delete(e), !this.canUpstreamItems())) break;
        }
    }
    canUpstreamItems() {
        return this.primary.length < this.primary.capacity && this.extended.length > 0;
    }
    entries() {
        return this.primary.entries();
    }
    keys() {
        return this.primary.keys();
    }
    values() {
        return this.primary.values();
    }
    allEntries() {
        return r(this.extended.entries(), this.primary.entries());
    }
    allKeys() {
        return r(this.extended.keys(), this.primary.keys());
    }
    allValues() {
        return r(this.extended.values(), this.primary.values());
    }
}
