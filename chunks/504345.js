"use strict";
n.d(t, { cK: () => a, hN: () => l, xW: () => o });
var i = n(627968),
    r = n(64700),
    s = n(652215);
let a = r.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: s.tEg,
    hasValue: void 0,
    setHasValue: s.tEg,
});
function o() {
    return r.useContext(a);
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(a.Provider, { "data-migration-pending": !0, value: n, children: t });
}
