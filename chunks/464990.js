t.d(e, { R: () => s, Z: () => l });
var n = t(627968),
    a = t(64700),
    r = t(158363);
let i = a.createContext(void 0);
function l() {
    let A = a.useContext(i);
    if (null == A) throw Error("No GuildProductAttachmentManagerContextProvider found");
    return A;
}
function s(A) {
    let { children: e, guildId: t, ...a } = A,
        l = (0, r.A)(t, a);
    return (0, n.jsx)(i.Provider, { value: l, children: e });
}
