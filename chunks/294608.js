n.d(t, {
    $B: () => c,
    GF: () => a,
    XL: () => s,
    pE: () => u,
}),
    n(415506);
var r = n(255367),
    i = n(73800);
let o = i.createContext(void 0);
function a() {
    let e = i.useContext(o);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}
function s(e) {
    let { children: t, message: n, poll: a } = e,
        s = i.useMemo(
            () => ({
                message: n,
                poll: a,
            }),
            [n, a],
        );
    return (0, r.jsx)(o.Provider, {
        value: s,
        children: t,
    });
}
function l() {
    let { poll: e } = a();
    return e.resources;
}
function c(e) {
    return l().styles[e];
}
function u() {
    let { message: e } = a(),
        t = e.getChannelId();
    return i.useMemo(
        () => ({
            channelId: t,
            messageId: e.id,
        }),
        [e.id, t],
    );
}
