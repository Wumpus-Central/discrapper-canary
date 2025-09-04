n.d(t, { Z: () => l });
var r,
    a = n(442837),
    s = n(570140);
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
let o = !1;
class c extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (o = e);
    }
    getState() {
        return o;
    }
}
i(c, "displayName", "PortkeyToSStore"), i(c, "persistKey", "PortkeyToSStore");
let l = new c(s.Z, {
    PORTKEY_ACCEPT_TOS: function (e) {
        let { acceptedToS: t } = e;
        o = t;
    },
});
