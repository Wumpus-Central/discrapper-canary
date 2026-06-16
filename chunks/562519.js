t.d(e, { A: () => r });
var i = t(362474);
class r {
    _key;
    _set;
    constructor(s) {
        (this._key = `$persisted-set-${s}`), (this._set = new Set()), this._load();
    }
    _load() {
        let s = i.u.get(this._key);
        null != s && (this._set = new Set(s));
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
        let s = Array.from(this._set.values());
        i.u.set(this._key, s);
    }
    add(s) {
        this._set.add(s),
            requestIdleCallback(() => {
                this._persist();
            });
    }
    has(s) {
        return this._set.has(s);
    }
}
