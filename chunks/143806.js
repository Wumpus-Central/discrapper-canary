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
n.d(t, { S: () => o }), n(266796), n(47120), n(978209);
let i = Symbol.iterator;
class o {
    get length() {
        return this.items.size;
    }
    get capacity() {
        return this.limit;
    }
    [i]() {
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
    constructor(e) {
        r(this, 'items', void 0), r(this, 'limit', void 0), (this.items = new Map()), (this.limit = e);
    }
}
