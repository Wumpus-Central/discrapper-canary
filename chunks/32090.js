n.d(t, { Ay: () => c, gj: () => g, iW: () => f });
var l = n(17928),
    a = n(696451),
    r = n(927813);
let i = 14 * r.A.Millis.DAY,
    s = 8 * r.A.Millis.DAY;
function o(e, t, n) {
    if (null == e) return !1;
    let l = Date.parse(e);
    return !isNaN(l) && n - l <= t;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.winningWeek, i, t) ? e : null;
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.currentLeaderWeek, s, t) ? e : null;
}
function c(e, t) {
    return (0, l.bG)([a.Ay], () => (null != e ? u(a.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
}
function f(e, t) {
    return (0, l.bG)([a.Ay], () => (null != e ? d(a.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
}
function g(e, t) {
    return (0, l.bG)(
        [a.Ay],
        () => {
            if (null == e) return !1;
            let n = a.Ay.getMember(e, t)?.gamingLeaderboardData;
            return null != u(n) || null != d(n);
        },
        [e, t],
    );
}
