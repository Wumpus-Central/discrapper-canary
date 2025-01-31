n.d(t, { Z: () => p });
var i,
    r = n(442837),
    a = n(570140),
    s = n(585483),
    o = n(981631);
function l(e, t, n) {
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
let u = null,
    c = 0;
function d(e) {
    let { contextMenu: t } = e;
    c++, (u = t);
}
function f() {
    u = null;
}
class _ extends (i = r.ZP.Store) {
    isOpen() {
        return null != u;
    }
    get version() {
        return c;
    }
    getContextMenu() {
        return u;
    }
    close() {
        return !!this.isOpen() && (s.S.dispatch(o.CkL.CONTEXT_MENU_CLOSE), !0);
    }
}
l(_, 'displayName', 'ContextMenuStore');
let p = new _(a.Z, {
    CONTEXT_MENU_OPEN: d,
    LAYER_PUSH: f,
    CONTEXT_MENU_CLOSE: f,
    OVERLAY_SET_INPUT_LOCKED: f,
    OVERLAY_DEACTIVATE_ALL_REGIONS: f
});
