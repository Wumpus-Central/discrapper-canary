n.d(t, {
    $B: () => s,
    GF: () => l,
    XL: () => o,
    pE: () => c
}),
    n(411104);
var r = n(200651),
    i = n(192379);
let a = i.createContext(void 0);
function l() {
    let e = i.useContext(a);
    if (null == e) throw Error('No PollContextProvider found');
    return e;
}
function o(e) {
    let { children: t, message: n, poll: l } = e,
        o = i.useMemo(
            () => ({
                message: n,
                poll: l
            }),
            [n, l]
        );
    return (0, r.jsx)(a.Provider, {
        value: o,
        children: t
    });
}
function s(e) {
    return (function () {
        let { poll: e } = l();
        return e.resources;
    })().styles[e];
}
function c() {
    let { message: e } = l(),
        t = e.getChannelId();
    return i.useMemo(
        () => ({
            channelId: t,
            messageId: e.id
        }),
        [e.id, t]
    );
}
