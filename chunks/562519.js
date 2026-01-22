n.d(t, {
    A: () => a,
}),
    n(896048);
var r = n(362474);

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class a {
    _load() {
        let e = r.u.get(this._key);
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
        r.u.set(this._key, e);
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
    constructor(e) {
        i(this, "_key", void 0),
            i(this, "_set", void 0),
            (this._key = "$persisted-set-".concat(e)),
            (this._set = new Set()),
            this._load();
    }
}
