"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153);
let a = [];
function s(e) {
    let { component: t } = e;
    if (a.indexOf(t) >= 0) return !1;
    a = [...a, t];
}
function o() {
    if (0 === a.length) return !1;
    a = a.slice(0, -1);
}
function l() {
    a = [];
}
class u extends r.Ay.Store {
    static displayName = "LayerStore";
    hasLayers() {
        return a.length > 0;
    }
    getLayers() {
        return a;
    }
}
let c = new u(i.h, { LAYER_PUSH: s, LAYER_POP: o, LAYER_POP_ALL: l, LOGOUT: l, NOTIFICATION_CLICK: l });
