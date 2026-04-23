n.d(t, { Z: () => l, h: () => s });
var i = n(64700);
let s = i.createContext(null);
function l() {
    let e = i.useContext(s);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
