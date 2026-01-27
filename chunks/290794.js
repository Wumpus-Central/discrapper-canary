n.d(t, {
    Tu: () => c,
    hd: () => o,
    y0: () => a,
    y5: () => s,
}),
    n(65821);
var r = n(627968),
    i = n(64700);
let l = i.createContext(void 0);

function a() {
    let e = i.useContext(l);
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
    return (0, r.jsx)(l.Provider, {
        value: s,
        children: t,
    });
}

function o(e) {
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
            messageId: e.id,
        }),
        [e.id, t],
    );
}
