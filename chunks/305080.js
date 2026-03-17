n.d(t, { D: () => l, c: () => i });
var a = n(64700);
let l = a.createContext(void 0);
function i() {
    let e = a.useContext(l);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
