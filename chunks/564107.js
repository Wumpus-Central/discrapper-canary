n.d(t, {
    N: () => c,
    X: () => l,
}),
    n(65821);
var r = n(627968),
    i = n(64700);

function a(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = s(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let o = i.createContext(null);

function l() {
    let e = i.useContext(o);
    if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
    return e;
}

function c(e) {
    let { children: t } = e,
        n = a(e, ["children"]);
    return (0, r.jsx)(o.Provider, {
        value: n,
        children: t,
    });
}
