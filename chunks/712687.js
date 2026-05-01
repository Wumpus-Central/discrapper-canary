n.d(t, { A: () => _ });
var i = n(17928),
    a = n(228366),
    r = n(625494),
    s = n(652215);
let l = null,
    o = 0;
function d() {
    l = null;
}
class c extends i.Ay.Store {
    static displayName = "ContextMenuStore";
    isOpen() {
        return null != l;
    }
    get version() {
        return o;
    }
    getContextMenu() {
        return l;
    }
    close() {
        return !!this.isOpen() && (r._.dispatch(s.jej.CONTEXT_MENU_CLOSE), !0);
    }
}
let _ = new c(a.h, {
    CONTEXT_MENU_OPEN: function (e) {
        let { contextMenu: t } = e;
        o++, (l = t);
    },
    LAYER_PUSH: d,
    CONTEXT_MENU_CLOSE: d,
    OVERLAY_SET_INPUT_LOCKED: d,
    OVERLAY_DEACTIVATE_ALL_REGIONS: d,
});
