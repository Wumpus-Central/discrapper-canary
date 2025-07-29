a.d(t, { Z: () => s });
var n = a(442837),
    r = a(570140);
let l = null;
class i extends n.ZP.Store {
    getOverrideWidgets() {
        return l;
    }
    setOverrideWidgets(e) {
        ((l = e), this.emitChange());
    }
    clearOverrides() {
        ((l = null), this.emitChange());
    }
}
let s = new i(r.Z, {});
