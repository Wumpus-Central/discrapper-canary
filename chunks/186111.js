n.d(t, { A: () => f }), n(896048);
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
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
let o = [];
function l(e) {
    let { component: t } = e;
    if (o.indexOf(t) >= 0) return !1;
    o = [...o, t];
}
function c() {
    if (0 === o.length) return !1;
    o = o.slice(0, -1);
}
function u() {
    o = [];
}
class d extends (r = i.Ay.Store) {
    hasLayers() {
        return o.length > 0;
    }
    getLayers() {
        return o;
    }
}
s(d, "displayName", "LayerStore");
let f = new d(a.h, {
    LAYER_PUSH: l,
    LAYER_POP: c,
    LAYER_POP_ALL: u,
    LOGOUT: u,
    NOTIFICATION_CLICK: u,
});
