n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = [];
function s() {
    a = [];
}
class l extends i.Ay.Store {
    static displayName = "LayerStore";
    hasLayers() {
        return a.length > 0;
    }
    getLayers() {
        return a;
    }
}
let o = new l(r.h, {
    LAYER_PUSH: function (e) {
        let { component: t } = e;
        if (a.indexOf(t) >= 0) return !1;
        a = [...a, t];
    },
    LAYER_POP: function () {
        if (0 === a.length) return !1;
        a = a.slice(0, -1);
    },
    LAYER_POP_ALL: s,
    LOGOUT: s,
    NOTIFICATION_CLICK: s,
});
