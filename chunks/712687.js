"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    s = n(203982),
    a = n(652215);
let o = null,
    l = 0;
function u() {
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
        return !!this.isOpen() && (s._.dispatch(a.jej.CONTEXT_MENU_CLOSE), !0);
    }
}
let c = new d(i.h, {
    CONTEXT_MENU_OPEN: function (e) {
        let { contextMenu: t } = e;
        l++, (o = t);
    },
    LAYER_PUSH: u,
    CONTEXT_MENU_CLOSE: u,
    OVERLAY_SET_INPUT_LOCKED: u,
    OVERLAY_DEACTIVATE_ALL_REGIONS: u,
});
