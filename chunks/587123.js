r.d(t, {
    P: () => l,
    W: () => i
}),
    r(411104);
var A = r(200651),
    n = r(192379),
    o = r(828762);
let a = n.createContext(void 0);
function l() {
    let e = n.useContext(a);
    if (null == e) throw Error('No GuildProductAttachmentManagerContextProvider found');
    return e;
}
function i(e) {
    var { children: t, guildId: r } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var r,
                A,
                n = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        A,
                        n = {},
                        o = Object.keys(e);
                    for (A = 0; A < o.length; A++) (r = o[A]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (A = 0; A < o.length; A++) (r = o[A]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
            }
            return n;
        })(e, ['children', 'guildId']);
    let l = (0, o.Z)(r, n);
    return (0, A.jsx)(a.Provider, {
        value: l,
        children: t
    });
}
