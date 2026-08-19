"use strict";
n.d(t, { $Y: () => E, Cs: () => A, Iz: () => d, Oz: () => l, WA: () => c, jG: () => _, kP: () => o, os: () => u });
var i = n(196765),
    r = n(537812),
    a = n(932607);
let s = (0, i.v)(
    (0, r.Zr)(
        (e) => ({
            channelDismissTimestamps: {},
            userDismissTimestamps: {},
            globalDismissTimestamp: null,
            queuedWarning: !1,
        }),
        { name: "shared-spaces-warning-storage", storage: (0, r.KU)(() => a.A) },
    ),
);
function l(e) {
    return s.getState().channelDismissTimestamps[e];
}
function o(e) {
    return s.getState().userDismissTimestamps[e];
}
function d() {
    return s.getState().globalDismissTimestamp;
}
function c() {
    return s.getState().queuedWarning;
}
function u() {
    s.setState({ queuedWarning: !1 });
}
function _(e) {
    s.setState((t) => ({ channelDismissTimestamps: { ...t.channelDismissTimestamps, [e]: Date.now() } }));
}
function E(e) {
    s.setState((t) => ({
        userDismissTimestamps: { ...t.userDismissTimestamps, [e]: Date.now() },
        globalDismissTimestamp: Date.now(),
    }));
}
function A(e) {
    let t = Array.from(e).reduce((e, t) => ((e[t] = Date.now()), e), {});
    s.setState((e) => ({
        userDismissTimestamps: { ...e.userDismissTimestamps, ...t },
        globalDismissTimestamp: Date.now(),
    }));
}
