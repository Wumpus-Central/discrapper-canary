n.d(t, {
    $B: () => s,
    GF: () => o,
    XL: () => a,
    pE: () => c,
}),
    n(415506);
var r = n(951288),
    i = n(647438);
let l = i.createContext(void 0);
function o() {
    let e = i.useContext(l);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}
function a(e) {
    let { children: t, message: n, poll: o } = e,
        a = i.useMemo(
            () => ({
                message: n,
                poll: o,
            }),
            [n, o],
        );
    return (0, r.jsx)(l.Provider, {
        value: a,
        children: t,
    });
}
function s(e) {
    return (function () {
        let { poll: e } = o();
        return e.resources;
    })().styles[e];
}
function c() {
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
