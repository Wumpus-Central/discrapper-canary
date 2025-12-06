n.d(t, {
    D: () => o,
    _: () => l,
}),
    n(415506);
var a = n(54381),
    i = n(473749);
let r = (0, i.createContext)(null);
function l(e) {
    let { state: t, children: n } = e;
    return (0, a.jsx)(r.Provider, {
        value: t,
        children: n,
    });
}
function o() {
    let e = (0, i.useContext)(r);
    if (null === e) throw Error("useGameProfile must be used within a GameProfileContext");
    return e;
}
