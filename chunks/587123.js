A.d(t, {
    P: () => i,
    W: () => o,
}),
    A(415506);
var n = A(54381),
    r = A(473749),
    a = A(828762);
let l = r.createContext(void 0);
function i() {
    let e = r.useContext(l);
    if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
    return e;
}
function o(e) {
    var { children: t, guildId: A } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var A,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var A,
                        n,
                        r = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (A = a[n]), t.indexOf(A) >= 0 || (r[A] = e[A]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (A = a[n]),
                        !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A]);
            }
            return r;
        })(e, ["children", "guildId"]);
    let i = (0, a.Z)(A, r);
    return (0, n.jsx)(l.Provider, {
        value: i,
        children: t,
    });
}
