"use strict";
n.d(t, { $Y: () => h, Cs: () => f, Iz: () => u, Oz: () => o, WA: () => c, jG: () => _, kP: () => l, os: () => d });
var i = n(353640),
    r = n(499867),
    s = n(932607);
let a = (0, i.v)(
    (0, r.Zr)(
        (e) => ({
            channelDismissTimestamps: {},
            userDismissTimestamps: {},
            globalDismissTimestamp: null,
            queuedWarning: !1,
        }),
        { name: "shared-spaces-warning-storage", storage: (0, r.KU)(() => s.A) },
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
function h(e) {
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
