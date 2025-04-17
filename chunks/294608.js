n.d(t, {
    $B: () => s,
    GF: () => a,
    XL: () => o,
    pE: () => c
}),
    n(415506);
var r = n(200651),
    i = n(192379);
let l = i.createContext(void 0);
function a() {
    let e = i.useContext(l);
    if (null == e) throw Error('No PollContextProvider found');
    return e;
}
function o(e) {
    let { children: t, message: n, poll: a } = e,
        o = i.useMemo(
            () => ({
                message: n,
                poll: a
            }),
            [n, a]
        );
    return (0, r.jsx)(l.Provider, {
        value: o,
        children: t
    });
}
function s(e) {
    return (function () {
        let { poll: e } = a();
        return e.resources;
    })().styles[e];
}
function c() {
    let { message: e } = a(),
        t = e.getChannelId();
    return i.useMemo(
        () => ({
            channelId: t,
            messageId: e.id
        }),
        [e.id, t]
    );
}
