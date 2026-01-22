n.d(t, {
    $: () => a,
    L: () => s,
}),
    n(65821);
var l = n(627968),
    r = n(64700);
let i = (0, r.createContext)(null);
function a(e) {
    let { state: t, children: n } = e;
    return (0, l.jsx)(i.Provider, {
        value: t,
        children: n,
    });
}
function s() {
    let e = (0, r.useContext)(i);
    if (null === e) throw Error("useGameProfile must be used within a GameProfileContext");
    return e;
}
