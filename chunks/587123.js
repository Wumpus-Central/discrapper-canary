A.d(t, {
    P: () => i,
    W: () => o,
}),
    A(415506);
var r = A(951288),
    n = A(647438),
    a = A(828762);
let l = n.createContext(void 0);
function i() {
    let e = n.useContext(l);
    if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
    return e;
}
function o(e) {
    var { children: t, guildId: A } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var A,
                r,
                n = (function (e, t) {
                    if (null == e) return {};
                    var A,
                        r,
                        n = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (A = a[r]), t.indexOf(A) >= 0 || (n[A] = e[A]);
                    return n;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (A = a[r]),
                        !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (n[A] = e[A]);
            }
            return n;
        })(e, ["children", "guildId"]);
    let i = (0, a.Z)(A, n);
    return (0, r.jsx)(l.Provider, {
        value: i,
        children: t,
    });
}
