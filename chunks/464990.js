t.d(e, { R: () => s, Z: () => i });
var a = t(627968),
    n = t(64700),
    r = t(158363);
let l = n.createContext(void 0);
function i() {
    let A = n.useContext(l);
    if (null == A) throw Error("No GuildProductAttachmentManagerContextProvider found");
    return A;
}
function s(A) {
    let { children: e, guildId: t, ...n } = A,
        i = (0, r.A)(t, n);
    return (0, a.jsx)(l.Provider, { value: i, children: e });
}
