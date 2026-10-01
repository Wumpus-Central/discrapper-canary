r.d(t, { _: () => a, x: () => i });
var n = r(582128);
let i = n.createContext(void 0);
function a() {
    let e = n.useContext(i);
    if (null == e) throw Error("useSettingsV2Context must be used within a SettingsV2Provider");
    return e;
}
