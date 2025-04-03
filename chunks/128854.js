r.d(t, {
    F: () => a,
    c: () => o
}),
    r(411104);
var n = r(200651),
    l = r(192379);
let i = l.createContext(null);
function o() {
    let e = l.useContext(i);
    if (null == e) throw Error('Could not find context for useMessageAccessoriesComponentContext.');
    return e;
}
function a(e) {
    var { children: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ['children']);
    return (0, n.jsx)(i.Provider, {
        value: r,
        children: t
    });
}
