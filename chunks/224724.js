n.d(t, { Z: () => _ });
var r = n(442837),
    i = n(570140);
let o = null,
    a = null;
function s(e) {
    let { widgets: t } = e;
    o = t;
}
function l() {
    o = null;
}
function c(e) {
    let { widgets: t } = e;
    a = t;
}
function u() {
    null !== a && ((o = a), (a = null));
}
function d() {
    a = null;
}
class f extends r.ZP.Store {
    getOverrideWidgets() {
        return o;
    }
    getPendingWidgets() {
        return a;
    }
    hasPendingChanges() {
        return null !== a;
    }
}
let _ = new f(i.Z, {
    WIDGET_OVERRIDE_SET: s,
    WIDGET_OVERRIDE_CLEAR: l,
    WIDGET_PENDING_SET: c,
    WIDGET_PENDING_SAVE: u,
    WIDGET_PENDING_CLEAR: d,
});
