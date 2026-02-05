"use strict";
n.d(t, { $Y: () => _, Cs: () => f, Iz: () => l, Oz: () => s, WA: () => u, jG: () => d, kP: () => o, os: () => c });
var r = n(353640),
    i = n(499867);
let a = (0, r.v)(
    (0, i.Zr)(
        (e) => ({
            channelDismissTimestamps: {},
            userDismissTimestamps: {},
            globalDismissTimestamp: null,
            queuedWarning: !1,
        }),
        { name: "shared-spaces-warning-storage", storage: (0, i.KU)(() => localStorage) },
    ),
);
function s(e) {
    return a.getState().channelDismissTimestamps[e];
}
function o(e) {
    return a.getState().userDismissTimestamps[e];
}
function l() {
    return a.getState().globalDismissTimestamp;
}
function u() {
    return a.getState().queuedWarning;
}
function c() {
    a.setState({ queuedWarning: !1 });
}
function d(e) {
    a.setState((t) => ({ channelDismissTimestamps: { ...t.channelDismissTimestamps, [e]: Date.now() } }));
}
function _(e) {
    a.setState((t) => ({
        userDismissTimestamps: { ...t.userDismissTimestamps, [e]: Date.now() },
        globalDismissTimestamp: Date.now(),
    }));
}
function f(e) {
    let t = Array.from(e).reduce((e, t) => ((e[t] = Date.now()), e), {});
    a.setState((e) => ({
        userDismissTimestamps: { ...e.userDismissTimestamps, ...t },
        globalDismissTimestamp: Date.now(),
    }));
}
