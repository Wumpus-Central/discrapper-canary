t.d(n, { Ay: () => c, gj: () => m, iW: () => f });
var l = t(17928),
    a = t(696451),
    r = t(927813);
let i = 14 * r.A.Millis.DAY,
    s = 8 * r.A.Millis.DAY;
function o(e, n, t) {
    if (null == e) return !1;
    let l = Date.parse(e);
    return !isNaN(l) && t - l <= n;
}
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.winningWeek, i, n) ? e : null;
}
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.currentLeaderWeek, s, n) ? e : null;
}
function c(e, n) {
    return (0, l.bG)([a.Ay], () => (null != e ? u(a.Ay.getMember(e, n)?.gamingLeaderboardData) : null), [e, n]);
}
function f(e, n) {
    return (0, l.bG)([a.Ay], () => (null != e ? d(a.Ay.getMember(e, n)?.gamingLeaderboardData) : null), [e, n]);
}
function m(e, n) {
    return (0, l.bG)(
        [a.Ay],
        () => {
            if (null == e) return !1;
            let t = a.Ay.getMember(e, n)?.gamingLeaderboardData;
            return null != u(t) || null != d(t);
        },
        [e, n],
    );
}
