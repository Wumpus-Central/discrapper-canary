n.d(t, { N: () => s, X: () => i });
var a = n(627968),
    l = n(64700);
let r = l.createContext(null);
function i() {
    let e = l.useContext(r);
    if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
    return e;
}
function s(e) {
    let { children: t, ...n } = e;
    return (0, a.jsx)(r.Provider, { value: n, children: t });
}
