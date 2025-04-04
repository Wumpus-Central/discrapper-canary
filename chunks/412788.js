n.d(t, { Z: () => _ }), n(653041);
var r,
    i = n(512722),
    o = n.n(i),
    a = n(442837),
    s = n(433517),
    l = n(570140);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class _ extends (r = a.ZP.Store) {
    static clearAll() {
        _.allStores.forEach((e) => e.clear());
    }
    get persistKey() {
        return ''.concat(this.getClass().displayName, '-snapshot');
    }
    clear() {
        s.K.remove(this.persistKey);
    }
    save() {
        s.K.set(this.persistKey, this.takeSnapshot());
    }
    readSnapshot(e) {
        let t = s.K.get(this.persistKey);
        return null == t || t.version !== e ? null : t.data;
    }
    getClass() {
        return this.constructor;
    }
    constructor(e, t) {
        super(
            l.Z,
            f(u({}, e), {
                CLEAR_CACHES: () => (this.clear(), !1),
                WRITE_CACHES: () => (this.save(), !1)
            }),
            t
        ),
            o()(null != this.getClass().displayName, 'Snapshot stores need a display name'),
            o()(!('CLEAR_CACHES' in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"),
            o()(!('WRITE_CACHES' in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"),
            _.allStores.push(this);
    }
}
c(_, 'allStores', []);
