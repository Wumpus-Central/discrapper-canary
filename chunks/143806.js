r.d(n, {
    S: function () {
        return s;
    }
});
var i = r(47120);
function a(e, n, r) {
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
let o = Symbol.iterator;
class s {
    get length() {
        return this.items.size;
    }
    get capacity() {
        return this.limit;
    }
    [o]() {
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
    put(e, n) {
        if ((this.items.delete(e), this.items.set(e, n), !!(this.items.size > this.limit))) {
            let e = this.oldestKey(),
                n = this.items.get(e);
            return this.items.delete(e), [e, n];
        }
    }
    delete(e) {
        return this.items.delete(e);
    }
    oldestKey() {
        return this.items.keys().next().value;
    }
    constructor(e) {
        a(this, 'items', void 0), a(this, 'limit', void 0), (this.items = new Map()), (this.limit = e);
    }
}
