n.d(t, { _: () => s, x: () => l });
var i = n(582128);
let l = i.createContext(void 0);
function s() {
    let e = i.useContext(l);
    if (null == e) throw Error("useSettingsV2Context must be used within a SettingsV2Provider");
    return e;
}
