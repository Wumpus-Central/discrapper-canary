t.d(n, { Ay: () => c, gj: () => g, iW: () => f });
var a = t(17928),
    l = t(696451),
    r = t(927813);
let i = 14 * r.A.Millis.DAY,
    s = 8 * r.A.Millis.DAY;
function o(e, n, t) {
    if (null == e) return !1;
    let a = Date.parse(e);
    return !isNaN(a) && t - a <= n;
}
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.winningWeek, i, n) ? e : null;
}
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.currentLeaderWeek, s, n) ? e : null;
}
function c(e, n) {
    return (0, a.bG)([l.Ay], () => (null != e ? d(l.Ay.getMember(e, n)?.gamingLeaderboardData) : null), [e, n]);
}
function f(e, n) {
    return (0, a.bG)([l.Ay], () => (null != e ? u(l.Ay.getMember(e, n)?.gamingLeaderboardData) : null), [e, n]);
}
function g(e, n) {
    return (0, a.bG)(
        [l.Ay],
        () => {
            if (null == e) return !1;
            let t = l.Ay.getMember(e, n)?.gamingLeaderboardData;
            return null != d(t) || null != u(t);
        },
        [e, n],
    );
}
