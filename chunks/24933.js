n.d(t, { Z: () => f });
var r,
    i = n(442837),
    o = n(570140);
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l() {
    return {
        usageByApplicationId: {},
        shelfOrder: []
    };
}
let c = l();
function u() {
    c = l();
}
class d extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        c = s({}, l(), null != e ? e : {});
    }
    getState() {
        return c;
    }
}
a(d, 'displayName', 'ActivityShelfStore'), a(d, 'persistKey', 'ActivityShelfStore');
let f = new d(o.Z, { LOGOUT: u });
