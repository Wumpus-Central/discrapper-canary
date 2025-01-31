n.d(t, { Z: () => i }), n(47120);
var r = n(298444);
function a(e, t, n) {
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
class i {
    _load() {
        let e = r.x.get(this._key);
        null != e && (this._set = new Set(e));
    }
    _persist() {
        let e = Array.from(this._set.values());
        r.x.set(this._key, e);
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
        a(this, '_key', void 0), a(this, '_set', void 0), (this._key = '$persisted-set-'.concat(e)), (this._set = new Set()), this._load();
    }
}
