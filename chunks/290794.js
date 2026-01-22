n.d(t, {
    Tu: () => u,
    hd: () => c,
    y0: () => s,
    y5: () => o,
}),
    n(65821);
var r = n(627968),
    i = n(64700);
let a = i.createContext(void 0);

function s() {
    let e = i.useContext(a);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}

function o(e) {
    let { children: t, message: n, poll: s } = e,
        o = i.useMemo(
            () => ({
                message: n,
                poll: s,
            }),
            [n, s],
        );
    return (0, r.jsx)(a.Provider, {
        value: o,
        children: t,
    });
}

function l() {
    let { poll: e } = s();
    return e.resources;
}

function c(e) {
    return l().styles[e];
}

function u() {
    let { message: e } = s(),
        t = e.getChannelId();
    return i.useMemo(
        () => ({
            channelId: t,
            messageId: e.id,
        }),
        [e.id, t],
    );
}
