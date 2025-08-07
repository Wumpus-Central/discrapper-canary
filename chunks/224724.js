a.d(t, { Z: () => s });
var n = a(442837),
    r = a(570140);
let l = null;
class i extends n.ZP.Store {
    getOverrideWidgets() {
        return l;
    }
}
let s = new i(r.Z, {
    WIDGET_OVERRIDE_SET: function (e) {
        let { widgets: t } = e;
        l = t;
    },
    WIDGET_OVERRIDE_CLEAR: function () {
        l = null;
    },
});
