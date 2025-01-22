var i,
    a = r(442837),
    o = r(570140),
    s = r(585483),
    l = r(981631);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = null,
    d = 0;
function f(e) {
    let { contextMenu: n } = e;
    d++, (c = n);
}
function p() {
    c = null;
}
class h extends (i = a.ZP.Store) {
    isOpen() {
        return null != c;
    }
    get version() {
        return d;
    }
    getContextMenu() {
        return c;
    }
    close() {
        return !!this.isOpen() && (s.S.dispatch(l.CkL.CONTEXT_MENU_CLOSE), !0);
    }
}
u(h, 'displayName', 'ContextMenuStore'),
    (n.Z = new h(o.Z, {
        CONTEXT_MENU_OPEN: f,
        LAYER_PUSH: p,
        CONTEXT_MENU_CLOSE: p,
        OVERLAY_SET_INPUT_LOCKED: p,
        OVERLAY_DEACTIVATE_ALL_REGIONS: p
    }));
