n.d(t, {
    Iu: () => s,
    OS: () => o,
    g6: () => u,
    v3: () => l
});
var i = n(15729),
    r = n(877124);
let a = (0, i.U)(
    (0, r.tJ)(
        (e) => ({
            channelDismissTimestamps: {},
            queuedWarning: !1
        }),
        {
            name: 'shared-spaces-warning-storage',
            storage: (0, r.FL)(() => localStorage)
        }
    )
);
function s(e) {
    return a.getState().channelDismissTimestamps[e];
}
function o() {
    return a.getState().queuedWarning;
}
function l() {
    a.setState({ queuedWarning: !1 });
}
function u(e) {
    a.setState((t) => ({
        channelDismissTimestamps: {
            ...t.channelDismissTimestamps,
            [e]: Date.now()
        }
    }));
}
