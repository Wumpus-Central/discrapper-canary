n.d(t, { N: () => i, X: () => s });
var l = n(477900),
    a = n(582128);
let r = a.createContext(null);
function s() {
    let e = a.useContext(r);
    if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
    return e;
}
function i(e) {
    let { children: t, ...n } = e;
    return (0, l.jsx)(r.Provider, { value: n, children: t });
}
