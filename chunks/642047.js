r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
var a = r(251625);
function o(e, n, r) {
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
class s {
    keys() {
        return this.cachedKeys(this.version);
    }
    values() {
        return this.cachedValues(this.version);
    }
    entries() {
        return this.cachedEntries(this.version);
    }
    size() {
        return this.data.size;
    }
    get(e) {
        return this.data.get(e);
    }
    set(e, n) {
        this.data.get(e) !== n && (this.data.set(e, n), this.version++);
    }
    delete(e) {
        let n = this.data.delete(e);
        return n && this.version++, n;
    }
    clear() {
        0 !== this.data.size && (this.data.clear(), this.version++);
    }
    constructor() {
        o(this, 'version', 0), o(this, 'data', new Map()), o(this, 'cachedValues', void 0), o(this, 'cachedKeys', void 0), o(this, 'cachedEntries', void 0), (this.cachedValues = (0, a.oH)((e) => Array.from(this.data.values()))), (this.cachedKeys = (0, a.oH)((e) => Array.from(this.data.keys()))), (this.cachedEntries = (0, a.oH)((e) => Array.from(this.data.entries())));
    }
}
