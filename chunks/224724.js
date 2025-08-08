n.d(t, { Z: () => _ });
var r = n(442837),
    i = n(570140);
let o = null,
    a = !1;
function s(e) {
    let { widgets: t } = e;
    o = t;
}
function l() {
    o = null;
}
function c(e) {
    a = !0;
}
function u(e) {
    (a = !1), null !== o && (o = null);
}
function d(e) {
    a = !1;
}
class f extends r.ZP.Store {
    getPendingWidgets() {
        return o;
    }
    hasPendingChanges() {
        return null !== o;
    }
    get isSubmitting() {
        return a;
    }
}
let _ = new f(i.Z, {
    WIDGET_PENDING_SET: s,
    WIDGET_PENDING_SAVE_START: c,
    WIDGET_PENDING_SAVE_SUCCESS: u,
    WIDGET_PENDING_SAVE_FAILURE: d,
    WIDGET_PENDING_CLEAR: l,
});
