n.d(t, { Z: () => i, h: () => s });
var a = n(64700);
let s = a.createContext(null);
function i() {
    let e = a.useContext(s);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
