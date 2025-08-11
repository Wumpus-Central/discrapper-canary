n.d(t, { Z: () => E });
var r = n(392711),
    i = n.n(r),
    o = n(442837),
    a = n(570140),
    s = n(594174),
    l = n(621853);
let c = null,
    u = null,
    d = !1;
function f(e) {
    let { widgets: t } = e;
    if (((c = t), null === u)) {
        let e = s.default.getCurrentUser();
        if (null != e) {
            var n;
            let t = l.Z.getUserProfile(e.id);
            u = null != (n = null == t ? void 0 : t.widgets) ? n : [];
        }
    }
}
function _() {
    (c = null), (u = null);
}
function p(e) {
    d = !0;
}
function h(e) {
    (d = !1), null !== c && ((u = c), (c = null));
}
function m(e) {
    d = !1;
}
class g extends o.ZP.Store {
    getPendingWidgets() {
        return c;
    }
    hasPendingChanges() {
        return null !== c && (null === u || !i().isEqual(c, u));
    }
    get isSubmitting() {
        return d;
    }
}
let E = new g(a.Z, {
    WIDGET_PENDING_SET: f,
    WIDGET_PENDING_SAVE_START: p,
    WIDGET_PENDING_SAVE_SUCCESS: h,
    WIDGET_PENDING_SAVE_FAILURE: m,
    WIDGET_PENDING_CLEAR: _,
});
