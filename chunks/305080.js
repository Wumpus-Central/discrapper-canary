i.d(t, { D: () => l, c: () => a });
var n = i(64700);
let l = n.createContext(void 0);
function a() {
    let e = n.useContext(l);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
