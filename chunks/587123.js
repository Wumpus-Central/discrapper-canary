r.d(t, {
    P: () => o,
    W: () => i
}),
    r(415506);
var n = r(255367),
    A = r(73800),
    a = r(828762);
let l = A.createContext(void 0);
function o() {
    let e = A.useContext(l);
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
    let o = (0, a.Z)(r, A);
    return (0, n.jsx)(l.Provider, {
        value: o,
        children: t
    });
}
