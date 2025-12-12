n.d(t, {
    I1: () => _,
    YJ: () => o,
});
var r = n(886649);
let i = "_sentryScope",
    a = "_sentryIsolationScope";
function o(e, t, n) {
    e && ((0, r.xp)(e, a, n), (0, r.xp)(e, i, t));
}
function _(e) {
    return {
        scope: e[i],
        isolationScope: e[a],
    };
}
