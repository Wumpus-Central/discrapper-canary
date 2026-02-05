"use strict";
n.d(t, { _: () => a, x: () => i });
var r = n(64700);
let i = r.createContext(void 0);
function a() {
    let e = r.useContext(i);
    if (null == e) throw Error("useSettingsV2Context must be used within a SettingsV2Provider");
    return e;
}
