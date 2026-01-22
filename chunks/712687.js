n.d(t, {
    A: () => _,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(203982),
    o = n(652215);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = null,
    u = 0;

function d(e) {
    let { contextMenu: t } = e;
    u++, (c = t);
}

function f() {
    c = null;
}
class p extends (r = i.Ay.Store) {
    isOpen() {
        return null != c;
    }
    get version() {
        return u;
    }
    getContextMenu() {
        return c;
    }
    close() {
        return !!this.isOpen() && (s._.dispatch(o.jej.CONTEXT_MENU_CLOSE), !0);
    }
}
l(p, "displayName", "ContextMenuStore");
let _ = new p(a.h, {
    CONTEXT_MENU_OPEN: d,
    LAYER_PUSH: f,
    CONTEXT_MENU_CLOSE: f,
    OVERLAY_SET_INPUT_LOCKED: f,
    OVERLAY_DEACTIVATE_ALL_REGIONS: f,
});
