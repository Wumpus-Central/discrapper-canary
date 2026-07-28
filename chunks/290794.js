n.d(t, { Tu: () => d, hd: () => o, y0: () => s, y5: () => a });
var i = n(477900),
    l = n(582128);
let r = l.createContext(void 0);
function s() {
    let e = l.useContext(r);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}
function a(e) {
    let { children: t, message: n, poll: s } = e,
        a = l.useMemo(() => ({ message: n, poll: s }), [n, s]);
    return (0, i.jsx)(r.Provider, { value: a, children: t });
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
