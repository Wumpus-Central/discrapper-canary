n.d(t, {
    $B: () => c,
    GF: () => o,
    XL: () => s,
    pE: () => u,
}),
    n(415506);
var r = n(54381),
    i = n(473749);
let a = i.createContext(void 0);
function o() {
    let e = i.useContext(a);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}
function s(e) {
    let { children: t, message: n, poll: o } = e,
        s = i.useMemo(
            () => ({
                message: n,
                poll: o,
            }),
            [n, o],
        );
    return (0, r.jsx)(a.Provider, {
        value: s,
        children: t,
    });
}
function l() {
    let { poll: e } = o();
    return e.resources;
}
function c(e) {
    return l().styles[e];
}
function u() {
    let { message: e } = o(),
        t = e.getChannelId();
    return i.useMemo(
        () => ({
            channelId: t,
            messageId: e.id,
        }),
        [e.id, t],
    );
}
