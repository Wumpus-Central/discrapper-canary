t.d(e, {
    P: () => i,
    W: () => o
}),
    t(411104);
var n = t(200651),
    a = t(192379),
    l = t(828762);
let r = a.createContext(void 0);
function i() {
    let A = a.useContext(r);
    if (null == A) throw Error('No GuildProductAttachmentManagerContextProvider found');
    return A;
}
function o(A) {
    let { children: e, guildId: t, ...a } = A,
        i = (0, l.Z)(t, a);
    return (0, n.jsx)(r.Provider, {
        value: i,
        children: e
    });
}
