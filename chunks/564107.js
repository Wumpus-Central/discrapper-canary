n.d(t, { N: () => s, X: () => i });
var l = n(477900),
    r = n(582128);
let a = r.createContext(null);
function i() {
    let e = r.useContext(a);
    if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
    return e;
}
function s(e) {
    let { children: t, ...n } = e;
    return (0, l.jsx)(a.Provider, { value: n, children: t });
}
