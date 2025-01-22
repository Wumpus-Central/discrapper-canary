r.d(n, {
    Z: function () {
        return f;
    }
});
var i,
    a = r(653041);
var o = r(512722),
    s = r.n(o),
    l = r(442837),
    u = r(433517),
    c = r(570140);
function d(e, n, r) {
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
class f extends (i = l.ZP.Store) {
    static clearAll() {
        f.allStores.forEach((e) => e.clear());
    }
    get persistKey() {
        return ''.concat(this.getClass().displayName, '-snapshot');
    }
    clear() {
        u.K.remove(this.persistKey);
    }
    save() {
        u.K.set(this.persistKey, this.takeSnapshot());
    }
    readSnapshot(e) {
        let n = u.K.get(this.persistKey);
        return null == n || n.version !== e ? null : n.data;
    }
    getClass() {
        return this.constructor;
    }
    constructor(e, n) {
        super(
            c.Z,
            {
                ...e,
                CLEAR_CACHES: () => (this.clear(), !1),
                WRITE_CACHES: () => (this.save(), !1)
            },
            n
        ),
            s()(null != this.getClass().displayName, 'Snapshot stores need a display name'),
            s()(!('CLEAR_CACHES' in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"),
            s()(!('WRITE_CACHES' in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"),
            f.allStores.push(this);
    }
}
d(f, 'allStores', []);
