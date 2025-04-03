n.d(t, {
    I: () => l,
    N: () => a
}),
    n(411104);
var r = n(200651),
    i = n(192379);
let s = i.createContext(void 0);
function a() {
    let e = i.useContext(s);
    if (null == e) throw Error('No edit state; are you missing an <EditStateContextProvider />?');
    return e;
}
function l(e) {
    var { children: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['children']);
    return (0, r.jsx)(s.Provider, {
        value: n,
        children: t
    });
}
