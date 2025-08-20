A.d(t, {
    P: () => o,
    W: () => i,
}),
    A(415506);
var n = A(951288),
    r = A(647438),
    l = A(828762);
let a = r.createContext(void 0);
function o() {
    let e = r.useContext(a);
    if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
    return e;
}
function i(e) {
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
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (A = l[n]), t.indexOf(A) >= 0 || (r[A] = e[A]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (A = l[n]),
                        !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A]);
            }
            return r;
        })(e, ["children", "guildId"]);
    let o = (0, l.Z)(A, r);
    return (0, n.jsx)(a.Provider, {
        value: o,
        children: t,
    });
}
