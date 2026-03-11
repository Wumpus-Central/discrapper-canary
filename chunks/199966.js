n.d(t, { _: () => l, x: () => s });
var i = n(64700);
let s = i.createContext(void 0);
function l() {
    let e = i.useContext(s);
    if (null == e) throw Error("useSettingsV2Context must be used within a SettingsV2Provider");
    return e;
}
