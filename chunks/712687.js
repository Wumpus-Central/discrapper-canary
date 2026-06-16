"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(625494),
    a = n(652215);
let o = null,
    l = 0;
function u() {
    o = null;
}
class c extends i.Ay.Store {
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
let d = new c(r.h, {
    CONTEXT_MENU_OPEN: function (e) {
        let { contextMenu: t } = e;
        l++, (o = t);
    },
    LAYER_PUSH: u,
    CONTEXT_MENU_CLOSE: u,
    OVERLAY_SET_INPUT_LOCKED: u,
    OVERLAY_DEACTIVATE_ALL_REGIONS: u,
});
