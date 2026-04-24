n.d(t, { Tu: () => c, hd: () => o, y0: () => r, y5: () => s });
var i = n(627968),
    l = n(64700);
let a = l.createContext(void 0);
function r() {
    let e = l.useContext(a);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}
function s(e) {
    let { children: t, message: n, poll: r } = e,
        s = l.useMemo(() => ({ message: n, poll: r }), [n, r]);
    return (0, i.jsx)(a.Provider, { value: s, children: t });
}
function o(e) {
    return (function () {
        let { poll: e } = r();
        return e.resources;
    })().styles[e];
}
function c() {
    let { message: e } = r(),
        t = e.getChannelId();
    return l.useMemo(() => ({ channelId: t, messageId: e.id }), [e.id, t]);
}
