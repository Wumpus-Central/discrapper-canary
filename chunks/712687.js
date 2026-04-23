n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    a = n(625494),
    s = n(652215);
let _ = null,
    l = 0;
function o() {
    _ = null;
}
class E extends i.Ay.Store {
    static displayName = "ContextMenuStore";
    isOpen() {
        return null != _;
    }
    get version() {
        return l;
    }
    getContextMenu() {
        return _;
    }
    close() {
        return !!this.isOpen() && (a._.dispatch(s.jej.CONTEXT_MENU_CLOSE), !0);
    }
}
let d = new E(r.h, {
    CONTEXT_MENU_OPEN: function (e) {
        let { contextMenu: t } = e;
        l++, (_ = t);
    },
    LAYER_PUSH: o,
    CONTEXT_MENU_CLOSE: o,
    OVERLAY_SET_INPUT_LOCKED: o,
    OVERLAY_DEACTIVATE_ALL_REGIONS: o,
});
