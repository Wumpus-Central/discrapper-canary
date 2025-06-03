r.d(t, {
    P: () => o,
    W: () => A
}),
    r(415506);
var n = r(255367),
    i = r(73800),
    a = r(828762);
let l = i.createContext(void 0);
function o() {
    let e = i.useContext(l);
    if (null == e) throw Error('No GuildProductAttachmentManagerContextProvider found');
    return e;
}
function A(e) {
    var { children: t, guildId: r } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['children', 'guildId']);
    let o = (0, a.Z)(r, i);
    return (0, n.jsx)(l.Provider, {
        value: o,
        children: t
    });
}
