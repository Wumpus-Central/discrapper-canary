A.d(t, {
    P: function () {
        return l;
    },
    W: function () {
        return o;
    }
}),
    A(411104);
var n = A(200651),
    r = A(192379),
    a = A(828762);
let i = r.createContext(void 0);
function l() {
    let e = r.useContext(i);
    if (null == e) throw Error('No GuildProductAttachmentManagerContextProvider found');
    return e;
}
function o(e) {
    let { children: t, guildId: A, ...r } = e,
        l = (0, a.Z)(A, r);
    return (0, n.jsx)(i.Provider, {
        value: l,
        children: t
    });
}
