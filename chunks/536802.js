"use strict";
n.d(t, { A: () => l }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(73153);
class l extends s.Ay.Store {
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
        a.w.remove(this.persistKey);
    }
    save() {
        a.w.set(this.persistKey, this.takeSnapshot());
    }
    readSnapshot(e) {
        let t = a.w.get(this.persistKey);
        return null == t || t.version !== e ? null : t.data;
    }
    getClass() {
        return this.constructor;
    }
}
