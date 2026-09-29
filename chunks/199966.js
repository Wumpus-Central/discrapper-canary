n.d(t, { _: () => u, x: () => i });
var r = n(582128);
let i = r.createContext(void 0);
function u() {
    let e = r.useContext(i);
    if (null == e) throw Error("useSettingsV2Context must be used within a SettingsV2Provider");
    return e;
}
