n.d(t, { b: () => a }), n(47120);
var r = n(689320),
    i = n(143806);
function o(e, t, n) {
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
class a {
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
            for (let [e, t] of this.extended.entries()) if ((this.primary.put(e, t), this.extended.delete(e), !this.canUpstreamItems())) break;
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
        return r.t(this.extended.entries(), this.primary.entries());
    }
    allKeys() {
        return r.t(this.extended.keys(), this.primary.keys());
    }
    allValues() {
        return r.t(this.extended.values(), this.primary.values());
    }
    constructor(e, t) {
        o(this, 'primary', void 0), o(this, 'extended', void 0), (this.primary = new i.S(e)), (this.extended = new i.S(t));
    }
}
