"use strict";
n.d(t, { cK: () => s, hN: () => l, xW: () => o });
var r = n(627968),
    i = n(64700),
    a = n(652215);
let s = i.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: a.tEg,
    hasValue: void 0,
    setHasValue: a.tEg,
});
function o() {
    return i.useContext(s);
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)(s.Provider, { "data-migration-pending": !0, value: n, children: t });
}
