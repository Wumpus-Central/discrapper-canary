"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(203982),
    s = n(652215);
let o = null,
    l = 0;
function u(e) {
    let { contextMenu: t } = e;
    l++, (o = t);
}
function c() {
    o = null;
}
class d extends r.Ay.Store {
    static displayName = "ContextMenuStore";
    isOpen() {
        return null != o;
    }
    get version() {
        return l;
    }
    getContextMenu() {
        return o;
    }
    close() {
        return !!this.isOpen() && (a._.dispatch(s.jej.CONTEXT_MENU_CLOSE), !0);
    }
}
let _ = new d(i.h, {
    CONTEXT_MENU_OPEN: u,
    LAYER_PUSH: c,
    CONTEXT_MENU_CLOSE: c,
    OVERLAY_SET_INPUT_LOCKED: c,
    OVERLAY_DEACTIVATE_ALL_REGIONS: c,
});
