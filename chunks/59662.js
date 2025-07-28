(n.d(t, {
    j: () => i,
    t: () => o
}),
    n(415506));
var a = n(73800);
let i = a.createContext(void 0);
function o() {
    let e = a.useContext(i);
    if (null == e) throw Error('useSettingsV2Context must be used within a SettingsV2Provider');
    return e;
}
