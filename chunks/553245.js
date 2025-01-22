r.d(n, {
    b: function () {
        return l;
    }
});
var i = r(47120);
var a = r(689320),
    o = r(143806);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class l {
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
    put(e, n) {
        let r = this.primary.put(e, n);
        void 0 !== r && this.extended.put(r[0], r[1]);
    }
    delete(e) {
        let n = this.primary.delete(e),
            r = this.extended.delete(e);
        return this.upstreamItems(), n || r;
    }
    upstreamItems() {
        if (!!this.canUpstreamItems()) {
            for (let [e, n] of this.extended.entries()) if ((this.primary.put(e, n), this.extended.delete(e), !this.canUpstreamItems())) break;
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
        return a.t(this.extended.entries(), this.primary.entries());
    }
    allKeys() {
        return a.t(this.extended.keys(), this.primary.keys());
    }
    allValues() {
        return a.t(this.extended.values(), this.primary.values());
    }
    constructor(e, n) {
        s(this, 'primary', void 0), s(this, 'extended', void 0), (this.primary = new o.S(e)), (this.extended = new o.S(n));
    }
}
