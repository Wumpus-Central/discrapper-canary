n.d(t, { Z: () => c }), n(653041);
var i,
    r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    l = n(570140);
function u(e, t, n) {
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
class c extends (i = s.ZP.Store) {
    static clearAll() {
        c.allStores.forEach((e) => e.clear());
    }
    get persistKey() {
        return ''.concat(this.getClass().displayName, '-snapshot');
    }
    clear() {
        o.K.remove(this.persistKey);
    }
    save() {
        o.K.set(this.persistKey, this.takeSnapshot());
    }
    readSnapshot(e) {
        let t = o.K.get(this.persistKey);
        return null == t || t.version !== e ? null : t.data;
    }
    getClass() {
        return this.constructor;
    }
    constructor(e, t) {
        super(
            l.Z,
            {
                ...e,
                CLEAR_CACHES: () => (this.clear(), !1),
                WRITE_CACHES: () => (this.save(), !1)
            },
            t
        ),
            a()(null != this.getClass().displayName, 'Snapshot stores need a display name'),
            a()(!('CLEAR_CACHES' in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"),
            a()(!('WRITE_CACHES' in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"),
            c.allStores.push(this);
    }
}
u(c, 'allStores', []);
