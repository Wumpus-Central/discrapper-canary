"use strict";
n.d(t, { $Y: () => f, Cs: () => p, Iz: () => u, Oz: () => o, WA: () => c, jG: () => _, kP: () => l, os: () => d });
var r = n(353640),
    i = n(499867),
    s = n(932607);
let a = (0, r.v)(
    (0, i.Zr)(
        (e) => ({
            channelDismissTimestamps: {},
            userDismissTimestamps: {},
            globalDismissTimestamp: null,
            queuedWarning: !1,
        }),
        { name: "shared-spaces-warning-storage", storage: (0, i.KU)(() => s.A) },
    ),
);
function o(e) {
    return a.getState().channelDismissTimestamps[e];
}
function l(e) {
    return a.getState().userDismissTimestamps[e];
}
function u() {
    return a.getState().globalDismissTimestamp;
}
function c() {
    return a.getState().queuedWarning;
}
function d() {
    a.setState({ queuedWarning: !1 });
}
function _(e) {
    a.setState((t) => ({ channelDismissTimestamps: { ...t.channelDismissTimestamps, [e]: Date.now() } }));
}
function f(e) {
    a.setState((t) => ({
        userDismissTimestamps: { ...t.userDismissTimestamps, [e]: Date.now() },
        globalDismissTimestamp: Date.now(),
    }));
}
function p(e) {
    let t = Array.from(e).reduce((e, t) => ((e[t] = Date.now()), e), {});
    a.setState((e) => ({
        userDismissTimestamps: { ...e.userDismissTimestamps, ...t },
        globalDismissTimestamp: Date.now(),
    }));
}
