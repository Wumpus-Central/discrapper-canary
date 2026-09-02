n.d(t, { Tu: () => u, hd: () => o, y0: () => s, y5: () => a });
var l = n(477900),
    i = n(582128);
let r = i.createContext(void 0);
function s() {
    let e = i.useContext(r);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}
function a(e) {
    let { children: t, message: n, poll: s } = e,
        a = i.useMemo(() => ({ message: n, poll: s }), [n, s]);
    return (0, l.jsx)(r.Provider, { value: a, children: t });
}
function o(e) {
    return (function () {
        let { poll: e } = s();
        return e.resources;
    })().styles[e];
}
function u() {
    let { message: e } = s(),
        t = e.getChannelId();
    return i.useMemo(() => ({ channelId: t, messageId: e.id }), [e.id, t]);
}
