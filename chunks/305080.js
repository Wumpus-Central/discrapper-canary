"use strict";
n.d(t, { D: () => l, c: () => a });
var i = n(64700);
let l = i.createContext(void 0);
function a() {
    let e = i.useContext(l);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
