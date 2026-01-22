n.d(t, {
    cK: () => l,
    hN: () => u,
    xW: () => c,
});
var r = n(627968),
    i = n(64700),
    a = n(652215);

function s(e, t) {
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
    if (((a = o(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let l = i.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: a.tEg,
    hasValue: void 0,
    setHasValue: a.tEg,
});

function c() {
    return i.useContext(l);
}

function u(e) {
    let { children: t } = e,
        n = s(e, ["children"]);
    return (0, r.jsx)(l.Provider, {
        "data-migration-pending": !0,
        value: n,
        children: t,
    });
}
