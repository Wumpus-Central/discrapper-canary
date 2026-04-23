"use strict";
n.d(t, { o: () => s });
var r = n(758255),
    i = n(383682);
class s {
    primary;
    extended;
    constructor(e, t) {
        (this.primary = new i.K(e)), (this.extended = new i.K(t));
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
        return r.c(this.extended.entries(), this.primary.entries());
    }
    allKeys() {
        return r.c(this.extended.keys(), this.primary.keys());
    }
    allValues() {
        return r.c(this.extended.values(), this.primary.values());
    }
}
