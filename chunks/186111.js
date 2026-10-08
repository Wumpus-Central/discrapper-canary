n.d(t, { A: () => u });
var r = n(17928),
    s = n(73153);
let i = [];
function a() {
    i = [];
}
class c extends r.Ay.Store {
    static displayName = "LayerStore";
    hasLayers() {
        return i.length > 0;
    }
    getLayers() {
        return i;
    }
}
let u = new c(s.h, {
    LAYER_PUSH: function (e) {
        let { component: t } = e;
        if (i.indexOf(t) >= 0) return !1;
        i = [...i, t];
    },
    LAYER_POP: function () {
        if (0 === i.length) return !1;
        i = i.slice(0, -1);
    },
    LAYER_POP_ALL: a,
    LOGOUT: a,
    NOTIFICATION_CLICK: a,
});
