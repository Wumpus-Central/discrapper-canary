n.d(t, { $Y: () => A, Cs: () => h, DY: () => T, WA: () => u, a0: () => p, jG: () => E, oE: () => I, os: () => _ });
var i = n(196765),
    r = n(537812),
    a = n(932607),
    s = n(927813);
let l = 3 * s.A.Millis.DAY,
    o = 2 * s.A.Millis.DAY,
    d = +s.A.Millis.HOUR,
    c = (0, i.v)(
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
function u() {
    return c.getState().queuedWarning;
}
function _() {
    c.setState({ queuedWarning: !1 });
}
function E(e) {
    c.setState((t) => ({ channelDismissTimestamps: { ...t.channelDismissTimestamps, [e]: Date.now() } }));
}
function A(e) {
    c.setState((t) => ({
        userDismissTimestamps: { ...t.userDismissTimestamps, [e]: Date.now() },
        globalDismissTimestamp: Date.now(),
    }));
}
function h(e) {
    let t = Array.from(e).reduce((e, t) => ((e[t] = Date.now()), e), {});
    c.setState((e) => ({
        userDismissTimestamps: { ...e.userDismissTimestamps, ...t },
        globalDismissTimestamp: Date.now(),
    }));
}
function f() {
    return (c.getState().globalDismissTimestamp ?? 0) > Date.now() - d;
}
function I(e) {
    return f() || Array.from(e).every((e) => p(e, !0));
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!(!t && f()) || (c.getState().userDismissTimestamps[e] ?? 0) > Date.now() - o;
}
function T(e) {
    return (c.getState().channelDismissTimestamps[e] ?? 0) > Date.now() - l;
}
