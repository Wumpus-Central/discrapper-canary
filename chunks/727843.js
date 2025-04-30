n.d(t, {
    I: () => a,
    N: () => s
}),
    n(415506);
var r = n(200651),
    i = n(192379);
let l = i.createContext(void 0);
function s() {
    let e = i.useContext(l);
    if (null == e) throw Error('No edit state; are you missing an <EditStateContextProvider />?');
    return e;
}
function a(e) {
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
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['children']);
    return (0, r.jsx)(l.Provider, {
        value: n,
        children: t
    });
}
