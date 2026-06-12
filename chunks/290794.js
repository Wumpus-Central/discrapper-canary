n.d(t, { Tu: () => d, hd: () => o, y0: () => r, y5: () => a });
var i = n(627968),
    l = n(64700);
let s = l.createContext(void 0);
function r() {
    let e = l.useContext(s);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}
function a(e) {
    let { children: t, message: n, poll: r } = e,
        a = l.useMemo(() => ({ message: n, poll: r }), [n, r]);
    return (0, i.jsx)(s.Provider, { value: a, children: t });
}
function o(e) {
    return (function () {
        let { poll: e } = r();
        return e.resources;
    })().styles[e];
}
function d() {
    let { message: e } = r(),
        t = e.getChannelId();
    return l.useMemo(() => ({ channelId: t, messageId: e.id }), [e.id, t]);
}
