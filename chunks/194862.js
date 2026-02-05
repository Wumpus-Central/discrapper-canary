"use strict";
n.d(t, { A: () => i });
var r = n(583613);
class i {
    version = 0;
    data = new Map();
    cachedValues;
    cachedKeys;
    cachedEntries;
    constructor() {
        (this.cachedValues = (0, r.L_)((e) => Array.from(this.data.values()))),
            (this.cachedKeys = (0, r.L_)((e) => Array.from(this.data.keys()))),
            (this.cachedEntries = (0, r.L_)((e) => Array.from(this.data.entries())));
    }
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
    set(e, t) {
        this.data.get(e) !== t && (this.data.set(e, t), this.version++);
    }
    delete(e) {
        let t = this.data.delete(e);
        return t && this.version++, t;
    }
    clear() {
        0 !== this.data.size && (this.data.clear(), this.version++);
    }
}
