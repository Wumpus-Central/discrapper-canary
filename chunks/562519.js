n.d(t, { A: () => s });
var i = n(362474);
class s {
    _key;
    _set;
    constructor(e) {
        (this._key = `$persisted-set-${e}`), (this._set = new Set()), this._load();
    }
    _load() {
        let e = i.u.get(this._key);
        null != e && (this._set = new Set(e));
    }
    values() {
        return this._set;
    }
    size() {
        return this._set.size;
    }
    clear() {
        this._set.clear(),
            requestIdleCallback(() => {
                this._persist();
            });
    }
    _persist() {
        let e = Array.from(this._set.values());
        i.u.set(this._key, e);
    }
    add(e) {
        this._set.add(e),
            requestIdleCallback(() => {
                this._persist();
            });
    }
    has(e) {
        return this._set.has(e);
    }
}
