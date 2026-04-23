n.d(t, { Tu: () => d, hd: () => o, y0: () => s, y5: () => r });
var i = n(627968),
    l = n(64700);
let a = l.createContext(void 0);
function s() {
    let e = l.useContext(a);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}
function r(e) {
    let { children: t, message: n, poll: s } = e,
        r = l.useMemo(() => ({ message: n, poll: s }), [n, s]);
    return (0, i.jsx)(a.Provider, { value: r, children: t });
}
function o(e) {
    return (function () {
        let { poll: e } = s();
        return e.resources;
    })().styles[e];
}
function d() {
    let { message: e } = s(),
        t = e.getChannelId();
    return l.useMemo(() => ({ channelId: t, messageId: e.id }), [e.id, t]);
}
