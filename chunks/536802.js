"use strict";
n.d(t, { A: () => l }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(311907),
    s = n(506774),
    o = n(73153);
class l extends a.Ay.Store {
    static allStores = [];
    static clearAll() {
        l.allStores.forEach((e) => e.clear());
    }
    constructor(e, t) {
        super(o.h, { ...e, CLEAR_CACHES: () => (this.clear(), !1), WRITE_CACHES: () => (this.save(), !1) }, t),
            i()(null != this.getClass().displayName, "Snapshot stores need a display name"),
            i()(!("CLEAR_CACHES" in e), "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action"),
            i()(!("WRITE_CACHES" in e), "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action"),
            l.allStores.push(this);
    }
    get persistKey() {
        return `${this.getClass().displayName}-snapshot`;
    }
    clear() {
        s.w.remove(this.persistKey);
    }
    save() {
        s.w.set(this.persistKey, this.takeSnapshot());
    }
    readSnapshot(e) {
        let t = s.w.get(this.persistKey);
        return null == t || t.version !== e ? null : t.data;
    }
    getClass() {
        return this.constructor;
    }
}
