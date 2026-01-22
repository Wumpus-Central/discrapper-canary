n.d(t, {
    Z: () => i,
    h: () => l,
}),
    n(65821);
var a = n(64700);
let l = a.createContext(null);
function i() {
    let e = a.useContext(l);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
