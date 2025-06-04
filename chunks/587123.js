n.d(t, {
    P: () => o,
    W: () => i
}),
    n(415506);
var r = n(255367),
    A = n(73800),
    a = n(828762);
let l = A.createContext(void 0);
function o() {
    let e = A.useContext(l);
    if (null == e) throw Error('No GuildProductAttachmentManagerContextProvider found');
    return e;
}
function i(e) {
    var { children: t, guildId: n } = e,
        A = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                A = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        A = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (A[n] = e[n]);
                    return A;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (A[n] = e[n]);
            }
            return A;
        })(e, ['children', 'guildId']);
    let o = (0, a.Z)(n, A);
    return (0, r.jsx)(l.Provider, {
        value: o,
        children: t
    });
}
