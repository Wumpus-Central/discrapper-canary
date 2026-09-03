n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(625494),
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
        return !!this.isOpen() && (a._.dispatch(s.jej.CONTEXT_MENU_CLOSE), !0);
    }
}
let u = new c(r.h, {
    CONTEXT_MENU_OPEN: function (e) {
        let { contextMenu: t } = e;
        o++, (l = t);
    },
    LAYER_PUSH: d,
    CONTEXT_MENU_CLOSE: d,
    OVERLAY_SET_INPUT_LOCKED: d,
    OVERLAY_DEACTIVATE_ALL_REGIONS: d,
});
