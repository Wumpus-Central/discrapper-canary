r.d(n, {
    Gc: function () {
        return l;
    },
    ol: function () {
        return u;
    },
    q3: function () {
        return s;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(981631);
let s = a.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: o.dG4,
    hasValue: void 0,
    setHasValue: o.dG4
});
function l() {
    return a.useContext(s);
}
function u(e) {
    let { children: n, ...r } = e;
    return (0, i.jsx)(s.Provider, {
        value: r,
        children: n
    });
}
