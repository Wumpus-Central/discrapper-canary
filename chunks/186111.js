"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let s = [];
function a() {
    s = [];
}
class o extends r.Ay.Store {
    static displayName = "LayerStore";
    hasLayers() {
        return s.length > 0;
    }
    getLayers() {
        return s;
    }
}
let l = new o(i.h, {
    LAYER_PUSH: function (e) {
        let { component: t } = e;
        if (s.indexOf(t) >= 0) return !1;
        s = [...s, t];
    },
    LAYER_POP: function () {
        if (0 === s.length) return !1;
        s = s.slice(0, -1);
    },
    LAYER_POP_ALL: a,
    LOGOUT: a,
    NOTIFICATION_CLICK: a,
});
