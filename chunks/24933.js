n.d(t, { Z: () => d });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
function o() {
    return {
        usageByApplicationId: {},
        shelfOrder: []
    };
}
let l = o();
function u() {
    l = o();
}
class c extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        l = {
            ...o(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return l;
    }
}
s(c, 'displayName', 'ActivityShelfStore'), s(c, 'persistKey', 'ActivityShelfStore');
let d = new c(a.Z, { LOGOUT: u });
