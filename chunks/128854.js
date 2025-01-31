l.d(n, {
    F: () => s,
    c: () => a
}),
    l(411104);
var t = l(200651),
    i = l(192379);
let r = i.createContext(null);
function a() {
    let e = i.useContext(r);
    if (null == e) throw Error('Could not find context for useMessageAccessoriesComponentContext.');
    return e;
}
function s(e) {
    let { children: n, ...l } = e;
    return (0, t.jsx)(r.Provider, {
        value: l,
        children: n
    });
}
