r.d(t, {
    P: () => l,
    W: () => i
}),
    r(411104);
var n = r(200651),
    A = r(192379),
    a = r(828762);
let o = A.createContext(void 0);
function l() {
    let e = A.useContext(o);
    if (null == e) throw Error('No GuildProductAttachmentManagerContextProvider found');
    return e;
}
function i(e) {
    var { children: t, guildId: r } = e,
        A = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                A = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        A = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (A[r] = e[r]);
                    return A;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (A[r] = e[r]);
            }
            return A;
        })(e, ['children', 'guildId']);
    let l = (0, a.Z)(r, A);
    return (0, n.jsx)(o.Provider, {
        value: l,
        children: t
    });
}
