n.d(t, { D: () => a, c: () => i });
var l = n(64700);
let a = l.createContext(void 0);
function i() {
    let e = l.useContext(a);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
