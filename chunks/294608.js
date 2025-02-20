n.d(t, {
    $B: () => s,
    GF: () => o,
    XL: () => l,
    pE: () => c
}),
    n(411104);
var r = n(200651),
    i = n(192379);
let a = i.createContext(void 0);
function o() {
    let e = i.useContext(a);
    if (null == e) throw Error('No PollContextProvider found');
    return e;
}
function l(e) {
    let { children: t, message: n, poll: o } = e,
        l = i.useMemo(
            () => ({
                message: n,
                poll: o
            }),
            [n, o]
        );
    return (0, r.jsx)(a.Provider, {
        value: l,
        children: t
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
            messageId: e.id
        }),
        [e.id, t]
    );
}
