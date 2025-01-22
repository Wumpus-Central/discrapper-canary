var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
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
function l() {
    return {
        usageByApplicationId: {},
        shelfOrder: []
    };
}
let u = l();
function c() {
    u = l();
}
class d extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        u = {
            ...l(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return u;
    }
}
s(d, 'displayName', 'ActivityShelfStore'), s(d, 'persistKey', 'ActivityShelfStore'), (n.Z = new d(o.Z, { LOGOUT: c }));
