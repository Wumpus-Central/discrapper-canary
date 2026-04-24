"use strict";
n.d(t, { E9: () => o, jM: () => c });
var a = n(627968),
    i = n(64700),
    l = n(812729),
    r = n.n(l);
let s = i.createContext({});
function c() {
    return i.useContext(s);
}
function o(e) {
    let { newValue: t, children: n } = e,
        l = c(),
        o = i.useMemo(() => {
            let e = { ...l, ...t };
            return r()(l, e) ? (l ?? e) : e;
        }, [l, t]);
    return (0, a.jsx)(s.Provider, { value: o, children: n });
}
